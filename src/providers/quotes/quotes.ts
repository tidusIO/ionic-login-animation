import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuotesProvider Provider');
  }

  getRandomQuote() {
    return this.http.get<any[]>('assets/data/quotes.json').map(res => {
      return res[Math.floor(Math.random()*res.length)];
    });
  }

}
