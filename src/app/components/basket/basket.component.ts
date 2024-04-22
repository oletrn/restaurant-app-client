import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BasketHeaderComponent } from '../basket-header/basket-header.component';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { environment } from './../../../environments/environment';
import { BasketService } from './../../basket.service';
import { BasketItem } from './../../models/basket-item';
import { OrderStep } from './../../models/order-step.enum';
import { UiBasketItem } from './../../models/ui-basket-item';
import { UiDataStateService } from './../../ui-data-state.service';
import { OrderSummaryItemComponent } from './../order-summary-item/order-summary-item.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, BasketHeaderComponent, OrderSummaryItemComponent, PriceTagComponent],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  orderStepEnum = OrderStep;
  currentOrderStep: OrderStep = OrderStep.Confirmation;
  private basketService = inject(BasketService);
  private stateService = inject(UiDataStateService);
  readonly basketItems$ = this.stateService.uiBasketItems$;
  readonly basketHadItems$ = this.stateService.uiBasketItems$.pipe(map((items) => !!items.length));
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
}
