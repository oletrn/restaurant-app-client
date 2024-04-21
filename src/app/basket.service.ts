import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { UiDataStateService } from './ui-data-state.service';

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

  updateBasket(data = {id: "8", amount: 5}): void {
    this.apiService.addToBasket(data).subscribe(res => console.log(res));
  }
}
