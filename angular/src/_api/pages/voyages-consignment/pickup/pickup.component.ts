import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { ServicePoint } from '../../../models/voyages-config.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

type Tab = 'awaiting' | 'done';

/** #12 — Retrait au comptoir à l'agence de destination (pas d'encaissement ici).
 *  Retrait par le destinataire (CNI obligatoire ; validée si déjà au dossier)
 *  ou par un mandataire (nom + CNI obligatoires). */
@Component({
  selector: 'app-vcg-pickup',
  templateUrl: './pickup.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, TranslocoModule],
})
export class VcgPickupComponent implements OnInit {
  private toast = inject(ToastService);
  tab: Tab = 'awaiting';
  pg: PageState = { page: 1, size: 25 };
  rows: Parcel[] = []; loading = false;
  q = ''; originFilter = ''; destFilter = ''; dateFrom = ''; dateTo = '';
  points: ServicePoint[] = [];
  detail: Parcel | null = null;

  target: Parcel | null = null;
  kind: 'destinataire' | 'mandataire' = 'destinataire';
  pName = ''; pPhone = ''; pCni = ''; saving = false;

  constructor(private svc: ParcelService, private spSvc: ServicePointService) {}

  ngOnInit(): void { this.spSvc.list().subscribe(d => this.points = d); this.reload(); }

  setTab(t: Tab): void { if (this.tab === t) return; this.tab = t; this.pg.page = 1; this.reload(); }

  reload(): void {
    this.loading = true;
    const base: any = {
      q: this.q || undefined, origin_point: this.originFilter || undefined,
      destination_point: this.destFilter || undefined,
      date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
      scope: 'destination',   // retrait = agence de destination uniquement (#3)
    };
    const params = this.tab === 'done'
      ? { ...base, status: 'picked_up', date_field: 'created' }
      : { ...base, status: 'available_for_pickup', date_field: 'arrival' };
    this.svc.list(params).subscribe({
      next: d => { this.rows = d; this.pg.page = 1; this.loading = false; },
      error: () => this.loading = false });
  }

  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
  private err = (e: any) => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué.");

  showDetail(p: Parcel): void { this.svc.get(p.id).subscribe(d => this.detail = d); }

  recipientHasCni(): boolean { return !!this.target?.recipient_id_number; }

  openPickup(p: Parcel): void {
    this.target = p; this.kind = 'destinataire';
    this.pName = p.recipient_name || ''; this.pPhone = p.recipient_phone || ''; this.pCni = p.recipient_id_number || '';
  }
  openMandate(p: Parcel): void {
    this.target = p; this.kind = 'mandataire';
    this.pName = ''; this.pPhone = ''; this.pCni = '';
  }
  confirm(modalId: string): void {
    if (!this.target || this.saving) return;
    const name = this.pName.trim(), cni = this.pCni.trim();
    if (this.kind === 'destinataire' && !cni) { this.toast.error('La pièce (CNI) du destinataire est obligatoire.'); return; }
    if (this.kind === 'mandataire' && (!name || !cni)) { this.toast.error('Nom et pièce (CNI) du mandataire sont obligatoires.'); return; }
    this.saving = true;
    this.svc.pickup(this.target.id, {
      picked_up_kind: this.kind, picked_up_by: name, picked_up_phone: this.pPhone.trim(), picked_up_id_number: cni,
    }).subscribe({
      next: () => { this.saving = false; this.target = null; this.toast.success('Colis retiré.'); this.close(modalId); this.reload(); },
      error: e => { this.saving = false; this.err(e); } });
  }

  statusClass(s: string): string { return { available_for_pickup: 'bg-info', picked_up: 'bg-success' }[s] ?? 'bg-secondary'; }
}
