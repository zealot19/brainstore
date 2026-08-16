import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';
import { Transaction, Paginated } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class MovementService {
  constructor(private http: HttpClient) {}
  list(filters?: { type?: string; category?: string; date_from?: string; date_to?: string }): Observable<Transaction[]> {
    let p = new HttpParams().set('page_size', '200');
    if (filters?.type) p = p.set('type', filters.type);
    if (filters?.category) p = p.set('category', filters.category);
    if (filters?.date_from) p = p.set('date_from', filters.date_from);
    if (filters?.date_to) p = p.set('date_to', filters.date_to);
    return this.http.get<Paginated<Transaction>>(TREASURY.transactions, { params: p }).pipe(map(r => r.results));
  }
  create(data: Record<string, unknown>): Observable<Transaction> { return this.http.post<Transaction>(TREASURY.transactions, data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.transaction(id)); }
}
