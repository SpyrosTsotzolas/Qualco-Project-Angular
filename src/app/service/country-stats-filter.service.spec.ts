import { TestBed } from '@angular/core/testing';

import { CountryStatsFilterService } from './country-stats-filter.service';

describe('CountryStatsFilterService', () => {
  let service: CountryStatsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryStatsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
