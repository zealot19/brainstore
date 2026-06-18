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
  CommonService,
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
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  Renderer2,
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

// src/app/features/pages/reports/supplier-report/supplier-report.component.ts
function SupplierReportComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function SupplierReportComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function SupplierReportComponent_For_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 48)(8, "a", 49);
    \u0275\u0275element(9, "img", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h6", 51)(11, "a", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 53);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/supplier/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalItems);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Pending" ? "badge-cyan" : data_r1.status === "Ordered" ? "badge-warning" : "badge-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.status, " ");
  }
}
function SupplierReportComponent_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var SupplierReportComponent = class _SupplierReportComponent {
  data;
  pagination;
  router;
  sidebar;
  common;
  renderer;
  initChecked = false;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  tableData2 = [];
  tableData3 = [];
  routes = routes;
  // pagination variables
  tableData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  //** / pagination variables
  constructor(data, pagination, router, sidebar, common, renderer) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.common = common;
    this.renderer = renderer;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.data.getSupplierReport().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.supplierReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getSupplierpaymentReport().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.supplierReport) {
          this.getTableData2({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getSupplierReturnReport().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.supplierReport) {
          this.getTableData3({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSupplierReport().subscribe((apiRes) => {
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
  getTableData2(pageOption) {
    this.data.getSupplierpaymentReport().subscribe((apiRes) => {
      this.tableData2 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData2.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData2,
        serialNumberArray: this.serialNumberArray,
        tableData: []
      });
    });
  }
  getTableData3(pageOption) {
    this.data.getSupplierReturnReport().subscribe((apiRes) => {
      this.tableData3 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData3.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData3,
        serialNumberArray: this.serialNumberArray,
        tableData: []
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
  row = true;
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
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedValue9 = "";
  selectedValue10 = "";
  selectedValue11 = "";
  selectedValue12 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "27 9 23" },
    { value: "10 9 23" }
  ];
  selectedList2 = [
    { value: "Choose Product" },
    { value: "Apple Series 5 Watch" },
    { value: "Amazon Echo Dot" }
  ];
  selectedList3 = [
    { value: "Choose Status" },
    { value: "Received" }
  ];
  selectedList4 = [
    { value: "Payment Method" },
    { value: "Paypal" },
    { value: "Stripe" }
  ];
  selectedList5 = [
    { value: "Choose Payment Status" },
    { value: "Paid" },
    { value: "Unpaid" },
    { value: "Overdue" }
  ];
  selectedList6 = [
    { value: "Sort by Date" },
    { value: "27 9 23" },
    { value: "10 9 23" }
  ];
  selectedList7 = [
    { value: "Choose Supplier Name" },
    { value: "Apex Computers" },
    { value: "Beats Headphones" }
  ];
  selectedList8 = [
    { value: "Sort by Date" },
    { value: "27 9 23" },
    { value: "10 9 23" }
  ];
  selectedList9 = [
    { value: "Choose Supplier Name" },
    { value: "Apex Computers" },
    { value: "Beats Headphones" }
  ];
  selectedList10 = [
    { value: "Choose Supplier Name" },
    { value: "Apex Computers" },
    { value: "Beats Headphones" }
  ];
  selectedList11 = [
    { value: "Choose Status" },
    { value: "Completed" },
    { value: "Incompleted" }
  ];
  selectedList12 = [
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
  static \u0275fac = function SupplierReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierReportComponent, selectors: [["app-supplier-report"]], decls: 131, vars: 7, consts: [[1, "mb-4"], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card", "no-search"], [1, "card-body"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "Reference"], ["mat-sort-header", "id"], ["mat-sort-header", "supplier"], ["mat-sort-header", "items"], ["mat-sort-header", "amt"], ["mat-sort-header", "pay"], ["mat-sort-header", "status"], [1, "bg-secondary-transparent"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "Img", 3, "src"], [1, "fw-medium"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], ["colspan", "12", 1, "text-center"]], template: function SupplierReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      \u0275\u0275text(4, "Supplier Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "a", 4);
      \u0275\u0275text(7, "Supplier Due");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div")(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h4");
      \u0275\u0275text(13, "Supplier Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h6");
      \u0275\u0275text(15, "View Reports of Supplier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "ul", 8)(17, "li")(18, "a", 9);
      \u0275\u0275element(19, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 11);
      \u0275\u0275listener("click", function SupplierReportComponent_Template_a_click_21_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(22, SupplierReportComponent_Conditional_22_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(23, SupplierReportComponent_Conditional_23_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 14)(26, "form")(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "label", 20);
      \u0275\u0275text(33, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 18)(36, "div", 21)(37, "label", 20);
      \u0275\u0275text(38, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-select", 22)(40, "mat-option", 23);
      \u0275\u0275text(41, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-option", 23);
      \u0275\u0275text(43, "Apex Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-option", 23);
      \u0275\u0275text(45, "Beats Headphones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-option", 23);
      \u0275\u0275text(47, "Dazzle Shoes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 21)(50, "label", 20);
      \u0275\u0275text(51, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-select", 22)(53, "mat-option", 23);
      \u0275\u0275text(54, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-option", 23);
      \u0275\u0275text(56, "Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-option", 23);
      \u0275\u0275text(58, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 23);
      \u0275\u0275text(60, "Ordered");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 18)(62, "div", 21)(63, "label", 20);
      \u0275\u0275text(64, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-select", 22)(66, "mat-option", 23);
      \u0275\u0275text(67, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 23);
      \u0275\u0275text(69, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-option", 23);
      \u0275\u0275text(71, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-option", 23);
      \u0275\u0275text(73, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 23);
      \u0275\u0275text(75, "Stripe");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(76, "div", 24)(77, "div", 21)(78, "button", 25);
      \u0275\u0275text(79, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(80, "div", 26)(81, "div", 27)(82, "div", 28)(83, "div")(84, "h4");
      \u0275\u0275text(85, "Supplier Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "ul", 8)(87, "li", 29)(88, "a", 30);
      \u0275\u0275element(89, "img", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li", 29)(91, "a", 32);
      \u0275\u0275element(92, "img", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "a", 34);
      \u0275\u0275element(95, "i", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 36)(97, "table", 37);
      \u0275\u0275listener("matSortChange", function SupplierReportComponent_Template_table_matSortChange_97_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(98, "thead", 38)(99, "tr")(100, "th", 39);
      \u0275\u0275text(101, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 40);
      \u0275\u0275text(103, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 41);
      \u0275\u0275text(105, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 42);
      \u0275\u0275text(107, "Total Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 43);
      \u0275\u0275text(109, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 44);
      \u0275\u0275text(111, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 45);
      \u0275\u0275text(113, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "tbody");
      \u0275\u0275repeaterCreate(115, SupplierReportComponent_For_116_Template, 22, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(117, SupplierReportComponent_Conditional_117_Template, 3, 0, "tr");
      \u0275\u0275elementStart(118, "tr", 46)(119, "td", 46)(120, "h6");
      \u0275\u0275text(121, "Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(122, "td", 46)(123, "td", 46)(124, "td", 46);
      \u0275\u0275elementStart(125, "td", 46)(126, "h6");
      \u0275\u0275text(127, "$33268.53");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "td", 46)(129, "td", 46);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(130, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.supplierReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.supplierDueReport);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 23 : -1);
      \u0275\u0275advance(92);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 117 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierReportComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-report", imports: [MatSelectModule, CommonModule, FormsModule, CustomPaginationComponent, MatSortModule, RouterLink, DateRangePickerComponent], template: `
<div class="mb-4">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" [routerLink]="routes.supplierReport">Supplier Report</a>
  </li>
  <li class="nav-item">
        <a class="nav-link " [routerLink]="routes.supplierDueReport">Supplier Due</a>
  </li>
  </ul>
</div>
<div>

  <div class="page-header">
    <div class="add-item d-flex">
      <div class="page-title">
        <h4>Supplier Report</h4>
        <h6>View Reports of Supplier</h6>
      </div>
    </div>
    <ul class="table-top-head">
      <li>
        <a
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          matTooltip="Refresh"
          matTooltipPosition="above"
          ><i class="ti ti-refresh"></i
        ></a>
      </li>
      <li>
        <a
          (click)="toggleCollapse()" [class.active]="isCollapsed"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          matTooltip="Collapse"
          matTooltipPosition="above"
          id="collapse-header"
          > @if (!isCollapsed) {
          <i class="ti ti-chevron-up"></i>
        }
        @if (isCollapsed) {
          <i class="ti ti-chevron-up"></i>
        }</a>
      </li>
    </ul>
  </div>
  <div class="card border-0">
    <div class="card-body pb-1">
      <form>
        <div class="row align-items-end">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-md-3">
                <div class="mb-3 custom-ngxdate">
                  <label class="form-label">Choose Date</label>
                 <app-date-range-picker/>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label">Supplier</label>
                 <mat-select class="custom-mat-select select" placeholder="All">
                    <mat-option value="1">All</mat-option>
                    <mat-option value="1">Apex Computers</mat-option>
                    <mat-option value="1">Beats Headphones</mat-option>
                    <mat-option value="1">Dazzle Shoes</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                 <mat-select class="custom-mat-select select" placeholder="All">
                    <mat-option value="1">All</mat-option>
                    <mat-option value="1">Received</mat-option>
                    <mat-option value="1">Pending</mat-option>
                    <mat-option value="1">Ordered</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label">Payment Method</label>
                 <mat-select class="custom-mat-select select" placeholder="All">
                    <mat-option value="1">All</mat-option>
                    <mat-option value="1">Cash</mat-option>
                    <mat-option value="1">Paypal</mat-option>
                    <mat-option value="1">Credit Card</mat-option>
                    <mat-option value="1">Stripe</mat-option>
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
  <div class="card table-list-card no-search">
    <div class="card-body">
      <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div>
          <h4>Supplier Report</h4>
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
      <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table datatable">
          <thead class="thead-light">
            <tr>
              <th mat-sort-header="Reference">Reference</th>
              <th mat-sort-header="id">ID</th>
              <th mat-sort-header="supplier">Supplier</th>
              <th mat-sort-header="items">Total Items</th>
              <th mat-sort-header="amt">Amount</th>
              <th mat-sort-header="pay">Payment Method</th>
              <th mat-sort-header="status">Status</th>
            </tr>
          </thead>
          <tbody>
            @for (data of tableData; track data) {
            <tr>
              <td><a href="javascript:void(0);" class="text-primary">{{data.reference}}</a></td>
              <td>{{data.id}}</td>
              <td>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="assets/img/supplier/{{data.img}}" alt="Img">
                  </a>
                  <h6 class="fw-medium"><a href="javascript:void(0);">{{data.supplier}}</a></h6>
                </div>
              </td>
              <td>{{data.totalItems}}</td>
              <td>{{data.amount}}</td>
              <td>{{data.paymentMethod}}</td>
              <td>
                <span class="badge d-inline-flex align-items-center badge-xs" [ngClass]="data.status==='Pending'?'badge-cyan':data.status==='Ordered'?'badge-warning':'badge-success'">
                  {{data.status}}
                </span>
              </td>
            </tr>
          }@if(tableData.length === 0){
            <tr>
                <td class="text-center" colspan="12">No Matching Data Found</td>
            </tr>
        }
            <tr class="bg-secondary-transparent">
              <td class="bg-secondary-transparent"><h6>Total</h6></td>
              <td class="bg-secondary-transparent"></td>
              <td class="bg-secondary-transparent"></td>
              <td class="bg-secondary-transparent"></td>
              <td class="bg-secondary-transparent"><h6>$33268.53</h6></td>
              <td class="bg-secondary-transparent"></td>
              <td class="bg-secondary-transparent"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <app-custom-pagination/>
    </div>
  </div>
</div>
                    
                      
           
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }, { type: CommonService }, { type: Renderer2 }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierReportComponent, { className: "SupplierReportComponent", filePath: "src/app/features/pages/reports/supplier-report/supplier-report.component.ts", lineNumber: 25 });
})();
export {
  SupplierReportComponent
};
//# sourceMappingURL=chunk-B7N5O7FS.js.map
