import {
  InputOtp,
  InputOtpModule
} from "./chunk-AMQPZUEO.js";
import "./chunk-Q6EH5FIW.js";
import "./chunk-3M7WNZDB.js";
import "./chunk-3AV4ZNX3.js";
import {
  AuthService
} from "./chunk-5G45XA3Z.js";
import "./chunk-XNDMLLHT.js";
import "./chunk-RF55NRGJ.js";
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/pages/auth/two-step/two-step.component.ts
function TwoStepComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function TwoStepComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
var TwoStepComponent = class _TwoStepComponent {
  authService;
  router;
  routes = routes;
  otpValue = "";
  loading = false;
  errorMsg = "";
  returnUrl = "/dashboard/index";
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
  }
  submit() {
    if (!this.otpValue || this.otpValue.length < 6 || this.loading)
      return;
    this.loading = true;
    this.errorMsg = "";
    this.authService.loginWith2FA(this.otpValue).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (err) => {
        this.loading = false;
        this.otpValue = "";
        this.errorMsg = err?.error?.detail ?? "Code invalide ou expir\xE9.";
      }
    });
  }
  static \u0275fac = function TwoStepComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TwoStepComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TwoStepComponent, selectors: [["app-two-step"]], decls: 31, vars: 7, consts: [[1, "account-content"], [1, "login-wrapper", "bg-img"], [1, "login-content", "authent-content"], [1, "digit-group", 3, "ngSubmit"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "text-center", "otp-input"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["name", "otp", 3, "ngModelChange", "ngModel", "length"], [1, "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "ti", "ti-alert-circle", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function TwoStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function TwoStepComponent_Template_form_ngSubmit_3_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "div", 9)(11, "h3");
      \u0275\u0275text(12, "2 Step Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "Enter the 6-digit code from your authenticator app.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, TwoStepComponent_div_15_Template, 3, 1, "div", 10);
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "p-inputotp", 13);
      \u0275\u0275twoWayListener("ngModelChange", function TwoStepComponent_Template_p_inputotp_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.otpValue, $event) || (ctx.otpValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
      \u0275\u0275template(21, TwoStepComponent_span_21_Template, 1, 0, "span", 16);
      \u0275\u0275text(22, " Verify ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 17)(24, "h4");
      \u0275\u0275text(25, "Return to ");
      \u0275\u0275elementStart(26, "a", 18);
      \u0275\u0275text(27, "login");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 19)(29, "p");
      \u0275\u0275text(30, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.signIn);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.otpValue);
      \u0275\u0275property("length", 6);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || ctx.otpValue.length < 6);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.signIn);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, InputOtpModule, InputOtp], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TwoStepComponent, [{
    type: Component,
    args: [{ selector: "app-two-step", imports: [CommonModule, FormsModule, RouterLink, InputOtpModule], template: '<div class="account-content">\n  <div class="login-wrapper bg-img">\n    <div class="login-content authent-content">\n      <form class="digit-group" (ngSubmit)="submit()">\n        <div class="login-userset">\n\n          <div class="login-logo logo-normal">\n            <img src="assets/img/logo.svg" alt="img">\n          </div>\n          <a [routerLink]="routes.signIn" class="login-logo logo-white">\n            <img src="assets/img/logo-white.svg" alt="Img">\n          </a>\n\n          <div>\n            <div class="login-userheading">\n              <h3>2 Step Verification</h3>\n              <h4>Enter the 6-digit code from your authenticator app.</h4>\n            </div>\n\n            <!-- Alerte erreur -->\n            <div class="alert alert-danger py-2 mb-3" *ngIf="errorMsg">\n              <i class="ti ti-alert-circle me-1"></i>{{ errorMsg }}\n            </div>\n\n            <div class="text-center otp-input">\n              <div class="d-flex align-items-center justify-content-center mb-3">\n                <p-inputotp [(ngModel)]="otpValue" name="otp" [length]="6" />\n              </div>\n            </div>\n\n            <div class="mb-3">\n              <button type="submit" class="btn btn-primary w-100"\n                      [disabled]="loading || otpValue.length < 6">\n                <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\n                Verify\n              </button>\n            </div>\n\n            <div class="signinform text-center">\n              <h4>Return to <a [routerLink]="routes.signIn" class="hover-a">login</a></h4>\n            </div>\n          </div>\n\n          <div class="my-4 d-flex justify-content-center align-items-center copyright-text">\n            <p>Copyright &copy; 2025 DreamsPOS</p>\n          </div>\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n' }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TwoStepComponent, { className: "TwoStepComponent", filePath: "src/_api/pages/auth/two-step/two-step.component.ts", lineNumber: 14 });
})();
export {
  TwoStepComponent
};
//# sourceMappingURL=chunk-STFI4LHC.js.map
