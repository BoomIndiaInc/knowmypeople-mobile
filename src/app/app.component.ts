import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Pages } from './interfaces/pages';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AppService } from './services/app/app.service';
import { ComponentUtil, DEFAULT_APP_CONFIG } from './shared';
import { AuthServerProvider } from './services/auth/auth-jwt.service';
import { AccountService } from './services/auth/account.service';
import { PropertyResolverService } from './services/property-resolver/property-resolver.service';
import { NetworkService } from './services/network/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appPages: Array<Pages>;
  version = '0.0.0';
  loading: any;
  appConfigErrorString: string;
  appConfigLoadingMessageString: string;
  userAuthenticated: boolean;
  userAuthorities: Array<string>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private navCtrl: NavController,
    private router: Router,
    private appService: AppService,
    private componentUtil: ComponentUtil,
    public authServerProvider: AuthServerProvider,
    private accountService: AccountService,
    private resolverService: PropertyResolverService,
    private networkService: NetworkService
  ) {
    this.init();
  }
  /**
   * Called when this component is being initialized.
   */
  ngOnInit(): void {

  }

  init() {
    this.initTranslate();
    this.translate.get(['APP_CONFIG_ERROR', 'LOADING_APPLICATION_CONFIGURATION']).subscribe(values => {
      this.appConfigErrorString = values.APP_CONFIG_ERROR;
      this.appConfigLoadingMessageString = values.LOADING_APPLICATION_CONFIGURATION;
    });

    this.componentUtil.showLoading(
      'Please wait...',
      () => {
        this.getAppConfig();
      },
      () => {
        this.splashScreen.hide();
      }
    );
    this.accountService.getAuthenticationState().subscribe((user: any) => {
      if(user) {
        this.userAuthenticated = true;
        this.userAuthorities = user.authorities;
      }
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
        this.componentUtil.showToast(this.appConfigErrorString, { cssClass: 'toast', duration: 5000, showCloseButton: true });
        this.initializeApp(this.resolverService.allProperties);
      }
    );
  }
  initializeApp(appConfig = DEFAULT_APP_CONFIG) {
    this.appPages = appConfig.menus;
    this.version = appConfig.version;

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.appPages.map(p => {
          return (p.active = event.url === p.url);
        });
      }
    });

    this.platform
      .ready()
      .then(() => {
        this.statusBar.styleDefault();
        this.componentUtil.hideLoading();
      })
      .catch(() => {});
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
    this.componentUtil.userLogout();
  }

  leaveAReview() {}

  openFacebookProfile() {}

  openInstagramProfile() {}

  openTwitterProfile() {}

  openWebsite() {}

  openWhatsAppProfile() {}

  showMenu(page: Pages): boolean {
    let showMenu = true;
    if(page.authorities && page.authorities.length>0){
      showMenu = this.accountService.hasAnyAuthorityDirect(page.authorities);
    }

    return showMenu
  }

  /**
   * Use this to clean up any subscriptions etc.
   */
  ngOnDestroy(): void {
    this.networkService.unsubscribe();
  }
}
