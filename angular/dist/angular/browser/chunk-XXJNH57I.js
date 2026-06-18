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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/pages/hrm/designation/designation.component.ts
var _c0 = () => ({ standalone: true });
function DesignationComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function DesignationComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function DesignationComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 34);
    \u0275\u0275listener("click", function DesignationComponent_For_102_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function DesignationComponent_For_102_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "span", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 84)(12, "div", 85)(13, "span", 86);
    \u0275\u0275element(14, "img", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 86);
    \u0275\u0275element(16, "img", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 86);
    \u0275\u0275element(18, "img", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 90);
    \u0275\u0275element(20, "img", 91);
    \u0275\u0275elementStart(21, "span", 92);
    \u0275\u0275text(22, "+2");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td")(28, "span", 93);
    \u0275\u0275element(29, "i", 94);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td", 95)(32, "div", 96)(33, "a", 97);
    \u0275\u0275element(34, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 99);
    \u0275\u0275element(36, "i", 100);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const designation_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(designation_r3.designation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", designation_r3.department, " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(designation_r3.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", designation_r3.members, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", designation_r3.status === "Active" ? "badge-success" : "bg-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", designation_r3.status, " ");
  }
}
function DesignationComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 101);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var DesignationComponent = class _DesignationComponent {
  data;
  pagination;
  router;
  sidebar;
  selectedValue1 = "";
  initChecked = false;
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Sort by Datee" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  routes = routes;
  tableData = [];
  // pagination variables
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
        if (this.router.url == this.routes.designation) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDesignation().subscribe((apiRes) => {
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
  selectedList2 = [
    { value: "Choose Designation" },
    { value: "UI/UX" },
    { value: "HR" },
    { value: "Admin" },
    { value: "Engineering" }
  ];
  selectedList3 = [
    { value: "Choose HOD" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" }
  ];
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
  static \u0275fac = function DesignationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DesignationComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignationComponent, selectors: [["app-designation"]], decls: 217, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-department", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body", "pb-0"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "designation"], ["mat-sort-header", "department"], ["mat-sort-header", "members"], ["mat-sort-header", "created"], ["mat-sort-header", "total"], ["mat-sort-header", "status"], ["id", "add-department", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Sales", 1, "cuatom-mat-select", "select"], ["value", "1"], [1, "input-blocks", "m-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-department", 1, "modal", "fade"], ["type", "text", "value", "Sales Manager", 1, "form-control"], ["placeholder", "Select", 1, "cuatom-mat-select", "select"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "text-gray-900"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "avatar-list-stacked", "avatar-group-sm"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/profiles/avatar-15.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "border", "border-white"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "text-fixed-white", "fs-10", "fw-medium", "position-relative"], ["src", "assets/img/profiles/avatar-17.jpg", "alt", "img"], [1, "position-absolute", "top-50", "start-50", "translate-middle", "text-center"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-department", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "p-2"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function DesignationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Designation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your designation");
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
      \u0275\u0275listener("click", function DesignationComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, DesignationComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, DesignationComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Designation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function DesignationComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DesignationComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Department ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Inventory");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "Finance");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 24)(49, "a", 25);
      \u0275\u0275text(50, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 26)(52, "li")(53, "a", 27);
      \u0275\u0275text(54, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 28)(59, "a", 25);
      \u0275\u0275text(60, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "ul", 26)(62, "li")(63, "a", 27);
      \u0275\u0275text(64, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 27);
      \u0275\u0275text(67, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 27);
      \u0275\u0275text(70, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 27);
      \u0275\u0275text(73, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 27);
      \u0275\u0275text(76, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(77, "div", 29)(78, "div", 30)(79, "table", 31)(80, "thead", 32)(81, "tr")(82, "th", 33)(83, "label", 34);
      \u0275\u0275listener("click", function DesignationComponent_Template_label_click_83_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(84, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function DesignationComponent_Template_input_ngModelChange_84_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "th", 37);
      \u0275\u0275text(87, "Designation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 38);
      \u0275\u0275text(89, "Departments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 39);
      \u0275\u0275text(91, "Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 40);
      \u0275\u0275text(93, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 41);
      \u0275\u0275text(95, "Total Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 42);
      \u0275\u0275text(97, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 33);
      \u0275\u0275text(99, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "tbody");
      \u0275\u0275repeaterCreate(101, DesignationComponent_For_102_Template, 37, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(103, DesignationComponent_Conditional_103_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(104, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 43)(106, "div", 44)(107, "div", 45)(108, "div", 46)(109, "div", 47)(110, "div", 48)(111, "div", 2)(112, "h4");
      \u0275\u0275text(113, "Add Designation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "button", 49)(115, "span", 50);
      \u0275\u0275text(116, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "form")(118, "div", 51)(119, "div", 52)(120, "div", 53)(121, "div", 54)(122, "label", 55);
      \u0275\u0275text(123, "Designation ");
      \u0275\u0275elementStart(124, "span", 56);
      \u0275\u0275text(125, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 53)(128, "div", 54)(129, "label", 55);
      \u0275\u0275text(130, "Department ");
      \u0275\u0275elementStart(131, "span", 56);
      \u0275\u0275text(132, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "mat-select", 58)(134, "mat-option", 59);
      \u0275\u0275text(135, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "mat-option", 59);
      \u0275\u0275text(137, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "mat-option", 59);
      \u0275\u0275text(139, "Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 59);
      \u0275\u0275text(141, "Finance");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "div", 60)(143, "div", 61)(144, "span", 62);
      \u0275\u0275text(145, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "input", 63)(147, "label", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(148, "div", 65)(149, "button", 66);
      \u0275\u0275text(150, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 67);
      \u0275\u0275text(152, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(153, "div", 68)(154, "div", 44)(155, "div", 45)(156, "div", 46)(157, "div", 47)(158, "div", 48)(159, "div", 2)(160, "h4");
      \u0275\u0275text(161, "Edit Designation ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "button", 49)(163, "span", 50);
      \u0275\u0275text(164, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(165, "form")(166, "div", 51)(167, "div", 52)(168, "div", 53)(169, "div", 54)(170, "label", 55);
      \u0275\u0275text(171, "Designation ");
      \u0275\u0275elementStart(172, "span", 56);
      \u0275\u0275text(173, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(174, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 53)(176, "div", 54)(177, "label", 55);
      \u0275\u0275text(178, "Department ");
      \u0275\u0275elementStart(179, "span", 56);
      \u0275\u0275text(180, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "mat-select", 70)(182, "mat-option", 59);
      \u0275\u0275text(183, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "mat-option", 59);
      \u0275\u0275text(185, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "mat-option", 59);
      \u0275\u0275text(187, "Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "mat-option", 59);
      \u0275\u0275text(189, "Finance");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "div", 60)(191, "div", 61)(192, "span", 62);
      \u0275\u0275text(193, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(194, "input", 71)(195, "label", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 65)(197, "button", 66);
      \u0275\u0275text(198, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 67);
      \u0275\u0275text(200, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(201, "div", 73)(202, "div", 44)(203, "div", 45)(204, "div", 46)(205, "div", 74)(206, "span", 75);
      \u0275\u0275element(207, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "h4", 77);
      \u0275\u0275text(209, "Delete Designation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p", 78);
      \u0275\u0275text(211, "Are you sure you want to delete designation?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 79)(213, "button", 80);
      \u0275\u0275text(214, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "button", 81);
      \u0275\u0275text(216, "Yes Delete");
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
      \u0275\u0275advance(51);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 103 : -1);
    }
  }, dependencies: [CommonModule, NgClass, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignationComponent, [{
    type: Component,
    args: [{ selector: "app-designation", imports: [CommonModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Designation</h4>
      <h6>Manage your designation</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Pdf"
        matTooltip="Pdf"
        matTooltipPosition="above"
        ><img src="assets/img/icons/pdf.svg" alt="img"
      /></a>
    </li>
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Excel"
        matTooltip="Excel"
        matTooltipPosition="above"
        ><img src="assets/img/icons/excel.svg" alt="img"
      /></a>
    </li>
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Refresh"
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
        title="Collapse"
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
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-department"><i  class="ti ti-circle-plus me-2"></i>Add Designation</a>
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
										Department
									</a>
									<ul class="dropdown-menu  dropdown-menu-end p-3">
										<li>
											<a href="javascript:void(0);" class="dropdown-item rounded-1">Sales</a>
										</li>
										<li>
											<a href="javascript:void(0);" class="dropdown-item rounded-1">Inventory</a>
										</li>
										<li>
											<a href="javascript:void(0);" class="dropdown-item rounded-1">Finance</a>
										</li>
									</ul>
								</div>
								<div class="dropdown me-2">
									<a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
										Select Status
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
  <div class="card-body pb-0">
      <div class="table-responsive">
        <table   matSort
          matSortActive="Sno"
          matSortDirection="asc"
          matSortDisableClear
          class="table  datanew">
          <thead class="thead-light">
            <tr>
              <th class="no-sort">
               <label class="checkboxs" (click)="selectAll(initChecked)">
                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>
                      <span class="checkmarks"></span>
                    </label>
              </th>
              <th mat-sort-header="designation">Designation</th>
              <th mat-sort-header="department">Departments</th>
              <th mat-sort-header="members">Members</th>
              <th mat-sort-header="created">Created On</th>
              <th mat-sort-header="total">Total Members</th>
              <th mat-sort-header="status">Status</th>
              <th class="no-sort">Action</th>
            </tr>
          </thead>
          <tbody>
            @for (designation of tableData; track designation; let i = $index) {
              <tr>
                <td>
                      <label class="checkboxs" (click)="selectAll(initChecked)">
                        <input type="checkbox"  [(ngModel)]="initChecked"/>
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                <td>
                  <span class="text-gray-900">{{designation.designation}}</span>
                </td>
                <td>
                  {{designation.department}}
                </td>
                <td>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="avatar-list-stacked avatar-group-sm">
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">
                      </span>
                      <span class="avatar avatar-rounded">
                        <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">
                      </span>
                      <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">
                        <img src="assets/img/profiles/avatar-17.jpg" alt="img">
                        <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>
                      </a>
                    </div>
                  </div>		
                </td>
                <td>{{designation.createdOn}}</td>
                <td>
                  {{designation.members}}
                </td>
                <td>
                  <span class="badge  d-inline-flex align-items-center badge-xs" [ngClass]="designation.status==='Active'?'badge-success':'bg-danger'">
                    <i class="ti ti-point-filled me-1"></i>{{designation.status}}
                  </span>
                </td>
                <td class="action-table-data">
                  <div class="edit-delete-action">
                    <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-department">
                      <i  class="feather icon-edit feather-edit"></i>
                    </a>
                    <a class=" p-2" href="javascript:void(0);">
                      <i  class="feather icon-trash-2 feather-trash-2" data-bs-toggle="modal" data-bs-target="#delete-modal"></i>
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
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header">
                  <div class="page-title">
                    <h4>Add Designation</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Designation <span class="text-danger"> *</span></label>
                          <input type="text" class="form-control">
                        </div>
                      </div>		
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Department <span class="text-danger"> *</span></label>
                          <mat-select class="cuatom-mat-select select" placeholder="Sales">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">Sales</mat-option>
                            <mat-option value="1">Inventory</mat-option>
                            <mat-option value="1">Finance</mat-option>
                          </mat-select>
                        </div>
                      </div>		
                      <div class="input-blocks m-0">
                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span class="status-label">Status</span>
                          <input type="checkbox" id="user5" class="check" checked>
                          <label for="user5" class="checktoggle">	</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Add Department -->
  
      <!-- Edit Department -->
      <div class="modal fade" id="edit-department">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header">
                  <div class="page-title">
                    <h4>Edit Designation </h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Designation <span class="text-danger"> *</span></label>
                          <input type="text" class="form-control" value="Sales Manager">
                        </div>
                      </div>		
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Department <span class="text-danger"> *</span></label>
                          <mat-select class="cuatom-mat-select select" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">Sales</mat-option>
                            <mat-option value="1">Inventory</mat-option>
                            <mat-option value="1">Finance</mat-option>
                          </mat-select>
                        </div>
                      </div>		
                      <div class="input-blocks m-0">
                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span class="status-label">Status</span>
                          <input type="checkbox" id="user6" class="check" checked>
                          <label for="user6" class="checktoggle">	</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                  </div>
                </form>
              </div>
            </div>
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
                <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Designation</h4>
                <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete designation?</p>
                <div class="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
                </div>						
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /delete modal -->
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignationComponent, { className: "DesignationComponent", filePath: "src/app/features/pages/hrm/designation/designation.component.ts", lineNumber: 25 });
})();
export {
  DesignationComponent
};
//# sourceMappingURL=chunk-XXJNH57I.js.map
