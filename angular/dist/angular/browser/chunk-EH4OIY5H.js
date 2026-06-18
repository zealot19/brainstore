import {
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
import {
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-YDEDRV4R.js";
import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-PBBQYMFY.js";
import {
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/search-list/search-list.component.ts
function SearchListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function SearchListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
var SearchListComponent = class _SearchListComponent {
  sidebar;
  routes = routes;
  lightGallery;
  needRefresh = false;
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  static \u0275fac = function SearchListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchListComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchListComponent, selectors: [["app-search-list"]], decls: 87, vars: 6, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "d-flex", "flex-sm-row", "flex-column", "align-items-sm-center", "align-items-start"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], ["type", "text", "value", "DreamsPOS", 1, "form-control", "flex-fill", "me-3"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mb-3"], [1, "row"], [1, "col-md-6"], [1, "card", "shadow-none"], ["href", "javascript:void(0);", 1, "text-info", "text-truncate", "mb-2"], [1, "text-truncate", "line-clamb-2", "mb-2"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2"], [1, "text-gray-9", "me-3", "pe-3", "border-end"], [1, "text-gray-9", "d-flex", "align-items-center", "me-3", "pe-3", "border-end"], [1, "ti", "ti-star-filled", "text-warning", "me-1"], [1, "ti", "ti-star-filled", "text-gray-2", "me-1"], [1, "text-gray-9"], [1, "row", "g-3"], [1, "light-box", "row", "g-3", 3, "settings", "onBeforeSlide"], ["data-responsive", "assets/img/media/media-15.jpg", "data-src", "assets/img/media/media-15.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-15.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-15.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-16.jpg", "data-src", "assets/img/media/media-16.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-16.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-16.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-17.jpg", "data-src", "assets/img/media/media-17.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-17.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-17.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-18.jpg", "data-src", "assets/img/media/media-18.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-18.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-18.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-19.jpg", "data-src", "assets/img/media/media-19.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-19.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-19.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-20.jpg", "data-src", "assets/img/media/media-20.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-20.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-20.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-21.jpg", "data-src", "assets/img/media/media-21.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-21.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-21.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-22.jpg", "data-src", "assets/img/media/media-22.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-22.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-22.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-23.jpg", "data-src", "assets/img/media/media-23.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-23.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-23.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-24.jpg", "data-src", "assets/img/media/media-24.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-24.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-24.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "ssets/img/media/media-25.jpg", "data-src", "ssets/img/media/media-25.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-25.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-25.jpg", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/media/media-26.jpg", "data-src", "assets/img/media/media-26.jpg", 1, "col-xl-2", "col-md-4", "col-6"], ["href", "assets/img/media/media-26.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/media/media-26.jpg", "alt", "img", 1, "rounded"]], template: function SearchListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Search List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 3)(8, "ul", 4)(9, "li")(10, "a", 5);
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 7);
      \u0275\u0275listener("click", function SearchListComponent_Template_a_click_13_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(14, SearchListComponent_Conditional_14_Template, 1, 0, "i", 8);
      \u0275\u0275conditionalCreate(15, SearchListComponent_Conditional_15_Template, 1, 0, "i", 8);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "form")(19, "div", 11);
      \u0275\u0275element(20, "input", 12);
      \u0275\u0275elementStart(21, "button", 13);
      \u0275\u0275text(22, "Search");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "div", 9)(24, "div", 10)(25, "h5", 14);
      \u0275\u0275text(26, 'Search result for "DreamsPOS"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "div", 10)(31, "a", 18);
      \u0275\u0275text(32, "https://themeforest.net/search/dreamspos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 19);
      \u0275\u0275text(34, "DreamsPOS - Html, Vue 3, Angular 17+, React & Node HR Project Management & CRM Admin Dashboard Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 20)(36, "span", 21);
      \u0275\u0275text(37, "1.7K Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 22);
      \u0275\u0275element(39, "i", 23)(40, "i", 23)(41, "i", 23)(42, "i", 23)(43, "i", 24);
      \u0275\u0275text(44, " (45) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 25);
      \u0275\u0275text(46, "$35");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(47, "h5", 14);
      \u0275\u0275text(48, "Images");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 26)(50, "lightgallery", 27)(51, "div", 28)(52, "a", 29);
      \u0275\u0275element(53, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 31)(55, "a", 32);
      \u0275\u0275element(56, "img", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 34)(58, "a", 35);
      \u0275\u0275element(59, "img", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 37)(61, "a", 38);
      \u0275\u0275element(62, "img", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 40)(64, "a", 41);
      \u0275\u0275element(65, "img", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 43)(67, "a", 44);
      \u0275\u0275element(68, "img", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 46)(70, "a", 47);
      \u0275\u0275element(71, "img", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 49)(73, "a", 50);
      \u0275\u0275element(74, "img", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 52)(76, "a", 53);
      \u0275\u0275element(77, "img", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 55)(79, "a", 56);
      \u0275\u0275element(80, "img", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 58)(82, "a", 59);
      \u0275\u0275element(83, "img", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 61)(85, "a", 62);
      \u0275\u0275element(86, "img", 63);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 15 : -1);
      \u0275\u0275advance(35);
      \u0275\u0275property("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    }
  }, dependencies: [MatSelectModule, NgxEditorModule, LightgalleryModule, LightgalleryComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchListComponent, [{
    type: Component,
    args: [{ selector: "app-search-list", imports: [MatSelectModule, NgxEditorModule, LightgalleryModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Search List</h4>\n            <h6>Manage your search</h6>\n        </div>\n    </div>\n    <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">\n        <ul class="table-top-head">\n            <li>\n                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n                  <i class="ti ti-refresh"></i>\n                </a>\n              </li>\n              <li>\n                <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n                   @if (!isCollapsed) {\n                  <i class="ti ti-chevron-up"></i>\n                }\n                @if (isCollapsed) {\n                  <i class="ti ti-chevron-up"></i>\n                }</a>\n              </li>\n        </ul>\n    </div>\n</div>\n\n<div class="card">\n    <div class="card-body">\n        <form>\n            <div class="d-flex align-items-center">\n                <input type="text" class="form-control flex-fill me-3" value="DreamsPOS">\n                <button type="submit" class="btn btn-primary">Search</button>\n            </div>\n        </form>\n    </div>\n</div>\n<div class="card">\n    <div class="card-body">\n        <h5 class="mb-3">Search result for "DreamsPOS"</h5>\n        <div class="row">\n            <div class="col-md-6">\n                <div class="card shadow-none">\n                    <div class="card-body">\n                        <a href="javascript:void(0);" class="text-info text-truncate mb-2">https://themeforest.net/search/dreamspos</a>\n                        <p class="text-truncate line-clamb-2 mb-2">DreamsPOS - Html, Vue 3, Angular 17+, React & Node HR Project Management & CRM Admin Dashboard Template</p>\n                        <div class="d-flex align-items-center flex-wrap row-gap-2">\n                            <span class="text-gray-9 me-3 pe-3 border-end">1.7K Sales</span>\n                            <div class="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">\n                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                <i class="ti ti-star-filled text-warning me-1"></i>\n                                <i class="ti ti-star-filled text-gray-2 me-1"></i>\n                                (45)\n                            </div>\n                            <span class="text-gray-9">$35</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h5 class="mb-3">Images</h5>\n        <div class="row g-3">\n            <lightgallery class="light-box row g-3" [settings]="settings" [onBeforeSlide]="onBeforeSlide">\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-15.jpg" data-src="assets/img/media/media-15.jpg">\n                <a href="assets/img/media/media-15.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-15.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-16.jpg" data-src="assets/img/media/media-16.jpg">\n                <a href="assets/img/media/media-16.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-16.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-17.jpg" data-src="assets/img/media/media-17.jpg">\n                <a href="assets/img/media/media-17.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-17.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-18.jpg" data-src="assets/img/media/media-18.jpg">\n                <a href="assets/img/media/media-18.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-18.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-19.jpg" data-src="assets/img/media/media-19.jpg">\n                <a href="assets/img/media/media-19.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-19.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-20.jpg" data-src="assets/img/media/media-20.jpg">\n                <a href="assets/img/media/media-20.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-20.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-21.jpg" data-src="assets/img/media/media-21.jpg">\n                <a href="assets/img/media/media-21.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-21.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-22.jpg" data-src="assets/img/media/media-22.jpg">\n                <a href="assets/img/media/media-22.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-22.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-23.jpg" data-src="assets/img/media/media-23.jpg">\n                <a href="assets/img/media/media-23.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-23.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-24.jpg" data-src="assets/img/media/media-24.jpg">\n                <a href="assets/img/media/media-24.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-24.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="ssets/img/media/media-25.jpg" data-src="ssets/img/media/media-25.jpg">\n                <a href="assets/img/media/media-25.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-25.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            <div class="col-xl-2 col-md-4 col-6" data-responsive="assets/img/media/media-26.jpg" data-src="assets/img/media/media-26.jpg">\n                <a href="assets/img/media/media-26.jpg" data-fancybox="gallery" class="gallery-item">\n                    <img src="assets/img/media/media-26.jpg" class="rounded" alt="img">\n                </a>\n            </div>\n            </lightgallery>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchListComponent, { className: "SearchListComponent", filePath: "src/app/features/pages/application/search-list/search-list.component.ts", lineNumber: 20 });
})();
export {
  SearchListComponent
};
//# sourceMappingURL=chunk-EH4OIY5H.js.map
