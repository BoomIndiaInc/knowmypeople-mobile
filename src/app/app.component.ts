import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Page } from './interfaces/pages';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AppService } from './services/app/app.service';
import { ComponentUtil, DEFAULT_APP_CONFIG } from './shared';
import { AuthServerProvider } from './services/auth/auth-jwt.service';
import { AccountService } from './services/auth/account.service';
import { PropertyResolverService } from './services/property-resolver/property-resolver.service';
import { NetworkService } from './services/network/network.service';
import { InAppBrowserService } from './services/in-app-browser/in-app-browser.service';
import { KmpUserService } from './services/kmp/user.service';
import { User } from 'src/model/user.model';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appPages: Array<Page>;
  version = '0.0.0';
  appConfigErrorString: string;
  appConfigLoadingMessageString: string;
  userAuthenticated: boolean;
  userAuthorities: Array<string>;
  userName: string;
  userType: string;
  userImageUrl: string;

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
    private kmpUserService: KmpUserService,
    private resolverService: PropertyResolverService,
    private networkService: NetworkService,
    private inAppBroswserService: InAppBrowserService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) {
    this.init();
  }
  /**
   * Called when this component is being initialized.
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {}

  /**
   * Use this to clean up any subscriptions etc.
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.networkService.unsubscribe();
  }

  init() {
    this.initTranslate();
    this.translate.get(['APP_CONFIG_ERROR', 'LOADING_APPLICATION_CONFIGURATION']).subscribe(values => {
      this.appConfigErrorString = values.APP_CONFIG_ERROR;
      this.appConfigLoadingMessageString = values.LOADING_APPLICATION_CONFIGURATION;
    });

    this.componentUtil.showLoading(
      () => {
        this.getAppConfig();
      },
      '',
      () => {
        this.splashScreen.hide();
      }
    );
    this.accountService.getAuthenticationState().subscribe((user: any) => {
      if (user) {
        // this.userAuthenticated = true;
        // this.userAuthorities = user.authorities;
        // this.userName = user.login;
        // this.userEmail = user.email;
        this.userImageUrl = user.imageUrl;
      }
    });

    this.kmpUserService.getAuthenticationState().subscribe((kmpUser: User) => {
      if (kmpUser) {
        this.userAuthenticated = true;
        this.userAuthorities = kmpUser.authorities;
        this.userName = kmpUser.login;
        this.userType = kmpUser.userType;
        // this.userImageUrl = user.imageUrl;
      }
    });
  }

  getAppConfig() {
    this.appService.appConfig().subscribe(
      response => {
        this.resolverService.allProperties = response.body;
        this.initializeApp(response.body || this.resolverService.allProperties);
      },
      async response => {
        // Unable to fetch app configurations
        // const error = JSON.parse(response.error);
        console.log(response.error);
        this.componentUtil.showToast(this.appConfigErrorString, { cssClass: 'toast', duration: 5000}, true);
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
        this.networkService.subscribe();
      })
      .catch(() => {});
  }

  initTranslate() {
    const enLang = this.resolverService.getPropertyValue('default-lang');
    const selectedLanguage = this.localStorage.retrieve('language');
    // Set the default language for translation strings, and the current language.
    const language = selectedLanguage ? selectedLanguage : enLang;
    this.translate.setDefaultLang(language);

    if (!language && this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use(language); // Set your language here
    }

  }

  goToEditProgile() {
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

  leaveAReview() {
    console.log(' Leave a Review :: Open App Store link. - Work in Progress')
  }

  showMenu(page: Page): boolean {
    let showMenu = true;
    if(!page.enable) {
      return false;
    }
    if (page.authorities && page.authorities.length > 0) {
      showMenu = this.accountService.hasAnyAuthorityDirect(page.authorities);
    }

    return showMenu;
  }

  openLink(socialMedia) {
    const fbLink = this.resolverService.getPropertyValue('links')[socialMedia]
    this.inAppBroswserService.openWithSystemBrowser(fbLink);
  }
  openFacebookProfile(socialMedia = 'facebook') {
    this.openLink(socialMedia);
  }

  openInstagramProfile(socialMedia = 'instagram') {
    this.openLink(socialMedia);
  }

  openTwitterProfile(socialMedia = 'twitter') {
    this.openLink(socialMedia);
  }

  openWebsite(socialMedia = 'website') {
    this.openLink(socialMedia);
  }

  openWhatsAppProfile(socialMedia = 'whatsapp') {
    this.openLink(socialMedia);
  }
}
