import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl: string = "http://localhost:3000/books";
  books: any[] = [];
  constructor(private http: HttpClient) { }

  public getAllBooks() {
    return this.http.get(this.baseUrl).pipe(
      map(
        (book: any) => {
          console.log("with in books, pipe operator call!");
          console.log(book);
          this.books = book;
          return book
        }
      )
    )
  }
}
// we could use tap operator here!
// this works because, books returned are of some type and this.books is of type any
// otherwise map() purpose is to transform a type to some other type, but here we not really transforming

