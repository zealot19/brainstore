import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_BOOKING } from '../../config/api.config';
import { Booking, TripOption, TripDestination, SeatCell, Ticket, BookingCreate, AssignReturn, TripAvailability, TicketAdjustment } from '../../models/voyages-booking.models';

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
  availability(tripId: string): Observable<TripAvailability> { return this.http.get<TripAvailability>(VOYAGES_BOOKING.availability(tripId)); }
  destinations(tripId: string): Observable<TripDestination[]> { return this.http.get<TripDestination[]>(VOYAGES_BOOKING.destinations(tripId)); }
  routeDestinations(routeId: string): Observable<{ id: string; name: string; code: string }[]> {
    return this.http.get<{ id: string; name: string; code: string }[]>(VOYAGES_BOOKING.routeDestinations(routeId));
  }

  list(params: { status?: string; trip?: string; q?: string; trip_type?: string; channel?: string;
                 date_field?: string; date_from?: string; date_to?: string;
                 include_archived?: number } = {}): Observable<Booking[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<Booking[]>(VOYAGES_BOOKING.bookings, { params: p });
  }
  get(id: string): Observable<Booking> { return this.http.get<Booking>(VOYAGES_BOOKING.booking(id)); }
  printData(id: string): Observable<any> { return this.http.get<any>(VOYAGES_BOOKING.bookingPrint(id)); }
  renderTickets(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_BOOKING.bookingRenderTickets(id)); }
  renderDuplicata(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_BOOKING.bookingDuplicata(id)); }
  openReturns(q?: string, includeArchived?: number): Observable<Booking[]> {
    let p = new HttpParams();
    if (q) p = p.set('q', q);
    if (includeArchived) p = p.set('include_archived', String(includeArchived));
    return this.http.get<Booking[]>(VOYAGES_BOOKING.openReturns, { params: p });
  }
  assignReturn(id: string, body: AssignReturn): Observable<Booking> {
    return this.http.post<Booking>(VOYAGES_BOOKING.bookingAssignReturn(id), body);
  }
  create(body: BookingCreate): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookings, body); }
  reserve(body: any): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.reservations, body); }
  pay(id: string, body: { payment_method?: string; amount_received?: number | null }): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookingPay(id), body); }
  cancel(id: string, reason: string): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookingCancel(id), { cancellation_reason: reason }); }
  cancellationVoucher(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_BOOKING.bookingCancellationVoucher(id)); }
  cancelledBookings(params: Record<string, string>): Observable<Booking[]> { return this.http.get<Booking[]>(VOYAGES_BOOKING.bookingsCancelled, { params }); }
  noShow(id: string): Observable<Booking> { return this.http.post<Booking>(VOYAGES_BOOKING.bookingNoShow(id), {}); }
  board(ticketId: string): Observable<Ticket> { return this.http.post<Ticket>(VOYAGES_BOOKING.ticketBoard(ticketId), {}); }
  reportTicket(id: string, body: { new_trip_id: string; new_seat_id?: string | null; reason?: string }): Observable<Ticket> {
    return this.http.post<Ticket>(VOYAGES_BOOKING.ticketReport(id), body);
  }
  regularizeTicket(id: string, body: { new_fare_class_id?: string | null; new_destination_id?: string | null; payment_method?: string; reason?: string }): Observable<Ticket> {
    return this.http.post<Ticket>(VOYAGES_BOOKING.ticketRegularize(id), body);
  }
  adjustments(params: { ticket?: string; booking?: string; kind?: string; date_from?: string; date_to?: string } = {}): Observable<TicketAdjustment[]> {
    let p = new HttpParams();
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<TicketAdjustment[]>(VOYAGES_BOOKING.adjustments, { params: p });
  }
}
