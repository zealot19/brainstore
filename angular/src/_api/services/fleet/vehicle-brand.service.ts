import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { VehicleBrand } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class VehicleBrandService {

  constructor(private http: HttpClient) {}

  list(search?: string): Observable<VehicleBrand[]> {
    let params = new HttpParams().set('page_size', '200');
    if (search) params = params.set('search', search);
    return this.http.get<VehicleBrand[]>(FLEET.brands, { params });
  }

  create(data: { name: string; country_of_origin?: string }): Observable<VehicleBrand> {
    return this.http.post<VehicleBrand>(FLEET.brands, data);
  }

  update(id: string, data: { name?: string; country_of_origin?: string }): Observable<VehicleBrand> {
    return this.http.patch<VehicleBrand>(FLEET.brand(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.brand(id));
  }
}