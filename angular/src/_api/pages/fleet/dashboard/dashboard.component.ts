import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { FleetStats, FleetAlerts } from '../../../models/fleet.models';

@Component({
  selector: 'app-fleet-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule],
})
export class FleetDashboardComponent implements OnInit {

  stats:  FleetStats  | null = null;
  alerts: FleetAlerts | null = null;
  loading = true;
  alertDays = 30;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.vehicleService.fleetStats().subscribe({
      next: s => { this.stats = s; this.checkDone(); },
      error: () => this.checkDone(),
    });
    this.vehicleService.fleetAlerts(this.alertDays).subscribe({
      next: a => { this.alerts = a; this.checkDone(); },
      error: () => this.checkDone(),
    });
  }

  private _done = 0;
  private checkDone(): void {
    this._done++;
    if (this._done >= 2) { this.loading = false; this._done = 0; }
  }

  get totalAlerts(): number {
    if (!this.alerts) return 0;
    return this.alerts.expiring_contracts.length
      + this.alerts.expiring_documents.length
      + this.alerts.overdue_maintenance.length;
  }

  alertClass(days: number): string {
    if (days < 0)  return 'bg-outline-danger';
    if (days <= 7) return 'bg-outline-warning';
    return 'bg-outline-info';
  }
}
