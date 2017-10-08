import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavParams } from 'ionic-angular';

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
  
  constructor(public navParams: NavParams) {
    this.pages = [
      {
        title: 'Home',
        handler: () => {
          this.nav.setRoot('TabsPage', this.navParams.data);
        },
        icon: 'home'
      },
      {
        title: 'Time Table',
        handler: () => {
          this.nav.setRoot('TimeTablePage', this.navParams.data);
        },
        icon: 'calendar'
      },
      {
        title: 'Planner',
        handler: () => {
          this.nav.setRoot('PlannerPage', this.navParams.data);
        },
        icon: 'bookmarks'
      },
      {
        title: 'Attendance',
        handler: () => {
          this.nav.setRoot('AttendancePage', this.navParams.data);
        },
        icon: 'body'
      },
      {
        title: 'Assignment Manager',
        handler: () => {
          this.nav.setRoot('AssignmentPage', this.navParams.data);
        },
        icon: 'checkbox-outline'
      },
      {
        title: 'Map to College',
        handler: () => {
          this.nav.setRoot('CollegeMapPage', this.navParams.data);
        },
        icon: 'locate'
      }
    ];
  }

}
