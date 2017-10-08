import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { IonicModule, IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [AccordionComponent],
	imports: [
		IonicPageModule.forChild(AccordionComponent)
	],
	exports: [AccordionComponent]
})
export class ComponentsModule {}
