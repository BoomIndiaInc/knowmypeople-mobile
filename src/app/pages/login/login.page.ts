import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { SLIDE_FADE_OPTIONS, ComponentUtil } from './../../shared/util/component-util';
import { LOGIN_BACKGROUNDS } from './../../shared/util/constant-util';
import { AccountService } from 'src/app/services/auth/account.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { NavigationExtras } from '@angular/router';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';
import { Page } from 'src/app/interfaces/pages';
import { KmpUserService } from 'src/app/services/kmp/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  // Background images on the login page.
  public backgrounds = LOGIN_BACKGROUNDS;
  public slideOpts = SLIDE_FADE_OPTIONS;

  public loginForm: FormGroup;

  // Our translated text strings
  private loginErrorString: string;
  constructor(
    public translateService: TranslateService,
    public loginService: LoginService,
    public navController: NavController,
    public formBuilder: FormBuilder,
    public accountService: AccountService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private componentUtil: ComponentUtil,
    private resolveService: PropertyResolverService,
    private kmpUserService: KmpUserService
  ) {
    this.loginForm = formBuilder.group({
      username: ['test', Validators.required],
      password: ['test', Validators.compose([Validators.minLength(4), Validators.required])],
      rememberMe: [true, Validators.required]
    });
  }

  ngOnInit() {
    if (this.accountService.isAuthenticated()) {
      this.goToHome();
    }
    this.translateService.get('LOGIN_ERROR').subscribe(value => {
      this.loginErrorString = value;
    });
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  onLogin() {
    this.componentUtil.showLoading(() => {
      this.loginService.login(this.loginForm.value).then(
        () => {
          this.kmpUserService.identity(true).then(kmpUser => {
            this.componentUtil.hideLoading();
            // After the login the language will be changed to
            // the language selected by the user during his registration
            if (kmpUser !== null) {
              this.goToHome();
            } else {
              this.componentUtil.showToast(this.loginErrorString, { cssClass: 'toast-fail', duration: 5000, showCloseButton: true }, true);
              this.componentUtil.userLogout();
            }
          });
        },
        async err => {
          // Unable to log in
          this.loginForm.patchValue({
            password: ''
          });
          this.componentUtil.showToast(this.loginErrorString, { cssClass: 'toast-fail', duration: 5000, showCloseButton: true }, true);
          this.componentUtil.hideLoading();
        }
      );
    });
  }

  goToHome() {
    const defaultMenuId = this.resolveService.getPropertyValue('default-menu-id');
    const menu: Page = this.componentUtil.getMenuById(defaultMenuId);
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     menuId: menu.id
    //   },
    //   queryParamsHandling: 'merge'
    // };
    this.navController.navigateRoot(menu.url);
  }
}
