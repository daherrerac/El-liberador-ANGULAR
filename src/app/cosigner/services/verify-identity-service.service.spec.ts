import { TestBed } from '@angular/core/testing';

import { VerifyIdentityServiceService } from './verify-identity-service.service';

describe('VerifyIdentityServiceService', () => {
  let service: VerifyIdentityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyIdentityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
