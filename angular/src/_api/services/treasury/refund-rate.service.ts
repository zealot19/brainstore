import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

export interface RefundRates { ticket: number; colis: number; bagage: number; }

@Injectable({ providedIn: 'root' })
export class RefundRateService {
  private http = inject(HttpClient);
  private norm(r: any): RefundRates {
    const d = r.data ?? r;
    return { ticket: Number(d.ticket ?? 0), colis: Number(d.colis ?? 0), bagage: Number(d.bagage ?? 0) };
  }
  get(): Observable<RefundRates> {
    return this.http.get<any>(TREASURY.refundRate).pipe(map(r => this.norm(r)));
  }
  set(rates: RefundRates): Observable<RefundRates> {
    return this.http.put<any>(TREASURY.refundRate, rates).pipe(map(r => this.norm(r)));
  }
}
