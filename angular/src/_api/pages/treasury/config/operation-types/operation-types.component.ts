import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { OperationTypeService } from '../../../../services/treasury/operation-type.service';
import { OperationType } from '../../../../models/treasury.models';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-trz-operation-types',
  standalone: true,
  templateUrl: './operation-types.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective, TranslocoModule],
})
export class TrzOperationTypesComponent implements OnInit {
  private svc = inject(OperationTypeService);
  private toast = inject(ToastService);
  private fb = inject(FormBuilder);

  rows: OperationType[] = []; loading = true;
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required],
      label: ['', Validators.required],
      sens: ['depense', Validators.required],
      display_order: [0],
      is_active: [true],
    });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', label: '', sens: 'depense', display_order: 0, is_active: true }); }
  openEdit(r: OperationType): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ code: r.code, label: r.label, sens: r.sens, display_order: r.display_order, is_active: r.is_active });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué."; },
    });
  }
  delete(r: OperationType): void {
    if (!confirm("Supprimer ce type d'opération ?")) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void {
    document.getElementById('ot-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
