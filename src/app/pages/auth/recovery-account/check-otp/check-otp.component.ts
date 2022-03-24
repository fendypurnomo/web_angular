import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private el: ElementRef,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({ otp: ['', Validators.required] });
    this.route.queryParams.subscribe((params) => (this.token = params.token));
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.btnLoading = false;
      return;
    }

    this.btnLoading = true;

    this.authService.recoveryAccount(this.form.value, '2', this.token).subscribe((res) => {
      if (!res.success) {
        if (res.error == 'invalidOTPCode'){
          this.f['otp'].setErrors({ invalidOTPCode: true })
        } else {
          this.f['otp'].setErrors({ failed: true })
        }

        this.el.nativeElement.querySelector('#otp').focus();
        return;
      }
 
      this.router.navigate(['../resetPassword'], {
        queryParams: { step: 3, req: 'createNewPassword', token: res.accessToken },
        relativeTo: this.route
      })
    }).add(() => (this.btnLoading = false));
  }

  get f() {
    return this.form.controls;
  }
}