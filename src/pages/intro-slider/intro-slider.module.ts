import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroSliderPage } from './intro-slider';

@NgModule({
  declarations: [
    IntroSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroSliderPage),
  ],
})
export class IntroSliderPageModule {}
