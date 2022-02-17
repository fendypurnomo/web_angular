import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services';
import { CustomValidator } from 'src/app/shared/helpers';

@Component({
	selector: 'recovery-account',
	templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
	form!: FormGroup;
	btnLoading = false;
	submitted = false;

	token!: string;

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService,
		private customValidator: CustomValidator
	) {}

	ngOnInit(): void {
		this.form = this.fb.group(
			{
				newPassword: ['', [Validators.required, Validators.minLength(8)]],
				confirmNewPassword: ['', Validators.required],
			},
			{
				validator: [
					this.customValidator.MatchPassword(
						'newPassword',
						'confirmNewPassword'
					),
					this.customValidator.createPasswordStrength('newPassword'),
				],
			}
		);

		this.route.queryParams.subscribe((params) => (this.token = params.token));
	}

	get f() {
		return this.form.controls;
	}

	onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		this.btnLoading = true;

		this.authService
			.recoveryAccount(this.form.value, '3', this.token)
			.subscribe((res: any) => {
				if (!res.success) {
					return;
				}
				this.router.navigate(['/signin'], { relativeTo: this.route });
			})
			.add(() => (this.btnLoading = false));
	}
}
