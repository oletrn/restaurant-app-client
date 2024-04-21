import { BasketItem } from './../../models/basket-item';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { DishCounterComponent } from '../dish-counter/dish-counter.component';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { UiBasketItem } from './../../models/ui-basket-item';
import { Observable, debounceTime, fromEventPattern } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BasketService } from './../../basket.service';


@Component({
  selector: 'app-order-summary-item',
  standalone: true,
  imports: [CommonModule, PriceTagComponent, DishCounterComponent],
  templateUrl: './order-summary-item.component.html',
  styleUrls: ['./order-summary-item.component.scss']
})
export class OrderSummaryItemComponent implements OnInit {
  @Input({required: true}) item!: UiBasketItem;

  private countChanges$?: Observable<BasketItem>;
  private readonly destroyRef = inject(DestroyRef);
  private updatedBasketItem?: BasketItem;
  private basketService = inject(BasketService);

  ngOnInit() {
    this.countChanges$ = fromEventPattern(
      (handler) => {
        this.onCountChange = handler;
      },
    );
    this.countChanges$.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef)).subscribe((item) => this.basketService.updateBasket(item));
  }

  onCountChange(item: BasketItem): void {
    this.updatedBasketItem = item;
  }
}
