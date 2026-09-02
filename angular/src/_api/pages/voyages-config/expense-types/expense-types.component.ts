import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseTypeService } from '../../../services/voyages-config/expense-type.service';
import { AccountService } from '../../../services/accounting/account.service';
import { ExpenseType } from '../../../models/voyages-config.models';
import { Account } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-vc-expense-types',
  templateUrl: './expense-types.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcExpenseTypesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: ExpenseType[] = []; filtered: ExpenseType[] = []; loading = true; search = '';
  accounts: Account[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: ExpenseTypeService, private accSvc: AccountService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({ code: ['', Validators.required], name: ['', Validators.required], account_code: [''], is_active: [true] });
    this.accSvc.list().subscribe({ next: a => this.accounts = a.filter(x => x.account_type === 'expense') });
    this.load();
  }
  accountLabel(code: string): string { const a = this.accounts.find(x => x.code === code); return a ? `${a.code} — ${a.name}` : (code || '—'); }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)); }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', account_code: '', is_active: true }); }
  openEdit(r: ExpenseType): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ code: r.code, name: r.name, account_code: r.account_code, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: ExpenseType): void { if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('et-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}