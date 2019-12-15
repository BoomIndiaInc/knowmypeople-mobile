import { TestBed } from '@angular/core/testing';

import { PropertyResolverService } from './property-resolver.service';

describe('PropertyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyResolverService = TestBed.get(PropertyResolverService);
    expect(service).toBeTruthy();
  });
});
