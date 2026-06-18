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

// src/app/features/pages/settings/app-settings/pos-settings/pos-settings.component.ts
var PosSettingsComponent = class _PosSettingsComponent {
  sidebar;
  selectedValue1 = "";
  selectedList1 = [
    { value: "A4" },
    { value: "A4" },
    { value: "A4" }
  ];
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function PosSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PosSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosSettingsComponent, selectors: [["app-pos-settings"]], decls: 77, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body"], [1, "localization-info"], [1, "row", "align-items-center"], [1, "col-sm-4"], [1, "setting-info"], [1, "localization-select"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-sm-8"], [1, "localization-select", "pos-payment-method", "d-flex", "align-items-center", "mb-0", "w-100"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], [1, "localization-select", "d-flex", "align-items-center"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "me-3"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "d-flex", "align-items-center", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"]], template: function PosSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "form")(6, "div", 4)(7, "h4");
      \u0275\u0275text(8, "POS Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h6");
      \u0275\u0275text(15, "POS Printer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 8)(17, "div", 10)(18, "mat-select", 11)(19, "mat-option", 12);
      \u0275\u0275text(20, "A2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-option", 12);
      \u0275\u0275text(22, "A3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "mat-option", 12);
      \u0275\u0275text(24, "A4");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 7)(26, "div", 8)(27, "div", 9)(28, "h6");
      \u0275\u0275text(29, "Payment Method");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "label", 16);
      \u0275\u0275element(34, "input", 17)(35, "span", 18);
      \u0275\u0275text(36, "COD ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 15)(38, "label", 16);
      \u0275\u0275element(39, "input", 17)(40, "span", 18);
      \u0275\u0275text(41, "Cheque ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 15)(43, "label", 16);
      \u0275\u0275element(44, "input", 17)(45, "span", 18);
      \u0275\u0275text(46, "Card ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 15)(48, "label", 16);
      \u0275\u0275element(49, "input", 17)(50, "span", 18);
      \u0275\u0275text(51, "Paypal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 15)(53, "label", 16);
      \u0275\u0275element(54, "input", 17)(55, "span", 18);
      \u0275\u0275text(56, "Bank Transfer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 15)(58, "label", 16);
      \u0275\u0275element(59, "input", 17)(60, "span", 18);
      \u0275\u0275text(61, "Cash ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(62, "div", 7)(63, "div", 8)(64, "div", 9)(65, "h6");
      \u0275\u0275text(66, "Enable Sound Effect ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 8)(68, "div", 19)(69, "div", 20);
      \u0275\u0275element(70, "input", 21)(71, "label", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 23)(73, "button", 24);
      \u0275\u0275text(74, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 25);
      \u0275\u0275text(76, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PosSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-pos-settings", imports: [SettingsSidebarComponent, MatSelectModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <form>\n          <div class="card-header">\n            <h4>POS Settings</h4>\n          </div>\n          <div class="card-body">\n            <div class="localization-info">\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>POS Printer</h6>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select">\n                    <mat-select class="custom-mat-select select" placeholder="Select">\n                      <mat-option value="1">A2</mat-option>\n                      <mat-option value="1">A3</mat-option>\n                      <mat-option value="1">A4</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n              </div>	\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Payment Method</h6>\n                  </div>\n                </div>\n                <div class="col-sm-8">\n                  <div class="localization-select pos-payment-method d-flex align-items-center mb-0 w-100">\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox">\n                        <span class="checkmarks"></span>COD\n                      </label>\n                    </div>\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox">\n                        <span class="checkmarks"></span>Cheque\n                      </label>\n                    </div>\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox">\n                        <span class="checkmarks"></span>Card\n                      </label>\n                    </div>\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox">\n                        <span class="checkmarks"></span>Paypal\n                      </label>\n                    </div>\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox">\n                        <span class="checkmarks"></span>Bank Transfer\n                      </label>\n                    </div>\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox">\n                        <span class="checkmarks"></span>Cash\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>	\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Enable Sound Effect </h6>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select d-flex align-items-center">\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-3">\n                      <input type="checkbox" id="user4" class="check" checked>\n                      <label for="user4" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>									\n            </div>\n            <div class="d-flex align-items-center justify-content-end">\n              <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</button>\n              <button type="submit" class="btn btn-submit">Save Changes</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosSettingsComponent, { className: "PosSettingsComponent", filePath: "src/app/features/pages/settings/app-settings/pos-settings/pos-settings.component.ts", lineNumber: 14 });
})();
export {
  PosSettingsComponent
};
//# sourceMappingURL=chunk-AIDGLBZ6.js.map
