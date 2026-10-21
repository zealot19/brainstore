import { Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { Baggage } from '../../../models/voyages-consignment.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vcg-baggage-retrait',
  templateUrl: './baggage-retrait.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcgBaggageRetraitComponent {
  private toast = inject(ToastService);
  private t = inject(TranslocoService);
  ref = '';
  bag: Baggage | null = null;
  searched = false;
  saving = false;
  comment = '';

  constructor(private svc: BaggageService) {}

  statusClass(s: string): string {
    return { checked_in: 'bg-warning', loaded: 'bg-info', delivered: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }

  search(): void {
    const q = this.ref.trim();
    if (!q) return;
    this.searched = true; this.bag = null;
    this.svc.list({ q }).subscribe({
      next: rows => { this.bag = rows.find(b => b.tag_number.toLowerCase() === q.toLowerCase()) ?? rows[0] ?? null; },
      error: e => this.toast.error(e?.error?.detail ?? "La recherche a échoué."),
    });
  }

  remit(): void {
    if (!this.bag || this.saving) return;
    this.saving = true;
    this.svc.deliver(this.bag.id, { comment: this.comment.trim() }).subscribe({
      next: b => { this.saving = false; this.bag = b; this.toast.success(this.t.translate('cons.msg.baggage_delivered')); },
      error: e => { this.saving = false; this.toast.error(e?.error?.detail ?? this.t.translate('cons.msg.op_failed')); },
    });
  }

  reset(): void { this.ref = ''; this.bag = null; this.searched = false; this.comment = ''; }
}
