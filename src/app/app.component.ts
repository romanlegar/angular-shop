import { Component } from '@angular/core';
import { CartItemModel } from 'src/app/cart/models/CartItemModel';
import { CartService } from 'src/app/shared/services/Cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  components: Array<CartItemModel>;
  count: number;
  constructor(private cartService: CartService) {
    this.components = cartService.getCartItems();
  }
  title = 'Lesson';
  ngOnInit() {
  this.cartService.cust.subscribe(comp => {
     let t = this.cartService.updateTotals();
             this.count=t.count;
             this.components = comp; });
 }
}
