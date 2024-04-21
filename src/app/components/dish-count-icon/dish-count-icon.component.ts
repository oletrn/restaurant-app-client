import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-count-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-count-icon.component.html',
  styleUrls: ['./dish-count-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishCountIconComponent {
  @Input() count: number = 0;
  @Input() color: 'orange' | 'white' = 'white';
}
