import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-H5O2FAIA.js";

// src/app/shared/custom-pagination/pagination.service.ts
var PaginationService = class _PaginationService {
  tablePageSize = new BehaviorSubject({ skip: 0, limit: 10, pageSize: 10 });
  calculatePageSize = new BehaviorSubject({
    totalData: 0,
    pageSize: 10,
    tableData: [],
    tableDataCopy: [],
    serialNumberArray: []
  });
  changePagesize = new BehaviorSubject({
    pageSize: 10
  });
  static \u0275fac = function PaginationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaginationService, factory: _PaginationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PaginationService
};
//# sourceMappingURL=chunk-24R3OVTU.js.map
