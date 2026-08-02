import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES } from '../../config/api.config';
import { Trip, TripCrew, TripSeat, TripStop, EligibleVehicle } from '../../models/voyages.models';

@Injectable({ providedIn: 'root' })
export class TripService {
  constructor(private http: HttpClient) {}

  list(status?: string): Observable<Trip[]> {
    let params = new HttpParams().set('page_size', '200');
    if (status) params = params.set('status', status);
    return this.http.get<Trip[]>(VOYAGES.trips, { params });
  }
  get(id: string): Observable<Trip> { return this.http.get<Trip>(VOYAGES.trip(id)); }
  create(data: Record<string, unknown>): Observable<Trip> { return this.http.post<Trip>(VOYAGES.trips, data); }
  update(id: string, data: Record<string, unknown>): Observable<Trip> { return this.http.patch<Trip>(VOYAGES.trip(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES.trip(id)); }

  eligibleVehicles(id: string): Observable<EligibleVehicle[]> { return this.http.get<EligibleVehicle[]>(VOYAGES.eligibleVehicles(id)); }
  assignVehicle(id: string, vehicleId: string): Observable<{ trip: Trip; warnings: string[] }> {
    return this.http.post<{ trip: Trip; warnings: string[] }>(VOYAGES.assignVehicle(id), { vehicle_id: vehicleId });
  }

  listCrew(id: string): Observable<TripCrew[]> { return this.http.get<TripCrew[]>(VOYAGES.crew(id)); }
  addCrew(id: string, driverId: string, role: string): Observable<TripCrew> { return this.http.post<TripCrew>(VOYAGES.crew(id), { driver_id: driverId, role }); }
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
}
