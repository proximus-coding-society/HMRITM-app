import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AccordionComponent],
	imports: [
		IonicModule.forRoot(AccordionComponent)
	],
	exports: [AccordionComponent]
})
export class ComponentsModule {}
