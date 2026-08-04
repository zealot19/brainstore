import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONSIGNMENT } from '../../config/api.config';
import { Parcel, ParcelCreate, ParcelReceive, Manifest } from '../../models/voyages-consignment.models';

@Injectable({ providedIn: 'root' })
export class ParcelService {
  constructor(private http: HttpClient) {}

  list(params: { status?: string; trip?: string; q?: string } = {}): Observable<Parcel[]> {
    let p = new HttpParams().set('page_size', '500');
    if (params.status) p = p.set('status', params.status);
    if (params.trip) p = p.set('trip', params.trip);
    if (params.q) p = p.set('q', params.q);
    return this.http.get<any>(VOYAGES_CONSIGNMENT.parcels, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  pending(): Observable<Parcel[]> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelsPending).pipe(map(r => r.data ?? r)); }
  get(id: string): Observable<Parcel> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcel(id)).pipe(map(r => r.data ?? r)); }
  create(body: ParcelCreate): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcels, body).pipe(map(r => r.data ?? r)); }
  edit(id: string, body: Partial<ParcelCreate>): Observable<Parcel> { return this.http.patch<any>(VOYAGES_CONSIGNMENT.parcel(id), body).pipe(map(r => r.data ?? r)); }
  assignTrip(id: string, trip_id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelAssignTrip(id), { trip_id }).pipe(map(r => r.data ?? r)); }
  unload(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelUnload(id), {}).pipe(map(r => r.data ?? r)); }
  receive(id: string, body: ParcelReceive): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelArrived(id), body).pipe(map(r => r.data ?? r)); }
  pickup(id: string, picked_up_by: string, picked_up_id_number = ''): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelPickup(id), { picked_up_by, picked_up_id_number }).pipe(map(r => r.data ?? r)); }
  cancel(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelCancel(id), {}).pipe(map(r => r.data ?? r)); }
  bulk(ids: string[], action: 'receive' | 'cancel'): Observable<{ done: number; errors: string[] }> {
    return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelsBulk, { ids, action }).pipe(map(r => r.data ?? r));
  }
  manifest(tripId: string): Observable<Manifest> { return this.http.get<any>(VOYAGES_CONSIGNMENT.manifest(tripId)).pipe(map(r => r.data ?? r)); }
}
