import { Component, OnInit } from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public oidcSecurityService: OidcSecurityService,
    public http: HttpClient) {
  }

  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((auth) => console.log('is authenticated', auth));
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  callApi() {
    const token = this.oidcSecurityService.getToken();

    this.http.get('https://localhost:44335/api/app/book', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
      responseType: 'json'
    })
      .subscribe((data: any) => {
        console.log('api result:', data);
      });
  }
}
