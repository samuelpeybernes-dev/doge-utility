import { TestBed } from '@angular/core/testing';

import { CryptoPricesService } from './crypto-prices.service';

describe('PriceService', () => {
  let service: CryptoPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
