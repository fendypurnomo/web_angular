import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models';

const url = `${environment.apiURL}/auth/`;
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class AuthService {
	reqUri!: string;

	constructor(private http: HttpClient) {}

	signin(data: User): Observable<any> {
		return this.http.post(url + 'signin', data, httpOptions);
	}

	signup(data: User): Observable<any> {
		return this.http.post(url + 'signup', data, httpOptions);
	}

	recoveryAccount(data: any, step: any, token: string): Observable<any> {
		if (step == '2') {
			this.reqUri = 'checkOtp?step=2&token=' + token;
		} else if (step == '3') {
			this.reqUri = 'resetPassword?step=3&token=' + token;
		} else {
			this.reqUri = 'checkEmail';
		}

		return this.http.post(
			url + 'recoveryAccount/' + this.reqUri,
			data,
			httpOptions
		);
	}
}
