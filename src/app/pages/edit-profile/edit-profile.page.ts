import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ComponentUtil } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/interfaces/pages';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/auth/account.service';
import { KmpUserService } from 'src/app/services/kmp/user.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';
import { KmpService } from 'src/app/services/kmp/kmp.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss']
})
export class EditProfilePage implements OnInit {
  pageMenu: Page;
  userName: string;
  userType: string;
  userImageUrl: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailId: string;
  userTypes: any = ['BoothAgent'];
  public profileForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private componentUtil: ComponentUtil,
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private accountService: AccountService,
    private kmpUserService: KmpUserService,
    private kmpService: KmpService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private resolverService: PropertyResolverService,
    public formBuilder: FormBuilder,
  ) {
    const menuId = 'edit-profile';
    console.log(menuId);
    if (!!menuId) {
      this.pageMenu = this.componentUtil.getMenuById(menuId);
    }
    this.userName = this.kmpUserService.getUserId();
    this.userType = this.kmpUserService.getUserType();
    this.userImageUrl = this.kmpUserService.getImageUrl();
    this.firstName = this.kmpUserService.getFirstName();
    this.lastName = this.kmpUserService.getLastName();
    this.mobileNumber = this.kmpUserService.getMobileNumber();
    this.emailId = this.kmpUserService.getEmailId();
    this.profileForm = formBuilder.group({
      firstName: [this.firstName],
      lastName: [this.lastName],
      mobileNumber: [this.mobileNumber],
      emailId: [this.emailId],
      userType: [this.userType]
    });
  }

  ngOnInit() {
    this.init();
  }

  init() {
    
  }
  onEdit() {

    this.componentUtil.showLoading(()=> {
      const userIdentity = this.kmpUserService.getUserIdentity();
      let profileFormValues = this.profileForm.getRawValue();
      const finalUserIdentity = {...userIdentity, ...profileFormValues};
      
      this.kmpUserService.save(finalUserIdentity)
      .toPromise()
      .then(response => {
        const user = response.body;
        if (user) {
          this.componentUtil.hideLoading();
          this.componentUtil.showToast('USER_DETAILS_SAVE_SUCCESS', { cssClass: 'toast-success'});
        } else {
          this.componentUtil.hideLoading();
          this.componentUtil.showToast('USER_DETAILS_SAVE_FAIL', { cssClass: 'toast-fail'});

        }
      })
      .catch(err => {
        // error
        this.componentUtil.hideLoading();
        this.componentUtil.showToast('USER_DETAILS_SAVE_FAIL', { cssClass: 'toast-fail'});

      });
    }, 'SAVING_USER_DETAILS');    
  }
}
