import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models';
import {
	StorageService,
	MessagesService,
	SidebarService,
	SignoutService,
} from 'src/app/shared/services';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	messages!: Message[];
	currentUser: any;

	constructor(
		private storage: StorageService,
		private messagesService: MessagesService,
		public sidebar: SidebarService,
		public signout: SignoutService
	) {}

	ngOnInit() {
		this.currentUser = this.storage.getUser();
	}

	getMessages(): void {
		this.messagesService
			.getMessagesUnread()
			.subscribe((res: any) => (this.messages = res.data));
	}
}
