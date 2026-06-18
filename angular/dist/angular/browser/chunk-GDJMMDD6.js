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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/finance/money-transfer/money-transfer.component.ts
var _c0 = () => ({ standalone: true });
function MoneyTransferComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function MoneyTransferComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function MoneyTransferComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 74)(3, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function MoneyTransferComponent_For_86_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 77)(16, "div", 78)(17, "a", 79);
    \u0275\u0275element(18, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 81);
    \u0275\u0275element(20, "i", 82);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.fromAccount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.toAccount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
  }
}
function MoneyTransferComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var MoneyTransferComponent = class _MoneyTransferComponent {
  data;
  pagination;
  router;
  sidebar;
  routes = routes;
  initChecked = false;
  // pagination variables
  tableData = [];
  tableData2 = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
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
        if (this.router.url == this.routes.moneyTransfer) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getMoneyTransfer().subscribe((apiRes) => {
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
  static \u0275fac = function MoneyTransferComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoneyTransferComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoneyTransferComponent, selectors: [["app-money-transfer"]], decls: 209, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary", "text-white"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks", "ms-1"], ["mat-sort-header", "product"], ["mat-sort-header", "expense"], ["mat-sort-header", "category"], ["mat-sort-header", "describtion"], ["mat-sort-header", "amount"], [1, "Expense-list-blk"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-12"], [1, "mb-2", "amount", "position-relative"], ["type", "text", "value", "1800", 1, "form-control"], [1, "ti", "ti-currency-dollar", "text-dark"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], [1, "action-table-data"], [1, "edit-delete-action"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "me-0", "p-2", "mb-0"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function MoneyTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Money Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Money Transfer List");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275listener("click", function MoneyTransferComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, MoneyTransferComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, MoneyTransferComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Money Transfer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function MoneyTransferComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MoneyTransferComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "a", 26);
      \u0275\u0275text(37, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 27)(39, "li")(40, "a", 28);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 28);
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 29)(46, "a", 26);
      \u0275\u0275text(47, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 27)(49, "li")(50, "a", 28);
      \u0275\u0275text(51, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 28);
      \u0275\u0275text(54, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 28);
      \u0275\u0275text(57, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 28);
      \u0275\u0275text(60, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 28);
      \u0275\u0275text(63, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(64, "div", 30)(65, "div", 31)(66, "table", 32);
      \u0275\u0275listener("matSortChange", function MoneyTransferComponent_Template_table_matSortChange_66_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(67, "thead", 33)(68, "tr")(69, "th", 34)(70, "label", 35);
      \u0275\u0275listener("click", function MoneyTransferComponent_Template_label_click_70_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(71, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function MoneyTransferComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "th", 38);
      \u0275\u0275text(74, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 39);
      \u0275\u0275text(76, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 40);
      \u0275\u0275text(78, "From Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 41);
      \u0275\u0275text(80, "To Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 42);
      \u0275\u0275text(82, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "tbody", 43);
      \u0275\u0275repeaterCreate(85, MoneyTransferComponent_For_86_Template, 21, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(87, MoneyTransferComponent_Conditional_87_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(88, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 44)(90, "div", 45)(91, "div", 46)(92, "div", 47)(93, "div", 48)(94, "div", 49)(95, "div", 2)(96, "h4");
      \u0275\u0275text(97, "Create Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "button", 50)(99, "span", 51);
      \u0275\u0275text(100, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 52)(102, "form")(103, "div", 53)(104, "div", 54)(105, "label", 55);
      \u0275\u0275text(106, "Account Type");
      \u0275\u0275elementStart(107, "span", 56);
      \u0275\u0275text(108, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "mat-select", 57)(110, "mat-option", 58);
      \u0275\u0275text(111, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "mat-option", 58);
      \u0275\u0275text(113, "Current Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "mat-option", 58);
      \u0275\u0275text(115, "Salary Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 54)(117, "label", 55);
      \u0275\u0275text(118, "Account Type");
      \u0275\u0275elementStart(119, "span", 56);
      \u0275\u0275text(120, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "mat-select", 57)(122, "mat-option", 58);
      \u0275\u0275text(123, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "mat-option", 58);
      \u0275\u0275text(125, "Current Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "mat-option", 58);
      \u0275\u0275text(127, "Salary Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 59)(129, "div", 60)(130, "label", 55);
      \u0275\u0275text(131, "Amount");
      \u0275\u0275elementStart(132, "span", 56);
      \u0275\u0275text(133, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(134, "input", 61)(135, "i", 62);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(136, "div", 63)(137, "button", 64);
      \u0275\u0275text(138, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 65);
      \u0275\u0275text(140, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(141, "div", 66)(142, "div", 45)(143, "div", 46)(144, "div", 47)(145, "div", 48)(146, "div", 49)(147, "div", 2)(148, "h4");
      \u0275\u0275text(149, "Edit Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "button", 50)(151, "span", 51);
      \u0275\u0275text(152, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "div", 52)(154, "form")(155, "div", 53)(156, "div", 54)(157, "label", 55);
      \u0275\u0275text(158, "Account Type");
      \u0275\u0275elementStart(159, "span", 56);
      \u0275\u0275text(160, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "mat-select", 57)(162, "mat-option", 58);
      \u0275\u0275text(163, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "mat-option", 58);
      \u0275\u0275text(165, "Current Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "mat-option", 58);
      \u0275\u0275text(167, "Salary Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 54)(169, "label", 55);
      \u0275\u0275text(170, "Account Type");
      \u0275\u0275elementStart(171, "span", 56);
      \u0275\u0275text(172, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "mat-select", 57)(174, "mat-option", 58);
      \u0275\u0275text(175, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "mat-option", 58);
      \u0275\u0275text(177, "Current Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 58);
      \u0275\u0275text(179, "Salary Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 59)(181, "div", 60)(182, "label", 55);
      \u0275\u0275text(183, "Amount");
      \u0275\u0275elementStart(184, "span", 56);
      \u0275\u0275text(185, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(186, "input", 61)(187, "i", 62);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(188, "div", 63)(189, "button", 64);
      \u0275\u0275text(190, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "button", 65);
      \u0275\u0275text(192, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(193, "div", 67)(194, "div", 45)(195, "div", 46)(196, "div", 47)(197, "div", 68)(198, "span", 69);
      \u0275\u0275element(199, "i", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "h4", 71);
      \u0275\u0275text(201, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p", 72);
      \u0275\u0275text(203, "Are you sure you want to delete account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 73)(205, "button", 64);
      \u0275\u0275text(206, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "button", 65);
      \u0275\u0275text(208, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(38);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 87 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoneyTransferComponent, [{
    type: Component,
    args: [{ selector: "app-money-transfer", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Money Transfer</h4>\n            <h6>Manage Money Transfer List</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#add-units"><i class="ti ti-circle-plus me-2"></i>Add Money Transfer</a>\n    </div>\n</div>\n\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n				<a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n				<div class="dataTables_filter">\n				  <label>\n					<input\n					  [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n					  (ngModelChange)="searchData(searchDataValue)"\n					  type="search"\n					  class="form-control"\n					  placeholder="Search"\n					  />\n					</label>\n				  </div>\n				</div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n        \n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                    </li>\n        \n                </ul>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">\n        <div class="table-responsive">\n          <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n            matSortDirection="asc" matSortDisableClear>\n            <thead class="thead-light">\n              <tr>\n                <th class="no-sort">\n                  <label class="checkboxs" (click)="selectAll(initChecked)">\n                    <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                    <span class="checkmarks ms-1"></span>\n                  </label>\n                </th>\n                <th mat-sort-header="product">Date</th>\n                <th mat-sort-header="expense">Reference Number</th>\n                <th mat-sort-header="category">From Account</th>\n                <th mat-sort-header="describtion">To Account</th>\n                <th mat-sort-header="amount">Amount</th>\n                <th class="no-sort"></th>\n              </tr>\n            </thead>\n            <tbody class="Expense-list-blk">\n              @for (data of tableData; track data; let i = $index) {\n              <tr>\n                <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n                <td>{{data.date}}</td>\n                <td>{{data.referenceNumber}}</td>\n                <td>{{data.fromAccount}}</td>\n                <td>{{data.toAccount}}</td>\n                <td>{{data.amount}}</td>\n                <td class="action-table-data">\n                    <div class="edit-delete-action">\n                        <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                            <i data-feather="edit" class="feather icon-edit"></i>\n                        </a>\n                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                            <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                        </a>\n                    </div>\n                </td>\n              </tr> \n            }@if(tableData.length === 0){\n              <tr>\n                  <td class="text-center" colspan="12">No Matching Data Found</td>\n              </tr>\n          }  \n            </tbody>\n          </table>\n    \n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n</div>\n<!-- /product list -->\n\n\n			<!-- Add account-->\n			<div class="modal fade" id="add-units">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="page-wrapper-new p-0">\n							<div class="content">\n								<div class="modal-header">\n									<div class="page-title">\n										<h4>Create Account</h4>\n									</div>\n									<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n										<span aria-hidden="true">&times;</span>\n									</button>\n								</div>\n								<div class="modal-body">\n									<form >\n										<div class="row">\n                                            <div class="col-lg-12 mb-3">\n												<label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>\n													<mat-select class="custom-mat-select select" placeholder="Select">\n														<mat-option value="1">Select</mat-option>\n														<mat-option value="1">Current Account</mat-option>\n														<mat-option value="1">Salary Account</mat-option>											\n													</mat-select>											\n											</div>\n                                            <div class="col-lg-12 mb-3">\n												<label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>\n													<mat-select class="custom-mat-select select" placeholder="Select">\n														<mat-option value="1">Select</mat-option>\n														<mat-option value="1">Current Account</mat-option>\n														<mat-option value="1">Salary Account</mat-option>											\n													</mat-select>											\n											</div>\n                                        <div class="col-lg-12"> \n                                            <div class="mb-2 amount position-relative">                                   \n                                                <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>\n                                                <input type="text" class="form-control" value="1800">    \n                                                <i class="ti ti-currency-dollar text-dark"></i> \n                                            </div>                                 \n                                        </div>					\n										</div>\n									</form>\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Submit</button>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Add account-->\n\n\n      		<!-- Edit ac-->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Account</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form >\n										<div class="row">\n                                            <div class="col-lg-12 mb-3">\n												<label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>\n													<mat-select class="custom-mat-select select" placeholder="Select">\n														<mat-option value="1">Select</mat-option>\n														<mat-option value="1">Current Account</mat-option>\n														<mat-option value="1">Salary Account</mat-option>											\n													</mat-select>											\n											</div>\n                                            <div class="col-lg-12 mb-3">\n												<label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>\n													<mat-select class="custom-mat-select select" placeholder="Select">\n														<mat-option value="1">Select</mat-option>\n														<mat-option value="1">Current Account</mat-option>\n														<mat-option value="1">Salary Account</mat-option>											\n													</mat-select>											\n											</div>\n                                        <div class="col-lg-12"> \n                                            <div class="mb-2 amount position-relative">                                   \n                                                <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>\n                                                <input type="text" class="form-control" value="1800">    \n                                                <i class="ti ti-currency-dollar text-dark"></i> \n                                            </div>                                 \n                                        </div>					\n										</div>								\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit ac -->\n\n			 		<!-- delete modal -->\n					 <div class="modal fade" id="delete-modal">\n						<div class="modal-dialog modal-dialog-centered">\n							<div class="modal-content">\n								<div class="page-wrapper-new p-0">\n									<div class="content p-5 px-3 text-center">\n											<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n											<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Account</h4>\n											<p class="mb-0 fs-16">Are you sure you want to delete account?</p>\n											<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n												<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n												<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n											</div>						\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoneyTransferComponent, { className: "MoneyTransferComponent", filePath: "src/app/features/pages/finance/money-transfer/money-transfer.component.ts", lineNumber: 20 });
})();
export {
  MoneyTransferComponent
};
//# sourceMappingURL=chunk-GDJMMDD6.js.map
