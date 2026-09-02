import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeatingPlanService } from '../../../services/voyages-config/seating-plan.service';
import { SeatingPlan, PlanSeat, SeatType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-vc-seating-plans',
  templateUrl: './seating-plans.component.html',
  styleUrls: ['./seating-plans.component.scss'],
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent],
})
export class VcSeatingPlansComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: SeatingPlan[] = []; filtered: SeatingPlan[] = []; loading = true; search = '';
  saving = false; errorMsg = ''; editId: string | null = null;

  // editor state
  code = ''; name = ''; nrows = 10; ncols = 5;
  seatMap: Record<string, PlanSeat> = {};   // key "r-c"
  selectedKey: string | null = null;

  seatTypes: { value: SeatType; label: string }[] = [
    { value: 'STANDARD', label: 'Standard' },
    { value: 'VIP',      label: 'VIP' },
    { value: 'DRIVER',   label: 'Chauffeur' },
    { value: 'CREW',     label: 'Personnel' },
  ];

  constructor(private svc: SeatingPlanService) {}

  ngOnInit(): void { this.load(); }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)); }

  get rowsArr(): number[] { return Array.from({ length: this.nrows }, (_, i) => i + 1); }
  get colsArr(): number[] { return Array.from({ length: this.ncols }, (_, i) => i + 1); }
  key(r: number, c: number): string { return `${r}-${c}`; }
  seatAt(r: number, c: number): PlanSeat | undefined { return this.seatMap[this.key(r, c)]; }
  get seatList(): PlanSeat[] { return Object.values(this.seatMap); }
  get sellableCount(): number { return this.seatList.filter(s => s.is_sellable).length; }
  get selectedSeat(): PlanSeat | null { return this.selectedKey ? this.seatMap[this.selectedKey] : null; }

  private nextNumber(): string {
    const nums = this.seatList.map(s => parseInt(s.seat_number, 10)).filter(n => !isNaN(n));
    return String((nums.length ? Math.max(...nums) : 0) + 1);
  }

  cellClick(r: number, c: number): void {
    const k = this.key(r, c);
    if (this.seatMap[k]) { this.selectedKey = k; return; }
    this.seatMap[k] = { seat_number: this.nextNumber(), row: r, column: c, seat_type: 'STANDARD', is_sellable: true };
    this.selectedKey = k;
  }
  setType(t: SeatType): void { const s = this.selectedSeat; if (s) s.seat_type = t; }
  toggleSellable(): void { const s = this.selectedSeat; if (s) s.is_sellable = !s.is_sellable; }
  removeSelected(): void { if (this.selectedKey) { delete this.seatMap[this.selectedKey]; this.selectedKey = null; } }

  openCreate(): void {
    this.editId = null; this.errorMsg = ''; this.selectedKey = null;
    this.code = ''; this.name = ''; this.nrows = 10; this.ncols = 5; this.seatMap = {};
  }
  openEdit(p: SeatingPlan): void {
    this.editId = p.id; this.errorMsg = ''; this.selectedKey = null;
    this.code = p.code; this.name = p.name; this.nrows = p.rows || 10; this.ncols = p.columns || 5;
    this.seatMap = {};
    this.svc.getSeats(p.id).subscribe(seats => {
      for (const s of seats) this.seatMap[this.key(s.row, s.column)] = { ...s };
    });
  }
  save(): void {
    if (!this.code.trim() || !this.name.trim() || this.saving) { this.errorMsg = 'Code et nom requis.'; return; }
    this.saving = true; this.errorMsg = '';
    const meta = { code: this.code, name: this.name, rows: this.nrows, columns: this.ncols };
    const after = (id: string) => {
      this.svc.replaceSeats(id, this.seatList).subscribe({
        next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
        error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur (sièges).'; },
      });
    };
    if (this.editId) {
      this.svc.update(this.editId, meta).subscribe({ next: () => after(this.editId!), error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
    } else {
      this.svc.create(meta).subscribe({ next: p => { this.editId = p.id; after(p.id); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
    }
  }
  delete(p: SeatingPlan): void { if (p.scope === 'global') { this.toast.error('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ce plan ?')) return; this.svc.delete(p.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('plan-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}