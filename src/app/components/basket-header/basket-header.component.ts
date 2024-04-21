import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'app-basket-header',
  standalone: true,
  imports: [CommonModule, UiIconComponent],
  templateUrl: './basket-header.component.html',
  styleUrls: ['./basket-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketHeaderComponent {
  @Input({required: true}) title!: string;
  @Output() close = new EventEmitter();
}
