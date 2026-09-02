import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/accounting/account.service';
import { Account, ACCOUNT_TYPES, accountTypeLabel } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-acc-accounts',
  templateUrl: './accounts.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class AccAccountsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Account[] = []; filtered: Account[] = []; loading = true;
  search = ''; typeFilter = '';
  types = ACCOUNT_TYPES; typeLabel = accountTypeLabel;
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: AccountService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required], name: ['', Validators.required],
      account_type: ['expense', Validators.required], parent: [null],
      reconcile: [false], note: [''],
    });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r =>
      (!q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)) &&
      (!this.typeFilter || r.account_type === this.typeFilter));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', account_type: 'expense', parent: null, reconcile: false, note: '' }); }
  openEdit(r: Account): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ code: r.code, name: r.name, account_type: r.account_type, parent: r.parent, reconcile: r.reconcile, note: r.note }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  toggleDeprecated(r: Account): void {
    this.svc.update(r.id, { deprecated: !r.deprecated }).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Action impossible.') });
  }
  private close(): void { document.getElementById('acc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}