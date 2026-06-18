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

// src/app/features/pages/settings/app-settings/invoice-settings/invoice-settings.component.ts
var InvoiceSettingsComponent = class _InvoiceSettingsComponent {
  sidebar;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedList1 = [{ value: "5" }, { value: "6" }, { value: "7" }];
  selectedList2 = [{ value: "Round Off Up" }];
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function InvoiceSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceSettingsComponent, selectors: [["app-invoice-settings"]], decls: 112, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body"], [1, "logo-company"], [1, "col-md-4"], [1, "logo-info", "me-0", "mb-3", "mb-md-0"], [1, "col-md-6"], [1, "profile-pic-upload", "mb-0", "me-0"], [1, "new-employee-field"], [1, "mb-3", "mb-md-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], ["data-feather", "upload"], [1, "col-md-2"], [1, "new-logo", "ms-auto"], ["href", "javascript:void(0);"], ["src", "assets/img/logo-small.png", "alt", "Logo"], [1, "localization-info"], [1, "row", "align-items-center"], [1, "col-sm-4"], [1, "setting-info"], [1, "localization-select"], ["type", "text", "value", "INV -", 1, "form-control"], [1, "localization-select", "d-flex", "align-items-center", "fixed-width"], ["placeholder", "5", 1, "custom-mat-select", "select"], ["value", "1"], [1, "ms-2"], [1, "localization-select", "d-flex", "align-items-center", "width-custom"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "me-3"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["placeholder", "Round Off Up", 1, "custom-mat-select", "select"], [1, "localization-select", "d-flex", "align-items-center"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "col-sm-8"], [1, "mb-3"], ["rows", "4", "placeholder", "Type your message", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function InvoiceSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "form")(6, "div", 4)(7, "h4");
      \u0275\u0275text(8, "Invoice Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "ul", 6)(11, "li")(12, "div", 0)(13, "div", 7)(14, "div", 8)(15, "h6");
      \u0275\u0275text(16, "Invoice Logo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Upload Logo of your Company to display in Invoice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "div", 11)(22, "div", 12)(23, "div", 13);
      \u0275\u0275element(24, "input", 14);
      \u0275\u0275elementStart(25, "div", 15)(26, "h4");
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275text(28, "Upload Photo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "For better preview recommended size is 450px x 450px. Max size 5mb.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 17)(32, "div", 18)(33, "a", 19);
      \u0275\u0275element(34, "img", 20);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(35, "div", 21)(36, "div", 22)(37, "div", 23)(38, "div", 24)(39, "h6");
      \u0275\u0275text(40, "Invoice Prefix");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Add prefix to your invoice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 23)(44, "div", 25);
      \u0275\u0275element(45, "input", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 22)(47, "div", 23)(48, "div", 24)(49, "h6");
      \u0275\u0275text(50, "Invoice Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Select due date to display in Invoice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 23)(54, "div", 27)(55, "mat-select", 28)(56, "mat-option", 29);
      \u0275\u0275text(57, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 29);
      \u0275\u0275text(59, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 29);
      \u0275\u0275text(61, "7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "span", 30);
      \u0275\u0275text(63, "Days");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 22)(65, "div", 23)(66, "div", 24)(67, "h6");
      \u0275\u0275text(68, "Invoice Round Off");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70, "Value Roundoff in Invoice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 23)(72, "div", 31)(73, "div", 32);
      \u0275\u0275element(74, "input", 33)(75, "label", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-select", 35)(77, "mat-option", 29);
      \u0275\u0275text(78, "Round Off Up");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 22)(80, "div", 23)(81, "div", 24)(82, "h6");
      \u0275\u0275text(83, "Show Company Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p");
      \u0275\u0275text(85, "Show / Hide Company Details in Invoice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 23)(87, "div", 36)(88, "div", 32);
      \u0275\u0275element(89, "input", 37)(90, "label", 38);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(91, "div", 0)(92, "div", 23)(93, "div", 24)(94, "h6");
      \u0275\u0275text(95, "Invoice Header Terms");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 39)(97, "div", 40);
      \u0275\u0275element(98, "textarea", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 0)(100, "div", 23)(101, "div", 24)(102, "h6");
      \u0275\u0275text(103, "Invoice Footer Terms");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 39)(105, "div", 40);
      \u0275\u0275element(106, "textarea", 41);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(107, "div", 42)(108, "button", 43);
      \u0275\u0275text(109, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "button", 44);
      \u0275\u0275text(111, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-settings", imports: [SettingsSidebarComponent, MatSelectModule], template: '\n<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <form >\n          <div class="card-header">\n            <h4>Invoice Settings</h4>\n          </div>\n          <div class="card-body ">\n            <ul class="logo-company">\n              <li>\n                <div class="row">\n                  <div class="col-md-4">\n                    <div class="logo-info me-0 mb-3 mb-md-0">\n                      <h6>Invoice Logo</h6>\n                      <p>Upload Logo of your Company to display in Invoice</p>\n                    </div>\n                  </div>\n                  <div class="col-md-6">\n                    <div class="profile-pic-upload mb-0 me-0">\n                      <div class="new-employee-field">\n                        <div class="mb-3 mb-md-0">\n                          <div class="image-upload mb-0">\n                            <input type="file">\n                            <div class="image-uploads">\n                              <h4><i data-feather="upload"></i>Upload Photo</h4>\n                            </div>\n                          </div>\n                          <span>For better preview recommended size is 450px x 450px. Max size 5mb.</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="col-md-2">\n                    <div class="new-logo ms-auto">\n                      <a href="javascript:void(0);"><img src="assets/img/logo-small.png" alt="Logo"></a>\n                    </div>\n                  </div>\n                </div>																								\n              </li>\n            </ul>\n            <div class="localization-info">\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Invoice Prefix</h6>\n                    <p>Add prefix to your invoice</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select">\n                    <input type="text" class="form-control" value="INV -">\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Invoice Due</h6>\n                    <p>Select due date  to display in Invoice</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select d-flex align-items-center fixed-width">\n                    <mat-select class="custom-mat-select select" placeholder="5">\n                      <mat-option value="1">5</mat-option>\n                      <mat-option value="1">6</mat-option>\n                      <mat-option value="1">7</mat-option>\n                    </mat-select>\n                    <span class="ms-2">Days</span>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Invoice Round Off</h6>\n                    <p>Value Roundoff in Invoice</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select d-flex align-items-center width-custom">\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-3">\n                      <input type="checkbox" id="user3" class="check" checked>\n                      <label for="user3" class="checktoggle"></label>\n                    </div>\n                    <mat-select class="custom-mat-select select" placeholder="Round Off Up">\n                      <mat-option value="1">Round Off Up</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n              </div>\n              <div class="row align-items-center">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Show Company Details</h6>\n                    <p>Show / Hide Company Details in Invoice</p>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="localization-select d-flex align-items-center">\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-3">\n                      <input type="checkbox" id="user4" class="check" checked>\n                      <label for="user4" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Invoice Header Terms</h6>\n                  </div>\n                </div>\n                <div class="col-sm-8">\n                  <div class="mb-3">\n                    <textarea  rows="4" class="form-control" placeholder="Type your message"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-sm-4">\n                  <div class="setting-info">\n                    <h6>Invoice Footer Terms</h6>\n                  </div>\n                </div>\n                <div class="col-sm-8">\n                  <div class="mb-3">\n                    <textarea  rows="4" class="form-control" placeholder="Type your message"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-end">\n              <button type="button" class="btn btn-secondary me-2" >Cancel</button>\n              <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n          </div>\n          \n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceSettingsComponent, { className: "InvoiceSettingsComponent", filePath: "src/app/features/pages/settings/app-settings/invoice-settings/invoice-settings.component.ts", lineNumber: 15 });
})();
export {
  InvoiceSettingsComponent
};
//# sourceMappingURL=chunk-OPWFCPRA.js.map
