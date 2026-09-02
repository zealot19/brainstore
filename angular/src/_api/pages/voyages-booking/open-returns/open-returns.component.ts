import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { TimeSlotService } from '../../../services/voyages-config/time-slot.service';
import { Booking, Ticket, TripOption, SeatCell } from '../../../models/voyages-booking.models';
import { FareClass, TimeSlot } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { SearchableSelectComponent } from '../../shared/searchable-select/searchable-select.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-vb-open-returns',
  templateUrl: './open-returns.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, SearchableSelectComponent],
})
export class VbOpenReturnsComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  rows: Booking[] = []; loading = false; q = '';
  fareClasses: FareClass[] = []; timeSlots: TimeSlot[] = [];

  // panneau d'affectation
  target: Booking | null = null;
  outboundTickets: Ticket[] = [];
  fareClassId = ''; date = ''; slotId = '';
  trips: TripOption[] = []; returnTripId = '';
  seats: SeatCell[] = []; selReturn: SeatCell[] = [];
  saving = false; errorMsg = '';

  constructor(private svc: BookingService, private fcSvc: FareClassService,
              private tsSvc: TimeSlotService, private router: Router) {}
  ngOnInit(): void {
    this.fcSvc.list().subscribe(d => this.fareClasses = d);
    this.tsSvc.list().subscribe(d => this.timeSlots = d);
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.svc.openReturns(this.q).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

  tripLabel = (t: any): string =>
    `${t.number} · ${t.origin_name} → ${t.destination_name} · ${new Date(t.scheduled_departure).toLocaleString('fr-FR')}`;

  pick(b: Booking): void {
    this.target = b; this.errorMsg = '';
    this.fareClassId = ''; this.date = ''; this.slotId = '';
    this.trips = []; this.returnTripId = ''; this.seats = []; this.selReturn = [];
    this.svc.get(b.id).subscribe(full => this.outboundTickets = (full.tickets ?? []).filter(t => t.direction === 'outbound' && t.status !== 'cancelled'));
  }
  cancelPick(): void { this.target = null; }

  get ready(): boolean { return !!(this.fareClassId && this.date && this.slotId); }
  search(): void {
    this.returnTripId = ''; this.trips = []; this.seats = []; this.selReturn = [];
    if (this.ready) this.svc.bookableTrips({ fare_class: this.fareClassId, time_slot: this.slotId, date: this.date }).subscribe(t => this.trips = t);
  }
  onTripChange(): void {
    this.seats = []; this.selReturn = [];
    if (this.returnTripId) this.svc.seatMap(this.returnTripId).subscribe(s => this.seats = s);
  }
  rowsOf(seats: SeatCell[]): number[] { return [...new Set(seats.map(s => s.row))].sort((a, b) => a - b); }
  seatsInRow(row: number): SeatCell[] { return this.seats.filter(s => s.row === row).sort((a, b) => a.column - b.column); }
  toggle(seat: SeatCell): void {
    if (seat.status !== 'available') return;
    const i = this.selReturn.findIndex(s => s.id === seat.id);
    if (i >= 0) this.selReturn.splice(i, 1);
    else if (this.selReturn.length < this.outboundTickets.length) this.selReturn.push(seat);
  }
  isSel(seat: SeatCell): boolean { return this.selReturn.some(s => s.id === seat.id); }
  seatClass(seat: SeatCell): string {
    if (this.isSel(seat)) return 'btn-primary';
    if (seat.status !== 'available') return 'btn-secondary disabled';
    return 'btn-outline-success';
  }

  get canAssign(): boolean {
    return !this.saving && !!this.returnTripId && this.selReturn.length === this.outboundTickets.length && this.outboundTickets.length > 0;
  }
  assign(): void {
    if (!this.canAssign || !this.target) return;
    this.saving = true; this.errorMsg = '';
    const items = this.outboundTickets.map((t, i) => ({ outbound_ticket_id: t.id, return_seat_id: this.selReturn[i].id }));
    this.svc.assignReturn(this.target.id, { return_trip_id: this.returnTripId, items }).subscribe({
      next: b => this.router.navigate(['/voyages-booking/bookings', b.id]),
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
}
