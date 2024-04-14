import { TestBed } from '@angular/core/testing';

import { CurrencyFormatService } from './currency-format.service';

describe('FormatUsdPriceService', () => {
  let service: CurrencyFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
