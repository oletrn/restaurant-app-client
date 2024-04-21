import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DishCounterComponent } from '../dish-counter/dish-counter.component';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { UiBasketItem } from './../../models/ui-basket-item';

@Component({
  selector: 'app-order-summary-item',
  standalone: true,
  imports: [CommonModule, PriceTagComponent, DishCounterComponent],
  templateUrl: './order-summary-item.component.html',
  styleUrls: ['./order-summary-item.component.scss']
})
export class OrderSummaryItemComponent {
  @Input({required: true}) item!: UiBasketItem;
}
