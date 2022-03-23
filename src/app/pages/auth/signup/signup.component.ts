import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/shared/helpers';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {
  form!: FormGroup;
  btnLoading = false;
  submitted = false;

  constructor(
    private el: ElementRef,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private customValidator: CustomValidator
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(2)]],
        lastname: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        gender: ['', Validators.required]
      },
      {
        validator: [
          this.customValidator.MatchPassword('password', 'confirmPassword'),
          this.customValidator.createPasswordStrength('password')
        ]
      }
    )
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) { return; }

    this.btnLoading = true;

    this.authService.signup(this.form.value).subscribe((res: any) => {
      if (!res.success) {
        this.f[res.response.errors[0].field].setErrors({ emailAlready: true });
        this.el.nativeElement.querySelector('#' + res.response.errors[0].field).focus();
        return;
      }
      this.router.navigate(['/signin']);
    }).add(() => (this.btnLoading = false));
  }
}