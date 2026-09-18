import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vcg-livraison',
  templateUrl: './livraison.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcgLivraisonComponent implements OnInit {
  private toast = inject(ToastService);
  ref = '';
  parcel: Parcel | null = null;
  searched = false;
  saving = false;
  address = '';
  amount: number | null = null;
  paymentMethod = '';
  paymentMethods: any[] = [];

  constructor(private svc: ParcelService, private pmSvc: PaymentMethodService) {}

  ngOnInit(): void { this.pmSvc.list(true).subscribe(d => this.paymentMethods = d); }

  statusClass(s: string): string {
    return { registered: 'bg-secondary', ready_for_travel: 'bg-warning', loaded: 'bg-info',
             in_transit: 'bg-primary', arrived: 'bg-primary', available_for_pickup: 'bg-info',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }

  search(): void {
    const q = this.ref.trim();
    if (!q) return;
    this.searched = true; this.parcel = null;
    this.svc.list({ q }).subscribe({
      next: rows => {
        this.parcel = rows.find(p => p.reference.toLowerCase() === q.toLowerCase()) ?? rows[0] ?? null;
        if (this.parcel) { this.address = this.parcel.recipient_address || ''; this.amount = null; this.paymentMethod = ''; }
      },
      error: e => this.toast.error(e?.error?.detail ?? 'La recherche a échoué.'),
    });
  }

  deliver(): void {
    if (!this.parcel || this.saving) return;
    if (!this.amount || this.amount <= 0) { this.toast.error('Indiquez le montant de la livraison.'); return; }
    this.saving = true;
    this.svc.deliverHome(this.parcel.id, {
      delivery_amount: this.amount, delivery_address: this.address.trim(), payment_method: this.paymentMethod,
    }).subscribe({
      next: p => { this.saving = false; this.parcel = p; this.toast.success('Colis livré. Recette enregistrée.'); },
      error: e => { this.saving = false; this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."); },
    });
  }

  reset(): void { this.ref = ''; this.parcel = null; this.searched = false; this.address = ''; this.amount = null; this.paymentMethod = ''; }
}
