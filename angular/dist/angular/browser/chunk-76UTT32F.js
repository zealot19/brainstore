import {
  SYSTEM
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

// src/_api/services/system/package.service.ts
var PackageService = class _PackageService {
  http;
  constructor(http) {
    this.http = http;
  }
  list() {
    return this.http.get(SYSTEM.packagesAdmin);
  }
  create(data) {
    return this.http.post(SYSTEM.packagesAdmin, data);
  }
  update(id, data) {
    return this.http.patch(SYSTEM.packageAdmin(id), data);
  }
  delete(id) {
    return this.http.delete(SYSTEM.packageAdmin(id));
  }
  static \u0275fac = function PackageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackageService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PackageService, factory: _PackageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PackageService
};
//# sourceMappingURL=chunk-76UTT32F.js.map
