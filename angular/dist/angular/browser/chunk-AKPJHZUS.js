import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
import {
  MatSelectModule
} from "./chunk-MEEHDAF7.js";
import "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-V3LRYX2J.js";
import "./chunk-NRBRKDTR.js";
import "./chunk-AIOFIKT2.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import "./chunk-DFPDGJ2J.js";
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
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/profit-and-loss/profit-and-loss.component.ts
function ProfitAndLossComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function ProfitAndLossComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
var ProfitAndLossComponent = class _ProfitAndLossComponent {
  sidebar;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function ProfitAndLossComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfitAndLossComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfitAndLossComponent, selectors: [["app-profit-and-loss"]], decls: 194, vars: 4, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "me-3"], [1, "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "table-responsive", "mb-4"], [1, "table"], [1, "thead-light"], [1, "border-end"], [1, "fw-bold"], ["colspan", "6"], [1, "fw0bold"]], template: function ProfitAndLossComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Profit & Loss");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Profit & Loss");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function ProfitAndLossComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, ProfitAndLossComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, ProfitAndLossComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9);
      \u0275\u0275element(17, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "a", 11);
      \u0275\u0275text(20, "Generate Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "table", 13)(23, "thead", 14)(24, "tr");
      \u0275\u0275element(25, "th");
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Apr 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Jun 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td", 15)(41, "h6", 16);
      \u0275\u0275text(42, "Income");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "td", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "tr")(45, "td", 15);
      \u0275\u0275text(46, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "td");
      \u0275\u0275text(48, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "td");
      \u0275\u0275text(50, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "td");
      \u0275\u0275text(52, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "td");
      \u0275\u0275text(54, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "td");
      \u0275\u0275text(56, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "td");
      \u0275\u0275text(58, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "tr")(60, "td", 15);
      \u0275\u0275text(61, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "td");
      \u0275\u0275text(63, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "td");
      \u0275\u0275text(65, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "td");
      \u0275\u0275text(67, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "td");
      \u0275\u0275text(69, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "td");
      \u0275\u0275text(71, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "td");
      \u0275\u0275text(73, "$30,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "tr")(75, "td", 15);
      \u0275\u0275text(76, "Purchase Return");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "td");
      \u0275\u0275text(78, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "td");
      \u0275\u0275text(80, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "td");
      \u0275\u0275text(82, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "td");
      \u0275\u0275text(84, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "td");
      \u0275\u0275text(86, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "td");
      \u0275\u0275text(88, "$7,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "tr")(90, "td", 15)(91, "h6", 18);
      \u0275\u0275text(92, "Gross Profit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "td")(94, "h6", 18);
      \u0275\u0275text(95, "$8,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "td")(97, "h6", 18);
      \u0275\u0275text(98, "$8,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "td")(100, "h6", 18);
      \u0275\u0275text(101, "$8,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "td")(103, "h6", 18);
      \u0275\u0275text(104, "$8,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "td")(106, "h6", 18);
      \u0275\u0275text(107, "$8,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "td")(109, "h6", 18);
      \u0275\u0275text(110, "$8,000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "tr")(112, "td", 15)(113, "h6", 16);
      \u0275\u0275text(114, "Expenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(115, "td", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "tr")(117, "td", 15);
      \u0275\u0275text(118, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "td");
      \u0275\u0275text(120, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "td");
      \u0275\u0275text(122, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "td");
      \u0275\u0275text(124, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "td");
      \u0275\u0275text(126, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "td");
      \u0275\u0275text(128, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "td");
      \u0275\u0275text(130, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "tr")(132, "td", 15);
      \u0275\u0275text(133, "Purrchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "td");
      \u0275\u0275text(135, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "td");
      \u0275\u0275text(137, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td");
      \u0275\u0275text(139, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "td");
      \u0275\u0275text(141, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "td");
      \u0275\u0275text(143, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "td");
      \u0275\u0275text(145, "$30,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "tr")(147, "td", 15)(148, "h6", 16);
      \u0275\u0275text(149, "Sales Return");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "td");
      \u0275\u0275text(151, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "td");
      \u0275\u0275text(153, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "td");
      \u0275\u0275text(155, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "td");
      \u0275\u0275text(157, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "td");
      \u0275\u0275text(159, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "td");
      \u0275\u0275text(161, "$7,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "tr")(163, "td", 15)(164, "h6", 16);
      \u0275\u0275text(165, "Total Expense");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "td");
      \u0275\u0275text(167, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "td");
      \u0275\u0275text(169, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "td");
      \u0275\u0275text(171, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "td");
      \u0275\u0275text(173, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "td");
      \u0275\u0275text(175, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "td");
      \u0275\u0275text(177, "$8,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "tr")(179, "td", 15)(180, "h6", 16);
      \u0275\u0275text(181, "Net Profit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "td");
      \u0275\u0275text(183, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "td");
      \u0275\u0275text(185, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "td");
      \u0275\u0275text(187, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "td");
      \u0275\u0275text(189, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "td");
      \u0275\u0275text(191, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "td");
      \u0275\u0275text(193, "$8,000");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
    }
  }, dependencies: [DateRangePickerComponent, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfitAndLossComponent, [{
    type: Component,
    args: [{ selector: "app-profit-and-loss", imports: [DateRangePickerComponent, MatSelectModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Profit & Loss</h4>\n      <h6>Manage your Profit & Loss</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>\n\n<div class="d-flex align-items-center justify-content-end">\n  <div class=" me-3">\n   <app-date-range-picker/>\n  </div>\n  <div class="mb-3">\n    <a href="javascript:void(0);" class="btn btn-primary">Generate Report</a>\n  </div>\n</div>\n<div class="table-responsive mb-4">\n  <table class="table">\n    <thead class="thead-light">\n      <tr>\n        <th>\n        </th>\n        <th>Jan 2025</th>\n        <th>Feb 2025</th>\n        <th>Mar 2025</th>\n        <th>Apr 2025</th>\n        <th>May 2025</th>\n        <th>Jun 2025</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-end"><h6 class="fw-bold">Income</h6></td>\n        <td colspan="6"></td>\n      </tr>\n      <tr>\n        <td class="border-end">Sales</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n      </tr>\n      <tr>\n        <td class="border-end">Service</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n      </tr>\n      <tr>\n        <td class="border-end">Purchase Return</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n      </tr>\n      <tr>\n        <td class="border-end"><h6 class="fw0bold">Gross Profit</h6></td>\n        <td><h6 class="fw0bold">$8,000</h6></td>\n        <td><h6 class="fw0bold">$8,000</h6></td>\n        <td><h6 class="fw0bold">$8,000</h6></td>\n        <td><h6 class="fw0bold">$8,000</h6></td>\n        <td><h6 class="fw0bold">$8,000</h6></td>\n        <td><h6 class="fw0bold">$8,000</h6></td>\n      </tr>\n      <tr>\n        <td class="border-end"><h6 class="fw-bold">Expenses</h6></td>\n        <td colspan="6"></td>\n      </tr>\n      <tr>\n        <td class="border-end">Sales</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n        <td>$50,000</td>\n      </tr>\n      <tr>\n        <td class="border-end">Purrchase</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n        <td>$30,000</td>\n      </tr>\n      <tr>\n        <td class="border-end"><h6 class="fw-bold">Sales Return</h6></td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n        <td>$7,000</td>\n      </tr>\n      <tr>\n        <td class="border-end"><h6 class="fw-bold">Total Expense</h6></td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n      </tr>\n      <tr>\n        <td class="border-end"><h6 class="fw-bold">Net Profit</h6></td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n        <td>$8,000</td>\n      </tr>\n    </tbody>\n  </table>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfitAndLossComponent, { className: "ProfitAndLossComponent", filePath: "src/app/features/pages/reports/profit-and-loss/profit-and-loss.component.ts", lineNumber: 13 });
})();
export {
  ProfitAndLossComponent
};
//# sourceMappingURL=chunk-AKPJHZUS.js.map
