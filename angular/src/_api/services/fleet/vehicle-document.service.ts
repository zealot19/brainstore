import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { VehicleDocument } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class VehicleDocumentService {
  constructor(private http: HttpClient) {}

  listForVehicle(vehicleId: string): Observable<VehicleDocument[]> {
    return this.http.get<VehicleDocument[]>(FLEET.vehicleDocuments(vehicleId), { params: { page_size: '200' } });
  }

  create(vehicleId: string, data: Record<string, unknown>): Observable<VehicleDocument> {
    return this.http.post<VehicleDocument>(FLEET.vehicleDocuments(vehicleId), data);
  }

  update(id: string, data: Record<string, unknown>): Observable<VehicleDocument> {
    return this.http.patch<VehicleDocument>(FLEET.document(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.document(id));
  }
}
