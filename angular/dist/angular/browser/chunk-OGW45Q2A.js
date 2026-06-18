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

// src/app/features/auth/register/register/register.component.ts
var RegisterComponent = class _RegisterComponent {
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
    this.router.navigate([routes.signIn]);
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 84, vars: 6, consts: [[1, "account-content"], [1, "login-wrapper", "register-wrap", "bg-img"], [1, "login-content", "authent-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "text", "value", "", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-user"], [1, "ti", "ti-mail"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-sm-8"], [1, "custom-control", "custom-checkbox", "justify-content-start"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "mt-2"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap"], [1, "text-center", "me-2", "flex-fill"], ["href", "javascript:void(0);", 1, "br-10", "p-2", "btn", "btn-info", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "br-10", "p-2", "border", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/google-logo.svg", "alt", "Facebook", 1, "img-fluid", "m-1"], [1, "text-center", "flex-fill"], ["href", "javascript:void(0);", 1, "bg-dark", "br-10", "p-2", "btn", "btn-dark", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple", 1, "img-fluid", "m-1"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 6);
      \u0275\u0275element(8, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8)(10, "h3");
      \u0275\u0275text(11, "Register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h4");
      \u0275\u0275text(13, "Create New Dreamspos Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16, "Name ");
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 12);
      \u0275\u0275element(20, "input", 13);
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 9)(24, "label", 10);
      \u0275\u0275text(25, "Email ");
      \u0275\u0275elementStart(26, "span", 11);
      \u0275\u0275text(27, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 12);
      \u0275\u0275element(29, "input", 13);
      \u0275\u0275elementStart(30, "span", 14);
      \u0275\u0275element(31, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 9)(33, "label", 10);
      \u0275\u0275text(34, "Password ");
      \u0275\u0275elementStart(35, "span", 11);
      \u0275\u0275text(36, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17);
      \u0275\u0275element(38, "input", 18);
      \u0275\u0275elementStart(39, "span", 19);
      \u0275\u0275listener("click", function RegisterComponent_Template_span_click_39_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 9)(41, "label", 10);
      \u0275\u0275text(42, "Confirm Password ");
      \u0275\u0275elementStart(43, "span", 11);
      \u0275\u0275text(44, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 17);
      \u0275\u0275element(46, "input", 18);
      \u0275\u0275elementStart(47, "span", 19);
      \u0275\u0275listener("click", function RegisterComponent_Template_span_click_47_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 20)(49, "div", 21)(50, "div", 22)(51, "div", 23)(52, "div", 24)(53, "label", 25);
      \u0275\u0275element(54, "input", 26)(55, "span", 27);
      \u0275\u0275text(56, "I agree to the ");
      \u0275\u0275elementStart(57, "a", 28);
      \u0275\u0275text(58, "Terms & Privacy");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(59, "div", 29)(60, "button", 30);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_60_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(61, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 31)(63, "h4");
      \u0275\u0275text(64, "Already have an account ? ");
      \u0275\u0275elementStart(65, "a", 32);
      \u0275\u0275text(66, "Sign In Instead");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 33)(68, "h4");
      \u0275\u0275text(69, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 34)(71, "div", 35)(72, "div", 36)(73, "a", 37);
      \u0275\u0275element(74, "img", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 36)(76, "a", 39);
      \u0275\u0275element(77, "img", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 41)(79, "a", 42);
      \u0275\u0275element(80, "img", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "div", 44)(82, "p");
      \u0275\u0275text(83, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
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
      \u0275\u0275property("routerLink", ctx.routes.signIn);
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", imports: [RouterLink, CommonModule, FormsModule], template: `<div class="account-content">
    <div class="login-wrapper register-wrap bg-img">
        <div class="login-content authent-content">
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
                       <h4>Already have an account ? <a [routerLink]="routes.signIn" class="hover-a">Sign In Instead</a></h4>
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
</div>` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register/register.component.ts", lineNumber: 13 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-OGW45Q2A.js.map
