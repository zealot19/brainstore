import {
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DFPDGJ2J.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/finance/trial-balance/trial-balance.component.ts
var _c0 = () => ({ adaptivePosition: true });
function TrialBalanceComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function TrialBalanceComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
var TrialBalanceComponent = class _TrialBalanceComponent {
  sidebar;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  isCollapsed = false;
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function TrialBalanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrialBalanceComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrialBalanceComponent, selectors: [["app-trial-balance"]], decls: 138, vars: 7, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card"], [1, "card-body"], [1, "row", "align-items-end"], [1, "col-sm-3"], [1, "dropdown", "me-2"], [1, "form-label"], [1, "input-icon-start", "position-relative", "ngx-dates"], [1, "input-icon-left"], [1, "ti", "ti-calendar"], ["type", "text", "container", ".ngx-dates", "placeholder", "dd/mm/yyyy - dd/mm/yyyy", "bsDaterangepicker", "", 1, "form-control", "date-range", "bookingrange", 3, "ngModelChange", "ngModel", "bsConfig"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "btn-white", "justify-content-between", "btn-md", "w-100"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "btn", "btn-primary", "shadow-none"], [1, "table-responsive"], [1, "table", "datanew"], [1, "p-2", "border-1", "fw-bold", "text-gray-9"], [1, "p-2", "border-1"], [1, "border-bottom"], [1, "bg-secondary-transparent", "text-gray-9", "fw-bold", "p-3"]], template: function TrialBalanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Trial Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "View Your Balance Sheet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275listener("click", function TrialBalanceComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, TrialBalanceComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, TrialBalanceComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "label", 18);
      \u0275\u0275text(27, "Choose Your Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 19)(29, "span", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function TrialBalanceComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.bsRangeValue, $event) || (ctx.bsRangeValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 16)(33, "div", 23)(34, "label", 18);
      \u0275\u0275text(35, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 24);
      \u0275\u0275text(37, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 25)(39, "li")(40, "a", 26);
      \u0275\u0275text(41, "Zephyr Indira");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 26);
      \u0275\u0275text(44, "Quillon Elysia");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 16)(46, "button", 27);
      \u0275\u0275text(47, "Submit");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 14)(50, "div", 28)(51, "table", 29)(52, "thead")(53, "tr")(54, "th");
      \u0275\u0275text(55, "Account Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, "Debit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "tbody")(61, "tr")(62, "td", 30);
      \u0275\u0275text(63, "Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "td", 31)(65, "td", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "tr")(67, "td", 31);
      \u0275\u0275text(68, "Cash in register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td", 31);
      \u0275\u0275text(70, "$5,000");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "td", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "tr")(73, "td", 31);
      \u0275\u0275text(74, "Bank Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "td", 31);
      \u0275\u0275text(76, "$12,000");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "td", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "tr")(79, "td", 31);
      \u0275\u0275text(80, "Accounts Receivable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "td", 31);
      \u0275\u0275text(82, "$3,000");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "td", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "tr")(85, "td", 31);
      \u0275\u0275text(86, "Inventory (POS stock)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "td", 31);
      \u0275\u0275text(88, "$10,000");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "td", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "tr", 32)(91, "td", 30);
      \u0275\u0275text(92, "Total Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "td", 30);
      \u0275\u0275text(94, "$37,000");
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "td", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "tr")(97, "td", 30);
      \u0275\u0275text(98, "Liabilities");
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "td", 31)(100, "td", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "tr")(102, "td", 31);
      \u0275\u0275text(103, "Accounts Payable");
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "td", 31);
      \u0275\u0275elementStart(105, "td", 31);
      \u0275\u0275text(106, "$2,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "tr")(108, "td", 31);
      \u0275\u0275text(109, "Short-term Loans");
      \u0275\u0275elementEnd();
      \u0275\u0275element(110, "td", 31);
      \u0275\u0275elementStart(111, "td", 31);
      \u0275\u0275text(112, "$4,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "tr")(114, "td", 31);
      \u0275\u0275text(115, "Sales Tax Payable");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "td", 31);
      \u0275\u0275elementStart(117, "td", 31);
      \u0275\u0275text(118, "$500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "tr")(120, "td", 31);
      \u0275\u0275text(121, "Wages Payable");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "td", 31);
      \u0275\u0275elementStart(123, "td", 31);
      \u0275\u0275text(124, "$1,200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "tr")(126, "td", 30);
      \u0275\u0275text(127, "Total Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "td", 31);
      \u0275\u0275elementStart(129, "td", 30);
      \u0275\u0275text(130, "$20,700");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "tr")(132, "td", 33);
      \u0275\u0275text(133, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "td", 33);
      \u0275\u0275text(135, "$37,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "td", 33);
      \u0275\u0275text(137, "$37,000");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.bsRangeValue);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(6, _c0));
    }
  }, dependencies: [BsDatepickerModule, BsDaterangepickerDirective, BsDaterangepickerInputDirective, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrialBalanceComponent, [{
    type: Component,
    args: [{ selector: "app-trial-balance", imports: [BsDatepickerModule, FormsModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Trial Balance</h4>\n            <h6>View Your Balance Sheet</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"\n              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse"\n              id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n              }\n              @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n              }</a>\n          </li>\n    </ul>\n</div>\n<div class="card">\n  <div class="card-body">\n    <div class="row align-items-end">\n          <div class="col-sm-3">\n          <div class="dropdown me-2">\n            <label class="form-label">Choose Your Date</label>		\n            <div class="input-icon-start position-relative ngx-dates" >\n              <span class="input-icon-left">\n                  <i class="ti ti-calendar"></i>\n              </span>\n              <input type="text" class="form-control date-range bookingrange" container=".ngx-dates" placeholder="dd/mm/yyyy - dd/mm/yyyy" bsDaterangepicker [(ngModel)]="bsRangeValue"  [bsConfig]="{ adaptivePosition: true }">\n          </div>  		\n          <!-- <div class="input-groupicon calender-input balance-sheet-date custom-ngxdate ngxdate1">\n          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar info-img"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>\n          <input type="text" class="datetimepicker w-100 " bsDatepicker container=".ngxdate1" placeholder="01-Jan-2025 - 12-Dec-2025">\n          </div> -->\n          </div>\n        </div>\n        <div class="col-sm-3">\n          <div class="dropdown">\n            <label class="form-label">Store</label>\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white justify-content-between btn-md w-100" data-bs-toggle="dropdown" aria-expanded="false">\n              Select\n            </a>\n            <ul class="dropdown-menu dropdown-menu-end p-3" >\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Zephyr Indira</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Quillon Elysia</a>\n              </li>										\n            </ul>\n          </div>\n        </div>\n        <div class="col-sm-3">\n          <button class="btn btn-primary shadow-none">Submit</button>\n        </div>\n      </div>\n  </div>\n</div>\n<!-- /product list -->\n          <div class="card">\n            <div class="card-body">\n              <div class="table-responsive">\n                  <table class="table datanew">\n                      <thead>\n                          <tr>						\n                              <th>Account Name</th>\n                              <th>Debit</th>\n                              <th>Credit</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                       \n                          <tr>\n                              <td class="p-2 border-1 fw-bold text-gray-9">Assets</td>\n                              <td class="p-2 border-1"></td>\n                              <td class="p-2 border-1"></td>\n                            </tr>  \n                            <tr>\n                              <td class="p-2 border-1">Cash in register</td>\n                              <td class="p-2 border-1">$5,000</td>\n                              <td class="p-2 border-1"></td>\n                            </tr>  \n                            <tr>\n                              <td class="p-2 border-1">Bank Accounts</td>\n                              <td class="p-2 border-1">$12,000</td>\n                              <td class="p-2 border-1"></td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1">Accounts Receivable</td>\n                              <td class="p-2 border-1">$3,000</td>\n                              <td class="p-2 border-1"></td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1">Inventory (POS stock)</td>\n                              <td class="p-2 border-1">$10,000</td>\n                              <td class="p-2 border-1"></td>\n                            </tr> \n                            <tr class="border-bottom">\n                              <td class="p-2 border-1 fw-bold text-gray-9">Total Assets</td>\n                              <td class="p-2 border-1 fw-bold text-gray-9">$37,000</td>\n                              <td class="p-2 border-1"></td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1 fw-bold text-gray-9">Liabilities</td>\n                              <td class="p-2 border-1"></td>\n                              <td class="p-2 border-1"></td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1">Accounts Payable</td>\n                              <td class="p-2 border-1"></td>\n                              <td class="p-2 border-1">$2,000</td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1">Short-term Loans</td>\n                              <td class="p-2 border-1"></td>\n                              <td class="p-2 border-1">$4,000</td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1">Sales Tax Payable</td>\n                              <td class="p-2 border-1"></td>\n                              <td class="p-2 border-1">$500</td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1">Wages Payable</td>\n                              <td class="p-2 border-1"></td>\n                              <td class="p-2 border-1">$1,200</td>\n                            </tr> \n                            <tr>\n                              <td class="p-2 border-1 fw-bold text-gray-9">Total Assets</td>\n                              <td class="p-2 border-1"></td>\n                              <td class="p-2 border-1 fw-bold text-gray-9">$20,700</td>\n                            </tr> \n                            <tr>\n                              <td class="bg-secondary-transparent text-gray-9 fw-bold p-3">Total</td>\n                              <td class="bg-secondary-transparent text-gray-9 fw-bold p-3">$37,000</td>\n                              <td class="bg-secondary-transparent text-gray-9 fw-bold p-3">$37,000</td>\n                            </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n          </div>\n    \n<!-- /product list -->' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrialBalanceComponent, { className: "TrialBalanceComponent", filePath: "src/app/features/pages/finance/trial-balance/trial-balance.component.ts", lineNumber: 13 });
})();
export {
  TrialBalanceComponent
};
//# sourceMappingURL=chunk-XO2DD5RP.js.map
