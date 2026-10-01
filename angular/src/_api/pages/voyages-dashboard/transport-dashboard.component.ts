import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TransportDashboardService, TripCard } from '../../services/voyages/transport-dashboard.service';

interface ChartModel {
  metric: string; title: string; year: number;
  series: any; chart: any; xaxis: any; yaxis: any;
  colors: string[]; dataLabels: any; plotOptions: any;
}

@Component({
  selector: 'app-transport-dashboard',
  standalone: true,
  templateUrl: './transport-dashboard.component.html',
  styleUrls: ['./transport-dashboard.component.scss'],
  imports: [CommonModule, FormsModule, NgApexchartsModule, TranslocoModule],
})
export class TransportDashboardComponent implements OnInit {
  private svc = inject(TransportDashboardService);
  private t = inject(TranslocoService);

  private localToday(): string {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }
  dateFrom = this.localToday();
  dateTo = this.localToday();
  trips: TripCard[] = [];
  loadingTrips = true;

  readonly currentYear = new Date().getFullYear();
  readonly years = [this.currentYear, this.currentYear - 1, this.currentYear - 2];
  readonly months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  charts: ChartModel[] = [];

  get totalRevenue(): number { return this.trips.reduce((s, t) => s + (t.total_revenue || 0), 0); }

  ngOnInit(): void {
    this.reloadTrips();
    const defs = [
      { metric: 'tickets', title: 'trdash.chart_tickets', color: '#4361ee' },
      { metric: 'baggage', title: 'trdash.chart_baggage', color: '#12b76a' },
      { metric: 'parcels', title: 'trdash.chart_parcels', color: '#f59e0b' },
      { metric: 'clients', title: 'trdash.chart_clients', color: '#7c3aed' },
    ];
    this.charts = defs.map(d => this.blankChart(d.metric, d.title, d.color));
    this.charts.forEach(c => this.reloadChart(c));
  }

  reloadTrips(): void {
    this.loadingTrips = true;
    this.svc.loadTrips(this.dateFrom, this.dateTo).subscribe({
      next: res => { this.trips = res.trips || []; this.loadingTrips = false; },
      error: () => { this.loadingTrips = false; },
    });
  }

  private blankChart(metric: string, title: string, color: string): ChartModel {
    return {
      metric, title, year: this.currentYear,
      series: [{ name: this.t.translate(title), data: new Array(12).fill(0) }],
      chart: { type: 'bar', height: 260, toolbar: { show: false }, fontFamily: 'inherit' },
      xaxis: { categories: this.months },
      yaxis: { labels: { formatter: (v: number) => `${Math.round(v)}` } },
      colors: [color],
      dataLabels: { enabled: false },
      plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
    };
  }

  reloadChart(c: ChartModel): void {
    this.svc.loadSeries(c.year, c.metric).subscribe({
      next: res => { c.series = [{ name: this.t.translate(c.title), data: res.data || new Array(12).fill(0) }]; },
      error: () => {},
    });
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      draft: 'bg-secondary', pending: 'bg-info', departed: 'bg-primary',
      completed: 'bg-success', suspended: 'bg-warning', cancelled: 'bg-danger',
    };
    return map[status] ?? 'bg-secondary';
  }
}
