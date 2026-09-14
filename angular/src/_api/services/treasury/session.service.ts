import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';
import { CashSession } from '../../models/treasury.models';

export interface Guichetier { id: string; full_name: string; }

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private http: HttpClient) {}
  list(filters?: { status?: string; register_id?: string }): Observable<CashSession[]> {
    let p = new HttpParams().set('page_size', '200');
    if (filters?.status) p = p.set('status', filters.status);
    if (filters?.register_id) p = p.set('register_id', filters.register_id);
    return this.http.get<any>(TREASURY.sessions, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  open(data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionOpen, data); }
  close(id: string, data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionClose(id), data); }

  schedule(data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionSchedule, data); }
  guichetiers(registerId: string): Observable<Guichetier[]> {
    return this.http.get<any>(TREASURY.sessionGuichetiers, { params: new HttpParams().set('register_id', registerId) })
      .pipe(map(r => r.data ?? r));
  }
  openScheduled(id: string, data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionOpenScheduled(id), data); }
  suspend(id: string): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionSuspend(id), {}); }
  resume(id: string): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionResume(id), {}); }
  extend(id: string, scheduled_end: string): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionExtend(id), { scheduled_end }); }
  reopen(id: string): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionReopen(id), {}); }
  report(id: string): Observable<any> { return this.http.get<any>(TREASURY.sessionReport(id)).pipe(map(r => r.data ?? r)); }
}
