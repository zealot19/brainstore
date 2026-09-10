import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlineBookingService } from '../../../services/online/online-booking.service';
import { OnlineTown, OnlineTrip } from '../../../models/online-booking.models';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-rsv-search',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class RsvSearchComponent implements OnInit {
  private svc = inject(OnlineBookingService);
  private router = inject(Router);
  private toast = inject(ToastService);

  towns = signal<OnlineTown[]>([]);
  trips = signal<OnlineTrip[] | null>(null);
  loading = signal(false);

  fromTown = '';
  toTown = '';
  travelDate = '';

  ngOnInit(): void {
    this.svc.towns().subscribe({
      next: t => this.towns.set(t),
      error: e => this.toast.error(e?.error?.detail ?? 'Impossible de charger les villes. Réessayez.'),
    });
  }

  search(): void {
    if (!this.fromTown || !this.toTown || !this.travelDate) {
      this.toast.warning('Veuillez choisir le départ, la destination et la date.');
      return;
    }
    if (this.fromTown === this.toTown) {
      this.toast.warning('Le départ et la destination doivent être différents.');
      return;
    }
    this.loading.set(true);
    this.svc.searchTrips({ from_town_id: this.fromTown, to_town_id: this.toTown, travel_date: this.travelDate })
      .subscribe({
        next: t => { this.trips.set(t); this.loading.set(false); },
        error: e => { this.loading.set(false); this.toast.error(e?.error?.detail ?? 'La recherche a échoué. Réessayez.'); },
      });
  }

  open(trip: OnlineTrip): void {
    this.router.navigate(['/reserver/voyage', trip.id]);
  }
}
