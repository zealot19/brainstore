import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { ExternalDriver } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class ExternalDriverService {
  constructor(private http: HttpClient) {}

  list(search?: string): Observable<ExternalDriver[]> {
    const params: Record<string, string> = { page_size: '200' };
    if (search) params['search'] = search;
    return this.http.get<ExternalDriver[]>(FLEET.externalDrivers, { params });
  }

  create(data: Record<string, unknown>): Observable<ExternalDriver> {
    return this.http.post<ExternalDriver>(FLEET.externalDrivers, data);
  }

  update(id: string, data: Record<string, unknown>): Observable<ExternalDriver> {
    return this.http.patch<ExternalDriver>(FLEET.externalDriver(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.externalDriver(id));
  }
}
