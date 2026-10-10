import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { OperationService, Operation } from '../../../services/treasury/operation.service';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-trz-operations',
  standalone: true,
  templateUrl: './operations.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective, TranslocoModule],
})
export class TrzOperationsComponent implements OnInit {
  private svc = inject(OperationService);
  private toast = inject(ToastService);

  rows: Operation[] = []; loading = true; statusFilter = 'pending';
  editId: string | null = null; editAmount: number | null = null; saving = false;

  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    this.svc.list(this.statusFilter || undefined).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  badgeClass(s: string): string {
    return s === 'validated' ? 'bg-success' : s === 'invalidated' ? 'bg-danger' : 'bg-warning text-dark';
  }
  validate(r: Operation): void {
    this.svc.validate(r.id).subscribe({ next: () => { this.load(); this.toast.success('Validée.'); },
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué.") });
  }
  invalidate(r: Operation): void {
    if (!confirm('Invalider cette opération ?')) return;
    this.svc.invalidate(r.id).subscribe({ next: () => { this.load(); this.toast.success('Invalidée.'); },
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué.") });
  }
  openModify(r: Operation): void { this.editId = r.id; this.editAmount = +r.amount; }
  submitModify(): void {
    if (!this.editId || this.editAmount == null || this.saving) return;
    this.saving = true;
    this.svc.modify(this.editId, this.editAmount).subscribe({
      next: () => { this.saving = false; this.editId = null; this.load(); this.toast.success('Modifiée.'); },
      error: e => { this.saving = false; this.toast.error(e?.error?.detail ?? "L'opération a échoué."); } });
  }
}
