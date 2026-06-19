import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SCIG } from '../../config/api.config';
import {
  Depot,
  InventorySession,
  InventorySessionForm,
  InventoryZone,
  InventoryLine,
  ArticleVariantSummary,
} from '../../models/scig.models';


@Injectable({ providedIn: 'root' })
export class ScigService {

  constructor(private http: HttpClient) {}

  // ── Dépôts ────────────────────────────────────────────────────────────────

  listDepots(): Observable<Depot[]> {
    return this.http.get<Depot[]>(SCIG.depots);
  }

  // ── Sessions d'inventaire ─────────────────────────────────────────────────

  listInventorySessions(filters: { status?: string; depot_id?: string } = {}): Observable<InventorySession[]> {
    let params = new HttpParams();
    if (filters.status)   params = params.set('status',   filters.status);
    if (filters.depot_id) params = params.set('depot_id', filters.depot_id);
    return this.http.get<InventorySession[]>(SCIG.inventory, { params });
  }

  createInventorySession(data: InventorySessionForm): Observable<InventorySession> {
    return this.http.post<InventorySession>(SCIG.inventory, data);
  }

  getInventorySession(id: string): Observable<InventorySession> {
    return this.http.get<InventorySession>(SCIG.inventoryDetail(id));
  }

  submitInventoryToSage(id: string): Observable<InventorySession> {
    return this.http.post<InventorySession>(SCIG.inventorySubmitSage(id), {});
  }

  getInventoryReport(id: string): Observable<InventoryLine[]> {
    return this.http.get<InventoryLine[]>(SCIG.inventoryReport(id));
  }

  // ── Zones ──────────────────────────────────────────────────────────────────

  listZones(sessionId: string): Observable<InventoryZone[]> {
    return this.http.get<InventoryZone[]>(SCIG.inventoryZones(sessionId));
  }

  createZone(sessionId: string, name: string): Observable<InventoryZone> {
    return this.http.post<InventoryZone>(SCIG.inventoryZones(sessionId), { name });
  }

  openZone(sessionId: string, zoneId: string, deviceId: string): Observable<InventoryZone> {
    return this.http.post<InventoryZone>(SCIG.inventoryZoneOpen(sessionId, zoneId), { device_id: deviceId });
  }

  submitZone(sessionId: string, zoneId: string): Observable<InventoryZone> {
    return this.http.post<InventoryZone>(SCIG.inventoryZoneSubmit(sessionId, zoneId), {});
  }

  validateZone(sessionId: string, zoneId: string): Observable<InventoryZone> {
    return this.http.post<InventoryZone>(SCIG.inventoryZoneValidate(sessionId, zoneId), {});
  }

  recheckZone(sessionId: string, zoneId: string, note = ''): Observable<InventoryZone> {
    return this.http.post<InventoryZone>(SCIG.inventoryZoneRecheck(sessionId, zoneId), { note });
  }

  unlockZone(sessionId: string, zoneId: string): Observable<InventoryZone> {
    return this.http.post<InventoryZone>(SCIG.inventoryZoneUnlock(sessionId, zoneId), {});
  }

  scanBarcode(sessionId: string, zoneId: string, barcode: string, qty = 1): Observable<InventoryLine> {
    return this.http.post<InventoryLine>(SCIG.inventoryZoneScan(sessionId, zoneId), { barcode, qty });
  }

  manualCount(sessionId: string, zoneId: string, variantId: string, qty: number): Observable<InventoryLine> {
    return this.http.post<InventoryLine>(SCIG.inventoryZoneManual(sessionId, zoneId), { variant_id: variantId, qty });
  }

  listZoneLines(sessionId: string, zoneId: string): Observable<InventoryLine[]> {
    return this.http.get<InventoryLine[]>(SCIG.inventoryZoneLines(sessionId, zoneId));
  }

  // ── Recherche variante ────────────────────────────────────────────────────

  searchVariants(q: string): Observable<ArticleVariantSummary[]> {
    const params = new HttpParams().set('q', q);
    return this.http.get<ArticleVariantSummary[]>(SCIG.variantSearch, { params });
  }
}
