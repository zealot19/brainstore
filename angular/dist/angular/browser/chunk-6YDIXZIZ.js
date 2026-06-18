import {
  InputOtp
} from "./chunk-AMQPZUEO.js";
import "./chunk-Q6EH5FIW.js";
import "./chunk-3M7WNZDB.js";
import "./chunk-3AV4ZNX3.js";
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
import "./chunk-D63C2A5J.js";
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
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/auth/email-verification/email-verification-3/email-verification-3.component.ts
var EmailVerification3Component = class _EmailVerification3Component {
  router;
  routes = routes;
  value;
  constructor(router) {
    this.router = router;
  }
  navigation() {
    this.router.navigate([routes.twoStepVerification3]);
  }
  static \u0275fac = function EmailVerification3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailVerification3Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailVerification3Component, selectors: [["app-email-verification-3"]], decls: 36, vars: 2, consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "row", "w-100"], [1, "col-lg-5", "mx-auto"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "digit-group"], [1, "card"], [1, "card-body", "p-5"], [1, "login-userheading"], [1, "text-center", "otp-input"], [1, "d-flex", "align-items-center", "mb-3"], [3, "ngModelChange", "ngModel"], [1, "badge", "bg-danger-transparent", "mb-3"], [1, "d-flex", "align-items-center"], [1, "ti", "ti-clock", "me-1"], [1, "mb-3", "d-flex", "justify-content-center"], [1, "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mb-0"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function EmailVerification3Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "h3");
      \u0275\u0275text(14, "Email OTP Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16, "OTP sent to your Email Address ending\xA0******doe@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "p-inputotp", 15);
      \u0275\u0275twoWayListener("ngModelChange", function EmailVerification3Component_Template_p_inputotp_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div")(21, "div", 16)(22, "p", 17);
      \u0275\u0275element(23, "i", 18);
      \u0275\u0275text(24, "09:59");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 19)(26, "p", 20);
      \u0275\u0275text(27, "Didn't get the OTP? ");
      \u0275\u0275elementStart(28, "a", 21);
      \u0275\u0275text(29, "Resend OTP");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 22)(31, "button", 23);
      \u0275\u0275listener("click", function EmailVerification3Component_Template_button_click_31_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(32, "Verify & Proceed");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(33, "div", 24)(34, "p");
      \u0275\u0275text(35, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
    }
  }, dependencies: [InputOtp, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailVerification3Component, [{
    type: Component,
    args: [{ selector: "app-email-verification-3", imports: [InputOtp, RouterLink, FormsModule], template: `<div class="account-content">
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
                    <form class="digit-group">
                        <div class="card">
                            <div class="card-body p-5">
                                <div class="login-userheading">
                                    <h3>Email OTP Verification</h3>
                                    <h4>OTP sent to your Email Address ending\xA0******doe&#64;example.com</h4>
                                </div>
                                <div class="text-center otp-input">
                                    <div class="d-flex align-items-center mb-3">
                                        <p-inputotp  [(ngModel)]="value" />
                                    </div>
                                    <div>
                                        <div class="badge bg-danger-transparent mb-3">
                                            <p class="d-flex align-items-center "><i class="ti ti-clock me-1"></i>09:59</p>
                                        </div>
                                        <div class="mb-3 d-flex justify-content-center">
                                            <p class="text-gray-9">Didn't get the OTP? <a href="javascript:void(0);" class="text-primary">Resend OTP</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-0">
                                    <button type="submit" class="btn btn-primary w-100" (click)="navigation()">Verify & Proceed</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailVerification3Component, { className: "EmailVerification3Component", filePath: "src/app/features/auth/email-verification/email-verification-3/email-verification-3.component.ts", lineNumber: 14 });
})();
export {
  EmailVerification3Component
};
//# sourceMappingURL=chunk-6YDIXZIZ.js.map
