import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { OnlineTrip, OnlineSeat, InitiateBookingBody } from '../../../models/online-booking.models';
import { SeatPickerComponent } from '../seats/seat-picker.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-rsv-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, SeatPickerComponent],
  templateUrl: './booking.component.html',
})
export class RsvBookingComponent implements OnInit {
  private svc = inject(OnlineBookingService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toast = inject(ToastService);

  trip = signal<OnlineTrip | null>(null);
  seats = signal<OnlineSeat[]>([]);
  loading = signal(true);
  submitting = signal(false);

  private tripId = '';

  name = '';
  phone = '';
  email = '';
  seatId = '';
  method: 'mtn_momo' | 'orange_money' = 'mtn_momo';
  paymentPhone = '';

  selectedSeatLabel = computed(() => {
    const s = this.seats().find(x => x.id === this.seatId);
    return s ? s.seat_number : '';
  });

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId') ?? '';
    forkJoin({ trip: this.svc.trip(this.tripId), seats: this.svc.seatMap(this.tripId) }).subscribe({
      next: ({ trip, seats }) => { this.trip.set(trip); this.seats.set(seats); this.loading.set(false); },
      error: e => { this.loading.set(false); this.toast.error(e?.error?.detail ?? 'Impossible de charger le voyage. Réessayez.'); },
    });
  }

  onSeat(id: string): void { this.seatId = id; }

  submit(): void {
    if (!this.name.trim() || !this.phone.trim()) {
      this.toast.warning('Le nom et le téléphone du passager sont requis.');
      return;
    }
    if (!this.seatId) {
      this.toast.warning('Veuillez choisir un siège.');
      return;
    }
    if (!this.paymentPhone.trim()) {
      this.toast.warning('Le numéro de paiement Mobile Money est requis.');
      return;
    }
    const body: InitiateBookingBody = {
      passenger_name: this.name.trim(),
      passenger_phone: this.phone.trim(),
      passenger_email: this.email.trim() || undefined,
      seat_id: this.seatId,
      payment_method: this.method,
      payment_phone: this.paymentPhone.trim(),
    };
    this.submitting.set(true);
    this.svc.initiate(this.tripId, body).subscribe({
      next: req => this.router.navigate(['/reserver/statut', req.id]),
      error: e => { this.submitting.set(false); this.toast.error(e?.error?.detail ?? 'La réservation a échoué. Réessayez.'); },
    });
  }
}
