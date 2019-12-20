import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthServerProvider } from 'src/app/services/auth/auth-jwt.service';
import { AccountService } from 'src/app/services/auth/account.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authServerProvider: AuthServerProvider, private accountService: AccountService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    let canActivate = false;
    const expectedAuthorities: Array<string> = (next && next.data && next.data.authorities)? next.data.authorities : [];
    if(expectedAuthorities && expectedAuthorities.length ===0) {
      return canActivate = true;
    }

    canActivate = this.accountService.hasAnyAuthorityDirect(expectedAuthorities);

    if(!canActivate){
      this.router.navigate(['login']);
    }
    return canActivate;
  }
}

