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
  ɵɵnextContext,
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

// src/app/features/pages/hrm/leaves/leaves-type/leaves-type.component.ts
function LeavesTypeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function LeavesTypeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function LeavesTypeComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 21);
    \u0275\u0275listener("click", function LeavesTypeComponent_For_47_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesTypeComponent_For_47_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 23);
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
    \u0275\u0275elementStart(11, "td")(12, "span", 66);
    \u0275\u0275element(13, "i", 67);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 68)(16, "div", 69)(17, "a", 70);
    \u0275\u0275element(18, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 72);
    \u0275\u0275element(20, "i", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.leaveQuota);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.createdOn);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function LeavesTypeComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var LeavesTypeComponent = class _LeavesTypeComponent {
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
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.leavesType) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getLeavesType().subscribe((apiRes) => {
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Type" },
    { value: "Maternity" },
    { value: "Sick Leave" }
  ];
  selectedList3 = [
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
  static \u0275fac = function LeavesTypeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeavesTypeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeavesTypeComponent, selectors: [["app-leaves-type"]], decls: 142, vars: 6, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-leave", 1, "btn", "btn-primary"], [1, "feather", "icon-plus-circle", "me-1"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "leave"], ["mat-sort-header", "created"], ["mat-sort-header", "status"], ["id", "add-leave", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "input-blocks", "m-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-leave", 1, "modal", "fade"], ["type", "text", "value", "Sick Leave", 1, "form-control"], ["type", "text", "value", "12", 1, "form-control"], [1, "mb-0"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-leave", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "p-2"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function LeavesTypeComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("click", function LeavesTypeComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, LeavesTypeComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, LeavesTypeComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Leave type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "table", 18);
      \u0275\u0275listener("matSortChange", function LeavesTypeComponent_Template_table_matSortChange_28_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(29, "thead", 19)(30, "tr")(31, "th", 20)(32, "label", 21);
      \u0275\u0275listener("click", function LeavesTypeComponent_Template_label_click_32_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function LeavesTypeComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "span", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "th", 24);
      \u0275\u0275text(36, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 25);
      \u0275\u0275text(38, "Leave Quota");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 26);
      \u0275\u0275text(40, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 27);
      \u0275\u0275text(42, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 20);
      \u0275\u0275text(44, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "tbody");
      \u0275\u0275repeaterCreate(46, LeavesTypeComponent_For_47_Template, 21, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(48, LeavesTypeComponent_Conditional_48_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(49, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 28)(51, "div", 29)(52, "div", 30)(53, "div", 31)(54, "div", 2)(55, "h4");
      \u0275\u0275text(56, "Add Leave Type");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "button", 32)(58, "span", 33);
      \u0275\u0275text(59, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "form")(61, "div", 34)(62, "div", 35)(63, "div", 36)(64, "div", 37)(65, "label", 38);
      \u0275\u0275text(66, "Leave Type ");
      \u0275\u0275elementStart(67, "span", 39);
      \u0275\u0275text(68, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(69, "input", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 36)(71, "div", 37)(72, "label", 38);
      \u0275\u0275text(73, "Leave Quota ");
      \u0275\u0275elementStart(74, "span", 39);
      \u0275\u0275text(75, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(76, "input", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 41)(78, "div", 42)(79, "span", 43);
      \u0275\u0275text(80, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "input", 44)(82, "label", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 46)(84, "button", 47);
      \u0275\u0275text(85, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "button", 48);
      \u0275\u0275text(87, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(88, "div", 49)(89, "div", 29)(90, "div", 30)(91, "div", 31)(92, "div", 2)(93, "h4");
      \u0275\u0275text(94, "Edit Leave Type");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "button", 32)(96, "span", 33);
      \u0275\u0275text(97, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "form")(99, "div", 34)(100, "div", 35)(101, "div", 36)(102, "div", 37)(103, "label", 38);
      \u0275\u0275text(104, "Leave Type ");
      \u0275\u0275elementStart(105, "span", 39);
      \u0275\u0275text(106, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(107, "input", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 36)(109, "div", 37)(110, "label", 38);
      \u0275\u0275text(111, "Leave Quota ");
      \u0275\u0275elementStart(112, "span", 39);
      \u0275\u0275text(113, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(114, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 52)(116, "div", 42)(117, "span", 43);
      \u0275\u0275text(118, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(119, "input", 53)(120, "label", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(121, "div", 46)(122, "button", 47);
      \u0275\u0275text(123, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "button", 48);
      \u0275\u0275text(125, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(126, "div", 55)(127, "div", 29)(128, "div", 30)(129, "div", 56)(130, "div", 57)(131, "span", 58);
      \u0275\u0275element(132, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "h4", 60);
      \u0275\u0275text(134, "Delete Leave Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "p", 61);
      \u0275\u0275text(136, "Are you sure you want to delete leave type?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 62)(138, "button", 63);
      \u0275\u0275text(139, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "button", 64);
      \u0275\u0275text(141, "Yes Delete");
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
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 48 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeavesTypeComponent, [{
    type: Component,
    args: [{ selector: "app-leaves-type", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Leaves</h4>\n      <h6>Manage your Leaves</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Pdf"\n        matTooltip="Pdf"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/pdf.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Excel"\n        matTooltip="Excel"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/excel.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Refresh"\n        matTooltip="Refresh"\n        matTooltipPosition="above"\n        ><i class="ti ti-refresh"></i\n      ></a>\n    </li>\n    <li>\n      <a\n        (click)="toggleCollapse()" [class.active]="isCollapsed"\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Collapse"\n        matTooltip="Collapse"\n        matTooltipPosition="above"\n        id="collapse-header"\n        > @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-leave"><i class="feather icon-plus-circle me-1"></i>Add Leave type</a>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-body">\n      <div class="table-responsive">\n        <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n          matSortDirection="asc" matSortDisableClear>\n          <thead class="thead-light">\n            <tr>\n              <th class="no-sort">\n               <label class="checkboxs" (click)="selectAll(initChecked)">\n                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>\n                      <span class="checkmarks"></span>\n                    </label>\n              </th>\n              <th mat-sort-header="name">Name</th>\n              <th mat-sort-header="leave">Leave Quota</th>\n              <th mat-sort-header="created">Created  On</th>\n              <th mat-sort-header="status">Status</th>\n              <th class="no-sort">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data) {\n              <tr>\n                <td>\n                      <label class="checkboxs" (click)="selectAll(initChecked)">\n                        <input type="checkbox"  [(ngModel)]="initChecked"/>\n                        <span class="checkmarks"></span>\n                      </label>\n                    </td>\n                <td>\n                  {{data.name}}\n                </td>\n                <td>{{data.leaveQuota}}</td>\n                <td>{{data.createdOn}}</td>\n                <td><span class="badge badge-success d-inline-flex align-items-center badge-xs"><i class="ti ti-point-filled me-1"></i>{{data.status}}</span></td>\n                <td class="action-table-data">\n                  <div class="edit-delete-action">\n                    <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-leave">\n                      <i  class="feather icon-edit feather-edit"></i>\n                    </a>\n                    <a class=" p-2" href="javascript:void(0);">\n                      <i  class="feather icon-trash-2 feather-trash-2" data-bs-toggle="modal" data-bs-target="#delete-modal"></i>\n                    </a>\n                  </div>\n                </td>\n              </tr>\n            }@if(tableData.length === 0){\n              <tr>\n                  <td class="text-center" colspan="12">No Matching Data Found</td>\n              </tr>\n          }\n          </tbody>\n        </table>\n\n      </div>\n      <app-custom-pagination></app-custom-pagination>\n    </div>\n  </div>\n  <!-- /product list -->\n		<!-- Add Leave Type -->\n		<div class="modal fade" id="add-leave">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Leave Type</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Leave Type <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Leave Quota <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="input-blocks m-0">\n									<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n										<span class="status-label">Status</span>\n										<input type="checkbox" id="user3" class="check" checked>\n										<label for="user3" class="checktoggle">	</label>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Leave Type -->\n\n		<!-- Edit Leave Type -->\n		<div class="modal fade" id="edit-leave">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit  Leave Type</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Leave Type <span class="text-danger">*</span></label>\n										<input type="text" class="form-control" value="Sick Leave">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Leave Quota <span class="text-danger">*</span></label>\n										<input type="text" class="form-control" value="12">\n									</div>\n								</div>\n								<div class="mb-0">\n									<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n										<span class="status-label">Status</span>\n										<input type="checkbox" id="user4" class="check" checked>\n										<label for="user4" class="checktoggle">	</label>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Leave Type -->\n\n		<!-- delete modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Leave Type</h4>\n							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete leave type?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /delete modal -->\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeavesTypeComponent, { className: "LeavesTypeComponent", filePath: "src/app/features/pages/hrm/leaves/leaves-type/leaves-type.component.ts", lineNumber: 27 });
})();
export {
  LeavesTypeComponent
};
//# sourceMappingURL=chunk-6BT37TFE.js.map
