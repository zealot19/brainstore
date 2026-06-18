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
  CheckboxControlValueAccessor,
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
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/invoice-report/invoice-report.component.ts
var _c0 = (a0, a1, a2) => ({ "badge-success ": a0, "badge-danger": a1, "badge-warning": a2 });
function InvoiceReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function InvoiceReportComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function InvoiceReportComponent_For_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 58)(3, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceReportComponent_For_139_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "a", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 61);
    \u0275\u0275element(20, "i", 62);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.invoiceNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.dueDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amountDue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c0, data_r2.status === "Paid", data_r2.status === "Unpaid", data_r2.status === "Overdue"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
  }
}
function InvoiceReportComponent_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var InvoiceReportComponent = class _InvoiceReportComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  isSelected;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
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
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.invoiceReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInvoiceReport().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "25 9 23" },
    { value: "12 9 23" }
  ];
  selectedList2 = [
    { value: "Choose Name" },
    { value: "Rose" },
    { value: "Kaitlin" }
  ];
  selectedList3 = [
    { value: "Choose Status" },
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
  static \u0275fac = function InvoiceReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceReportComponent, selectors: [["app-invoice-report"]], decls: 142, vars: 6, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "d-flex"], [1, "card", "border", "border-success", "sale-widget", "flex-fill"], [1, "card-body", "d-flex", "align-items-center"], [1, "sale-icon", "bg-success", "text-white"], [1, "ti", "ti-align-box-bottom-left-filled", "fs-24"], [1, "ms-2"], [1, "fw-medium", "mb-1"], [1, "card", "border", "border-info", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-info", "text-white"], [1, "card", "border", "border-orange", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-orange", "text-white"], [1, "ti", "ti-moneybag", "fs-24"], [1, "card", "border", "border-danger", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-danger", "text-white"], [1, "ti", "ti-alert-circle-filled", "fs-24"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "col-md-4"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "invoice"], ["mat-sort-header", "customer"], ["mat-sort-header", "Due"], ["mat-sort-header", "amount"], ["mat-sort-header", "paid"], ["mat-sort-header", "status"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], ["colspan", "12", 1, "text-center"]], template: function InvoiceReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Invoice Report	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Invoice Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function InvoiceReportComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, InvoiceReportComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, InvoiceReportComponent_Conditional_14_Template, 1, 0, "i", 7);
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
      \u0275\u0275text(74, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "mat-select", 32)(76, "mat-option", 33);
      \u0275\u0275text(77, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 33);
      \u0275\u0275text(79, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "mat-option", 33);
      \u0275\u0275text(81, "Minerva Rameriz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "mat-option", 33);
      \u0275\u0275text(83, "Robert Lamon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "div", 28)(85, "div", 31)(86, "label", 30);
      \u0275\u0275text(87, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-select", 32)(89, "mat-option", 33);
      \u0275\u0275text(90, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 33);
      \u0275\u0275text(92, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 33);
      \u0275\u0275text(94, "Unpaid");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 34)(96, "div", 31)(97, "button", 35);
      \u0275\u0275text(98, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(99, "div", 36)(100, "div", 37)(101, "div")(102, "h4");
      \u0275\u0275text(103, "Invoice Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "ul", 3)(105, "li", 38)(106, "a", 39);
      \u0275\u0275element(107, "img", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "li", 38)(109, "a", 41);
      \u0275\u0275element(110, "img", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "a", 43);
      \u0275\u0275element(113, "i", 44);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "div", 45)(115, "div", 46)(116, "table", 47);
      \u0275\u0275listener("matSortChange", function InvoiceReportComponent_Template_table_matSortChange_116_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(117, "thead")(118, "tr")(119, "th", 48)(120, "label", 49);
      \u0275\u0275listener("click", function InvoiceReportComponent_Template_label_click_120_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(121, "input", 50);
      \u0275\u0275twoWayListener("ngModelChange", function InvoiceReportComponent_Template_input_ngModelChange_121_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "span", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "th", 52);
      \u0275\u0275text(124, "Invoice No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 53);
      \u0275\u0275text(126, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 54);
      \u0275\u0275text(128, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 55);
      \u0275\u0275text(130, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 56);
      \u0275\u0275text(132, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 55);
      \u0275\u0275text(134, "Amount Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 57);
      \u0275\u0275text(136, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "tbody");
      \u0275\u0275repeaterCreate(138, InvoiceReportComponent_For_139_Template, 22, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(140, InvoiceReportComponent_Conditional_140_Template, 3, 0, "tr");
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
      \u0275\u0275advance(107);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 140 : -1);
    }
  }, dependencies: [CommonModule, NgClass, CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, FormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceReportComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-report", imports: [CommonModule, CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, FormsModule, MatSortModule], template: `        <div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Invoice Report	</h4>
      <h6>Manage Your Invoice Report</h6>
    </div>
  </div>
  <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"
              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>
            </li>
            <li>
              <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse"
                matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {
                <i class="ti ti-chevron-up"></i>
              }
              @if (isCollapsed) {
                <i class="ti ti-chevron-up"></i>
              }</a>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card border border-success sale-widget flex-fill">
              <div class="card-body d-flex align-items-center">
                <span class="sale-icon bg-success text-white">
                  <i class="ti ti-align-box-bottom-left-filled fs-24"></i>
                </span>
                <div class="ms-2">
                  <p class="fw-medium mb-1">Total Amount</p>
                  <div>
                    <h3>$4,56,000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card border border-info sale-widget flex-fill">
              <div class="card-body d-flex align-items-center">
                <span class="sale-icon bg-info text-white">
                  <i class="ti ti-align-box-bottom-left-filled fs-24"></i>
                </span>
                <div class="ms-2">
                  <p class="fw-medium mb-1">Total Paid</p>
                  <div>
                    <h3>$2,56,42</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card border border-orange sale-widget flex-fill">
              <div class="card-body d-flex align-items-center">
                <span class="sale-icon bg-orange text-white">
                  <i class="ti ti-moneybag fs-24"></i>
                </span>
                <div class="ms-2">
                  <p class="fw-medium mb-1">Total Unpaid</p>
                  <div>
                    <h3>$1,52,45</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card border border-danger sale-widget flex-fill">
              <div class="card-body d-flex align-items-center">
                <span class="sale-icon bg-danger text-white">
                  <i class="ti ti-alert-circle-filled fs-24"></i>
                </span>
                <div class="ms-2">
                  <p class="fw-medium mb-1">Overdue</p>
                  <div>
                    <h3>$2,56,12</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0">
          <div class="card-body pb-1">
            <form>
              <div class="row align-items-end">
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mb-3 custom-ngxdate">
                        <label class="form-label">Choose Date\xA0</label>
                        <app-date-range-picker/>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">Customer</label>
                        <mat-select class="custom-mat-select select" placeholder="All">
                          <mat-option value="1">All</mat-option>
                          <mat-option value="1">Carl Evans</mat-option>
                          <mat-option value="1">Minerva Rameriz</mat-option>
                          <mat-option value="1">Robert Lamon</mat-option>
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">Status</label>
                       <mat-select class="custom-mat-select select" placeholder="All">
                          <mat-option value="1">All</mat-option>
                          <mat-option value="1">Paid</mat-option>
                          <mat-option value="1">Unpaid</mat-option>
                        </mat-select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="mb-3">
                    <button class="btn btn-primary w-100" type="submit">Generate Report</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- /product list -->
        <div class="card table-list-card">
          <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div>
              <h4>Invoice Report</h4>
            </div>
            <ul class="table-top-head">
              <li class="me-2">
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
              </li>
              <li class="me-2">
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
              </li>
              <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>
              </li>
            </ul>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"
                  matSortDirection="asc" matSortDisableClear>
                  <thead>
                    <tr>
                     <th class="no-sort">
                <label class="checkboxs"  (click)="selectAll(initChecked)">
                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                  <span class="checkmarks"></span>
                </label>
              </th>
                      <th mat-sort-header="invoice">Invoice No</th>
                      <th mat-sort-header="customer">Customer</th>
                      <th mat-sort-header="Due">Due Date</th>
                      <th mat-sort-header="amount">Amount</th>
                      <th mat-sort-header="paid">Paid</th>
                      <th mat-sort-header="amount">Amount Due</th>
                      <th mat-sort-header="status">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (data of tableData; track data) {
                      <tr>
                      <td>
                  <label class="checkboxs">
                    <input type="checkbox" [(ngModel)]="data.isSelected">
                    <span class="checkmarks"></span>
                  </label>
                </td>
                        <td><a href="javascript:void(0);" class="text-primary">{{data.invoiceNo}}</a></td>
                        <td>{{data.customer}}</td>
                        <td>{{data.dueDate}}</td>
                        <td>{{data.amount}}</td>
                        <td>{{data.paid}}</td>
                        <td>{{data.amountDue}}</td>
                        <td>
                          <span class="badge d-inline-flex align-items-center badge-xs" 
                          [ngClass]="{'badge-success ': data.status === 'Paid', 'badge-danger': data.status === 'Unpaid','badge-warning':data.status === 'Overdue'}">
                          <i class="ti ti-point-filled me-1"></i>{{data.status}}
                          </span>
                        </td>
                      </tr>
                    }@if(tableData.length === 0){
                      <tr>
                          <td class="text-center" colspan="12">No Matching Data Found</td>
                      </tr>
                  }
                  </tbody>
                </table>

              </div>
              <app-custom-pagination></app-custom-pagination>
            </div>
          </div>
          <!-- /product list -->
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceReportComponent, { className: "InvoiceReportComponent", filePath: "src/app/features/pages/reports/invoice-report/invoice-report.component.ts", lineNumber: 24 });
})();
export {
  InvoiceReportComponent
};
//# sourceMappingURL=chunk-IHOHEHGQ.js.map
