import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Navbar, sidebar & footer component
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
	imports: [CommonModule, RouterModule, NgbModule],
	declarations: [
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
		ToastComponent,
		AlertComponent,
	],
	exports: [
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
		ToastComponent,
		AlertComponent,
	],
})
export class ComponentModule {}
