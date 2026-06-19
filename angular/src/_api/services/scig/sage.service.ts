import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SCIG } from '../../config/api.config';
import {
  SageConnection, SageConnectionForm,
  SyncLog, SyncFullResult, SyncType,
  ConnectionTestResult,
} from '../../models/sage.models';

interface PaginatedResult<T> { count: number; results: T[] }

@Injectable({ providedIn: 'root' })
export class SageService {
  private readonly http = inject(HttpClient);

  getConnection(): Observable<SageConnection> {
    return this.http.get<SageConnection>(SCIG.connection);
  }

  saveConnection(data: SageConnectionForm): Observable<SageConnection> {
    return this.http.post<SageConnection>(SCIG.connection, data);
  }

  testConnection(): Observable<ConnectionTestResult> {
    return this.http.post<ConnectionTestResult>(SCIG.connectionTest, {});
  }

  triggerSync(syncType: SyncType): Observable<SyncLog | SyncFullResult> {
    return this.http.post<SyncLog | SyncFullResult>(SCIG.syncTrigger, { sync_type: syncType });
  }

  getLogs(syncType = '', syncStatus = ''): Observable<PaginatedResult<SyncLog>> {
    let params = new HttpParams();
    if (syncType)   params = params.set('sync_type', syncType);
    if (syncStatus) params = params.set('status', syncStatus);
    return this.http.get<PaginatedResult<SyncLog>>(SCIG.syncLogs, { params });
  }
}
