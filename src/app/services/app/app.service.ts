import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { share } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { APP_CONFIG_REST_API_URL } from './../../shared/util/service-util'; 
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  appConfig(): Observable<any> {
    const apiUrl = ApiService.API_CONFIG_URL;
    return this.http.get<any>(apiUrl, { observe: 'response' });
  }
}
