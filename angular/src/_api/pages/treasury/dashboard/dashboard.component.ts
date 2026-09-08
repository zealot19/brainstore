import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreasuryStatsService } from '../../../services/treasury/stats.service';
import { TreasuryStats } from '../../../models/treasury.models';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-trz-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule, TranslocoModule],
})
export class TrzDashboardComponent implements OnInit {
  stats: TreasuryStats | null = null; loading = true;
  constructor(private svc: TreasuryStatsService) {}
  ngOnInit(): void {
    this.svc.get().subscribe({ next: d => { this.stats = d; this.loading = false; }, error: () => this.loading = false });
  }
}
