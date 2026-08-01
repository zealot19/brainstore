import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { AssignmentListItem } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class AssignmentService {
  constructor(private http: HttpClient) {}

  list(opts?: { vehicle_id?: string; status?: string }): Observable<AssignmentListItem[]> {
    const params: Record<string, string> = { page_size: '200' };
    if (opts?.vehicle_id) params['vehicle_id'] = opts.vehicle_id;
    if (opts?.status)     params['status']     = opts.status;
    return this.http.get<AssignmentListItem[]>(FLEET.assignments, { params });
  }

  create(data: Record<string, unknown>): Observable<AssignmentListItem> {
    return this.http.post<AssignmentListItem>(FLEET.assignments, data);
  }

  update(id: string, data: Record<string, unknown>): Observable<AssignmentListItem> {
    return this.http.patch<AssignmentListItem>(FLEET.assignment(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.assignment(id));
  }

  start(id: string, data?: Record<string, unknown>): Observable<AssignmentListItem> {
    return this.http.post<AssignmentListItem>(FLEET.assignmentStart(id), data ?? {});
  }

  complete(id: string, data?: Record<string, unknown>): Observable<AssignmentListItem> {
    return this.http.post<AssignmentListItem>(FLEET.assignmentComplete(id), data ?? {});
  }

  cancel(id: string): Observable<AssignmentListItem> {
    return this.http.post<AssignmentListItem>(FLEET.assignmentCancel(id), {});
  }
}
