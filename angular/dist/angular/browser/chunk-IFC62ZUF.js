import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/base-ui/ui-breadcrumb/ui-breadcrumb.component.ts
var UiBreadcrumbComponent = class _UiBreadcrumbComponent {
  static \u0275fac = function UiBreadcrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiBreadcrumbComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiBreadcrumbComponent, selectors: [["app-ui-breadcrumb"]], decls: 118, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "py-2"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "py-2"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb", "py-2", "mb-0"], [1, "ti", "ti-smart-home", "fs-16", "me-1"], [1, "breadcrumb", "breadcrumb-arrow", "mb-0", "py-2"], [1, "breadcrumb", "breadcrumb-pipe", "py-2", "mb-0"]], template: function UiBreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "Breadcrumb");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Default Breadcrumb");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "nav", 8)(13, "ol", 9)(14, "li", 10);
      \u0275\u0275text(15, "Home");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "nav", 8)(17, "ol", 9)(18, "li", 11)(19, "a", 12);
      \u0275\u0275text(20, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "li", 10);
      \u0275\u0275text(22, "Library");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(23, "nav", 8)(24, "ol", 9)(25, "li", 11)(26, "a", 12);
      \u0275\u0275text(27, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "li", 11)(29, "a", 12);
      \u0275\u0275text(30, "Library");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "li", 10);
      \u0275\u0275text(32, "Data");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(33, "div", 3)(34, "div", 4)(35, "div", 5)(36, "h5", 6);
      \u0275\u0275text(37, "Breadcrumb with Icons");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "div", 7)(39, "nav", 8)(40, "ol", 13)(41, "li", 10);
      \u0275\u0275domElement(42, "i", 14);
      \u0275\u0275text(43, "Home");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(44, "nav", 8)(45, "ol", 13)(46, "li", 11)(47, "a", 12);
      \u0275\u0275domElement(48, "i", 14);
      \u0275\u0275text(49, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(50, "li", 10);
      \u0275\u0275text(51, "Library");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(52, "nav", 8)(53, "ol", 13)(54, "li", 11)(55, "a", 12);
      \u0275\u0275domElement(56, "i", 14);
      \u0275\u0275text(57, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(58, "li", 11)(59, "a", 12);
      \u0275\u0275text(60, "Library");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(61, "li", 10);
      \u0275\u0275text(62, "Data");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(63, "div", 2)(64, "div", 3)(65, "div", 4)(66, "div", 5)(67, "h5", 6);
      \u0275\u0275text(68, "Arrow Style");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(69, "div", 7)(70, "nav", 8)(71, "ol", 15)(72, "li", 10);
      \u0275\u0275text(73, "Home");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(74, "nav", 8)(75, "ol", 15)(76, "li", 11)(77, "a", 12);
      \u0275\u0275text(78, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(79, "li", 10);
      \u0275\u0275text(80, "Library");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(81, "nav", 8)(82, "ol", 15)(83, "li", 11)(84, "a", 12);
      \u0275\u0275text(85, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(86, "li", 11)(87, "a", 12);
      \u0275\u0275text(88, "Library");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(89, "li", 10);
      \u0275\u0275text(90, "Data");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(91, "div", 3)(92, "div", 4)(93, "div", 5)(94, "h5", 6);
      \u0275\u0275text(95, "Pipe Style");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(96, "div", 7)(97, "nav", 8)(98, "ol", 16)(99, "li", 10);
      \u0275\u0275text(100, "Home");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(101, "nav", 8)(102, "ol", 16)(103, "li", 11)(104, "a", 12);
      \u0275\u0275text(105, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(106, "li", 10);
      \u0275\u0275text(107, "Library");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(108, "nav", 8)(109, "ol", 16)(110, "li", 11)(111, "a", 12);
      \u0275\u0275text(112, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(113, "li", 11)(114, "a", 12);
      \u0275\u0275text(115, "Library");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(116, "li", 10);
      \u0275\u0275text(117, "Data");
      \u0275\u0275domElementEnd()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiBreadcrumbComponent, [{
    type: Component,
    args: [{ selector: "app-ui-breadcrumb", imports: [], template: '<div>\n    <div class="page-header">\n        <div class="page-title">\n            <h4>Breadcrumb</h4>\n        </div>\n    </div>\n\n    <!-- start row -->\n    <div class="row">\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Default Breadcrumb</h5>\n                </div>\n                <div class="card-body  py-2">\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb mb-0 py-2">\n                            <li class="breadcrumb-item active" aria-current="page">Home</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb mb-0 py-2">\n                            <li class="breadcrumb-item"><a href="#">Home</a></li>\n                            <li class="breadcrumb-item active" aria-current="page">Library</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb mb-0 py-2">\n                            <li class="breadcrumb-item"><a href="#">Home</a></li>\n                            <li class="breadcrumb-item"><a href="#">Library</a></li>\n                            <li class="breadcrumb-item active" aria-current="page">Data</li>\n                        </ol>\n                    </nav>\n                </div> <!-- end card-body -->\n            </div> <!-- end card-->\n        </div> <!-- end col -->\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Breadcrumb with Icons</h5>\n                </div>\n                <div class="card-body  py-2">\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb py-2 mb-0">\n                            <li class="breadcrumb-item active" aria-current="page"><i\n                                    class="ti ti-smart-home fs-16 me-1"></i>Home</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb py-2 mb-0">\n                            <li class="breadcrumb-item"><a href="#"><i class="ti ti-smart-home fs-16 me-1"></i>Home</a>\n                            </li>\n                            <li class="breadcrumb-item active" aria-current="page">Library</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb py-2 mb-0">\n                            <li class="breadcrumb-item"><a href="#"><i class="ti ti-smart-home fs-16 me-1"></i>Home</a>\n                            </li>\n                            <li class="breadcrumb-item"><a href="#">Library</a></li>\n                            <li class="breadcrumb-item active" aria-current="page">Data</li>\n                        </ol>\n                    </nav>\n                </div> <!-- end card-body -->\n            </div> <!-- end card-->\n        </div> <!-- end col -->\n\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Arrow Style</h5>\n                </div>\n                <div class="card-body py-2">\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb breadcrumb-arrow mb-0 py-2">\n                            <li class="breadcrumb-item active" aria-current="page">Home</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb breadcrumb-arrow mb-0 py-2">\n                            <li class="breadcrumb-item"><a href="#">Home</a></li>\n                            <li class="breadcrumb-item active" aria-current="page">Library</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb breadcrumb-arrow mb-0 py-2">\n                            <li class="breadcrumb-item"><a href="#">Home</a></li>\n                            <li class="breadcrumb-item"><a href="#">Library</a></li>\n                            <li class="breadcrumb-item active" aria-current="page">Data</li>\n                        </ol>\n                    </nav>\n                </div> <!-- end card-body -->\n            </div> <!-- end card-->\n        </div> <!-- end col -->\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Pipe Style</h5>\n                </div>\n                <div class="card-body py-2">\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb breadcrumb-pipe py-2 mb-0">\n                            <li class="breadcrumb-item active" aria-current="page">Home</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb breadcrumb-pipe py-2 mb-0">\n                            <li class="breadcrumb-item"><a href="#">Home</a></li>\n                            <li class="breadcrumb-item active" aria-current="page">Library</li>\n                        </ol>\n                    </nav>\n                    <nav aria-label="breadcrumb">\n                        <ol class="breadcrumb breadcrumb-pipe py-2 mb-0">\n                            <li class="breadcrumb-item"><a href="#">Home</a></li>\n                            <li class="breadcrumb-item"><a href="#">Library</a></li>\n                            <li class="breadcrumb-item active" aria-current="page">Data</li>\n                        </ol>\n                    </nav>\n                </div> <!-- end card-body -->\n            </div> <!-- end card-->\n        </div> <!-- end col -->\n\n    </div>\n    <!-- end row -->\n\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiBreadcrumbComponent, { className: "UiBreadcrumbComponent", filePath: "src/app/features/pages/ui-interface/base-ui/ui-breadcrumb/ui-breadcrumb.component.ts", lineNumber: 9 });
})();
export {
  UiBreadcrumbComponent
};
//# sourceMappingURL=chunk-IFC62ZUF.js.map
