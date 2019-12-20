import { Injectable, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TranslateService } from '@ngx-translate/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService implements OnInit {
  latitude;
  longitude;
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private translate: TranslateService) {}

  ngOnInit() {}

  getCurrentCoordinates(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.geolocation
        .getCurrentPosition()
        .then(resp => {
          if (resp.coords) {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            resolve(resp.coords);
          } else {
            reject(this.translate.instant('GEO_LOCATION_ERROR'));
          }
        })
        .catch(error => {
          console.log('Error getting location', error);
          reject(this.translate.instant('GEO_LOCATION_ERROR'));
        });
    });
  }

  getCurrentCoordinateAddress(latitude = this.latitude, longitude = this.longitude): Promise<any> {
    return new Promise((resolve, reject) => {
      this.nativeGeocoder
        .reverseGeocode(latitude, longitude, this.options)
        .then((result: NativeGeocoderResult[]) => {
          if (result) {
            console.log(JSON.stringify(result[0]));
            resolve(result[0]);
          } else {
            reject(this.translate.instant('GEO_LOCATION_ADDRESS_ERROR'));
          }
        })
        .catch((error: any) => {
          console.log(error);
          reject(this.translate.instant('GEO_LOCATION_ADDRESS_ERROR'));
        });
    });
  }
}
