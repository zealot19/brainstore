import {
  MatSortModule
} from "./chunk-AH53BX23.js";
import "./chunk-6VIR33HH.js";
import {
  MatOption,
  MatSelect,
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
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
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
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/annual-report/annual-report.component.ts
var _c0 = () => ({ standalone: true });
function AnnualReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AnnualReportComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
var AnnualReportComponent = class _AnnualReportComponent {
  sidebar;
  isCollapsed = false;
  datepicker;
  bsConfig;
  selectedYear;
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.selectedYear = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1);
    this.bsConfig = {
      minMode: "year",
      dateInputFormat: "YYYY"
      // Display only the year in the input
    };
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function AnnualReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnualReportComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnualReportComponent, selectors: [["app-annual-report"]], viewQuery: function AnnualReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(BsDatepickerDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datepicker = _t.first);
    }
  }, decls: 206, vars: 8, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card"], [1, "card-body"], [1, "row", "row-gap-2", "align-items-end"], [1, "col-md-3"], [1, "ngx-dates", "custom-ngxdate"], [1, "form-label"], [1, "input-icon", "w-100", "position-relative"], [1, "input-icon-addon"], [1, "ti", "ti-calendar", "text-gray-9"], ["type", "text", "placeholder", "Select Year", "container", ".ngx-year", "bsDatepicker", "", "container", ".ngx-dates", 1, "form-control", "yearpicker", 3, "ngModelChange", "bsConfig", "ngModel", "ngModelOptions"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "btn", "btn-primary"], [1, "card-header"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table"], [1, "thead-light"], [1, "bg-light", "fw-bold", "p-3", "fs-16"]], template: function AnnualReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Annual Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "View Reports of Annual Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function AnnualReportComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, AnnualReportComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, AnnualReportComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "form")(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "label", 13);
      \u0275\u0275text(22, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "span", 15);
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function AnnualReportComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 11)(28, "div")(29, "label", 13);
      \u0275\u0275text(30, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-select", 18)(32, "mat-option", 19);
      \u0275\u0275text(33, "All Stores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-option", 19);
      \u0275\u0275text(35, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-option", 19);
      \u0275\u0275text(37, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-option", 19);
      \u0275\u0275text(39, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 11)(41, "button", 20);
      \u0275\u0275text(42, "Generate Report");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(43, "div", 8)(44, "div", 21)(45, "h4");
      \u0275\u0275text(46, "2025 Reports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 22)(48, "div", 23)(49, "table", 24)(50, "thead", 25)(51, "tr");
      \u0275\u0275element(52, "th");
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54, "Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56, "Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th");
      \u0275\u0275text(58, "Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th");
      \u0275\u0275text(60, "Apr 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "tbody")(62, "tr")(63, "td");
      \u0275\u0275text(64, "January");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "td");
      \u0275\u0275text(66, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "td");
      \u0275\u0275text(68, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td");
      \u0275\u0275text(70, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "td");
      \u0275\u0275text(72, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "tr")(74, "td");
      \u0275\u0275text(75, "Febuary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "td");
      \u0275\u0275text(77, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "td");
      \u0275\u0275text(79, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "td");
      \u0275\u0275text(81, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "td");
      \u0275\u0275text(83, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "tr")(85, "td");
      \u0275\u0275text(86, "March");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "td");
      \u0275\u0275text(88, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "td");
      \u0275\u0275text(90, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "td");
      \u0275\u0275text(92, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "td");
      \u0275\u0275text(94, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "tr")(96, "td");
      \u0275\u0275text(97, "April");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "td");
      \u0275\u0275text(99, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "td");
      \u0275\u0275text(101, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "td");
      \u0275\u0275text(103, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "td");
      \u0275\u0275text(105, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "tr")(107, "td");
      \u0275\u0275text(108, "May");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "td");
      \u0275\u0275text(110, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "td");
      \u0275\u0275text(112, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "td");
      \u0275\u0275text(114, "$50,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "td");
      \u0275\u0275text(116, "$50,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "tr")(118, "td");
      \u0275\u0275text(119, "June");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "td");
      \u0275\u0275text(121, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "td");
      \u0275\u0275text(123, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "td");
      \u0275\u0275text(125, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "td");
      \u0275\u0275text(127, "$30,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "tr")(129, "td");
      \u0275\u0275text(130, "July");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "td");
      \u0275\u0275text(132, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "td");
      \u0275\u0275text(134, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "td");
      \u0275\u0275text(136, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "td");
      \u0275\u0275text(138, "$30,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "tr")(140, "td");
      \u0275\u0275text(141, "August");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "td");
      \u0275\u0275text(143, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "td");
      \u0275\u0275text(145, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "td");
      \u0275\u0275text(147, "$30,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "td");
      \u0275\u0275text(149, "$30,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "tr")(151, "td");
      \u0275\u0275text(152, "September");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "td");
      \u0275\u0275text(154, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "td");
      \u0275\u0275text(156, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "td");
      \u0275\u0275text(158, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "td");
      \u0275\u0275text(160, "$7,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "tr")(162, "td");
      \u0275\u0275text(163, "October");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "td");
      \u0275\u0275text(165, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "td");
      \u0275\u0275text(167, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "td");
      \u0275\u0275text(169, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "td");
      \u0275\u0275text(171, "$7,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "tr")(173, "td");
      \u0275\u0275text(174, "November");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "td");
      \u0275\u0275text(176, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "td");
      \u0275\u0275text(178, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "td");
      \u0275\u0275text(180, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "td");
      \u0275\u0275text(182, "$7,000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "tr")(184, "td");
      \u0275\u0275text(185, "December");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "td");
      \u0275\u0275text(187, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "td");
      \u0275\u0275text(189, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "td");
      \u0275\u0275text(191, "$7,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "td");
      \u0275\u0275text(193, "$7,000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "tfoot")(195, "tr")(196, "td", 26);
      \u0275\u0275text(197, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "td", 26);
      \u0275\u0275text(199, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "td", 26);
      \u0275\u0275text(201, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "td", 26);
      \u0275\u0275text(203, "$8,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "td", 26);
      \u0275\u0275text(205, "$8,000");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275property("bsConfig", ctx.bsConfig);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnualReportComponent, [{
    type: Component,
    args: [{ selector: "app-annual-report", imports: [MatSelectModule, FormsModule, MatSortModule, BsDatepickerModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Annual Report</h4>\n            <h6>View Reports of Annual Report</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n            class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n              matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n</div>\n<div class="card">\n    <div class="card-body">\n        <form>\n            <div class="row row-gap-2 align-items-end">\n                <div class="col-md-3">\n                    <div class="ngx-dates custom-ngxdate">\n                        <label class="form-label">Date</label>\n                        <div class="input-icon w-100 position-relative">\n                            <span class="input-icon-addon">\n                                <i class="ti ti-calendar text-gray-9"></i>\n                            </span>\n                            <input\n                            type="text"\n                            placeholder="Select Year"\n                            class="form-control yearpicker"\n                            container=".ngx-year"\n                            bsDatepicker\n                            container=".ngx-dates"\n                            [bsConfig]="bsConfig"\n                            [(ngModel)]="selectedYear"\n                            [ngModelOptions]="{ standalone: true }"\n                          />\n                        </div>\n                    </div>\n                </div>\n                <div class="col-md-3">\n                    <div>\n                        <label class="form-label">Store</label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">All Stores</mat-option>\n                            <mat-option value="1">Electro Mart</mat-option>\n                            <mat-option value="1">Quantum Gadgets</mat-option>\n                            <mat-option value="1">Prime Bazaar</mat-option>\n                        </mat-select>\n                    </div>\n                </div>\n                <div class="col-md-3">\n                    <button class="btn btn-primary">Generate Report</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class="card">\n    <div class="card-header">\n        <h4>2025 Reports</h4>\n    </div>\n    <div class="card-body p-0">\n        <div class="table-responsive">\n            <table class="table">\n                <thead class="thead-light">\n                    <tr>\n                        <th>\n                        </th>\n                        <th>Jan 2025</th>\n                        <th>Feb 2025</th>\n                        <th>Mar 2025</th>\n                        <th>Apr 2025</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>January</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                    </tr>\n                    <tr>\n                        <td>Febuary</td>\n                        <td>$30,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                    </tr>\n                    <tr>\n                        <td>March</td>\n                        <td>$7,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                    </tr>\n                    <tr>\n                        <td>April</td>\n                        <td>$7,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                    </tr>\n                    <tr>\n                        <td>May</td>\n                        <td>$7,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                        <td>$50,000</td>\n                    </tr>\n                    <tr>\n                        <td>June</td>\n                        <td>$7,000</td>\n                        <td>$30,000</td>\n                        <td>$30,000</td>\n                        <td>$30,000</td>\n                    </tr>\n                    <tr>\n                        <td>July</td>\n                        <td>$7,000</td>\n                        <td>$30,000</td>\n                        <td>$30,000</td>\n                        <td>$30,000</td>\n                    </tr>\n                    <tr>\n                        <td>August</td>\n                        <td>$7,000</td>\n                        <td>$30,000</td>\n                        <td>$30,000</td>\n                        <td>$30,000</td>\n                    </tr>\n                    <tr>\n                        <td>September</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                    </tr>\n                    <tr>\n                        <td>October</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                    </tr>\n                    <tr>\n                        <td>November</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                    </tr>\n                    <tr>\n                        <td>December</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                        <td>$7,000</td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td class="bg-light fw-bold p-3 fs-16">Total</td>\n                        <td class="bg-light fw-bold p-3 fs-16">$8,000</td>\n                        <td class="bg-light fw-bold p-3 fs-16">$8,000</td>\n                        <td class="bg-light fw-bold p-3 fs-16">$8,000</td>\n                        <td class="bg-light fw-bold p-3 fs-16">$8,000</td>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: SidebarService }], { datepicker: [{
    type: ViewChild,
    args: [BsDatepickerDirective, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnualReportComponent, { className: "AnnualReportComponent", filePath: "src/app/features/pages/reports/annual-report/annual-report.component.ts", lineNumber: 15 });
})();
export {
  AnnualReportComponent
};
//# sourceMappingURL=chunk-PDAECZF7.js.map
