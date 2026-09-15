import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccidentService } from '../../../services/fleet/accident.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { TripService } from '../../../services/voyages/trip.service';
import { AccidentListItem, VehicleListItem } from '../../../models/fleet.models';
import { Trip } from '../../../models/voyages.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-fleet-accidents',
  templateUrl: './accidents.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class FleetAccidentsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  accidents:   AccidentListItem[] = [];
  filtered:    AccidentListItem[] = [];
  vehicles:    VehicleListItem[]  = [];
  trips:       Trip[]             = [];   // voyages partis / terminés
  loading      = true;
  filterStatus = '';

  createForm!: FormGroup;
  closeForm!:  FormGroup;
  saving       = false;
  errorMsg     = '';
  selectedId   = '';
  editId:      string | null = null;   // null = mode création

  severities = [
    { value: 'minor',      label: 'Mineur',       css: 'bg-info'    },
    { value: 'moderate',   label: 'Modéré',       css: 'bg-warning' },
    { value: 'severe',     label: 'Grave',        css: 'bg-danger'  },
    { value: 'total_loss', label: 'Perte totale', css: 'bg-dark'    },
  ];

  // Statuts alignés sur le backend : reported → under_review → repair_in_progress → closed.
  statuses = [
    { value: 'reported',           label: 'Déclaré',           css: 'bg-danger'  },
    { value: 'under_review',       label: "En cours d'examen", css: 'bg-info'    },
    { value: 'repair_in_progress', label: 'En réparation',     css: 'bg-warning' },
    { value: 'closed',             label: 'Clôturé',           css: 'bg-success' },
  ];

  constructor(
    private svc: AccidentService,
    private vehicleSvc: VehicleService,
    private tripSvc: TripService,
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
      trip_id:                [''],
      notes:                  [''],
    });
    this.closeForm = this.fb.group({
      actual_repair_cost: [null],
      notes:              [''],
    });
    this.vehicleSvc.list().subscribe(vs => this.vehicles = vs);
    // Voyages « partis » ou « terminés » — ceux qui ont réellement démarré.
    this.tripSvc.list({ status: 'departed' }).subscribe(ts => this.trips = [...this.trips, ...ts]);
    this.tripSvc.list({ status: 'completed' }).subscribe(ts => this.trips = [...this.trips, ...ts]);
    this.load();
  }

  /** Sélection d'un voyage : pré-remplit le véhicule si le voyage en a un. */
  onTripChange(tripId: string): void {
    const t = this.trips.find(x => x.id === tripId);
    if (t?.vehicle) this.createForm.get('vehicle_id')?.setValue(t.vehicle);
  }

  tripLabel(t: Trip): string {
    const ref = t.number || t.code || t.id.slice(0, 8);
    const route = [t.origin_name, t.destination_name].filter(Boolean).join(' → ');
    return route ? `${ref} — ${route}` : ref;
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

  get totalReported():    number { return this.accidents.filter(a => a.status === 'reported').length; }
  get totalUnderReview(): number { return this.accidents.filter(a => a.status === 'under_review').length; }
  get totalUnderRepair(): number { return this.accidents.filter(a => a.status === 'repair_in_progress').length; }

  openCreate(): void {
    this.editId   = null;
    this.errorMsg = '';
    this.createForm.reset({ severity: 'minor', at_fault: false, third_party_involved: false });
    this.createForm.get('vehicle_id')?.enable();
  }

  openEdit(a: AccidentListItem): void {
    this.editId   = a.id;
    this.errorMsg = '';
    this.svc.get(a.id).subscribe({
      next: d => {
        this.createForm.reset({
          vehicle_id:             d.vehicle,
          date:                   d.date,
          location:               d.location,
          description:            d.description,
          severity:               d.severity,
          at_fault:               d.at_fault,
          third_party_involved:   d.third_party_involved,
          third_party_info:       d.third_party_info || '',
          police_report_number:   d.police_report_number || '',
          insurance_claim_number: d.insurance_claim_number || '',
          estimated_damage_cost:  d.estimated_damage_cost,
          trip_id:                d.trip ?? '',
          notes:                  d.notes || '',
        });
        this.createForm.get('vehicle_id')?.disable();   // le véhicule n'est pas modifiable
      },
      error: err => { this.errorMsg = err?.error?.detail ?? "Chargement impossible. Réessayez ou contactez un administrateur."; },
    });
  }

  submitCreate(): void {
    if (this.createForm.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.createForm.getRawValue();
    const payload: Record<string, unknown> = {
      date: v.date,
      location: v.location, description: v.description,
      severity: v.severity, at_fault: v.at_fault,
      third_party_involved: v.third_party_involved,
      third_party_info: v.third_party_info || '',
      police_report_number: v.police_report_number || '',
      insurance_claim_number: v.insurance_claim_number || '',
      estimated_damage_cost: v.estimated_damage_cost ? Number(v.estimated_damage_cost) : null,
      trip_id: v.trip_id || null,
      notes: v.notes || '',
    };
    const req = this.editId
      ? this.svc.update(this.editId, payload)
      : this.svc.create({ ...payload, vehicle_id: v.vehicle_id });
    req.subscribe({
      next: () => {
        this.saving = false; this.load(); this.toast.success('Enregistré.');
        if (this.editId) this.closeModal('create-accident-modal'); else this.openCreate();
      },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
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
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.closeModal('close-accident-modal'); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  setStatus(id: string, status: string): void {
    this.svc.setStatus(id, status).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  delete(id: string): void {
    if (!confirm('Supprimer cet accident ?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? "Opération impossible. Réessayez ou contactez un administrateur.") });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}