import { Component } from '@angular/core';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant-app-client';
}
