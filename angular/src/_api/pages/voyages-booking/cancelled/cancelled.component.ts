import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { Booking } from '../../../models/voyages-booking.models';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { printHtml } from '../../../../app/shared/print/print.util';

@Component({
  selector: 'app-vb-cancelled',
  standalone: true,
  templateUrl: './cancelled.component.html',
  imports: [CommonModule, FormsModule, TranslocoModule],
})
export class VbCancelledComponent implements OnInit {
  private svc = inject(BookingService);
  private toast = inject(ToastService);

  rows: Booking[] = []; loading = true;
  dateFrom = ''; dateTo = '';

  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    const params: Record<string, string> = {};
    if (this.dateFrom) params['date_from'] = this.dateFrom;
    if (this.dateTo) params['date_to'] = this.dateTo;
    this.svc.cancelledBookings(params).subscribe({
      next: d => { this.rows = d as any; this.loading = false; }, error: () => this.loading = false });
  }
  voucher(b: Booking): void {
    this.svc.cancellationVoucher(b.id).subscribe({
      next: r => printHtml(r.html),
      error: e => this.toast.error(e?.error?.detail ?? "Impossible d'ouvrir le bon.") });
  }
}
