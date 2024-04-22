import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() color: 'orange' | 'grey' = 'orange';
  isHovered: boolean = false;
  isPressed: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
    // make sure pressed state is removed
    this.isPressed = false;
  }

  @HostListener('mousedown') onMouseDown() {
    this.isPressed = true;
  }

  @HostListener('mouseup') onMouseUp() {
    this.isPressed = false;
  }
}
