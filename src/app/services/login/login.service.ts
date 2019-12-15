import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from '../auth/account.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private accountService: AccountService,
    private authServerProvider: AuthServerProvider,
    private translate: TranslateService,
    private localStorage: LocalStorageService, 
    private sessionStorage: SessionStorageService,
  ) {}

  login(credentials, callback?) {
    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        data => {
          this.accountService.identity(true).then(account => {
            // After the login the language will be changed to
            // the language selected by the user during his registration
            if (account !== null) {
              this.translate.use(account.langKey);
            }
            resolve(data);
          });
          return cb();
        },
        err => {
          this.logout();
          reject(err);
          return cb(err);
        }
      );
    });
  }

  loginWithToken(jwt, rememberMe) {
    return this.authServerProvider.loginWithToken(jwt, rememberMe);
  }

  loginOffline() {
    let userIdentity;
    const localStorageUserIdentity = JSON.parse(this.localStorage.retrieve('userIdentity'));
    const sessionStorageUserIdentity = JSON.parse(this.sessionStorage.retrieve('userIdentity'));
    userIdentity = localStorageUserIdentity || sessionStorageUserIdentity;
    
    if (userIdentity) {
      this.accountService.authenticate(userIdentity);
    }
  }

  logout() {
    this.authServerProvider.logout().subscribe();
    this.accountService.authenticate(null);
  }
}
