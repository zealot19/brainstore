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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/call/call-history/call-history.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1) => ({ "icon-arrow-down-left income-success": a0, "icon-arrow-down-right income-success-missed": a1 });
function CallHistoryComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CallHistoryComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CallHistoryComponent_For_87_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275element(1, "i", 84)(2, "i", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c1, data_r1.callType === "Incoming Call" || data_r1.callType === "Outgoing Call", data_r1.callType === "Missed Call"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r1.callType, " ");
  }
}
function CallHistoryComponent_For_87_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275element(1, "i", 86)(2, "i", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c1, data_r1.callType === "Incoming Call" || data_r1.callType === "Outgoing Call", data_r1.callType === "Missed Call"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r1.callType, " ");
  }
}
function CallHistoryComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 31);
    \u0275\u0275element(3, "input", 72)(4, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 73)(7, "a", 74);
    \u0275\u0275element(8, "img", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 76);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, CallHistoryComponent_For_87_Conditional_13_Template, 4, 5, "td", 77);
    \u0275\u0275conditionalCreate(14, CallHistoryComponent_For_87_Conditional_14_Template, 4, 5, "td", 77);
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 78)(20, "div", 79)(21, "a", 80);
    \u0275\u0275element(22, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 82);
    \u0275\u0275element(24, "i", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275property("src", data_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r1.audio === true ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r1.video === true ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.dateTime);
  }
}
var CallHistoryComponent = class _CallHistoryComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Name" },
    { value: "Thomas" },
    { value: "Rose" }
  ];
  selectedList3 = [
    { value: "Choose Calls" },
    { value: "All Calls" },
    { value: "Missed Calls" },
    { value: "Outgoing Calls" },
    { value: "Incoming Calls" }
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
        if (this.router.url == this.routes.callHistory) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCallHistory().subscribe((apiRes) => {
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
  static \u0275fac = function CallHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CallHistoryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CallHistoryComponent, selectors: [["app-call-history"]], decls: 157, vars: 11, consts: [[1, "page-header"], [1, "page-header", "menu"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive", "product-list"], ["matSort", "", 1, "table", "datanew", "list", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "username"], ["mat-sort-header", "phoneNumber"], ["mat-sort-header", "callType"], ["mat-sort-header", "duration"], ["mat-sort-header", "dateTime"], ["id", "user-profile-new", 1, "modal", "fade"], [1, "modal-dialog", "history-modal-profile"], [1, "modal-content"], [1, "page-wrapper", "details-blk"], [1, "content", "p-4"], [1, "text-center", "right-sidebar-profile", "mb-3"], [1, "avatar"], ["src", "assets/img/users/user-08.jpg", "alt", "image", 1, "rounded-circle"], [1, "chat-options", "chat-option-profile"], [1, "list-inline"], [1, "list-inline-item"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "", "data-bs-original-title", "Video Call", 1, "bg-secondary-transparent", "p-2", "d-flex", "align-items-center", "rounded-circle", 3, "routerLink"], ["data-feather", "video", 1, "feather", "icon-video", "fs-20"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "", "data-bs-original-title", "Chat", 1, "bg-primary", "p-2", "d-flex", "align-items-center", "rounded-circle", 3, "routerLink"], ["data-feather", "message-square", 1, "feather", "icon-message-square", "fs-20"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "", "data-bs-original-title", "Voice Call", 1, "profile-open", "bg-secondary-transparent", "p-2", "d-flex", "align-items-center", "rounded-circle", 3, "routerLink"], ["data-feather", "phone", 1, "feather", "icon-phone", "fs-20"], [1, "modal-profile-detail"], [1, "row"], [1, "col-lg-6"], [1, "modal-userlist"], [1, "modal-userlist", "d-flex", "justify-content-center"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["type", "checkbox"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "product-img"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "phone-call-icon"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#user-profile-new", 1, "me-3", "p-2"], [1, "feather", "icon-eye", "feather-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], [1, "feather", "icon-phone", "income-calls", "me-1"], [1, "feather", "me-1", 3, "ngClass"], [1, "feather", "icon-video", "income-calls", "me-1"]], template: function CallHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Call History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your products");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div")(8, "ul", 3)(9, "li")(10, "a", 4);
      \u0275\u0275element(11, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 6);
      \u0275\u0275element(14, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 8);
      \u0275\u0275element(17, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 10);
      \u0275\u0275listener("click", function CallHistoryComponent_Template_a_click_19_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(20, CallHistoryComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(21, CallHistoryComponent_Conditional_21_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "a", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "label")(30, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function CallHistoryComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CallHistoryComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 21)(33, "a", 22);
      \u0275\u0275text(34, " Call type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "ul", 23)(36, "li")(37, "a", 24);
      \u0275\u0275text(38, "Incoming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 24);
      \u0275\u0275text(41, "Outgoing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 24);
      \u0275\u0275text(44, "Missed Call");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 25)(46, "a", 22);
      \u0275\u0275text(47, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 23)(49, "li")(50, "a", 24);
      \u0275\u0275text(51, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 24);
      \u0275\u0275text(54, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 24);
      \u0275\u0275text(57, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 24);
      \u0275\u0275text(60, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 24);
      \u0275\u0275text(63, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(64, "div", 26)(65, "div", 27)(66, "table", 28);
      \u0275\u0275listener("matSortChange", function CallHistoryComponent_Template_table_matSortChange_66_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(67, "thead", 29)(68, "tr")(69, "th", 30)(70, "label", 31)(71, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function CallHistoryComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "th", 34);
      \u0275\u0275text(74, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 35);
      \u0275\u0275text(76, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 36);
      \u0275\u0275text(78, "Call Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 37);
      \u0275\u0275text(80, "Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 38);
      \u0275\u0275text(82, "Date & Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 30);
      \u0275\u0275text(84, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "tbody");
      \u0275\u0275repeaterCreate(86, CallHistoryComponent_For_87_Template, 25, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(88, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 39)(90, "div", 40)(91, "div", 41)(92, "div", 42)(93, "div", 43)(94, "div", 44)(95, "figure", 45);
      \u0275\u0275element(96, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 47)(98, "ul", 48)(99, "li", 49)(100, "a", 50);
      \u0275\u0275element(101, "i", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "li", 49)(103, "a", 52);
      \u0275\u0275element(104, "i", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "li", 49)(106, "a", 54);
      \u0275\u0275element(107, "i", 55);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(108, "div", 56)(109, "div", 57)(110, "div", 58)(111, "div", 59)(112, "ul")(113, "li");
      \u0275\u0275text(114, "Name");
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, "Thomas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "li");
      \u0275\u0275text(118, "Phone");
      \u0275\u0275elementStart(119, "span");
      \u0275\u0275text(120, "+1 25182 94528");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "li");
      \u0275\u0275text(122, "Email");
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "thomas@example.com");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(125, "div", 58)(126, "div", 60)(127, "ul")(128, "li");
      \u0275\u0275text(129, "Total Calls");
      \u0275\u0275elementStart(130, "span");
      \u0275\u0275text(131, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "li");
      \u0275\u0275text(133, "Average Call Timing");
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275text(135, "0.30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "li");
      \u0275\u0275text(137, "Average Waiting Time");
      \u0275\u0275elementStart(138, "span");
      \u0275\u0275text(139, "00.5");
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(140, "div", 61)(141, "div", 62)(142, "div", 41)(143, "div", 63)(144, "div", 64)(145, "form")(146, "div", 65);
      \u0275\u0275element(147, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "h3", 67);
      \u0275\u0275text(149, "Delete History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 68);
      \u0275\u0275text(151, "Are you sure you want to delete contact from call history?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 69)(153, "button", 70);
      \u0275\u0275text(154, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "button", 71);
      \u0275\u0275text(156, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 21 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.videoCall);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.audioCall);
    }
  }, dependencies: [MatSelectModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgClass, MatSortModule, MatSort, MatSortHeader, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CallHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-call-history", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, CommonModule, MatSortModule, RouterLink], template: `<div class="page-header">
  <div class="page-header menu">
    <div class="page-title">
      <h4>Call History</h4>
      <h6>Manage your products</h6>
    </div>
  </div>
  <div>
    <ul class="table-top-head">
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf" matTooltip="Pdf" matTooltipPosition="above"><img
        src="assets/img/icons/pdf.svg" alt="img"></a>
      </li>
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel" matTooltip="Excel"
          matTooltipPosition="above"><img src="assets/img/icons/excel.svg" alt="img"></a>
        </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"
              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>
            </li>
            <li>
              <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse"
                matTooltip="Collapse" matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {
                <i class="ti ti-chevron-up"></i>
              }
              @if (isCollapsed) {
                <i class="ti ti-chevron-up"></i>
              }</a>
            </li>
          </ul>
        </div>
      </div>


      <!-- /product list -->
      <div class="card table-list-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <div class="search-set">
            <div class="search-input">
              <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
              <div class="dataTables_filter">
                <label>
                  <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
                    type="search" class="form-control" placeholder="Search" />
                  </label>
                </div>
              </div>
          </div>
          <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Call type
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Incoming</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Outgoing</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Missed Call</a>
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
            <div class="table-responsive product-list">
              <table class="table  datanew list" matSort (matSortChange)="sortData($event)">
                <thead class="thead-light">
                  <tr>
                    <th class="no-sort">
                      <label class="checkboxs">
                         <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                        <span class="checkmarks"></span>
                      </label>
                    </th>
                    <th mat-sort-header="username">Username</th>
                    <th mat-sort-header="phoneNumber">Phone Number</th>
                    <th mat-sort-header="callType">Call Type</th>
                    <th mat-sort-header="duration">Duration</th>
                    <th mat-sort-header="dateTime">Date & Time</th>
                    <th class="no-sort">Action</th>
                  </tr>
                </thead>
                <tbody>
                  @for (data of tableData; track data) {
                    <tr>
                      <td>
                        <label class="checkboxs">
                          <input type="checkbox">
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>
                        <div class="userimgname">
                          <a href="javascript:void(0);" class="product-img">
                            <img [src]="data.img" alt="product">
                          </a>
                          <a href="javascript:void(0);">{{data.username}}</a>
                        </div>
                      </td>
                      <td>{{data.phoneNumber}}</td>
                      @if (data.audio === true) {
                        <td class="phone-call-icon"><i class="feather icon-phone income-calls me-1"></i><i class="feather me-1"
                      [ngClass]="{'icon-arrow-down-left income-success': data.callType === 'Incoming Call' || data.callType === 'Outgoing Call', 'icon-arrow-down-right income-success-missed': data.callType === 'Missed Call'}"></i>{{data.callType}}
                    </td>
                  }
                  @if (data.video === true) {
                    <td class="phone-call-icon"><i class="feather icon-video income-calls me-1"></i><i class="feather me-1"
                  [ngClass]="{'icon-arrow-down-left income-success': data.callType === 'Incoming Call' || data.callType === 'Outgoing Call', 'icon-arrow-down-right income-success-missed': data.callType === 'Missed Call'}"></i>{{data.callType}}
                </td>
              }
              <td>{{data.duration}}</td>
              <td>{{data.dateTime}}</td>
              <td class="action-table-data">
                <div class="edit-delete-action">
                  <a class="me-3 p-2" href="javascript:void(0);" data-bs-toggle="modal"
                    data-bs-target="#user-profile-new">
                    <i class="feather icon-eye feather-eye"></i>
                  </a>
                  <a class=" p-2" href="javascript:void(0);"data-bs-toggle="modal" data-bs-target="#delete-modal">
                    <i class="feather icon-trash-2 feather-trash-2"></i>
                  </a>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <app-custom-pagination></app-custom-pagination>
  </div>
</div>
<!-- /product list -->

		<!-- details popup -->
		<div class="modal fade" id="user-profile-new">
			<div class="modal-dialog history-modal-profile">
				<div class="modal-content">
					<div class="page-wrapper details-blk">
						<div class="content p-4">
							<div class="text-center right-sidebar-profile mb-3">
								<figure class="avatar">
									<img class="rounded-circle" src="assets/img/users/user-08.jpg" alt="image">
								</figure>
								<div class="chat-options chat-option-profile">
									<ul class="list-inline">
										<li class="list-inline-item">
											<a [routerLink]="routes.videoCall" class="bg-secondary-transparent p-2 d-flex align-items-center rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Video Call">
												<i data-feather="video" class="feather icon-video fs-20"></i>
											</a>
										</li>
										<li class="list-inline-item">
											<a [routerLink]="routes.chat" class="bg-primary p-2 d-flex align-items-center rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Chat">
												<i data-feather="message-square" class="feather icon-message-square fs-20"></i>
											</a>
										</li>
										<li class="list-inline-item ">
											<a [routerLink]="routes.audioCall" class="profile-open bg-secondary-transparent p-2 d-flex align-items-center rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Voice Call">
												<i data-feather="phone" class="feather icon-phone fs-20"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="modal-profile-detail">
								<div class="row">
									<div class="col-lg-6">
										<div class="modal-userlist">
											<ul>
												<li>Name<span>Thomas</span></li>
												<li>Phone<span>+1 25182 94528</span></li>
												<li>Email<span>thomas&#64;example.com</span></li>
											</ul>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="modal-userlist d-flex justify-content-center">
											<ul>
												<li>Total Calls<span>20</span></li>
												<li>Average Call Timing<span>0.30</span></li>
												<li>Average Waiting Time<span>00.5</span></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /details popup -->

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
								<h3 class="mb-2">Delete History</h3>
								<p class="fs-16 mb-3">Are you sure you want to delete contact from call history?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CallHistoryComponent, { className: "CallHistoryComponent", filePath: "src/app/features/pages/application/call/call-history/call-history.component.ts", lineNumber: 23 });
})();
export {
  CallHistoryComponent
};
//# sourceMappingURL=chunk-AW2VG7WF.js.map
