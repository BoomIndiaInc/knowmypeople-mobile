import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * This class is a service that can be injected in order to retrieve the application property settings.
 * The build process should be scanning all products and libraries for their 'properties.json' file
 * and merge the values into the single file read by this service.
 * single JSON object. This single file is what is used by this service to resolve a property value.
 */
@Injectable({
  providedIn: 'root'
})
export class PropertyResolverService {
  allProperties: any = undefined;

  // The constructor for this class
  constructor(@Inject(HttpClient) private http: HttpClient) {
    console.debug('PropertyResolverService constructor.');
  }

  // Initialize the service
  async init(): Promise<any> {
    try {
      const data = await this.readProperties();
      // Data is only available upon success
      this.allProperties = data;
    } catch (err) {
      console.error('Failed loading application wide properties!');
      throw new Error('Failed loading application wide properties!');
    }
  }

  // Load a single JSON file. It will load the properties.json file which
  // contains all properties defined for the application.
  private async readProperties(): Promise<any> {
    return this.http.get('assets/config.json').toPromise();
  }

  /**
   * Read the value for the given property and return it.
   * @param lookupKey The key for which to return its value
   * @param defaultValue If specified and the key is not found, this is returned
   */
  public getPropertyValue(
    lookupKey: string,
    @Optional() defaultValue?: string
  ): string {
    let value: string;
    try {
      // Use the given key to find the JSON entry and return the value. if
      // the property is not found and a default value was specified, return the default value.
      value = this.allProperties ? this.allProperties[lookupKey] : undefined;
      if (value === undefined && defaultValue) {
        value = defaultValue;
      } else if (value === undefined) {
        console.warn(
          `Lookup key '${lookupKey}' was not found and no default value was given!`
        );
      }
    } catch (err) {
      console.log(err.message);
    }
    return value;
  }

  /**
   * Overwrite the current property value. This is not persisted and is only
   * valid for the duration of the running application.
   * @param lookupKey The key for which to overwrite the value
   * @param newValue The new value
   * @returns The value that has been overwritten
   */
  public setPropertyValue(lookupKey: string, newValue: string): string {
    const oldValue = this.getPropertyValue(lookupKey);
    if (this.allProperties) {
      this.allProperties[lookupKey] = newValue;
    } else {
      this.allProperties = {};
      this.allProperties[lookupKey] = newValue;
    }
    return oldValue;
  }
}
