import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
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

// src/app/features/pages/settings/general-settings/notification/notification.component.ts
var NotificationComponent = class _NotificationComponent {
  sidebar;
  routes = routes;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  static \u0275fac = function NotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], decls: 141, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-medium"], [1, "status-toggle", "modal-status"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "table-responsive", "notification-table-responsive"], [1, "table"], ["type", "checkbox", "id", "users4", "checked", "", 1, "check"], ["for", "users4", 1, "checktoggle"], ["type", "checkbox", "id", "users5", "checked", "", 1, "check"], ["for", "users5", 1, "checktoggle"], ["type", "checkbox", "id", "users6", "checked", "", 1, "check"], ["for", "users6", 1, "checktoggle"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["type", "checkbox", "id", "user7", "checked", "", 1, "check"], ["for", "user7", 1, "checktoggle"], ["type", "checkbox", "id", "user8", "checked", "", 1, "check"], ["for", "user8", 1, "checktoggle"], ["type", "checkbox", "id", "user9", "checked", "", 1, "check"], ["for", "user9", 1, "checktoggle"], ["type", "checkbox", "id", "user10", "checked", "", 1, "check"], ["for", "user10", 1, "checktoggle"], ["type", "checkbox", "id", "user11", "checked", "", 1, "check"], ["for", "user11", 1, "checktoggle"], ["type", "checkbox", "id", "user12", "checked", "", 1, "check"], ["for", "user12", 1, "checktoggle"], ["type", "checkbox", "id", "user13", "checked", "", 1, "check"], ["for", "user13", 1, "checktoggle"], ["type", "checkbox", "id", "user14", "checked", "", 1, "check"], ["for", "user14", 1, "checktoggle"], ["type", "checkbox", "id", "user15", "checked", "", 1, "check"], ["for", "user15", 1, "checktoggle"], ["type", "checkbox", "id", "user16", "checked", "", 1, "check"], ["for", "user16", 1, "checktoggle"], ["type", "checkbox", "id", "user17", "checked", "", 1, "check"], ["for", "user17", 1, "checktoggle"], ["type", "checkbox", "id", "user18", "checked", "", 1, "check"], ["for", "user18", 1, "checktoggle"], ["type", "checkbox", "id", "user19", "checked", "", 1, "check"], ["for", "user19", 1, "checktoggle"]], template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Notification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div")(10, "div", 7)(11, "div")(12, "h6", 8);
      \u0275\u0275text(13, "Mobile Push Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275element(15, "input", 10)(16, "label", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "div")(19, "h6", 8);
      \u0275\u0275text(20, "Desktop Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9);
      \u0275\u0275element(22, "input", 12)(23, "label", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div")(26, "h6", 8);
      \u0275\u0275text(27, "Email Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275element(29, "input", 14)(30, "label", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 7)(32, "div")(33, "h6", 8);
      \u0275\u0275text(34, "MSMS Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 16);
      \u0275\u0275element(36, "input", 17)(37, "label", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 19)(39, "table", 20)(40, "thead")(41, "tr")(42, "th");
      \u0275\u0275text(43, "General Notification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Push");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47, "SMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th");
      \u0275\u0275text(49, "Email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "tbody")(51, "tr")(52, "td");
      \u0275\u0275text(53, " Payment ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "td")(55, "div", 9);
      \u0275\u0275element(56, "input", 21)(57, "label", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "td")(59, "div", 9);
      \u0275\u0275element(60, "input", 23)(61, "label", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "td")(63, "div", 9);
      \u0275\u0275element(64, "input", 25)(65, "label", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "tr")(67, "td");
      \u0275\u0275text(68, " Transaction ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td")(70, "div", 9);
      \u0275\u0275element(71, "input", 27)(72, "label", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "td")(74, "div", 9);
      \u0275\u0275element(75, "input", 29)(76, "label", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "td")(78, "div", 9);
      \u0275\u0275element(79, "input", 31)(80, "label", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "tr")(82, "td");
      \u0275\u0275text(83, " Email Verification ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "td")(85, "div", 9);
      \u0275\u0275element(86, "input", 33)(87, "label", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "td")(89, "div", 9);
      \u0275\u0275element(90, "input", 35)(91, "label", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "td")(93, "div", 9);
      \u0275\u0275element(94, "input", 37)(95, "label", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "tr")(97, "td");
      \u0275\u0275text(98, " OTP ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "td")(100, "div", 9);
      \u0275\u0275element(101, "input", 39)(102, "label", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "td")(104, "div", 9);
      \u0275\u0275element(105, "input", 41)(106, "label", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "td")(108, "div", 9);
      \u0275\u0275element(109, "input", 43)(110, "label", 44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "tr")(112, "td");
      \u0275\u0275text(113, " Activity ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "td")(115, "div", 9);
      \u0275\u0275element(116, "input", 45)(117, "label", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "td")(119, "div", 9);
      \u0275\u0275element(120, "input", 47)(121, "label", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "td")(123, "div", 9);
      \u0275\u0275element(124, "input", 49)(125, "label", 50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "tr")(127, "td");
      \u0275\u0275text(128, " Account ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "td")(130, "div", 9);
      \u0275\u0275element(131, "input", 51)(132, "label", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "td")(134, "div", 9);
      \u0275\u0275element(135, "input", 53)(136, "label", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "td")(138, "div", 9);
      \u0275\u0275element(139, "input", 55)(140, "label", 56);
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationComponent, [{
    type: Component,
    args: [{ selector: "app-notification", imports: [SettingsSidebarComponent], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4 class="fs-18 fw-bold">Notification</h4>\n        </div>\n        <div class="card-body">\n          <div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n              <div>\n                <h6 class="fw-medium">Mobile Push Notifications</h6>\n              </div>\n              <div class="status-toggle modal-status">\n                <input type="checkbox" id="user1" class="check" checked>\n                <label for="user1" class="checktoggle">	</label>\n              </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n              <div>\n                <h6 class="fw-medium">Desktop Notifications</h6>\n              </div>\n              <div class="status-toggle modal-status">\n                <input type="checkbox" id="user2" class="check" checked>\n                <label for="user2" class="checktoggle">	</label>\n              </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n              <div>\n                <h6 class="fw-medium">Email Notifications</h6>\n              </div>\n              <div class="status-toggle modal-status">\n                <input type="checkbox" id="user3" class="check" checked>\n                <label for="user3" class="checktoggle">	</label>\n              </div>\n            </div>\n            <div class="d-flex align-items-center justify-content-between mb-3">\n              <div>\n                <h6 class="fw-medium">MSMS Notifications</h6>\n              </div>\n              <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                <input type="checkbox" id="user4" class="check" checked>\n                <label for="user4" class="checktoggle">	</label>\n              </div>\n            </div>\n            <div class="table-responsive notification-table-responsive">\n              <table class="table">\n                <thead>\n                  <tr>\n                    <th>General Notification</th>\n                    <th>Push</th>\n                    <th>SMS</th>\n                    <th>Email</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      Payment\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="users4" class="check" checked>\n                        <label for="users4" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="users5" class="check" checked>\n                        <label for="users5" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="users6" class="check" checked>\n                        <label for="users6" class="checktoggle"></label>\n                      </div>\n                    </td>\n                  </tr>	\n                  <tr>\n                    <td>\n                      Transaction\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user5" class="check" checked>\n                        <label for="user5" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user6" class="check" checked>\n                        <label for="user6" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user7" class="check" checked>\n                        <label for="user7" class="checktoggle"></label>\n                      </div>\n                    </td>\n                  </tr>												\n                  <tr>\n                    <td>\n                      Email Verification\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user8" class="check" checked>\n                        <label for="user8" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user9" class="check" checked>\n                        <label for="user9" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user10" class="check" checked>\n                        <label for="user10" class="checktoggle"></label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      OTP\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user11" class="check" checked>\n                        <label for="user11" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user12" class="check" checked>\n                        <label for="user12" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user13" class="check" checked>\n                        <label for="user13" class="checktoggle"></label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Activity\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user14" class="check" checked>\n                        <label for="user14" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user15" class="check" checked>\n                        <label for="user15" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user16" class="check" checked>\n                        <label for="user16" class="checktoggle"></label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Account\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user17" class="check" checked>\n                        <label for="user17" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user18" class="check" checked>\n                        <label for="user18" class="checktoggle"></label>\n                      </div>\n                    </td>\n                    <td>\n                      <div class="status-toggle modal-status">\n                        <input type="checkbox" id="user19" class="check" checked>\n                        <label for="user19" class="checktoggle"></label>\n                      </div>\n                    </td>\n                  </tr>										\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "src/app/features/pages/settings/general-settings/notification/notification.component.ts", lineNumber: 11 });
})();
export {
  NotificationComponent
};
//# sourceMappingURL=chunk-4BYYR33F.js.map
