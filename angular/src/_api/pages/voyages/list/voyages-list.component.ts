import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from '../../../services/voyages/trip.service';
import { RouteService } from '../../../services/voyages-config/route.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { ServicePatternService } from '../../../services/voyages-config/service-pattern.service';
import { SeatingPlanService } from '../../../services/voyages-config/seating-plan.service';
import { VoyageTypeService } from '../../../services/voyages-config/voyage-type.service';
import { CrewMemberService } from '../../../services/voyages/crew-member.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { Trip } from '../../../models/voyages.models';
import { Route, FareClass, ServicePattern, VoyageType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { SearchableSelectComponent } from '../../shared/searchable-select/searchable-select.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-voyages-list',
  templateUrl: './voyages-list.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, SearchableSelectComponent, TranslocoModule],
})
export class VoyagesListComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  rows: Trip[] = []; filtered: Trip[] = []; loading = true; filterStatus = '';
  filterRoute = ''; filterVehicle = ''; dateField = 'departure'; dateFrom = ''; dateTo = '';
  showArchived = false;
  vehicles: { id: string; license_plate: string }[] = [];
  seatingPlans: { id: string; code: string; name: string; total_seats: number }[] = [];
  crewMembers: { id: string; full_name: string; member_type_name: string }[] = [];
  routes: Route[] = []; fareClasses: FareClass[] = []; patterns: ServicePattern[] = [];
  voyageTypes: VoyageType[] = [];
  form!: FormGroup; saving = false; errorMsg = '';

  // Équipage sélectionné (chips avec suppression), comme sur le détail.
  selectedCrew: { id: string; label: string }[] = [];
  crewPick: string | null = null;

  statuses = [
    { value: 'draft',     label: 'Brouillon',  css: 'bg-secondary' },
    { value: 'pending',   label: 'En attente', css: 'bg-info'      },
    { value: 'departed',  label: 'Parti',      css: 'bg-primary'   },
    { value: 'completed', label: 'Terminé',    css: 'bg-success'   },
    { value: 'suspended', label: 'Suspendu',   css: 'bg-warning'   },
    { value: 'cancelled', label: 'Annulé',     css: 'bg-danger'    },
  ];

  constructor(private svc: TripService, private routeSvc: RouteService, private fcSvc: FareClassService,
              private spSvc: ServicePatternService, private vehicleSvc: VehicleService,
              private planSvc: SeatingPlanService, private crewSvc: CrewMemberService,
              private vtSvc: VoyageTypeService, private toast: ToastService,
              private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      route_id: [null, Validators.required], service_pattern_id: [null], fare_class_id: [null, Validators.required],
      service_date: [''],
      scheduled_departure: ['', Validators.required], scheduled_arrival: ['', Validators.required],
      code: [''], notes: [''], seat_assignment_mode: ['manual'], auto_expenses: [true],
      seating_plan_id: [null, Validators.required], vehicle_id: [null], voyage_type_id: [null],
      max_reservations: [null], blocked_seats_count: [0], crew_member_ids: [[]],
    });
    this.routeSvc.list().subscribe(d => this.routes = d);
    this.fcSvc.list().subscribe(d => this.fareClasses = d);
    this.spSvc.list().subscribe(d => this.patterns = d);
    this.vtSvc.list().subscribe(d => { this.voyageTypes = d; this._presetDefaultType(); });
    this.vehicleSvc.list().subscribe(d => this.vehicles = d);
    this.planSvc.list().subscribe(d => this.seatingPlans = d as any);
    this.crewSvc.list().subscribe(d => this.crewMembers = d as any);
    // M12 : le quota de réservation est éditable, défauté aux places vendables (total − bloquées).
    const resetQuotaDefault = () => {
      const p = this.seatingPlans.find(x => x.id === this.form.get('seating_plan_id')!.value);
      const blocked = +this.form.get('blocked_seats_count')!.value || 0;
      this.form.get('max_reservations')!.setValue(p ? Math.max(0, p.total_seats - blocked) : null);
    };
    this.form.get('seating_plan_id')!.valueChanges.subscribe(resetQuotaDefault);
    this.form.get('blocked_seats_count')!.valueChanges.subscribe(resetQuotaDefault);
    this.load();
    // Ouverture directe du formulaire depuis le raccourci "Nouveau voyage" (sidebar) : ?new=1
    this.route.queryParams.subscribe(q => {
      if (q['new']) setTimeout(() => document.querySelector<HTMLElement>('[data-bs-target="#trip-modal"]')?.click(), 150);
    });
  }
  load(): void {
    this.loading = true;
    this.svc.list({
      status: this.filterStatus || undefined, route: this.filterRoute || undefined,
      vehicle: this.filterVehicle || undefined, date_field: this.dateField,
      date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
      include_archived: this.showArchived ? 1 : undefined,
    }).subscribe({ next: d => { this.rows = d; this.filtered = d; this.loading = false; },
                   error: () => this.loading = false });
  }
  toggleArchived(): void { this.showArchived = !this.showArchived; this.load(); }
  clearFilters(): void {
    this.filterStatus = this.filterRoute = this.filterVehicle = this.dateFrom = this.dateTo = '';
    this.dateField = 'departure';
    this.load();
  }
  statusCss(s: string): string { return this.statuses.find(x => x.value === s)?.css ?? ''; }
  statusLabel(s: string): string { return this.statuses.find(x => x.value === s)?.label ?? s; }

  private readonly manualFields = ['route_id', 'fare_class_id', 'scheduled_departure', 'scheduled_arrival'];

  get selectedPattern(): ServicePattern | undefined {
    return this.patterns.find(x => x.id === this.form.value.service_pattern_id);
  }
  get patternMode(): boolean { return !!this.form.value.service_pattern_id; }

  /** Bascule les validateurs : en mode planification, seule la date est requise. */
  onPatternChange(): void {
    const p = this.selectedPattern;
    if (p) {
      this.manualFields.forEach(c => { this.form.get(c)?.clearValidators(); this.form.get(c)?.updateValueAndValidity(); });
      this.form.get('service_date')?.setValidators(Validators.required);
      this.form.patchValue({ route_id: p.route, fare_class_id: p.fare_class });
    } else {
      this.manualFields.forEach(c => { this.form.get(c)?.setValidators(Validators.required); this.form.get(c)?.updateValueAndValidity(); });
      this.form.get('service_date')?.clearValidators();
    }
    this.form.get('service_date')?.updateValueAndValidity();
  }

  private _presetDefaultType(): void {
    const def = this.voyageTypes.find(t => t.is_default);
    if (def && !this.form.get('voyage_type_id')!.value) this.form.patchValue({ voyage_type_id: def.id });
  }
  openCreate(): void {
    this.errorMsg = ''; this.selectedCrew = []; this.crewPick = null;
    this.form.reset({ route_id: null, service_pattern_id: null, fare_class_id: null, service_date: '',
                      scheduled_departure: '', scheduled_arrival: '', code: '', notes: '', seat_assignment_mode: 'manual', auto_expenses: true,
                      seating_plan_id: null, vehicle_id: null, voyage_type_id: null,
                      max_reservations: null, blocked_seats_count: 0, crew_member_ids: [] });
    this._presetDefaultType();  // présélectionne le type par défaut (Départ)
    this.onPatternChange();  // restaure les validateurs du mode manuel
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const f = this.form.value;
    const payload = f.service_pattern_id
      ? { service_pattern_id: f.service_pattern_id, service_date: f.service_date, code: f.code, notes: f.notes,
          seat_assignment_mode: f.seat_assignment_mode, auto_expenses: f.auto_expenses,
          seating_plan_id: f.seating_plan_id, vehicle_id: f.vehicle_id, voyage_type_id: f.voyage_type_id,
          max_reservations: f.max_reservations, blocked_seats_count: f.blocked_seats_count || 0, crew_member_ids: this.selectedCrew.map(c => c.id) }
      : { route_id: f.route_id, fare_class_id: f.fare_class_id,
          scheduled_departure: f.scheduled_departure, scheduled_arrival: f.scheduled_arrival,
          code: f.code, notes: f.notes, service_pattern_id: null,
          seat_assignment_mode: f.seat_assignment_mode, auto_expenses: f.auto_expenses,
          seating_plan_id: f.seating_plan_id, vehicle_id: f.vehicle_id, voyage_type_id: f.voyage_type_id,
          max_reservations: f.max_reservations, blocked_seats_count: f.blocked_seats_count || 0, crew_member_ids: this.selectedCrew.map(c => c.id) };
    this.svc.create(payload).subscribe({
      next: t => { this.saving = false; this.close(); this.router.navigate(['/voyages/trip', t.id]); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }
  // ── Places vendables = total du plan − places bloquées (M12) ──
  get sellableSeats(): number {
    const plan = this.seatingPlans.find(p => p.id === this.form?.get('seating_plan_id')?.value);
    const total = plan ? plan.total_seats : 0;
    const blocked = +this.form?.get('blocked_seats_count')?.value || 0;
    return Math.max(0, total - blocked);
  }

  // ── Équipage (searchable select + suppression) ──
  get availableCrewOptions(): { id: string; label: string }[] {
    const taken = new Set(this.selectedCrew.map(c => c.id));
    return this.crewMembers.filter(m => !taken.has(m.id))
      .map(m => ({ id: m.id, label: m.member_type_name ? `${m.full_name} (${m.member_type_name})` : m.full_name }));
  }
  onCrewPick(id: string | null): void {
    if (!id) return;
    const m = this.crewMembers.find(x => x.id === id);
    if (m && !this.selectedCrew.some(c => c.id === id)) {
      this.selectedCrew.push({ id, label: m.member_type_name ? `${m.full_name} (${m.member_type_name})` : m.full_name });
    }
    this.crewPick = null;
  }
  removeCrew(id: string): void { this.selectedCrew = this.selectedCrew.filter(c => c.id !== id); }

  open(t: Trip): void { this.router.navigate(['/voyages/trip', t.id]); }
  roadmap(t: Trip): void { this.router.navigate(['/voyages/roadmap', t.id]); }

  // ── Actions de statut (depuis la liste, sans passer par le détail) ──
  private act(obs: any, msg = 'Fait.'): void {
    obs.subscribe({ next: () => { this.load(); this.toast.success(msg); },
                    error: (e: any) => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué.") });
  }
  submitTrip(t: Trip): void { this.act(this.svc.submit(t.id), 'Voyage soumis.'); }
  departTrip(t: Trip): void { if (confirm('Démarrer ce voyage ?')) this.act(this.svc.depart(t.id), 'Voyage démarré.'); }
  suspendTrip(t: Trip): void { this.act(this.svc.suspend(t.id), 'Voyage suspendu.'); }
  resumeTrip(t: Trip): void { this.act(this.svc.resume(t.id), 'Voyage repris.'); }
  completeTrip(t: Trip): void { if (confirm('Terminer ce voyage ?')) this.act(this.svc.complete(t.id), 'Voyage terminé.'); }
  cancelTrip(t: Trip): void { if (confirm('Annuler ce voyage ?')) this.act(this.svc.cancel(t.id), 'Voyage annulé.'); }
  markDelayed(t: Trip): void {
    const reason = prompt('Motif du retard (optionnel) :') ?? '';
    this.act(this.svc.markDelayed(t.id, { delay_reason: reason }), 'Marqué en retard.');
  }
  clearDelay(t: Trip): void { this.act(this.svc.clearDelay(t.id), 'Retard levé.'); }
  deleteTrip(t: Trip): void { if (confirm('Supprimer ce brouillon ?')) this.act(this.svc.delete(t.id), 'Supprimé.'); }

  // ── Navigation contextuelle ──
  goExpenses(t: Trip): void { this.router.navigate(['/treasury/expenses-voyage'], { queryParams: { trip: t.id } }); }
  goReservations(t: Trip): void { this.router.navigate(['/voyages-booking/bookings'], { queryParams: { trip: t.id } }); }

  private close(): void { document.getElementById('trip-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
