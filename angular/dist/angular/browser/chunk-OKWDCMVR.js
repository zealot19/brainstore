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
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/website-settings/appearance/appearance.component.ts
var AppearanceComponent = class _AppearanceComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isActive = "light";
  isActive1 = "default";
  setActive(theme) {
    this.isActive = theme;
  }
  setActive1(theme) {
    this.isActive1 = theme;
  }
  selectedValue1 = "";
  selectedValue2 = "";
  selectedList1 = [
    { value: "Small - 85px" },
    { value: "Large - 250px" }
  ];
  selectedList2 = [
    { value: "Nunito" },
    { value: "Poppins" }
  ];
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function AppearanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppearanceComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppearanceComponent, selectors: [["app-appearance"]], decls: 97, vars: 14, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "appearance-settings"], [1, "col-xl-4", "col-lg-12", "col-md-4"], [1, "setting-info", "mb-4"], [1, "col-xl-8", "col-lg-12", "col-md-8"], [1, "theme-type-images", "d-flex", "align-items-center", "mb-4"], [1, "theme-image", 3, "click"], [1, "theme-image-set"], ["src", "assets/img/theme/theme-img-08.jpg", "alt", "Img"], ["src", "assets/img/theme/theme-img-09.jpg", "alt", "Img"], ["src", "assets/img/theme/theme-img-10.jpg", "alt", "Img"], [1, "theme-colors", "mb-4"], [1, "themecolorset", "defaultcolor", 3, "click"], [1, "themecolorset", "theme-violet", 3, "click"], [1, "themecolorset", "theme-blue", 3, "click"], [1, "themecolorset", "theme-brown", 3, "click"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "localization-select"], ["placeholder", "Small - 85px", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "Nunito", 1, "custom-mat-select", "select"], [1, "text-end", "settings-bottom-btn", "mt-0"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AppearanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Appearance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "form")(10, "div", 7)(11, "div", 0)(12, "div", 8)(13, "div", 9)(14, "h6");
      \u0275\u0275text(15, "Select Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "Choose accent colour of website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "div", 12);
      \u0275\u0275listener("click", function AppearanceComponent_Template_div_click_20_listener() {
        return ctx.setActive("light");
      });
      \u0275\u0275elementStart(21, "div", 13);
      \u0275\u0275element(22, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Light");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 12);
      \u0275\u0275listener("click", function AppearanceComponent_Template_div_click_25_listener() {
        return ctx.setActive("Dark");
      });
      \u0275\u0275elementStart(26, "div", 13);
      \u0275\u0275element(27, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Dark");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 12);
      \u0275\u0275listener("click", function AppearanceComponent_Template_div_click_30_listener() {
        return ctx.setActive("Automatic");
      });
      \u0275\u0275elementStart(31, "div", 13);
      \u0275\u0275element(32, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Automatic");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 0)(36, "div", 8)(37, "div", 9)(38, "h6");
      \u0275\u0275text(39, "Accent Color");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41, "Choose accent colour of website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 8)(43, "div", 17)(44, "ul")(45, "li")(46, "span", 18);
      \u0275\u0275listener("click", function AppearanceComponent_Template_span_click_46_listener() {
        return ctx.setActive1("default");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "span", 19);
      \u0275\u0275listener("click", function AppearanceComponent_Template_span_click_48_listener() {
        return ctx.setActive1("violet");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "span", 20);
      \u0275\u0275listener("click", function AppearanceComponent_Template_span_click_50_listener() {
        return ctx.setActive1("blue");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "span", 21);
      \u0275\u0275listener("click", function AppearanceComponent_Template_span_click_52_listener() {
        return ctx.setActive1("brown");
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(53, "div", 0)(54, "div", 8)(55, "div", 9)(56, "h6");
      \u0275\u0275text(57, "Expand Sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "Choose accent colour of website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 8)(61, "div", 22);
      \u0275\u0275element(62, "input", 23)(63, "label", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 0)(65, "div", 8)(66, "div", 9)(67, "h6");
      \u0275\u0275text(68, "Sidebar Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70, "Select size of the sidebar to display");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 8)(72, "div", 25)(73, "mat-select", 26)(74, "mat-option", 27);
      \u0275\u0275text(75, "Small - 85px");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-option", 27);
      \u0275\u0275text(77, "Large - 250px");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(78, "div", 0)(79, "div", 8)(80, "div", 9)(81, "h6");
      \u0275\u0275text(82, "Font Family");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p");
      \u0275\u0275text(84, "Select font family of website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "div", 8)(86, "div", 25)(87, "mat-select", 28)(88, "mat-option", 27);
      \u0275\u0275text(89, "Nunito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "mat-option", 27);
      \u0275\u0275text(91, "Poppins");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(92, "div", 29)(93, "button", 30);
      \u0275\u0275text(94, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "button", 31);
      \u0275\u0275text(96, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275classProp("active", ctx.isActive === "light");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isActive === "Dark");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isActive === "Automatic");
      \u0275\u0275advance(16);
      \u0275\u0275classProp("active", ctx.isActive1 === "default");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isActive1 === "violet");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isActive1 === "blue");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isActive1 === "brown");
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppearanceComponent, [{
    type: Component,
    args: [{ selector: "app-appearance", imports: [SettingsSidebarComponent, MatSelectModule], template: `<div class="row">
  <div class="col-xl-12">
    <div class="settings-wrapper d-flex">
      <app-settings-sidebar></app-settings-sidebar>
      <div class="card flex-fill mb-0">
        <div class="card-header">
          <h4 class="fs-18 fw-bold">Appearance</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="appearance-settings">
              <div class="row">
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="setting-info mb-4">
                    <h6>Select Theme</h6>
                    <p>Choose accent colour of website</p>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-12 col-md-8">
                  <div class="theme-type-images d-flex align-items-center mb-4">
                    <div class="theme-image" [class.active]="isActive === 'light'" (click)="setActive('light')">
                      <div class="theme-image-set">
                        <img src="assets/img/theme/theme-img-08.jpg" alt="Img">
                      </div>
                      <span>Light</span>
                    </div>
                    <div class="theme-image" [class.active]="isActive === 'Dark'" (click)="setActive('Dark')">
                      <div class="theme-image-set">
                        <img src="assets/img/theme/theme-img-09.jpg" alt="Img">
                      </div>
                      <span>Dark</span>
                    </div>
                    <div class="theme-image" [class.active]="isActive === 'Automatic'" (click)="setActive('Automatic')">
                      <div class="theme-image-set">
                        <img src="assets/img/theme/theme-img-10.jpg" alt="Img">
                      </div>
                      <span>Automatic</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="setting-info mb-4">
                    <h6>Accent Color</h6>
                    <p>Choose accent colour of website</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="theme-colors mb-4">
                    <ul>
                      <li>
                      <span class="themecolorset defaultcolor" [class.active]="isActive1 === 'default'" (click)="setActive1('default')"></span>
                      </li>
                      <li>
                      <span class="themecolorset theme-violet" [class.active]="isActive1 === 'violet'" (click)="setActive1('violet')"></span>
                      </li>
                      <li>
                      <span class="themecolorset theme-blue" [class.active]="isActive1 === 'blue'" (click)="setActive1('blue')"></span>
                      </li>
                      <li>
                      <span class="themecolorset theme-brown" [class.active]="isActive1 === 'brown'" (click)="setActive1('brown')"></span>
                      </li>
                      </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="setting-info mb-4">
                    <h6>Expand Sidebar</h6>
                    <p>Choose accent colour of website</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                    <input type="checkbox" id="user1" class="check" checked>
                    <label for="user1" class="checktoggle">	</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="setting-info mb-4">
                    <h6>Sidebar Size</h6>
                    <p>Select size of the sidebar to display</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="localization-select">
                    <mat-select class="custom-mat-select select" placeholder="Small - 85px">
                      <mat-option value="1">Small - 85px</mat-option>
                      <mat-option value="1">Large - 250px</mat-option>
                    </mat-select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="setting-info mb-4">
                    <h6>Font Family</h6>
                    <p>Select font family of website</p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12 col-md-4">
                  <div class="localization-select">
                    <mat-select class="custom-mat-select select" placeholder="Nunito">
                      <mat-option value="1">Nunito</mat-option>
                      <mat-option value="1">Poppins</mat-option>
                    </mat-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-end settings-bottom-btn mt-0">
              <button type="button" class="btn btn-secondary me-2">Cancel</button>
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</div>` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppearanceComponent, { className: "AppearanceComponent", filePath: "src/app/features/pages/settings/website-settings/appearance/appearance.component.ts", lineNumber: 15 });
})();
export {
  AppearanceComponent
};
//# sourceMappingURL=chunk-OKWDCMVR.js.map
