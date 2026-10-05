import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES } from '../../config/api.config';
import { Trip, TripCrew, TripSeat, TripStop, EligibleVehicle } from '../../models/voyages.models';

@Injectable({ providedIn: 'root' })
export class TripService {
  constructor(private http: HttpClient) {}

  list(params: { status?: string; route?: string; vehicle?: string;
                 date_field?: string; date_from?: string; date_to?: string;
                 auto_expenses?: string } = {}): Observable<Trip[]> {
    let p = new HttpParams().set('page_size', '200');
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<Trip[]>(VOYAGES.trips, { params: p });
  }
  get(id: string): Observable<Trip> { return this.http.get<Trip>(VOYAGES.trip(id)); }
  create(data: Record<string, unknown>): Observable<Trip> { return this.http.post<Trip>(VOYAGES.trips, data); }
  update(id: string, data: Record<string, unknown>): Observable<Trip> { return this.http.patch<Trip>(VOYAGES.trip(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES.trip(id)); }

  eligibleVehicles(id: string): Observable<EligibleVehicle[]> { return this.http.get<EligibleVehicle[]>(VOYAGES.eligibleVehicles(id)); }
  assignVehicle(id: string, vehicleId: string): Observable<{ trip: Trip; warnings: string[] }> {
    return this.http.post<{ trip: Trip; warnings: string[] }>(VOYAGES.assignVehicle(id), { vehicle_id: vehicleId });
  }
  unassignVehicle(id: string): Observable<{ trip: Trip; warnings: string[] }> {
    return this.http.post<{ trip: Trip; warnings: string[] }>(VOYAGES.assignVehicle(id), { vehicle_id: null });
  }

  listCrew(id: string): Observable<TripCrew[]> { return this.http.get<TripCrew[]>(VOYAGES.crew(id)); }
  addCrew(id: string, memberId: string): Observable<TripCrew> { return this.http.post<TripCrew>(VOYAGES.crew(id), { member_id: memberId }); }
  removeCrew(id: string, cid: string): Observable<unknown> { return this.http.delete(VOYAGES.crewItem(id, cid)); }

  listSeats(id: string): Observable<TripSeat[]> { return this.http.get<TripSeat[]>(VOYAGES.seats(id)); }
  blockSeats(id: string, seatIds: string[]): Observable<unknown> { return this.http.post(VOYAGES.seatsBlock(id), { seat_ids: seatIds }); }
  unblockSeats(id: string, seatIds: string[]): Observable<unknown> { return this.http.post(VOYAGES.seatsUnblock(id), { seat_ids: seatIds }); }

  listStops(id: string): Observable<TripStop[]> { return this.http.get<TripStop[]>(VOYAGES.stops(id)); }

  submit(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGES.submit(id), {}); }
  depart(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGES.depart(id), {}); }
  complete(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGES.complete(id), {}); }
  cancel(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGES.cancel(id), {}); }
  suspend(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGES.suspend(id), {}); }
  resume(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGES.resume(id), {}); }
  markDelayed(id: string, data: Record<string, unknown>): Observable<Trip> { return this.http.post<Trip>(VOYAGES.markDelayed(id), data); }
  clearDelay(id: string): Observable<Trip> { return this.http.post<Trip>(VOYAGES.clearDelay(id), {}); }

  transbordEligible(id: string): Observable<{ vehicles: { id: string; license_plate: string; model_name: string; seats: number }[];
                                              overflow_trips: { id: string; number: string; code: string; free_seats: number }[];
                                              sold_count: number }> {
    return this.http.get<any>(VOYAGES.transbordEligible(id));
  }
  transbord(id: string, body: { vehicle_id: string; overflow_trip_id?: string; note?: string }): Observable<any> {
    return this.http.post<any>(VOYAGES.transbord(id), body);
  }
  transbordHistory(id: string): Observable<any[]> { return this.http.get<any[]>(VOYAGES.transbordHistory(id)); }

  selectionOptions(id: string): Observable<{
    tickets: { id: string; seat: string; passenger_name: string }[];
    parcels: { id: string; reference: string; recipient_name: string }[];
    baggage: { id: string; tag_number: string; owner_name: string }[];
    dest_trips: { id: string; number: string; code: string; free_seats: number }[];
    vehicles: { id: string; license_plate: string; model_name: string; seats: number }[];
  }> {
    return this.http.get<any>(VOYAGES.transbordSelectionOptions(id));
  }
  transbordSelection(id: string, body: { ticket_ids: string[]; parcel_ids: string[]; baggage_ids: string[];
                                         dest_trip_id?: string; dest_vehicle_id?: string; note?: string }): Observable<any> {
    return this.http.post<any>(VOYAGES.transbordSelection(id), body);
  }
}
