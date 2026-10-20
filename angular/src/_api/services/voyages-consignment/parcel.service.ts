import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONSIGNMENT } from '../../config/api.config';
import { Parcel, ParcelCreate, ParcelReceive, Manifest, ParcelShipment } from '../../models/voyages-consignment.models';

@Injectable({ providedIn: 'root' })
export class ParcelService {
  constructor(private http: HttpClient) {}

  list(params: { status?: string; trip?: string; q?: string; consignment_type?: string;
                 origin_point?: string; destination_point?: string;
                 date_field?: string; date_from?: string; date_to?: string;
                 delivered_home?: string; delivery_payment_method?: string;
                 scope?: string; include_archived?: number } = {}): Observable<Parcel[]> {
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
  pickup(id: string, body: { picked_up_by?: string; picked_up_phone?: string; picked_up_id_number?: string; picked_up_kind?: string } = {}): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelPickup(id), body).pipe(map(r => r.data ?? r)); }
  deliverHome(id: string, body: { delivery_amount: number; delivery_address: string; payment_method: string; delivered_to: string; delivered_to_id: string }): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelDeliverHome(id), body).pipe(map(r => r.data ?? r)); }
  cancel(id: string): Observable<Parcel> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelCancel(id), {}).pipe(map(r => r.data ?? r)); }
  bulk(ids: string[], action: 'receive' | 'cancel' | 'dispatch' | 'arrive' | 'load' | 'unassign'): Observable<{ done: number; errors: string[] }> {
    return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelsBulk, { ids, action }).pipe(map(r => r.data ?? r));
  }
  expedition(params: { trip?: string; destination?: string; route?: string }): Observable<{ ready: Parcel[]; onboard: ParcelShipment[]; totals: { count: number; weight: number } }> {
    let p = new HttpParams();
    Object.entries(params).forEach(([k, v]) => { if (v) p = p.set(k, v as string); });
    return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelExpedition, { params: p }).pipe(map(r => r.data ?? r));
  }
  manifest(tripId: string): Observable<Manifest> { return this.http.get<any>(VOYAGES_CONSIGNMENT.manifest(tripId)).pipe(map(r => r.data ?? r)); }
  receipt(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_CONSIGNMENT.parcelReceipt(id)); }
  label(id: string): Observable<{ html: string }> { return this.http.get<{ html: string }>(VOYAGES_CONSIGNMENT.parcelLabel(id)); }

  // M25 — expéditions partielles
  shipments(id: string): Observable<ParcelShipment[]> { return this.http.get<any>(VOYAGES_CONSIGNMENT.parcelShipments(id)).pipe(map(r => r.data ?? r)); }
  createShipment(id: string, body: { trip_id: string; quantity: number; note?: string }): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelShipments(id), body).pipe(map(r => r.data ?? r)); }
  withdrawShipment(sid: string, quantity: number): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentWithdraw(sid), { quantity }).pipe(map(r => r.data ?? r)); }
  unvalidateShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentUnvalidate(sid), {}).pipe(map(r => r.data ?? r)); }
  validateShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentValidate(sid), {}).pipe(map(r => r.data ?? r)); }
  loadShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentLoad(sid), {}).pipe(map(r => r.data ?? r)); }
  dispatchShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentDispatch(sid), {}).pipe(map(r => r.data ?? r)); }
  arriveShipment(sid: string): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentArrive(sid), {}).pipe(map(r => r.data ?? r)); }
  cancelShipment(sid: string): Observable<unknown> { return this.http.delete(VOYAGES_CONSIGNMENT.shipmentCancel(sid)); }
  ship(id: string, body: { trip_id: string; quantity?: number }): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.parcelShip(id), body).pipe(map(r => r.data ?? r)); }
  receiveShipment(sid: string, body: { received_pieces?: number; missing_pieces?: number; damaged_pieces?: number }): Observable<ParcelShipment> { return this.http.post<any>(VOYAGES_CONSIGNMENT.shipmentReceive(sid), body).pipe(map(r => r.data ?? r)); }
  arrivedShipments(): Observable<ParcelShipment[]> { return this.http.get<any>(VOYAGES_CONSIGNMENT.shipmentsArrived).pipe(map(r => r.data ?? r)); }
}
