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

// src/app/features/pages/hrm/employee/employee-list/employee-list.component.ts
var _c0 = () => ({ standalone: true });
function EmployeeListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 17);
  }
}
function EmployeeListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 17);
  }
}
function EmployeeListComponent_For_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 57);
    \u0275\u0275listener("click", function EmployeeListComponent_For_144_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeeListComponent_For_144_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "a", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "div", 81)(10, "a", 82);
    \u0275\u0275element(11, "img", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 84)(13, "p", 85)(14, "a", 80);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 86);
    \u0275\u0275element(26, "i", 87);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 88)(29, "div", 89)(30, "a", 90);
    \u0275\u0275element(31, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a", 90);
    \u0275\u0275element(33, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "a", 93);
    \u0275\u0275element(35, "i", 94);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.employeeDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.employeeDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.employeeDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.employee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.designation, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r3.phone, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.shift, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r3.status === "Active" ? "bg-success" : "bg-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.employeeDetails);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.editEmployee);
  }
}
function EmployeeListComponent_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 95);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var EmployeeListComponent = class _EmployeeListComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedValue3 = "";
  routes = routes;
  selectedList3 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
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
        if (this.router.url == this.routes.employeesList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getEmployeeList().subscribe((apiRes) => {
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedList1 = [
    { value: "Choose Name" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" },
    { value: "Robert Grossman" },
    { value: "Janet Hembre" }
  ];
  selectedList2 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
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
  static \u0275fac = function EmployeeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeListComponent, selectors: [["app-employee-list"]], decls: 163, vars: 12, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "d-flex", "me-2", "pe-2", "border-end"], [1, "btn-list", "active", "bg-primary", "me-2", 3, "routerLink"], ["data-feather", "list", 1, "feather-user", "feather", "feather", "icon-list", "text-white"], [1, "btn-grid", "me-2", 3, "routerLink"], ["data-feather", "grid", 1, "feather-user", "feather", "icon-grid"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "bg-purple", "border-0"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-white"], [1, "text-white"], [1, "avatar", "avatar-lg", "bg-purple-900"], [1, "ti", "ti-users-group"], [1, "card", "bg-teal", "border-0"], [1, "avatar", "avatar-lg", "bg-teal-900"], [1, "ti", "ti-user-star"], [1, "card", "bg-secondary", "border-0"], [1, "avatar", "avatar-lg", "bg-secondary-900"], [1, "ti", "ti-user-exclamation"], [1, "card", "bg-info", "border-0"], [1, "avatar", "avatar-lg", "bg-info-900"], [1, "ti", "ti-user-check"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "code"], ["mat-sort-header", "customer"], ["mat-sort-header", "compa"], ["mat-sort-header", "email"], ["mat-sort-header", "phone"], ["mat-sort-header", "country"], ["mat-sort-header", "status"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", 3, "routerLink"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "text-dark", "mb-0"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1", "fs-11"], [1, "d-flex"], [1, "edit-delete-action", "d-flex", "align-items-center"], [1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "routerLink"], ["data-feather", "eye", 1, "feather", "icon-eye"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function EmployeeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Employees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your employees");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "div", 4)(10, "a", 5);
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "li", 9)(15, "a", 10);
      \u0275\u0275element(16, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li", 9)(18, "a", 12);
      \u0275\u0275element(19, "img", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 14);
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 16);
      \u0275\u0275listener("click", function EmployeeListComponent_Template_a_click_24_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(25, EmployeeListComponent_Conditional_25_Template, 1, 0, "i", 17);
      \u0275\u0275conditionalCreate(26, EmployeeListComponent_Conditional_26_Template, 1, 0, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 18)(28, "a", 19);
      \u0275\u0275element(29, "i", 20);
      \u0275\u0275text(30, "Add Employee");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "div", 24)(35, "div")(36, "p", 25);
      \u0275\u0275text(37, "Total Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h4", 26);
      \u0275\u0275text(39, "1007");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div")(41, "span", 27);
      \u0275\u0275element(42, "i", 28);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "div", 22)(44, "div", 29)(45, "div", 24)(46, "div")(47, "p", 25);
      \u0275\u0275text(48, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h4", 26);
      \u0275\u0275text(50, "1007");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div")(52, "span", 30);
      \u0275\u0275element(53, "i", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 22)(55, "div", 32)(56, "div", 24)(57, "div")(58, "p", 25);
      \u0275\u0275text(59, "Inactive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h4", 26);
      \u0275\u0275text(61, "1007");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div")(63, "span", 33);
      \u0275\u0275element(64, "i", 34);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 22)(66, "div", 35)(67, "div", 24)(68, "div")(69, "p", 25);
      \u0275\u0275text(70, "New Joiners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h4", 26);
      \u0275\u0275text(72, "67");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div")(74, "span", 36);
      \u0275\u0275element(75, "i", 37);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(76, "div", 38)(77, "div", 39)(78, "div", 40)(79, "div", 41)(80, "a", 42);
      \u0275\u0275element(81, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 44)(83, "label")(84, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function EmployeeListComponent_Template_input_ngModelChange_84_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function EmployeeListComponent_Template_input_ngModelChange_84_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 46)(86, "div", 47)(87, "a", 48);
      \u0275\u0275text(88, " Select Employees ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "ul", 49)(90, "li")(91, "a", 50);
      \u0275\u0275text(92, "Anthony Lewis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "a", 50);
      \u0275\u0275text(95, "Brian Villalobos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "a", 50);
      \u0275\u0275text(98, "Harvey Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "a", 50);
      \u0275\u0275text(101, "Stephan Peralt");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 51)(103, "a", 48);
      \u0275\u0275text(104, " Designation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "ul", 49)(106, "li")(107, "a", 50);
      \u0275\u0275text(108, "System Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li")(110, "a", 50);
      \u0275\u0275text(111, "Designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "li")(113, "a", 50);
      \u0275\u0275text(114, "Tech Lead");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "li")(116, "a", 50);
      \u0275\u0275text(117, "Database administrator");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(118, "div", 52)(119, "div", 53)(120, "table", 54);
      \u0275\u0275listener("matSortChange", function EmployeeListComponent_Template_table_matSortChange_120_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(121, "thead", 55)(122, "tr")(123, "th", 56)(124, "label", 57);
      \u0275\u0275listener("click", function EmployeeListComponent_Template_label_click_124_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(125, "input", 58);
      \u0275\u0275twoWayListener("ngModelChange", function EmployeeListComponent_Template_input_ngModelChange_125_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(126, "span", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "th", 60);
      \u0275\u0275text(128, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 61);
      \u0275\u0275text(130, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 62);
      \u0275\u0275text(132, "Desiignation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 63);
      \u0275\u0275text(134, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 64);
      \u0275\u0275text(136, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th", 65);
      \u0275\u0275text(138, "Shift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th", 66);
      \u0275\u0275text(140, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(141, "th", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "tbody");
      \u0275\u0275repeaterCreate(143, EmployeeListComponent_For_144_Template, 36, 16, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(145, EmployeeListComponent_Conditional_145_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(146, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 67)(148, "div", 68)(149, "div", 69)(150, "div", 70)(151, "div", 71)(152, "span", 72);
      \u0275\u0275element(153, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "h4", 74);
      \u0275\u0275text(155, "Delete Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p", 75);
      \u0275\u0275text(157, "Are you sure you want to delete employee?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 76)(159, "button", 77);
      \u0275\u0275text(160, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "button", 78);
      \u0275\u0275text(162, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.employeesList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.employeesGrid);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 26 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.addEmployee);
      \u0275\u0275advance(56);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 145 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, MatSelectModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeListComponent, [{
    type: Component,
    args: [{ selector: "app-employee-list", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule, RouterLink], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Employees</h4>
      <h6>Manage your employees</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <div class="d-flex me-2 pe-2 border-end">
        <a [routerLink]="routes.employeesList" class="btn-list active bg-primary me-2"><i data-feather="list" class="feather-user feather feather icon-list text-white"></i></a>
        <a [routerLink]="routes.employeesGrid" class="btn-grid  me-2"><i data-feather="grid" class="feather-user feather icon-grid "></i></a>
      </div>
    </li>
    <li class="me-2">
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
    </li>
    <li class="me-2">
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>
    </li>
    <li>
      <a (click)="toggleCollapse()" [class.active]="isCollapsed"  data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
  </ul>
  <div class="page-btn">
    <a [routerLink]="routes.addEmployee" class="btn btn-primary"><i class="ti ti-circle-plus me-2"></i>Add Employee</a>
  </div>
</div>
<div class="row">
  <div class="col-xl-3 col-md-6">
    <div class="card bg-purple border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">Total Employee</p>
          <h4 class="text-white">1007</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-purple-900"><i class="ti ti-users-group"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-teal border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">Active</p>
          <h4 class="text-white">1007</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-teal-900"><i class="ti ti-user-star"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-secondary border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">Inactive</p>
          <h4 class="text-white">1007</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-secondary-900"><i class="ti ti-user-exclamation"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-info border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">New Joiners</p>
          <h4 class="text-white">67</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-info-900"><i class="ti ti-user-check"></i></span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- product list -->
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
          Select Employees 
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Anthony Lewis</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Brian Villalobos</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Harvey Smith</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Stephan Peralt</a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          Designation
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">System Admin</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Designer</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Tech Lead</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Database administrator</a>
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
                    <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>
                    <span class="checkmarks"></span>
                  </label>
            </th>
            <th mat-sort-header="code">ID</th>
            <th  mat-sort-header="customer">Employee</th>
            <th mat-sort-header="compa">Desiignation</th>
            <th mat-sort-header="email">Email</th>
            <th mat-sort-header="phone">Phone</th>
            <th mat-sort-header="country">Shift</th>
            <th mat-sort-header="status">Status</th>
            <th class="no-sort"></th>
          </tr>
        </thead>
        <tbody>
          @for (data of tableData; track data; let i = $index) {
            <tr>
              <td>
                    <label class="checkboxs" (click)="selectAll(initChecked)">
                      <input type="checkbox"  [(ngModel)]="initChecked"/>
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td>
                    <a [routerLink]="routes.employeeDetails">{{data.id}}</a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a [routerLink]="routes.employeeDetails" class="avatar avatar-md"><img src="assets/img/users/{{data.img}}" class="img-fluid" alt="img"></a>
                      <div class="ms-2">
                        <p class="text-dark mb-0"><a [routerLink]="routes.employeeDetails">{{data.employee}}</a></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{data.designation}}
                  </td>
                  <td>
                    {{data.email}}								
                  </td>
                  <td>{{data.phone}} </td>
                  <td>
                   {{data.shift}}
                  </td>
                  <td><span class="badge badge-success d-inline-flex align-items-center badge-xs" [ngClass]="data.status==='Active'?'bg-success':'bg-danger'"><i class="ti ti-point-filled me-1 fs-11"></i>{{data.status}}</span></td>
                  <td class="d-flex">
                    <div class="edit-delete-action d-flex align-items-center">
                      <a class="me-2 p-2 d-flex align-items-center border rounded" [routerLink]="routes.employeeDetails">
                        <i data-feather="eye" class="feather icon-eye"></i>
                      </a>
                      <a class="me-2 p-2 d-flex align-items-center border rounded" [routerLink]="routes.editEmployee">
                        <i data-feather="edit" class="feather icon-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);">
                        <i data-feather="trash-2" class="feather icon-trash-2"></i>
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


<div class="modal fade" id="delete-modal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content p-5 px-3 text-center">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Employee</h4>
          <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete employee?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeListComponent, { className: "EmployeeListComponent", filePath: "src/app/features/pages/hrm/employee/employee-list/employee-list.component.ts", lineNumber: 31 });
})();
export {
  EmployeeListComponent
};
//# sourceMappingURL=chunk-564EVNOV.js.map
