import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TripService } from '../../../services/voyages/trip.service';
import { CrewMemberService } from '../../../services/voyages/crew-member.service';
import { TripExpenseService } from '../../../services/voyages/trip-expense.service';
import { ExpenseTypeService } from '../../../services/voyages-config/expense-type.service';
import { Trip, TripSeat, TripCrew, TripExpense, EligibleVehicle } from '../../../models/voyages.models';
import { CrewMember } from '../../../models/crew.models';
import { ExpenseType } from '../../../models/voyages-config.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-voyages-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
  imports: [HasPermissionDirective, CommonModule, FormsModule, RouterModule],
})
export class VoyagesTripDetailComponent implements OnInit {
  id = '';
  trip: Trip | null = null;
  loading = true;
  seats: TripSeat[] = [];
  eligible: EligibleVehicle[] = [];
  members: CrewMember[] = [];
  selectedVehicle: string | null = null;
  assignWarnings: string[] = [];
  assignError = '';
  newMember: string | null = null;
  actionError = '';

  expenses: TripExpense[] = [];
  expenseTypes: ExpenseType[] = [];
  newExpType = ''; newExpAmount: number | null = null; expError = '';

  tbVehicles: { id: string; license_plate: string; model_name: string; seats: number }[] = [];
  tbOverflow: { id: string; number: string; code: string; free_seats: number }[] = [];
  tbSoldCount = 0; tbVehicle = ''; tbOverflowTrip = ''; tbNote = '';
  tbError = ''; tbBusy = false; tbHistory: any[] = [];

  selTickets: { id: string; seat: string; passenger_name: string }[] = [];
  selParcels: { id: string; reference: string; recipient_name: string }[] = [];
  selBaggage: { id: string; tag_number: string; owner_name: string }[] = [];
  selDestTrips: { id: string; number: string; code: string; free_seats: number }[] = [];
  selVehicles: { id: string; license_plate: string; model_name: string; seats: number }[] = [];
  selTicketIds = new Set<string>(); selParcelIds = new Set<string>(); selBaggageIds = new Set<string>();
  selDestKind: 'trip' | 'vehicle' = 'trip'; selDestTrip = ''; selDestVehicle = '';
  selNote = ''; selError = ''; selBusy = false;

  constructor(private svc: TripService, private crewSvc: CrewMemberService,
              private expSvc: TripExpenseService, private expTypeSvc: ExpenseTypeService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.crewSvc.list().subscribe(d => this.members = d.filter(m => m.is_active));
    this.expTypeSvc.list().subscribe(d => this.expenseTypes = d.filter(t => t.is_active));
    this.loadExpenses();
    this.reload();
  }

  loadExpenses(): void { this.expSvc.list(this.id).subscribe(d => this.expenses = d); }
  expTypeName(id: string): string { return this.expenseTypes.find(t => t.id === id)?.name ?? id; }
  addExpense(): void {
    if (!this.newExpType || !this.newExpAmount) return;
    this.expError = '';
    this.expSvc.create(this.id, { expense_type: this.newExpType, amount: this.newExpAmount }).subscribe({
      next: () => { this.newExpType = ''; this.newExpAmount = null; this.loadExpenses(); },
      error: e => this.expError = e?.error?.detail ?? 'Ajout impossible.' });
  }
  disburseExpense(e: TripExpense): void {
    this.expError = '';
    this.expSvc.disburse(this.id, e.id).subscribe({ next: () => this.loadExpenses(),
      error: err => this.expError = err?.error?.detail ?? 'Décaissement impossible.' });
  }
  removeExpense(e: TripExpense): void {
    if (!confirm('Supprimer cette dépense ?')) return;
    this.expSvc.remove(this.id, e.id).subscribe({ next: () => this.loadExpenses(),
      error: err => alert(err?.error?.detail ?? 'Suppression impossible.') });
  }

  reload(): void {
    this.loading = true;
    this.svc.get(this.id).subscribe({
      next: t => {
        this.trip = t; this.loading = false;
        this.loadSeats();
        this.loadTbHistory();
        if (!t.vehicle) this.svc.eligibleVehicles(this.id).subscribe(v => this.eligible = v);
      },
      error: () => this.loading = false,
    });
  }
  loadSeats(): void { this.svc.listSeats(this.id).subscribe(s => this.seats = s); }

  // ── seat grid helpers ──
  get maxRow(): number { return this.seats.reduce((m, s) => Math.max(m, s.row), 0); }
  get maxCol(): number { return this.seats.reduce((m, s) => Math.max(m, s.column), 0); }
  get rowsArr(): number[] { return Array.from({ length: this.maxRow }, (_, i) => i + 1); }
  get colsArr(): number[] { return Array.from({ length: this.maxCol }, (_, i) => i + 1); }
  seatAt(r: number, c: number): TripSeat | undefined { return this.seats.find(s => s.row === r && s.column === c); }
  get availableCount(): number { return this.seats.filter(s => s.status === 'available').length; }
  get sellableTotal(): number { return this.seats.filter(s => s.status !== 'blocked').length; }

  toggleSeat(seat?: TripSeat): void {
    if (!seat || !this.trip || this.trip.status === 'completed' || this.trip.status === 'cancelled') return;
    if (seat.status === 'available') this.svc.blockSeats(this.id, [seat.id]).subscribe(() => this.loadSeats());
    else if (seat.status === 'blocked') this.svc.unblockSeats(this.id, [seat.id]).subscribe(() => this.loadSeats());
  }

  // ── vehicle ──
  assign(): void {
    if (!this.selectedVehicle) return;
    this.assignError = ''; this.assignWarnings = [];
    this.svc.assignVehicle(this.id, this.selectedVehicle).subscribe({
      next: res => { this.assignWarnings = res.warnings || []; this.reload(); },
      error: e => { this.assignError = e?.error?.detail ?? 'Affectation impossible.'; },
    });
  }

  // ── crew ──
  addCrew(): void {
    if (!this.newMember) return;
    this.svc.addCrew(this.id, this.newMember).subscribe({ next: () => { this.newMember = null; this.reload(); }, error: e => alert(e?.error?.detail ?? 'Ajout impossible.') });
  }
  removeCrew(c: TripCrew): void { if (!confirm('Retirer ce membre ?')) return; this.svc.removeCrew(this.id, c.id).subscribe(() => this.reload()); }

  // ── lifecycle ──
  private run(obs: any): void {
    this.actionError = '';
    obs.subscribe({ next: () => this.reload(), error: (e: any) => { this.actionError = e?.error?.detail ?? 'Action impossible.'; } });
  }
  submit(): void { this.run(this.svc.submit(this.id)); }
  depart(): void { this.run(this.svc.depart(this.id)); }
  complete(): void { this.run(this.svc.complete(this.id)); }
  cancel(): void { if (confirm('Annuler ce voyage ?')) this.run(this.svc.cancel(this.id)); }
  suspend(): void { this.run(this.svc.suspend(this.id)); }
  resume(): void { this.run(this.svc.resume(this.id)); }
  clearDelay(): void { this.run(this.svc.clearDelay(this.id)); }
  markDelayed(): void {
    const reason = prompt('Motif du retard ?') ?? '';
    this.run(this.svc.markDelayed(this.id, { delay_reason: reason }));
  }

  get tbSelectedSeats(): number { return this.tbVehicles.find(v => v.id === this.tbVehicle)?.seats ?? 0; }
  get tbNeedsOverflow(): boolean { return this.tbVehicle !== '' && this.tbSelectedSeats < this.tbSoldCount; }

  openTransbord(): void {
    this.tbError = ''; this.tbVehicle = ''; this.tbOverflowTrip = ''; this.tbNote = '';
    this.svc.transbordEligible(this.id).subscribe({
      next: r => { this.tbVehicles = r.vehicles; this.tbOverflow = r.overflow_trips; this.tbSoldCount = r.sold_count; },
      error: () => {},
    });
  }
  loadTbHistory(): void { this.svc.transbordHistory(this.id).subscribe(h => this.tbHistory = h); }

  doTransbord(): void {
    if (!this.tbVehicle) { this.tbError = 'Choisissez un bus.'; return; }
    if (this.tbNeedsOverflow && !this.tbOverflowTrip) { this.tbError = 'Capacité insuffisante : choisissez un voyage de bascule.'; return; }
    this.tbBusy = true; this.tbError = '';
    this.svc.transbord(this.id, {
      vehicle_id: this.tbVehicle,
      overflow_trip_id: this.tbOverflowTrip || undefined,
      note: this.tbNote || undefined,
    }).subscribe({
      next: () => { this.tbBusy = false; this.reload(); this.loadTbHistory(); },
      error: e => { this.tbBusy = false; this.tbError = e?.error?.detail ?? 'Transbordement impossible.'; },
    });
  }

  openSelection(): void {
    this.selError = ''; this.selNote = ''; this.selDestKind = 'trip'; this.selDestTrip = ''; this.selDestVehicle = '';
    this.selTicketIds.clear(); this.selParcelIds.clear(); this.selBaggageIds.clear();
    this.svc.selectionOptions(this.id).subscribe({
      next: r => {
        this.selTickets = r.tickets; this.selParcels = r.parcels; this.selBaggage = r.baggage;
        this.selDestTrips = r.dest_trips; this.selVehicles = r.vehicles;
      },
      error: () => {},
    });
  }
  toggleSel(set: Set<string>, id: string): void { set.has(id) ? set.delete(id) : set.add(id); }

  doSelection(): void {
    const total = this.selTicketIds.size + this.selParcelIds.size + this.selBaggageIds.size;
    if (!total) { this.selError = 'Sélectionnez au moins un élément.'; return; }
    const destTrip = this.selDestKind === 'trip' ? this.selDestTrip : '';
    const destVehicle = this.selDestKind === 'vehicle' ? this.selDestVehicle : '';
    if (!destTrip && !destVehicle) { this.selError = 'Choisissez une destination.'; return; }
    this.selBusy = true; this.selError = '';
    this.svc.transbordSelection(this.id, {
      ticket_ids: [...this.selTicketIds], parcel_ids: [...this.selParcelIds], baggage_ids: [...this.selBaggageIds],
      dest_trip_id: destTrip || undefined, dest_vehicle_id: destVehicle || undefined, note: this.selNote || undefined,
    }).subscribe({
      next: () => { this.selBusy = false; this.reload(); this.loadTbHistory(); },
      error: e => { this.selBusy = false; this.selError = e?.error?.detail ?? 'Transbordement impossible.'; },
    });
  }
}
