import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[AutofocusInvalid]' })
export class AutofocusInvalidDirective {
  constructor(private el: ElementRef) {}

  @HostListener('submit')

  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

    if (invalidControl) {
      setTimeout(() => {
        invalidControl.focus();
      }, 250);
    }
  }
}