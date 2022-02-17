import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
	placeholderLoading: boolean = true;

	constructor() {}

	show() {
		this.placeholderLoading = true;
	}

	hide() {
		this.placeholderLoading = false;
	}
}
