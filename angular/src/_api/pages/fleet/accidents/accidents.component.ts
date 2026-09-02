import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccidentService } from '../../../services/fleet/accident.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { ExternalDriverService } from '../../../services/fleet/external-driver.service';
import { AccidentListItem, VehicleListItem, ExternalDriver } from '../../../models/fleet.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-fleet-accidents',
  templateUrl: './accidents.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetAccidentsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  accidents:   AccidentListItem[] = [];
  filtered:    AccidentListItem[] = [];
  vehicles:    VehicleListItem[]  = [];
  extDrivers:  ExternalDriver[]   = [];
  loading      = true;
  filterStatus = '';

  createForm!: FormGroup;
  closeForm!:  FormGroup;
  saving       = false;
  errorMsg     = '';
  selectedId   = '';

  severities = [
    { value: 'minor',      label: 'Mineur',       css: 'bg-info'    },
    { value: 'moderate',   label: 'Modéré',       css: 'bg-warning' },
    { value: 'major',      label: 'Majeur',       css: 'bg-danger'  },
    { value: 'total_loss', label: 'Perte totale', css: 'bg-dark'    },
  ];

  statuses = [
    { value: 'open',          label: 'Ouvert',        css: 'bg-danger'  },
    { value: 'under_repair',  label: 'En réparation', css: 'bg-warning' },
    { value: 'closed',        label: 'Clôturé',       css: 'bg-success' },
  ];

  constructor(
    private svc: AccidentService,
    private vehicleSvc: VehicleService,
    private driverSvc: ExternalDriverService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      vehicle_id:             ['', Validators.required],
      date:                   ['', Validators.required],
      location:               ['', Validators.required],
      description:            ['', Validators.required],
      severity:               ['minor'],
      at_fault:               [false],
      third_party_involved:   [false],
      third_party_info:       [''],
      police_report_number:   [''],
      insurance_claim_number: [''],
      estimated_damage_cost:  [null],
      external_driver_id:     [''],
      notes:                  [''],
    });
    this.closeForm = this.fb.group({
      actual_repair_cost: [null],
      notes:              [''],
    });
    this.vehicleSvc.list().subscribe(vs => this.vehicles = vs);
    this.driverSvc.list().subscribe(ds => this.extDrivers = ds);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list({ status: this.filterStatus || undefined }).subscribe({
      next: data => { this.accidents = data; this.filtered = data; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  severityCss(s: string): string   { return this.severities.find(x => x.value === s)?.css   ?? ''; }
  severityLabel(s: string): string { return this.severities.find(x => x.value === s)?.label ?? s;  }
  statusCss(s: string): string     { return this.statuses.find(x => x.value === s)?.css      ?? ''; }
  statusLabel(s: string): string   { return this.statuses.find(x => x.value === s)?.label    ?? s;  }

  get totalOpen():        number { return this.accidents.filter(a => a.status === 'open').length; }
  get totalUnderRepair(): number { return this.accidents.filter(a => a.status === 'under_repair').length; }

  openCreate(): void {
    this.errorMsg = '';
    this.createForm.reset({ severity: 'minor', at_fault: false, third_party_involved: false });
  }

  submitCreate(): void {
    if (this.createForm.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.createForm.value;
    const payload: Record<string, unknown> = {
      vehicle_id: v.vehicle_id, date: v.date,
      location: v.location, description: v.description,
      severity: v.severity, at_fault: v.at_fault,
      third_party_involved: v.third_party_involved,
      third_party_info: v.third_party_info || '',
      police_report_number: v.police_report_number || '',
      insurance_claim_number: v.insurance_claim_number || '',
      estimated_damage_cost: v.estimated_damage_cost ? Number(v.estimated_damage_cost) : null,
      external_driver_id: v.external_driver_id || null,
      notes: v.notes || '',
    };
    this.svc.create(payload).subscribe({
      next: () => { this.saving = false; this.load(); this.openCreate(); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  openClose(id: string): void {
    this.selectedId = id;
    this.errorMsg   = '';
    this.closeForm.reset();
  }

  submitClose(): void {
    if (this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.closeForm.value;
    this.svc.close(this.selectedId, {
      actual_repair_cost: v.actual_repair_cost ? Number(v.actual_repair_cost) : null,
      notes: v.notes || null,
    }).subscribe({
      next: () => { this.saving = false; this.load(); this.closeModal('close-accident-modal'); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  setStatus(id: string, status: string): void {
    this.svc.setStatus(id, status).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? 'Erreur.') });
  }

  delete(id: string): void {
    if (!confirm('Supprimer cet accident ?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? 'Impossible.') });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}