import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_BOOKING } from '../../config/api.config';
import { Booking, TripOption, SeatCell, Ticket, BookingCreate } from '../../models/voyages-booking.models';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private http: HttpClient) {}

  bookableTrips(): Observable<TripOption[]> { return this.http.get<TripOption[]>(VOYAGES_BOOKING.bookableTrips); }
  seatMap(tripId: string): Observable<SeatCell[]> { return this.http.get<SeatCell[]>(VOYAGES_BOOKING.seatMap(tripId)); }

  list(params: { status?: string; trip?: string; q?: string } = {}): Observable<Booking[]> {
    let p = new HttpParams().set('page_size', '500');
    if (params.status) p = p.set('status', params.status);
    if (params.trip) p = p.set('trip', params.trip);
    if (params.q) p = p.set('q', params.q);
    return this.http.get<Booking[]>(VOYAGES_BOOKING.bookings, { params: p });
  }
  get(id: string): Observable<Booking> { return this.http.get<Booking>(VOYAGES_BOOKING.booking(id)); }
  create(body: BookingCreate): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookings, body); }
  confirm(id: string, body: { payment_method?: string; amount_paid?: number | null }): Observable<Booking> {
    return this.http.post<Booking>(VOYAGES_BOOKING.bookingConfirm(id), body);
  }
  cancel(id: string): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookingCancel(id), {}); }
  noShow(id: string): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookingNoShow(id), {}); }
  redeem(id: string, body: { passenger_id: string; ticket_id: string }): Observable<Booking> {
    return this.http.post<Booking>(VOYAGES_BOOKING.bookingRedeem(id), body);
  }
  board(ticketId: string): Observable<Ticket> { return this.http.post<Ticket>(VOYAGES_BOOKING.ticketBoard(ticketId), {}); }
}
