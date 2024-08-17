import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() book: any;
  isProductInCart: boolean = false;

  constructor(private cartService: CartService) {

  }
  public addToCart(book: any) {
    this.cartService.addProductToCart(book);
    this.isProductInCart = !this.isProductInCart; // true
  }
}
