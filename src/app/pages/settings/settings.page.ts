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
import { combineLatest, forkJoin } from 'rxjs';
import { KmpService } from 'src/app/services/kmp/kmp.service';
import { map } from 'rxjs/operators';

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

  languages: any = ['en'];
  booths: any = [];
  wards: any = [];
  electionTypes: any = [];
  values$;

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
    private resolverService: PropertyResolverService
  ) {
    const menuId = 'settings';
    console.log(menuId);
    if (!!menuId) {
      this.pageMenu = this.componentUtil.getMenuById(menuId);
    }
  }

  ngOnInit() {
    this.componentUtil.showLoading(() => {
      this.init();
    });
  }
  init() {
    this.userName = this.kmpUserService.getUserId();
    this.userType = this.kmpUserService.getUserType();
    this.userImageUrl = this.accountService.getImageUrl();
    this.userBoothId = this.kmpUserService.getBoothId();
    this.userElectionType = this.kmpUserService.getElectionType();
    this.userWardId = this.localStorage.retrieve('kmpWardId') || this.sessionStorage.retrieve('kmpWardId');
    this.language = this.accountService.getLangKey() || this.resolverService.getPropertyValue('default-lang');
    this.enableAutoSync = this.localStorage.retrieve('enableAutoSync') || this.sessionStorage.retrieve('enableAutoSync');
    this.accountService.getAuthenticationState().subscribe((user: any) => {
      if (user) {
        // this.userAuthenticated = true;
        // this.userAuthorities = user.authorities;
        // this.userName = user.login;
        // this.userEmail = user.email;
        this.userImageUrl = user.imageUrl;
        this.language = user.langKey;
      }
    });

    this.kmpUserService.getAuthenticationState().subscribe((kmpUser: User) => {
      if (kmpUser) {
        this.userName = kmpUser.userId;
        this.userType = kmpUser.agentType;
        // this.userImageUrl = user.imageUrl;
        this.userBoothId = kmpUser.boothId;
        this.userElectionType = kmpUser.electionType;
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
    console.log('electionTypeSelected');
  }

  languageSelected(event) {
    console.log('languageSelected');
  }

  boothSelected(event) {
    console.log('boothSelected');
  }

  wardSelected(event) {
    console.log('wardSelected');
  }

  syncSelected(event){
    console.log('syncSelected');
  }

  syncLocalData(){
    this.componentUtil.showLoading(() => {
      setTimeout(() => {
        this.componentUtil.hideLoading();
        this.componentUtil.showToast(this.translateService.instant('DATA_SUCCESS_UPLOAD'), { cssClass: 'toast-success'})
      }, 3000);
    }, 'SYNCING_DATA');
  }

  editProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.componentUtil.userLogout();
  }
}
