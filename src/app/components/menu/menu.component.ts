import { DishCategory } from './../../models/dish-category.enum';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { MenuService } from './../../menu.service';
import { UiDishItem } from './../../models/ui-dish-item';
import { MenuCardComponent } from './../menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MenuHeaderComponent, ChipComponent, SearchInputComponent, MenuCardComponent, CommonModule]
})
export class MenuComponent {
  activeCategoryIndex = 0;
  private menuService = inject(MenuService);
  dishes$ = this.menuService.fetchedDishes$;
  categories$ = this.menuService.fetchedCategories$;


  filterItems(query: string): void {
    console.log(query);
  }

  trackById(index: number, dish: UiDishItem): string {
    return dish.id;
  }

  trackByString(index: number, item: DishCategory): DishCategory {
    return item;
  }
}
