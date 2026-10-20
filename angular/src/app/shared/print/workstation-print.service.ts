import { Injectable } from '@angular/core';

export interface PrintDocDef { code: string; label: string; }

/** Documents imprimables mappables par poste. */
export const WS_PRINT_DOCS: PrintDocDef[] = [
  { code: 'recu_colis', label: 'Reçu de colis' },
  { code: 'etiquette_colis', label: 'Étiquette de colis' },
  { code: 'ticket_bagage', label: 'Ticket de bagage' },
  { code: 'etiquette_bagage', label: 'Étiquette de bagage' },
];

/**
 * Impression PAR POSTE : chaque poste guichet fait tourner l'agent local
 * (tools/print-helper) sur http://127.0.0.1:9113. Le navigateur lui envoie le HTML
 * du document ; l'agent le rend en PDF et l'imprime sur l'imprimante choisie POUR CE
 * POSTE (mappage enregistré en localStorage, propre à ce navigateur/poste).
 */
@Injectable({ providedIn: 'root' })
export class WorkstationPrintService {
  /** URL de l'agent local de CE poste (modifiable si l'agent écoute ailleurs). */
  agentUrl = localStorage.getItem('ws_agent_url') || 'http://127.0.0.1:9113';
  private readonly KEY = 'ws_printers';

  private map(): Record<string, string> {
    try { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); } catch { return {}; }
  }
  getPrinter(doc: string): string { return this.map()[doc] || ''; }
  setPrinter(doc: string, printer: string): void {
    const m = this.map();
    if (printer) m[doc] = printer; else delete m[doc];
    localStorage.setItem(this.KEY, JSON.stringify(m));
  }
  setAgentUrl(url: string): void {
    this.agentUrl = (url || 'http://127.0.0.1:9113').replace(/\/+$/, '');
    localStorage.setItem('ws_agent_url', this.agentUrl);
  }

  /** Imprimantes vues par l'agent local (ou [] s'il est injoignable). */
  async printers(): Promise<string[]> {
    try {
      const r = await fetch(`${this.agentUrl}/printers`);
      const d = await r.json();
      return (d?.printers ?? d ?? []) as string[];
    } catch { return []; }
  }

  /** Envoie le HTML à l'agent local pour impression silencieuse sur `printer`. */
  async print(printer: string, html: string): Promise<boolean> {
    try {
      const r = await fetch(`${this.agentUrl}/print`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ printer, html }),
      });
      return r.ok;
    } catch { return false; }
  }
}
