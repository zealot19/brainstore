import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaggageService } from '../../../services/voyages-consignment/baggage.service';
import { BookingService } from '../../../services/voyages-booking/booking.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { TripService } from '../../../services/voyages/trip.service';
import { Baggage, BaggageCreate } from '../../../models/voyages-consignment.models';
import { TripOption } from '../../../models/voyages-booking.models';
import { ConsignmentType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { SearchableSelectComponent } from '../../shared/searchable-select/searchable-select.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-vcg-baggage',
  templateUrl: './baggage.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, SearchableSelectComponent],
})
export class VcgBaggageComponent implements OnInit {
  rows: Baggage[] = []; loading = false; q = ''; statusFilter = '';
  tripFilter = ''; typeFilter = ''; dateField = 'created'; dateFrom = ''; dateTo = '';
  filterTrips: { id: string; number?: string; code?: string }[] = [];
  trips: TripOption[] = []; types: ConsignmentType[] = [];
  ticketOptions: { id: string; label: string }[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  selected = new Set<string>();
  deliverTarget: Baggage | null = null; deliverComment = '';

  constructor(private svc: BaggageService, private booking: BookingService,
              private ctSvc: ConsignmentTypeService, private tripSvc: TripService,
              private fb: FormBuilder, private route: ActivatedRoute) {}

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
    }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

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

  openCreate(): void {
    this.editId = null; this.errorMsg = '';
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
    this.saving = true; this.errorMsg = '';
    const v = this.form.getRawValue() as BaggageCreate;
    const req = this.isEdit ? this.svc.edit(this.editId!, v) : this.svc.create(v);
    req.subscribe({
      next: () => { this.saving = false; this.reload(); this.close('baggage-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
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
      next: r => { if (r.errors?.length) alert(r.errors.join('\n')); this.reload(); },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }

  askDeliver(b: Baggage): void { this.deliverTarget = b; this.deliverComment = ''; }
  doDeliver(): void {
    if (!this.deliverTarget) return;
    this.svc.deliver(this.deliverTarget.id, { comment: this.deliverComment }).subscribe({
      next: () => { this.deliverTarget = null; this.reload(); this.close('deliver-modal'); },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  cancel(b: Baggage): void {
    if (!confirm('Annuler ce bagage ?')) return;
    this.svc.cancel(b.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }

  private openAndPrint(html: string): void {
    const w = window.open('', '_blank');
    if (!w) { return; }
    w.document.write(html);
    w.document.close();
    setTimeout(() => w.print(), 300);
  }
  printTicket(id: string): void { this.svc.ticket(id).subscribe({ next: r => this.openAndPrint(r.html), error: () => {} }); }
  printLabel(id: string): void { this.svc.label(id).subscribe({ next: r => this.openAndPrint(r.html), error: () => {} }); }
}
