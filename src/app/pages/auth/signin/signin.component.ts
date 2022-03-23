import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService, AuthService } from 'src/app/shared/services';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
})

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

  get f() {
    return this.form.controls;
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
      if (res.success) {
        this.storage.saveLoggedIn(res.isLoggedIn);
        this.storage.saveToken(res.accessToken);
        this.storage.saveUser(res.response.data);
        this.router.navigate(['/admin']);
      } else {
        if (res.status === 'userNotFound') {
          this.f[res.response.errors[0].field].setErrors({ userNotFound: true });
        } else if (res.status === 'accountUnactivated') {
          this.f[res.response.errors[0].field].setErrors({ accountUnactivated: true });
        } else if (res.status === 'userBlocked') {
          this.f[res.response.errors[0].field].setErrors({ userBlocked: true });
        } else {
          this.f[res.response.errors[0].field].setErrors({ invalidPassword: true });
        }
        this.el.nativeElement.querySelector('#' + res.response.errors[0].field).focus();
        return;
      }
    }).add(() => (this.btnLoading = false));
  }
}