import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH } from '../../config/api.config';
import {
  TwoFASetupResponse,
  TwoFAVerifyRequest,
  TwoFADisableRequest,
} from '../../models/auth.models';

@Injectable({ providedIn: 'root' })
export class TwoFactorService {

  constructor(private http: HttpClient) {}

  /** Génère le secret TOTP et l'URI QR code */
  setup(): Observable<TwoFASetupResponse> {
    return this.http.post<TwoFASetupResponse>(AUTH.twoFaSetup, {});
  }

  /** Vérifie le code TOTP et active la 2FA */
  verify(data: TwoFAVerifyRequest): Observable<unknown> {
    return this.http.post(AUTH.twoFaVerify, data);
  }

  /** Désactive la 2FA (mot de passe requis) */
  disable(data: TwoFADisableRequest): Observable<unknown> {
    return this.http.post(AUTH.twoFaDisable, data);
  }
}
