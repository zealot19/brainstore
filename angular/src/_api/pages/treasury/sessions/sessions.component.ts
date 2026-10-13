import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../services/treasury/session.service';
import { RegisterService } from '../../../services/treasury/register.service';
import { DenominationService } from '../../../services/treasury/denomination.service';
import { ValueTypeService } from '../../../services/treasury/value-type.service';
import { ExplanationService, ExplanationRequest } from '../../../services/treasury/explanation.service';
import { AuthService } from '../../../services/auth/auth.service';
import { CashSession, CashRegister, CurrencyDenomination, CashValueType } from '../../../models/treasury.models';
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
  styleUrls: ['./sessions.component.scss'],
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class TrzSessionsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: CashSession[] = []; loading = true; statusFilter = '';
  registers: CashRegister[] = [];
  denoms: CurrencyDenomination[] = [];
  valueTypes: CashValueType[] = [];

  extendForm!: FormGroup;
  saving = false; errorMsg = '';
  closingId: string | null = null; extendId: string | null = null;
  closingSession: CashSession | null = null; closeDestId: string | null = null;
  openScheduledId: string | null = null; openScheduledBalance: number | null = 0;

  // Billetage (clôture uniquement)
  closeBilletage = true; closeQty: Record<string, number> = {}; closeManual: number | null = null;
  closeAmounts: Record<string, number> = {};   // M28 : montants des autres valeurs par type
  closeReason = ''; closeNote = '';

  // Rapport de session
  reportData: any = null;

  // M30 — demandes d'explication d'écart
  explSession: CashSession | null = null; expl: ExplanationRequest[] = [];
  explNote = ''; respNote: Record<string, string> = {}; decVal: Record<string, string> = {}; decNote: Record<string, string> = {};

  constructor(private svc: SessionService, private regSvc: RegisterService,
              private denSvc: DenominationService, private vtSvc: ValueTypeService,
              private explSvc: ExplanationService,
              private fb: FormBuilder, private auth: AuthService) {}

  hasEcart(s: CashSession): boolean { return s.status === 'closed' && s.difference != null && +s.difference !== 0; }
  openExpl(s: CashSession): void {
    this.explSession = s; this.explNote = ''; this.expl = [];
    this.explSvc.list(s.id).subscribe({ next: d => this.expl = d, error: () => {} });
  }
  private reloadExpl(): void { if (this.explSession) this.explSvc.list(this.explSession.id).subscribe(d => this.expl = d); }
  doRaise(): void {
    if (!this.explSession || !this.explNote.trim()) return;
    this.explSvc.raise(this.explSession.id, this.explNote).subscribe({
      next: () => { this.explNote = ''; this.reloadExpl(); this.toast.success('Demande envoyée.'); },
      error: e => this.toast.error(e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué.") });
  }
  doRespond(id: string): void {
    const note = (this.respNote[id] || '').trim(); if (!note) return;
    this.explSvc.respond(id, note).subscribe({
      next: () => { this.reloadExpl(); this.toast.success('Réponse envoyée.'); },
      error: e => this.toast.error(e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué.") });
  }
  doDecide(id: string): void {
    const d = this.decVal[id] || 'justified';
    this.explSvc.decide(id, d, this.decNote[id] || '').subscribe({
      next: () => { this.reloadExpl(); this.toast.success('Décision enregistrée.'); },
      error: e => this.toast.error(e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué.") });
  }

  private get me(): any { return this.auth.currentUser; }
  get isAdmin(): boolean { const u = this.me; return !!u && (!!u.is_superuser || !!u.is_institution_admin); }
  canManage(s: CashSession): boolean { return this.isAdmin || s.opened_by === this.me?.id; }
  // Le guichetier assigné n'ouvre pas la session : un gestionnaire le fait.
  canOpenDraft(s: CashSession): boolean { return this.isAdmin || s.assigned_to !== this.me?.id; }
  // La clôture (billetage de fin) est aussi permise au guichetier assigné.
  // La clôture appartient au chef d'agence (gestionnaire) ; le guichetier ne clôture plus.
  canClose(s: CashSession): boolean { return this.canManage(s); }
  // M29 : le caissier assigné (ou admin) arrête sa session ouverte.
  canStop(s: CashSession): boolean { return s.status === 'open' && (this.isAdmin || s.assigned_to === this.me?.id); }
  stopSession(s: CashSession): void {
    this.svc.stop(s.id).subscribe({
      next: () => { this.load(); this.toast.success('Session arrêtée.'); },
      error: e => this.toast.error(e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué."),
    });
  }

  openForm!: FormGroup;
  scheduleForm!: FormGroup;

  ngOnInit(): void {
    this.openForm = this.fb.group({
      cash_register_id: [null, Validators.required], name: [''], opening_balance: [0],
    });
    // Fond d'ouverture pré-rempli avec le montant trouvé en caisse (report de la caisse
    // choisie) : on n'ouvre jamais à 0 par défaut une caisse qui garde des espèces.
    this.openForm.get('cash_register_id')!.valueChanges.subscribe((id: string | null) => {
      const reg = this.registers.find(r => r.id === id);
      this.openForm.get('opening_balance')!.setValue(reg ? +(reg.current_balance || 0) : 0);
    });
    this.scheduleForm = this.fb.group({
      cash_register_id: [null, Validators.required],
      name: [''], scheduled_start: ['', Validators.required], scheduled_end: [''],
    });
    this.extendForm = this.fb.group({ scheduled_end: ['', Validators.required] });
    this.regSvc.list().subscribe({ next: d => this.registers = d.filter(r => r.is_active) });
    this.denSvc.list().subscribe({ next: d => this.denoms = d.filter(x => x.is_active) });
    this.vtSvc.list().subscribe({ next: d => this.valueTypes = d.filter(x => x.is_active) });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list(this.statusFilter ? { status: this.statusFilter } : undefined)
      .subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

  // ── Billetage helpers ──
  private total(qty: Record<string, number>): number { return this.denoms.reduce((s, d) => s + (+d.value) * (qty[d.id] || 0), 0); }
  get closeTotal(): number { return this.total(this.closeQty); }            // espèces (base de l'écart)
  get otherTotal(): number { return this.valueTypes.reduce((s, v) => s + (+this.closeAmounts[v.id] || 0), 0); }
  get grandTotal(): number { return this.closeTotal + this.otherTotal; }    // total affiché
  private toItems(qty: Record<string, number>): any[] {
    const cash = this.denoms.filter(d => (qty[d.id] || 0) > 0).map(d => ({ denomination_id: d.id, quantity: qty[d.id] }));
    const vals = this.valueTypes.filter(v => (+this.closeAmounts[v.id] || 0) > 0).map(v => ({ value_type_id: v.id, amount: this.closeAmounts[v.id] }));
    return [...cash, ...vals];
  }

  // ── Ouvrir une session (directement, par un gestionnaire) ──
  openCreate(): void { this.errorMsg = ''; this.openForm.reset({ cash_register_id: null, name: '', opening_balance: 0 }); }
  submitOpen(): void {
    if (this.openForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.svc.open(this.openForm.value).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Session ouverte.'); this.close('trz-open-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Planifier une session (par un gestionnaire) ──
  // Le guichetier n'est plus choisi ici : la session est assignée au gestionnaire
  // (guichetier) de la caisse côté serveur.
  openSchedule(): void {
    this.errorMsg = '';
    this.scheduleForm.reset({ cash_register_id: null, name: '', scheduled_start: '', scheduled_end: '' });
  }
  // Libellé caisse « Nom caisse — nom gestionnaire » (le gestionnaire est le guichetier).
  registerLabel(r: CashRegister): string {
    const g = (r.manager_names && r.manager_names.length) ? r.manager_names.join(', ')
            : (r.responsible_name || '');
    return g ? `${r.name} — ${g}` : r.name;
  }
  submitSchedule(): void {
    if (this.scheduleForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.svc.schedule(this.scheduleForm.value).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Session planifiée.'); this.close('trz-schedule-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Ouvrir une session planifiée (par un gestionnaire) ──
  openOpenScheduled(s: CashSession): void { this.openScheduledId = s.id; this.errorMsg = ''; this.openScheduledBalance = s.opening_balance != null ? +s.opening_balance : 0; }
  submitOpenScheduled(): void {
    if (this.saving || !this.openScheduledId) return; this.saving = true; this.errorMsg = '';
    this.svc.openScheduled(this.openScheduledId, { opening_balance: this.openScheduledBalance }).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Session ouverte.'); this.close('trz-open-scheduled-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Clôturer ──
  openClose(s: CashSession): void {
    this.closingId = s.id; this.closingSession = s; this.closeDestId = null; this.errorMsg = '';
    this.closeBilletage = true; this.closeQty = {}; this.closeAmounts = {}; this.closeManual = null; this.closeReason = ''; this.closeNote = '';
    // Pré-remplir le billetage à partir du dernier comptage saisi par le guichetier.
    this.svc.counts(s.id).subscribe({ next: (cs: any[]) => {
      const last = (cs || []).filter(c => c.kind === 'closing').pop();
      if (last) for (const it of last.items || []) {
        if (it.denomination) this.closeQty[it.denomination] = it.quantity;
        else if (it.value_type) this.closeAmounts[it.value_type] = +it.subtotal;
      }
    }, error: () => {} });
  }
  get closingIsGuichet(): boolean { return this.closingSession?.register_kind === 'guichet'; }
  get destinationRegisters(): CashRegister[] { return this.registers.filter(r => r.id !== this.closingSession?.cash_register); }
  // Écart saisi APRÈS clôture (le motif n'est plus demandé avant validation).
  ecartSession: CashSession | null = null; ecartNote = '';

  /** Message lisible depuis une erreur HTTP (gère les détails de validation DRF, évite « [object Object] »). */
  private errText(e: any): string {
    if (e?.error?.detail) return e.error.detail;
    const err = e?.error?.error ?? e?.error ?? {};
    const details = err?.details;
    if (details && typeof details === 'object') {
      const flat = (v: any): string => Array.isArray(v)
        ? v.map(flat).join(' ')
        : (v && typeof v === 'object' ? Object.values(v).map(flat).join(' ') : String(v));
      const parts = Object.entries(details).map(([k, v]) => `${k}: ${flat(v)}`);
      if (parts.length) return parts.join(' · ');
    }
    return err?.message ?? "L'opération a échoué.";
  }

  submitClose(): void {
    if (this.saving || !this.closingId) return; this.saving = true; this.errorMsg = '';
    const payload: Record<string, unknown> = {};
    if (this.closeBilletage) payload['closing_count'] = this.toItems(this.closeQty);
    else payload['closing_balance'] = this.closeManual;
    if (this.closingIsGuichet) payload['destination_cash_register_id'] = this.closeDestId;
    this.svc.close(this.closingId, payload).subscribe({
      next: (s: CashSession) => {
        this.saving = false; this.load(); this.toast.success('Session clôturée.'); this.close('trz-close-modal');
        // Un écart constaté : on demande le motif/note APRÈS validation.
        if (s && s.difference != null && +s.difference !== 0) {
          this.ecartSession = s; this.ecartNote = '';
        }
      },
      error: e => { this.saving = false; this.errorMsg = this.errText(e); } });
  }

  closeEcart(): void { this.ecartSession = null; }
  submitEcart(): void {
    if (!this.ecartSession) return;
    this.svc.justifyEcart(this.ecartSession.id, { justification_note: this.ecartNote.trim() })
      .subscribe({ next: () => { this.ecartSession = null; this.load(); this.toast.success('Écart noté.'); },
        error: e => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué.") });
  }

  // ── Validation de clôture (admin) : (dé)valider l'écriture, ou rouvrir pour réajuster ──
  validateClosure(s: CashSession): void { this.act(this.svc.validate(s.id)); }
  unvalidateClosure(s: CashSession): void {
    if (!confirm('Dévalider cette clôture ? Le transfert et les écritures comptables seront extournés.')) return;
    this.act(this.svc.unvalidate(s.id));
  }
  reopenSession(s: CashSession): void {
    if (!confirm('Rouvrir cette session clôturée pour la réajuster ?')) return;
    this.act(this.svc.reopen(s.id));
  }

  // ── Prolonger ──
  openExtend(s: CashSession): void { this.extendId = s.id; this.errorMsg = ''; this.extendForm.reset({ scheduled_end: '' }); }
  submitExtend(): void {
    if (this.extendForm.invalid || this.saving || !this.extendId) return; this.saving = true; this.errorMsg = '';
    this.svc.extend(this.extendId, this.extendForm.value.scheduled_end).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Prolongée.'); this.close('trz-extend-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }

  // ── Suspendre / Reprendre ──
  private act(obs: any): void { obs.subscribe({ next: () => { this.load(); this.toast.success('Fait.'); }, error: (e: any) => this.toast.error(e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué.") }); }
  suspend(s: CashSession): void { this.act(this.svc.suspend(s.id)); }
  resume(s: CashSession): void { this.act(this.svc.resume(s.id)); }

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
    const css = `
      *{box-sizing:border-box}
      body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#1f2733;padding:20px;max-width:820px;margin:0 auto}
      .sr-report{font-size:12.5px}
      .sr-head{border:1px solid #e5e7ef;border-radius:10px;padding:12px 14px;margin-bottom:14px;background:#fafbff}
      .sr-head-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px}
      .sr-title{font-size:17px;font-weight:700;margin:0}.sr-sub{font-weight:400;color:#6b7480}
      .sr-badge{padding:3px 11px;border-radius:999px;font-size:11px;font-weight:600;background:#eef1f6;color:#475569}
      .sr-badge-closed{background:#e7ebf2;color:#334155}
      .sr-meta{display:grid;grid-template-columns:1fr 1fr;gap:3px 20px}
      .sr-meta span{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.03em;color:#98a1b0}
      .sr-meta b{font-weight:600}
      .sr-kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:8px}
      .sr-kpi{border:1px solid #e5e7ef;border-radius:8px;padding:8px 6px;text-align:center}
      .sr-kpi-strong{border-color:#c7d2fe;background:#f5f6ff}
      .sr-kpi-lbl{font-size:9.5px;text-transform:uppercase;letter-spacing:.03em;color:#98a1b0}
      .sr-kpi-val{font-size:15px;font-weight:700;margin-top:2px}
      .sr-pos{color:#16a34a}.sr-neg{color:#ef4444}
      .sr-ecart{text-align:center;margin:4px 0 16px}
      .sr-ecart-pill{display:inline-block;padding:5px 16px;border-radius:999px;font-weight:700}
      .sr-ecart-surplus{background:#e6f6ec;color:#16a34a}.sr-ecart-shortage{background:#fdecec;color:#ef4444}
      .sr-ecart-balanced{background:#eef1f6;color:#5a6474}.sr-ecart-reason{font-weight:500}
      .sr-grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
      .sr-section{margin-bottom:14px;break-inside:avoid}
      .sr-section-title{font-size:13px;font-weight:700;margin:0 0 6px;padding-bottom:4px;border-bottom:2px solid #eef1f6}
      .sr-count{font-weight:500;color:#98a1b0}
      table.sr-table{width:100%;border-collapse:collapse;font-size:12px}
      .sr-table th{background:#f5f7fb;text-align:left;padding:6px 8px;color:#5a6474;font-weight:600;border-bottom:1px solid #e5e7ef}
      .sr-table td{padding:5px 8px;border-bottom:1px solid #f0f2f7}
      .sr-table tfoot td{font-weight:700;border-top:2px solid #e5e7ef;background:#fafbff}
      .sr-ref{color:#98a1b0}.text-end{text-align:right}
      @media print{body{padding:0}}`;
    w.document.write(`<html><head><title>Rapport de session</title><meta charset="utf-8"><style>${css}</style></head><body>${el.innerHTML}</body></html>`);
    w.document.close(); w.focus(); w.print();
  }

  statusCss(s: string): string {
    return { draft: 'bg-secondary', open: 'bg-success', suspended: 'bg-warning', closed: 'bg-dark' }[s] ?? 'bg-secondary';
  }
  ecartCss(s: string | null): string {
    return { surplus: 'text-success', shortage: 'text-danger', balanced: 'text-muted' }[s ?? ''] ?? '';
  }
  /** Total d'un bordereau (billets / colis / bagages). */
  srSum(rows: any[]): number { return (rows || []).reduce((t, r) => t + (+r.amount || 0), 0); }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
