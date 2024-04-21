import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private isOpen = new BehaviorSubject<boolean>(true);
  private readonly fetchedBasketItems = new BehaviorSubject<any[]>([]);
  isOpen$ = this.isOpen.asObservable();

  private readonly apiService = inject(ApiService);

  get fetchedBasketItems$(): Observable<any> {
    return this.fetchedBasketItems.asObservable()
  }

  fetchBasketItems(): void {
    this.apiService.getBasketItems$().subscribe((data) => this.fetchedBasketItems.next(data));
  }

  openBasket() {
    this.isOpen.next(true);
  }

  closeBasket() {
    this.isOpen.next(false);
  }

  updateBasket(data = {id: "8", amount: 5}): void {
    this.apiService.addToBasket(data).subscribe(res => console.log(res));
  }
}
