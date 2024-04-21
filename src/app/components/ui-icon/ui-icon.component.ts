import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconComponent {
  @Input() size: 'md' | 'lg' | 'xlg' = 'md';
}
