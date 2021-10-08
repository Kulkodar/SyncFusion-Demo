import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid.TreeComponent } from './grid.tree.component';

describe('Grid.TreeComponent', () => {
  let component: Grid.TreeComponent;
  let fixture: ComponentFixture<Grid.TreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grid.TreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid.TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
