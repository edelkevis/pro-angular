import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective {
  constructor(element: ElementRef) {
    element.nativeElement.classList.add('bg-success');
  }
}
