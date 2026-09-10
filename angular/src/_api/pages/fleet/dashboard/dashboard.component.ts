import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { FleetStats, FleetAlerts } from '../../../models/fleet.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-fleet-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [HasPermissionDirective, CommonModule, TranslocoModule, NgApexchartsModule],
})
export class FleetDashboardComponent implements OnInit {
  private t = inject(TranslocoService);

  stats:  FleetStats  | null = null;
  alerts: FleetAlerts | null = null;
  loading = true;
  alertDays = 30;
  statusChart: any = null;

  constructor(private vehicleService: VehicleService) {}

  private buildStatusChart(s: any): void {
    const by = s?.by_status || {};
    const entries = Object.entries(by).filter(([, v]) => Number(v) > 0);
    if (!entries.length) return;
    const known: Record<string, string> = {
      available: 'fleet.dash.available',
      on_mission: 'fleet.dash.on_mission',
      in_maintenance: 'fleet.dash.in_maintenance',
    };
    this.statusChart = {
      series: entries.map(([, v]) => Number(v)),
      labels: entries.map(([k]) => known[k] ? this.t.translate(known[k]) : k),
      chart: { type: 'donut', height: 300, fontFamily: 'inherit' },
      colors: ['#1a9e5f', '#0068B8', '#e08a00', '#6c757d', '#d64545', '#092C4C'],
      legend: { position: 'bottom' },
      dataLabels: { enabled: true, formatter: (v: number) => `${v.toFixed(0)}%` },
      plotOptions: { pie: { donut: { size: '62%' } } },
      stroke: { width: 0 },
    };
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.vehicleService.fleetStats().subscribe({
      next: s => { this.stats = s; this.buildStatusChart(s); this.checkDone(); },
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
