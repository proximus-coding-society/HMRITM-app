import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'TabsPage';

  pages: Array<{
    title: string;
    handler: any;
    icon: string;
  }>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      {
        title: 'Home',
        handler: () => {
          this.nav.setRoot('TabsPage');
        },
        icon: 'home'
      }
    ];
  }

}
