import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { USER_ACCOUNT_REST_API_URL, USER_DETAILS_REST_API_URL } from './../../shared/util/service-util';
import { CoreUtil } from 'src/app/shared/util/core-util';
import { User } from './../../../model/user.model';
import { AccountService } from '../auth/account.service';
import { PropertyResolverService } from '../property-resolver/property-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class KmpUserService {
  private userIdentity: User;
  private authenticated = false;
  private authenticationState = new Subject<any>();

  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private http: HttpClient,
    private coreUtil: CoreUtil,
    private accountService: AccountService,
    private resolverService: PropertyResolverService
  ) {}

  fetch(username: string = this.accountService.getUsername()): Observable<HttpResponse<User>> {
    return this.http.get<User>(ApiService.API_URL + USER_DETAILS_REST_API_URL + '?loginId=' + username, { observe: 'response' });
  }

  save(user: User): Observable<HttpResponse<any>> {
    return this.http.post(ApiService.API_URL + USER_DETAILS_REST_API_URL, user, { observe: 'response' });
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[]): Promise<boolean> {
    return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
  }

  hasAnyAuthorityDirect(authorities: string[]): boolean {
    if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }

    for (let i = 0; i < authorities.length; i++) {
      if (this.userIdentity.authorities.includes(authorities[i])) {
        return true;
      }
    }

    return false;
  }

  hasAuthority(authority: string): Promise<boolean> {
    if (!this.authenticated) {
      return Promise.resolve(false);
    }

    return this.identity().then(
      id => {
        return Promise.resolve(id.authorities && id.authorities.includes(authority));
      },
      () => {
        return Promise.resolve(false);
      }
    );
  }

  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this.userIdentity = undefined;
    }

    // check and see if we have retrieved the userIdentity data from the server.
    // if we have, reuse it by immediately resolving
    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }

    // retrieve the userIdentity data from the server, update the identity object, and then resolve.
    return this.fetch(this.accountService.getUsername())
      .toPromise()
      .then(response => {
        const user = response.body;
        if (user) {
          this.userIdentity = user;
          this.localStorage.store('kmpUserIdentity', JSON.stringify(this.userIdentity)) ||
            this.sessionStorage.store('kmpUserIdentity', JSON.stringify(this.userIdentity));

          this.authenticated = true;
          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting

          // const langKey = this.localStorage.retrieve('locale') || this.sessionStorage.retrieve('locale') || this.userIdentity.langKey;
          // this.languageService.changeLanguage(langKey);
        } else {
          this.userIdentity = null;
          this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
        return this.userIdentity;
      })
      .catch(err => {
        this.userIdentity = null;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
        return null;
      });
  }

  identityUpdate(user: User): Promise<any> {
    // retrieve the userIdentity data from the server, update the identity object, and then resolve.
    return this.save(user)
      .toPromise()
      .then(response => {
        const resUser = response.body;
        if (resUser) {
          this.userIdentity = resUser;
          this.localStorage.store('kmpUserIdentity', JSON.stringify(this.userIdentity)) ||
            this.sessionStorage.store('kmpUserIdentity', JSON.stringify(this.userIdentity));

          // this.authenticated = true;
          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting

          // const langKey = this.localStorage.retrieve('locale') || this.sessionStorage.retrieve('locale') || this.userIdentity.langKey;
          // this.languageService.changeLanguage(langKey);
        } else {
          // this.userIdentity = null;
          // this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
        return this.userIdentity;
      })
      .catch(err => {
        // this.userIdentity = null;
        // this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
        return null;
      });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isIdentityResolved(): boolean {
    return this.userIdentity !== undefined;
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }

  getFirstName(): string {
    return this.isIdentityResolved() ? this.userIdentity.firstName : null;
  }

  getLastName(): string {
    return this.isIdentityResolved() ? this.userIdentity.lastName : null;
  }

  getMobileNumber(): string {
    return this.isIdentityResolved() ? this.userIdentity.mobileNumber : null;
  }

  getEmailId(): string {
    return this.isIdentityResolved() ? this.userIdentity.emailId : null;
  }

  getImageUrl(): string {
    return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
  }

  getUserId(): string {
    return this.isIdentityResolved() ? this.userIdentity.userId : null;
  }

  getUserType(): string {
    return this.isIdentityResolved() ? this.userIdentity.agentType : null;
  }

  getBoothId(): string {
    return this.isIdentityResolved() ? this.userIdentity.boothId : null;
  }

  getElectionType(): string {
    return this.isIdentityResolved() ? this.userIdentity.electionType : null;
  }

  getWardId(): string {
    return this.isIdentityResolved() ? this.userIdentity.wardId : null;
  }

  getLanguage(): string {
    return this.isIdentityResolved() ? this.userIdentity.language : null;
  }

  getAutoSync(): boolean {
    return this.isIdentityResolved() ? this.userIdentity.autoSync : this.resolverService.getPropertyValue('auto-sync');
  }

  getAutoSyncDuration(): number {
    return this.isIdentityResolved() ? this.userIdentity.autoSyncDuration : this.resolverService.getPropertyValue('auto-sync-duration');
  }
  getUserIdentity(): User {
    return this.isIdentityResolved() ? this.userIdentity : null;
  }
}
