import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the BookService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BookService {
  data: any;
  public token: any;

  constructor(public http: Http, public storage: Storage ) {
  }
  // Load all books users
  load() {
    let headers = new Headers();

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.storage.get('token').then((value) => {
        headers.append('x-access-token', value);
        // We're using Angular HTTP provider to request the data,
        // then on the response, it'll map the JSON data to a parsed JS object.
        // Next, we process the data and resolve the promise with the new data.
        this.http.get('https://apirestwebapp.herokuapp.com/auth/books', {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            this.data = data;
            resolve(this.data);
          });
      });

    });
}

loadByIsbn(isbn){
  let headers = new Headers();

  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }

  // don't have the data yet
  return new Promise(resolve => {

      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('http://isbndb.com/api/v2/json/1IBIOD0S/book/'+ isbn)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });


  });
}
}
