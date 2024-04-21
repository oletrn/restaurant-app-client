import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from './../environments/environment';
import { ApiService } from './api.service';
import { Dish } from './models/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly fetchedDishes = new BehaviorSubject<Dish[]>([]);
  private readonly apiBaseUrl = environment.apiBaseUrl;

  private readonly apiService = inject(ApiService);

  get fetchedDishes$(): Observable<Dish[]> {
    return this.fetchedDishes.asObservable()
  }

  fetchDishes(): void {
    this.apiService.getDishes$().pipe(map((data) => data.map((item) => ({ ...item, image: this.apiBaseUrl + item.image })))).subscribe((data) => this.fetchedDishes.next(data));
  }
}
