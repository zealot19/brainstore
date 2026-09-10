import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { PermissionService } from '../../../services/auth/permission.service';
import { AuthService } from '../../../services/auth/auth.service';
import { HasModuleDirective } from '../../../../app/shared/directives/has-module.directive';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  templateUrl: './home-dashboard.component.html',
  imports: [CommonModule, HasModuleDirective, TranslocoModule, NgApexchartsModule],
})
export class HomeDashboardComponent implements OnInit {
  private dash = inject(DashboardService);
  private perm = inject(PermissionService);
  private auth = inject(AuthService);
  private t = inject(TranslocoService);

  treasury: any = null; trips: any = null; bookings: any = null; parcels: any = null; fleet: any = null;
  recentBookings: any[] = []; recentMovements: any[] = [];
  today = new Date();
  userName = '';

  bookingChart: any = null;   // combo colonnes (réservations) + ligne (recette)
  treasuryChart: any = null;  // aires recettes vs dépenses

  private has(code: string): boolean { return this.perm.hasModule(code); }
  private arr(r: any): any[] { return Array.isArray(r) ? r : (r?.data ?? r?.results ?? []); }
  private dm(iso: string): string { const [ , m, d] = iso.split('-'); return `${d}/${m}`; }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(u => {
      this.userName = u?.full_name || [u?.first_name, u?.last_name].filter(Boolean).join(' ') || '';
    });

    if (this.has('treasury')) {
      this.dash.treasury().subscribe({ next: d => this.treasury = d, error: () => {} });
      this.dash.recentMovements().subscribe({ next: d => this.recentMovements = this.arr(d).slice(0, 6), error: () => {} });
      this.dash.treasurySeries(14).subscribe({ next: d => this.buildTreasuryChart(this.arr(d)), error: () => {} });
    }
    if (this.has('voyage')) {
      this.dash.trips().subscribe({ next: d => this.trips = d, error: () => {} });
      this.dash.bookings().subscribe({ next: d => this.bookings = d, error: () => {} });
      this.dash.recentBookings().subscribe({ next: d => this.recentBookings = this.arr(d).slice(0, 6), error: () => {} });
      this.dash.bookingSeries(14).subscribe({ next: d => this.buildBookingChart(this.arr(d)), error: () => {} });
    }
    if (this.has('colis')) this.dash.parcels().subscribe({ next: d => this.parcels = d, error: () => {} });
    if (this.has('fleet')) this.dash.fleet().subscribe({ next: d => this.fleet = d, error: () => {} });
  }

  private buildBookingChart(rows: any[]): void {
    const cats = rows.map(r => this.dm(r.date));
    this.bookingChart = {
      series: [
        { name: this.t.translate('dash.s_bookings'), type: 'column', data: rows.map(r => r.bookings) },
        { name: this.t.translate('dash.s_revenue'),  type: 'line',   data: rows.map(r => Math.round(r.revenue)) },
      ],
      chart: { height: 300, type: 'line', toolbar: { show: false }, fontFamily: 'inherit', stacked: false },
      colors: ['#0068B8', '#1a9e5f'],
      stroke: { width: [0, 3], curve: 'smooth' },
      plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
      dataLabels: { enabled: false },
      xaxis: { categories: cats, labels: { style: { fontSize: '11px' } } },
      yaxis: [
        { seriesName: this.t.translate('dash.s_bookings'), labels: { formatter: (v: number) => `${Math.round(v)}` } },
        { opposite: true, seriesName: this.t.translate('dash.s_revenue'), labels: { formatter: (v: number) => this.short(v) } },
      ],
      legend: { position: 'top', horizontalAlign: 'right' },
      grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
      tooltip: { shared: true, intersect: false },
    };
  }

  private buildTreasuryChart(rows: any[]): void {
    const cats = rows.map(r => this.dm(r.date));
    this.treasuryChart = {
      series: [
        { name: this.t.translate('dash.s_income'),  data: rows.map(r => Math.round(r.income)) },
        { name: this.t.translate('dash.s_expense'), data: rows.map(r => Math.round(r.expense)) },
      ],
      chart: { height: 300, type: 'area', toolbar: { show: false }, fontFamily: 'inherit' },
      colors: ['#1a9e5f', '#d64545'],
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
      dataLabels: { enabled: false },
      xaxis: { categories: cats, labels: { style: { fontSize: '11px' } } },
      yaxis: { labels: { formatter: (v: number) => this.short(v) } },
      legend: { position: 'top', horizontalAlign: 'right' },
      grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
      tooltip: { shared: true, intersect: false },
    };
  }

  /** Abrège les grands montants pour les axes : 1 250 000 → 1,25 M. */
  private short(v: number): string {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)} M`;
    if (v >= 1_000) return `${Math.round(v / 1_000)} k`;
    return `${Math.round(v)}`;
  }
}
