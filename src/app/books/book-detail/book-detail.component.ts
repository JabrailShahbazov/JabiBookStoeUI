import {Component, OnInit} from '@angular/core';
import {bookWiew} from '../../model/Book/get-book.module';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {EditBook} from '../../model/Book/editBook';
import {InBookAtor} from '../../model/Book/GettAuthorWithBook';
import {CreateBook} from '../../model/Book/createBook';
import {LoginConformation} from '../../auth/loginConformation';

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

  idBook: number;
  editMode = false;
  books: [bookWiew];
  authorWithBook: [InBookAtor];
  editBook: EditBook;
  createBook: CreateBook = new CreateBook();

  ngOnInit(): void {
    this.dataStorageService.getBooks().subscribe(data => {
      this.books = data.items;
    });
    this.dataStorageService.getAuthorsWithBook().subscribe(data => {
      this.authorWithBook = data.items;
    });
  }
  get involvedUser(): boolean {
    return LoginConformation.involvedUser;
  }
  // tslint:disable-next-line:typedef
  onDelete(id: number) {
    this.dataStorageService.deleteBook(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  // tslint:disable-next-line:typedef
  open(content, id: number) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.idBook = id;
    }, (reason) => {
      console.log(id);
    });
  }

  // tslint:disable-next-line:typedef
  openNew(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //
    }, (reason) => {

      console.log(reason);
    });
  }

  // tslint:disable-next-line:typedef
  onCreateSubmit(form: NgForm) {
    this.dataStorageService.createBook(this.createBook).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  onUpdateSubmit(form: NgForm) {
    const value = form.value;
    this.editBook = new EditBook(value.publishDate, value.description);
    this.dataStorageService.updateBook(this.idBook, this.editBook).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    });
  }
}

