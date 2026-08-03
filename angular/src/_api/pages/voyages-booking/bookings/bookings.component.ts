import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Booking } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vb-bookings',
  templateUrl: './bookings.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VbBookingsComponent implements OnInit {
  rows: Booking[] = []; loading = false; statusFilter = ''; q = '';

  constructor(private svc: BookingService, private router: Router) {}
  ngOnInit(): void { this.reload(); }
  reload(): void {
    this.loading = true;
    this.svc.list({ status: this.statusFilter, q: this.q }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  statusClass(s: string): string {
    return { confirmed: 'bg-success', boarded: 'bg-primary',
             cancelled: 'bg-danger', no_show: 'bg-dark' }[s] ?? 'bg-secondary';
  }
  newBooking(): void { this.router.navigate(['/voyages-booking/bookings/new']); }
  open(b: Booking): void { this.router.navigate(['/voyages-booking/bookings', b.id]); }
  cancel(b: Booking): void {
    if (!confirm('Annuler cette réservation ?')) return;
    this.svc.cancel(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  noShow(b: Booking): void {
    this.svc.noShow(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
}
