import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { share } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { LoginService } from '../login/login.service';
import { USERS_REST_API_URL, RESET_PASSWORD_REST_API_URL, REGISTER_REST_API_URL } from './../../shared/util/service-util';
import { NetworkService } from '../network/network.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;

  constructor(public apiService: ApiService, public loginService: LoginService, public networkService: NetworkService) {}

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    this.loginService
      .login(accountInfo)
      .then(res => {
        this.loggedIn(res);
        return of(res);
      })
      .catch(err => {
        console.error('ERROR', err);
        return throwError(err);
      });
  }

  findAll(): Observable<any> {
    return this.apiService.get(USERS_REST_API_URL);
  }

  forgotPassword(email: string) {
    if (!this.networkService.isOnline()) {
      return this.networkService.throwNetworkError();
    }
    return this.apiService.post(RESET_PASSWORD_REST_API_URL, email, { responseType: 'text' as 'text' }).pipe(share());
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    if (!this.networkService.isOnline()) {
      return this.networkService.throwNetworkError();
    }
    return this.apiService.post(REGISTER_REST_API_URL, accountInfo, { responseType: 'text' as 'text' }).pipe(share());
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.loginService.logout();
    this.user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  private loggedIn(resp) {
    this.user = resp.user;
  }
}
