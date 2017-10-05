import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabs: Array<{
    component: string;
    title: string;
    icon: string;
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      {
        title: 'Home',
        component: 'HomePage',
        icon: 'home'
      },
      {
        title: 'Settings',
        component: 'HomePage',
        icon: 'construct'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
