import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../../../services/treasury/transfer.service';
import { RegisterService } from '../../../services/treasury/register.service';
import { BankService } from '../../../services/treasury/bank.service';
import { Transfer, CashRegister, BankAccount } from '../../../models/treasury.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-trz-transfers',
  templateUrl: './transfers.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzTransfersComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Transfer[] = []; loading = true;
  registers: CashRegister[] = []; banks: BankAccount[] = [];
  form!: FormGroup; saving = false; errorMsg = '';

  constructor(private svc: TransferService, private regSvc: RegisterService,
              private bankSvc: BankService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      from_type: ['cash', Validators.required], from_id: [null, Validators.required],
      to_type: ['bank', Validators.required], to_id: [null, Validators.required],
      amount: [null, Validators.required], description: [''], transfer_date: [null],
    });
    this.regSvc.list().subscribe({ next: d => this.registers = d.filter(r => r.is_active) });
    this.bankSvc.list().subscribe({ next: d => this.banks = d.filter(b => b.is_active) });
    this.load();
  }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false }); }
  openCreate(): void { this.errorMsg = ''; this.form.reset({ from_type: 'cash', from_id: null, to_type: 'bank', to_id: null, amount: null, description: '', transfer_date: null }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = { amount: v.amount, description: v.description, transfer_date: v.transfer_date };
    payload[v.from_type === 'cash' ? 'from_cash_register_id' : 'from_bank_account_id'] = v.from_id;
    payload[v.to_type === 'cash' ? 'to_cash_register_id' : 'to_bank_account_id'] = v.to_id;
    this.svc.create(payload).subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  private close(): void { document.getElementById('trz-trf-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}