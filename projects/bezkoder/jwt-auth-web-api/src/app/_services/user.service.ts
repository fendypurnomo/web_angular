import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = `${environment.apiUrl}`;

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	getPublicContent(): Observable<any> {
		return this.http.get(apiUrl + 'all', { responseType: 'text' });
	}

	getUserBoard(): Observable<any> {
		return this.http.get(apiUrl + 'user', { responseType: 'text' });
	}

	getModeratorBoard(): Observable<any> {
		return this.http.get(apiUrl + 'mod', { responseType: 'text' });
	}

	getAdminBoard(): Observable<any> {
		return this.http.get(apiUrl + 'admin', { responseType: 'text' });
	}
}
