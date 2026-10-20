import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { VOYAGES_CONFIG } from '../../../_api/config/api.config';
import { printHtml } from './print.util';
import { WorkstationPrintService } from './workstation-print.service';

/**
 * Impression PAR POSTE : on récupère le HTML du document auprès du serveur, puis on
 * l'envoie à l'agent d'impression LOCAL de ce poste (http://127.0.0.1:9113) qui imprime
 * en silence sur l'imprimante configurée pour ce poste (reçu et étiquette peuvent partir
 * sur deux imprimantes différentes). Sans imprimante configurée ou agent injoignable,
 * on retombe sur la boîte d'impression du navigateur.
 *
 * doc ∈ recu_colis | etiquette_colis | ticket_bagage | etiquette_bagage | …
 */
@Injectable({ providedIn: 'root' })
export class PrintRouterService {
  private http = inject(HttpClient);
  private ws = inject(WorkstationPrintService);

  print(doc: string, id: string): void {
    this.http.post<any>(VOYAGES_CONFIG.printDocumentHtml, { doc, id })
      .pipe(map(r => r?.data ?? r))
      .subscribe({
        next: async (d: any) => {
          const html: string = d?.html || '';
          if (!html) return;
          const printer = this.ws.getPrinter(doc);
          if (printer && await this.ws.print(printer, html)) return;   // agent local, silencieux
          printHtml(html);                                             // repli navigateur
        },
        error: () => { /* document indisponible : silencieux */ },
      });
  }
}
