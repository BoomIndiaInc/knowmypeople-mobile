import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, MenuController, ToastController, PopoverController, ModalController } from '@ionic/angular';

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
@Component({
  selector: 'app-voters',
  templateUrl: './voters.page.html',
  styleUrls: ['./voters.page.scss']
})
export class VotersPage implements OnInit {
  pageMenu: Page;
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  searchPreference = null;
  voters: Voter[] = [];
  localVoters: Voter[] = [];
  electionType: string;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,

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
      husbandOrFatherName: !this.searchPreference ? true : this.searchPreference.husbandOrFatherName ? true : false
    };
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.votersService.getVotersFromLocal().then((voters: Voter[]) => {
      this.voters = this.localVoters = voters;
    });
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
        this.voters = this.localVoters = voters;
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
      husbandOrFatherNamevoter: voter.husbandOrFatherName
        ? voter.husbandOrFatherName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        : false
    };
    const searchPreferenceConfig = Object.assign(this.searchPreference);
    const voterSearchPreferenceKeys: string[] = Object.keys(this.searchPreference);
    voterSearchPreferenceKeys.forEach(key => {
      if (!this.searchPreference[key]) {
        delete searchPreferenceConfig[key];
      }
    });
    const searchPreferenceConfigKeys: string[] = Object.keys(searchPreferenceConfig);
    let isSearchMatchAvaialble = false;
    for (const key of searchPreferenceConfigKeys) {
      if (searchAvailableConfig[key]) {
        isSearchMatchAvaialble = true;
        break;
      }
    }
    return isSearchMatchAvaialble;
  }

  filterVoters(searchTerm) {
    if (!!!searchTerm) {
      return this.localVoters;
    }
    return this.voters.filter((voter: Voter) => {
      return this.matchAvailabilityCheck(searchTerm, voter);
    });
  }

  onVoterInput(event: any) {
    // set val to the value of the searchbar
    const val = event.target.value;
    this.voters = this.filterVoters(val);
  }

  setFilteredItems(event) {

    const val = event.target.value;
    this.voters = this.filterVoters(val);
  }

  // async alertLocation() {
  //   const changeLocation = await this.alertCtrl.create({
  //     header: 'Change Location',
  //     message: 'Type your Address.',
  //     inputs: [
  //       {
  //         name: 'location',
  //         placeholder: 'Enter your new Location',
  //         type: 'text'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Change',
  //         handler: async data => {
  //           console.log('Change clicked', data);
  //           this.yourLocation = data.location;
  //           const toast = await this.toastCtrl.create({
  //             message: 'Location was change successfully',
  //             duration: 3000,
  //             position: 'top',
  //             closeButtonText: 'OK',
  //             showCloseButton: true
  //           });

  //           toast.present();
  //         }
  //       }
  //     ]
  //   });
  //   changeLocation.present();
  // }

  // async presentImage(image: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: ImagePage,
  //     componentProps: { value: image }
  //   });
  //   return await modal.present();
  // }

  // async notifications(ev: any) {
  //   const popover = await this.popoverCtrl.create({
  //     component: NotificationsComponent,
  //     event: ev,
  //     animated: true,
  //     showBackdrop: true
  //   });
  //   return await popover.present();
  // }
}
