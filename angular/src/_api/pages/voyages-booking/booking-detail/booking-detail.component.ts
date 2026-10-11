import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { Booking, Ticket, TripOption, SeatCell, TripDestination, TicketAdjustment } from '../../../models/voyages-booking.models';
import { FareClass } from '../../../models/voyages-config.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { printHtml } from '../../../../app/shared/print/print.util';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vb-booking-detail',
  templateUrl: './booking-detail.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, TranslocoModule],
})
export class VbBookingDetailComponent implements OnInit {
  private toast = inject(ToastService);
  private fareClassSvc = inject(FareClassService);
  private payMethodSvc = inject(PaymentMethodService);
  booking: Booking | null = null; loading = false;
  printData: any = null;
  adjustments: TicketAdjustment[] = [];

  // Report
  reportFor: Ticket | null = null;
  reportTrips: TripOption[] = [];
  reportSeats: SeatCell[] = [];
  rpTrip = ''; rpSeat = ''; rpReason = '';

  // Régularisation
  regFor: Ticket | null = null;
  fareClasses: FareClass[] = [];
  regDestinations: TripDestination[] = [];
  payMethods: any[] = [];
  rgClass = ''; rgDest = ''; rgPay = 'cash'; rgReason = '';

  constructor(private svc: BookingService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.load(id);
  }
  load(id: string): void {
    this.loading = true;
    this.svc.get(id).subscribe({ next: b => { this.booking = b; this.loading = false; }, error: () => this.loading = false });
    this.svc.printData(id).subscribe({ next: d => this.printData = d, error: () => {} });
    this.svc.adjustments({ booking: id }).subscribe({ next: a => this.adjustments = a, error: () => this.adjustments = [] });
  }
  printTickets(): void {
    if (!this.booking) return;
    this.svc.renderTickets(this.booking.id).subscribe({
      next: r => printHtml(r.html),
      error: e => this.toast.error(e?.error?.detail ?? 'Impression impossible.'),
    });
  }
  statusClass(s: string): string {
    return { confirmed: 'bg-success', boarded: 'bg-primary', cancelled: 'bg-danger',
             no_show: 'bg-dark', sold: 'bg-success' }[s] ?? 'bg-secondary';
  }
  board(ticketId: string): void {
    this.svc.board(ticketId).subscribe({ next: () => this.booking && this.load(this.booking.id),
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  cancel(): void {
    if (!this.booking) return;
    const reason = (prompt("Motif d'annulation (obligatoire) :") || '').trim();
    if (!reason) return;
    this.svc.cancel(this.booking.id, reason).subscribe({ next: () => this.load(this.booking!.id), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  private ticketRouteCode(t: Ticket): string | null {
    const pt = this.printData?.tickets?.find((x: any) => x.number === t.number);
    return pt?.route_code ?? null;
  }

  // ---- Report ----
  openReport(t: Ticket): void {
    this.reportFor = t; this.rpTrip = ''; this.rpSeat = ''; this.rpReason = ''; this.reportSeats = []; this.reportTrips = [];
    const routeCode = this.ticketRouteCode(t);
    this.svc.bookableTrips().subscribe({
      next: trips => this.reportTrips = trips.filter(o => o.id !== t.trip && (!routeCode || o.route_code === routeCode)),
      error: () => this.reportTrips = [],
    });
  }
  onReportTripChange(): void {
    this.rpSeat = ''; this.reportSeats = [];
    if (!this.rpTrip) return;
    this.svc.seatMap(this.rpTrip).subscribe({
      next: cells => this.reportSeats = cells.filter(c => c.status === 'available'),
      error: () => this.reportSeats = [],
    });
  }
  submitReport(): void {
    if (!this.reportFor || !this.rpTrip || !this.rpReason.trim()) return;
    this.svc.reportTicket(this.reportFor.id, { new_trip_id: this.rpTrip, new_seat_id: this.rpSeat || null, reason: this.rpReason.trim() })
      .subscribe({ next: () => { this.closeReport(); this.booking && this.load(this.booking.id); },
        error: e => this.toast.error(e?.error?.detail ?? "Le report a échoué.") });
  }
  closeReport(): void { this.reportFor = null; }

  // ---- Régularisation ----
  openRegularize(t: Ticket): void {
    this.regFor = t; this.rgClass = ''; this.rgDest = ''; this.rgPay = 'cash'; this.rgReason = ''; this.regDestinations = [];
    if (this.fareClasses.length) {
      this.applyClassFilter(t);
    } else {
      this.fareClassSvc.list().subscribe({ next: fcs => { this.fareClasses = fcs; this.applyClassFilter(t); }, error: () => {} });
    }
    if (!this.payMethods.length) {
      this.payMethodSvc.list(true).subscribe({ next: pms => this.payMethods = pms, error: () => this.payMethods = [] });
    }
    this.svc.destinations(t.trip).subscribe({ next: d => this.regDestinations = d, error: () => this.regDestinations = [] });
  }
  availableClasses: FareClass[] = [];
  private applyClassFilter(t: Ticket): void {
    const curRank = this.fareClasses.find(fc => fc.id === t.fare_class)?.rank ?? 0;
    this.availableClasses = this.fareClasses.filter(fc => fc.rank >= curRank);
  }
  submitRegularize(): void {
    if (!this.regFor || this.rgReason.trim() === '') return;
    if (!this.rgClass && !this.rgDest) { this.toast.error('Choisissez une classe ou une destination.'); return; }
    this.svc.regularizeTicket(this.regFor.id, {
      new_fare_class_id: this.rgClass || null, new_destination_id: this.rgDest || null,
      payment_method: this.rgPay, reason: this.rgReason.trim(),
    }).subscribe({ next: () => { this.closeRegularize(); this.booking && this.load(this.booking.id); },
      error: e => this.toast.error(e?.error?.detail ?? "La régularisation a échoué.") });
  }
  closeRegularize(): void { this.regFor = null; }

  back(): void { this.router.navigate(['/voyages-booking/bookings']); }
  goAssignReturn(): void { this.router.navigate(['/voyages-booking/open-returns']); }
}
