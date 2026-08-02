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
  confirmTarget: Booking | null = null; payMethod = ''; payAmount = 0;

  constructor(private svc: BookingService, private router: Router) {}
  ngOnInit(): void { this.reload(); }
  reload(): void {
    this.loading = true;
    this.svc.list({ status: this.statusFilter, q: this.q }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  statusClass(s: string): string {
    return { held: 'bg-warning', confirmed: 'bg-success', boarded: 'bg-primary',
             cancelled: 'bg-danger', expired: 'bg-secondary', no_show: 'bg-dark' }[s] ?? 'bg-secondary';
  }
  newBooking(): void { this.router.navigate(['/voyages-booking/bookings/new']); }
  open(b: Booking): void { this.router.navigate(['/voyages-booking/bookings', b.id]); }
  askConfirm(b: Booking): void { this.confirmTarget = b; this.payMethod = ''; this.payAmount = +b.amount_due; }
  doConfirm(): void {
    if (!this.confirmTarget) return;
    this.svc.confirm(this.confirmTarget.id, { payment_method: this.payMethod, amount_paid: this.payAmount })
      .subscribe({ next: () => { this.confirmTarget = null; this.reload(); },
        error: e => alert(e?.error?.detail ?? 'Confirmation impossible.') });
  }
  cancel(b: Booking): void {
    if (!confirm('Annuler cette réservation ?')) return;
    this.svc.cancel(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  noShow(b: Booking): void {
    this.svc.noShow(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
}
