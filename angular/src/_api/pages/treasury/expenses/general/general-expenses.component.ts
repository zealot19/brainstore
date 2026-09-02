import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { GeneralExpenseService } from '../../../../services/treasury/general-expense.service';
import { ExpenseTypeService } from '../../../../services/voyages-config/expense-type.service';
import { SessionService } from '../../../../services/treasury/session.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-general-expenses',
  standalone: true,
  templateUrl: './general-expenses.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective],
})
export class GeneralExpensesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  private svc = inject(GeneralExpenseService);
  private typeSvc = inject(ExpenseTypeService);
  private sessionSvc = inject(SessionService);
  private fb = inject(FormBuilder);

  rows: any[] = []; types: any[] = []; sessions: any[] = [];
  loading = false; saving = false; editId: string | null = null;
  disburseSession = ''; errorMsg = '';
  fStatus = ''; fFrom = ''; fTo = ''; fType = '';

  /** Filtre par type de dépense (côté client) : '' = tous, '__refund__' = remboursements, sinon un type. */
  get filtered(): any[] {
    if (!this.fType) return this.rows;
    if (this.fType === '__refund__') return this.rows.filter(r => r.kind === 'refund');
    return this.rows.filter(r => r.expense_type === this.fType);
  }

  form = this.fb.group({
    expense_type_id: [null as string | null, Validators.required],
    label: ['', Validators.required],
    amount: [null as number | null, [Validators.required, Validators.min(1)]],
    expense_date: [''],
  });

  ngOnInit(): void {
    this.typeSvc.list().subscribe((d: any) => this.types = d);
    this.sessionSvc.list({ status: 'open' }).subscribe((d: any) => this.sessions = d);
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.svc.list({ status: this.fStatus || undefined, date_from: this.fFrom || undefined, date_to: this.fTo || undefined })
      .subscribe({ next: d => { this.rows = d; this.pg.page = 1; this.loading = false; }, error: () => this.loading = false });
  }

  clearFilters(): void { this.fStatus = this.fFrom = this.fTo = this.fType = ''; this.reload(); }

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset(); }
  openEdit(e: any): void {
    this.editId = e.id; this.errorMsg = '';
    this.form.patchValue({ expense_type_id: e.expense_type, label: e.label, amount: e.amount, expense_date: e.expense_date });
  }

  save(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true;
    const body: any = this.form.value;
    const req = this.editId ? this.svc.update(this.editId, body) : this.svc.create(body);
    req.subscribe({
      next: () => { this.saving = false; this.reload(); this.editId ? this.close('gexp-modal') : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; },
    });
  }

  remove(e: any): void {
    if (confirm('Supprimer cette dépense ?')) this.svc.remove(e.id).subscribe(() => { this.reload(); this.toast.success('Dépense supprimée.'); });
  }

  disburse(e: any): void {
    this.svc.disburse(e.id, this.disburseSession || undefined)
      .subscribe({ next: () => { this.reload(); this.toast.success('Dépense décaissée.'); }, error: err => this.toast.error(err?.error?.error?.message ?? 'Erreur.') });
  }

  printVoucher(e: any): void {
    this.svc.voucher(e.id).subscribe({
      next: blob => { const url = URL.createObjectURL(blob); window.open(url, '_blank'); setTimeout(() => URL.revokeObjectURL(url), 60000); },
      error: () => this.toast.error('Impossible de générer le bon de dépense (moteur PDF non disponible sur le serveur).'),
    });
  }

  typeName(id: string): string { return this.types.find(t => t.id === id)?.name ?? id; }
  private close(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}