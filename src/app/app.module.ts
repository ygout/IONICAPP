import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';
import { BooksPage } from '../pages/books/books';
import { Auth } from '../providers/auth';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UsersPage,
    BooksPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BooksPage,
    LoginPage,
    UsersPage
  ],
  providers: [Auth, Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
