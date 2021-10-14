import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTreeComponent } from './customer-tree.component';

describe('CustomerTreeComponent', () => {
  let component: CustomerTreeComponent;
  let fixture: ComponentFixture<CustomerTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
