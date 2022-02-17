import { Directive, ElementRef, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Directive({ selector: '[autofocus]' })
export class AutofocusDirective implements OnInit {
	constructor(private el: ElementRef) {}

	ngOnInit() {
		of(this.el)
			.pipe(
				map((elementRef) => elementRef.nativeElement),
				filter((nativeElement) => !!nativeElement),
				take(1)
			)
			.subscribe((input) => {
				input.focus();
			});
	}
}
