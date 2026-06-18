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
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  Router
} from "./chunk-OWEB3HQZ.js";
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

// src/app/features/pages/settings/general-settings/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  sidebar;
  router;
  routes = routes;
  constructor(sidebar, router) {
    this.sidebar = sidebar;
    this.router = router;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  navigation() {
    this.router.navigate([routes.generalSettings]);
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 137, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "card-title-head"], [1, "fs-16", "fw-bold", "mb-3"], [1, "fs-16", "me-2"], [1, "ti", "ti-user"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "ti", "ti-circle-plus", "mb-1", "fs-16"], [1, "new-employee-field"], [1, "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "fs-13", "fw-medium", "mt-2"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "ti", "ti-map-pin"], [1, "col-md-12"], [1, "col-md-6"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "text-end", "settings-bottom-btn", "mt-0"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "form")(10, "div", 7)(11, "h6", 8)(12, "span", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Basic Information ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "span");
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275text(19, " Add Image ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "div", 16);
      \u0275\u0275element(23, "input", 17);
      \u0275\u0275elementStart(24, "div", 18)(25, "h4");
      \u0275\u0275text(26, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "span", 19);
      \u0275\u0275text(28, " Upload an image below 2 MB, Accepted File format JPG, PNG ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 20)(30, "div", 21)(31, "div", 22)(32, "label", 23);
      \u0275\u0275text(33, " First Name ");
      \u0275\u0275elementStart(34, "span", 24);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 21)(38, "div", 22)(39, "label", 23);
      \u0275\u0275text(40, " Last Name ");
      \u0275\u0275elementStart(41, "span", 24);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 21)(45, "div", 22)(46, "label", 23);
      \u0275\u0275text(47, " User Name ");
      \u0275\u0275elementStart(48, "span", 24);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 21)(52, "div", 22)(53, "label", 23);
      \u0275\u0275text(54, " Phone Number ");
      \u0275\u0275elementStart(55, "span", 24);
      \u0275\u0275text(56, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 21)(59, "div", 22)(60, "label", 23);
      \u0275\u0275text(61, " Email ");
      \u0275\u0275elementStart(62, "span", 24);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(64, "input", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 7)(66, "h6", 8)(67, "span", 9);
      \u0275\u0275element(68, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " Address Information ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 0)(71, "div", 28)(72, "div", 22)(73, "label", 23);
      \u0275\u0275text(74, " Address ");
      \u0275\u0275elementStart(75, "span", 24);
      \u0275\u0275text(76, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(77, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 29)(79, "div", 22)(80, "label", 23);
      \u0275\u0275text(81, " Country ");
      \u0275\u0275elementStart(82, "span", 24);
      \u0275\u0275text(83, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "mat-select", 30)(85, "mat-option", 31);
      \u0275\u0275text(86, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "mat-option", 31);
      \u0275\u0275text(88, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "mat-option", 31);
      \u0275\u0275text(90, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 31);
      \u0275\u0275text(92, "French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 31);
      \u0275\u0275text(94, "Australia");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "div", 29)(96, "div", 22)(97, "label", 23);
      \u0275\u0275text(98, " State ");
      \u0275\u0275elementStart(99, "span", 24);
      \u0275\u0275text(100, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "mat-select", 30)(102, "mat-option", 31);
      \u0275\u0275text(103, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "mat-option", 31);
      \u0275\u0275text(105, "Alaska");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "mat-option", 31);
      \u0275\u0275text(107, "Mexico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "mat-option", 31);
      \u0275\u0275text(109, "Tasmania");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(110, "div", 29)(111, "div", 22)(112, "label", 23);
      \u0275\u0275text(113, " City ");
      \u0275\u0275elementStart(114, "span", 24);
      \u0275\u0275text(115, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "mat-select", 30)(117, "mat-option", 31);
      \u0275\u0275text(118, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "mat-option", 31);
      \u0275\u0275text(120, "Anchorage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "mat-option", 31);
      \u0275\u0275text(122, "Tijuana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "mat-option", 31);
      \u0275\u0275text(124, "Hobart");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 29)(126, "div", 22)(127, "label", 23);
      \u0275\u0275text(128, " Postal Code ");
      \u0275\u0275elementStart(129, "span", 24);
      \u0275\u0275text(130, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(131, "input", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 32)(133, "button", 33);
      \u0275\u0275text(134, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "button", 34);
      \u0275\u0275text(136, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [SettingsSidebarComponent, MatSelectModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4 class="fs-18 fw-bold">Profile</h4>\n        </div>\n        <div class="card-body">\n          <form>\n            <div class="card-title-head">\n              <h6 class="fs-16 fw-bold mb-3">\n                <span class="fs-16 me-2"><i class="ti ti-user"></i></span> \n                Basic Information\n              </h6>\n            </div>\n            <div class="profile-pic-upload">\n              <div class="profile-pic">\n                <span>\n                  <i class="ti ti-circle-plus mb-1 fs-16"></i> Add Image\n                </span>\n              </div>\n              <div class="new-employee-field">\n                <div class="mb-0">\n                  <div class="image-upload mb-0">\n                    <input type="file">\n                    <div class="image-uploads">\n                      <h4>Upload Image</h4>\n                    </div>\n                  </div>\n                  <span class="fs-13 fw-medium mt-2">\n                    Upload an image below 2 MB, Accepted File format JPG, PNG\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class="row mb-3">\n              <div class="col-md-4">\n                <div class="mb-3">\n                  <label class="form-label">\n                    First Name <span class="text-danger">*</span>\n                  </label>\n                  <input type="text" class="form-control">\n                </div>\n              </div>\n              <div class="col-md-4">\n                <div class="mb-3">\n                  <label class="form-label">\n                    Last Name <span class="text-danger">*</span>\n                  </label>\n                  <input type="text" class="form-control">\n                </div>\n              </div>\n              <div class="col-md-4">\n                <div class="mb-3">\n                  <label class="form-label">\n                    User Name <span class="text-danger">*</span>\n                  </label>\n                  <input type="text" class="form-control">\n                </div>\n              </div>\n              <div class="col-md-4">\n                <div class="mb-3">\n                  <label class="form-label">\n                    Phone Number <span class="text-danger">*</span>\n                  </label>\n                  <input type="text" class="form-control">\n                </div>\n              </div>\n              <div class="col-md-4">\n                <div class="mb-3">\n                  <label class="form-label">\n                    Email <span class="text-danger">*</span>\n                  </label>\n                  <input type="email" class="form-control">\n                </div>\n              </div>\n            </div>\n            <div class="card-title-head">\n              <h6 class="fs-16 fw-bold mb-3">\n                <span class="fs-16 me-2"><i class="ti ti-map-pin"></i></span> \n                Address Information\n              </h6>\n            </div>\n            <div class="row">\n              <div class="col-md-12">\n                <div class="mb-3">\n                  <label class="form-label">\n                    Address <span class="text-danger">*</span>\n                  </label>\n                  <input type="email" class="form-control">\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="mb-3">\n                  <label class="form-label">\n                    Country <span class="text-danger">*</span>\n                  </label>\n                  <mat-select class="custom-mat-select select" placeholder="Select">\n                    <mat-option value="1">Select</mat-option>\n                    <mat-option value="1">USA</mat-option>\n                    <mat-option value="1">India</mat-option>\n                    <mat-option value="1">French</mat-option>\n                    <mat-option value="1">Australia</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="mb-3">\n                  <label class="form-label">\n                    State <span class="text-danger">*</span>\n                  </label>\n                  <mat-select class="custom-mat-select select" placeholder="Select">\n                    <mat-option value="1">Select</mat-option>\n                    <mat-option value="1">Alaska</mat-option>\n                    <mat-option value="1">Mexico</mat-option>\n                    <mat-option value="1">Tasmania</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="mb-3">\n                  <label class="form-label">\n                    City <span class="text-danger">*</span>\n                  </label>\n                  <mat-select class="custom-mat-select select" placeholder="Select">\n                    <mat-option value="1">Select</mat-option>\n                    <mat-option value="1">Anchorage</mat-option>\n                    <mat-option value="1">Tijuana</mat-option>\n                    <mat-option value="1">Hobart</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="mb-3">\n                  <label class="form-label">\n                    Postal Code <span class="text-danger">*</span>\n                  </label>\n                  <input type="text" class="form-control">\n                </div>\n              </div>\n            </div>\n            <div class="text-end settings-bottom-btn mt-0">\n              <button type="button" class="btn btn-secondary me-2">Cancel</button>\n              <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>' }]
  }], () => [{ type: SidebarService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/pages/settings/general-settings/profile/profile.component.ts", lineNumber: 13 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-VSV2IBS3.js.map
