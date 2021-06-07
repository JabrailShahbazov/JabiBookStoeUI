import {Component, OnInit} from '@angular/core';
import {bookWiew, GetBookModule} from '../../model/Book/get-book.module';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              private route: ActivatedRoute) {
  }

  books: [bookWiew];

  ngOnInit(): void {
    this.dataStorageService.getBooks().subscribe(data => {
      this.books = data.items;
    });
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number) {
    this.dataStorageService.deleteBook(id);

  }
}
