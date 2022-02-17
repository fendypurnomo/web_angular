import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Toast, ToastType } from 'src/app/models';
import { ToastService } from 'src/app/shared/services';

@Component({
	selector: 'toast',
	templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit, OnDestroy {
	@Input() id = 'default-toast';
	@Input() fade = true;

	toasts: Toast[] = [];
	toastSubscribtion!: Subscription;
	routeSubscribtion!: Subscription;

	constructor(private router: Router, private toastService: ToastService) {}

	ngOnInit() {
		this.toastSubscribtion = this.toastService.onToast(this.id).subscribe(
			(toast) => {
				if (!toast.message) {
					this.toasts = this.toasts.filter((x) => (x.keepAfterRouteChange));
					this.toasts.forEach((x) => (x.keepAfterRouteChange = false));
					return;
				}

				this.toasts.push(toast);

				if (toast.autoClose) {
					setTimeout(() => this.removeToast(toast), 3000);
				}
			}
		);

		this.routeSubscribtion = this.router.events.subscribe(
			(event) => {
				if (event instanceof NavigationStart) {
					this.toastService.clear(this.id);
				}
			}
		);
	}

	ngOnDestroy() {
		this.toastSubscribtion.unsubscribe();
		this.routeSubscribtion.unsubscribe();
	}

	removeToast(toast: Toast) {
		if (!this.toasts.includes(toast)) return;

		if (this.fade) {
			toast.fade = true;

			setTimeout(() => {
				this.toasts = this.toasts.filter((x) => (x !== toast));
			}, 1000);
		} else {
			this.toasts = this.toasts.filter((x) => (x !== toast));
		}
	}

	cssClass(toast: Toast) {
		if (toast?.type === undefined) return;

		const classes = ['toast', 'show', 'position-absolute', 'z-index-1'];

		const toastTypeClass = {
			[ToastType.Success]: 'toast-success',
			[ToastType.Error]: 'toast-error',
			[ToastType.Info]: 'toast-info',
			[ToastType.Warning]: 'toast-warning'
		};

		classes.push(toastTypeClass[toast.type]);

		if (toast.fade) {
			classes.push('fade');
		}

		return classes.join(' ');
	}
}
