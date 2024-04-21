import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCounterComponent } from './dish-counter.component';

describe('DishCounterComponent', () => {
  let component: DishCounterComponent;
  let fixture: ComponentFixture<DishCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DishCounterComponent]
    });
    fixture = TestBed.createComponent(DishCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
