import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { RETRIVE_VOTERS_REST_API_URL, UPLOAD_VOTERS_REST_API_URL } from './../../shared/util/service-util';
import { VoterSearchCriteria, VoterElection, Voter } from './../../../model/voter.model';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { KmpUserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private kmpUserService: KmpUserService
  ) {}

  fetch(criteria: VoterSearchCriteria): Observable<HttpResponse<Voter>> {
    return this.http.get<Voter>(ApiService.API_URL + RETRIVE_VOTERS_REST_API_URL + '?' + this.generateQuery(criteria), {
      observe: 'response'
    });
  }

  save(voters: Voter[]): Observable<HttpResponse<any>> {
    return this.http.put(ApiService.API_URL + UPLOAD_VOTERS_REST_API_URL, voters, { observe: 'response' });
  }

  generateQuery(criteria: VoterSearchCriteria): string {
    const params = new URLSearchParams();
    // tslint:disable-next-line:forin
    for (const key in criteria) {
      if (!!criteria[key]) {
        params.set(key, criteria[key]);
      }
    }
    return params.toString();
  }

  getVotersDataKey(): string {
    const boothId = this.kmpUserService.getBoothId();
    const wardId = this.kmpUserService.getWardId();
    const electionType = this.kmpUserService.getElectionType();
    return `${boothId}-${wardId}-${electionType}`;
  }
  getVotersFromLocal(): Voter[] {
    return JSON.parse(this.localStorage.retrieve(`voters-${this.getVotersDataKey()}`)) as Voter[];
  }

  uploadVoters(voters: Voter[]): Promise<any> {
    return this.save(voters)
      .toPromise()
      .then(response => {
        const resVoters = response.body;
        if (resVoters) {
          return resVoters;
        } else {
          return [];
        }
      })
      .catch(err => {
        console.log(err);
        return [];
      });
  }

  fetchVoters(boothId, wardId, electionType): Promise<any> {
    const criteria = new VoterSearchCriteria(boothId, electionType, wardId);
    return this.fetch(criteria)
      .toPromise()
      .then(response => {
        const voters = response.body;
        if (voters) {
          const votersString = JSON.stringify(voters);
          this.localStorage.store(`voters-${this.getVotersDataKey()}`, votersString);
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
