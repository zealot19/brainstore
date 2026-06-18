import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/advanced-ui/ui-clipboard/ui-clipboard.component.ts
var UiClipboardComponent = class _UiClipboardComponent {
  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
  }
  cutInputMessage(inputElement) {
    inputElement.select();
    document.execCommand("cut");
    inputElement.setSelectionRange(0, 0);
  }
  copySpanContent(spanId) {
    const spanElement = document.getElementById(spanId);
    if (spanElement) {
      const range = document.createRange();
      range.selectNode(spanElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
    }
  }
  static \u0275fac = function UiClipboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiClipboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiClipboardComponent, selectors: [["app-ui-clipboard"]], decls: 71, vars: 0, consts: [["userinput", ""], ["textareas", ""], ["inputpara", ""], ["advpara", ""], [1, "cardhead", "custom-ui"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "clipboard"], [1, "form-horizontal"], ["type", "text", "value", "http://www.admin-dashboard.com", 1, "form-control", "mb-3"], ["href", "javascript:void(0);", 1, "mb-1", "btn", "clip-btn", "btn-primary", "me-1", 3, "click"], [1, "far", "fa-copy"], ["href", "javascript:void(0);", 1, "mb-1", "btn", "clip-btn", "btn-dark", 3, "click"], [1, "fas", "fa-cut"], ["rows", "3", 1, "form-control", "mb-3"], ["href", "javascript:void(0);", 1, "mb-1", "me-1", "btn", "clip-btn", "btn-primary", 3, "click"], [1, "clipboard", "copy-txt"], [1, "otp-pass"], ["type", "text", "value", "22991"], [1, "mb-3"], ["href", "javascript:void(0);", 1, "mb-1", "btn", "clip-btn", "btn-primary", 3, "click"], ["type", "text", "value", "http://www.example.com/example", 1, "input-link"], ["href", "javascript:void(0);", "data-clipboard-action", "copy", "data-clipboard-text", "2291", 1, "mb-1", "btn", "clip-btn", "btn-warning"]], template: function UiClipboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h3", 8);
      \u0275\u0275text(5, "Clipboard");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(6, "div", 6)(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "h5", 12);
      \u0275\u0275text(11, "Copy from input");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 13)(13, "div", 14)(14, "form", 15);
      \u0275\u0275domElement(15, "input", 16, 0);
      \u0275\u0275domElementStart(17, "a", 17);
      \u0275\u0275domListener("click", function UiClipboardComponent_Template_a_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        const userinput_r2 = \u0275\u0275reference(16);
        return \u0275\u0275resetView(ctx.copyInputMessage(userinput_r2));
      });
      \u0275\u0275domElement(18, "i", 18);
      \u0275\u0275text(19, " Copy from Input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "a", 19);
      \u0275\u0275domListener("click", function UiClipboardComponent_Template_a_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        const userinput_r2 = \u0275\u0275reference(16);
        return \u0275\u0275resetView(ctx.cutInputMessage(userinput_r2));
      });
      \u0275\u0275domElement(21, "i", 20);
      \u0275\u0275text(22, " Cut from Input");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(23, "div", 10)(24, "div", 11)(25, "h5", 12);
      \u0275\u0275text(26, "Copy from Text Area");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "div", 13)(28, "div", 14)(29, "form", 15)(30, "textarea", 21, 1);
      \u0275\u0275text(32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "a", 22);
      \u0275\u0275domListener("click", function UiClipboardComponent_Template_a_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        const textareas_r3 = \u0275\u0275reference(31);
        return \u0275\u0275resetView(ctx.copyInputMessage(textareas_r3));
      });
      \u0275\u0275domElement(34, "i", 18);
      \u0275\u0275text(35, " Copy from Input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "a", 19);
      \u0275\u0275domListener("click", function UiClipboardComponent_Template_a_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        const textareas_r3 = \u0275\u0275reference(31);
        return \u0275\u0275resetView(ctx.cutInputMessage(textareas_r3));
      });
      \u0275\u0275domElement(37, "i", 20);
      \u0275\u0275text(38, " Cut from Input");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(39, "div", 10)(40, "div", 11)(41, "h5", 12);
      \u0275\u0275text(42, "Copy Text from Paragraph");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(43, "div", 13)(44, "div", 23)(45, "p", 24);
      \u0275\u0275text(46, "Here is your OTP ");
      \u0275\u0275domElement(47, "input", 25, 2);
      \u0275\u0275text(49, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "p", 26);
      \u0275\u0275text(51, "Please do not share it to anyone");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "a", 27);
      \u0275\u0275domListener("click", function UiClipboardComponent_Template_a_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        const inputpara_r4 = \u0275\u0275reference(48);
        return \u0275\u0275resetView(ctx.copyInputMessage(inputpara_r4));
      });
      \u0275\u0275domElement(53, "i", 18);
      \u0275\u0275text(54, " Copy from Input");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(55, "div", 10)(56, "div", 11)(57, "h5", 12);
      \u0275\u0275text(58, "Copy Hidden Text (Advanced)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(59, "div", 13)(60, "div", 23)(61, "p", 26);
      \u0275\u0275text(62, "Link -> ");
      \u0275\u0275domElement(63, "input", 28, 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "a", 17);
      \u0275\u0275domListener("click", function UiClipboardComponent_Template_a_click_65_listener() {
        \u0275\u0275restoreView(_r1);
        const advpara_r5 = \u0275\u0275reference(64);
        return \u0275\u0275resetView(ctx.copyInputMessage(advpara_r5));
      });
      \u0275\u0275domElement(66, "i", 18);
      \u0275\u0275text(67, " Copy Link");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "a", 29);
      \u0275\u0275domElement(69, "i", 18);
      \u0275\u0275text(70, " Copy Hidden Code");
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiClipboardComponent, [{
    type: Component,
    args: [{ selector: "app-ui-clipboard", imports: [], template: '<div class="cardhead custom-ui">\n\n    <!-- Page Header -->\n    <div class="page-header">\n        <div class="row">\n            <div class="col-sm-12">\n                <h3 class="page-title">Clipboard</h3>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <div class="row">\n					\n        <!-- Drag Card -->					\n        <div class="col-md-12">	\n        \n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Copy from input</h5>\n                </div>\n                <div class="card-body">\n                    <div class="clipboard">\n                        <form class="form-horizontal">\n                            <input type="text" class="form-control mb-3" #userinput value="http://www.admin-dashboard.com">\n                            <a class="mb-1 btn clip-btn btn-primary me-1" href="javascript:void(0);" (click)="copyInputMessage(userinput)"><i class="far fa-copy"></i> Copy from Input</a>\n                            <a class="mb-1 btn clip-btn btn-dark" href="javascript:void(0);"(click)="cutInputMessage(userinput)"><i class="fas fa-cut"></i> Cut from Input</a>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            \n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Copy from Text Area</h5>\n                </div>\n                <div class="card-body">\n                    <div class="clipboard">\n                        <form class="form-horizontal">\n                            <textarea class="form-control mb-3" rows="3" #textareas>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</textarea>\n                            <a class="mb-1 me-1 btn clip-btn btn-primary" href="javascript:void(0);"  (click)="copyInputMessage(textareas)"><i class="far fa-copy"></i> Copy from Input</a>\n                            <a class="mb-1 btn clip-btn btn-dark" href="javascript:void(0);" (click)="cutInputMessage(textareas)"><i class="fas fa-cut"></i> Cut from Input</a>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            \n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Copy Text from Paragraph</h5>\n                </div>\n                <div class="card-body">\n                    <div class="clipboard copy-txt">\n                        <p class="otp-pass">Here is your OTP <input type="text" #inputpara value="22991">.</p>\n                        <p class="mb-3">Please do not share it to anyone</p>\n                        <a class="mb-1 btn clip-btn btn-primary" href="javascript:void(0);" (click)="copyInputMessage(inputpara)"><i class="far fa-copy"></i> Copy from Input</a>\n                    </div>\n                </div>\n            </div>\n            \n            <div class="card">\n                <div class="card-header">\n                    <h5 class="card-title">Copy Hidden Text (Advanced)</h5>\n                </div>\n                <div class="card-body">\n                    <div class="clipboard copy-txt">\n                        <p class="mb-3">Link -> <input type="text" class="input-link" #advpara value="http://www.example.com/example"></p>\n                        <a class="mb-1 btn clip-btn btn-primary me-1" href="javascript:void(0);" (click)="copyInputMessage(advpara)"><i class="far fa-copy"></i> Copy Link</a>\n                        <a class="mb-1 btn clip-btn btn-warning" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-text="2291"><i class="far fa-copy"></i> Copy Hidden Code</a>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n        <!-- /Drag Card -->\n    </div>\n\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiClipboardComponent, { className: "UiClipboardComponent", filePath: "src/app/features/pages/ui-interface/advanced-ui/ui-clipboard/ui-clipboard.component.ts", lineNumber: 9 });
})();
export {
  UiClipboardComponent
};
//# sourceMappingURL=chunk-DXIWOAIF.js.map
