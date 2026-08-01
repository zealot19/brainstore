import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { Parking } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class ParkingService {

  constructor(private http: HttpClient) {}

  list(opts?: { search?: string }): Observable<Parking[]> {
    let params = new HttpParams().set('page_size', '500');
    if (opts?.search) params = params.set('search', opts.search);
    return this.http.get<Parking[]>(FLEET.parking, { params });
  }

  get(id: string): Observable<Parking> { return this.http.get<Parking>(FLEET.parkingItem(id)); }
  create(data: Record<string, unknown>): Observable<Parking> { return this.http.post<Parking>(FLEET.parking, data); }
  update(id: string, data: Record<string, unknown>): Observable<Parking> { return this.http.patch<Parking>(FLEET.parkingItem(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(FLEET.parkingItem(id)); }
}
