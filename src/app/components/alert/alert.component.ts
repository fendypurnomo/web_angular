import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from 'src/app/models';
import { AlertService } from 'src/app/shared/services';

@Component({
	selector: 'alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {
	@Input() id = 'default-alert';
	@Input() fade = true;

	alerts: Alert[] = [];
	alertSubscription!: Subscription;
	routeSubscription!: Subscription;

	constructor(private router: Router, private alertService: AlertService) {}

	ngOnInit() {
		this.alertSubscription = this.alertService.onAlert(this.id).subscribe(
			alert => {
				if (!alert.message) {
					this.alerts = this.alerts.filter(x => (x.keepAfterRouteChange));
					this.alerts.forEach(x => (x.keepAfterRouteChange = false));
					return;
				}

				this.alerts.push(alert);

				if (alert.autoClose) {
					setTimeout(() => this.removeAlert(alert), 5000);
				}
			}
		);

		this.routeSubscription = this.router.events.subscribe(
			event => {
				if (event instanceof NavigationStart) {
					this.alertService.clear(this.id);
				}
			}
		);
	}

	ngOnDestroy() {
		this.alertSubscription.unsubscribe();
		this.routeSubscription.unsubscribe();
	}

	removeAlert(alert: Alert) {
		if (!this.alerts.includes(alert)) return;

		if (this.fade) {
			alert.fade = true;

			setTimeout(() => {
				this.alerts = this.alerts.filter(x => (x !== alert));
			}, 1000);
		} else {
			this.alerts = this.alerts.filter(x => (x !== alert));
		}
	}

	cssClass(alert: Alert) {
		if (alert?.type === undefined) return;

		const classes = ['alert alert-dismissable w-100 mb-0'];

		const alertTypeClass = {
			[AlertType.Success]: 'alert-success',
			[AlertType.Error]: 'alert-danger',
			[AlertType.Info]: 'alert-info',
			[AlertType.Warning]: 'alert-warning'
		};

		classes.push(alertTypeClass[alert.type]);

		if (alert.fade) {
			classes.push('fade');
		}

		return classes.join(' ');
	}
}
