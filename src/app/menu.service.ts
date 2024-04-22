import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
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
  private searchQuery = new BehaviorSubject<string>('');
  private activeCategory = new BehaviorSubject<DishCategory>(DishCategory.All);
  searchQuery$ = this.searchQuery.asObservable();
  activeCategory$ = this.activeCategory.asObservable();

  updateActiveCategory(category: DishCategory): void {
    this.activeCategory.next(category);
  }

  updateSearchQuery(query: string): void {
    this.searchQuery.next(query);
  }
}
