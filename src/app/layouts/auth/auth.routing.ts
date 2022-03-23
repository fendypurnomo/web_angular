import { Routes } from '@angular/router';
import { NotLoggedInGuard } from 'src/app/shared/guards';
import {
  SigninComponent,
  SignupComponent,
  CheckEmailComponent,
  CheckOtpComponent,
  ResetPasswordComponent
} from 'src/app/pages/auth';

export const AuthRoutes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    data: { title: 'Masuk' },
    canActivate: [ NotLoggedInGuard ]
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Daftar' },
    canActivate: [ NotLoggedInGuard ]
  },
  {
    path: 'recoveryAccount',
    canActivate: [ NotLoggedInGuard ],
    children: [
      {
        path: '',
        component: CheckEmailComponent,
        data: { title: 'Lupa sandi?' }
      },
      {
        path: 'checkOtp',
        component: CheckOtpComponent,
        data: { title: 'Periksa Kode OTP' }
      },
      {
        path: 'resetPassword',
        component: ResetPasswordComponent,
        data: { title: 'Setel ulang kata sandi' }
      }
    ]
  }
];