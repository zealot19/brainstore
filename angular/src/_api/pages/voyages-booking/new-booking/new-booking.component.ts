import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { TripOption, SeatCell, BookingCreate, BookingItem, PassengerSpec } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vb-new-booking',
  templateUrl: './new-booking.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VbNewBookingComponent implements OnInit {
  step = 1; tripType: 'one_way' | 'round_trip' = 'one_way';
  trips: TripOption[] = []; outboundTripId = ''; returnTripId = '';
  outboundSeats: SeatCell[] = []; returnSeats: SeatCell[] = [];
  selOutbound: SeatCell[] = []; selReturn: SeatCell[] = [];
  passengers: PassengerSpec[] = []; buyerIndex = 0; saving = false; errorMsg = '';

  constructor(private svc: BookingService, private router: Router) {}
  ngOnInit(): void { this.svc.bookableTrips().subscribe(t => this.trips = t); }

  get isRound(): boolean { return this.tripType === 'round_trip'; }

  loadSeats(): void {
    if (this.outboundTripId) this.svc.seatMap(this.outboundTripId).subscribe(s => this.outboundSeats = s);
    if (this.isRound && this.returnTripId) this.svc.seatMap(this.returnTripId).subscribe(s => this.returnSeats = s);
  }
  rows(seats: SeatCell[]): number[] {
    return [...new Set(seats.map(s => s.row))].sort((a, b) => a - b);
  }
  seatsInRow(seats: SeatCell[], row: number): SeatCell[] {
    return seats.filter(s => s.row === row).sort((a, b) => a.column - b.column);
  }
  toggleSeat(list: 'out' | 'ret', seat: SeatCell): void {
    if (seat.status !== 'available') return;
    const arr = list === 'out' ? this.selOutbound : this.selReturn;
    const i = arr.findIndex(s => s.id === seat.id);
    if (i >= 0) arr.splice(i, 1); else arr.push(seat);
  }
  isSel(list: 'out' | 'ret', seat: SeatCell): boolean {
    return (list === 'out' ? this.selOutbound : this.selReturn).some(s => s.id === seat.id);
  }
  seatClass(list: 'out' | 'ret', seat: SeatCell): string {
    if (this.isSel(list, seat)) return 'btn-primary';
    if (seat.status !== 'available') return 'btn-secondary disabled';
    return 'btn-outline-success';
  }
  buildPassengers(): void {
    this.passengers = this.selOutbound.map(() => ({ first_name: '', last_name: '', phone: '', id_type: 'cni', id_number: '' }));
    this.buyerIndex = 0;
  }
  next(): void {
    this.errorMsg = '';
    if (this.step === 1) {
      if (!this.outboundTripId || (this.isRound && !this.returnTripId)) { this.errorMsg = 'Sélectionnez le(s) voyage(s).'; return; }
      this.selOutbound = []; this.selReturn = []; this.loadSeats();
    }
    if (this.step === 2) {
      if (!this.selOutbound.length) { this.errorMsg = 'Sélectionnez au moins un siège aller.'; return; }
      if (this.isRound && this.selReturn.length !== this.selOutbound.length) { this.errorMsg = "Le nombre de sièges retour doit égaler celui de l'aller."; return; }
      this.buildPassengers();
    }
    this.step++;
  }
  prev(): void { this.errorMsg = ''; this.step--; }

  submit(): void {
    if (this.saving) return;
    this.saving = true; this.errorMsg = '';
    const items: BookingItem[] = this.selOutbound.map((seat, i) => ({
      passenger: this.passengers[i],
      outbound_seat_id: seat.id,
      return_seat_id: this.isRound ? this.selReturn[i]?.id ?? null : null,
    }));
    const body: BookingCreate = {
      trip_type: this.tripType, outbound_trip_id: this.outboundTripId,
      return_trip_id: this.isRound ? this.returnTripId : null,
      buyer: this.passengers[this.buyerIndex], items,
    };
    this.svc.create(body).subscribe({
      next: b => this.router.navigate(['/voyages-booking/bookings', b.id]),
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
}
