import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FiscalYearService } from '../../../services/accounting/fiscal-year.service';
import { PeriodService } from '../../../services/accounting/period.service';
import { FiscalYear, AccountingPeriod } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-acc-fiscal-years',
  templateUrl: './fiscal-years.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class AccFiscalYearsComponent implements OnInit {
  private toast = inject(ToastService);
  years: FiscalYear[] = []; periods: AccountingPeriod[] = [];
  selected: FiscalYear | null = null; loadingYears = true; loadingPeriods = false;
  fyForm!: FormGroup; pForm!: FormGroup; saving = false; errorMsg = '';

  constructor(private fySvc: FiscalYearService, private pSvc: PeriodService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fyForm = this.fb.group({ code: ['', Validators.required], name: ['', Validators.required], date_start: ['', Validators.required], date_end: ['', Validators.required] });
    this.pForm = this.fb.group({ code: ['', Validators.required], name: ['', Validators.required], date_start: ['', Validators.required], date_end: ['', Validators.required] });
    this.loadYears();
  }
  loadYears(): void {
    this.loadingYears = true;
    this.fySvc.list().subscribe({ next: d => { this.years = d; this.loadingYears = false; if (!this.selected && d.length) this.select(d[0]); }, error: () => this.loadingYears = false });
  }
  select(fy: FiscalYear): void {
    this.selected = fy; this.loadingPeriods = true;
    this.pSvc.listByYear(fy.id).subscribe({ next: d => { this.periods = d; this.loadingPeriods = false; }, error: () => this.loadingPeriods = false });
  }
  openCreateYear(): void { this.errorMsg = ''; this.fyForm.reset({ code: '', name: '', date_start: '', date_end: '' }); }
  submitYear(): void {
    if (this.fyForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.fySvc.create(this.fyForm.value).subscribe({ next: () => { this.saving = false; this.loadYears(); this.closeModal('fy-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  openCreatePeriod(): void { this.errorMsg = ''; this.pForm.reset({ code: '', name: '', date_start: '', date_end: '' }); }
  submitPeriod(): void {
    if (this.pForm.invalid || this.saving || !this.selected) return; this.saving = true; this.errorMsg = '';
    this.pSvc.create({ ...this.pForm.value, fiscal_year: this.selected.id }).subscribe({ next: () => { this.saving = false; this.select(this.selected!); this.closeModal('per-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  closePeriod(p: AccountingPeriod): void {
    if (!confirm(`Clôturer la période « ${p.name} » ?`)) return;
    this.pSvc.close(p.id).subscribe({ next: () => this.select(this.selected!), error: e => this.toast.error(e?.error?.detail ?? e?.error?.message ?? 'Clôture impossible.') });
  }
  private closeModal(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}