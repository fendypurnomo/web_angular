import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent {
	constructor(public loading: LoadingService) {}

	ngOnInit(): void {
		this.loading.show();

		setTimeout(() => {
			this.loading.hide();
		}, 250);
	}
}
