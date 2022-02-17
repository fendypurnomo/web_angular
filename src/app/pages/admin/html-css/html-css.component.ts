import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'html-css',
	templateUrl: './html-css.component.html',
	styleUrls: ['./html-css.component.css'],
})
export class HtmlCssComponent implements OnInit {
	constructor(public loading: LoadingService) {}

	ngOnInit(): void {
		this.loading.show();

		setTimeout(() => {
			this.loading.hide();
		}, 250);
	}
}
