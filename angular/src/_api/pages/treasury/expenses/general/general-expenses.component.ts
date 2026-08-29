import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { GeneralExpenseService } from '../../../../services/treasury/general-expense.service';
import { ExpenseTypeService } from '../../../../services/voyages-config/expense-type.service';
import { SessionService } from '../../../../services/treasury/session.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-general-expenses',
  standalone: true,
  templateUrl: './general-expenses.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective],
})
export class GeneralExpensesComponent implements OnInit {
  private svc = inject(GeneralExpenseService);
  private typeSvc = inject(ExpenseTypeService);
  private sessionSvc = inject(SessionService);
  private fb = inject(FormBuilder);

  rows: any[] = []; types: any[] = []; sessions: any[] = [];
  loading = false; saving = false; editId: string | null = null;
  disburseSession = ''; errorMsg = '';

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
    this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

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
      next: () => { this.saving = false; this.reload(); this.close('gexp-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; },
    });
  }

  remove(e: any): void {
    if (confirm('Supprimer cette dépense ?')) this.svc.remove(e.id).subscribe(() => this.reload());
  }

  disburse(e: any): void {
    this.svc.disburse(e.id, this.disburseSession || undefined)
      .subscribe({ next: () => this.reload(), error: err => alert(err?.error?.error?.message ?? 'Erreur.') });
  }

  typeName(id: string): string { return this.types.find(t => t.id === id)?.name ?? id; }
  private close(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
