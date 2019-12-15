import { Injectable, Optional, Inject } from '@angular/core';
import { PropertyResolverService } from '../property-resolver/property-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationPreStartupService {
  constructor(public propertyResolverService: PropertyResolverService) {}

  public preStartupHook(): () => void {
    return async () => {
      try {
        await this.propertyResolverService.init();
      } catch (ouch) {
        // This means the app will not work properly

        return;
      }
      console.log('Default app config loading attempt complete!');
    };
  }
}
