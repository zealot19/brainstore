import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ONLINE } from '../../config/api.config';
import {
  OnlineTown, OnlineTrip, OnlineSeat, TripSearchQuery,
  InitiateBookingBody, BookingRequestStatus,
} from '../../models/online-booking.models';

/** Canal de réservation en ligne public (PWA client). Endpoints /online/ anonymes. */
@Injectable({ providedIn: 'root' })
export class OnlineBookingService {
  private http = inject(HttpClient);
  private co = environment.onlineCompanyId;

  towns(): Observable<OnlineTown[]> {
    return this.http.get<OnlineTown[]>(ONLINE.towns(this.co));
  }

  searchTrips(q: TripSearchQuery): Observable<OnlineTrip[]> {
    const params = new HttpParams()
      .set('from_town_id', q.from_town_id)
      .set('to_town_id', q.to_town_id)
      .set('travel_date', q.travel_date);
    return this.http.get<OnlineTrip[]>(ONLINE.trips(this.co), { params });
  }

  trip(id: string): Observable<OnlineTrip> {
    return this.http.get<OnlineTrip>(ONLINE.trip(this.co, id));
  }

  seatMap(id: string): Observable<OnlineSeat[]> {
    return this.http.get<OnlineSeat[]>(ONLINE.seatMap(this.co, id));
  }

  initiate(id: string, body: InitiateBookingBody): Observable<BookingRequestStatus> {
    return this.http.post<BookingRequestStatus>(ONLINE.book(this.co, id), body);
  }

  status(reqId: string): Observable<BookingRequestStatus> {
    return this.http.get<BookingRequestStatus>(ONLINE.status(reqId));
  }
}
