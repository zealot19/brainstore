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

// src/app/features/pages/promo/discount-plan/discount-plan.component.ts
var _c0 = () => ({ standalone: true });
function DiscountPlanComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function DiscountPlanComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function DiscountPlanComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 35);
    \u0275\u0275element(3, "input", 85)(4, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 89)(13, "div", 90)(14, "a", 91);
    \u0275\u0275element(15, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 93);
    \u0275\u0275element(17, "i", 94);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r1.planName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.customers);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
function DiscountPlanComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 95);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var DiscountPlanComponent = class _DiscountPlanComponent {
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
        if (this.router.url == this.routes.discountPlan) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDiscountPlan().subscribe((apiRes) => {
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
  static \u0275fac = function DiscountPlanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DiscountPlanComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiscountPlanComponent, selectors: [["app-discount-plan"]], decls: 240, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "click"], [1, "checkmarks", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "warehouse"], ["mat-sort-header", "store"], ["mat-sort-header", "product"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "mb-3", "add-product"], [1, "add-newplus"], ["href", "javascript:void(0);", 1, "d-flex", "justify-content-center", "align-items-center"], ["data-feather", "plus-circle", 1, "feather", "icon-plus-circle", "plus-down-add"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "value", "Standard Plan", 1, "form-control"], ["placeholder", "All Customer", 1, "custom-mat-select", "select"], ["type", "checkbox", "id", "user3", 1, "check"], ["for", "user3", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-1", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["id", "add_customer", 1, "modal", "fade"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "text-danger"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox"], [1, "checkmarks"], [1, "text-gray-9"], [1, "badge", "table-badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["colspan", "10", 1, "text-center"]], template: function DiscountPlanComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Discount Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your discount plans");
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
      \u0275\u0275listener("click", function DiscountPlanComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, DiscountPlanComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, DiscountPlanComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Discount Plan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function DiscountPlanComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DiscountPlanComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275text(60, "Redeemed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 28);
      \u0275\u0275text(63, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 28);
      \u0275\u0275text(66, "Expired");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 29)(68, "a", 26);
      \u0275\u0275text(69, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 27)(71, "li")(72, "a", 28);
      \u0275\u0275text(73, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 28);
      \u0275\u0275text(76, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 28);
      \u0275\u0275text(79, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 28);
      \u0275\u0275text(82, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 28);
      \u0275\u0275text(85, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(86, "div", 30)(87, "div", 31)(88, "table", 32);
      \u0275\u0275listener("matSortChange", function DiscountPlanComponent_Template_table_matSortChange_88_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(89, "thead", 33)(90, "tr")(91, "th", 34)(92, "label", 35)(93, "input", 36);
      \u0275\u0275listener("click", function DiscountPlanComponent_Template_input_click_93_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span", 37);
      \u0275\u0275twoWayListener("ngModelChange", function DiscountPlanComponent_Template_span_ngModelChange_94_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "th", 38);
      \u0275\u0275text(96, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 39);
      \u0275\u0275text(98, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 40);
      \u0275\u0275text(100, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(101, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "tbody");
      \u0275\u0275repeaterCreate(103, DiscountPlanComponent_For_104_Template, 18, 3, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(105, DiscountPlanComponent_Conditional_105_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(106, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 41)(108, "div", 42)(109, "div", 43)(110, "div", 44)(111, "div", 45)(112, "div", 46)(113, "div", 2)(114, "h4");
      \u0275\u0275text(115, "Add Discount Plan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 47)(117, "span", 48);
      \u0275\u0275text(118, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 49)(120, "form")(121, "div", 50)(122, "label", 51);
      \u0275\u0275text(123, "Plan Name");
      \u0275\u0275elementStart(124, "span", 52);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 54)(128, "div", 55)(129, "label", 51);
      \u0275\u0275text(130, "Customer");
      \u0275\u0275elementStart(131, "span", 52);
      \u0275\u0275text(132, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "a", 56);
      \u0275\u0275element(134, "i", 57);
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "mat-select", 58)(138, "mat-option", 59);
      \u0275\u0275text(139, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 59);
      \u0275\u0275text(141, "Lenovo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "mat-option", 59);
      \u0275\u0275text(143, "Electronics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 60)(145, "div", 61)(146, "span", 62);
      \u0275\u0275text(147, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(148, "input", 63)(149, "label", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(150, "div", 65)(151, "button", 66);
      \u0275\u0275text(152, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "button", 67);
      \u0275\u0275text(154, "Add Discount Plan");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(155, "div", 68)(156, "div", 42)(157, "div", 43)(158, "div", 44)(159, "div", 45)(160, "div", 46)(161, "div", 2)(162, "h4");
      \u0275\u0275text(163, "Edit Discount Plan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "button", 47)(165, "span", 48);
      \u0275\u0275text(166, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 49)(168, "form")(169, "div", 50)(170, "label", 51);
      \u0275\u0275text(171, "Plan Name");
      \u0275\u0275elementStart(172, "span", 52);
      \u0275\u0275text(173, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(174, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 54)(176, "div", 55)(177, "label", 51);
      \u0275\u0275text(178, "Customer");
      \u0275\u0275elementStart(179, "span", 52);
      \u0275\u0275text(180, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "a", 56);
      \u0275\u0275element(182, "i", 57);
      \u0275\u0275elementStart(183, "span");
      \u0275\u0275text(184, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "mat-select", 70)(186, "mat-option", 59);
      \u0275\u0275text(187, "All Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "mat-option", 59);
      \u0275\u0275text(189, "All Customers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "div", 60)(191, "div", 61)(192, "span", 62);
      \u0275\u0275text(193, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(194, "input", 71)(195, "label", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 65)(197, "button", 73);
      \u0275\u0275text(198, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 67);
      \u0275\u0275text(200, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(201, "div", 74)(202, "div", 42)(203, "div", 43)(204, "div", 44)(205, "div", 75)(206, "span", 76);
      \u0275\u0275element(207, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "h4", 78);
      \u0275\u0275text(209, "Delete Discount Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p", 79);
      \u0275\u0275text(211, "Are you sure you want to delete discount plan?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 80)(213, "button", 66);
      \u0275\u0275text(214, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "button", 67);
      \u0275\u0275text(216, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(217, "div", 81)(218, "div", 42)(219, "div", 43)(220, "div", 46)(221, "div", 2)(222, "h4");
      \u0275\u0275text(223, "Add Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "button", 82)(225, "span", 48);
      \u0275\u0275text(226, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(227, "form")(228, "div", 49)(229, "div")(230, "label", 51);
      \u0275\u0275text(231, "Customer ");
      \u0275\u0275elementStart(232, "span", 83);
      \u0275\u0275text(233, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(234, "input", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "div", 65)(236, "button", 66);
      \u0275\u0275text(237, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "button", 84);
      \u0275\u0275text(239, "Add Customer");
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
      \u0275\u0275advance(61);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 105 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiscountPlanComponent, [{
    type: Component,
    args: [{ selector: "app-discount-plan", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Discount Plan</h4>\n            <h6>Manage your discount plans</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i data-feather="plus-circle" class="feather icon-plus-circle me-2"></i>Add Discount Plan</a>\n    </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input\n                      [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                      (ngModelChange)="searchData(searchDataValue)"\n                      type="search"\n                      class="form-control"\n                      placeholder="Search"\n                      />\n                    </label>\n                  </div>\n                </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Customer\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">All Customers</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Members Only</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">High-Spending Customers</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Online Customers</a>\n                    </li>\n                </ul>\n            </div>	\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Redeemed</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Expired</a>\n                    </li>\n                </ul>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">												\n        <div class="table-responsive">\n            <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n                <thead class="thead-light">\n                  <tr>\n                    <th class="no-sort">\n                      <label class="checkboxs">\n                        <input type="checkbox" id="select-all" (click)="selectAll(initChecked)">\n                        <span class="checkmarks" [(ngModel)]="initChecked" ></span>\n                      </label>\n                    </th>\n                    <th mat-sort-header="warehouse">Plan Name</th>\n                    <th mat-sort-header="store">Customers</th>\n                    <th mat-sort-header="product">Status</th>\n                    <th class="no-sort"></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (data of tableData; track data) {\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td class="text-gray-9">{{data.planName}}</td>											\n                        <td>{{data.customers}}</td>								\n                        <td><span class="badge table-badge bg-success fw-medium fs-10">{{data.status}}</span></td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">										\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                                    <i class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                  } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n    </div>\n</div>\n<!-- /product list -->\n\n\n		<!-- Add discount plan-->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Discount Plan</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								\n								<form>\n									<div class="mb-3">\n										<label class="form-label">Plan Name<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n										<div class="mb-3 add-product">\n											<div class="add-newplus">\n												<label class="form-label">Customer<span class="text-danger ms-1">*</span></label>\n												<a href="javascript:void(0);" class="d-flex justify-content-center align-items-center"><i data-feather="plus-circle" class="feather icon-plus-circle plus-down-add"></i><span>Add\n														New</span></a>\n											</div>\n											<mat-select class="custom-mat-select select" placeholder="Choose">\n												<mat-option value="1">Choose</mat-option>\n												<mat-option value="1">Lenovo</mat-option>\n												<mat-option value="1">Electronics</mat-option>\n											</mat-select>\n										</div>\n\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user2" class="check">\n											<label for="user2" class="checktoggle"></label>\n										</div>\n									</div>\n					\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Discount Plan</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Add discount plan -->\n\n		<!-- Edit discount plan -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Discount Plan</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n                            <div class="modal-body">\n								\n								<form>\n									<div class="mb-3">\n										<label class="form-label">Plan Name<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="Standard Plan">\n									</div>\n						            \n									\n										<div class="mb-3 add-product">\n											<div class="add-newplus">\n												<label class="form-label">Customer<span class="text-danger ms-1">*</span></label>\n												<a href="javascript:void(0);" class="d-flex justify-content-center align-items-center"><i data-feather="plus-circle" class="feather icon-plus-circle plus-down-add"></i><span>Add\n														New</span></a>\n											</div>\n											<mat-select class="custom-mat-select select" placeholder="All Customer">\n												<mat-option value="1">All Customers</mat-option>\n												<mat-option value="1">All Customers</mat-option>									\n											</mat-select>\n										</div>\n\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user3" class="check">\n											<label for="user3" class="checktoggle"></label>\n										</div>\n									</div>\n	\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-1 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit discount plan -->\n\n		<!-- delete modal -->\n			<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Discount Plan</h4>\n								<p class="mb-0 fs-16">Are you sure you want to delete discount plan?</p>\n								<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n								</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n\n        				<!-- Add Customer -->\n				<div class="modal fade" id="add_customer">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Customer</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<form>\n								<div class="modal-body">\n									<div>\n										<label class="form-label">Customer <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>												\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Customer</button>\n								</div>						\n							</form>\n						</div>\n					</div>\n				</div>\n				<!-- /Add Customer -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiscountPlanComponent, { className: "DiscountPlanComponent", filePath: "src/app/features/pages/promo/discount-plan/discount-plan.component.ts", lineNumber: 20 });
})();
export {
  DiscountPlanComponent
};
//# sourceMappingURL=chunk-PKUCZDBZ.js.map
