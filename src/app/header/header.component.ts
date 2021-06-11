import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorService} from '../auth/author.service';
import {Router} from '@angular/router';
import {LoginConformation} from '../auth/loginConformation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private authService: AuthorService, private router: Router) {
  }

  involvedUser: LoginConformation;

  ngOnInit(): void {
    this.involvedUser = true;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout().subscribe(data => {
      this.involvedUser = false;
      console.warn(`${this.involvedUser} Header Login`);
      this.router.navigate(['/login']);
    });
  }



}
