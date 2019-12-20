import { Injectable } from '@angular/core';
import { InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Injectable({
  providedIn: 'root'
})
export class InAppBrowserService {

  options: InAppBrowserOptions = {
    location: 'yes', // Or 'no'
    hidden: 'no', // Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes', // Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', // Android only
    closebuttoncaption: 'Close', // iOS only
    disallowoverscroll: 'no', // iOS only
    toolbar: 'yes', // iOS only
    enableViewportScale: 'no', // iOS only
    allowInlineMediaPlayback: 'no', // iOS only
    presentationstyle: 'pagesheet', // iOS only
    fullscreen: 'yes' // Windows only
  };
  constructor(private theInAppBrowser: InAppBrowser) {}

  public openWithSystemBrowser(url: string) {
    const target = '_system';
    this.theInAppBrowser.create(url, target, this.options);
  }
  public openWithInAppBrowser(url: string) {
    const target = '_blank';
    this.theInAppBrowser.create(url, target, this.options);
  }
  public openWithCordovaBrowser(url: string) {
    const target = '_self';
    this.theInAppBrowser.create(url, target, this.options);
  }
}
