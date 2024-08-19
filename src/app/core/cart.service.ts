import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: any[] = [];
  cartSubject: Subject<any[]> = new Subject();
  constructor() { }

  public addProductToCart(product: any) {
    let currrentProduct = { ...product, count: 1 };
    this.cartProducts.push(currrentProduct);
    this.cartSubject.next(this.cartProducts);
    // multi-casting the actual cart to subscribers is actually a good idea, right many subscribers can use this info to their liking!  
  }

  public getAllCartItems() {
    return this.cartProducts;
  }
}
