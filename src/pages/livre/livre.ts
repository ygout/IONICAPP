import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookService} from '../../providers/book-service';
import { BarcodeScanner } from 'ionic-native';

/*
  Generated class for the Livre page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-livre',
  templateUrl: 'livre.html',
  providers: [BookService],

})
export class LivrePage {
  public books: any;
  public isbn: any;


  constructor(public navCtrl: NavController,public bookService: BookService) {
    this.loadPeople();
  }
  scan(){
    BarcodeScanner.scan().then((barcodeData) => {
     this.isbn = barcodeData.text;
    }, (err) => {
      // An error occurred
    });
  }
  loadPeople(){

    this.bookService.load()
    .then(data => {
      this.books = data;

    });
  }

  ionViewDidLoad() {
    console.log('Hello LivrePage Page');
  }

}
