import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';
import { DirectivesModule } from 'src/app/shared/directives/directive.module';

// Auth Components
import { SigninComponent, SignupComponent, CheckEmailComponent, CheckOtpComponent, ResetPasswordComponent } from 'src/app/pages/auth';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(AuthRoutes), DirectivesModule ],
  declarations: [ SigninComponent, SignupComponent, CheckEmailComponent, CheckOtpComponent, ResetPasswordComponent ]
})

export class AuthLayoutModule {}