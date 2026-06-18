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

// src/app/features/pages/finance/account-list/account-list.component.ts
var _c0 = () => ({ standalone: true });
function AccountListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function AccountListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function AccountListComponent_For_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 99)(3, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function AccountListComponent_For_98_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 101);
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
    \u0275\u0275elementStart(15, "td")(16, "span", 102);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 59)(19, "div", 60)(20, "a", 61);
    \u0275\u0275element(21, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 63);
    \u0275\u0275element(23, "i", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.accountholder);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.accountno);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.balance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.note);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Active" ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.status);
  }
}
function AccountListComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
function AccountListComponent_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function AccountListComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
var AccountListComponent = class _AccountListComponent {
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
        if (this.router.url == this.routes.accountList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getAccountList().subscribe((apiRes) => {
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
  static \u0275fac = function AccountListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountListComponent, selectors: [["app-account-list"]], decls: 413, vars: 16, consts: [[1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mb-3"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "low-stock-tab", "d-flex", "me-2", "mb-0"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary", "text-white"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks", "ms-1"], ["mat-sort-header", "product"], ["mat-sort-header", "expense"], ["mat-sort-header", "category"], ["mat-sort-header", "describtion"], ["mat-sort-header", "date"], ["mat-sort-header", "amount"], [1, "Expense-list-blk"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header2", "matTooltip", "Collapse", 3, "click"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units2", 1, "btn", "btn-primary", "text-white"], ["data-feather", "plus-circle", 1, "me-2"], [1, "table", "datatable"], [1, "ti", "ti-arrows-up-down", "fs-11", "fw-medium", "ms-1"], [1, "badge", "table-badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "me-0", "p-2", "mb-0"], [1, "feather", "icon-trash-2"], [1, "badge", "table-badge", "bg-danger", "fw-medium", "fs-10"], ["id", "edit-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", "value", "$200", 1, "form-control"], [1, "form-control"], [1, "fs-14", "mt-1"], ["placeholder", "Active", 1, "custom-mat-select", "select"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "add-units2", 1, "modal", "fade"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["id", "add-units", 1, "modal", "fade"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], [1, "badge", "table-badge", "fw-medium", "fs-10", 3, "ngClass"], ["colspan", "12", 1, "text-center"]], template: function AccountListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "button", 3);
      \u0275\u0275text(4, "Accounts List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "button", 4);
      \u0275\u0275text(7, "Account Type");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h4", 10);
      \u0275\u0275text(14, "Accounts List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h6");
      \u0275\u0275text(16, "Manage your Accounts List");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "ul", 11)(18, "li")(19, "a", 12);
      \u0275\u0275element(20, "img", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 14);
      \u0275\u0275element(23, "img", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li")(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 18);
      \u0275\u0275listener("click", function AccountListComponent_Template_a_click_28_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(29, AccountListComponent_Conditional_29_Template, 1, 0, "i", 19);
      \u0275\u0275conditionalCreate(30, AccountListComponent_Conditional_30_Template, 1, 0, "i", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "a", 21);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275text(34, "Add Account List");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24)(37, "div", 25)(38, "div", 26)(39, "a", 27);
      \u0275\u0275element(40, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 29)(42, "label")(43, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function AccountListComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AccountListComponent_Template_input_ngModelChange_43_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 31)(45, "div", 32)(46, "a", 33);
      \u0275\u0275text(47, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 34)(49, "li")(50, "a", 35);
      \u0275\u0275text(51, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 35);
      \u0275\u0275text(54, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 36)(56, "a", 33);
      \u0275\u0275text(57, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul", 34)(59, "li")(60, "a", 35);
      \u0275\u0275text(61, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 35);
      \u0275\u0275text(64, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 35);
      \u0275\u0275text(67, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 35);
      \u0275\u0275text(70, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 35);
      \u0275\u0275text(73, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(74, "div", 37)(75, "div", 38)(76, "table", 39);
      \u0275\u0275listener("matSortChange", function AccountListComponent_Template_table_matSortChange_76_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(77, "thead", 40)(78, "tr")(79, "th", 41)(80, "label", 42);
      \u0275\u0275listener("click", function AccountListComponent_Template_label_click_80_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(81, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function AccountListComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "span", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "th", 45);
      \u0275\u0275text(84, "Account Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 46);
      \u0275\u0275text(86, "Account No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 47);
      \u0275\u0275text(88, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 48);
      \u0275\u0275text(90, "Opening Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 49);
      \u0275\u0275text(92, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 50);
      \u0275\u0275text(94, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "th", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "tbody", 51);
      \u0275\u0275repeaterCreate(97, AccountListComponent_For_98_Template, 24, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(99, AccountListComponent_Conditional_99_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(100, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 52)(102, "div", 7)(103, "div", 8)(104, "div", 9)(105, "h4", 10);
      \u0275\u0275text(106, "Accounts Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "h6");
      \u0275\u0275text(108, "Manage your Accounts Type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "ul", 11)(110, "li")(111, "a", 16);
      \u0275\u0275element(112, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "li")(114, "a", 53);
      \u0275\u0275listener("click", function AccountListComponent_Template_a_click_114_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(115, AccountListComponent_Conditional_115_Template, 1, 0, "i", 19);
      \u0275\u0275conditionalCreate(116, AccountListComponent_Conditional_116_Template, 1, 0, "i", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 20)(118, "a", 54);
      \u0275\u0275element(119, "i", 55);
      \u0275\u0275text(120, "Add Account Type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 23)(122, "div", 24)(123, "div", 25)(124, "div", 26)(125, "a", 27);
      \u0275\u0275element(126, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 29)(128, "label")(129, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function AccountListComponent_Template_input_ngModelChange_129_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AccountListComponent_Template_input_ngModelChange_129_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(130, "div", 31)(131, "div", 32)(132, "a", 33);
      \u0275\u0275text(133, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "ul", 34)(135, "li")(136, "a", 35);
      \u0275\u0275text(137, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "li")(139, "a", 35);
      \u0275\u0275text(140, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(141, "div", 36)(142, "a", 33);
      \u0275\u0275text(143, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "ul", 34)(145, "li")(146, "a", 35);
      \u0275\u0275text(147, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "li")(149, "a", 35);
      \u0275\u0275text(150, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "li")(152, "a", 35);
      \u0275\u0275text(153, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "li")(155, "a", 35);
      \u0275\u0275text(156, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "li")(158, "a", 35);
      \u0275\u0275text(159, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(160, "div", 37)(161, "div", 38)(162, "table", 56)(163, "thead", 40)(164, "tr")(165, "th");
      \u0275\u0275text(166, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "th");
      \u0275\u0275text(168, "Created Date");
      \u0275\u0275element(169, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "th");
      \u0275\u0275text(171, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(172, "th", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "tbody")(174, "tr")(175, "td");
      \u0275\u0275text(176, "Savings account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "td");
      \u0275\u0275text(178, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "td")(180, "span", 58);
      \u0275\u0275text(181, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "td", 59)(183, "div", 60)(184, "a", 61);
      \u0275\u0275element(185, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "a", 63);
      \u0275\u0275element(187, "i", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(188, "tr")(189, "td");
      \u0275\u0275text(190, "Current Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "td");
      \u0275\u0275text(192, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "td")(194, "span", 65);
      \u0275\u0275text(195, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "td", 59)(197, "div", 60)(198, "a", 61);
      \u0275\u0275element(199, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "a", 63);
      \u0275\u0275element(201, "i", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(202, "tr")(203, "td");
      \u0275\u0275text(204, "Salary Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "td");
      \u0275\u0275text(206, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "td")(208, "span", 58);
      \u0275\u0275text(209, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "td", 59)(211, "div", 60)(212, "a", 61);
      \u0275\u0275element(213, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "a", 63);
      \u0275\u0275element(215, "i", 64);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(216, "app-custom-pagination");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(217, "div", 66)(218, "div", 67)(219, "div", 68)(220, "div", 69)(221, "div", 70)(222, "div", 71)(223, "div", 9)(224, "h4");
      \u0275\u0275text(225, "Edit Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "button", 72)(227, "span", 73);
      \u0275\u0275text(228, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "div", 74)(230, "form")(231, "div", 75)(232, "div", 76)(233, "div", 77)(234, "label", 78);
      \u0275\u0275text(235, "Account Holder Name");
      \u0275\u0275elementStart(236, "span", 79);
      \u0275\u0275text(237, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(238, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "div", 76)(240, "div", 77)(241, "label", 78);
      \u0275\u0275text(242, "Account Number");
      \u0275\u0275elementStart(243, "span", 79);
      \u0275\u0275text(244, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(245, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 76)(247, "div", 77)(248, "label", 78);
      \u0275\u0275text(249, "Account Type");
      \u0275\u0275elementStart(250, "span", 79);
      \u0275\u0275text(251, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "mat-select", 81)(253, "mat-option", 82);
      \u0275\u0275text(254, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "mat-option", 82);
      \u0275\u0275text(256, "Current Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "mat-option", 82);
      \u0275\u0275text(258, "Salary Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(259, "div", 76)(260, "div", 77)(261, "label", 78);
      \u0275\u0275text(262, "Opening Balance");
      \u0275\u0275elementStart(263, "span", 79);
      \u0275\u0275text(264, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(265, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "div", 76)(267, "div", 77)(268, "label", 78);
      \u0275\u0275text(269, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(270, "textarea", 84);
      \u0275\u0275elementStart(271, "p", 85);
      \u0275\u0275text(272, "Maximum 60 Words");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(273, "div", 76)(274, "label", 78);
      \u0275\u0275text(275, "Account Status");
      \u0275\u0275elementStart(276, "span", 79);
      \u0275\u0275text(277, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "mat-select", 86)(279, "mat-option", 82);
      \u0275\u0275text(280, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "mat-option", 82);
      \u0275\u0275text(282, "closed");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(283, "div", 87)(284, "button", 88);
      \u0275\u0275text(285, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "button", 89);
      \u0275\u0275text(287, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(288, "div", 90)(289, "div", 67)(290, "div", 68)(291, "div", 69)(292, "div", 70)(293, "div", 71)(294, "div", 9)(295, "h4");
      \u0275\u0275text(296, "Create Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "button", 72)(298, "span", 73);
      \u0275\u0275text(299, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(300, "div", 74)(301, "form")(302, "div", 75)(303, "div", 76)(304, "div", 77)(305, "label", 78);
      \u0275\u0275text(306, "Account Type Name");
      \u0275\u0275elementStart(307, "span", 79);
      \u0275\u0275text(308, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(309, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "div", 76)(311, "label", 78);
      \u0275\u0275text(312, "Account Status");
      \u0275\u0275elementStart(313, "span", 79);
      \u0275\u0275text(314, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(315, "mat-select", 86)(316, "mat-option", 82);
      \u0275\u0275text(317, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "mat-option", 82);
      \u0275\u0275text(319, "closed");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(320, "div", 87)(321, "button", 88);
      \u0275\u0275text(322, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "button", 89);
      \u0275\u0275text(324, "Add Account");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(325, "div", 91)(326, "div", 67)(327, "div", 68)(328, "div", 69)(329, "div", 92)(330, "span", 93);
      \u0275\u0275element(331, "i", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "h4", 95);
      \u0275\u0275text(333, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "p", 96);
      \u0275\u0275text(335, "Are you sure you want to delete account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "div", 97)(337, "button", 88);
      \u0275\u0275text(338, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "button", 89);
      \u0275\u0275text(340, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(341, "div", 98)(342, "div", 67)(343, "div", 68)(344, "div", 69)(345, "div", 70)(346, "div", 71)(347, "div", 9)(348, "h4");
      \u0275\u0275text(349, "Create Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "button", 72)(351, "span", 73);
      \u0275\u0275text(352, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(353, "div", 74)(354, "form")(355, "div", 75)(356, "div", 76)(357, "div", 77)(358, "label", 78);
      \u0275\u0275text(359, "Account Holder Name");
      \u0275\u0275elementStart(360, "span", 79);
      \u0275\u0275text(361, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(362, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "div", 76)(364, "div", 77)(365, "label", 78);
      \u0275\u0275text(366, "Account Number");
      \u0275\u0275elementStart(367, "span", 79);
      \u0275\u0275text(368, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(369, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "div", 76)(371, "div", 77)(372, "label", 78);
      \u0275\u0275text(373, "Account Type");
      \u0275\u0275elementStart(374, "span", 79);
      \u0275\u0275text(375, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "mat-select", 81)(377, "mat-option", 82);
      \u0275\u0275text(378, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "mat-option", 82);
      \u0275\u0275text(380, "Current Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "mat-option", 82);
      \u0275\u0275text(382, "Salary Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(383, "div", 76)(384, "div", 77)(385, "label", 78);
      \u0275\u0275text(386, "Opening Balance");
      \u0275\u0275elementStart(387, "span", 79);
      \u0275\u0275text(388, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(389, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "div", 76)(391, "div", 77)(392, "label", 78);
      \u0275\u0275text(393, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(394, "textarea", 84);
      \u0275\u0275elementStart(395, "p", 85);
      \u0275\u0275text(396, "Maximum 60 Words");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(397, "div", 76)(398, "div", 77)(399, "label", 78);
      \u0275\u0275text(400, "Account Status");
      \u0275\u0275elementStart(401, "span", 79);
      \u0275\u0275text(402, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "mat-select", 86)(404, "mat-option", 82);
      \u0275\u0275text(405, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "mat-option", 82);
      \u0275\u0275text(407, "closed");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(408, "div", 87)(409, "button", 88);
      \u0275\u0275text(410, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "button", 89);
      \u0275\u0275text(412, "Add Account");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 30 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(38);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 99 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 115 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 116 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountListComponent, [{
    type: Component,
    args: [{ selector: "app-account-list", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: `<div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
    <ul class="nav nav-pills low-stock-tab d-flex me-2 mb-0" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Accounts List</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Account Type</button>
        </li>							
    </ul>	
</div>

<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4 class="fw-bold">Accounts List</h4>
            <h6>Manage your Accounts List</h6>
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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }
            @if (isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }</a>
          </li>
    </ul>
    <div class="page-btn">
        <a href="javascript:void(0);" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#add-units"><i class="ti ti-circle-plus me-2"></i>Add Account List</a>
    </div>
</div>

<!-- /product list -->
<div class="card table-list-card">
    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set">
            <div class="search-input">
                <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>
                <div class="dataTables_filter">
                  <label>
                    <input
                      [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"
                      (ngModelChange)="searchData(searchDataValue)"
                      type="search"
                      class="form-control"
                      placeholder="Search"
                      />
                </label>
                </div>
            </div>
        </div>
        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                    
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Status
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
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
          <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"
            matSortDirection="asc" matSortDisableClear>
            <thead class="thead-light">
              <tr>
                <th class="no-sort">
                  <label class="checkboxs" (click)="selectAll(initChecked)">
                    <input type="checkbox" id="select-all" [(ngModel)]="initChecked">
                    <span class="checkmarks ms-1"></span>
                  </label>
                </th>
                <th mat-sort-header="product">Account Holder Name</th>
                <th mat-sort-header="expense">Account No</th>
                <th mat-sort-header="category">Type</th>
                <th mat-sort-header="describtion">Opening Balance</th>
                <th mat-sort-header="date">Notes</th>
                <th mat-sort-header="amount">Status</th>
                <th class="no-sort"></th>
              </tr>
            </thead>
            <tbody class="Expense-list-blk">
              @for (data of tableData; track data; let i = $index) {
              <tr>
                <td>
                  <label class="checkboxs">
                    <input type="checkbox" [(ngModel)]="data.isSelected">
                    <span class="checkmarks"></span>
                  </label>
                </td>
                <td>{{data.accountholder}}</td>
                <td>{{data.accountno}}</td>
                <td>{{data.type}}</td>
                <td>{{data.balance}}</td>
                <td>{{data.note}}</td>
                <td><span class="badge table-badge  fw-medium fs-10" [ngClass]="data.status==='Active'?'bg-success':'bg-danger'">{{data.status}}</span></td>
                <td class="action-table-data">
                    <div class="edit-delete-action">
                        <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">
                            <i class="feather icon-edit"></i>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">
                            <i class="feather icon-trash-2"></i>
                        </a>
                    </div>
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
    </div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div class="page-header">
            <div class="add-item d-flex">
                <div class="page-title">
                    <h4 class="fw-bold">Accounts Type</h4>
                    <h6>Manage your Accounts Type</h6>
                </div>
            </div>
            <ul class="table-top-head">							
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>
                  </li>
                  <li>
                    <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header2" matTooltip="Collapse"> @if (!isCollapsed) {
                      <i class="ti ti-chevron-up"></i>
                    }
                    @if (isCollapsed) {
                      <i class="ti ti-chevron-up"></i>
                    }</a>
                  </li>
            </ul>
            <div class="page-btn">
                <a href="javascript:void(0);" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#add-units2"><i data-feather="plus-circle" class="me-2"></i>Add Account Type</a>
            </div>
        </div>
        
        <!-- /product list -->
        <div class="card table-list-card">
            <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div class="search-set">
                    <div class="search-input">
                        <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>
                        <div class="dataTables_filter">
                          <label>
                            <input
                              [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"
                              (ngModelChange)="searchData(searchDataValue)"
                              type="search"
                              class="form-control"
                              placeholder="Search"
                              />
                            </label>
                          </div>
                        </div>
                </div>
                <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                            
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            Status
                        </a>
                        <ul class="dropdown-menu  dropdown-menu-end p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
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
                    <table class="table datatable">
                        <thead class="thead-light">
                            <tr>													
                                <th>Type</th>
                                <th>Created Date<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
                                <th>Status</th>
                                <th class="no-sort"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>											
                                <td>Savings account</td>
                                <td>24 Dec 2024</td>							
                                <td><span class="badge table-badge bg-success fw-medium fs-10">Active</span></td>
                                <td class="action-table-data">
                                    <div class="edit-delete-action">
                                        <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">
                                            <i class="feather icon-edit"></i>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">
                                            <i class="feather icon-trash-2"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>

                            <tr>											
                                <td>Current Account</td>
                                <td>10 Dec 2024</td>							
                                <td><span class="badge table-badge bg-danger fw-medium fs-10">Inactive</span></td>
                                <td class="action-table-data">
                                    <div class="edit-delete-action">
                                        <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">
                                            <i class="feather icon-edit"></i>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">
                                            <i class="feather icon-trash-2"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                
                            <tr>											
                                <td>Salary Account</td>
                                <td>27 Nov 2024</td>							
                                <td><span class="badge table-badge bg-success fw-medium fs-10">Active</span></td>
                                <td class="action-table-data">
                                    <div class="edit-delete-action">
                                        <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">
                                            <i class="feather icon-edit"></i>
                                        </a>
                                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">
                                            <i class="feather icon-trash-2"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <app-custom-pagination></app-custom-pagination>
              </div>
        </div>
        <!-- /product list -->
    </div>
    
</div>


		<!-- Edit ac-->
		<div class="modal fade" id="edit-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Edit Account</h4>
								</div>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
										<div class="row">
											<div class="col-lg-12">
												<div class="mb-3">
													<label class="form-label">Account Holder Name<span class="text-danger ms-1">*</span></label>
													<input type="text" class="form-control">												
												</div>
											</div>
											<div class="col-lg-12">
												<div class="mb-3">
													<label class="form-label">Account Number<span class="text-danger ms-1">*</span></label>
													<input type="text" class="form-control">												
												</div>
											</div>
											<div class="col-lg-12">
												<div class="mb-3">
												<label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>
													<mat-select class="custom-mat-select select" placeholder="Select">
														<mat-option value="1">Select</mat-option>
														<mat-option value="1">Current Account</mat-option>
														<mat-option value="1">Salary Account</mat-option>											
													</mat-select>
												</div>											
											</div>
                                        <div class="col-lg-12">  
											<div class="mb-3">                                    
                                                <label class="form-label">Opening Balance<span class="text-danger ms-1">*</span></label>
                                                <input type="text" class="form-control" value="$200">    
											</div>                                 
                                        </div>	
										<div class="col-lg-12">     
											<div class="mb-3">                                
											<label class="form-label">Description</label>
											<textarea class="form-control"></textarea>  
											<p class="fs-14 mt-1">Maximum 60 Words</p>
										</div>                                 
									</div>	
									<div class="col-lg-12">
										<label class="form-label">Account Status<span class="text-danger ms-1">*</span></label>
											<mat-select class="custom-mat-select select" placeholder="Active">
												<mat-option value="1">Active</mat-option>
												<mat-option value="1">closed</mat-option>										
											</mat-select>											
									</div>				
										</div>									
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit ac -->

		<!-- Add ac type-->
		<div class="modal fade" id="add-units2">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Create Account</h4>
								</div>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Account Type Name<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">												
											</div>
										</div>											
								<div class="col-lg-12">
									<label class="form-label">Account Status<span class="text-danger ms-1">*</span></label>
										<mat-select class="custom-mat-select select" placeholder="Active">
											<mat-option value="1">Active</mat-option>
											<mat-option value="1">closed</mat-option>										
										</mat-select>											
								</div>				
									</div>						
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Account</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add ac type-->

		<!-- delete modal -->
			<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Account</h4>
								<p class="mb-0 fs-16">Are you sure you want to delete account?</p>
								<div class="modal-footer-btn mt-3 d-flex justify-content-center">
									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
								</div>						
						</div>
					</div>
				</div>
			</div>
		</div>


        			<!-- Add ac-->
			<div class="modal fade" id="add-units">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="page-wrapper-new p-0">
							<div class="content">
								<div class="modal-header">
									<div class="page-title">
										<h4>Create Account</h4>
									</div>
									<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form>
										<div class="row">
											<div class="col-lg-12">
												<div class="mb-3">
													<label class="form-label">Account Holder Name<span class="text-danger ms-1">*</span></label>
													<input type="text" class="form-control">												
												</div>
											</div>
											<div class="col-lg-12">
												<div class="mb-3">
													<label class="form-label">Account Number<span class="text-danger ms-1">*</span></label>
													<input type="text" class="form-control">												
												</div>
											</div>
											<div class="col-lg-12">
												<div class="mb-3">
												<label class="form-label">Account Type<span class="text-danger ms-1">*</span></label>
													<mat-select class="custom-mat-select select" placeholder="Select">
														<mat-option value="1">Select</mat-option>
														<mat-option value="1">Current Account</mat-option>
														<mat-option value="1">Salary Account</mat-option>											
													</mat-select>
												</div>											
											</div>
                                        <div class="col-lg-12">  
											<div class="mb-3">                                   
                                                <label class="form-label">Opening Balance<span class="text-danger ms-1">*</span></label>
                                                <input type="text" class="form-control" value="$200">   
											</div>                                   
                                        </div>	
										<div class="col-lg-12">  
											<div class="mb-3">                                   
											<label class="form-label">Description</label>
											<textarea class="form-control"></textarea>  
											<p class="fs-14 mt-1">Maximum 60 Words</p>   
										</div>                              
									</div>	
									<div class="col-lg-12">
										<div class="mb-3">
										<label class="form-label">Account Status<span class="text-danger ms-1">*</span></label>
											<mat-select class="custom-mat-select select" placeholder="Active">
												<mat-option value="1">Active</mat-option>
												<mat-option value="1">closed</mat-option>										
											</mat-select>
										</div>											
									</div>				
										</div>	
									</form>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Account</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Add ac-->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountListComponent, { className: "AccountListComponent", filePath: "src/app/features/pages/finance/account-list/account-list.component.ts", lineNumber: 20 });
})();
export {
  AccountListComponent
};
//# sourceMappingURL=chunk-S5YE2CAN.js.map
