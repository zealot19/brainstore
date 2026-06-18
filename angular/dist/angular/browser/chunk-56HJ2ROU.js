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

// src/_api/pages/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, " Mot de passe mis \xE0 jour. Redirection vers le login... ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_14_Template(rf, ctx) {
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
function ResetPasswordComponent_form_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Minimum 8 caract\xE8res. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_15_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_form_15_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 32);
  }
}
function ResetPasswordComponent_form_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 19);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_form_15_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3, "New Password ");
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275element(7, "input", 24);
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275listener("click", function ResetPasswordComponent_form_15_Template_span_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show[0] = !ctx_r0.show[0]);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ResetPasswordComponent_form_15_div_9_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 20)(11, "label", 21);
    \u0275\u0275text(12, "Confirm Password ");
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275element(16, "input", 27);
    \u0275\u0275elementStart(17, "span", 25);
    \u0275\u0275listener("click", function ResetPasswordComponent_form_15_Template_span_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show[1] = !ctx_r0.show[1]);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ResetPasswordComponent_form_15_div_18_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 28)(20, "button", 29);
    \u0275\u0275template(21, ResetPasswordComponent_form_15_span_21_Template, 1, 0, "span", 30);
    \u0275\u0275text(22, " Change Password ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r0.form.get("new_password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.form.get("new_password")) == null ? null : tmp_2_0.touched));
    \u0275\u0275property("type", ctx_r0.show[0] ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.show[0] ? "ti-eye" : "ti-eye-off");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.form.get("new_password")) == null ? null : tmp_5_0.hasError("minlength")) && ((tmp_5_0 = ctx_r0.form.get("new_password")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", (ctx_r0.form.errors == null ? null : ctx_r0.form.errors["mismatch"]) && ((tmp_6_0 = ctx_r0.form.get("confirm_password")) == null ? null : tmp_6_0.touched));
    \u0275\u0275property("type", ctx_r0.show[1] ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.show[1] ? "ti-eye" : "ti-eye-off");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.form.errors == null ? null : ctx_r0.form.errors["mismatch"]) && ((tmp_9_0 = ctx_r0.form.get("confirm_password")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading || !ctx_r0.token);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  passwordService;
  router;
  route;
  routes = routes;
  form;
  loading = false;
  done = false;
  errorMsg = "";
  show = [false, false];
  token = "";
  constructor(fb, passwordService, router, route) {
    this.fb = fb;
    this.passwordService = passwordService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") ?? "";
    if (!this.token) {
      this.errorMsg = "Lien invalide ou expir\xE9.";
    }
    this.form = this.fb.group({
      new_password: ["", [Validators.required, Validators.minLength(8)]],
      confirm_password: ["", Validators.required]
    }, { validators: this.passwordsMatch });
  }
  submit() {
    if (this.form.invalid || this.loading || !this.token)
      return;
    this.loading = true;
    this.errorMsg = "";
    this.passwordService.confirmReset({
      token: this.token,
      new_password: this.form.value.new_password,
      confirm_password: this.form.value.confirm_password
    }).subscribe({
      next: () => {
        this.loading = false;
        this.done = true;
        setTimeout(() => this.router.navigate([routes.signIn]), 3e3);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.detail ?? "Lien invalide ou expir\xE9.";
      }
    });
  }
  passwordsMatch(group) {
    const pwd = group.get("new_password")?.value;
    const conf = group.get("confirm_password")?.value;
    return pwd === conf ? null : { mismatch: true };
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PasswordService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 24, vars: 5, consts: [[1, "account-content"], [1, "login-wrapper", "reset-pass-wrap", "bg-img"], [1, "login-content", "authent-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], ["class", "alert alert-success py-2 mb-3", 4, "ngIf"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "signinform", "text-center", "mt-3"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "alert", "alert-success", "py-2", "mb-3"], [1, "ti", "ti-circle-check", "me-1"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "ti", "ti-alert-circle", "me-1"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "pass-group"], ["formControlName", "new_password", 1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], ["class", "text-danger small mt-1", 4, "ngIf"], ["formControlName", "confirm_password", 1, "pass-input", "form-control", 3, "type"], [1, "form-login"], ["type", "submit", 1, "btn", "btn-login", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-danger", "small", "mt-1"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "h3");
      \u0275\u0275text(10, "Reset password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h4");
      \u0275\u0275text(12, "Enter your new password below.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, ResetPasswordComponent_div_13_Template, 3, 0, "div", 9)(14, ResetPasswordComponent_div_14_Template, 3, 1, "div", 10)(15, ResetPasswordComponent_form_15_Template, 23, 13, "form", 11);
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
      \u0275\u0275property("ngIf", ctx.done);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.done);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.signIn);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="account-content">
  <div class="login-wrapper reset-pass-wrap bg-img">
    <div class="login-content authent-content">
      <div class="login-userset">

        <div class="login-logo logo-normal">
          <img src="assets/img/logo.svg" alt="img">
        </div>
        <a [routerLink]="routes.signIn" class="login-logo logo-white">
          <img src="assets/img/logo-white.svg" alt="Img">
        </a>

        <div class="login-userheading">
          <h3>Reset password</h3>
          <h4>Enter your new password below.</h4>
        </div>

        <!-- Succ\xE8s -->
        <div class="alert alert-success py-2 mb-3" *ngIf="done">
          <i class="ti ti-circle-check me-1"></i>
          Mot de passe mis \xE0 jour. Redirection vers le login...
        </div>

        <!-- Erreur -->
        <div class="alert alert-danger py-2 mb-3" *ngIf="errorMsg">
          <i class="ti ti-alert-circle me-1"></i>{{ errorMsg }}
        </div>

        <form [formGroup]="form" (ngSubmit)="submit()" *ngIf="!done">

          <!-- Nouveau mot de passe -->
          <div class="mb-3">
            <label class="form-label">New Password <span class="text-danger">*</span></label>
            <div class="pass-group">
              <input [type]="show[0] ? 'text' : 'password'"
                     class="pass-input form-control" formControlName="new_password"
                     [class.is-invalid]="form.get('new_password')?.invalid && form.get('new_password')?.touched">
              <span class="ti toggle-password text-gray-9"
                    [ngClass]="show[0] ? 'ti-eye' : 'ti-eye-off'"
                    (click)="show[0] = !show[0]"></span>
            </div>
            <div class="text-danger small mt-1"
                 *ngIf="form.get('new_password')?.hasError('minlength') && form.get('new_password')?.touched">
              Minimum 8 caract\xE8res.
            </div>
          </div>

          <!-- Confirmation -->
          <div class="mb-3">
            <label class="form-label">Confirm Password <span class="text-danger">*</span></label>
            <div class="pass-group">
              <input [type]="show[1] ? 'text' : 'password'"
                     class="pass-input form-control" formControlName="confirm_password"
                     [class.is-invalid]="form.errors?.['mismatch'] && form.get('confirm_password')?.touched">
              <span class="ti toggle-password text-gray-9"
                    [ngClass]="show[1] ? 'ti-eye' : 'ti-eye-off'"
                    (click)="show[1] = !show[1]"></span>
            </div>
            <div class="text-danger small mt-1"
                 *ngIf="form.errors?.['mismatch'] && form.get('confirm_password')?.touched">
              Les mots de passe ne correspondent pas.
            </div>
          </div>

          <div class="form-login">
            <button type="submit" class="btn btn-login" [disabled]="loading || !token">
              <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
              Change Password
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
  }], () => [{ type: FormBuilder }, { type: PasswordService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/_api/pages/auth/reset-password/reset-password.component.ts", lineNumber: 13 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-56HJ2ROU.js.map
