import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/pages/under-maintenance/under-maintenance.component.ts
var UnderMaintenanceComponent = class _UnderMaintenanceComponent {
  routes = routes;
  static \u0275fac = function UnderMaintenanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnderMaintenanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnderMaintenanceComponent, selectors: [["app-under-maintenance"]], decls: 9, vars: 1, consts: [[1, "error-box"], [1, "error-img"], ["src", "assets/img/authentication/under-maintenance.png", "alt", "", 1, "img-fluid"], [1, "h2", "mb-3"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function UnderMaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h3", 3);
      \u0275\u0275text(4, "We are Under Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Sorry for any inconvenience caused, we have almost done Will get back soon!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275text(8, "Back to Dashboard");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnderMaintenanceComponent, [{
    type: Component,
    args: [{ selector: "app-under-maintenance", imports: [RouterLink], template: '\n<div class="error-box">\n    <div class="error-img">\n        <img src="assets/img/authentication/under-maintenance.png" class="img-fluid" alt="">\n    </div>\n    <h3 class="h2 mb-3">We are Under Maintenance</h3>\n    <p>Sorry for any inconvenience caused, we have almost done \n        Will get back soon!</p>\n    <a [routerLink] = "routes.adminDashboard" class="btn btn-primary">Back to Dashboard</a>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnderMaintenanceComponent, { className: "UnderMaintenanceComponent", filePath: "src/app/features/pages/pages/under-maintenance/under-maintenance.component.ts", lineNumber: 11 });
})();
export {
  UnderMaintenanceComponent
};
//# sourceMappingURL=chunk-XUAVE577.js.map
