import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UiDishItem } from './models/ui-dish-item';
import { UiDataStateService } from './ui-data-state.service';
import { DishCategory } from './models/dish-category.enum';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private stateService = inject(UiDataStateService);
  fetchedDishes$: Observable<UiDishItem[]> = this.stateService.uiDishItems$;
  fetchedCategories$: Observable<DishCategory[]> = this.fetchedDishes$.pipe(
    map(dishes => {
      const uniqueCategories = new Set(dishes.map(dish => dish.category));
      return [DishCategory.All, ...Array.from(uniqueCategories)];
    })
  );
}
