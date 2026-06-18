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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/pages/promo/discount/discount.component.ts
var _c0 = () => ({ standalone: true });
function DiscountComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function DiscountComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function DiscountComponent_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 35);
    \u0275\u0275element(3, "input", 117)(4, "span", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 119);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(17, "td")(18, "span", 120);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 121)(21, "div", 122)(22, "a", 123);
    \u0275\u0275element(23, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 125);
    \u0275\u0275element(25, "i", 126);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.discountPlan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.validity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.days);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.products);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
function DiscountComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 127);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var DiscountComponent = class _DiscountComponent {
  data;
  pagination;
  router;
  sidebar;
  routes = routes;
  initChecked = false;
  // pagination variables
  tableData = [];
  tableData2 = [];
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
        if (this.router.url == this.routes.discount) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDiscount().subscribe((apiRes) => {
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
  static \u0275fac = function DiscountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DiscountComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiscountComponent, selectors: [["app-discount"]], decls: 382, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "click"], [1, "checkmarks", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "name"], ["mat-sort-header", "value"], ["mat-sort-header", "plan"], ["mat-sort-header", "valitidy"], ["mat-sort-header", "days"], ["mat-sort-header", "product"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-4"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "input-groupicon", "calender-input", "ngxdate1"], ["data-feather", "calendar", 1, "info-img"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyyy", 1, "datetimepicker", "form-control", "p-2"], [1, "input-groupicon", "calender-input", "ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "datetimepicker", "form-control", "p-2"], [1, "col-md-12"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], [1, "form-check", "form-check-md", "d-flex", "align-items-center", "me-3"], ["type", "checkbox", "value", "", "id", "checkebox-md", "checked", "", 1, "form-check-input"], ["for", "checkebox-md", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md1", 1, "form-check-input"], ["for", "checkebox-md1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md2", 1, "form-check-input"], ["for", "checkebox-md2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md3", 1, "form-check-input"], ["for", "checkebox-md3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md4", 1, "form-check-input"], ["for", "checkebox-md4", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md5", 1, "form-check-input"], ["for", "checkebox-md5", 1, "form-check-label"], [1, "form-check", "form-check-md", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-md6", 1, "form-check-input"], ["for", "checkebox-md6", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], [1, "input-groupicon", "calender-input", "ngxdate2"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate2", "placeholder", "dd/mm/yyyy", 1, "datetimepicker", "form-control", "p-2"], [1, "input-groupicon", "calender-input", "ngxdate3"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate3", "placeholder", "dd/mm/yyyy", 1, "datetimepicker", "form-control", "p-2"], ["type", "checkbox", "value", "", "id", "checkebox-md7", "checked", "", 1, "form-check-input"], ["for", "checkebox-md7", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md8", 1, "form-check-input"], ["for", "checkebox-md8", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md9", 1, "form-check-input"], ["for", "checkebox-md9", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md10", 1, "form-check-input"], ["for", "checkebox-md10", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md11", 1, "form-check-input"], ["for", "checkebox-md11", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md12", 1, "form-check-input"], ["for", "checkebox-md12", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "checkebox-md13", 1, "form-check-input"], ["for", "checkebox-md13", 1, "form-check-label"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["id", "add_customer", 1, "modal", "fade"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox"], [1, "checkmarks"], [1, "text-gray-9"], [1, "badge", "table-badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["colspan", "10", 1, "text-center"]], template: function DiscountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your discount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275listener("click", function DiscountComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, DiscountComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, DiscountComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Discount Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function DiscountComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DiscountComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "a", 26);
      \u0275\u0275text(37, " Customer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 27)(39, "li")(40, "a", 28);
      \u0275\u0275text(41, "All Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 28);
      \u0275\u0275text(44, "Members Only");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 28);
      \u0275\u0275text(47, "High-Spending Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 28);
      \u0275\u0275text(50, "Online Customers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 25)(52, "a", 26);
      \u0275\u0275text(53, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 27)(55, "li")(56, "a", 28);
      \u0275\u0275text(57, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 28);
      \u0275\u0275text(60, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 29)(62, "a", 26);
      \u0275\u0275text(63, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "ul", 27)(65, "li")(66, "a", 28);
      \u0275\u0275text(67, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 28);
      \u0275\u0275text(70, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 28);
      \u0275\u0275text(73, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 28);
      \u0275\u0275text(76, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 28);
      \u0275\u0275text(79, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(80, "div", 30)(81, "div", 31)(82, "table", 32);
      \u0275\u0275listener("matSortChange", function DiscountComponent_Template_table_matSortChange_82_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(83, "thead", 33)(84, "tr")(85, "th", 34)(86, "label", 35)(87, "input", 36);
      \u0275\u0275listener("click", function DiscountComponent_Template_input_click_87_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 37);
      \u0275\u0275twoWayListener("ngModelChange", function DiscountComponent_Template_span_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "th", 38);
      \u0275\u0275text(90, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 39);
      \u0275\u0275text(92, "Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 40);
      \u0275\u0275text(94, "Discount Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 41);
      \u0275\u0275text(96, "Valitidy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 42);
      \u0275\u0275text(98, "Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 43);
      \u0275\u0275text(100, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 44);
      \u0275\u0275text(102, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(103, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "tbody");
      \u0275\u0275repeaterCreate(105, DiscountComponent_For_106_Template, 26, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(107, DiscountComponent_Conditional_107_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(108, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 45)(110, "div", 46)(111, "div", 47)(112, "div", 48)(113, "div", 2)(114, "h4");
      \u0275\u0275text(115, "Add Discount");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 49)(117, "span", 50);
      \u0275\u0275text(118, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "form")(120, "div", 51)(121, "div", 52)(122, "div", 53)(123, "div", 54)(124, "label", 55);
      \u0275\u0275text(125, "Discount Name ");
      \u0275\u0275elementStart(126, "span", 56);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 53)(130, "div", 54)(131, "label", 55);
      \u0275\u0275text(132, "Discount Plan ");
      \u0275\u0275elementStart(133, "span", 56);
      \u0275\u0275text(134, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "mat-select", 58)(136, "mat-option", 59);
      \u0275\u0275text(137, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "mat-option", 59);
      \u0275\u0275text(139, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 59);
      \u0275\u0275text(141, "Membership");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "div", 53)(143, "div", 54)(144, "label", 55);
      \u0275\u0275text(145, "Applicable For ");
      \u0275\u0275elementStart(146, "span", 56);
      \u0275\u0275text(147, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "mat-select", 58)(149, "mat-option", 59);
      \u0275\u0275text(150, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "mat-option", 59);
      \u0275\u0275text(152, "All Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "mat-option", 59);
      \u0275\u0275text(154, "All Customers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(155, "div", 53)(156, "div", 54)(157, "label", 55);
      \u0275\u0275text(158, "Valid From ");
      \u0275\u0275elementStart(159, "span", 56);
      \u0275\u0275text(160, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 60);
      \u0275\u0275element(162, "i", 61)(163, "input", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(164, "div", 53)(165, "div", 54)(166, "label", 55);
      \u0275\u0275text(167, "Valid Till ");
      \u0275\u0275elementStart(168, "span", 56);
      \u0275\u0275text(169, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 63);
      \u0275\u0275element(171, "i", 61)(172, "input", 64);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 53)(174, "div", 54)(175, "label", 55);
      \u0275\u0275text(176, "Discount Type ");
      \u0275\u0275elementStart(177, "span", 56);
      \u0275\u0275text(178, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "mat-select", 58)(180, "mat-option", 59);
      \u0275\u0275text(181, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "mat-option", 59);
      \u0275\u0275text(183, "Rupess");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "mat-option", 59);
      \u0275\u0275text(185, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(186, "div", 65)(187, "div")(188, "label", 55);
      \u0275\u0275text(189, "Valid on Following Days ");
      \u0275\u0275elementStart(190, "span", 56);
      \u0275\u0275text(191, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "div", 66)(193, "div", 67);
      \u0275\u0275element(194, "input", 68);
      \u0275\u0275elementStart(195, "label", 69);
      \u0275\u0275text(196, " Monday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 67);
      \u0275\u0275element(198, "input", 70);
      \u0275\u0275elementStart(199, "label", 71);
      \u0275\u0275text(200, " Tuesday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 67);
      \u0275\u0275element(202, "input", 72);
      \u0275\u0275elementStart(203, "label", 73);
      \u0275\u0275text(204, " Wednesday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div", 67);
      \u0275\u0275element(206, "input", 74);
      \u0275\u0275elementStart(207, "label", 75);
      \u0275\u0275text(208, " Thursday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "div", 67);
      \u0275\u0275element(210, "input", 76);
      \u0275\u0275elementStart(211, "label", 77);
      \u0275\u0275text(212, " Friday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 67);
      \u0275\u0275element(214, "input", 78);
      \u0275\u0275elementStart(215, "label", 79);
      \u0275\u0275text(216, " Saturday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 80);
      \u0275\u0275element(218, "input", 81);
      \u0275\u0275elementStart(219, "label", 82);
      \u0275\u0275text(220, " Sunday ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(221, "div", 83)(222, "button", 84);
      \u0275\u0275text(223, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "button", 85);
      \u0275\u0275text(225, "Add Discount Plan");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(226, "div", 86)(227, "div", 46)(228, "div", 47)(229, "div", 48)(230, "div", 2)(231, "h4");
      \u0275\u0275text(232, "Edit Discount");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "button", 49)(234, "span", 50);
      \u0275\u0275text(235, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(236, "form")(237, "div", 51)(238, "div", 52)(239, "div", 53)(240, "div", 54)(241, "label", 55);
      \u0275\u0275text(242, "Discount Name ");
      \u0275\u0275elementStart(243, "span", 56);
      \u0275\u0275text(244, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(245, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 53)(247, "div", 54)(248, "label", 55);
      \u0275\u0275text(249, "Discount Plan ");
      \u0275\u0275elementStart(250, "span", 56);
      \u0275\u0275text(251, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "mat-select", 58)(253, "mat-option", 59);
      \u0275\u0275text(254, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "mat-option", 59);
      \u0275\u0275text(256, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "mat-option", 59);
      \u0275\u0275text(258, "Membership");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(259, "div", 53)(260, "div", 54)(261, "label", 55);
      \u0275\u0275text(262, "Applicable For ");
      \u0275\u0275elementStart(263, "span", 56);
      \u0275\u0275text(264, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "mat-select", 58)(266, "mat-option", 59);
      \u0275\u0275text(267, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "mat-option", 59);
      \u0275\u0275text(269, "All Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "mat-option", 59);
      \u0275\u0275text(271, "All Customers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(272, "div", 53)(273, "div", 54)(274, "label", 55);
      \u0275\u0275text(275, "Valid From ");
      \u0275\u0275elementStart(276, "span", 56);
      \u0275\u0275text(277, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 87);
      \u0275\u0275element(279, "i", 61)(280, "input", 88);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "div", 53)(282, "div", 54)(283, "label", 55);
      \u0275\u0275text(284, "Valid Till ");
      \u0275\u0275elementStart(285, "span", 56);
      \u0275\u0275text(286, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 89);
      \u0275\u0275element(288, "i", 61)(289, "input", 90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(290, "div", 53)(291, "div", 54)(292, "label", 55);
      \u0275\u0275text(293, "Discount Type ");
      \u0275\u0275elementStart(294, "span", 56);
      \u0275\u0275text(295, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "mat-select", 58)(297, "mat-option", 59);
      \u0275\u0275text(298, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "mat-option", 59);
      \u0275\u0275text(300, "Rupess");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "mat-option", 59);
      \u0275\u0275text(302, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(303, "div", 65)(304, "div")(305, "label", 55);
      \u0275\u0275text(306, "Valid on Following Days ");
      \u0275\u0275elementStart(307, "span", 56);
      \u0275\u0275text(308, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "div", 66)(310, "div", 67);
      \u0275\u0275element(311, "input", 91);
      \u0275\u0275elementStart(312, "label", 92);
      \u0275\u0275text(313, " Monday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 67);
      \u0275\u0275element(315, "input", 93);
      \u0275\u0275elementStart(316, "label", 94);
      \u0275\u0275text(317, " Tuesday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "div", 67);
      \u0275\u0275element(319, "input", 95);
      \u0275\u0275elementStart(320, "label", 96);
      \u0275\u0275text(321, " Wednesday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 67);
      \u0275\u0275element(323, "input", 97);
      \u0275\u0275elementStart(324, "label", 98);
      \u0275\u0275text(325, " Thursday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "div", 67);
      \u0275\u0275element(327, "input", 99);
      \u0275\u0275elementStart(328, "label", 100);
      \u0275\u0275text(329, " Friday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "div", 67);
      \u0275\u0275element(331, "input", 101);
      \u0275\u0275elementStart(332, "label", 102);
      \u0275\u0275text(333, " Saturday ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "div", 80);
      \u0275\u0275element(335, "input", 103);
      \u0275\u0275elementStart(336, "label", 104);
      \u0275\u0275text(337, " Sunday ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(338, "div", 83)(339, "button", 84);
      \u0275\u0275text(340, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "button", 85);
      \u0275\u0275text(342, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(343, "div", 105)(344, "div", 106)(345, "div", 47)(346, "div", 107)(347, "div", 108)(348, "span", 109);
      \u0275\u0275element(349, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "h4", 111);
      \u0275\u0275text(351, "Delete Discount Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "p", 112);
      \u0275\u0275text(353, "Are you sure you want to delete discount?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "div", 113)(355, "button", 84);
      \u0275\u0275text(356, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "button", 85);
      \u0275\u0275text(358, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(359, "div", 114)(360, "div", 106)(361, "div", 47)(362, "div", 48)(363, "div", 2)(364, "h4");
      \u0275\u0275text(365, "Add Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "button", 115)(367, "span", 50);
      \u0275\u0275text(368, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(369, "form")(370, "div", 51)(371, "div")(372, "label", 55);
      \u0275\u0275text(373, "Customer ");
      \u0275\u0275elementStart(374, "span", 56);
      \u0275\u0275text(375, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(376, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(377, "div", 83)(378, "button", 84);
      \u0275\u0275text(379, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "button", 116);
      \u0275\u0275text(381, "Add Customer");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(55);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 107 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiscountComponent, [{
    type: Component,
    args: [{ selector: "app-discount", imports: [MatSelectModule, FormsModule, CustomPaginationComponent, BsDatepickerModule, MatSortModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Discount</h4>\n            <h6>Manage your discount</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i data-feather="plus-circle" class="feather icon-plus-circle me-2"></i>Add Discount Plan</a>\n    </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n				<a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n				<div class="dataTables_filter">\n				  <label>\n					<input\n					  [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n					  (ngModelChange)="searchData(searchDataValue)"\n					  type="search"\n					  class="form-control"\n					  placeholder="Search"\n					  />\n					</label>\n				  </div>\n				</div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Customer\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">All Customers</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Members Only</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">High-Spending Customers</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Online Customers</a>\n                    </li>\n                </ul>\n            </div>	\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                    </li>\n                </ul>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">												\n        <div class="table-responsive">\n            <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n                <thead class="thead-light">\n                  <tr>\n                    <th class="no-sort">\n                      <label class="checkboxs">\n                        <input type="checkbox" id="select-all" (click)="selectAll(initChecked)">\n                        <span class="checkmarks" [(ngModel)]="initChecked" ></span>\n                      </label>\n                    </th>\n                    <th mat-sort-header="name">Name</th>\n                    <th mat-sort-header="value">Value</th>\n                    <th mat-sort-header="plan">Discount Plan</th>\n                    <th mat-sort-header="valitidy">Valitidy</th>\n                    <th mat-sort-header="days">Days</th>\n                    <th mat-sort-header="product">Products</th>\n                    <th mat-sort-header="status">Status</th>\n                    <th class="no-sort"></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (data of tableData; track data) {\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td class="text-gray-9">{{data.name}}</td>											\n                        <td>{{data.value}}</td>								\n                        <td>{{data.discountPlan}}</td>								\n                        <td>{{data.validity}}</td>								\n                        <td>{{data.days}}</td>								\n                        <td>{{data.products}}</td>								\n                        <td><span class="badge table-badge bg-success fw-medium fs-10">{{data.status}}</span></td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">										\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                                    <i class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                  } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n        </div>\n		<app-custom-pagination></app-custom-pagination>\n    </div>\n</div>\n<!-- /product list -->\n\n\n		<!-- Add discount plan-->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog modal-dialog-centered modal-lg">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Discount</h4>\n						</div>\n						<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Discount Name <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Discount Plan <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Standard</mat-option>\n											<mat-option value="1">Membership</mat-option>									\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Applicable For <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">All Customers</mat-option>\n											<mat-option value="1">All Customers</mat-option>									\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Valid From  <span class="text-danger">*</span></label>\n\n										<div class="input-groupicon calender-input ngxdate1">\n											<i data-feather="calendar" class="info-img"></i>\n											<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate1" placeholder="dd/mm/yyyy">\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Valid Till  <span class="text-danger">*</span></label>\n\n										<div class="input-groupicon calender-input ngxdate">\n											<i data-feather="calendar" class="info-img"></i>\n											<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Discount Type <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Rupess</mat-option>\n											<mat-option value="1">Percentage</mat-option>									\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-md-12">\n									<div>\n										<label class="form-label">Valid on Following Days <span class="text-danger">*</span></label>\n										<div class="d-flex align-items-center flex-wrap row-gap-3">\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked="">\n												<label class="form-check-label" for="checkebox-md">\n													Monday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md1">\n												<label class="form-check-label" for="checkebox-md1">\n													Tuesday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md2">\n												<label class="form-check-label" for="checkebox-md2">\n													Wednesday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md3">\n												<label class="form-check-label" for="checkebox-md3">\n													Thursday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md4">\n												<label class="form-check-label" for="checkebox-md4">\n													Friday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md5">\n												<label class="form-check-label" for="checkebox-md5">\n													Saturday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md6">\n												<label class="form-check-label" for="checkebox-md6">\n													Sunday\n												</label>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Discount Plan</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add discount plan -->\n\n		<!-- Edit discount plan -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered modal-lg">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Discount</h4>\n						</div>\n						<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Discount Name <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Discount Plan <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Standard</mat-option>\n											<mat-option value="1">Membership</mat-option>									\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Applicable For <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">All Customers</mat-option>\n											<mat-option value="1">All Customers</mat-option>									\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Valid From  <span class="text-danger">*</span></label>\n\n										<div class="input-groupicon calender-input ngxdate2">\n											<i data-feather="calendar" class="info-img"></i>\n											<input type="text" class="datetimepicker form-control p-2"  bsDatepicker container=".ngxdate2" placeholder="dd/mm/yyyy">\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Valid Till  <span class="text-danger">*</span></label>\n\n										<div class="input-groupicon calender-input ngxdate3">\n											<i data-feather="calendar" class="info-img"></i>\n											<input type="text" class="datetimepicker form-control p-2"  bsDatepicker container=".ngxdate3" placeholder="dd/mm/yyyy">\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-4">\n									<div class="mb-3">\n										<label class="form-label">Discount Type <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Rupess</mat-option>\n											<mat-option value="1">Percentage</mat-option>									\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-md-12">\n									<div>\n										<label class="form-label">Valid on Following Days <span class="text-danger">*</span></label>\n										<div class="d-flex align-items-center flex-wrap row-gap-3">\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md7" checked="">\n												<label class="form-check-label" for="checkebox-md7">\n													Monday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md8">\n												<label class="form-check-label" for="checkebox-md8">\n													Tuesday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md9">\n												<label class="form-check-label" for="checkebox-md9">\n													Wednesday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md10">\n												<label class="form-check-label" for="checkebox-md10">\n													Thursday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md11">\n												<label class="form-check-label" for="checkebox-md11">\n													Friday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center me-3">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md12">\n												<label class="form-check-label" for="checkebox-md12">\n													Saturday\n												</label>\n											</div>\n											<div class="form-check form-check-md d-flex align-items-center">\n												<input class="form-check-input" type="checkbox" value="" id="checkebox-md13">\n												<label class="form-check-label" for="checkebox-md13">\n													Sunday\n												</label>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit discount plan -->\n\n		<!-- delete modal -->\n			<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Discount Plan</h4>\n								<p class="mb-0 fs-16">Are you sure you want to delete discount?</p>\n								<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n								</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n\n				<!-- Add Customer -->\n				<div class="modal fade" id="add_customer">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Customer</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<form>\n								<div class="modal-body">\n									<div>\n										<label class="form-label">Customer <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>												\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Customer</button>\n								</div>						\n							</form>\n						</div>\n					</div>\n				</div>\n				<!-- /Add Customer -->\n		' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiscountComponent, { className: "DiscountComponent", filePath: "src/app/features/pages/promo/discount/discount.component.ts", lineNumber: 20 });
})();
export {
  DiscountComponent
};
//# sourceMappingURL=chunk-U6RUGCNG.js.map
