import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTagComponent } from './price-tag.component';

describe('PriceTagComponent', () => {
  let component: PriceTagComponent;
  let fixture: ComponentFixture<PriceTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PriceTagComponent]
    });
    fixture = TestBed.createComponent(PriceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
