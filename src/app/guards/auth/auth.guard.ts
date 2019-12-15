import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthServerProvider } from 'src/app/services/auth/auth-jwt.service';
import { AccountService } from 'src/app/services/auth/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServerProvider: AuthServerProvider, private accountService: AccountService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (!this.accountService.isAuthenticated() || !this.authServerProvider.hasValidToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
