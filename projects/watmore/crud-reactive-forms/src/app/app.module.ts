import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {AlertComponent} from './_components';
import {ErrorInterceptor} from './_helpers';

// used to create fake backend
// import {fakeBackendProvider} from './_helpers';

@NgModule({
	imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
	declarations: [AppComponent, AlertComponent, HomeComponent],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
		// provider used to create fake backend
		// fakeBackendProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
