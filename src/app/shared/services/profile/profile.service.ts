import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Profile } from 'src/app/models';
import { environment } from 'src/environments/environment';

const url = `${environment.apiURL}/admin/`;

@Injectable({ providedIn: 'root' })
export class ProfileService {
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
	};

	constructor(private http: HttpClient) {}

	show(username: string): Observable<Profile> {
		return this.http
			.get<Profile>(url + `profile/${username}`)
			.pipe(
				catchError(
					this.handleError<Profile>(`showProfile username=${username}`)
				)
			);
	}

	edit(username: string): Observable<Profile> {
		return this.http
			.get<Profile>(url + `profile/${username}/edit`)
			.pipe(
				catchError(
					this.handleError<Profile>(`editProfile username=${username}`)
				)
			);
	}

	update(username: string, data: Profile): Observable<any> {
		return this.http
			.put(url + `profile/${username}`, data)
			.pipe(catchError(this.handleError<any>('updateProfile')));
	}

	updatePassword(username: string, data: any): Observable<any> {
		return this.http
			.post(url + `profile/updatePassword/${username}`, data)
			.pipe(catchError(this.handleError<any>('updatePassword')));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);

			// this.log(`${operation} failed: ${error.message}`);

			return of(result as T);
		};
	}
}
