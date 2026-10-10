import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { TimeSlotService } from '../../../services/voyages-config/time-slot.service';
import { RouteService } from '../../../services/voyages-config/route.service';
import { FareClass, TimeSlot, Route } from '../../../models/voyages-config.models';
import { TripOption, TripDestination, SeatCell, BookingCreate, PassengerSpec, Booking, TripAvailability } from '../../../models/voyages-booking.models';
import { ClientFieldsComponent } from '../shared/client-fields/client-fields.component';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PermissionService } from '../../../services/auth/permission.service';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { printHtml } from '../../../../app/shared/print/print.util';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-vb-new-booking',
  templateUrl: './new-booking.component.html',
  imports: [SearchableSelectDirective, HasPermissionDirective, CommonModule, FormsModule, ClientFieldsComponent, TranslocoModule],
})
export class VbNewBookingComponent implements OnInit {
  tripType: 'one_way' | 'round_trip' = 'one_way';
  fareClasses: FareClass[] = []; timeSlots: TimeSlot[] = []; routes: Route[] = [];
  paymentMethods: any[] = [];

  // Aller
  routeCode = ''; fareClassId = ''; outDate = ''; outSlotId = '';
  outTrips: TripOption[] = []; outboundTripId = '';
  routeDests: { id: string; name: string; code: string }[] = [];
  tripDests: TripDestination[] = []; destinationId = '';
  outSeats: SeatCell[] = []; outSeatId = '';
  outAvail: TripAvailability | null = null;

  // Retour
  returnOpen = false;
  retDate = ''; retSlotId = ''; retTrips: TripOption[] = []; returnTripId = '';
  retSeats: SeatCell[] = []; retSeatId = '';

  // Client / acheteur (un seul par formulaire)
  buyer: PassengerSpec = { name: '', phone: '', id_type: 'cni', id_number: '' };

  // Paiement / Réservation
  paymentMethod = ''; amountReceived: number | null = null;
  isReservation = false; holdUntil = '';
  saving = false; errorMsg = '';

  constructor(private svc: BookingService, private fcSvc: FareClassService,
              private tsSvc: TimeSlotService, private routeSvc: RouteService,
              private router: Router, private route: ActivatedRoute,
              private pmSvc: PaymentMethodService, private perm: PermissionService,
              private toast: ToastService) {}

  ngOnInit(): void {
    this.isReservation = this.route.snapshot.data['mode'] === 'reservation';
    if (this.isReservation) {
      const d = new Date(Date.now() + 24 * 3600 * 1000);
      d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
      this.holdUntil = d.toISOString().slice(0, 16);
    }
    this.fcSvc.list().subscribe(d => this.fareClasses = d);
    this.tsSvc.list().subscribe(d => this.timeSlots = d);
    this.routeSvc.list().subscribe(d => this.routes = d);
    this.pmSvc.list(true).subscribe(d => this.paymentMethods = d);
  }

  get isRound(): boolean { return this.tripType === 'round_trip'; }
  get needReturnSel(): boolean { return this.isRound && !this.returnOpen; }

  // ── Trip resolution (all dropdowns visible; populate reactively) ──
  private byRoute(trips: TripOption[]): TripOption[] {
    return this.routeCode ? trips.filter(t => t.route_code === this.routeCode) : trips;
  }
  // Trajet choisi en premier : charge ses points d'arrêt (destination) puis les voyages.
  onRouteChange(): void {
    this.routeDests = []; this.destinationId = '';
    const r = this.routes.find(x => x.code === this.routeCode);
    if (r) this.svc.routeDestinations(r.id).subscribe(d => this.routeDests = d);
    this.onOutCriteria();
  }
  onOutCriteria(): void {
    this.outboundTripId = ''; this.outTrips = []; this.resetOutTrip();
    if (this.fareClassId && this.outDate && this.outSlotId) {
      this.svc.bookableTrips({ fare_class: this.fareClassId, time_slot: this.outSlotId, date: this.outDate })
        .subscribe(t => this.outTrips = this.byRoute(t));
    }
  }
  onRetCriteria(): void {
    this.returnTripId = ''; this.retTrips = []; this.retSeats = []; this.retSeatId = '';
    if (this.needReturnSel && this.fareClassId && this.retDate && this.retSlotId) {
      this.svc.bookableTrips({ fare_class: this.fareClassId, time_slot: this.retSlotId, date: this.retDate })
        .subscribe(t => this.retTrips = this.byRoute(t));
    }
  }
  onTripTypeChange(): void { if (!this.needReturnSel) { this.retTrips = []; this.returnTripId = ''; this.retSeats = []; this.retSeatId = ''; } else { this.onRetCriteria(); } }

  // Le trajet/destination sont choisis avant le voyage : on ne réinitialise que la tarification + sièges.
  private resetOutTrip(): void { this.tripDests = []; this.outSeats = []; this.outSeatId = ''; this.outAvail = null; }

  get outboundTrip(): TripOption | undefined { return this.outTrips.find(t => t.id === this.outboundTripId); }
  get returnTrip(): TripOption | undefined { return this.retTrips.find(t => t.id === this.returnTripId); }
  get outboundAuto(): boolean { return this.outboundTrip?.seat_assignment_mode === 'auto'; }
  get returnAuto(): boolean { return this.returnTrip?.seat_assignment_mode === 'auto'; }
  get availOutSeats(): SeatCell[] { return this.outSeats.filter(s => s.status === 'available'); }
  get availRetSeats(): SeatCell[] { return this.retSeats.filter(s => s.status === 'available'); }

  get outCriteriaChosen(): boolean { return !!(this.fareClassId && this.outDate && this.outSlotId); }
  get tripFull(): boolean { return !!this.outAvail && this.outAvail.available === 0; }
  get reservationQuotaReached(): boolean { return !!this.outAvail && this.outAvail.reservations_possible === 0; }

  onOutboundChange(): void {
    this.resetOutTrip();
    if (this.outboundTripId) {
      // La destination est déjà choisie (depuis le trajet) ; on charge la tarification du voyage.
      this.svc.destinations(this.outboundTripId).subscribe(d => this.tripDests = d);
      if (!this.outboundAuto) this.svc.seatMap(this.outboundTripId).subscribe(s => this.outSeats = s);
      this.svc.availability(this.outboundTripId).subscribe(a => this.outAvail = a);
    }
  }
  onReturnChange(): void {
    this.retSeats = []; this.retSeatId = '';
    if (this.returnTripId && !this.returnAuto) this.svc.seatMap(this.returnTripId).subscribe(s => this.retSeats = s);
  }

  seatLabel(s: SeatCell): string { return s.seat_number; }

  // ── Fare / payment ──
  priceFor(destId: string): number | null {
    const d = this.tripDests.find(x => x.id === destId);
    if (!d) return null;
    const amt = this.isRound ? d.round_trip_amount : d.one_way_amount;
    return amt != null ? +amt : null;
  }
  get fare(): number | null { return this.priceFor(this.destinationId); }
  get total(): number { return this.fare ?? 0; }
  get selectedPaymentMethod(): any { return this.paymentMethods.find(m => m.code === this.paymentMethod); }
  get requiresPayment(): boolean { const pm = this.selectedPaymentMethod; return pm ? pm.requires_payment !== false : true; }
  onPaymentMethodChange(): void { if (!this.requiresPayment) this.amountReceived = 0; }
  get change(): number { const r = this.amountReceived ?? 0; return r - this.total > 0 ? r - this.total : 0; }

  get canSubmit(): boolean {
    if (this.saving || !this.outboundTripId || !this.destinationId) return false;
    if (this.fare == null) return false;
    if (this.tripFull) return false;
    if (this.isReservation && this.reservationQuotaReached) return false;
    if (!this.outboundAuto && !this.outSeatId) return false;
    if (this.needReturnSel) {
      if (!this.returnTripId) return false;
      if (!this.returnAuto && !this.retSeatId) return false;
    }
    if (!this.buyer.name || !this.buyer.phone) return false;
    if (this.isReservation) return !!this.holdUntil;
    // Paiement exact : plus de saisie « montant reçu ». Il suffit de choisir une méthode.
    if (!this.paymentMethod) return false;
    return true;
  }

  submit(): void {
    if (!this.canSubmit) return;
    this.saving = true; this.errorMsg = '';
    const item = {
      passenger: { id: this.buyer.id, name: this.buyer.name, phone: this.buyer.phone,
                   civility: this.buyer.civility, id_type: this.buyer.id_type, id_number: this.buyer.id_number },
      destination_point_id: this.destinationId || null,
      outbound_seat_id: this.outboundAuto ? null : this.outSeatId,
      return_seat_id: (this.needReturnSel && !this.returnAuto) ? this.retSeatId : null,
    };
    const common = {
      trip_type: this.tripType, outbound_trip_id: this.outboundTripId,
      return_trip_id: this.needReturnSel ? this.returnTripId : null,
      buyer: item.passenger, items: [item], return_open: this.isRound && this.returnOpen,
    };
    if (this.isReservation) {
      this.svc.reserve({ ...common, hold_until: new Date(this.holdUntil).toISOString() }).subscribe({
        next: () => this.router.navigate(['/voyages-booking/reservations']),
        error: e => this.fail(e) });
      return;
    }
    // Paiement exact : montant reçu = montant dû (backend : amount_received null ⇒ total).
    const body: BookingCreate = { ...common, payment_method: this.paymentMethod, amount_received: null } as BookingCreate;
    this.svc.create(body).subscribe({
      // M19 : « Non payé » crée une réservation côté serveur → on la retrouve dans l'onglet Réservations
      // (pas d'impression de billet pour une réservation non payée).
      next: b => this.requiresPayment ? this.afterSale(b) : this.router.navigate(['/voyages-booking/reservations']),
      error: e => this.fail(e) });
  }

  /** Vente validée : impression automatique du billet, puis routage selon le rôle. */
  private afterSale(b: Booking): void {
    this.svc.renderTickets(b.id).subscribe({ next: r => printHtml(r.html), error: () => {} });
    if (this.perm.has('ticketing.ticket.view')) {
      this.router.navigate(['/voyages-booking/bookings', b.id]);   // accès détail : vue enrichie
    } else {
      // Guichetier : pas d'accès au détail -> billet imprimé + nouveau formulaire de vente.
      this.toast.success('Vente enregistrée. Billet envoyé à l\'impression.');
      this.resetForm();
    }
  }

  /** Réinitialise le formulaire pour enchaîner une nouvelle vente (guichetier). */
  private resetForm(): void {
    this.saving = false; this.errorMsg = '';
    this.tripType = 'one_way';
    this.routeCode = ''; this.fareClassId = ''; this.outDate = ''; this.outSlotId = '';
    this.outTrips = []; this.outboundTripId = '';
    this.routeDests = []; this.tripDests = []; this.destinationId = '';
    this.outSeats = []; this.outSeatId = ''; this.outAvail = null;
    this.returnOpen = false; this.retDate = ''; this.retSlotId = ''; this.retTrips = []; this.returnTripId = '';
    this.retSeats = []; this.retSeatId = '';
    this.buyer = { name: '', phone: '', id_type: 'cni', id_number: '' };
    this.paymentMethod = ''; this.amountReceived = null;
  }

  private fail(e: any): void { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; }
}
