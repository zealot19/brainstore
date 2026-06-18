import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  RouterLink
} from "./chunk-OWEB3HQZ.js";
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

// src/app/features/pages/hrm/payroll/payslip/payslip.component.ts
function PayslipComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function PayslipComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
var PayslipComponent = class _PayslipComponent {
  sidebar;
  routes = routes;
  isCollapsed = false;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function PayslipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayslipComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayslipComponent, selectors: [["app-payslip"]], decls: 157, vars: 5, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-secondary", 3, "routerLink"], ["data-feather", "arrow-left", 1, "feather", "icon-arrow-left", "me-2"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-end"], ["type", "button", 1, "btn", "btn-primary", "me-2"], [1, "ti", "ti-mail", "me-2"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], [1, "ti", "ti-download", "me-2"], ["type", "button", 1, "btn", "btn-danger"], [1, "ti", "ti-printer", "me-2"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "mb-1"], [1, "text-gray-9"], [1, "col-md-6", "text-end"], [1, "row", "p-3"], [1, "col-6"], [1, "table-responsive", "mb-3"], [1, "table"], [1, "thead-light"], [1, "d-flex", "align-items-center", "border-bottom", "mb-3"], [1, "mb-3", "me-3"], [1, "mb-2"], [1, "text-center"], [1, "mb-3", "page-logo-normal"], ["src", "assets/img/logo.svg", "alt", "logo", 1, "img-fluid"], [1, "mb-3", "page-logo-white"], ["src", "assets/img/logo-white.svg", "alt", "logo", 1, "img-fluid"]], template: function PayslipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Payslip");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "ul", 3)(6, "li")(7, "a", 4);
      \u0275\u0275element(8, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 8);
      \u0275\u0275listener("click", function PayslipComponent_Template_a_click_13_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(14, PayslipComponent_Conditional_14_Template, 1, 0, "i", 9);
      \u0275\u0275conditionalCreate(15, PayslipComponent_Conditional_15_Template, 1, 0, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 10)(17, "a", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275text(19, "Back to Payroll");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "h4");
      \u0275\u0275text(24, "Payslip for the Month of Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 16)(26, "button", 17);
      \u0275\u0275element(27, "i", 18);
      \u0275\u0275text(28, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275text(31, "Download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 21);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275text(34, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24)(37, "div", 25)(38, "p", 26);
      \u0275\u0275text(39, "Employee Name : ");
      \u0275\u0275elementStart(40, "span", 27);
      \u0275\u0275text(41, "Carl Evans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "Employee ID : ");
      \u0275\u0275elementStart(44, "span", 27);
      \u0275\u0275text(45, "EMP001");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 28)(47, "div", 25)(48, "p", 26);
      \u0275\u0275text(49, "Location : ");
      \u0275\u0275elementStart(50, "span", 27);
      \u0275\u0275text(51, "USA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53, "Pay Period : ");
      \u0275\u0275elementStart(54, "span", 27);
      \u0275\u0275text(55, "Jan 2025");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "div")(57, "div", 13)(58, "div", 29)(59, "div", 30)(60, "h4");
      \u0275\u0275text(61, "Earnings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 30)(63, "h4");
      \u0275\u0275text(64, "Deductions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 31);
      \u0275\u0275element(66, "div");
      \u0275\u0275elementStart(67, "table", 32)(68, "thead", 33)(69, "tr")(70, "th");
      \u0275\u0275text(71, "Pay Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th");
      \u0275\u0275text(73, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th");
      \u0275\u0275text(75, "Pay Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "tbody")(79, "tr")(80, "td");
      \u0275\u0275text(81, "Basic Salary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "td");
      \u0275\u0275text(83, "$32,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "td");
      \u0275\u0275text(85, "PF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "td");
      \u0275\u0275text(87, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "tr")(89, "td");
      \u0275\u0275text(90, "HRA Allowance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "td");
      \u0275\u0275text(92, "$0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "td");
      \u0275\u0275text(94, "Professional Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "td");
      \u0275\u0275text(96, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "tr")(98, "td");
      \u0275\u0275text(99, "Conveyance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "td");
      \u0275\u0275text(101, "$0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "td");
      \u0275\u0275text(103, "TDS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "td");
      \u0275\u0275text(105, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "tr")(107, "td");
      \u0275\u0275text(108, "Medical Allowance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "td");
      \u0275\u0275text(110, "$0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "td");
      \u0275\u0275text(112, "Loans & Others");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "td");
      \u0275\u0275text(114, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "tr")(116, "td");
      \u0275\u0275text(117, "Bonus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "td");
      \u0275\u0275text(119, "$0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "td");
      \u0275\u0275text(121, "Bonus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "td");
      \u0275\u0275text(123, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "tr")(125, "td")(126, "h6");
      \u0275\u0275text(127, "Total Earnings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "td")(129, "h6");
      \u0275\u0275text(130, "$32,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "td")(132, "h6");
      \u0275\u0275text(133, "Total Deductions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "td")(135, "h6");
      \u0275\u0275text(136, "$0.00");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(137, "div", 34)(138, "div", 35)(139, "h6", 36);
      \u0275\u0275text(140, "Net Salary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p");
      \u0275\u0275text(142, "Inwords");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 25)(144, "h6", 36);
      \u0275\u0275text(145, "$32,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p");
      \u0275\u0275text(147, "Thirty Two Thousand Only");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 37)(149, "div", 38);
      \u0275\u0275element(150, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 40);
      \u0275\u0275element(152, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "p");
      \u0275\u0275text(154, "81, Randall Drive,Hornchurch ");
      \u0275\u0275element(155, "br");
      \u0275\u0275text(156, " RM126TA.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.payrollList);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayslipComponent, [{
    type: Component,
    args: [{ selector: "app-payslip", imports: [RouterLink], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Payslip</h4>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n            class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n              matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a [routerLink]="routes.payrollList" class="btn btn-secondary"><i data-feather="arrow-left" class="feather icon-arrow-left me-2"></i>Back to Payroll</a>\n    </div>\n</div>\n\n\n<!-- Invoices -->\n<div class="card">\n    <div class="card-body">\n        <div class="d-flex justify-content-between align-items-center mb-3">\n            <h4>Payslip for the Month of Jan 2025</h4>\n            <div class="d-flex align-items-center justify-content-end">\n                <button type="button" class="btn btn-primary me-2"><i class="ti ti-mail me-2"></i>Send Email</button>\n                <button type="button" class="btn btn-secondary me-2"><i class="ti ti-download me-2"></i>Download</button>\n                <button type="button" class="btn btn-danger"><i class="ti ti-printer me-2"></i>Print</button>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-md-6">\n                <div class="mb-3">\n                    <p class="mb-1">Employee Name : <span class="text-gray-9">Carl Evans</span></p>\n                    <p>Employee ID :  <span class="text-gray-9">EMP001</span></p>\n                </div>\n            </div>\n            <div class="col-md-6 text-end">\n                <div class="mb-3">\n                    <p class="mb-1">Location :  <span class="text-gray-9">USA</span></p>\n                    <p>Pay Period :   <span class="text-gray-9">Jan 2025</span></p>\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class="card">\n                <div class="row p-3">\n                    <div class="col-6">\n                        <h4>Earnings</h4>\n                    </div>\n                    <div class="col-6">\n                        <h4>Deductions</h4>\n                    </div>\n                </div>\n                <div class="table-responsive mb-3">\n                    <div>\n                        \n                    </div>\n                    <table class="table">\n                        <thead class="thead-light">\n                            <tr>\n                                <th>Pay Type</th>\n                                <th>Amount</th>\n                                <th>Pay Type</th>\n                                <th>Amount</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Basic Salary</td>\n                                <td>$32,000</td>\n                                <td>PF</td>\n                                <td>$0.00</td>\n                            </tr>\n                            <tr>\n                                <td>HRA Allowance</td>\n                                <td>$0.00</td>\n                                <td>Professional  Tax</td>\n                                <td>$0.00</td>\n                            </tr>\n                            <tr>\n                                <td>Conveyance</td>\n                                <td>$0.00</td>\n                                <td>TDS</td>\n                                <td>$0.00</td>\n                            </tr>\n                            <tr>\n                                <td>Medical Allowance</td>\n                                <td>$0.00</td>\n                                <td>Loans & Others</td>\n                                <td>$0.00</td>\n                            </tr>\n                            <tr>\n                                <td>Bonus</td>\n                                <td>$0.00</td>\n                                <td>Bonus</td>\n                                <td>$0.00</td>\n                            </tr>\n                            <tr>\n                                <td><h6>Total Earnings</h6></td>\n                                <td><h6>$32,000</h6></td>\n                                <td><h6>Total Deductions</h6></td>\n                                <td><h6>$0.00</h6></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class="d-flex align-items-center border-bottom mb-3">\n            <div class="mb-3 me-3">\n                <h6 class="mb-2">Net Salary</h6>\n                <p>Inwords</p>\n            </div>\n            <div class="mb-3">\n                <h6 class="mb-2">$32,000</h6>\n                <p>Thirty Two Thousand Only</p>\n            </div>\n        </div>\n        <div class="text-center">\n            <div class="mb-3 page-logo-normal">\n                <img src="assets/img/logo.svg" class="img-fluid" alt="logo">\n            </div>\n            <div class="mb-3 page-logo-white">\n                <img src="assets/img/logo-white.svg" class="img-fluid" alt="logo">\n            </div>\n            <p>81, Randall Drive,Hornchurch <br>\n                RM126TA.</p>\n        </div>\n    </div>\n</div>\n<!-- /Invoices -->' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayslipComponent, { className: "PayslipComponent", filePath: "src/app/features/pages/hrm/payroll/payslip/payslip.component.ts", lineNumber: 12 });
})();
export {
  PayslipComponent
};
//# sourceMappingURL=chunk-O7AVEYRK.js.map
