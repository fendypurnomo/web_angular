import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { AutofocusInvalidDirective } from './autofocus-invalid.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AutofocusDirective, AutofocusInvalidDirective],
  exports: [AutofocusDirective, AutofocusInvalidDirective]
})

export class DirectivesModule {}