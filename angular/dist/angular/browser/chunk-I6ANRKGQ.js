import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  MatTableDataSource,
  MatTableModule
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/super-admin/purchase-transaction/purchase-transaction.component.ts
var _c0 = () => ({ standalone: true });
function PurchaseTransactionComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PurchaseTransactionComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PurchaseTransactionComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 81)(3, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseTransactionComponent_For_99_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 83)(9, "a", 84);
    \u0275\u0275element(10, "img", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 86)(12, "h6", 87)(13, "a", 88);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 89);
    \u0275\u0275element(25, "i", 90);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 91)(29, "a", 92);
    \u0275\u0275element(30, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 94);
    \u0275\u0275element(32, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 96);
    \u0275\u0275element(34, "i", 97);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.InvoiceID);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/company/", data_r2 == null ? null : data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.CompanyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", data_r2.Amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.PaymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Paid" ? "badge-success" : "badge-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.Status, " ");
  }
}
function PurchaseTransactionComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 98);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var PurchaseTransactionComponent = class _PurchaseTransactionComponent {
  data;
  router;
  pagination;
  sidebar;
  routes = routes;
  initChecked = false;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  // pagination variables
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  password = [false, false, false, false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(data, router, pagination, sidebar) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.sidebar = sidebar;
    this.data.getSubscription().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.purchaseTransaction) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSubscription().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    });
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
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
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
  static \u0275fac = function PurchaseTransactionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseTransactionComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseTransactionComponent, selectors: [["app-purchase-transaction"]], decls: 226, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "view_invoice", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-body", "p-5"], [1, "row", "justify-content-between", "align-items-center", "mb-3"], [1, "col-md-6"], [1, "mb-4", "page-logo-normal"], ["src", "assets/img/logo.svg", "alt", "logo", 1, "img-fluid"], [1, "mb-4", "page-logo-white"], ["src", "assets/img/logo-white.svg", "alt", "logo", 1, "img-fluid"], [1, "text-end", "mb-3"], [1, "text-dark", "mb-1"], [1, "mb-1", "fw-normal"], [1, "ti", "ti-file-invoice", "me-1"], [1, "ti", "ti-calendar", "me-1"], [1, "fw-normal"], [1, "row", "mb-3", "d-flex", "justify-content-between"], [1, "col-md-7"], [1, "text-dark", "mb-2", "fw-medium", "fs-16"], [1, "mb-1"], [1, "col-md-5"], [1, "text-dark", "mb-2", "fw-medium", "fs-16", "text-end"], [1, "mb-1", "text-end"], [1, "mb-4"], [1, "table-responsive", "mb-3"], [1, "table"], [1, "text-end"], [1, "col-md-4"], [1, "mb-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "pe-3"], [1, "text-dark", "fw-medium", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "pe-3"], [1, "text-dark", "fw-medium", "mb-0"], [1, "mb-2"], [1, "card", "border", "mb-0"], [1, "fs-12", "fw-normal", "d-flex", "align-items-baseline", "mb-2"], [1, "ti", "ti-point-filled", "text-primary", "me-1"], [1, "fs-12", "fw-normal", "d-flex", "align-items-baseline"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center"], [1, "avatar", "avatar-xl", "bg-danger-transparent", "rounded-circle", "text-danger", "mb-3"], [1, "ti", "ti-trash-x", "fs-36"], [1, "mb-3"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "file-name-icon"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "border", "rounded-circle"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "fw-medium"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-icon", "d-inline-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "me-2"], [1, "ti", "ti-file-invoice"], ["href", "javascript:void(0);", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "me-2"], [1, "ti", "ti-download"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], [1, "ti", "ti-trash"], ["colspan", "10", 1, "text-center"]], template: function PurchaseTransactionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Purchase Transaction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your purchase transaction");
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
      \u0275\u0275listener("click", function PurchaseTransactionComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, PurchaseTransactionComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, PurchaseTransactionComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "label")(29, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseTransactionComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchaseTransactionComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "a", 22);
      \u0275\u0275text(33, " Payment Method ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 23)(35, "li")(36, "a", 24);
      \u0275\u0275text(37, "Credit card");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 24);
      \u0275\u0275text(40, "Paypal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 24);
      \u0275\u0275text(43, "Debit Card");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 21)(45, "a", 22);
      \u0275\u0275text(46, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "ul", 23)(48, "li")(49, "a", 24);
      \u0275\u0275text(50, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 24);
      \u0275\u0275text(53, "Unpaid");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 25)(55, "a", 22);
      \u0275\u0275text(56, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "ul", 23)(58, "li")(59, "a", 24);
      \u0275\u0275text(60, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 24);
      \u0275\u0275text(63, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 24);
      \u0275\u0275text(66, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 24);
      \u0275\u0275text(69, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "li")(71, "a", 24);
      \u0275\u0275text(72, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(73, "div", 26)(74, "div", 27)(75, "table", 28)(76, "thead", 29)(77, "tr")(78, "th", 30)(79, "label", 31);
      \u0275\u0275listener("click", function PurchaseTransactionComponent_Template_label_click_79_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(80, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseTransactionComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Invoice ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th");
      \u0275\u0275text(85, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th");
      \u0275\u0275text(87, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th");
      \u0275\u0275text(89, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th");
      \u0275\u0275text(91, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th");
      \u0275\u0275text(93, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th");
      \u0275\u0275text(95, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "tbody");
      \u0275\u0275repeaterCreate(98, PurchaseTransactionComponent_For_99_Template, 35, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(100, PurchaseTransactionComponent_Conditional_100_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(101, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 34)(103, "div", 35)(104, "div", 36)(105, "div", 37)(106, "div", 38)(107, "div", 39)(108, "div", 40);
      \u0275\u0275element(109, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 42);
      \u0275\u0275element(111, "img", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 39)(113, "div", 44)(114, "h5", 45);
      \u0275\u0275text(115, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 46);
      \u0275\u0275element(117, "i", 47);
      \u0275\u0275text(118, "INV0287");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p", 46);
      \u0275\u0275element(120, "i", 48);
      \u0275\u0275text(121, "Issue date : 12 Sep 2024 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p", 49);
      \u0275\u0275element(123, "i", 48);
      \u0275\u0275text(124, "Due date : 12 Oct 2024 ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 50)(126, "div", 51)(127, "p", 52);
      \u0275\u0275text(128, "Invoice From :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div")(130, "p", 53);
      \u0275\u0275text(131, "Dreamspos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p", 53);
      \u0275\u0275text(133, "367 Hillcrest Lane, Irvine, California, United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p", 53);
      \u0275\u0275text(135, "dreamspos@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 54)(137, "p", 55);
      \u0275\u0275text(138, "Invoice To :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div")(140, "p", 56);
      \u0275\u0275text(141, "BrightWave Innovations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p", 56);
      \u0275\u0275text(143, "367 Hillcrest Lane, Irvine, California, United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 56);
      \u0275\u0275text(145, "michael@example.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "div", 57)(147, "div", 58)(148, "table", 59)(149, "thead", 29)(150, "tr")(151, "th");
      \u0275\u0275text(152, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "th", 60);
      \u0275\u0275text(154, "Billing Cycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "th", 60);
      \u0275\u0275text(156, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "th", 60);
      \u0275\u0275text(158, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "th", 60);
      \u0275\u0275text(160, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "tbody")(162, "tr")(163, "td");
      \u0275\u0275text(164, "Advanced (Monthly)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "td", 60);
      \u0275\u0275text(166, "30 Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "td", 60);
      \u0275\u0275text(168, "12 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "td", 60);
      \u0275\u0275text(170, "12 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "td", 60);
      \u0275\u0275text(172, "$200");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(173, "div", 50)(174, "div", 61)(175, "div")(176, "h6", 57);
      \u0275\u0275text(177, "Payment info:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p", 62);
      \u0275\u0275text(179, "Credit Card - 123***********789");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 63)(181, "p", 62);
      \u0275\u0275text(182, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "p", 64);
      \u0275\u0275text(184, "$200.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(185, "div", 61)(186, "div", 65)(187, "p", 66);
      \u0275\u0275text(188, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p", 67);
      \u0275\u0275text(190, "$200.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 65)(192, "p", 66);
      \u0275\u0275text(193, "Tax ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "p", 67);
      \u0275\u0275text(195, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 65)(197, "p", 66);
      \u0275\u0275text(198, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "p", 64);
      \u0275\u0275text(200, "$200.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(201, "div", 68)(202, "div", 26)(203, "p", 64);
      \u0275\u0275text(204, "Terms & Conditions:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "p", 69);
      \u0275\u0275element(206, "i", 70);
      \u0275\u0275text(207, "All payments must be made according to the agreed schedule. Late payments may incur additional fees.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "p", 71);
      \u0275\u0275element(209, "i", 70);
      \u0275\u0275text(210, "We are not liable for any indirect, incidental, or consequential damages, including loss of profits, revenue, or data.");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(211, "div", 72)(212, "div", 73)(213, "div", 36)(214, "div", 74)(215, "span", 75);
      \u0275\u0275element(216, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "h4", 53);
      \u0275\u0275text(218, "Confirm Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "p", 77);
      \u0275\u0275text(220, "You want to delete all the marked items, this cant be undone once you delete.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 78)(222, "a", 79);
      \u0275\u0275text(223, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "a", 80);
      \u0275\u0275text(225, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
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
      \u0275\u0275advance(51);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 100 : -1);
    }
  }, dependencies: [CommonModule, NgClass, MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseTransactionComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-transaction", standalone: true, imports: [CommonModule, MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4>Purchase Transaction</h4>
            <h6>Manage your purchase transaction</h6>
        </div>
    </div>
    <ul class="table-top-head">
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">
              <i class="ti ti-refresh"></i>
            </a>
          </li>
          <li>
            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">
               @if (!isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }
            @if (isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }</a>
          </li>
    </ul>
</div>

<!-- /product list -->
<div class="card table-list-card">
    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set">
            <div class="search-input">
                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
                <div class="dataTables_filter">
                  <label>
                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
                      type="search" class="form-control" placeholder="Search" />
                    </label>
                  </div>
                </div>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Payment Method
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Credit card</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Paypal</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Debit Card</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Select Status
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Unpaid</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Sort By : Last 7 Days
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="custom-datatable-filter table-responsive">
            <table class="table datatable">
                <thead class="thead-light">
                    <tr>
                        <th class="no-sort">
                            <label class="checkboxs" (click)="selectAll(initChecked)">
                              <input type="checkbox" id="select-all" [(ngModel)]="initChecked">
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                        <th>Invoice ID</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Created Date</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                        <th></th>
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
                      <td>{{data.InvoiceID}}</td>
                      <td>
                                              <div class="d-flex align-items-center file-name-icon">
                                                  <a href="javascript:void(0);" class="avatar avatar-md border rounded-circle">
                                                      <img src="assets/img/company/{{data?.Image}}" class="img-fluid" alt="img">
                                                  </a>
                                                  <div class="ms-2">
                                                      <h6 class="fw-medium"><a href="javascript:void(0);">{{data.CompanyName}}</a></h6>
                                                  </div>
                                              </div>
                        </td>
                        <td>{{data.Email}}</td>
                        <td>
                            \${{data.Amount}}
                        </td>
                        <td>{{data.CreatedDate}}</td>
                        <td>{{data.PaymentMethod}}</td>
                        <td>
                            <span class="badge d-inline-flex align-items-center badge-xs" [ngClass]="data.Status === 'Paid'? 'badge-success':'badge-danger'">
                                <i class="ti ti-point-filled me-1"></i>{{data.Status}}
                            </span>
                        </td>
                        <td>
                            <div class="action-icon d-inline-flex align-items-center">
                                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded me-2" data-bs-toggle="modal" data-bs-target="#view_invoice"><i class="ti ti-file-invoice"></i></a>
                                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded me-2"><i class="ti ti-download"></i></a>
                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal" class="p-2 d-flex align-items-center border rounded"><i class="ti ti-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                    }
                    @if (tableData.length === 0) {
                    <tr>
                        <td colspan="10" class="text-center"> No matching records found </td>
                    </tr>
                    }
                  </tbody>
            </table>
        </div>
        <app-custom-pagination/>
    </div>
</div>
<!-- /product list -->


		<!-- Invoices -->
		<div class="modal fade" id="view_invoice">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-body p-5">
						<div class="row justify-content-between align-items-center mb-3">
							<div class="col-md-6">
                                <div class="mb-4 page-logo-normal">
                                    <img src="assets/img/logo.svg" class="img-fluid" alt="logo">
                                </div>
                                <div class="mb-4 page-logo-white">
                                    <img src="assets/img/logo-white.svg" class="img-fluid" alt="logo">
                                </div>
							</div>
							<div class="col-md-6">
								<div class=" text-end mb-3">
									<h5 class="text-dark mb-1">Invoice</h5>
									<p class="mb-1 fw-normal"><i class="ti ti-file-invoice me-1"></i>INV0287</p>
									<p class="mb-1 fw-normal"><i class="ti ti-calendar me-1"></i>Issue date : 12 Sep 2024 </p>
									<p class="fw-normal"><i class="ti ti-calendar me-1"></i>Due date : 12 Oct 2024 </p>
								</div>
							</div>
						</div>
						<div class="row mb-3 d-flex justify-content-between">
							<div class="col-md-7">
								<p class="text-dark mb-2 fw-medium fs-16">Invoice From :</p>
								<div>
									<p class="mb-1">Dreamspos</p>
									<p class="mb-1">367 Hillcrest Lane, Irvine, California, 
										United States</p>
									<p class="mb-1">dreamspos&#64;example.com</p>
								</div>
							</div>
							<div class="col-md-5">
								<p class="text-dark mb-2 fw-medium fs-16 text-end">Invoice To :</p>
								<div>
									<p class="mb-1 text-end">BrightWave Innovations</p>
									<p class="mb-1 text-end">367 Hillcrest Lane, Irvine, California, 
										United States</p>
									<p class="mb-1 text-end">michael&#64;example.com</p>
								</div>
							</div>
						</div>
						<div class="mb-4">
							<div class="table-responsive mb-3">
								<table class="table">
									<thead class="thead-light">
										<tr>
											<th>Plan</th>
											<th class="text-end">Billing Cycle</th>
											<th class="text-end">Created Date</th>
											<th class="text-end">Expiring On</th>
											<th class="text-end">Amount</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Advanced (Monthly)</td>
											<td class="text-end">30 Days</td>
											<td class="text-end">12 Sep 2024</td>
											<td class="text-end">12 Oct 2024</td>
											<td class="text-end">$200</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="row mb-3 d-flex justify-content-between">
							<div class="col-md-4">
								<div>
									<h6 class="mb-4">Payment info:</h6>
									<p class="mb-0">Credit Card - 123***********789</p>
									<div class="d-flex justify-content-between align-items-center mb-2 pe-3">
										<p class="mb-0">Amount</p>
										<p class="text-dark fw-medium mb-2">$200.00</p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="d-flex justify-content-between align-items-center pe-3">
									<p class="text-dark fw-medium mb-0">Sub Total</p>
									<p class="mb-2">$200.00</p>
								</div>
								<div class="d-flex justify-content-between align-items-center pe-3">
									<p class="text-dark fw-medium mb-0">Tax </p>
									<p class="mb-2">$0.00</p>
								</div>
								<div class="d-flex justify-content-between align-items-center pe-3">
									<p class="text-dark fw-medium mb-0">Total</p>
									<p class="text-dark fw-medium mb-2">$200.00</p>
								</div>
							</div>
						</div>
						<div class="card border mb-0">
							<div class="card-body">
								<p class="text-dark fw-medium mb-2">Terms & Conditions:</p>
								<p class="fs-12 fw-normal d-flex align-items-baseline mb-2"><i class="ti ti-point-filled text-primary me-1"></i>All payments must be made according to the agreed schedule. Late payments may incur additional fees.</p>
								<p class="fs-12 fw-normal d-flex align-items-baseline"><i class="ti ti-point-filled text-primary me-1"></i>We are not liable for any indirect, incidental, or consequential damages, including loss of profits, revenue, or data.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Invoices -->

		<!-- Delete Modal -->
		<div class="modal fade" id="delete_modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body text-center">
						<span class="avatar avatar-xl bg-danger-transparent rounded-circle text-danger mb-3">
							<i class="ti ti-trash-x fs-36"></i>
						</span>
						<h4 class="mb-1">Confirm Delete</h4>
						<p class="mb-3">You want to delete all the marked items, this cant be undone once you delete.</p>
						<div class="d-flex justify-content-center">
							<a href="javascript:void(0);" class="btn btn-secondary me-3" data-bs-dismiss="modal">Cancel</a>
							<a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Delete Modal -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseTransactionComponent, { className: "PurchaseTransactionComponent", filePath: "src/app/features/pages/super-admin/purchase-transaction/purchase-transaction.component.ts", lineNumber: 20 });
})();
export {
  PurchaseTransactionComponent
};
//# sourceMappingURL=chunk-I6ANRKGQ.js.map
