import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { share } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { APP_CONFIG_REST_API_URL } from './../../shared/util/service-util'; 
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public apiService: ApiService) {}

  appConfig(): Observable<any> {
    return this.apiService.get(APP_CONFIG_REST_API_URL);
  }
}
