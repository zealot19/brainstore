import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

type IncomeKind = 'voyage' | 'parcel' | 'baggage' | 'delivery' | 'other';

@Injectable({ providedIn: 'root' })
export class IncomeService {
  private http = inject(HttpClient);

  private urlFor(kind: IncomeKind): string {
    return { voyage: TREASURY.incVoyage, parcel: TREASURY.incParcel,
             baggage: TREASURY.incBaggage, delivery: TREASURY.incDelivery,
             other: TREASURY.incOther }[kind];
  }

  list(kind: IncomeKind,
       filters: { date_from?: string; date_to?: string; payment_mode?: string } = {}): Observable<any[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(filters).forEach(([k, v]) => { if (v) p = p.set(k, v); });
    return this.http.get<any>(this.urlFor(kind), { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }

  dashboard(): Observable<any> {
    return this.http.get<any>(TREASURY.incDashboard).pipe(map(r => r.data ?? r));
  }

  createOther(body: any): Observable<any> {
    return this.http.post<any>(TREASURY.incOther, body).pipe(map(r => r.data ?? r));
  }

  receipt(id: string): Observable<Blob> {
    return this.http.get(TREASURY.incReceipt(id), { responseType: 'blob' });
  }
}
