import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefundRateService, RefundRates } from '../../../../services/treasury/refund-rate.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-refund-rate',
  standalone: true,
  templateUrl: './refund-rate.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective, TranslocoModule],
})
export class RefundRateComponent implements OnInit {
  private svc = inject(RefundRateService);
  rates: RefundRates = { ticket: 0, colis: 0, bagage: 0 };
  saving = false; saved = false; errorMsg = '';

  ngOnInit(): void { this.svc.get().subscribe(r => this.rates = r); }
  save(): void {
    if (this.saving) return;
    this.saving = true; this.saved = false; this.errorMsg = '';
    this.svc.set(this.rates).subscribe({
      next: r => { this.rates = r; this.saving = false; this.saved = true; },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }
}
