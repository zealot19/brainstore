import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../services/treasury/register.service';
import { CashRegister } from '../../../models/treasury.models';
import { AccountService } from '../../../services/accounting/account.service';
import { JournalService } from '../../../services/accounting/journal.service';
import { AgencyService } from '../../../services/system/agency.service';
import { Account, Journal } from '../../../models/accounting.models';
import { Agency } from '../../../models/system.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-trz-registers',
  templateUrl: './registers.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzRegistersComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: CashRegister[] = []; filtered: CashRegister[] = []; loading = true; search = '';
  accounts: Account[] = []; journals: Journal[] = []; agencies: Agency[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: RegisterService, private accSvc: AccountService,
              private jrnSvc: JournalService, private agSvc: AgencyService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required], notes: [''], is_active: [true],
      account_id: [null], journal_id: [null], agency_id: [null], opening_balance: [0],
    });
    this.accSvc.list().subscribe({ next: d => this.accounts = d.filter(a => a.account_type === 'asset_cash') });
    this.jrnSvc.list().subscribe({ next: d => this.journals = d.filter(j => j.journal_type === 'cash') });
    this.agSvc.list().subscribe({ next: d => this.agencies = d });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ name: '', notes: '', is_active: true, account_id: null, journal_id: null, agency_id: null, opening_balance: 0 }); }
  openEdit(r: CashRegister): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ name: r.name, notes: r.notes, is_active: r.is_active, account_id: r.account, journal_id: r.journal, agency_id: r.agency, opening_balance: 0 });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = { name: v.name, notes: v.notes, account_id: v.account_id, journal_id: v.journal_id, agency_id: v.agency_id };
    if (this.editId) { payload['is_active'] = v.is_active; } else { payload['opening_balance'] = v.opening_balance; }
    const a = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: CashRegister): void {
    if (!confirm('Supprimer cette caisse ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('trz-reg-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}