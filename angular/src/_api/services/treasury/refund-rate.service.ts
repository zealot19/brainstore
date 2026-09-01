import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class RefundRateService {
  private http = inject(HttpClient);
  get(): Observable<number> {
    return this.http.get<any>(TREASURY.refundRate).pipe(map(r => Number((r.data ?? r).rate)));
  }
  set(rate: number): Observable<number> {
    return this.http.put<any>(TREASURY.refundRate, { rate }).pipe(map(r => Number((r.data ?? r).rate)));
  }
}
