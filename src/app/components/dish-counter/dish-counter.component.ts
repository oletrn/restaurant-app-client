import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-counter.component.html',
  styleUrls: ['./dish-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishCounterComponent {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.countChange.emit(this.count);
    }
  }

}
