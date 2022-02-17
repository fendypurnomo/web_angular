import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/services';

@Component({
	selector: 'profile-update-photo',
	templateUrl: './update-photo.component.html',
	styleUrls: ['./update-photo.component.css'],
})
export class UpdatePhotoComponent implements OnInit {
	form!: FormGroup;
	btnLoading: boolean = false;
	submitted: boolean = false;
	imageURL!: string;
	progress = 0;

	constructor(private fb: FormBuilder, public loading: LoadingService) {}

	ngOnInit(): void {
		this.loading.show();

		this.form = this.fb.group({
			avatar: [null],
			file: ['', Validators.required],
		});

		this.imageURL = 'https://assets.local/assets/img/ci4-img/default.jpg';

		setTimeout(() => {
			this.loading.hide();
		}, 250);
	}

	showPreview(event: any): void {
		const file: File = event.target.files[0];
		this.form.patchValue({
			avatar: file,
		});
		this.form.get('avatar')?.updateValueAndValidity();

		const reader = new FileReader();
		reader.onload = () => {
			this.imageURL = reader.result as string;
		};
		reader.readAsDataURL(file);
	}

	onSubmit(): void {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		this.btnLoading = true;

		console.warn(this.form.value);
	}
}
