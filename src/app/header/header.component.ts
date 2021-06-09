import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorService} from '../auth/author.service';
import {AuthorLoginModel} from '../auth/authorLogin.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {

  }

}
