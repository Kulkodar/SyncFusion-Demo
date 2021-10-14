import { TestBed } from '@angular/core/testing';

import { CustomerTreeService } from './customer-tree.service';

describe('CustomerTreeService', () => {
  let service: CustomerTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
