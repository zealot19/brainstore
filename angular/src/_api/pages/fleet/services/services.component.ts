import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../../services/fleet/service.service';
import { InterventionTypeService } from '../../../services/fleet-config/intervention-type.service';
import { SupplierService } from '../../../services/fleet/supplier.service';
import { ExternalDriverService } from '../../../services/fleet/external-driver.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { Service, ServiceAttachment, VehicleListItem, Supplier, ExternalDriver } from '../../../models/fleet.models';
import { InterventionType } from '../../../models/fleet-config.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-fleet-services',
  templateUrl: './services.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class FleetServicesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  services:     Service[]          = [];
  filtered:     Service[]          = [];
  vehicles:     VehicleListItem[]  = [];
  itypes:       InterventionType[] = [];
  suppliers:    Supplier[]         = [];
  drivers:      ExternalDriver[]   = [];
  loading       = true;
  filterStatus  = '';
  filterVehicle = '';
  dateFrom      = '';
  dateTo        = '';

  createForm!:  FormGroup;
  completeForm!: FormGroup;
  saving        = false;
  errorMsg      = '';
  selectedId    = '';
  editId: string | null = null;

  // Pièces jointes (dans la modale créer/éditer, une fois le service créé)
  attachments:  ServiceAttachment[] = [];
  attachFor:    string | null = null;
  uploading     = false;

  // Création rapide de fournisseur
  showNewSupplier   = false;
  newSupplierName   = '';
  newSupplierPhone  = '';
  creatingSupplier  = false;

  statuses = [
    { value: 'planned',     label: 'Créé',         css: 'bg-info'    },
    { value: 'in_progress', label: 'En cours',     css: 'bg-warning' },
    { value: 'done',        label: 'Terminé',      css: 'bg-success' },
    { value: 'cancelled',   label: 'Annulé',       css: 'bg-danger'  },
  ];

  constructor(
    private svc: ServiceService,
    private itypeSvc: InterventionTypeService,
    private supplierSvc: SupplierService,
    private driverSvc: ExternalDriverService,
    private vehicleSvc: VehicleService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      vehicle_id:           ['', Validators.required],
      intervention_type_id: ['', Validators.required],
      planned_date:         ['', Validators.required],
      description:          [''],
      currency:            ['XAF'],
      notes:               [''],
    });
    this.completeForm = this.fb.group({
      done_date:    [new Date().toISOString().slice(0, 10)],
      cost:         [null],
      odometer_km:  [null],
      notes:        [''],
    });
    this.vehicleSvc.list().subscribe(vs => this.vehicles = vs);
    this.itypeSvc.list().subscribe(ts => this.itypes = ts.filter(t => t.category === 'SERVICE' || t.category === 'BOTH'));
    this.supplierSvc.list().subscribe(s => this.suppliers = s);
    this.driverSvc.list().subscribe(d => this.drivers = d);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list({}).subscribe({
      next: data => { this.services = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  applyFilter(): void {
    this.filtered = this.services.filter(o => {
      if (this.filterStatus  && o.status  !== this.filterStatus)  return false;
      if (this.filterVehicle && o.vehicle !== this.filterVehicle) return false;
      const d = o.planned_date || '';
      if (this.dateFrom && d < this.dateFrom) return false;
      if (this.dateTo   && d > this.dateTo)   return false;
      return true;
    });
    this.pg.page = 1;
  }

  statusCss(s: string): string { return this.statuses.find(st => st.value === s)?.css ?? ''; }
  statusLabel(s: string): string { return this.statuses.find(st => st.value === s)?.label ?? s; }

  get totalPlanned():    number { return this.services.filter(o => o.status === 'planned').length; }
  get totalInProgress(): number { return this.services.filter(o => o.status === 'in_progress').length; }
  get totalDone():       number { return this.services.filter(o => o.status === 'done').length; }

  openCreate(): void {
    this.editId = null;
    this.errorMsg = '';
    this.createForm.reset({ currency: 'XAF' });
    this.attachments = [];
    this.attachFor = null;
  }

  openEdit(o: Service): void {
    this.editId = o.id;
    this.errorMsg = '';
    this.createForm.patchValue({
      vehicle_id: o.vehicle, intervention_type_id: o.intervention_type,
      planned_date: o.planned_date, supplier_id: o.supplier, driver_id: o.driver,
      description: o.description, currency: o.currency, notes: o.notes,
    });
    this.attachFor = o.id;
    this.loadAttachments(o.id);
  }

  submitCreate(): void {
    if (this.createForm.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.createForm.value;
    const payload = {
      vehicle_id: v.vehicle_id, intervention_type_id: v.intervention_type_id,
      planned_date: v.planned_date, description: v.description || '',
      currency: v.currency || 'XAF', notes: v.notes || '',
    };
    const action = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    action.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); (this.editId ? this.closeModal('service-modal') : this.openCreate()); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  startService(id: string): void {
    if (!confirm('Démarrer cette intervention ?')) return;
    this.svc.start(id).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  openComplete(id: string): void {
    this.selectedId = id;
    this.errorMsg   = '';
    this.completeForm.reset({ done_date: new Date().toISOString().slice(0, 10) });
  }

  submitComplete(): void {
    if (this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.completeForm.value;
    this.svc.complete(this.selectedId, {
      done_date:   v.done_date   || null,
      cost:        v.cost        ? Number(v.cost) : null,
      odometer_km: v.odometer_km ? Number(v.odometer_km) : null,
      notes:       v.notes       || null,
    }).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.closeModal('complete-service-modal'); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  cancelService(id: string): void {
    if (!confirm('Annuler cette intervention ?')) return;
    this.svc.cancel(id).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  delete(id: string): void {
    if (!confirm('Supprimer cette intervention ?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? "Opération impossible. Réessayez ou contactez un administrateur.") });
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
        this.createForm.patchValue({ supplier_id: s.id });
        this.newSupplierName = ''; this.newSupplierPhone = ''; this.showNewSupplier = false;
      },
      error: err => { this.creatingSupplier = false; this.toast.error(err?.error?.detail ?? 'Création impossible.'); },
    });
  }

  // ── Pièces jointes ──
  loadAttachments(id: string): void {
    this.svc.listAttachments(id).subscribe(a => this.attachments = a);
  }

  onFileSelected(ev: Event): void {
    if (!this.attachFor) return;
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    fd.append('name', file.name);
    this.uploading = true;
    this.svc.uploadAttachment(this.attachFor, fd).subscribe({
      next: () => { this.uploading = false; input.value = ''; this.loadAttachments(this.attachFor!); },
      error: err => { this.uploading = false; this.toast.error(err?.error?.detail ?? 'Envoi impossible.'); },
    });
  }

  deleteAttachment(attId: string): void {
    if (!this.attachFor || !confirm('Supprimer cette pièce jointe ?')) return;
    this.svc.deleteAttachment(this.attachFor, attId).subscribe({
      next: () => this.loadAttachments(this.attachFor!),
      error: err => this.toast.error(err?.error?.detail ?? "Opération impossible. Réessayez ou contactez un administrateur."),
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}