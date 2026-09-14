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
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-trz-sessions',
  templateUrl: './sessions.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class TrzSessionsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: CashSession[] = []; loading = true; statusFilter = '';
  registers: CashRegister[] = [];
  denoms: CurrencyDenomination[] = [];

  extendForm!: FormGroup;
  saving = false; errorMsg = '';
  closingId: string | null = null; extendId: string | null = null;

  // Billetage (clôture uniquement)
  closeBilletage = true; closeQty: Record<string, number> = {}; closeManual: number | null = null;
  closeReason = ''; closeNote = '';
  readonly ecartReasons = ['rendu', 'encaissement', 'depense', 'comptage', 'perte', 'autre'];

  // Rapport de session
  reportData: any = null;

  constructor(private svc: SessionService, private regSvc: RegisterService,
              private denSvc: DenominationService, private fb: FormBuilder,
              private auth: AuthService) {}

  private get me(): any { return this.auth.currentUser; }
  get isAdmin(): boolean { const u = this.me; return !!u && (!!u.is_superuser || !!u.is_institution_admin); }
  canManage(s: CashSession): boolean { return this.isAdmin || s.opened_by === this.me?.id; }

  openForm!: FormGroup;

  ngOnInit(): void {
    this.openForm = this.fb.group({
      cash_register_id: [null, Validators.required], name: [''], opening_balance: [0],
    });
    this.extendForm = this.fb.group({ scheduled_end: ['', Validators.required] });
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
  private total(qty: Record<string, number>): number { return this.denoms.reduce((s, d) => s + (+d.value) * (qty[d.id] || 0), 0); }
  get closeTotal(): number { return this.total(this.closeQty); }
  private toItems(qty: Record<string, number>): { denomination_id: string; quantity: number }[] {
    return this.denoms.filter(d => (qty[d.id] || 0) > 0).map(d => ({ denomination_id: d.id, quantity: qty[d.id] }));
  }

  // ── Ouvrir une session (directement, par un gestionnaire) ──
  openCreate(): void { this.errorMsg = ''; this.openForm.reset({ cash_register_id: null, name: '', opening_balance: 0 }); }
  submitOpen(): void {
    if (this.openForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.svc.open(this.openForm.value).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Session ouverte.'); this.close('trz-open-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Clôturer ──
  openClose(s: CashSession): void { this.closingId = s.id; this.errorMsg = ''; this.closeBilletage = true; this.closeQty = {}; this.closeManual = null; this.closeReason = ''; this.closeNote = ''; }
  submitClose(): void {
    if (this.saving || !this.closingId) return; this.saving = true; this.errorMsg = '';
    const payload: Record<string, unknown> = { justification_reason: this.closeReason, justification_note: this.closeNote };
    if (this.closeBilletage) payload['closing_count'] = this.toItems(this.closeQty);
    else payload['closing_balance'] = this.closeManual;
    this.svc.close(this.closingId, payload).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Session clôturée.'); this.close('trz-close-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Prolonger ──
  openExtend(s: CashSession): void { this.extendId = s.id; this.errorMsg = ''; this.extendForm.reset({ scheduled_end: '' }); }
  submitExtend(): void {
    if (this.extendForm.invalid || this.saving || !this.extendId) return; this.saving = true; this.errorMsg = '';
    this.svc.extend(this.extendId, this.extendForm.value.scheduled_end).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Prolongée.'); this.close('trz-extend-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Suspendre / Reprendre / Réouvrir ──
  private act(obs: any): void { obs.subscribe({ next: () => { this.load(); this.toast.success('Fait.'); }, error: (e: any) => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué.") }); }
  suspend(s: CashSession): void { this.act(this.svc.suspend(s.id)); }
  resume(s: CashSession): void { this.act(this.svc.resume(s.id)); }
  reopen(s: CashSession): void { if (confirm('Réouvrir cette session clôturée ?')) this.act(this.svc.reopen(s.id)); }

  // ── Rapport ──
  openReport(s: CashSession): void {
    this.reportData = null;
    this.svc.report(s.id).subscribe({ next: d => this.reportData = d, error: e => this.toast.error(e?.error?.detail ?? 'Rapport indisponible.') });
  }
  printReport(): void {
    const el = document.getElementById('session-report-print');
    if (!el) return;
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write('<html><head><title>Rapport de session</title><style>body{font-family:sans-serif;padding:24px;color:#222}table{width:100%;border-collapse:collapse;margin:8px 0}th,td{border:1px solid #ccc;padding:6px;text-align:left}h4{margin:12px 0 4px}</style></head><body>' + el.innerHTML + '</body></html>');
    w.document.close(); w.focus(); w.print();
  }

  statusCss(s: string): string {
    return { draft: 'bg-secondary', open: 'bg-success', suspended: 'bg-warning', closed: 'bg-dark' }[s] ?? 'bg-secondary';
  }
  ecartCss(s: string | null): string {
    return { surplus: 'text-success', shortage: 'text-danger', balanced: 'text-muted' }[s ?? ''] ?? '';
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
