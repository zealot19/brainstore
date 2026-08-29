import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoyaltyRuleService } from '../../../services/voyages-config/loyalty-rule.service';
import { LoyaltyRule } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-vc-loyalty-rules',
  templateUrl: './loyalty-rules.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcLoyaltyRulesComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  rows: LoyaltyRule[] = []; filtered: LoyaltyRule[] = []; loading = true; search = ''; selected = new Set<string>();
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: LoyaltyRuleService, private fb: FormBuilder) {}
  ngOnInit(): void { this.form = this.fb.group({ name: ['', Validators.required], points_per_one_way: [1], points_per_round_trip: [2], reward_threshold: [10, [Validators.required, Validators.min(1)]], reward_label: ['1 billet gratuit'], valid_from: [null], valid_to: [null], is_active: [true] }); this.load(); }
  load(): void { this.loading = true; this.selected.clear(); this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q)); }
  get selectable(): LoyaltyRule[] { return this.filtered.filter(r => r.scope !== 'global'); }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulkDelete(): void {
    if (!this.selected.size) return;
    if (!confirm(`Supprimer ${this.selected.size} élément(s) ?`)) return;
    this.svc.bulkDelete([...this.selected]).subscribe({ next: () => { this.selected.clear(); this.load(); }, error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ name: '', points_per_one_way: 1, points_per_round_trip: 2, reward_threshold: 10, reward_label: '1 billet gratuit', valid_from: null, valid_to: null, is_active: true }); }
  openEdit(r: LoyaltyRule): void { this.editId = r.id; this.errorMsg = ''; this.form.patchValue({ name: r.name, points_per_one_way: r.points_per_one_way, points_per_round_trip: r.points_per_round_trip, reward_threshold: r.reward_threshold, reward_label: r.reward_label, valid_from: r.valid_from, valid_to: r.valid_to, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, valid_from: this.form.value.valid_from || null, valid_to: this.form.value.valid_to || null };
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: LoyaltyRule): void { if (r.scope === 'global') { alert('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('vc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
