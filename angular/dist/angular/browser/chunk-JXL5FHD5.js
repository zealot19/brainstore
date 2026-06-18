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

// src/app/features/pages/hrm/leaves/leaves-admin/leaves-admin.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => ({ adaptivePosition: true });
var _c2 = (a0, a1) => ({ "badge-success": a0, "badge-danger": a1 });
function LeavesAdminComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function LeavesAdminComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function LeavesAdminComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 38);
    \u0275\u0275listener("click", function LeavesAdminComponent_For_80_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesAdminComponent_For_80_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 98)(9, "a", 99);
    \u0275\u0275element(10, "img", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6")(13, "a", 101);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td")(30, "span", 102);
    \u0275\u0275element(31, "i", 103);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td", 104)(34, "div", 105)(35, "a", 106);
    \u0275\u0275element(36, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 108);
    \u0275\u0275element(38, "i", 109);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r3.employee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.designation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.fromDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.toDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.daysOrHours);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.appliedOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.shift);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c2, data_r3.status === "Approved", data_r3.status === "Rejected"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function LeavesAdminComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 110);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var LeavesAdminComponent = class _LeavesAdminComponent {
  data;
  pagination;
  router;
  sidebar;
  routes = routes;
  initChecked = false;
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
        if (this.router.url == this.routes.leavesAdmin) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getLeavesAdmin().subscribe((apiRes) => {
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Employee" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" },
    { value: "Robert Grossman" },
    { value: "Janet Hembre" }
  ];
  selectedList3 = [
    { value: "Choose Type" },
    { value: "Sick Leave" },
    { value: "Maternity" },
    { value: "Vacation" }
  ];
  selectedList4 = [
    { value: "Choose Status" },
    { value: "Approved" },
    { value: "Rejected" }
  ];
  selectedList5 = [
    { value: "Approved" },
    { value: "Rejected" }
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
  showBox = false;
  toggleBox() {
    this.showBox = !this.showBox;
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
  static \u0275fac = function LeavesAdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeavesAdminComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeavesAdminComponent, selectors: [["app-leaves-admin"]], decls: 303, vars: 27, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-leave", 1, "btn", "btn-primary"], [1, "feather", "icon-plus-circle", "me-1"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "me-2", "date-select-small"], [1, "input-addon-left", "position-relative", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "Select Date", 1, "form-control", "datetimepicker"], [1, "cus-icon"], ["data-feather", "calendar", 1, "feather", "icon-calendar", "feather-clock"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body", "pb-0"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "empid"], ["mat-sort-header", "empname"], ["mat-sort-header", "type"], ["mat-sort-header", "date"], ["mat-sort-header", "todate"], ["mat-sort-header", "hours"], ["mat-sort-header", "applied"], ["mat-sort-header", "shift"], ["mat-sort-header", "status"], ["id", "add-leave", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-6"], [1, "input-addon-right", "position-relative", "ngxdate7"], ["type", "text", "bsDatepicker", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], ["data-feather", "calendar", 1, "feather-clock"], [1, "input-addon-right", "position-relative", "ngxdate6"], [1, "input-addon-right", "position-relative", "ngxdate5"], [1, "bg-light", "rounded", "p-3", "pb-0"], ["type", "text", "readonly", "", 1, "form-control", "bg-light"], [1, "summer-description-box", "mb-0"], [3, "editor"], [3, "editor", "toolbar"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-leave", 1, "modal", "fade"], ["placeholder", "Carl Evans", 1, "custom-mat-select", "select"], ["placeholder", "Sick Leave", 1, "custom-mat-select", "select"], [1, "input-addon-right", "position-relative", "ngxdate2"], [1, "input-addon-right", "position-relative", "ngxdate3"], [1, "input-addon-right", "position-relative", "ngxdate4"], ["placeholder", "Full Day", 1, "custom-mat-select", "select"], ["type", "text", "value", "01", "readonly", "", 1, "form-control", "bg-light"], ["type", "text", "value", "08", "readonly", "", 1, "form-control", "bg-light"], ["id", "delete-modal", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-leave", 1, "me-3", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "me-3", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function LeavesAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Leaves");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Leaves");
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
      \u0275\u0275listener("click", function LeavesAdminComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, LeavesAdminComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, LeavesAdminComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Apply Leave");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function LeavesAdminComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function LeavesAdminComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "div", 25);
      \u0275\u0275element(37, "input", 26);
      \u0275\u0275elementStart(38, "span", 27);
      \u0275\u0275element(39, "i", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 29)(41, "a", 30);
      \u0275\u0275text(42, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ul", 31)(44, "li")(45, "a", 32);
      \u0275\u0275text(46, "Approved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 32);
      \u0275\u0275text(49, "Rejected");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(50, "div", 33)(51, "div", 34)(52, "table", 35);
      \u0275\u0275listener("matSortChange", function LeavesAdminComponent_Template_table_matSortChange_52_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(53, "thead", 36)(54, "tr")(55, "th", 37)(56, "label", 38);
      \u0275\u0275listener("click", function LeavesAdminComponent_Template_label_click_56_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(57, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function LeavesAdminComponent_Template_input_ngModelChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "th", 41);
      \u0275\u0275text(60, "Id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 42);
      \u0275\u0275text(62, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 43);
      \u0275\u0275text(64, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 44);
      \u0275\u0275text(66, "From Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 45);
      \u0275\u0275text(68, "To Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 46);
      \u0275\u0275text(70, "Days/Hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 47);
      \u0275\u0275text(72, "Applied On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 48);
      \u0275\u0275text(74, "Shift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 49);
      \u0275\u0275text(76, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "th", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "tbody");
      \u0275\u0275repeaterCreate(79, LeavesAdminComponent_For_80_Template, 39, 17, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(81, LeavesAdminComponent_Conditional_81_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(82, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 50)(84, "div", 51)(85, "div", 52)(86, "div", 53)(87, "div", 2)(88, "h4");
      \u0275\u0275text(89, "Apply Leave");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "button", 54)(91, "span", 55);
      \u0275\u0275text(92, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "form")(94, "div", 56)(95, "div", 57)(96, "div", 58)(97, "div", 59)(98, "label", 60);
      \u0275\u0275text(99, "Employee ");
      \u0275\u0275elementStart(100, "span", 61);
      \u0275\u0275text(101, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "mat-select", 62)(103, "mat-option", 63);
      \u0275\u0275text(104, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "mat-option", 63);
      \u0275\u0275text(106, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "mat-option", 63);
      \u0275\u0275text(108, "Minerva Rameriz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "mat-option", 63);
      \u0275\u0275text(110, "Robert Lamon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(111, "div", 58)(112, "div", 59)(113, "label", 60);
      \u0275\u0275text(114, "Leave Type ");
      \u0275\u0275elementStart(115, "span", 61);
      \u0275\u0275text(116, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "mat-select", 62)(118, "mat-option", 63);
      \u0275\u0275text(119, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "mat-option", 63);
      \u0275\u0275text(121, "Sick Leave");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "mat-option", 63);
      \u0275\u0275text(123, "Casual Leave");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(124, "div", 58)(125, "div", 57)(126, "div", 64)(127, "div", 59)(128, "label", 60);
      \u0275\u0275text(129, "From ");
      \u0275\u0275elementStart(130, "span", 61);
      \u0275\u0275text(131, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 65);
      \u0275\u0275element(133, "input", 66);
      \u0275\u0275elementStart(134, "span", 27);
      \u0275\u0275element(135, "i", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 64)(137, "div", 59)(138, "label", 60);
      \u0275\u0275text(139, "To ");
      \u0275\u0275elementStart(140, "span", 61);
      \u0275\u0275text(141, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 68);
      \u0275\u0275element(143, "input", 66);
      \u0275\u0275elementStart(144, "span", 27);
      \u0275\u0275element(145, "i", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "div", 64)(147, "div", 59)(148, "div", 69);
      \u0275\u0275element(149, "input", 66);
      \u0275\u0275elementStart(150, "span", 27);
      \u0275\u0275element(151, "i", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(152, "div", 64)(153, "div", 59)(154, "mat-select", 62)(155, "mat-option", 63);
      \u0275\u0275text(156, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "mat-option", 63);
      \u0275\u0275text(158, "Full Day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "mat-option", 63);
      \u0275\u0275text(160, "Half Day");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(161, "div", 58)(162, "div", 70)(163, "div", 57)(164, "div", 64)(165, "div", 59)(166, "label", 60);
      \u0275\u0275text(167, "No of Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(168, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 64)(170, "div", 59)(171, "label", 60);
      \u0275\u0275text(172, "Remaining Leaves");
      \u0275\u0275elementEnd();
      \u0275\u0275element(173, "input", 71);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(174, "div", 58)(175, "div", 72)(176, "label", 60);
      \u0275\u0275text(177, "Reason");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "ngx-editor", 73);
      \u0275\u0275element(179, "ngx-editor-menu", 74);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(180, "div", 75)(181, "button", 76);
      \u0275\u0275text(182, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "button", 77);
      \u0275\u0275text(184, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(185, "div", 78)(186, "div", 51)(187, "div", 52)(188, "div", 53)(189, "div", 2)(190, "h4");
      \u0275\u0275text(191, "Edit Leave");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "button", 54)(193, "span", 55);
      \u0275\u0275text(194, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(195, "form")(196, "div", 56)(197, "div", 57)(198, "div", 58)(199, "div", 59)(200, "label", 60);
      \u0275\u0275text(201, "Employee ");
      \u0275\u0275elementStart(202, "span", 61);
      \u0275\u0275text(203, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "mat-select", 79)(205, "mat-option", 63);
      \u0275\u0275text(206, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "mat-option", 63);
      \u0275\u0275text(208, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "mat-option", 63);
      \u0275\u0275text(210, "Minerva Rameriz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "mat-option", 63);
      \u0275\u0275text(212, "Robert Lamon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(213, "div", 58)(214, "div", 59)(215, "label", 60);
      \u0275\u0275text(216, "Leave Type ");
      \u0275\u0275elementStart(217, "span", 61);
      \u0275\u0275text(218, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "mat-select", 80)(220, "mat-option", 63);
      \u0275\u0275text(221, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "mat-option", 63);
      \u0275\u0275text(223, "Sick Leave");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "mat-option", 63);
      \u0275\u0275text(225, "Casual Leave");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(226, "div", 58)(227, "div", 57)(228, "div", 64)(229, "div", 59)(230, "label", 60);
      \u0275\u0275text(231, "From ");
      \u0275\u0275elementStart(232, "span", 61);
      \u0275\u0275text(233, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "div", 81);
      \u0275\u0275element(235, "input", 66);
      \u0275\u0275elementStart(236, "span", 27);
      \u0275\u0275element(237, "i", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(238, "div", 64)(239, "div", 59)(240, "label", 60);
      \u0275\u0275text(241, "To ");
      \u0275\u0275elementStart(242, "span", 61);
      \u0275\u0275text(243, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "div", 82);
      \u0275\u0275element(245, "input", 66);
      \u0275\u0275elementStart(246, "span", 27);
      \u0275\u0275element(247, "i", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(248, "div", 64)(249, "div", 59)(250, "div", 83);
      \u0275\u0275element(251, "input", 66);
      \u0275\u0275elementStart(252, "span", 27);
      \u0275\u0275element(253, "i", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(254, "div", 64)(255, "div", 59)(256, "mat-select", 84)(257, "mat-option", 63);
      \u0275\u0275text(258, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "mat-option", 63);
      \u0275\u0275text(260, "Full Day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "mat-option", 63);
      \u0275\u0275text(262, "Half Day");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(263, "div", 58)(264, "div", 70)(265, "div", 57)(266, "div", 64)(267, "div", 59)(268, "label", 60);
      \u0275\u0275text(269, "No of Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(270, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "div", 64)(272, "div", 59)(273, "label", 60);
      \u0275\u0275text(274, "Remaining Leaves");
      \u0275\u0275elementEnd();
      \u0275\u0275element(275, "input", 86);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(276, "div", 58)(277, "div", 72)(278, "label", 60);
      \u0275\u0275text(279, "Reason");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "ngx-editor", 73);
      \u0275\u0275element(281, "ngx-editor-menu", 74);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(282, "div", 75)(283, "button", 76);
      \u0275\u0275text(284, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "button", 77);
      \u0275\u0275text(286, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(287, "div", 87)(288, "div", 51)(289, "div", 52)(290, "div", 88)(291, "div", 89)(292, "span", 90);
      \u0275\u0275element(293, "i", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "h4", 92);
      \u0275\u0275text(295, "Delete Leave");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "p", 93);
      \u0275\u0275text(297, "Are you sure you want to delete leave?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 94)(299, "button", 95);
      \u0275\u0275text(300, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "button", 96);
      \u0275\u0275text(302, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0));
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 81 : -1);
      \u0275\u0275advance(52);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(22, _c1));
      \u0275\u0275advance(6);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(23, _c1));
      \u0275\u0275advance(29);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(56);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(24, _c1));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(25, _c1));
      \u0275\u0275advance(6);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(26, _c1));
      \u0275\u0275advance(29);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, NgxEditorComponent, MenuComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeavesAdminComponent, [{
    type: Component,
    args: [{ selector: "app-leaves-admin", imports: [CommonModule, NgxEditorModule, BsDatepickerModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: `
<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Leaves</h4>
      <h6>Manage your Leaves</h6>
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
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-leave"><i class="feather icon-plus-circle me-1"></i>Apply Leave</a>
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
              placeholder="Search..."
              />
            </label>
          </div>
        </div>
    </div>
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
      <div class="me-2 date-select-small">
        <div class="input-addon-left position-relative ngxdate">
          <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate" placeholder="Select Date">
          <span class="cus-icon"><i data-feather="calendar" class="feather icon-calendar feather-clock"></i></span>
        </div>
      </div>
      <div class="dropdown">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          Select Status
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Approved</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Rejected</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card-body pb-0">
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
              <th mat-sort-header="empid">Id</th>
              <th mat-sort-header="empname">Employee</th>
              <th mat-sort-header="type">Type</th>
              <th mat-sort-header="date">From Date</th>
              <th mat-sort-header="todate">To Date</th>
              <th mat-sort-header="hours">Days/Hours</th>
              <th mat-sort-header="applied">Applied  On</th>
              <th mat-sort-header="shift">Shift</th>
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
                        <a href="javascript:void(0);" class="avatar avatar-md me-2">
                          <img src="assets/img/users/{{data.img}}" alt="product">
                        </a>
                        <div>
                          <h6><a href="javascript:void(0);">{{data.employee}}</a></h6>
                          <span>{{data.designation}}</span>
                        </div>
                      </div>
                    </td>
                    <td>{{data.type}}</td>
                    <td>{{data.fromDate}}</td>
                    <td>{{data.toDate}}</td>
                    <td>{{data.daysOrHours}}</td>
                    <td>{{data.appliedOn}}</td>
                    <td>{{data.shift}}</td>

                <td><span class="badge d-inline-flex align-items-center badge-xs" 
                  [ngClass]="{'badge-success': data.status === 'Approved','badge-danger': data.status === 'Rejected'}"><i class="ti ti-point-filled me-1"></i>{{data.status}}</span></td>
                
              <td class="action-table-data">
                <div class="edit-delete-action">
                  <a class="me-3  p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-leave">
                    <i  class="feather icon-edit feather-edit"></i>
                  </a>
                  <a class="me-3  p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
                    <i  class="feather icon-trash-2 feather-trash-2"></i>
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


		<!-- Add Leave -->
		<div class="modal fade" id="add-leave">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Apply Leave</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form >
						<div class="modal-body">
							<div class="row">
								<div class="col-lg-12">
									<div class="mb-3">
										<label class="form-label">Employee <span class="text-danger">*</span></label>
										<mat-select class="custom-mat-select select" placeholder="Select">
											<mat-option value="1">Select</mat-option>
											<mat-option value="1">Carl Evans</mat-option>
											<mat-option value="1">Minerva Rameriz</mat-option>
											<mat-option value="1">Robert Lamon</mat-option>
										</mat-select>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="mb-3">
										<label class="form-label">Leave Type <span class="text-danger">*</span></label>
										<mat-select class="custom-mat-select select" placeholder="Select">
											<mat-option value="1">Select</mat-option>
											<mat-option value="1">Sick Leave</mat-option>
											<mat-option value="1">Casual Leave</mat-option>
										</mat-select>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="row">
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">From <span class="text-danger"> *</span></label>
												<div class="input-addon-right position-relative ngxdate7">
													<input type="text" class="form-control datetimepicker" bsDatepicker
													[bsConfig]="{ adaptivePosition: true }">
													<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">To <span class="text-danger"> *</span></label>
												<div class="input-addon-right position-relative ngxdate6">
													<input type="text" class="form-control datetimepicker" bsDatepicker
													[bsConfig]="{ adaptivePosition: true }">
													<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<div class="input-addon-right position-relative ngxdate5">
													<input type="text" class="form-control datetimepicker" bsDatepicker
													[bsConfig]="{ adaptivePosition: true }">
													<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<mat-select class="custom-mat-select select" placeholder="Select">
													<mat-option value="1">Select</mat-option>
													<mat-option value="1">Full Day</mat-option>
													<mat-option value="1">Half Day</mat-option>
												</mat-select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="bg-light rounded p-3 pb-0">
										<div class="row">
											<div class="col-lg-6">
												<div class="mb-3">
													<label class="form-label">No of Days</label>
													<input type="text" class="form-control bg-light " readonly>
												</div>
											</div>
											<div class="col-lg-6">
												<div class="mb-3">
													<label class="form-label">Remaining Leaves</label>
													<input type="text" class="form-control bg-light " readonly>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="summer-description-box mb-0">
										<label class="form-label">Reason</label>
										<ngx-editor [editor]="editor">
                      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                      </ngx-editor-menu>
                   </ngx-editor>
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
		<!-- /Add Leave -->

		<!-- Edit Leave -->
		<div class="modal fade" id="edit-leave">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Edit Leave</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form >
						<div class="modal-body">
							<div class="row">
								<div class="col-lg-12">
									<div class="mb-3">
										<label class="form-label">Employee <span class="text-danger">*</span></label>
										<mat-select class="custom-mat-select select" placeholder="Carl Evans">
											<mat-option value="1">Select</mat-option>
											<mat-option value="1">Carl Evans</mat-option>
											<mat-option value="1">Minerva Rameriz</mat-option>
											<mat-option value="1">Robert Lamon</mat-option>
										</mat-select>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="mb-3">
										<label class="form-label">Leave Type <span class="text-danger">*</span></label>
										<mat-select class="custom-mat-select select" placeholder="Sick Leave">
											<mat-option value="1">Select</mat-option>
											<mat-option value="1">Sick Leave</mat-option>
											<mat-option value="1">Casual Leave</mat-option>
										</mat-select>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="row">
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">From <span class="text-danger"> *</span></label>
												<div class="input-addon-right position-relative ngxdate2">
													<input type="text" class="form-control datetimepicker" bsDatepicker
													[bsConfig]="{ adaptivePosition: true }">
													<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">To <span class="text-danger"> *</span></label>
												<div class="input-addon-right position-relative ngxdate3">
													<input type="text" class="form-control datetimepicker" bsDatepicker
													[bsConfig]="{ adaptivePosition: true }">
													<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<div class="input-addon-right position-relative ngxdate4">
													<input type="text" class="form-control datetimepicker" bsDatepicker
													[bsConfig]="{ adaptivePosition: true }">
													<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<mat-select class="custom-mat-select select" placeholder="Full Day">
													<mat-option value="1">Select</mat-option>
													<mat-option value="1">Full Day</mat-option>
													<mat-option value="1">Half Day</mat-option>
												</mat-select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="bg-light rounded p-3 pb-0">
										<div class="row">
											<div class="col-lg-6">
												<div class="mb-3">
													<label class="form-label">No of Days</label>
													<input type="text" class="form-control bg-light " value="01" readonly>
												</div>
											</div>
											<div class="col-lg-6">
												<div class="mb-3">
													<label class="form-label">Remaining Leaves</label>
													<input type="text" class="form-control bg-light " value="08" readonly>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="summer-description-box mb-0">
										<label class="form-label">Reason</label>
										<ngx-editor [editor]="editor1">
                      <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >
                      </ngx-editor-menu>
                   </ngx-editor>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Edit Leave -->

		<!-- delete modal -->
		<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Leave</h4>
							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete leave?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeavesAdminComponent, { className: "LeavesAdminComponent", filePath: "src/app/features/pages/hrm/leaves/leaves-admin/leaves-admin.component.ts", lineNumber: 28 });
})();
export {
  LeavesAdminComponent
};
//# sourceMappingURL=chunk-JXL5FHD5.js.map
