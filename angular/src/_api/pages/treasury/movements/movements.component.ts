import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovementService } from '../../../services/treasury/movement.service';
import { SessionService } from '../../../services/treasury/session.service';
import { BankService } from '../../../services/treasury/bank.service';
import { Transaction, CashSession, BankAccount, MOVEMENT_CATEGORIES, PAYMENT_MODES } from '../../../models/treasury.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-trz-movements',
  templateUrl: './movements.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class TrzMovementsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Transaction[] = []; loading = true; typeFilter = '';
  openSessions: CashSession[] = []; banks: BankAccount[] = [];
  paymentModes = PAYMENT_MODES;
  form!: FormGroup; saving = false; errorMsg = '';

  constructor(private svc: MovementService, private sessSvc: SessionService,
              private bankSvc: BankService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      transaction_type: ['income', Validators.required], category: ['ticket_sales', Validators.required],
      account_type: ['cash', Validators.required], cash_session_id: [null], bank_account_id: [null],
      amount: [null, Validators.required], payment_mode: ['cash', Validators.required],
      description: [''], transaction_date: [null],
    });
    this.sessSvc.list({ status: 'open' }).subscribe({ next: d => this.openSessions = d });
    this.bankSvc.list().subscribe({ next: d => this.banks = d.filter(b => b.is_active) });
    this.load();
  }
  get categories() { return MOVEMENT_CATEGORIES[this.form?.value.transaction_type] ?? []; }
  onTypeChange(): void { const cats = this.categories; this.form.patchValue({ category: cats.length ? cats[0].value : '' }); }
  load(): void {
    this.loading = true;
    this.svc.list(this.typeFilter ? { type: this.typeFilter } : undefined)
      .subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  openCreate(): void {
    this.errorMsg = '';
    this.form.reset({ transaction_type: 'income', category: 'ticket_sales', account_type: 'cash',
      cash_session_id: null, bank_account_id: null, amount: null, payment_mode: 'cash', description: '', transaction_date: null });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value };
    if (v.account_type === 'cash') { v.bank_account_id = null; } else { v.cash_session_id = null; }
    this.svc.create(v).subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  delete(r: Transaction): void {
    if (!confirm('Supprimer ce mouvement ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('trz-mov-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}