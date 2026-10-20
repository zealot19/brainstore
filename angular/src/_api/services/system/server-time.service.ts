import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

/**
 * #4 — Cale l'heure de l'app sur l'horloge du SERVEUR.
 *
 * Au démarrage, on interroge `/system/time/` et on mémorise le décalage
 * (serveur − poste). `now()` renvoie ensuite l'instant serveur, même si
 * l'horloge du poste client est fausse. En cas d'échec réseau, on retombe
 * silencieusement sur l'horloge locale.
 */
@Injectable({ providedIn: 'root' })
export class ServerTimeService {
  private http = inject(HttpClient);
  private offsetMs = 0;
  /** Fuseau du serveur (ex: "Africa/Douala"). */
  tz = '';
  /** Décalage UTC du serveur, format pipe `date` (ex: "+0100"). '' => local du poste. */
  utcOffset = '';

  async init(): Promise<void> {
    try {
      const t0 = Date.now();
      const data: any = await firstValueFrom(
        this.http.get<any>(`${environment.apiUrl}/system/time/`).pipe(map(r => r?.data ?? r)));
      const t1 = Date.now();
      const serverMs = Number(data?.epoch_ms);
      if (serverMs) {
        // Compense la latence : instant serveur estimé au retour ≈ serverMs + rtt/2.
        const rtt = t1 - t0;
        this.offsetMs = (serverMs + rtt / 2) - t1;
      }
      this.tz = data?.tz ?? '';
      this.utcOffset = data?.utc_offset ?? '';
    } catch {
      // Horloge locale conservée.
    }
  }

  /** Instant courant côté serveur. */
  now(): Date { return new Date(Date.now() + this.offsetMs); }

  /** Décalage serveur − poste, en millisecondes. */
  get offset(): number { return this.offsetMs; }
}
