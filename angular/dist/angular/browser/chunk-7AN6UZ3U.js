import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  intlTelInput_default
} from "./chunk-3ROKZQXR.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/general-settings/security-settings/security-settings.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = (a0) => ({ "active": a0 });
function SecuritySettingsComponent_Conditional_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275element(1, "img", 110);
    \u0275\u0275text(2, " Weak. Must contain at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function SecuritySettingsComponent_Conditional_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275element(1, "img", 111);
    \u0275\u0275text(2, " Average. Must contain at least 1 letter or number ");
    \u0275\u0275elementEnd();
  }
}
function SecuritySettingsComponent_Conditional_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275element(1, "img", 112);
    \u0275\u0275text(2, " Almost. Must contain special symbol ");
    \u0275\u0275elementEnd();
  }
}
function SecuritySettingsComponent_Conditional_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275element(1, "img", 112);
    \u0275\u0275text(2, " Awesome! You have a secure password. ");
    \u0275\u0275elementEnd();
  }
}
var SecuritySettingsComponent = class _SecuritySettingsComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  password = [false, false];
  // Add more as needed
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  passwordValue = "";
  strengthLevel = "";
  passwordInfoMessage = null;
  passwordInfoColor = "";
  poorRegExp = /[a-z]/;
  weakRegExp = /(?=.*?[0-9])/;
  strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  whitespaceRegExp = /^$|\s+/;
  checkPasswordStrength(event) {
    const inputElement = event.target;
    const password = inputElement.value;
    this.passwordValue = password;
    const passwordLength = password.length;
    const hasPoor = this.poorRegExp.test(password);
    const hasWeak = this.weakRegExp.test(password);
    const hasStrong = this.strongRegExp.test(password);
    const hasWhitespace = this.whitespaceRegExp.test(password);
    if (password === "") {
      this.resetStrength();
      return;
    }
    if (hasWhitespace) {
      this.passwordInfoMessage = "Whitespaces are not allowed";
      this.passwordInfoColor = "red";
      this.strengthLevel = "";
      return;
    }
    if (passwordLength < 8) {
      this.strengthLevel = "poor";
      this.passwordInfoMessage = "Weak. Must contain at least 8 characters.";
      this.passwordInfoColor = "red";
    } else if (hasPoor || hasWeak || hasStrong) {
      this.strengthLevel = "weak";
      this.passwordInfoMessage = "Average. Must contain at least 1 letter or number.";
      this.passwordInfoColor = "#FFB54A";
    }
    if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
      this.strengthLevel = "strong";
      this.passwordInfoMessage = "Almost strong. Must contain a special symbol.";
      this.passwordInfoColor = "#1D9CFD";
    }
    if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
      this.strengthLevel = "heavy";
      this.passwordInfoMessage = "Awesome! You have a secure password.";
      this.passwordInfoColor = "#159F46";
    }
  }
  resetStrength() {
    this.strengthLevel = "";
    this.passwordInfoMessage = null;
  }
  ngAfterViewInit() {
    const input = document.querySelector("#phone");
    const input2 = document.querySelector("#phone2");
    intlTelInput_default(input, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    intlTelInput_default(input2, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9+()-\s]/g, "");
    });
    input2.addEventListener("input", () => {
      input2.value = input2.value.replace(/[^0-9+()-\s]/g, "");
    });
  }
  static \u0275fac = function SecuritySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecuritySettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecuritySettingsComponent, selectors: [["app-security-settings"]], decls: 478, vars: 32, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "border-bottom", "mb-3", "pb-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "border", "bg-light", "fs-24", "me-2"], [1, "ti", "ti-eye-off", "text-gray-900", "fs-18"], [1, "fs-16", "fw-medium", "mb-1"], [1, "fs-16"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#change-password", 1, "btn", "btn-primary"], [1, "ti", "ti-shield", "text-gray-900", "fs-18"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "ti", "ti-brand-google", "text-gray-900", "fs-18"], [1, "badge", "bg-outline-success"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-3"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "ti", "ti-phone", "text-gray-900", "fs-18"], [1, "fs-20", "text-success", "me-3"], [1, "ti", "ti-circle-check-filled"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#phone-verification", 1, "btn", "btn-primary", "mt-0"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "ms-3"], [1, "ti", "ti-mail", "text-gray-900", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#email-verification", 1, "btn", "btn-primary", "mt-0"], [1, "ti", "ti-tool", "text-gray-900", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#device-management", 1, "btn", "btn-primary", "mt-0"], [1, "ti", "ti-activity", "text-gray-900", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#account-activity", 1, "btn", "btn-primary", "mt-0"], [1, "ti", "ti-ban", "text-gray-900", "fs-18"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "mt-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "ti", "ti-trash", "text-gray-900", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-account", 1, "btn", "btn-danger"], ["id", "change-password", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "input-blocks"], [1, "fw-medium"], [1, "text-danger"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "ti", "toggle-password", 3, "click", "ngClass"], [1, "mb-3"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", 1, "pass-input", "form-control", 3, "input", "type"], ["tabindex", "0", 1, "ti", "toggle-password", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["id", "passwordInfo", 1, "fs-12"], [1, "d-flex", "align-items-center", "text-danger"], [1, "d-flex", "align-items-center", "text-warning"], [1, "d-flex", "align-items-center", "text-blue"], [1, "d-flex", "align-items-center", "text-success"], [1, "input-blocks", "mb-0"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "phone-verification", 1, "modal", "fade"], [1, "input-blocks", "custom-tel"], ["id", "phone", "type", "tel", "placeholder", "(201) 555-0123", 1, "form-control", "pass-input"], ["id", "phone2", "type", "tel", "placeholder", "(201) 555-0123", 1, "form-control", "pass-input"], [1, "fs-14"], [1, "ti", "ti-info-circle", "me-1"], ["id", "email-verification", 1, "modal", "fade"], ["type", "text", 1, "form-control"], ["id", "device-management", 1, "modal", "device-management-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "col-md-12"], [1, "device-management-table"], [1, "table-responsive"], [1, "table", "datanew"], [1, "thead-light"], ["href", "javascript:void(0);", 1, "btn"], [1, "ti", "ti-trash"], ["id", "account-activity", 1, "modal", "device-management-modal", "fade"], [1, "table"], [1, "ti", "ti-logout"], ["id", "delete-account", 1, "modal", "delete-account-modal", "fade"], [1, "delete-header"], [1, "form-check", "d-flex", "mb-2"], ["type", "radio", "name", "delete", "id", "del-acc1", 1, "form-check-input"], ["for", "del-acc1", 1, "form-check-label", "fs-14", "ms-2"], [1, "text-gray-9", "fw-medium"], [1, "d-block", "text-default"], ["type", "radio", "name", "delete", "id", "del-acc2", 1, "form-check-input"], ["for", "del-acc2", 1, "form-check-label", "fs-14", "ms-2"], ["type", "radio", "name", "delete", "id", "del-acc3", 1, "form-check-input"], ["for", "del-acc3", 1, "form-check-label", "fs-14", "ms-2"], ["type", "radio", "name", "delete", "id", "del-acc4", 1, "form-check-input"], ["for", "del-acc4", 1, "form-check-label", "fs-14", "ms-2"], ["type", "radio", "name", "delete", "id", "del-acc5", "checked", "", 1, "form-check-input"], ["for", "del-acc5", 1, "form-check-label", "fs-14", "ms-2"], [1, "ms-4"], ["rows", "3", 1, "form-control"], ["src", "assets/img/icons/angry.svg", 1, "me-2"], ["src", "assets/img/icons/anguish.svg", 1, "me-2"], ["src", "assets/img/icons/smile.svg", 1, "me-2"]], template: function SecuritySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div")(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "h5", 11);
      \u0275\u0275text(16, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 12);
      \u0275\u0275text(18, "Last Changed 22 Dec 2024, 10:30 AM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "a", 13);
      \u0275\u0275text(20, "Change Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 7)(22, "div", 8)(23, "span", 9);
      \u0275\u0275element(24, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "h5", 11);
      \u0275\u0275text(27, "Two Factor Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 12);
      \u0275\u0275text(29, "Receive codes via SMS or email every time you login");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 15);
      \u0275\u0275element(31, "input", 16)(32, "label", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 7)(34, "div", 8)(35, "span", 9);
      \u0275\u0275element(36, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div")(38, "h5", 11);
      \u0275\u0275text(39, "Google Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p", 12);
      \u0275\u0275text(41, "Connect to Google");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 8)(43, "span", 19);
      \u0275\u0275text(44, "Connected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 20);
      \u0275\u0275element(46, "input", 21)(47, "label", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 7)(49, "div", 8)(50, "span", 9);
      \u0275\u0275element(51, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div")(53, "h5", 11);
      \u0275\u0275text(54, "Phone Number Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 12);
      \u0275\u0275text(56, "Verified Mobile Number : +81699799974");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 8)(58, "span", 24);
      \u0275\u0275element(59, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 26);
      \u0275\u0275text(61, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 27);
      \u0275\u0275text(63, "Remove");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 7)(65, "div", 8)(66, "span", 9);
      \u0275\u0275element(67, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div")(69, "h5", 11);
      \u0275\u0275text(70, "Email Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 12);
      \u0275\u0275text(72, "Verified Email : info@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 8)(74, "span", 24);
      \u0275\u0275element(75, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "a", 29);
      \u0275\u0275text(77, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "a", 27);
      \u0275\u0275text(79, "Remove");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 7)(81, "div", 8)(82, "span", 9);
      \u0275\u0275element(83, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div")(85, "h5", 11);
      \u0275\u0275text(86, "Device Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 12);
      \u0275\u0275text(88, "Manage devices associated with the account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "a", 31);
      \u0275\u0275text(90, "Manage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 7)(92, "div", 8)(93, "span", 9);
      \u0275\u0275element(94, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div")(96, "h5", 11);
      \u0275\u0275text(97, "Account Activity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p", 12);
      \u0275\u0275text(99, "Manage activities associated with the account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "a", 33);
      \u0275\u0275text(101, "View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 7)(103, "div", 8)(104, "span", 9);
      \u0275\u0275element(105, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div")(107, "h5", 11);
      \u0275\u0275text(108, "Deactivate Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 12);
      \u0275\u0275text(110, "This will shutdown your account. Your account will be reactive when you sign in again");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "a", 35);
      \u0275\u0275text(112, "Deactivate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 36)(114, "div", 8)(115, "span", 9);
      \u0275\u0275element(116, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div")(118, "h5", 11);
      \u0275\u0275text(119, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p", 12);
      \u0275\u0275text(121, "Your account will be permanently deleted");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "a", 38);
      \u0275\u0275text(123, "Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(124, "div", 39)(125, "div", 40)(126, "div", 41)(127, "div", 42)(128, "div", 43)(129, "h4");
      \u0275\u0275text(130, "Change Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "button", 44)(132, "span", 45);
      \u0275\u0275text(133, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "div", 46)(135, "div", 0)(136, "div", 47)(137, "div", 48)(138, "label", 49);
      \u0275\u0275text(139, "Current Password ");
      \u0275\u0275elementStart(140, "span", 50);
      \u0275\u0275text(141, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 51);
      \u0275\u0275element(143, "input", 52);
      \u0275\u0275elementStart(144, "span", 53);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_144_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(145, "div", 47)(146, "div", 48)(147, "div", 54)(148, "label", 49);
      \u0275\u0275text(149, "New Password ");
      \u0275\u0275elementStart(150, "span", 50);
      \u0275\u0275text(151, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 55)(153, "div", 56)(154, "input", 57);
      \u0275\u0275listener("input", function SecuritySettingsComponent_Template_input_input_154_listener($event) {
        return ctx.checkPasswordStrength($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "span", 58);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_155_listener() {
        return ctx.togglePassword(1);
      })("keydown.enter", function SecuritySettingsComponent_Template_span_keydown_enter_155_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 59);
      \u0275\u0275element(157, "span", 60)(158, "span", 61)(159, "span", 62)(160, "span", 63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "p", 64);
      \u0275\u0275conditionalCreate(162, SecuritySettingsComponent_Conditional_162_Template, 3, 0, "span", 65);
      \u0275\u0275conditionalCreate(163, SecuritySettingsComponent_Conditional_163_Template, 3, 0, "span", 66);
      \u0275\u0275conditionalCreate(164, SecuritySettingsComponent_Conditional_164_Template, 3, 0, "span", 67);
      \u0275\u0275conditionalCreate(165, SecuritySettingsComponent_Conditional_165_Template, 3, 0, "span", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "div", 47)(167, "div", 69)(168, "label", 49);
      \u0275\u0275text(169, "Confirm Password ");
      \u0275\u0275elementStart(170, "span", 50);
      \u0275\u0275text(171, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 51);
      \u0275\u0275element(173, "input", 52);
      \u0275\u0275elementStart(174, "span", 53);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_174_listener() {
        return ctx.togglePassword(3);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(175, "div", 70)(176, "a", 71);
      \u0275\u0275text(177, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "a", 72);
      \u0275\u0275text(179, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(180, "div", 73)(181, "div", 40)(182, "div", 41)(183, "div", 42)(184, "div", 43)(185, "h4");
      \u0275\u0275text(186, "Change Phone Number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "button", 44)(188, "span", 45);
      \u0275\u0275text(189, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "div", 46)(191, "div", 0)(192, "div", 47)(193, "div", 74)(194, "label", 49);
      \u0275\u0275text(195, "Current Phone Number ");
      \u0275\u0275elementStart(196, "span", 50);
      \u0275\u0275text(197, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(198, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "div", 47)(200, "div", 74)(201, "label", 49);
      \u0275\u0275text(202, "New Phone Number ");
      \u0275\u0275elementStart(203, "span", 50);
      \u0275\u0275text(204, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(205, "input", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 47)(207, "div", 48)(208, "p", 77);
      \u0275\u0275element(209, "i", 78);
      \u0275\u0275text(210, " New phone number only updated once you verified ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 47)(212, "div", 69)(213, "label", 49);
      \u0275\u0275text(214, "Current Password ");
      \u0275\u0275elementStart(215, "span", 50);
      \u0275\u0275text(216, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 51);
      \u0275\u0275element(218, "input", 52);
      \u0275\u0275elementStart(219, "span", 53);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_219_listener() {
        return ctx.togglePassword(4);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(220, "div", 70)(221, "a", 71);
      \u0275\u0275text(222, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "a", 72);
      \u0275\u0275text(224, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(225, "div", 79)(226, "div", 40)(227, "div", 41)(228, "div", 42)(229, "div", 43)(230, "h4");
      \u0275\u0275text(231, "Change Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "button", 44)(233, "span", 45);
      \u0275\u0275text(234, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "div", 46)(236, "div", 0)(237, "div", 47)(238, "div", 48)(239, "label", 49);
      \u0275\u0275text(240, "Current Email ");
      \u0275\u0275elementStart(241, "span", 50);
      \u0275\u0275text(242, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(243, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "div", 47)(245, "div", 48)(246, "label", 49);
      \u0275\u0275text(247, "New Email ");
      \u0275\u0275elementStart(248, "span", 50);
      \u0275\u0275text(249, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(250, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "div", 47)(252, "div", 48)(253, "p", 77);
      \u0275\u0275element(254, "i", 78);
      \u0275\u0275text(255, " New email address only updated once you verified ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(256, "div", 47)(257, "div", 69)(258, "label", 49);
      \u0275\u0275text(259, "Current Password ");
      \u0275\u0275elementStart(260, "span", 50);
      \u0275\u0275text(261, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "div", 51);
      \u0275\u0275element(263, "input", 52);
      \u0275\u0275elementStart(264, "span", 53);
      \u0275\u0275listener("click", function SecuritySettingsComponent_Template_span_click_264_listener() {
        return ctx.togglePassword(5);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(265, "div", 70)(266, "a", 71);
      \u0275\u0275text(267, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "a", 72);
      \u0275\u0275text(269, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(270, "div", 81)(271, "div", 82)(272, "div", 41)(273, "div", 42)(274, "div", 43)(275, "h4");
      \u0275\u0275text(276, "Device Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "button", 44)(278, "span", 45);
      \u0275\u0275text(279, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(280, "div", 46)(281, "div", 0)(282, "div", 83)(283, "div", 84)(284, "div", 85)(285, "table", 86)(286, "thead")(287, "tr", 87)(288, "th");
      \u0275\u0275text(289, "Device");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "th");
      \u0275\u0275text(291, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "th");
      \u0275\u0275text(293, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "th");
      \u0275\u0275text(295, "IP Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(296, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "tbody")(298, "tr")(299, "td");
      \u0275\u0275text(300, "Chrome - Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "td");
      \u0275\u0275text(302, "15 May 2025, 10:30 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "td");
      \u0275\u0275text(304, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "td");
      \u0275\u0275text(306, "232.222.12.72");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "td")(308, "a", 88);
      \u0275\u0275element(309, "i", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(310, "tr")(311, "td");
      \u0275\u0275text(312, "Safari Macos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "td");
      \u0275\u0275text(314, "10 Apr 2025, 05:15 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "td");
      \u0275\u0275text(316, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "td");
      \u0275\u0275text(318, "224.111.12.75");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "td")(320, "a", 88);
      \u0275\u0275element(321, "i", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "tr")(323, "td");
      \u0275\u0275text(324, "Firefox Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "td");
      \u0275\u0275text(326, "15 Mar 2025, 02:40 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "td");
      \u0275\u0275text(328, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "td");
      \u0275\u0275text(330, "111.222.13.28");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "td")(332, "a", 88);
      \u0275\u0275element(333, "i", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(334, "tr")(335, "td");
      \u0275\u0275text(336, "Safari Macos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "td");
      \u0275\u0275text(338, "15 Jan 2025, 08:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "td");
      \u0275\u0275text(340, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "td");
      \u0275\u0275text(342, "333.555.10.54");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "td")(344, "a", 88);
      \u0275\u0275element(345, "i", 89);
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(346, "div", 90)(347, "div", 82)(348, "div", 41)(349, "div", 42)(350, "div", 43)(351, "h4");
      \u0275\u0275text(352, "Account Activity");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "button", 44)(354, "span", 45);
      \u0275\u0275text(355, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(356, "div", 46)(357, "div", 0)(358, "div", 83)(359, "div", 84)(360, "div", 85)(361, "table", 91)(362, "thead")(363, "tr")(364, "th");
      \u0275\u0275text(365, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "th");
      \u0275\u0275text(367, "Device");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "th");
      \u0275\u0275text(369, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "th");
      \u0275\u0275text(371, "IP Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(372, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "tbody")(374, "tr")(375, "td");
      \u0275\u0275text(376, "15 May 2025, 10:30 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "td");
      \u0275\u0275text(378, "Chrome - Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "td");
      \u0275\u0275text(380, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "td");
      \u0275\u0275text(382, "232.222.12.72");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "td")(384, "a", 88);
      \u0275\u0275element(385, "i", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "tr")(387, "td");
      \u0275\u0275text(388, "10 Apr 2025, 05:15 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "td");
      \u0275\u0275text(390, "Safari Macos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "td");
      \u0275\u0275text(392, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "td");
      \u0275\u0275text(394, "224.111.12.75");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "td")(396, "a", 88);
      \u0275\u0275element(397, "i", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(398, "tr")(399, "td");
      \u0275\u0275text(400, "15 Mar 2025, 02:40 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "td");
      \u0275\u0275text(402, "Firefox Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "td");
      \u0275\u0275text(404, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "td");
      \u0275\u0275text(406, "111.222.13.28");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "td")(408, "a", 88);
      \u0275\u0275element(409, "i", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(410, "tr")(411, "td");
      \u0275\u0275text(412, "15 Jan 2025, 08:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "td");
      \u0275\u0275text(414, "Safari Macos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "td");
      \u0275\u0275text(416, "Newyork / USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "td");
      \u0275\u0275text(418, "333.555.10.54");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "td")(420, "a", 88);
      \u0275\u0275element(421, "i", 92);
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(422, "div", 93)(423, "div", 82)(424, "div", 41)(425, "div", 42)(426, "div", 43)(427, "h4");
      \u0275\u0275text(428, "Delete Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(429, "button", 44)(430, "span", 45);
      \u0275\u0275text(431, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(432, "div", 46)(433, "div", 94)(434, "h4", 11);
      \u0275\u0275text(435, "Why Are You Deleting Your Account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "p", 12);
      \u0275\u0275text(437, "We're sorry to see you go! To help us improve, please let us know your reason for deleting your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(438, "div", 95);
      \u0275\u0275element(439, "input", 96);
      \u0275\u0275elementStart(440, "label", 97)(441, "span", 98);
      \u0275\u0275text(442, "No longer using the service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "span", 99);
      \u0275\u0275text(444, "I no longer need this service and won\u2019t be using it in the future.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(445, "div", 95);
      \u0275\u0275element(446, "input", 100);
      \u0275\u0275elementStart(447, "label", 101)(448, "span", 98);
      \u0275\u0275text(449, "Privacy concerns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "span", 99);
      \u0275\u0275text(451, "I am concerned about how my data is handled and want to remove my information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(452, "div", 95);
      \u0275\u0275element(453, "input", 102);
      \u0275\u0275elementStart(454, "label", 103)(455, "span", 98);
      \u0275\u0275text(456, "Too many notifications/emails");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "span", 99);
      \u0275\u0275text(458, "I\u2019m overwhelmed by the volume of notifications or emails and would like to reduce them.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(459, "div", 95);
      \u0275\u0275element(460, "input", 104);
      \u0275\u0275elementStart(461, "label", 105)(462, "span", 98);
      \u0275\u0275text(463, "Poor user experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "span", 99);
      \u0275\u0275text(465, "I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(466, "div", 95);
      \u0275\u0275element(467, "input", 106);
      \u0275\u0275elementStart(468, "label", 107)(469, "span", 98);
      \u0275\u0275text(470, "Other (Please specify)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(471, "div", 108);
      \u0275\u0275element(472, "textarea", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(473, "div", 70)(474, "a", 71);
      \u0275\u0275text(475, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "a", 72);
      \u0275\u0275text(477, "Delete Account");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(143);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(10);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(19, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c1, ctx.strengthLevel === "heavy"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.strengthLevel === "poor" ? 162 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.strengthLevel === "weak" ? 163 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.strengthLevel === "strong" ? 164 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.strengthLevel === "heavy" ? 165 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.password[3] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[3] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(44);
      \u0275\u0275property("type", ctx.password[4] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[4] ? "ti-eye" : "ti-eye-off");
      \u0275\u0275advance(44);
      \u0275\u0275property("type", ctx.password[5] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[5] ? "ti-eye" : "ti-eye-off");
    }
  }, dependencies: [SettingsSidebarComponent, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecuritySettingsComponent, [{
    type: Component,
    args: [{ selector: "app-security-settings", imports: [SettingsSidebarComponent, CommonModule], template: `<div class="row">
  <div class="col-xl-12">
    <div class="settings-wrapper d-flex">
      <app-settings-sidebar></app-settings-sidebar>
      <div class="card flex-fill mb-0">
        <div class="card-header">
          <h4 class="fs-18 fw-bold">Security</h4>
        </div>
        <div class="card-body">
          <div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-eye-off text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Password</h5>
                  <p class="fs-16">Last Changed 22 Dec 2024, 10:30 AM</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#change-password">Change Password</a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-shield text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Two Factor Authentication</h5>
                  <p class="fs-16">Receive codes via SMS or email every time you login</p>
                </div>
              </div>
              <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                <input type="checkbox" id="user3" class="check" checked>
                <label for="user3" class="checktoggle">	</label>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-brand-google text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Google Authentication</h5>
                  <p class="fs-16">Connect to Google</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <span class="badge bg-outline-success">Connected</span>
                <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-3">
                  <input type="checkbox" id="user4" class="check" checked>
                  <label for="user4" class="checktoggle">	</label>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-phone text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Phone Number Verification</h5>
                  <p class="fs-16">Verified Mobile Number : +81699799974</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <span class="fs-20 text-success me-3">
                  <i class="ti ti-circle-check-filled"></i>
                </span>
                <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#phone-verification">Change</a>
                <a href="javascript:void(0);" class="btn btn-secondary ms-3">Remove</a>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-mail text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Email Verification</h5>
                  <p class="fs-16">Verified Email : info&#64;example.com</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <span class="fs-20 text-success me-3">
                  <i class="ti ti-circle-check-filled"></i>
                </span>
                <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#email-verification">Change</a>
                <a href="javascript:void(0);" class="btn btn-secondary ms-3">Remove</a>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-tool text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Device Management</h5>
                  <p class="fs-16">Manage devices associated with the account</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#device-management">Manage</a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-activity text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Account Activity</h5>
                  <p class="fs-16">Manage activities associated with the account</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#account-activity">View</a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-ban text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Deactivate Account</h5>
                  <p class="fs-16">This will shutdown your account. Your account will be reactive when you sign in again</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary mt-0">Deactivate</a>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-trash text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">Delete Account</h5>
                  <p class="fs-16">Your account will be permanently deleted</p>
                </div>
              </div>
              <a href="javascript:void(0);" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-account">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Change Password -->
<div class="modal fade" id="change-password">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="page-title">
          <h4>Change Password</h4>
        </div>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">
            <div class="input-blocks">
              <label class="fw-medium">Current Password <span class="text-danger">*</span></label>
              <div class="pass-group">
                <input [type]="password[2] ? 'text' : 'password' " class="pass-input form-control">
                <span class="ti toggle-password" [ngClass]=" password[2] ? 'ti-eye' : 'ti-eye-off'"(click)="togglePassword(2)"></span>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="input-blocks">
              <div class="mb-3">
                <label class="fw-medium">New Password <span class="text-danger">*</span></label>
                <div id="passwordInput" class="pass-group">
                  <div class="pass-group mb-3">
                    <input
                      [type]="password[1] ? 'text' : 'password'"
                      id="password"
                      class="pass-input form-control"
                      (input)="checkPasswordStrength($event)"
                      />
                      <span class="ti toggle-password"
                        [ngClass]="password[1] ? 'ti-eye' : 'ti-eye-off'"
                        (click)="togglePassword(1)"
                        (keydown.enter)="togglePassword(1)"
                        tabindex="0"
                      ></span>
                    </div>
                    <div id="passwordStrength" class="strength-meter password-strength" [ngClass]="{'poor-active':strengthLevel === 'poor','avg-active':strengthLevel === 'weak','strong-active':strengthLevel === 'strong','heavy-active':strengthLevel === 'heavy'}" >
                      <span id="poor" [ngClass]="{'active': strengthLevel === 'poor'||strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                      <span id="weak" [ngClass]="{'active': strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                      <span id="strong" [ngClass]="{'active': strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                      <span id="heavy" [ngClass]="{'active': strengthLevel === 'heavy'}"></span>
                    </div>

                  </div>

                </div>
                <p id="passwordInfo" class="fs-12">
                  @if (strengthLevel === 'poor') {
                    <span class="d-flex align-items-center text-danger">
                      <img src="assets/img/icons/angry.svg" class="me-2">
                      Weak. Must contain at least 8 characters
                    </span>
                  }

                  @if (strengthLevel === 'weak') {
                    <span class="d-flex align-items-center text-warning">
                      <img src="assets/img/icons/anguish.svg" class="me-2">
                      Average. Must contain at least 1 letter or number
                    </span>
                  }

                  @if (strengthLevel === 'strong') {
                    <span class="d-flex align-items-center text-blue">
                      <img src="assets/img/icons/smile.svg" class="me-2">
                      Almost. Must contain special symbol
                    </span>
                  }

                  @if (strengthLevel === 'heavy') {
                    <span class="d-flex align-items-center text-success">
                      <img src="assets/img/icons/smile.svg" class="me-2">
                      Awesome! You have a secure password.
                    </span>
                  }
                </p>


              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks mb-0">
                <label class="fw-medium">Confirm Password <span class="text-danger">*</span></label>
                <div class="pass-group">
                  <input [type]="password[3] ? 'text' : 'password' " class="pass-input form-control">
                  <span class="ti toggle-password" [ngClass]=" password[3] ? 'ti-eye' : 'ti-eye-off'"(click)="togglePassword(3)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</a>
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Password -->

  <!-- Change Phone Number -->
  <div class="modal fade" id="phone-verification">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Change Phone Number</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-blocks custom-tel">
                <label class="fw-medium">Current Phone Number <span class="text-danger">*</span></label>
                <input id="phone" type="tel" class="form-control pass-input" placeholder="(201) 555-0123"/>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks custom-tel">
                <label class="fw-medium">New Phone Number <span class="text-danger">*</span></label>
                <input id="phone2" type="tel" class="form-control pass-input" placeholder="(201) 555-0123"/>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <p class="fs-14">
                  <i class="ti ti-info-circle me-1"></i> New phone number only updated once you verified
                </p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks mb-0">
                <label class="fw-medium">Current Password <span class="text-danger">*</span></label>
                <div class="pass-group">
                  <input [type]="password[4] ? 'text' : 'password' " class="pass-input form-control">
                  <span class="ti toggle-password" [ngClass]=" password[4] ? 'ti-eye' : 'ti-eye-off'"(click)="togglePassword(4)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</a>
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Phone Number -->

  <!-- Change Email -->
  <div class="modal fade" id="email-verification">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Change Email</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium">Current Email <span class="text-danger">*</span></label>
                <input class="form-control" type="text">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <label class="fw-medium">New Email <span class="text-danger">*</span></label>
                <input class="form-control" type="text">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks">
                <p class="fs-14">
                  <i class="ti ti-info-circle me-1"></i> New email address only updated once you verified
                </p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-blocks mb-0">
                <label class="fw-medium">Current Password <span class="text-danger">*</span></label>
                <div class="pass-group">
                  <input [type]="password[5] ? 'text' : 'password' " class="pass-input form-control">
                  <span class="ti toggle-password" [ngClass]=" password[5] ? 'ti-eye' : 'ti-eye-off'"(click)="togglePassword(5)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</a>
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /Change Email -->

  <!-- Device Management -->
  <div class="modal device-management-modal fade" id="device-management">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Device Management</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="device-management-table">
                <div class="table-responsive">
                  <table class="table datanew">
                    <thead>
                      <tr class="thead-light">
                        <th>Device</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>IP Address</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chrome - Windows</td>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>Newyork / USA</td>
                        <td>232.222.12.72</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>10 Apr 2025, 05:15 PM</td>
                        <td>Newyork / USA</td>
                        <td>224.111.12.75</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Firefox Windows</td>
                        <td>15 Mar 2025, 02:40 PM</td>
                        <td>Newyork / USA</td>
                        <td>111.222.13.28</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>15 Jan 2025, 08:00 AM</td>
                        <td>Newyork / USA</td>
                        <td>333.555.10.54</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-trash"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Device Management -->

  <!-- Account Activity -->
  <div class="modal device-management-modal fade" id="account-activity">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Account Activity</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="device-management-table">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Device</th>
                        <th>Location</th>
                        <th>IP Address</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>Chrome - Windows</td>
                        <td>Newyork / USA</td>
                        <td>232.222.12.72</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>10 Apr 2025, 05:15 PM</td>
                        <td>Safari Macos</td>
                        <td>Newyork / USA</td>
                        <td>224.111.12.75</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>15 Mar 2025, 02:40 PM</td>
                        <td>Firefox Windows</td>
                        <td>Newyork / USA</td>
                        <td>111.222.13.28</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>15 Jan 2025, 08:00 AM</td>
                        <td>Safari Macos</td>
                        <td>Newyork / USA</td>
                        <td>333.555.10.54</td>
                        <td>
                          <a href="javascript:void(0);" class="btn">
                            <i class="ti ti-logout"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Account Activity -->

  <!-- Delete Account -->
  <div class="modal delete-account-modal fade" id="delete-account">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Delete Account</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="delete-header">
            <h4 class="fs-16 fw-medium mb-1">Why Are You Deleting Your Account?</h4>
            <p class="fs-16">We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc1">
            <label class="form-check-label fs-14 ms-2" for="del-acc1">
              <span class="text-gray-9 fw-medium">No longer using the service</span>
              <span class="d-block text-default">I no longer need this service and won\u2019t be using it in the future.</span>
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc2">
            <label class="form-check-label fs-14 ms-2" for="del-acc2">
              <span class="text-gray-9 fw-medium">Privacy concerns</span>
              <span class="d-block text-default">I am concerned about how my data is handled and want to remove my information.</span>
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc3">
            <label class="form-check-label fs-14 ms-2" for="del-acc3">
              <span class="text-gray-9 fw-medium">Too many notifications/emails</span>
              <span class="d-block text-default">I\u2019m overwhelmed by the volume of notifications or emails and would like to reduce them.</span>
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc4">
            <label class="form-check-label fs-14 ms-2" for="del-acc4">
              <span class="text-gray-9 fw-medium">Poor user experience</span>
              <span class="d-block text-default">I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations.</span>
            </label>
          </div>
          <div class="form-check d-flex mb-2">
            <input class="form-check-input" type="radio" name="delete" id="del-acc5" checked>
            <label class="form-check-label fs-14 ms-2" for="del-acc5">
              <span class="text-gray-9 fw-medium">Other (Please specify)</span>
            </label>
          </div>
          <div class="ms-4">
            <textarea class="form-control" rows="3"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</a>
          <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Delete Account</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Account -->` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecuritySettingsComponent, { className: "SecuritySettingsComponent", filePath: "src/app/features/pages/settings/general-settings/security-settings/security-settings.component.ts", lineNumber: 12 });
})();
export {
  SecuritySettingsComponent
};
//# sourceMappingURL=chunk-7AN6UZ3U.js.map
