import {Component, OnInit} from '@angular/core';
import {AuthorLoginModel} from './authorLogin.model';
import {AuthorService} from './author.service';
import {Router} from '@angular/router';
import {LoginConformation} from './loginConformation';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginModel: AuthorLoginModel = new AuthorLoginModel();
  returnErrorData: [];

  get involvedUser(): boolean {
    return LoginConformation.involvedUser;
  }

  constructor(public authService: AuthorService, private rooter: Router) {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.getToken(this.loginModel.password, this.loginModel.username).subscribe(
      data => {
        document.cookie = `IdentityToken=${data.access_token}; expires=${data.expires_in}; Secure;`;
        this.rooter.navigate(['/book']);
        LoginConformation.involvedUser = true;
        console.warn(`${this.involvedUser} AuthService Login`);
      },
      errorData => {
        // @ts-ignore
        this.returnErrorData = errorData.error.error_description;
        LoginConformation.involvedUser = false;
        console.warn(`${this.involvedUser} AuthService login`);
      });
  }

  ngOnInit(): void {
    LoginConformation.involvedUser = false;
  }

}
