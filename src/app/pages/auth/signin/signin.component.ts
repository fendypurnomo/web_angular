import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService, AuthService } from 'src/app/shared/services';

@Component({ selector: 'signin', templateUrl: './signin.component.html' })

export class SigninComponent implements OnInit {
  form!: FormGroup;
  btnLoading = false;
  submitted = false;
  inputType = 'password';
  showHideClass = 'fa-eye';

  constructor(
    private el: ElementRef,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showHide() {
    if (this.form.get('password') !== null) {
      this.el.nativeElement.querySelector('#password').focus();

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

    if (this.form.invalid) { return; }

    this.btnLoading = true;

    this.authService.signin(this.form.value).subscribe((res: any) => {
      if (!res.success) {
        const field = Object.keys(res.messages);

        if (res.error === 'accountNotFound') {
          this.f[field[0]].setErrors({ accountNotFound: true });
        } else if (res.error === 'accountHasNotBeenActivated') {
          this.f[field[0]].setErrors({ accountHasNotBeenActivated: true });
        } else if (res.error === 'accountBlocked') {
          this.f[field[0]].setErrors({ accountBlocked: true });
        } else {
          this.f[field[0]].setErrors({ invalidPassword: true });
        }

        this.el.nativeElement.querySelector('#' + field[0]).focus();
        return;
      }

      this.storage.saveLoggedIn(res.isLoggedIn);
      this.storage.saveToken(res.accessToken);
      this.storage.saveUser(res.response.data);
      this.router.navigate(['/dashboard']);
    }).add(() => (this.btnLoading = false));
  }

  get f() {
    return this.form.controls;
  }
}