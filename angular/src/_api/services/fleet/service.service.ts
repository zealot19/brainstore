import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { Service, ServiceAttachment } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  constructor(private http: HttpClient) {}

  list(opts?: { vehicle_id?: string; status?: string }): Observable<Service[]> {
    const params: Record<string, string> = { page_size: '200' };
    if (opts?.vehicle_id) params['vehicle_id'] = opts.vehicle_id;
    if (opts?.status)     params['status']     = opts.status;
    return this.http.get<Service[]>(FLEET.services, { params });
  }

  create(data: Record<string, unknown>): Observable<Service> {
    return this.http.post<Service>(FLEET.services, data);
  }

  update(id: string, data: Record<string, unknown>): Observable<Service> {
    return this.http.patch<Service>(FLEET.service(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.service(id));
  }

  start(id: string): Observable<Service> {
    return this.http.post<Service>(FLEET.serviceStart(id), {});
  }

  complete(id: string, data: Record<string, unknown>): Observable<Service> {
    return this.http.post<Service>(FLEET.serviceComplete(id), data);
  }

  cancel(id: string): Observable<Service> {
    return this.http.post<Service>(FLEET.serviceCancel(id), {});
  }

  listAttachments(id: string): Observable<ServiceAttachment[]> {
    return this.http.get<ServiceAttachment[]>(FLEET.serviceAttachments(id));
  }

  uploadAttachment(id: string, form: FormData): Observable<ServiceAttachment> {
    return this.http.post<ServiceAttachment>(FLEET.serviceAttachments(id), form);
  }

  deleteAttachment(id: string, attId: string): Observable<unknown> {
    return this.http.delete(FLEET.serviceAttachment(id, attId));
  }
}
