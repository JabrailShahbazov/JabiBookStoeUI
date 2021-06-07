import {Component, OnInit} from '@angular/core';
import {bookWiew, GetBookModule} from '../../model/Book/get-book.module';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  editMode = false;
  books: [bookWiew];
  closeResult = '';

  ngOnInit(): void {
    this.dataStorageService.getBooks().subscribe(data => {
      this.books = data.items;
    });
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number) {
    this.dataStorageService.deleteBook(id);

  }


  open(content, id: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    if (this.books.length) {
      //console.log(this.books.length);
    }
    if (id == null) {
      console.log('yoxdu');
    } else {
      console.log(id);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
