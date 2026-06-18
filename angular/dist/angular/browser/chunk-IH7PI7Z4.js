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
  ɵɵlistener,
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

// src/app/features/pages/promo/coupons/coupons.component.ts
var _c0 = () => ({ standalone: true });
function CouponsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CouponsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CouponsComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 109)(3, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function CouponsComponent_For_102_Template_input_ngModelChange_3_listener($event) {
      const coupons_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(coupons_r2.isSelected, $event) || (coupons_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 112);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 113);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 114)(24, "div", 115)(25, "a", 116);
    \u0275\u0275element(26, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 118);
    \u0275\u0275element(28, "i", 119);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupons_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", coupons_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupons_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupons_r2.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", coupons_r2.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coupons_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", coupons_r2.discount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coupons_r2.limit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coupons_r2.valid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", coupons_r2.status === "Active" ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(coupons_r2.status);
  }
}
function CouponsComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 120);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var CouponsComponent = class _CouponsComponent {
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
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
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
        if (this.router.url == this.routes.coupons) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCoupons().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Choose Type" },
    { value: "Fixed" },
    { value: "Percentage" }
  ];
  selectedList2 = [
    { value: "Choose" },
    { value: "Nike Jordan" },
    { value: "Amazon Echo Dot" }
  ];
  selectedList3 = [
    { value: "Sort by Datee" },
    { value: "25 9 23" },
    { value: "12 9 23" }
  ];
  selectedList4 = [
    { value: "Choose Name" },
    { value: "Coupons 21" },
    { value: "First Offer" },
    { value: "Offer 40" },
    { value: "Subscription" }
  ];
  selectedList5 = [
    { value: "Choose Type" },
    { value: "Fixed" },
    { value: "Percentage" }
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
  static \u0275fac = function CouponsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CouponsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CouponsComponent, selectors: [["app-coupons"]], decls: 343, vars: 15, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "code"], ["mat-sort-header", "description"], ["mat-sort-header", "type"], ["mat-sort-header", "discount"], ["mat-sort-header", "limit"], ["mat-sort-header", "valid"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-12"], [1, "unlimited-text", "fs-12"], [1, "input-groupicon", "calender-input", "ngxdate"], ["data-feather", "calendar", 1, "info-img"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyy", 1, "datetimepicker", "form-control", "p-2"], [1, "input-groupicon", "calender-input", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyy", 1, "datetimepicker", "form-control", "p-2"], [1, "mt-3", "mb-3"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "status-label"], [1, "d-flex", "align-items-center"], ["type", "checkbox", "id", "user4", 1, "check"], ["for", "user4", 1, "checktoggle", "mb-0", "me-1"], [1, "customer-toggle"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], [1, "mb-3", "summer-description-box"], [3, "editor"], [3, "editor", "toolbar"], [1, "m-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "value", "New Year Blast", 1, "form-control"], ["type", "text", "value", "NEWYEAR30", 1, "form-control"], ["placeholder", "Percentage", 1, "custom-mat-select", "select"], ["type", "text", "value", "30", 1, "form-control"], ["type", "text", "value", "01", 1, "form-control"], [1, "input-groupicon", "calender-input", "ngxdate3"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate3", "placeholder", "31 Dec 2024", 1, "datetimepicker", "form-control", "p-2"], [1, "input-groupicon", "calender-input", "ngxdate4"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate4", "placeholder", "04 Jan 2025", 1, "datetimepicker", "form-control", "p-2"], ["type", "checkbox", "id", "user5", 1, "check"], ["for", "user5", 1, "checktoggle", "mb-0", "me-1"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "text-gray-9"], [1, "badge", "purple-badge"], [1, "badge", "table-badge", "fw-medium", "fs-10", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["colspan", "10", 1, "text-center"]], template: function CouponsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Coupons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Coupons");
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
      \u0275\u0275listener("click", function CouponsComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, CouponsComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, CouponsComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Coupons");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function CouponsComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CouponsComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Fixed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 24)(46, "a", 25);
      \u0275\u0275text(47, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 26)(49, "li")(50, "a", 27);
      \u0275\u0275text(51, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 27);
      \u0275\u0275text(54, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 28)(56, "a", 25);
      \u0275\u0275text(57, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul", 26)(59, "li")(60, "a", 27);
      \u0275\u0275text(61, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 27);
      \u0275\u0275text(64, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 27);
      \u0275\u0275text(67, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 27);
      \u0275\u0275text(70, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 27);
      \u0275\u0275text(73, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(74, "div", 29)(75, "div", 30)(76, "table", 31);
      \u0275\u0275listener("matSortChange", function CouponsComponent_Template_table_matSortChange_76_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(77, "thead", 32)(78, "tr")(79, "th", 33)(80, "label", 34);
      \u0275\u0275listener("click", function CouponsComponent_Template_label_click_80_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(81, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function CouponsComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "th", 37);
      \u0275\u0275text(84, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 38);
      \u0275\u0275text(86, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 39);
      \u0275\u0275text(88, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 40);
      \u0275\u0275text(90, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 41);
      \u0275\u0275text(92, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 42);
      \u0275\u0275text(94, "Limit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 43);
      \u0275\u0275text(96, "Valid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 44);
      \u0275\u0275text(98, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "tbody");
      \u0275\u0275repeaterCreate(101, CouponsComponent_For_102_Template, 29, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(103, CouponsComponent_Conditional_103_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(104, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 45)(106, "div", 46)(107, "div", 47)(108, "div", 48)(109, "div", 49)(110, "div", 50)(111, "div", 2)(112, "h4");
      \u0275\u0275text(113, "Add Coupon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "button", 51)(115, "span", 52);
      \u0275\u0275text(116, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 53)(118, "form")(119, "div", 54)(120, "div", 55)(121, "div", 56)(122, "label", 57);
      \u0275\u0275text(123, "Coupon Name");
      \u0275\u0275elementStart(124, "span", 58);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 55)(128, "div", 56)(129, "label", 57);
      \u0275\u0275text(130, "Coupon Code");
      \u0275\u0275elementStart(131, "span", 58);
      \u0275\u0275text(132, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(133, "input", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 55)(135, "div", 56)(136, "label", 57);
      \u0275\u0275text(137, "Type");
      \u0275\u0275elementStart(138, "span", 58);
      \u0275\u0275text(139, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "mat-select", 60)(141, "mat-option", 61);
      \u0275\u0275text(142, "Choose Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "mat-option", 61);
      \u0275\u0275text(144, "Fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "mat-option", 61);
      \u0275\u0275text(146, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 55)(148, "div", 56)(149, "label", 57);
      \u0275\u0275text(150, "Discount");
      \u0275\u0275elementStart(151, "span", 58);
      \u0275\u0275text(152, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(153, "input", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 62)(155, "div", 56)(156, "label", 57);
      \u0275\u0275text(157, " Limit");
      \u0275\u0275elementStart(158, "span", 58);
      \u0275\u0275text(159, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(160, "input", 59);
      \u0275\u0275elementStart(161, "span", 63);
      \u0275\u0275text(162, "Enter 0 for Unlimited");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 55)(164, "div", 56)(165, "label", 57);
      \u0275\u0275text(166, "Start Date");
      \u0275\u0275elementStart(167, "span", 58);
      \u0275\u0275text(168, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 64);
      \u0275\u0275element(170, "i", 65)(171, "input", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "div", 55)(173, "div", 56)(174, "label", 57);
      \u0275\u0275text(175, "End Date");
      \u0275\u0275elementStart(176, "span", 58);
      \u0275\u0275text(177, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 67);
      \u0275\u0275element(179, "i", 65)(180, "input", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "div", 69)(182, "div", 70)(183, "span", 71);
      \u0275\u0275text(184, "Product");
      \u0275\u0275elementStart(185, "span", 58);
      \u0275\u0275text(186, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "div", 72);
      \u0275\u0275element(188, "input", 73)(189, "label", 74);
      \u0275\u0275elementStart(190, "span", 75);
      \u0275\u0275text(191, "Once Per Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(192, "mat-select", 76)(193, "mat-option", 61);
      \u0275\u0275text(194, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "mat-option", 61);
      \u0275\u0275text(196, "Nike Jordan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "mat-option", 61);
      \u0275\u0275text(198, "Amazon Echo Dot");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(199, "div", 77)(200, "label", 57);
      \u0275\u0275text(201, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "ngx-editor", 78);
      \u0275\u0275element(203, "ngx-editor-menu", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p");
      \u0275\u0275text(205, "Maximum 60 Words");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 80)(207, "div", 81)(208, "span", 71);
      \u0275\u0275text(209, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(210, "input", 82)(211, "label", 83);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(212, "div", 84)(213, "button", 85);
      \u0275\u0275text(214, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "button", 86);
      \u0275\u0275text(216, "Add Coupon");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(217, "div", 87)(218, "div", 46)(219, "div", 47)(220, "div", 48)(221, "div", 49)(222, "div", 50)(223, "div", 2)(224, "h4");
      \u0275\u0275text(225, "Edit Coupon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "button", 51)(227, "span", 52);
      \u0275\u0275text(228, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "div", 53)(230, "form")(231, "div", 54)(232, "div", 55)(233, "div", 56)(234, "label", 57);
      \u0275\u0275text(235, "Coupon Name");
      \u0275\u0275elementStart(236, "span", 58);
      \u0275\u0275text(237, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(238, "input", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "div", 55)(240, "div", 56)(241, "label", 57);
      \u0275\u0275text(242, "Coupon Code");
      \u0275\u0275elementStart(243, "span", 58);
      \u0275\u0275text(244, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(245, "input", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 55)(247, "div", 56)(248, "label", 57);
      \u0275\u0275text(249, "Type");
      \u0275\u0275elementStart(250, "span", 58);
      \u0275\u0275text(251, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "mat-select", 90)(253, "mat-option", 61);
      \u0275\u0275text(254, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "mat-option", 61);
      \u0275\u0275text(256, "Fixed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(257, "div", 55)(258, "div", 56)(259, "label", 57);
      \u0275\u0275text(260, "Discount");
      \u0275\u0275elementStart(261, "span", 58);
      \u0275\u0275text(262, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(263, "input", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "div", 62)(265, "div", 56)(266, "label", 57);
      \u0275\u0275text(267, " Limit");
      \u0275\u0275elementStart(268, "span", 58);
      \u0275\u0275text(269, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(270, "input", 92);
      \u0275\u0275elementStart(271, "span", 63);
      \u0275\u0275text(272, "Enter 0 for Unlimited");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(273, "div", 55)(274, "div", 56)(275, "label", 57);
      \u0275\u0275text(276, "Start Date");
      \u0275\u0275elementStart(277, "span", 58);
      \u0275\u0275text(278, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 93);
      \u0275\u0275element(280, "i", 65)(281, "input", 94);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(282, "div", 55)(283, "div", 56)(284, "label", 57);
      \u0275\u0275text(285, "End Date");
      \u0275\u0275elementStart(286, "span", 58);
      \u0275\u0275text(287, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 95);
      \u0275\u0275element(289, "i", 65)(290, "input", 96);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(291, "div", 69)(292, "div", 70)(293, "span", 71);
      \u0275\u0275text(294, "Product");
      \u0275\u0275elementStart(295, "span", 58);
      \u0275\u0275text(296, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div", 72);
      \u0275\u0275element(298, "input", 97)(299, "label", 98);
      \u0275\u0275elementStart(300, "span", 75);
      \u0275\u0275text(301, "Once Per Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(302, "mat-select", 99)(303, "mat-option", 61);
      \u0275\u0275text(304, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "mat-option", 61);
      \u0275\u0275text(306, "Nike Jordan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "mat-option", 61);
      \u0275\u0275text(308, "Amazon Echo Dot");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "div", 77)(310, "label", 57);
      \u0275\u0275text(311, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "ngx-editor", 78);
      \u0275\u0275element(313, "ngx-editor-menu", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "p");
      \u0275\u0275text(315, "Maximum 60 Words");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "div", 80)(317, "div", 81)(318, "span", 71);
      \u0275\u0275text(319, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(320, "input", 100)(321, "label", 101);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(322, "div", 84)(323, "button", 85);
      \u0275\u0275text(324, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "button", 86);
      \u0275\u0275text(326, "Add Coupon");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(327, "div", 102)(328, "div", 46)(329, "div", 47)(330, "div", 48)(331, "div", 103)(332, "span", 104);
      \u0275\u0275element(333, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "h4", 106);
      \u0275\u0275text(335, "Delete Coupon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "p", 107);
      \u0275\u0275text(337, "Are you sure you want to delete coupon?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "div", 108)(339, "button", 85);
      \u0275\u0275text(340, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "button", 86);
      \u0275\u0275text(342, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(48);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 103 : -1);
      \u0275\u0275advance(99);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(109);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponsComponent, [{
    type: Component,
    args: [{ selector: "app-coupons", imports: [NgxEditorModule, MatSelectModule, CustomPaginationComponent, CommonModule, FormsModule, MatSelectModule, MatSortModule, BsDatepickerModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Coupons</h4>
      <h6>Manage Your Coupons</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>
    </li>
    <li>
      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i  class="ti ti-circle-plus me-2"></i>Add Coupons</a>
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
        Type
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Fixed</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Percentage</a>
          </li>
        </ul>
      </div>				
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          Status
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
        <table  (matSortChange)="sortData($event)"   matSort
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
              <th mat-sort-header="name">Name</th>
              <th mat-sort-header="code">Code</th>
              <th mat-sort-header="description">Description</th>
              <th mat-sort-header="type">Type</th>
              <th mat-sort-header="discount">Discount</th>
              <th mat-sort-header="limit">Limit</th>
              <th mat-sort-header="valid">Valid</th>
              <th mat-sort-header="status">Status</th>
              <th class="no-sort"></th>
            </tr>
          </thead>
          <tbody>
            @for (coupons of tableData; track coupons; let i = $index) {
              <tr>
                <td>
                  <label class="checkboxs">
                    <input type="checkbox" [(ngModel)]="coupons.isSelected">
                    <span class="checkmarks"></span>
                  </label>
                </td>
                <td class="text-gray-9">{{coupons.name}}</td>
                <td><span class="badge purple-badge">{{coupons.code}}</span></td>
                <td>
                  {{coupons.description}} 									
                </td>
                <td>{{coupons.type}}</td>
                <td>
                  {{coupons.discount}}
                </td>
                <td>{{coupons.limit}}</td>
                <td>{{coupons.valid}}</td>
                <td><span class="badge table-badge fw-medium fs-10" [ngClass]="coupons.status==='Active'?'bg-success':'bg-danger'">{{coupons.status}}</span></td>
                <td class="action-table-data">
                  <div class="edit-delete-action">
                    <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">
                      <i class="feather icon-edit"></i>
                    </a>
                    <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
                      <i class="feather icon-trash-2"></i>
                    </a>
                  </div>
                  
                </td>
              </tr>	
            } @if (tableData.length === 0) {
                    <tr>
						<td colspan="10" class="text-center"> No matching records found </td>
                    </tr>
                }
          </tbody>
        </table>
        
      </div>
      <app-custom-pagination></app-custom-pagination>
    </div>
  </div>
		<!-- Add coupons -->
		<div class="modal fade" id="add-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Add Coupon</h4>
								</div>
								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form >
									<div class="row">
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Coupon Name<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Coupon Code<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Type<span class="text-danger ms-1">*</span></label>
												<mat-select class="custom-mat-select select" placeholder="Select">
													<mat-option value="1">Choose Type</mat-option>
													<mat-option value="1">Fixed</mat-option>
													<mat-option value="1">Percentage</mat-option>
												</mat-select>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Discount<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label"> Limit<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">
												<span class="unlimited-text fs-12">Enter 0 for Unlimited</span>
											</div>
											
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Start Date<span class="text-danger ms-1">*</span></label>
												
												<div class="input-groupicon calender-input ngxdate">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyy" >
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">End Date<span class="text-danger ms-1">*</span></label>
												
												<div class="input-groupicon calender-input ngxdate1">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate1" placeholder="dd/mm/yyy" >
												</div>
											</div>
										</div>
										<div class="mt-3 mb-3">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center mb-2">
												<span class="status-label">Product<span class="text-danger ms-1">*</span></span>
												<div class="d-flex align-items-center">
													<input type="checkbox" id="user4" class="check">
													<label for="user4" class="checktoggle mb-0 me-1"></label>
													<span class="customer-toggle">Once Per Customer</span>	
												</div>
											</div>
											<mat-select class="custom-mat-select select" placeholder="Choose">
												<mat-option value="1">Choose</mat-option>
												<mat-option value="1">Nike Jordan</mat-option>
												<mat-option value="1">Amazon Echo Dot</mat-option>
											</mat-select>
										</div>
									
										<div class="mb-3 summer-description-box">
											<label class="form-label">Description</label>
											<ngx-editor [editor]="editor">
                        <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                        </ngx-editor-menu>
                        
                      </ngx-editor>
											<p>Maximum 60 Words</p>
										</div>
                                        
									
										<div class="m-0">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
												<span class="status-label">Status</span>
												<input type="checkbox" id="user2" class="check" checked>
												<label for="user2" class="checktoggle">	</label>
											</div>
										</div>
									</div>								
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Coupon</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Coupons -->

		<!-- Edit coupons -->
		<div class="modal fade" id="edit-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Edit Coupon</h4>
								</div>
								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form >
									<div class="row">
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Coupon Name<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control" value="New Year Blast">
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Coupon Code<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control" value="NEWYEAR30">
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Type<span class="text-danger ms-1">*</span></label>
												<mat-select class="custom-mat-select select" placeholder="Percentage">
													<mat-option value="1">Percentage</mat-option>
													<mat-option value="1">Fixed</mat-option>
										
												</mat-select>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Discount<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control" value="30">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label"> Limit<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control" value="01">
												<span class="unlimited-text fs-12">Enter 0 for Unlimited</span>
											</div>
											
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Start Date<span class="text-danger ms-1">*</span></label>
												
												<div class="input-groupicon calender-input ngxdate3">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate3" placeholder="31 Dec 2024" >
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">End Date<span class="text-danger ms-1">*</span></label>
												
												<div class="input-groupicon calender-input ngxdate4">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate4" placeholder="04 Jan 2025" >
												</div>
											</div>
										</div>
										<div class="mt-3 mb-3">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center mb-2">
												<span class="status-label">Product<span class="text-danger ms-1">*</span></span>
												<div class="d-flex align-items-center">
													<input type="checkbox" id="user5" class="check">
													<label for="user5" class="checktoggle mb-0 me-1"></label>
													<span class="customer-toggle">Once Per Customer</span>	
												</div>
											</div>
											<mat-select class="custom-mat-select select" placeholder="All">
												<mat-option value="1">All</mat-option>
												<mat-option value="1">Nike Jordan</mat-option>
												<mat-option value="1">Amazon Echo Dot</mat-option>
											</mat-select>
										</div>
									
										<div class="mb-3 summer-description-box">
											<label class="form-label">Description</label>
											<ngx-editor [editor]="editor1">
                        <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >
                        </ngx-editor-menu>
                        
                      </ngx-editor>
											<p>Maximum 60 Words</p>
										</div>
										
                                        
									
										<div class="m-0">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
												<span class="status-label">Status</span>
												<input type="checkbox" id="user3" class="check" checked>
												<label for="user3" class="checktoggle">	</label>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Coupon</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Coupons -->

			 		<!-- delete modal -->
					 <div class="modal fade" id="delete-modal">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content">
								<div class="page-wrapper-new p-0">
									<div class="content p-5 px-3 text-center">
											<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
											<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Coupon</h4>
											<p class="mb-0 fs-16">Are you sure you want to delete coupon?</p>
											<div class="modal-footer-btn mt-3 d-flex justify-content-center">
												<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
												<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
											</div>						
									</div>
								</div>
							</div>
						</div>
					</div>
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CouponsComponent, { className: "CouponsComponent", filePath: "src/app/features/pages/promo/coupons/coupons.component.ts", lineNumber: 26 });
})();
export {
  CouponsComponent
};
//# sourceMappingURL=chunk-IH7PI7Z4.js.map
