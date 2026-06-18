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
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/pages/hrm/attendence/attendance-admin/attendance-admin.component.ts
var _c0 = () => ({ standalone: true });
function AttendanceAdminComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function AttendanceAdminComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function AttendanceAdminComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 42)(3, "a", 43);
    \u0275\u0275element(4, "img", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h6")(7, "a", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 46);
    \u0275\u0275element(13, "i", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r1.employee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.designation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Present" ? "badge-success" : "badge-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.clockIn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.clockOut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.production);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.break);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.overtime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalHours);
  }
}
function AttendanceAdminComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var AttendanceAdminComponent = class _AttendanceAdminComponent {
  data;
  pagination;
  router;
  sidebar;
  datePipe;
  initChecked = false;
  showTimePicker = [];
  date = /* @__PURE__ */ new Date();
  myTime = /* @__PURE__ */ new Date();
  myDateValue;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Sort by Datee" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose" },
    { value: "Mitchum Daniel" },
    { value: "Janet Hembre" },
    { value: "Russell Belle" }
  ];
  selectedList3 = [
    { value: "Choose" },
    { value: "Mitchum Daniel" },
    { value: "Janet Hembre" },
    { value: "Russell Belle" }
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
  constructor(data, pagination, router, sidebar, datePipe) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.datePipe = datePipe;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.attendanceAdmin) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
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
  getTableData(pageOption) {
    this.data.getAttendanceAdmin().subscribe((apiRes) => {
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
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedList4 = [
    { value: "Choose Name" },
    { value: "Mitchum Daniel" },
    { value: "Robert Grossman" },
    { value: "Janet Hembre" }
  ];
  selectedList5 = [
    { value: "Choose Status" },
    { value: "Approved" },
    { value: "Rejected" }
  ];
  time1 = /* @__PURE__ */ new Date();
  time2 = /* @__PURE__ */ new Date();
  time3 = /* @__PURE__ */ new Date();
  time4 = /* @__PURE__ */ new Date();
  toggleTimePicker(value) {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date) {
    const selectedDate = new Date(date);
    return this.datePipe.transform(selectedDate, "h:mm a");
  }
  showBox = false;
  toggleBox() {
    this.showBox = !this.showBox;
  }
  ngOnInit() {
    this.myDateValue = /* @__PURE__ */ new Date();
  }
  onDateChange(newDate) {
    console.log(newDate);
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
  static \u0275fac = function AttendanceAdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceAdminComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(DatePipe));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceAdminComponent, selectors: [["app-attendance-admin"]], features: [\u0275\u0275ProvidersFeature([
    DatePipe
  ])], decls: 73, vars: 8, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "me-2", "w-120"], [1, "input-addon-left", "position-relative", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "Select Date", 1, "form-control", "datetimepicker"], [1, "cus-icon"], [1, "feather", "icon-calendar", "feather-clock"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body", "pb-0"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "empname"], ["mat-sort-header", "empid"], ["mat-sort-header", "clockin"], ["mat-sort-header", "clockout"], ["mat-sort-header", "production"], ["mat-sort-header", "break"], ["mat-sort-header", "overtime"], ["mat-sort-header", "totalhours"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], ["colspan", "12", 1, "text-center"]], template: function AttendanceAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Attendance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Attendance");
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
      \u0275\u0275listener("click", function AttendanceAdminComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, AttendanceAdminComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, AttendanceAdminComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "li");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "a", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "label")(30, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceAdminComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AttendanceAdminComponent_Template_input_ngModelChange_30_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 21)(33, "div", 22);
      \u0275\u0275element(34, "input", 23);
      \u0275\u0275elementStart(35, "span", 24);
      \u0275\u0275element(36, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 26)(38, "a", 27);
      \u0275\u0275text(39, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "ul", 28)(41, "li")(42, "a", 29);
      \u0275\u0275text(43, "Present");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 29);
      \u0275\u0275text(46, "Absent");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(47, "div", 30)(48, "div", 31)(49, "table", 32);
      \u0275\u0275listener("matSortChange", function AttendanceAdminComponent_Template_table_matSortChange_49_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(50, "thead", 33)(51, "tr")(52, "th", 34);
      \u0275\u0275text(53, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 35);
      \u0275\u0275text(55, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 36);
      \u0275\u0275text(57, "Clock In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 37);
      \u0275\u0275text(59, "Clock Out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 38);
      \u0275\u0275text(61, "Production");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 39);
      \u0275\u0275text(63, "Break");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 40);
      \u0275\u0275text(65, "Overtime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 41);
      \u0275\u0275text(67, "Total Hours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "tbody");
      \u0275\u0275repeaterCreate(69, AttendanceAdminComponent_For_70_Template, 27, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(71, AttendanceAdminComponent_Conditional_71_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(72, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(39);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 71 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, MatSelectModule, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceAdminComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-admin", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule, BsDatepickerModule], providers: [
      DatePipe
    ], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Attendance</h4>
      <h6>Manage your Attendance</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
        ><img src="assets/img/icons/pdf.svg" alt="img"
      /></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
        ><img src="assets/img/icons/excel.svg" alt="img"
      /></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
        ><i class="ti ti-refresh"></i
      ></a>
    </li>
    <li>
      <a (click)="toggleCollapse()" [class.active]="isCollapsed"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Collapse" matTooltip="Collapse" matTooltipPosition="above"
        id="collapse-header"
        > @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
    <li></li>
  </ul>

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
        <div class="me-2 w-120">
          <div class="input-addon-left position-relative ngxdate">
            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate" placeholder="Select Date">
            <span class="cus-icon"><i class="feather icon-calendar feather-clock"></i></span>
          </div>
        </div>
        <div class="dropdown">
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
          </ul>
        </div>
      </div>
    </div>
    <div class="card-body pb-0">

                        <div class="table-responsive">
                          <table
                            class="table datanew"
                            (matSortChange)="sortData($event)"
                            matSort
                            matSortActive="Sno"
                            matSortDirection="asc"
                            matSortDisableClear
                            >
                            <thead class="thead-light">
                              <tr>
                                <th mat-sort-header="empname">Employee</th>
                                <th mat-sort-header="empid">Status</th>
                                <th mat-sort-header="clockin">Clock In</th>
                                <th mat-sort-header="clockout">Clock Out</th>
                                <th mat-sort-header="production">Production</th>
                                <th mat-sort-header="break">Break</th>
                                <th mat-sort-header="overtime">Overtime</th>
                                <th mat-sort-header="totalhours">Total Hours</th>
                              </tr>
                            </thead>
                            <tbody>
                              @for (data of tableData; track data; let i = $index) {
                                <tr>
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
                                  <td>
                                    <span class="badge d-inline-flex align-items-center badge-xs" [ngClass]="data.status==='Present'?'badge-success':'badge-danger'">
                                      <i class="ti ti-point-filled me-1"></i>{{data.status}}
                                    </span>
                                  </td>
                                  <td>{{data.clockIn}}</td>
                                  <td>{{data.clockOut}}</td>
                                  <td>{{data.production}}</td>
                                  <td>{{data.break}}</td>
                                  <td>{{data.overtime}}</td>
                                  <td>{{data.totalHours}}</td>
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

` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }, { type: DatePipe }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceAdminComponent, { className: "AttendanceAdminComponent", filePath: "src/app/features/pages/hrm/attendence/attendance-admin/attendance-admin.component.ts", lineNumber: 37 });
})();
export {
  AttendanceAdminComponent
};
//# sourceMappingURL=chunk-6WTRHSA3.js.map
