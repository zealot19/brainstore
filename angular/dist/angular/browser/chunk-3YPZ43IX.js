import {
  AuthService
} from "./chunk-5G45XA3Z.js";
import {
  TokenService
} from "./chunk-XNDMLLHT.js";
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
import {
  Router
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/pages/auth/lock-screen/lock-screen.component.ts
function LockScreenComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.user.avatar, \u0275\u0275sanitizeUrl);
  }
}
function LockScreenComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.userInitials, " ");
  }
}
function LockScreenComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function LockScreenComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
var LockScreenComponent = class _LockScreenComponent {
  fb;
  authService;
  tokenService;
  router;
  form;
  user = null;
  showPassword = false;
  loading = false;
  errorMsg = "";
  constructor(fb, authService, tokenService, router) {
    this.fb = fb;
    this.authService = authService;
    this.tokenService = tokenService;
    this.router = router;
  }
  ngOnInit() {
    this.user = this.tokenService.getUser();
    if (!this.user) {
      this.router.navigate(["/signin"]);
      return;
    }
    this.form = this.fb.group({
      password: ["", Validators.required]
    });
  }
  submit() {
    if (this.form.invalid || this.loading)
      return;
    this.loading = true;
    this.errorMsg = "";
    this.authService.unlockSession(this.form.value.password).subscribe({
      next: () => {
        this.loading = false;
        const returnUrl = this.tokenService.getLockReturnUrl();
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.loading = false;
        this.form.get("password")?.reset();
        this.errorMsg = err?.error?.detail ?? "Mot de passe incorrect.";
      }
    });
  }
  get userInitials() {
    if (!this.user)
      return "?";
    return `${this.user.first_name?.[0] ?? ""}${this.user.last_name?.[0] ?? ""}`.toUpperCase();
  }
  static \u0275fac = function LockScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LockScreenComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockScreenComponent, selectors: [["app-lock-screen"]], decls: 28, vars: 10, consts: [["initials", ""], [1, "login-wrapper", "position-relative"], [1, "container"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid", "logo-dark", "mb-5"], [1, "loginbox"], [1, "login-right"], [1, "login-right-wrap"], [1, "login-info"], [1, "account-subtitle"], [4, "ngIf", "ngIfElse"], [1, "text-muted", "small"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "input-blocks", "mb-3"], [1, "pass-group"], ["formControlName", "password", "placeholder", "Enter your password", 1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", "text-gray-9", 3, "click", "ngClass"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], ["alt", "Avatar", 1, "img-fluid", "rounded-circle", "mb-2", 2, "width", "80px", "height", "80px", "object-fit", "cover", 3, "src"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "bg-primary", "text-white", "fw-bold", "mb-2", 2, "width", "80px", "height", "80px", "font-size", "28px", "margin", "0 auto"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "ti", "ti-alert-circle", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LockScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "img", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "p", 8);
      \u0275\u0275text(8, "Welcome back!");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, LockScreenComponent_ng_container_9_Template, 2, 1, "ng-container", 9)(10, LockScreenComponent_ng_template_10_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(12, "h5");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, LockScreenComponent_div_16_Template, 3, 1, "div", 11);
      \u0275\u0275elementStart(17, "form", 12);
      \u0275\u0275listener("ngSubmit", function LockScreenComponent_Template_form_ngSubmit_17_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
      \u0275\u0275element(20, "input", 15);
      \u0275\u0275elementStart(21, "span", 16);
      \u0275\u0275listener("click", function LockScreenComponent_Template_span_click_21_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "button", 17);
      \u0275\u0275template(23, LockScreenComponent_span_23_Template, 1, 0, "span", 18);
      \u0275\u0275text(24, " Log In ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 19)(26, "p");
      \u0275\u0275text(27, "Copyright \xA9 2025 DreamsPOS. All rights reserved");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const initials_r2 = \u0275\u0275reference(11);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.user == null ? null : ctx.user.avatar)("ngIfElse", initials_r2);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((ctx.user == null ? null : ctx.user.full_name) ?? (ctx.user == null ? null : ctx.user.first_name) + " " + (ctx.user == null ? null : ctx.user.last_name));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.showPassword ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockScreenComponent, [{
    type: Component,
    args: [{ selector: "app-lock-screen", imports: [CommonModule, ReactiveFormsModule], template: `<div class="login-wrapper position-relative">
  <div class="container">
    <img class="img-fluid logo-dark mb-5" src="assets/img/logo.svg" alt="Logo">

    <div class="loginbox">
      <div class="login-right">
        <div class="login-right-wrap">

          <div class="login-info">
            <p class="account-subtitle">Welcome back!</p>

            <!-- Avatar ou initiales -->
            <ng-container *ngIf="user?.avatar; else initials">
              <img [src]="user!.avatar" class="img-fluid rounded-circle mb-2"
                   style="width:80px;height:80px;object-fit:cover;" alt="Avatar">
            </ng-container>
            <ng-template #initials>
              <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold mb-2"
                   style="width:80px;height:80px;font-size:28px;margin:0 auto;">
                {{ userInitials }}
              </div>
            </ng-template>

            <h5>{{ user?.full_name ?? (user?.first_name + ' ' + user?.last_name) }}</h5>
            <p class="text-muted small">{{ user?.email }}</p>
          </div>

          <!-- Erreur -->
          <div class="alert alert-danger py-2 mb-3" *ngIf="errorMsg">
            <i class="ti ti-alert-circle me-1"></i>{{ errorMsg }}
          </div>

          <form [formGroup]="form" (ngSubmit)="submit()">
            <div class="input-blocks mb-3">
              <div class="pass-group">
                <input [type]="showPassword ? 'text' : 'password'"
                       class="pass-input form-control" formControlName="password"
                       placeholder="Enter your password">
                <span class="ti toggle-password text-gray-9"
                      [ngClass]="showPassword ? 'ti-eye' : 'ti-eye-off'"
                      (click)="showPassword = !showPassword"></span>
              </div>
            </div>

            <button class="btn btn-lg btn-block btn-primary w-100"
                    type="submit" [disabled]="loading">
              <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
              Log In
            </button>
          </form>

        </div>
      </div>
    </div>

    <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
      <p>Copyright &copy; 2025 DreamsPOS. All rights reserved</p>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: TokenService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockScreenComponent, { className: "LockScreenComponent", filePath: "src/_api/pages/auth/lock-screen/lock-screen.component.ts", lineNumber: 14 });
})();
export {
  LockScreenComponent
};
//# sourceMappingURL=chunk-3YPZ43IX.js.map
