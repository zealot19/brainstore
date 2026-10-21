import { Component, OnInit, inject} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService, ParcelNumbering } from '../../../services/voyages-consignment/parcel.service';
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
import { PrintRouterService } from '../../../../app/shared/print/print-router.service';
import { AuthService } from '../../../services/auth/auth.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';
import { CaisseSelectComponent } from '../../shared/caisse-select/caisse-select.component';

@Component({
  selector: 'app-vcg-parcels',
  templateUrl: './parcels.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, SearchableSelectComponent, ClientFieldsComponent, TranslocoModule, CaisseSelectComponent],
})
export class VcgParcelsComponent implements OnInit {
  private toast = inject(ToastService);
  private t = inject(TranslocoService);
  private printRouter = inject(PrintRouterService);
  private auth = inject(AuthService);
  // #1 : l'origine d'un colis est toujours la station de l'agence de l'agent.
  baseOriginId: string | null = null;
  baseOriginName = '';
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

  paymentMethods: any[] = [];
  constructor(private svc: ParcelService, private spSvc: ServicePointService,
              private ctSvc: ConsignmentTypeService, private cnSvc: ConsignmentNatureService,
              private tripSvc: TripService,
              private fb: FormBuilder, private route: ActivatedRoute,
              private pmSvc: PaymentMethodService) {}

  // Client expéditeur (création) — piloté par le fieldset partagé app-client-fields
  senderClient: PassengerSpec = { id_type: 'cni' };
  cashRegisterId: string | null = null;

  // Reprise de numérotation après coupure (saut en avant du prochain numéro).
  numbering: ParcelNumbering | null = null;
  numberingValue: number | null = null;
  numberingSaving = false;
  numberingError = '';

  ngOnInit(): void {
    this.form = this.fb.group({
      origin_point_id: [null], destination_point_id: [null, Validators.required],
      consignment_type_id: [null, Validators.required],
      sender_name: [null], sender_phone: [null],   // create: driven by the shared client fieldset (senderClient)
      recipient_name: ['', Validators.required], recipient_phone: [''],
      recipient_id_number: [''], description: ['', Validators.required], content: ['', Validators.required],
      weight_kg: [null], quantity: [1],
      declared_value: [null], amount_due: [null, [Validators.required, Validators.min(0)]],
      payment_method: [''],
    });
    this.spSvc.list().subscribe(d => { this.points = d; this.resolveBaseOrigin(); });
    // #2 : afficher l'origine (agence de l'agent) dès que le profil est dispo,
    // même avant le chargement des points (BehaviorSubject -> émet tout de suite).
    this.auth.currentUser$.subscribe(() => this.resolveBaseOrigin());
    this.ctSvc.list().subscribe(d => {
      this.types = d;
      this.typeOptions = d.map(t => ({ ...t, label_nature: t.nature_name ? `${t.label} - ${t.nature_name}` : t.label }));
    });
    this.cnSvc.list().subscribe(d => this.natures = d);
    // Tarification par nature : quand le type change, appliquer le prix de sa nature.
    this.form.get('consignment_type_id')!.valueChanges.subscribe(() => this.applyNaturePricing());
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
    if (!this.selected.size || !confirm(this.t.translate('cons.msg.confirm_cancel_n_parcels', { n: this.selected.size }))) return;
    this.svc.bulk([...this.selected], 'cancel').subscribe({
      next: r => { if (r.errors?.length) this.toast.error(r.errors.join('\n')); this.reload(); },
      error: e => this.toast.error(e?.error?.detail ?? this.t.translate('cons.msg.op_failed')) });
  }
  statusClass(s: string): string {
    return { registered: 'bg-secondary', ready_for_travel: 'bg-warning', loaded: 'bg-info',
             partial_transit: 'bg-warning', in_transit: 'bg-primary', arrived: 'bg-primary', available_for_pickup: 'bg-info',
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
  /** #1 : origine = station de l'agence de l'agent (résolue depuis le profil courant). */
  private resolveBaseOrigin(): void {
    const ag = this.auth.currentUser?.default_agency;
    const st = ag?.id ? this.points.find(p => (p as any).agency === ag.id) : undefined;
    this.baseOriginId = st?.id ?? null;
    // Toujours afficher l'origine : station si trouvée, sinon le nom de l'agence du profil.
    this.baseOriginName = st?.name ?? ag?.name ?? '';
    if (this.baseOriginId) this.form?.patchValue({ origin_point_id: this.baseOriginId });
  }
  /** Applique la tarification de la nature du type sélectionné : prix fixe (champ
   * verrouillé) ou bornes min/max (champ libre dans l'intervalle). */
  priceFixed = false; priceHint = '';
  applyNaturePricing(): void {
    if (this.isEdit) return;   // repricing = action dédiée, pas à l'édition
    const type = this.types.find(t => t.id === this.form.value.consignment_type_id);
    const nat = type?.nature ? this.natures.find(n => n.id === type.nature) : undefined;
    const amt = this.form.get('amount_due')!;
    this.priceFixed = false; this.priceHint = '';
    if (nat?.fixed_price != null) {
      this.priceFixed = true;
      amt.setValue(nat.fixed_price, { emitEvent: false });
      amt.setValidators([Validators.required]);
      amt.disable({ emitEvent: false });
    } else {
      amt.enable({ emitEvent: false });
      const v = [Validators.required, Validators.min(nat?.min_price ?? 0)];
      if (nat?.max_price != null) v.push(Validators.max(nat.max_price));
      amt.setValidators(v);
      if (nat?.min_price != null || nat?.max_price != null) {
        this.priceHint = `${nat?.min_price ?? 0} – ${nat?.max_price ?? '∞'}`;
      }
    }
    amt.updateValueAndValidity({ emitEvent: false });
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.priceFixed = false; this.priceHint = ''; this.senderClient = { id_type: 'cni' }; this.form.reset({ quantity: 1, payment_method: '', origin_point_id: this.baseOriginId }); this.form.enable(); }
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
      this.errorMsg = this.t.translate('cons.msg.sender_required'); return;
    }
    this.saving = true; this.errorMsg = '';
    const createBody = {
      ...this.form.getRawValue(),   // getRawValue : inclut amount_due même s'il est désactivé (prix fixe)
      sender_name: this.senderClient.name, sender_phone: this.senderClient.phone,
      sender_civility: this.senderClient.civility, sender_id_type: this.senderClient.id_type,
      sender_id_number: this.senderClient.id_number,
      cash_register_id: this.cashRegisterId,
    };
    const wasCreate = !this.isEdit;
    const req = this.isEdit ? this.svc.edit(this.editId!, this.form.getRawValue()) : this.svc.create(createBody);
    req.subscribe({
      next: (res: any) => {
        this.saving = false; this.reload(); this.toast.success(this.t.translate('cons.msg.saved'));
        // À l'enregistrement : impression auto du reçu + de l'étiquette (× quantité, côté serveur).
        if (wasCreate && res?.id) {
          this.printReceipt(res.id);
          setTimeout(() => this.printLabel(res.id), 1200);
          // Après enregistrement + impression : on repart sur un formulaire VIDE,
          // prêt pour le colis suivant. On conserve seulement ce qui est propre à
          // la session : la station de départ (collée) et la caisse sélectionnée.
          this.editId = null;
          this.senderClient = { id_type: 'cni' };
          this.form.reset({ quantity: 1, payment_method: '', origin_point_id: this.baseOriginId });
          this.form.enable();
        } else {
          this.close('parcel-modal');
        }
      },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? this.t.translate('cons.msg.op_failed'); } });
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
        error: e => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? this.t.translate('cons.msg.op_failed_short')) });
      return;
    }
    // Aucun destinataire : on capture qui retire (destinataire ou mandataire).
    const name = this.pickupName.trim(), phone = this.pickupPhone.trim(), idn = this.pickupId.trim();
    if (!name || !phone || !idn) { this.toast.error(this.t.translate('cons.msg.name_phone_id_required')); return; }
    this.svc.pickup(this.pickupTarget.id, {
      picked_up_by: name, picked_up_phone: phone, picked_up_id_number: idn, picked_up_kind: this.pickupKind,
    }).subscribe({
      next: () => { this.pickupTarget = null; this.reload(); this.close('pickup-modal'); },
      error: e => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? this.t.translate('cons.msg.op_failed_short')) });
  }
  cancel(p: Parcel): void {
    if (!confirm(this.t.translate('cons.msg.confirm_cancel_parcel'))) return;
    this.svc.cancel(p.id).subscribe({ next: () => { this.reload(); this.toast.success(this.t.translate('cons.msg.parcel_cancelled')); }, error: e => this.toast.error(e?.error?.detail ?? this.t.translate('cons.msg.op_failed')) });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }

  // Impression via l'agent (imprimante mappée) avec repli navigateur.
  openNumbering(): void {
    this.numbering = null; this.numberingValue = null; this.numberingError = '';
    this.svc.getNumbering().subscribe({ next: n => this.numbering = n, error: () => {} });
  }
  saveNumbering(): void {
    if (!this.numberingValue || this.numberingSaving) return;
    this.numberingSaving = true; this.numberingError = '';
    this.svc.setNumbering(this.numberingValue).subscribe({
      next: n => { this.numbering = n; this.numberingValue = null; this.numberingSaving = false;
                   this.toast.success(this.t.translate('cons.msg.numbering_updated')); this.close('numbering-modal'); },
      error: e => { this.numberingSaving = false;
                    this.numberingError = e?.error?.detail ?? e?.error?.message ?? this.t.translate('cons.msg.op_failed_short'); } });
  }
  printReceipt(id: string): void { this.printRouter.print('recu_colis', id); }
  printLabel(id: string): void { this.printRouter.print('etiquette_colis', id); }
}