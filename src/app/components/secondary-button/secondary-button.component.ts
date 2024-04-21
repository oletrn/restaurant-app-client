import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss'],
})
export class SecondaryButtonComponent {
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
