import { Component, OnInit, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { ServicePoint } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

type Tab = 'awaiting' | 'delivered';

@Component({
  selector: 'app-vcg-livraison',
  templateUrl: './livraison.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective,
            CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcgLivraisonComponent implements OnInit {
  private toast = inject(ToastService);
  private t = inject(TranslocoService);
  tab: Tab = 'awaiting';
  pg: PageState = { page: 1, size: 25 };
  rows: Parcel[] = []; loading = false;
  q = ''; originFilter = ''; destFilter = ''; payFilter = ''; dateFrom = ''; dateTo = '';
  points: ServicePoint[] = []; paymentMethods: any[] = [];

  // Deliver form
  target: Parcel | null = null; address = ''; amount: number | null = null; paymentMethod = ''; saving = false;
  deliveredTo = ''; deliveredToId = '';   // nom + pièce de la personne ayant reçu le colis

  constructor(private svc: ParcelService, private pmSvc: PaymentMethodService,
              private spSvc: ServicePointService) {}

  ngOnInit(): void {
    this.spSvc.list().subscribe(d => this.points = d);
    this.pmSvc.list(true).subscribe(d => this.paymentMethods = d);
    this.reload();
  }

  setTab(t: Tab): void { if (this.tab === t) return; this.tab = t; this.target = null; this.pg.page = 1; this.reload(); }

  reload(): void {
    this.loading = true;
    const base = {
      q: this.q || undefined, origin_point: this.originFilter || undefined,
      destination_point: this.destFilter || undefined,
      date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
      scope: 'destination',   // livraison = agence de destination (cf. #3)
    };
    const params = this.tab === 'delivered'
      ? { ...base, delivered_home: '1', date_field: 'delivered', delivery_payment_method: this.payFilter || undefined }
      : { ...base, status: 'available_for_pickup', date_field: 'arrival' };
    this.svc.list(params).subscribe({
      next: d => { this.rows = d; this.pg.page = 1; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  clearFilters(): void {
    this.q = this.originFilter = this.destFilter = this.payFilter = this.dateFrom = this.dateTo = '';
    this.reload();
  }

  paymentLabel(code: string | undefined): string {
    if (!code) return '—';
    return this.paymentMethods.find(m => m.code === code)?.name ?? code;
  }

  livrer(p: Parcel): void {
    this.target = p; this.address = p.recipient_address || ''; this.amount = null; this.paymentMethod = '';
    this.deliveredTo = p.recipient_name || ''; this.deliveredToId = '';   // préremplit le nom avec le destinataire enregistré
  }
  cancelDeliver(): void { this.target = null; }

  deliver(): void {
    if (!this.target || this.saving) return;
    if (!this.amount || this.amount <= 0) { this.toast.error(this.t.translate('cons.msg.enter_delivery_amount')); return; }
    if (!this.deliveredTo.trim() || !this.deliveredToId.trim()) { this.toast.error(this.t.translate('cons.msg.enter_recipient_name_id')); return; }
    this.saving = true;
    this.svc.deliverHome(this.target.id, {
      delivery_amount: this.amount, delivery_address: this.address.trim(), payment_method: this.paymentMethod,
      delivered_to: this.deliveredTo.trim(), delivered_to_id: this.deliveredToId.trim(),
    }).subscribe({
      next: () => { this.saving = false; this.target = null; this.toast.success(this.t.translate('cons.msg.parcel_delivered')); this.reload(); },
      error: e => { this.saving = false; this.toast.error(e?.error?.detail ?? this.t.translate('cons.msg.op_failed')); },
    });
  }
}
