import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JournalService } from '../../../services/accounting/journal.service';
import { AccountService } from '../../../services/accounting/account.service';
import { Journal, Account, JOURNAL_TYPES, journalTypeLabel } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-acc-journals',
  templateUrl: './journals.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class AccJournalsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Journal[] = []; filtered: Journal[] = []; accounts: Account[] = []; loading = true;
  search = ''; types = JOURNAL_TYPES; typeLabel = journalTypeLabel;
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: JournalService, private accSvc: AccountService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required], name: ['', Validators.required],
      journal_type: ['general', Validators.required], default_account: [null],
      sequence_prefix: [''], active: [true],
    });
    this.accSvc.list().subscribe({ next: d => this.accounts = d });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', journal_type: 'general', default_account: null, sequence_prefix: '', active: true }); }
  openEdit(r: Journal): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ code: r.code, name: r.name, journal_type: r.journal_type, default_account: r.default_account, sequence_prefix: r.sequence_prefix, active: r.active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  private close(): void { document.getElementById('jrn-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}