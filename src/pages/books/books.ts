import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';

/*
  Generated class for the Books page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})
export class BooksPage {

  loading: any;
  menu: any;

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController, public menuCtrl: MenuController) {
    this.menu = menuCtrl;
    this.menu.enable(true, "sideMenu")
  }

  ionViewDidLoad() {
    this.showLoader();
      //  Check if user have token
      this.authService.checkAuthToken().then((result) => {
          this.loading.dismiss();
          if(!result){
            this.navCtrl.setRoot(LoginPage);
          }
      }, (err) => {
          this.loading.dismiss();
      });
  }

  showLoader(){
      this.loading = this.loadingCtrl.create({
          content: 'Loading...'
      });

      this.loading.present();
  }
}
