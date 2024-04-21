import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { DishCounterComponent } from '../dish-counter/dish-counter.component';

@Component({
  selector: 'app-order-summary-item',
  standalone: true,
  imports: [CommonModule, PriceTagComponent, DishCounterComponent],
  templateUrl: './order-summary-item.component.html',
  styleUrls: ['./order-summary-item.component.scss']
})
export class OrderSummaryItemComponent {

}
