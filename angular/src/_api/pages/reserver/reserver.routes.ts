import { Routes } from '@angular/router';

export const Reserver_routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./reserver-layout.component').then(m => m.ReserverLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./search/search.component').then(m => m.RsvSearchComponent) },
    ],
  },
];
