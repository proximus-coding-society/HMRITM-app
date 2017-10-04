import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro-slider',
  templateUrl: 'intro-slider.html',
})
export class IntroSliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openLoginPage() {
    this.navCtrl.setRoot('LoginPage');
  }

}
