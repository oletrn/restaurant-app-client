import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, mergeMap } from 'rxjs';
import { environment } from './../environments/environment.development';
import { ApiEndpoints } from './api-endpoints.enum';
import { Dish } from './models/dish.interface';
import { BasketItem } from './models/basket-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiBaseUrl;
  private http = inject(HttpClient);

  getDishes$(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.baseUrl + ApiEndpoints.Dishes);
  }

  getBasketItems$(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.baseUrl + ApiEndpoints.Basket);
  }

  addToBasket(data: BasketItem): Observable<BasketItem[]> {
    const basketUrl = this.baseUrl + ApiEndpoints.Basket;

    return this.http.get<{ id: string, amount: number }[]>(basketUrl).pipe(
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
}
