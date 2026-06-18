import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  Router,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/auth/forgot-password/forgot-password-3/forgot-password-3.component.ts
var ForgotPassword3Component = class _ForgotPassword3Component {
  router;
  routes = routes;
  constructor(router) {
    this.router = router;
  }
  navigation() {
    this.router.navigate([routes.emailVerification3]);
  }
  static \u0275fac = function ForgotPassword3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPassword3Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPassword3Component, selectors: [["app-forgot-password-3"]], decls: 40, vars: 2, consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "row", "w-100"], [1, "col-lg-5", "mx-auto"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "card"], [1, "card-body", "p-5"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "text", "value", "", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-mail"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function ForgotPassword3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form")(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h3");
      \u0275\u0275text(14, "Forgot password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16, "If you forgot your password, well, then we\u2019ll email you instructions to reset your password.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 13);
      \u0275\u0275text(19, "Email ");
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 19)(27, "button", 20);
      \u0275\u0275listener("click", function ForgotPassword3Component_Template_button_click_27_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(28, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 21)(30, "h4");
      \u0275\u0275text(31, "Return to");
      \u0275\u0275elementStart(32, "a", 22);
      \u0275\u0275text(33, " login ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "h4");
      \u0275\u0275text(36, "OR");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(37, "div", 24)(38, "p");
      \u0275\u0275text(39, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.signIn3);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPassword3Component, [{
    type: Component,
    args: [{ selector: "app-forgot-password-3", imports: [RouterLink, FormsModule], template: '<div class="account-content">\n    <div class="login-wrapper login-new">\n        <div class="row w-100">\n            <div class="col-lg-5 mx-auto">\n                <div class="login-content user-login">\n                    <div class="login-logo">\n                        <img src="assets/img/logo.svg" alt="img">\n                        <a [routerLink]="routes.index" class="login-logo logo-white">\n                            <img src="assets/img/logo-white.svg"  alt="Img">\n                        </a>\n                    </div>\n                    <form>\n                        <div class="card">\n                            <div class="card-body p-5">\n                                <div class="login-userheading">\n                                    <h3>Forgot password?</h3>\n                                    <h4>If you forgot your password, well, then we\u2019ll email you instructions to reset your password.</h4>\n                                </div>\n                                <div class="mb-3">\n                                    <label class="form-label">Email <span class="text-danger"> *</span></label>\n                                    <div class="input-group">\n                                        <input type="text" value="" class="form-control border-end-0">\n                                        <span class="input-group-text border-start-0">\n                                            <i class="ti ti-mail"></i>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class="form-login">\n                                    <button type="submit" class="btn btn-login" (click)="navigation()">Sign Up</button>\n                                </div>\n                                <div class="signinform text-center">\n                                    <h4>Return to<a [routerLink]="routes.signIn3" class="hover-a"> login </a></h4>\n                                </div>\n                                <div class="form-setlogin or-text">\n                                    <h4>OR</h4>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class="my-4 d-flex justify-content-center align-items-center copyright-text">\n                    <p>Copyright &copy; 2025 DreamsPOS</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPassword3Component, { className: "ForgotPassword3Component", filePath: "src/app/features/auth/forgot-password/forgot-password-3/forgot-password-3.component.ts", lineNumber: 12 });
})();
export {
  ForgotPassword3Component
};
//# sourceMappingURL=chunk-UNHIHGV3.js.map
