import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUDIT } from '../../config/api.config';

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string | null;
  user_display: string | null;
  company: string | null;
  company_name: string | null;
  module: string;
  module_label: string;
  action: string;
  action_label: string;
  target_type: string;
  target_id: string;
  description: string;
  changes: Record<string, { old: string; new: string }>;
  device_id: string;
  ip_address: string | null;
}

export interface AuditFilters {
  module?: string;
  action?: string;
  user?: string;
  date_from?: string;
  date_to?: string;
}

@Injectable({ providedIn: 'root' })
export class AuditService {

  private readonly http = inject(HttpClient);

  getLogs(filters: AuditFilters = {}): Observable<AuditLog[]> {
    let params = new HttpParams();
    if (filters.module)    params = params.set('module',    filters.module);
    if (filters.action)    params = params.set('action',    filters.action);
    if (filters.user)      params = params.set('user',      filters.user);
    if (filters.date_from) params = params.set('date_from', filters.date_from);
    if (filters.date_to)   params = params.set('date_to',   filters.date_to);

    // The apiUnwrapInterceptor already unwraps {success, data} → bare array.
    return this.http.get<AuditLog[]>(AUDIT.logs, { params });
  }
}
