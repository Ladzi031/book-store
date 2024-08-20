import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
  discountedPrice: any;
  itemPrice: any;
  constructor(private cartService: CartService) {

  }

  public ngOnInit(): void {
    this.getPriceDetails(this.cartItem); // call to init the variables above
  }

  public getPriceDetails(item: any) {
    // these are two method calls, this could be implemented in a proper way!
    this.discountedPrice = this.cartService.getPriceDetailsInCartItem(item).discountedPrice;
    this.itemPrice = this.cartService.getPriceDetailsInCartItem(item).price;
  }
  // a nifty trick for method re-use and other general stuff

  public decrementItemQuantity(cartItem: any) {
    this.cartService.decrementItemQuantity(cartItem);
    this.getPriceDetails(cartItem);
  }

  public incrementItemQuantity(cartItem: any) {
    this.cartService.incrementItemQuantity(cartItem);
    this.getPriceDetails(cartItem);
  }

  public removeItem(cartItem: any) {
    this.cartService.removeItemFromCart(cartItem);
  }
}
// part 7 at start!