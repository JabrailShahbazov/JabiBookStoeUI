import {Injectable} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GetBookModule} from '../model/Book/get-book.module';
import {Observable} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {EditBook} from '../model/Book/editBook';
import {CreateBook} from '../model/Book/createBook';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  pathURL = 'https://localhost:44335/api/app/book/';
  token = this.oidcSecurityService.getToken();

  tokenHeader = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    }),
  };

  constructor(public oidcSecurityService: OidcSecurityService,
              public http: HttpClient) {
  }

  getBooks(): Observable<GetBookModule> {
    return this.http.get<GetBookModule>(this.pathURL, this.tokenHeader);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.pathURL}${id}`, this.tokenHeader);
  }

  createBook(data: CreateBook): Observable<CreateBook> {
    return this.http.post<CreateBook>(this.pathURL, data, this.tokenHeader);
  }

  updateBook(id: number, data: EditBook): Observable<EditBook> {
    return this.http.put<EditBook>(`${this.pathURL}${id}`, data, this.tokenHeader);
  }

  //
  // findByBook(data:GetBookModule):Observable<GetBookModule>{
  //   return this.http.get<GetBookModule>(`${}`)
  // }

}
