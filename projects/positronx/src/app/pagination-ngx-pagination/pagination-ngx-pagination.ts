import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
	selector: 'app-pagination-ngx-pagination',
	templateUrl: './pagination-ngx-pagination.html',
})
export class PaginationNGXPaginationComponent implements OnInit {
	POSTS: any;
	page = 1;
	count = 0;
	tableSize: number = 3;
	tableSizes = [3, 6, 9, 12];
	currentIndex = 0;

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.fetchPosts();
	}

	fetchPosts(): void {
		this.postService.getAllPosts().subscribe(
			(response: any) => {
				this.POSTS = response.data;
				console.log(response);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	onTableDataChange(event: number) {
		this.page = event;
		this.fetchPosts();
	}

	onTableSizeChange(event: any): void {
		this.tableSize = event.target.value;
		this.page = 1;
		this.fetchPosts();
	}
}
