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

// src/app/features/auth/signin/signin-3/signin-3.component.ts
var Signin3Component = class _Signin3Component {
  router;
  routes = routes;
  constructor(router) {
    this.router = router;
  }
  navigation() {
    this.router.navigate([routes.index]);
  }
  password = [false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  static \u0275fac = function Signin3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Signin3Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Signin3Component, selectors: [["app-signin-3"]], decls: 70, vars: 3, consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "row", "w-100"], [1, "col-lg-5", "mx-auto"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "card"], [1, "card-body", "p-5"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "text", "value", "", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-mail"], [1, "pass-group"], ["type", "password", 1, "pass-input", "form-control"], [1, "ti", "toggle-password", "ti-eye-off", "text-gray-9"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1", "fs-16", "text-gray-6"], ["type", "checkbox", 1, "form-control"], [1, "checkmarks"], [1, "text-end"], [1, "text-orange", "fs-16", "fw-medium", 3, "routerLink"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "mt-2"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap"], [1, "text-center", "me-2", "flex-fill"], ["href", "javascript:void(0);", 1, "br-10", "p-2", "btn", "btn-info", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "br-10", "p-2", "border", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/google-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], [1, "text-center", "flex-fill"], ["href", "javascript:void(0);", 1, "bg-dark", "br-10", "p-2", "btn", "btn-dark", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple", 1, "img-fluid", "m-1"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function Signin3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form")(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h3");
      \u0275\u0275text(14, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16, "Access the Dreamspos panel using your email and passcode.");
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
      \u0275\u0275elementStart(26, "div", 12)(27, "label", 13);
      \u0275\u0275text(28, "Password ");
      \u0275\u0275elementStart(29, "span", 14);
      \u0275\u0275text(30, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 19);
      \u0275\u0275element(32, "input", 20)(33, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 22)(35, "div", 23)(36, "div", 24)(37, "div", 25)(38, "label", 26);
      \u0275\u0275element(39, "input", 27)(40, "span", 28);
      \u0275\u0275text(41, "Remember me ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 29)(43, "a", 30);
      \u0275\u0275text(44, "Forgot Password?");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 31)(46, "button", 32);
      \u0275\u0275listener("click", function Signin3Component_Template_button_click_46_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(47, "Sign In");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 33)(49, "h4");
      \u0275\u0275text(50, "New on our platform?");
      \u0275\u0275elementStart(51, "a", 34);
      \u0275\u0275text(52, " Create an account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 35)(54, "h4");
      \u0275\u0275text(55, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 36)(57, "div", 37)(58, "div", 38)(59, "a", 39);
      \u0275\u0275element(60, "img", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 38)(62, "a", 41);
      \u0275\u0275element(63, "img", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 43)(65, "a", 44);
      \u0275\u0275element(66, "img", 45);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(67, "div", 46)(68, "p");
      \u0275\u0275text(69, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(36);
      \u0275\u0275property("routerLink", ctx.routes.forgotPassword3);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.register3);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Signin3Component, [{
    type: Component,
    args: [{ selector: "app-signin-3", imports: [RouterLink, FormsModule], template: '<div class="account-content">\n    <div class="login-wrapper login-new">\n        <div class="row w-100">\n            <div class="col-lg-5 mx-auto">\n                <div class="login-content user-login">\n                    <div class="login-logo">\n                        <img src="assets/img/logo.svg" alt="img">\n                        <a [routerLink]="routes.index" class="login-logo logo-white">\n                            <img src="assets/img/logo-white.svg"  alt="Img">\n                        </a>\n                    </div>\n                    <form >\n                        <div class="card">\n                            <div class="card-body p-5">\n                                <div class="login-userheading">\n                                    <h3>Sign In</h3>\n                                    <h4>Access the Dreamspos panel using your email and passcode.</h4>\n                                </div>\n                                <div class="mb-3">\n                                    <label class="form-label">Email <span class="text-danger"> *</span></label>\n                                    <div class="input-group">\n                                        <input type="text" value="" class="form-control border-end-0">\n                                        <span class="input-group-text border-start-0">\n                                            <i class="ti ti-mail"></i>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class="mb-3">\n                                    <label class="form-label">Password <span class="text-danger"> *</span></label>\n                                    <div class="pass-group">\n                                        <input type="password" class="pass-input form-control">\n                                        <span class="ti toggle-password ti-eye-off text-gray-9"></span>\n                                    </div>\n                                </div>\n                                <div class="form-login authentication-check">\n                                    <div class="row">\n                                        <div class="col-12 d-flex align-items-center justify-content-between">\n                                            <div class="custom-control custom-checkbox">\n                                                <label class="checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6">\n                                                    <input type="checkbox" class="form-control">\n                                                    <span class="checkmarks"></span>Remember me\n                                                </label>\n                                            </div>\n                                            <div class="text-end">\n                                                <a class="text-orange fs-16 fw-medium" [routerLink]="routes.forgotPassword3">Forgot Password?</a>\n                                            </div>\n                                        </div>                                    \n                                    </div>\n                                </div>\n                                <div class="form-login">\n                                    <button type="submit" class="btn btn-primary w-100" (click)="navigation()">Sign In</button>\n                                </div>\n                                <div class="signinform">\n                                    <h4>New on our platform?<a [routerLink]="routes.register3" class="hover-a"> Create an account</a></h4>\n                                </div>\n                                <div class="form-setlogin or-text">\n                                    <h4>OR</h4>\n                                </div>\n                                <div class="mt-2">\n                                    <div class="d-flex align-items-center justify-content-center flex-wrap">\n                                        <div class="text-center me-2 flex-fill">\n                                            <a href="javascript:void(0);"\n                                                class="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center">\n                                                <img class="img-fluid m-1" src="assets/img/icons/facebook-logo.svg" alt="Facebook">\n                                            </a>\n                                        </div>\n                                        <div class="text-center me-2 flex-fill">\n                                            <a href="javascript:void(0);"\n                                                class="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center">\n                                                <img class="img-fluid m-1" src="assets/img/icons/google-logo.svg" alt="Facebook">\n                                            </a>\n                                        </div>\n                                        <div class="text-center flex-fill">\n                                            <a href="javascript:void(0);"\n                                                class="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center">\n                                                <img class="img-fluid m-1" src="assets/img/icons/apple-logo.svg" alt="Apple">\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class="my-4 d-flex justify-content-center align-items-center copyright-text">\n                    <p>Copyright &copy; 2025 DreamsPOS</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Signin3Component, { className: "Signin3Component", filePath: "src/app/features/auth/signin/signin-3/signin-3.component.ts", lineNumber: 13 });
})();
export {
  Signin3Component
};
//# sourceMappingURL=chunk-6IQAWTM7.js.map
