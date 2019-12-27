import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  IonContent
} from '@ionic/angular';

// Modals
import { VoterSearchSettingsPage } from '../../pages/modal/voter-search-settings/voter-search-settings.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { ComponentUtil } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/auth/account.service';
import { KmpUserService } from 'src/app/services/kmp/user.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';
import { FormBuilder } from '@angular/forms';
import { SyncDataService } from 'src/app/services/kmp/sync-data.service';
import { VoterService } from 'src/app/services/kmp/voter.service';
import { Voter } from 'src/model/voter.model';
import { Page } from 'src/app/interfaces/pages';
import { CoreUtil } from 'src/app/shared/util/core-util';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.page.html',
  styleUrls: ['./voters.page.scss']
})
export class VotersPage implements OnInit {
  pageMenu: Page;
  @ViewChild(IonInfiniteScroll, { read: true, static: true }) infinite: IonInfiniteScroll;
  @ViewChild(IonContent, { read: true, static: true }) content: IonContent;
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  searchPreference = null;
  voters: Voter[] = [];
  localVoters: Voter[] = [];
  searchVoters: Voter[] = [];
  electionType: string;
  isElectionDay: boolean;
  searchValue = '';
  offset = 0;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private coreUtil: CoreUtil,
    private componentUtil: ComponentUtil,
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private accountService: AccountService,
    private kmpUserService: KmpUserService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private resolverService: PropertyResolverService,
    public formBuilder: FormBuilder,
    public syncDataService: SyncDataService,
    private votersService: VoterService
  ) {
    this.init();
  }

  init() {
    this.electionType = this.kmpUserService.getElectionType();
    const menuId = 'voters';
    console.log(menuId);
    if (!!menuId) {
      this.pageMenu = this.componentUtil.getMenuById(menuId);
    }

    this.searchPreference =
      JSON.parse(this.localStorage.retrieve('voter-search-preferences')) ||
      JSON.parse(this.sessionStorage.retrieve('voter-search-preferences'));

    this.searchPreference = {
      serialNumber: !this.searchPreference ? true : this.searchPreference.serialNumber ? true : false,
      voterId: !this.searchPreference ? true : this.searchPreference.voterId ? true : false,
      voterName: !this.searchPreference ? true : this.searchPreference.voterName ? true : false,
      husbandOrFatherName: !this.searchPreference ? true : this.searchPreference.husbandOrFatherName ? true : false,
      doorNumber: !this.searchPreference ? true : this.searchPreference.doorNumber ? true : false
    };
    this.kmpUserService.isTodayElectionDay().then(isElectionDay => {
      this.isElectionDay = isElectionDay;
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    // this.votersService.getVotersFromLocal().then((voters: Voter[]) => {
    //   this.localVoters = voters;
    //   this.offset = 0;
    //   this.loadVoters();
    // });
  }

  async onVoterSearchSettings() {
    const modal = await this.modalCtrl.create({
      component: VoterSearchSettingsPage
    });
    modal.onWillDismiss().then(searchPreference => {
      console.log(searchPreference);
      this.searchPreference = searchPreference;
    });
    return await modal.present();
  }

  ngOnInit() {
    this.componentUtil.showLoading(() => {
      this.votersService.getVotersFromLocal().then((voters: Voter[]) => {
        console.log(voters);
        this.localVoters = this.searchVoters = voters;
        this.offset = 0;
        this.loadVoters();
        this.componentUtil.hideLoading();
      });
    });
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  matchAvailabilityCheck(searchTerm, voter: Voter) {
    const searchAvailableConfig = {
      serialNumber: voter.serialNumber ? voter.serialNumber.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 : false,
      voterId: voter.voterId ? voter.voterId.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 : false,
      voterName: voter.voterName ? voter.voterName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 : false,
      husbandOrFatherName: voter.husbandOrFatherName
        ? voter.husbandOrFatherName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        : false,
      doorNumber: voter.doorNumber ? voter.doorNumber.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 : false
    };
    const isMatching =
      searchAvailableConfig.serialNumber ||
      searchAvailableConfig.voterId ||
      searchAvailableConfig.voterName ||
      searchAvailableConfig.husbandOrFatherName ||
      searchAvailableConfig.doorNumber;
    return isMatching;
  }

  filterVoters(searchTerm) {
    return this.localVoters.filter((voter: Voter) => {
      return this.matchAvailabilityCheck(searchTerm, voter);
    });
  }

  onVoterInput(event: any) {
    // set val to the value of the searchbar
    const value = event.target.value;

    // if (value === '') {
    //   this.offset = 0;
    //   this.loadVoters();
    //   return;
    // }

    if (value !== this.searchValue) {
      this.searchVoters = this.filterVoters(value);
      this.offset = 0;
      this.voters = [];
      // this.content.scrollToTop(1500);
      this.loadVoters();
    }
    this.searchValue = value;
  }

  setFilteredItems(event) {
    const val = event.target.value;
    this.searchVoters = this.filterVoters(val);
  }

  loadVoters(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }

    setTimeout(() => {
      this.getVoters(this.offset);

      if (event) {
        event.target.complete();
      }

      // Optional
      if (this.offset === 125) {
        this.infinite.disabled = true;
      }
    }, loadMore ? 500 : 0);
  }

  getVoters(offset) {
    const voters = this.searchVoters.slice(this.offset, this.offset + 25);
    this.voters = [...this.voters, ...voters];

    console.log('voters');
    console.log(this.voters.length);
    console.log('searchVoters');
    console.log(this.searchVoters.length);
    console.log('localVoters');
    console.log(this.localVoters.length);
  }
}
