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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/forms/form-elements/form-select/form-select.component.ts
var FormSelectComponent = class _FormSelectComponent {
  routes = routes;
  static \u0275fac = function FormSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormSelectComponent, selectors: [["app-form-select"]], decls: 66, vars: 1, consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["aria-label", "Default select example", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mb-3"], ["aria-label", ".form-select-sm example", 1, "form-select", "form-select-sm"], ["multiple", "", "aria-label", "multiple select example", 1, "form-select"]], template: function FormSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Form Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "Form Select");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
      \u0275\u0275text(16, "Basics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "select", 13)(19, "option", 14);
      \u0275\u0275text(20, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 15);
      \u0275\u0275text(22, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 16);
      \u0275\u0275text(24, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 17);
      \u0275\u0275text(26, "Three");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 8)(28, "div", 9)(29, "div", 10)(30, "h5", 11);
      \u0275\u0275text(31, "Sizing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 12)(33, "select", 18)(34, "option", 14);
      \u0275\u0275text(35, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 15);
      \u0275\u0275text(37, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 16);
      \u0275\u0275text(39, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 17);
      \u0275\u0275text(41, "Three");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "select", 19)(43, "option", 14);
      \u0275\u0275text(44, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 15);
      \u0275\u0275text(46, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 16);
      \u0275\u0275text(48, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 17);
      \u0275\u0275text(50, "Three");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(51, "div", 8)(52, "div", 9)(53, "div", 10)(54, "h5", 11);
      \u0275\u0275text(55, "Multiple Select");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 12)(57, "select", 20)(58, "option", 14);
      \u0275\u0275text(59, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 15);
      \u0275\u0275text(61, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 16);
      \u0275\u0275text(63, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 17);
      \u0275\u0275text(65, "Three");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSelectComponent, [{
    type: Component,
    args: [{ selector: "app-form-select", imports: [RouterLink], template: '<!-- Page Header -->\n<div class="page-header">\n    <div class="row">\n        <div class="col-sm-12">\n            <h3 class="page-title">Form Select</h3>\n            <ul class="breadcrumb">\n                <li class="breadcrumb-item"><a [routerLink] = "routes.adminDashboard">Dashboard</a></li>\n                <li class="breadcrumb-item active">Form Select</li>\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- /Page Header -->\n\n<div class="row">\n    <div class="col-md-6">\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Basics</h5>\n            </div>\n            <div class="card-body">\n                <select class="form-select" aria-label="Default select example">\n                    <option selected>Open this select menu</option>\n                    <option value="1">One</option>\n                    <option value="2">Two</option>\n                    <option value="3">Three</option>\n                </select>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-md-6">\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Sizing</h5>\n            </div>\n            <div class="card-body">\n                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">\n                    <option selected>Open this select menu</option>\n                    <option value="1">One</option>\n                    <option value="2">Two</option>\n                    <option value="3">Three</option>\n                </select>\n\n                <select class="form-select form-select-sm" aria-label=".form-select-sm example">\n                    <option selected>Open this select menu</option>\n                    <option value="1">One</option>\n                    <option value="2">Two</option>\n                    <option value="3">Three</option>\n                </select>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-md-6">\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Multiple Select</h5>\n            </div>\n            <div class="card-body">\n                <select class="form-select" multiple aria-label="multiple select example">\n                    <option selected>Open this select menu</option>\n                    <option value="1">One</option>\n                    <option value="2">Two</option>\n                    <option value="3">Three</option>\n                </select>\n            </div>\n        </div>\n    </div>\n\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormSelectComponent, { className: "FormSelectComponent", filePath: "src/app/features/pages/ui-interface/forms/form-elements/form-select/form-select.component.ts", lineNumber: 11 });
})();
export {
  FormSelectComponent
};
//# sourceMappingURL=chunk-VJUKIBJA.js.map
