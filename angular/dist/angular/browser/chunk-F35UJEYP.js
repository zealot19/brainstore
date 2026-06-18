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

// src/_api/services/rbac/profile.service.ts
var ProfileService = class _ProfileService {
  http;
  constructor(http) {
    this.http = http;
  }
  list(companyId) {
    const params = companyId ? new HttpParams().set("company", companyId) : void 0;
    return this.http.get(RBAC.profiles, { params });
  }
  create(data) {
    return this.http.post(RBAC.profiles, data);
  }
  update(id, data) {
    return this.http.patch(RBAC.profile(id), data);
  }
  delete(id) {
    return this.http.delete(RBAC.profile(id));
  }
  setRoles(id, roleIds) {
    return this.http.post(RBAC.profileRoles(id), { role_ids: roleIds });
  }
  getUserProfiles(userId) {
    return this.http.get(RBAC.userProfiles(userId));
  }
  assignToUser(userId, profileId, companyId) {
    return this.http.post(RBAC.userProfileAssign(userId), {
      profile_id: profileId,
      company_id: companyId
    });
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProfileService
};
//# sourceMappingURL=chunk-F35UJEYP.js.map
