import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string = "";
  numberOfProductsInCart: number = 0;
  constructor(private cartService: CartService) {
  }
  public ngOnInit(): void {
    this.cartService.cartSubject.subscribe((result: any) => {
      this.numberOfProductsInCart = result.length;
    });
  }
}
