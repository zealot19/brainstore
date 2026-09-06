import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { OnlineTrip } from '../../../models/online-booking.models';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-rsv-trip-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-detail.component.html',
})
export class RsvTripDetailComponent implements OnInit {
  private svc = inject(OnlineBookingService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toast = inject(ToastService);

  trip = signal<OnlineTrip | null>(null);
  loading = signal(true);
  error = signal(false);

  private tripId = '';

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId') ?? '';
    this.svc.trip(this.tripId).subscribe({
      next: t => { this.trip.set(t); this.loading.set(false); },
      error: e => {
        this.loading.set(false);
        this.error.set(true);
        this.toast.error(e?.error?.detail ?? 'Voyage introuvable ou plus disponible.');
      },
    });
  }

  reserve(): void {
    this.router.navigate(['/reserver/voyage', this.tripId, 'reserver']);
  }
}
