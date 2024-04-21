import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
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
export class BasketComponent implements OnInit {
  orderStepEnum = OrderStep;
  orderStep: OrderStep = OrderStep.Confirmation;
  basketItems$?: Observable<UiBasketItem[]>;
  private basketService = inject(BasketService);
  private stateService = inject(UiDataStateService);
  readonly deliveryFee = environment.deliveryfeeInEur;

  ngOnInit(): void {
    this.basketItems$ = this.stateService.uiBasketItems$;
  }

  onClose(): void {
    this.basketService.closeBasket();
  }

  updateBasket(data: BasketItem): void {
    this.basketService.updateBasket(data);
  }
}
