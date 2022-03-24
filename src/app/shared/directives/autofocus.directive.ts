import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[Autofocus]' })

export class AutofocusDirective {
  constructor(private el: ElementRef) {
    setTimeout(() => { this.el.nativeElement.focus(); }, 250);
  }
}