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

// src/app/features/pages/settings/general-settings/connected-apps/connected-apps.component.ts
var ConnectedAppsComponent = class _ConnectedAppsComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function ConnectedAppsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectedAppsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnectedAppsComponent, selectors: [["app-connected-apps"]], decls: 106, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body", "pb-0"], [1, "col-xl-4", "col-lg-6", "col-md-4", "col-sm-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "app-icon"], ["src", "assets/img/icons/app-icon-01.svg", "alt", "Img"], [1, "connect-btn"], ["href", "javascript:void(0);", 1, "badge", "bg-outline-success"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fs-16", "fw-medium"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-02.svg", "alt", "Img"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-03.svg", "alt", "Img"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-04.svg", "alt", "Img"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-05.svg", "alt", "Img"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-06.svg", "alt", "Img"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"]], template: function ConnectedAppsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Connected Apps");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 0)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11);
      \u0275\u0275element(15, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13)(17, "a", 14);
      \u0275\u0275text(18, "Connected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 15)(20, "div")(21, "h5", 16);
      \u0275\u0275text(22, "Calendar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 17);
      \u0275\u0275element(24, "input", 18)(25, "label", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 7)(27, "div", 8)(28, "div", 9)(29, "div", 10)(30, "div", 11);
      \u0275\u0275element(31, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 13)(33, "a", 14);
      \u0275\u0275text(34, "Connected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 15)(36, "div")(37, "h5", 16);
      \u0275\u0275text(38, "Figma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 17);
      \u0275\u0275element(40, "input", 21)(41, "label", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 7)(43, "div", 8)(44, "div", 9)(45, "div", 10)(46, "div", 11);
      \u0275\u0275element(47, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 13)(49, "a", 14);
      \u0275\u0275text(50, "Connected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 15)(52, "div")(53, "h5", 16);
      \u0275\u0275text(54, "Dropbox");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 17);
      \u0275\u0275element(56, "input", 24)(57, "label", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(58, "div", 7)(59, "div", 8)(60, "div", 9)(61, "div", 10)(62, "div", 11);
      \u0275\u0275element(63, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 13)(65, "a", 14);
      \u0275\u0275text(66, "Connected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 15)(68, "div")(69, "h5", 16);
      \u0275\u0275text(70, "Slack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 17);
      \u0275\u0275element(72, "input", 27)(73, "label", 28);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(74, "div", 7)(75, "div", 8)(76, "div", 9)(77, "div", 10)(78, "div", 11);
      \u0275\u0275element(79, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 13)(81, "a", 14);
      \u0275\u0275text(82, "Connected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 15)(84, "div")(85, "h5", 16);
      \u0275\u0275text(86, "Github");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 17);
      \u0275\u0275element(88, "input", 30)(89, "label", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(90, "div", 7)(91, "div", 8)(92, "div", 9)(93, "div", 10)(94, "div", 11);
      \u0275\u0275element(95, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 13)(97, "a", 14);
      \u0275\u0275text(98, "Connected");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 15)(100, "div")(101, "h5", 16);
      \u0275\u0275text(102, "Figma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 17);
      \u0275\u0275element(104, "input", 33)(105, "label", 34);
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectedAppsComponent, [{
    type: Component,
    args: [{ selector: "app-connected-apps", imports: [SettingsSidebarComponent], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4 class="fs-18 fw-bold">Connected Apps</h4>\n        </div>\n        <div class="card-body pb-0">\n          <div class="row">\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between mb-3">\n                    <div class="app-icon">\n                      <img src="assets/img/icons/app-icon-01.svg" alt="Img">\n                    </div>\n                    <div class="connect-btn">\n                      <a href="javascript:void(0);" class="badge bg-outline-success">Connected</a>\n                    </div>\n                  </div>\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fs-16 fw-medium">Calendar</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user1" class="check" checked>\n                      <label for="user1" class="checktoggle">	</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between mb-3">\n                    <div class="app-icon">\n                      <img src="assets/img/icons/app-icon-02.svg" alt="Img">\n                    </div>\n                    <div class="connect-btn">\n                      <a href="javascript:void(0);" class="badge bg-outline-success">Connected</a>\n                    </div>\n                  </div>\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fs-16 fw-medium">Figma</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user2" class="check" checked>\n                      <label for="user2" class="checktoggle">	</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between mb-3">\n                    <div class="app-icon">\n                      <img src="assets/img/icons/app-icon-03.svg" alt="Img">\n                    </div>\n                    <div class="connect-btn">\n                      <a href="javascript:void(0);" class="badge bg-outline-success">Connected</a>\n                    </div>\n                  </div>\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fs-16 fw-medium">Dropbox</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user3" class="check" checked>\n                      <label for="user3" class="checktoggle">	</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between mb-3">\n                    <div class="app-icon">\n                      <img src="assets/img/icons/app-icon-04.svg" alt="Img">\n                    </div>\n                    <div class="connect-btn">\n                      <a href="javascript:void(0);" class="badge bg-outline-success">Connected</a>\n                    </div>\n                  </div>\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fs-16 fw-medium">Slack</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user4" class="check" checked>\n                      <label for="user4" class="checktoggle">	</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between mb-3">\n                    <div class="app-icon">\n                      <img src="assets/img/icons/app-icon-05.svg" alt="Img">\n                    </div>\n                    <div class="connect-btn">\n                      <a href="javascript:void(0);" class="badge bg-outline-success">Connected</a>\n                    </div>\n                  </div>\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fs-16 fw-medium">Github</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user5" class="check" checked>\n                      <label for="user5" class="checktoggle">	</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">\n              <div class="card">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between mb-3">\n                    <div class="app-icon">\n                      <img src="assets/img/icons/app-icon-06.svg" alt="Img">\n                    </div>\n                    <div class="connect-btn">\n                      <a href="javascript:void(0);" class="badge bg-outline-success">Connected</a>\n                    </div>\n                  </div>\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div>\n                      <h5 class="fs-16 fw-medium">Figma</h5>\n                    </div>\n                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                      <input type="checkbox" id="user6" class="check" checked>\n                      <label for="user6" class="checktoggle">	</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnectedAppsComponent, { className: "ConnectedAppsComponent", filePath: "src/app/features/pages/settings/general-settings/connected-apps/connected-apps.component.ts", lineNumber: 11 });
})();
export {
  ConnectedAppsComponent
};
//# sourceMappingURL=chunk-UKV72KBV.js.map
