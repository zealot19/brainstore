import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { Route, RouteStop } from '../../models/voyages-config.models';

@Injectable({ providedIn: 'root' })
export class RouteService {
  constructor(private http: HttpClient) {}

  list(search?: string): Observable<Route[]> {
    let params = new HttpParams().set('page_size', '500');
    if (search) params = params.set('search', search);
    return this.http.get<Route[]>(VOYAGES_CONFIG.routes, { params });
  }
  get(id: string): Observable<Route> { return this.http.get<Route>(VOYAGES_CONFIG.route(id)); }
  create(data: Record<string, unknown>): Observable<Route> { return this.http.post<Route>(VOYAGES_CONFIG.routes, data); }
  update(id: string, data: Record<string, unknown>): Observable<Route> { return this.http.patch<Route>(VOYAGES_CONFIG.route(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES_CONFIG.route(id)); }

  listStops(routeId: string): Observable<RouteStop[]> { return this.http.get<RouteStop[]>(VOYAGES_CONFIG.routeStops(routeId)); }
  setStops(routeId: string, stops: { service_point_id: string; distance_from_origin_km?: number | null }[]): Observable<RouteStop[]> {
    return this.http.put<RouteStop[]>(VOYAGES_CONFIG.routeStops(routeId), { stops });
  }
  addStop(routeId: string, data: Record<string, unknown>): Observable<RouteStop> { return this.http.post<RouteStop>(VOYAGES_CONFIG.routeStops(routeId), data); }
  updateStop(routeId: string, stopId: string, data: Record<string, unknown>): Observable<RouteStop> { return this.http.patch<RouteStop>(VOYAGES_CONFIG.routeStop(routeId, stopId), data); }
  deleteStop(routeId: string, stopId: string): Observable<unknown> { return this.http.delete(VOYAGES_CONFIG.routeStop(routeId, stopId)); }
}
