import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {getAuthors} from '../../model/Author/getAuthor';
import {NgForm} from '@angular/forms';
import {EditBook} from '../../model/Book/editBook';
import {UpdateAuthor} from '../../model/Author/updateAuthor';
import {CreateAuthor} from '../../model/Author/createAuthor';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  authors: [getAuthors];
  idAuthor: number;
  editAuthor: UpdateAuthor;
  createAuthor: CreateAuthor = new CreateAuthor();

  constructor(private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.dataStorageService.getAuthors().subscribe(data => {
      this.authors = data.items;
    });
  }

  // tslint:disable-next-line:typedef
  open(content, id: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.idAuthor = id;
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
  onDelete(id: number) {
    this.dataStorageService.deleteAuthor(id).subscribe(data => {
      this.ngOnInit();
    });
  }


  // tslint:disable-next-line:typedef
  onUpdateSubmit(form: NgForm) {
    const value = form.value;
    this.editAuthor = new UpdateAuthor(value.birthDate, value.shortBio);
    this.dataStorageService.updateAuthor(this.idAuthor, this.editAuthor).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  onCreateSubmit(form: NgForm) {
    this.dataStorageService.createAuthor(this.createAuthor).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    });
  }
}
