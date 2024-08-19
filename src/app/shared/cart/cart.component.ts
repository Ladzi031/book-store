import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  constructor(private router: Router, private cartService: CartService) {
  }

  public ngOnInit(): void {
    this.cartItems = this.cartService.getAllCartItems();
  }



  public goToHome() {
    this.router.navigate(["/home"]);
  }

}
