import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {
	StorageService,
	LoadingService,
	ProfileService,
	ToastService,
} from 'src/app/shared/services';

@Component({
	selector: 'profile-update-info',
	templateUrl: './update-info.component.html',
	styleUrls: ['./update-info.component.css'],
})
export class UpdateInfoComponent implements OnInit {
	form!: FormGroup;
	btnLoading = false;
	submitted = false;

	constructor(
		private fb: FormBuilder,
		private profileService: ProfileService,
		private route: ActivatedRoute,
		private router: Router,
		private storage: StorageService,
		private toastService: ToastService,
		public loading: LoadingService
	) {}

	ngOnInit(): void {
		this.loading.show();

		this.form = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(5)]],
			firstname: ['', [Validators.required, Validators.minLength(2)]],
			lastname: ['', [Validators.required, Validators.minLength(2)]],
			gender: ['', Validators.required],
		});

		this.profileService
			.edit(this.route.snapshot.params.username)
			.pipe(first())
			.subscribe((res: any) => {
				if (!res.success) {
					return;
				}
				this.form.patchValue(res.response.data);
				this.loading.hide();
			});
	}

	get f() {
		return this.form.controls;
	}

	onSubmit(): void {
		this.submitted = true;
		this.toastService.clear();

		if (this.form.invalid) {
			return;
		}

		this.btnLoading = true;

		this.profileService
			.update(this.route.snapshot.params.username, this.form.value)
			.subscribe((res: any) => {
				if (!res.success) {
					return;
				}
				this.storage.saveUser(this.form.value);
				this.toastService.success('Data telah diperbaharui', {
					keepAfterRouteChange: true,
				});
				// window.history.back();
				this.router.navigate([
					'./dashboard/profile/' + this.form.value.username,
				]);
			})
			.add(() => (this.btnLoading = false));
	}
}
