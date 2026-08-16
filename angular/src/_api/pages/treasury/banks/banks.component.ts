import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../../services/treasury/bank.service';
import { BankAccount } from '../../../models/treasury.models';
import { AccountService } from '../../../services/accounting/account.service';
import { JournalService } from '../../../services/accounting/journal.service';
import { Account, Journal } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-trz-banks',
  templateUrl: './banks.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzBanksComponent implements OnInit {
  rows: BankAccount[] = []; filtered: BankAccount[] = []; loading = true; search = '';
  accounts: Account[] = []; journals: Journal[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: BankService, private accSvc: AccountService,
              private jrnSvc: JournalService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      bank_name: ['', Validators.required], account_name: ['', Validators.required],
      account_number: ['', Validators.required], notes: [''], is_active: [true],
      account_id: [null], journal_id: [null], opening_balance: [0],
    });
    this.accSvc.list().subscribe({ next: d => this.accounts = d.filter(a => a.account_type === 'asset_cash') });
    this.jrnSvc.list().subscribe({ next: d => this.journals = d.filter(j => j.journal_type === 'bank') });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.bank_name.toLowerCase().includes(q) || r.account_name.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ bank_name: '', account_name: '', account_number: '', notes: '', is_active: true, account_id: null, journal_id: null, opening_balance: 0 }); }
  openEdit(r: BankAccount): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ bank_name: r.bank_name, account_name: r.account_name, account_number: r.account_number, notes: r.notes, is_active: r.is_active, account_id: r.account, journal_id: r.journal, opening_balance: 0 });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = { bank_name: v.bank_name, account_name: v.account_name, account_number: v.account_number, notes: v.notes, account_id: v.account_id, journal_id: v.journal_id };
    if (this.editId) { payload['is_active'] = v.is_active; } else { payload['opening_balance'] = v.opening_balance; }
    const a = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: BankAccount): void {
    if (!confirm('Supprimer ce compte bancaire ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('trz-bank-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
