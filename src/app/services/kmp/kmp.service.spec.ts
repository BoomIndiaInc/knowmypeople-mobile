import { TestBed } from '@angular/core/testing';

import { KmpService } from './kmp.service';

describe('KmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KmpService = TestBed.get(KmpService);
    expect(service).toBeTruthy();
  });
});
