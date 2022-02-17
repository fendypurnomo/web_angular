import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private alertService: AlertService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError(err => {
				const error = err.error?.message || err.statusText;

				this.alertService.error(error);
				console.error(err);

				return throwError(error);
			})
		);
	}
}

export const errorInterceptorProviders = [
	{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];
