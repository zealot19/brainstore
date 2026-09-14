import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { CurrencyDenomination, CashCount } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class DenominationService {
  private http = inject(HttpClient);
  list(): Observable<CurrencyDenomination[]> { return this.http.get<CurrencyDenomination[]>(TREASURY.denominations); }
  create(data: Record<string, unknown>): Observable<CurrencyDenomination> { return this.http.post<CurrencyDenomination>(TREASURY.denominations, data); }
  update(id: string, data: Record<string, unknown>): Observable<CurrencyDenomination> { return this.http.patch<CurrencyDenomination>(TREASURY.denomination(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.denomination(id)); }
  counts(sessionId: string): Observable<CashCount[]> { return this.http.get<CashCount[]>(TREASURY.sessionCounts(sessionId)); }
}
