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

// src/app/features/auth/register/register-2/register-2.component.ts
var Register2Component = class _Register2Component {
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
    this.router.navigate([routes.signIn2]);
  }
  static \u0275fac = function Register2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register2Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register2Component, selectors: [["app-register-2"]], decls: 88, vars: 6, consts: [[1, "account-content"], [1, "row", "login-wrapper", "m-0"], [1, "col-lg-6", "p-0"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "text", "value", "", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-user"], [1, "ti", "ti-mail"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-sm-8"], [1, "custom-control", "custom-checkbox", "justify-content-start"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "mt-2"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap"], [1, "text-center", "me-2", "flex-fill"], ["href", "javascript:void(0);", 1, "br-10", "p-2", "btn", "btn-info", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "br-10", "p-2", "border", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/google-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], [1, "text-center", "flex-fill"], ["href", "javascript:void(0);", 1, "bg-dark", "br-10", "p-2", "btn", "btn-dark", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple", 1, "img-fluid", "m-1"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/authentication-02.svg", "alt", "img"]], template: function Register2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form")(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "h3");
      \u0275\u0275text(12, "Register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "Create New Dreamspos Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
      \u0275\u0275text(17, "Name ");
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13);
      \u0275\u0275element(21, "input", 14);
      \u0275\u0275elementStart(22, "span", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 10)(25, "label", 11);
      \u0275\u0275text(26, "Email ");
      \u0275\u0275elementStart(27, "span", 12);
      \u0275\u0275text(28, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 13);
      \u0275\u0275element(30, "input", 14);
      \u0275\u0275elementStart(31, "span", 15);
      \u0275\u0275element(32, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 10)(34, "label", 11);
      \u0275\u0275text(35, "Password ");
      \u0275\u0275elementStart(36, "span", 12);
      \u0275\u0275text(37, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 18);
      \u0275\u0275element(39, "input", 19);
      \u0275\u0275elementStart(40, "span", 20);
      \u0275\u0275listener("click", function Register2Component_Template_span_click_40_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 10)(42, "label", 11);
      \u0275\u0275text(43, "Confirm Password ");
      \u0275\u0275elementStart(44, "span", 12);
      \u0275\u0275text(45, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 18);
      \u0275\u0275element(47, "input", 19);
      \u0275\u0275elementStart(48, "span", 20);
      \u0275\u0275listener("click", function Register2Component_Template_span_click_48_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 21)(50, "div", 22)(51, "div", 23)(52, "div", 24)(53, "div", 25)(54, "label", 26);
      \u0275\u0275element(55, "input", 27)(56, "span", 28);
      \u0275\u0275text(57, "I agree to the ");
      \u0275\u0275elementStart(58, "a", 29);
      \u0275\u0275text(59, "Terms & Privacy");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(60, "div", 30)(61, "button", 31);
      \u0275\u0275listener("click", function Register2Component_Template_button_click_61_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(62, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 32)(64, "h4");
      \u0275\u0275text(65, "Already have an account ? ");
      \u0275\u0275elementStart(66, "a", 33);
      \u0275\u0275text(67, "Sign In Instead");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 34)(69, "h4");
      \u0275\u0275text(70, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 35)(72, "div", 36)(73, "div", 37)(74, "a", 38);
      \u0275\u0275element(75, "img", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 37)(77, "a", 40);
      \u0275\u0275element(78, "img", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 42)(80, "a", 43);
      \u0275\u0275element(81, "img", 44);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "div", 45)(83, "p");
      \u0275\u0275text(84, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(85, "div", 2)(86, "div", 46);
      \u0275\u0275element(87, "img", 47);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(31);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.signIn2);
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register2Component, [{
    type: Component,
    args: [{ selector: "app-register-2", imports: [RouterLink, CommonModule, FormsModule], template: `<div class="account-content">
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
                        <h4>Already have an account ? <a [routerLink]="routes.signIn2" class="hover-a">Sign In Instead</a></h4>
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
                    <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                        <p>Copyright &copy; 2025 DreamsPOS</p>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div class="col-lg-6 p-0">
            <div class="login-img">
                <img src="assets/img/authentication/authentication-02.svg" alt="img">
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register2Component, { className: "Register2Component", filePath: "src/app/features/auth/register/register-2/register-2.component.ts", lineNumber: 14 });
})();
export {
  Register2Component
};
//# sourceMappingURL=chunk-MJ4FUBX3.js.map
