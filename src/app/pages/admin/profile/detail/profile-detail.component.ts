import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/models';
import { ProfileService, LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'profile-detail',
	templateUrl: './profile-detail.component.html',
	styleUrls: ['./profile-detail.component.css'],
})
export class ProfileDetailComponent implements OnInit {
	currentUser!: Profile;

	constructor(
		private route: ActivatedRoute,
		private profileService: ProfileService,
		public loading: LoadingService
	) {}

	ngOnInit(): void {
		this.loading.show();
		this.getProfile(this.route.snapshot.params.username);
	}

	getProfile(username: string): void {
		this.profileService.show(username).subscribe((res: any) => {
			this.currentUser = res.response.data;
			this.loading.hide();
		});
	}
}
