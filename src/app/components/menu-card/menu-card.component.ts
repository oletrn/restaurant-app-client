import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { DishCounterComponent } from '../dish-counter/dish-counter.component';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { UiDishItem } from './../../models/ui-dish-item';
import { TruncatePipe } from './../../pipes/truncate.pipe';
import { SecondaryButtonComponent } from './../secondary-button/secondary-button.component';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule, UiIconComponent, PriceTagComponent, SecondaryButtonComponent, TruncatePipe, DishCounterComponent,],
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Input({required: true}) dish?: UiDishItem;
  selectedDishCount = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dish'].currentValue) {
      // Check if the new dish input has an orderedAmount
      this.selectedDishCount = changes['dish'].currentValue?.orderedAmount ?? 0;
    }
  }

  addToCart(): void {
    this.selectedDishCount = 1;
  }
}
