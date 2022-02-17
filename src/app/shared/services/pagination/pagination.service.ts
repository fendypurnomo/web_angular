import { Injectable } from '@angular/core';
import { Page, Pageable } from 'src/app/models';

@Injectable({
	providedIn: 'root',
})
export class PaginationService {
	public getPager(totalRecords: number, page: Page<any>) {
		let pageable = page.pageable;

		let totalPages = Math.ceil(totalRecords / pageable.pageSize);
		if (totalPages < 1) totalPages = 1;

		let startPage!: number, endPage!: number;
		if (totalPages <= 10) {
			startPage = 1;
			endPage = totalPages;
		} else {
			if (pageable.pageNumber <= 6) {
				startPage = 1;
				endPage = 10;
			} else if (pageable.pageNumber + 4 >= totalPages) {
				startPage = totalPages - 9;
				endPage = totalPages;
			}
		}

		let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
			(i) => startPage + i
		);

		let offset = pageable.pageNumber * pageable.pageSize - pageable.pageSize;

		pageable.offset = offset;
		page.totalPages = totalPages;
		page.content = pages;

		return page;
	}

	public getPreviousPage(page: Page<any>): Pageable {
		page.pageable.pageNumber = page.pageable.pageNumber - 1;
		return page.pageable;
	}

	public getNextPage(page: Page<any>): Pageable {
		page.pageable.pageNumber = page.pageable.pageNumber + 1;
		return page.pageable;
	}

	public getPage(page: Page<any>, pageNumber: number): Pageable {
		page.pageable.pageNumber = pageNumber;
		return page.pageable;
	}

	public getPageInNewSize(page: Page<any>, pageSize: number): Pageable {
		page.pageable.pageSize = pageSize;
		page.pageable.pageNumber = Pageable.FIRST_PAGE_NUMBER;
		return page.pageable;
	}
}
