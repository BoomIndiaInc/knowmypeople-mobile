import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { SLIDE_FADE_OPTIONS } from './../../shared/util/component-util';
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

  constructor(
    public navController: NavController,
    public userService: UserService,
    public toastController: ToastController,
    public translateService: TranslateService,
    public formBuilder: FormBuilder
  ) {
    this.signupForm = formBuilder.group({
      login: [''],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      langKey: ['en', Validators.required]
    });

    this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS', 'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe(values => {
      this.signupErrorString = values.SIGNUP_ERROR;
      this.signupSuccessString = values.SIGNUP_SUCCESS;
      this.existingUserError = values.EXISTING_USER_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
    });
  }

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  doSignup() {
    // set login to same as email
    this.signupForm.patchValue({
      login: this.signupForm.value.email
    });
    // Attempt to login in through our User service
    this.userService.signup(this.signupForm.value).subscribe(
      async () => {
        const toast = await this.toastController.create({
          message: this.signupSuccessString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.signupForm.reset();
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
        }
        const toast = await this.toastController.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      }
    );
  }

  onOpenLogin() {}
}
