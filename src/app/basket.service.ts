import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private isOpen = new BehaviorSubject<boolean>(true);

  isOpen$ = this.isOpen.asObservable();

  openBasket() {
    this.isOpen.next(true);
  }

  closeBasket() {
    this.isOpen.next(false);
  }
}
