import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { Dish } from './../../models/dish.interface';
import { TruncatePipe } from './../../pipes/truncate.pipe';
import { SecondaryButtonComponent } from './../secondary-button/secondary-button.component';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule, UiIconComponent, PriceTagComponent, SecondaryButtonComponent, TruncatePipe],
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Input({required: true}) dish!: Dish;
}
