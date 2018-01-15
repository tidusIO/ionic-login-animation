import { QuotesProvider } from './../../providers/quotes/quotes';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public quote: any = {};

  constructor(
    public navCtrl: NavController,
    public quotesProvider: QuotesProvider
  ) {
    this.quotesProvider.getRandomQuote().subscribe(data => {
      this.quote = data;
    })
  }

}
