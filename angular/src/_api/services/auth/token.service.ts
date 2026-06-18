import { Injectable } from '@angular/core';
import { UserProfile } from '../../models/auth.models';

const KEYS = {
  ACCESS:  'drp_access',
  REFRESH: 'drp_refresh',
  USER:    'drp_user',
  LOCK_RETURN_URL: 'drp_lock_return',
} as const;

@Injectable({ providedIn: 'root' })
export class TokenService {

  // ── Tokens ──────────────────────────────────────────────────────────────────

  saveTokens(access: string, refresh: string): void {
    localStorage.setItem(KEYS.ACCESS, access);
    localStorage.setItem(KEYS.REFRESH, refresh);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(KEYS.ACCESS);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(KEYS.REFRESH);
  }

  clearTokens(): void {
    localStorage.removeItem(KEYS.ACCESS);
    localStorage.removeItem(KEYS.REFRESH);
    localStorage.removeItem(KEYS.USER);
    localStorage.removeItem(KEYS.LOCK_RETURN_URL);
  }

  // ── Profil utilisateur (cache local) ────────────────────────────────────────

  saveUser(user: UserProfile): void {
    localStorage.setItem(KEYS.USER, JSON.stringify(user));
  }

  getUser(): UserProfile | null {
    const raw = localStorage.getItem(KEYS.USER);
    if (!raw) return null;
    try { return JSON.parse(raw) as UserProfile; }
    catch { return null; }
  }

  // ── Lock screen ─────────────────────────────────────────────────────────────

  saveLockReturnUrl(url: string): void {
    localStorage.setItem(KEYS.LOCK_RETURN_URL, url);
  }

  getLockReturnUrl(): string {
    return localStorage.getItem(KEYS.LOCK_RETURN_URL) ?? '/dashboard/index';
  }

  // ── Validation JWT (décodage sans library externe) ──────────────────────────

  isTokenExpired(token?: string | null): boolean {
    const t = token ?? this.getAccessToken();
    if (!t) return true;
    try {
      const payload = JSON.parse(atob(t.split('.')[1]));
      return Date.now() / 1000 > payload.exp;
    } catch {
      return true;
    }
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return !!token && !this.isTokenExpired(token);
  }

  /** Lit le user_id depuis les claims du JWT */
  getUserId(): string | null {
    const token = this.getAccessToken();
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.user_id ?? payload.sub ?? null;
    } catch { return null; }
  }

  /** Lit le tenant_id depuis les claims du JWT */
  getTenantId(): string | null {
    const token = this.getAccessToken();
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.tenant_id ?? null;
    } catch { return null; }
  }
}
