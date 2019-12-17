import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ComponentUtil } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/interfaces/pages';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/auth/account.service';
import { KmpUserService } from 'src/app/services/kmp/user.service';
import { User } from 'src/model/user.model';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';
import { forkJoin } from 'rxjs';
import { KmpService } from 'src/app/services/kmp/kmp.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SyncDataService } from 'src/app/services/kmp/sync-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  pageMenu: Page;
  userName: string;
  userType: string;
  userImageUrl: string;
  userBoothId: any;
  userWardId: any;
  userElectionType: any;
  enableAutoSync: any;
  enableOfflineSupport: any;
  language: any;
  nullValue: string = null;
  public settingsForm: FormGroup;

  languages: any = ['en'];
  booths: any = [];
  wards: any = [];
  electionTypes: any = [];

  constructor(
    public navCtrl: NavController,
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
    public syncDataService: SyncDataService
  ) {
    const menuId = 'settings';
    console.log(menuId);
    if (!!menuId) {
      this.pageMenu = this.componentUtil.getMenuById(menuId);
    }
    if (this.resolverService.getPropertyValue('supported-languages')) {
      this.languages = this.resolverService.getPropertyValue('supported-languages');
    }

    this.userName = this.kmpUserService.getUserId();
    this.userType = this.kmpUserService.getUserType();
    this.userImageUrl = this.accountService.getImageUrl();
    this.userBoothId = this.kmpUserService.getBoothId();
    this.userElectionType = this.kmpUserService.getElectionType();
    this.userWardId = this.kmpUserService.getWardId();
    this.language = this.kmpUserService.getLanguage() || this.resolverService.getPropertyValue('default-lang');
    this.enableAutoSync = !!this.kmpUserService.getAutoSync();

    this.settingsForm = formBuilder.group({
      imageUrl: [this.userImageUrl],
      language: [this.language],
      autoSync: [this.enableAutoSync],
      boothId: [this.userBoothId],
      wardId: [this.userWardId],
      electionType: [this.userElectionType]
    });
  }

  ngOnInit() {
    this.componentUtil.showLoading(() => {
      this.init();
    });
  }
  init() {
    this.kmpUserService.getAuthenticationState().subscribe((kmpUser: User) => {
      if (kmpUser) {
        this.userName = kmpUser.userId;
        this.userType = kmpUser.agentType;
        this.userImageUrl = kmpUser.imageUrl;
        this.userBoothId = kmpUser.boothId;
        this.userElectionType = kmpUser.electionType;
        this.userWardId = kmpUser.wardId;
        this.language = kmpUser.language;
        this.enableAutoSync = kmpUser.autoSync;
      }
    });

    forkJoin([this.kmpService.fetchAllBooths(), this.kmpService.fetchAllElectionTypes(), this.kmpService.fetchAllWards()]).subscribe(
      results => {
        this.booths = results[0].body;
        this.electionTypes = results[1].body;
        this.wards = results[2].body;
        this.componentUtil.hideLoading();
      }
    );
  }

  electionTypeSelected(event) {
    console.log('electionType Selected');
    this.updateUserPreference();
  }

  languageSelected(event) {
    console.log('language Selected');
    this.updateUserPreference();
  }

  boothSelected(event) {
    console.log('booth Selected');
    this.updateUserPreference();
  }

  wardSelected(event) {
    console.log('ward Selected');
    this.updateUserPreference();
  }

  syncSelected(event) {
    console.log('sync Selected');
    this.updateUserPreference();
  }

  updateUserPreference() {
    const userIdentity = this.kmpUserService.getUserIdentity();
    const profileFormValues = this.settingsForm.getRawValue();
    const finalUserIdentity = { ...userIdentity, ...profileFormValues };

    this.kmpUserService
      .identityUpdate(finalUserIdentity)
      .then(user => {
        if (user) {
          console.log('User Preference Saved!');
        } else {
          this.componentUtil.showToast('USER_DETAILS_SAVE_FAIL', { cssClass: 'toast-fail' });
        }
      })
      .catch(err => {
        // error
        this.componentUtil.hideLoading();
        this.componentUtil.showToast('USER_DETAILS_SAVE_FAIL', { cssClass: 'toast-fail' });
      });
  }
  syncLocalData() {
    this.componentUtil.showLoading(() => {
      this.syncDataService.syncDataFromLocal().then(isUploaded => {
        if (isUploaded) {
          this.componentUtil.showToast('DATA_SUCCESS_UPLOAD', { cssClass: 'toast-success' });
        }
        this.componentUtil.hideLoading();
      });
    }, 'SYNCING_DATA');
  }

  editProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.componentUtil.showConfirmationAlert(
      'CONFIRM_LOGOUT',
      () => {
        this.componentUtil.showLoading(() => {
          setTimeout(() => {
            this.componentUtil.userLogout();
            this.componentUtil.hideLoading();
          }, 1000);
        }, 'LOGGING_OFF');
      },
      'LOGOUT_TITLE'
    );
  }
}
