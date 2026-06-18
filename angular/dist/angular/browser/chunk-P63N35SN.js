import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  MatTableDataSource
} from "./chunk-VP4CMUYD.js";
import {
  PaginationService
} from "./chunk-24R3OVTU.js";
import "./chunk-6VIR33HH.js";
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
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/purchase/purchase-order-report/purchase-order-report.component.ts
var _c0 = () => ({ standalone: true });
function PurchaseOrderReportComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PurchaseOrderReportComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PurchaseOrderReportComponent_For_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 48)(3, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrderReportComponent_For_82_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 50)(6, "a", 51);
    \u0275\u0275element(7, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.purchasedAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.purchasedQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.instockQty);
  }
}
function PurchaseOrderReportComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var PurchaseOrderReportComponent = class _PurchaseOrderReportComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedOption = "";
  selectedSupplier = "";
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
        if (this.router.url == this.routes.purchaseOrderReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPurchaseOrderReport().subscribe((apiRes) => {
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
  filter = false;
  openFilter() {
    this.filter = !this.filter;
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
  static \u0275fac = function PurchaseOrderReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseOrderReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrderReportComponent, selectors: [["app-purchase-order-report"]], decls: 117, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "productName"], ["mat-sort-header", "purchasedAmount"], ["mat-sort-header", "purchasedQty"], ["mat-sort-header", "instockQty"], [1, "searchpart"], [1, "searchcontent"], [1, "searchhead"], ["id", "closesearch"], ["aria-hidden", "true", 1, "fa", "fa-times-circle"], [1, "searchcontents"], [1, "searchparts"], ["type", "text", "placeholder", "search here"], [1, "btn", "btn-searchs"], [1, "recentsearch"], [1, "fa", "fa-search", "me-2"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "p-3", "px-2"], [1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], ["colspan", "10", 1, "text-center"]], template: function PurchaseOrderReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Purchase order report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Purchase order report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275element(13, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 10);
      \u0275\u0275listener("click", function PurchaseOrderReportComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, PurchaseOrderReportComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, PurchaseOrderReportComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "label")(29, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrderReportComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchaseOrderReportComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "a", 22);
      \u0275\u0275text(33, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 23)(35, "li")(36, "a", 24);
      \u0275\u0275text(37, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 24);
      \u0275\u0275text(40, "Beats Pro ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 24);
      \u0275\u0275text(43, "Nike Jordan");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 25)(45, "a", 22);
      \u0275\u0275text(46, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "ul", 23)(48, "li")(49, "a", 24);
      \u0275\u0275text(50, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 24);
      \u0275\u0275text(53, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 24);
      \u0275\u0275text(56, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 24);
      \u0275\u0275text(59, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 24);
      \u0275\u0275text(62, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(63, "div", 26)(64, "div", 27)(65, "table", 28);
      \u0275\u0275listener("matSortChange", function PurchaseOrderReportComponent_Template_table_matSortChange_65_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(66, "thead")(67, "tr")(68, "th", 29)(69, "label", 30);
      \u0275\u0275listener("click", function PurchaseOrderReportComponent_Template_label_click_69_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(70, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrderReportComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "th", 33);
      \u0275\u0275text(73, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 34);
      \u0275\u0275text(75, "Purchased amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 35);
      \u0275\u0275text(77, "Purchased QTY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 36);
      \u0275\u0275text(79, "Instock QTY");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "tbody");
      \u0275\u0275repeaterCreate(81, PurchaseOrderReportComponent_For_82_Template, 16, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(83, PurchaseOrderReportComponent_Conditional_83_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(84, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 37)(86, "div", 38)(87, "div", 39)(88, "h3");
      \u0275\u0275text(89, "Search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 40);
      \u0275\u0275element(91, "i", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 42)(93, "div", 43);
      \u0275\u0275element(94, "input", 44);
      \u0275\u0275elementStart(95, "a", 45);
      \u0275\u0275text(96, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 46)(98, "h2");
      \u0275\u0275text(99, "Recent Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "ul")(101, "li")(102, "h6");
      \u0275\u0275element(103, "i", 47);
      \u0275\u0275text(104, " Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "li")(106, "h6");
      \u0275\u0275element(107, "i", 47);
      \u0275\u0275text(108, " Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li")(110, "h6");
      \u0275\u0275element(111, "i", 47);
      \u0275\u0275text(112, " Invoice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "li")(114, "h6");
      \u0275\u0275element(115, "i", 47);
      \u0275\u0275text(116, " Sales");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 83 : -1);
    }
  }, dependencies: [CustomPaginationComponent, MatSelectModule, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseOrderReportComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-order-report", imports: [CustomPaginationComponent, MatSelectModule, FormsModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Purchase order report</h4>\n      <h6>Manage your Purchase order report</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img\n      src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img\n      src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>\n\n<!-- /product list -->\n<div class="card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)" type="search"\n              class="form-control" placeholder="Search..." />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n        <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n        Product\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>\n          </li>										\n        </ul>\n      </div>\n  \n      <div class="dropdown">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Sort By : Last 7 Days\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="card-body">\n\n    <div class="table-responsive">\n      <table matSort (matSortChange)="sortData($event)" class="table datanew">\n        <thead>\n          <tr>\n            <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n            <th mat-sort-header="productName">Product Name</th>\n            <th mat-sort-header="purchasedAmount">Purchased amount</th>\n            <th mat-sort-header="purchasedQty">Purchased QTY</th>\n            <th mat-sort-header="instockQty">Instock QTY</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (data of tableData; track data) {\n            <tr>\n                <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n                <td class="d-flex align-items-center p-3 px-2">\n                  <a class="avatar avatar-md me-2">\n                    <img src="assets/img/products/{{data.img}}" alt="product">\n                  </a>\n                  <a href="javascript:void(0);">{{data.productName}}</a>\n                </td>\n              <td>{{data.purchasedAmount}}</td>\n              <td>{{data.purchasedQty}}</td>\n              <td>{{data.instockQty}}</td>\n            </tr>\n          } @if (tableData.length === 0) {\n            <tr>\n              <td colspan="10" class="text-center">\n                No matching records found\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <app-custom-pagination></app-custom-pagination>\n  </div>\n</div>\n<!-- /product list -->\n\n<div class="searchpart">\n  <div class="searchcontent">\n    <div class="searchhead">\n      <h3>Search </h3>\n      <a id="closesearch"><i class="fa fa-times-circle" aria-hidden="true"></i></a>\n    </div>\n    <div class="searchcontents">\n      <div class="searchparts">\n        <input type="text" placeholder="search here">\n        <a class="btn btn-searchs">Search</a>\n      </div>\n      <div class="recentsearch">\n        <h2>Recent Search</h2>\n        <ul>\n          <li>\n            <h6><i class="fa fa-search me-2"></i> Settings</h6>\n          </li>\n          <li>\n            <h6><i class="fa fa-search me-2"></i> Report</h6>\n          </li>\n          <li>\n            <h6><i class="fa fa-search me-2"></i> Invoice</h6>\n          </li>\n          <li>\n            <h6><i class="fa fa-search me-2"></i> Sales</h6>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrderReportComponent, { className: "PurchaseOrderReportComponent", filePath: "src/app/features/pages/purchase/purchase-order-report/purchase-order-report.component.ts", lineNumber: 26 });
})();
export {
  PurchaseOrderReportComponent
};
//# sourceMappingURL=chunk-P63N35SN.js.map
