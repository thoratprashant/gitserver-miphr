import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'others/blank',
    pathMatch: 'full'
  }, 
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
        data: { title: 'Auth' }
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule),
        data: { title: 'Others', breadcrumb: 'OTHERS' }
      }, 
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

