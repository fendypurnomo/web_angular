import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message, Pageable } from 'src/app/models';
import { environment } from 'src/environments/environment';

const url = `${environment.apiURL}/admin/`;
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class MessagesService {
	constructor(private http: HttpClient) {}

	public getMessages(pageable: Pageable): Observable<Message[]> {
		return this.http
			.get<Message[]>(
				url +
					`messages?page=` +
					pageable.pageNumber +
					`&perPage=` +
					pageable.pageSize,
				httpOptions
			)
			.pipe(catchError(this.handleError<Message[]>('getMessage', [])));
	}

	public getMessagesUnread(): Observable<Message[]> {
		return this.http
			.get<Message[]>(url + `messages`, httpOptions)
			.pipe(catchError(this.handleError<Message[]>('getMessage', [])));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);

			// this.log(`${operation} failed: ${error.message}`);

			return of(result as T);
		};
	}

	// private log(message: string) {
	// 	this.messageService.add(`HeroService: ${message}`);
	// }
}
