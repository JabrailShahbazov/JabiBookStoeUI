import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {AuthorsComponent} from './authors/authors.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthorDetailComponent} from './authors/author-detail/author-detail.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {
    path: 'book', component: BooksComponent,
    children: [
      {path: '', component: BookDetailComponent},
    ]
  },
  {
    path: 'author', component: AuthorsComponent, children: [
      {path: '', component: AuthorDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgbPaginationModule, NgbAlertModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
