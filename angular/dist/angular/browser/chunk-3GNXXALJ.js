import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/website-settings/prefixes/prefixes.component.ts
var PrefixesComponent = class _PrefixesComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  static \u0275fac = function PrefixesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrefixesComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrefixesComponent, selectors: [["app-prefixes"]], decls: 91, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "col-xl-3", "col-lg-6", "col-md-4", "col-sm-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "value", "SKU -", 1, "form-control"], ["type", "text", "value", "SUP -", 1, "form-control"], ["type", "text", "value", "PU -", 1, "form-control"], ["type", "text", "value", "PR -", 1, "form-control"], ["type", "text", "value", "SA -", 1, "form-control"], ["type", "text", "value", "SR -", 1, "form-control"], ["type", "text", "value", "CT -", 1, "form-control"], ["type", "text", "value", "EX -", 1, "form-control"], ["type", "text", "value", "ST -", 1, "form-control"], ["type", "text", "value", "SO -", 1, "form-control"], ["type", "text", "value", "PINV -", 1, "form-control"], ["type", "text", "value", "EST -", 1, "form-control"], ["type", "text", "value", "TRN -", 1, "form-control"], ["type", "text", "value", "EMP -", 1, "form-control"], [1, "text-end", "settings-bottom-btn", "mt-0"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function PrefixesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Prefixes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "form")(10, "div", 0)(11, "div", 7)(12, "div", 8)(13, "label", 9);
      \u0275\u0275text(14, "Product (SKU)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "label", 9);
      \u0275\u0275text(19, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 7)(22, "div", 8)(23, "label", 9);
      \u0275\u0275text(24, "Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 7)(27, "div", 8)(28, "label", 9);
      \u0275\u0275text(29, "Purchase Return");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 7)(32, "div", 8)(33, "label", 9);
      \u0275\u0275text(34, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 7)(37, "div", 8)(38, "label", 9);
      \u0275\u0275text(39, "Sales Return");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 7)(42, "div", 8)(43, "label", 9);
      \u0275\u0275text(44, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 7)(47, "div", 8)(48, "label", 9);
      \u0275\u0275text(49, "Expense");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 7)(52, "div", 8)(53, "label", 9);
      \u0275\u0275text(54, "Stock Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 7)(57, "div", 8)(58, "label", 9);
      \u0275\u0275text(59, "Stock Adjustmentt");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 7)(62, "div", 8)(63, "label", 9);
      \u0275\u0275text(64, "Sales Order");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 7)(67, "div", 8)(68, "label", 9);
      \u0275\u0275text(69, "POS Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 7)(72, "div", 8)(73, "label", 9);
      \u0275\u0275text(74, "Estimation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 7)(77, "div", 8)(78, "label", 9);
      \u0275\u0275text(79, "Transaction");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 7)(82, "div", 8)(83, "label", 9);
      \u0275\u0275text(84, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "input", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 24)(87, "button", 25);
      \u0275\u0275text(88, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 26);
      \u0275\u0275text(90, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixesComponent, [{
    type: Component,
    args: [{ selector: "app-prefixes", imports: [SettingsSidebarComponent], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4 class="fs-18 fw-bold">Prefixes</h4>\n        </div>\n        <div class="card-body">\n          <form>\n            <div class="row">\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Product (SKU)</label>\n                  <input type="text" class="form-control" value="SKU -">\n                </div>\n              </div>\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Supplier</label>\n                  <input type="text" class="form-control" value="SUP -">\n                </div>\n              </div>									\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Purchase</label>\n                  <input type="text" class="form-control" value="PU -">\n                </div>\n              </div>										\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Purchase Return</label>\n                  <input type="text" class="form-control" value="PR -">\n                </div>\n              </div>\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Sales</label>\n                  <input type="text" class="form-control" value="SA -">\n                </div>\n              </div>										\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Sales Return</label>\n                  <input type="text" class="form-control" value="SR -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Customer</label>\n                  <input type="text" class="form-control" value="CT -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Expense</label>\n                  <input type="text" class="form-control" value="EX -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Stock Transfer</label>\n                  <input type="text" class="form-control" value="ST -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Stock Adjustmentt</label>\n                  <input type="text" class="form-control" value="SA -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Sales Order</label>\n                  <input type="text" class="form-control" value="SO -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">POS Invoice</label>\n                  <input type="text" class="form-control" value="PINV -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Estimation</label>\n                  <input type="text" class="form-control" value="EST -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Transaction</label>\n                  <input type="text" class="form-control" value="TRN -">\n                </div>\n              </div>	\n              <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">\n                <div class="mb-3">\n                  <label class="form-label">Employee</label>\n                  <input type="text" class="form-control" value="EMP -">\n                </div>\n              </div>	\n            </div>\n            <div class="text-end settings-bottom-btn mt-0">\n              <button type="button" class="btn btn-secondary me-2">Cancel</button>\n              <button type="submit" class="btn btn-primary">Save Changes</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrefixesComponent, { className: "PrefixesComponent", filePath: "src/app/features/pages/settings/website-settings/prefixes/prefixes.component.ts", lineNumber: 11 });
})();
export {
  PrefixesComponent
};
//# sourceMappingURL=chunk-3GNXXALJ.js.map
