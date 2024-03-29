import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AutofocusDirective } from './directive/autofocus.directive';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [
		AppComponent,
		AutofocusDirective,
		SigninComponent,
		SignupComponent,
		HomeComponent,
		ProfileComponent,
		BoardAdminComponent,
		BoardModeratorComponent,
		BoardUserComponent,
	],
	imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
	providers: [authInterceptorProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
