import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { AccidentListItem } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class AccidentService {
  constructor(private http: HttpClient) {}

  list(opts?: { vehicle_id?: string; status?: string; severity?: string }): Observable<AccidentListItem[]> {
    const params: Record<string, string> = { page_size: '200' };
    if (opts?.vehicle_id) params['vehicle_id'] = opts.vehicle_id;
    if (opts?.status)     params['status']     = opts.status;
    if (opts?.severity)   params['severity']   = opts.severity;
    return this.http.get<AccidentListItem[]>(FLEET.accidents, { params });
  }

  create(data: Record<string, unknown>): Observable<AccidentListItem> {
    return this.http.post<AccidentListItem>(FLEET.accidents, data);
  }

  update(id: string, data: Record<string, unknown>): Observable<AccidentListItem> {
    return this.http.patch<AccidentListItem>(FLEET.accident(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.accident(id));
  }

  close(id: string, data?: Record<string, unknown>): Observable<AccidentListItem> {
    return this.http.post<AccidentListItem>(FLEET.accidentClose(id), data ?? {});
  }

  setStatus(id: string, status: string): Observable<AccidentListItem> {
    return this.http.post<AccidentListItem>(FLEET.accidentStatus(id), { status });
  }
}
