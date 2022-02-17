import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = `${environment.apiUrl}`;

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	login(username: string, password: string): Observable<any> {
		return this.http.post(
			apiUrl + 'signin',
			{ username, password },
			httpOptions
		);
	}

	register(username: string, email: string, password: string): Observable<any> {
		return this.http.post(
			apiUrl + 'signup',
			{ username, email, password },
			httpOptions
		);
	}
}
