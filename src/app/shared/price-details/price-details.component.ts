import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {
  cartItems: any[] = [];
  cartItemsPrice: any;
  cartItemsDiscount: any;
  deliveryCharge: any;

  constructor(private cartService: CartService) {

  }
  public ngOnInit(): void {
    this.cartItems = this.cartService.getAllCartItems();
    this.getBillingDetails();
    this.cartService.cartSubject.subscribe({
      next: (items: any) => {
        this.cartItems = items;
        this.getBillingDetails();
        /* 
          whenever the is a state change in the cartProducts, it will trigger the observable to emit the new state change to all subscribers (1 to 1) and this code here will run, in turn will trigger the getBillingDetails() method in this component, the change will be reflected in template

          There is surely a better way of doing things, we could heavily make use of Subjects and Observable to achieve the same behaviour in a much cleaner and easier to understand way
        */
      }
    })
  }

  public getBillingDetails() {
    let billiingDetails = this.cartService.getBilling(this.cartItems);
    this.cartItemsPrice = billiingDetails.price;
    this.cartItemsDiscount = billiingDetails.discount;
    this.deliveryCharge = billiingDetails.delivery;
  }
}
