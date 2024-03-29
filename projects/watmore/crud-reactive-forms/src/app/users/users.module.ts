import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing.module';
import {LayoutComponent} from './layout.component';
import {ListComponent} from './list.component';
import {AddEditComponent} from './add-edit.component';

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, UsersRoutingModule],
	declarations: [LayoutComponent, ListComponent, AddEditComponent]
})
export class UsersModule {}
