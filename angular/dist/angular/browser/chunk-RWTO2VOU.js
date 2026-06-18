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
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
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

// src/app/features/auth/signin/signin-2/signin-2.component.ts
var Signin2Component = class _Signin2Component {
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
  static \u0275fac = function Signin2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Signin2Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Signin2Component, selectors: [["app-signin-2"]], decls: 67, vars: 5, consts: [[1, "account-content"], [1, "row", "login-wrapper", "m-0"], [1, "col-lg-6", "p-0"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "input-group"], ["type", "text", "value", "", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-mail"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-6"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], [1, "col-6", "text-end"], [1, "forgot-link", 3, "routerLink"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap"], [1, "text-center", "me-2", "flex-fill"], ["href", "javascript:void(0);", 1, "br-10", "p-2", "btn", "btn-info", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "br-10", "p-2", "border", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/google-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], [1, "text-center", "flex-fill"], ["href", "javascript:void(0);", 1, "bg-dark", "br-10", "p-2", "btn", "btn-dark", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple", 1, "img-fluid", "m-1"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/authentication-01.svg", "alt", "img"]], template: function Signin2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form")(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "h3");
      \u0275\u0275text(12, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "Access the Dreamspos panel using your email and passcode.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
      \u0275\u0275text(17, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275element(19, "input", 13);
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 10)(23, "label", 11);
      \u0275\u0275text(24, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 16);
      \u0275\u0275element(26, "input", 17);
      \u0275\u0275elementStart(27, "span", 18);
      \u0275\u0275listener("click", function Signin2Component_Template_span_click_27_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "div", 21)(31, "div", 22)(32, "label", 23);
      \u0275\u0275element(33, "input", 24)(34, "span", 25);
      \u0275\u0275text(35, "Remember me ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 26)(37, "a", 27);
      \u0275\u0275text(38, "Forgot Password?");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 28)(40, "button", 29);
      \u0275\u0275listener("click", function Signin2Component_Template_button_click_40_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(41, "Sign In");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 30)(43, "h4");
      \u0275\u0275text(44, "New on our platform?");
      \u0275\u0275elementStart(45, "a", 31);
      \u0275\u0275text(46, " Create an account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 32)(48, "h4");
      \u0275\u0275text(49, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 33)(51, "div", 34)(52, "div", 35)(53, "a", 36);
      \u0275\u0275element(54, "img", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 35)(56, "a", 38);
      \u0275\u0275element(57, "img", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 40)(59, "a", 41);
      \u0275\u0275element(60, "img", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 43)(62, "p");
      \u0275\u0275text(63, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(64, "div", 2)(65, "div", 44);
      \u0275\u0275element(66, "img", 45);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(18);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.forgotPassword2);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.register2);
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Signin2Component, [{
    type: Component,
    args: [{ selector: "app-signin-2", imports: [RouterLink, CommonModule, FormsModule], template: `<div class="account-content">
    <div class="row login-wrapper m-0">
        <div class="col-lg-6 p-0">
            <div class="login-content">
                <form>
                    <div class="login-userset">
                        <div class="login-logo logo-normal">
                        <img src="assets/img/logo.svg" alt="img">
                    </div>
                    <a [routerLink]="routes.index" class="login-logo logo-white">
                        <img src="assets/img/logo-white.svg"  alt="Img">
                    </a>
                    <div class="login-userheading">
                        <h3>Sign In</h3>
                        <h4>Access the Dreamspos panel using your email and passcode.</h4>
                    </div>
                    <div class="mb-3">
                            <label class="form-label">Email Address</label>
                            <div class="input-group">
                                <input type="text" value="" class="form-control border-end-0">
                                <span class="input-group-text border-start-0">
                                    <i class="ti ti-mail"></i>
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <div class="pass-group">
                                <input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control">
                                <span class="ti toggle-password text-gray-9" [ngClass]=" password[1] ? 'ti-eye' : 'ti-eye-off'" (click)="togglePassword(1)"></span>
                            </div>
                        </div>
                    <div class="form-login authentication-check">
                        <div class="row">
                            <div class="col-6">
                                <div class="custom-control custom-checkbox">
                                    <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                                        <input type="checkbox">
                                        <span class="checkmarks"></span>Remember me
                                    </label>
                                </div>
                            </div>
                            <div class="col-6 text-end">
                                <a class="forgot-link" [routerLink]="routes.forgotPassword2">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    <div class="form-login">
                        <button type="submit" class="btn btn-login" (click)="navigation()">Sign In</button>
                    </div>
                    <div class="signinform">
                        <h4>New on our platform?<a [routerLink]="routes.register2" class="hover-a"> Create an account</a></h4>
                    </div>
                    <div class="form-setlogin or-text">
                        <h4>OR</h4>
                    </div>
                    <div class="form-sociallink">
                        <div class="d-flex align-items-center justify-content-center flex-wrap">
                            <div class="text-center me-2 flex-fill">
                                <a href="javascript:void(0);"
                                    class="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center">
                                    <img class="img-fluid m-1" src="assets/img/icons/facebook-logo.svg" alt="Facebook">
                                </a>
                            </div>
                            <div class="text-center me-2 flex-fill">
                                <a href="javascript:void(0);"
                                    class="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center">
                                    <img class="img-fluid m-1" src="assets/img/icons/google-logo.svg" alt="Facebook">
                                </a>
                            </div>
                            <div class="text-center flex-fill">
                                <a href="javascript:void(0);"
                                    class="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center">
                                    <img class="img-fluid m-1" src="assets/img/icons/apple-logo.svg" alt="Apple">
                                </a>
                            </div>
                        </div>
                        <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                            <p>Copyright &copy; 2025 DreamsPOS</p>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div class="col-lg-6 p-0">
            <div class="login-img">
                <img src="assets/img/authentication/authentication-01.svg" alt="img">
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Signin2Component, { className: "Signin2Component", filePath: "src/app/features/auth/signin/signin-2/signin-2.component.ts", lineNumber: 13 });
})();
export {
  Signin2Component
};
//# sourceMappingURL=chunk-RWTO2VOU.js.map
