import { Sort } from './sort';
import { Pageable } from './pageable';

export class Page<T> {
	content!: Array<T>;
	pageable: Pageable;
	size!: number;
	sort!: Sort;
	totalPages!: number;
	totalElements!: number;
	numberOfElements!: number;
	number!: number;

	public constructor() {
		this.pageable = new Pageable();
	}
}
