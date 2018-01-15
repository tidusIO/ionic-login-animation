import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginStatus: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public goToPage() {
    this.loginStatus = 'isprocessing';
    // Simulate request delay with timeout
    setTimeout(() => {
      // Clear in error case
      // this.loginStatus = '';
      // Success case
      this.loginStatus = 'issuccessful';
      // Wait for animation end
      setTimeout(() => {
        this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward', animation: 'ios-transition'}, () => {
          this.loginStatus = '';
        });
      }, 400);
    }, 1100);
  }

}
