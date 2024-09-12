import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl: string = "http://localhost:3000/books";
  books: any[] = [];
  filteredBooks: any;
  sortCriterion: any;
  sortSubject = new Subject();
  constructor(private http: HttpClient) { }

  public getAllBooks() {
    return this.http.get(this.baseUrl).pipe(
      map(
        (book: any) => {
          console.log("with in books, pipe operator call!");
          console.log(book);
          this.books = book;
          this.filteredBooks = this.books;
          // this.filteredBooks POINTS to this books directly and anything that points to it will be aware of the change that happen to it,
          // javascript is pass by reference
          return book
        }
      )
    )
  }

  public getSortCriterion(criterion: any) {
    this.sortCriterion = criterion;
    this.sortSubject.next(this.sortCriterion);
  }

  public sortBooks(criteria: any) {
    switch (criteria) {
      case 'Price(Low to High)':
        console.log("hit!");
        this.filteredBooks.sort((a: any, b: any) => {
          if (a.price < b.price) {
            return -1;
          } else if (a.price > b.price) {
            return 1;
          } else {
            return 0;
          }
        })
        break;
      default:
        console.log('Books-Service --> oops!');
    }
  }
}
// we could use tap operator here!
// this works because, books returned are of some type and this.books is of type any
// otherwise map() purpose is to transform a type to some other type, but here we not really transforming
