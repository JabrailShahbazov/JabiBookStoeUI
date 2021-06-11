import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorService} from '../auth/author.service';
import {AuthorLoginModel} from '../auth/authorLogin.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private authService: AuthorService, private router: Router) {
  }

  isLogout = true;

  ngOnInit(): void {
    this.isLogout = true;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout().subscribe(data => {
      this.isLogout = false;
      this.router.navigate(['/login']);
    });
  }



}
