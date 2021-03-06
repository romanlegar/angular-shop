import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/components/orders/orders.module';
import { ProductsModule } from './products/products.module';
import { CartService } from './shared/services/Cart/cart.service';
import { BooksService } from './shared/services/Books/books.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [CartService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
