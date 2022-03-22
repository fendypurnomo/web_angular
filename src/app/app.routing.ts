import { Routes } from '@angular/router';

// Admin & Auth Component
import { AuthLayoutComponent } from './layouts/auth/auth.component';
import { AdminLayoutComponent } from './layouts/admin/admin.component';
import { PageNotFoundComponent } from './pages/404/404.component';

export const AppRouting: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signout', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Laman tak tersedia!' }
  }
];
