import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { SLIDE_FADE_OPTIONS, ComponentUtil, MustMatch } from './../../shared/util/component-util';
import { SIGNUP_BACKGROUNDS } from './../../shared/util/constant-util';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  // Background images on the login page.
  public backgrounds = SIGNUP_BACKGROUNDS;
  public slideOpts = SLIDE_FADE_OPTIONS;

  public signupForm: FormGroup;
  // Our translated text strings
  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;
  private networkError: string;

  constructor(
    public navController: NavController,
    public userService: UserService,
    public translateService: TranslateService,
    public formBuilder: FormBuilder,
    public componentUtil: ComponentUtil
  ) {
    this.signupForm = formBuilder.group(
      {
        login: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
        'confirm-password': ['', Validators.compose([Validators.minLength(4), Validators.required])],
        langKey: ['en', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirm-password')
      }
    );

    this.translateService
      .get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR', 'NETWORK_ERROR'])
      .subscribe(values => {
        this.signupErrorString = values.SIGNUP_ERROR;
        this.signupSuccessString = values.SIGNUP_SUCCESS;
        this.existingUserError = values.EXISTING_USER_ERROR;
        this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
        this.networkError = values.NETWORK_ERROR;
      });
  }

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  doSignup() {
    this.componentUtil.showLoading(() => {
      // set login to same as email
      const signupFormValue: any = this.signupForm.value;
      delete signupFormValue['confirm-password'];
      // Attempt to login in through our User service
      this.userService.signup(signupFormValue).subscribe(
        async () => {
          this.componentUtil.showToast(this.signupSuccessString, { cssClass: 'toast-success' }, true);
          this.signupForm.reset();
          this.componentUtil.hideLoading();
        },
        async response => {
          // Unable to sign up
          const error = JSON.parse(response.error);
          let displayError = this.signupErrorString;
          if (response.status === 400 && error.type.includes('already-used')) {
            displayError = this.existingUserError;
          } else if (
            response.status === 400 &&
            error.message === 'error.validation' &&
            error.fieldErrors[0].field === 'password' &&
            error.fieldErrors[0].message === 'Size'
          ) {
            displayError = this.invalidPasswordError;
          } else if (error.message === 'error.network') {
            displayError = this.networkError;
          }
          this.componentUtil.showToast(displayError, { cssClass: 'toast-fail' }, true);
          this.componentUtil.hideLoading();
        }
      );
    }, 'REGISTERING');
  }

  onOpenLogin() {}
}
