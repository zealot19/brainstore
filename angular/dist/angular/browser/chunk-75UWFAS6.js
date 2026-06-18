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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/hrm/attendence/attendance-employee/attendance-employee.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1, a2) => ({ "badge-success": a0, "bg-danger": a1, "badge-purple ": a2 });
function AttendanceEmployeeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function AttendanceEmployeeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function AttendanceEmployeeComponent_For_162_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "div", 64)(2, "div", 65)(3, "div", 66);
    \u0275\u0275elementEnd();
  }
}
function AttendanceEmployeeComponent_For_162_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 63);
  }
}
function AttendanceEmployeeComponent_For_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 61);
    \u0275\u0275element(5, "i", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275conditionalCreate(18, AttendanceEmployeeComponent_For_162_Conditional_18_Template, 4, 0, "div", 63);
    \u0275\u0275conditionalCreate(19, AttendanceEmployeeComponent_For_162_Conditional_19_Template, 1, 0, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c1, data_r1.status === "Present", data_r1.status === "Absent", data_r1.status === "Holiday"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.clockIn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.clockOut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.production);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.break);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.overTime);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(data_r1.status === "Present" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r1.status === "Absent" || data_r1.status === "Holiday" ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalHours);
  }
}
function AttendanceEmployeeComponent_Conditional_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 67);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var AttendanceEmployeeComponent = class _AttendanceEmployeeComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedList1 = [
    { value: "Sort by Datee" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Status" },
    { value: "Present" },
    { value: "Absent" },
    { value: "Holiday" }
  ];
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
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.attendanceEmployee) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getAttendanceEmployee().subscribe((apiRes) => {
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
  static \u0275fac = function AttendanceEmployeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceEmployeeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceEmployeeComponent, selectors: [["app-attendance-employee"]], decls: 165, vars: 8, consts: [[1, "attendance-header"], [1, "attendance-content"], ["src", "./assets/img/icons/hand01.svg", "alt", "img", 1, "hand-img"], [1, "table-top-head", "employe"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row"], [1, "col-xl-4", "col-lg-12", "d-flex"], [1, "card", "w-100", "border-0"], [1, "card-body"], [1, "mb-3", "pb-3", "border-bottom", "d-flex", "justify-content-between", "align-items-center", "fs-18"], [1, "text-purple", "fs-14"], [1, "d-flex", "align-items-center", "mb-3"], [1, "me-2"], ["src", "./assets/img/icons/time-big.svg", "alt", "time-img"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "me-2", "w-100"], [1, "col-xl-8", "col-lg-12", "d-flex"], [1, "border-bottom", "pb-3", "mb-3"], [1, "row", "gy-3"], [1, "col-lg-2", "col-md-3", "col-sm-4", "text-center"], [1, "d-flex", "align-items-center", "justify-content-center", "avatar", "avatar-xl", "bg-primary-transparent", "fw-bold", "fs-20", "mb-2", "mx-auto"], [1, "fs-14"], [1, "d-flex", "align-items-center", "justify-content-center", "avatar", "avatar-xl", "bg-danger-transparent", "fw-bold", "fs-20", "mb-2", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-center", "avatar", "avatar-xl", "bg-purple-transparent", "text-purple", "fw-bold", "fs-20", "mb-2", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-center", "avatar", "avatar-xl", "bg-warning-transparent", "fw-bold", "fs-20", "mb-2", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-center", "avatar", "avatar-xl", "bg-cyan-transparent", "text-cyan", "fw-bold", "fs-20", "mb-2", "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-center", "avatar", "avatar-xl", "bg-success-transparent", "text-success", "fw-bold", "fs-20", "mb-2", "mx-auto"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body", "pb-0"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "date"], ["mat-sort-header", "status"], ["mat-sort-header", "clockin"], ["mat-sort-header", "clockout"], ["mat-sort-header", "production"], ["mat-sort-header", "break"], ["mat-sort-header", "overtime"], ["mat-sort-header", "progress"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "progress", "attendance", "bg-secondary-transparent"], ["role", "progressbar", 1, "progress-bar", "progress-bar-success", 2, "width", "60%"], ["role", "progressbar", 1, "progress-bar", "progress-bar-warning", 2, "width", "20%"], ["role", "progressbar", 1, "progress-bar", "progress-bar-danger", 2, "width", "10%"], ["colspan", "12", 1, "text-center"]], template: function AttendanceEmployeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "h3");
      \u0275\u0275text(4, "Good Morning, ");
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "John Smilga");
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
      \u0275\u0275listener("click", function AttendanceEmployeeComponent_Template_a_click_19_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(20, AttendanceEmployeeComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(21, AttendanceEmployeeComponent_Conditional_21_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "h5", 16);
      \u0275\u0275text(27, "Attendance");
      \u0275\u0275elementStart(28, "span", 17);
      \u0275\u0275text(29, "22 Aug 2023");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 19);
      \u0275\u0275element(32, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "h2");
      \u0275\u0275text(35, "05:45:22");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "Current Time");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 21)(39, "a", 22);
      \u0275\u0275text(40, "Clock Out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 23);
      \u0275\u0275text(42, "Break");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "div", 24)(44, "div", 14)(45, "div", 15)(46, "h5", 25);
      \u0275\u0275text(47, "Days Overview This Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 26)(49, "div", 27)(50, "div")(51, "span", 28);
      \u0275\u0275text(52, "31");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 29);
      \u0275\u0275text(54, "Total Working ");
      \u0275\u0275element(55, "br");
      \u0275\u0275text(56, " Days");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 27)(58, "div")(59, "span", 30);
      \u0275\u0275text(60, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 29);
      \u0275\u0275text(62, "Abesent ");
      \u0275\u0275element(63, "br");
      \u0275\u0275text(64, "Days");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 27)(66, "div")(67, "span", 31);
      \u0275\u0275text(68, "28");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 29);
      \u0275\u0275text(70, "Present ");
      \u0275\u0275element(71, "br");
      \u0275\u0275text(72, "Days");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 27)(74, "div")(75, "span", 32);
      \u0275\u0275text(76, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 29);
      \u0275\u0275text(78, "Half");
      \u0275\u0275element(79, "br");
      \u0275\u0275text(80, " Days");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 27)(82, "div")(83, "span", 33);
      \u0275\u0275text(84, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p", 29);
      \u0275\u0275text(86, "Late ");
      \u0275\u0275element(87, "br");
      \u0275\u0275text(88, "Days");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 27)(90, "div")(91, "span", 34);
      \u0275\u0275text(92, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 29);
      \u0275\u0275text(94, "Holidays");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(95, "div", 35)(96, "div", 36)(97, "div", 37)(98, "div", 38)(99, "a", 39);
      \u0275\u0275element(100, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 41)(102, "label")(103, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceEmployeeComponent_Template_input_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AttendanceEmployeeComponent_Template_input_ngModelChange_103_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "div", 43)(105, "div", 44)(106, "a", 45);
      \u0275\u0275text(107, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "ul", 46)(109, "li")(110, "a", 47);
      \u0275\u0275text(111, "Present");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "li")(113, "a", 47);
      \u0275\u0275text(114, "Absent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "li")(116, "a", 47);
      \u0275\u0275text(117, "Holiday");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 48)(119, "a", 45);
      \u0275\u0275text(120, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "ul", 46)(122, "li")(123, "a", 47);
      \u0275\u0275text(124, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "li")(126, "a", 47);
      \u0275\u0275text(127, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "li")(129, "a", 47);
      \u0275\u0275text(130, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "li")(132, "a", 47);
      \u0275\u0275text(133, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "li")(135, "a", 47);
      \u0275\u0275text(136, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(137, "div", 49)(138, "div", 50)(139, "table", 51);
      \u0275\u0275listener("matSortChange", function AttendanceEmployeeComponent_Template_table_matSortChange_139_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(140, "thead", 52)(141, "tr")(142, "th", 53);
      \u0275\u0275text(143, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "th", 54);
      \u0275\u0275text(145, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "th", 55);
      \u0275\u0275text(147, "Clock In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "th", 56);
      \u0275\u0275text(149, "Clock Out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "th", 57);
      \u0275\u0275text(151, "Production");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th", 58);
      \u0275\u0275text(153, "Break");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "th", 59);
      \u0275\u0275text(155, "Overtime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "th", 60);
      \u0275\u0275text(157, "Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "th");
      \u0275\u0275text(159, "Total Hours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "tbody");
      \u0275\u0275repeaterCreate(161, AttendanceEmployeeComponent_For_162_Template, 22, 15, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(163, AttendanceEmployeeComponent_Conditional_163_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(164, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 21 : -1);
      \u0275\u0275advance(82);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(58);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 163 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceEmployeeComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-employee", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: `<div class="attendance-header">
  <div class="attendance-content">
    <img src="./assets/img/icons/hand01.svg" class="hand-img" alt="img" />
    <h3>Good Morning, <span>John Smilga</span></h3>
  </div>
  <div>
    <ul class="table-top-head employe">
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img
        src="assets/img/icons/pdf.svg" alt="img"></a>
      </li>
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img
        src="assets/img/icons/excel.svg" alt="img"></a>
      </li>
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"
          title="Refresh"><i class="ti ti-refresh"></i></a>
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
  <div class="row">
    <div class="col-xl-4 col-lg-12 d-flex">
      <div class="card w-100 border-0">
        <div class="card-body">
          <h5 class="mb-3 pb-3 border-bottom d-flex justify-content-between align-items-center fs-18">Attendance<span class="text-purple fs-14">22 Aug 2023</span></h5>
          <div class="d-flex align-items-center mb-3">
            <div class="me-2">
              <img src="./assets/img/icons/time-big.svg" alt="time-img">
            </div>
            <div>
              <h2>05:45:22</h2>
              <p>Current Time</p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="btn btn-primary w-100 me-2">Clock Out</a>
            <a href="javascript:void(0);" class="btn btn-secondary me-2 w-100">Break</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-8 col-lg-12 d-flex">
      <div class="card w-100 border-0">
        <div class="card-body">
          <h5 class="border-bottom pb-3 mb-3">Days Overview This Month</h5>
          <div class="row gy-3">
            <div class="col-lg-2 col-md-3 col-sm-4 text-center">
              <div>
                <span class="d-flex align-items-center justify-content-center avatar avatar-xl bg-primary-transparent fw-bold fs-20 mb-2 mx-auto">31</span>
                <p class="fs-14">Total Working <br> Days</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 text-center">
              <div>
                <span class="d-flex align-items-center justify-content-center avatar avatar-xl bg-danger-transparent fw-bold fs-20 mb-2 mx-auto">05</span>
                <p class="fs-14">Abesent <br>Days</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 text-center">
              <div>
                <span class="d-flex align-items-center justify-content-center avatar avatar-xl bg-purple-transparent text-purple fw-bold fs-20 mb-2 mx-auto">28</span>
                <p class="fs-14">Present <br>Days</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 text-center">
              <div>
                <span class="d-flex align-items-center justify-content-center avatar avatar-xl bg-warning-transparent fw-bold fs-20 mb-2 mx-auto">02</span>
                <p class="fs-14">Half<br> Days</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 text-center">
              <div>
                <span class="d-flex align-items-center justify-content-center avatar avatar-xl bg-cyan-transparent text-cyan fw-bold fs-20 mb-2 mx-auto">01</span>
                <p class="fs-14">Late <br>Days</p>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 text-center">
              <div>
                <span class="d-flex align-items-center justify-content-center avatar avatar-xl bg-success-transparent text-success fw-bold fs-20 mb-2 mx-auto">02</span>
                <p class="fs-14">Holidays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Present</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Absent</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Holiday</a>
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
          <table class="table datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno" matSortDirection="asc"
            matSortDisableClear>
            <thead class="thead-light">
              <tr>
                <th mat-sort-header="date">Date</th>
                <th mat-sort-header="status">Status</th>
                <th mat-sort-header="clockin">Clock In</th>
                <th mat-sort-header="clockout">Clock Out</th>
                <th mat-sort-header="production">Production</th>
                <th mat-sort-header="break">Break</th>
                <th mat-sort-header="overtime">Overtime</th>
                <th mat-sort-header="progress">Progress</th>
                <th>Total Hours</th>
              </tr>
            </thead>
            <tbody>
              @for (data of tableData; track data; let i = $index) {
                <tr>
                  <td>{{ data.date }}</td>
                  <td>
              <span class="badge  d-inline-flex align-items-center badge-xs" [ngClass]="{
                'badge-success': data.status === 'Present',
                'bg-danger': data.status === 'Absent',
                'badge-purple ': data.status === 'Holiday'
              }"><i class="ti ti-point-filled me-1"></i>{{ data.status }}</span>
                    </td>
                    <td>{{ data.clockIn }}</td>
                    <td>{{ data.clockOut }}</td>
                    <td>{{ data.production }}</td>
                    <td>{{ data.break }}</td>
                    <td>{{ data.overTime }}</td>
                    <td>
                      @if (data.status==='Present') {
                        <div class="progress attendance bg-secondary-transparent">
                          <div class="progress-bar progress-bar-success" role="progressbar" style="width: 60%"></div>
                          <div class="progress-bar progress-bar-warning" role="progressbar" style="width: 20%"></div>
                          <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 10%"></div>
                        </div>
                      }
                      @if (data.status==='Absent'|| data.status==='Holiday') {
                        <div class="progress attendance bg-secondary-transparent">
                        </div>
                      }
                    </td>

                    <td>{{ data.totalHours }}</td>
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
      </div>` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceEmployeeComponent, { className: "AttendanceEmployeeComponent", filePath: "src/app/features/pages/hrm/attendence/attendance-employee/attendance-employee.component.ts", lineNumber: 25 });
})();
export {
  AttendanceEmployeeComponent
};
//# sourceMappingURL=chunk-75UWFAS6.js.map
