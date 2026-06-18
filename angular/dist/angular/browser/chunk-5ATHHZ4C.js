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

// src/app/features/pages/settings/system-settings/gdpr-settings/gdpr-settings.component.ts
var GdprSettingsComponent = class _GdprSettingsComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedValue1 = "";
  selectedList1 = [
    { value: "Left" },
    { value: "Center" },
    { value: "Right" }
  ];
  static \u0275fac = function GdprSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GdprSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GdprSettingsComponent, selectors: [["app-gdpr-settings"]], decls: 85, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body"], [1, "localization-info"], [1, "col-sm-4"], [1, "setting-info"], [1, "col-sm-8"], [1, "mb-3"], ["rows", "4", "placeholder", "Type your message", 1, "form-control"], [1, "row", "align-items-center"], [1, "localization-select"], ["placeholder", "Left", 1, "custom-mat-select", "select"], ["value", "1"], [1, "localization-select", "d-flex", "align-items-center"], ["type", "text", "value", "Agree", 1, "form-control"], ["type", "text", "value", "Decline", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "me-3"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "col-sm-6"], [1, "localization-select", "d-flex", "align-items-center", "w-100"], [1, "mb-3", "w-100"], ["type", "text", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function GdprSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "form")(6, "div", 4)(7, "h4");
      \u0275\u0275text(8, "GDPR Cookies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 0)(12, "div", 7)(13, "div", 8)(14, "h6");
      \u0275\u0275text(15, "Cookies Consent Text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
      \u0275\u0275element(18, "textarea", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 7)(21, "div", 8)(22, "h6");
      \u0275\u0275text(23, "Cookies Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "Your can configure the type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 7)(27, "div", 13)(28, "mat-select", 14)(29, "mat-option", 15);
      \u0275\u0275text(30, "Left");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-option", 15);
      \u0275\u0275text(32, "Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-option", 15);
      \u0275\u0275text(34, "Right");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 7)(37, "div", 8)(38, "h6");
      \u0275\u0275text(39, "Agree Button Text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41, "Your can configure the text here");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 7)(43, "div", 16)(44, "div", 10);
      \u0275\u0275element(45, "input", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 12)(47, "div", 7)(48, "div", 8)(49, "h6");
      \u0275\u0275text(50, "Decline Button Text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Your can configure the text here");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 7)(54, "div", 16)(55, "div", 10);
      \u0275\u0275element(56, "input", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 12)(58, "div", 7)(59, "div", 8)(60, "h6");
      \u0275\u0275text(61, "Show Decline Button");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p");
      \u0275\u0275text(63, "Your can configure the text here");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 7)(65, "div", 16)(66, "div", 19);
      \u0275\u0275element(67, "input", 20)(68, "label", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "div", 12)(70, "div", 7)(71, "div", 8)(72, "h6");
      \u0275\u0275text(73, "Link for Cookies Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p");
      \u0275\u0275text(75, "Your can configure the link here");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 22)(77, "div", 23)(78, "div", 24);
      \u0275\u0275element(79, "input", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(80, "div", 26)(81, "button", 27);
      \u0275\u0275text(82, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "button", 28);
      \u0275\u0275text(84, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GdprSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-gdpr-settings", imports: [SettingsSidebarComponent, MatSelectModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <form>\n          <div class="card-header">\n            <h4>GDPR Cookies</h4>\n          </div>\n          <div class="card-body">\n            <div class="localization-info">\n              <div class="row">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Cookies Consent Text</h6>\n                  </div>\n                </div>\n                <div class="col-sm-8">\n                  <div class="mb-3">\n                    <textarea  rows="4" class="form-control" placeholder="Type your message"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Cookies Position</h6>\n                    <p>Your can configure the type</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select">\n                    <mat-select class="custom-mat-select select" placeholder="Left">\n                      <mat-option value="1">Left</mat-option>\n                      <mat-option value="1">Center</mat-option>\n                      <mat-option value="1">Right</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Agree Button Text</h6>\n                    <p>Your can configure the text here</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select d-flex align-items-center">\n                    <div class="mb-3">\n                      <input type="text" class="form-control" value="Agree">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Decline Button Text</h6>\n                    <p>Your can configure the text here</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select d-flex align-items-center">\n                    <div class="mb-3">\n                      <input type="text" class="form-control" value="Decline">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Show Decline Button</h6>\n                    <p>Your can configure the text here</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select d-flex align-items-center">\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-3">\n                      <input type="checkbox" id="user4" class="check" checked>\n                      <label for="user4" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Link for Cookies Page</h6>\n                    <p>Your can configure the link here</p>\n                  </div>\n                </div>\n                <div class="col-sm-6">\n                  <div class="localization-select d-flex align-items-center w-100">\n                    <div class="mb-3 w-100">\n                      <input type="text" class="form-control">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-end">\n              <button type="button" class="btn btn-secondary me-2">Cancel</button>\n              <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GdprSettingsComponent, { className: "GdprSettingsComponent", filePath: "src/app/features/pages/settings/system-settings/gdpr-settings/gdpr-settings.component.ts", lineNumber: 15 });
})();
export {
  GdprSettingsComponent
};
//# sourceMappingURL=chunk-5ATHHZ4C.js.map
