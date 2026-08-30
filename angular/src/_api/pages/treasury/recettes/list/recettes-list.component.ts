import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncomeService } from '../../../../services/treasury/income.service';
import { SessionService } from '../../../../services/treasury/session.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../../app/shared/table-paginator/table-paginator.component';

type Kind = 'voyage' | 'parcel' | 'baggage' | 'other';

const TITLES: Record<Kind, string> = {
  voyage: 'Recette voyage', parcel: 'Recette colis',
  baggage: 'Recette bagage', other: 'Autre recette',
};

@Component({
  selector: 'app-recettes-list',
  standalone: true,
  templateUrl: './recettes-list.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective],
})
export class RecettesListComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  private income = inject(IncomeService);
  private sessionSvc = inject(SessionService);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  kind: Kind = 'voyage';
  title = '';
  rows: any[] = []; sessions: any[] = [];
  loading = false; saving = false; errorMsg = '';
  fFrom = ''; fTo = ''; fMode = '';

  form = this.fb.group({
    amount: [null as number | null, [Validators.required, Validators.min(1)]],
    payment_mode: ['cash', Validators.required],
    description: [''],
    cash_session_id: [null as string | null],
  });

  get isOther(): boolean { return this.kind === 'other'; }

  ngOnInit(): void {
    this.kind = (this.route.snapshot.data['kind'] as Kind) || 'voyage';
    this.title = TITLES[this.kind];
    if (this.isOther) this.sessionSvc.list({ status: 'open' }).subscribe((d: any) => this.sessions = d);
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.income.list(this.kind, {
      date_from: this.fFrom || undefined, date_to: this.fTo || undefined,
      payment_mode: this.fMode || undefined,
    }).subscribe({
      next: d => { this.rows = d; this.pg.page = 1; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  clearFilters(): void { this.fFrom = this.fTo = this.fMode = ''; this.reload(); }

  openCreate(): void { this.errorMsg = ''; this.form.reset({ payment_mode: 'cash' }); }

  save(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true;
    this.income.createOther(this.form.value).subscribe({
      next: () => { this.saving = false; this.reload(); this.close('recette-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? 'Erreur.'; },
    });
  }

  printReceipt(row: any): void {
    this.income.receipt(row.id).subscribe({
      next: blob => { const url = URL.createObjectURL(blob); window.open(url, '_blank'); setTimeout(() => URL.revokeObjectURL(url), 60000); },
      error: () => alert('Impossible de générer le reçu.'),
    });
  }

  private close(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
