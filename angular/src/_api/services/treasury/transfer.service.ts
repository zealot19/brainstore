import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';
import { Transfer } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class TransferService {
  constructor(private http: HttpClient) {}
  list(): Observable<Transfer[]> {
    const p = new HttpParams().set('page_size', '200');
    return this.http.get<any>(TREASURY.transfers, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  create(data: Record<string, unknown>): Observable<Transfer> { return this.http.post<Transfer>(TREASURY.transfers, data); }
}
