import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { TripService } from '../../../services/voyages/trip.service';
import { PaymentMethodService } from '../../../services/treasury/payment-method.service';
import { Baggage, BaggageCreate } from '../../../models/voyages-consignment.models';
import { TripOption, PassengerSpec } from '../../../models/voyages-booking.models';
import { ConsignmentType } from '../../../models/voyages-config.models';
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
  selector: 'app-vcg-baggage',
  templateUrl: './baggage.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, SearchableSelectComponent, ClientFieldsComponent, TranslocoModule],
})
export class VcgBaggageComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Baggage[] = []; loading = false; q = ''; statusFilter = '';
  tripFilter = ''; typeFilter = ''; dateField = 'created'; dateFrom = ''; dateTo = '';
  showArchived = false;
  filterTrips: { id: string; number?: string; code?: string }[] = [];
  trips: TripOption[] = []; types: ConsignmentType[] = [];
  ticketOptions: { id: string; label: string }[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  selected = new Set<string>();
  deliverTarget: Baggage | null = null; deliverComment = '';

  paymentMethods: any[] = [];
  constructor(private svc: BaggageService, private booking: BookingService,
              private ctSvc: ConsignmentTypeService, private tripSvc: TripService,
              private fb: FormBuilder, private route: ActivatedRoute,
              private pmSvc: PaymentMethodService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      trip_id: [null, Validators.required], ticket_id: [null],
      sender_name: [''], sender_phone: [''], civility: [''], id_type: ['cni'], id_number: [''],
      birth_date: [null], email: [''],
      consignment_type_id: [null], description: [''], weight_kg: [null], quantity: [1], declared_value: [1],
      amount_due: [0, [Validators.required, Validators.min(0)]], amount_received: [null], payment_method: [''],
    });
    this.booking.bookableTrips().subscribe(t => this.trips = t);
    this.ctSvc.list().subscribe(d => this.types = d);
    this.tripSvc.list().subscribe(d => this.filterTrips = d as any);
    this.pmSvc.list(true).subscribe(d => this.paymentMethods = d);
    this.reload();
    // Ouverture directe du formulaire depuis le raccourci "Nouveau bagage" (navbar) : ?new=1
    this.route.queryParams.subscribe(q => {
      if (q['new']) setTimeout(() => document.querySelector<HTMLElement>('[data-bs-target="#baggage-modal"]')?.click(), 150);
    });
  }

  clearFilters(): void {
    this.statusFilter = this.q = this.tripFilter = this.typeFilter = this.dateFrom = this.dateTo = '';
    this.dateField = 'created';
    this.reload();
  }

  reload(): void {
    this.loading = true; this.selected.clear();
    this.svc.list({
      status: this.statusFilter || undefined, q: this.q || undefined,
      trip: this.tripFilter || undefined, consignment_type: this.typeFilter || undefined,
      date_field: this.dateField, date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
      include_archived: this.showArchived ? 1 : undefined,
    }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  toggleArchived(): void { this.showArchived = !this.showArchived; this.reload(); }

  tripLabel = (t: any): string =>
    `${t.number} · ${t.origin_name} → ${t.destination_name} · ${new Date(t.scheduled_departure).toLocaleString('fr-FR')}`;

  statusClass(s: string): string {
    return { checked_in: 'bg-warning', loaded: 'bg-info', delivered: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  get change(): number {
    const r = +this.form.value.amount_received || 0; const d = +this.form.value.amount_due || 0;
    return r - d > 0 ? r - d : 0;
  }
  get isEdit(): boolean { return this.editId != null; }
  get hasTicket(): boolean { return !!this.form.value.ticket_id; }

  /** Charge les passagers (billets) du voyage choisi pour le champ facultatif. */
  onTripChange(): void {
    this.ticketOptions = []; this.form.patchValue({ ticket_id: null });
    const tripId = this.form.value.trip_id;
    if (!tripId) return;
    this.booking.list({ trip: tripId }).subscribe(bookings => {
      const opts: { id: string; label: string }[] = [];
      bookings.forEach(b => (b.tickets ?? []).forEach(t => {
        if (t.trip === tripId) opts.push({ id: t.id, label: `${t.passenger_name} · ${t.number}` });
      }));
      this.ticketOptions = opts;
    });
  }

  // Client (création, bagage sans billet) — piloté par le fieldset partagé app-client-fields
  senderClient: PassengerSpec = { id_type: 'cni' };

  openCreate(): void {
    this.editId = null; this.errorMsg = '';
    this.senderClient = { id_type: 'cni' };
    // Réinitialiser AVEC tous les champs : form.reset({partiel}) met les contrôles non listés
    // à null, or les CharField du backend refusent null.
    this.form.reset({
      trip_id: null, ticket_id: null,
      sender_name: '', sender_phone: '', civility: '', id_type: 'cni', id_number: '',
      birth_date: null, email: '',
      consignment_type_id: null, description: '', weight_kg: null, quantity: 1, declared_value: 1,
      amount_due: 0, amount_received: null, payment_method: '',
    });
    this.form.enable(); this.ticketOptions = [];
  }
  openEdit(b: Baggage): void {
    this.editId = b.id; this.errorMsg = '';
    this.form.reset({
      trip_id: b.trip, ticket_id: b.ticket, sender_name: b.sender_name, sender_phone: b.sender_phone,
      civility: b.civility, id_type: b.id_type || 'cni', id_number: b.id_number, birth_date: b.birth_date,
      email: b.email, consignment_type_id: b.consignment_type, description: b.description,
      weight_kg: b.weight_kg, quantity: b.quantity, declared_value: b.declared_value,
      amount_due: b.amount_due, amount_received: b.amount_received, payment_method: b.payment_method,
    });
    // À l'édition, le voyage / le billet / l'encaissement sont figés (comme le legacy).
    ['trip_id', 'ticket_id', 'amount_due', 'amount_received', 'payment_method']
      .forEach(k => this.form.get(k)?.disable());
  }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    const v = this.form.getRawValue() as any;
    // Création d'un bagage sans billet : le client vient du fieldset partagé.
    if (!this.isEdit && !v.ticket_id) {
      if (!this.senderClient.name) { this.errorMsg = 'Client requis (nom).'; return; }
      v.sender_name = this.senderClient.name; v.sender_phone = this.senderClient.phone;
      v.civility = this.senderClient.civility; v.id_type = this.senderClient.id_type;
      v.id_number = this.senderClient.id_number; v.birth_date = this.senderClient.birth_date || null;
      v.email = this.senderClient.email || '';
    }
    this.saving = true; this.errorMsg = '';
    const req = this.isEdit ? this.svc.edit(this.editId!, v as BaggageCreate) : this.svc.create(v as BaggageCreate);
    req.subscribe({
      next: () => { this.saving = false; this.reload(); this.toast.success('Enregistré.'); this.close('baggage-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }

  // Sélection multiple + actions groupées
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggleSel(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get selectable(): Baggage[] { return this.rows.filter(r => r.status !== 'delivered' && r.status !== 'cancelled'); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulk(action: 'load' | 'deliver' | 'cancel'): void {
    if (!this.selected.size) return;
    if (action === 'cancel' && !confirm(`Annuler ${this.selected.size} bagage(s) ?`)) return;
    this.svc.bulk([...this.selected], action).subscribe({
      next: r => { if (r.errors?.length) this.toast.error(r.errors.join('\n')); this.reload(); },
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  askDeliver(b: Baggage): void { this.deliverTarget = b; this.deliverComment = ''; }
  doDeliver(): void {
    if (!this.deliverTarget) return;
    this.svc.deliver(this.deliverTarget.id, { comment: this.deliverComment }).subscribe({
      next: () => { this.deliverTarget = null; this.reload(); this.close('deliver-modal'); },
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  cancel(b: Baggage): void {
    if (!confirm('Annuler ce bagage ?')) return;
    this.svc.cancel(b.id).subscribe({ next: () => { this.reload(); this.toast.success('Bagage annulé.'); }, error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }

  private openAndPrint(html: string): void { printHtml(html); }
  printTicket(id: string): void { this.svc.ticket(id).subscribe({ next: r => this.openAndPrint(r.html), error: () => {} }); }
  printLabel(id: string): void { this.svc.label(id).subscribe({ next: r => this.openAndPrint(r.html), error: () => {} }); }
}