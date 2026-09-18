import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONSIGNMENT } from '../../config/api.config';
import { Parcel, ParcelCreate, ParcelReceive, Manifest } from '../../models/voyages-consignment.models';

@Injectable({ providedIn: 'root' })
export class ParcelService {
  constructor(private http: HttpClient) {}

  list(params: { status?: string; trip?: string; q?: string; consignment_type?: string;
                 origin_point?: string; destination_point?: string;
                 date_field?: string; date_from?: string; date_to?: string;
                 delivered_home?: string; delivery_payment_method?: string } = {}): Observable<Parcel[]> {
    let p = new HttpParams().set('page_size', '500');
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<any>(VOYAGES_CONSIGNMENT.parcels, { params: p }).pipe(map(r => r.results ?? r.data ?? r));
  }
  pending(): Observable<Parcel[]> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelsPending).pipe(map(r => r.data ?? r)); }
  get(id: string): Observable<Parcel> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcel(id)).pipe(map(r => r.data ?? r)); }
  create(body: ParcelCreate): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcels, body).pipe(map(r => r.data ?? r)); }
  edit(id: string, body: Partial<ParcelCreate>): Observable<Parcel> { return this.http.patch<any>(VOYAGES_CONSIGNMENT.parcel(id), body).pipe(map(r => r.data ?? r)); }
  assignTrip(id: string, trip_id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelAssignTrip(id), { trip_id }).pipe(map(r => r.data ?? r)); }
  unassign(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelUnassign(id), {}).pipe(map(r => r.data ?? r)); }
  load(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelLoad(id), {}).pipe(map(r => r.data ?? r)); }
  dispatch(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelDispatch(id), {}).pipe(map(r => r.data ?? r)); }
  arrive(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelArrive(id), {}).pipe(map(r => r.data ?? r)); }
  receive(id: string, body: ParcelReceive): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelArrived(id), body).pipe(map(r => r.data ?? r)); }
  pickup(id: string, picked_up_by: string, picked_up_id_number = ''): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelPickup(id), { picked_up_by, picked_up_id_number }).pipe(map(r => r.data ?? r)); }
  deliverHome(id: string, body: { delivery_amount: number; delivery_address: string; payment_method: string }): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelDeliverHome(id), body).pipe(map(r => r.data ?? r)); }
  cancel(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelCancel(id), {}).pipe(map(r => r.data ?? r)); }
  bulk(ids: string[], action: 'receive' | 'cancel' | 'dispatch' | 'arrive' | 'load' | 'unassign'): Observable<{ done: number; errors: string[] }> {
    return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelsBulk, { ids, action }).pipe(map(r => r.data ?? r));
  }
  expedition(params: { trip?: string; destination?: string }): Observable<{ ready: Parcel[]; assigned: Parcel[]; totals: { count: number; weight: number } }> {
    let p = new HttpParams();
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelExpedition, { params: p }).pipe(map(r => r.data ?? r));
  }
  manifest(tripId: string): Observable<Manifest> { return this.http.get<any>(VOYAGES_CONSIGNMENT.manifest(tripId)).pipe(map(r => r.data ?? r)); }
  receipt(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_CONSIGNMENT.parcelReceipt(id)); }
}
