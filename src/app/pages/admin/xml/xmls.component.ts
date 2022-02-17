import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'xmls',
	templateUrl: './xmls.component.html',
	styleUrls: ['./xmls.component.css'],
})
export class XmlsComponent implements OnInit {
	constructor(public loading: LoadingService) {}

	ngOnInit(): void {
		this.loading.show();

		setTimeout(() => {
			this.loading.hide();
		}, 250);
	}
}
