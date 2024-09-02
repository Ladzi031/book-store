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

  public getPriceDetailsInCartItem(product: any) {
    let priceDetails = {
      discountedPrice: (product.price * product.count) - (product.discount) / 100 + (product.price * product.count),
      price: product.count * product.price
    }
    return priceDetails;
  }


  public incrementItemQuantity(product: any) {
    let index = this.cartProducts.findIndex((item) => {
      return item.isbn === product.isbn;
    });
    this.cartProducts[index].count++;
    this.getPriceDetailsInCartItem(product); // isn't observables or signals a great choice for this?
    this.cartSubject.next(this.cartProducts);
  }

  public decrementItemQuantity(product: any) {
    let index = this.cartProducts.findIndex((item) => {
      return item.isbn === product.isbn;
    });
    this.cartProducts[index].count--;
    this.getPriceDetailsInCartItem(product); // observables/subject/signals
    this.cartSubject.next(this.cartProducts);
  }


  public removeItemFromCart(product: any) {
    if (window.confirm("Are You Sure?")) {
      let index = this.cartProducts.findIndex((item) => {
        return item.isbn === product.isbn;
      });
      this.cartProducts.splice(index, 1);
      this.cartSubject.next(this.cartProducts);
    }
  }

  getBilling(cartItems: any): any {
    let billingDetails = {
      price: 0,
      discount: 0,
      delivery: 0
    };
    cartItems.forEach((item: any) => {
      billingDetails.price = billingDetails.price + (item.price + item.count);
      billingDetails.discount = billingDetails.discount + ((item.discount / 100 * item.price) * item.count);
      billingDetails.price >= 1500 ? billingDetails.delivery = 0 : billingDetails.delivery = 50;
    });

    return billingDetails;
  }
}
// for the function getPriceDetailsInCartItem, that is within other function if the change is reflected in the front-end,
// that would be due the change-detection framework baked with-in angular