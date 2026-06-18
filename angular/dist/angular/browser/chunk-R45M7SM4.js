import {
  AUTH
} from "./chunk-RF55NRGJ.js";
import {
  HttpClient
} from "./chunk-4YQQF2GA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-H5O2FAIA.js";

// src/_api/services/auth/password.service.ts
var PasswordService = class _PasswordService {
  http;
  constructor(http) {
    this.http = http;
  }
  requestReset(data) {
    return this.http.post(AUTH.passwordReset, data);
  }
  confirmReset(data) {
    return this.http.post(AUTH.passwordResetConfirm, data);
  }
  changePassword(data) {
    return this.http.post(AUTH.changePassword, data);
  }
  static \u0275fac = function PasswordService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PasswordService, factory: _PasswordService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PasswordService
};
//# sourceMappingURL=chunk-R45M7SM4.js.map
