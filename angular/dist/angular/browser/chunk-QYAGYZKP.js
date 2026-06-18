import {
  SYSTEM
} from "./chunk-RF55NRGJ.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-4YQQF2GA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-H5O2FAIA.js";

// src/_api/services/system/agency.service.ts
var AgencyService = class _AgencyService {
  http;
  constructor(http) {
    this.http = http;
  }
  list(companyId) {
    const params = companyId ? new HttpParams().set("company", companyId) : void 0;
    return this.http.get(SYSTEM.agencies, { params });
  }
  tree(companyId) {
    const params = companyId ? new HttpParams().set("company", companyId) : void 0;
    return this.http.get(SYSTEM.agenciesTree, { params });
  }
  create(data) {
    return this.http.post(SYSTEM.agencies, data);
  }
  update(id, data) {
    return this.http.patch(SYSTEM.agency(id), data);
  }
  delete(id) {
    return this.http.delete(SYSTEM.agency(id));
  }
  static \u0275fac = function AgencyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AgencyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgencyService, factory: _AgencyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgencyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AgencyService
};
//# sourceMappingURL=chunk-QYAGYZKP.js.map
