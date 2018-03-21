import { Directive } from '@angular/core';


@Directive({
  selector: '[hide-tabs]' // Attribute selector
})
export class HideTabsDirective {

  constructor() {
    console.log('Hello HideTabsDirective Directive');
  }

}
