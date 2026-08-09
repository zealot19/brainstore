import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TripService } from '../../../services/voyages/trip.service';
import { ExternalDriverService } from '../../../services/fleet/external-driver.service';
import { Trip, TripSeat, TripCrew, EligibleVehicle } from '../../../models/voyages.models';
import { ExternalDriver } from '../../../models/fleet.models';

@Component({
  selector: 'app-voyages-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class VoyagesTripDetailComponent implements OnInit {
  id = '';
  trip: Trip | null = null;
  loading = true;
  seats: TripSeat[] = [];
  eligible: EligibleVehicle[] = [];
  drivers: ExternalDriver[] = [];
  selectedVehicle: string | null = null;
  assignWarnings: string[] = [];
  assignError = '';
  newDriver: string | null = null;
  newRole = 'DRIVER';
  actionError = '';

  tbVehicles: { id: string; license_plate: string; model_name: string; seats: number }[] = [];
  tbOverflow: { id: string; number: string; code: string; free_seats: number }[] = [];
  tbSoldCount = 0; tbVehicle = ''; tbOverflowTrip = ''; tbNote = '';
  tbError = ''; tbBusy = false; tbHistory: any[] = [];

  roles = [{ v: 'DRIVER', l: 'Chauffeur' }, { v: 'CONVOYEUR', l: 'Convoyeur' }, { v: 'CONTROLEUR', l: 'Contrôleur' }];

  constructor(private svc: TripService, private driverSvc: ExternalDriverService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.driverSvc.list().subscribe(d => this.drivers = d);
    this.reload();
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
    if (!this.newDriver) return;
    this.svc.addCrew(this.id, this.newDriver, this.newRole).subscribe({ next: () => { this.newDriver = null; this.reload(); }, error: e => alert(e?.error?.detail ?? 'Ajout impossible.') });
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
}
