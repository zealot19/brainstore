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

// src/app/features/auth/register/register-3/register-3.component.ts
var Register3Component = class _Register3Component {
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
    this.router.navigate([routes.signIn3]);
  }
  static \u0275fac = function Register3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register3Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register3Component, selectors: [["app-register-3"]], decls: 87, vars: 6, consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "row", "w-100"], [1, "col-lg-5", "mx-auto"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "card"], [1, "card-body", "p-5"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "text", "value", "", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-user"], [1, "ti", "ti-mail"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-sm-8"], [1, "custom-control", "custom-checkbox", "justify-content-start"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "mt-2"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap"], [1, "text-center", "me-2", "flex-fill"], ["href", "javascript:void(0);", 1, "br-10", "p-2", "btn", "btn-info", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "br-10", "p-2", "border", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/google-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], [1, "text-center", "flex-fill"], ["href", "javascript:void(0);", 1, "bg-dark", "br-10", "p-2", "btn", "btn-dark", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple", 1, "img-fluid", "m-1"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function Register3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form")(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h3");
      \u0275\u0275text(14, "Register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16, "Create New Dreamspos Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 13);
      \u0275\u0275text(19, "Name ");
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 12)(27, "label", 13);
      \u0275\u0275text(28, "Email ");
      \u0275\u0275elementStart(29, "span", 14);
      \u0275\u0275text(30, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 15);
      \u0275\u0275element(32, "input", 16);
      \u0275\u0275elementStart(33, "span", 17);
      \u0275\u0275element(34, "i", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "label", 13);
      \u0275\u0275text(37, "Password ");
      \u0275\u0275elementStart(38, "span", 14);
      \u0275\u0275text(39, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 20);
      \u0275\u0275element(41, "input", 21);
      \u0275\u0275elementStart(42, "span", 22);
      \u0275\u0275listener("click", function Register3Component_Template_span_click_42_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 12)(44, "label", 13);
      \u0275\u0275text(45, "Confirm Password ");
      \u0275\u0275elementStart(46, "span", 14);
      \u0275\u0275text(47, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 20);
      \u0275\u0275element(49, "input", 21);
      \u0275\u0275elementStart(50, "span", 22);
      \u0275\u0275listener("click", function Register3Component_Template_span_click_50_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 23)(52, "div", 24)(53, "div", 25)(54, "div", 26)(55, "div", 27)(56, "label", 28);
      \u0275\u0275element(57, "input", 29)(58, "span", 30);
      \u0275\u0275text(59, "I agree to the ");
      \u0275\u0275elementStart(60, "a", 31);
      \u0275\u0275text(61, "Terms & Privacy");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(62, "div", 32)(63, "button", 33);
      \u0275\u0275listener("click", function Register3Component_Template_button_click_63_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(64, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 34)(66, "h4");
      \u0275\u0275text(67, "Already have an account ? ");
      \u0275\u0275elementStart(68, "a", 35);
      \u0275\u0275text(69, "Sign In Instead");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 36)(71, "h4");
      \u0275\u0275text(72, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 37)(74, "div", 38)(75, "div", 39)(76, "a", 40);
      \u0275\u0275element(77, "img", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 39)(79, "a", 42);
      \u0275\u0275element(80, "img", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 44)(82, "a", 45);
      \u0275\u0275element(83, "img", 46);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(84, "div", 47)(85, "p");
      \u0275\u0275text(86, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(34);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.signIn3);
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register3Component, [{
    type: Component,
    args: [{ selector: "app-register-3", imports: [RouterLink, CommonModule, FormsModule], template: `<div class="account-content">
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
                                    <h3>Register</h3>
                                    <h4>Create New Dreamspos Account</h4>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Name <span class="text-danger"> *</span></label>
                                    <div class="input-group">
                                        <input type="text" value="" class="form-control border-end-0">
                                        <span class="input-group-text border-start-0">
                                            <i class="ti ti-user"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email <span class="text-danger"> *</span></label>
                                    <div class="input-group">
                                        <input type="text" value="" class="form-control border-end-0">
                                        <span class="input-group-text border-start-0">
                                            <i class="ti ti-mail"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Password <span class="text-danger"> *</span></label>
                                    <div class="pass-group">
                                        <input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control">
                                        <span class="ti toggle-password text-gray-9" [ngClass]=" password[1] ? 'ti-eye' : 'ti-eye-off'" (click)="togglePassword(1)"></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Confirm Password <span class="text-danger"> *</span></label>
                                    <div class="pass-group">
                                        <input [type]="password[2] ? 'text' : 'password' " class="pass-input form-control">
                                        <span class="ti toggle-password text-gray-9" [ngClass]=" password[2] ? 'ti-eye' : 'ti-eye-off'" (click)="togglePassword(2)"></span>
                                    </div>
                                </div>
                                <div class="form-login authentication-check">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <div class="custom-control custom-checkbox justify-content-start">
                                                <div class="custom-control custom-checkbox">
                                                    <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                                                        <input type="checkbox">
                                                        <span class="checkmarks"></span>I agree to the <a href="javascript:void(0);" class="text-primary">Terms & Privacy</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-login">
                                    <button type="submit" class="btn btn-login" (click)="navigation()">Sign Up</button>
                                </div>
                                <div class="signinform">
                                    <h4>Already have an account ? <a [routerLink]="routes.signIn3" class="hover-a">Sign In Instead</a></h4>
                                </div>
                                <div class="form-setlogin or-text">
                                    <h4>OR</h4>
                                </div>
                                <div class="mt-2">
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
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                    <p>Copyright &copy; 2025 DreamsPOS</p>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register3Component, { className: "Register3Component", filePath: "src/app/features/auth/register/register-3/register-3.component.ts", lineNumber: 13 });
})();
export {
  Register3Component
};
//# sourceMappingURL=chunk-4FL2NYMZ.js.map
