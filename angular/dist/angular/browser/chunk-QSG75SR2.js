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

// src/_api/services/system/company.service.ts
var CompanyService = class _CompanyService {
  http;
  constructor(http) {
    this.http = http;
  }
  list() {
    return this.http.get(SYSTEM.companies);
  }
  create(data, logoFile) {
    return this.http.post(SYSTEM.companies, this.buildPayload(data, logoFile));
  }
  update(id, data, logoFile) {
    return this.http.patch(SYSTEM.company(id), this.buildPayload(data, logoFile));
  }
  stats(id) {
    return this.http.get(SYSTEM.companyStats(id));
  }
  suspend(id, reason) {
    return this.http.post(SYSTEM.companySuspend(id), { reason });
  }
  activate(id) {
    return this.http.post(SYSTEM.companyActivate(id), {});
  }
  cancel(id) {
    return this.http.post(SYSTEM.companyCancel(id), {});
  }
  changePackage(id, package_id, billing_cycle) {
    return this.http.post(SYSTEM.companyChangePackage(id), { package_id, billing_cycle });
  }
  buildPayload(data, logoFile) {
    if (!logoFile)
      return data;
    const fd = new FormData();
    for (const [key, val] of Object.entries(data)) {
      if (val === null || val === void 0)
        continue;
      if (typeof val === "object" && !(val instanceof File)) {
        fd.append(key, JSON.stringify(val));
      } else {
        fd.append(key, val);
      }
    }
    fd.append("logo", logoFile);
    return fd;
  }
  static \u0275fac = function CompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CompanyService
};
//# sourceMappingURL=chunk-QSG75SR2.js.map
