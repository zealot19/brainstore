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

// src/app/features/auth/successs/success/success.component.ts
var SuccessComponent = class _SuccessComponent {
  routes = routes;
  static \u0275fac = function SuccessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuccessComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuccessComponent, selectors: [["app-success"]], decls: 21, vars: 2, consts: [[1, "account-content"], [1, "login-wrapper", "register-wrap", "bg-img"], [1, "login-content", "authent-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading", "text-center"], ["src", "assets/img/icons/check-icon.svg", "alt", "Icon"], [1, "text-center"], [1, "verfy-mail-content", "text-center"], [1, "form-login"], [1, "btn", "btn-login", "mt-0", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function SuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 6);
      \u0275\u0275element(8, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275element(10, "img", 9);
      \u0275\u0275elementStart(11, "h3", 10);
      \u0275\u0275text(12, "Success");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4", 11);
      \u0275\u0275text(14, "Your Passwrod Reset Successfully!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "a", 13);
      \u0275\u0275text(17, "Back to Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 14)(19, "p");
      \u0275\u0275text(20, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.signIn);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuccessComponent, [{
    type: Component,
    args: [{ selector: "app-success", imports: [RouterLink], template: '<div class="account-content">\n    <div class="login-wrapper register-wrap bg-img">\n        <div class="login-content authent-content">\n            <div class="login-userset">\n                <div class="login-userset">\n                    <div class="login-logo logo-normal">\n                        <img src="assets/img/logo.svg" alt="img">\n                    </div>\n                </div>    \n                <a [routerLink]="routes.index" class="login-logo logo-white">\n                    <img src="assets/img/logo-white.svg"  alt="Img">\n                </a>\n                <div class="login-userheading text-center">\n                    <img src="assets/img/icons/check-icon.svg" alt="Icon">\n                    <h3 class="text-center">Success</h3>\n                    <h4 class="verfy-mail-content text-center">Your Passwrod Reset Successfully!</h4>\n                </div>\n                <div class="form-login">\n                    <a class="btn btn-login mt-0" [routerLink]="routes.signIn">Back to Login</a>\n                </div>\n                <div class="my-4 d-flex justify-content-center align-items-center copyright-text">\n                    <p>Copyright &copy; 2025 DreamsPOS</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuccessComponent, { className: "SuccessComponent", filePath: "src/app/features/auth/successs/success/success.component.ts", lineNumber: 11 });
})();
export {
  SuccessComponent
};
//# sourceMappingURL=chunk-EAKSMJPH.js.map
