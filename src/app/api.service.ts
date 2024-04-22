import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, from, mergeMap } from 'rxjs';
import { environment } from './../environments/environment.development';
import { ApiEndpoints } from './api-endpoints.enum';
import { BasketItem } from './models/basket-item';
import { Dish } from './models/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiBaseUrl;
  private http = inject(HttpClient);

  getDishes$(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.baseUrl + ApiEndpoints.Dishes);
  }

  getBasketItems$(): Observable<BasketItem[]> {
    return this.http.get<BasketItem[]>(this.baseUrl + ApiEndpoints.Basket);
  }

  addToBasket(data: BasketItem): Observable<BasketItem[]> {
    const basketUrl = this.baseUrl + ApiEndpoints.Basket;

    return this.http.get<BasketItem[]>(basketUrl).pipe(
      mergeMap(items => {
        const existingItem = items.find(item => item.id === data.id);
        if (existingItem) {
          if (data.amount === 0) {
            return this.http.delete(`${basketUrl}/${data.id}`);
          } else {
            return this.http.patch(`${basketUrl}/${data.id}`, { amount: data.amount });
          }
        } else {
          return this.http.post(basketUrl, data);
        }
      }),
      mergeMap(() => this.http.get<BasketItem[]>(basketUrl)), // Fetch the updated basket after any operation
      catchError(error => {
        console.error('Error managing basket item', error);
        throw error;
      })
    );
  }

  emptyBasket(items: BasketItem[]): Observable<unknown> {
    const basketUrl = this.baseUrl + ApiEndpoints.Basket;
    return from(items).pipe(
      mergeMap(item => this.http.delete(`${basketUrl}/${item.id}`)),
      catchError(error => {
        console.error('Error deleting basket items', error);
        throw error;
      })
    );
  }
}
