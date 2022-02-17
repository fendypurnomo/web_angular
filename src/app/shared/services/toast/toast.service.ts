import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Toast, ToastType } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class ToastService {
	private subject = new Subject<Toast>();
	private defaultId = 'default-toast';

	onToast(id = this.defaultId): Observable<Toast> {
		return this.subject.asObservable().pipe(filter(x => x && x.id === id));
	}

	success(message: string, options?: Partial<Toast>) {
		this.toast(message, ToastType.Success, options);
	}

	error(message: string, options?: Partial<Toast>) {
		this.toast(message, ToastType.Error, options);
	}

	info(message: string, options?: Partial<Toast>) {
		this.toast(message, ToastType.Info, options);
	}

	warning(message: string, options?: Partial<Toast>) {
		this.toast(message, ToastType.Warning, options);
	}

	toast(message: string, type: ToastType, options: Partial<Toast> = {}) {
		const id = options.id || this.defaultId;
		const toast = new Toast(id, type, message, options.autoClose, options.keepAfterRouteChange);
		this.subject.next(toast);
	}

	clear(id = this.defaultId) {
		this.subject.next(new Toast(id));
	}
}
