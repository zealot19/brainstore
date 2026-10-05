import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SYSTEM } from '../../config/api.config';

export interface LicenseStatus {
  valid: boolean;
  status: string | null;
  expires_at: string | null;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class LicenseService {
  private http = inject(HttpClient);
  readonly locked = signal(false);
  readonly message = signal('Licence expirée, veuillez contacter l\'administrateur.');

  lock(msg?: string) { if (msg) this.message.set(msg); this.locked.set(true); }
  reset() { this.locked.set(false); }

  status$(): Observable<LicenseStatus> {
    return this.http.get<LicenseStatus>(SYSTEM.license);
  }

  check() {
    this.status$().subscribe({ next: r => { if (!r.valid) this.lock(r.message); } });
  }
}
