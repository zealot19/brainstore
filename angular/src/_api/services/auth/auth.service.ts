import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { PermissionService } from './permission.service';
import { AUTH, SCIG } from '../../config/api.config';
import {
  LoginRequest, LoginResponse, TwoFALoginRequest,
  TokenPair, UserProfile, UserSession,
} from '../../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // inject() permet d'utiliser le service dans l'initialisation des champs
  private readonly tokenService     = inject(TokenService);
  private readonly http             = inject(HttpClient);
  private readonly router           = inject(Router);
  private readonly permissionService = inject(PermissionService);

  // Profil courant — initialisé depuis localStorage pour affichage immédiat
  private _currentUser$ = new BehaviorSubject<UserProfile | null>(
    this.tokenService.getUser()
  );
  readonly currentUser$ = this._currentUser$.asObservable();

  // user_id temporaire stocké en mémoire entre login → 2FA (jamais en localStorage)
  private _pending2faUserId: string | null = null;

  // ── Connexion ────────────────────────────────────────────────────────────────

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH.login, credentials).pipe(
      tap(res => {
        if (res.requires_2fa && res.user_id) {
          this._pending2faUserId = res.user_id;
        } else if (res.access && res.refresh) {
          this._saveSession(res.access, res.refresh, res.user);
          this.permissionService.load().subscribe();
        }
      })
    );
  }

  loginWith2FA(code: string): Observable<LoginResponse> {
    const body: TwoFALoginRequest = { user_id: this._pending2faUserId!, code };
    return this.http.post<LoginResponse>(AUTH.login2fa, body).pipe(
      tap(res => {
        this._pending2faUserId = null;
        if (res.access && res.refresh) {
          this._saveSession(res.access, res.refresh, res.user);
          this.permissionService.load().subscribe();
        }
      })
    );
  }

  // ── Déconnexion ──────────────────────────────────────────────────────────────

  logout(): void {
    this._unlockOpenZoneIfAny();
    const refresh = this.tokenService.getRefreshToken();
    this.http.post(AUTH.logout, { refresh }).subscribe({ error: () => {} });
    this.permissionService.clear();
    this._clearAndRedirect('/signin');
  }

  logoutAll(): Observable<unknown> {
    this._unlockOpenZoneIfAny();
    return this.http.post(AUTH.logoutAll, {}).pipe(
      tap(() => {
        this.permissionService.clear();
        this._clearAndRedirect('/signin');
      })
    );
  }

  // ── Refresh token (appelé par l'error interceptor sur 401) ──────────────────

  refreshToken(): Observable<TokenPair> {
    const refresh = this.tokenService.getRefreshToken();
    return this.http.post<TokenPair>(AUTH.refresh, { refresh }).pipe(
      tap(tokens => {
        this.tokenService.saveTokens(
          tokens.access,
          tokens.refresh ?? this.tokenService.getRefreshToken()!
        );
      })
    );
  }

  // ── Profil ───────────────────────────────────────────────────────────────────

  getMe(): Observable<UserProfile> {
    return this.http.get<UserProfile>(AUTH.me).pipe(
      tap(user => {
        this.tokenService.saveUser(user);
        this._currentUser$.next(user);
      })
    );
  }

  updateMe(data: Partial<UserProfile>): Observable<UserProfile> {
    return this.http.patch<UserProfile>(AUTH.me, data).pipe(
      tap(user => {
        this.tokenService.saveUser(user);
        this._currentUser$.next(user);
      })
    );
  }

  // ── Sessions ─────────────────────────────────────────────────────────────────

  getSessions(): Observable<UserSession[]> {
    return this.http.get<UserSession[]>(AUTH.sessions);
  }

  revokeSession(jti: string): Observable<unknown> {
    return this.http.delete(AUTH.session(jti));
  }

  // ── Lock screen ──────────────────────────────────────────────────────────────

  /**
   * Appelé par l'error interceptor quand le refresh token est expiré mais
   * qu'un profil est toujours en cache — on verrouille plutôt que déconnecter.
   */
  lockScreen(returnUrl: string): void {
    this.tokenService.saveLockReturnUrl(returnUrl);
    // On efface les tokens mais on garde le profil en localStorage
    localStorage.removeItem('drp_access');
    localStorage.removeItem('drp_refresh');
    this.router.navigate(['/lock-screen']);
  }

  /** Re-auth depuis le lock screen — utilise l'email stocké dans le profil */
  unlockSession(password: string): Observable<LoginResponse> {
    const user = this.tokenService.getUser();
    if (!user?.email) throw new Error('Aucun profil en cache');
    return this.login({ identifier: user.email, password });
  }

  // ── Démarrage de l'application ───────────────────────────────────────────────

  /**
   * Appelé une fois au bootstrap (APP_INITIALIZER).
   * Rafraîchit silencieusement le profil si un token valide est présent.
   */
  initSession(): void {
    if (this.tokenService.isAuthenticated()) {
      this.getMe().subscribe({ error: () => {} });
      this.permissionService.load().subscribe();
    }
  }

  // ── Utilitaires ──────────────────────────────────────────────────────────────

  isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated();
  }

  get currentUser(): UserProfile | null {
    return this._currentUser$.getValue();
  }

  private _saveSession(access: string, refresh: string, user?: UserProfile): void {
    this.tokenService.saveTokens(access, refresh);
    if (user) {
      this.tokenService.saveUser(user);
      this._currentUser$.next(user);
    }
  }

  private _unlockOpenZoneIfAny(): void {
    try {
      const raw = localStorage.getItem('drp_open_zone');
      if (!raw) return;
      const { sessionId, zoneId } = JSON.parse(raw);
      this.http.post(SCIG.inventoryZoneUnlock(sessionId, zoneId), {}).subscribe({ error: () => {} });
      localStorage.removeItem('drp_open_zone');
    } catch {}
  }

  private _clearAndRedirect(path: string): void {
    this.tokenService.clearTokens();
    this._currentUser$.next(null);
    this.router.navigate([path]);
  }
}
