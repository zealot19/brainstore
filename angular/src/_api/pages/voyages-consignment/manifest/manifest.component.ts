import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { TripService } from '../../../services/voyages/trip.service';
import { RoadmapService } from '../../../services/voyages-booking/roadmap.service';
import { RouteService } from '../../../services/voyages-config/route.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { TimeSlotService } from '../../../services/voyages-config/time-slot.service';
import { printBlob } from '../../../../app/shared/print/print.util';
import { Parcel } from '../../../models/voyages-consignment.models';
import { Trip } from '../../../models/voyages.models';
import { Route, ServicePoint, TimeSlot } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vcg-manifest',
  templateUrl: './manifest.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule, SearchableSelectDirective],
})
export class VcgManifestComponent implements OnInit {
  private toast = inject(ToastService);
  allTrips: Trip[] = [];
  routes: Route[] = []; destinations: ServicePoint[] = []; timeslots: TimeSlot[] = [];
  // Filtres : options issues de la config (trajets, destinations, plages) ;
  // « Véhicule / Code » identifie directement le voyage (pas de champ Voyage séparé).
  fRoute = ''; fDest = ''; fDay = ''; fTime = ''; tripId = '';
  ready: Parcel[] = []; assigned: Parcel[] = [];
  totals = { count: 0, weight: 0 };
  selReady = new Set<string>();
  shipQty: Record<string, number> = {};   // pièces à expédier par colis (défaut = restant)

  constructor(private parcels: ParcelService, private tripSvc: TripService,
              private roadmap: RoadmapService, private routeSvc: RouteService,
              private spSvc: ServicePointService, private tsSvc: TimeSlotService) {}

  ngOnInit(): void {
    this.tripSvc.list({ status: 'pending' }).subscribe(t => this.allTrips = t ?? []);
    this.routeSvc.list().subscribe(r => this.routes = r ?? []);
    // M09 : destinations de colis = lieux rattachés à une agence.
    this.spSvc.list().subscribe(s => this.destinations = (s ?? []).filter(x => !!x.agency));
    this.tsSvc.list().subscribe(t => this.timeslots = t ?? []);
    this.refresh();
  }

  private dtDay(t: Trip): string { return (t.scheduled_departure || '').slice(0, 10); }
  private dtTime(t: Trip): string { return (t.scheduled_departure || '').slice(11, 16); }

  /** Voyages chargeables correspondant aux filtres (leur liste = le sélecteur Véhicule/Code). */
  get filteredTrips(): Trip[] {
    return this.allTrips.filter(t =>
      (!this.fRoute || t.route === this.fRoute) &&
      (!this.fDest || t.destination === this.fDest) &&
      (!this.fDay || this.dtDay(t) === this.fDay) &&
      (!this.fTime || this.dtTime(t) === this.fTime.slice(0, 5)));
  }
  tripLabel(t: Trip): string {
    const ref = t.vehicle_plate || t.code || t.number;
    return `${ref} · ${(t.scheduled_departure || '').slice(0, 16).replace('T', ' ')}`;
  }
  get selectedTrip(): Trip | undefined { return this.allTrips.find(t => t.id === this.tripId); }

  onFiltersChange(): void {
    // Le véhicule sélectionné doit rester cohérent avec les filtres.
    if (this.tripId && !this.filteredTrips.some(t => t.id === this.tripId)) this.tripId = '';
    if (!this.tripId && this.filteredTrips.length === 1) this.tripId = this.filteredTrips[0].id;
    this.refresh();
  }
  refresh(): void {
    this.selReady.clear();
    const st = this.selectedTrip;
    // Pool « à expédier » restreint à la destination du voyage sélectionné (ou au filtre destination).
    const destination = st?.destination || this.fDest || undefined;
    this.parcels.expedition({ trip: this.tripId || undefined, destination }).subscribe(d => {
      this.ready = d.ready ?? []; this.assigned = d.assigned ?? [];
      this.totals = d.totals ?? { count: 0, weight: 0 };
      // Quantité par défaut = restant de chaque colis du pool.
      this.shipQty = {};
      for (const p of this.ready) this.shipQty[p.id] = p.remaining_pieces ?? p.quantity;
    });
  }
  rem(p: Parcel): number { return p.remaining_pieces ?? p.quantity; }

  isSel(id: string): boolean { return this.selReady.has(id); }
  toggle(id: string): void { this.selReady.has(id) ? this.selReady.delete(id) : this.selReady.add(id); }
  get allReadySel(): boolean { return this.ready.length > 0 && this.ready.every(p => this.selReady.has(p.id)); }
  toggleAllReady(): void { if (this.allReadySel) this.selReady.clear(); else this.ready.forEach(p => this.selReady.add(p.id)); }

  statusClass(s: string): string {
    return { registered: 'bg-secondary', ready_for_travel: 'bg-warning', loaded: 'bg-info',
             partial_transit: 'bg-warning', in_transit: 'bg-primary', arrived: 'bg-primary', available_for_pickup: 'bg-info',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  private err = (e: any) => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.");

  // Expédier N pièces d'un colis du pool sur le voyage sélectionné (1 clic).
  shipOne(p: Parcel): void {
    if (!this.tripId) { this.toast.error('Sélectionnez un voyage (véhicule / code).'); return; }
    const qty = this.shipQty[p.id] ?? this.rem(p);
    if (qty < 1 || qty > this.rem(p)) { this.toast.error('Quantité invalide.'); return; }
    this.parcels.ship(p.id, { trip_id: this.tripId, quantity: qty })
      .subscribe({ next: () => { this.toast.success('Colis expédié.'); this.refresh(); }, error: this.err });
  }
  shipSelected(): void {
    if (!this.tripId) { this.toast.error('Sélectionnez un voyage (véhicule / code).'); return; }
    if (!this.selReady.size) { this.toast.error('Aucun colis sélectionné.'); return; }
    const ids = [...this.selReady]; let left = ids.length;
    ids.forEach(id => {
      const qty = this.shipQty[id];
      this.parcels.ship(id, { trip_id: this.tripId, quantity: qty }).subscribe({
        next: () => { if (--left === 0) { this.toast.success('Colis expédiés.'); this.refresh(); } },
        error: e => { this.err(e); if (--left === 0) this.refresh(); } });
    });
  }
  printManifest(): void {
    if (!this.tripId) return;
    this.roadmap.pdf(this.tripId, 'colis').subscribe({
      next: blob => printBlob(blob),
      error: () => this.toast.error("Génération PDF indisponible sur ce serveur."),
    });
  }
}
