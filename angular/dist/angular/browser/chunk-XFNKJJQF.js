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

// src/app/features/pages/settings/website-settings/company-settings/company-settings.component.ts
var CompanySettingsComponent = class _CompanySettingsComponent {
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
  static \u0275fac = function CompanySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanySettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanySettingsComponent, selectors: [["app-company-settings"]], decls: 236, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "border-bottom", "mb-3"], [1, "card-title-head"], [1, "fs-16", "fw-bold", "mb-2"], [1, "fs-16", "me-2"], [1, "ti", "ti-building"], [1, "col-xl-4", "col-lg-6", "col-md-4"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "col-md-4"], [1, "border-bottom", "mb-3", "pb-3"], [1, "ti", "ti-photo"], [1, "row", "align-items-center", "gy-3"], [1, "col-xl-9"], [1, "row", "gy-3", "align-items-center"], [1, "col-lg-4"], [1, "logo-info"], [1, "fw-medium"], [1, "col-lg-8"], [1, "profile-pic-upload", "mb-0", "justify-content-lg-end"], [1, "new-employee-field"], [1, "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "ti", "ti-upload", "me-1"], [1, "mt-1"], [1, "col-xl-3"], [1, "new-logo", "ms-xl-auto"], ["href", "javascript:void(0);"], ["src", "assets/img/logo-small.png", "alt", "Logo"], [1, "ti", "ti-x"], ["src", "assets/img/products/company-logo.svg", "alt", "Logo"], ["href", "javascript:void(0);", 1, "bg-secondary"], ["src", "assets/img/products/white-logo.svg", "alt", "Logo"], [1, "company-address"], [1, "ti", "ti-map-pin"], [1, "col-md-12"], [1, "col-md-6"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "text-end", "settings-bottom-btn", "mt-0"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function CompanySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Company Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "form")(10, "div", 7)(11, "div", 8)(12, "h6", 9)(13, "span", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Company Information ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 0)(17, "div", 12)(18, "div", 13)(19, "label", 14);
      \u0275\u0275text(20, " Company Name ");
      \u0275\u0275elementStart(21, "span", 15);
      \u0275\u0275text(22, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "label", 14);
      \u0275\u0275text(27, " Company Email Address ");
      \u0275\u0275elementStart(28, "span", 15);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 13)(33, "label", 14);
      \u0275\u0275text(34, " Phone Number ");
      \u0275\u0275elementStart(35, "span", 15);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 18)(39, "div", 13)(40, "label", 14);
      \u0275\u0275text(41, " Fax ");
      \u0275\u0275elementStart(42, "span", 15);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 18)(46, "div", 13)(47, "label", 14);
      \u0275\u0275text(48, " Website ");
      \u0275\u0275elementStart(49, "span", 15);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "input", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 19)(53, "div", 8)(54, "h6", 9)(55, "span", 10);
      \u0275\u0275element(56, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " Company Images ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 21)(59, "div", 22)(60, "div", 23)(61, "div", 24)(62, "div", 25)(63, "h6", 26);
      \u0275\u0275text(64, "Company Icon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p");
      \u0275\u0275text(66, "Upload Icon of your Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 27)(68, "div", 28)(69, "div", 29)(70, "div", 30)(71, "div", 31);
      \u0275\u0275element(72, "input", 32);
      \u0275\u0275elementStart(73, "div", 33)(74, "h4");
      \u0275\u0275element(75, "i", 34);
      \u0275\u0275text(76, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "span", 35);
      \u0275\u0275text(78, "Recommended size is 450px x 450px. Max size 5mb.");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(79, "div", 36)(80, "div", 37)(81, "a", 38);
      \u0275\u0275element(82, "img", 39);
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275element(84, "i", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(85, "div", 22)(86, "div", 23)(87, "div", 24)(88, "div", 25)(89, "h6", 26);
      \u0275\u0275text(90, "Favicon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92, "Upload Favicon of your Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "div", 27)(94, "div", 28)(95, "div", 29)(96, "div", 30)(97, "div", 31);
      \u0275\u0275element(98, "input", 32);
      \u0275\u0275elementStart(99, "div", 33)(100, "h4");
      \u0275\u0275element(101, "i", 34);
      \u0275\u0275text(102, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "span", 35);
      \u0275\u0275text(104, "Recommended size is 450px x 450px. Max size 5mb.");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(105, "div", 36)(106, "div", 37)(107, "a", 38);
      \u0275\u0275element(108, "img", 39);
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275element(110, "i", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(111, "div", 22)(112, "div", 23)(113, "div", 24)(114, "div", 25)(115, "h6", 26);
      \u0275\u0275text(116, "Company Logo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p");
      \u0275\u0275text(118, "Upload Logo of your Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 27)(120, "div", 28)(121, "div", 29)(122, "div", 30)(123, "div", 31);
      \u0275\u0275element(124, "input", 32);
      \u0275\u0275elementStart(125, "div", 33)(126, "h4");
      \u0275\u0275element(127, "i", 34);
      \u0275\u0275text(128, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "span", 35);
      \u0275\u0275text(130, "Recommended size is 450px x 450px. Max size 5mb.");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(131, "div", 36)(132, "div", 37)(133, "a", 38);
      \u0275\u0275element(134, "img", 41);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275element(136, "i", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(137, "div", 22)(138, "div", 23)(139, "div", 24)(140, "div", 25)(141, "h6", 26);
      \u0275\u0275text(142, "Company Dark Logo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p");
      \u0275\u0275text(144, "Upload Logo of your Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "div", 27)(146, "div", 28)(147, "div", 29)(148, "div", 30)(149, "div", 31);
      \u0275\u0275element(150, "input", 32);
      \u0275\u0275elementStart(151, "div", 33)(152, "h4");
      \u0275\u0275element(153, "i", 34);
      \u0275\u0275text(154, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "span", 35);
      \u0275\u0275text(156, "Recommended size is 450px x 450px. Max size 5mb.");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(157, "div", 36)(158, "div", 37)(159, "a", 42);
      \u0275\u0275element(160, "img", 43);
      \u0275\u0275elementStart(161, "span");
      \u0275\u0275element(162, "i", 40);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(163, "div", 44)(164, "div", 8)(165, "h6", 9)(166, "span", 10);
      \u0275\u0275element(167, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275text(168, " Address Information ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 0)(170, "div", 46)(171, "div", 13)(172, "label", 14);
      \u0275\u0275text(173, " Address ");
      \u0275\u0275elementStart(174, "span", 15);
      \u0275\u0275text(175, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(176, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 47)(178, "div", 13)(179, "label", 14);
      \u0275\u0275text(180, " Country ");
      \u0275\u0275elementStart(181, "span", 15);
      \u0275\u0275text(182, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "mat-select", 48)(184, "mat-option", 49);
      \u0275\u0275text(185, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "mat-option", 49);
      \u0275\u0275text(187, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "mat-option", 49);
      \u0275\u0275text(189, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "mat-option", 49);
      \u0275\u0275text(191, "French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "mat-option", 49);
      \u0275\u0275text(193, "Australia");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(194, "div", 47)(195, "div", 13)(196, "label", 14);
      \u0275\u0275text(197, " State ");
      \u0275\u0275elementStart(198, "span", 15);
      \u0275\u0275text(199, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "mat-select", 48)(201, "mat-option", 49);
      \u0275\u0275text(202, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "mat-option", 49);
      \u0275\u0275text(204, "Alaska");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "mat-option", 49);
      \u0275\u0275text(206, "Mexico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "mat-option", 49);
      \u0275\u0275text(208, "Tasmania");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(209, "div", 47)(210, "div", 13)(211, "label", 14);
      \u0275\u0275text(212, " City ");
      \u0275\u0275elementStart(213, "span", 15);
      \u0275\u0275text(214, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "mat-select", 48)(216, "mat-option", 49);
      \u0275\u0275text(217, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "mat-option", 49);
      \u0275\u0275text(219, "Anchorage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "mat-option", 49);
      \u0275\u0275text(221, "Tijuana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "mat-option", 49);
      \u0275\u0275text(223, "Hobart");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(224, "div", 47)(225, "div", 13)(226, "label", 14);
      \u0275\u0275text(227, " Postal Code ");
      \u0275\u0275elementStart(228, "span", 15);
      \u0275\u0275text(229, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(230, "input", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(231, "div", 50)(232, "button", 51);
      \u0275\u0275text(233, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "button", 52);
      \u0275\u0275text(235, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanySettingsComponent, [{
    type: Component,
    args: [{ selector: "app-company-settings", imports: [SettingsSidebarComponent, MatSelectModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4 class="fs-18 fw-bold">Company Settings</h4>\n        </div>\n        <div class="card-body">\n          <form>\n            <div class="border-bottom mb-3">\n              <div class="card-title-head">\n                <h6 class="fs-16 fw-bold mb-2">\n                  <span class="fs-16 me-2"><i class="ti ti-building"></i></span> \n                  Company Information\n                </h6>\n              </div>\n              <div class="row">\n                <div class="col-xl-4 col-lg-6 col-md-4">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Company Name  <span class="text-danger">*</span>\n                    </label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-xl-4 col-lg-6 col-md-4">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Company Email Address  <span class="text-danger">*</span>\n                    </label>\n                    <input type="email" class="form-control">\n                  </div>\n                </div>\n                <div class="col-md-4">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Phone Number <span class="text-danger">*</span>\n                    </label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-md-4">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Fax <span class="text-danger">*</span>\n                    </label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-md-4">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Website <span class="text-danger">*</span>\n                    </label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="border-bottom mb-3 pb-3">\n              <div class="card-title-head">\n                <h6 class="fs-16 fw-bold mb-2">\n                  <span class="fs-16 me-2"><i class="ti ti-photo"></i></span> \n                  Company Images\n                </h6>\n              </div>\n              <div class="row align-items-center gy-3">\n                <div class="col-xl-9">\n                  <div class="row gy-3 align-items-center">\n                    <div class="col-lg-4">\n                      <div class="logo-info">\n                        <h6 class="fw-medium">Company Icon</h6>\n                        <p>Upload Icon of your Company</p>\n                      </div>\n                    </div>\n                    <div class="col-lg-8">\n                      <div class="profile-pic-upload mb-0 justify-content-lg-end">\n                        <div class="new-employee-field">\n                          <div class="mb-0">\n                            <div class="image-upload mb-0">\n                              <input type="file">\n                              <div class="image-uploads">\n                                <h4><i class="ti ti-upload me-1"></i>Upload Image</h4>\n                              </div>\n                            </div>\n                            <span class="mt-1">Recommended size is 450px x 450px. Max size 5mb.</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-xl-3">\n                  <div class="new-logo ms-xl-auto">\n                    <a href="javascript:void(0);">\n                      <img src="assets/img/logo-small.png" alt="Logo">\n                      <span><i class="ti ti-x"></i></span>\n                    </a>\n                  </div>\n                </div>\n                <div class="col-xl-9">\n                  <div class="row gy-3 align-items-center">\n                    <div class="col-lg-4">\n                      <div class="logo-info">\n                        <h6 class="fw-medium">Favicon</h6>\n                        <p>Upload Favicon of your Company</p>\n                      </div>\n                    </div>\n                    <div class="col-lg-8">\n                      <div class="profile-pic-upload mb-0 justify-content-lg-end">\n                        <div class="new-employee-field">\n                          <div class="mb-0">\n                            <div class="image-upload mb-0">\n                              <input type="file">\n                              <div class="image-uploads">\n                                <h4><i class="ti ti-upload me-1"></i>Upload Image</h4>\n                              </div>\n                            </div>\n                            <span class="mt-1">Recommended size is 450px x 450px. Max size 5mb.</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-xl-3">\n                  <div class="new-logo ms-xl-auto">\n                    <a href="javascript:void(0);">\n                      <img src="assets/img/logo-small.png" alt="Logo">\n                      <span><i class="ti ti-x"></i></span>\n                    </a>\n                  </div>\n                </div>\n                <div class="col-xl-9">\n                  <div class="row gy-3 align-items-center">\n                    <div class="col-lg-4">\n                      <div class="logo-info">\n                        <h6 class="fw-medium">Company Logo</h6>\n                        <p>Upload Logo of your Company</p>\n                      </div>\n                    </div>\n                    <div class="col-lg-8">\n                      <div class="profile-pic-upload mb-0 justify-content-lg-end">\n                        <div class="new-employee-field">\n                          <div class="mb-0">\n                            <div class="image-upload mb-0">\n                              <input type="file">\n                              <div class="image-uploads">\n                                <h4><i class="ti ti-upload me-1"></i>Upload Image</h4>\n                              </div>\n                            </div>\n                            <span class="mt-1">Recommended size is 450px x 450px. Max size 5mb.</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  \n                </div>\n                <div class="col-xl-3">\n                  <div class="new-logo ms-xl-auto">\n                    <a href="javascript:void(0);">\n                      <img src="assets/img/products/company-logo.svg" alt="Logo">\n                      <span><i class="ti ti-x"></i></span>\n                    </a>\n                  </div>\n                </div>\n                <div class="col-xl-9">\n                  <div class="row gy-3 align-items-center">\n                    <div class="col-lg-4">\n                      <div class="logo-info">\n                        <h6 class="fw-medium">Company Dark Logo</h6>\n                        <p>Upload Logo of your Company</p>\n                      </div>\n                    </div>\n                    <div class="col-lg-8">\n                      <div class="profile-pic-upload mb-0 justify-content-lg-end">\n                        <div class="new-employee-field">\n                          <div class="mb-0">\n                            <div class="image-upload mb-0">\n                              <input type="file">\n                              <div class="image-uploads">\n                                <h4><i class="ti ti-upload me-1"></i>Upload Image</h4>\n                              </div>\n                            </div>\n                            <span class="mt-1">Recommended size is 450px x 450px. Max size 5mb.</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  \n                </div>\n                <div class="col-xl-3">\n                  <div class="new-logo ms-xl-auto">\n                    <a href="javascript:void(0);" class="bg-secondary">\n                      <img src="assets/img/products/white-logo.svg" alt="Logo">\n                      <span><i class="ti ti-x"></i></span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="company-address">\n              <div class="card-title-head">\n                <h6 class="fs-16 fw-bold mb-2">\n                  <span class="fs-16 me-2"><i class="ti ti-map-pin"></i></span> \n                  Address Information\n                </h6>\n              </div>\n              <div class="row">\n                <div class="col-md-12">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Address <span class="text-danger">*</span>\n                    </label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Country <span class="text-danger">*</span>\n                    </label>\n                    <mat-select class="custom-mat-select select" placeholder="Select">\n                      <mat-option value="1">Select</mat-option>\n                      <mat-option value="1">USA</mat-option>\n                      <mat-option value="1">India</mat-option>\n                      <mat-option value="1">French</mat-option>\n                      <mat-option value="1">Australia</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      State <span class="text-danger">*</span>\n                    </label>\n                    <mat-select class="custom-mat-select select" placeholder="Select">\n                      <mat-option value="1">Select</mat-option>\n                      <mat-option value="1">Alaska</mat-option>\n                      <mat-option value="1">Mexico</mat-option>\n                      <mat-option value="1">Tasmania</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      City <span class="text-danger">*</span>\n                    </label>\n                    <mat-select class="custom-mat-select select" placeholder="Select">\n                      <mat-option value="1">Select</mat-option>\n                      <mat-option value="1">Anchorage</mat-option>\n                      <mat-option value="1">Tijuana</mat-option>\n                      <mat-option value="1">Hobart</mat-option>\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">\n                      Postal Code <span class="text-danger">*</span>\n                    </label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="text-end settings-bottom-btn mt-0">\n              <button type="button" class="btn btn-secondary me-2">Cancel</button>\n              <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanySettingsComponent, { className: "CompanySettingsComponent", filePath: "src/app/features/pages/settings/website-settings/company-settings/company-settings.component.ts", lineNumber: 13 });
})();
export {
  CompanySettingsComponent
};
//# sourceMappingURL=chunk-XFNKJJQF.js.map
