import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

@Component({
  selector: 'ion-card-accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit
{
  accordionExpanded = false;
  @Input('title') title_in;
  @Input('color') color_in;
  // @Input('itemList') list_in: Array<any>;
  @ViewChild("cc") cardContent: any;

  constructor(public renderer : Renderer) {
    
  }
  ngOnInit()
  {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 100ms, padding 100ms");
  }
  toggleAccordion()
  {
    if(this.accordionExpanded)
    {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","0px 16px");
    }
    else
    {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","2500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","0px 0px");
    }
    this.accordionExpanded = !this.accordionExpanded;
  }

}
