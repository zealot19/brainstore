import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONSIGNMENT } from '../../config/api.config';
import { Baggage, BaggageCreate } from '../../models/voyages-consignment.models';

@Injectable({ providedIn: 'root' })
export class BaggageService {
  constructor(private http: HttpClient) {}

  list(params: { ticket?: string; trip?: string; status?: string } = {}): Observable<Baggage[]> {
    let p = new HttpParams();
    if (params.ticket) p = p.set('ticket', params.ticket);
    if (params.trip) p = p.set('trip', params.trip);
    if (params.status) p = p.set('status', params.status);
    return this.http.get<any>(VOYAGES_CONSIGNMENT.baggage, { params: p }).pipe(map(r => r.data ?? r));
  }
  create(body: BaggageCreate): Observable<Baggage> { return this.http.post<any>(VOYAGES_CONSIGNMENT.baggage, body).pipe(map(r => r.data ?? r)); }
  load(id: string): Observable<Baggage> { return this.http.post<any>(VOYAGES_CONSIGNMENT.baggageLoad(id), {}).pipe(map(r => r.data ?? r)); }
  deliver(id: string): Observable<Baggage> { return this.http.post<any>(VOYAGES_CONSIGNMENT.baggageDeliver(id), {}).pipe(map(r => r.data ?? r)); }
  cancel(id: string): Observable<Baggage> { return this.http.delete<any>(VOYAGES_CONSIGNMENT.baggageItem(id)).pipe(map(r => r.data ?? r)); }
  bulk(ids: string[], action: 'load' | 'deliver' | 'cancel'): Observable<{ done: number; errors: string[] }> {
    return this.http.post<any>(VOYAGES_CONSIGNMENT.baggageBulk, { ids, action }).pipe(map(r => r.data ?? r));
  }
}

