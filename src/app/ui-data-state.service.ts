import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, of, take, tap } from 'rxjs';
import { environment } from './../environments/environment';
import { ApiService } from './api.service';
import { BasketItem } from './models/basket-item';
import { Dish } from './models/dish.interface';
import { UiBasketItem } from './models/ui-basket-item';
import { UiDishItem } from './models/ui-dish-item';


@Injectable({
  providedIn: 'root'
})
export class UiDataStateService {
  private readonly apiService = inject(ApiService);
  private readonly apiBaseUrl = environment.apiBaseUrl;
  private readonly fetchedBasketItems = new BehaviorSubject<BasketItem[]>([]);
  private readonly fetchedDishes = new BehaviorSubject<Dish[]>([]);
  fetchedBasketItems$ = this.fetchedBasketItems.asObservable();
  fetchedDishes$ = this.fetchedDishes.asObservable();

  totalAmountInBasket$: Observable<number> = this.fetchedBasketItems$.pipe(
    map(basketItems => basketItems.reduce((acc, item) => acc + item.amount, 0))
  );

  uiBasketItems$: Observable<UiBasketItem[]> = combineLatest([
    this.fetchedBasketItems$,
    this.fetchedDishes$
  ]).pipe(
    map(([basketItems, dishes]) => {
      return basketItems.map(item => {
        let dish = dishes.find(d => d.id === item.id) as Dish;
        return {
          ...item,
          price: dish.price,
          name: dish.name
        };
      });
    })
  );

  uiDishItems$: Observable<UiDishItem[]> = combineLatest([
    this.fetchedDishes$,
    this.fetchedBasketItems$
  ]).pipe(
    map(([dishes, basketItems]) => {
      return dishes.map(dish => {
        let basketItem = basketItems.find(item => item.id === dish.id);
        return {
          ...dish,
          orderedAmount: basketItem ? basketItem.amount : undefined
        };
      });
    })
  );

  subTotalPriceInBasket$: Observable<number> = this.uiBasketItems$.pipe(
    map(basketItems => basketItems.reduce((acc, item) => acc + (item.price * item.amount), 0)),
  );

  deliveryFee$ = of(environment.deliveryfeeInEur);

  totalPriceInBasket$: Observable<number> = combineLatest([this.subTotalPriceInBasket$, this.deliveryFee$]).pipe(map(([subTotal, fee]) => subTotal + fee));

  updateFetchedBasketItems(data: BasketItem[]): void {
    this.fetchedBasketItems.next(data)
  }

  fetchBasketItems(): void {
    this.apiService.getBasketItems$().pipe(take(1)).subscribe((data) => this.updateFetchedBasketItems(data));
  }

  fetchDishes(): void {
    this.apiService.getDishes$().pipe(map((data) => data.map((item) => ({ ...item, image: this.apiBaseUrl + item.image }))), take(1)).subscribe((data) => this.fetchedDishes.next(data));
  }
}
