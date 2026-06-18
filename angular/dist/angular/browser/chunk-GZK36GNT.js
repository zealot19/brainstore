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

// src/app/features/pages/settings/app-settings/invoice-template/invoice-template.component.ts
var InvoiceTemplateComponent = class _InvoiceTemplateComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function InvoiceTemplateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceTemplateComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceTemplateComponent, selectors: [["app-invoice-template"]], decls: 168, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mb-3"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "low-stock-tab", "d-flex", "me-2", "mb-0"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-profile-tab2", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile2", "type", "button", "role", "tab", "aria-controls", "pills-profile2", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row", "gx-3"], [1, "col-xl-3", "col-lg-4", "col-mg-6"], [1, "card", "bg-light", "invoice-card"], [1, "card-body", "p-2"], [1, "d-block", "mb-2"], ["src", "assets/img/invoice/invoice-01.svg", "alt", "Img", 1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "bg-secondary-transparent"], [1, "ti", "ti-star"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["id", "pills-profile2", "role", "tabpanel", "aria-labelledby", "pills-profile-tab2", 1, "tab-pane", "fade"], ["src", "assets/img/invoice/invoice-02.svg", "alt", "Img", 1, "w-100"]], template: function InvoiceTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "form")(6, "div", 4)(7, "h4");
      \u0275\u0275text(8, "Invoice Templates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "ul", 7)(12, "li", 8)(13, "button", 9);
      \u0275\u0275text(14, "Invoices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li", 8)(16, "button", 10);
      \u0275\u0275text(17, "Purchases");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li", 8)(19, "button", 11);
      \u0275\u0275text(20, "Receipts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "span", 18);
      \u0275\u0275element(28, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 20)(30, "p", 21);
      \u0275\u0275text(31, "General Invoice 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 22);
      \u0275\u0275element(33, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 15)(35, "div", 16)(36, "div", 17)(37, "span", 18);
      \u0275\u0275element(38, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 20)(40, "p", 21);
      \u0275\u0275text(41, "General Invoice 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 22);
      \u0275\u0275element(43, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 15)(45, "div", 16)(46, "div", 17)(47, "span", 18);
      \u0275\u0275element(48, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 20)(50, "p", 21);
      \u0275\u0275text(51, "General Invoice 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 22);
      \u0275\u0275element(53, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 15)(55, "div", 16)(56, "div", 17)(57, "span", 18);
      \u0275\u0275element(58, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 20)(60, "p", 21);
      \u0275\u0275text(61, "General Invoice 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 22);
      \u0275\u0275element(63, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(64, "div", 15)(65, "div", 16)(66, "div", 17)(67, "span", 18);
      \u0275\u0275element(68, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 20)(70, "p", 21);
      \u0275\u0275text(71, "General Invoice 5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "a", 22);
      \u0275\u0275element(73, "i", 23);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(74, "div", 24)(75, "div", 14)(76, "div", 15)(77, "div", 16)(78, "div", 17)(79, "span", 18);
      \u0275\u0275element(80, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 20)(82, "p", 21);
      \u0275\u0275text(83, "General Invoice 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "a", 22);
      \u0275\u0275element(85, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "div", 15)(87, "div", 16)(88, "div", 17)(89, "span", 18);
      \u0275\u0275element(90, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 20)(92, "p", 21);
      \u0275\u0275text(93, "General Invoice 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "a", 22);
      \u0275\u0275element(95, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(96, "div", 15)(97, "div", 16)(98, "div", 17)(99, "span", 18);
      \u0275\u0275element(100, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 20)(102, "p", 21);
      \u0275\u0275text(103, "General Invoice 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "a", 22);
      \u0275\u0275element(105, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(106, "div", 15)(107, "div", 16)(108, "div", 17)(109, "span", 18);
      \u0275\u0275element(110, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 20)(112, "p", 21);
      \u0275\u0275text(113, "General Invoice 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 22);
      \u0275\u0275element(115, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(116, "div", 15)(117, "div", 16)(118, "div", 17)(119, "span", 18);
      \u0275\u0275element(120, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 20)(122, "p", 21);
      \u0275\u0275text(123, "General Invoice 5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "a", 22);
      \u0275\u0275element(125, "i", 23);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(126, "div", 25)(127, "div", 14)(128, "div", 15)(129, "div", 16)(130, "div", 17)(131, "span", 18);
      \u0275\u0275element(132, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 20)(134, "p", 21);
      \u0275\u0275text(135, "Receipt Invoice 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "a", 22);
      \u0275\u0275element(137, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(138, "div", 15)(139, "div", 16)(140, "div", 17)(141, "span", 18);
      \u0275\u0275element(142, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 20)(144, "p", 21);
      \u0275\u0275text(145, "Receipt Invoice 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "a", 22);
      \u0275\u0275element(147, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(148, "div", 15)(149, "div", 16)(150, "div", 17)(151, "span", 18);
      \u0275\u0275element(152, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 20)(154, "p", 21);
      \u0275\u0275text(155, "Receipt Invoice 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "a", 22);
      \u0275\u0275element(157, "i", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(158, "div", 15)(159, "div", 16)(160, "div", 17)(161, "span", 18);
      \u0275\u0275element(162, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 20)(164, "p", 21);
      \u0275\u0275text(165, "Receipt Invoice 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "a", 22);
      \u0275\u0275element(167, "i", 23);
      \u0275\u0275elementEnd()()()()()()()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceTemplateComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-template", imports: [SettingsSidebarComponent], template: '\n  <div class="row">\n    <div class="col-xl-12">\n      <div class="settings-wrapper d-flex">\n        <app-settings-sidebar></app-settings-sidebar>\n        <div class="card flex-fill mb-0">\n            <form>\n                <div class="card-header">\n                    <h4>Invoice Templates</h4>\n                </div>\n                <div class="card-body pb-0">\n                    <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">\n                        <ul class="nav nav-pills low-stock-tab d-flex me-2 mb-0" id="pills-tab" role="tablist">\n                            <li class="nav-item" role="presentation">\n                              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Invoices</button>\n                            </li>\n                            <li class="nav-item" role="presentation">\n                              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Purchases</button>\n                            </li>							\n                            <li class="nav-item" role="presentation">\n                              <button class="nav-link" id="pills-profile-tab2" data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false">Receipts</button>\n                            </li>							\n                        </ul>	\n                    </div>\n                    <div class="tab-content" id="pills-tabContent">\n                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">\n                            <div class="row gx-3">\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 1</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 2</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 3</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 4</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 5</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">\n                            <div class="row gx-3">\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 1</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 2</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 3</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 4</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-01.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">General Invoice 5</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">\n                            <div class="row gx-3">\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-02.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">Receipt Invoice 1</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-02.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">Receipt Invoice 2</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-02.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">Receipt Invoice 3</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="col-xl-3 col-lg-4 col-mg-6">\n                                    <div class="card bg-light invoice-card">\n                                        <div class="card-body p-2">\n                                            <span class="d-block mb-2"><img src="assets/img/invoice/invoice-02.svg" class="w-100" alt="Img"></span>\n                                            <div class="d-flex align-items-center justify-content-between">\n                                                <p class="mb-0">Receipt Invoice 4</p>\n                                                <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle bg-secondary-transparent"><i class="ti ti-star"></i></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n      </div>\n  \n    </div>\n  </div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceTemplateComponent, { className: "InvoiceTemplateComponent", filePath: "src/app/features/pages/settings/app-settings/invoice-template/invoice-template.component.ts", lineNumber: 11 });
})();
export {
  InvoiceTemplateComponent
};
//# sourceMappingURL=chunk-GZK36GNT.js.map
