import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {AuthorsComponent} from './authors/authors.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {AddEditBookComponent} from './books/add-edit-book/add-edit-book.component';

const routes: Routes = [
  {path: '', redirectTo: '/book', pathMatch: 'full'},
  {
    path: 'book', component: BooksComponent,
    children: [
      {path: '', component: BookDetailComponent},
      // {path: '/new', component: AddEditBookComponent},
    ]
  },
  {path: 'author', component: AuthorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgbPaginationModule, NgbAlertModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
