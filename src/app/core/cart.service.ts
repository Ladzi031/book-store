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
    let currrentProduct = {...product, count: 1};
    this.cartProducts.push(currrentProduct);
    this.cartSubject.next(this.cartProducts);
  }
}
