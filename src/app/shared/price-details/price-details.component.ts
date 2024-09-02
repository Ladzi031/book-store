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
  }

  public getBillingDetails() {
    let billiingDetails = this.cartService.getBilling(this.cartItems);
    this.cartItemsPrice = billiingDetails.price;
    this.cartItemsDiscount = billiingDetails.discount;
    this.deliveryCharge = billiingDetails.delivery;
  }
}
