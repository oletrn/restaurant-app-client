import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCountIconComponent } from '../dish-count-icon/dish-count-icon.component';

@Component({
  selector: 'app-basket-button',
  standalone: true,
  imports: [CommonModule, DishCountIconComponent],
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketButtonComponent {
  @Input() itemCount: number = 0;
}
