import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { UserService } from '../../providers/user-service';
import { BookService } from '../../providers/book-service';
import { BarcodeScanner } from 'ionic-native';

/*
  Generated class for the Books page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
  providers: [UserService,BookService]
})
export class BooksPage {

  loading: any;
  menu: any;
  unread_books: any;
  read_books: any;
  isbn: any;
  booksIsbn: any;

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController, public menuCtrl: MenuController, public userService: UserService, public bookService: BookService) {
    this.loadBooks();
    this.menu = menuCtrl;
    this.menu.enable(true, "sideMenu")
  }

  ionViewDidLoad() {
    // TODO checkAuthToken cause double connection
    // this.showLoader();
    //   //  Check if user have token
    //   this.authService.checkAuthToken().then((result) => {
    //       this.loading.dismiss();
    //       if(!result){
    //         this.navCtrl.setRoot(LoginPage);
    //       }
    //   }, (err) => {
    //       this.loading.dismiss();
    //   });
  }

  showLoader(){
      this.loading = this.loadingCtrl.create({
          content: 'Loading...'
      });

      this.loading.present();
  }

  scan(){
    this.bookService.loadByIsbn(this.isbn)
    .then(data => {
      this.booksIsbn =data;
      console.log( this.booksIsbn);
    });


    // BarcodeScanner.scan().then((barcodeData) => {
    //  this.isbn = barcodeData.text;
    // }, (err) => {
    //   // An error occurred
    // });
  }
  loadBooks(){
    this.userService.load()
    .then(data => {
      this.unread_books = data["unread_books"];
      this.read_books = data["read_books"];
    });
  }
}
