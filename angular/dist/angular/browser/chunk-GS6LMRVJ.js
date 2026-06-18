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
  Router,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/customer-report/customer-report.component.ts
function CustomerReportComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function CustomerReportComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function CustomerReportComponent_For_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 46)(8, "a", 47);
    \u0275\u0275element(9, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 49)(11, "p", 50)(12, "a", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 52);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.code);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r1.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalOrders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r1.status, " ");
  }
}
function CustomerReportComponent_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var CustomerReportComponent = class _CustomerReportComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
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
        if (this.router.url == this.routes.customerReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomerReport().subscribe((apiRes) => {
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
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "27 9 23" },
    { value: "10 9 23" }
  ];
  selectedList2 = [
    { value: "Choose Name" },
    { value: "Rose" },
    { value: "Kaitlin" }
  ];
  selectedList3 = [
    { value: "Choose ID" },
    { value: "CT_0003" },
    { value: "CT_0004" },
    { value: "CT_0005" }
  ];
  selectedList4 = [
    { value: "Choose Status" },
    { value: "Completed" },
    { value: "Incompleted" }
  ];
  selectedList5 = [
    { value: "Choose Payment Status" },
    { value: "Paid" },
    { value: "Unpaid" },
    { value: "Overdue" }
  ];
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
  static \u0275fac = function CustomerReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerReportComponent, selectors: [["app-customer-report"]], decls: 117, vars: 7, consts: [[1, "mb-4"], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "customer"], ["mat-sort-header", "name"], ["mat-sort-header", "amount"], ["mat-sort-header", "paid"], ["mat-sort-header", "due"], ["mat-sort-header", "status"], ["mat-sort-header", "payment"], ["href", "javascript:void(0);", 1, "text-orange"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "text-dark", "mb-0"], ["href", "javascript:void(0);"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], ["colspan", "12", 1, "text-center"]], template: function CustomerReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      \u0275\u0275text(4, "Customer Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "a", 4);
      \u0275\u0275text(7, "Customer Due");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div")(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h4");
      \u0275\u0275text(13, "Customer Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h6");
      \u0275\u0275text(15, "Manage Your Customer Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "ul", 8)(17, "li")(18, "a", 9);
      \u0275\u0275element(19, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 11);
      \u0275\u0275listener("click", function CustomerReportComponent_Template_a_click_21_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(22, CustomerReportComponent_Conditional_22_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(23, CustomerReportComponent_Conditional_23_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 14)(26, "form")(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "label", 20);
      \u0275\u0275text(33, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 18)(36, "div", 21)(37, "label", 20);
      \u0275\u0275text(38, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-select", 22)(40, "mat-option", 23);
      \u0275\u0275text(41, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-option", 23);
      \u0275\u0275text(43, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-option", 23);
      \u0275\u0275text(45, "Minerva Rameriz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-option", 23);
      \u0275\u0275text(47, "Robert Lamon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 21)(50, "label", 20);
      \u0275\u0275text(51, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-select", 22)(53, "mat-option", 23);
      \u0275\u0275text(54, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-option", 23);
      \u0275\u0275text(56, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-option", 23);
      \u0275\u0275text(58, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 23);
      \u0275\u0275text(60, "Stripe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 18)(62, "div", 21)(63, "label", 20);
      \u0275\u0275text(64, "Payment Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-select", 22)(66, "mat-option", 23);
      \u0275\u0275text(67, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 23);
      \u0275\u0275text(69, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-option", 23);
      \u0275\u0275text(71, "Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-option", 23);
      \u0275\u0275text(73, "Paid");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(74, "div", 24)(75, "div", 21)(76, "button", 25);
      \u0275\u0275text(77, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(78, "div", 26)(79, "div", 27)(80, "div")(81, "h4");
      \u0275\u0275text(82, "Customer Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "ul", 8)(84, "li", 28)(85, "a", 29);
      \u0275\u0275element(86, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li", 28)(88, "a", 31);
      \u0275\u0275element(89, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li")(91, "a", 33);
      \u0275\u0275element(92, "i", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(93, "div", 35)(94, "div", 36)(95, "table", 37);
      \u0275\u0275listener("matSortChange", function CustomerReportComponent_Template_table_matSortChange_95_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(96, "thead")(97, "tr")(98, "th", 38);
      \u0275\u0275text(99, "Customer ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 39);
      \u0275\u0275text(101, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 40);
      \u0275\u0275text(103, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 41);
      \u0275\u0275text(105, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 42);
      \u0275\u0275text(107, "Due Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 43);
      \u0275\u0275text(109, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 44);
      \u0275\u0275text(111, "Payment Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "tbody");
      \u0275\u0275repeaterCreate(113, CustomerReportComponent_For_114_Template, 23, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(115, CustomerReportComponent_Conditional_115_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(116, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.customerReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.customerDueReport);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 23 : -1);
      \u0275\u0275advance(90);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 115 : -1);
    }
  }, dependencies: [CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerReportComponent, [{
    type: Component,
    args: [{ selector: "app-customer-report", imports: [CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, RouterLink, FormsModule, MatSortModule], template: '<div class="mb-4">\n  <ul class="nav nav-pills">\n    <li class="nav-item">\n      <a class="nav-link active" [routerLink]="routes.customerReport">Customer Report</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" [routerLink]="routes.customerDueReport">Customer Due</a>\n    </li>\n  </ul>\n</div>\n\n<div>\n  <div class="page-header">\n    <div class="add-item d-flex">\n      <div class="page-title">\n        <h4>Customer Report</h4>\n        <h6>Manage Your Customer Report</h6>\n      </div>\n    </div>\n    <ul class="table-top-head">\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n          <i class="ti ti-refresh"></i>\n        </a>\n      </li>\n      <li>\n        <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n           @if (!isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n  </div>\n  <div class="card border-0">\n    <div class="card-body pb-1">\n      <form>\n        <div class="row align-items-end">\n          <div class="col-lg-10">\n            <div class="row">\n              <div class="col-md-3">\n                <div class="mb-3 custom-ngxdate">\n                  <label class="form-label">Choose Date</label>\n                <app-date-range-picker/>\n                </div>\n              </div>\n              <div class="col-md-3">\n                <div class="mb-3">\n                  <label class="form-label">Customer</label>\n                 <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Carl Evans</mat-option>\n                    <mat-option value="1">Minerva Rameriz</mat-option>\n                    <mat-option value="1">Robert Lamon</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-3">\n                <div class="mb-3">\n                  <label class="form-label">Payment Method</label>\n                 <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Cash</mat-option>\n                    <mat-option value="1">Paypal</mat-option>\n                    <mat-option value="1">Stripe</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-3">\n                <div class="mb-3">\n                  <label class="form-label">Payment Status</label>\n                 <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Completed</mat-option>\n                    <mat-option value="1">Unpaid</mat-option>\n                    <mat-option value="1">Paid</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-lg-2">\n            <div class="mb-3">\n              <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!-- /product list -->\n  <div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div>\n        <h4>Customer Report</h4>\n      </div>\n      <ul class="table-top-head">\n        <li class="me-2">\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li class="me-2">\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class="card-body">\n          <div class="table-responsive">\n            <table\n              class="table datanew"\n              (matSortChange)="sortData($event)"\n              matSort\n              matSortActive="Sno"\n              matSortDirection="asc"\n              matSortDisableClear\n              >\n              <thead>\n                <tr>\n                  <th mat-sort-header="customer">Customer ID</th>\n                  <th mat-sort-header="name">Customer Name</th>\n                  <th mat-sort-header="amount">Amount</th>\n                  <th mat-sort-header="paid">Paid</th>\n                  <th mat-sort-header="due">Due Amount</th>\n                  <th mat-sort-header="status">Status</th>\n                  <th mat-sort-header="payment">Payment Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (data of tableData; track data) {\n                  <tr>\n                    <td><a href="javascript:void(0);" class="text-orange">{{data.reference}}</a></td>\n                    <td>{{data.code}}</td>\n                    <td>\n                      <div class="d-flex align-items-center">\n                        <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/users/{{data.img}}" class="img-fluid" alt="img"></a>\n                        <div class="ms-2">\n                          <p class="text-dark mb-0"><a href="javascript:void(0);">{{data.customer}}</a></p>\n                        </div>\n                      </div>\n                    </td>\n                    <td>{{data.totalOrders}}</td>\n                    <td>{{data.amount}}</td>\n                    <td>{{data.paymentMethod}}</td>\n                    <td>\n                      <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                        {{data.status}}\n                      </span>\n                    </td>\n                  </tr>\n                }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n              </tbody>\n            </table>\n  \n          </div>\n          <app-custom-pagination></app-custom-pagination>\n        </div>\n      </div>\n      <!-- /product list -->\n</div>\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerReportComponent, { className: "CustomerReportComponent", filePath: "src/app/features/pages/reports/customer-report/customer-report.component.ts", lineNumber: 25 });
})();
export {
  CustomerReportComponent
};
//# sourceMappingURL=chunk-GS6LMRVJ.js.map
