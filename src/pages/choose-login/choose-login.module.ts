import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseLoginPage } from './choose-login';

@NgModule({
  declarations: [
    ChooseLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseLoginPage),
  ],
})
export class ChooseLoginPageModule {}
