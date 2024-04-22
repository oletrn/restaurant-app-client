import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject, switchMap, take } from 'rxjs';
import { ApiService } from './api.service';
import { UiDataStateService } from './ui-data-state.service';
import { BasketItem } from './models/basket-item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private submitForm = new Subject<string>();
  private isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpen.asObservable();
  submitForm$ = this.submitForm.asObservable();
  private readonly apiService = inject(ApiService);
  private readonly uiDataMappingService = inject(UiDataStateService);

  openBasket(): void {
    this.isOpen.next(true);
  }

  closeBasket(): void {
    this.isOpen.next(false);
  }

  updateBasket(data: BasketItem): void {
    this.apiService.addToBasket(data).pipe(take(1)).subscribe((res) => this.uiDataMappingService.updateFetchedBasketItems(res));
  }

  triggerSubmitForm(): void {
    this.submitForm.next('');
  }

  emptyBakset(): void {
    this.uiDataMappingService.fetchedBasketItems$.pipe(
      take(1),
      switchMap((items) => this.apiService.emptyBasket(items))).
      subscribe(() => this.uiDataMappingService.updateFetchedBasketItems([]));
  }
}
