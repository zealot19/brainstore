import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { TimeSlotService } from '../../../services/voyages-config/time-slot.service';
import { FareClass, TimeSlot } from '../../../models/voyages-config.models';
import { TripOption, TripDestination, SeatCell, BookingCreate, BookingItem, PassengerSpec } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { SearchableSelectComponent } from '../../shared/searchable-select/searchable-select.component';
import { ClientAutocompleteComponent } from '../shared/client-autocomplete/client-autocomplete.component';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { TranslocoModule } from '@jsverse/transloco';

interface PaxRow extends PassengerSpec { destination_point_id: string; }

@Component({
  selector: 'app-vb-new-booking',
  templateUrl: './new-booking.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, SearchableSelectComponent, ClientAutocompleteComponent, TranslocoModule],
})
export class VbNewBookingComponent implements OnInit {
  tripType: 'one_way' | 'round_trip' = 'one_way';
  fareClasses: FareClass[] = []; timeSlots: TimeSlot[] = [];
  fareClassId = ''; outSlotId = ''; retSlotId = ''; outDate = ''; retDate = '';
  outTrips: TripOption[] = []; retTrips: TripOption[] = [];
  outboundTripId = ''; returnTripId = '';
  outboundSeats: SeatCell[] = []; returnSeats: SeatCell[] = [];
  destinations: TripDestination[] = [];
  selOutbound: SeatCell[] = []; selReturn: SeatCell[] = [];
  passengers: PaxRow[] = []; buyerIndex = 0;
  paymentMethod = ''; amountReceived: number | null = null;
  paymentMethods: any[] = [];
  returnOpen = false;
  saving = false; errorMsg = '';

  constructor(private svc: BookingService, private fcSvc: FareClassService,
              private tsSvc: TimeSlotService, private router: Router,
              private pmSvc: PaymentMethodService) {}
  ngOnInit(): void {
    this.fcSvc.list().subscribe(d => this.fareClasses = d);
    this.tsSvc.list().subscribe(d => this.timeSlots = d);
    this.pmSvc.list(true).subscribe(d => this.paymentMethods = d);
  }

  onPaymentMethodChange(): void {
    const pm = this.paymentMethods.find(m => m.code === this.paymentMethod);
    if (pm && !pm.requires_payment) this.amountReceived = 0;
  }

  get isRound(): boolean { return this.tripType === 'round_trip'; }

  tripLabel = (t: any): string =>
    `${t.number} · ${t.origin_name} → ${t.destination_name} · ${new Date(t.scheduled_departure).toLocaleString('fr-FR')}`;

  /** Reload the outbound / return trip lists from the chosen class + plage horaire. */
  get outReady(): boolean { return !!(this.fareClassId && this.outSlotId && this.outDate); }
  get retReady(): boolean { return !!(this.fareClassId && this.retSlotId && this.retDate); }

  searchOutbound(): void {
    this.outboundTripId = ''; this.outTrips = []; this.resetSelection();
    if (this.outReady) {
      this.svc.bookableTrips({ fare_class: this.fareClassId, time_slot: this.outSlotId, date: this.outDate })
        .subscribe(t => this.outTrips = t);
    }
  }
  searchReturn(): void {
    this.returnTripId = ''; this.retTrips = []; this.returnSeats = []; this.selReturn = [];
    if (this.retReady) {
      this.svc.bookableTrips({ fare_class: this.fareClassId, time_slot: this.retSlotId, date: this.retDate })
        .subscribe(t => this.retTrips = t);
    }
  }
  get needReturnSel(): boolean { return this.isRound && !this.returnOpen; }
  onCriteriaChange(): void { this.searchOutbound(); if (this.needReturnSel) this.searchReturn(); }
  onReturnOpenChange(): void {
    if (this.returnOpen) { this.retSlotId = ''; this.retDate = ''; this.returnTripId = ''; this.retTrips = []; this.returnSeats = []; this.selReturn = []; }
    else if (this.isRound) { this.searchReturn(); }
  }

  resetSelection(): void {
    this.outboundSeats = []; this.returnSeats = []; this.selOutbound = []; this.selReturn = [];
    this.destinations = []; this.passengers = [];
  }

  onOutboundChange(): void {
    this.resetSelection();
    if (this.outboundTripId) {
      this.svc.seatMap(this.outboundTripId).subscribe(s => this.outboundSeats = s);
      this.svc.destinations(this.outboundTripId).subscribe(d => this.destinations = d);
    }
  }
  onReturnChange(): void {
    this.returnSeats = []; this.selReturn = [];
    if (this.isRound && this.returnTripId) {
      this.svc.seatMap(this.returnTripId).subscribe(s => this.returnSeats = s);
    }
  }

  get defaultDestId(): string { return this.destinations.length ? this.destinations[this.destinations.length - 1].id : ''; }

  rows(seats: SeatCell[]): number[] { return [...new Set(seats.map(s => s.row))].sort((a, b) => a - b); }
  seatsInRow(seats: SeatCell[], row: number): SeatCell[] { return seats.filter(s => s.row === row).sort((a, b) => a.column - b.column); }

  toggleSeat(list: 'out' | 'ret', seat: SeatCell): void {
    if (seat.status !== 'available') return;
    const arr = list === 'out' ? this.selOutbound : this.selReturn;
    const i = arr.findIndex(s => s.id === seat.id);
    if (i >= 0) arr.splice(i, 1); else arr.push(seat);
    if (list === 'out') this.syncPassengers();
  }
  isSel(list: 'out' | 'ret', seat: SeatCell): boolean {
    return (list === 'out' ? this.selOutbound : this.selReturn).some(s => s.id === seat.id);
  }
  seatClass(list: 'out' | 'ret', seat: SeatCell): string {
    if (this.isSel(list, seat)) return 'btn-primary';
    if (seat.status !== 'available') return 'btn-secondary disabled';
    return 'btn-outline-success';
  }

  /** Keep one passenger row per selected outbound seat. */
  syncPassengers(): void {
    const rows: PaxRow[] = [];
    for (let i = 0; i < this.selOutbound.length; i++) {
      rows.push(this.passengers[i] ?? {
        name: '', phone: '', id_type: 'cni', id_number: '',
        destination_point_id: this.defaultDestId,
      });
    }
    this.passengers = rows;
    if (this.buyerIndex >= rows.length) this.buyerIndex = 0;
  }

  priceFor(destId: string): number | null {
    const d = this.destinations.find(x => x.id === destId);
    if (!d) return null;
    const amt = this.isRound ? d.round_trip_amount : d.one_way_amount;
    return amt != null ? +amt : null;
  }
  get total(): number {
    return this.passengers.reduce((sum, p) => sum + (this.priceFor(p.destination_point_id) ?? 0), 0);
  }
  get anyMissingFare(): boolean {
    return this.passengers.some(p => this.priceFor(p.destination_point_id) == null);
  }
  get change(): number {
    const r = this.amountReceived ?? 0;
    return r - this.total > 0 ? r - this.total : 0;
  }

  get canSubmit(): boolean {
    if (this.saving || !this.outboundTripId || !this.selOutbound.length) return false;
    if (this.needReturnSel && (!this.returnTripId || this.selReturn.length !== this.selOutbound.length)) return false;
    if (this.anyMissingFare) return false;
    if (this.passengers.some(p => !p.name || !p.phone)) return false;
    if ((this.amountReceived ?? 0) < this.total) return false;
    return true;
  }

  submit(): void {
    if (!this.canSubmit) return;
    this.saving = true; this.errorMsg = '';
    const items: BookingItem[] = this.selOutbound.map((seat, i) => {
      const p = this.passengers[i];
      return {
        passenger: { id: p.id, name: p.name, phone: p.phone,
                     id_type: p.id_type, id_number: p.id_number },
        destination_point_id: p.destination_point_id || null,
        outbound_seat_id: seat.id,
        return_seat_id: this.needReturnSel ? this.selReturn[i]?.id ?? null : null,
      };
    });
    const buyer = items[this.buyerIndex].passenger;
    const body: BookingCreate = {
      trip_type: this.tripType, outbound_trip_id: this.outboundTripId,
      return_trip_id: this.needReturnSel ? this.returnTripId : null,
      buyer, items, payment_method: this.paymentMethod, amount_received: this.amountReceived,
      return_open: this.isRound && this.returnOpen,
    };
    this.svc.create(body).subscribe({
      next: b => this.router.navigate(['/voyages-booking/bookings', b.id]),
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
}
