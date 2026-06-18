import {
  DragDropModule
} from "./chunk-CG4KJCH6.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import "./chunk-D63C2A5J.js";
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

// src/app/features/pages/ui-interface/base-ui/ui-spinner/ui-spinner.component.ts
var UiSpinnerComponent = class _UiSpinnerComponent {
  static \u0275fac = function UiSpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiSpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiSpinnerComponent, selectors: [["app-ui-spinner"]], decls: 128, vars: 0, consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "pb-2"], ["role", "status", 1, "spinner-grow", "m-2"], [1, "visually-hidden"], [1, "card", "card-h-100"], ["role", "status", 1, "spinner-grow", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "text-secondary", "m-2"], ["role", "status", 1, "spinner-grow", "text-success", "m-2"], ["role", "status", 1, "spinner-grow", "text-danger", "m-2"], ["role", "status", 1, "spinner-grow", "text-warning", "m-2"], ["role", "status", 1, "spinner-grow", "text-info", "m-2"], ["role", "status", 1, "spinner-grow", "text-light", "m-2"], ["role", "status", 1, "spinner-grow", "text-dark", "m-2"], [1, "card-body"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "d-flex", "align-items-center"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "ms-auto"], [1, "col-lg-6"], ["role", "status", 1, "spinner-border", "avatar-lg", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "avatar-lg", "text-secondary", "m-2"], ["role", "status", 1, "spinner-border", "avatar-md", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "avatar-md", "text-secondary", "m-2"], ["role", "status", 1, "spinner-border", "avatar-sm", "text-primary", "m-2"], ["role", "status", 1, "spinner-grow", "avatar-sm", "text-secondary", "m-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "m-2"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "m-2"], [1, "d-flex", "flex-wrap", "gap-2", "mb-2", "mb-lg-0"], ["type", "button", "disabled", "", 1, "btn", "btn-primary"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "d-flex", "flex-wrap", "gap-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm", "me-1"], [1, "footer", "d-sm-flex", "align-items-center", "justify-content-between", "border-top", "bg-white", "p-3"], [1, "mb-0", "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary"]], template: function UiSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
      \u0275\u0275text(5, "Spinner");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(6, "div", 1)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "h5", 7);
      \u0275\u0275text(11, "Growing Spinner");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 8)(13, "p");
      \u0275\u0275text(14, "If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow!");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "div", 9)(16, "span", 10);
      \u0275\u0275text(17, "Loading...");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(18, "div", 4)(19, "div", 11)(20, "div", 6)(21, "h5", 7);
      \u0275\u0275text(22, "Color Growing Spinner");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "div", 8)(24, "p");
      \u0275\u0275text(25, "You can use any of our text color utilities on the standard spinner.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(26, "div", 12)(27, "div", 13)(28, "div", 14)(29, "div", 15)(30, "div", 16)(31, "div", 17)(32, "div", 18)(33, "div", 19);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(34, "div", 1)(35, "div", 4)(36, "div", 5)(37, "div", 6)(38, "h5", 7);
      \u0275\u0275text(39, "Alignment");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "div", 20)(41, "p");
      \u0275\u0275text(42, "Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "div", 21);
      \u0275\u0275domElement(44, "div", 22);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(45, "div", 4)(46, "div", 5)(47, "div", 6)(48, "h5", 7);
      \u0275\u0275text(49, "Placement");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(50, "div", 20)(51, "p");
      \u0275\u0275text(52, "Use ");
      \u0275\u0275domElementStart(53, "code");
      \u0275\u0275text(54, "flexbox utilities");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(55, ", ");
      \u0275\u0275domElementStart(56, "code");
      \u0275\u0275text(57, "float utilities");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(58, ", or ");
      \u0275\u0275domElementStart(59, "code");
      \u0275\u0275text(60, "text alignment");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(61, " utilities to place spinners exactly where you need them in any situation.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "div", 23)(63, "strong");
      \u0275\u0275text(64, "Loading...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(65, "div", 24);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(66, "div", 1)(67, "div", 4)(68, "div", 5)(69, "div", 6)(70, "h5", 7);
      \u0275\u0275text(71, "Size");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(72, "div", 8)(73, "p");
      \u0275\u0275text(74, "Add ");
      \u0275\u0275domElementStart(75, "code");
      \u0275\u0275text(76, ".spinner-border-sm");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(77, " and ");
      \u0275\u0275domElementStart(78, "code");
      \u0275\u0275text(79, ".spinner-border.avatar-**");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(80, " to make a smaller spinner that can quickly be used within other components. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "div", 1)(82, "div", 25);
      \u0275\u0275domElement(83, "div", 26)(84, "div", 27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(85, "div", 25);
      \u0275\u0275domElement(86, "div", 28)(87, "div", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "div", 25);
      \u0275\u0275domElement(89, "div", 30)(90, "div", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "div", 25);
      \u0275\u0275domElement(92, "div", 32)(93, "div", 33);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(94, "div", 4)(95, "div", 11)(96, "div", 6)(97, "h5", 7);
      \u0275\u0275text(98, "Buttons Spinner");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(99, "div", 20)(100, "p");
      \u0275\u0275text(101, "Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(102, "div", 1)(103, "div", 25)(104, "div", 34)(105, "button", 35);
      \u0275\u0275domElement(106, "span", 36);
      \u0275\u0275domElementStart(107, "span", 10);
      \u0275\u0275text(108, "Loading...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(109, "button", 35);
      \u0275\u0275domElement(110, "span", 37);
      \u0275\u0275text(111, " Loading... ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(112, "div", 25)(113, "div", 38)(114, "button", 35);
      \u0275\u0275domElement(115, "span", 39);
      \u0275\u0275domElementStart(116, "span", 10);
      \u0275\u0275text(117, "Loading...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(118, "button", 35);
      \u0275\u0275domElement(119, "span", 40);
      \u0275\u0275text(120, " Loading... ");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(121, "div", 41)(122, "p", 42);
      \u0275\u0275text(123, "2014 - 2026 \xA9 DreamsPOS. All Right Reserved");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(124, "p");
      \u0275\u0275text(125, "Designed & Developed by ");
      \u0275\u0275domElementStart(126, "a", 43);
      \u0275\u0275text(127, "Dreams");
      \u0275\u0275domElementEnd()()()();
    }
  }, dependencies: [DragDropModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiSpinnerComponent, [{
    type: Component,
    args: [{ selector: "app-ui-spinner", imports: [DragDropModule], template: '<div>\n\n    <!-- Page Header -->\n    <div class="page-header">\n        <div class="row">\n            <div class="col-sm-12">\n                <h3 class="page-title">Spinner</h3>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <!-- start row -->\n    <div class="row">\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Growing Spinner</h5>\n                </div>\n                <div class="card-body pb-2">\n                    <p>If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically\n                        spin, it does repeatedly grow!</p>\n\n                    <div class="spinner-grow m-2" role="status">\n                        <span class="visually-hidden">Loading...</span>\n                    </div>\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n        <div class="col-xl-6">\n            <div class="card card-h-100">\n                <div class="card-header">\n                    <h5 class="card-title">Color Growing Spinner</h5>\n                </div>\n                <div class="card-body pb-2">\n                    <p>You can use any of our text color utilities on the standard spinner.</p>\n\n                    <div class="spinner-grow text-primary m-2" role="status"></div>\n                    <div class="spinner-grow text-secondary m-2" role="status"></div>\n                    <div class="spinner-grow text-success m-2" role="status"></div>\n                    <div class="spinner-grow text-danger m-2" role="status"></div>\n                    <div class="spinner-grow text-warning m-2" role="status"></div>\n                    <div class="spinner-grow text-info m-2" role="status"></div>\n                    <div class="spinner-grow text-light m-2" role="status"></div>\n                    <div class="spinner-grow text-dark m-2" role="status"></div>\n\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-xl-6">\n\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Alignment</h5>\n                </div>\n                <div class="card-body">\n                    <p>Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly\n                        where you need them in any situation.</p>\n\n                    <div class="d-flex justify-content-center">\n                        <div class="spinner-border" role="status"></div>\n                    </div>\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Placement</h5>\n                </div>\n                <div class="card-body">\n                    <p>Use <code>flexbox utilities</code>, <code>float utilities</code>, or <code>text alignment</code>\n                        utilities to place spinners exactly where you need them in any situation.</p>\n\n                    <div class="d-flex align-items-center">\n                        <strong>Loading...</strong>\n                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>\n                    </div>\n\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n    </div>\n    <!-- end row -->\n\n    <!-- start row -->\n    <div class="row">\n\n        <div class="col-xl-6">\n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Size</h5>\n                </div>\n                <div class="card-body pb-2">\n                    <p>Add <code>.spinner-border-sm</code> and <code>.spinner-border.avatar-**</code> to make a smaller\n                        spinner that can quickly be used within other components.\n                    </p>\n                    <div class="row">\n                        <div class="col-lg-6">\n                            <div class="spinner-border avatar-lg text-primary m-2" role="status"></div>\n                            <div class="spinner-grow avatar-lg text-secondary m-2" role="status"></div>\n                        </div> <!-- end col -->\n\n                        <div class="col-lg-6">\n                            <div class="spinner-border avatar-md text-primary m-2" role="status"></div>\n                            <div class="spinner-grow avatar-md text-secondary m-2" role="status"></div>\n                        </div> <!-- end col -->\n\n                        <div class="col-lg-6">\n                            <div class="spinner-border avatar-sm text-primary m-2" role="status"></div>\n                            <div class="spinner-grow avatar-sm text-secondary m-2" role="status"></div>\n                        </div> <!-- end col -->\n\n                        <div class="col-lg-6">\n                            <div class="spinner-border spinner-border-sm m-2" role="status"></div>\n                            <div class="spinner-grow spinner-grow-sm m-2" role="status"></div>\n                        </div> <!-- end col -->\n\n                    </div>\n                    <!--end row -->\n\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n        <div class="col-xl-6">\n            <div class="card card-h-100">\n                <div class="card-header">\n                    <h5 class="card-title">Buttons Spinner</h5>\n                </div>\n                <div class="card-body">\n                    <p>Use spinners within buttons to indicate an action is currently processing or taking place. You\n                        may also swap the text out of the spinner element and utilize button text as needed.</p>\n\n                    <div class="row">\n\n                        <div class="col-lg-6">\n                            <div class="d-flex flex-wrap gap-2 mb-2 mb-lg-0">\n                                <button class="btn btn-primary" type="button" disabled>\n                                    <span class="spinner-border spinner-border-sm" role="status"\n                                        aria-hidden="true"></span><span class="visually-hidden">Loading...</span>\n                                </button>\n                                <button class="btn btn-primary" type="button" disabled>\n                                    <span class="spinner-border spinner-border-sm me-1" role="status"\n                                        aria-hidden="true"></span>\n                                    Loading...\n                                </button>\n                            </div>\n                        </div> <!-- end col -->\n\n                        <div class="col-lg-6">\n                            <div class="d-flex flex-wrap gap-2">\n                                <button class="btn btn-primary" type="button" disabled>\n                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>\n                                    <span class="visually-hidden">Loading...</span>\n                                </button>\n                                <button class="btn btn-primary" type="button" disabled>\n                                    <span class="spinner-grow spinner-grow-sm me-1" role="status"\n                                        aria-hidden="true"></span>\n                                    Loading...\n                                </button>\n                            </div>\n                        </div> <!-- end col -->\n\n                    </div>\n                    <!-- end row -->\n\n                </div> <!-- end card body -->\n            </div> <!-- end card -->\n        </div> <!-- end col -->\n\n    </div>\n    <!-- end row -->\n\n    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">\n        <p class="mb-0 text-gray-9">2014 - 2026 &copy; DreamsPOS. All Right Reserved</p>\n        <p>Designed &amp; Developed by <a href="javascript:void(0);" class="text-primary">Dreams</a></p>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiSpinnerComponent, { className: "UiSpinnerComponent", filePath: "src/app/features/pages/ui-interface/base-ui/ui-spinner/ui-spinner.component.ts", lineNumber: 10 });
})();
export {
  UiSpinnerComponent
};
//# sourceMappingURL=chunk-TJFVLHX3.js.map
