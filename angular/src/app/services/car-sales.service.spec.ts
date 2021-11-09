import { TestBed } from '@angular/core/testing';

import { CarSalesService } from './car-sales.service';

describe('CarSalesService', () => {
  let service: CarSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
