import { Routes } from '@angular/router';

export const Reserver_routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./reserver-layout.component').then(m => m.ReserverLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./search/search.component').then(m => m.RsvSearchComponent) },
      { path: 'voyage/:tripId', loadComponent: () => import('./trip-detail/trip-detail.component').then(m => m.RsvTripDetailComponent) },
      { path: 'voyage/:tripId/reserver', loadComponent: () => import('./booking/booking.component').then(m => m.RsvBookingComponent) },
      { path: 'statut/:requestId', loadComponent: () => import('./status/status.component').then(m => m.RsvStatusComponent) },
    ],
  },
];
