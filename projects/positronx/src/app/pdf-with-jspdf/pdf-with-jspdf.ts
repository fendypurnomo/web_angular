import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
	selector: 'app-pdf-with-jspdf',
	templateUrl: './pdf-with-jspdf.html',
})
export class PdfWithJspdfComponent {
	@ViewChild('htmlData')
	htmlData!: ElementRef;

	USERS = [
		{ id: 1, name: 'A', email: 'a@email.com', phone: '10001' },
		{ id: 2, name: 'B', email: 'b@email.com', phone: '10002' },
		{ id: 3, name: 'C', email: 'c@email.com', phone: '10003' },
		{ id: 4, name: 'D', email: 'd@email.com', phone: '10004' },
		{ id: 5, name: 'E', email: 'e@email.com', phone: '10005' },
	];

	constructor() {}

	public openPDF(): void {
		let DATA: any = document.getElementById('htmlData');

		html2canvas(DATA).then((canvas) => {
			let fileWidth = 208;
			let fileHeight = (canvas.height * fileWidth) / canvas.width;

			const FILEURI = canvas.toDataURL('image/png');

			let PDF = new jsPDF('p', 'mm', 'a4');
			let position = 0;

			PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
			PDF.save('demo.pdf');
		});
	}
}
