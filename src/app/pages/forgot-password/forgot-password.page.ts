import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { SLIDE_FADE_OPTIONS, ComponentUtil } from './../../shared/util/component-util';
import { FORGOT_PASSWORD_BACKGROUNDS } from './../../shared/util/constant-util';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss']
})
export class ForgotPasswordPage implements OnInit {
  // Background images on the login page.
  public backgrounds = FORGOT_PASSWORD_BACKGROUNDS;
  public slideOpts = SLIDE_FADE_OPTIONS;

  public forgotPasswordForm: FormGroup;
  // Our translated text strings
  private forgotPasswordErrorString: string;
  private forgotPasswordSuccessString: string;
  private networkError: string;

  constructor(
    public navController: NavController,
    public userService: UserService,
    public toastController: ToastController,
    public translateService: TranslateService,
    public formBuilder: FormBuilder,
    public componentUtil: ComponentUtil
  ) {
    this.forgotPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
    });

    this.translateService.get(['FORGOT_PASSWORD_ERROR', 'FORGOT_PASSWORD_SUCCESS', 'NETWORK_ERROR']).subscribe(values => {
      this.forgotPasswordErrorString = values.FORGOT_PASSWORD_ERROR;
      this.forgotPasswordSuccessString = values.FORGOT_PASSWORD_SUCCESS;
      this.networkError = values.NETWORK_ERROR;
    });
  }
  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  doResetPassword() {

    // Attempt to login in through our User service
    this.userService.forgotPassword(this.forgotPasswordForm.value.email).subscribe(
      async () => {
        this.componentUtil.showToast(this.forgotPasswordSuccessString, { cssClass: 'toast-success'});
        this.forgotPasswordForm.reset();
      },
      async response => {
        // Unable to sign up
        const error = JSON.parse(response.error);
        let displayError = this.forgotPasswordErrorString;
        if (
          error.message === 'error.network'
        ){
          displayError = this.networkError;
        }
        this.componentUtil.showToast(displayError, { cssClass: 'toast-fail' });
      }
    );
  }
}
