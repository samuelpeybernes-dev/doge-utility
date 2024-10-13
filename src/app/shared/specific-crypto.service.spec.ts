import { TestBed } from '@angular/core/testing';

import { SpecificCryptoPriceService } from './specific-crypto.service';

describe('PriceService', () => {
  let service: SpecificCryptoPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificCryptoPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
