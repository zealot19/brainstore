import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_BOOKING } from '../../config/api.config';
import { Booking, TripOption, TripDestination, SeatCell, Ticket, BookingCreate, AssignReturn } from '../../models/voyages-booking.models';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private http: HttpClient) {}

  bookableTrips(filters: { fare_class?: string; time_slot?: string; date?: string } = {}): Observable<TripOption[]> {
    let p = new HttpParams();
    if (filters.fare_class) p = p.set('fare_class', filters.fare_class);
    if (filters.time_slot) p = p.set('time_slot', filters.time_slot);
    if (filters.date) p = p.set('date', filters.date);
    return this.http.get<TripOption[]>(VOYAGES_BOOKING.bookableTrips, { params: p });
  }
  seatMap(tripId: string): Observable<SeatCell[]> { return this.http.get<SeatCell[]>(VOYAGES_BOOKING.seatMap(tripId)); }
  destinations(tripId: string): Observable<TripDestination[]> { return this.http.get<TripDestination[]>(VOYAGES_BOOKING.destinations(tripId)); }

  list(params: { status?: string; trip?: string; q?: string; trip_type?: string; channel?: string;
                 date_field?: string; date_from?: string; date_to?: string } = {}): Observable<Booking[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<Booking[]>(VOYAGES_BOOKING.bookings, { params: p });
  }
  get(id: string): Observable<Booking> { return this.http.get<Booking>(VOYAGES_BOOKING.booking(id)); }
  printData(id: string): Observable<any> { return this.http.get<any>(VOYAGES_BOOKING.bookingPrint(id)); }
  renderTickets(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_BOOKING.bookingRenderTickets(id)); }
  openReturns(q?: string): Observable<Booking[]> {
    let p = new HttpParams();
    if (q) p = p.set('q', q);
    return this.http.get<Booking[]>(VOYAGES_BOOKING.openReturns, { params: p });
  }
  assignReturn(id: string, body: AssignReturn): Observable<Booking> {
    return this.http.post<Booking>(VOYAGES_BOOKING.bookingAssignReturn(id), body);
  }
  create(body: BookingCreate): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookings, body); }
  cancel(id: string): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookingCancel(id), {}); }
  noShow(id: string): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookingNoShow(id), {}); }
  board(ticketId: string): Observable<Ticket> { return this.http.post<Ticket>(VOYAGES_BOOKING.ticketBoard(ticketId), {}); }
}
