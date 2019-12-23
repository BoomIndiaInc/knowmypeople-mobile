import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  BOOTHS_REST_API_URL,
  ELECTION_TYPE_REST_API_URL,
  WARDS_REST_API_URL,
  ELECTION_REST_API_URL
} from './../../shared/util/service-util';
import { CoreUtil } from 'src/app/shared/util/core-util';

@Injectable({
  providedIn: 'root'
})
export class KmpService {
  constructor(private http: HttpClient, private coreUtil: CoreUtil) {}

  fetchAllBooths(criteria = {}): Observable<HttpResponse<any>> {
    const apiUrl = ApiService.API_URL + BOOTHS_REST_API_URL + '?' + this.coreUtil.generateQueryParams(criteria);
    return this.http.get<any>(apiUrl, { observe: 'response' });
  }

  fetchAllWards(criteria = {}): Observable<HttpResponse<any>> {
    const apiUrl = ApiService.API_URL + WARDS_REST_API_URL + '?' + this.coreUtil.generateQueryParams(criteria);
    return this.http.get<any>(ApiService.API_URL + WARDS_REST_API_URL, { observe: 'response' });
  }

  fetchAllElectionTypes(criteria = {}): Observable<HttpResponse<any>> {
    const apiUrl = ApiService.API_URL + ELECTION_TYPE_REST_API_URL + '?' + this.coreUtil.generateQueryParams(criteria);
    return this.http.get<any>(ApiService.API_URL + ELECTION_TYPE_REST_API_URL, { observe: 'response' });
  }

  fetchAllElections(criteria = {}): Observable<HttpResponse<any>> {
    const apiUrl = ApiService.API_URL + ELECTION_REST_API_URL + '?' + this.coreUtil.generateQueryParams(criteria);
    return this.http.get<any>(ApiService.API_URL + ELECTION_REST_API_URL, { observe: 'response' });
  }

}
