import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {token} from './token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  URL = 'https://localhost:44335';

  getToken(password: string, userName: string): Observable<token> {
    const body = new HttpParams()
      .set('client_id', 'BookStore_App')
      .set('grant_type', 'password')
      .set('username', userName)
      .set('password', password)
      .set('scope', 'BookStore');
    return this.http.post<token>(`${this.URL}/connect/token`, body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  logout(): Observable<token> {
    return this.http.get<token>(`${this.URL}/api/account/logout`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}
