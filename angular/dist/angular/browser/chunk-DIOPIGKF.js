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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/pages/blank-page/blank-page.component.ts
function BlankPageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 6);
  }
}
function BlankPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 6);
  }
}
var BlankPageComponent = class _BlankPageComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function BlankPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlankPageComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlankPageComponent, selectors: [["app-blank-page"]], decls: 14, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"]], template: function BlankPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Blank Page");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h6");
      \u0275\u0275text(5, "Sub Title");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "ul", 2)(7, "li")(8, "a", 3);
      \u0275\u0275domElement(9, "i", 4);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li")(11, "a", 5);
      \u0275\u0275domListener("click", function BlankPageComponent_Template_a_click_11_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(12, BlankPageComponent_Conditional_12_Template, 1, 0, "i", 6);
      \u0275\u0275conditionalCreate(13, BlankPageComponent_Conditional_13_Template, 1, 0, "i", 6);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 13 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlankPageComponent, [{
    type: Component,
    args: [{ selector: "app-blank-page", imports: [], template: '<div class="page-header">\n  <div class="page-title">\n    <h4>Blank Page</h4>\n    <h6>Sub Title</h6>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse" matTooltipPosition="above"\n        id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlankPageComponent, { className: "BlankPageComponent", filePath: "src/app/features/pages/pages/blank-page/blank-page.component.ts", lineNumber: 10 });
})();
export {
  BlankPageComponent
};
//# sourceMappingURL=chunk-DIOPIGKF.js.map
