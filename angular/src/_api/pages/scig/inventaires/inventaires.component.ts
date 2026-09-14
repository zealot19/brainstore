import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScigService } from '../../../services/scig/scig.service';
import { PermissionService } from '../../../services/auth/permission.service';
import { Depot, InventorySession } from '../../../models/scig.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-scig-inventaires',
  templateUrl: './inventaires.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslocoModule],
})
export class InventairesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  readonly perm = inject(PermissionService);

  sessions: InventorySession[] = [];
  filtered: InventorySession[] = [];
  depots:   Depot[]  = [];
  loading   = true;
  search    = '';
  filterStatus = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';

  constructor(
    private scigService: ScigService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:     ['', Validators.required],
      depot_id: ['', Validators.required],
      notes:    [''],
    });
    this.scigService.listDepots().subscribe({
      next: ds  => { this.depots = ds.filter(d => d.is_active); },
      error: () => { this.depots = []; },
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    const filters: { status?: string } = {};
    if (this.filterStatus) filters.status = this.filterStatus;
    this.scigService.listInventorySessions(filters).subscribe({
      next: sessions => { this.sessions = sessions; this.applyFilter(); this.loading = false; },
      error: ()      => { this.sessions = []; this.filtered = []; this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.sessions.filter(s =>
      !q || s.name.toLowerCase().includes(q) || s.depot_name.toLowerCase().includes(q)
    );
  }

  get totalOpen():   number { return this.sessions.filter(s => s.status === 'OPEN').length; }
  get totalClosed(): number { return this.sessions.filter(s => s.status === 'CLOSED').length; }

  statusLabel(s: string): string {
    return s === 'OPEN' ? 'Ouvert' : 'Clôturé';
  }

  openCreate(): void {
    this.errorMsg = '';
    this.form.reset({ name: '', depot_id: '', notes: '' });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.form.value;
    this.scigService.createInventorySession({
      name:     v.name,
      depot_id: v.depot_id,
      notes:    v.notes || '',
    }).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.openCreate(); },
      error: err => {
        this.saving = false;
        const e = err?.error;
        this.errorMsg = e?.detail ?? 'Une erreur est survenue.';
      },
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}