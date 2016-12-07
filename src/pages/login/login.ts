import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { BooksPage } from '../books/books';
import { SignupPage } from '../signup/signup';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Books page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  name: string;
  password: string;
  loading: any;
  menu: any

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController, public storage: Storage, public menuCtrl: MenuController) {
    this.menu = menuCtrl;
    this.menu.enable(false, "sideMenu")
  }

  // ionViewDidLoad() {
  //      this.showLoader();
  //
  //      //Check if already authenticated
  //      this.authService.checkAuthentication().then((res) => {
  //          console.log("Already authorized");
  //          this.loading.dismiss();
  //          this.navCtrl.setRoot(BooksPage);
  //      }, (err) => {
  //          console.log("Not already authorized");
  //          this.loading.dismiss();
  //      });
  //  }

   login(){
       this.showLoader();

       let credentials = {
           name: this.name,
           password: this.password
       };

       this.authService.login(credentials).then((result) => {
           this.loading.dismiss();
           if(result["success"] == true){
              this.storage.set('token', result["token"]).then(() => {
                console.log('Token has been set');
              });
            // this.storage.set('token', result["token"]);
            this.navCtrl.setRoot(BooksPage);
           }else{
            this.storage.set('token', '');
           }
       }, (err) => {
           this.loading.dismiss();
           console.log("loginerr :" + err);
       });
   }

   launchSignup(){
       this.navCtrl.push(SignupPage);
   }

   showLoader(){
       this.loading = this.loadingCtrl.create({
           content: 'Authenticating...'
       });

       this.loading.present();
   }
}
