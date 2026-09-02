import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Parcel, Baggage, Manifest } from '../../../models/voyages-consignment.models';
import { TripOption } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-vcg-manifest',
  templateUrl: './manifest.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent],
})
export class VcgManifestComponent implements OnInit {
  private toast = inject(ToastService);
  trips: TripOption[] = []; tripId = '';
  pending: Parcel[] = []; manifest: Manifest | null = null;

  constructor(private parcels: ParcelService, private bags: BaggageService, private booking: BookingService) {}
  ngOnInit(): void { this.booking.bookableTrips().subscribe(t => this.trips = t); }

  onTripChange(): void {
    this.manifest = null; this.pending = [];
    if (!this.tripId) return;
    this.parcels.pending().subscribe(d => this.pending = d);
    this.parcels.manifest(this.tripId).subscribe(d => this.manifest = d);
  }
  statusClass(s: string): string {
    return { registered: 'bg-warning', loaded: 'bg-info', arrived: 'bg-primary', picked_up: 'bg-success',
             checked_in: 'bg-warning', delivered: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  load(p: Parcel): void {
    this.parcels.assignTrip(p.id, this.tripId).subscribe({ next: () => this.onTripChange(), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  loadAll(): void {
    if (!this.pending.length) return;
    let remaining = this.pending.length;
    this.pending.forEach(p => this.parcels.assignTrip(p.id, this.tripId).subscribe({
      next: () => { if (--remaining === 0) this.onTripChange(); },
      error: e => { this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."); if (--remaining === 0) this.onTripChange(); } }));
  }
  unload(p: Parcel): void {
    this.parcels.unload(p.id).subscribe({ next: () => this.onTripChange(), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  deliver(b: Baggage): void { this.bags.deliver(b.id).subscribe({ next: () => this.onTripChange(), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") }); }
  loadBag(b: Baggage): void { this.bags.load(b.id).subscribe({ next: () => this.onTripChange(), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") }); }
}