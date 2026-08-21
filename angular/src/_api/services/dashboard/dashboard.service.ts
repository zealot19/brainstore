import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);

  treasury(): Observable<any> { return this.http.get(`${API_BASE}/treasury/stats/`); }
  fleet():    Observable<any> { return this.http.get(`${API_BASE}/fleet/stats/`); }
  trips():    Observable<any> { return this.http.get(`${API_BASE}/voyages/trips/stats/`); }
  bookings(): Observable<any> { return this.http.get(`${API_BASE}/voyages/booking/stats/`); }
  parcels():  Observable<any> { return this.http.get(`${API_BASE}/voyages/consignment/stats/`); }

  recentBookings(limit = 6): Observable<any> {
    return this.http.get(`${API_BASE}/voyages/booking/bookings/`,
      { params: new HttpParams().set('page_size', String(limit)) });
  }
  recentMovements(limit = 6): Observable<any> {
    return this.http.get(`${API_BASE}/treasury/transactions/`,
      { params: new HttpParams().set('page_size', String(limit)) });
  }
}
