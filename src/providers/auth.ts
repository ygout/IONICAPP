import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {

  public token: any;
  public user: any;

  constructor(public http: Http, public storage: Storage) { }

  checkAuthToken(){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
        resolve(value);
      });
    });
  }

  createAccount(details){
  return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-type', 'application/x-www-form-urlencoded')

      this.http.post('https://apirestwebapp.herokuapp.com/auth/users', JSON.stringify(details), {headers: headers})
        .subscribe(res => {

          let data = res.json();
          this.user = data.user;
          this.token = data.token;

          this.storage.set('token', data.token);

          resolve(data);

        }, (err) => {
          reject(err);
        });
  });
}

login(credentials){
  return new Promise((resolve, reject) => {
      let headers = new Headers();
      var body = `name=${credentials.name}&password=${credentials.password}`;
      headers.append('Content-type', 'application/x-www-form-urlencoded');
        this.http.post('https://apirestwebapp.herokuapp.com/authenticate', body, {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}
}
