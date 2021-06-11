import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorService} from '../auth/author.service';
import {Router} from '@angular/router';
import {LoginConformation} from '../auth/loginConformation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthorService, private router: Router) {
  }


  ngOnInit(): void {
    LoginConformation.involvedUser = true;
  }

  get involvedUser(): boolean {
    return LoginConformation.involvedUser;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout().subscribe(data => {
      LoginConformation.involvedUser = false;
      console.warn(`${this.involvedUser} Header Login`);
      this.router.navigate(['/login']);
    });
  }


}
