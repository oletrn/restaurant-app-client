import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketButtonComponent } from './basket-button.component';

describe('BasketButtonComponent', () => {
  let component: BasketButtonComponent;
  let fixture: ComponentFixture<BasketButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BasketButtonComponent]
    });
    fixture = TestBed.createComponent(BasketButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
