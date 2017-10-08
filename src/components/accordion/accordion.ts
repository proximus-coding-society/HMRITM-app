import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

@Component({
  selector: 'ion-card-accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit
{
  @Input('expanded') accordionExpanded_in: any;
  @Input('title') title_in: string;
  @Input('color') color_in: string;
  @ViewChild("cc") cardContent: any;
  iconName: string;

  constructor(public renderer : Renderer) {
    
  }

  ngOnInit()
  {
    // console.log(typeof(this.accordionExpanded_in))
    if (this.accordionExpanded_in == null) {
      this.accordionExpanded_in = false;
      this.iconName = "arrow-forward";
      console.log('setting accordion to false explicitly');
    }
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 100ms, padding 100ms");
    this.initAccordion();
  }

  initAccordion() {
    if(this.accordionExpanded_in)
    {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","6000px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","0px 0px");
      this.iconName = "arrow-forward";
    }
    else
    {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height","0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","0px 16px");
      this.iconName = "arrow-down";
    }
  }

  toggleAccordion() {
    this.accordionExpanded_in = !this.accordionExpanded_in;
    this.iconName = this.accordionExpanded_in ? "arrow-down" : "arrow-forward";
    this.initAccordion();
  }

}
