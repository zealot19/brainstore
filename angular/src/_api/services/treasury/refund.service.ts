import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

export interface RefundLookup {
  kind: 'billet' | 'colis' | 'bagage';
  id: string;
  reference: string;
  label: string;
  amount_paid: string;
  refund_rate: string;
  refund_amount: string;
  status: string;
  refundable: boolean;
}

@Injectable({ providedIn: 'root' })
export class RefundService {
  private http = inject(HttpClient);

  lookup(reference: string): Observable<RefundLookup> {
    return this.http
      .get<any>(TREASURY.refundLookup, { params: { reference } })
      .pipe(map(r => (r.data ?? r) as RefundLookup));
  }

  perform(kind: string, id: string): Observable<void> {
    return this.http.post<any>(TREASURY.refundPerform, { kind, id }).pipe(map(() => void 0));
  }
}
