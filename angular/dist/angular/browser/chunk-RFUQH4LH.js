import {
  TagInputModule
} from "./chunk-BAUWSOIV.js";
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
import "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-NRBRKDTR.js";
import "./chunk-AIOFIKT2.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import "./chunk-5VOPFTBV.js";
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

// src/app/features/pages/inventory/units/units.component.ts
var _c0 = () => ({ standalone: true });
function UnitsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function UnitsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function UnitsComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 33);
    \u0275\u0275listener("click", function UnitsComponent_For_67_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function UnitsComponent_For_67_Template_input_ngModelChange_3_listener($event) {
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 75);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 76)(17, "div", 77)(18, "a", 78);
    \u0275\u0275element(19, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 80);
    \u0275\u0275element(21, "i", 81);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r3.unit, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.shortName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.noOfProducts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.createdOn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function UnitsComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 82);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var UnitsComponent = class _UnitsComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  routes = routes;
  cartValue = [4, 4];
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
  }
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
        if (this.router.url == this.routes.units) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getUnit().subscribe((apiRes) => {
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
  selectedList3 = [
    { value: "Sort by Datee" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList1 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  selectedList2 = [
    { value: "Choose Unit" },
    { value: "Piece" },
    { value: "Kilogram" },
    { value: "Gram" }
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
  static \u0275fac = function UnitsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnitsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnitsComponent, selectors: [["app-units"]], decls: 160, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "unit"], ["mat-sort-header", "shortname"], ["mat-sort-header", "product"], ["mat-sort-header", "created"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "value", "Kilograms", 1, "form-control"], ["type", "text", "value", "kg", 1, "form-control"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", "table-badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function UnitsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your units");
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
      \u0275\u0275listener("click", function UnitsComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, UnitsComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, UnitsComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, " Add Unit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function UnitsComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function UnitsComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275listener("matSortChange", function UnitsComponent_Template_table_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "thead", 31)(49, "tr")(50, "th", 32)(51, "label", 33);
      \u0275\u0275listener("click", function UnitsComponent_Template_label_click_51_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(52, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function UnitsComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "th", 36);
      \u0275\u0275text(55, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 37);
      \u0275\u0275text(57, "Short name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 38);
      \u0275\u0275text(59, "No of Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 39);
      \u0275\u0275text(61, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 40);
      \u0275\u0275text(63, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "tbody");
      \u0275\u0275repeaterCreate(66, UnitsComponent_For_67_Template, 22, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(68, UnitsComponent_Conditional_68_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(69, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 41)(71, "div", 42)(72, "div", 43)(73, "div", 44)(74, "div", 45)(75, "div", 46)(76, "div", 2)(77, "h4");
      \u0275\u0275text(78, "Add Unit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "button", 47)(80, "span", 48);
      \u0275\u0275text(81, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 49)(83, "form")(84, "div", 50)(85, "label", 51);
      \u0275\u0275text(86, "Unit");
      \u0275\u0275elementStart(87, "span", 52);
      \u0275\u0275text(88, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(89, "input", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 50)(91, "label", 51);
      \u0275\u0275text(92, "Short Name");
      \u0275\u0275elementStart(93, "span", 52);
      \u0275\u0275text(94, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "input", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 54)(97, "div", 55)(98, "span", 56);
      \u0275\u0275text(99, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "input", 57)(101, "label", 58);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 59)(103, "button", 60);
      \u0275\u0275text(104, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "button", 61);
      \u0275\u0275text(106, "Add Unit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(107, "div", 62)(108, "div", 42)(109, "div", 43)(110, "div", 44)(111, "div", 45)(112, "div", 46)(113, "div", 2)(114, "h4");
      \u0275\u0275text(115, "Edit Unit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 47)(117, "span", 48);
      \u0275\u0275text(118, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 49)(120, "form")(121, "div", 50)(122, "label", 51);
      \u0275\u0275text(123, "Unit");
      \u0275\u0275elementStart(124, "span", 52);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 50)(128, "label", 51);
      \u0275\u0275text(129, "Short Name");
      \u0275\u0275elementStart(130, "span", 52);
      \u0275\u0275text(131, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(132, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 54)(134, "div", 55)(135, "span", 56);
      \u0275\u0275text(136, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(137, "input", 65)(138, "label", 66);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(139, "div", 59)(140, "button", 60);
      \u0275\u0275text(141, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "button", 61);
      \u0275\u0275text(143, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(144, "div", 67)(145, "div", 42)(146, "div", 43)(147, "div", 44)(148, "div", 68)(149, "span", 69);
      \u0275\u0275element(150, "i", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "h4", 71);
      \u0275\u0275text(152, "Delete Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "p", 72);
      \u0275\u0275text(154, "Are you sure you want to delete unit?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 73)(156, "button", 60);
      \u0275\u0275text(157, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "button", 61);
      \u0275\u0275text(159, "Yes Delete");
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
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 68 : -1);
    }
  }, dependencies: [TagInputModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitsComponent, [{
    type: Component,
    args: [{ selector: "app-units", standalone: true, imports: [TagInputModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Units</h4>\n      <h6>Manage your units</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i  class="ti ti-circle-plus me-2"></i> Add Unit</a>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input\n              [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n              (ngModelChange)="searchData(searchDataValue)"\n              type="search"\n              class="form-control"\n              placeholder="Search"\n              />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Status\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n  <div class="card-body">\n      <div class="table-responsive">\n        <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n          matSortDirection="asc" matSortDisableClear>\n          <thead class="thead-light">\n            <tr>\n              <th class="no-sort">\n               <label class="checkboxs" (click)="selectAll(initChecked)">\n                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>\n                      <span class="checkmarks"></span>\n                    </label>\n              </th>\n              <th  mat-sort-header="unit">Unit</th>\n              <th  mat-sort-header="shortname">Short name</th>\n              <th  mat-sort-header="product">No of Products</th>\n              <th  mat-sort-header="created">Created Date</th>\n              <th  mat-sort-header="status">Status</th>\n              <th class="no-sort"></th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data; let i = $index) {\n              <tr>\n                <td>\n                      <label class="checkboxs" (click)="selectAll(initChecked)">\n                        <input type="checkbox"  [(ngModel)]="initChecked"/>\n                        <span class="checkmarks"></span>\n                      </label>\n                    </td>\n                <td>{{data.unit}} </td>\n                <td>{{data.shortName}}</td>\n                <td>{{data.noOfProducts}}</td>\n                <td>{{data.createdOn}}</td>\n                <td><span class="badge table-badge bg-success fw-medium fs-10">{{data.status}}</span></td>\n                <td class="action-table-data">\n                  <div class="edit-delete-action">\n                    <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">\n                      <i  class="feather icon-edit feather-edit"></i>\n                    </a>\n                    <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                      <i  class="feather icon-trash-2 feather-trash-2"></i>\n                    </a>\n                  </div>\n                </td>\n              </tr>\n            } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n\n          </tbody>\n        </table>\n\n      </div>\n      <app-custom-pagination></app-custom-pagination>\n    </div>\n  </div>\n  <!-- /product list -->\n \n		<!-- Add Unit -->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Unit</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n									<div class="mb-3">\n										<label class="form-label">Unit<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Short Name<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user2" class="check" checked="">\n											<label for="user2" class="checktoggle"></label>\n										</div>\n									</div>\n\n								</form>\n								\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Unit</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Unit -->\n\n		<!-- Edit Unit -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Unit</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">		\n								<form>\n									<div class="mb-3">\n										<label class="form-label">Unit<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="Kilograms">\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Short Name<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="kg">\n									</div>\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user3" class="check" checked="">\n											<label for="user3" class="checktoggle"></label>\n										</div>\n									</div>\n			\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		  \n\n		<!-- /Edit Unit -->\n\n			<!-- delete modal -->\n			<div class="modal fade" id="delete-modal">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="page-wrapper-new p-0">\n							<div class="content p-5 px-3 text-center">\n									<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n									<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Unit</h4>\n									<p class="mb-0 fs-16">Are you sure you want to delete unit?</p>\n									<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n										<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n										<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n									</div>						\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnitsComponent, { className: "UnitsComponent", filePath: "src/app/features/pages/inventory/units/units.component.ts", lineNumber: 25 });
})();
export {
  UnitsComponent
};
//# sourceMappingURL=chunk-RFUQH4LH.js.map
