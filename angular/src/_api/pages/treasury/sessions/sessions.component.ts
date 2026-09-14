import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService, Guichetier } from '../../../services/treasury/session.service';
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
  guichetiers: Guichetier[] = [];

  scheduleForm!: FormGroup; extendForm!: FormGroup;
  saving = false; errorMsg = '';
  openingId: string | null = null; closingId: string | null = null; extendId: string | null = null;

  // Billetage
  openBilletage = true;  openQty:  Record<string, number> = {}; openManual: number | null = null;
  closeBilletage = true; closeQty: Record<string, number> = {}; closeManual: number | null = null;

  constructor(private svc: SessionService, private regSvc: RegisterService,
              private denSvc: DenominationService, private fb: FormBuilder,
              private auth: AuthService) {}

  private get me(): any { return this.auth.currentUser; }
  get isAdmin(): boolean { const u = this.me; return !!u && (!!u.is_superuser || !!u.is_institution_admin); }
  canOpen(s: CashSession): boolean { return s.status === 'draft' && (this.isAdmin || s.assigned_to === this.me?.id); }
  canManage(s: CashSession): boolean { return this.isAdmin || s.opened_by === this.me?.id; }

  ngOnInit(): void {
    this.scheduleForm = this.fb.group({
      cash_register_id: [null, Validators.required], assigned_to_id: [null, Validators.required],
      name: [''], scheduled_start: [''], scheduled_end: [''],
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
  get openTotal(): number { return this.total(this.openQty); }
  get closeTotal(): number { return this.total(this.closeQty); }
  private toItems(qty: Record<string, number>): { denomination_id: string; quantity: number }[] {
    return this.denoms.filter(d => (qty[d.id] || 0) > 0).map(d => ({ denomination_id: d.id, quantity: qty[d.id] }));
  }

  // ── Planifier ──
  openSchedule(): void {
    this.errorMsg = ''; this.guichetiers = [];
    this.scheduleForm.reset({ cash_register_id: null, assigned_to_id: null, name: '', scheduled_start: '', scheduled_end: '' });
  }
  onScheduleRegister(): void {
    const rid = this.scheduleForm.value.cash_register_id;
    this.scheduleForm.patchValue({ assigned_to_id: null }); this.guichetiers = [];
    if (rid) this.svc.guichetiers(rid).subscribe({ next: d => this.guichetiers = d });
  }
  submitSchedule(): void {
    if (this.scheduleForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.svc.schedule(this.scheduleForm.value).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Session planifiée.'); this.close('trz-schedule-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Ouvrir une session planifiée ──
  openOpen(s: CashSession): void { this.openingId = s.id; this.errorMsg = ''; this.openBilletage = true; this.openQty = {}; this.openManual = null; }
  submitOpen(): void {
    if (this.saving || !this.openingId) return; this.saving = true; this.errorMsg = '';
    const payload: Record<string, unknown> = {};
    if (this.openBilletage) payload['opening_count'] = this.toItems(this.openQty);
    else payload['opening_balance'] = this.openManual;
    this.svc.openScheduled(this.openingId, payload).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Caisse ouverte.'); this.close('trz-open-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Clôturer ──
  openClose(s: CashSession): void { this.closingId = s.id; this.errorMsg = ''; this.closeBilletage = true; this.closeQty = {}; this.closeManual = null; }
  submitClose(): void {
    if (this.saving || !this.closingId) return; this.saving = true; this.errorMsg = '';
    const payload: Record<string, unknown> = {};
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

  statusCss(s: string): string {
    return { draft: 'bg-secondary', open: 'bg-success', suspended: 'bg-warning', closed: 'bg-dark' }[s] ?? 'bg-secondary';
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
