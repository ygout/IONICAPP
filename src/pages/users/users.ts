import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { UserService } from '../../providers/user-service';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [UserService]
})

export class UsersPage {
  loading: any;
  menu: any;
  user: any;
  unreadBooks:any;

  constructor(public navCtrl: NavController, public authService: Auth, public storage: Storage, public loadingCtrl: LoadingController, public menuCtrl: MenuController, public userService: UserService) {
    this.loadUser();
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
  loadUser(){
    this.storage.get('user').then((value) => {
      this.user = value;
    });
  }
}
