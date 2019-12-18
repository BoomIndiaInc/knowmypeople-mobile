import { Injectable, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Subscription, throwError } from 'rxjs';
import { CoreUtil } from 'src/app/shared/util/core-util';

@Injectable({
  providedIn: 'root'
})
export class NetworkService implements OnInit {
  connectSubscription: Subscription;
  disconnectSubscription: Subscription;
  private isNetworkOnline = true;
  constructor(private network: Network, private coreUtils: CoreUtil) {
    if (this.coreUtils.isRunningInWebMode()) {
      this.isNetworkOnline = true; // Set to false if you are testing for offline mode in browser
    }
  }

  ngOnInit() {
    this.subscribe();
  }

  subscribe() {
    // watch network for a connection
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.onOnline();
    });
    // watch network for a disconnection
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.onOffline();
    });
  }

  unsubscribe() {
    // stop connect watch
    this.connectSubscription.unsubscribe();
    // stop disconnect watch
    this.disconnectSubscription.unsubscribe();
  }

  onOnline() {
    this.isNetworkOnline = true;
    console.log('Network :: Online');
  }

  onOffline() {
    this.isNetworkOnline = false;
    console.log('Network :: Offline');
  }

  isOnline(): boolean {
    return this.isNetworkOnline;
  }

  getNetworkType() {
    return this.network.type;
  }

  throwNetworkError() {
    const errorResponse = {
      error: JSON.stringify({
        message: 'error.network'
      })
    };
    return throwError(errorResponse);
  }
}
