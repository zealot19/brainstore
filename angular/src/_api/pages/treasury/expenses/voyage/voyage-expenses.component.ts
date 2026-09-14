import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../../../services/treasury/expense.service';
import { TripExpenseService } from '../../../../services/voyages/trip-expense.service';
import { TripService } from '../../../../services/voyages/trip.service';
import { ExpenseTypeService } from '../../../../services/voyages-config/expense-type.service';
import { SessionService } from '../../../../services/treasury/session.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { SearchableSelectComponent } from '../../../shared/searchable-select/searchable-select.component';
import { PaginatePipe } from '../../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-voyage-expenses',
  standalone: true,
  templateUrl: './voyage-expenses.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, HasPermissionDirective, SearchableSelectComponent, TranslocoModule],
})
export class VoyageExpensesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  private svc = inject(ExpenseService);
  private tripExpSvc = inject(TripExpenseService);
  private tripSvc = inject(TripService);
  private typeSvc = inject(ExpenseTypeService);
  private sessionSvc = inject(SessionService);

  rows: any[] = []; sessions: any[] = []; loading = false; disburseSession = '';
  voyageOptions: { id: string; number: string }[] = []; selectedVoyage = '';
  fStatus = ''; fFrom = ''; fTo = '';

  // Ajout manuel : uniquement les voyages en dépenses manuelles.
  manualTrips: { id: string; label: string }[] = [];
  expenseTypes: any[] = [];
  addForm = { trip_id: '', expense_type: '', amount: null as number | null, description: '' };
  saving = false; addError = '';

  ngOnInit(): void {
    this.sessionSvc.list({ status: 'open' }).subscribe((d: any) => this.sessions = d);
    this.typeSvc.list().subscribe((d: any) => this.expenseTypes = (d || []).filter((t: any) => t.is_active !== false));
    this.loadManualTrips();
    this.reload();
  }

  loadManualTrips(): void {
    this.tripSvc.list({ auto_expenses: 'false' }).subscribe((d: any) => {
      this.manualTrips = (d || [])
        .filter((t: any) => t.status !== 'cancelled')
        .map((t: any) => ({ id: t.id, label: `${t.number || t.code || '—'} · ${t.route_code || ''} · ${(t.scheduled_departure || '').slice(0, 10)}` }));
    });
  }

  openAdd(): void { this.addError = ''; this.addForm = { trip_id: '', expense_type: '', amount: null, description: '' }; }
  submitAdd(): void {
    const f = this.addForm;
    if (!f.trip_id || !f.expense_type || !f.amount || this.saving) return;
    this.saving = true; this.addError = '';
    this.tripExpSvc.create(f.trip_id, { expense_type: f.expense_type, amount: f.amount, description: f.description }).subscribe({
      next: () => { this.saving = false; this.reload(); this.toast.success('Dépense ajoutée.'); this.close('voyage-exp-add-modal'); },
      error: e => { this.saving = false; this.addError = e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué."; },
    });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }

  reload(): void {
    this.loading = true;
    this.svc.voyage({ status: this.fStatus || undefined, date_from: this.fFrom || undefined, date_to: this.fTo || undefined }).subscribe({
      next: d => {
        this.rows = d;
        const seen = new Map<string, string>();
        d.forEach((r: any) => { if (r.trip_id && !seen.has(r.trip_id)) seen.set(r.trip_id, r.trip_number); });
        this.voyageOptions = [...seen].map(([id, number]) => ({ id, number }));
        this.pg.page = 1;
        this.loading = false;
      },
      error: () => this.loading = false,
    });
  }

  clearFilters(): void { this.fStatus = this.fFrom = this.fTo = ''; this.selectedVoyage = ''; this.reload(); }

  get filtered(): any[] {
    return this.selectedVoyage ? this.rows.filter(r => r.trip_id === this.selectedVoyage) : this.rows;
  }

  disburse(e: any): void {
    this.tripExpSvc.disburse(e.trip_id, e.id, this.disburseSession)
      .subscribe({ next: () => { this.reload(); this.toast.success('Dépense décaissée.'); }, error: err => this.toast.error(err?.error?.error?.message ?? err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  printVoucher(e: any): void {
    this.svc.voyageVoucher(e.id).subscribe({
      next: blob => { const url = URL.createObjectURL(blob); window.open(url, '_blank'); setTimeout(() => URL.revokeObjectURL(url), 60000); },
      error: () => this.toast.error('Impossible de générer le bon de dépense (moteur PDF non disponible sur le serveur).'),
    });
  }
}