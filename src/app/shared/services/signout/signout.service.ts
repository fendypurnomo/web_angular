import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Injectable({ providedIn: 'root' })
export class SignoutService {
	constructor(private storage: StorageService) {}

	signout() {
		this.storage.signOut();
	}
}
