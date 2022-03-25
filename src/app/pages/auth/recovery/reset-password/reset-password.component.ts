import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services';
import { CustomValidator } from 'src/app/shared/helpers';

@Component({ selector: 'recovery-account', templateUrl: './reset-password.component.html' })

export class ResetPasswordComponent implements OnInit {
  form!: FormGroup;
  btnLoading = false;
  submitted = false;
  inputType = 'password';
  showHideClass = 'fa-eye';
  token!: string;

  constructor(
    private el: ElementRef,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private customValidator: CustomValidator
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['', Validators.required]
    },
    {
      validator: [
        this.customValidator.MatchPassword('newPassword', 'confirmNewPassword'),
        this.customValidator.createPasswordStrength('newPassword')
      ]
    });

    this.route.queryParams.subscribe((params) => (this.token = params.token));
  }

  showHide() {
    if (this.form.get('newPassword') !== null) {
      this.el.nativeElement.querySelector('#newPassword').focus();

      if (this.inputType == 'password') {
        this.inputType = 'text';
        this.showHideClass = 'fa-eye-slash';
      } else {
        this.inputType = 'password';
        this.showHideClass = 'fa-eye';
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.btnLoading = false;
      return;
    }

    this.btnLoading = true;

    this.authService.recoveryAccount(this.form.value, '3', this.token).subscribe((res: any) => {
      if (!res.success) { return; }

      this.router.navigate(['/signin'], { relativeTo: this.route });
    }).add(() => (this.btnLoading = false));
  }

  get f() {
    return this.form.controls;
  }
}