import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { ConsignmentNatureService } from '../../../services/voyages-config/consignment-nature.service';
import { ConsignmentType, ConsignmentNature } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vc-consignment-types',
  templateUrl: './consignment-types.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcConsignmentTypesComponent implements OnInit {
  rows: ConsignmentType[] = []; filtered: ConsignmentType[] = []; loading = true; search = ''; selected = new Set<string>();
  natures: ConsignmentNature[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: ConsignmentTypeService, private natureSvc: ConsignmentNatureService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({ code: ['', Validators.required], label: ['', Validators.required], nature_id: [null, Validators.required], max_weight_kg: [null], max_volume_m3: [null], applies_to: ['BOTH'], is_active: [true] });
    this.natureSvc.list().subscribe(d => this.natures = d);
    this.load();
  }
  load(): void { this.loading = true; this.selected.clear(); this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.label.toLowerCase().includes(q)); }
  get selectable(): ConsignmentType[] { return this.filtered.filter(r => r.scope !== 'global'); }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulkDelete(): void {
    if (!this.selected.size) return;
    if (!confirm(`Supprimer ${this.selected.size} élément(s) ?`)) return;
    this.svc.bulkDelete([...this.selected]).subscribe({ next: () => { this.selected.clear(); this.load(); }, error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  natureName(id: string): string { return this.natures.find(n => n.id === id)?.name ?? '—'; }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', label: '', nature_id: null, max_weight_kg: null, max_volume_m3: null, applies_to: 'BOTH', is_active: true }); }
  openEdit(r: ConsignmentType): void { this.editId = r.id; this.errorMsg = ''; this.form.patchValue({ code: r.code, label: r.label, nature_id: r.nature, max_weight_kg: r.max_weight_kg, max_volume_m3: r.max_volume_m3, applies_to: r.applies_to, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, max_weight_kg: this.form.value.max_weight_kg || null, max_volume_m3: this.form.value.max_volume_m3 || null };
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: ConsignmentType): void { if (r.scope === 'global') { alert('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('vc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
