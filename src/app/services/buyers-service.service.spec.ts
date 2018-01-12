import { TestBed, inject } from '@angular/core/testing';

import { BuyersServiceService } from './buyers-service.service';

describe('BuyersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyersServiceService]
    });
  });

  it('should be created', inject([BuyersServiceService], (service: BuyersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
