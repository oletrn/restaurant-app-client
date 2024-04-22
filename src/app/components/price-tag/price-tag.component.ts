import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoundPricePipe } from './../../pipes/round-price.pipe';

@Component({
  selector: 'app-price-tag',
  standalone: true,
  imports: [CommonModule, RoundPricePipe,],
  template: `&#8364;&nbsp;{{ price | roundPrice }}`,
  styleUrls: ['./price-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceTagComponent {
  @Input({required: true}) price!: number;
}
