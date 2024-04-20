import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';
import { ChipComponent } from '../chip/chip.component';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MenuHeaderComponent, ChipComponent, SearchInputComponent, CommonModule]
})
export class MenuComponent {
  categories = ['Popular', 'Burger', 'Stake'];
  activeCategoryIndex = 0;

  filterItems(query: string): void {
    console.log(query);
  }
}
