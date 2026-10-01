import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface TripCard {
  id: string; header: string; route_label: string; status: string; status_display: string;
  scheduled_departure: string | null;
  tickets_count: number; tickets_revenue: number;
  baggage_count: number; baggage_revenue: number;
  parcels_count: number; parcels_revenue: number;
  total_revenue: number;
}
export interface TripCardsResponse { date_from: string; date_to: string; trips: TripCard[]; }
export interface SeriesResponse { year: number; metric: string; data: number[]; }

@Injectable({ providedIn: 'root' })
export class TransportDashboardService {
  private http = inject(HttpClient);
  private base = `${environment.apiUrl}/voyages/dashboard`;

  loadTrips(dateFrom: string, dateTo: string): Observable<TripCardsResponse> {
    return this.http.get<TripCardsResponse>(`${this.base}/trips/`, { params: { date_from: dateFrom, date_to: dateTo } });
  }
  loadSeries(year: number, metric: string): Observable<SeriesResponse> {
    return this.http.get<SeriesResponse>(`${this.base}/series/`, { params: { year, metric } });
  }
}
