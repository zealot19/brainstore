import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class GeneralExpenseService {
  private http = inject(HttpClient);

  list(filters: { status?: string; date_from?: string; date_to?: string } = {}): Observable<any[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(filters).forEach(([k, v]) => { if (v) p = p.set(k, v); });
    return this.http.get<any>(TREASURY.expGeneral, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  create(body: any): Observable<any> { return this.http.post<any>(TREASURY.expGeneral, body).pipe(map(r => r.data ?? r)); }
  update(id: string, body: any): Observable<any> { return this.http.patch<any>(TREASURY.expGeneralItem(id), body).pipe(map(r => r.data ?? r)); }
  remove(id: string): Observable<unknown> { return this.http.delete(TREASURY.expGeneralItem(id)); }
  disburse(id: string, cashSessionId?: string): Observable<any> {
    return this.http.post<any>(TREASURY.expGeneralDisburse(id), cashSessionId ? { cash_session_id: cashSessionId } : {}).pipe(map(r => r.data ?? r));
  }
  voucher(id: string): Observable<Blob> {
    return this.http.get(TREASURY.expGeneralVoucher(id), { responseType: 'blob' });
  }
}
