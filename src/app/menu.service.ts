import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UiDishItem } from './models/ui-dish-item';
import { UiDataStateService } from './ui-data-state.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private stateService = inject(UiDataStateService);
  fetchedDishes$: Observable<UiDishItem[]> = this.stateService.uiDishItems$;
}
