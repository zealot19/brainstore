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
import { Parcel, ParcelShipment } from '../../../models/voyages-consignment.models';
import { AuthService } from '../../../services/auth/auth.service';
import { PrintRouterService } from '../../../../app/shared/print/print-router.service';
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
  private auth = inject(AuthService);
  private printRouter = inject(PrintRouterService);
  allTrips: Trip[] = [];
  routes: Route[] = []; destinations: ServicePoint[] = []; timeslots: TimeSlot[] = [];
  // Filtres : options issues de la config (trajets, destinations, plages) ;
  // « Véhicule / Code » identifie directement le voyage (pas de champ Voyage séparé).
  fRoute = ''; fDest = ''; fDay = ''; fTime = ''; tripId = '';
  ready: Parcel[] = []; onboard: ParcelShipment[] = [];
  totals = { count: 0, weight: 0 };
  selReady = new Set<string>();
  shipQty: Record<string, number> = {};   // pièces à charger par colis (défaut = restant)
  wdQty: Record<string, number> = {};     // pièces à retirer par expédition (#11)

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
    // #1 : pool restreint aux colis dont la destination est desservie par le trajet choisi
    // (trajet du voyage sélectionné, ou filtre Trajet). Repli sur une destination précise.
    const route = (st?.route as string) || this.fRoute || undefined;
    const destination = route ? undefined : (st?.destination || this.fDest || undefined);
    this.parcels.expedition({ trip: this.tripId || undefined, destination, route }).subscribe(d => {
      this.ready = d.ready ?? []; this.onboard = (d as any).onboard ?? [];
      this.totals = d.totals ?? { count: 0, weight: 0 };
      // Quantité par défaut = restant de chaque colis du pool ; retrait = qté chargée.
      this.shipQty = {};
      for (const p of this.ready) this.shipQty[p.id] = this.rem(p);
      this.wdQty = {};
      for (const s of this.onboard) this.wdQty[s.id] = s.quantity;
    });
  }
  /** #4 Restant « vivant » à charger = enregistré − (validé/compté) − (chargé en brouillon
   *  sur CE voyage). Permet de voir en direct : 10/10 → charger 5 → 5 restants ; retirer 2
   *  du chargé → 7 restants, 3 dans le véhicule. */
  rem(p: Parcel): number {
    const base = p.remaining_pieces ?? p.quantity;
    const draftLoaded = this.onboard
      .filter(s => s.parcel === p.id && s.status === 'draft')
      .reduce((n, s) => n + (s.quantity || 0), 0);
    return base - draftLoaded;
  }
  /** Pool = colis avec encore des pièces à charger (le colis reste visible tant qu'il
   *  reste des pièces ; il ne disparaît qu'une fois tout chargé). */
  get pool(): Parcel[] { return this.ready.filter(p => this.rem(p) > 0); }
  isAdmin(): boolean { const u: any = this.auth.currentUser; return !!(u && (u.is_superuser || u.is_institution_admin)); }
  canWithdraw(s: ParcelShipment): boolean { return !['in_transit', 'arrived', 'received', 'cancelled'].includes(s.status); }
  get hasDraft(): boolean { return this.onboard.some(s => s.status === 'draft'); }

  isSel(id: string): boolean { return this.selReady.has(id); }
  toggle(id: string): void { this.selReady.has(id) ? this.selReady.delete(id) : this.selReady.add(id); }
  get allReadySel(): boolean { return this.pool.length > 0 && this.pool.every(p => this.selReady.has(p.id)); }
  toggleAllReady(): void { if (this.allReadySel) this.selReady.clear(); else this.pool.forEach(p => this.selReady.add(p.id)); }

  statusClass(s: string): string {
    return { registered: 'bg-secondary', ready_for_travel: 'bg-warning', loaded: 'bg-info',
             partial_transit: 'bg-warning', in_transit: 'bg-primary', arrived: 'bg-primary', available_for_pickup: 'bg-info',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  private err = (e: any) => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.");

  // #11 Phase 1 — charger N pièces d'un colis du pool sur le véhicule (expédition en brouillon).
  loadOne(p: Parcel): void {
    if (!this.tripId) { this.toast.error('Sélectionnez un voyage (véhicule / code).'); return; }
    const qty = this.shipQty[p.id] ?? this.rem(p);
    if (qty < 1 || qty > this.rem(p)) { this.toast.error('Quantité invalide.'); return; }
    this.parcels.createShipment(p.id, { trip_id: this.tripId, quantity: qty })
      .subscribe({ next: () => { this.toast.success('Colis chargé.'); this.refresh(); }, error: this.err });
  }
  loadSelected(): void {
    if (!this.tripId) { this.toast.error('Sélectionnez un voyage (véhicule / code).'); return; }
    if (!this.selReady.size) { this.toast.error('Aucun colis sélectionné.'); return; }
    const ids = [...this.selReady]; let left = ids.length;
    ids.forEach(id => {
      const qty = this.shipQty[id];
      this.parcels.createShipment(id, { trip_id: this.tripId, quantity: qty }).subscribe({
        next: () => { if (--left === 0) { this.toast.success('Colis chargés.'); this.refresh(); } },
        error: e => { this.err(e); if (--left === 0) this.refresh(); } });
    });
  }

  // #11 Phase 2 — retrait de pièces chargées (véhicule), validation « bon pour le départ », dévalidation (admin).
  withdraw(s: ParcelShipment): void {
    const qty = this.wdQty[s.id];
    if (!qty || qty < 1 || qty > s.quantity) { this.toast.error('Quantité à retirer invalide.'); return; }
    const all = qty === s.quantity;
    if (!confirm(all ? `Retirer tout le colis ${s.parcel_reference} du véhicule ?`
                     : `Retirer ${qty} pièce(s) de ${s.parcel_reference} ?`)) return;
    this.parcels.withdrawShipment(s.id, qty)
      .subscribe({ next: () => { this.toast.success('Retiré.'); this.refresh(); }, error: this.err });
  }
  withdrawAll(s: ParcelShipment): void { this.wdQty[s.id] = s.quantity; this.withdraw(s); }
  validateAll(): void {
    const drafts = this.onboard.filter(s => s.status === 'draft');
    if (!drafts.length) { this.toast.error('Aucun colis à valider.'); return; }
    if (!confirm('Valider ces colis « bon pour le départ » ?')) return;
    let left = drafts.length;
    drafts.forEach(s => this.parcels.validateShipment(s.id).subscribe({
      next: () => { if (--left === 0) { this.toast.success('Manifeste validé.'); this.refresh(); } },
      error: e => { this.err(e); if (--left === 0) this.refresh(); } }));
  }
  unvalidate(s: ParcelShipment): void {
    if (!confirm(`Dévalider l'expédition ${s.parcel_reference} ?`)) return;
    this.parcels.unvalidateShipment(s.id)
      .subscribe({ next: () => { this.toast.success('Dévalidé.'); this.refresh(); }, error: this.err });
  }
  printManifest(): void {
    if (!this.tripId) return;
    // #2 : impression HTML via l'agent/navigateur (ne dépend pas de WeasyPrint).
    this.printRouter.print('bordereau_colis', this.tripId);
  }
}
