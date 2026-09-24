import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

export type RefundMethod = 'percentage' | 'fixed';
export interface RefundKindConfig { method: RefundMethod; rate: number; amount: number; }
export interface RefundConfig {
  ticket: RefundKindConfig;
  colis: RefundKindConfig;
  bagage: RefundKindConfig;
}

@Injectable({ providedIn: 'root' })
export class RefundRateService {
  private http = inject(HttpClient);

  private oneKind(x: any): RefundKindConfig {
    return {
      method: x?.method === 'fixed' ? 'fixed' : 'percentage',
      rate: Number(x?.rate ?? 0),
      amount: Number(x?.amount ?? 0),
    };
  }
  private norm(r: any): RefundConfig {
    const d = r.data ?? r;
    return { ticket: this.oneKind(d.ticket), colis: this.oneKind(d.colis), bagage: this.oneKind(d.bagage) };
  }

  get(): Observable<RefundConfig> {
    return this.http.get<any>(TREASURY.refundRate).pipe(map(r => this.norm(r)));
  }
  set(cfg: RefundConfig): Observable<RefundConfig> {
    return this.http.put<any>(TREASURY.refundRate, cfg).pipe(map(r => this.norm(r)));
  }
}
