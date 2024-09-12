import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/core/books.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string = "";
  numberOfProductsInCart: number = 0;
  isSortMenuVisible: boolean = false;
  criteria: any[] = ['Price(Low to High)'];

  constructor(private cartService: CartService, private router: Router, private bookService: BooksService) {
  }

  public ngOnInit(): void {
    this.cartService.cartSubject.subscribe((result: any) => {
      this.numberOfProductsInCart = result.length;
    });
  }

  public goToCart() {
    this.router.navigate(["/cart"]);
  }

  public sortBooks(criterion: any) {
    this.bookService.sortBooks(criterion);
  }

  public toggleSortMenu() {
    this.isSortMenuVisible = !this.isSortMenuVisible;
  }
}
