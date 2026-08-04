import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Parcel, Baggage, Manifest } from '../../../models/voyages-consignment.models';
import { TripOption } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vcg-manifest',
  templateUrl: './manifest.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcgManifestComponent implements OnInit {
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
    this.parcels.assignTrip(p.id, this.tripId).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  arrived(p: Parcel): void { this.parcels.arrived(p.id).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  deliver(b: Baggage): void { this.bags.deliver(b.id).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  loadBag(b: Baggage): void { this.bags.load(b.id).subscribe({ next: () => this.onTripChange(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
}
