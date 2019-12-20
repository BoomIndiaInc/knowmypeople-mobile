import { TestBed } from '@angular/core/testing';

import { KmpUserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KmpUserService = TestBed.get(KmpUserService);
    expect(service).toBeTruthy();
  });
});
