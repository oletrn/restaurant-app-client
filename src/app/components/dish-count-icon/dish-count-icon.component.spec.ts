import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCountIconComponent } from './dish-count-icon.component';

describe('DishCountIconComponent', () => {
  let component: DishCountIconComponent;
  let fixture: ComponentFixture<DishCountIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DishCountIconComponent]
    });
    fixture = TestBed.createComponent(DishCountIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
