import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	constructor(public loading: LoadingService) {}

	ngOnInit(): void {
		this.loading.show();

		setTimeout(() => {
			this.loading.hide();
		}, 250);
	}
}
