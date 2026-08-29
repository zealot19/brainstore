import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignmentService } from '../../../services/fleet/assignment.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { ExternalDriverService } from '../../../services/fleet/external-driver.service';
import { AssignmentListItem, VehicleListItem, ExternalDriver } from '../../../models/fleet.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-fleet-assignments',
  templateUrl: './assignments.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetAssignmentsComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };

  assignments:    AssignmentListItem[] = [];
  filtered:       AssignmentListItem[] = [];
  vehicles:       VehicleListItem[]    = [];
  extDrivers:     ExternalDriver[]     = [];
  loading         = true;
  filterStatus    = '';

  createForm!:    FormGroup;
  saving          = false;
  errorMsg        = '';

  statuses = [
    { value: 'planned',     label: 'Planifiée',  css: 'bg-info'    },
    { value: 'in_progress', label: 'En cours',   css: 'bg-warning' },
    { value: 'done',        label: 'Terminée',   css: 'bg-success' },
    { value: 'cancelled',   label: 'Annulée',    css: 'bg-danger'  },
  ];

  constructor(
    private svc: AssignmentService,
    private vehicleSvc: VehicleService,
    private driverSvc: ExternalDriverService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      vehicle_id:         ['', Validators.required],
      purpose:            ['', Validators.required],
      destination:        ['', Validators.required],
      planned_departure:  ['', Validators.required],
      planned_return:     [null],
      departure_location: [''],
      external_driver_id: [''],
      notes:              [''],
    });
    this.vehicleSvc.list().subscribe(vs => this.vehicles = vs);
    this.driverSvc.list().subscribe(ds => this.extDrivers = ds);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list({ status: this.filterStatus || undefined }).subscribe({
      next: data => { this.assignments = data; this.filtered = data; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  statusCss(s: string): string   { return this.statuses.find(st => st.value === s)?.css   ?? ''; }
  statusLabel(s: string): string { return this.statuses.find(st => st.value === s)?.label ?? s;  }

  get totalPlanned():    number { return this.assignments.filter(a => a.status === 'planned').length; }
  get totalInProgress(): number { return this.assignments.filter(a => a.status === 'in_progress').length; }

  openCreate(): void {
    this.errorMsg = '';
    this.createForm.reset();
  }

  submitCreate(): void {
    if (this.createForm.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.createForm.value;
    const payload: Record<string, unknown> = {
      vehicle_id:         v.vehicle_id,
      purpose:            v.purpose,
      destination:        v.destination,
      planned_departure:  v.planned_departure,
      planned_return:     v.planned_return     || null,
      departure_location: v.departure_location || '',
      external_driver_id: v.external_driver_id || null,
      notes:              v.notes              || '',
    };
    this.svc.create(payload).subscribe({
      next: () => { this.saving = false; this.load(); this.closeModal('create-assignment-modal'); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  startAssignment(id: string): void {
    if (!confirm('Démarrer cette mission ?')) return;
    this.svc.start(id).subscribe({ next: () => this.load(), error: err => alert(err?.error?.detail ?? 'Erreur.') });
  }

  completeAssignment(id: string): void {
    if (!confirm('Clôturer cette mission ?')) return;
    this.svc.complete(id).subscribe({ next: () => this.load(), error: err => alert(err?.error?.detail ?? 'Erreur.') });
  }

  cancelAssignment(id: string): void {
    if (!confirm('Annuler cette mission ?')) return;
    this.svc.cancel(id).subscribe({ next: () => this.load(), error: err => alert(err?.error?.detail ?? 'Erreur.') });
  }

  delete(id: string): void {
    if (!confirm('Supprimer cette mission ?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: err => alert(err?.error?.detail ?? 'Impossible.') });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
