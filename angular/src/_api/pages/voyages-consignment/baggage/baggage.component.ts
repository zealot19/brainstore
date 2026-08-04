import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { Baggage } from '../../../models/voyages-consignment.models';
import { Booking, Ticket } from '../../../models/voyages-booking.models';
import { ConsignmentType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vcg-baggage',
  templateUrl: './baggage.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcgBaggageComponent implements OnInit {
  q = ''; bookings: Booking[] = []; selectedBooking: Booking | null = null;
  ticketId = ''; rows: Baggage[] = []; types: ConsignmentType[] = [];
  weight: number | null = null; typeId = ''; description = '';
  amountDue = 0; amountReceived: number | null = null; saving = false; errorMsg = '';

  constructor(private svc: BaggageService, private booking: BookingService,
              private ctSvc: ConsignmentTypeService) {}
  ngOnInit(): void {
    this.ctSvc.list().subscribe(d => this.types = d);
    this.search(); // charge les réservations récentes dès l'ouverture
  }

  search(): void { this.booking.list({ q: this.q }).subscribe(d => this.bookings = d); }
  pickBooking(b: Booking): void { this.selectedBooking = b; this.ticketId = b.tickets[0]?.id ?? ''; this.reload(); }
  reload(): void { if (this.ticketId) this.svc.list({ ticket: this.ticketId }).subscribe(d => this.rows = d); }

  get tickets(): Ticket[] { return this.selectedBooking?.tickets ?? []; }
  get change(): number { const r = this.amountReceived ?? 0; return r - this.amountDue > 0 ? r - this.amountDue : 0; }
  statusClass(s: string): string {
    return { checked_in: 'bg-warning', loaded: 'bg-info', delivered: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  add(): void {
    if (!this.ticketId || this.saving) return;
    this.saving = true; this.errorMsg = '';
    this.svc.create({ ticket_id: this.ticketId, consignment_type_id: this.typeId || null,
      description: this.description, weight_kg: this.weight, amount_due: this.amountDue,
      amount_received: this.amountReceived }).subscribe({
      next: () => { this.saving = false; this.weight = null; this.description = ''; this.amountDue = 0; this.amountReceived = null; this.reload(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  loadBag(b: Baggage): void { this.svc.load(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  deliver(b: Baggage): void { this.svc.deliver(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  cancel(b: Baggage): void { if (!confirm('Annuler ce bagage ?')) return; this.svc.cancel(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
}
