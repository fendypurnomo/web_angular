import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const endpoint = 'https://jsonplaceholder.typicode.com/posts';
const endpoint = 'https://ci4.api/api/positronx/pagination';

@Injectable({ providedIn: 'root' })
export class PostService {
	constructor(private http: HttpClient) {}

	getAllPosts(): Observable<any> {
		return this.http.get(endpoint);
	}
}
