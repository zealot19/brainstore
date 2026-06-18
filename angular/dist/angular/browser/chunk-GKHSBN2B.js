import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtrustConstantResourceUrl
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/base-ui/ratio/ratio.component.ts
var RatioComponent = class _RatioComponent {
  static \u0275fac = function RatioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RatioComponent, selectors: [["app-ratio"]], decls: 52, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted"], [1, "ratio", "ratio-21x9"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0`], [1, "ratio", "ratio-1x1"], [1, "ratio", "ratio-16x9"], [1, "ratio", "ratio-4x3"]], template: function RatioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "Ratio");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Responsive Ratio video 21:9");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "p", 8);
      \u0275\u0275text(13, "Use class ");
      \u0275\u0275domElementStart(14, "code");
      \u0275\u0275text(15, ".ratio-21x9");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 9);
      \u0275\u0275domElement(17, "iframe", 10);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(18, "div", 4)(19, "div", 5)(20, "h5", 6);
      \u0275\u0275text(21, "Responsive Ratio video 1:1");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 7)(23, "p", 8);
      \u0275\u0275text(24, "Use class ");
      \u0275\u0275domElementStart(25, "code");
      \u0275\u0275text(26, ".ratio-1x1");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "div", 11);
      \u0275\u0275domElement(28, "iframe", 10);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(29, "div", 3)(30, "div", 4)(31, "div", 5)(32, "h5", 6);
      \u0275\u0275text(33, "Responsive Ratio video 16:9");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(34, "div", 7)(35, "p", 8);
      \u0275\u0275text(36, "Use class ");
      \u0275\u0275domElementStart(37, "code");
      \u0275\u0275text(38, ".ratio-16x9");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 12);
      \u0275\u0275domElement(40, "iframe", 10);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(41, "div", 4)(42, "div", 5)(43, "h5", 6);
      \u0275\u0275text(44, "Responsive Ratio video 4:3");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(45, "div", 7)(46, "p", 8);
      \u0275\u0275text(47, "Use class ");
      \u0275\u0275domElementStart(48, "code");
      \u0275\u0275text(49, ".ratio-4x3");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(50, "div", 13);
      \u0275\u0275domElement(51, "iframe", 10);
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatioComponent, [{
    type: Component,
    args: [{ selector: "app-ratio", imports: [], template: '<div>\n    <div class="page-header">\n        <div class="page-title">\n            <h4>Ratio</h4>\n        </div>\n    </div>\n\n    <!-- start row -->\n    <div class="row">\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Responsive Ratio video 21:9</h5>\n                </div>\n                <div class="card-body">\n                    <p class="text-muted">Use class <code>.ratio-21x9</code>\n                        <!-- 21:9 aspect ratio -->\n                    <div class="ratio ratio-21x9">\n                        <iframe\n                            src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                    </div>\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Responsive Ratio video 1:1</h5>\n                </div>\n                <div class="card-body">\n                    <p class="text-muted">Use class <code>.ratio-1x1</code></p>\n                    <!-- 1:1 aspect ratio -->\n                    <div class="ratio ratio-1x1">\n                        <iframe\n                            src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                    </div>\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Responsive Ratio video 16:9</h5>\n                </div>\n                <div class="card-body">\n                    <p class="text-muted">Use class <code>.ratio-16x9</code></p>\n                    <!-- 16:9 aspect ratio -->\n                    <div class="ratio ratio-16x9">\n                        <iframe\n                            src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                    </div>\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Responsive Ratio video 4:3</h5>\n                </div>\n                <div class="card-body">\n                    <p class="text-muted">Use class <code>.ratio-4x3</code></p>\n                    <!-- 4:3 aspect ratio -->\n                    <div class="ratio ratio-4x3">\n                        <iframe\n                            src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                    </div>\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n    </div>\n    <!-- end row -->\n\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RatioComponent, { className: "RatioComponent", filePath: "src/app/features/pages/ui-interface/base-ui/ratio/ratio.component.ts", lineNumber: 9 });
})();
export {
  RatioComponent
};
//# sourceMappingURL=chunk-GKHSBN2B.js.map
