import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { SessionService } from '../../../_api/services/treasury/session.service';
import { CashSession } from '../../../_api/models/treasury.models';

/**
 * Minuteur de session de caisse, affiché dans l'en-tête sur tous les écrans.
 * Décompte jusqu'à la fin prévue de la session. Une fois la plage horaire
 * dépassée, la session ne donne plus accès à la caisse (côté serveur) : le
 * minuteur disparaît et plus aucune vente n'est possible. Le billetage/clôture
 * est fait par le gestionnaire depuis la page Sessions.
 */
@Component({
  selector: 'app-cash-session-timer',
  templateUrl: './cash-session-timer.component.html',
  styleUrls: ['./cash-session-timer.component.scss'],
  imports: [CommonModule, TranslocoModule],
})
export class CashSessionTimerComponent implements OnInit, OnDestroy {
  private svc = inject(SessionService);

  session: CashSession | null = null;
  now = Date.now();
  private tickId?: ReturnType<typeof setInterval>;
  private pollId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.refresh();
    this.tickId = setInterval(() => this.now = Date.now(), 1000);
    this.pollId = setInterval(() => this.refresh(), 60000);
  }
  ngOnDestroy(): void { clearInterval(this.tickId); clearInterval(this.pollId); }

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
  get countdown(): string {
    let s = Math.max(0, Math.floor(this.remainingMs / 1000));
    const h = Math.floor(s / 3600); s -= h * 3600;
    const m = Math.floor(s / 60); s -= m * 60;
    const p = (n: number) => n.toString().padStart(2, '0');
    return `${p(h)}:${p(m)}:${p(s)}`;
  }
}
