import {
  PasswordService
} from "./chunk-R45M7SM4.js";
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
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/pages/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, " Email envoy\xE9 ! V\xE9rifiez votre bo\xEEte de r\xE9ception. ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function ForgotPasswordComponent_form_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
  }
}
function ForgotPasswordComponent_form_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 19);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_15_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3, "Email ");
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275element(7, "input", 24);
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275element(9, "i", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 27)(11, "button", 28);
    \u0275\u0275template(12, ForgotPasswordComponent_form_15_span_12_Template, 1, 0, "span", 29);
    \u0275\u0275text(13, " Send Reset Link ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r0.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.form.get("email")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb;
  passwordService;
  routes = routes;
  form;
  loading = false;
  sent = false;
  errorMsg = "";
  constructor(fb, passwordService) {
    this.fb = fb;
    this.passwordService = passwordService;
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  submit() {
    if (this.form.invalid || this.loading)
      return;
    this.loading = true;
    this.errorMsg = "";
    this.passwordService.requestReset(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.sent = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.detail ?? "Une erreur est survenue. Veuillez r\xE9essayer.";
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PasswordService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 24, vars: 5, consts: [[1, "account-content"], [1, "login-wrapper", "forgot-pass-wrap", "bg-img"], [1, "login-content", "authent-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], ["class", "alert alert-success py-2 mb-3", 4, "ngIf"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "signinform", "text-center", "mt-3"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "alert", "alert-success", "py-2", "mb-3"], [1, "ti", "ti-circle-check", "me-1"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "ti", "ti-alert-circle", "me-1"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "input-group"], ["type", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "form-control", "border-end-0"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-mail"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "h3");
      \u0275\u0275text(10, "Forgot password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h4");
      \u0275\u0275text(12, "Enter your email and we'll send you instructions to reset your password.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, ForgotPasswordComponent_div_13_Template, 3, 0, "div", 9)(14, ForgotPasswordComponent_div_14_Template, 3, 1, "div", 10)(15, ForgotPasswordComponent_form_15_Template, 14, 5, "form", 11);
      \u0275\u0275elementStart(16, "div", 12)(17, "h4");
      \u0275\u0275text(18, "Return to ");
      \u0275\u0275elementStart(19, "a", 13);
      \u0275\u0275text(20, "login");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 14)(22, "p");
      \u0275\u0275text(23, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.signIn);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.sent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.sent);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.signIn);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="account-content">
  <div class="login-wrapper forgot-pass-wrap bg-img">
    <div class="login-content authent-content">
      <div class="login-userset">

        <div class="login-logo logo-normal">
          <img src="assets/img/logo.svg" alt="img">
        </div>
        <a [routerLink]="routes.signIn" class="login-logo logo-white">
          <img src="assets/img/logo-white.svg" alt="Img">
        </a>

        <div class="login-userheading">
          <h3>Forgot password?</h3>
          <h4>Enter your email and we'll send you instructions to reset your password.</h4>
        </div>

        <!-- Confirmation envoi -->
        <div class="alert alert-success py-2 mb-3" *ngIf="sent">
          <i class="ti ti-circle-check me-1"></i>
          Email envoy\xE9 ! V\xE9rifiez votre bo\xEEte de r\xE9ception.
        </div>

        <!-- Alerte erreur -->
        <div class="alert alert-danger py-2 mb-3" *ngIf="errorMsg">
          <i class="ti ti-alert-circle me-1"></i>{{ errorMsg }}
        </div>

        <form [formGroup]="form" (ngSubmit)="submit()" *ngIf="!sent">
          <div class="mb-3">
            <label class="form-label">Email <span class="text-danger">*</span></label>
            <div class="input-group">
              <input type="email" class="form-control border-end-0"
                     formControlName="email" placeholder="votre@email.com"
                     [class.is-invalid]="form.get('email')?.invalid && form.get('email')?.touched">
              <span class="input-group-text border-start-0"><i class="ti ti-mail"></i></span>
            </div>
          </div>

          <div class="form-login">
            <button type="submit" class="btn btn-login" [disabled]="loading">
              <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
              Send Reset Link
            </button>
          </div>
        </form>

        <div class="signinform text-center mt-3">
          <h4>Return to <a [routerLink]="routes.signIn" class="hover-a">login</a></h4>
        </div>

        <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
          <p>Copyright &copy; 2025 DreamsPOS</p>
        </div>

      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: PasswordService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/_api/pages/auth/forgot-password/forgot-password.component.ts", lineNumber: 13 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-RKB67O2A.js.map
