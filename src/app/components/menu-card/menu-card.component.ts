import { CommonModule } from '@angular/common';
import { Component, DestroyRef, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { DishCounterComponent } from '../dish-counter/dish-counter.component';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { BasketService } from './../../basket.service';
import { BasketItem } from './../../models/basket-item';
import { UiDishItem } from './../../models/ui-dish-item';
import { TruncatePipe } from './../../pipes/truncate.pipe';
import { DishCountIconComponent } from './../dish-count-icon/dish-count-icon.component';
import { SecondaryButtonComponent } from './../secondary-button/secondary-button.component';
import { Observable, debounceTime, fromEventPattern } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule, UiIconComponent, PriceTagComponent, SecondaryButtonComponent, TruncatePipe, DishCounterComponent, DishCountIconComponent],
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnChanges, OnInit {
  @Input({required: true}) dish!: UiDishItem;
  selectedDishCount = 0;
  private basketService = inject(BasketService);
  private countChanges$?: Observable<number>;
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.countChanges$ = fromEventPattern(
      (handler) => {
        this.onCountChange = handler;
      },
    );
    this.countChanges$.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef)).subscribe((count) => this.basketService.updateBasket({id: this.dish.id, amount: count}));
  }

  onCountChange(item: number): void {
    this.selectedDishCount = item;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dish'].currentValue) {
      // Check if the new dish input has an orderedAmount
      this.selectedDishCount = changes['dish'].currentValue?.orderedAmount ?? 0;
    }
  }

  addToCart(id: string): void {
    this.selectedDishCount = 1;
    const item: BasketItem = {id, amount: this.selectedDishCount};
    this.basketService.updateBasket(item);
  }
}
