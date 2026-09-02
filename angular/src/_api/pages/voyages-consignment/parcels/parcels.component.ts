import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { TripService } from '../../../services/voyages/trip.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { ServicePoint, ConsignmentType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { SearchableSelectComponent } from '../../shared/searchable-select/searchable-select.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-vcg-parcels',
  templateUrl: './parcels.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, SearchableSelectComponent],
})
export class VcgParcelsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Parcel[] = []; loading = false; statusFilter = ''; q = '';
  tripFilter = ''; typeFilter = ''; originFilter = ''; destFilter = '';
  dateField = 'created'; dateFrom = ''; dateTo = '';
  trips: { id: string; number?: string; code?: string }[] = [];
  points: ServicePoint[] = []; types: ConsignmentType[] = [];
  form!: FormGroup; saving = false; errorMsg = '';
  detail: Parcel | null = null;
  pickupTarget: Parcel | null = null; pickupName = ''; pickupId = '';
  editId: string | null = null;
  selected = new Set<string>();

  paymentMethods: any[] = [];
  constructor(private svc: ParcelService, private spSvc: ServicePointService,
              private ctSvc: ConsignmentTypeService, private tripSvc: TripService,
              private fb: FormBuilder, private route: ActivatedRoute,
              private pmSvc: PaymentMethodService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      origin_point_id: [null, Validators.required], destination_point_id: [null, Validators.required],
      consignment_type_id: [null, Validators.required],
      sender_name: [null, Validators.required], sender_phone: [null, Validators.required],
      recipient_name: [null, Validators.required], recipient_phone: [null, Validators.required],
      recipient_address: [''], recipient_id_number: [''], description: [''], weight_kg: [null], quantity: [1],
      declared_value: [null], amount_due: [null, [Validators.required, Validators.min(0)]],
      amount_received: [null], payment_method: [''],
    });
    this.spSvc.list().subscribe(d => this.points = d);
    this.ctSvc.list().subscribe(d => this.types = d);
    this.tripSvc.list().subscribe(d => this.trips = d as any);
    this.pmSvc.list(true).subscribe(d => this.paymentMethods = d);
    this.reload();
    // Ouverture directe du formulaire depuis le raccourci "Nouveau colis" (navbar) : ?new=1
    this.route.queryParams.subscribe(q => {
      if (q['new']) setTimeout(() => document.querySelector<HTMLElement>('[data-bs-target="#parcel-modal"]')?.click(), 150);
    });
  }

  reload(): void {
    this.loading = true; this.selected.clear();
    this.svc.list({
      status: this.statusFilter || undefined, q: this.q || undefined,
      trip: this.tripFilter || undefined, consignment_type: this.typeFilter || undefined,
      origin_point: this.originFilter || undefined, destination_point: this.destFilter || undefined,
      date_field: this.dateField, date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
    }).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  clearFilters(): void {
    this.statusFilter = this.q = this.tripFilter = this.typeFilter = this.originFilter = this.destFilter = this.dateFrom = this.dateTo = '';
    this.dateField = 'created';
    this.reload();
  }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get selectable(): Parcel[] { return this.rows.filter(r => r.status !== 'picked_up' && r.status !== 'cancelled'); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulkCancel(): void {
    if (!this.selected.size || !confirm(`Annuler ${this.selected.size} colis ?`)) return;
    this.svc.bulk([...this.selected], 'cancel').subscribe({
      next: r => { if (r.errors?.length) this.toast.error(r.errors.join('\n')); this.reload(); },
      error: e => this.toast.error(e?.error?.detail ?? 'Erreur.') });
  }
  statusClass(s: string): string {
    return { registered: 'bg-warning', loaded: 'bg-info', arrived: 'bg-primary',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  get change(): number {
    const r = +this.form.value.amount_received || 0; const d = +this.form.value.amount_due || 0;
    return r - d > 0 ? r - d : 0;
  }
  get isEdit(): boolean { return this.editId != null; }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ quantity: 1, payment_method: '' }); this.form.enable(); }
  openEdit(p: Parcel): void {
    this.editId = p.id; this.errorMsg = '';
    this.form.reset({
      origin_point_id: p.origin_point, destination_point_id: p.destination_point, consignment_type_id: p.consignment_type,
      sender_name: p.sender_name, sender_phone: p.sender_phone, recipient_name: p.recipient_name,
      recipient_phone: p.recipient_phone, recipient_address: p.recipient_address, recipient_id_number: p.recipient_id_number,
      description: p.description, weight_kg: p.weight_kg, quantity: p.quantity, declared_value: p.declared_value,
      amount_due: p.amount_due, amount_received: p.amount_received, payment_method: p.payment_method,
    });
    // Le trajet, le type et l'encaissement ne se modifient pas ici (repricing = action dédiée)
    ['origin_point_id', 'destination_point_id', 'consignment_type_id', 'amount_due', 'amount_received', 'payment_method']
      .forEach(k => this.form.get(k)?.disable());
  }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    const req = this.isEdit ? this.svc.edit(this.editId!, this.form.getRawValue()) : this.svc.create(this.form.value);
    req.subscribe({
      next: () => { this.saving = false; this.reload(); this.close('parcel-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  showDetail(p: Parcel): void { this.svc.get(p.id).subscribe(d => this.detail = d); }
  askPickup(p: Parcel): void { this.pickupTarget = p; this.pickupName = ''; this.pickupId = ''; }
  doPickup(): void {
    if (!this.pickupTarget || !this.pickupName) return;
    this.svc.pickup(this.pickupTarget.id, this.pickupName, this.pickupId).subscribe({
      next: () => { this.pickupTarget = null; this.reload(); this.close('pickup-modal'); },
      error: e => this.toast.error(e?.error?.detail ?? 'Erreur.') });
  }
  cancel(p: Parcel): void {
    if (!confirm('Annuler ce colis ?')) return;
    this.svc.cancel(p.id).subscribe({ next: () => { this.reload(); this.toast.success('Colis annulé.'); }, error: e => this.toast.error(e?.error?.detail ?? 'Erreur.') });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }

  printReceipt(id: string): void {
    this.svc.receipt(id).subscribe({
      next: r => {
        const w = window.open('', '_blank');
        if (!w) { return; }
        w.document.write(r.html);
        w.document.close();
        setTimeout(() => w.print(), 300);
      },
      error: () => {},
    });
  }
}