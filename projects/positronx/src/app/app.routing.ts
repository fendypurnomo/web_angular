import { Routes } from '@angular/router';

import { PreviewImageComponent } from './preview-image/preview-image';
import { UploadProgressbarComponent } from './upload-progressbar/upload-progressbar';
import { PaginationNGXPaginationComponent } from './pagination-ngx-pagination/pagination-ngx-pagination';
import { PdfWithJspdfComponent } from './pdf-with-jspdf/pdf-with-jspdf';

export const AppRoutes: Routes = [
	{ path: '', redirectTo: 'file-upload', pathMatch: 'full' },
	{ path: 'file-upload', component: PreviewImageComponent },
	{ path: 'upload-progressbar', component: UploadProgressbarComponent },
	{
		path: 'pagination-ngx-pagination',
		component: PaginationNGXPaginationComponent,
	},
	{ path: 'pdf-with-jspdf', component: PdfWithJspdfComponent },
];
