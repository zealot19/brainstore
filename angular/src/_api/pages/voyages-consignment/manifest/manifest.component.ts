import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { TripService } from '../../../services/voyages/trip.service';
import { RoadmapService } from '../../../services/voyages-booking/roadmap.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { Trip } from '../../../models/voyages.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vcg-manifest',
  templateUrl: './manifest.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcgManifestComponent implements OnInit {
  private toast = inject(ToastService);
  allTrips: Trip[] = []; tripId = '';
  mode: 'voyage' | 'sans' = 'voyage';
  // Filtres du bandeau (comme l'écran d'expédition historique)
  fRoute = ''; fDest = ''; fDay = ''; fTime = ''; fVehicle = '';
  ready: Parcel[] = []; assigned: Parcel[] = [];
  totals = { count: 0, weight: 0 };
  selReady = new Set<string>();

  constructor(private parcels: ParcelService, private tripSvc: TripService, private roadmap: RoadmapService) {}
  ngOnInit(): void {
    this.tripSvc.list({ status: 'pending' }).subscribe(t => this.allTrips = t ?? []);
    this.refresh();
  }

  // ── Options de filtre (valeurs distinctes des voyages chargeables) ───────────
  private dtDay(t: Trip): string { return (t.scheduled_departure || '').slice(0, 10); }
  private dtTime(t: Trip): string { return (t.scheduled_departure || '').slice(11, 16); }
  private uniq(v: (string | null | undefined)[]): string[] {
    return [...new Set(v.filter((x): x is string => !!x))].sort();
  }
  get routeOptions(): string[] { return this.uniq(this.allTrips.map(t => t.route_code)); }
  get destOptions(): string[] { return this.uniq(this.allTrips.map(t => t.destination_name)); }
  get timeOptions(): string[] { return this.uniq(this.allTrips.map(t => this.dtTime(t))); }
  get vehicleOptions(): string[] { return this.uniq(this.allTrips.map(t => t.vehicle_plate || t.code)); }

  get filteredTrips(): Trip[] {
    return this.allTrips.filter(t =>
      (!this.fRoute || t.route_code === this.fRoute) &&
      (!this.fDest || t.destination_name === this.fDest) &&
      (!this.fDay || this.dtDay(t) === this.fDay) &&
      (!this.fTime || this.dtTime(t) === this.fTime) &&
      (!this.fVehicle || (t.vehicle_plate || t.code) === this.fVehicle));
  }
  tripLabel(t: Trip): string {
    return `${t.number || t.code} · ${t.origin_name} → ${t.destination_name} · ${(t.scheduled_departure || '').slice(0, 16).replace('T', ' ')}` +
           (t.vehicle_plate ? ` · ${t.vehicle_plate}` : '');
  }
  onFiltersChange(): void {
    // Si le voyage sélectionné n'est plus dans la liste filtrée, le désélectionner.
    if (this.tripId && !this.filteredTrips.some(t => t.id === this.tripId)) { this.tripId = ''; }
    // Auto-sélection quand un seul voyage correspond.
    if (!this.tripId && this.filteredTrips.length === 1) this.tripId = this.filteredTrips[0].id;
    this.refresh();
  }

  refresh(): void {
    this.selReady.clear();
    this.parcels.expedition({ trip: this.mode === 'voyage' ? this.tripId : undefined }).subscribe(d => {
      this.ready = d.ready ?? []; this.assigned = d.assigned ?? [];
      this.totals = d.totals ?? { count: 0, weight: 0 };
    });
  }
  setMode(m: 'voyage' | 'sans'): void { this.mode = m; this.tripId = ''; this.refresh(); }
  onTripChange(): void { this.refresh(); }

  isSel(id: string): boolean { return this.selReady.has(id); }
  toggle(id: string): void { this.selReady.has(id) ? this.selReady.delete(id) : this.selReady.add(id); }
  get allReadySel(): boolean { return this.ready.length > 0 && this.ready.every(p => this.selReady.has(p.id)); }
  toggleAllReady(): void { if (this.allReadySel) this.selReady.clear(); else this.ready.forEach(p => this.selReady.add(p.id)); }

  statusClass(s: string): string {
    return { registered: 'bg-secondary', ready_for_travel: 'bg-warning', loaded: 'bg-info',
             in_transit: 'bg-primary', arrived: 'bg-primary', available_for_pickup: 'bg-info',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  private err = (e: any) => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.");

  assign(p: Parcel): void {
    if (!this.tripId) { this.toast.error('Sélectionnez un voyage.'); return; }
    this.parcels.assignTrip(p.id, this.tripId).subscribe({ next: () => this.refresh(), error: this.err });
  }
  assignSelected(): void {
    if (!this.tripId) { this.toast.error('Sélectionnez un voyage.'); return; }
    if (!this.selReady.size) { this.toast.error('Aucun colis sélectionné.'); return; }
    const ids = [...this.selReady]; let left = ids.length;
    ids.forEach(id => this.parcels.assignTrip(id, this.tripId).subscribe({
      next: () => { if (--left === 0) this.refresh(); },
      error: e => { this.err(e); if (--left === 0) this.refresh(); } }));
  }
  unassign(p: Parcel): void { this.parcels.unassign(p.id).subscribe({ next: () => this.refresh(), error: this.err }); }

  dispatchTrip(): void {
    const ids = this.assigned.filter(p => p.status === 'ready_for_travel' || p.status === 'loaded').map(p => p.id);
    if (!ids.length) { this.toast.error('Aucun colis à expédier.'); return; }
    this.parcels.bulk(ids, 'dispatch').subscribe({ next: () => { this.toast.success('Colis expédiés.'); this.refresh(); }, error: this.err });
  }
  dispatchSelected(): void {
    if (!this.selReady.size) { this.toast.error('Aucun colis sélectionné.'); return; }
    this.parcels.bulk([...this.selReady], 'dispatch').subscribe({ next: () => { this.toast.success('Colis expédiés.'); this.refresh(); }, error: this.err });
  }
  printManifest(): void {
    if (!this.tripId) return;
    this.roadmap.pdf(this.tripId, 'colis').subscribe({
      next: blob => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => this.toast.error("Génération PDF indisponible sur ce serveur."),
    });
  }
}
