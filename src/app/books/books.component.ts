import {Component, OnInit} from '@angular/core';
import {LoginConformation} from '../auth/loginConformation';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  involvedUser: LoginConformation;

  constructor() {
  }

  ngOnInit(): void {
    this.involvedUser = true;
  }

}
