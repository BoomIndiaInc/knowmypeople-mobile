import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Pages } from './interfaces/pages';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AppService } from './services/app/app.service';
import { DEFAULT_APP_CONFIG } from './shared/util/constant-util';
import { ComponentUtil } from './shared/util/component-util';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appPages: Array<Pages>;
  version  = '0.0.0';
  loading: any;
  appConfigErrorString: string;
  appConfigLoadingMessageString: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private navCtrl: NavController,
    private router: Router,
    private  appService: AppService,
    private componentUtil: ComponentUtil
  ) {
    this.init();
  }

  init() {
    this.initTranslate();
    this.translate.get(['APP_CONFIG_ERROR', 'LOADING_APPLICATION_CONFIGURATION']).subscribe(values => {
      this.appConfigErrorString = values.APP_CONFIG_ERROR;
      this.appConfigLoadingMessageString = values.LOADING_APPLICATION_CONFIGURATION;
    });

    this.componentUtil.showLoading('Please wait...', ()=>{
      this.getAppConfig();
    }, ()=>{
      this.splashScreen.hide();
    })
  }

  getAppConfig() {
    this.appService.appConfig().subscribe(
      response => {
        this.initializeApp(response);
      },
      async response => {
        // Unable to fetch app configurations
        // const error = JSON.parse(response.error);
        console.log(response.error);
        this.componentUtil.showToast(this.appConfigErrorString ,{cssClass : 'toast', duration: 5000, showCloseButton: true});
        this.initializeApp(DEFAULT_APP_CONFIG);
      }
    );
  }
  initializeApp(appConfig) {
    this.appPages = appConfig.menus;
    this.version = appConfig.version;
    
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.appPages.map( p => {
          return p.active = (event.url === p.url);
        });
      }
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.componentUtil.hideLoading();
    }).catch(() => {});
  }

  initTranslate() {
    const enLang = 'en';

    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(enLang);

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use(enLang); // Set your language here
    }

    // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
    //   // this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    //   console.log(values);
    // });
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

  leaveAReview() { }

    openFacebookProfile() { }

    openInstagramProfile() { }

    openTwitterProfile() { }

    openWebsite() { }
}
