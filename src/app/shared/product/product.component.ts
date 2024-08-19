import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() book: any;
  isProductInCart: boolean = false;

  constructor(private cartService: CartService, private router: Router) {

  }

  public ngOnInit(): void {

  }
  public addToCart(book: any) {
    this.cartService.addProductToCart(book);
    this.isProductInCart = !this.isProductInCart; // true
  }

  public goToCart() {
    this.router.navigate(["/cart"]);
  }
}
