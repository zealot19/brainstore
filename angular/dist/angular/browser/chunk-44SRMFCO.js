import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
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

// src/app/features/pages/settings/website-settings/preference/preference.component.ts
var PreferenceComponent = class _PreferenceComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function PreferenceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreferenceComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreferenceComponent, selectors: [["app-preference"]], decls: 125, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "col-xl-4", "col-lg-6", "col-md-4", "col-sm-6"], [1, "card"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-medium"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["type", "checkbox", "id", "user7", "checked", "", 1, "check"], ["for", "user7", 1, "checktoggle"], ["type", "checkbox", "id", "user8", "checked", "", 1, "check"], ["for", "user8", 1, "checktoggle"], ["type", "checkbox", "id", "user9", "checked", "", 1, "check"], ["for", "user9", 1, "checktoggle"], ["type", "checkbox", "id", "user10", "checked", "", 1, "check"], ["for", "user10", 1, "checktoggle"], ["type", "checkbox", "id", "user11", "checked", "", 1, "check"], ["for", "user11", 1, "checktoggle"], [1, "text-end", "settings-bottom-btn", "mt-0"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function PreferenceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Preference");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 0)(10, "div", 7)(11, "div", 8)(12, "div", 6)(13, "div", 9)(14, "div")(15, "h5", 10);
      \u0275\u0275text(16, "Maintenance Mode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275element(18, "input", 12)(19, "label", 13);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "div", 6)(23, "div", 9)(24, "div")(25, "h5", 10);
      \u0275\u0275text(26, "Copoun");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 11);
      \u0275\u0275element(28, "input", 14)(29, "label", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 7)(31, "div", 8)(32, "div", 6)(33, "div", 9)(34, "div")(35, "h5", 10);
      \u0275\u0275text(36, "Offers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 11);
      \u0275\u0275element(38, "input", 16)(39, "label", 17);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 7)(41, "div", 8)(42, "div", 6)(43, "div", 9)(44, "div")(45, "h5", 10);
      \u0275\u0275text(46, "MultiLanguage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 11);
      \u0275\u0275element(48, "input", 18)(49, "label", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 7)(51, "div", 8)(52, "div", 6)(53, "div", 9)(54, "div")(55, "h5", 10);
      \u0275\u0275text(56, "Multicurrency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 11);
      \u0275\u0275element(58, "input", 20)(59, "label", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "div", 7)(61, "div", 8)(62, "div", 6)(63, "div", 9)(64, "div")(65, "h5", 10);
      \u0275\u0275text(66, "SMS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 11);
      \u0275\u0275element(68, "input", 22)(69, "label", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(70, "div", 7)(71, "div", 8)(72, "div", 6)(73, "div", 9)(74, "div")(75, "h5", 10);
      \u0275\u0275text(76, "Stores");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 11);
      \u0275\u0275element(78, "input", 24)(79, "label", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(80, "div", 7)(81, "div", 8)(82, "div", 6)(83, "div", 9)(84, "div")(85, "h5", 10);
      \u0275\u0275text(86, "Warehouses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 11);
      \u0275\u0275element(88, "input", 26)(89, "label", 27);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(90, "div", 7)(91, "div", 8)(92, "div", 6)(93, "div", 9)(94, "div")(95, "h5", 10);
      \u0275\u0275text(96, "Barcode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 11);
      \u0275\u0275element(98, "input", 28)(99, "label", 29);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(100, "div", 7)(101, "div", 8)(102, "div", 6)(103, "div", 9)(104, "div")(105, "h5", 10);
      \u0275\u0275text(106, "QR Code");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 11);
      \u0275\u0275element(108, "input", 30)(109, "label", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(110, "div", 7)(111, "div", 8)(112, "div", 6)(113, "div", 9)(114, "div")(115, "h5", 10);
      \u0275\u0275text(116, "HRMS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 11);
      \u0275\u0275element(118, "input", 32)(119, "label", 33);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(120, "div", 34)(121, "button", 35);
      \u0275\u0275text(122, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "button", 36);
      \u0275\u0275text(124, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreferenceComponent, [{
    type: Component,
    args: [{ selector: "app-preference", imports: [SettingsSidebarComponent], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4 class="fs-18 fw-bold">Preference</h4>\n        </div>\n        <div class="card-body">\n          <div class="row">\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">Maintenance Mode</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user1" class="check" checked>\n                      <label for="user1" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">Copoun</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user2" class="check" checked>\n                      <label for="user2" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">Offers</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user3" class="check" checked>\n                      <label for="user3" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">MultiLanguage</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user4" class="check" checked>\n                      <label for="user4" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">Multicurrency</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user5" class="check" checked>\n                      <label for="user5" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">SMS</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user6" class="check" checked>\n                      <label for="user6" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">Stores</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user7" class="check" checked>\n                      <label for="user7" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">Warehouses</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user8" class="check" checked>\n                      <label for="user8" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">Barcode</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user9" class="check" checked>\n                      <label for="user9" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">QR Code</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user10" class="check" checked>\n                      <label for="user10" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fw-medium">HRMS</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user11" class="check" checked>\n                      <label for="user11" class="checktoggle"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="text-end settings-bottom-btn mt-0">\n            <button type="button" class="btn btn-secondary me-2">Cancel</button>\n            <button type="submit" class="btn btn-primary">Save Changes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreferenceComponent, { className: "PreferenceComponent", filePath: "src/app/features/pages/settings/website-settings/preference/preference.component.ts", lineNumber: 11 });
})();
export {
  PreferenceComponent
};
//# sourceMappingURL=chunk-44SRMFCO.js.map
