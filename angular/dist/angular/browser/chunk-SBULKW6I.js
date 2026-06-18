import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
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

// src/app/features/error/error-500/error-500.component.ts
var Error500Component = class _Error500Component {
  routes = routes;
  static \u0275fac = function Error500Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Error500Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error500Component, selectors: [["app-error-500"]], decls: 9, vars: 1, consts: [[1, "error-box"], [1, "error-img"], ["src", "assets/img/authentication/error-500.png", "alt", "", 1, "img-fluid"], [1, "h2", "mb-3"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function Error500Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h3", 3);
      \u0275\u0275text(4, "Oops, something went wrong");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Server Error 500. We apologise and are fixing the problem Please try again at a later stage");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Error500Component, [{
    type: Component,
    args: [{ selector: "app-error-500", imports: [RouterLink], template: '<div class="error-box">\n    <div class="error-img">\n        <img src="assets/img/authentication/error-500.png" class="img-fluid" alt="">\n    </div>\n    <h3 class="h2 mb-3">Oops, something went wrong</h3>\n    <p>Server Error 500. We apologise and are fixing the problem\n        Please try again at a  later stage</p>\n    <a [routerLink] = "routes.adminDashboard" class="btn btn-primary">Back to Dashboard</a>\n</div> ' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error500Component, { className: "Error500Component", filePath: "src/app/features/error/error-500/error-500.component.ts", lineNumber: 11 });
})();
export {
  Error500Component
};
//# sourceMappingURL=chunk-SBULKW6I.js.map
