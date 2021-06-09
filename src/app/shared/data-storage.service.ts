import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GetBookModule} from '../model/Book/get-book.module';
import {Observable} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {EditBook} from '../model/Book/editBook';
import {CreateBook} from '../model/Book/createBook';
import {GettAuthorWithBook} from '../model/Book/GettAuthorWithBook';
import {GetAuthor} from '../model/Author/getAuthor';
import {CreateAuthor} from '../model/Author/createAuthor';
import {UpdateAuthor} from '../model/Author/updateAuthor';
import {AuthorService} from '../auth/author.service';
import {AuthorLoginModel} from '../auth/authorLogin.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  BookURL = 'https://localhost:44335/api/app/book';
  AuthorURL = 'https://localhost:44335/api/app/author';
  token = document.cookie.split('; ')
    .find(row => row.startsWith('IdentityToken='))
    .split('=')[1];

  tokenHeader = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    }),
  };

  constructor(public oidcSecurityService: AuthorService,
              public http: HttpClient) {
  }

  getBooks(): Observable<GetBookModule> {
    return this.http.get<GetBookModule>(this.BookURL, this.tokenHeader);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.BookURL}/${id}`, this.tokenHeader);
  }

  createBook(data: CreateBook): Observable<CreateBook> {
    return this.http.post<CreateBook>(this.BookURL, data, this.tokenHeader);
  }

  updateBook(id: number, data: EditBook): Observable<EditBook> {
    return this.http.put<EditBook>(`${this.BookURL}/${id}`, data, this.tokenHeader);
  }

  getAuthorsWithBook(): Observable<GettAuthorWithBook> {
    return this.http.get<GettAuthorWithBook>(`${this.BookURL}/author-lookup`, this.tokenHeader);
  }


  getAuthors(): Observable<GetAuthor> {
    return this.http.get<GetAuthor>(this.AuthorURL, this.tokenHeader);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(`${this.AuthorURL}/${id}`, this.tokenHeader);
  }

  createAuthor(data: CreateAuthor): Observable<CreateAuthor> {
    return this.http.post<CreateAuthor>(this.AuthorURL, data, this.tokenHeader);
  }

  updateAuthor(id: number, data: UpdateAuthor): Observable<UpdateAuthor> {
    return this.http.put<UpdateAuthor>(`${this.AuthorURL}/${id}`, data, this.tokenHeader);
  }

  //
  // findByBook(data:GetBookModule):Observable<GetBookModule>{
  //   return this.http.get<GetBookModule>(`${}`)
  // }

}
