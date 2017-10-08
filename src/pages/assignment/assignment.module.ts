import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentPage } from './assignment';

@NgModule({
  declarations: [
    AssignmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentPage),
  ],
})
export class AssignmentPageModule {}
