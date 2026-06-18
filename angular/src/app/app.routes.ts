import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/index',
    pathMatch: 'full'
  },
  //Auth
  {path:'',loadChildren: () => import('./features/auth/auth.routes').then((m) => m.Auth_routes,)},
  //Pages
  {path:'',loadChildren: () => import('./features/pages/pages.routes').then((m) => m.Pages_routes,)},

  //Error
  {
    path: 'error', loadComponent: () => import('./features/error/error.component').then((m) => m.ErrorComponent,),
    children: [
      { path: '', redirectTo: 'error-404', pathMatch: 'full' },
      { path: 'error-404', loadComponent: () => import('./features/error/error-404/error-404.component').then(m => m.Error404Component) },
      { path: 'error-500', loadComponent: () => import('./features/error/error-500/error-500.component').then(m => m.Error500Component) },
    ],
  },
  
  //Fetures
  
  {
    path: '**',
    redirectTo: 'error/error-404',
    pathMatch: 'full',
  }

] as const;
