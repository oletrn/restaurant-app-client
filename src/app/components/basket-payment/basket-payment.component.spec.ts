import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketPaymentComponent } from './basket-payment.component';

describe('BasketPaymentComponent', () => {
  let component: BasketPaymentComponent;
  let fixture: ComponentFixture<BasketPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BasketPaymentComponent]
    });
    fixture = TestBed.createComponent(BasketPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
