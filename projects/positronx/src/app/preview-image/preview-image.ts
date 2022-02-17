import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-preview-image',
	templateUrl: 'preview-image.html',
})
export class PreviewImageComponent implements OnInit {
	imageURL!: string;
	form!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			avatar: [null],
			name: [''],
		});
	}

	// Image Preview
	showPreview(event: any) {
		const file: File = event.target.files[0];

		this.form.patchValue({
			avatar: file,
		});

		this.form.get('avatar')?.updateValueAndValidity();

		// File Preview
		const reader = new FileReader();

		reader.onload = () => {
			this.imageURL = reader.result as string;
		};
		reader.readAsDataURL(file);
	}

	// Submit Form
	submit() {
		console.log(this.form.value);
	}
}
