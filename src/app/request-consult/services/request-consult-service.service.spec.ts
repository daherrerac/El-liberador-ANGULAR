import { TestBed } from '@angular/core/testing';

import { RequestConsultServiceService } from './request-consult-service.service';

describe('RequestConsultServiceService', () => {
  let service: RequestConsultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestConsultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
