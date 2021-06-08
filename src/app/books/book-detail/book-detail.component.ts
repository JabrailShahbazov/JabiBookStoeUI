import {Component, OnInit} from '@angular/core';
import {bookWiew, GetBookModule} from '../../model/Book/get-book.module';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {EditBook} from '../../model/Book/editBook';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  idN: number = null;
  editMode = false;
  books: [bookWiew];
  editBook: EditBook;
  closeResult = '';

  ngOnInit(): void {
    this.dataStorageService.getBooks().subscribe(data => {
      this.books = data.items;
    });
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number) {
    this.dataStorageService.deleteBook(id).subscribe({
      next: data => {
        this.dataStorageService.getBooks().subscribe();
        console.log('Is deleted');
      },
      error: data => {
        console.log('Error Data');
      }
    });

  }


  // tslint:disable-next-line:typedef
  open(content, id: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log(id);
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    const value = form.value;
    this.editBook = new EditBook(value.publishDate, value.description);
    this.dataStorageService.updateBook(this.idN, this.editBook).subscribe(data => {
      this.dataStorageService.getBooks().subscribe();
      console.log(data);
    });
  }
}

