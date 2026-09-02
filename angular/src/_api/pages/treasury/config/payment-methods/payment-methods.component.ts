import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PaymentMethodService } from '../../../../services/treasury/payment-method.service';
import { HasPermissionDirective } from '../../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  templateUrl: './payment-methods.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, HasPermissionDirective],
})
export class PaymentMethodsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  private svc = inject(PaymentMethodService);
  private fb = inject(FormBuilder);
  rows: any[] = []; loading = false; saving = false; editId: string | null = null; errorMsg = '';
  modes = [
    { v: 'cash', l: 'Espèces' }, { v: 'mobile_money', l: 'Mobile Money' },
    { v: 'transfer', l: 'Virement' }, { v: 'check', l: 'Chèque' },
  ];
  form = this.fb.group({
    name: ['', Validators.required], code: [''],
    mode: ['cash', Validators.required], requires_payment: [true], is_active: [true],
  });

  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ mode: 'cash', requires_payment: true, is_active: true }); }
  openEdit(r: any): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({ name: r.name, code: r.code, mode: r.mode, requires_payment: r.requires_payment, is_active: r.is_active });
  }
  save(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true;
    const req = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    req.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }
  remove(r: any): void {
    if (r.is_system) return;
    if (confirm('Supprimer ce moyen de paiement ?')) this.svc.remove(r.id).subscribe(() => this.load());
  }
  private close(): void { document.getElementById('pm-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}