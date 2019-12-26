import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../auth/account.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { NetworkService } from '../network/network.service';
import { KmpUserService } from '../kmp/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService { // extends BaseService{
  constructor(
    private accountService: AccountService,
    private kmpUserService: KmpUserService,
    private authServerProvider: AuthServerProvider,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private networkService: NetworkService
  ) {
    // super(translate, localStorage, sessionStorage, networkService);
  }

  login(credentials, callback?) {
    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      if (this.networkService.isOnline()) {
        this.loginOnline(credentials, resolve, reject, cb);
      } else {
        this.loginOffline(credentials, resolve, reject, cb);
      }
    });
  }

  loginWithToken(jwt, rememberMe) {
    return this.authServerProvider.loginWithToken(jwt, rememberMe);
  }

  loginOnline(credentials, resolve, reject, callback) {
    this.authServerProvider.login(credentials).subscribe(
      data => {
        this.accountService.identity(true).then(account => {
          // After the login the language will be changed to
          // the language selected by the user during his registration
          
          if (account !== null) {
            this.translate.use(account.langKey);
          }
          this.kmpUserService.identity(true).then(kmpUser => {
            // After the login the language will be changed to
            // the language selected by the user during his registration
            // if (kmpUser !== null && kmpUser.langKey) {
            //   this.translate.use(kmpUser.langKey);
            // }
            resolve(account);
          });
        });
        return callback();
      },
      err => {
        this.logout();
        reject(err);
        return callback(err);
      }
    );
  }

  loginOffline(credentials, resolve, reject, callback) {
    let userIdentity;
    const localStorageUserIdentity = JSON.parse(this.localStorage.retrieve('userIdentity'));
    const sessionStorageUserIdentity = JSON.parse(this.sessionStorage.retrieve('userIdentity'));
    const localStorageCredentials = JSON.parse(this.localStorage.retrieve('credentials'));
    userIdentity = localStorageUserIdentity || sessionStorageUserIdentity;

    if (userIdentity && credentials.username === (localStorageCredentials.username && userIdentity.login)) {
      if (credentials.password !== localStorageCredentials.password) {
        const error = this.translate.get('LOGIN_ERROR');
        reject(error);
        return callback(error);
      }
      this.accountService.authenticate(userIdentity);
      this.accountService.identity(false).then(account => {
        // After the login the language will be changed to
        // the language selected by the user during his registration
        
        if (account !== null && account.langKey) {
          this.translate.use(account.langKey);
        }
        resolve(userIdentity);
      });
      return callback();
    } else {
      const error = this.translate.get('OFFLINE_LOGIN_ERROR');
      reject(error);
      return callback(error);
    }
  }

  logout() {
    this.authServerProvider.logout().subscribe();
    this.accountService.authenticate(null);
  }
}
