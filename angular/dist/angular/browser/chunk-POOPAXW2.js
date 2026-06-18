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
  ɵɵpureFunction2,
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

// src/app/features/pages/hrm/payroll/payroll-list/payroll-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1) => ({ "badge-success": a0, "badge-danger": a1 });
function PayrollListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PayrollListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PayrollListComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 33);
    \u0275\u0275listener("click", function PayrollListComponent_For_67_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function PayrollListComponent_For_67_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 59)(9, "a", 98);
    \u0275\u0275element(10, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 100)(12, "p", 101)(13, "a", 102);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p")(16, "a");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 103);
    \u0275\u0275element(24, "i", 104);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 105)(27, "div", 106)(28, "a", 107);
    \u0275\u0275element(29, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 107);
    \u0275\u0275element(31, "i", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a", 110);
    \u0275\u0275element(33, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "a", 112);
    \u0275\u0275element(35, "i", 113);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.employeeDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.employeeDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.employee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.salary);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c1, data_r3.status === "Paid", data_r3.status === "UnPaid"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function PayrollListComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 114);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var PayrollListComponent = class _PayrollListComponent {
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
  routes = routes;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
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
        if (this.router.url == this.routes.payrollList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPayrollList().subscribe((apiRes) => {
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
  static \u0275fac = function PayrollListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayrollListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayrollListComponent, selectors: [["app-payroll-list"]], decls: 404, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-department", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather", "search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "employeeID"], ["mat-sort-header", "employee"], ["mat-sort-header", "email"], ["mat-sort-header", "salary"], ["mat-sort-header", "status"], ["id", "add-department", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-sm-6", "col-12"], [1, "mb-3"], [1, "form-label"], ["placeholder", "Choose", 1, "custom-mat-select", "select", "select2"], ["value", "1"], [1, "text-title"], [1, "mb-2"], ["type", "text", 1, "text-form", "form-control"], [1, "mb-3", "pb-3", "border-bottom"], [1, "fw-semibold", "text-gray-9", "mb-2"], [1, "d-flex", "align-items-center"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm2", 1, "form-check-input"], ["for", "Radio-sm2", 1, "form-check-label"], [1, "payroll-title"], [1, "col-lg-3", "col-sm-6", "col-12"], ["type", "text", 1, "form-control"], [1, "d-flex", "align-items-end", "border-bottom", "mb-3"], [1, "mb-3", "flex-grow-1"], [1, "subadd-btn", "mb-3", "ms-3"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-secondary", "btn-add"], [1, "ti", "ti-circle-plus", "fs-16"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "col-lg-12"], [1, "d-flex", "align-items-center", "justify-content-end"], ["type", "button", 1, "btn", "btn-previw", "me-2"], ["type", "button", 1, "btn", "btn-reset", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-save"], ["id", "edit-department", 1, "modal", "fade"], ["placeholder", "Carl Evans", 1, "custom-mat-select", "select", "select2"], ["type", "radio", "name", "Radio", "id", "Radio-sm3", "checked", "", 1, "form-check-input"], ["for", "Radio-sm3", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm4", 1, "form-check-input"], ["for", "Radio-sm4", 1, "form-check-label"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "avatar", "avatar-md", 3, "routerLink"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "text-dark", "mb-0"], [3, "routerLink"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action", "data-view"], ["href", "javascript:void(0);", 1, "me-2"], [1, "feather", "icon-eye", "action-eye"], [1, "feather", "icon-download"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-department", 1, "me-2"], [1, "feather", "icon-edit", "action-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, ""], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function PayrollListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Employee Salary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your employee salaries");
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
      \u0275\u0275listener("click", function PayrollListComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, PayrollListComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, PayrollListComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Payroll");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function PayrollListComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PayrollListComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Unpaid");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(45, "div", 28)(46, "div", 29)(47, "table", 30);
      \u0275\u0275listener("matSortChange", function PayrollListComponent_Template_table_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "thead", 31)(49, "tr")(50, "th", 32)(51, "label", 33);
      \u0275\u0275listener("click", function PayrollListComponent_Template_label_click_51_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(52, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function PayrollListComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "th", 36);
      \u0275\u0275text(55, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 37);
      \u0275\u0275text(57, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 38);
      \u0275\u0275text(59, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 39);
      \u0275\u0275text(61, "Salary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 40);
      \u0275\u0275text(63, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "tbody");
      \u0275\u0275repeaterCreate(66, PayrollListComponent_For_67_Template, 36, 15, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(68, PayrollListComponent_Conditional_68_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(69, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 41)(71, "div", 42)(72, "div", 43)(73, "div", 44)(74, "div", 2)(75, "h4");
      \u0275\u0275text(76, "Add Payroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "button", 45)(78, "span", 46);
      \u0275\u0275text(79, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "form")(81, "div", 47)(82, "div", 48)(83, "div", 49)(84, "div", 50)(85, "label", 51);
      \u0275\u0275text(86, "Select Employee ");
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "mat-select", 52)(90, "mat-option", 53);
      \u0275\u0275text(91, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "mat-option", 53);
      \u0275\u0275text(93, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "mat-option", 53);
      \u0275\u0275text(95, "Minerva Rameriz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "mat-option", 53);
      \u0275\u0275text(97, "Robert Lamon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "div", 54)(99, "h5", 55);
      \u0275\u0275text(100, "Salary Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 50)(102, "label", 51);
      \u0275\u0275text(103, "Basic Salary ");
      \u0275\u0275elementStart(104, "span");
      \u0275\u0275text(105, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(106, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 57)(108, "p", 58);
      \u0275\u0275text(109, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 59)(111, "div", 60);
      \u0275\u0275element(112, "input", 61);
      \u0275\u0275elementStart(113, "label", 62);
      \u0275\u0275text(114, " Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 63);
      \u0275\u0275element(116, "input", 64);
      \u0275\u0275elementStart(117, "label", 65);
      \u0275\u0275text(118, " Unpaid ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(119, "div", 66)(120, "p", 58);
      \u0275\u0275text(121, "Allowances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 67)(123, "div", 50)(124, "label", 51);
      \u0275\u0275text(125, "HRA Allowance ");
      \u0275\u0275elementStart(126, "span");
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 67)(130, "div", 50)(131, "label", 51);
      \u0275\u0275text(132, "Conveyance ");
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(135, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 67)(137, "div", 50)(138, "label", 51);
      \u0275\u0275text(139, "Medical Allowance ");
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(142, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 67)(144, "div", 50)(145, "label", 51);
      \u0275\u0275text(146, "Bonus ");
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275text(148, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(149, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 69)(151, "div", 70)(152, "label", 51);
      \u0275\u0275text(153, "Others");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 71)(156, "a", 72);
      \u0275\u0275element(157, "i", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "div", 66)(159, "p", 58);
      \u0275\u0275text(160, "Deductions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 67)(162, "div", 50)(163, "label", 51);
      \u0275\u0275text(164, "PF ");
      \u0275\u0275elementStart(165, "span");
      \u0275\u0275text(166, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(167, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 67)(169, "div", 50)(170, "label", 51);
      \u0275\u0275text(171, "Professional Tax ");
      \u0275\u0275elementStart(172, "span");
      \u0275\u0275text(173, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(174, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 67)(176, "div", 50)(177, "label", 51);
      \u0275\u0275text(178, "TDS ");
      \u0275\u0275elementStart(179, "span");
      \u0275\u0275text(180, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(181, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 67)(183, "div", 50)(184, "label", 51);
      \u0275\u0275text(185, "Loans & Others ");
      \u0275\u0275elementStart(186, "span");
      \u0275\u0275text(187, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(188, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 69)(190, "div", 70)(191, "label", 51);
      \u0275\u0275text(192, "Others");
      \u0275\u0275elementEnd();
      \u0275\u0275element(193, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 71)(195, "a", 72);
      \u0275\u0275element(196, "i", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 66)(198, "p", 58);
      \u0275\u0275text(199, "Deductions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 74)(201, "div", 50)(202, "label", 51);
      \u0275\u0275text(203, "Total Allowance ");
      \u0275\u0275elementStart(204, "span");
      \u0275\u0275text(205, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(206, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "div", 74)(208, "div", 50)(209, "label", 51);
      \u0275\u0275text(210, "Total Deduction ");
      \u0275\u0275elementStart(211, "span");
      \u0275\u0275text(212, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(213, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "div", 74)(215, "div", 50)(216, "label", 51);
      \u0275\u0275text(217, "Net Salary ");
      \u0275\u0275elementStart(218, "span");
      \u0275\u0275text(219, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(220, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "div", 75)(222, "div", 76)(223, "button", 77);
      \u0275\u0275text(224, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "button", 78);
      \u0275\u0275text(226, "Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "button", 79);
      \u0275\u0275text(228, "Save");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(229, "div", 80)(230, "div", 42)(231, "div", 43)(232, "div", 44)(233, "div", 2)(234, "h4");
      \u0275\u0275text(235, "Edit Payroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "button", 45)(237, "span", 46);
      \u0275\u0275text(238, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(239, "form")(240, "div", 47)(241, "div", 48)(242, "div", 49)(243, "div", 50)(244, "label", 51);
      \u0275\u0275text(245, "Select Employee ");
      \u0275\u0275elementStart(246, "span");
      \u0275\u0275text(247, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "mat-select", 81)(249, "mat-option", 53);
      \u0275\u0275text(250, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "mat-option", 53);
      \u0275\u0275text(252, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "mat-option", 53);
      \u0275\u0275text(254, "Minerva Rameriz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "mat-option", 53);
      \u0275\u0275text(256, "Robert Lamon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(257, "div", 54)(258, "h5", 55);
      \u0275\u0275text(259, "Salary Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 50)(261, "label", 51);
      \u0275\u0275text(262, "Basic Salary ");
      \u0275\u0275elementStart(263, "span");
      \u0275\u0275text(264, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(265, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div", 57)(267, "p", 58);
      \u0275\u0275text(268, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "div", 59)(270, "div", 60);
      \u0275\u0275element(271, "input", 82);
      \u0275\u0275elementStart(272, "label", 83);
      \u0275\u0275text(273, " Paid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 63);
      \u0275\u0275element(275, "input", 84);
      \u0275\u0275elementStart(276, "label", 85);
      \u0275\u0275text(277, " Unpaid ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(278, "div", 66)(279, "p", 58);
      \u0275\u0275text(280, "Allowances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "div", 67)(282, "div", 50)(283, "label", 51);
      \u0275\u0275text(284, "HRA Allowance ");
      \u0275\u0275elementStart(285, "span");
      \u0275\u0275text(286, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(287, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 67)(289, "div", 50)(290, "label", 51);
      \u0275\u0275text(291, "Conveyance ");
      \u0275\u0275elementStart(292, "span");
      \u0275\u0275text(293, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(294, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "div", 67)(296, "div", 50)(297, "label", 51);
      \u0275\u0275text(298, "Medical Allowance ");
      \u0275\u0275elementStart(299, "span");
      \u0275\u0275text(300, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(301, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "div", 67)(303, "div", 50)(304, "label", 51);
      \u0275\u0275text(305, "Bonus ");
      \u0275\u0275elementStart(306, "span");
      \u0275\u0275text(307, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(308, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "div", 69)(310, "div", 70)(311, "label", 51);
      \u0275\u0275text(312, "Others");
      \u0275\u0275elementEnd();
      \u0275\u0275element(313, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div", 71)(315, "a", 72);
      \u0275\u0275element(316, "i", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "div", 66)(318, "p", 58);
      \u0275\u0275text(319, "Deductions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "div", 67)(321, "div", 50)(322, "label", 51);
      \u0275\u0275text(323, "PF ");
      \u0275\u0275elementStart(324, "span");
      \u0275\u0275text(325, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(326, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "div", 67)(328, "div", 50)(329, "label", 51);
      \u0275\u0275text(330, "Professional Tax ");
      \u0275\u0275elementStart(331, "span");
      \u0275\u0275text(332, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(333, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "div", 67)(335, "div", 50)(336, "label", 51);
      \u0275\u0275text(337, "TDS ");
      \u0275\u0275elementStart(338, "span");
      \u0275\u0275text(339, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(340, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "div", 67)(342, "div", 50)(343, "label", 51);
      \u0275\u0275text(344, "Loans & Others ");
      \u0275\u0275elementStart(345, "span");
      \u0275\u0275text(346, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(347, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "div", 69)(349, "div", 70)(350, "label", 51);
      \u0275\u0275text(351, "Others");
      \u0275\u0275elementEnd();
      \u0275\u0275element(352, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "div", 71)(354, "a", 72);
      \u0275\u0275element(355, "i", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(356, "div", 66)(357, "p", 58);
      \u0275\u0275text(358, "Deductions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "div", 74)(360, "div", 50)(361, "label", 51);
      \u0275\u0275text(362, "Total Allowance ");
      \u0275\u0275elementStart(363, "span");
      \u0275\u0275text(364, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(365, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "div", 74)(367, "div", 50)(368, "label", 51);
      \u0275\u0275text(369, "Total Deduction ");
      \u0275\u0275elementStart(370, "span");
      \u0275\u0275text(371, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(372, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "div", 74)(374, "div", 50)(375, "label", 51);
      \u0275\u0275text(376, "Net Salary ");
      \u0275\u0275elementStart(377, "span");
      \u0275\u0275text(378, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(379, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "div", 75)(381, "div", 76)(382, "button", 77);
      \u0275\u0275text(383, "Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "button", 78);
      \u0275\u0275text(385, "Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "button", 79);
      \u0275\u0275text(387, "Save");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(388, "div", 86)(389, "div", 87)(390, "div", 43)(391, "div", 88)(392, "div", 89)(393, "span", 90);
      \u0275\u0275element(394, "i", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "h4", 92);
      \u0275\u0275text(396, "Delete Employee Salary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "p", 93);
      \u0275\u0275text(398, "Are you sure you want to delete employee salary?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "div", 94)(400, "button", 95);
      \u0275\u0275text(401, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "button", 96);
      \u0275\u0275text(403, "Yes Delete");
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
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 68 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayrollListComponent, [{
    type: Component,
    args: [{ selector: "app-payroll-list", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule, RouterLink], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Employee Salary</h4>
      <h6>Manage your employee salaries</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img
      src="assets/img/icons/pdf.svg" alt="img"></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img
      src="assets/img/icons/excel.svg" alt="img"></a>
    </li>
    <li>
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
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-department"><i data-feather="plus-circle" class="ti ti-circle-plus me-2"></i>Add Payroll</a>
  </div>
</div>


<!-- /product list -->
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div class="search-set">
      <div class="search-input">
        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather search"></i></a>
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
      
    </div>
  </div>
  <div class="card-body">
      <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table  datanew">
          <thead class="thead-light">
            <tr>
              <th class="no-sort">
               <label class="checkboxs" (click)="selectAll(initChecked)">
                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>
                      <span class="checkmarks"></span>
                    </label>
              </th>
              <th mat-sort-header="employeeID">ID</th>
              <th mat-sort-header="employee">Employee</th>
              <th mat-sort-header="email">Email</th>
              <th mat-sort-header="salary">Salary</th>
              <th mat-sort-header="status">Status</th>
              <th class="no-sort"></th>
            </tr>
          </thead>
          <tbody>
            @for (data of tableData; track data) {
              <tr>
                <td>
                      <label class="checkboxs" (click)="selectAll(initChecked)">
                        <input type="checkbox"  [(ngModel)]="initChecked"/>
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>{{data.id}}</td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.employeeDetails" class="avatar avatar-md"><img src="assets/img/users/{{data.img}}" class="img-fluid" alt="img"></a>
                    <div class="ms-2">
                        <p class="text-dark mb-0"><a [routerLink]="routes.employeeDetails">{{data.employee}}</a></p>
                        <p><a>{{data.role}}</a></p>
                      
                    </div>
                </div>
                </td>
                <td>{{data.email}}</td>
                <td>{{data.salary}}</td>
                <td><span class="badge d-inline-flex align-items-center badge-xs"
                [ngClass]="{'badge-success': data.status === 'Paid','badge-danger': data.status === 'UnPaid'}"><i class="ti ti-point-filled me-1"></i>{{data.status}}</span>
              </td>
              <td class="action-table-data">
                <div class="edit-delete-action data-view">
                  <a class="me-2" href="javascript:void(0);">
                    <i class="feather icon-eye action-eye"></i>
                  </a>
                  <a class="me-2" href="javascript:void(0);">
                    <i class="feather icon-download "></i>
                  </a>
                  <a class="me-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-department">
                    <i class="feather icon-edit action-edit"></i>
                  </a>
                  <a class="" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
                    <i class="feather icon-trash-2 feather-trash-2"></i>
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

		<!-- Add Department -->
		<div class="modal fade" id="add-department">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Add Payroll</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form >
						<div class="modal-body">
							<div class="row">
								<div class="col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Select Employee <span>*</span></label>
										<mat-select class="custom-mat-select select select2" placeholder="Choose">
											<mat-option value="1">Choose</mat-option>
											<mat-option value="1">Carl Evans</mat-option>
											<mat-option value="1">Minerva Rameriz</mat-option>
											<mat-option value="1">Robert Lamon</mat-option>
										</mat-select>
									</div>
								</div>
								<div class="text-title">
									<h5 class="mb-2">Salary Information</h5>
								</div>
								<div class="mb-3">
									<label class="form-label">Basic Salary <span>*</span></label>
										<input type="text" class="text-form form-control">
								</div>
								<div class="mb-3 pb-3 border-bottom">
									<p class="fw-semibold text-gray-9 mb-2">Status</p>
									<div class="d-flex align-items-center">
										<div class="form-check me-3">
											<input class="form-check-input" type="radio" name="Radio" id="Radio-sm1" checked>
											<label class="form-check-label" for="Radio-sm1">
												Paid
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="Radio" id="Radio-sm2">
											<label class="form-check-label" for="Radio-sm2">
												Unpaid
											</label>
										</div>
									</div>
								</div>
								<div class="payroll-title">
									<p class="fw-semibold text-gray-9 mb-2">Allowances</p>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">HRA Allowance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Conveyance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Medical Allowance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Bonus <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="d-flex align-items-end border-bottom mb-3">
									<div class="mb-3 flex-grow-1">
										<label class="form-label">Others</label>
										<input type="text" class="text-form form-control">
									</div>
									<div class="subadd-btn mb-3 ms-3">
										<a href="javascript:void(0);" class="btn btn-icon btn-secondary btn-add"><i class="ti ti-circle-plus fs-16"></i></a>
									</div>
								</div>
								<div class="payroll-title">
									<p class="fw-semibold text-gray-9 mb-2">Deductions</p>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">PF <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Professional Tax <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">TDS <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Loans & Others <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="d-flex align-items-end border-bottom mb-3">
									<div class="mb-3 flex-grow-1">
										<label class="form-label">Others</label>
										<input type="text" class="text-form form-control">
									</div>
									<div class="subadd-btn mb-3 ms-3">
										<a href="javascript:void(0);" class="btn btn-icon btn-secondary btn-add"><i class="ti ti-circle-plus fs-16"></i></a>
									</div>
								</div>
								<div class="payroll-title">
									<p class="fw-semibold text-gray-9 mb-2">Deductions</p>
								</div>
								<div class="col-lg-4 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Total Allowance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-4 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Total Deduction <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-4 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Net Salary <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="d-flex align-items-center justify-content-end">
										<button type="button" class="btn btn-previw me-2">Preview</button>
										<button type="button" class="btn btn-reset me-2">Reset</button>
										<button type="submit" class="btn btn-save" data-bs-dismiss="modal">Save</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Department -->

		<!-- Edit Department -->
		<div class="modal fade" id="edit-department">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Edit Payroll</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form >
						<div class="modal-body">
							<div class="row">
								<div class="col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Select Employee <span>*</span></label>
										<mat-select class="custom-mat-select select select2" placeholder="Carl Evans">
											<mat-option value="1">Choose</mat-option>
											<mat-option value="1">Carl Evans</mat-option>
											<mat-option value="1">Minerva Rameriz</mat-option>
											<mat-option value="1">Robert Lamon</mat-option>
										</mat-select>
									</div>
								</div>
								<div class="text-title">
									<h5 class="mb-2">Salary Information</h5>
								</div>
								<div class="mb-3">
									<label class="form-label">Basic Salary <span>*</span></label>
										<input type="text" class="text-form form-control">
								</div>
								<div class="mb-3 pb-3 border-bottom">
									<p class="fw-semibold text-gray-9 mb-2">Status</p>
									<div class="d-flex align-items-center">
										<div class="form-check me-3">
											<input class="form-check-input" type="radio" name="Radio" id="Radio-sm3" checked>
											<label class="form-check-label" for="Radio-sm3">
												Paid
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="Radio" id="Radio-sm4">
											<label class="form-check-label" for="Radio-sm4">
												Unpaid
											</label>
										</div>
									</div>
								</div>
								<div class="payroll-title">
									<p class="fw-semibold text-gray-9 mb-2">Allowances</p>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">HRA Allowance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Conveyance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Medical Allowance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Bonus <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="d-flex align-items-end border-bottom mb-3">
									<div class="mb-3 flex-grow-1">
										<label class="form-label">Others</label>
										<input type="text" class="text-form form-control">
									</div>
									<div class="subadd-btn mb-3 ms-3">
										<a href="javascript:void(0);" class="btn btn-icon btn-secondary btn-add"><i class="ti ti-circle-plus fs-16"></i></a>
									</div>
								</div>
								<div class="payroll-title">
									<p class="fw-semibold text-gray-9 mb-2">Deductions</p>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">PF <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Professional Tax <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">TDS <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Loans & Others <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="d-flex align-items-end border-bottom mb-3">
									<div class="mb-3 flex-grow-1">
										<label class="form-label">Others</label>
										<input type="text" class="text-form form-control">
									</div>
									<div class="subadd-btn mb-3 ms-3">
										<a href="javascript:void(0);" class="btn btn-icon btn-secondary btn-add"><i class="ti ti-circle-plus fs-16"></i></a>
									</div>
								</div>
								<div class="payroll-title">
									<p class="fw-semibold text-gray-9 mb-2">Deductions</p>
								</div>
								<div class="col-lg-4 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Total Allowance <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-4 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Total Deduction <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-4 col-sm-6 col-12">
									<div class="mb-3">
										<label class="form-label">Net Salary <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="d-flex align-items-center justify-content-end">
										<button type="button" class="btn btn-previw me-2">Preview</button>
										<button type="button" class="btn btn-reset me-2">Reset</button>
										<button type="submit" class="btn btn-save" data-bs-dismiss="modal">Save</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Edit Department -->

		<!-- delete modal -->
		<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Employee Salary</h4>
							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete employee salary?</p>
							<div class="modal-footer-btn mt-3 d-flex justify-content-center">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
							</div>						
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /delete modal -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayrollListComponent, { className: "PayrollListComponent", filePath: "src/app/features/pages/hrm/payroll/payroll-list/payroll-list.component.ts", lineNumber: 27 });
})();
export {
  PayrollListComponent
};
//# sourceMappingURL=chunk-POOPAXW2.js.map
