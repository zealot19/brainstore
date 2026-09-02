import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../../../services/fleet/contract.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { SupplierService } from '../../../services/fleet/supplier.service';
import { ExternalDriverService } from '../../../services/fleet/external-driver.service';
import { InterventionTypeService } from '../../../services/fleet-config/intervention-type.service';
import { PeriodService } from '../../../services/fleet-config/period.service';
import { EmployeeService } from '../../../services/hr/employee.service';
import { Contract, RecurringCost, VehicleListItem, Supplier, ExternalDriver } from '../../../models/fleet.models';
import { InterventionType, Period } from '../../../models/fleet-config.models';
import { Employee } from '../../../models/hr.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-fleet-contracts',
  templateUrl: './contracts.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetContractsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  contracts:  Contract[]         = [];
  filtered:   Contract[]         = [];
  vehicles:   VehicleListItem[]  = [];
  itypes:     InterventionType[] = [];
  periods:    Period[]           = [];
  suppliers:  Supplier[]         = [];
  drivers:    ExternalDriver[]   = [];
  employees:  Employee[]         = [];
  loading      = true;
  filterStatus = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  // Recurring cost lines (edit mode only, after the contract exists)
  costs:      RecurringCost[] = [];
  costFor:    string | null = null;
  costForm!:  FormGroup;
  savingCost  = false;

  // Création rapide de fournisseur
  showNewSupplier   = false;
  newSupplierName   = '';
  newSupplierPhone  = '';
  creatingSupplier  = false;

  statuses = [
    { value: 'draft',     label: 'Brouillon', css: 'bg-secondary' },
    { value: 'active',    label: 'Actif',     css: 'bg-success'   },
    { value: 'expired',   label: 'Expiré',    css: 'bg-danger'    },
    { value: 'cancelled', label: 'Annulé',    css: 'bg-dark'      },
  ];

  constructor(
    private svc: ContractService,
    private vehicleSvc: VehicleService,
    private supplierSvc: SupplierService,
    private driverSvc: ExternalDriverService,
    private itypeSvc: InterventionTypeService,
    private periodSvc: PeriodService,
    private employeeSvc: EmployeeService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      vehicle_id:           ['', Validators.required],
      intervention_type_id: ['', Validators.required],
      name:                 ['', Validators.required],
      reference:            [''],
      included_service_ids: [[]],
      supplier_id:          [null],
      responsible_id:       [null],
      driver_id:            [null],
      policy_number:        [''],
      start_date:           ['', Validators.required],
      end_date:             ['', Validators.required],
      creation_date:        [null],
      activation_cost:      [0],
      billing_period_id:    [null],
      deductible:           [null],
      currency:             ['XAF'],
      status:               ['active', Validators.required],
      terms:                [''],
      notes:                [''],
    });
    this.costForm = this.fb.group({
      description: ['', Validators.required],
      amount:      [null, [Validators.required, Validators.min(0)]],
      currency:    ['XAF'],
      period_id:   ['', Validators.required],
    });
    this.vehicleSvc.list().subscribe(vs => this.vehicles = vs);
    this.itypeSvc.list().subscribe(ts => this.itypes = ts.filter(t => t.category === 'CONTRACT' || t.category === 'BOTH'));
    this.periodSvc.list().subscribe(p => this.periods = p);
    this.supplierSvc.list().subscribe(s => this.suppliers = s);
    this.driverSvc.list().subscribe(d => this.drivers = d);
    this.employeeSvc.list({ status: 'active' }).subscribe(e => this.employees = e);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list({ status: this.filterStatus || undefined }).subscribe({
      next: data => { this.contracts = data; this.filtered = data; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  statusCss(s: string): string { return this.statuses.find(st => st.value === s)?.css ?? ''; }
  statusLabel(s: string): string { return this.statuses.find(st => st.value === s)?.label ?? s; }

  get totalActive():   number { return this.contracts.filter(c => c.status === 'active').length; }
  get totalExpiring(): number { return this.contracts.filter(c => c.status === 'active' && c.days_until_expiry <= 30).length; }

  openCreate(): void {
    this.editId = null;
    this.errorMsg = '';
    this.form.reset({ included_service_ids: [], activation_cost: 0, currency: 'XAF', status: 'active' });
    this.costs = [];
    this.costFor = null;
  }

  openEdit(c: Contract): void {
    this.editId = c.id;
    this.errorMsg = '';
    this.form.patchValue({
      vehicle_id: c.vehicle, intervention_type_id: c.intervention_type, name: c.name,
      reference: c.reference, included_service_ids: c.included_services,
      supplier_id: c.supplier, responsible_id: c.responsible, driver_id: c.driver,
      policy_number: c.policy_number, start_date: c.start_date, end_date: c.end_date,
      creation_date: c.creation_date, activation_cost: c.activation_cost,
      billing_period_id: c.billing_period, deductible: c.deductible,
      currency: c.currency, status: c.status, terms: c.terms, notes: c.notes,
    });
    this.costFor = c.id;
    this.loadCosts(c.id);
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true;
    this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = {
      vehicle_id: v.vehicle_id, intervention_type_id: v.intervention_type_id,
      name: v.name, reference: v.reference || '',
      included_service_ids: v.included_service_ids || [],
      supplier_id: v.supplier_id || null, responsible_id: v.responsible_id || null,
      driver_id: v.driver_id || null, policy_number: v.policy_number || '',
      start_date: v.start_date, end_date: v.end_date, creation_date: v.creation_date || null,
      activation_cost: Number(v.activation_cost) || 0, billing_period_id: v.billing_period_id || null,
      deductible: v.deductible ? Number(v.deductible) : null,
      currency: v.currency || 'XAF', status: v.status, terms: v.terms || '', notes: v.notes || '',
    };
    const action = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    action.subscribe({
      next: c => {
        this.saving = false;
        // stay open in edit mode so recurring costs can be added right away
        if (!this.editId) { this.editId = c.id; this.costFor = c.id; this.loadCosts(c.id); }
        this.load();
      },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer ce contrat ?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? 'Impossible.') });
  }

  // ── Création rapide de fournisseur ──
  createSupplierInline(): void {
    const name = this.newSupplierName.trim();
    if (!name || this.creatingSupplier) return;
    this.creatingSupplier = true;
    this.supplierSvc.create({ name, phone: this.newSupplierPhone || '' }).subscribe({
      next: s => {
        this.creatingSupplier = false;
        this.suppliers = [...this.suppliers, s];
        this.form.patchValue({ supplier_id: s.id });
        this.newSupplierName = ''; this.newSupplierPhone = ''; this.showNewSupplier = false;
      },
      error: err => { this.creatingSupplier = false; this.toast.error(err?.error?.detail ?? 'Création impossible.'); },
    });
  }

  // ── Coûts récurrents ──
  loadCosts(id: string): void {
    this.svc.listRecurringCosts(id).subscribe(c => this.costs = c);
  }

  addCost(): void {
    if (this.costForm.invalid || !this.costFor || this.savingCost) return;
    this.savingCost = true;
    const v = this.costForm.value;
    this.svc.addRecurringCost(this.costFor, {
      description: v.description, amount: Number(v.amount),
      currency: v.currency || 'XAF', period_id: v.period_id,
    }).subscribe({
      next: () => { this.savingCost = false; this.costForm.reset({ currency: 'XAF' }); this.loadCosts(this.costFor!); },
      error: err => { this.savingCost = false; this.toast.error(err?.error?.detail ?? 'Impossible.'); },
    });
  }

  deleteCost(rcId: string): void {
    if (!this.costFor || !confirm('Supprimer cette ligne ?')) return;
    this.svc.deleteRecurringCost(this.costFor, rcId).subscribe({
      next: () => this.loadCosts(this.costFor!),
      error: err => this.toast.error(err?.error?.detail ?? 'Impossible.'),
    });
  }

  closeAndReload(): void { this.load(); (this.editId ? this.closeModal('contract-modal') : this.openCreate()); }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}