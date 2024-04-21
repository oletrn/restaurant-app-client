import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryItemComponent } from './order-summary-item.component';

describe('OrderSummaryItemComponent', () => {
  let component: OrderSummaryItemComponent;
  let fixture: ComponentFixture<OrderSummaryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrderSummaryItemComponent]
    });
    fixture = TestBed.createComponent(OrderSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
