import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CustomValidator {
	MatchPassword(password: string, confirmPassword: string) {
		return (group: AbstractControl) => {
			const form = <FormGroup>group;
			const control = form.controls[password];
			const confirmControl = form.controls[confirmPassword];

			if (confirmControl.errors && !confirmControl.errors.mismatch) {
				return null;
			}

			if (control.value !== confirmControl.value) {
				confirmControl.setErrors({ mismatch: true });
			} else {
				confirmControl.setErrors(null);
			}

			return null;
		};
	}

	createPasswordStrength(password: string) {
		return (group: AbstractControl) => {
			const form = <FormGroup>group;
			const control = form.controls[password];

			if (!control.value) {
				return null;
			}

			if (control.errors && !control.errors.notstrength) {
				return null;
			}

			const hasUpperCase = /[A-Z]+/.test(control.value);
			const hasLowerCase = /[a-z]+/.test(control.value);
			const hasNumeric = /[0-9]+/.test(control.value);
			const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

			if (!passwordValid) {
				control.setErrors({ notstrength: true });
			} else {
				control.setErrors(null);
			}
			return null;
		};
	}
}
