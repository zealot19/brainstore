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

// src/app/features/pages/inventory/warranty/warranty.component.ts
var _c0 = () => ({ standalone: true });
function WarrantyComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function WarrantyComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function WarrantyComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 79)(3, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function WarrantyComponent_For_65_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "p", 81);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 82);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 83)(16, "div", 84)(17, "a", 85);
    \u0275\u0275element(18, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 87);
    \u0275\u0275element(20, "i", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r2.warranty, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.duration);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.status);
  }
}
function WarrantyComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var WarrantyComponent = class _WarrantyComponent {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Duration" },
    { value: "3 Months" },
    { value: "6 Months" },
    { value: "1 Year" }
  ];
  selectedList3 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  selectedList4 = [
    { value: "Choose" },
    { value: "Month" },
    { value: "Year" }
  ];
  selectedList5 = [
    { value: "Month" },
    { value: "Year" }
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
        if (this.router.url == this.routes.warranty) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getWarranty().subscribe((apiRes) => {
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
  static \u0275fac = function WarrantyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WarrantyComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarrantyComponent, selectors: [["app-warranty"]], decls: 201, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "description"], ["mat-sort-header", "duration"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "row"], [1, "col-lg-6"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-12"], [1, "form-control"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "value", "Replacement Warranty", 1, "form-control"], ["type", "text", "value", "2", 1, "form-control"], ["placeholder", "Month", 1, "custom-mat-select", "select"], ["type", "checkbox", "id", "user3", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "description-para"], [1, "badge", "table-badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function WarrantyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Warranty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your warranty");
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
      \u0275\u0275listener("click", function WarrantyComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, WarrantyComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, WarrantyComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, " Add Warranty");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function WarrantyComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function WarrantyComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(45, "div", 28)(46, "div", 29)(47, "table", 30);
      \u0275\u0275listener("matSortChange", function WarrantyComponent_Template_table_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "thead")(49, "tr")(50, "th", 31)(51, "label", 32);
      \u0275\u0275listener("click", function WarrantyComponent_Template_label_click_51_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(52, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function WarrantyComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "th", 35);
      \u0275\u0275text(55, "Warranty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 36);
      \u0275\u0275text(57, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 37);
      \u0275\u0275text(59, "Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 38);
      \u0275\u0275text(61, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "th", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "tbody");
      \u0275\u0275repeaterCreate(64, WarrantyComponent_For_65_Template, 21, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(66, WarrantyComponent_Conditional_66_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(67, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 39)(69, "div", 40)(70, "div", 41)(71, "div", 42)(72, "div", 43)(73, "div", 44)(74, "div", 2)(75, "h4");
      \u0275\u0275text(76, "Add Warrranty");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "button", 45)(78, "span", 46);
      \u0275\u0275text(79, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 47)(81, "form")(82, "div", 48)(83, "label", 49);
      \u0275\u0275text(84, "Warranty");
      \u0275\u0275elementStart(85, "span", 50);
      \u0275\u0275text(86, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(87, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 52)(89, "div", 53)(90, "div", 48)(91, "label", 49);
      \u0275\u0275text(92, "Duration");
      \u0275\u0275elementStart(93, "span", 50);
      \u0275\u0275text(94, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 53)(97, "div", 48)(98, "label", 49);
      \u0275\u0275text(99, "Period");
      \u0275\u0275elementStart(100, "span", 50);
      \u0275\u0275text(101, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "mat-select", 54)(103, "mat-option", 55);
      \u0275\u0275text(104, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "mat-option", 55);
      \u0275\u0275text(106, "Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "mat-option", 55);
      \u0275\u0275text(108, "Year");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(109, "div", 56)(110, "div", 48)(111, "label", 49);
      \u0275\u0275text(112, "Description");
      \u0275\u0275elementStart(113, "span", 50);
      \u0275\u0275text(114, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(115, "textarea", 57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 58)(117, "div", 59)(118, "span", 60);
      \u0275\u0275text(119, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(120, "input", 61)(121, "label", 62);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(122, "div", 63)(123, "button", 64);
      \u0275\u0275text(124, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "button", 65);
      \u0275\u0275text(126, "Add Warranty");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(127, "div", 66)(128, "div", 40)(129, "div", 41)(130, "div", 42)(131, "div", 43)(132, "div", 44)(133, "div", 2)(134, "h4");
      \u0275\u0275text(135, "Edit Warrranty");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "button", 45)(137, "span", 46);
      \u0275\u0275text(138, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 47)(140, "form")(141, "div", 48)(142, "label", 49);
      \u0275\u0275text(143, "Warranty");
      \u0275\u0275elementStart(144, "span", 50);
      \u0275\u0275text(145, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(146, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 52)(148, "div", 53)(149, "div", 48)(150, "label", 49);
      \u0275\u0275text(151, "Duration");
      \u0275\u0275elementStart(152, "span", 50);
      \u0275\u0275text(153, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(154, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 53)(156, "div", 48)(157, "label", 49);
      \u0275\u0275text(158, "Period");
      \u0275\u0275elementStart(159, "span", 50);
      \u0275\u0275text(160, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "mat-select", 69)(162, "mat-option", 55);
      \u0275\u0275text(163, "Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "mat-option", 55);
      \u0275\u0275text(165, "Year");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 56)(167, "div", 48)(168, "label", 49);
      \u0275\u0275text(169, "Description");
      \u0275\u0275elementStart(170, "span", 50);
      \u0275\u0275text(171, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "textarea", 57);
      \u0275\u0275text(173, "Covers replacement of faulty items");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(174, "div", 58)(175, "div", 59)(176, "span", 60);
      \u0275\u0275text(177, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(178, "input", 70)(179, "label", 71);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(180, "div", 63)(181, "button", 64);
      \u0275\u0275text(182, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "button", 65);
      \u0275\u0275text(184, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(185, "div", 72)(186, "div", 40)(187, "div", 41)(188, "div", 42)(189, "div", 73)(190, "span", 74);
      \u0275\u0275element(191, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "h4", 76);
      \u0275\u0275text(193, "Delete Warranty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "p", 77);
      \u0275\u0275text(195, "Are you sure you want to delete warranty?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 78)(197, "button", 64);
      \u0275\u0275text(198, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 65);
      \u0275\u0275text(200, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 66 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WarrantyComponent, [{
    type: Component,
    args: [{ selector: "app-warranty", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Warranty</h4>\n      <h6>Manage your warranty</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img\n      src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img\n      src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse" matTooltipPosition="above"\n        id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i\n    class="ti ti-circle-plus me-2"></i> Add Warranty</a>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i\n        class="feather icon-search feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n              type="search" class="form-control" placeholder="Search" />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">	\n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Status\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="card-body">\n    <div class="table-responsive">\n      <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n        <thead>\n          <tr>\n            <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n            <th mat-sort-header="name">Warranty</th>\n            <th mat-sort-header="description">Description</th>\n            <th mat-sort-header="duration">Duration</th>\n            <th mat-sort-header="status">Status</th>\n            <th class="no-sort"></th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (data of tableData; track data) {\n            <tr>\n              <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n              <td>{{data.warranty}} </td>\n              <td>\n                <p class="description-para">{{data.description}}</p>\n              </td>\n              <td>{{data.duration}}</td>\n              <td><span class="badge table-badge bg-success fw-medium fs-10">{{data.status}}</span></td>\n              <td class="action-table-data">\n                <div class="edit-delete-action">\n                  <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal"\n                    data-bs-target="#edit-units">\n                    <i class="feather icon-edit feather-edit"></i>\n                  </a>\n                  <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                    <i class="feather icon-trash-2 feather-trash-2"></i>\n                  </a>\n                </div>\n              </td>\n            </tr>\n          } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n        </tbody>\n      </table>\n    </div>\n    <app-custom-pagination></app-custom-pagination>\n  </div>\n</div>\n<!-- /product list -->\n\n		<!-- Add Warranty -->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Warrranty</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								\n								<form>\n									<div class="mb-3">\n										<label class="form-label">Warranty<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n									<div class="row">\n										<div class="col-lg-6">\n											<div class="mb-3">\n												<label class="form-label">Duration<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-lg-6">\n											<div class="mb-3">\n												<label class="form-label">Period<span class="text-danger ms-1">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Choose">\n													<mat-option value="1">Choose</mat-option>\n													<mat-option value="1">Month</mat-option>\n													<mat-option value="1">Year</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Description<span class="text-danger ms-1">*</span></label>\n												<textarea class="form-control"></textarea>\n											</div>\n										</div>\n									</div>\n									\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user2" class="check">\n											<label for="user2" class="checktoggle"></label>\n										</div>\n									</div>\n					\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Warranty</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Warranty -->\n\n		<!-- Edit Warranty -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Warrranty</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n									<div class="mb-3">\n										<label class="form-label">Warranty<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="Replacement Warranty">\n									</div>\n									<div class="row">\n										<div class="col-lg-6">\n											<div class="mb-3">\n												<label class="form-label">Duration<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control" value="2">\n											</div>\n										</div>\n										<div class="col-lg-6">\n											<div class="mb-3">\n												<label class="form-label">Period<span class="text-danger ms-1">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Month">\n													<mat-option value="1">Month</mat-option>\n													<mat-option value="1">Year</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Description<span class="text-danger ms-1">*</span></label>\n												<textarea class="form-control">Covers replacement of faulty items</textarea>\n											</div>\n										</div>\n									</div>\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user3" class="check">\n											<label for="user3" class="checktoggle"></label>\n										</div>\n									</div>\n							\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Warranty -->\n\n		<!-- delete modal -->\n			<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Warranty</h4>\n							<p class="mb-0 fs-16">Are you sure you want to delete warranty?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarrantyComponent, { className: "WarrantyComponent", filePath: "src/app/features/pages/inventory/warranty/warranty.component.ts", lineNumber: 23 });
})();
export {
  WarrantyComponent
};
//# sourceMappingURL=chunk-5EW7OZOZ.js.map
