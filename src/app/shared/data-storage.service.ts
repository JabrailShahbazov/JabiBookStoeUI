import {Injectable} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GetBookModule} from '../model/Book/get-book.module';
import {Observable} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  token = this.oidcSecurityService.getToken();
  pathURL = 'https://localhost:44335';

  constructor(public oidcSecurityService: OidcSecurityService,
              public http: HttpClient) {
  }

  getBooks(): Observable<GetBookModule> {
    return this.http.get<GetBookModule>(this.pathURL + '/api/app/book', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }

}
