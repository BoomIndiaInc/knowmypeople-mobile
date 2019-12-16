import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { SLIDE_FADE_OPTIONS } from './../../shared/util/component-util';
import { LOGIN_BACKGROUNDS } from './../../shared/util/constant-util';
import { AccountService } from 'src/app/services/auth/account.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

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
    public toastController: ToastController,
    public navController: NavController,
    public formBuilder: FormBuilder,
    public accountService: AccountService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(5), Validators.required])],
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

  doLogin() {
    this.onlineLogin();
  }
  onOpenForgotPassword() {}
  onOpenSignup() {}

  goToHome() {
    this.navController.navigateRoot('/voters');
  }

  onlineLogin() {
    this.loginService.login(this.loginForm.value).then(
      () => {
        this.goToHome();
      },
      async err => {
        // Unable to log in
        this.loginForm.patchValue({
          password: ''
        });
        const toast = await this.toastController.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    );
  }
  offlineLogin() {
    const localStorageUserIdentity = JSON.parse(this.localStorage.retrieve('userIdentity'));
    const sessionStorageUserIdentity = JSON.parse(this.sessionStorage.retrieve('userIdentity'));
    if (localStorageUserIdentity) {
      this.accountService.authenticate(localStorageUserIdentity);
    } else if (sessionStorageUserIdentity) {
      this.accountService.authenticate(sessionStorageUserIdentity);
    }
    this.goToHome();
  }
}
