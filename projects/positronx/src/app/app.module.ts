import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { PreviewImageComponent } from './preview-image/preview-image';
import { UploadProgressbarComponent } from './upload-progressbar/upload-progressbar';
import { PaginationNGXPaginationComponent } from './pagination-ngx-pagination/pagination-ngx-pagination';
import { PdfWithJspdfComponent } from './pdf-with-jspdf/pdf-with-jspdf';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(AppRoutes),
		NgxPaginationModule,
	],
	declarations: [
		AppComponent,
		PreviewImageComponent,
		UploadProgressbarComponent,
		PaginationNGXPaginationComponent,
		PdfWithJspdfComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
