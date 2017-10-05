import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTablePage } from './time-table';

@NgModule({
  declarations: [
    TimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTablePage),
  ],
})
export class TimeTablePageModule {}
