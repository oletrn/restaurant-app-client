import { Component, OnInit, inject } from '@angular/core';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'restaurant-app-client';

  private menuService = inject(MenuService);

  ngOnInit(): void {
      this.menuService.fetchDishes();
  }
}
