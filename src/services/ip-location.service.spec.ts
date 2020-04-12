import { TestBed } from '@angular/core/testing';

import { IpLocationServiceService } from './ip-location.service';

describe('IpLocationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpLocationServiceService = TestBed.get(IpLocationServiceService);
    expect(service).toBeTruthy();
  });
});
