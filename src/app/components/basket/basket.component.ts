import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, share } from 'rxjs';
import { BasketHeaderComponent } from '../basket-header/basket-header.component';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { BasketService } from './../../basket.service';
import { BasketItem } from './../../models/basket-item';
import { OrderStep } from './../../models/order-step.enum';
import { UiBasketItem } from './../../models/ui-basket-item';
import { RoundPricePipe } from './../../pipes/round-price.pipe';
import { UiDataStateService } from './../../ui-data-state.service';
import { OrderSummaryItemComponent } from './../order-summary-item/order-summary-item.component';
import { BasketPaymentComponent } from './../basket-payment/basket-payment.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, BasketHeaderComponent, OrderSummaryItemComponent, PriceTagComponent, PrimaryButtonComponent, RoundPricePipe, BasketPaymentComponent],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  readonly orderStepEnum = OrderStep;
  currentOrderStep: OrderStep = OrderStep.Confirmation;
  private readonly basketService = inject(BasketService);
  private readonly stateService = inject(UiDataStateService);
  readonly basketItems$ = this.stateService.uiBasketItems$;
  readonly basketHasItems$ = this.stateService.uiBasketItems$.pipe(map((items) => !!items.length));
  readonly deliveryFee$ = this.stateService.deliveryFee$;
  readonly totalPrice$ = this.stateService.totalPriceInBasket$;
  readonly subTotalPrice$ = this.stateService.subTotalPriceInBasket$;

  onClose(): void {
    this.basketService.closeBasket();
  }

  updateBasket(data: BasketItem): void {
    this.basketService.updateBasket(data);
  }

  trackById(index: number, dish: UiBasketItem): string {
    return dish.id;
  }

  order(): void {
    if (this.currentOrderStep === OrderStep.Confirmation) {
      this.goToPayment();
    } else {
      this.submitForm();
    }
  }

  goToPayment(): void {
    this.currentOrderStep = this.orderStepEnum.Payment;
  }

  submitForm(): void {
    this.basketService.triggerSubmitForm();
  }
}
