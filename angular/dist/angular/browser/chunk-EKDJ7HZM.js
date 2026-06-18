import {
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
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
  BsDatepickerModule
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  CheckboxControlValueAccessor,
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
  ɵɵnextContext,
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

// src/app/features/pages/sales/invoice/invoice.component.ts
var _c0 = () => ({ standalone: true });
function InvoiceComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function InvoiceComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function InvoiceComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 54)(3, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceComponent_For_105_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "a", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "div", 58)(10, "a", 59);
    \u0275\u0275element(11, "img", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 62);
    \u0275\u0275element(24, "i", 63);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 64)(27, "div", 65)(28, "a", 66);
    \u0275\u0275element(29, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 68);
    \u0275\u0275element(31, "i", 69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.invoiceDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.invoiceNo);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.dueDate, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amountDue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Paid" ? "badge-soft-success" : data_r2.status === "Unpaid" ? "badge-soft-danger" : data_r2.status === "Overdue" ? "badge-soft-warning" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.invoiceDetails);
  }
}
function InvoiceComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70)(2, "h5", 71);
    \u0275\u0275text(3, "No matching records found");
    \u0275\u0275elementEnd()()();
  }
}
var InvoiceComponent = class _InvoiceComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
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
        if (this.router.url == this.routes.invoice) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSalesInvoice().subscribe((apiRes) => {
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
  static \u0275fac = function InvoiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceComponent, selectors: [["app-invoice"]], decls: 125, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "invoiceNo"], ["mat-sort-header", "Customer"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], ["mat-sort-header", "paid"], ["mat-sort-header", "due"], ["mat-sort-header", "status"], [1, "text-center"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks", "ms-1"], [3, "routerLink"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "badge", "badge-xs", "shadow-none", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "d-flex"], [1, "edit-delete-action", "d-flex", "align-items-center", "justify-content-center"], [1, "me-2", "p-2", "d-flex", "align-items-center", "justify-content-between", "border", "rounded", 3, "routerLink"], [1, "feather", "icon-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "p-2", "d-flex", "align-items-center", "justify-content-between", "border", "rounded"], [1, "feather", "icon-trash-2"], ["colspan", "10"], [1, "no-record"]], template: function InvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your stock invoices");
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
      \u0275\u0275listener("click", function InvoiceComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, InvoiceComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, InvoiceComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "label")(29, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "a", 22);
      \u0275\u0275text(33, " Customer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 23)(35, "li")(36, "a", 24);
      \u0275\u0275text(37, "Carl Evans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 24);
      \u0275\u0275text(40, "Minerva Rameriz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 24);
      \u0275\u0275text(43, "Robert Lamon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 24);
      \u0275\u0275text(46, "Patricia Lewis");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 21)(48, "a", 22);
      \u0275\u0275text(49, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul", 23)(51, "li")(52, "a", 24);
      \u0275\u0275text(53, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 24);
      \u0275\u0275text(56, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 24);
      \u0275\u0275text(59, "Overdue");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 25)(61, "a", 22);
      \u0275\u0275text(62, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "ul", 23)(64, "li")(65, "a", 24);
      \u0275\u0275text(66, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 24);
      \u0275\u0275text(69, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "li")(71, "a", 24);
      \u0275\u0275text(72, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 24);
      \u0275\u0275text(75, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 24);
      \u0275\u0275text(78, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(79, "div", 26)(80, "div", 27)(81, "table", 28);
      \u0275\u0275listener("matSortChange", function InvoiceComponent_Template_table_matSortChange_81_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(82, "thead", 29)(83, "tr")(84, "th", 30)(85, "label", 31);
      \u0275\u0275listener("click", function InvoiceComponent_Template_label_click_85_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(86, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "th", 34);
      \u0275\u0275text(89, "Invoice No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 35);
      \u0275\u0275text(91, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 36);
      \u0275\u0275text(93, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 37);
      \u0275\u0275text(95, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 38);
      \u0275\u0275text(97, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 39);
      \u0275\u0275text(99, "Amount Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 40);
      \u0275\u0275text(101, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(102, "th", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "tbody");
      \u0275\u0275repeaterCreate(104, InvoiceComponent_For_105_Template, 32, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(106, InvoiceComponent_Conditional_106_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(107, "app-custom-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 42)(109, "div", 43)(110, "div", 44)(111, "div", 45)(112, "div", 46)(113, "form")(114, "div", 47);
      \u0275\u0275element(115, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "h3", 49);
      \u0275\u0275text(117, "Delete Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 50);
      \u0275\u0275text(119, "Are you sure you want to delete Invoice?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 51)(121, "button", 52);
      \u0275\u0275text(122, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "button", 53);
      \u0275\u0275text(124, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
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
      \u0275\u0275advance(57);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 106 : -1);
    }
  }, dependencies: [NgxEditorModule, MatSelectModule, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, BsDatepickerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceComponent, [{
    type: Component,
    args: [{ selector: "app-invoice", imports: [NgxEditorModule, MatSelectModule, CommonModule, FormsModule, CustomPaginationComponent, MatSortModule, RouterLink, BsDatepickerModule], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4>Invoices</h4>
            <h6>Manage your stock invoices</h6>
        </div>							
    </div>
    <ul class="table-top-head">
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
        </li><li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i
            class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"
              matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {
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
                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)" type="search"
                      class="form-control" placeholder="Search" />
                    </label>
                  </div>
                </div>
        </div>
        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Customer
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Carl Evans</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Minerva Rameriz</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Robert Lamon</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Patricia Lewis</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Status
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Unpaid</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Overdue</a>
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
        <div class="table-responsive">
            <table matSort (matSortChange)="sortData($event)" class="table">
                <thead class="thead-light">
                  <tr>
                    <th class="no-sort">
                        <label class="checkboxs"  (click)="selectAll(initChecked)">
                          <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                          <span class="checkmarks"></span>
                        </label>
                      </th>
                    <th mat-sort-header="invoiceNo">Invoice No</th>
                    <th mat-sort-header="Customer">Customer</th>
                    <th mat-sort-header="date">Due Date</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th mat-sort-header="paid">Paid</th>
                    <th mat-sort-header="due">Amount Due</th>
                    <th mat-sort-header="status">Status</th>
                    <th class="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  @for (data of tableData; track data) {
                    <tr>
                        <td>
                            <label class="checkboxs">
                                <input type="checkbox" [(ngModel)]="data.isSelected">
                                <span class="checkmarks ms-1"></span>
                              </label>
                        </td>
                        <td><a [routerLink]="routes.invoiceDetails">{{data.invoiceNo}}</a></td>
                        <td>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                    <img src="assets/img/users/{{data.img}}" alt="product">
                                </a>
                                <a href="javascript:void(0);">{{data.customer}}</a>
                            </div>
                        </td>
                        <td>
                            {{data.dueDate}}										
                        </td>
                        <td>
                           {{data.amount}}
                        </td>
                        <td>{{data.paid}}</td>
                        <td>{{data.amountDue}}</td>
                        <td>
                            <span class="badge badge-xs shadow-none" 
                            [ngClass]="data.status==='Paid'?'badge-soft-success':data.status==='Unpaid'?'badge-soft-danger':data.status==='Overdue'?'badge-soft-warning':''">
                            <i class="ti ti-point-filled me-1"></i>
                            {{data.status}}
                            </span>
                        </td>
                        <td class="d-flex">
                            <div class="edit-delete-action d-flex align-items-center justify-content-center">
                                <a class="me-2 p-2 d-flex align-items-center justify-content-between border rounded" [routerLink]="routes.invoiceDetails">
                                    <i class="feather icon-eye"></i>
                                </a>
                                <a class="p-2 d-flex align-items-center justify-content-between border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                                    <i class="feather icon-trash-2"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                    } @if (tableData.length === 0) {
                        <tr>
                          <td colspan="10">
                            <h5 class="no-record">No matching records found</h5>
                          </td>
                        </tr>
                    }
                  </tbody>
                </table>
        </div>
    </div>
    <app-custom-pagination></app-custom-pagination>
</div>
<!-- /product list -->


  		<!-- Delete -->
          <div class="modal fade modal-default" id="delete">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body p-0">
                  <div class="success-wrap text-center">
                    <form>
                      <div class="icon-success bg-danger-transparent text-danger mb-2">
                        <i class="ti ti-trash"></i>
                      </div>
                      <h3 class="mb-2">Delete Invoice</h3>
                      <p class="fs-16 mb-3">Are you sure you want to delete Invoice?</p>
                      <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                        <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>
                        <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Delete -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceComponent, { className: "InvoiceComponent", filePath: "src/app/features/pages/sales/invoice/invoice.component.ts", lineNumber: 21 });
})();
export {
  InvoiceComponent
};
//# sourceMappingURL=chunk-EKDJ7HZM.js.map
