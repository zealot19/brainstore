import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicePatternService } from '../../../services/voyages-config/service-pattern.service';
import { RouteService } from '../../../services/voyages-config/route.service';
import { TimeSlotService } from '../../../services/voyages-config/time-slot.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { SeatingPlanService } from '../../../services/voyages-config/seating-plan.service';
import { ServicePattern, Route, TimeSlot, FareClass, SeatingPlan } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-vc-service-patterns',
  templateUrl: './service-patterns.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcServicePatternsComponent implements OnInit {
  rows: ServicePattern[] = []; filtered: ServicePattern[] = []; loading = true; search = ''; selected = new Set<string>();
  routes: Route[] = []; timeSlots: TimeSlot[] = []; fareClasses: FareClass[] = []; plans: SeatingPlan[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  days = [
    { key: 'monday', label: 'Lun' }, { key: 'tuesday', label: 'Mar' }, { key: 'wednesday', label: 'Mer' },
    { key: 'thursday', label: 'Jeu' }, { key: 'friday', label: 'Ven' }, { key: 'saturday', label: 'Sam' }, { key: 'sunday', label: 'Dim' },
  ];
  constructor(private svc: ServicePatternService, private routeSvc: RouteService, private tsSvc: TimeSlotService,
              private fcSvc: FareClassService, private planSvc: SeatingPlanService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      route_id: [null, Validators.required], time_slot_id: [null, Validators.required], fare_class_id: [null, Validators.required],
      default_seating_plan_id: [null],
      monday: [false], tuesday: [false], wednesday: [false], thursday: [false], friday: [false], saturday: [false], sunday: [false],
      valid_from: [null], valid_to: [null], is_active: [true],
    });
    this.routeSvc.list().subscribe(d => this.routes = d);
    this.tsSvc.list().subscribe(d => this.timeSlots = d);
    this.fcSvc.list().subscribe(d => this.fareClasses = d);
    this.planSvc.list().subscribe(d => this.plans = d);
    this.load();
  }
  load(): void { this.loading = true; this.selected.clear(); this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || (r.route_code || '').toLowerCase().includes(q)); }
  get selectable(): ServicePattern[] { return this.filtered.filter(r => r.scope !== 'global'); }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulkDelete(): void {
    if (!this.selected.size) return;
    if (!confirm(`Supprimer ${this.selected.size} élément(s) ?`)) return;
    this.svc.bulkDelete([...this.selected]).subscribe({ next: () => { this.selected.clear(); this.load(); }, error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  activeDays(r: ServicePattern): string { return this.days.filter(d => (r as any)[d.key]).map(d => d.label).join(', ') || '—'; }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ route_id: null, time_slot_id: null, fare_class_id: null, default_seating_plan_id: null, monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false, valid_from: null, valid_to: null, is_active: true }); }
  openEdit(r: ServicePattern): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({ route_id: r.route, time_slot_id: r.time_slot, fare_class_id: r.fare_class, default_seating_plan_id: r.default_seating_plan, monday: r.monday, tuesday: r.tuesday, wednesday: r.wednesday, thursday: r.thursday, friday: r.friday, saturday: r.saturday, sunday: r.sunday, valid_from: r.valid_from, valid_to: r.valid_to, is_active: r.is_active });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, default_seating_plan_id: this.form.value.default_seating_plan_id || null, valid_from: this.form.value.valid_from || null, valid_to: this.form.value.valid_to || null };
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: ServicePattern): void { if (r.scope === 'global') { alert('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('vc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
