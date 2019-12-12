import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Pages } from './interfaces/pages';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appPages: Array<Pages>;
  version  = '0.0.1';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    public navCtrl: NavController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.appPages = [
      {
        title: 'Voters',
        url: '/home-results',
        direct: 'root',
        icon: 'people',
        active: false
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline',
        active: false
      },

      {
        title: 'Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog',
        active: false
      }
    ];

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.appPages.map( p => {
          return p.active = (event.url === p.url);
        });
      }
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
    this.initTranslate();
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
    //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
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
