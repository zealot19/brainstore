import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleSeatingAssignmentService } from '../../../services/voyages-config/vehicle-seating-assignment.service';
import { SeatingPlanService } from '../../../services/voyages-config/seating-plan.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { VehicleSeatingAssignment, SeatingPlan } from '../../../models/voyages-config.models';
import { VehicleListItem } from '../../../models/fleet.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vc-vehicle-assignments',
  templateUrl: './vehicle-assignments.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcVehicleAssignmentsComponent implements OnInit {
  rows: VehicleSeatingAssignment[] = []; filtered: VehicleSeatingAssignment[] = []; loading = true; search = ''; selected = new Set<string>();
  vehicles: VehicleListItem[] = []; plans: SeatingPlan[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: VehicleSeatingAssignmentService, private planSvc: SeatingPlanService,
              private vehicleSvc: VehicleService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({ vehicle_id: [null, Validators.required], seating_plan_id: [null, Validators.required], valid_from: ['', Validators.required], valid_to: [null], is_active: [true] });
    this.vehicleSvc.list().subscribe(d => this.vehicles = d);
    this.planSvc.list().subscribe(d => this.plans = d);
    this.load();
  }
  load(): void { this.loading = true; this.selected.clear(); this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || (r.vehicle_plate || '').toLowerCase().includes(q) || (r.seating_plan_code || '').toLowerCase().includes(q)); }
  get selectable(): VehicleSeatingAssignment[] { return this.filtered; }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulkDelete(): void {
    if (!this.selected.size) return;
    if (!confirm(`Supprimer ${this.selected.size} élément(s) ?`)) return;
    this.svc.bulkDelete([...this.selected]).subscribe({ next: () => { this.selected.clear(); this.load(); }, error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ vehicle_id: null, seating_plan_id: null, valid_from: '', valid_to: null, is_active: true }); }
  openEdit(r: VehicleSeatingAssignment): void { this.editId = r.id; this.errorMsg = ''; this.form.patchValue({ vehicle_id: r.vehicle, seating_plan_id: r.seating_plan, valid_from: r.valid_from, valid_to: r.valid_to, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, valid_to: this.form.value.valid_to || null };
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: VehicleSeatingAssignment): void { if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('vc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
