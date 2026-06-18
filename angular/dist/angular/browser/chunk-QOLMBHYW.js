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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/inventory/product/expired-products/expired-products.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => ({ adaptivePosition: true });
function ExpiredProductsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ExpiredProductsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ExpiredProductsComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 71)(3, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredProductsComponent_For_86_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 73)(9, "a", 74);
    \u0275\u0275element(10, "img", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 76);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 77)(18, "div", 78)(19, "a", 79);
    \u0275\u0275element(20, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 81);
    \u0275\u0275element(22, "i", 82);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r2.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.product, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.manufacturedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.expiredDate);
  }
}
function ExpiredProductsComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var ExpiredProductsComponent = class _ExpiredProductsComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  selectedValue1 = "";
  selectedValue2 = "";
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
        if (this.router.url == this.routes.expiredProduct) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getExpiredproduct().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Type" },
    { value: "Lenovo 3rd Generation" },
    { value: "Nike Jordan" }
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
  static \u0275fac = function ExpiredProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpiredProductsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpiredProductsComponent, selectors: [["app-expired-products"]], decls: 161, vars: 11, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above", "data-bs-toggle", "modal", "data-bs-target", "#add-units"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "sku"], ["mat-sort-header", "product"], ["mat-sort-header", "manufacturedDate"], ["mat-sort-header", "expiredDate"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-0"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "placeholder", "Manufacturer Date", "bsDatepicker", "", "placement", "top", "container", ".date-input1", 1, "datetimepicker", "p-2", "form-control"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "placeholder", "Expiry Date", "bsDatepicker", "", "container", ".date-input2", 1, "datetimepicker", "p-2", "form-control", 3, "bsConfig"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function ExpiredProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Expired Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your expired products");
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
      \u0275\u0275listener("click", function ExpiredProductsComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, ExpiredProductsComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, ExpiredProductsComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "label")(29, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredProductsComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ExpiredProductsComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "a", 22);
      \u0275\u0275text(33, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 23)(35, "li")(36, "a", 24);
      \u0275\u0275text(37, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 24);
      \u0275\u0275text(40, "Beats Pro ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 24);
      \u0275\u0275text(43, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 24);
      \u0275\u0275text(46, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 25)(48, "a", 22);
      \u0275\u0275text(49, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul", 23)(51, "li")(52, "a", 24);
      \u0275\u0275text(53, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 24);
      \u0275\u0275text(56, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 24);
      \u0275\u0275text(59, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 24);
      \u0275\u0275text(62, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 24);
      \u0275\u0275text(65, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(66, "div", 26)(67, "div", 27)(68, "table", 28);
      \u0275\u0275listener("matSortChange", function ExpiredProductsComponent_Template_table_matSortChange_68_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(69, "thead", 29)(70, "tr")(71, "th", 30)(72, "label", 31);
      \u0275\u0275listener("click", function ExpiredProductsComponent_Template_label_click_72_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(73, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredProductsComponent_Template_input_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "th", 34);
      \u0275\u0275text(76, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 35);
      \u0275\u0275text(78, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 36);
      \u0275\u0275text(80, "Manufactured Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 37);
      \u0275\u0275text(82, "Expired Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "th", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "tbody");
      \u0275\u0275repeaterCreate(85, ExpiredProductsComponent_For_86_Template, 23, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(87, ExpiredProductsComponent_Conditional_87_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(88, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 38)(90, "div", 39)(91, "div", 40)(92, "div", 41)(93, "div", 42)(94, "div", 43)(95, "div", 2)(96, "h4");
      \u0275\u0275text(97, "Edit Expired Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "button", 44)(99, "span", 45);
      \u0275\u0275text(100, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 46)(102, "form")(103, "div", 47)(104, "div", 48)(105, "div", 49)(106, "label", 50);
      \u0275\u0275text(107, "SKU");
      \u0275\u0275elementStart(108, "span", 51);
      \u0275\u0275text(109, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(110, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 48)(112, "div", 49)(113, "label", 50);
      \u0275\u0275text(114, "Product Name");
      \u0275\u0275elementStart(115, "span", 51);
      \u0275\u0275text(116, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "mat-select", 53)(118, "mat-option", 54);
      \u0275\u0275text(119, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "mat-option", 54);
      \u0275\u0275text(121, "Lenovo 3rd Generation");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(122, "div", 48)(123, "div", 49)(124, "label");
      \u0275\u0275text(125, "Manufacturer Date");
      \u0275\u0275elementStart(126, "span", 51);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 55);
      \u0275\u0275element(129, "i", 56)(130, "input", 57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 48)(132, "div", 49)(133, "label");
      \u0275\u0275text(134, "Expiry Date");
      \u0275\u0275elementStart(135, "span", 51);
      \u0275\u0275text(136, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 58);
      \u0275\u0275element(138, "i", 56)(139, "input", 59);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(140, "div", 60)(141, "button", 61);
      \u0275\u0275text(142, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "button", 62);
      \u0275\u0275text(144, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(145, "div", 63)(146, "div", 39)(147, "div", 40)(148, "div", 41)(149, "div", 64)(150, "span", 65);
      \u0275\u0275element(151, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "h4", 67);
      \u0275\u0275text(153, "Delete Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 68);
      \u0275\u0275text(155, "Are you sure you want to delete product?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 69)(157, "button", 70);
      \u0275\u0275text(158, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "button", 62);
      \u0275\u0275text(160, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(44);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 87 : -1);
      \u0275\u0275advance(52);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(10, _c1));
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpiredProductsComponent, [{
    type: Component,
    args: [{ selector: "app-expired-products.", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule, BsDatepickerModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Expired Products</h4>\n      <h6>Manage your expired products</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-placement="top" title="Pdf" matTooltip="Pdf"  matTooltipPosition="above" data-bs-toggle="modal" data-bs-target="#add-units"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel" matTooltip="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above"><i  class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse" matTooltipPosition="above"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n              type="search" class="form-control" placeholder="Search" />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Product\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple Series 5 Watch</a>\n          </li>\n        </ul>\n      </div>\n      <div class="dropdown">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Sort By : Last 7 Days\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="card-body">\n      <div class="table-responsive">\n        <table class="table  datanew"  (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n          matSortDirection="asc" matSortDisableClear>\n          <thead class="thead-light">\n            <tr>\n              <th class="no-sort">\n                <label class="checkboxs" (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n              <th mat-sort-header="sku">SKU</th>\n              <th mat-sort-header="product">Product</th>\n              <th mat-sort-header="manufacturedDate">Manufactured Date</th>\n              <th mat-sort-header="expiredDate">Expired Date</th>\n              <th class="no-sort"></th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data; let i = $index) {\n              <tr>\n                <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n                <td>{{data.sku}}</td>\n                <td>\n                  <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                      <img [src]="data.img" alt="product">\n                    </a>\n                    <a href="javascript:void(0);">{{data.product}} </a>\n                  </div>\n                </td>\n                <td>{{data.manufacturedDate}}</td>\n                <td>{{data.expiredDate}}</td>\n                <td class="action-table-data">\n                  <div class="edit-delete-action">\n                    <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-units">\n                      <i  class="feather icon-edit feather-edit"></i>\n                    </a>\n                    <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                      <i  class="feather icon-trash-2 feather-trash-2"></i>\n                    </a>\n                  </div>\n                </td>\n              </tr>\n            }\n            @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n\n          </tbody>\n        </table>\n\n      </div>\n      <app-custom-pagination></app-custom-pagination>\n    </div>\n  </div>\n  <!-- /product list -->\n\n\n  		<!-- edit -->\n      <div class="modal fade" id="add-units">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content p-0">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Edit Expired Product</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body">\n                  <form>\n                    <div class="row">\n                      <div class="col-lg-12">\n                        <div class="mb-3">\n                          <label class="form-label">SKU<span class="text-danger ms-1">*</span></label>\n                          <input type="text" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-lg-12">\n                        <div class="mb-3">\n                          <label class="form-label">Product Name<span class="text-danger ms-1">*</span></label>\n                          <mat-select class="custom-mat-select select" placeholder="Choose">\n                            <mat-option value="1">Choose</mat-option>\n                            <mat-option value="1">Lenovo 3rd Generation</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                      <div class="col-lg-12">\n                        <div class="mb-3">\n                          <label>Manufacturer Date<span class="text-danger ms-1">*</span></label>\n                          <div class="input-groupicon calender-input date-input1">\n                            <i class="feather icon-calendar info-img"></i>\n                            <input type="text" class="datetimepicker p-2 form-control" placeholder="Manufacturer Date" bsDatepicker placement="top"\n                             container=".date-input1">\n                          </div>\n                        </div>\n                      </div>\n                      <div class="col-lg-12">\n                        <div class="mb-3">\n                          <label>Expiry Date<span class="text-danger ms-1">*</span></label>\n                          <div class="input-groupicon calender-input date-input2">\n                            <i class="feather icon-calendar info-img"></i>\n                            <input type="text" class="datetimepicker p-2 form-control" placeholder="Expiry Date" bsDatepicker [bsConfig]="{adaptivePosition: true}"\n                            container=".date-input2">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                \n                  </form>\n                </div>\n                <div class="modal-footer">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n      <!-- delete modal -->\n      <div class="modal fade" id="delete-modal">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content p-5 px-3 text-center">\n                  <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                  <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Product</h4>\n                  <p class="mb-0 fs-16">Are you sure you want to delete product?</p>\n                  <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                    <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                  </div>						\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpiredProductsComponent, { className: "ExpiredProductsComponent", filePath: "src/app/features/pages/inventory/product/expired-products/expired-products.component.ts", lineNumber: 24 });
})();
export {
  ExpiredProductsComponent
};
//# sourceMappingURL=chunk-QOLMBHYW.js.map
