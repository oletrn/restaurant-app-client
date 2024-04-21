import { Component, OnInit, inject } from '@angular/core';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './menu.service';
import { BasketService } from './basket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'restaurant-app-client';
  isBasketOpen$?: Observable<boolean>;

  private menuService = inject(MenuService);
  private basketService = inject(BasketService);

  ngOnInit(): void {
      this.isBasketOpen$ = this.basketService.isOpen$;
      this.menuService.fetchDishes();
      this.basketService.fetchBasketItems();
  }

  openBasket(): void {
    this.basketService.openBasket();
  }
}
