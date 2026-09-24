import { Component, OnInit, OnDestroy, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { SessionService } from '../../../_api/services/treasury/session.service';
import { CashSession } from '../../../_api/models/treasury.models';

/**
 * Minuteur de session de caisse, affiché dans l'en-tête sur tous les écrans.
 * Décompte jusqu'à la fin prévue de la session. Une fois la plage horaire dépassée,
 * les ventes sont bloquées (côté serveur) mais la session reste visible : le
 * guichetier assigné y fait son BILLETAGE de fin de poste (le gestionnaire valide
 * et clôture ensuite depuis la page Sessions).
 */
@Component({
  selector: 'app-cash-session-timer',
  templateUrl: './cash-session-timer.component.html',
  styleUrls: ['./cash-session-timer.component.scss'],
  imports: [CommonModule, FormsModule, TranslocoModule],
})
export class CashSessionTimerComponent implements OnInit, AfterViewInit, OnDestroy {
  private svc = inject(SessionService);

  session: CashSession | null = null;
  now = Date.now();
  private tickId?: ReturnType<typeof setInterval>;
  private pollId?: ReturnType<typeof setInterval>;
  private billetageModalEl?: HTMLElement;

  // Billetage de fin de poste
  denoms: any[] = [];
  bqty: Record<string, number> = {};
  billetageLoading = false; billetageSaving = false; billetageErr = ''; billetageDone = false;

  ngOnInit(): void {
    this.refresh();
    this.tickId = setInterval(() => this.now = Date.now(), 1000);
    this.pollId = setInterval(() => this.refresh(), 60000);
  }
  ngAfterViewInit(): void {
    // La modale est rendue dans l'en-tête (contexte d'empilement) : on la déplace
    // sur <body> pour qu'elle passe au-dessus du backdrop et reste cliquable.
    const el = document.getElementById('cst-billetage-modal');
    if (el && el.parentElement !== document.body) {
      document.body.appendChild(el);
      this.billetageModalEl = el;
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.tickId);
    clearInterval(this.pollId);
    this.billetageModalEl?.remove();
  }

  refresh(): void {
    this.svc.myActive().subscribe({ next: s => this.session = s, error: () => this.session = null });
  }

  private get endMs(): number | null {
    const e = this.session?.scheduled_end;
    return e ? new Date(e).getTime() : null;
  }
  get remainingMs(): number { const e = this.endMs; return e != null ? e - this.now : 0; }
  /** Décompte tant que la fin prévue n'est pas atteinte. */
  get showCountdown(): boolean { return !!this.session && this.endMs != null && this.remainingMs > 0; }
  /** Fin de poste : la session est ouverte et l'heure de fin prévue est dépassée. */
  get showBilletage(): boolean { return !!this.session?.needs_billetage; }
  get countdown(): string {
    let s = Math.max(0, Math.floor(this.remainingMs / 1000));
    const h = Math.floor(s / 3600); s -= h * 3600;
    const m = Math.floor(s / 60); s -= m * 60;
    const p = (n: number) => n.toString().padStart(2, '0');
    return `${p(h)}:${p(m)}:${p(s)}`;
  }

  // ── Billetage ──────────────────────────────────────────────────────────────
  openBilletage(): void {
    if (!this.session) return;
    this.billetageErr = ''; this.billetageDone = false; this.billetageLoading = true;
    this.bqty = {}; this.denoms = [];
    this.svc.billetageGet(this.session.id).subscribe({
      next: d => {
        this.denoms = d?.denominations ?? [];
        for (const it of d?.count?.items ?? []) this.bqty[it.denomination] = it.quantity;
        this.billetageLoading = false;
      },
      error: () => { this.billetageLoading = false; this.billetageErr = "Chargement impossible."; },
    });
  }
  get billetageTotal(): number {
    return this.denoms.reduce((s, d) => s + (+d.value) * (this.bqty[d.id] || 0), 0);
  }
  saveBilletage(): void {
    if (!this.session || this.billetageSaving) return;
    this.billetageSaving = true; this.billetageErr = '';
    const items = this.denoms
      .filter(d => (this.bqty[d.id] || 0) > 0)
      .map(d => ({ denomination_id: d.id, quantity: this.bqty[d.id] }));
    this.svc.billetageSave(this.session.id, items).subscribe({
      next: () => { this.billetageSaving = false; this.billetageDone = true;
        document.getElementById('cst-billetage-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); },
      error: e => { this.billetageSaving = false; this.billetageErr = e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué."; },
    });
  }
}
