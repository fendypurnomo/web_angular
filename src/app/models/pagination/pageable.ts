import { Sort } from './sort';

export class Pageable {
	sort!: Sort;
	pageSize: number;
	pageNumber: number;
	offset!: number;
	paged!: boolean;
	unpaged!: boolean;

	static readonly DEFAULT_PAGE_SIZE = 10;
	static readonly FIRST_PAGE_NUMBER = 1;
	static readonly pageSizes = [Pageable.DEFAULT_PAGE_SIZE, 25, 50];

	public constructor() {
		this.pageSize = Pageable.DEFAULT_PAGE_SIZE;
		this.pageNumber = Pageable.FIRST_PAGE_NUMBER;
	}
}
