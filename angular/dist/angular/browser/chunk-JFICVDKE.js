import {
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
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
  ReactiveFormsModule,
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
  DatePipe,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpureFunction2,
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

// src/app/features/pages/hrm/shift/shift.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1) => ({ "bg-danger": a0, "badge-success": a1 });
function ShiftComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ShiftComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ShiftComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 34)(3, "input", 132);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_For_86_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "span", 133);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 134);
    \u0275\u0275element(16, "i", 135);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 136)(19, "div", 137)(20, "a", 138);
    \u0275\u0275element(21, "i", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 140);
    \u0275\u0275element(23, "i", 141);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", data_r3.shiftName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.weekOff, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c1, data_r3.status === "Inactive", data_r3.status === "Active"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function ShiftComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 142);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
function ShiftComponent_For_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275property("value", data_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4.value, " ");
  }
}
function ShiftComponent_For_526_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275property("value", data_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r5.value, " ");
  }
}
var ShiftComponent = class _ShiftComponent {
  data;
  pagination;
  router;
  sidebar;
  datePipe;
  time1 = /* @__PURE__ */ new Date();
  time2 = /* @__PURE__ */ new Date();
  time3 = /* @__PURE__ */ new Date();
  time4 = /* @__PURE__ */ new Date();
  time5 = /* @__PURE__ */ new Date();
  time6 = /* @__PURE__ */ new Date();
  time7 = /* @__PURE__ */ new Date();
  time8 = /* @__PURE__ */ new Date();
  time9 = /* @__PURE__ */ new Date();
  time10 = /* @__PURE__ */ new Date();
  time11 = /* @__PURE__ */ new Date();
  time12 = /* @__PURE__ */ new Date();
  time13 = /* @__PURE__ */ new Date();
  time14 = /* @__PURE__ */ new Date();
  time15 = /* @__PURE__ */ new Date();
  time16 = /* @__PURE__ */ new Date();
  routes = routes;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  // pagination variables
  tableData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  //** / pagination variables
  constructor(data, pagination, router, sidebar, datePipe) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.datePipe = datePipe;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.shift) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getShift().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Shift" },
    { value: "Fixed" },
    { value: "Rotating" },
    { value: "Split" },
    { value: "On-Call" },
    { value: "Weekend" }
  ];
  selectedList3 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  selectedList4 = [
    { value: "Choose" },
    { value: "Sunday, Monday" },
    { value: "Saturday, Sunday" },
    { value: "Tuesday, Saturday" }
  ];
  selectedList5 = [
    { value: "Choose" },
    { value: "Sunday, Monday" },
    { value: "Saturday, Sunday" },
    { value: "Tuesday, Saturday" }
  ];
  showBox = false;
  toggleBox() {
    this.showBox = !this.showBox;
  }
  showTimePicker = [];
  date = /* @__PURE__ */ new Date();
  zones = /* @__PURE__ */ new Date();
  mytime = /* @__PURE__ */ new Date();
  myTime = /* @__PURE__ */ new Date();
  toggleTimePicker(value) {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  initChecked = false;
  formatTime(date) {
    const selectedDate = new Date(date);
    return this.datePipe.transform(selectedDate, "h:mm a");
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
  static \u0275fac = function ShiftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShiftComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(DatePipe));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShiftComponent, selectors: [["app-shift"]], features: [\u0275\u0275ProvidersFeature([
    DatePipe
  ])], decls: 874, vars: 113, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "click"], [1, "checkmarks", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["mat-sort-header", "shifttime"], ["mat-sort-header", "time"], ["mat-sort-header", "off"], ["mat-sort-header", "created"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "modal-table-tab"], ["role", "presentation", 1, "nav-item"], ["id", "pills-add-shift-info-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-add-shift-info", "type", "button", "role", "tab", "aria-controls", "pills-add-shift-info", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-add-break-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-add-break", "type", "button", "role", "tab", "aria-controls", "pills-add-break", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-add-shift-info", "role", "tabpanel", "aria-labelledby", "pills-add-shift-info-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-lg-12"], [1, "input-blocks"], ["type", "text", 1, "form-control"], [1, "col-lg-6"], [1, "form-icon"], ["type", "text", "placeholder", "Select Time", 1, "form-control", "timepicker", 3, "click", "value"], [1, "cus-icon"], [1, "feather", "icon-clock", "feather-clock"], [1, "custom-timepicker", 3, "ngModelChange", "ngModelOptions", "ngModel"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "modal-table-item"], [1, "table-responsive", "no-pagination"], [1, "table", "datanew"], [1, "text-center"], [1, "status-toggle", "modal-status", "d-flex", "align-items-center"], ["type", "checkbox", "id", "day1", 1, "check"], ["for", "day1", 1, "checktoggle"], [1, "status-label", "ms-2"], [1, "text-end"], [1, "checkboxs", "modal-table-check"], ["type", "checkbox"], [1, "checkmarks"], ["type", "checkbox", "id", "day2", 1, "check"], ["for", "day2", 1, "checktoggle"], ["type", "checkbox", "id", "day3", 1, "check"], ["for", "day3", 1, "checktoggle"], ["type", "checkbox", "id", "day4", 1, "check"], ["for", "day4", 1, "checktoggle"], ["type", "checkbox", "id", "day5", 1, "check"], ["for", "day5", 1, "checktoggle"], ["type", "checkbox", "id", "day6", 1, "check"], ["for", "day6", 1, "checktoggle"], ["type", "checkbox", "id", "day7", 1, "check"], ["for", "day7", 1, "checktoggle"], [1, "input-blocks", "custom-form-check"], [1, "input-blocks", "m-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle", "mb-0"], ["id", "pills-add-break", "role", "tabpanel", "aria-labelledby", "pills-add-break-tab", 1, "tab-pane", "fade"], [1, "break-title"], [1, "input-blocks", "summer-description-box"], ["id", "summernote"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-units", 1, "modal", "fade"], ["type", "checkbox", "id", "days1", "checked", "", 1, "check"], ["for", "days1", 1, "checktoggle"], ["type", "checkbox", "checked", ""], ["type", "checkbox", "id", "days2", "checked", "", 1, "check"], ["for", "days2", 1, "checktoggle"], ["type", "checkbox", "id", "days3", "checked", "", 1, "check"], ["for", "days3", 1, "checktoggle"], ["type", "checkbox", "id", "days4", "checked", "", 1, "check"], ["for", "days4", 1, "checktoggle"], ["type", "checkbox", "id", "days5", 1, "check"], ["for", "days5", 1, "checktoggle"], ["type", "checkbox", "id", "days6", 1, "check"], ["for", "days6", 1, "checktoggle"], ["type", "checkbox", "id", "days7", 1, "check"], ["for", "days7", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "text-gray-900"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function ShiftComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Shift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your employees shift");
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
      \u0275\u0275listener("click", function ShiftComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, ShiftComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, ShiftComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Shift");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ShiftComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 28)(46, "a", 25);
      \u0275\u0275text(47, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 26)(49, "li")(50, "a", 27);
      \u0275\u0275text(51, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 27);
      \u0275\u0275text(54, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(64, "div", 29)(65, "div", 30)(66, "table", 31);
      \u0275\u0275listener("matSortChange", function ShiftComponent_Template_table_matSortChange_66_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(67, "thead", 32)(68, "tr")(69, "th", 33)(70, "label", 34)(71, "input", 35);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_71_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span", 36);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_span_ngModelChange_72_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "th", 37);
      \u0275\u0275text(74, "Shift Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 38);
      \u0275\u0275text(76, "Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 39);
      \u0275\u0275text(78, "Week off");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 40);
      \u0275\u0275text(80, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 41);
      \u0275\u0275text(82, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "tbody");
      \u0275\u0275repeaterCreate(85, ShiftComponent_For_86_Template, 24, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(87, ShiftComponent_Conditional_87_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(88, "div", 42)(89, "div", 43)(90, "div", 44)(91, "div", 45)(92, "div", 46)(93, "div", 47)(94, "div", 2)(95, "h4");
      \u0275\u0275text(96, "Add New Shift");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "button", 48)(98, "span", 49);
      \u0275\u0275text(99, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 50)(101, "form")(102, "ul", 51)(103, "li", 52)(104, "button", 53);
      \u0275\u0275text(105, " Shift Info ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "li", 52)(107, "button", 54);
      \u0275\u0275text(108, " Break Timings ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "div", 55)(110, "div", 56)(111, "div", 57)(112, "div", 58)(113, "div", 59)(114, "label");
      \u0275\u0275text(115, "Shift Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "input", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 61)(118, "div", 59)(119, "label");
      \u0275\u0275text(120, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 62)(122, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_122_listener() {
        return ctx.toggleTimePicker("time1");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "span", 64);
      \u0275\u0275element(124, "i", 65);
      \u0275\u0275elementStart(125, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_125_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time1, $event) || (ctx.time1 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(126, "div", 61)(127, "div", 59)(128, "label");
      \u0275\u0275text(129, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 62)(131, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_131_listener() {
        return ctx.toggleTimePicker("time2");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 64);
      \u0275\u0275element(133, "i", 65);
      \u0275\u0275elementStart(134, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_134_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time2, $event) || (ctx.time2 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(135, "div", 58)(136, "div", 59)(137, "label");
      \u0275\u0275text(138, "Weekoff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "mat-select", 67);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_mat_select_ngModelChange_139_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(140, ShiftComponent_For_141_Template, 2, 2, "mat-option", 68, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 58)(143, "div", 69)(144, "h4");
      \u0275\u0275text(145, "Weekdays Defeniton");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 70)(147, "table", 71)(148, "thead")(149, "tr")(150, "th");
      \u0275\u0275text(151, "Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th", 72);
      \u0275\u0275text(153, "Weeks");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "tbody")(155, "tr")(156, "td")(157, "div", 73);
      \u0275\u0275element(158, "input", 74)(159, "label", 75);
      \u0275\u0275elementStart(160, "span", 76);
      \u0275\u0275text(161, "Monday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "td")(163, "div", 77)(164, "label", 78);
      \u0275\u0275element(165, "input", 79)(166, "span", 80);
      \u0275\u0275text(167, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "label", 78);
      \u0275\u0275element(169, "input", 79)(170, "span", 80);
      \u0275\u0275text(171, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "label", 78);
      \u0275\u0275element(173, "input", 79)(174, "span", 80);
      \u0275\u0275text(175, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "label", 78);
      \u0275\u0275element(177, "input", 79)(178, "span", 80);
      \u0275\u0275text(179, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "label", 78);
      \u0275\u0275element(181, "input", 79)(182, "span", 80);
      \u0275\u0275text(183, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "label", 78);
      \u0275\u0275element(185, "input", 79)(186, "span", 80);
      \u0275\u0275text(187, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(188, "tr")(189, "td")(190, "div", 73);
      \u0275\u0275element(191, "input", 81)(192, "label", 82);
      \u0275\u0275elementStart(193, "span", 76);
      \u0275\u0275text(194, "Tuesday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(195, "td")(196, "div", 77)(197, "label", 78);
      \u0275\u0275element(198, "input", 79)(199, "span", 80);
      \u0275\u0275text(200, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "label", 78);
      \u0275\u0275element(202, "input", 79)(203, "span", 80);
      \u0275\u0275text(204, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "label", 78);
      \u0275\u0275element(206, "input", 79)(207, "span", 80);
      \u0275\u0275text(208, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "label", 78);
      \u0275\u0275element(210, "input", 79)(211, "span", 80);
      \u0275\u0275text(212, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "label", 78);
      \u0275\u0275element(214, "input", 79)(215, "span", 80);
      \u0275\u0275text(216, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "label", 78);
      \u0275\u0275element(218, "input", 79)(219, "span", 80);
      \u0275\u0275text(220, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(221, "tr")(222, "td")(223, "div", 73);
      \u0275\u0275element(224, "input", 83)(225, "label", 84);
      \u0275\u0275elementStart(226, "span", 76);
      \u0275\u0275text(227, "Wednesday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(228, "td")(229, "div", 77)(230, "label", 78);
      \u0275\u0275element(231, "input", 79)(232, "span", 80);
      \u0275\u0275text(233, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "label", 78);
      \u0275\u0275element(235, "input", 79)(236, "span", 80);
      \u0275\u0275text(237, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "label", 78);
      \u0275\u0275element(239, "input", 79)(240, "span", 80);
      \u0275\u0275text(241, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "label", 78);
      \u0275\u0275element(243, "input", 79)(244, "span", 80);
      \u0275\u0275text(245, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "label", 78);
      \u0275\u0275element(247, "input", 79)(248, "span", 80);
      \u0275\u0275text(249, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "label", 78);
      \u0275\u0275element(251, "input", 79)(252, "span", 80);
      \u0275\u0275text(253, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(254, "tr")(255, "td")(256, "div", 73);
      \u0275\u0275element(257, "input", 85)(258, "label", 86);
      \u0275\u0275elementStart(259, "span", 76);
      \u0275\u0275text(260, "Thursday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(261, "td")(262, "div", 77)(263, "label", 78);
      \u0275\u0275element(264, "input", 79)(265, "span", 80);
      \u0275\u0275text(266, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "label", 78);
      \u0275\u0275element(268, "input", 79)(269, "span", 80);
      \u0275\u0275text(270, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "label", 78);
      \u0275\u0275element(272, "input", 79)(273, "span", 80);
      \u0275\u0275text(274, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "label", 78);
      \u0275\u0275element(276, "input", 79)(277, "span", 80);
      \u0275\u0275text(278, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "label", 78);
      \u0275\u0275element(280, "input", 79)(281, "span", 80);
      \u0275\u0275text(282, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "label", 78);
      \u0275\u0275element(284, "input", 79)(285, "span", 80);
      \u0275\u0275text(286, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(287, "tr")(288, "td")(289, "div", 73);
      \u0275\u0275element(290, "input", 87)(291, "label", 88);
      \u0275\u0275elementStart(292, "span", 76);
      \u0275\u0275text(293, "Friday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(294, "td")(295, "div", 77)(296, "label", 78);
      \u0275\u0275element(297, "input", 79)(298, "span", 80);
      \u0275\u0275text(299, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "label", 78);
      \u0275\u0275element(301, "input", 79)(302, "span", 80);
      \u0275\u0275text(303, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "label", 78);
      \u0275\u0275element(305, "input", 79)(306, "span", 80);
      \u0275\u0275text(307, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "label", 78);
      \u0275\u0275element(309, "input", 79)(310, "span", 80);
      \u0275\u0275text(311, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "label", 78);
      \u0275\u0275element(313, "input", 79)(314, "span", 80);
      \u0275\u0275text(315, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "label", 78);
      \u0275\u0275element(317, "input", 79)(318, "span", 80);
      \u0275\u0275text(319, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(320, "tr")(321, "td")(322, "div", 73);
      \u0275\u0275element(323, "input", 89)(324, "label", 90);
      \u0275\u0275elementStart(325, "span", 76);
      \u0275\u0275text(326, "Saturday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(327, "td")(328, "div", 77)(329, "label", 78);
      \u0275\u0275element(330, "input", 79)(331, "span", 80);
      \u0275\u0275text(332, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "label", 78);
      \u0275\u0275element(334, "input", 79)(335, "span", 80);
      \u0275\u0275text(336, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "label", 78);
      \u0275\u0275element(338, "input", 79)(339, "span", 80);
      \u0275\u0275text(340, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "label", 78);
      \u0275\u0275element(342, "input", 79)(343, "span", 80);
      \u0275\u0275text(344, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "label", 78);
      \u0275\u0275element(346, "input", 79)(347, "span", 80);
      \u0275\u0275text(348, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "label", 78);
      \u0275\u0275element(350, "input", 79)(351, "span", 80);
      \u0275\u0275text(352, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(353, "tr")(354, "td")(355, "div", 73);
      \u0275\u0275element(356, "input", 91)(357, "label", 92);
      \u0275\u0275elementStart(358, "span", 76);
      \u0275\u0275text(359, "Sunday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(360, "td")(361, "div", 77)(362, "label", 78);
      \u0275\u0275element(363, "input", 79)(364, "span", 80);
      \u0275\u0275text(365, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "label", 78);
      \u0275\u0275element(367, "input", 79)(368, "span", 80);
      \u0275\u0275text(369, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "label", 78);
      \u0275\u0275element(371, "input", 79)(372, "span", 80);
      \u0275\u0275text(373, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "label", 78);
      \u0275\u0275element(375, "input", 79)(376, "span", 80);
      \u0275\u0275text(377, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "label", 78);
      \u0275\u0275element(379, "input", 79)(380, "span", 80);
      \u0275\u0275text(381, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "label", 78);
      \u0275\u0275element(383, "input", 79)(384, "span", 80);
      \u0275\u0275text(385, " 5th ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(386, "div", 93)(387, "label", 78);
      \u0275\u0275element(388, "input", 79)(389, "span", 80);
      \u0275\u0275text(390, " Recurring Shift ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "div", 94)(392, "div", 95)(393, "span", 96);
      \u0275\u0275text(394, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(395, "input", 97)(396, "label", 98);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(397, "div", 99)(398, "div", 100)(399, "h4");
      \u0275\u0275text(400, "Morning Break");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "div", 57)(402, "div", 61)(403, "div", 59)(404, "label");
      \u0275\u0275text(405, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "div", 62)(407, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_407_listener() {
        return ctx.toggleTimePicker("time3");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "span", 64);
      \u0275\u0275element(409, "i", 65);
      \u0275\u0275elementStart(410, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_410_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time3, $event) || (ctx.time3 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(411, "div", 61)(412, "div", 59)(413, "label");
      \u0275\u0275text(414, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "div", 62)(416, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_416_listener() {
        return ctx.toggleTimePicker("time4");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "span", 64);
      \u0275\u0275element(418, "i", 65);
      \u0275\u0275elementStart(419, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_419_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time4, $event) || (ctx.time4 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(420, "div", 100)(421, "h4");
      \u0275\u0275text(422, "Lunch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(423, "div", 57)(424, "div", 61)(425, "div", 59)(426, "label");
      \u0275\u0275text(427, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "div", 62)(429, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_429_listener() {
        return ctx.toggleTimePicker("time5");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "span", 64);
      \u0275\u0275element(431, "i", 65);
      \u0275\u0275elementStart(432, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_432_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time5, $event) || (ctx.time5 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(433, "div", 61)(434, "div", 59)(435, "label");
      \u0275\u0275text(436, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "div", 62)(438, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_438_listener() {
        return ctx.toggleTimePicker("time6");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "span", 64);
      \u0275\u0275element(440, "i", 65);
      \u0275\u0275elementStart(441, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_441_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time6, $event) || (ctx.time6 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(442, "div", 100)(443, "h4");
      \u0275\u0275text(444, "Evening Break");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "div", 57)(446, "div", 61)(447, "div", 59)(448, "label");
      \u0275\u0275text(449, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "div", 62)(451, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_451_listener() {
        return ctx.toggleTimePicker("time7");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "span", 64);
      \u0275\u0275element(453, "i", 65);
      \u0275\u0275elementStart(454, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_454_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time7, $event) || (ctx.time7 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(455, "div", 61)(456, "div", 59)(457, "label");
      \u0275\u0275text(458, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "div", 62)(460, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_460_listener() {
        return ctx.toggleTimePicker("time8");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "span", 64);
      \u0275\u0275element(462, "i", 65);
      \u0275\u0275elementStart(463, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_463_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time8, $event) || (ctx.time8 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(464, "div", 101)(465, "label");
      \u0275\u0275text(466, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(467, "div", 102);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(468, "div", 103)(469, "button", 104);
      \u0275\u0275text(470, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "button", 105);
      \u0275\u0275text(472, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(473, "div", 106)(474, "div", 43)(475, "div", 44)(476, "div", 45)(477, "div", 46)(478, "div", 47)(479, "div", 2)(480, "h4");
      \u0275\u0275text(481, "Edit Shift");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(482, "button", 48)(483, "span", 49);
      \u0275\u0275text(484, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(485, "div", 50)(486, "form")(487, "ul", 51)(488, "li", 52)(489, "button", 53);
      \u0275\u0275text(490, " Shift Info ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(491, "li", 52)(492, "button", 54);
      \u0275\u0275text(493, " Break Timings ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(494, "div", 55)(495, "div", 56)(496, "div", 57)(497, "div", 58)(498, "div", 59)(499, "label");
      \u0275\u0275text(500, "Shift Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(501, "input", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "div", 61)(503, "div", 59)(504, "label");
      \u0275\u0275text(505, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "div", 62)(507, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_507_listener() {
        return ctx.toggleTimePicker("time9");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "span", 64);
      \u0275\u0275element(509, "i", 65);
      \u0275\u0275elementStart(510, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_510_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time9, $event) || (ctx.time9 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(511, "div", 61)(512, "div", 59)(513, "label");
      \u0275\u0275text(514, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "div", 62)(516, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_516_listener() {
        return ctx.toggleTimePicker("time10");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "span", 64);
      \u0275\u0275element(518, "i", 65);
      \u0275\u0275elementStart(519, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_519_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time10, $event) || (ctx.time10 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(520, "div", 58)(521, "div", 59)(522, "label");
      \u0275\u0275text(523, "Weekoff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "mat-select", 67);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_mat_select_ngModelChange_524_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(525, ShiftComponent_For_526_Template, 2, 2, "mat-option", 68, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(527, "div", 58)(528, "div", 69)(529, "h4");
      \u0275\u0275text(530, "Weekdays Defeniton");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(531, "div", 70)(532, "table", 71)(533, "thead")(534, "tr")(535, "th");
      \u0275\u0275text(536, "Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "th", 72);
      \u0275\u0275text(538, "Weeks");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(539, "tbody")(540, "tr")(541, "td")(542, "div", 73);
      \u0275\u0275element(543, "input", 107)(544, "label", 108);
      \u0275\u0275elementStart(545, "span", 76);
      \u0275\u0275text(546, "Monday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(547, "td")(548, "div", 77)(549, "label", 78);
      \u0275\u0275element(550, "input", 109)(551, "span", 80);
      \u0275\u0275text(552, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "label", 78);
      \u0275\u0275element(554, "input", 109)(555, "span", 80);
      \u0275\u0275text(556, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "label", 78);
      \u0275\u0275element(558, "input", 109)(559, "span", 80);
      \u0275\u0275text(560, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "label", 78);
      \u0275\u0275element(562, "input", 109)(563, "span", 80);
      \u0275\u0275text(564, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "label", 78);
      \u0275\u0275element(566, "input", 109)(567, "span", 80);
      \u0275\u0275text(568, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "label", 78);
      \u0275\u0275element(570, "input", 109)(571, "span", 80);
      \u0275\u0275text(572, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(573, "tr")(574, "td")(575, "div", 73);
      \u0275\u0275element(576, "input", 110)(577, "label", 111);
      \u0275\u0275elementStart(578, "span", 76);
      \u0275\u0275text(579, "Tuesday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(580, "td")(581, "div", 77)(582, "label", 78);
      \u0275\u0275element(583, "input", 109)(584, "span", 80);
      \u0275\u0275text(585, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "label", 78);
      \u0275\u0275element(587, "input", 109)(588, "span", 80);
      \u0275\u0275text(589, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "label", 78);
      \u0275\u0275element(591, "input", 109)(592, "span", 80);
      \u0275\u0275text(593, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "label", 78);
      \u0275\u0275element(595, "input", 109)(596, "span", 80);
      \u0275\u0275text(597, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "label", 78);
      \u0275\u0275element(599, "input", 109)(600, "span", 80);
      \u0275\u0275text(601, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "label", 78);
      \u0275\u0275element(603, "input", 109)(604, "span", 80);
      \u0275\u0275text(605, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(606, "tr")(607, "td")(608, "div", 73);
      \u0275\u0275element(609, "input", 112)(610, "label", 113);
      \u0275\u0275elementStart(611, "span", 76);
      \u0275\u0275text(612, "Wednesday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(613, "td")(614, "div", 77)(615, "label", 78);
      \u0275\u0275element(616, "input", 109)(617, "span", 80);
      \u0275\u0275text(618, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(619, "label", 78);
      \u0275\u0275element(620, "input", 109)(621, "span", 80);
      \u0275\u0275text(622, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(623, "label", 78);
      \u0275\u0275element(624, "input", 109)(625, "span", 80);
      \u0275\u0275text(626, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "label", 78);
      \u0275\u0275element(628, "input", 109)(629, "span", 80);
      \u0275\u0275text(630, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "label", 78);
      \u0275\u0275element(632, "input", 109)(633, "span", 80);
      \u0275\u0275text(634, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "label", 78);
      \u0275\u0275element(636, "input", 109)(637, "span", 80);
      \u0275\u0275text(638, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(639, "tr")(640, "td")(641, "div", 73);
      \u0275\u0275element(642, "input", 114)(643, "label", 115);
      \u0275\u0275elementStart(644, "span", 76);
      \u0275\u0275text(645, "Thursday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(646, "td")(647, "div", 77)(648, "label", 78);
      \u0275\u0275element(649, "input", 109)(650, "span", 80);
      \u0275\u0275text(651, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "label", 78);
      \u0275\u0275element(653, "input", 109)(654, "span", 80);
      \u0275\u0275text(655, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "label", 78);
      \u0275\u0275element(657, "input", 79)(658, "span", 80);
      \u0275\u0275text(659, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(660, "label", 78);
      \u0275\u0275element(661, "input", 79)(662, "span", 80);
      \u0275\u0275text(663, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(664, "label", 78);
      \u0275\u0275element(665, "input", 109)(666, "span", 80);
      \u0275\u0275text(667, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "label", 78);
      \u0275\u0275element(669, "input", 109)(670, "span", 80);
      \u0275\u0275text(671, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(672, "tr")(673, "td")(674, "div", 73);
      \u0275\u0275element(675, "input", 116)(676, "label", 117);
      \u0275\u0275elementStart(677, "span", 76);
      \u0275\u0275text(678, "Friday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(679, "td")(680, "div", 77)(681, "label", 78);
      \u0275\u0275element(682, "input", 79)(683, "span", 80);
      \u0275\u0275text(684, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "label", 78);
      \u0275\u0275element(686, "input", 79)(687, "span", 80);
      \u0275\u0275text(688, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(689, "label", 78);
      \u0275\u0275element(690, "input", 79)(691, "span", 80);
      \u0275\u0275text(692, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(693, "label", 78);
      \u0275\u0275element(694, "input", 79)(695, "span", 80);
      \u0275\u0275text(696, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(697, "label", 78);
      \u0275\u0275element(698, "input", 79)(699, "span", 80);
      \u0275\u0275text(700, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "label", 78);
      \u0275\u0275element(702, "input", 79)(703, "span", 80);
      \u0275\u0275text(704, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(705, "tr")(706, "td")(707, "div", 73);
      \u0275\u0275element(708, "input", 118)(709, "label", 119);
      \u0275\u0275elementStart(710, "span", 76);
      \u0275\u0275text(711, "Saturday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(712, "td")(713, "div", 77)(714, "label", 78);
      \u0275\u0275element(715, "input", 79)(716, "span", 80);
      \u0275\u0275text(717, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(718, "label", 78);
      \u0275\u0275element(719, "input", 79)(720, "span", 80);
      \u0275\u0275text(721, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(722, "label", 78);
      \u0275\u0275element(723, "input", 79)(724, "span", 80);
      \u0275\u0275text(725, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "label", 78);
      \u0275\u0275element(727, "input", 79)(728, "span", 80);
      \u0275\u0275text(729, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(730, "label", 78);
      \u0275\u0275element(731, "input", 79)(732, "span", 80);
      \u0275\u0275text(733, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(734, "label", 78);
      \u0275\u0275element(735, "input", 79)(736, "span", 80);
      \u0275\u0275text(737, " 5th ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(738, "tr")(739, "td")(740, "div", 73);
      \u0275\u0275element(741, "input", 120)(742, "label", 121);
      \u0275\u0275elementStart(743, "span", 76);
      \u0275\u0275text(744, "Sunday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(745, "td")(746, "div", 77)(747, "label", 78);
      \u0275\u0275element(748, "input", 79)(749, "span", 80);
      \u0275\u0275text(750, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(751, "label", 78);
      \u0275\u0275element(752, "input", 79)(753, "span", 80);
      \u0275\u0275text(754, " 1st ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(755, "label", 78);
      \u0275\u0275element(756, "input", 79)(757, "span", 80);
      \u0275\u0275text(758, " 2nd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(759, "label", 78);
      \u0275\u0275element(760, "input", 79)(761, "span", 80);
      \u0275\u0275text(762, " 3rd ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "label", 78);
      \u0275\u0275element(764, "input", 79)(765, "span", 80);
      \u0275\u0275text(766, " 4th ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "label", 78);
      \u0275\u0275element(768, "input", 79)(769, "span", 80);
      \u0275\u0275text(770, " 5th ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(771, "div", 93)(772, "label", 78);
      \u0275\u0275element(773, "input", 79)(774, "span", 80);
      \u0275\u0275text(775, " Recurring Shift ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(776, "div", 94)(777, "div", 95)(778, "span", 96);
      \u0275\u0275text(779, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(780, "input", 97)(781, "label", 98);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(782, "div", 99)(783, "div", 100)(784, "h4");
      \u0275\u0275text(785, "Morning Break");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(786, "div", 57)(787, "div", 61)(788, "div", 59)(789, "label");
      \u0275\u0275text(790, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(791, "div", 62)(792, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_792_listener() {
        return ctx.toggleTimePicker("time11");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(793, "span", 64);
      \u0275\u0275element(794, "i", 65);
      \u0275\u0275elementStart(795, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_795_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time11, $event) || (ctx.time11 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(796, "div", 61)(797, "div", 59)(798, "label");
      \u0275\u0275text(799, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "div", 62)(801, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_801_listener() {
        return ctx.toggleTimePicker("time12");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(802, "span", 64);
      \u0275\u0275element(803, "i", 65);
      \u0275\u0275elementStart(804, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_804_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time12, $event) || (ctx.time12 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(805, "div", 100)(806, "h4");
      \u0275\u0275text(807, "Lunch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(808, "div", 57)(809, "div", 61)(810, "div", 59)(811, "label");
      \u0275\u0275text(812, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(813, "div", 62)(814, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_814_listener() {
        return ctx.toggleTimePicker("time13");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(815, "span", 64);
      \u0275\u0275element(816, "i", 65);
      \u0275\u0275elementStart(817, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_817_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time13, $event) || (ctx.time13 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(818, "div", 61)(819, "div", 59)(820, "label");
      \u0275\u0275text(821, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(822, "div", 62)(823, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_823_listener() {
        return ctx.toggleTimePicker("time14");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "span", 64);
      \u0275\u0275element(825, "i", 65);
      \u0275\u0275elementStart(826, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_826_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time14, $event) || (ctx.time14 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(827, "div", 100)(828, "h4");
      \u0275\u0275text(829, "Evening Break");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(830, "div", 57)(831, "div", 61)(832, "div", 59)(833, "label");
      \u0275\u0275text(834, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(835, "div", 62)(836, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_836_listener() {
        return ctx.toggleTimePicker("time15");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(837, "span", 64);
      \u0275\u0275element(838, "i", 65);
      \u0275\u0275elementStart(839, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_839_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time15, $event) || (ctx.time15 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(840, "div", 61)(841, "div", 59)(842, "label");
      \u0275\u0275text(843, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(844, "div", 62)(845, "input", 63);
      \u0275\u0275listener("click", function ShiftComponent_Template_input_click_845_listener() {
        return ctx.toggleTimePicker("time16");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(846, "span", 64);
      \u0275\u0275element(847, "i", 65);
      \u0275\u0275elementStart(848, "timepicker", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ShiftComponent_Template_timepicker_ngModelChange_848_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time16, $event) || (ctx.time16 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(849, "div", 101)(850, "label");
      \u0275\u0275text(851, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(852, "div", 102);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(853, "div", 103)(854, "button", 104);
      \u0275\u0275text(855, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(856, "button", 105);
      \u0275\u0275text(857, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(858, "div", 122)(859, "div", 123)(860, "div", 44)(861, "div", 45)(862, "div", 124)(863, "span", 125);
      \u0275\u0275element(864, "i", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(865, "h4", 127);
      \u0275\u0275text(866, "Delete Shift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(867, "p", 128);
      \u0275\u0275text(868, "Are you sure you want to delete shift?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(869, "div", 129)(870, "button", 130);
      \u0275\u0275text(871, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(872, "button", 131);
      \u0275\u0275text(873, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(93, _c0));
      \u0275\u0275advance(39);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(94, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 87 : -1);
      \u0275\u0275advance(35);
      \u0275\u0275property("value", ctx.formatTime(ctx.time1));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time1");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(95, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time1);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time2));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time2");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(96, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time2);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue4);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(97, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList4);
      \u0275\u0275advance(267);
      \u0275\u0275property("value", ctx.formatTime(ctx.time3));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time3");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(98, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time3);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time4));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time4");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(99, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time4);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.formatTime(ctx.time5));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time5");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(100, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time5);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time6));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time6");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(101, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time6);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.formatTime(ctx.time7));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time7");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(102, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time7);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time8));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time8");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(103, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time8);
      \u0275\u0275advance(44);
      \u0275\u0275property("value", ctx.formatTime(ctx.time9));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time9");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(104, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time9);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time10));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[1] === "time10");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(105, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time10);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue4);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(106, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList4);
      \u0275\u0275advance(267);
      \u0275\u0275property("value", ctx.formatTime(ctx.time11));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time11");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(107, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time11);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time12));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time12");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(108, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time12);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.formatTime(ctx.time13));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time13");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(109, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time13);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time14));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time14");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(110, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time14);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.formatTime(ctx.time15));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[0] === "time15");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(111, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time15);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.formatTime(ctx.time16));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("d-block", ctx.showTimePicker[10] === "time16");
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(112, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.time16);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShiftComponent, [{
    type: Component,
    args: [{ selector: "app-shift", imports: [CommonModule, NgxEditorModule, FormsModule, MatSortModule, MatSelectModule, ReactiveFormsModule], providers: [
      DatePipe
    ], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Shift</h4>
      <h6>Manage your employees shift</h6>
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
        id="collapse-header"
        matTooltip="Collapse"
        matTooltipPosition="above"
        > @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
  </ul>
  <div class="page-btn">
    <a
      href="javascript:void(0);"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#add-units"
      ><i class="ti ti-circle-plus me-2"></i>Add Shift</a
    >
  </div>
</div>
<!-- /product list -->
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div class="search-set">
      <div class="search-input">
        <a href="javascript:void(0);" class="btn btn-searchset"
          ><i class="feather icon-search feather-search"></i
        ></a>
        <div class="dataTables_filter">
          <label>
            <input
              [(ngModel)]="searchDataValue"
              [ngModelOptions]="{ standalone: true }"
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
  <div class="card-body">
    <div class="table-responsive">
      <table class="table datanew" matSort (matSortChange)="sortData($event)">
        <thead class="thead-light">
          <tr>
            <th class="no-sort">
              <label class="checkboxs">
                <input type="checkbox" id="select-all" (click)="selectAll(initChecked)" />
                <span class="checkmarks" [(ngModel)]="initChecked" [ngModelOptions]="{standalone:true}"></span>
              </label>
            </th>
            <th mat-sort-header="shifttime">Shift Name</th>
            <th mat-sort-header="time">Time</th>
            <th mat-sort-header="off">Week off</th>
            <th mat-sort-header="created">Created On</th>
            <th mat-sort-header="status">Status</th>
            <th class="no-sort"></th>
          </tr>
        </thead>
        <tbody>
          @for (data of tableData; track data) {
          <tr>
            <td>
              <label class="checkboxs">
                <input type="checkbox" [(ngModel)]="initChecked" [ngModelOptions]="{standalone:true}" />
                <span class="checkmarks"></span>
              </label>
            </td>
            <td>
              <span class="text-gray-900">
                {{ data.shiftName }}
              </span>
            </td>
            <td>{{ data.time }}</td>
            <td>
              {{ data.weekOff }}
            </td>
            <td>{{ data.createdOn }}</td>
            <td>
              <span
                class="badge badge-success d-inline-flex align-items-center badge-xs"
                [ngClass]="{
                'bg-danger': data.status === 'Inactive',
                'badge-success': data.status === 'Active',
               
              }"
                ><i class="ti ti-point-filled me-1"></i>{{ data.status }}</span
              >
            </td>
            <td class="action-table-data">
              <div class="edit-delete-action">
                <a
                  class="me-2 p-2"
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#edit-units"
                >
                  <i class="feather icon-edit feather-edit"></i>
                </a>
                <a
                  data-bs-toggle="modal" data-bs-target="#delete-modal"
                  class=" p-2"
                  href="javascript:void(0);"
                >
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
  </div>
</div>
<!-- /product list -->
<!-- Add Shift -->
<div class="modal fade" id="add-units">
  <div class="modal-dialog modal-dialog-centered custom-modal-two">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Add New Shift</h4>
            </div>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body custom-modal-body">
            <form>
              <ul
                class="nav nav-pills modal-table-tab"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-add-shift-info-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-add-shift-info"
                    type="button"
                    role="tab"
                    aria-controls="pills-add-shift-info"
                    aria-selected="true"
                  >
                    Shift Info
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-add-break-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-add-break"
                    type="button"
                    role="tab"
                    aria-controls="pills-add-break"
                    aria-selected="false"
                  >
                    Break Timings
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-add-shift-info"
                  role="tabpanel"
                  aria-labelledby="pills-add-shift-info-tab"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="input-blocks">
                        <label>Shift Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time1')"
                            [value]="formatTime(time1)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>

                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time1'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time1"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            type="text"
                            class="form-control timepicker"
                            (click)="toggleTimePicker('time2')"
                            [value]="formatTime(time2)"
                            placeholder="Select Time"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i
                            ><timepicker
                              [class.d-block]="
                                showTimePicker[0] === 'time2'
                              "
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time2"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-blocks">
                        <label>Weekoff</label>

                        <mat-select
                          [(ngModel)]="selectedValue4"
                          [ngModelOptions]="{ standalone: true }"
                          class="select custom-mat-select"
                          placeholder="Choose"
                        >
                          @for (data of selectedList4; track data) {
                          <mat-option [value]="data.value">
                            {{ data.value }}
                          </mat-option>
                          }
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="modal-table-item">
                        <h4>Weekdays Defeniton</h4>
                        <div class="table-responsive no-pagination">
                          <table class="table  datanew">
                            <thead>
                              <tr>
                                <th>Days</th>
                                <th class="text-center">Weeks</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="day1" class="check">
                                    <label for="day1" class="checktoggle"></label>
                                    <span class="status-label ms-2">Monday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                </td>
                              </tr>	
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="day2" class="check">
                                    <label for="day2" class="checktoggle"></label>
                                    <span class="status-label ms-2">Tuesday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>																										
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="day3" class="check">
                                    <label for="day3" class="checktoggle"></label>
                                    <span class="status-label ms-2">Wednesday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="day4" class="check">
                                    <label for="day4" class="checktoggle"></label>
                                    <span class="status-label ms-2">Thursday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="day5" class="check">
                                    <label for="day5" class="checktoggle"></label>
                                    <span class="status-label ms-2">Friday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="day6" class="check">
                                    <label for="day6" class="checktoggle"></label>
                                    <span class="status-label ms-2">Saturday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="day7" class="check">
                                    <label for="day7" class="checktoggle"></label>
                                    <span class="status-label ms-2">Sunday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="input-blocks custom-form-check">
                          <label class="checkboxs modal-table-check">
                            <input type="checkbox">
                            <span class="checkmarks"></span>
                            Recurring Shift
                          </label>
                        </div>
                        
                        <div class="input-blocks m-0">
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">Status</span>
                            <input type="checkbox" id="user6" class="check" checked>
                            <label for="user6" class="checktoggle mb-0"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-add-break"
                  role="tabpanel"
                  aria-labelledby="pills-add-break-tab"
                >
                  <div class="break-title">
                    <h4>Morning Break</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time3')"
                            [value]="formatTime(time3)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />

                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time3'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time3"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time4')"
                            [value]="formatTime(time4)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />

                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time4'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time4"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="break-title">
                    <h4>Lunch</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time5')"
                            [value]="formatTime(time5)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />

                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i
                            ><timepicker
                              [class.d-block]="showTimePicker[0] === 'time5'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time5"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time6')"
                            [value]="formatTime(time6)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time6'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time6"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="break-title">
                    <h4>Evening Break</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time7')"
                            [value]="formatTime(time7)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time7'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time7"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            type="text"
                            class="form-control timepicker"
                            (click)="toggleTimePicker('time8')"
                            [value]="formatTime(time8)"
                            placeholder="Select Time"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i
                            ><timepicker
                              [class.d-block]="
                                showTimePicker[0] === 'time8'
                              "
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time8"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="input-blocks summer-description-box">
                    <label>Description</label>
                    <div id="summernote"></div>
                  </div>
                </div>
              </div>

              <div class="modal-footer-btn">
                <button
                  type="button"
                  class="btn btn-cancel me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Add Shift -->

<!-- Edit Shift -->
<div class="modal fade" id="edit-units">
  <div class="modal-dialog modal-dialog-centered custom-modal-two">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Edit Shift</h4>
            </div>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body custom-modal-body">
            <form>
              <ul
                class="nav nav-pills modal-table-tab"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-add-shift-info-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-add-shift-info"
                    type="button"
                    role="tab"
                    aria-controls="pills-add-shift-info"
                    aria-selected="true"
                  >
                    Shift Info
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-add-break-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-add-break"
                    type="button"
                    role="tab"
                    aria-controls="pills-add-break"
                    aria-selected="false"
                  >
                    Break Timings
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-add-shift-info"
                  role="tabpanel"
                  aria-labelledby="pills-add-shift-info-tab"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="input-blocks">
                        <label>Shift Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time9')"
                            [value]="formatTime(time9)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>

                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time9'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time9"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            type="text"
                            class="form-control timepicker"
                            (click)="toggleTimePicker('time10')"
                            [value]="formatTime(time10)"
                            placeholder="Select Time"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i
                            ><timepicker
                              [class.d-block]="
                                showTimePicker[1] === 'time10'
                              "
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time10"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-blocks">
                        <label>Weekoff</label>

                        <mat-select
                          [(ngModel)]="selectedValue4"
                          [ngModelOptions]="{ standalone: true }"
                          class="select custom-mat-select"
                          placeholder="Choose"
                        >
                          @for (data of selectedList4; track data) {
                          <mat-option [value]="data.value">
                            {{ data.value }}
                          </mat-option>
                          }
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="modal-table-item">
                        <h4>Weekdays Defeniton</h4>
                        <div class="table-responsive no-pagination">
                          <table class="table  datanew">
                            <thead>
                              <tr>
                                <th>Days</th>
                                <th class="text-center">Weeks</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="days1" class="check" checked>
                                    <label for="days1" class="checktoggle"></label>
                                    <span class="status-label ms-2">Monday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                </td>
                              </tr>	
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="days2" class="check" checked>
                                    <label for="days2" class="checktoggle"></label>
                                    <span class="status-label ms-2">Tuesday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>																										
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="days3" class="check" checked>
                                    <label for="days3" class="checktoggle"></label>
                                    <span class="status-label ms-2">Wednesday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="days4" class="check" checked>
                                    <label for="days4" class="checktoggle"></label>
                                    <span class="status-label ms-2">Thursday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox" checked>
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="days5" class="check">
                                    <label for="days5" class="checktoggle"></label>
                                    <span class="status-label ms-2">Friday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="days6" class="check">
                                    <label for="days6" class="checktoggle"></label>
                                    <span class="status-label ms-2">Saturday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="status-toggle modal-status d-flex align-items-center">													
                                    <input type="checkbox" id="days7" class="check">
                                    <label for="days7" class="checktoggle"></label>
                                    <span class="status-label ms-2">Sunday</span>
                                  </div>							
                                </td>
                                <td>
                                  <div class="text-end">
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      All
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      1st
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      2nd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      3rd
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      4th
                                    </label>
                                    <label class="checkboxs modal-table-check">
                                      <input type="checkbox">
                                      <span class="checkmarks"></span>
                                      5th
                                    </label>
                                  </div>
                                  
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="input-blocks custom-form-check">
                          <label class="checkboxs modal-table-check">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>
                            Recurring Shift
                          </label>
                        </div>

                        <div class="input-blocks m-0">
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center"
                          >
                            <span class="status-label">Status</span>
                            <input
                              type="checkbox"
                              id="user6"
                              class="check"
                              checked
                            />
                            <label for="user6" class="checktoggle mb-0"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-add-break"
                  role="tabpanel"
                  aria-labelledby="pills-add-break-tab"
                >
                  <div class="break-title">
                    <h4>Morning Break</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time11')"
                            [value]="formatTime(time11)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />

                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time11'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time11"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time12')"
                            [value]="formatTime(time12)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />

                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time12'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time12"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="break-title">
                    <h4>Lunch</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time13')"
                            [value]="formatTime(time13)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />

                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i
                            ><timepicker
                              [class.d-block]="showTimePicker[0] === 'time13'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time13"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time14')"
                            [value]="formatTime(time14)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time14'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time14"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="break-title">
                    <h4>Evening Break</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>From</label>
                        <div class="form-icon">
                          <input
                            (click)="toggleTimePicker('time15')"
                            [value]="formatTime(time15)"
                            type="text"
                            placeholder="Select Time"
                            class="form-control timepicker"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i>
                            <timepicker
                              [class.d-block]="showTimePicker[0] === 'time15'"
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time15"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-blocks">
                        <label>To</label>
                        <div class="form-icon">
                          <input
                            type="text"
                            class="form-control timepicker"
                            (click)="toggleTimePicker('time16')"
                            [value]="formatTime(time16)"
                            placeholder="Select Time"
                          />
                          <span class="cus-icon"
                            ><i class="feather icon-clock feather-clock"></i
                            ><timepicker
                              [class.d-block]="
                                showTimePicker[10] === 'time16'
                              "
                              class="custom-timepicker"
                              [ngModelOptions]="{ standalone: true }"
                              [(ngModel)]="time16"
                            ></timepicker
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="input-blocks summer-description-box">
                    <label>Description</label>
                    <div id="summernote"></div>
                  </div>
                </div>
              </div>

              <div class="modal-footer-btn">
                <button
                  type="button"
                  class="btn btn-cancel me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Edit Shift -->


		<!-- delete modal -->
		<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Shift</h4>
							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete shift?</p>
							<div class="modal-footer-btn mt-3 d-flex justify-content-center">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3"  data-bs-dismiss="modal">Yes Delete</button>
							</div>						
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /delete modal -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }, { type: DatePipe }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShiftComponent, { className: "ShiftComponent", filePath: "src/app/features/pages/hrm/shift/shift.component.ts", lineNumber: 32 });
})();
export {
  ShiftComponent
};
//# sourceMappingURL=chunk-JFICVDKE.js.map
