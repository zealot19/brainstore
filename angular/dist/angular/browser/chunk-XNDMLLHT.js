import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-H5O2FAIA.js";

// src/_api/services/auth/token.service.ts
var KEYS = {
  ACCESS: "drp_access",
  REFRESH: "drp_refresh",
  USER: "drp_user",
  LOCK_RETURN_URL: "drp_lock_return"
};
var TokenService = class _TokenService {
  // ── Tokens ──────────────────────────────────────────────────────────────────
  saveTokens(access, refresh) {
    localStorage.setItem(KEYS.ACCESS, access);
    localStorage.setItem(KEYS.REFRESH, refresh);
  }
  getAccessToken() {
    return localStorage.getItem(KEYS.ACCESS);
  }
  getRefreshToken() {
    return localStorage.getItem(KEYS.REFRESH);
  }
  clearTokens() {
    localStorage.removeItem(KEYS.ACCESS);
    localStorage.removeItem(KEYS.REFRESH);
    localStorage.removeItem(KEYS.USER);
    localStorage.removeItem(KEYS.LOCK_RETURN_URL);
  }
  // ── Profil utilisateur (cache local) ────────────────────────────────────────
  saveUser(user) {
    localStorage.setItem(KEYS.USER, JSON.stringify(user));
  }
  getUser() {
    const raw = localStorage.getItem(KEYS.USER);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  // ── Lock screen ─────────────────────────────────────────────────────────────
  saveLockReturnUrl(url) {
    localStorage.setItem(KEYS.LOCK_RETURN_URL, url);
  }
  getLockReturnUrl() {
    return localStorage.getItem(KEYS.LOCK_RETURN_URL) ?? "/dashboard/index";
  }
  // ── Validation JWT (décodage sans library externe) ──────────────────────────
  isTokenExpired(token) {
    const t = token ?? this.getAccessToken();
    if (!t)
      return true;
    try {
      const payload = JSON.parse(atob(t.split(".")[1]));
      return Date.now() / 1e3 > payload.exp;
    } catch (e) {
      return true;
    }
  }
  isAuthenticated() {
    const token = this.getAccessToken();
    return !!token && !this.isTokenExpired(token);
  }
  /** Lit le user_id depuis les claims du JWT */
  getUserId() {
    const token = this.getAccessToken();
    if (!token)
      return null;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.user_id ?? payload.sub ?? null;
    } catch (e) {
      return null;
    }
  }
  /** Lit le tenant_id depuis les claims du JWT */
  getTenantId() {
    const token = this.getAccessToken();
    if (!token)
      return null;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.tenant_id ?? null;
    } catch (e) {
      return null;
    }
  }
  static \u0275fac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TokenService
};
//# sourceMappingURL=chunk-XNDMLLHT.js.map
