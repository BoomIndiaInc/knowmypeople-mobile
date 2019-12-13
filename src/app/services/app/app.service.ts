import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { share } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public apiService: ApiService) {}

  appConfig(): Observable<any> {
    return this.apiService.get('management/info'); // app/config
  }
}
