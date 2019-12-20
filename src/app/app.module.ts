import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthExpiredInterceptor } from './interceptors/auth-expired.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
// Modal Page
import { VoterSearchSettingsPageModule } from './pages/modal/voter-search-settings/voter-search-settings.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AuthServerProvider } from './services/auth/auth-jwt.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ApplicationPreStartupService } from './services/hook/application-pre-startup.service';
import { Network } from '@ionic-native/network/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function getAccessToken() {
  return localStorage.getItem('access_token');
}
//
// Hook that pre-initializes the application
//
export function preStartupHandler(applicationPreStartupService: ApplicationPreStartupService) {
  return applicationPreStartupService.preStartupHook();
}
@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  entryComponents: [NotificationsComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: getAccessToken,
        whitelistedDomains: ['localhost:8100'],
        blacklistedRoutes: ['http://localhost:8100/auth/login']
      }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    NgxWebstorageModule.forRoot({ prefix: 'kmp', separator: '-' }),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    VoterSearchSettingsPageModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: preStartupHandler,
      deps: [ApplicationPreStartupService],
      multi: true
    },
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    AuthServerProvider,
    Network,
    Geolocation,
    NativeGeocoder,
    Camera,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
