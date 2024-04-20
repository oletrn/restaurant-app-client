import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, UiIconComponent, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>();
  searchText: string = '';

  emitSearchEvent() {
    this.search.emit(this.searchText);
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.emitSearchEvent();
    }
  }

}
