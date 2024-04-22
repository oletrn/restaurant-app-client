import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketButtonComponent } from './components/basket-button/basket-button.component';
import { BasketComponent } from './components/basket/basket.component';
import { MenuComponent } from './components/menu/menu.component';
import { httpErrorInterceptorProviders } from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MenuComponent,
    BasketButtonComponent,
    BasketComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [httpErrorInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
