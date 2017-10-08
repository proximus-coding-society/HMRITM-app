import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlannerPage } from './planner';

@NgModule({
  declarations: [
    PlannerPage,
  ],
  imports: [
    IonicPageModule.forChild(PlannerPage),
  ],
})
export class PlannerPageModule {}
