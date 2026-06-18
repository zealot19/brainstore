import {
  TokenService
} from "./chunk-XNDMLLHT.js";
import {
  AUTH
} from "./chunk-RF55NRGJ.js";
import {
  Router
} from "./chunk-OWEB3HQZ.js";
import {
  HttpClient
} from "./chunk-4YQQF2GA.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-H5O2FAIA.js";

// src/_api/services/auth/auth.service.ts
var AuthService = class _AuthService {
  // inject() permet d'utiliser le service dans l'initialisation des champs
  tokenService = inject(TokenService);
  http = inject(HttpClient);
  router = inject(Router);
  // Profil courant — initialisé depuis localStorage pour affichage immédiat
  _currentUser$ = new BehaviorSubject(this.tokenService.getUser());
  currentUser$ = this._currentUser$.asObservable();
  // user_id temporaire stocké en mémoire entre login → 2FA (jamais en localStorage)
  _pending2faUserId = null;
  // ── Connexion ────────────────────────────────────────────────────────────────
  login(credentials) {
    return this.http.post(AUTH.login, credentials).pipe(tap((res) => {
      if (res.requires_2fa && res.user_id) {
        this._pending2faUserId = res.user_id;
      } else if (res.access && res.refresh) {
        this._saveSession(res.access, res.refresh, res.user);
      }
    }));
  }
  loginWith2FA(code) {
    const body = { user_id: this._pending2faUserId, code };
    return this.http.post(AUTH.login2fa, body).pipe(tap((res) => {
      this._pending2faUserId = null;
      if (res.access && res.refresh) {
        this._saveSession(res.access, res.refresh, res.user);
      }
    }));
  }
  // ── Déconnexion ──────────────────────────────────────────────────────────────
  logout() {
    const refresh = this.tokenService.getRefreshToken();
    this.http.post(AUTH.logout, { refresh }).subscribe({ error: () => {
    } });
    this._clearAndRedirect("/signin");
  }
  logoutAll() {
    return this.http.post(AUTH.logoutAll, {}).pipe(tap(() => this._clearAndRedirect("/signin")));
  }
  // ── Refresh token (appelé par l'error interceptor sur 401) ──────────────────
  refreshToken() {
    const refresh = this.tokenService.getRefreshToken();
    return this.http.post(AUTH.refresh, { refresh }).pipe(tap((tokens) => {
      this.tokenService.saveTokens(tokens.access, tokens.refresh ?? this.tokenService.getRefreshToken());
    }));
  }
  // ── Profil ───────────────────────────────────────────────────────────────────
  getMe() {
    return this.http.get(AUTH.me).pipe(tap((user) => {
      this.tokenService.saveUser(user);
      this._currentUser$.next(user);
    }));
  }
  updateMe(data) {
    return this.http.patch(AUTH.me, data).pipe(tap((user) => {
      this.tokenService.saveUser(user);
      this._currentUser$.next(user);
    }));
  }
  // ── Sessions ─────────────────────────────────────────────────────────────────
  getSessions() {
    return this.http.get(AUTH.sessions);
  }
  revokeSession(jti) {
    return this.http.delete(AUTH.session(jti));
  }
  // ── Lock screen ──────────────────────────────────────────────────────────────
  /**
   * Appelé par l'error interceptor quand le refresh token est expiré mais
   * qu'un profil est toujours en cache — on verrouille plutôt que déconnecter.
   */
  lockScreen(returnUrl) {
    this.tokenService.saveLockReturnUrl(returnUrl);
    localStorage.removeItem("drp_access");
    localStorage.removeItem("drp_refresh");
    this.router.navigate(["/lock-screen"]);
  }
  /** Re-auth depuis le lock screen — utilise l'email stocké dans le profil */
  unlockSession(password) {
    const user = this.tokenService.getUser();
    if (!user?.email)
      throw new Error("Aucun profil en cache");
    return this.login({ email: user.email, password });
  }
  // ── Démarrage de l'application ───────────────────────────────────────────────
  /**
   * Appelé une fois au bootstrap (APP_INITIALIZER).
   * Rafraîchit silencieusement le profil si un token valide est présent.
   */
  initSession() {
    if (this.tokenService.isAuthenticated()) {
      this.getMe().subscribe({ error: () => {
      } });
    }
  }
  // ── Utilitaires ──────────────────────────────────────────────────────────────
  isAuthenticated() {
    return this.tokenService.isAuthenticated();
  }
  get currentUser() {
    return this._currentUser$.getValue();
  }
  _saveSession(access, refresh, user) {
    this.tokenService.saveTokens(access, refresh);
    if (user) {
      this.tokenService.saveUser(user);
      this._currentUser$.next(user);
    }
  }
  _clearAndRedirect(path) {
    this.tokenService.clearTokens();
    this._currentUser$.next(null);
    this.router.navigate([path]);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-5G45XA3Z.js.map
