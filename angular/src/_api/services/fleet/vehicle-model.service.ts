import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { FleetVehicleModel } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class VehicleModelService {

  constructor(private http: HttpClient) {}

  list(opts?: { brand_id?: string; search?: string }): Observable<FleetVehicleModel[]> {
    let params = new HttpParams().set('page_size', '200');
    if (opts?.brand_id)     params = params.set('brand_id', opts.brand_id);
    if (opts?.search)       params = params.set('search', opts.search);
    return this.http.get<FleetVehicleModel[]>(FLEET.models, { params });
  }

  create(data: Record<string, unknown>): Observable<FleetVehicleModel> {
    return this.http.post<FleetVehicleModel>(FLEET.models, data);
  }

  update(id: string, data: Record<string, unknown>): Observable<FleetVehicleModel> {
    return this.http.patch<FleetVehicleModel>(FLEET.vehicleModel(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.vehicleModel(id));
  }
}