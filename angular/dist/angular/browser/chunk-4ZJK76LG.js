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

// src/app/features/auth/reset-password/reset-password-3/reset-password-3.component.ts
var ResetPassword3Component = class _ResetPassword3Component {
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
    this.router.navigate([routes.success3]);
  }
  static \u0275fac = function ResetPassword3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPassword3Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPassword3Component, selectors: [["app-reset-password-3"]], decls: 52, vars: 8, consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "row", "w-100"], [1, "col-lg-5", "mx-auto"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "card"], [1, "card-body", "p-5"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center", "mb-0"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function ResetPassword3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form")(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h3");
      \u0275\u0275text(14, "Reset password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16, "Enter New Password & Confirm Password to get inside");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 13);
      \u0275\u0275text(19, "Old Password ");
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275listener("click", function ResetPassword3Component_Template_span_click_24_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 12)(26, "label", 13);
      \u0275\u0275text(27, "New Password ");
      \u0275\u0275elementStart(28, "span", 14);
      \u0275\u0275text(29, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15);
      \u0275\u0275element(31, "input", 16);
      \u0275\u0275elementStart(32, "span", 17);
      \u0275\u0275listener("click", function ResetPassword3Component_Template_span_click_32_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 12)(34, "label", 13);
      \u0275\u0275text(35, "Confirm Password ");
      \u0275\u0275elementStart(36, "span", 14);
      \u0275\u0275text(37, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 15);
      \u0275\u0275element(39, "input", 16);
      \u0275\u0275elementStart(40, "span", 17);
      \u0275\u0275listener("click", function ResetPassword3Component_Template_span_click_40_listener() {
        return ctx.togglePassword(3);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 18)(42, "button", 19);
      \u0275\u0275listener("click", function ResetPassword3Component_Template_button_click_42_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(43, "Change Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 20)(45, "h4");
      \u0275\u0275text(46, "Return to ");
      \u0275\u0275elementStart(47, "a", 21);
      \u0275\u0275text(48, " login ");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(49, "div", 22)(50, "p");
      \u0275\u0275text(51, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(16);
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
      \u0275\u0275property("routerLink", ctx.routes.signIn3);
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPassword3Component, [{
    type: Component,
    args: [{ selector: "app-reset-password-3", imports: [RouterLink, CommonModule, FormsModule], template: `<div class="account-content">
    <div class="login-wrapper login-new">
        <div class="row w-100">
            <div class="col-lg-5 mx-auto">
                <div class="login-content user-login">
                    <div class="login-logo">
                        <img src="assets/img/logo.svg" alt="img">
                        <a [routerLink]="routes.index" class="login-logo logo-white">
                            <img src="assets/img/logo-white.svg"  alt="Img">
                        </a>
                    </div>
                    <form>
                        <div class="card">
                            <div class="card-body p-5">
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
                                <div class="signinform text-center mb-0">
                                    <h4>Return to <a [routerLink]="routes.signIn3" class="hover-a"> login </a></h4>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
            <p>Copyright &copy; 2025 DreamsPOS</p>
        </div>
    </div>
</div>` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPassword3Component, { className: "ResetPassword3Component", filePath: "src/app/features/auth/reset-password/reset-password-3/reset-password-3.component.ts", lineNumber: 13 });
})();
export {
  ResetPassword3Component
};
//# sourceMappingURL=chunk-4ZJK76LG.js.map
