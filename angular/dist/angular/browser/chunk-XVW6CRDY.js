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

// src/app/features/auth/reset-password/reset-password-2/reset-password-2.component.ts
var ResetPassword2Component = class _ResetPassword2Component {
  router;
  routes = routes;
  password = [false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
  }
  navigation() {
    this.router.navigate([routes.success2]);
  }
  static \u0275fac = function ResetPassword2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPassword2Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPassword2Component, selectors: [["app-reset-password-2"]], decls: 53, vars: 8, consts: [[1, "account-content"], [1, "row", "login-wrapper", "m-0"], [1, "col-lg-6", "p-0"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/authentication-05.svg", "alt", "img"]], template: function ResetPassword2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form")(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "h3");
      \u0275\u0275text(12, "Reset password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "Enter New Password & Confirm Password to get inside");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
      \u0275\u0275text(17, "Old Password ");
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13);
      \u0275\u0275element(21, "input", 14);
      \u0275\u0275elementStart(22, "span", 15);
      \u0275\u0275listener("click", function ResetPassword2Component_Template_span_click_22_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 10)(24, "label", 11);
      \u0275\u0275text(25, "New Password ");
      \u0275\u0275elementStart(26, "span", 12);
      \u0275\u0275text(27, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13);
      \u0275\u0275element(29, "input", 14);
      \u0275\u0275elementStart(30, "span", 15);
      \u0275\u0275listener("click", function ResetPassword2Component_Template_span_click_30_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 10)(32, "label", 11);
      \u0275\u0275text(33, "Confirm Password ");
      \u0275\u0275elementStart(34, "span", 12);
      \u0275\u0275text(35, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 13);
      \u0275\u0275element(37, "input", 14);
      \u0275\u0275elementStart(38, "span", 15);
      \u0275\u0275listener("click", function ResetPassword2Component_Template_span_click_38_listener() {
        return ctx.togglePassword(3);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 16)(40, "button", 17);
      \u0275\u0275listener("click", function ResetPassword2Component_Template_button_click_40_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(41, "Change Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 18)(43, "h4");
      \u0275\u0275text(44, "Return to ");
      \u0275\u0275elementStart(45, "a", 19);
      \u0275\u0275text(46, " login ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 20)(48, "p");
      \u0275\u0275text(49, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(50, "div", 2)(51, "div", 21);
      \u0275\u0275element(52, "img", 22);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(13);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[3] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[3] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.signIn2);
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPassword2Component, [{
    type: Component,
    args: [{ selector: "app-reset-password-2", imports: [RouterLink, CommonModule, FormsModule], template: `<div class="account-content">
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
                        <h3>Reset password?</h3>
                        <h4>Enter New Password & Confirm Password to get inside</h4>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Old Password <span class="text-danger"> *</span></label>
                        <div class="pass-group">
                            <input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control">
                            <span class="ti toggle-password text-gray-9" [ngClass]=" password[1] ? 'ti-eye' : 'ti-eye-off'" (click)="togglePassword(1)"></span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">New Password <span class="text-danger"> *</span></label>
                        <div class="pass-group">
                            <input [type]="password[2] ? 'text' : 'password' " class="pass-input form-control">
                            <span class="ti toggle-password text-gray-9" [ngClass]=" password[2] ? 'ti-eye' : 'ti-eye-off'" (click)="togglePassword(2)"></span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Confirm Password <span class="text-danger"> *</span></label>
                        <div class="pass-group">
                            <input [type]="password[3] ? 'text' : 'password' " class="pass-input form-control">
                            <span class="ti toggle-password text-gray-9" [ngClass]=" password[3] ? 'ti-eye' : 'ti-eye-off'" (click)="togglePassword(3)"></span>
                        </div>
                    </div>
                    <div class="form-login">
                        <button type="submit" class="btn btn-login" (click)="navigation()">Change Password</button>
                    </div>
                    <div class="signinform text-center">
                        <h4>Return to <a [routerLink]="routes.signIn2" class="hover-a"> login </a></h4>
                    </div>
                    <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                        <p>Copyright &copy; 2025 DreamsPOS</p>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div class="col-lg-6 p-0">
            <div class="login-img">
                <img src="assets/img/authentication/authentication-05.svg" alt="img">
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPassword2Component, { className: "ResetPassword2Component", filePath: "src/app/features/auth/reset-password/reset-password-2/reset-password-2.component.ts", lineNumber: 13 });
})();
export {
  ResetPassword2Component
};
//# sourceMappingURL=chunk-XVW6CRDY.js.map
