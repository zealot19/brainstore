import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { SessionService } from '../../../_api/services/treasury/session.service';
import { DenominationService } from '../../../_api/services/treasury/denomination.service';
import { CashSession, CurrencyDenomination } from '../../../_api/models/treasury.models';
import { ToastService } from '../toast/toast.service';

/**
 * Minuteur de session de caisse, affiché dans l'en-tête sur tous les écrans.
 * Décompte jusqu'à la fin prévue de la session ; une fois le temps écoulé
 * (ou en l'absence de fin prévue), il propose « Faire le billetage » pour
 * clôturer la session depuis n'importe où.
 */
@Component({
  selector: 'app-cash-session-timer',
  templateUrl: './cash-session-timer.component.html',
  styleUrls: ['./cash-session-timer.component.scss'],
  imports: [CommonModule, FormsModule, TranslocoModule],
})
export class CashSessionTimerComponent implements OnInit, OnDestroy {
  private svc = inject(SessionService);
  private denSvc = inject(DenominationService);
  private toast = inject(ToastService);

  session: CashSession | null = null;
  denoms: CurrencyDenomination[] = [];
  now = Date.now();
  private tickId?: ReturnType<typeof setInterval>;
  private pollId?: ReturnType<typeof setInterval>;

  // Billetage de clôture
  saving = false; errorMsg = '';
  closeBilletage = true; closeQty: Record<string, number> = {}; closeManual: number | null = null;
  closeReason = ''; closeNote = '';
  readonly ecartReasons = ['rendu', 'encaissement', 'depense', 'comptage', 'perte', 'autre'];

  ngOnInit(): void {
    this.refresh();
    this.denSvc.list().subscribe({ next: d => this.denoms = d.filter(x => x.is_active) });
    this.tickId = setInterval(() => this.now = Date.now(), 1000);
    this.pollId = setInterval(() => this.refresh(), 60000);
  }
  ngOnDestroy(): void { clearInterval(this.tickId); clearInterval(this.pollId); }

  refresh(): void {
    this.svc.myActive().subscribe({ next: s => this.session = s, error: () => this.session = null });
  }

  // ── Décompte ──
  private get endMs(): number | null {
    const e = this.session?.scheduled_end;
    return e ? new Date(e).getTime() : null;
  }
  get remainingMs(): number { const e = this.endMs; return e != null ? e - this.now : 0; }
  /** Bouton billetage : pas de fin prévue, ou temps écoulé. */
  get showBilletage(): boolean { return !!this.session && (this.endMs == null || this.remainingMs <= 0); }
  get countdown(): string {
    let s = Math.max(0, Math.floor(this.remainingMs / 1000));
    const h = Math.floor(s / 3600); s -= h * 3600;
    const m = Math.floor(s / 60); s -= m * 60;
    const p = (n: number) => n.toString().padStart(2, '0');
    return `${p(h)}:${p(m)}:${p(s)}`;
  }

  // ── Billetage helpers ──
  get closeTotal(): number { return this.denoms.reduce((s, d) => s + (+d.value) * (this.closeQty[d.id] || 0), 0); }
  private toItems(): { denomination_id: string; quantity: number }[] {
    return this.denoms.filter(d => (this.closeQty[d.id] || 0) > 0).map(d => ({ denomination_id: d.id, quantity: this.closeQty[d.id] }));
  }

  openClose(): void {
    this.errorMsg = ''; this.closeBilletage = true; this.closeQty = {}; this.closeManual = null;
    this.closeReason = ''; this.closeNote = '';
  }
  submitClose(): void {
    if (this.saving || !this.session) return; this.saving = true; this.errorMsg = '';
    const payload: Record<string, unknown> = { justification_reason: this.closeReason, justification_note: this.closeNote };
    if (this.closeBilletage) payload['closing_count'] = this.toItems();
    else payload['closing_balance'] = this.closeManual;
    this.svc.close(this.session.id, payload).subscribe({
      next: () => { this.saving = false; this.session = null; this.toast.success('Session clôturée.'); this.dismiss(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.error?.message ?? "L'opération a échoué."; } });
  }
  private dismiss(): void {
    document.getElementById('cst-billetage-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
