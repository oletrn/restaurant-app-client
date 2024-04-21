import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-tag',
  standalone: true,
  imports: [CommonModule],
  template: `&#8364;&nbsp;{{ price }}`,
  styleUrls: ['./price-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceTagComponent {
  @Input({required: true}) price!: number;
}
