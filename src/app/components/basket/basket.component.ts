import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStep } from 'src/app/models/order-step.enum';
import { BasketHeaderComponent } from '../basket-header/basket-header.component';
import { BasketService } from './../../basket.service';
import { BasketItem } from './../../models/basket-item';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, BasketHeaderComponent],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orderStepEnum = OrderStep;
  orderStep: OrderStep = OrderStep.Confirmation;
  basketItems$?: Observable<BasketItem[]>;
  private basketService = inject(BasketService);

  ngOnInit(): void {
    this.basketItems$ = this.basketService.fetchedBasketItems$;
  }

  onClose(): void {
    this.basketService.closeBasket();
  }

  updateBasket(): void {
    this.basketService.updateBasket();
  }
}
