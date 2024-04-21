import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from './basket.service';
import { UiDataStateService } from './ui-data-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'restaurant-app-client';
  isBasketOpen$?: Observable<boolean>;

  private basketService = inject(BasketService);
  private stateService = inject(UiDataStateService);

  ngOnInit(): void {
      this.isBasketOpen$ = this.basketService.isOpen$;
      this.stateService.fetchDishes();
      this.stateService.fetchBasketItems();
  }

  openBasket(): void {
    this.basketService.openBasket();
  }
}
