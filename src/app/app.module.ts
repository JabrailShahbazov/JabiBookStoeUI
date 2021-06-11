import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { AuthorsComponent } from './authors/authors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { AuthComponent } from './auth/auth.component';
import { DropdownDirective } from './shared/dropdown.directive';


// // tslint:disable-next-line:typedef
// export function configureAuth(oidcConfigService: OidcConfigService) {
//   return () =>
//     oidcConfigService.withConfig({
//       clientId: 'BookStore_App',
//       stsServer: 'https://localhost:44335',
//       responseType: 'code',
//       redirectUrl: window.location.origin,
//       postLogoutRedirectUri: window.location.origin,
//       scope: 'offline_access openid profile role email phone BookStore',
//       silentRenew: true,
//       useRefreshToken: true,
//       renewTimeBeforeTokenExpiresInSeconds: 10,
//       logLevel: LogLevel.Debug,
//     });
// }

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    AuthorsComponent,
    BookDetailComponent,
    AuthorDetailComponent,
    AuthComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule,
  ],
  providers: [
  //   OidcConfigService,
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: configureAuth,
  //     deps: [OidcConfigService],
  //     multi: true,
  //   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
