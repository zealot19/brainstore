import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../../../services/treasury/expense.service';
import { TripExpenseService } from '../../../../services/voyages/trip-expense.service';
import { SessionService } from '../../../../services/treasury/session.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-voyage-expenses',
  standalone: true,
  templateUrl: './voyage-expenses.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective],
})
export class VoyageExpensesComponent implements OnInit {
  private svc = inject(ExpenseService);
  private tripExpSvc = inject(TripExpenseService);
  private sessionSvc = inject(SessionService);

  rows: any[] = []; sessions: any[] = []; loading = false; disburseSession = '';

  ngOnInit(): void {
    this.sessionSvc.list({ status: 'open' }).subscribe((d: any) => this.sessions = d);
    this.reload();
  }
  reload(): void {
    this.loading = true;
    this.svc.voyage().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  disburse(e: any): void {
    this.tripExpSvc.disburse(e.trip_id, e.id, this.disburseSession)
      .subscribe({ next: () => this.reload(), error: err => alert(err?.error?.error?.message ?? err?.error?.detail ?? 'Erreur.') });
  }
}
