import {
  CdkFixedSizeVirtualScroll,
  CdkScrollableModule,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-C2ILY3S7.js";
import "./chunk-Q2BMEVZV.js";
import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/advanced-ui/ui-scrollbar/ui-scrollbar.component.ts
function UiScrollbarComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
function UiScrollbarComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function UiScrollbarComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
function UiScrollbarComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
  }
}
var UiScrollbarComponent = class _UiScrollbarComponent {
  routes = routes;
  horizontalScroll = Array.from({ length: 100 }).map((_, i) => `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, 
  remaining essentially unchanged.${i}`);
  verticalScroll = Array.from({ length: 10 }).map((_, i) => `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.${i}`);
  static \u0275fac = function UiScrollbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiScrollbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiScrollbarComponent, selectors: [["app-ui-scrollbar"]], decls: 43, vars: 4, consts: [[1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["orientation", "horizontal", "itemSize", "50", 1, "horizontal-scroll", "scroll-demo"], ["class", "col-sm-3", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["appendOnly", "", "itemSize", "10", 1, "vertical-scroll", "scroll-demo"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["appendOnly", "", "itemSize", "50", 1, "small-scroll", "scroll-demo"], ["orientation", "horizontal", "itemSize", "50", 1, "scroll-demo"], [1, "col-sm-3"]], template: function UiScrollbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Scroll Bar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h5", 8);
      \u0275\u0275text(11, "Horizontal Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "div")(14, "cdk-virtual-scroll-viewport", 10)(15, "div", 2);
      \u0275\u0275template(16, UiScrollbarComponent_p_16_Template, 2, 1, "p", 11);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(17, "div", 5)(18, "div", 6)(19, "div", 7)(20, "h5", 8);
      \u0275\u0275text(21, "Vertical Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 9)(23, "cdk-virtual-scroll-viewport", 12);
      \u0275\u0275template(24, UiScrollbarComponent_p_24_Template, 2, 1, "p", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 5)(26, "div", 6)(27, "div", 7)(28, "h5", 8);
      \u0275\u0275text(29, "Small Size Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 9)(31, "cdk-virtual-scroll-viewport", 14);
      \u0275\u0275template(32, UiScrollbarComponent_p_32_Template, 2, 1, "p", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "h5", 8);
      \u0275\u0275text(37, "Visible Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 9)(39, "div")(40, "cdk-virtual-scroll-viewport", 15)(41, "div", 2);
      \u0275\u0275template(42, UiScrollbarComponent_p_42_Template, 2, 1, "p", 11);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("cdkVirtualForOf", ctx.horizontalScroll);
      \u0275\u0275advance(8);
      \u0275\u0275property("cdkVirtualForOf", ctx.verticalScroll);
      \u0275\u0275advance(8);
      \u0275\u0275property("cdkVirtualForOf", ctx.verticalScroll);
      \u0275\u0275advance(10);
      \u0275\u0275property("cdkVirtualForOf", ctx.horizontalScroll);
    }
  }, dependencies: [CdkScrollableModule, CdkVirtualScrollViewport, ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf], styles: ["\n.horizontal-scroll[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\n/*# sourceMappingURL=ui-scrollbar.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiScrollbarComponent, [{
    type: Component,
    args: [{ selector: "app-ui-scrollbar", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CdkScrollableModule, CdkVirtualScrollViewport, ScrollingModule], template: '<div class="cardhead">\n\n\n  <!-- Page Header -->\n  <div class="page-header">\n      <div class="row">\n          <div class="col-sm-12">\n              <h3 class="page-title">Scroll Bar</h3>\n          </div>\n      </div>\n  </div>\n  <!-- /Page Header -->\n\n  <div class="row">\n      <!-- Scroll -->\n      <div class="col-md-6">\n        <div class="card">\n          <div class="card-header">\n            <h5 class="card-title">Horizontal Scroll</h5>\n          </div>\n          <div class="card-body">\n            <div>\n              <cdk-virtual-scroll-viewport\n                orientation="horizontal"\n                class="horizontal-scroll scroll-demo"\n                itemSize="50"\n              >\n                <div class="row">\n                  <p class="col-sm-3" *cdkVirtualFor="let item of horizontalScroll">\n                    {{ item }}\n                  </p>\n                </div>\n              </cdk-virtual-scroll-viewport>\n            </div>\n    \n            \n             \n          </div>\n        </div>\n      </div>\n      <!-- /Scroll -->\n    \n      <!-- Scroll -->\n      <div class="col-md-6">\n        <div class="card">\n          <div class="card-header">\n            <h5 class="card-title">Vertical Scroll</h5>\n          </div>\n          <div class="card-body">\n            <cdk-virtual-scroll-viewport\n              appendOnly\n              itemSize="10"\n              class="vertical-scroll scroll-demo"\n            >\n              <p *cdkVirtualFor="let item of verticalScroll">{{ item }}</p>\n            </cdk-virtual-scroll-viewport>\n          </div>\n        </div>\n      </div>\n      <!-- /Scroll -->\n    \n      <!-- Scroll -->\n      <div class="col-md-6">\n        <div class="card">\n          <div class="card-header">\n            <h5 class="card-title">Small Size Scroll</h5>\n          </div>\n          <div class="card-body">\n            <cdk-virtual-scroll-viewport\n              appendOnly\n              itemSize="50"\n              class="small-scroll scroll-demo"\n            >\n              <p *cdkVirtualFor="let item of verticalScroll">{{ item }}</p>\n            </cdk-virtual-scroll-viewport>\n          </div>\n        </div>\n      </div>\n      <!-- /Scroll -->\n    \n      <!-- Scroll -->\n      <div class="col-md-6">\n        <div class="card">\n          <div class="card-header">\n            <h5 class="card-title">Visible Scroll</h5>\n          </div>\n          <div class="card-body">\n            <div>\n              <cdk-virtual-scroll-viewport\n                orientation="horizontal"\n                class="scroll-demo"\n                itemSize="50"\n              >\n                <div class="row">\n                  <p class="col-sm-3" *cdkVirtualFor="let item of horizontalScroll">\n                    {{ item }}\n                  </p>\n                </div>\n              </cdk-virtual-scroll-viewport>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Scroll -->\n    </div>\n    \n    \n\n\n</div>', styles: ["/* src/app/features/pages/ui-interface/advanced-ui/ui-scrollbar/ui-scrollbar.component.scss */\n.horizontal-scroll {\n  overflow-y: hidden !important;\n}\n/*# sourceMappingURL=ui-scrollbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiScrollbarComponent, { className: "UiScrollbarComponent", filePath: "src/app/features/pages/ui-interface/advanced-ui/ui-scrollbar/ui-scrollbar.component.ts", lineNumber: 13 });
})();
export {
  UiScrollbarComponent
};
//# sourceMappingURL=chunk-XUJTSAKE.js.map
