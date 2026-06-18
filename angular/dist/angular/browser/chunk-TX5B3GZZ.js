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
  ɵɵinterpolate1,
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

// src/app/features/pages/inventory/stock/low-stocks/low-stocks.component.ts
var _c0 = () => ({ standalone: true });
function LowStocksComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function LowStocksComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function LowStocksComponent_For_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 55)(3, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function LowStocksComponent_For_125_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 95)(11, "a", 96);
    \u0275\u0275element(12, "img", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 98);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275elementStart(23, "td", 99)(24, "div", 100)(25, "a", 101);
    \u0275\u0275element(26, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 103);
    \u0275\u0275element(28, "i", 104);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r2.warehouse, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.store);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.product, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.qtyAlert);
  }
}
function LowStocksComponent_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 105);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
function LowStocksComponent_For_248_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 55)(3, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function LowStocksComponent_For_248_Template_input_ngModelChange_3_listener($event) {
      const data_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(data_r4.isSelected, $event) || (data_r4.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 95)(11, "a", 96);
    \u0275\u0275element(12, "img", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 98);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275elementStart(23, "td", 99)(24, "div", 100)(25, "a", 101);
    \u0275\u0275element(26, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 103);
    \u0275\u0275element(28, "i", 104);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r4.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r4.warehouse, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.store);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r4.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r4.product, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.qtyAlert);
  }
}
function LowStocksComponent_Conditional_249_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 105);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var LowStocksComponent = class _LowStocksComponent {
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
    this.data.getLowStocks().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.lowStock) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getLowStocks2().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.lowStock) {
          this.getTableData2({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getLowStocks().subscribe((apiRes) => {
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
  getTableData2(pageOption) {
    this.data.getLowStocks().subscribe((apiRes) => {
      this.tableData2 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData2.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData2,
        serialNumberArray: this.serialNumberArray,
        tableData: []
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Product" },
    { value: "Lenovo 3rd Generation" },
    { value: "Nike Jordan" },
    { value: "Amazon Echo Dot" }
  ];
  selectedList3 = [
    { value: "Choose Category" },
    { value: "Laptop" },
    { value: "Shoe" },
    { value: "Speaker" }
  ];
  selectedList4 = [
    { value: "Choose Warehouse" },
    { value: "Lavish Warehouse" },
    { value: "Lobar Handy" },
    { value: "Traditional Warehouse" }
  ];
  selectedList5 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList6 = [
    { value: "Choose Product" },
    { value: "Lenovo 3rd Generation" },
    { value: "Nike Jordan" },
    { value: "Amazon Echo Dot" }
  ];
  selectedList7 = [
    { value: "Choose Category" },
    { value: "Laptop" },
    { value: "Shoe" },
    { value: "Speaker" }
  ];
  selectedList8 = [
    { value: "Choose Warehouse" },
    { value: "Lavish Warehouse" },
    { value: "Lobar Handy" },
    { value: "Traditional Warehouse" }
  ];
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
  static \u0275fac = function LowStocksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LowStocksComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LowStocksComponent, selectors: [["app-low-stocks"]], decls: 353, vars: 14, consts: [[1, "page-header"], [1, "page-title", "me-auto"], [1, "table-top-head", "low-stock-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#send-email", 1, "btn", "btn-secondary", "w-auto", "shadow-none"], [1, "feather", "icon-mail", "feather-mail"], [1, "table-tab"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mb-3"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "low-stock-tab", "d-flex", "me-2", "mb-0"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], [1, "notify", "d-flex", "bg-white", "p-1", "px-2", "border", "rounded"], [1, "status-toggle", "text-secondary", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle", "me-2"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "warehouse"], ["mat-sort-header", "store"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], ["mat-sort-header", "sku"], ["mat-sort-header", "qty"], ["mat-sort-header", "qtyAlert"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "dropdown"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "click"], [1, "checkmarks", 3, "ngModelChange", "ngModel"], ["id", "send-email", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "success-email-send", "modal-body", ".custom-modal-body", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-success-transparent", "mb-2"], [1, "ti", "ti-checks", "fs-24", "text-success"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "p-1", "px-2", "fs-13", "fw-normal"], ["id", "edit-stock", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true", 1, "fs-16"], [1, "modal-body"], [1, "row"], [1, "col-sm-6", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", "value", "PT001", 1, "form-control"], [1, "col-12", "mb-3"], ["type", "text", "value", "Lenevo 3rd Gen", 1, "form-control"], ["type", "text", "value", "15", 1, "form-control"], ["type", "text", "value", "10", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-stock", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function LowStocksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Low Stocks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h6");
      \u0275\u0275text(5, "Manage your low stocks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ul", 2)(7, "li")(8, "a", 3);
      \u0275\u0275element(9, "img", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 5);
      \u0275\u0275element(12, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 7);
      \u0275\u0275element(15, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 9);
      \u0275\u0275listener("click", function LowStocksComponent_Template_a_click_17_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(18, LowStocksComponent_Conditional_18_Template, 1, 0, "i", 10);
      \u0275\u0275conditionalCreate(19, LowStocksComponent_Conditional_19_Template, 1, 0, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 11);
      \u0275\u0275element(22, "i", 12);
      \u0275\u0275text(23, "Send Email");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 14)(26, "ul", 15)(27, "li", 16)(28, "button", 17);
      \u0275\u0275text(29, "Low Stocks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li", 16)(31, "button", 18);
      \u0275\u0275text(32, "Out of Stocks");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 19)(34, "div", 20);
      \u0275\u0275element(35, "input", 21);
      \u0275\u0275elementStart(36, "label", 22);
      \u0275\u0275text(37, "checkbox");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " Notify ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 23)(40, "div", 24)(41, "div", 25)(42, "div", 26)(43, "div", 27)(44, "div", 28)(45, "a", 29);
      \u0275\u0275element(46, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 31)(48, "label")(49, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function LowStocksComponent_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function LowStocksComponent_Template_input_ngModelChange_49_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 33)(51, "div", 34)(52, "a", 35);
      \u0275\u0275text(53, " Warehouse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 36)(55, "li")(56, "a", 37);
      \u0275\u0275text(57, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 37);
      \u0275\u0275text(60, "Beats Pro ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 37);
      \u0275\u0275text(63, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 37);
      \u0275\u0275text(66, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 34)(68, "a", 35);
      \u0275\u0275text(69, " Store ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 36)(71, "li")(72, "a", 37);
      \u0275\u0275text(73, "James Kirwin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 37);
      \u0275\u0275text(76, "Francis Chang");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 37);
      \u0275\u0275text(79, "Antonio Engle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 37);
      \u0275\u0275text(82, "Leo Kelly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 34)(84, "a", 35);
      \u0275\u0275text(85, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "ul", 36)(87, "li")(88, "a", 37);
      \u0275\u0275text(89, "Computers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li")(91, "a", 37);
      \u0275\u0275text(92, "Electronics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "a", 37);
      \u0275\u0275text(95, "Shoe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "a", 37);
      \u0275\u0275text(98, "Electronics");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(99, "div", 38)(100, "div", 39)(101, "table", 40);
      \u0275\u0275listener("matSortChange", function LowStocksComponent_Template_table_matSortChange_101_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(102, "thead", 41)(103, "tr")(104, "th", 42)(105, "label", 43);
      \u0275\u0275listener("click", function LowStocksComponent_Template_label_click_105_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(106, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function LowStocksComponent_Template_input_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "span", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "th", 46);
      \u0275\u0275text(109, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 47);
      \u0275\u0275text(111, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 48);
      \u0275\u0275text(113, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 49);
      \u0275\u0275text(115, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 50);
      \u0275\u0275text(117, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 51);
      \u0275\u0275text(119, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 52);
      \u0275\u0275text(121, "Qty Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "th", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "tbody");
      \u0275\u0275repeaterCreate(124, LowStocksComponent_For_125_Template, 29, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(126, LowStocksComponent_Conditional_126_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(127, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 53)(129, "div", 25)(130, "div", 26)(131, "div", 27)(132, "div", 28)(133, "a", 29);
      \u0275\u0275element(134, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 31)(136, "label")(137, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function LowStocksComponent_Template_input_ngModelChange_137_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function LowStocksComponent_Template_input_ngModelChange_137_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(138, "div", 33)(139, "div", 34)(140, "a", 35);
      \u0275\u0275text(141, " Warehouse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "ul", 36)(143, "li")(144, "a", 37);
      \u0275\u0275text(145, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "li")(147, "a", 37);
      \u0275\u0275text(148, "Beats Pro ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "li")(150, "a", 37);
      \u0275\u0275text(151, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "li")(153, "a", 37);
      \u0275\u0275text(154, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(155, "div", 34)(156, "a", 35);
      \u0275\u0275text(157, " Store ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "ul", 36)(159, "li")(160, "a", 37);
      \u0275\u0275text(161, "James Kirwin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "li")(163, "a", 37);
      \u0275\u0275text(164, "Francis Chang");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "li")(166, "a", 37);
      \u0275\u0275text(167, "Antonio Engle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "li")(169, "a", 37);
      \u0275\u0275text(170, "Leo Kelly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "div", 34)(172, "a", 35);
      \u0275\u0275text(173, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "ul", 36)(175, "li")(176, "a", 37);
      \u0275\u0275text(177, "Computers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "li")(179, "a", 37);
      \u0275\u0275text(180, "Electronics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "li")(182, "a", 37);
      \u0275\u0275text(183, "Shoe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "li")(185, "a", 37);
      \u0275\u0275text(186, "Electronics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(187, "div", 34)(188, "a", 35);
      \u0275\u0275text(189, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "ul", 36)(191, "li")(192, "a", 37);
      \u0275\u0275text(193, "Lenovo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "li")(195, "a", 37);
      \u0275\u0275text(196, "Beats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "li")(198, "a", 37);
      \u0275\u0275text(199, "Nike");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "li")(201, "a", 37);
      \u0275\u0275text(202, "Apple");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(203, "div", 54)(204, "a", 35);
      \u0275\u0275text(205, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "ul", 36)(207, "li")(208, "a", 37);
      \u0275\u0275text(209, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "a", 37);
      \u0275\u0275text(212, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "li")(214, "a", 37);
      \u0275\u0275text(215, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "li")(217, "a", 37);
      \u0275\u0275text(218, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "li")(220, "a", 37);
      \u0275\u0275text(221, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(222, "div", 38)(223, "div", 39)(224, "table", 40);
      \u0275\u0275listener("matSortChange", function LowStocksComponent_Template_table_matSortChange_224_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(225, "thead")(226, "tr")(227, "th", 42)(228, "label", 55)(229, "input", 56);
      \u0275\u0275listener("click", function LowStocksComponent_Template_input_click_229_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "span", 57);
      \u0275\u0275twoWayListener("ngModelChange", function LowStocksComponent_Template_span_ngModelChange_230_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "th", 46);
      \u0275\u0275text(232, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "th", 47);
      \u0275\u0275text(234, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "th", 48);
      \u0275\u0275text(236, "ProductName");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "th", 49);
      \u0275\u0275text(238, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "th", 50);
      \u0275\u0275text(240, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "th", 51);
      \u0275\u0275text(242, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "th", 52);
      \u0275\u0275text(244, "Qty Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(245, "th", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "tbody");
      \u0275\u0275repeaterCreate(247, LowStocksComponent_For_248_Template, 29, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(249, LowStocksComponent_Conditional_249_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(250, "app-custom-pagination");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(251, "div", 58)(252, "div", 59)(253, "div", 60)(254, "div", 61)(255, "span", 62);
      \u0275\u0275element(256, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "h4");
      \u0275\u0275text(258, "Success");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "p");
      \u0275\u0275text(260, "Email Sent Successfully");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "a", 64);
      \u0275\u0275text(262, "Close");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(263, "div", 65)(264, "div", 59)(265, "div", 60)(266, "div", 66)(267, "div", 67)(268, "div", 68)(269, "div", 69)(270, "h4");
      \u0275\u0275text(271, "Edit Low Stocks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "button", 70)(273, "span", 71);
      \u0275\u0275text(274, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "div", 72)(276, "form")(277, "div", 73)(278, "div", 74)(279, "label", 75);
      \u0275\u0275text(280, "Warehouse");
      \u0275\u0275elementStart(281, "span", 76);
      \u0275\u0275text(282, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "mat-select", 77)(284, "mat-option", 78);
      \u0275\u0275text(285, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "mat-option", 78);
      \u0275\u0275text(287, "Lavish Warehouse ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(288, "div", 74)(289, "label", 75);
      \u0275\u0275text(290, "Store");
      \u0275\u0275elementStart(291, "span", 76);
      \u0275\u0275text(292, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(293, "mat-select", 77)(294, "mat-option", 78);
      \u0275\u0275text(295, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "mat-option", 78);
      \u0275\u0275text(297, "Electro Mart");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(298, "div", 74)(299, "label", 75);
      \u0275\u0275text(300, "SKU");
      \u0275\u0275elementStart(301, "span", 76);
      \u0275\u0275text(302, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(303, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "div", 74)(305, "label", 75);
      \u0275\u0275text(306, "Category");
      \u0275\u0275elementStart(307, "span", 76);
      \u0275\u0275text(308, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "mat-select", 77)(310, "mat-option", 78);
      \u0275\u0275text(311, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "mat-option", 78);
      \u0275\u0275text(313, "Laptop");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(314, "div", 80)(315, "label", 75);
      \u0275\u0275text(316, "Product Name");
      \u0275\u0275elementStart(317, "span", 76);
      \u0275\u0275text(318, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(319, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 74)(321, "label", 75);
      \u0275\u0275text(322, "Qty");
      \u0275\u0275elementStart(323, "span", 76);
      \u0275\u0275text(324, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(325, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "div", 74)(327, "label", 75);
      \u0275\u0275text(328, "Qty Alert");
      \u0275\u0275elementStart(329, "span", 76);
      \u0275\u0275text(330, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(331, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(332, "div", 84)(333, "button", 85);
      \u0275\u0275text(334, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "button", 86);
      \u0275\u0275text(336, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(337, "div", 87)(338, "div", 59)(339, "div", 60)(340, "div", 66)(341, "div", 88)(342, "span", 89);
      \u0275\u0275element(343, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "h4", 91);
      \u0275\u0275text(345, "Delete Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "p", 92);
      \u0275\u0275text(347, "Are you sure you want to delete product from low stock?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "div", 93)(349, "button", 85);
      \u0275\u0275text(350, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "button", 86);
      \u0275\u0275text(352, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance(30);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275advance(57);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 126 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance(93);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData2.length === 0 ? 249 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LowStocksComponent, [{
    type: Component,
    args: [{ selector: "app-low-stocks", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '<div class="page-header">\n  <div class="page-title me-auto">\n    <h4>Low Stocks</h4>\n    <h6>Manage your low stocks</h6>\n  </div>\n  <ul class="table-top-head low-stock-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img\n      src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img\n      src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n    <li>\n      <a href="javascript:void(0);" class="btn btn-secondary w-auto shadow-none" data-bs-toggle="modal" data-bs-target="#send-email"><i  class="feather icon-mail feather-mail"></i>Send Email</a>\n    </li>\n  </ul>\n</div>\n<div class="table-tab">\n  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">\n  <ul class="nav nav-pills low-stock-tab d-flex me-2 mb-0" id="pills-tab" role="tablist">\n    <li class="nav-item" role="presentation">\n      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"\n      type="button" role="tab" aria-controls="pills-home" aria-selected="true">Low Stocks</button>\n    </li>\n    <li class="nav-item" role="presentation">\n      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"\n      type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Out of Stocks</button>\n    </li>\n\n  </ul>\n  <div class="notify d-flex bg-white p-1 px-2 border rounded">\n    <div class="status-toggle text-secondary d-flex justify-content-between align-items-center">\n      <input type="checkbox" id="user2" class="check" checked="">\n      <label for="user2" class="checktoggle me-2">checkbox</label>\n      Notify\n    </div>\n  </div>\n  </div>\n  <div class="tab-content" id="pills-tabContent">\n    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">\n      <!-- /product list -->\n      <div class="card table-list-card">\n        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n          <div class="search-set">\n            <div class="search-input">\n              <a href="javascript:void(0);" class="btn btn-searchset"><i\n              class="feather icon-search feather-search"></i></a>\n              <div class="dataTables_filter">\n                <label>\n                  <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                    (ngModelChange)="searchData(searchDataValue)" type="search"\n                    class="form-control" placeholder="Search" />\n                  </label>\n                </div>\n              </div>\n          </div>\n  \n          <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown me-2">\n              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                Warehouse\n              </a>\n              <ul class="dropdown-menu  dropdown-menu-end p-3">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple Series 5 Watch</a>\n                </li>\n              </ul>\n            </div>\n            <div class="dropdown me-2">\n              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                Store\n              </a>\n              <ul class="dropdown-menu  dropdown-menu-end p-3">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">James Kirwin</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Francis Chang</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Antonio Engle</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Leo Kelly</a>\n                </li>\n              </ul>\n            </div>\n            <div class="dropdown me-2">\n              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                Category\n              </a>\n              <ul class="dropdown-menu  dropdown-menu-end p-3">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class="card-body">\n            <div class="table-responsive">\n              <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n                <thead class="thead-light">\n                  <tr>\n                    <th class="no-sort">\n                      <label class="checkboxs" (click)="selectAll(initChecked)">\n                         <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                        <span class="checkmarks"></span>\n                      </label>\n                    </th>\n                    <th mat-sort-header="warehouse">Warehouse</th>\n                    <th mat-sort-header="store">Store</th>\n                    <th mat-sort-header="product">Product Name</th>\n                    <th mat-sort-header="category">Category</th>\n                    <th mat-sort-header="sku">SKU</th>\n                    <th mat-sort-header="qty">Qty</th>\n                    <th mat-sort-header="qtyAlert">Qty Alert</th>\n                    <th class="no-sort"></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (data of tableData; track data) {\n                    <tr>\n                      <td>\n                        <label class="checkboxs">\n                          <input type="checkbox"  [(ngModel)]="data.isSelected">\n                          <span class="checkmarks"></span>\n                        </label>\n                      </td>\n                      <td>{{data.warehouse}} </td>\n                      <td>{{data.store}}</td>\n                      <td>\n                        <div class="productimgname">\n                          <a href="javascript:void(0);" class="product-img stock-img">\n                            <img src="assets/img/products/{{data.img}}" alt="product">\n                          </a>\n                          <a href="javascript:void(0);">{{data.product}} </a>\n                        </div>\n                      </td>\n                      <td>{{data.category}}</td>\n                      <td>{{data.sku}}</td>\n                      <td>{{data.qty}}</td>\n                      <td>{{data.qtyAlert}}</td>\n                      <td class="action-table-data">\n                        <div class="edit-delete-action">\n                          <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal"\n                            data-bs-target="#edit-stock">\n                            <i class="feather icon-edit feather-edit"></i>\n                          </a>\n                          <a data-bs-toggle="modal" data-bs-target="#delete-modal"  class=" p-2" href="javascript:void(0);">\n                            <i class="feather icon-trash-2 feather-trash-2"></i>\n                          </a>\n                        </div>\n                      </td>\n                    </tr>\n                  } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n            <app-custom-pagination></app-custom-pagination>\n          </div>\n        </div>\n        <!-- /product list -->\n      </div>\n      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">\n        <!-- /product list -->\n        <div class="card table-list-card">\n          <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n            <div class="search-set">\n              <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i\n                class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                      (ngModelChange)="searchData(searchDataValue)" type="search"\n                      class="form-control" placeholder="Search" />\n                    </label>\n                  </div>\n                </div>\n            </div>\n    \n            <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n              <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Warehouse\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple Series 5 Watch</a>\n                  </li>\n                </ul>\n              </div>\n              <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Store\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">James Kirwin</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Francis Chang</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Antonio Engle</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Leo Kelly</a>\n                  </li>\n                </ul>\n              </div>\n              <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Category\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n                  </li>\n                </ul>\n              </div>\n              <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Product\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple</a>\n                  </li>\n                </ul>\n              </div>\n              <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="card-body">\n              <div class="table-responsive">\n                <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n                  <thead>\n                    <tr>\n                      <th class="no-sort">\n                        <label class="checkboxs">\n                          <input type="checkbox" id="select-all" (click)="selectAll(initChecked)">\n                          <span class="checkmarks" [(ngModel)]="initChecked" ></span>\n                        </label>\n                      </th>\n                      <th mat-sort-header="warehouse">Warehouse</th>\n                      <th mat-sort-header="store">Store</th>\n                      <th mat-sort-header="product">ProductName</th>\n                      <th mat-sort-header="category">Category</th>\n                      <th mat-sort-header="sku">SKU</th>\n                      <th mat-sort-header="qty">Qty</th>\n                      <th mat-sort-header="qtyAlert">Qty Alert</th>\n                      <th class="no-sort"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    @for (data of tableData2; track data) {\n                      <tr>\n                        <td>\n                          <label class="checkboxs">\n                            <input type="checkbox" [(ngModel)]="data.isSelected">\n                            <span class="checkmarks"></span>\n                          </label>\n                        </td>\n                        <td>{{data.warehouse}} </td>\n                        <td>{{data.store}}</td>\n                        <td>\n                          <div class="productimgname">\n                            <a href="javascript:void(0);" class="product-img stock-img">\n                              <img src="assets/img/products/{{data.img}}" alt="product">\n                            </a>\n                            <a href="javascript:void(0);">{{data.product}} </a>\n                          </div>\n                        </td>\n                        <td>{{data.category}}</td>\n                        <td>{{data.sku}}</td>\n                        <td>{{data.qty}}</td>\n                        <td>{{data.qtyAlert}}</td>\n                        <td class="action-table-data">\n                          <div class="edit-delete-action">\n                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal"\n                              data-bs-target="#edit-stock">\n                              <i class="feather icon-edit feather-edit"></i>\n                            </a>\n                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class=" p-2" href="javascript:void(0);">\n                              <i class="feather icon-trash-2 feather-trash-2"></i>\n                            </a>\n                          </div>\n                        </td>\n                      </tr>\n                    }\n                    @if (tableData2.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                  }\n                  </tbody>\n                </table>\n              </div>\n              <app-custom-pagination></app-custom-pagination>\n            </div>\n          </div>\n          <!-- /product list -->\n        </div>\n\n      </div>\n    </div>\n    <!-- Send Mail -->\n    <div class="modal fade" id="send-email">\n      <div class="modal-dialog modal-dialog-centered">\n        <div class="modal-content">\n          <div class="success-email-send modal-body .custom-modal-body text-center">\n            <span class="rounded-circle d-inline-flex p-2 bg-success-transparent mb-2"><i class="ti ti-checks fs-24 text-success"></i></span>\n            <h4>Success</h4>\n            <p>Email Sent Successfully</p>\n            <a href="javascript:void(0);" class="btn btn-primary p-1 px-2 fs-13 fw-normal" data-bs-dismiss="modal">Close</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Send Mail -->\n\n		<!-- Edit Low Stock -->\n		<div class="modal fade" id="edit-stock">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Low Stocks</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true" class="fs-16">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n										<div class="row">\n									<div class="col-sm-6 mb-3">\n										<label class="form-label">Warehouse<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Choose">\n											<mat-option value="1">Choose</mat-option>\n											<mat-option value="1">Lavish Warehouse </mat-option>\n										</mat-select>\n									</div>\n									<div class="col-sm-6 mb-3">\n										<label class="form-label">Store<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Choose">\n											<mat-option value="1">Choose</mat-option>\n											<mat-option value="1">Electro Mart</mat-option>\n										</mat-select>\n									</div>\n									<div class="col-sm-6 mb-3">\n										<label class="form-label">SKU<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="PT001">\n									</div>\n									<div class="col-sm-6 mb-3">\n										<label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Choose">\n											<mat-option value="1">Choose</mat-option>\n											<mat-option value="1">Laptop</mat-option>\n										</mat-select>\n									</div>\n									<div class="col-12 mb-3">\n										<label class="form-label">Product Name<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="Lenevo 3rd Gen">\n									</div>\n									<div class="col-sm-6 mb-3">\n										<label class="form-label">Qty<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="15">\n									</div>\n									<div class="col-sm-6 mb-3">\n										<label class="form-label">Qty Alert<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="10">\n									</div>\n								</div>\n								\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- / Edit Low Stock -->\n\n				<!-- delete modal -->\n				<div class="modal fade" id="delete-modal">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="page-wrapper-new p-0">\n								<div class="content p-5 px-3 text-center">\n										<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n										<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Product</h4>\n										<p class="mb-0 fs-16">Are you sure you want to delete product from low stock?</p>\n										<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n											<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n											<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n										</div>						\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LowStocksComponent, { className: "LowStocksComponent", filePath: "src/app/features/pages/inventory/stock/low-stocks/low-stocks.component.ts", lineNumber: 22 });
})();
export {
  LowStocksComponent
};
//# sourceMappingURL=chunk-TX5B3GZZ.js.map
