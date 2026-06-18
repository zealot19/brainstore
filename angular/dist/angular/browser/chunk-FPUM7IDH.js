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

// src/app/features/auth/email-verification/email-verification/email-verification.component.ts
var EmailVerificationComponent = class _EmailVerificationComponent {
  router;
  routes = routes;
  value;
  constructor(router) {
    this.router = router;
  }
  navigation() {
    this.router.navigate([routes.twoStepVerification]);
  }
  static \u0275fac = function EmailVerificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailVerificationComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 34, vars: 2, consts: [[1, "account-content"], [1, "login-wrapper", "email-veri-wrap", "bg-img"], [1, "login-content", "authent-content"], [1, "digit-group"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], [1, "text-center", "otp-input"], [1, "d-flex", "align-items-center", "mb-3"], [3, "ngModelChange", "ngModel"], [1, "badge", "bg-danger-transparent", "mb-3"], [1, "d-flex", "align-items-center"], [1, "ti", "ti-clock", "me-1"], [1, "mb-3", "d-flex", "justify-content-center"], [1, "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]], template: function EmailVerificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "div", 9)(11, "h3");
      \u0275\u0275text(12, "Email OTP Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h4");
      \u0275\u0275text(14, "OTP sent to your Email Address ending\xA0******doe@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "p-inputotp", 12);
      \u0275\u0275twoWayListener("ngModelChange", function EmailVerificationComponent_Template_p_inputotp_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div")(19, "div", 13)(20, "p", 14);
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22, "09:59");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 16)(24, "p", 17);
      \u0275\u0275text(25, "Didn't get the OTP? ");
      \u0275\u0275elementStart(26, "a", 18);
      \u0275\u0275text(27, "Resend OTP");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 19)(29, "button", 20);
      \u0275\u0275listener("click", function EmailVerificationComponent_Template_button_click_29_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(30, "Verify & Proceed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 21)(32, "p");
      \u0275\u0275text(33, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
    }
  }, dependencies: [InputOtp, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailVerificationComponent, [{
    type: Component,
    args: [{ selector: "app-email-verification", imports: [InputOtp, FormsModule, RouterLink], template: `<div class="account-content">
    <div class="login-wrapper email-veri-wrap bg-img">
        <div class="login-content authent-content">
            <form class="digit-group">
                <div class="login-userset">
                    <div class="login-logo logo-normal">
                        <img src="assets/img/logo.svg" alt="img">
                    </div>
                    <a [routerLink]="routes.index" class="login-logo logo-white">
                        <img src="assets/img/logo-white.svg"  alt="Img">
                    </a>
                    <div>
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
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100" (click)="navigation()">Verify & Proceed</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailVerificationComponent, { className: "EmailVerificationComponent", filePath: "src/app/features/auth/email-verification/email-verification/email-verification.component.ts", lineNumber: 14 });
})();
export {
  EmailVerificationComponent
};
//# sourceMappingURL=chunk-FPUM7IDH.js.map
