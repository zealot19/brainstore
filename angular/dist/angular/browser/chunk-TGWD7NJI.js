import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MEEHDAF7.js";
import "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-V3LRYX2J.js";
import "./chunk-NRBRKDTR.js";
import "./chunk-AIOFIKT2.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import "./chunk-DFPDGJ2J.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/system-settings/otp-settings/otp-settings.component.ts
var OtpSettingsComponent = class _OtpSettingsComponent {
  sidebar;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  static \u0275fac = function OtpSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpSettingsComponent, selectors: [["app-otp-settings"]], decls: 58, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body"], [1, "localization-info"], [1, "row", "align-items-center"], [1, "col-sm-4"], [1, "setting-info"], [1, "localization-select"], ["placeholder", "SMS", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "4", 1, "custom-mat-select", "select"], ["placeholder", "5 Mins", 1, "custom-mat-select", "select"], [1, "d-flex", "align-items-center", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function OtpSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "form")(6, "div", 4)(7, "h4");
      \u0275\u0275text(8, "OTP");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h6");
      \u0275\u0275text(15, "OTP Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "Your can configure the type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 8)(19, "div", 10)(20, "mat-select", 11)(21, "mat-option", 12);
      \u0275\u0275text(22, "SMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "mat-option", 12);
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 7)(26, "div", 8)(27, "div", 9)(28, "h6");
      \u0275\u0275text(29, "OTP Digit Limit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, "Select size of the format ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 8)(33, "div", 10)(34, "mat-select", 13)(35, "mat-option", 12);
      \u0275\u0275text(36, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 12);
      \u0275\u0275text(38, "5");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 7)(40, "div", 8)(41, "div", 9)(42, "h6");
      \u0275\u0275text(43, "OTP Expire Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Select expire time of OTP ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 8)(47, "div", 10)(48, "mat-select", 14)(49, "mat-option", 12);
      \u0275\u0275text(50, "5 Mins");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "mat-option", 12);
      \u0275\u0275text(52, "10 Mins");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(53, "div", 15)(54, "button", 16);
      \u0275\u0275text(55, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 17);
      \u0275\u0275text(57, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-otp-settings", imports: [SettingsSidebarComponent, MatSelectModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <form>\n          <div class="card-header">\n            <h4>OTP</h4>\n          </div>\n          <div class="card-body">\n            <div class="localization-info">\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>OTP Type</h6>\n                    <p>Your can configure the type</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select">\n                    <mat-select class="custom-mat-select select" placeholder="SMS">\n                      <mat-option value="1">SMS</mat-option>\n                      <mat-option value="1">Email</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>OTP Digit Limit</h6>\n                    <p>Select size of the format </p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select">\n                    <mat-select class="custom-mat-select select" placeholder="4">\n                      <mat-option value="1">4</mat-option>\n                      <mat-option value="1">5</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>OTP Expire Time</h6>\n                    <p>Select expire time of OTP </p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select">\n                    <mat-select class="custom-mat-select select" placeholder="5 Mins">\n                      <mat-option value="1">5 Mins</mat-option>\n                      <mat-option value="1">10 Mins</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-end">\n              <button type="button" class="btn btn-secondary me-2">Cancel</button>\n              <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpSettingsComponent, { className: "OtpSettingsComponent", filePath: "src/app/features/pages/settings/system-settings/otp-settings/otp-settings.component.ts", lineNumber: 12 });
})();
export {
  OtpSettingsComponent
};
//# sourceMappingURL=chunk-TGWD7NJI.js.map
