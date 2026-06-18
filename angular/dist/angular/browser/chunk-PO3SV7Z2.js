import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
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
  BsDatepickerDirective,
  BsDatepickerInputDirective,
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

// src/app/features/pages/finance/income/income.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => ({ adaptivePosition: true });
function IncomeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function IncomeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function IncomeComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 86)(3, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_For_79_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 89);
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
    \u0275\u0275elementStart(17, "td", 90)(18, "div", 91)(19, "a", 92);
    \u0275\u0275element(20, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 94);
    \u0275\u0275element(22, "i", 95);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.store);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.notes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
  }
}
function IncomeComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 96);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var IncomeComponent = class _IncomeComponent {
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
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.income) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getIncome().subscribe((apiRes) => {
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
  ngOnInit() {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
    this.editor1.destroy();
  }
  static \u0275fac = function IncomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomeComponent, selectors: [["app-income"]], decls: 252, vars: 19, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], [1, "input-groupicon", "calender-input", "balance-sheet-date"], ["data-feather", "calendar", 1, "info-img"], ["type", "text", "placeholder", "01-Jan-2025 - 12-Dec-2025", 1, "datetimepicker"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks", "ms-1"], ["mat-sort-header", "product"], ["mat-sort-header", "expense"], ["mat-sort-header", "category"], ["mat-sort-header", "describtion"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [1, "Expense-list-blk"], ["id", "edit-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "input-groupicon", "calender-input", "ngxdate"], ["type", "text", "bsDatepicker", "", 1, "datetimepicker", "form-control", 3, "bsConfig"], [1, "col-lg-12", "mb-3"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-6", "mb-3"], ["type", "text", "value", "$200", 1, "form-control"], [1, "summer-description-box"], [3, "editor"], [3, "editor", "toolbar"], [1, "mt-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["id", "add-units", 1, "modal", "fade"], [1, "input-groupicon", "calender-input", "ngxdate1"], ["type", "text", "bsDatepicker", "", 1, "datetimepicker", "form-control", "ps-2", 3, "bsConfig"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], [1, "text-gray-9"], [1, "action-table-data"], [1, "edit-delete-action"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "me-0", "p-2", "mb-0"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function IncomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your income");
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
      \u0275\u0275listener("click", function IncomeComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, IncomeComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, IncomeComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, " Add Income");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function IncomeComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "div", 26);
      \u0275\u0275element(37, "i", 27)(38, "input", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 29)(40, "a", 30);
      \u0275\u0275text(41, " Select Warehouse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 31)(43, "li")(44, "a", 32);
      \u0275\u0275text(45, "Distribution center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 32);
      \u0275\u0275text(48, "Intelligent warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 32);
      \u0275\u0275text(51, "Mahin Logistics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 32);
      \u0275\u0275text(54, "Allcargo Logistics");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(55, "div", 33)(56, "div", 34)(57, "table", 35);
      \u0275\u0275listener("matSortChange", function IncomeComponent_Template_table_matSortChange_57_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(58, "thead", 36)(59, "tr")(60, "th", 37)(61, "label", 38);
      \u0275\u0275listener("click", function IncomeComponent_Template_label_click_61_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(62, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Template_input_ngModelChange_62_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "th", 41);
      \u0275\u0275text(65, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 42);
      \u0275\u0275text(67, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 43);
      \u0275\u0275text(69, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 44);
      \u0275\u0275text(71, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 45);
      \u0275\u0275text(73, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 46);
      \u0275\u0275text(75, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "th", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "tbody", 47);
      \u0275\u0275repeaterCreate(78, IncomeComponent_For_79_Template, 23, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(80, IncomeComponent_Conditional_80_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(81, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 48)(83, "div", 49)(84, "div", 50)(85, "div", 51)(86, "div", 52)(87, "div", 53)(88, "div", 2)(89, "h4");
      \u0275\u0275text(90, "Edit Expense Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "button", 54)(92, "span", 55);
      \u0275\u0275text(93, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 56)(95, "form")(96, "div", 57)(97, "div", 58)(98, "div", 59)(99, "label", 60);
      \u0275\u0275text(100, "Date");
      \u0275\u0275elementStart(101, "span", 61);
      \u0275\u0275text(102, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 62);
      \u0275\u0275element(104, "i", 27)(105, "input", 63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 64)(107, "label", 60);
      \u0275\u0275text(108, "Category");
      \u0275\u0275elementStart(109, "span", 61);
      \u0275\u0275text(110, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "mat-select", 65)(112, "mat-option", 66);
      \u0275\u0275text(113, "select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "mat-option", 66);
      \u0275\u0275text(115, "Foreign investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "mat-option", 66);
      \u0275\u0275text(117, "Product Export");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 64)(119, "label", 60);
      \u0275\u0275text(120, "Store");
      \u0275\u0275elementStart(121, "span", 61);
      \u0275\u0275text(122, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "mat-select", 65)(124, "mat-option", 66);
      \u0275\u0275text(125, "select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "mat-option", 66);
      \u0275\u0275text(127, "Foreign investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "mat-option", 66);
      \u0275\u0275text(129, "Product Export");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 67)(131, "label", 60);
      \u0275\u0275text(132, "Amount");
      \u0275\u0275elementStart(133, "span", 61);
      \u0275\u0275text(134, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(135, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 67)(137, "label", 60);
      \u0275\u0275text(138, "Account");
      \u0275\u0275elementStart(139, "span", 61);
      \u0275\u0275text(140, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "mat-select", 65)(142, "mat-option", 66);
      \u0275\u0275text(143, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "mat-option", 66);
      \u0275\u0275text(145, "Approved");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "div", 58)(147, "div", 69)(148, "label", 60);
      \u0275\u0275text(149, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "ngx-editor", 70);
      \u0275\u0275element(151, "ngx-editor-menu", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p", 72);
      \u0275\u0275text(153, "Maximum 60 Words");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(154, "div", 73)(155, "button", 74);
      \u0275\u0275text(156, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "button", 75);
      \u0275\u0275text(158, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(159, "div", 76)(160, "div", 49)(161, "div", 50)(162, "div", 51)(163, "div", 77)(164, "span", 78);
      \u0275\u0275element(165, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "h4", 80);
      \u0275\u0275text(167, "Delete Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "p", 81);
      \u0275\u0275text(169, "Are you sure you want to delete income?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 82)(171, "button", 74);
      \u0275\u0275text(172, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "button", 75);
      \u0275\u0275text(174, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(175, "div", 83)(176, "div", 49)(177, "div", 50)(178, "div", 51)(179, "div", 52)(180, "div", 53)(181, "div", 2)(182, "h4");
      \u0275\u0275text(183, "Add Income");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "button", 54)(185, "span", 55);
      \u0275\u0275text(186, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "div", 56)(188, "form")(189, "div", 57)(190, "div", 58)(191, "div", 59)(192, "label", 60);
      \u0275\u0275text(193, "Date");
      \u0275\u0275elementStart(194, "span", 61);
      \u0275\u0275text(195, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 84);
      \u0275\u0275element(197, "i", 27)(198, "input", 85);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(199, "div", 64)(200, "label", 60);
      \u0275\u0275text(201, "Category");
      \u0275\u0275elementStart(202, "span", 61);
      \u0275\u0275text(203, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "mat-select", 65)(205, "mat-option", 66);
      \u0275\u0275text(206, "select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "mat-option", 66);
      \u0275\u0275text(208, "Foreign investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "mat-option", 66);
      \u0275\u0275text(210, "Product Export");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 64)(212, "label", 60);
      \u0275\u0275text(213, "Store");
      \u0275\u0275elementStart(214, "span", 61);
      \u0275\u0275text(215, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "mat-select", 65)(217, "mat-option", 66);
      \u0275\u0275text(218, "select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "mat-option", 66);
      \u0275\u0275text(220, "Foreign investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "mat-option", 66);
      \u0275\u0275text(222, "Product Export");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(223, "div", 67)(224, "label", 60);
      \u0275\u0275text(225, "Amount");
      \u0275\u0275elementStart(226, "span", 61);
      \u0275\u0275text(227, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(228, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 67)(230, "label", 60);
      \u0275\u0275text(231, "Account");
      \u0275\u0275elementStart(232, "span", 61);
      \u0275\u0275text(233, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "mat-select", 65)(235, "mat-option", 66);
      \u0275\u0275text(236, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "mat-option", 66);
      \u0275\u0275text(238, "Approved");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(239, "div", 58)(240, "div", 69)(241, "label", 60);
      \u0275\u0275text(242, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "ngx-editor", 70);
      \u0275\u0275element(244, "ngx-editor-menu", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "p", 72);
      \u0275\u0275text(246, "Maximum 60 Words");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(247, "div", 73)(248, "button", 74);
      \u0275\u0275text(249, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "button", 75);
      \u0275\u0275text(251, "Add Income");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(29);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 80 : -1);
      \u0275\u0275advance(25);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(17, _c1));
      \u0275\u0275advance(45);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(47);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(18, _c1));
      \u0275\u0275advance(45);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomeComponent, [{
    type: Component,
    args: [{ selector: "app-income", imports: [NgxEditorModule, BsDatepickerModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Income</h4>\n            <h6>Manage your income</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"\n              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse"\n              id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n              }\n              @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n              }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i  class="ti ti-circle-plus"></i> Add Income</a>\n    </div>\n</div>\n\n\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                      (ngModelChange)="searchData(searchDataValue)" type="search" class="form-control"\n                      placeholder="Search" />\n                  </label>\n                </div>\n              </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            \n            <div class="dropdown me-2">						\n                <div class="input-groupicon calender-input balance-sheet-date">\n                    <i data-feather="calendar" class="info-img"></i><input type="text" class="datetimepicker" placeholder="01-Jan-2025 - 12-Dec-2025">\n                </div>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Select Warehouse\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Distribution center</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Intelligent warehouse</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Mahin Logistics</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Allcargo Logistics</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">\n        <div class="table-responsive">\n          <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n            matSortDirection="asc" matSortDisableClear>\n            <thead class="thead-light">\n              <tr>\n                <th class="no-sort">\n                  <label class="checkboxs" (click)="selectAll(initChecked)">\n                    <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                    <span class="checkmarks ms-1"></span>\n                  </label>\n                </th>\n                <th mat-sort-header="product">Date</th>\n                <th mat-sort-header="expense">Reference</th>\n                <th mat-sort-header="category">Store</th>\n                <th mat-sort-header="describtion">Category</th>\n                <th mat-sort-header="date">Notes</th>\n                <th mat-sort-header="amount">Amount</th>\n                <th class="no-sort"></th>\n              </tr>\n            </thead>\n            <tbody class="Expense-list-blk">\n              @for (data of tableData; track data; let i = $index) {\n              <tr>\n                <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n                <td>{{data.date}}</td>\n                <td>{{data.reference}}</td>\n                <td class="text-gray-9">{{data.store}}</td>\n                <td>{{data.category}}</td>\n                <td>{{data.notes}}</td>\n                <td>{{data.amount}}</td>\n                <td class="action-table-data">\n                    <div class="edit-delete-action">\n                        <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                            <i data-feather="edit" class="feather icon-edit"></i>\n                        </a>\n                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                            <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                        </a>\n                    </div>\n                </td>\n              </tr> \n            }@if(tableData.length === 0){\n                <tr>\n                    <td class="text-center" colspan="12">No Matching Data Found</td>\n                </tr>\n            }\n            </tbody>\n          </table>\n    \n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n</div>\n<!-- /product list -->\n\n\n\n\n\n\n\n		<!-- Edit income-->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Expense Category</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n										<div class="row">\n                                            <div class="col-lg-12">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Date<span class="text-danger ms-1">*</span></label>\n                                                    \n                                                    <div class="input-groupicon calender-input ngxdate">\n                                                        <i data-feather="calendar" class="info-img"></i>\n                                                        <input type="text" class="datetimepicker form-control" bsDatepicker\n                                                        [bsConfig]="{ adaptivePosition: true }">\n                                                    </div>\n                                                </div>\n                                            </div>	\n                                            <div class="col-lg-12 mb-3">\n                                                    <label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n                                                   <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">select</mat-option>\n                                                        <mat-option value="1">Foreign investment</mat-option>\n                                                        <mat-option value="1">Product Export</mat-option>\n                                            \n                                                    </mat-select>                                                \n                                            </div>	\n                                            <div class="col-lg-12 mb-3">\n                                                <label class="form-label">Store<span class="text-danger ms-1">*</span></label>\n                                               <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">select</mat-option>\n                                                    <mat-option value="1">Foreign investment</mat-option>\n                                                    <mat-option value="1">Product Export</mat-option>\n                                        \n                                                </mat-select>                                                \n                                        </div>	\n                                        <div class="col-lg-6 mb-3">                                      \n                                                <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>\n                                                <input type="text" class="form-control" value="$200">                                     \n                                        </div>	\n                                        <div class="col-lg-6 mb-3">\n                                            <label class="form-label">Account<span class="text-danger ms-1">*</span></label>\n                                           <mat-select class="custom-mat-select select" placeholder="Select">\n                                                <mat-option value="1">Approved</mat-option>\n                                                <mat-option value="1">Approved</mat-option>                                    \n                                            </mat-select>                                                \n                                    </div>			\n											<div class="col-lg-12">\n												<div class="summer-description-box">\n													<label class="form-label">Description</label>\n													<ngx-editor [editor]="editor">\n                                                        <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                                                        </ngx-editor-menu>\n                                                        \n                                                      </ngx-editor>\n													<p class="mt-1">Maximum 60 Words</p>\n												</div>\n											</div>								\n										</div>								\n	\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit income -->\n\n			 		<!-- delete modal -->\n					 <div class="modal fade" id="delete-modal">\n						<div class="modal-dialog modal-dialog-centered">\n							<div class="modal-content">\n								<div class="page-wrapper-new p-0">\n									<div class="content p-5 px-3 text-center">\n											<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n											<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Income</h4>\n											<p class="mb-0 fs-16">Are you sure you want to delete income?</p>\n											<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n												<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n												<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n											</div>						\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n\n\n                    			<!-- Add income-->\n			<div class="modal fade" id="add-units">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="page-wrapper-new p-0">\n							<div class="content">\n								<div class="modal-header">\n									<div class="page-title">\n										<h4>Add Income</h4>\n									</div>\n									<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n										<span aria-hidden="true">&times;</span>\n									</button>\n								</div>\n								<div class="modal-body">\n									<form>\n										<div class="row">\n                                            <div class="col-lg-12">\n                                                <div class="mb-3">\n                                                    <label class="form-label">Date<span class="text-danger ms-1">*</span></label>\n                                                    \n                                                    <div class="input-groupicon calender-input ngxdate1">\n                                                        <i data-feather="calendar" class="info-img"></i>\n                                                        <input type="text" class="datetimepicker form-control ps-2" bsDatepicker\n                                                        [bsConfig]="{ adaptivePosition: true }">\n                                                    </div>\n                                                </div>\n                                            </div>	\n                                            <div class="col-lg-12 mb-3">\n                                                    <label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n                                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                                        <mat-option value="1">select</mat-option>\n                                                        <mat-option value="1">Foreign investment</mat-option>\n                                                        <mat-option value="1">Product Export</mat-option>\n                                            \n                                                    </mat-select>                                                \n                                            </div>	\n                                            <div class="col-lg-12 mb-3">\n                                                <label class="form-label">Store<span class="text-danger ms-1">*</span></label>\n                                               <mat-select class="custom-mat-select select" placeholder="Select">\n                                                    <mat-option value="1">select</mat-option>\n                                                    <mat-option value="1">Foreign investment</mat-option>\n                                                    <mat-option value="1">Product Export</mat-option>\n                                        \n                                                </mat-select>                                                \n                                        </div>	\n                                        <div class="col-lg-6 mb-3">                                      \n                                                <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>\n                                                <input type="text" class="form-control" value="$200">                                     \n                                        </div>	\n                                        <div class="col-lg-6 mb-3">\n                                            <label class="form-label">Account<span class="text-danger ms-1">*</span></label>\n                                           <mat-select class="custom-mat-select select" placeholder="Select">\n                                                <mat-option value="1">Approved</mat-option>\n                                                <mat-option value="1">Approved</mat-option>                                    \n                                            </mat-select>                                                \n                                    </div>			\n											<div class="col-lg-12">\n												<div class="summer-description-box">\n													<label class="form-label">Description</label>\n													<ngx-editor [editor]="editor1">\n                                                        <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >\n                                                        </ngx-editor-menu>\n                                                        \n                                                      </ngx-editor>\n													<p class="mt-1">Maximum 60 Words</p>\n												</div>\n											</div>								\n										</div>							\n									</form>\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Income</button>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Add income-->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomeComponent, { className: "IncomeComponent", filePath: "src/app/features/pages/finance/income/income.component.ts", lineNumber: 25 });
})();
export {
  IncomeComponent
};
//# sourceMappingURL=chunk-PO3SV7Z2.js.map
