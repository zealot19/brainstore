import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuelLogService } from '../../../services/fleet/fuel-log.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { FuelLog, VehicleListItem } from '../../../models/fleet.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-fleet-fuel-logs',
  templateUrl: './fuel-logs.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetFuelLogsComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };

  vehicles:        VehicleListItem[] = [];
  logs:            FuelLog[]         = [];
  selectedVehicleId = '';
  loading           = true;

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  constructor(
    private svc: FuelLogService,
    private vehicleSvc: VehicleService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date:           [new Date().toISOString().slice(0, 10), Validators.required],
      odometer_km:    [null, [Validators.required, Validators.min(0)]],
      liters:         [null, [Validators.required, Validators.min(0)]],
      cost_per_liter: [null, [Validators.required, Validators.min(0)]],
      total_cost:     [null],
      fuel_type:      [''],
      station:        [''],
      full_tank:      [true],
      notes:          [''],
    });
    this.vehicleSvc.list().subscribe(vs => {
      this.vehicles = vs;
      if (vs.length > 0) {
        this.selectedVehicleId = vs[0].id;
        this.loadLogs();
      } else {
        this.loading = false;
      }
    });
  }

  loadLogs(): void {
    if (!this.selectedVehicleId) { this.logs = []; this.loading = false; return; }
    this.loading = true;
    this.svc.listForVehicle(this.selectedVehicleId).subscribe({
      next: data => { this.logs = data; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  onVehicleChange(): void { this.loadLogs(); }

  get totalLiters(): number { return this.logs.reduce((s, l) => s + parseFloat(l.liters || '0'), 0); }
  get totalCost():   number { return this.logs.reduce((s, l) => s + parseFloat(l.total_cost || '0'), 0); }

  openCreate(): void {
    this.editId   = null;
    this.errorMsg = '';
    this.form.reset({ date: new Date().toISOString().slice(0, 10), full_tank: true });
  }

  openEdit(l: FuelLog): void {
    this.editId   = l.id;
    this.errorMsg = '';
    this.form.patchValue({
      date: l.date, odometer_km: l.odometer_km, liters: l.liters,
      cost_per_liter: l.cost_per_liter, total_cost: l.total_cost,
      fuel_type: l.fuel_type, station: l.station, full_tank: l.full_tank, notes: l.notes,
    });
  }

  submit(): void {
    if (this.form.invalid || this.saving || !this.selectedVehicleId) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = {
      date:           v.date,
      odometer_km:    Number(v.odometer_km),
      liters:         Number(v.liters),
      cost_per_liter: Number(v.cost_per_liter),
      total_cost:     v.total_cost ? Number(v.total_cost) : null,
      fuel_type:      v.fuel_type  || '',
      station:        v.station    || '',
      full_tank:      v.full_tank,
      notes:          v.notes      || '',
    };
    const action = this.editId
      ? this.svc.update(this.editId, payload)
      : this.svc.create(this.selectedVehicleId, payload);
    action.subscribe({
      next: () => { this.saving = false; this.loadLogs(); this.closeModal('fuel-log-modal'); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer cet enregistrement carburant ?')) return;
    this.svc.delete(id).subscribe({
      next: () => this.loadLogs(),
      error: err => alert(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
