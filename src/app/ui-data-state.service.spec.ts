import { TestBed } from '@angular/core/testing';

import { UiDataStateService } from './ui-data-state.service';

describe('UiDataStateService', () => {
  let service: UiDataStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiDataStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
