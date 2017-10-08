import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTablePage } from './time-table';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTablePage),
    ComponentsModule
  ]
})
export class TimeTablePageModule {}
