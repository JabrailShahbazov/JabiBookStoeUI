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

  deleteBook(id: number) {
    return this.http.delete(this.pathURL + '/api/app/book/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    }).subscribe({
      next: data => {
        this.getBooks();
        console.log('Delete successful');
      },
      error: error => {
        const serrorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }

  editBook(id: number) {
    return this.http.put(this.pathURL + '/api/app/book/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    }).subscribe({
      next: data => {
        this.getBooks();
        console.log('Delete successful');
      },
      error: error => {
        const serrorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }

}
