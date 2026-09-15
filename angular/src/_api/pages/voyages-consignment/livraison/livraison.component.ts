import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
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
export class VcgLivraisonComponent {
  private toast = inject(ToastService);
  ref = '';
  parcel: Parcel | null = null;
  searched = false;
  saving = false;
  pickedBy = '';
  pickedId = '';

  constructor(private svc: ParcelService) {}

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
        if (this.parcel) { this.pickedBy = this.parcel.recipient_name; this.pickedId = ''; }
      },
      error: e => this.toast.error(e?.error?.detail ?? "La recherche a échoué."),
    });
  }

  remit(): void {
    if (!this.parcel || this.saving) return;
    if (!this.pickedBy.trim()) { this.toast.error('Indiquez la personne qui retire le colis.'); return; }
    this.saving = true;
    this.svc.pickup(this.parcel.id, this.pickedBy.trim(), this.pickedId.trim()).subscribe({
      next: p => { this.saving = false; this.parcel = p; this.toast.success('Colis remis au destinataire.'); },
      error: e => { this.saving = false; this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."); },
    });
  }

  reset(): void { this.ref = ''; this.parcel = null; this.searched = false; this.pickedBy = ''; this.pickedId = ''; }
}
