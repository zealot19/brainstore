import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { Booking } from '../../../models/voyages-booking.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { routes } from '../../../../app/core/core.index';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-vb-reservations',
  standalone: true,
  templateUrl: './reservations.component.html',
  imports: [SearchableSelectDirective, CommonModule, FormsModule, RouterLink, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, TranslocoModule],
})
export class VbReservationsComponent implements OnInit {
  readonly routes = routes;
  private svc = inject(BookingService);
  private pmSvc = inject(PaymentMethodService);
  private toast = inject(ToastService);

  pg: PageState = { page: 1, size: 25 };
  rows: Booking[] = []; loading = true; search = '';
  showArchived = false;
  paymentMethods: any[] = [];

  // Pay modal
  payId: string | null = null; payMethod = ''; payAmount: number | null = null; payDue = 0; saving = false; errorMsg = '';

  ngOnInit(): void {
    this.pmSvc.list(true).subscribe(d => this.paymentMethods = d);
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list({ status: 'reserved', q: this.search || undefined,
      include_archived: this.showArchived ? 1 : undefined }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  toggleArchived(): void { this.showArchived = !this.showArchived; this.load(); }

  expired(b: Booking): boolean { return !!b.hold_until && new Date(b.hold_until) < new Date(); }

  get selectedPm(): any { return this.paymentMethods.find(m => m.code === this.payMethod); }
  get requiresPayment(): boolean { const pm = this.selectedPm; return pm ? pm.requires_payment !== false : true; }

  openPay(b: Booking): void {
    this.payId = b.id; this.payDue = +b.amount_due; this.payMethod = ''; this.payAmount = null; this.errorMsg = '';
  }
  onPayMethodChange(): void { if (!this.requiresPayment) this.payAmount = 0; }
  submitPay(): void {
    if (!this.payId || !this.payMethod || this.saving) return;
    if (this.requiresPayment && (this.payAmount ?? 0) < this.payDue) { this.errorMsg = 'Montant insuffisant.'; return; }
    this.saving = true; this.errorMsg = '';
    this.svc.pay(this.payId, { payment_method: this.payMethod, amount_received: this.payAmount }).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Réservation encaissée.'); this.close('res-pay-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué."; } });
  }

  cancel(b: Booking): void {
    const reason = (prompt("Motif d'annulation (obligatoire) :") || '').trim();
    if (!reason) return;
    this.svc.cancel(b.id, reason).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Annulation impossible.') });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
