import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
})
export class SignupComponent {
	form: any = {
		username: null,
		email: null,
		password: null,
	};

	isSuccessful = false;
	isSignUpFailed = false;
	errorMessage = '';

	constructor(private authService: AuthService) {}

	onSubmit(): void {
		const { username, email, password } = this.form;

		this.authService.register(username, email, password).subscribe(
			(data) => {
				this.isSuccessful = true;
				this.isSignUpFailed = false;
				console.log(data);
			},
			(err) => {
				this.errorMessage = err.error.message;
				this.isSignUpFailed = true;
			}
		);
	}
}
