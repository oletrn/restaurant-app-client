import { DishCategory } from './../../models/dish-category.enum';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { MenuService } from './../../menu.service';
import { UiDishItem } from './../../models/ui-dish-item';
import { MenuCardComponent } from './../menu-card/menu-card.component';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MenuHeaderComponent, ChipComponent, SearchInputComponent, MenuCardComponent, CommonModule]
})
export class MenuComponent implements OnInit {
  private menuService = inject(MenuService);
  activeCategory$ = this.menuService.activeCategory$;
  searchQuery$ = this.menuService.searchQuery$;
  categories$ = this.menuService.fetchedCategories$;
  dishes$!: Observable<UiDishItem[]>;

  ngOnInit(): void {
    this.dishes$ = combineLatest([
      this.menuService.fetchedDishes$,
      this.activeCategory$,
      this.searchQuery$,
    ]).pipe(
      map(([dishes, activeCategory, searchQuery]) => {
        if (!searchQuery.length && activeCategory === DishCategory.All) {
          return dishes;
        } else {
          return dishes.filter(dish => {
            const matchesCategory = activeCategory === DishCategory.All || dish.category === activeCategory;
            const query = searchQuery.trim().toLowerCase();
            const matchesQuery = !query || dish.name.toLowerCase().includes(query) || dish.description.toLowerCase().includes(query);
            return matchesCategory && matchesQuery;
          });
        }
      })
    );
  }

  updateActiveCategory(category: DishCategory): void {
    this.menuService.updateActiveCategory(category);
  }

  updateSearchQuery(query: string): void {
    this.menuService.updateSearchQuery(query);
  }


  trackById(index: number, dish: UiDishItem): string {
    return dish.id;
  }

  trackByString(index: number, item: DishCategory): DishCategory {
    return item;
  }
}
