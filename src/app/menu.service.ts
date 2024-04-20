import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dish } from './models/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly fetchedDishes = new BehaviorSubject<Dish[]>([]);

  apiService = inject(ApiService);

  get fetchedDishes$(): Observable<Dish[]> {
    return this.fetchedDishes.asObservable()
  }

  fetchDishes(): void {
    this.apiService.getDishes$().subscribe((data) => this.fetchedDishes.next(data));
  }
}
