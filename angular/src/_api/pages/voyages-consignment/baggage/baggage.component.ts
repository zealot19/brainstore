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
import { SearchableSelectComponent } from '../../shared/searchable-select/searchable-select.component';

@Component({
  selector: 'app-vcg-baggage',
  templateUrl: './baggage.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent, SearchableSelectComponent],
})
export class VcgBaggageComponent implements OnInit {
  q = ''; bookings: Booking[] = []; selectedBooking: Booking | null = null;
  ticketId = ''; rows: Baggage[] = []; types: ConsignmentType[] = [];
  weight: number | null = null; typeId = ''; description = '';
  amountDue = 0; amountReceived: number | null = null; saving = false; errorMsg = '';
  selected = new Set<string>();

  constructor(private svc: BaggageService, private booking: BookingService,
              private ctSvc: ConsignmentTypeService) {}
  ngOnInit(): void {
    this.ctSvc.list().subscribe(d => this.types = d);
    this.search(); // charge les réservations récentes dès l'ouverture
  }

  search(): void { this.booking.list({ q: this.q }).subscribe(d => this.bookings = d); }
  pickBooking(b: Booking): void { this.selectedBooking = b; this.ticketId = b.tickets[0]?.id ?? ''; this.reload(); }
  reload(): void { this.selected.clear(); if (this.ticketId) this.svc.list({ ticket: this.ticketId }).subscribe(d => this.rows = d); }

  isSelected(id: string): boolean { return this.selected.has(id); }
  toggleSel(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get selectable(): Baggage[] { return this.rows.filter(r => r.status !== 'delivered' && r.status !== 'cancelled'); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulk(action: 'load' | 'deliver' | 'cancel'): void {
    if (!this.selected.size) return;
    if (action === 'cancel' && !confirm(`Annuler ${this.selected.size} bagage(s) ?`)) return;
    this.svc.bulk([...this.selected], action).subscribe({
      next: r => { if (r.errors?.length) alert(r.errors.join('\n')); this.reload(); },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }

  get tickets(): Ticket[] { return this.selectedBooking?.tickets ?? []; }
  get ticketOptions(): { id: string; label: string }[] {
    return this.tickets.map(t => ({ id: t.id, label: `${t.passenger_name} · ${t.number}` }));
  }
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
