import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'jscript',
	templateUrl: './jscript.component.html',
	styleUrls: ['./jscript.component.css'],
})
export class JscriptComponent implements OnInit {
	constructor(public loading: LoadingService) {}

	ngOnInit(): void {
		this.loading.show();

		setTimeout(() => {
			this.loading.hide();
		}, 250);
	}
}
