import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ChipComponent } from '../chip/chip.component';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { MenuService } from './../../menu.service';
import { Dish } from './../../models/dish.interface';
import { MenuCardComponent } from './../menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MenuHeaderComponent, ChipComponent, SearchInputComponent, MenuCardComponent, CommonModule]
})
export class MenuComponent implements OnInit {
  categories = ['Popular', 'Burger', 'Stake'];
  activeCategoryIndex = 0;
  private menuService = inject(MenuService);
  dishes$!: Observable<Dish[]>;

  ngOnInit(): void {
    this.dishes$ = this.menuService.fetchedDishes$;
  }

  filterItems(query: string): void {
    console.log(query);
  }
}
