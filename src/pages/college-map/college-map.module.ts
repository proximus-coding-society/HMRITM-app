import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollegeMapPage } from './college-map';

@NgModule({
  declarations: [
    CollegeMapPage,
  ],
  imports: [
    IonicPageModule.forChild(CollegeMapPage),
  ],
})
export class CollegeMapPageModule {}
