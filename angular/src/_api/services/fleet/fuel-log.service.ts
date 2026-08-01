import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { FuelLog } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class FuelLogService {
  constructor(private http: HttpClient) {}

  listForVehicle(vehicleId: string): Observable<FuelLog[]> {
    return this.http.get<FuelLog[]>(FLEET.vehicleFuelLogs(vehicleId), { params: { page_size: '200' } });
  }

  create(vehicleId: string, data: Record<string, unknown>): Observable<FuelLog> {
    return this.http.post<FuelLog>(FLEET.vehicleFuelLogs(vehicleId), data);
  }

  update(logId: string, data: Record<string, unknown>): Observable<FuelLog> {
    return this.http.patch<FuelLog>(FLEET.fuelLog(logId), data);
  }

  delete(logId: string): Observable<unknown> {
    return this.http.delete(FLEET.fuelLog(logId));
  }
}
