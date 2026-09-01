import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefundRateService } from '../../../../services/treasury/refund-rate.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-refund-rate',
  standalone: true,
  templateUrl: './refund-rate.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective],
})
export class RefundRateComponent implements OnInit {
  private svc = inject(RefundRateService);
  rate = 0; saving = false; saved = false; errorMsg = '';

  ngOnInit(): void { this.svc.get().subscribe(r => this.rate = r); }
  save(): void {
    if (this.saving) return;
    this.saving = true; this.saved = false; this.errorMsg = '';
    this.svc.set(this.rate).subscribe({
      next: r => { this.rate = r; this.saving = false; this.saved = true; },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; },
    });
  }
}
