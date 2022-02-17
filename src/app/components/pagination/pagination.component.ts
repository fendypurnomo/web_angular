import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pageable, Page } from 'src/app/models';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
	@Input() page!: Page<any>;
	@Output() previousPageEvent = new EventEmitter();
	@Output() nextPageEvent = new EventEmitter();
	@Output() pageEvent = new EventEmitter();
	@Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();

	pageSizeList = Pageable.pageSizes;

	previousPage(): void {
		this.previousPageEvent.emit(null);
	}

	nextPage(): void {
		this.nextPageEvent.emit(null);
	}

	updatePage(pageNumber: any): void {
		this.pageEvent.emit(Number(pageNumber));
	}

	updatePageSize(pageSize: any): void {
		let perPage: HTMLInputElement = pageSize.target.value;
		this.pageSizeEvent.emit(Number(perPage));
	}
}
