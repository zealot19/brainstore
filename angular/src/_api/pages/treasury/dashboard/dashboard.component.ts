import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TreasuryStatsService } from '../../../services/treasury/stats.service';
import { TreasuryStats } from '../../../models/treasury.models';

@Component({
  selector: 'app-trz-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule, TranslocoModule, NgApexchartsModule],
})
export class TrzDashboardComponent implements OnInit {
  private svc = inject(TreasuryStatsService);
  private t = inject(TranslocoService);

  stats: TreasuryStats | null = null; loading = true;
  cashflowChart: any = null;
  composition: any = null;

  private dm(iso: string): string { const [, m, d] = iso.split('-'); return `${d}/${m}`; }
  private short(v: number): string {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)} M`;
    if (v >= 1_000) return `${Math.round(v / 1_000)} k`;
    return `${Math.round(v)}`;
  }

  ngOnInit(): void {
    this.svc.get().subscribe({
      next: d => { this.stats = d; this.loading = false; this.buildComposition(d); },
      error: () => this.loading = false,
    });
    this.svc.series(14).subscribe({ next: d => this.buildCashflow(Array.isArray(d) ? d : (d?.data ?? [])), error: () => {} });
  }

  private buildCashflow(rows: any[]): void {
    if (!rows.length) return;
    this.cashflowChart = {
      series: [
        { name: this.t.translate('dash.s_income'),  data: rows.map(r => Math.round(r.income)) },
        { name: this.t.translate('dash.s_expense'), data: rows.map(r => Math.round(r.expense)) },
      ],
      chart: { height: 300, type: 'area', toolbar: { show: false }, fontFamily: 'inherit' },
      colors: ['#1a9e5f', '#d64545'],
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
      dataLabels: { enabled: false },
      xaxis: { categories: rows.map(r => this.dm(r.date)), labels: { style: { fontSize: '11px' } } },
      yaxis: { labels: { formatter: (v: number) => this.short(v) } },
      legend: { position: 'top', horizontalAlign: 'right' },
      grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
      tooltip: { shared: true, intersect: false },
    };
  }

  private buildComposition(s: TreasuryStats): void {
    const cash = Number(s.total_cash_balance) || 0;
    const bank = Number(s.total_bank_balance) || 0;
    if (cash === 0 && bank === 0) return;
    this.composition = {
      series: [cash, bank],
      chart: { type: 'donut', height: 300, fontFamily: 'inherit' },
      labels: [this.t.translate('treasury.dashboard.cash_short'), this.t.translate('treasury.dashboard.bank_short')],
      colors: ['#0068B8', '#092C4C'],
      legend: { position: 'bottom' },
      dataLabels: { enabled: true, formatter: (v: number) => `${v.toFixed(0)}%` },
      plotOptions: { pie: { donut: { size: '62%' } } },
      stroke: { width: 0 },
    };
  }
}
