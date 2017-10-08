import { Component, Renderer, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DateTimeProvider } from './../../providers/date-time/date-time';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage implements OnInit {
  @ViewChild("specialCol") col: any;
  now: any = 0;

  daysList: {
    title: string;
    teacherList?: any;
  }[];
  
  time_table: any;
  dayPercent: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dateTime: DateTimeProvider, public afDb: AngularFireDatabase, public renderer: Renderer) {
    this.now = this.dateTime.getDayHoursMinNow();
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
        let dayProgress = 0;
        let incrementProgress = (i < this.now.day + 1);
        for (let j = 0; j < 8; j++) {
          let isPeriodDone = this.now.hours >= j + 9;
          teacherList.push({
            teacher: this.navParams.data.teachers[j],
            isDone: isPeriodDone
          });
          if (!isPeriodDone) {
            // teacherList[j - 1].isLast = true;
            incrementProgress = false;
          }
          if (incrementProgress) {
            dayProgress++;
          }
        }
        if (i <= this.now.day) {
          this.dayPercent = String(Math.ceil((dayProgress / 8) * 100)) + '%';
        }
        this.daysList[i].teacherList = teacherList;
      }
    });
  }

  ngOnInit() {
    // console.log(this.col);
    // this.renderer.setElementStyle(this.col.nativeElement, "webkitTransition", "width 500ms");
  }

}
