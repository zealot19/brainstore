import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { TripService } from '../../../services/voyages/trip.service';
import { Booking } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { printHtml } from '../../../../app/shared/print/print.util';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-vb-bookings',
  templateUrl: './bookings.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VbBookingsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Booking[] = []; loading = false; statusFilter = ''; q = '';
  typeFilter = ''; channelFilter = ''; tripFilter = ''; dateField = 'created'; dateFrom = ''; dateTo = '';
  trips: { id: string; number?: string; code?: string }[] = [];

  constructor(private svc: BookingService, private tripSvc: TripService, private router: Router,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.tripSvc.list().subscribe(d => this.trips = d as any);
    this.tripFilter = this.route.snapshot.queryParamMap.get('trip') || '';  // filtre voyage depuis l'action de liste
    this.reload();
  }
  reload(): void {
    this.loading = true;
    this.svc.list({
      status: this.statusFilter || undefined, q: this.q || undefined,
      trip: this.tripFilter || undefined, trip_type: this.typeFilter || undefined,
      channel: this.channelFilter || undefined, date_field: this.dateField,
      date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
    }).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  clearFilters(): void {
    this.statusFilter = this.q = this.typeFilter = this.channelFilter = this.tripFilter = this.dateFrom = this.dateTo = '';
    this.dateField = 'created';
    this.reload();
  }
  statusClass(s: string): string {
    return { confirmed: 'bg-success', boarded: 'bg-primary',
             cancelled: 'bg-danger', no_show: 'bg-dark' }[s] ?? 'bg-secondary';
  }
  newBooking(): void { this.router.navigate(['/voyages-booking/bookings/new']); }
  open(b: Booking): void { this.router.navigate(['/voyages-booking/bookings', b.id]); }
  printDuplicata(b: Booking): void {
    this.svc.renderDuplicata(b.id).subscribe({
      next: r => printHtml(r.html),
      error: e => this.toast.error(e?.error?.detail ?? 'Impression impossible.'),
    });
  }
  cancel(b: Booking): void {
    if (!confirm('Annuler cette réservation ?')) return;
    this.svc.cancel(b.id).subscribe({ next: () => { this.reload(); this.toast.success('Réservation annulée.'); }, error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  noShow(b: Booking): void {
    this.svc.noShow(b.id).subscribe({ next: () => { this.reload(); this.toast.success('Réservation marquée « non présentée ».'); }, error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
}