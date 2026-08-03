import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { TripOption, TripDestination, SeatCell, BookingCreate, BookingItem, PassengerSpec } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

interface PaxRow extends PassengerSpec { destination_point_id: string; }

@Component({
  selector: 'app-vb-new-booking',
  templateUrl: './new-booking.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VbNewBookingComponent implements OnInit {
  tripType: 'one_way' | 'round_trip' = 'one_way';
  trips: TripOption[] = []; outboundTripId = ''; returnTripId = '';
  outboundSeats: SeatCell[] = []; returnSeats: SeatCell[] = [];
  destinations: TripDestination[] = [];
  selOutbound: SeatCell[] = []; selReturn: SeatCell[] = [];
  passengers: PaxRow[] = []; buyerIndex = 0;
  paymentMethod = ''; amountReceived: number | null = null;
  saving = false; errorMsg = '';

  constructor(private svc: BookingService, private router: Router) {}
  ngOnInit(): void { this.svc.bookableTrips().subscribe(t => this.trips = t); }

  get isRound(): boolean { return this.tripType === 'round_trip'; }

  onTripChange(): void {
    this.outboundSeats = []; this.returnSeats = []; this.selOutbound = []; this.selReturn = [];
    this.destinations = []; this.passengers = [];
    if (this.outboundTripId) {
      this.svc.seatMap(this.outboundTripId).subscribe(s => this.outboundSeats = s);
      this.svc.destinations(this.outboundTripId).subscribe(d => this.destinations = d);
    }
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
        first_name: '', last_name: '', phone: '', id_type: 'cni', id_number: '',
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
    if (this.isRound && (!this.returnTripId || this.selReturn.length !== this.selOutbound.length)) return false;
    if (this.anyMissingFare) return false;
    if (this.passengers.some(p => !p.first_name || !p.last_name || !p.phone)) return false;
    if ((this.amountReceived ?? 0) < this.total) return false;
    return true;
  }

  submit(): void {
    if (!this.canSubmit) return;
    this.saving = true; this.errorMsg = '';
    const items: BookingItem[] = this.selOutbound.map((seat, i) => {
      const p = this.passengers[i];
      return {
        passenger: { first_name: p.first_name, last_name: p.last_name, phone: p.phone,
                     id_type: p.id_type, id_number: p.id_number },
        destination_point_id: p.destination_point_id || null,
        outbound_seat_id: seat.id,
        return_seat_id: this.isRound ? this.selReturn[i]?.id ?? null : null,
      };
    });
    const buyer = items[this.buyerIndex].passenger;
    const body: BookingCreate = {
      trip_type: this.tripType, outbound_trip_id: this.outboundTripId,
      return_trip_id: this.isRound ? this.returnTripId : null,
      buyer, items, payment_method: this.paymentMethod, amount_received: this.amountReceived,
    };
    this.svc.create(body).subscribe({
      next: b => this.router.navigate(['/voyages-booking/bookings', b.id]),
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
}
