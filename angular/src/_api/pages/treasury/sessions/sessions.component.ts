import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../services/treasury/session.service';
import { RegisterService } from '../../../services/treasury/register.service';
import { CashSession, CashRegister } from '../../../models/treasury.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-trz-sessions',
  templateUrl: './sessions.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzSessionsComponent implements OnInit {
  rows: CashSession[] = []; loading = true; statusFilter = '';
  registers: CashRegister[] = [];
  openForm!: FormGroup; closeForm!: FormGroup; saving = false; errorMsg = ''; closingId: string | null = null;

  constructor(private svc: SessionService, private regSvc: RegisterService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.openForm = this.fb.group({ cash_register_id: [null, Validators.required], opening_balance: [null], notes: [''] });
    this.closeForm = this.fb.group({ closing_balance: [null, Validators.required], notes: [''] });
    this.regSvc.list().subscribe({ next: d => this.registers = d.filter(r => r.is_active) });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list(this.statusFilter ? { status: this.statusFilter } : undefined)
      .subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  openCreate(): void { this.errorMsg = ''; this.openForm.reset({ cash_register_id: null, opening_balance: null, notes: '' }); }
  submitOpen(): void {
    if (this.openForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.svc.open(this.openForm.value).subscribe({ next: () => { this.saving = false; this.load(); this.close('trz-open-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  openClose(s: CashSession): void { this.closingId = s.id; this.errorMsg = ''; this.closeForm.reset({ closing_balance: null, notes: '' }); }
  submitClose(): void {
    if (this.closeForm.invalid || this.saving || !this.closingId) return; this.saving = true; this.errorMsg = '';
    this.svc.close(this.closingId, this.closeForm.value).subscribe({ next: () => { this.saving = false; this.load(); this.close('trz-close-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
