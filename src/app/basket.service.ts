import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { UiDataStateService } from './ui-data-state.service';
import { BasketItem } from './models/basket-item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private isOpen = new BehaviorSubject<boolean>(true);
  isOpen$ = this.isOpen.asObservable();


  private readonly apiService = inject(ApiService);
  private readonly uiDataMappingService = inject(UiDataStateService);


  openBasket(): void {
    this.isOpen.next(true);
  }

  closeBasket(): void {
    this.isOpen.next(false);
  }

  updateBasket(data: BasketItem): void {
    this.apiService.addToBasket(data).subscribe((res) => this.uiDataMappingService.updateFetchedBasketItems(res));
  }
}
