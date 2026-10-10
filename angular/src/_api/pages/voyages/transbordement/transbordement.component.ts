import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { TripService } from '../../../services/voyages/trip.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-vt-transbordement',
  standalone: true,
  templateUrl: './transbordement.component.html',
  imports: [CommonModule, FormsModule, TranslocoModule],
})
export class VtTransbordementComponent implements OnInit {
  private trips = inject(TripService);
  private vehicles = inject(VehicleService);
  private toast = inject(ToastService);

  tab: 'vehicle' | 'general' = 'vehicle';
  busy = false; error = '';

  // Par véhicule
  vehicleList: any[] = [];
  srcVehicle = ''; targetVehicle = ''; vReason = '';
  vEligible: { trips: any[]; target_vehicles: any[] } | null = null;

  // Général
  tripList: any[] = [];
  srcTrip = ''; gReason = ''; gDestTrip = '';
  gOptions: any = null;
  gTickets = new Set<string>(); gParcels = new Set<string>(); gBaggage = new Set<string>();

  ngOnInit(): void {
    this.vehicles.list({ is_active: true }).subscribe({ next: d => this.vehicleList = d as any });
    this.trips.list({}).subscribe({ next: (d: any) => this.tripList = d.results ?? d.data ?? d });
  }

  // ── Par véhicule ──
  onSrcVehicle(): void {
    this.vEligible = null; this.targetVehicle = ''; this.error = '';
    if (!this.srcVehicle) return;
    this.trips.transbordVehicleEligible(this.srcVehicle).subscribe({
      next: r => this.vEligible = r, error: e => this.error = e?.error?.detail ?? 'Chargement impossible.' });
  }
  doVehicle(): void {
    if (!this.srcVehicle || !this.targetVehicle) { this.error = 'Choisissez les véhicules.'; return; }
    if (!this.vReason.trim()) { this.error = 'Le motif est obligatoire.'; return; }
    this.busy = true; this.error = '';
    this.trips.transbordVehicle(this.srcVehicle, { to_vehicle_id: this.targetVehicle, reason: this.vReason }).subscribe({
      next: () => { this.busy = false; this.toast.success('Transbordement effectué.'); this.srcVehicle = ''; this.vEligible = null; this.vReason = ''; },
      error: e => { this.busy = false; this.error = e?.error?.detail ?? 'Transbordement impossible.'; } });
  }

  // ── Général ──
  onSrcTrip(): void {
    this.gOptions = null; this.gDestTrip = ''; this.error = '';
    this.gTickets.clear(); this.gParcels.clear(); this.gBaggage.clear();
    if (!this.srcTrip) return;
    this.trips.selectionOptions(this.srcTrip).subscribe({
      next: r => this.gOptions = r, error: e => this.error = e?.error?.detail ?? 'Chargement impossible.' });
  }
  toggle(set: Set<string>, id: string): void { set.has(id) ? set.delete(id) : set.add(id); }
  doGeneral(): void {
    const total = this.gTickets.size + this.gParcels.size + this.gBaggage.size;
    if (!this.srcTrip || !this.gDestTrip) { this.error = 'Choisissez voyage source et destination.'; return; }
    if (!total) { this.error = 'Sélectionnez au moins un élément.'; return; }
    if (!this.gReason.trim()) { this.error = 'Le motif est obligatoire.'; return; }
    this.busy = true; this.error = '';
    this.trips.transbordSelection(this.srcTrip, {
      ticket_ids: [...this.gTickets], parcel_ids: [...this.gParcels], baggage_ids: [...this.gBaggage],
      dest_trip_id: this.gDestTrip, reason: this.gReason,
    }).subscribe({
      next: () => { this.busy = false; this.toast.success('Transbordement effectué.'); this.onSrcTrip(); this.gReason = ''; },
      error: e => { this.busy = false; this.error = e?.error?.detail ?? 'Transbordement impossible.'; } });
  }
}
