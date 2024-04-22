import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BasketService } from 'src/app/basket.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-basket-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basket-payment.component.html',
  styleUrls: ['./basket-payment.component.scss']
})
export class BasketPaymentComponent {
  private fb = inject(FormBuilder);
  private readonly basketService = inject(BasketService);
  isSubmitting = false;

  form = this.fb.group({
    contactInfo: this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }),
    deliveryTo: this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      noConfirmCall: [false]
    })
  });

  formSubmitSub = this.basketService.submitForm$.pipe(takeUntilDestroyed()).subscribe(() => this.submitForm());

  submitForm(): void {
    if (this.isSubmitting) {
      return;
    }
    if (this.form.valid) {
      this.isSubmitting = true;
      console.log('Form Value:', this.form.value);
      alert('Your order has been sent!');
      this.isSubmitting = false;
      this.basketService.emptyBakset();
      this.form.reset();
      this.basketService.closeBasket();
    } else {
      console.log('Form is not valid');
    }
  }
}
