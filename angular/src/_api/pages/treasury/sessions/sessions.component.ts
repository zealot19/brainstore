import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../services/treasury/session.service';
import { RegisterService } from '../../../services/treasury/register.service';
import { DenominationService } from '../../../services/treasury/denomination.service';
import { AuthService } from '../../../services/auth/auth.service';
import { CashSession, CashRegister, CurrencyDenomination } from '../../../models/treasury.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-trz-sessions',
  templateUrl: './sessions.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class TrzSessionsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: CashSession[] = []; loading = true; statusFilter = '';
  registers: CashRegister[] = [];
  denoms: CurrencyDenomination[] = [];
  openForm!: FormGroup; closeForm!: FormGroup; saving = false; errorMsg = ''; closingId: string | null = null;

  // Billetage
  openBilletage = true;  openQty:  Record<string, number> = {};
  closeBilletage = true; closeQty: Record<string, number> = {};

  constructor(private svc: SessionService, private regSvc: RegisterService,
              private denSvc: DenominationService, private fb: FormBuilder,
              private auth: AuthService) {}

  canClose(s: any): boolean {
    const u = this.auth.currentUser;
    if (!u) return false;
    return !!u.is_superuser || !!u.is_institution_admin || s.opened_by === u.id;
  }

  ngOnInit(): void {
    this.openForm = this.fb.group({ cash_register_id: [null, Validators.required], name: [''], opening_balance: [null], notes: [''] });
    this.closeForm = this.fb.group({ closing_balance: [null], notes: [''] });
    this.regSvc.list().subscribe({ next: d => this.registers = d.filter(r => r.is_active) });
    this.denSvc.list().subscribe({ next: d => this.denoms = d.filter(x => x.is_active) });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list(this.statusFilter ? { status: this.statusFilter } : undefined)
      .subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

  // ── Billetage helpers ──
  private total(qty: Record<string, number>): number {
    return this.denoms.reduce((s, d) => s + (+d.value) * (qty[d.id] || 0), 0);
  }
  get openTotal(): number { return this.total(this.openQty); }
  get closeTotal(): number { return this.total(this.closeQty); }
  private toItems(qty: Record<string, number>): { denomination_id: string; quantity: number }[] {
    return this.denoms.filter(d => (qty[d.id] || 0) > 0).map(d => ({ denomination_id: d.id, quantity: qty[d.id] }));
  }

  openCreate(): void {
    this.errorMsg = ''; this.openBilletage = true; this.openQty = {};
    this.openForm.reset({ cash_register_id: null, name: '', opening_balance: null, notes: '' });
  }
  submitOpen(): void {
    if (this.openForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.openForm.value;
    const payload: Record<string, unknown> = { cash_register_id: v.cash_register_id, name: v.name, notes: v.notes };
    if (this.openBilletage) payload['opening_count'] = this.toItems(this.openQty);
    else payload['opening_balance'] = v.opening_balance;
    this.svc.open(payload).subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.close('trz-open-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }

  openClose(s: CashSession): void {
    this.closingId = s.id; this.errorMsg = ''; this.closeBilletage = true; this.closeQty = {};
    this.closeForm.reset({ closing_balance: null, notes: '' });
  }
  submitClose(): void {
    if (this.saving || !this.closingId) return; this.saving = true; this.errorMsg = '';
    const v = this.closeForm.value;
    const payload: Record<string, unknown> = { notes: v.notes };
    if (this.closeBilletage) payload['closing_count'] = this.toItems(this.closeQty);
    else payload['closing_balance'] = v.closing_balance;
    this.svc.close(this.closingId, payload).subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.close('trz-close-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
