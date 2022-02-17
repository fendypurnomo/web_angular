import { Component, OnInit } from '@angular/core';
import { StorageService, SidebarService, SignoutService } from 'src/app/shared/services';

@Component({
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	constructor(
		private storage: StorageService,
		public sidebar: SidebarService,
		public signout: SignoutService
	) {}

	ngOnInit() {
		if (this.storage.getSidebarToggled) {
			this.sidebar.smallSidebar = true;
		} else {
			this.sidebar.smallSidebar = false;
		}
	}
}
