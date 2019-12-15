import { Injectable } from '@angular/core';

declare var window: any;

@Injectable({
    providedIn: 'root'
  })

export class CoreUtil {
  constructor() {}

  //
  // Handy method to detect if we run on localhost
  //
  public isRunningOnLocalhost(theUrl): boolean {
    return (
      (theUrl.indexOf('://localhost') >= 0 ||
        theUrl.indexOf('127.0.0.1') >= 0) &&
      theUrl.indexOf(':8990') < 0
    );
  }

  //
  // Handy method to determine if we are running as a web application or
  // in the mobile world.
  //
  public isRunningInWebMode(): boolean {
    return window.cordova === undefined || window.cordova === null;
  }
}
