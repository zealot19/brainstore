import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
import {
  MatTableDataSource
} from "./chunk-VP4CMUYD.js";
import {
  PaginationService
} from "./chunk-24R3OVTU.js";
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
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import {
  DataService
} from "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  Router
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/sales-report/sales-report.component.ts
function SalesReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function SalesReportComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function SalesReportComponent_For_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 56)(4, "div", 57)(5, "a", 58);
    \u0275\u0275element(6, "img", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.SKU);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.soldQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.soldAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.instockQty);
  }
}
function SalesReportComponent_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var SalesReportComponent = class _SalesReportComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  isSelected;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  routes = routes;
  // pagination variables
  tableData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  row = true;
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.salesReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSalesReport().subscribe((apiRes) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
  }
  searchData(value) {
    this.searchDataValue = value.trim().toLowerCase();
    this.dataSource.filter = this.searchDataValue;
    this.tableData = this.dataSource.filteredData;
    this.row = this.tableData.length > 0;
    if (this.searchDataValue !== "") {
      this.pagination.calculatePageSize.next({
        totalData: this.tableData.length,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.tableData.map((_, i) => i + 1)
        // Generates serials like [1, 2, 3...]
      });
    } else {
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    }
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
  static \u0275fac = function SalesReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesReportComponent, selectors: [["app-sales-report"]], decls: 142, vars: 5, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "d-flex"], [1, "card", "border", "border-success", "sale-widget", "flex-fill"], [1, "card-body", "d-flex", "align-items-center"], [1, "sale-icon", "bg-success", "text-white"], [1, "ti", "ti-align-box-bottom-left-filled", "fs-24"], [1, "ms-2"], [1, "fw-medium", "mb-1"], [1, "card", "border", "border-info", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-info", "text-white"], [1, "card", "border", "border-orange", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-orange", "text-white"], [1, "ti", "ti-moneybag", "fs-24"], [1, "card", "border", "border-danger", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-danger", "text-white"], [1, "ti", "ti-alert-circle-filled", "fs-24"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "col-md-4"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body", "p-0"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "SKU"], ["mat-sort-header", "productName"], ["mat-sort-header", "brand"], ["mat-sort-header", "category"], ["mat-sort-header", "soldQty"], ["mat-sort-header", "soldAmount"], ["mat-sort-header", "instockQty"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "me-2"], ["href", "javascript:void(0);"], ["alt", "product", 3, "src"], ["colspan", "12", 1, "text-center"]], template: function SalesReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Sales Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Sales Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function SalesReportComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, SalesReportComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, SalesReportComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "span", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "p", 15);
      \u0275\u0275text(23, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "h3");
      \u0275\u0275text(26, "$4,56,000");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 16)(29, "div", 11)(30, "span", 17);
      \u0275\u0275element(31, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 14)(33, "p", 15);
      \u0275\u0275text(34, "Total Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div")(36, "h3");
      \u0275\u0275text(37, "$2,56,42");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(38, "div", 9)(39, "div", 18)(40, "div", 11)(41, "span", 19);
      \u0275\u0275element(42, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 14)(44, "p", 15);
      \u0275\u0275text(45, "Total Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div")(47, "h3");
      \u0275\u0275text(48, "$1,52,45");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(49, "div", 9)(50, "div", 21)(51, "div", 11)(52, "span", 22);
      \u0275\u0275element(53, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 14)(55, "p", 15);
      \u0275\u0275text(56, "Overdue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div")(58, "h3");
      \u0275\u0275text(59, "$2,56,12");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(60, "div", 24)(61, "div", 25)(62, "form")(63, "div", 26)(64, "div", 27)(65, "div", 8)(66, "div", 28)(67, "div", 29)(68, "label", 30);
      \u0275\u0275text(69, "Choose Date\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 28)(72, "div", 31)(73, "label", 30);
      \u0275\u0275text(74, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "mat-select", 32)(76, "mat-option", 33);
      \u0275\u0275text(77, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 33);
      \u0275\u0275text(79, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "mat-option", 33);
      \u0275\u0275text(81, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "mat-option", 33);
      \u0275\u0275text(83, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "div", 28)(85, "div", 31)(86, "label", 30);
      \u0275\u0275text(87, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-select", 32)(89, "mat-option", 33);
      \u0275\u0275text(90, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 33);
      \u0275\u0275text(92, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 33);
      \u0275\u0275text(94, "Nike Jordan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "mat-option", 33);
      \u0275\u0275text(96, "Amazon Echo Dot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-option", 33);
      \u0275\u0275text(98, "Red Premium Satchel");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(99, "div", 34)(100, "div", 31)(101, "button", 35);
      \u0275\u0275text(102, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(103, "div", 36)(104, "div", 37)(105, "div")(106, "h4");
      \u0275\u0275text(107, "Sales Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "ul", 3)(109, "li", 38)(110, "a", 39);
      \u0275\u0275element(111, "img", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "li", 38)(113, "a", 41);
      \u0275\u0275element(114, "img", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "li")(116, "a", 43);
      \u0275\u0275element(117, "i", 44);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 45)(119, "div", 46)(120, "table", 47);
      \u0275\u0275listener("matSortChange", function SalesReportComponent_Template_table_matSortChange_120_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(121, "thead", 48)(122, "tr")(123, "th", 49);
      \u0275\u0275text(124, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 50);
      \u0275\u0275text(126, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 51);
      \u0275\u0275text(128, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 52);
      \u0275\u0275text(130, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 53);
      \u0275\u0275text(132, "Sold Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 54);
      \u0275\u0275text(134, "Sold Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 55);
      \u0275\u0275text(136, "Instock Qty");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "tbody");
      \u0275\u0275repeaterCreate(138, SalesReportComponent_For_139_Template, 19, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(140, SalesReportComponent_Conditional_140_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(141, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(124);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 140 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesReportComponent, [{
    type: Component,
    args: [{ selector: "app-sales-report", imports: [MatSelectModule, FormsModule, CustomPaginationComponent, MatSortModule, DateRangePickerComponent], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Sales Report</h4>\n      <h6>Manage Your Sales Report</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>\n<div class="row">\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card border border-success sale-widget flex-fill">\n      <div class="card-body d-flex align-items-center">\n        <span class="sale-icon bg-success text-white">\n          <i class="ti ti-align-box-bottom-left-filled fs-24"></i>\n        </span>\n        <div class="ms-2">\n          <p class="fw-medium mb-1">Total Amount</p>\n          <div>\n            <h3>$4,56,000</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card border border-info sale-widget flex-fill">\n      <div class="card-body d-flex align-items-center">\n        <span class="sale-icon bg-info text-white">\n          <i class="ti ti-align-box-bottom-left-filled fs-24"></i>\n        </span>\n        <div class="ms-2">\n          <p class="fw-medium mb-1">Total Paid</p>\n          <div>\n            <h3>$2,56,42</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card border border-orange sale-widget flex-fill">\n      <div class="card-body d-flex align-items-center">\n        <span class="sale-icon bg-orange text-white">\n          <i class="ti ti-moneybag fs-24"></i>\n        </span>\n        <div class="ms-2">\n          <p class="fw-medium mb-1">Total Unpaid</p>\n          <div>\n            <h3>$1,52,45</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card border border-danger sale-widget flex-fill">\n      <div class="card-body d-flex align-items-center">\n        <span class="sale-icon bg-danger text-white">\n          <i class="ti ti-alert-circle-filled fs-24"></i>\n        </span>\n        <div class="ms-2">\n          <p class="fw-medium mb-1">Overdue</p>\n          <div>\n            <h3>$2,56,12</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="card border-0">\n  <div class="card-body pb-1">\n    <form>\n      <div class="row align-items-end">\n        <div class="col-lg-10">\n          <div class="row">\n            <div class="col-md-4">\n              <div class="mb-3 custom-ngxdate">\n                <label class="form-label">Choose Date\xA0</label>\n                <app-date-range-picker/>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="mb-3">\n                <label class="form-label">Store</label>\n               <mat-select class="custom-mat-select select" placeholder="All">\n                  <mat-option value="1">All</mat-option>\n                  <mat-option value="1">Electro Mart</mat-option>\n                  <mat-option value="1">Quantum Gadgets</mat-option>\n                  <mat-option value="1">Prime Bazaar</mat-option>\n                </mat-select>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="mb-3">\n                <label class="form-label">Products</label>\n               <mat-select class="custom-mat-select select" placeholder="All">\n                  <mat-option value="1">All</mat-option>\n                  <mat-option value="1">Lenovo IdeaPad 3</mat-option>\n                  <mat-option value="1">Nike Jordan</mat-option>\n                  <mat-option value="1">Amazon Echo Dot</mat-option>\n                  <mat-option value="1">Red Premium Satchel</mat-option>\n                </mat-select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="col-lg-2">\n          <div class="mb-3">\n            <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div>\n      <h4>Sales Report</h4>\n    </div>\n    <ul class="table-top-head">\n      <li class="me-2">\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n      </li>\n      <li class="me-2">\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div class="card-body p-0">\n    <div class="table-responsive">\n      <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n        <thead class="thead-light">\n          <tr>\n            <th mat-sort-header="SKU">SKU</th>\n            <th mat-sort-header="productName">Product Name</th>\n            <th mat-sort-header="brand">Brand</th>\n            <th mat-sort-header="category">Category</th>\n            <th mat-sort-header="soldQty">Sold Qty</th>\n            <th mat-sort-header="soldAmount">Sold Amount</th>\n            <th mat-sort-header="instockQty">Instock Qty</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (data of tableData; track data) {\n            <tr>\n              <td>{{data.SKU}}</td>\n              <td class="d-flex align-items-center">\n                <div class="avatar avatar-sm me-2">\n                  <a href="javascript:void(0);">\n                    <img [src]="data.img" alt="product">\n                  </a>\n                </div>\n                <a href="javascript:void(0);">{{data.productName}}</a>\n              </td>\n              <td>{{data.brand}}</td>\n              <td>{{data.category}}</td>\n              <td>{{data.soldQty}}</td>\n              <td>{{data.soldAmount}}</td>\n              <td>{{data.instockQty}}</td>\n            </tr>\n          }@if(tableData.length === 0){\n            <tr>\n                <td class="text-center" colspan="12">No Matching Data Found</td>\n            </tr>\n        }\n        </tbody>\n      </table>\n    </div>\n    <app-custom-pagination></app-custom-pagination>\n  </div>\n</div>\n<!-- /product list -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesReportComponent, { className: "SalesReportComponent", filePath: "src/app/features/pages/reports/sales-report/sales-report.component.ts", lineNumber: 26 });
})();
export {
  SalesReportComponent
};
//# sourceMappingURL=chunk-FTL6UE7B.js.map
