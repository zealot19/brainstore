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

// src/app/features/pages/hrm/holidays/holidays.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => ({ adaptivePosition: true });
function HolidaysComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function HolidaysComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function HolidaysComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 33);
    \u0275\u0275listener("click", function HolidaysComponent_For_68_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function HolidaysComponent_For_68_Template_input_ngModelChange_3_listener($event) {
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
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 88);
    \u0275\u0275element(13, "i", 89);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 90)(16, "div", 91)(17, "a", 92);
    \u0275\u0275element(18, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 94);
    \u0275\u0275element(20, "i", 95);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r3.date, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r3.description, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", data_r3.status, " ");
  }
}
function HolidaysComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 96);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var HolidaysComponent = class _HolidaysComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedList1 = [
    { value: "Choose Status" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" }
  ];
  selectedList2 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  // pagination variables
  tableData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.holidays) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getHolidays().subscribe((apiRes) => {
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
    { value: "Choose Holiday" },
    { value: "UI/UX" },
    { value: "HR" },
    { value: "Admin" },
    { value: "Engineering" }
  ];
  selectedList5 = [
    { value: "Choose HOD" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" }
  ];
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
  static \u0275fac = function HolidaysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HolidaysComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HolidaysComponent, selectors: [["app-holidays"]], decls: 214, vars: 23, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-holiday", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body", "pb-0"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "date"], ["mat-sort-header", "duraation"], ["mat-sort-header", "status"], ["id", "add-holiday", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "col-lg-6"], [1, "input-addon-right", "position-relative", "ngxdate3"], ["type", "text", "bsDatepicker", "", 1, "datetimepicker", "form-control", 3, "bsConfig"], [1, "cus-icon"], ["data-feather", "calendar", 1, "feather-clock"], [1, "input-addon-right", "position-relative", "ngxdate4"], [1, "summer-description-box", "mb-3"], [3, "editor"], [3, "editor", "toolbar"], [1, "m-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-holiday", 1, "modal", "fade"], ["type", "text", "value", "New Year", 1, "form-control"], [1, "input-addon-right", "position-relative", "ngxdate"], [1, "input-addon-right", "position-relative", "ngxdate1"], ["type", "text", "value", "01", 1, "form-control"], ["type", "checkbox", "id", "user6", "value", "First day of the new year", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-content", "p-5"], [1, "modal-body", "text-center", "p-0"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "d-flex", "justify-content-center", "mt-3"], ["data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-holiday", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function HolidaysComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Holiday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Holiday");
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
      \u0275\u0275listener("click", function HolidaysComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, HolidaysComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, HolidaysComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Holiday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function HolidaysComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function HolidaysComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "New Joiners");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "div", 28)(49, "div", 29)(50, "table", 30);
      \u0275\u0275listener("matSortChange", function HolidaysComponent_Template_table_matSortChange_50_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(51, "thead", 31)(52, "tr")(53, "th", 32)(54, "label", 33);
      \u0275\u0275listener("click", function HolidaysComponent_Template_label_click_54_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(55, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function HolidaysComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "th", 36);
      \u0275\u0275text(58, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 37);
      \u0275\u0275text(60, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 38);
      \u0275\u0275text(62, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 39);
      \u0275\u0275text(64, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "tbody");
      \u0275\u0275repeaterCreate(67, HolidaysComponent_For_68_Template, 21, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(69, HolidaysComponent_Conditional_69_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(70, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 40)(72, "div", 41)(73, "div", 42)(74, "div", 43)(75, "div", 2)(76, "h4");
      \u0275\u0275text(77, "Add Holiday");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "button", 44)(79, "span", 45);
      \u0275\u0275text(80, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "form")(82, "div", 46)(83, "div", 47)(84, "div", 48)(85, "div", 49)(86, "label", 50);
      \u0275\u0275text(87, "Holiday ");
      \u0275\u0275elementStart(88, "span", 51);
      \u0275\u0275text(89, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(90, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 53)(92, "div", 49)(93, "label", 50);
      \u0275\u0275text(94, "From ");
      \u0275\u0275elementStart(95, "span", 51);
      \u0275\u0275text(96, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 54);
      \u0275\u0275element(98, "input", 55);
      \u0275\u0275elementStart(99, "span", 56);
      \u0275\u0275element(100, "i", 57);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "div", 53)(102, "div", 49)(103, "label", 50);
      \u0275\u0275text(104, "To ");
      \u0275\u0275elementStart(105, "span", 51);
      \u0275\u0275text(106, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 58);
      \u0275\u0275element(108, "input", 55);
      \u0275\u0275elementStart(109, "span", 56);
      \u0275\u0275element(110, "i", 57);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(111, "div", 48)(112, "div", 49)(113, "label", 50);
      \u0275\u0275text(114, "No of Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(115, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 48)(117, "div", 59)(118, "label", 50);
      \u0275\u0275text(119, "Description ");
      \u0275\u0275elementStart(120, "span", 51);
      \u0275\u0275text(121, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "ngx-editor", 60);
      \u0275\u0275element(123, "ngx-editor-menu", 61);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(124, "div", 62)(125, "div", 63)(126, "span", 64);
      \u0275\u0275text(127, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "input", 65)(129, "label", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 67)(131, "button", 68);
      \u0275\u0275text(132, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "button", 69);
      \u0275\u0275text(134, "Add Holiday");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(135, "div", 70)(136, "div", 41)(137, "div", 42)(138, "div", 43)(139, "div", 2)(140, "h4");
      \u0275\u0275text(141, "Edit Holiday");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "button", 44)(143, "span", 45);
      \u0275\u0275text(144, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "form")(146, "div", 46)(147, "div", 47)(148, "div", 48)(149, "div", 49)(150, "label", 50);
      \u0275\u0275text(151, "Holiday ");
      \u0275\u0275elementStart(152, "span", 51);
      \u0275\u0275text(153, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(154, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 53)(156, "div", 49)(157, "label", 50);
      \u0275\u0275text(158, "From ");
      \u0275\u0275elementStart(159, "span", 51);
      \u0275\u0275text(160, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 72);
      \u0275\u0275element(162, "input", 55);
      \u0275\u0275elementStart(163, "span", 56);
      \u0275\u0275element(164, "i", 57);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(165, "div", 53)(166, "div", 49)(167, "label", 50);
      \u0275\u0275text(168, "To ");
      \u0275\u0275elementStart(169, "span", 51);
      \u0275\u0275text(170, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 73);
      \u0275\u0275element(172, "input", 55);
      \u0275\u0275elementStart(173, "span", 56);
      \u0275\u0275element(174, "i", 57);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(175, "div", 48)(176, "div", 49)(177, "label", 50);
      \u0275\u0275text(178, "No of Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(179, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 48)(181, "div", 59)(182, "label", 50);
      \u0275\u0275text(183, "Description ");
      \u0275\u0275elementStart(184, "span", 51);
      \u0275\u0275text(185, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "ngx-editor", 60);
      \u0275\u0275element(187, "ngx-editor-menu", 61);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(188, "div", 62)(189, "div", 63)(190, "span", 64);
      \u0275\u0275text(191, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(192, "input", 75)(193, "label", 76);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "div", 67)(195, "button", 68);
      \u0275\u0275text(196, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "button", 69);
      \u0275\u0275text(198, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(199, "div", 77)(200, "div", 41)(201, "div", 78)(202, "div", 79)(203, "span", 80);
      \u0275\u0275element(204, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "h4", 82);
      \u0275\u0275text(206, "Delete Holiday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "p", 83);
      \u0275\u0275text(208, "Are you sure you want to delete holiday?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 84)(210, "a", 85);
      \u0275\u0275text(211, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "a", 86);
      \u0275\u0275text(213, "Yes Delete");
      \u0275\u0275elementEnd()()()()()();
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0));
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 69 : -1);
      \u0275\u0275advance(29);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(19, _c1));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(20, _c1));
      \u0275\u0275advance(14);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(39);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(22, _c1));
      \u0275\u0275advance(14);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HolidaysComponent, [{
    type: Component,
    args: [{ selector: "app-holidays", imports: [NgxEditorModule, BsDatepickerModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Holiday</h4>\n      <h6>Manage your Holiday</h6>\n    </div>\n\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg"\n      alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg"\n      alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-holiday"><i\n    class="ti ti-circle-plus me-2"></i>Add Holiday</a>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n              type="search" class="form-control" placeholder="Search..." />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n      \n      \n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Select Status\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>\n          </li>\n        </ul>\n      </div>\n      \n    </div>\n  </div>\n  <div class="card-body pb-0">\n<!-- product list -->\n<div class="table-responsive">\n  <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n    matSortDirection="asc" matSortDisableClear>\n    <thead class="thead-light">\n      <tr>\n        <th class="no-sort">\n          <label class="checkboxs" (click)="selectAll(initChecked)">\n             <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n            <span class="checkmarks"></span>\n          </label>\n        </th>\n        <th mat-sort-header="name">Type</th>\n        <th mat-sort-header="date">Date</th>\n        <th mat-sort-header="duraation">Description</th>\n        <th mat-sort-header="status">Status</th>\n        <th class="no-sort"></th>\n      </tr>\n    </thead>\n    <tbody>\n      @for (data of tableData; track data; let i = $index) {\n        <tr>\n          <td>\n            <label class="checkboxs"  (click)="selectAll(initChecked)">\n              <input type="checkbox" [(ngModel)]="initChecked">\n              <span class="checkmarks"></span>\n            </label>\n          </td>\n          <td>{{data.type}}</td>\n          <td>\n            {{data.date}}\n          </td>\n          <td>{{data.description}} </td>\n          <td><span class="badge badge-success d-inline-flex align-items-center badge-xs">\n            <i class="ti ti-point-filled me-1"></i>{{data.status}}\n          </span></td>\n          <td class="action-table-data">\n            <div class="edit-delete-action">\n              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal"\n                data-bs-target="#edit-holiday">\n                <i class="feather icon-edit feather-edit"></i>\n              </a>\n              <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                <i class="feather icon-trash-2 feather-trash-2"></i>\n              </a>\n            </div>\n          </td>\n        </tr>\n	}@if(tableData.length === 0){\n		<tr>\n			<td class="text-center" colspan="12">No Matching Data Found</td>\n		</tr>\n	}\n    </tbody>\n  </table>\n\n</div>\n<app-custom-pagination></app-custom-pagination>\n<!-- /product list -->\n</div>\n</div>\n		<!-- Add Holiday -->\n		<div class="modal fade" id="add-holiday">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">							\n							<h4>Add Holiday</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Holiday <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">From <span class="text-danger"> *</span></label>\n										<div class="input-addon-right position-relative ngxdate3">\n											<input type="text" class="datetimepicker form-control" bsDatepicker\n                                                [bsConfig]="{ adaptivePosition: true }">\n											<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">To <span class="text-danger"> *</span></label>\n										<div class="input-addon-right position-relative ngxdate4">\n											<input type="text" class="datetimepicker form-control" bsDatepicker\n                                                [bsConfig]="{ adaptivePosition: true }">\n											<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>\n										</div>\n									</div>\n								</div>	\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">No of Days</label>\n										<input type="text" class="form-control">\n									</div>\n								</div>	\n								<div class="col-lg-12">\n									<div class="summer-description-box mb-3">\n										<label class="form-label">Description <span class="text-danger"> *</span></label>\n										<ngx-editor [editor]="editor">\n                      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                      </ngx-editor-menu>\n                   </ngx-editor>\n									</div>\n								</div>\n							</div>\n							<div class="m-0">\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="user5" class="check" checked>\n									<label for="user5" class="checktoggle">	</label>\n								</div>								\n							</div>							\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Holiday</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Holiday -->\n\n		<!-- Edit Holiday -->\n		<div class="modal fade" id="edit-holiday">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">							\n							<h4>Edit Holiday</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Holiday <span class="text-danger">*</span></label>\n										<input type="text" class="form-control" value="New Year">\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">From <span class="text-danger"> *</span></label>\n										<div class="input-addon-right position-relative ngxdate">\n											<input type="text" class="datetimepicker form-control" bsDatepicker\n                                                [bsConfig]="{ adaptivePosition: true }">\n											<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">To <span class="text-danger"> *</span></label>\n										<div class="input-addon-right position-relative ngxdate1">\n											<input type="text" class="datetimepicker form-control" bsDatepicker\n                                                [bsConfig]="{ adaptivePosition: true }">\n											<span class="cus-icon"><i data-feather="calendar" class="feather-clock"></i></span>\n										</div>\n									</div>\n								</div>	\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">No of Days</label>\n										<input type="text" class="form-control" value="01">\n									</div>\n								</div>	\n								<div class="col-lg-12">\n									<div class="summer-description-box mb-3">\n										<label class="form-label">Description <span class="text-danger"> *</span></label>\n										<ngx-editor [editor]="editor1">\n                      <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >\n                      </ngx-editor-menu>\n                   </ngx-editor>\n									</div>\n								</div>\n							</div>\n							<div class="m-0">\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="user6" class="check" value="First day of the new year" checked>\n									<label for="user6" class="checktoggle">	</label>\n								</div>								\n							</div>							\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Holiday -->\n\n		<!-- Delete Modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content p-5">\n					<div class="modal-body text-center p-0">\n						<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n						<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Holiday</h4>\n						<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete holiday?</p>	\n						<div class="d-flex justify-content-center mt-3">\n							<a class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</a>\n						</div>											\n					</div>					\n				</div>\n			</div>\n		</div>\n		<!-- /Delete Modal -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HolidaysComponent, { className: "HolidaysComponent", filePath: "src/app/features/pages/hrm/holidays/holidays.component.ts", lineNumber: 27 });
})();
export {
  HolidaysComponent
};
//# sourceMappingURL=chunk-I7PDKDPE.js.map
