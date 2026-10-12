import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { ConsignmentNatureService } from '../../../services/voyages-config/consignment-nature.service';
import { TripService } from '../../../services/voyages/trip.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { PassengerSpec } from '../../../models/voyages-booking.models';
import { ServicePoint, ConsignmentType, ConsignmentNature } from '../../../models/voyages-config.models';
import { ClientFieldsComponent } from '../../voyages-booking/shared/client-fields/client-fields.component';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { SearchableSelectComponent } from '../../shared/searchable-select/searchable-select.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { printHtml } from '../../../../app/shared/print/print.util';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-vcg-parcels',
  templateUrl: './parcels.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, SearchableSelectComponent, ClientFieldsComponent, TranslocoModule],
})
export class VcgParcelsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Parcel[] = []; loading = false; statusFilter = ''; q = '';
  tripFilter = ''; typeFilter = ''; originFilter = ''; destFilter = '';
  showArchived = false;
  dateField = 'created'; dateFrom = ''; dateTo = '';
  trips: { id: string; number?: string; code?: string }[] = [];
  points: ServicePoint[] = []; types: ConsignmentType[] = []; typeOptions: any[] = [];
  natures: ConsignmentNature[] = [];
  form!: FormGroup; saving = false; errorMsg = '';
  detail: Parcel | null = null;
  pickupTarget: Parcel | null = null;
  pickupKind: 'destinataire' | 'mandataire' = 'destinataire';
  pickupName = ''; pickupPhone = ''; pickupId = '';
  editId: string | null = null;
  selected = new Set<string>();

  // M25 — expéditions partielles
  shipTarget: Parcel | null = null;
  shipments: import('../../../models/voyages-consignment.models').ParcelShipment[] = [];
  shipTripId = ''; shipQty = 1; shipNote = ''; shipBusy = false;

  paymentMethods: any[] = [];
  constructor(private svc: ParcelService, private spSvc: ServicePointService,
              private ctSvc: ConsignmentTypeService, private cnSvc: ConsignmentNatureService,
              private tripSvc: TripService,
              private fb: FormBuilder, private route: ActivatedRoute,
              private pmSvc: PaymentMethodService) {}

  // Client expéditeur (création) — piloté par le fieldset partagé app-client-fields
  senderClient: PassengerSpec = { id_type: 'cni' };

  ngOnInit(): void {
    this.form = this.fb.group({
      origin_point_id: [null, Validators.required], destination_point_id: [null, Validators.required],
      nature_id: [null, Validators.required],
      consignment_type_id: [null, Validators.required],
      sender_name: [null], sender_phone: [null],   // create: driven by the shared client fieldset (senderClient)
      recipient_name: [''], recipient_phone: [''],
      recipient_id_number: [''], description: ['', Validators.required], content: ['', Validators.required],
      weight_kg: [null], quantity: [1],
      declared_value: [null], amount_due: [null, [Validators.required, Validators.min(0)]],
      payment_method: [''],
    });
    this.spSvc.list().subscribe(d => this.points = d);
    this.ctSvc.list().subscribe(d => {
      this.types = d;
      this.typeOptions = d.map(t => ({ ...t, label_nature: t.nature_name ? `${t.label} - ${t.nature_name}` : t.label }));
    });
    this.cnSvc.list().subscribe(d => this.natures = d.filter(n => n.is_active));
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
      include_archived: this.showArchived ? 1 : undefined,
    }).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  toggleArchived(): void { this.showArchived = !this.showArchived; this.reload(); }
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
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  statusClass(s: string): string {
    return { registered: 'bg-secondary', ready_for_travel: 'bg-warning', loaded: 'bg-info',
             in_transit: 'bg-primary', arrived: 'bg-primary', available_for_pickup: 'bg-info',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  get isEdit(): boolean { return this.editId != null; }
  /** Types filtrés par la nature choisie (M24 : la nature filtre les types). */
  get filteredTypeOptions(): any[] {
    const n = this.form?.value?.nature_id;
    return n ? this.typeOptions.filter(t => t.nature === n) : this.typeOptions;
  }
  /** Au changement de nature, invalider le type s'il n'appartient pas à la nature. */
  onNatureChange(): void {
    const t = this.form.value.consignment_type_id;
    if (t && !this.filteredTypeOptions.some(o => o.id === t)) {
      this.form.patchValue({ consignment_type_id: null });
    }
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.senderClient = { id_type: 'cni' }; this.form.reset({ quantity: 1, payment_method: '' }); this.form.enable(); }
  openEdit(p: Parcel): void {
    this.editId = p.id; this.errorMsg = '';
    this.form.reset({
      origin_point_id: p.origin_point, destination_point_id: p.destination_point,
      nature_id: p.nature, consignment_type_id: p.consignment_type,
      sender_name: p.sender_name, sender_phone: p.sender_phone, recipient_name: p.recipient_name,
      recipient_phone: p.recipient_phone, recipient_id_number: p.recipient_id_number,
      description: p.description, content: p.content, weight_kg: p.weight_kg, quantity: p.quantity, declared_value: p.declared_value,
      amount_due: p.amount_due, payment_method: p.payment_method,
    });
    // Le trajet, la nature, le type et l'encaissement ne se modifient pas ici (repricing = action dédiée)
    ['origin_point_id', 'destination_point_id', 'nature_id', 'consignment_type_id', 'amount_due', 'payment_method']
      .forEach(k => this.form.get(k)?.disable());
  }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    if (!this.isEdit && (!this.senderClient.name || !this.senderClient.phone)) {
      this.errorMsg = 'Expéditeur requis (nom et téléphone).'; return;
    }
    this.saving = true; this.errorMsg = '';
    const createBody = {
      ...this.form.value,
      sender_name: this.senderClient.name, sender_phone: this.senderClient.phone,
      sender_civility: this.senderClient.civility, sender_id_type: this.senderClient.id_type,
      sender_id_number: this.senderClient.id_number,
    };
    const req = this.isEdit ? this.svc.edit(this.editId!, this.form.getRawValue()) : this.svc.create(createBody);
    req.subscribe({
      next: () => { this.saving = false; this.reload(); this.toast.success('Enregistré.'); this.close('parcel-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  showDetail(p: Parcel): void { this.svc.get(p.id).subscribe(d => this.detail = d); }
  /** Vrai si un destinataire a été renseigné à la création (retrait = simple confirmation). */
  get pickupHasRecipient(): boolean { return !!this.pickupTarget?.recipient_name; }
  askPickup(p: Parcel): void {
    this.pickupTarget = p; this.pickupKind = 'destinataire';
    this.pickupName = ''; this.pickupPhone = ''; this.pickupId = '';
  }
  doPickup(): void {
    if (!this.pickupTarget) return;
    if (this.pickupHasRecipient) {
      // Destinataire déjà connu : simple confirmation (pièce présentée facultative).
      this.svc.pickup(this.pickupTarget.id, { picked_up_id_number: this.pickupId.trim() }).subscribe({
        next: () => { this.pickupTarget = null; this.reload(); this.close('pickup-modal'); },
        error: e => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué.") });
      return;
    }
    // Aucun destinataire : on capture qui retire (destinataire ou mandataire).
    const name = this.pickupName.trim(), phone = this.pickupPhone.trim(), idn = this.pickupId.trim();
    if (!name || !phone || !idn) { this.toast.error('Nom, téléphone et pièce sont requis.'); return; }
    this.svc.pickup(this.pickupTarget.id, {
      picked_up_by: name, picked_up_phone: phone, picked_up_id_number: idn, picked_up_kind: this.pickupKind,
    }).subscribe({
      next: () => { this.pickupTarget = null; this.reload(); this.close('pickup-modal'); },
      error: e => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué.") });
  }
  cancel(p: Parcel): void {
    if (!confirm('Annuler ce colis ?')) return;
    this.svc.cancel(p.id).subscribe({ next: () => { this.reload(); this.toast.success('Colis annulé.'); }, error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }

  printReceipt(id: string): void {
    this.svc.receipt(id).subscribe({
      next: r => printHtml(r.html),
      error: () => {},
    });
  }

  // ── M25 : expéditions ───────────────────────────────────────────────────────
  openShipments(p: Parcel): void {
    this.shipTarget = p; this.shipTripId = ''; this.shipQty = 1; this.shipNote = '';
    this.loadShipments();
  }
  private loadShipments(): void {
    if (!this.shipTarget) return;
    this.svc.get(this.shipTarget.id).subscribe({ next: d => this.shipTarget = d, error: () => {} });
    this.svc.shipments(this.shipTarget.id).subscribe({ next: s => this.shipments = s, error: () => this.shipments = [] });
  }
  closeShipments(): void { this.shipTarget = null; this.shipments = []; }
  get shipRemaining(): number {
    return this.shipTarget?.remaining_pieces ?? ((this.shipTarget?.quantity ?? 0) - (this.shipTarget?.shipped_pieces ?? 0));
  }
  createShipment(): void {
    if (!this.shipTarget || !this.shipTripId || this.shipQty < 1) return;
    this.shipBusy = true;
    this.svc.createShipment(this.shipTarget.id, { trip_id: this.shipTripId, quantity: this.shipQty, note: this.shipNote.trim() })
      .subscribe({ next: () => { this.shipBusy = false; this.shipTripId = ''; this.shipQty = 1; this.shipNote = ''; this.loadShipments(); this.reload(); },
        error: e => { this.shipBusy = false; this.toast.error(e?.error?.detail ?? "La création de l'expédition a échoué."); } });
  }
  private shipAction(obs: any): void {
    obs.subscribe({ next: () => { this.loadShipments(); this.reload(); },
      error: (e: any) => this.toast.error(e?.error?.detail ?? "L'opération a échoué.") });
  }
  validateShip(s: any): void { this.shipAction(this.svc.validateShipment(s.id)); }
  loadShip(s: any): void { this.shipAction(this.svc.loadShipment(s.id)); }
  dispatchShip(s: any): void { this.shipAction(this.svc.dispatchShipment(s.id)); }
  arriveShip(s: any): void { this.shipAction(this.svc.arriveShipment(s.id)); }
  cancelShip(s: any): void { if (confirm('Annuler cette expédition ?')) this.shipAction(this.svc.cancelShipment(s.id)); }
}