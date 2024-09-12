import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any[] = [];
  constructor(private booksService: BooksService) {

  }

  public ngOnInit(): void {
    this.booksService.getAllBooks().subscribe({
      next: (result) => {
        this.books = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.booksService.sortSubject.subscribe((sortCriterion: any) => {
      this.books = this.booksService.sortBooks(sortCriterion);
    } )
  }


}
