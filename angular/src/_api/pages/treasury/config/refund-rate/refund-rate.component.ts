import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefundRateService, RefundConfig } from '../../../../services/treasury/refund-rate.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { TranslocoModule } from '@jsverse/transloco';

type Kind = 'ticket' | 'colis' | 'bagage';

@Component({
  selector: 'app-refund-rate',
  standalone: true,
  templateUrl: './refund-rate.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective, TranslocoModule],
})
export class RefundRateComponent implements OnInit {
  private svc = inject(RefundRateService);

  readonly kinds: Kind[] = ['ticket', 'colis', 'bagage'];
  cfg: RefundConfig = {
    ticket: { method: 'percentage', rate: 0, amount: 0 },
    colis: { method: 'percentage', rate: 0, amount: 0 },
    bagage: { method: 'percentage', rate: 0, amount: 0 },
  };
  saving = false; saved = false; errorMsg = '';

  ngOnInit(): void { this.svc.get().subscribe(c => this.cfg = c); }

  save(): void {
    if (this.saving) return;
    this.saving = true; this.saved = false; this.errorMsg = '';
    this.svc.set(this.cfg).subscribe({
      next: c => { this.cfg = c; this.saving = false; this.saved = true; },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }
}
