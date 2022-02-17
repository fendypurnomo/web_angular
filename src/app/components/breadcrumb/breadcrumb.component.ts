import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'breadcrumbs',
	templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbsComponent {
	constructor(public loading: LoadingService) {}
}
