import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MenuHeaderComponent]
})
export class MenuComponent {

}
