import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services';

@Component({
	selector: 'recovery-account',
	templateUrl: './check-otp.component.html',
})
export class CheckOtpComponent implements OnInit {
	form!: FormGroup;
	btnLoading = false;
	submitted = false;

	token!: string;

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			digit1: ['', Validators.required],
			digit2: ['', Validators.required],
			digit3: ['', Validators.required],
			digit4: ['', Validators.required],
			digit5: ['', Validators.required],
			digit6: ['', Validators.required],
		});

		this.route.queryParams.subscribe((params) => (this.token = params.token));
	}

	get f() {
		return this.form.controls;
	}

	move(from: any, to: any) {
		if (from.length != 0) {
			to.focus();
		} else {
			from.focus();
		}
	}

	onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		this.btnLoading = true;

		this.authService
			.recoveryAccount(this.form.value, '2', this.token)
			.subscribe((res) => {
				if (!res.success) {
					return;
				}
				this.router.navigate(['../resetPassword'], {
					queryParams: { token: res.token },
					relativeTo: this.route,
				});
			})
			.add(() => (this.btnLoading = false));
	}
}
