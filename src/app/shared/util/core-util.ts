import { Injectable } from '@angular/core';
import { PropertyResolverService } from 'src/app/services/property-resolver/property-resolver.service';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class CoreUtil {
  elections: any[];
  constructor(private resolverService: PropertyResolverService) {}

  //
  // Handy method to detect if we run on localhost
  //
  public isRunningOnLocalhost(theUrl): boolean {
    return (theUrl.indexOf('://localhost') >= 0 || theUrl.indexOf('127.0.0.1') >= 0) && theUrl.indexOf(':8990') < 0;
  }

  //
  // Handy method to determine if we are running as a web application or
  // in the mobile world.
  //
  public isRunningInWebMode(): boolean {
    return window.cordova === undefined || window.cordova === null;
  }

  generateQueryParams(criteria: any): string {
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
