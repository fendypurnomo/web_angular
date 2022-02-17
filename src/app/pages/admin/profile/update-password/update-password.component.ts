import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidator } from 'src/app/shared/helpers';
import { ProfileService, LoadingService, ToastService } from 'src/app/shared/services';

@Component({
	selector: 'profile-update-password',
	templateUrl: './update-password.component.html',
	styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
	form!: FormGroup;
	btnLoading: boolean = false;
	submitted: boolean = false;

	constructor(
		private el: ElementRef,
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private profileService: ProfileService,
		private customValidator: CustomValidator,
		private toastService: ToastService,
		public loading: LoadingService
	) {}

	ngOnInit(): void {
		this.loading.show();

		this.form = this.fb.group(
			{
				oldPassword: ['', Validators.required],
				newPassword: ['', [Validators.required, Validators.minLength(8)]],
				confirmNewPassword: ['', Validators.required]
			},
			{
				validator: [
					this.customValidator.MatchPassword('newPassword', 'confirmNewPassword'),
					this.customValidator.createPasswordStrength('newPassword')
				]
			}
		);

		setTimeout(() => {
			this.loading.hide();
		}, 250);
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

		this.profileService.updatePassword(this.route.snapshot.params.username, this.form.value).subscribe(
			(res: any) => {
				if (res.status === 'passwordUpdated') {
					this.toastService.success('Kata sandi telah diperbaharui', { keepAfterRouteChange: true });
					window.history.back();
				} else {
					if (res.status = 'passwordWrong') {
						this.f['oldPassword'].setErrors({ passwordWrong: true });
					}
					this.el.nativeElement.querySelector('#oldPassword').focus();
					return;
				}
			}
		).add(() => (this.btnLoading = false));
	}
}
