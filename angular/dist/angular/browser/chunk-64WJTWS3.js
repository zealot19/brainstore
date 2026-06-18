import {
  RBAC
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

// src/_api/services/rbac/role.service.ts
var RoleService = class _RoleService {
  http;
  constructor(http) {
    this.http = http;
  }
  get(id) {
    return this.http.get(RBAC.role(id));
  }
  list(companyId) {
    const params = companyId ? new HttpParams().set("company", companyId) : void 0;
    return this.http.get(RBAC.roles, { params });
  }
  create(data) {
    return this.http.post(RBAC.roles, data);
  }
  update(id, data) {
    return this.http.patch(RBAC.role(id), data);
  }
  delete(id) {
    return this.http.delete(RBAC.role(id));
  }
  setPermissions(id, permissionIds) {
    return this.http.post(RBAC.rolePerms(id), { permission_ids: permissionIds });
  }
  static \u0275fac = function RoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleService, factory: _RoleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RoleService
};
//# sourceMappingURL=chunk-64WJTWS3.js.map
