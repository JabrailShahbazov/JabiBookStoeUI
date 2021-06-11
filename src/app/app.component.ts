import {Component, OnInit} from '@angular/core';
import {LoginConformation} from './auth/loginConformation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    LoginConformation.involvedUser = false;
  }

  get involvedUser(): boolean {
    return LoginConformation.involvedUser;
  }
}
