import { DateTimeProvider } from './../../providers/date-time/date-time';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {

  daysList: {
    title: string;
    teacherList?: any;
  }[];
  
  time_table: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dateTime: DateTimeProvider, public afDb: AngularFireDatabase) {
    
    let now = this.dateTime.getDayHoursMinNow();
    console.log(now);
    
    this.afDb.object(`time_table/${this.navParams.data.user.data.class}`).valueChanges().subscribe(time_table => {
      this.time_table = time_table;
      this.daysList = [
        {
          title: 'monday'
        },
        {
          title: 'tuesday',
        },
        {
          title: 'wednesday',
        },
        {
          title: 'thursday',
        },
        {
          title: 'friday',
        }
      ];
      for (let i = 0; i < this.daysList.length; i++) {
        let teacherList = [];
        for (let j = 0; j < 8; j++) {
          teacherList.push(this.navParams.data.teachers[j]);          
        }
        this.daysList[i].teacherList = teacherList;
      }
    });
  }

}
