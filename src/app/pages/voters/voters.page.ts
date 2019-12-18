import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, MenuController, ToastController, PopoverController, ModalController } from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
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

@Component({
  selector: 'app-voters',
  templateUrl: './voters.page.html',
  styleUrls: ['./voters.page.scss']
})
export class VotersPage implements OnInit {
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  voters: Voter[] = [];
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
    private votersService: VoterService,
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  async searchFilter() {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  ngOnInit() {
    this.componentUtil.showLoading(() => {
      this.votersService.getVotersFromLocal().then((voters: Voter[]) => {
        
        console.log(voters);
        setTimeout(() => {
          this.voters = voters;
          this.componentUtil.hideLoading();
        }, 1000);
      });
    });
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async data => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }
}
