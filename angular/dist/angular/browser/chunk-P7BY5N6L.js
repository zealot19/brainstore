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

// src/app/features/pages/settings/website-settings/system-settings/system-settings.component.ts
var SystemSettingsComponent = class _SystemSettingsComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  static \u0275fac = function SystemSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemSettingsComponent, selectors: [["app-system-settings"]], decls: 201, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body", "pb-0"], [1, "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "system-app-icon"], ["src", "assets/img/icons/app-icon-07.svg", "alt", "Img"], [1, "security-title"], [1, "fs-16", "fw-medium"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "fs-14", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-captcha", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "ti", "ti-tool", "me-1"], ["src", "assets/img/icons/app-icon-08.svg", "alt", "Img"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-analytics", 1, "btn", "btn-outline-secondary", "btn-sm"], ["src", "assets/img/icons/app-icon-09.svg", "alt", "Img"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-adsense", 1, "btn", "btn-outline-secondary", "btn-sm"], ["src", "assets/img/icons/app-icon-10.svg", "alt", "Img"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#configure-google-map", 1, "btn", "btn-outline-secondary", "btn-sm"], ["id", "google-captcha", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit"], ["id", "google-analytics", 1, "modal", "fade"], ["id", "google-adsense", 1, "modal", "fade"], ["id", "configure-google-map", 1, "modal", "fade"]], template: function SystemSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "System Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 0)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "span", 12);
      \u0275\u0275element(16, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "h5", 15);
      \u0275\u0275text(19, "Google Captcha");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 16);
      \u0275\u0275element(21, "input", 17)(22, "label", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p", 19);
      \u0275\u0275text(24, "Captcha helps protect you from spam and password decryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "a", 20);
      \u0275\u0275element(27, "i", 21);
      \u0275\u0275text(28, "View Integration");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(29, "div", 7)(30, "div", 8)(31, "div", 9)(32, "div", 10)(33, "div", 11)(34, "span", 12);
      \u0275\u0275element(35, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 14)(37, "h5", 15);
      \u0275\u0275text(38, "Google Analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 16);
      \u0275\u0275element(40, "input", 23)(41, "label", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p", 19);
      \u0275\u0275text(43, "Provides statistics and basic analytical tools for SEO and marketing purposes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div")(45, "a", 25);
      \u0275\u0275element(46, "i", 21);
      \u0275\u0275text(47, "View Integration");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 7)(49, "div", 8)(50, "div", 9)(51, "div", 10)(52, "div", 11)(53, "span", 12);
      \u0275\u0275element(54, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 14)(56, "h5", 15);
      \u0275\u0275text(57, "Google Adsense Code");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 16);
      \u0275\u0275element(59, "input", 27)(60, "label", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "p", 19);
      \u0275\u0275text(62, "Provides a way for publishers to earn money from their online content.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div")(64, "a", 29);
      \u0275\u0275element(65, "i", 21);
      \u0275\u0275text(66, "View Integration");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 7)(68, "div", 8)(69, "div", 9)(70, "div", 10)(71, "div", 11)(72, "span", 12);
      \u0275\u0275element(73, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 14)(75, "h5", 15);
      \u0275\u0275text(76, "Google Map");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 16);
      \u0275\u0275element(78, "input", 31)(79, "label", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "p", 19);
      \u0275\u0275text(81, "Provides detailed information about geographical regions and sites worldwide.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div")(83, "a", 33);
      \u0275\u0275element(84, "i", 21);
      \u0275\u0275text(85, "View Integration");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(86, "div", 34)(87, "div", 35)(88, "div", 36)(89, "div", 37)(90, "div", 38)(91, "div", 39)(92, "div", 40)(93, "h4", 5);
      \u0275\u0275text(94, "Configure Google Captcha");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "button", 41)(96, "span", 42);
      \u0275\u0275text(97, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "form")(99, "div", 43)(100, "div", 0)(101, "div", 44)(102, "div", 45)(103, "label", 46);
      \u0275\u0275text(104, "Google Rechaptcha Site Key ");
      \u0275\u0275elementStart(105, "span");
      \u0275\u0275text(106, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(107, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 44)(109, "div", 48)(110, "label", 46);
      \u0275\u0275text(111, "Google Rechaptcha Secret Key ");
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(114, "input", 47);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(115, "div", 49)(116, "button", 50);
      \u0275\u0275text(117, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "button", 51);
      \u0275\u0275text(119, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(120, "div", 52)(121, "div", 35)(122, "div", 36)(123, "div", 37)(124, "div", 38)(125, "div", 39)(126, "div", 40)(127, "h4", 5);
      \u0275\u0275text(128, "Configure Google Analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "button", 41)(130, "span", 42);
      \u0275\u0275text(131, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "form")(133, "div", 43)(134, "div", 0)(135, "div", 44)(136, "div", 48)(137, "label", 46);
      \u0275\u0275text(138, "Google Analytics ");
      \u0275\u0275elementStart(139, "span");
      \u0275\u0275text(140, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(141, "input", 47);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "div", 49)(143, "button", 50);
      \u0275\u0275text(144, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "button", 51);
      \u0275\u0275text(146, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(147, "div", 53)(148, "div", 35)(149, "div", 36)(150, "div", 37)(151, "div", 38)(152, "div", 39)(153, "div", 40)(154, "h4", 5);
      \u0275\u0275text(155, "Configure Google Adsense Code");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "button", 41)(157, "span", 42);
      \u0275\u0275text(158, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(159, "form")(160, "div", 43)(161, "div", 0)(162, "div", 44)(163, "div", 48)(164, "label", 46);
      \u0275\u0275text(165, "Google Adsense Code ");
      \u0275\u0275elementStart(166, "span");
      \u0275\u0275text(167, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(168, "input", 47);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(169, "div", 49)(170, "button", 50);
      \u0275\u0275text(171, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "button", 51);
      \u0275\u0275text(173, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(174, "div", 54)(175, "div", 35)(176, "div", 36)(177, "div", 37)(178, "div", 38)(179, "div", 39)(180, "div", 40)(181, "h4", 5);
      \u0275\u0275text(182, "Configure Google Map ID");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "button", 41)(184, "span", 42);
      \u0275\u0275text(185, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(186, "form")(187, "div", 43)(188, "div", 0)(189, "div", 44)(190, "div", 48)(191, "label", 46);
      \u0275\u0275text(192, "Enter Map ID ");
      \u0275\u0275elementStart(193, "span");
      \u0275\u0275text(194, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(195, "input", 47);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 49)(197, "button", 50);
      \u0275\u0275text(198, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 51);
      \u0275\u0275text(200, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-system-settings", imports: [SettingsSidebarComponent], template: ' \n  <div class="row">\n    <div class="col-xl-12">\n      <div class="settings-wrapper d-flex">\n        <app-settings-sidebar></app-settings-sidebar>\n        <div class="card flex-fill mb-0">\n          <div class="card-header">\n            <h4 class="fs-18 fw-bold">System Settings</h4>\n          </div>\n          <div class="card-body pb-0">\n            <div class="row">\n              <div class="col-xl-6 col-lg-12 col-md-6 d-flex">\n                <div class="card flex-fill">\n                  <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2">\n                      <div class="d-flex align-items-center">\n                        <span class="system-app-icon">\n                          <img src="assets/img/icons/app-icon-07.svg" alt="Img">\n                        </span>\n                        <div class="security-title">\n                          <h5 class="fs-16 fw-medium">Google Captcha</h5>\n                        </div>\n                      </div>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user1" class="check" checked>\n                        <label for="user1" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                    <p class="fs-14 mb-3">Captcha helps protect you from spam and password decryption</p>\n                    <div>\n                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#google-captcha"><i class="ti ti-tool me-1"></i>View Integration</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6 col-lg-12 col-md-6 d-flex">\n                <div class="card flex-fill">\n                  <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2">\n                      <div class="d-flex align-items-center">\n                        <span class="system-app-icon">\n                          <img src="assets/img/icons/app-icon-08.svg" alt="Img">\n                        </span>\n                        <div class="security-title">\n                          <h5 class="fs-16 fw-medium">Google Analytics</h5>\n                        </div>\n                      </div>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user2" class="check" checked>\n                        <label for="user2" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                    <p class="fs-14 mb-3">Provides statistics and basic analytical tools for SEO and marketing purposes.</p>\n                    <div>\n                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#google-analytics"><i class="ti ti-tool me-1"></i>View Integration</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6 col-lg-12 col-md-6 d-flex">\n                <div class="card flex-fill">\n                  <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2">\n                      <div class="d-flex align-items-center">\n                        <span class="system-app-icon">\n                          <img src="assets/img/icons/app-icon-09.svg" alt="Img">\n                        </span>\n                        <div class="security-title">\n                          <h5 class="fs-16 fw-medium">Google Adsense Code</h5>\n                        </div>\n                      </div>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user3" class="check" checked>\n                        <label for="user3" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                    <p class="fs-14 mb-3">Provides a way for publishers to earn money from their online content.</p>\n                    <div>\n                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#google-adsense"><i class="ti ti-tool me-1"></i>View Integration</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-xl-6 col-lg-12 col-md-6 d-flex">\n                <div class="card flex-fill">\n                  <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-2">\n                      <div class="d-flex align-items-center">\n                        <span class="system-app-icon">\n                          <img src="assets/img/icons/app-icon-10.svg" alt="Img">\n                        </span>\n                        <div class="security-title">\n                          <h5 class="fs-16 fw-medium">Google Map</h5>\n                        </div>\n                      </div>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user4" class="check" checked>\n                        <label for="user4" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                    <p class="fs-14 mb-3">Provides detailed information about geographical regions and sites worldwide.</p>\n                    <div>\n                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#configure-google-map"><i class="ti ti-tool me-1"></i>View Integration</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n</div>\n<!-- Google Captcha -->\n<div class="modal fade" id="google-captcha">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header">\n            <div class="page-title">\n              <h4 class="fs-18 fw-bold">Configure Google Captcha</h4>\n            </div>\n            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <form >\n            <div class="modal-body">\n              <div class="row">\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label">Google Rechaptcha Site Key <span> *</span></label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="mb-0">\n                    <label class="form-label">Google Rechaptcha Secret Key <span> *</span></label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Google Captcha -->\n\n<!-- Google Analytics -->\n<div class="modal fade" id="google-analytics">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header">\n            <div class="page-title">\n              <h4 class="fs-18 fw-bold">Configure Google Analytics</h4>\n            </div>\n            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <form >\n            <div class="modal-body">\n              <div class="row">\n                <div class="col-lg-12">\n                  <div class="mb-0">\n                    <label class="form-label">Google Analytics <span> *</span></label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Google Analytics -->\n\n<!-- Google Adsense -->\n<div class="modal fade" id="google-adsense">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header">\n            <div class="page-title">\n              <h4 class="fs-18 fw-bold">Configure Google Adsense Code</h4>\n            </div>\n            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <form >\n            <div class="modal-body">\n              <div class="row">\n                <div class="col-lg-12">\n                  <div class="mb-0">\n                    <label class="form-label">Google Adsense Code <span> *</span></label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Google Adsense -->\n\n<!-- Google Map -->\n<div class="modal fade" id="configure-google-map">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header">\n            <div class="page-title">\n              <h4 class="fs-18 fw-bold">Configure Google Map ID</h4>\n            </div>\n            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <form >\n            <div class="modal-body">\n              <div class="row">\n                <div class="col-lg-12">\n                  <div class="mb-0">\n                    <label class="form-label">Enter Map ID <span> *</span></label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Google Map -->\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemSettingsComponent, { className: "SystemSettingsComponent", filePath: "src/app/features/pages/settings/website-settings/system-settings/system-settings.component.ts", lineNumber: 11 });
})();
export {
  SystemSettingsComponent
};
//# sourceMappingURL=chunk-P7BY5N6L.js.map
