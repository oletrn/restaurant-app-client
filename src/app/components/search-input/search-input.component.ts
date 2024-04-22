import { Component, DestroyRef, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { filter, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, UiIconComponent, ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchControl = new FormControl('');
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => this.search.emit(value as string));
  }
}
