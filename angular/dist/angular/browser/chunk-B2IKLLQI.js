import {
  AuthService
} from "./chunk-5G45XA3Z.js";
import "./chunk-XNDMLLHT.js";
import "./chunk-RF55NRGJ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/pages/auth/signin/signin.component.ts
function SigninComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function SigninComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
  }
}
var SigninComponent = class _SigninComponent {
  fb;
  authService;
  router;
  route;
  routes = routes;
  form;
  showPassword = false;
  loading = false;
  errorMsg = "";
  returnUrl = "/dashboard/index";
  constructor(fb, authService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") ?? "/dashboard/index";
  }
  submit() {
    if (this.form.invalid || this.loading)
      return;
    this.loading = true;
    this.errorMsg = "";
    this.authService.login(this.form.value).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.requires_2fa) {
          this.router.navigate([routes.twoStepVerification]);
        } else {
          this.router.navigateByUrl(this.returnUrl);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.detail ?? "Email ou mot de passe incorrect.";
      }
    });
  }
  static \u0275fac = function SigninComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SigninComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninComponent, selectors: [["app-signin"]], decls: 69, vars: 13, consts: [[1, "account-content"], [1, "login-wrapper", "bg-img"], [1, "login-content", "authent-content"], [3, "ngSubmit", "formGroup"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "DreamsPOS"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "email", "formControlName", "email", "placeholder", "admin@dreamspos.com", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-mail"], [1, "pass-group"], ["formControlName", "password", 1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "custom-control", "custom-checkbox", "custom-class-check"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox", 1, "form-control"], [1, "checkmarks"], [1, "text-end"], [1, "text-orange", "fs-16", "fw-medium", 3, "routerLink"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink", "mt-2"], [1, "d-flex", "justify-content-center", "row-gap-2"], ["href", "javascript:void(0);", 1, "facebook-logo"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/google.png", "alt", "Google"], ["href", "javascript:void(0);", 1, "apple-logo"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "ti", "ti-alert-circle", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function SigninComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function SigninComponent_Template_form_ngSubmit_3_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "h3");
      \u0275\u0275text(11, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h4");
      \u0275\u0275text(13, "Access the Dreamspos panel using your email and passcode.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, SigninComponent_div_14_Template, 3, 1, "div", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "label", 12);
      \u0275\u0275text(17, "Email");
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275element(21, "input", 15);
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 11)(25, "label", 12);
      \u0275\u0275text(26, "Password");
      \u0275\u0275elementStart(27, "span", 13);
      \u0275\u0275text(28, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 18);
      \u0275\u0275element(30, "input", 19);
      \u0275\u0275elementStart(31, "span", 20);
      \u0275\u0275listener("click", function SigninComponent_Template_span_click_31_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "label", 25);
      \u0275\u0275element(37, "input", 26)(38, "span", 27);
      \u0275\u0275text(39, "Remember me ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 28)(41, "a", 29);
      \u0275\u0275text(42, " Forgot Password? ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "div", 30)(44, "button", 31);
      \u0275\u0275template(45, SigninComponent_span_45_Template, 1, 0, "span", 32);
      \u0275\u0275text(46, " Sign In ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 33)(48, "h4");
      \u0275\u0275text(49, "New on our platform? ");
      \u0275\u0275elementStart(50, "a", 34);
      \u0275\u0275text(51, " Create an account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 35)(53, "h4");
      \u0275\u0275text(54, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 36)(56, "ul", 37)(57, "li")(58, "a", 38);
      \u0275\u0275element(59, "img", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 40);
      \u0275\u0275element(62, "img", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 42);
      \u0275\u0275element(65, "img", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 44)(67, "p");
      \u0275\u0275text(68, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.touched));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.showPassword ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.forgotPassword);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.register);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigninComponent, [{
    type: Component,
    args: [{ selector: "app-signin", imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="account-content">
  <div class="login-wrapper bg-img">
    <div class="login-content authent-content">
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="login-userset">

          <div class="login-logo logo-normal">
            <img src="assets/img/logo.png" alt="DreamsPOS">
          </div>
          <a [routerLink]="routes.adminDashboard" class="login-logo logo-white">
            <img src="assets/img/logo-white.png" alt="">
          </a>

          <div class="login-userheading">
            <h3>Sign In</h3>
            <h4>Access the Dreamspos panel using your email and passcode.</h4>
          </div>

          <!-- Alerte erreur -->
          <div class="alert alert-danger py-2 mb-3" *ngIf="errorMsg">
            <i class="ti ti-alert-circle me-1"></i>{{ errorMsg }}
          </div>

          <!-- Email -->
          <div class="mb-3">
            <label class="form-label">Email<span class="text-danger">*</span></label>
            <div class="input-group">
              <input type="email" class="form-control border-end-0"
                     formControlName="email" placeholder="admin@dreamspos.com"
                     [class.is-invalid]="form.get('email')?.invalid && form.get('email')?.touched">
              <span class="input-group-text border-start-0"><i class="ti ti-mail"></i></span>
            </div>
          </div>

          <!-- Mot de passe -->
          <div class="mb-3">
            <label class="form-label">Password<span class="text-danger">*</span></label>
            <div class="pass-group">
              <input [type]="showPassword ? 'text' : 'password'"
                     class="pass-input form-control" formControlName="password"
                     [class.is-invalid]="form.get('password')?.invalid && form.get('password')?.touched">
              <span class="ti toggle-password text-gray-9"
                    [ngClass]="showPassword ? 'ti-eye' : 'ti-eye-off'"
                    (click)="showPassword = !showPassword"></span>
            </div>
          </div>

          <!-- Remember me / Forgot -->
          <div class="form-login authentication-check">
            <div class="row">
              <div class="col-12 d-flex align-items-center justify-content-between">
                <div class="custom-control custom-checkbox custom-class-check">
                  <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                    <input type="checkbox" class="form-control">
                    <span class="checkmarks"></span>Remember me
                  </label>
                </div>
                <div class="text-end">
                  <a class="text-orange fs-16 fw-medium" [routerLink]="routes.forgotPassword">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Bouton login -->
          <div class="form-login">
            <button type="submit" class="btn btn-login" [disabled]="loading">
              <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
              Sign In
            </button>
          </div>

          <div class="signinform">
            <h4>New on our platform?
              <a [routerLink]="routes.register" class="hover-a"> Create an account</a>
            </h4>
          </div>

          <div class="form-setlogin or-text"><h4>OR</h4></div>

          <div class="form-sociallink mt-2">
            <ul class="d-flex justify-content-center row-gap-2">
              <li>
                <a href="javascript:void(0);" class="facebook-logo">
                  <img src="assets/img/icons/facebook-logo.svg" alt="Facebook">
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img src="assets/img/icons/google.png" alt="Google">
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" class="apple-logo">
                  <img src="assets/img/icons/apple-logo.svg" alt="Apple">
                </a>
              </li>
            </ul>
            <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
              <p>Copyright &copy; 2025 DreamsPOS</p>
            </div>
          </div>

        </div>
      </form>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninComponent, { className: "SigninComponent", filePath: "src/_api/pages/auth/signin/signin.component.ts", lineNumber: 13 });
})();
export {
  SigninComponent
};
//# sourceMappingURL=chunk-B2IKLLQI.js.map
