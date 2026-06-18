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

// src/app/features/auth/email-verification/email-verification-2/email-verification-2.component.ts
var EmailVerification2Component = class _EmailVerification2Component {
  router;
  routes = routes;
  value;
  constructor(router) {
    this.router = router;
  }
  navigation() {
    this.router.navigate([routes.twoStepVerification2]);
  }
  static \u0275fac = function EmailVerification2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailVerification2Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailVerification2Component, selectors: [["app-email-verification-2"]], decls: 38, vars: 2, consts: [[1, "account-content"], [1, "row", "login-wrapper", "m-0"], [1, "col-lg-6", "p-0"], [1, "login-content"], [1, "digit-group"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.svg", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Img"], [1, "login-userheading"], [1, "text-center", "otp-input"], [1, "d-flex", "align-items-center", "mb-3"], [3, "ngModelChange", "ngModel"], [1, "badge", "bg-danger-transparent", "mb-3"], [1, "d-flex", "align-items-center"], [1, "ti", "ti-clock", "me-1"], [1, "mb-3", "d-flex", "justify-content-center"], [1, "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mb-3"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/authentication-04.svg", "alt", "img"]], template: function EmailVerification2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 8);
      \u0275\u0275element(9, "img", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div")(11, "div", 10)(12, "h3");
      \u0275\u0275text(13, "Email OTP Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h4");
      \u0275\u0275text(15, "OTP sent to your Email Address ending\xA0******doe@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "p-inputotp", 13);
      \u0275\u0275twoWayListener("ngModelChange", function EmailVerification2Component_Template_p_inputotp_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div")(20, "div", 14)(21, "p", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23, "09:59");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17)(25, "p", 18);
      \u0275\u0275text(26, "Didn't get the OTP? ");
      \u0275\u0275elementStart(27, "a", 19);
      \u0275\u0275text(28, "Resend OTP");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(29, "div", 20)(30, "button", 21);
      \u0275\u0275listener("click", function EmailVerification2Component_Template_button_click_30_listener() {
        return ctx.navigation();
      });
      \u0275\u0275text(31, "Verify & Proceed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 22)(33, "p");
      \u0275\u0275text(34, "Copyright \xA9 2025 DreamsPOS");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(35, "div", 2)(36, "div", 23);
      \u0275\u0275element(37, "img", 24);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
    }
  }, dependencies: [InputOtp, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailVerification2Component, [{
    type: Component,
    args: [{ selector: "app-email-verification-2", imports: [InputOtp, RouterLink, FormsModule], template: `<div class="account-content">
    <div class="row login-wrapper m-0">
        <div class="col-lg-6 p-0">
            <div class="login-content">
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
        <div class="col-lg-6 p-0">
            <div class="login-img">
                <img src="assets/img/authentication/authentication-04.svg" alt="img">
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailVerification2Component, { className: "EmailVerification2Component", filePath: "src/app/features/auth/email-verification/email-verification-2/email-verification-2.component.ts", lineNumber: 14 });
})();
export {
  EmailVerification2Component
};
//# sourceMappingURL=chunk-STOR42YD.js.map
