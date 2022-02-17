import { Component, OnInit } from '@angular/core';
import { Message, Page } from 'src/app/models';
import {
	LoadingService,
	MessagesService,
	PaginationService,
} from 'src/app/shared/services';

@Component({
	selector: 'messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
	messages!: Message[];
	page: Page<any> = new Page();

	constructor(
		public loading: LoadingService,
		private messagesService: MessagesService,
		private paginationService: PaginationService
	) {}

	ngOnInit(): void {
		this.loading.show();
		this.getMessages();
	}

	private getMessages(): void {
		this.messagesService
			.getMessages(this.page.pageable)
			.subscribe((res: any) => {
				this.messages = res.data;
				this.getPager(res.totalRecords, this.page);
				console.log(this.page);
				this.loading.hide();
			});
	}

	private getPager(totalRecords: number, page: Page<any>): void {
		this.paginationService.getPager(totalRecords, page);
	}

	public getPreviousPage(): void {
		this.page.pageable = this.paginationService.getPreviousPage(this.page);
		this.getMessages();
	}

	public getNextPage(): void {
		this.page.pageable = this.paginationService.getNextPage(this.page);
		this.getMessages();
	}

	public getPage(pageNumber: number): void {
		this.page.pageable = this.paginationService.getPage(this.page, pageNumber);
		this.getMessages();
	}

	public getPageInNewSize(pageSize: number): void {
		this.page.pageable = this.paginationService.getPageInNewSize(
			this.page,
			pageSize
		);
		this.getMessages();
	}
}
