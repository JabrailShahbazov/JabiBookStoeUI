import { Injectable } from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRoutingService {

  constructor( public oidcSecurityService: OidcSecurityService,
               public http: HttpClient) {}

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
