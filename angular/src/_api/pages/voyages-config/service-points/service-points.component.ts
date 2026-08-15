import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { TownService } from '../../../services/voyages-config/town.service';
import { ServicePoint, Town } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-vc-service-points',
  templateUrl: './service-points.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcServicePointsComponent implements OnInit {
  rows: ServicePoint[] = []; filtered: ServicePoint[] = []; loading = true; search = ''; selected = new Set<string>();
  towns: Town[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: ServicePointService, private townSvc: TownService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      town_id: [null, Validators.required], code: ['', Validators.required], name: ['', Validators.required],
      is_station: [false], station_kind: [''], latitude: [null], longitude: [null], is_active: [true],
    });
    this.townSvc.list().subscribe(d => this.towns = d);
    this.load();
  }
  load(): void { this.loading = true; this.selected.clear(); this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)); }
  get selectable(): ServicePoint[] { return this.filtered.filter(r => r.scope !== 'global'); }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulkDelete(): void {
    if (!this.selected.size) return;
    if (!confirm(`Supprimer ${this.selected.size} élément(s) ?`)) return;
    this.svc.bulkDelete([...this.selected]).subscribe({ next: () => { this.selected.clear(); this.load(); }, error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ town_id: null, code: '', name: '', is_station: false, station_kind: '', latitude: null, longitude: null, is_active: true }); }
  openEdit(r: ServicePoint): void { this.editId = r.id; this.errorMsg = ''; this.form.patchValue({ town_id: r.town, code: r.code, name: r.name, is_station: r.is_station, station_kind: r.station_kind, latitude: r.latitude, longitude: r.longitude, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value };
    if (!v.is_station) v.station_kind = '';
    v.latitude = v.latitude || null; v.longitude = v.longitude || null;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: ServicePoint): void { if (r.scope === 'global') { alert('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('vc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
