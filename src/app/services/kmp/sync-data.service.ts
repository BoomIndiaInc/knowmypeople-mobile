import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PropertyResolverService } from '../property-resolver/property-resolver.service';
import { KmpUserService } from './user.service';
import { KmpService } from './kmp.service';
import { User } from 'src/model/user.model';
import { VoterService } from './voter.service';
import { Voter, VoterSearchCriteria } from 'src/model/voter.model';

@Injectable({
  providedIn: 'root'
})
export class SyncDataService {
  autoSync = true;
  autoSyncDuration = 30000;
  private interval: any;
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private resolverService: PropertyResolverService,
    private kmpUserService: KmpUserService,
    private kmpService: KmpService,
    private voterService: VoterService
  ) {
    this.init();
  }

  init() {
    this.autoSync = this.kmpUserService.getAutoSync();
    this.autoSyncDuration = this.kmpUserService.getAutoSyncDuration()
      ? this.kmpUserService.getAutoSyncDuration()
      : this.resolverService.getPropertyValue('auto-sync-duration');
    this.kmpUserService.getAuthenticationState().subscribe((kmpUser: User) => {
      if (kmpUser) {
        this.autoSync = kmpUser.autoSync;
        this.autoSyncDuration = kmpUser.autoSyncDuration
          ? kmpUser.autoSyncDuration
          : this.resolverService.getPropertyValue('auto-sync-duration');
        if (this.autoSync) {
          this.start();
        } else {
          this.stop();
        }
      }
    });
    if (this.autoSync) {
      this.start();
    } else {
      this.stop();
    }
  }

  start() {
    if (this.interval) {
      this.stop();
    }
    this.interval = setInterval(() => {
      this.syncDataFromLocal();
    }, this.autoSyncDuration * 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  syncDataFromLocal(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.voterService.getVotersFromLocal().then((localVoters) => {
        if (localVoters && localVoters.length > 0) {
          return this.uploadVoters(localVoters).then((isUploaded: boolean) => {
            if (isUploaded) {
              console.log('Local Voters Data uploaded successfully.');
              return resolve(isUploaded);
            } else {
              console.log('Failed to upload Local Voters Data');
              return resolve(isUploaded);
            }
          });
        } else {
          return resolve(false);
        }
      });
  });
  }

  uploadVoters(voters: Voter[]): Promise<any> {
    return this.voterService
      .save(voters)
      .toPromise()
      .then(response => {
        const resVoters = response.body;
        if (resVoters) {
          return true;
        } else {
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }

  fetchVoters(boothId, wardId, electionType): Promise<any> {
    const criteria = new VoterSearchCriteria(boothId, electionType, wardId);
    return this.voterService
      .fetch(criteria)
      .toPromise()
      .then(response => {
        const voters = response.body;
        if (voters) {
          const votersString = JSON.stringify(voters);
          this.localStorage.store(`voters-${this.voterService.getVotersDataKey()}`, votersString);
          return voters;
        } else {
          console.log('Failed to upload Local Voters Data');
          return [];
        }
      })
      .catch(err => {
        console.log(err);
        console.log('Failed to upload Local Voters Data');
        return [];
      });
  }
}
