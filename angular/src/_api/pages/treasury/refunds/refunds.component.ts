import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { RefundService, RefundLookup } from '../../../services/treasury/refund.service';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-treasury-refunds',
  standalone: true,
  templateUrl: './refunds.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective, TranslocoModule],
})
export class TreasuryRefundsComponent {
  private svc   = inject(RefundService);
  private toast = inject(ToastService);
  private t     = inject(TranslocoService);

  reference = '';
  match: RefundLookup | null = null;
  searching = false;
  refunding = false;
  notFound  = false;

  search(): void {
    const ref = this.reference.trim();
    if (!ref || this.searching) return;
    this.searching = true;
    this.match = null;
    this.notFound = false;
    this.svc.lookup(ref).subscribe({
      next: m => { this.match = m; this.searching = false; },
      error: err => {
        this.searching = false;
        if (err?.status === 404) { this.notFound = true; }
        else { this.toast.error(err?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."); }
      },
    });
  }

  kindLabel(kind: string): string { return this.t.translate('treasury.refunds.kind_' + kind); }

  perform(): void {
    if (!this.match || this.refunding) return;
    if (!confirm(this.t.translate('treasury.refunds.confirm'))) return;
    this.refunding = true;
    this.svc.perform(this.match.kind, this.match.id).subscribe({
      next: () => {
        this.refunding = false;
        this.toast.success(this.t.translate('treasury.refunds.done'));
        this.match = null;
        this.reference = '';
      },
      error: err => {
        this.refunding = false;
        this.toast.error(err?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur.");
      },
    });
  }
}
