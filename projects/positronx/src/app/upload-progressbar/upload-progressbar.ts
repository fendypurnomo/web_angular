import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../_services/file-upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
	selector: 'app-upload-progressbar',
	templateUrl: './upload-progressbar.html',
})
export class UploadProgressbarComponent implements OnInit {
	form!: FormGroup;
	progress: number = 0;

	constructor(
		private fb: FormBuilder,
		private fileUploadService: FileUploadService
	) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			name: [''],
			avatar: [null],
		});
	}

	uploadFile(event: any) {
		const file: File = event.target.files[0];

		this.form.patchValue({
			avatar: file,
		});

		this.form.get('avatar')?.updateValueAndValidity();
	}

	submitUser() {
		this.fileUploadService
			.addUser(this.form.value.name, this.form.value.avatar)
			.subscribe((event: HttpEvent<any>) => {
				switch (event.type) {
					case HttpEventType.Sent:
						console.log('Request has been made!');
						break;
					case HttpEventType.ResponseHeader:
						console.log('Response header has been received!');
						break;
					case HttpEventType.UploadProgress:
						this.progress = Math.round((event.loaded / event!.total!) * 100);
						console.log(`Uploaded! ${this.progress}%`);
						break;
					case HttpEventType.Response:
						console.log('User successfully created!', event.body);
						setTimeout(() => {
							this.progress = 0;
						}, 1500);
				}
			});
	}
}
