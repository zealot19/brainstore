import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { VehicleListItem, VehicleDetail, FleetStats, FleetAlerts } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class VehicleService {

  constructor(private http: HttpClient) {}

  list(opts?: { status?: string; category?: string; search?: string; is_active?: boolean }): Observable<VehicleListItem[]> {
    let params = new HttpParams().set('page_size', '200');
    if (opts?.status)                params = params.set('status', opts.status);
    if (opts?.category)              params = params.set('category', opts.category);
    if (opts?.search)                params = params.set('search', opts.search);
    if (opts?.is_active !== undefined) params = params.set('is_active', String(opts.is_active));
    return this.http.get<VehicleListItem[]>(FLEET.vehicles, { params });
  }

  get(id: string): Observable<VehicleDetail> {
    return this.http.get<VehicleDetail>(FLEET.vehicle(id));
  }

  create(data: Record<string, unknown>): Observable<VehicleDetail> {
    return this.http.post<VehicleDetail>(FLEET.vehicles, data);
  }

  update(id: string, data: Record<string, unknown>): Observable<VehicleDetail> {
    return this.http.patch<VehicleDetail>(FLEET.vehicle(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.vehicle(id));
  }

  updateOdometer(id: string, data: { value_km: number; date?: string; note?: string }): Observable<{ current_odometer: number }> {
    return this.http.post<{ current_odometer: number }>(FLEET.vehicleOdometer(id), data);
  }

  fleetStats(): Observable<FleetStats> {
    return this.http.get<FleetStats>(FLEET.stats);
  }

  fleetAlerts(days = 30): Observable<FleetAlerts> {
    const params = new HttpParams().set('days', String(days));
    return this.http.get<FleetAlerts>(FLEET.alerts, { params });
  }
}