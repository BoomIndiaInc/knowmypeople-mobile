import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { NetworkService } from './network/network.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private networkService: NetworkService
  ) {}

  isNetworkAvailable() {
      return this.networkService.isOnline();
  }

}