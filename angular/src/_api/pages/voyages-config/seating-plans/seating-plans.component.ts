import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeatingPlanService } from '../../../services/voyages-config/seating-plan.service';
import { SeatingPlan } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vc-seating-plans',
  templateUrl: './seating-plans.component.html',
  styleUrls: ['./seating-plans.component.scss'],
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcSeatingPlansComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: SeatingPlan[] = []; filtered: SeatingPlan[] = []; loading = true; search = '';
  saving = false; errorMsg = ''; editId: string | null = null;

  // M05 : plan défini par des compteurs (plus d'éditeur visuel).
  code = ''; name = ''; totalSeats = 0; blockedSeats = 0;

  get sellableSeats(): number { return Math.max(0, (this.totalSeats || 0) - (this.blockedSeats || 0)); }

  constructor(private svc: SeatingPlanService) {}

  ngOnInit(): void { this.load(); }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)); }

  openCreate(): void {
    this.editId = null; this.errorMsg = '';
    this.code = ''; this.name = ''; this.totalSeats = 0; this.blockedSeats = 0;
  }
  openEdit(p: SeatingPlan): void {
    this.editId = p.id; this.errorMsg = '';
    this.code = p.code; this.name = p.name;
    this.totalSeats = p.total_seats || 0; this.blockedSeats = p.blocked_seats || 0;
  }
  save(): void {
    if (!this.code.trim() || !this.name.trim() || this.saving) { this.errorMsg = 'Code et nom requis.'; return; }
    if ((this.blockedSeats || 0) > (this.totalSeats || 0)) { this.errorMsg = 'Les places bloquées ne peuvent pas dépasser le total.'; return; }
    this.saving = true; this.errorMsg = '';
    const data = { code: this.code, name: this.name, total_seats: this.totalSeats, blocked_seats: this.blockedSeats };
    const ok = () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); };
    const err = (e: any) => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.blocked_seats?.[0] ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; };
    (this.editId ? this.svc.update(this.editId, data) : this.svc.create(data)).subscribe({ next: ok, error: err });
  }
  delete(p: SeatingPlan): void { if (p.scope === 'global') { this.toast.error('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ce plan ?')) return; this.svc.delete(p.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('plan-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
