import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_BOOKING } from '../../config/api.config';
import { Passenger, LoyaltyView } from '../../models/voyages-booking.models';

@Injectable({ providedIn: 'root' })
export class PassengerService {
  constructor(private http: HttpClient) {}

  list(q?: string): Observable<Passenger[]> {
    let params = new HttpParams().set('page_size', '500');
    if (q) params = params.set('q', q);
    return this.http.get<Passenger[]>(VOYAGES_BOOKING.passengers, { params });
  }
  get(id: string): Observable<Passenger> { return this.http.get<Passenger>(VOYAGES_BOOKING.passenger(id)); }
  create(data: Record<string, unknown>): Observable<Passenger> { return this.http.post<Passenger>(VOYAGES_BOOKING.passengers, data); }
  update(id: string, data: Record<string, unknown>): Observable<Passenger> { return this.http.patch<Passenger>(VOYAGES_BOOKING.passenger(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES_BOOKING.passenger(id)); }
  loyalty(id: string): Observable<LoyaltyView> { return this.http.get<LoyaltyView>(VOYAGES_BOOKING.passengerLoyalty(id)); }
}
