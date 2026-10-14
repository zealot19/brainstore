import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../../_api/config/api.config';
import { printHtml } from './print.util';

/**
 * Impression d'un document via l'instance locale : le serveur tente l'agent d'impression
 * (imprimante mappée, silencieux) ; s'il ne peut pas (pas d'agent / pas de mappage), il
 * renvoie le HTML et on retombe sur la boîte d'impression du navigateur.
 *
 * doc ∈ recu_colis | etiquette_colis | ticket_bagage | etiquette_bagage | …
 */
@Injectable({ providedIn: 'root' })
export class PrintRouterService {
  private http = inject(HttpClient);

  print(doc: string, id: string): void {
    this.http.post<any>(VOYAGES_CONFIG.printDocument, { doc, id }).subscribe({
      next: r => {
        const d = r?.data ?? r;
        if (d && !d.printed && d.html) printHtml(d.html);   // repli navigateur
      },
      error: () => { /* agent/réseau indisponible : silencieux */ },
    });
  }
}
