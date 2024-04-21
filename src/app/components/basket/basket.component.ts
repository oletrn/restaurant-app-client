import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OrderStep } from 'src/app/models/order-step.enum';
import { BasketHeaderComponent } from '../basket-header/basket-header.component';
import { BasketService } from './../../basket.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, BasketHeaderComponent],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  orderStepEnum = OrderStep;
  orderStep: OrderStep = OrderStep.Confirmation;
  private basketService = inject(BasketService);

  onClose(): void {
    this.basketService.closeBasket();
  }
}
