import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  connectSubscription: Subscription;
  disconnectSubscription: Subscription;
  private isNetworkOnline = false;
  constructor(private network: Network) { }

  ngOnInit(){
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
    console.log("Network :: Online")
  }

  onOffline() {
    this.isNetworkOnline = false;
    console.log("Network :: Offline")
  }

  isOnline(): boolean {
    return this.isNetworkOnline;
  }

  getNetworkType() {
    return this.network.type;
  }

}
