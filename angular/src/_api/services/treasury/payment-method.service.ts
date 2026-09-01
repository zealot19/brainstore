import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class PaymentMethodService {
  private http = inject(HttpClient);

  list(activeOnly = false): Observable<any[]> {
    let p = new HttpParams();
    if (activeOnly) p = p.set('active', 'true');
    return this.http.get<any>(TREASURY.paymentMethods, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  create(body: any): Observable<any> { return this.http.post<any>(TREASURY.paymentMethods, body).pipe(map(r => r.data ?? r)); }
  update(id: string, body: any): Observable<any> { return this.http.patch<any>(TREASURY.paymentMethod(id), body).pipe(map(r => r.data ?? r)); }
  remove(id: string): Observable<unknown> { return this.http.delete(TREASURY.paymentMethod(id)); }
}
