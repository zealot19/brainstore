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

// src/app/features/auth/forgot-password/forgot-password-2/forgot-password-2.component.ts
var ForgotPassword2Component = class _ForgotPassword2Component {
  router;
  routes = routes;
  constructor(router) {
    this.router = router;
  }
  navigation() {
    this.router.navigate([routes.emailVerification2]);
  }
  static \u0275fac = function ForgotPassword2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPassword2Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPassword2Component, selectors: [["app-forgot-password-2"]], decls: 41, vars: 2, consts: [[1, "account-content"], [1, "row", "login-wrapper", "m-0"], [1, "col-lg-6", "p-0"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "text", "value", "", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-mail"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/authentication-03.svg", "alt", "img"]], template: function ForgotPassword2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form")(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "h3");
      \u0275\u0275text(12, "Forgot password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "If you forgot your password, well, then we\u2019ll email you instructions to reset your password.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
      \u0275\u0275text(17, "Email ");
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13);
      \u0275\u0275element(21, "input", 14);
      \u0275\u0275elementStart(22, "span", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
      \u0275\u0275listener("click", function ForgotPassword2Component_Template_button_click_25_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(26, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 19)(28, "h4");
      \u0275\u0275text(29, "Return to");
      \u0275\u0275elementStart(30, "a", 20);
      \u0275\u0275text(31, " login ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 21)(33, "h4");
      \u0275\u0275text(34, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 22)(36, "p");
      \u0275\u0275text(37, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(38, "div", 2)(39, "div", 23);
      \u0275\u0275element(40, "img", 24);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.signIn2);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPassword2Component, [{
    type: Component,
    args: [{ selector: "app-forgot-password-2", imports: [RouterLink, FormsModule], template: '<div class="account-content">\n    <div class="row login-wrapper m-0">\n        <div class="col-lg-6 p-0">\n            <div class="login-content">\n                <form>\n                    <div class="login-userset">\n                        <div class="login-logo logo-normal">\n                        <img src="assets/img/logo.svg" alt="img">\n                    </div>\n                    <a [routerLink]="routes.index" class="login-logo logo-white">\n                        <img src="assets/img/logo-white.svg"  alt="Img">\n                    </a>\n                    <div class="login-userheading">\n                        <h3>Forgot password?</h3>\n                        <h4>If you forgot your password, well, then we\u2019ll email you instructions to reset your password.</h4>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Email <span class="text-danger"> *</span></label>\n                        <div class="input-group">\n                            <input type="text" value="" class="form-control border-end-0">\n                            <span class="input-group-text border-start-0">\n                                <i class="ti ti-mail"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class="form-login">\n                            <button type="submit" class="btn btn-login" (click)="navigation()">Sign Up</button>\n                    </div>\n                    <div class="signinform text-center">\n                        <h4>Return to<a [routerLink]="routes.signIn2" class="hover-a"> login </a></h4>\n                    </div>\n                    <div class="form-setlogin or-text">\n                        <h4>OR</h4>\n                    </div>\n                    <div class="my-4 d-flex justify-content-center align-items-center copyright-text">\n                        <p>Copyright &copy; 2025 DreamsPOS</p>\n                    </div>\n                </div>\n                </form>      \n            </div>\n        </div>\n        <div class="col-lg-6 p-0">\n            <div class="login-img">\n                <img src="assets/img/authentication/authentication-03.svg" alt="img">\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPassword2Component, { className: "ForgotPassword2Component", filePath: "src/app/features/auth/forgot-password/forgot-password-2/forgot-password-2.component.ts", lineNumber: 12 });
})();
export {
  ForgotPassword2Component
};
//# sourceMappingURL=chunk-7IKRSQYD.js.map
