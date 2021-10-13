import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertreeComponent } from './customertree.component';

describe('CustomertreeComponent', () => {
  let component: CustomertreeComponent;
  let fixture: ComponentFixture<CustomertreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomertreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
