import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { RETRIVE_VOTERS_REST_API_URL, UPLOAD_VOTERS_REST_API_URL } from './../../shared/util/service-util';
import {VoterSearchCriteria, VoterElection, Voter } from './../../../model/voter.model';
@Injectable({
  providedIn: 'root'
})
export class VoterService {
  constructor(private http: HttpClient) {}

  fetch(criteria: VoterSearchCriteria): Observable<HttpResponse<Voter>> {
    return this.http.get<Voter>(ApiService.API_URL + RETRIVE_VOTERS_REST_API_URL + '?' + this.generateQuery(criteria), { observe: 'response' });
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

}
