import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService, ReportMeta } from '../../services/reporting/report.service';
import { AgencyService } from '../../services/system/agency.service';
import { RegisterService } from '../../services/treasury/register.service';
import { Agency } from '../../models/system.models';
import { CashRegister } from '../../models/treasury.models';
import { InfoBannerComponent } from '../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class ReportingComponent implements OnInit {
  reports: ReportMeta[] = [];
  agencies: Agency[] = [];
  registers: CashRegister[] = [];
  selectedCode = '';
  format = 'pdf';
  f = { date_from: '', date_to: '', agency: '', register: '', vehicle: '', year: '' };

  constructor(private svc: ReportService, private agencySvc: AgencyService, private regSvc: RegisterService) {}

  ngOnInit(): void {
    this.svc.catalog().subscribe(d => { this.reports = d; if (d.length) this.selectedCode = d[0].code; });
    this.agencySvc.list().subscribe({ next: d => this.agencies = d, error: () => {} });
    this.regSvc.list().subscribe({ next: d => this.registers = d, error: () => {} });
  }

  get current(): ReportMeta | undefined { return this.reports.find(r => r.code === this.selectedCode); }
  shows(filter: string): boolean { return !!this.current?.filters.includes(filter); }

  generate(): void {
    if (!this.selectedCode) return;
    const filters: Record<string, string> = {};
    (['date_from', 'date_to', 'agency', 'register', 'vehicle', 'year'] as const).forEach(k => {
      if (this.shows(k) && this.f[k]) filters[k] = this.f[k];
    });
    this.svc.download(this.selectedCode, this.format, filters);
  }
}
