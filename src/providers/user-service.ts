import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  data: any;
  public token: any;

  constructor(public http: Http, public storage: Storage ) {
  }

  // Load all books users
  load() {
    // let headers = new Headers();

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.storage.get('token').then((token) => {
        this.storage.get('user').then((user) => {
          setTimeout(function(){"USER :" + this.user ,10});

          resolve(user);
        });
      });
    });
  }
}
