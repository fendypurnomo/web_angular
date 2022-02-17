import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'server-side',
	templateUrl: './server-side.component.html',
	styleUrls: ['./server-side.component.css'],
})
export class ServerSideComponent implements OnInit {
	constructor(public loading: LoadingService) {}

	ngOnInit(): void {
		this.loading.show();

		setTimeout(() => {
			this.loading.hide();
		}, 250);
	}
}
