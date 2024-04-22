import { Component, OnInit, inject } from '@angular/core';
import { Observable, combineLatest, distinctUntilChanged, map } from 'rxjs';
import { BasketService } from './basket.service';
import { UiDataStateService } from './ui-data-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private basketService = inject(BasketService);
  private stateService = inject(UiDataStateService);
  isBasketOpen$ = this.basketService.isOpen$;
  totalAmountInBasket$: Observable<number> = this.stateService.totalAmountInBasket$;
  showBasketButton$ = combineLatest([this.isBasketOpen$, this.totalAmountInBasket$]).pipe(map(([isOpen, count]) => !isOpen && count > 0), distinctUntilChanged());


  ngOnInit(): void {
    this.stateService.fetchDishes();
    this.stateService.fetchBasketItems();
  }

  openBasket(): void {
    this.basketService.openBasket();
  }
}
