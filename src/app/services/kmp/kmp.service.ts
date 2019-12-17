import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { BOOTHS_REST_API_URL, ELECTION_TYPE_REST_API_URL, WARDS_REST_API_URL } from './../../shared/util/service-util';

@Injectable({
  providedIn: 'root'
})
export class KmpService {
  constructor(private http: HttpClient) {}

  fetchAllBooths(): Observable<HttpResponse<any>> {
    return this.http.get<any>(ApiService.API_URL + BOOTHS_REST_API_URL, { observe: 'response' });
  }

  fetchAllElectionTypes(): Observable<HttpResponse<any>> {
    return this.http.get<any>(ApiService.API_URL + ELECTION_TYPE_REST_API_URL, { observe: 'response' });
  }

  fetchAllWards(): Observable<HttpResponse<any>> {
    return this.http.get<any>(ApiService.API_URL + WARDS_REST_API_URL, { observe: 'response' });
  }

}
