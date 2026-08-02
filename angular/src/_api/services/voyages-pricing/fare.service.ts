import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_PRICING } from '../../config/api.config';
import { Fare, RoutePoint } from '../../models/voyages-pricing.models';

@Injectable({ providedIn: 'root' })
export class FareService {
  constructor(private http: HttpClient) {}

  list(routeId?: string): Observable<Fare[]> {
    let params = new HttpParams().set('page_size', '500');
    if (routeId) params = params.set('route_id', routeId);
    return this.http.get<Fare[]>(VOYAGES_PRICING.fares, { params });
  }
  get(id: string): Observable<Fare> { return this.http.get<Fare>(VOYAGES_PRICING.fare(id)); }
  create(data: Record<string, unknown>): Observable<Fare> { return this.http.post<Fare>(VOYAGES_PRICING.fares, data); }
  update(id: string, data: Record<string, unknown>): Observable<Fare> { return this.http.patch<Fare>(VOYAGES_PRICING.fare(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES_PRICING.fare(id)); }
  bulkDelete(ids: string[]): Observable<unknown> { return this.http.post(VOYAGES_PRICING.faresBulkDelete, { ids }); }
  routePoints(routeId: string): Observable<RoutePoint[]> { return this.http.get<RoutePoint[]>(VOYAGES_PRICING.routePoints(routeId)); }
}
