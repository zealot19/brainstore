import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SYSTEM } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class LicenseService {
  private http = inject(HttpClient);
  readonly locked = signal(false);
  readonly message = signal('Licence expirée, veuillez contacter l\'administrateur.');
  lock(msg?: string) { if (msg) this.message.set(msg); this.locked.set(true); }
  check() {
    this.http.get<{ valid: boolean; message: string }>(SYSTEM.license)
      .subscribe({ next: r => { if (!r.valid) this.lock(r.message); } });
  }
}
