import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private http = inject(HttpClient);

  voyage(filters: { status?: string; date_from?: string; date_to?: string } = {}): Observable<any[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(filters).forEach(([k, v]) => { if (v) p = p.set(k, v); });
    return this.http.get<any>(TREASURY.expVoyage, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  dashboard(): Observable<any> { return this.http.get<any>(TREASURY.expDashboard).pipe(map(r => r.data ?? r)); }
}
