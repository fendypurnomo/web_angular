import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComponentModule } from './components/component.module';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

// Interceptor
import { authInterceptorProviders, errorInterceptorProviders } from 'src/app/shared/helpers';

// Auth & Admin Component
import { AuthLayoutComponent } from './layouts/auth/auth.component';
import { AdminLayoutComponent } from './layouts/admin/admin.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(AppRouting), ComponentModule ],
  declarations: [ AppComponent, AuthLayoutComponent, AdminLayoutComponent ],
  providers: [ authInterceptorProviders, errorInterceptorProviders, Title ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}