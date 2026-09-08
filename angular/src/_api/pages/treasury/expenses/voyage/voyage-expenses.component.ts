import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../../../services/treasury/expense.service';
import { TripExpenseService } from '../../../../services/voyages/trip-expense.service';
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
  private sessionSvc = inject(SessionService);

  rows: any[] = []; sessions: any[] = []; loading = false; disburseSession = '';
  voyageOptions: { id: string; number: string }[] = []; selectedVoyage = '';
  fStatus = ''; fFrom = ''; fTo = '';

  ngOnInit(): void {
    this.sessionSvc.list({ status: 'open' }).subscribe((d: any) => this.sessions = d);
    this.reload();
  }

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