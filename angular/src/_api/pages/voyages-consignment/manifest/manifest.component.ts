import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { TripOption } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-vcg-manifest',
  templateUrl: './manifest.component.html',
  imports: [SearchableSelectDirective, HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcgManifestComponent implements OnInit {
  private toast = inject(ToastService);
  trips: TripOption[] = []; tripId = '';
  mode: 'voyage' | 'sans' = 'voyage';
  destFilter = '';
  ready: Parcel[] = []; assigned: Parcel[] = [];
  totals = { count: 0, weight: 0 };
  selected = new Set<string>();

  constructor(private parcels: ParcelService, private booking: BookingService) {}
  ngOnInit(): void { this.booking.bookableTrips().subscribe(t => this.trips = t); this.refresh(); }

  refresh(): void {
    this.selected.clear();
    this.parcels.expedition({ trip: this.mode === 'voyage' ? this.tripId : undefined }).subscribe(d => {
      this.ready = d.ready ?? []; this.assigned = d.assigned ?? [];
      this.totals = d.totals ?? { count: 0, weight: 0 };
    });
  }
  setMode(m: 'voyage' | 'sans'): void { this.mode = m; this.refresh(); }
  onTripChange(): void { this.refresh(); }

  get readyFiltered(): Parcel[] {
    const q = this.destFilter.toLowerCase();
    return q ? this.ready.filter(p => (p.destination_point_name || '').toLowerCase().includes(q)) : this.ready;
  }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }

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
  unassign(p: Parcel): void { this.parcels.unassign(p.id).subscribe({ next: () => this.refresh(), error: this.err }); }

  /** Voyage : expédie tous les colis affectés au voyage (→ en transit). */
  dispatchTrip(): void {
    const ids = this.assigned.filter(p => p.status === 'ready_for_travel' || p.status === 'loaded').map(p => p.id);
    if (!ids.length) { this.toast.error('Aucun colis à expédier.'); return; }
    this.parcels.bulk(ids, 'dispatch').subscribe({ next: () => { this.toast.success('Colis expédiés.'); this.refresh(); }, error: this.err });
  }
  /** Sans voyage : expédie les colis sélectionnés dans le pool. */
  dispatchSelected(): void {
    if (!this.selected.size) { this.toast.error('Aucun colis sélectionné.'); return; }
    this.parcels.bulk([...this.selected], 'dispatch').subscribe({ next: () => { this.toast.success('Colis expédiés.'); this.refresh(); }, error: this.err });
  }
  printManifest(): void { if (this.tripId) window.open(`/api/v1/voyages/consignment/trips/${this.tripId}/manifest/`, '_blank'); }
}
