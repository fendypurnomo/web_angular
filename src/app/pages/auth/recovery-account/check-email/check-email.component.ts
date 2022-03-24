import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'recovery-account',
  templateUrl: './check-email.component.html',
})

export class CheckEmailComponent implements OnInit {
  form!: FormGroup;
  btnLoading = false;
  submitted = false;

  constructor(
    private el: ElementRef,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.btnLoading = false;
      return;
    }

    this.btnLoading = true;

    this.authService.recoveryAccount(this.form.value, '1', '').subscribe((res: any) => {
      if (!res.success) {
        this.f['email'].setErrors({ notfound: true });
        this.el.nativeElement.querySelector('#email').focus();
        return;
      }

      this.router.navigate(['./checkOtp'], {
        queryParams: { step: 2, token: res.accessToken },
        relativeTo: this.route
      });
    }).add(() => (this.btnLoading = false));
  }

  get f() {
    return this.form.controls;
  }
}