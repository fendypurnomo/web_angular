import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Injectable({ providedIn: 'root' })
export class SidebarService {
	smallSidebar: boolean = false;

	constructor(private storage: StorageService) {}

	toggleSidebar() {
		this.smallSidebar = !this.smallSidebar;
		if (this.storage.getSidebarToggled) {
			this.storage.saveSidebarToggled('');
		} else {
			this.storage.saveSidebarToggled('sidebar-toggled');
		}
	}
}
