import {
  NgxMaskDirective,
  NgxMaskModule
} from "./chunk-ACLHPFFM.js";
import "./chunk-DFPDGJ2J.js";
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
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/forms/form-elements/form-mask/form-mask.component.ts
var FormMaskComponent = class _FormMaskComponent {
  routes = routes;
  static \u0275fac = function FormMaskComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormMaskComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormMaskComponent, selectors: [["app-form-mask"]], decls: 78, vars: 9, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-text"], [1, "card-body"], [1, "mb-3"], ["for", "phone", 1, "mb-2"], ["type", "text", "id", "phone", "mask", "(000) 000-0000", 1, "form-control", 3, "showMaskTyped"], [1, "form-text", "text-muted"], ["for", "date", 1, "mb-2"], ["type", "text", "id", "date", "mask", "00/00/0000", 1, "form-control", 3, "showMaskTyped"], ["for", "field", 1, "mb-2"], ["type", "text", "id", "ssn", "mask", "000-00-0000", 1, "form-control", 3, "showMaskTyped"], ["type", "text", "id", "phoneExt", "mask", "000 000 000", 1, "form-control", 3, "showMaskTyped"], ["for", "product-key", 1, "mb-2"], ["type", "text", "id", "product", "mask", "-000-A000", 1, "form-control", 3, "showMaskTyped"], ["for", "currency", 1, "mb-2"], ["type", "text", "id", "currency", "mask", "099,099,099.99", 1, "form-control", 3, "showMaskTyped"], ["for", "eye-script", 1, "mb-2"], ["type", "text", "id", "eyescript", "mask", "V0.00V0.00 000", 1, "form-control", 3, "showMaskTyped"], ["for", "percent", 1, "mb-2"], ["type", "text", "id", "pct", "mask", "00", 1, "form-control", 3, "showMaskTyped"], [1, "mb-0"], ["for", "credit-card-number", 1, "mb-2"], ["type", "text", "id", "ccn", "mask", "099.099.099.0999", 1, "form-control", 3, "showMaskTyped"]], template: function FormMaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Form Mask");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Form Mask");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h5", 12);
      \u0275\u0275text(19, "Form Mask");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21, "Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "form")(24, "div", 15)(25, "label", 16);
      \u0275\u0275text(26, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275elementStart(28, "span", 18);
      \u0275\u0275text(29, "(999) 999-9999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "label", 19);
      \u0275\u0275text(32, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 20);
      \u0275\u0275elementStart(34, "span", 18);
      \u0275\u0275text(35, "dd/mm/yyyy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 15)(37, "label", 21);
      \u0275\u0275text(38, "SSN field 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 22);
      \u0275\u0275elementStart(40, "span", 18);
      \u0275\u0275text(41, 'e.g "999-99-9999"');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 15)(43, "label", 16);
      \u0275\u0275text(44, "Phone field + ext.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 23);
      \u0275\u0275elementStart(46, "span", 18);
      \u0275\u0275text(47, "+40 999 999 999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 15)(49, "label", 24);
      \u0275\u0275text(50, "Product Key");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 25);
      \u0275\u0275elementStart(52, "span", 18);
      \u0275\u0275text(53, "e.g a*-999-a999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 15)(55, "label", 26);
      \u0275\u0275text(56, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "input", 27);
      \u0275\u0275elementStart(58, "span", 18);
      \u0275\u0275text(59, "$ 999,999,999.99");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 15)(61, "label", 28);
      \u0275\u0275text(62, "Eye Script");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 29);
      \u0275\u0275elementStart(64, "span", 18);
      \u0275\u0275text(65, "~9.99 ~9.99 999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 15)(67, "label", 30);
      \u0275\u0275text(68, "Percent");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "input", 31);
      \u0275\u0275elementStart(70, "span", 18);
      \u0275\u0275text(71, 'e.g "99%"');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 32)(73, "label", 33);
      \u0275\u0275text(74, "Credit Card Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 34);
      \u0275\u0275elementStart(76, "span", 18);
      \u0275\u0275text(77, 'e.g "999.999.999.9999"');
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showMaskTyped", true);
    }
  }, dependencies: [NgxMaskModule, NgxMaskDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormMaskComponent, [{
    type: Component,
    args: [{ selector: "app-form-mask", imports: [NgxMaskModule], template: `              <!-- Page Header -->
              <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
                <div class="flex-grow-1">
                    <h4 class="fs-18 fw-semibold mb-0">Form Mask</h4>
                </div>
                <div class="text-end">
                    <ol class="breadcrumb m-0 py-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                        <li class="breadcrumb-item active">Form Mask</li>
                    </ol>
                </div>
            </div>
            <!-- End Page Header -->

<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Form Mask</h5>
                <p class="card-text">Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask.</p>
            </div>
            <div class="card-body">
                <form >
                    <div class="mb-3">
                        <label for="phone" class="mb-2">Phone</label>
                        <input type="text" id="phone" class="form-control" mask="(000) 000-0000" [showMaskTyped]="true" >
                        <span class="form-text text-muted">(999) 999-9999</span>
                    </div>
                    <div class="mb-3">
                        <label for="date" class="mb-2">Date</label>
                        <input type="text" id="date" class="form-control" mask="00/00/0000" [showMaskTyped]="true">
                        <span class="form-text text-muted">dd/mm/yyyy</span>
                    </div>
                    <div class="mb-3">
                        <label class="mb-2" for="field">SSN field 1</label>
                        <input type="text" id="ssn" class="form-control" mask="000-00-0000" [showMaskTyped]="true">
                        <span class="form-text text-muted">e.g "999-99-9999"</span>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="mb-2">Phone field + ext.</label>
                        <input type="text" id="phoneExt" class="form-control" mask="000 000 000" [showMaskTyped]="true">
                        <span class="form-text text-muted">+40 999 999 999</span>
                    </div>
                    <div class="mb-3">
                        <label class="mb-2" for="product-key">Product Key</label>
                        <input type="text" id="product" class="form-control" mask="-000-A000" [showMaskTyped]="true">
                        <span class="form-text text-muted">e.g a*-999-a999</span>
                    </div>
                    <div class="mb-3">
                        <label class="mb-2" for="currency">Currency</label>
                        <input type="text" id="currency" class="form-control" mask="099,099,099.99" [showMaskTyped]="true">
                        <span class="form-text text-muted">$ 999,999,999.99</span>
                    </div>
                    <div class="mb-3">
                        <label class="mb-2" for="eye-script">Eye Script</label>
                        <input type="text" id="eyescript" class="form-control" mask="V0.00V0.00 000" [showMaskTyped]="true">
                        <span class="form-text text-muted">~9.99 ~9.99 999</span>
                    </div>
                    <div class="mb-3">
                        <label class="mb-2" for="percent">Percent</label>
                        <input type="text" id="pct" class="form-control" mask="00" [showMaskTyped]="true">
                        <span class="form-text text-muted">e.g "99%"</span>
                    </div>
                    <div class="mb-0">
                        <label class="mb-2" for="credit-card-number">Credit Card Number</label>
                        <input type="text" class="form-control" id="ccn" mask="099.099.099.0999" [showMaskTyped]="true">
                        <span class="form-text text-muted">e.g "999.999.999.9999"</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormMaskComponent, { className: "FormMaskComponent", filePath: "src/app/features/pages/ui-interface/forms/form-elements/form-mask/form-mask.component.ts", lineNumber: 11 });
})();
export {
  FormMaskComponent
};
//# sourceMappingURL=chunk-UST7NN7G.js.map
