import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';
import { CashSession, Paginated } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private http: HttpClient) {}
  list(filters?: { status?: string; register_id?: string }): Observable<CashSession[]> {
    let p = new HttpParams().set('page_size', '200');
    if (filters?.status) p = p.set('status', filters.status);
    if (filters?.register_id) p = p.set('register_id', filters.register_id);
    return this.http.get<Paginated<CashSession>>(TREASURY.sessions, { params: p }).pipe(map(r => r.results));
  }
  open(data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionOpen, data); }
  close(id: string, data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionClose(id), data); }
}
