import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Booking } from '../../../models/voyages-booking.models';

@Component({
  selector: 'app-vb-booking-detail',
  templateUrl: './booking-detail.component.html',
  imports: [CommonModule],
})
export class VbBookingDetailComponent implements OnInit {
  booking: Booking | null = null; loading = false;
  constructor(private svc: BookingService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.load(id);
  }
  load(id: string): void {
    this.loading = true;
    this.svc.get(id).subscribe({ next: b => { this.booking = b; this.loading = false; }, error: () => this.loading = false });
  }
  statusClass(s: string): string {
    return { confirmed: 'bg-success', boarded: 'bg-primary', cancelled: 'bg-danger',
             no_show: 'bg-dark', sold: 'bg-success' }[s] ?? 'bg-secondary';
  }
  board(ticketId: string): void {
    this.svc.board(ticketId).subscribe({ next: () => this.booking && this.load(this.booking.id),
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  cancel(): void {
    if (!this.booking || !confirm('Annuler cette réservation ?')) return;
    this.svc.cancel(this.booking.id).subscribe({ next: () => this.load(this.booking!.id), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  back(): void { this.router.navigate(['/voyages-booking/bookings']); }
}
