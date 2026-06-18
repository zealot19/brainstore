import {
  CommonCounterComponent
} from "./chunk-LG6DY5RG.js";
import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  MatTableDataSource,
  MatTableModule
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/stock/stock-adjustment/stock-adjustment.component.ts
var _c0 = () => ({ standalone: true });
function StockAdjustmentComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function StockAdjustmentComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function StockAdjustmentComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 97)(3, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function StockAdjustmentComponent_For_94_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
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
    \u0275\u0275elementStart(9, "td")(10, "div", 73)(11, "a", 74);
    \u0275\u0275element(12, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 73)(19, "a", 74);
    \u0275\u0275element(20, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 76);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 100)(26, "div", 101)(27, "a", 102);
    \u0275\u0275element(28, "i", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 104);
    \u0275\u0275element(30, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 80);
    \u0275\u0275element(32, "i", 106);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.warehouse);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.store);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.person);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.quantity);
  }
}
function StockAdjustmentComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 107);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var StockAdjustmentComponent = class _StockAdjustmentComponent {
  data;
  pagination;
  router;
  sidebar;
  selectedWarehouse = "Choose Warehouse";
  initChecked = false;
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
        if (this.router.url == this.routes.stockAdjustment) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStockadjustment().subscribe((apiRes) => {
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedValue9 = "";
  selectedValue10 = "";
  selectedValue11 = "";
  selectedValue12 = "";
  selectedValue13 = "";
  selectedValue14 = "";
  selectedValue15 = "";
  selectedValue16 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Warehouse" },
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" },
    { value: "Traditional Warehouse" },
    { value: "Cool Warehouse" }
  ];
  selectedList3 = [
    { value: "Choose Product" },
    { value: "Nike Jordan" },
    { value: "Apple Series 5 Watch" },
    { value: "Amazon Echo Dot" },
    { value: "Lobar Handy" }
  ];
  selectedList4 = [
    { value: "Choose Person" },
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList5 = [
    { value: "Choose" },
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList6 = [
    { value: "Choose" },
    { value: "Selosy" },
    { value: "Logerro" }
  ];
  selectedList7 = [
    { value: "Choose" },
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList8 = [
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList9 = [
    { value: "Selosy" },
    { value: "Logerro" }
  ];
  selectedList10 = [
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList11 = [
    { value: "Choose" },
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList12 = [
    { value: "Choose" },
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList13 = [
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList14 = [
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList15 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList16 = [
    { value: "Addition" },
    { value: "Addition" },
    { value: "Addition" }
  ];
  showBox = false;
  toggleBox() {
    this.showBox = !this.showBox;
  }
  cartValue = [4, 4];
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
  }
  quantity = 2;
  // Initial quantity value
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increaseQuantity() {
    this.quantity++;
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
  static \u0275fac = function StockAdjustmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockAdjustmentComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockAdjustmentComponent, selectors: [["app-stock-adjustment"]], decls: 339, vars: 10, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "warehouse"], ["mat-sort-header", "shop"], ["mat-sort-header", "product"], ["mat-sort-header", "date"], ["mat-sort-header", "person"], ["mat-sort-header", "quantity"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "search-form", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], ["data-feather", "search", 1, "feather", "icon-search"], [1, "row"], [1, "col-lg-6"], [1, "mb-3"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], [1, "summer-description-box"], [1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-units", 1, "modal", "fade"], [1, "mb-3", "search-form"], ["type", "text", "value", "Nike Jordan", 1, "form-control"], ["type", "text", "value", "PT002", 1, "form-control"], [1, "modal-body-table"], [1, "table", "datanew"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["href", "javascript:void(0);"], [1, "product-quantity", "border-0", "bg-gray-transparent"], [3, "value"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "p-2", "border", "rounded", "d-flex", "align-items-center"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["placeholder", "Electro Mart", 1, "custom-mat-select", "select"], ["placeholder", "Steven", 1, "custom-mat-select", "select"], [1, "mb-3", "summer-description-box"], ["id", "view-notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["alt", "product", 3, "src"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-notes", 1, "me-2", "border", "rounded", "d-flex", "align-items-center", "p-2"], [1, "feather", "icon-file-text"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function StockAdjustmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Stock Adjustment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your stock adjustment");
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
      \u0275\u0275listener("click", function StockAdjustmentComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, StockAdjustmentComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, StockAdjustmentComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Adjustment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function StockAdjustmentComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StockAdjustmentComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Warehouse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Lavish Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Quaint Warehouse ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "Traditional Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 27);
      \u0275\u0275text(50, "Cool Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 28)(52, "a", 25);
      \u0275\u0275text(53, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 26)(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 27);
      \u0275\u0275text(66, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 27);
      \u0275\u0275text(69, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(70, "div", 29)(71, "div", 30)(72, "table", 31);
      \u0275\u0275listener("matSortChange", function StockAdjustmentComponent_Template_table_matSortChange_72_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(73, "thead")(74, "tr")(75, "th", 32)(76, "label", 33);
      \u0275\u0275listener("click", function StockAdjustmentComponent_Template_label_click_76_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(77, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function StockAdjustmentComponent_Template_input_ngModelChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "th", 36);
      \u0275\u0275text(80, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 37);
      \u0275\u0275text(82, "Shop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 38);
      \u0275\u0275text(84, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 39);
      \u0275\u0275text(86, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 40);
      \u0275\u0275text(88, "Person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 41);
      \u0275\u0275text(90, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "tbody");
      \u0275\u0275repeaterCreate(93, StockAdjustmentComponent_For_94_Template, 33, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(95, StockAdjustmentComponent_Conditional_95_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(96, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 42)(98, "div", 43)(99, "div", 44)(100, "div", 45)(101, "div", 2)(102, "h4");
      \u0275\u0275text(103, "Add Adjustment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "button", 46)(105, "span", 47);
      \u0275\u0275text(106, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "form")(108, "div", 48)(109, "div", 49)(110, "label", 50);
      \u0275\u0275text(111, "Product");
      \u0275\u0275elementStart(112, "span", 51);
      \u0275\u0275text(113, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 52);
      \u0275\u0275element(115, "input", 53)(116, "i", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 55)(118, "div", 56)(119, "div", 57)(120, "label", 50);
      \u0275\u0275text(121, "Warehouse");
      \u0275\u0275elementStart(122, "span", 51);
      \u0275\u0275text(123, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "mat-select", 58)(125, "mat-option", 59);
      \u0275\u0275text(126, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "mat-option", 59);
      \u0275\u0275text(128, "Lavish Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-option", 59);
      \u0275\u0275text(130, "Quaint Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "mat-option", 59);
      \u0275\u0275text(132, "Cool Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "mat-option", 59);
      \u0275\u0275text(134, "Retail Supply Hub");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(135, "div", 56)(136, "div", 57)(137, "label", 50);
      \u0275\u0275text(138, "Reference Number");
      \u0275\u0275elementStart(139, "span", 51);
      \u0275\u0275text(140, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(141, "input", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 61)(143, "div", 57)(144, "label", 50);
      \u0275\u0275text(145, "Store");
      \u0275\u0275elementStart(146, "span", 51);
      \u0275\u0275text(147, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "mat-select", 58)(149, "mat-option", 59);
      \u0275\u0275text(150, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "mat-option", 59);
      \u0275\u0275text(152, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "mat-option", 59);
      \u0275\u0275text(154, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "mat-option", 59);
      \u0275\u0275text(156, "Prime Bazaar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "mat-option", 59);
      \u0275\u0275text(158, "Gadget World");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(159, "div", 61)(160, "div", 57)(161, "label", 50);
      \u0275\u0275text(162, "Responsible Person");
      \u0275\u0275elementStart(163, "span", 51);
      \u0275\u0275text(164, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "mat-select", 58)(166, "mat-option", 59);
      \u0275\u0275text(167, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "mat-option", 59);
      \u0275\u0275text(169, "James Kirwin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "mat-option", 59);
      \u0275\u0275text(171, "Francis Chang");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "mat-option", 59);
      \u0275\u0275text(173, "Gary Hennessy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "mat-option", 59);
      \u0275\u0275text(175, "Eleanor Panek");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(176, "div", 61)(177, "div", 62)(178, "label", 50);
      \u0275\u0275text(179, "Notes");
      \u0275\u0275elementStart(180, "span", 51);
      \u0275\u0275text(181, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(182, "textarea", 63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 64)(184, "button", 65);
      \u0275\u0275text(185, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "button", 66);
      \u0275\u0275text(187, "Create Adjustment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(188, "div", 67)(189, "div", 43)(190, "div", 44)(191, "div", 45)(192, "div", 2)(193, "h4");
      \u0275\u0275text(194, "Edit Adjustment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "button", 46)(196, "span", 47);
      \u0275\u0275text(197, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "form")(199, "div", 48)(200, "div", 68)(201, "label", 50);
      \u0275\u0275text(202, "Product");
      \u0275\u0275elementStart(203, "span", 51);
      \u0275\u0275text(204, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(205, "input", 69)(206, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 55)(208, "div", 56)(209, "div", 57)(210, "label", 50);
      \u0275\u0275text(211, "Warehouse");
      \u0275\u0275elementStart(212, "span", 51);
      \u0275\u0275text(213, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "mat-select", 58)(215, "mat-option", 59);
      \u0275\u0275text(216, "Lavish Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "mat-option", 59);
      \u0275\u0275text(218, "Quaint Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "mat-option", 59);
      \u0275\u0275text(220, "Cool Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "mat-option", 59);
      \u0275\u0275text(222, "Retail Supply Hub");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(223, "div", 56)(224, "div", 57)(225, "label", 50);
      \u0275\u0275text(226, "Reference Number");
      \u0275\u0275elementStart(227, "span", 51);
      \u0275\u0275text(228, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(229, "input", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "div", 61)(231, "div", 71)(232, "div", 30)(233, "table", 72)(234, "thead")(235, "tr")(236, "th");
      \u0275\u0275text(237, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "th");
      \u0275\u0275text(239, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "th");
      \u0275\u0275text(241, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "th");
      \u0275\u0275text(243, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(244, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "tbody")(246, "tr")(247, "td")(248, "div", 73)(249, "a", 74);
      \u0275\u0275element(250, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "a", 76);
      \u0275\u0275text(252, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "td");
      \u0275\u0275text(254, "PT002");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "td");
      \u0275\u0275text(256, "Nike");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "td")(258, "div", 77);
      \u0275\u0275element(259, "app-common-counter", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "td")(261, "div", 79)(262, "a", 80);
      \u0275\u0275element(263, "i", 81);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(264, "div", 61)(265, "div", 57)(266, "label", 50);
      \u0275\u0275text(267, "Store");
      \u0275\u0275elementStart(268, "span", 51);
      \u0275\u0275text(269, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "mat-select", 82)(271, "mat-option", 59);
      \u0275\u0275text(272, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "mat-option", 59);
      \u0275\u0275text(274, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "mat-option", 59);
      \u0275\u0275text(276, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "mat-option", 59);
      \u0275\u0275text(278, "Prime Bazaar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "mat-option", 59);
      \u0275\u0275text(280, "Gadget World");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(281, "div", 61)(282, "div", 57)(283, "label", 50);
      \u0275\u0275text(284, "Responsible Person");
      \u0275\u0275elementStart(285, "span", 51);
      \u0275\u0275text(286, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "mat-select", 83)(288, "mat-option", 59);
      \u0275\u0275text(289, "James Kirwin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "mat-option", 59);
      \u0275\u0275text(291, "Francis Chang");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "mat-option", 59);
      \u0275\u0275text(293, "Gary Hennessy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "mat-option", 59);
      \u0275\u0275text(295, "Eleanor Panek");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(296, "div", 61)(297, "div", 84)(298, "label", 50);
      \u0275\u0275text(299, "Notes");
      \u0275\u0275elementStart(300, "span", 51);
      \u0275\u0275text(301, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "textarea", 63);
      \u0275\u0275text(303, "The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(304, "div", 64)(305, "button", 65);
      \u0275\u0275text(306, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "button", 66);
      \u0275\u0275text(308, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(309, "div", 85)(310, "div", 86)(311, "div", 44)(312, "div", 45)(313, "div", 2)(314, "h4");
      \u0275\u0275text(315, "Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "button", 46)(317, "span", 47);
      \u0275\u0275text(318, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(319, "div", 48)(320, "p");
      \u0275\u0275text(321, "The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. Jordan also signed with Nike because he loved the way they wanted to market him with the banned colored shoes. Nike promised to cover the fine Jordan would receive from the NBA.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(322, "div", 87)(323, "div", 86)(324, "div", 44)(325, "div", 88)(326, "div", 89)(327, "form")(328, "div", 90);
      \u0275\u0275element(329, "i", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "h3", 92);
      \u0275\u0275text(331, "Delete Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "p", 93);
      \u0275\u0275text(333, "Are you sure you want to delete product from stock?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div", 94)(335, "button", 95);
      \u0275\u0275text(336, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "button", 96);
      \u0275\u0275text(338, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(44);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 95 : -1);
      \u0275\u0275advance(164);
      \u0275\u0275property("value", 2);
    }
  }, dependencies: [MatSortModule, MatSort, MatSortHeader, MatTableModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonCounterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockAdjustmentComponent, [{
    type: Component,
    args: [{ selector: "app-stock-adjustment", standalone: true, imports: [MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule, CommonCounterComponent], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Stock Adjustment</h4>\n      <h6>Manage your stock adjustment</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Pdf"\n        matTooltip="Pdf"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/pdf.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Excel"\n        matTooltip="Excel"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/excel.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Refresh"\n        matTooltip="Refresh"\n        matTooltipPosition="above"\n        ><i class="ti ti-refresh"></i\n      ></a>\n    </li>\n    <li>\n      <a\n        (click)="toggleCollapse()" [class.active]="isCollapsed"\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Collapse"\n        id="collapse-header"\n        matTooltip="Collapse"\n        matTooltipPosition="above"\n        > @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a\n      href="javascript:void(0);"\n      class="btn btn-primary"\n      data-bs-toggle="modal"\n      data-bs-target="#add-units"\n      ><i class="ti ti-circle-plus me-2"></i>Add Adjustment</a\n      >\n    </div>\n  </div>\n  <!-- /product list -->\n  <div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div class="search-set">\n        <div class="search-input">\n          <a href="javascript:void(0);" class="btn btn-searchset"\n            ><i class="feather icon-search feather-search"></i\n          ></a>\n          <div class="dataTables_filter">\n            <label>\n              <input\n                [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="searchData(searchDataValue)"\n                type="search"\n                class="form-control"\n                placeholder="Search"\n                />\n              </label>\n            </div>\n          </div>\n      </div>\n      <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n        <div class="dropdown me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Warehouse\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Lavish Warehouse</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Quaint Warehouse </a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Traditional Warehouse</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Cool Warehouse</a>\n            </li>\n          </ul>\n        </div>\n        <div class="dropdown">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Sort By : Last 7 Days\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class="card-body">\n        <div class="table-responsive">\n          <table matSort (matSortChange)="sortData($event)" class="table datanew">\n            <thead>\n              <tr>\n                <th class="no-sort">\n                  <label class="checkboxs" (click)="selectAll(initChecked)">\n                    <input type="checkbox" id="select-all"   [(ngModel)]="initChecked" />\n                    <span class="checkmarks"></span>\n                  </label>\n                </th>\n                <th mat-sort-header="warehouse">Warehouse</th>\n                <th mat-sort-header="shop">Shop</th>\n                <th mat-sort-header="product">Product</th>\n                <th mat-sort-header="date">Date</th>\n                <th mat-sort-header="person">Person</th>\n                <th mat-sort-header="quantity">Qty</th>\n                <th class="no-sort"></th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (data of tableData; track data) {\n                <tr>\n                  <td>\n                    <label class="checkboxs">\n                      <input type="checkbox"   [(ngModel)]="data.isSelected"/>\n                      <span class="checkmarks"></span>\n                    </label>\n                  </td>\n                  <td>{{ data.warehouse }}</td>\n                  <td>{{ data.store }}</td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img src="assets/img/products/{{data.img}}" alt="product">\n                      </a>\n                      <a href="javascript:void(0);">{{ data.product }}</a>\n                    </div>\n                  </td>\n                  <td>{{ data.date }}</td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img src="assets/img/users/{{data.img2}}" alt="product">\n                      </a>\n                      <a href="javascript:void(0);">{{ data.person }}</a>\n                    </div>\n                  </td>\n                  <td>{{ data.quantity }}</td>\n                  <td class="action-table-data">\n                    <div class="edit-delete-action">\n                      <a class="me-2 border rounded d-flex align-items-center p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view-notes">\n                        <i class="feather icon-file-text"></i>\n                      </a>\n                      <a\n                        class="me-2 p-2"\n                        href="javascript:void(0);"\n                        data-bs-toggle="modal"\n                        data-bs-target="#edit-units"\n                        >\n                        <i class="feather icon-edit feather-edit"></i>\n                      </a>\n                      <a\n                        class=" p-2 border rounded d-flex align-items-center"\n                        href="javascript:void(0);"\n                        data-bs-toggle="modal" data-bs-target="#delete"\n                        >\n                        <i class="feather icon-trash-2 feather-trash-2"></i>\n                      </a>\n                    </div>\n                  </td>\n                </tr>\n              }	\n              @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n            </tbody>\n          </table>\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n    </div>\n                      <!-- /product list -->\n		<!-- Add Adjustment -->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog modal-dialog-centered stock-adjust-modal">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Adjustment</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="search-form mb-3">\n								<label class="form-label">Product<span class="text-danger ms-1">*</span></label>\n								<div class="position-relative">\n\n									<input type="text" class="form-control" placeholder="Search Product">\n									<i data-feather="search" class="feather icon-search"></i>\n								</div>\n							</div>\n							<div class="row">\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Warehouse<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Lavish Warehouse</mat-option>\n											<mat-option value="1">Quaint Warehouse</mat-option>\n											<mat-option value="1">Cool Warehouse</mat-option>\n											<mat-option value="1">Retail Supply Hub</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Reference Number<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Store<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Electro Mart</mat-option>\n											<mat-option value="1">Quantum Gadgets</mat-option>\n											<mat-option value="1">Prime Bazaar</mat-option>\n											<mat-option value="1">Gadget World</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Responsible Person<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">James Kirwin</mat-option>\n											<mat-option value="1">Francis Chang</mat-option>\n											<mat-option value="1">Gary Hennessy</mat-option>\n											<mat-option value="1">Eleanor Panek</mat-option>\n										</mat-select>\n									</div>\n								</div>\n							</div>\n							\n							<div class="col-lg-12">\n								<div class="summer-description-box">\n									<label class="form-label">Notes<span class="text-danger ms-1">*</span></label>\n									<textarea class="form-control"></textarea>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create Adjustment</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Adjustment -->\n\n		<!-- Edit Adjustment -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered stock-adjust-modal">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Adjustment</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n					<div class="modal-body">\n						<div class="mb-3 search-form">\n							<label class="form-label">Product<span class="text-danger ms-1">*</span></label>\n							<input type="text" class="form-control" value="Nike Jordan">\n							<i data-feather="search" class="feather icon-search"></i>\n						</div>\n						<div class="row">\n							<div class="col-lg-6">\n								<div class="mb-3">\n									<label class="form-label">Warehouse<span class="text-danger ms-1">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Select">\n										<mat-option value="1">Lavish Warehouse</mat-option>\n											<mat-option value="1">Quaint Warehouse</mat-option>\n											<mat-option value="1">Cool Warehouse</mat-option>\n											<mat-option value="1">Retail Supply Hub</mat-option>\n									</mat-select>\n								</div>\n							</div>\n							<div class="col-lg-6">\n								<div class="mb-3">\n									<label class="form-label">Reference Number<span class="text-danger ms-1">*</span></label>\n									<input type="text" class="form-control" value="PT002">\n								</div>\n							</div>\n							<div class="col-lg-12">\n								<div class="modal-body-table">\n									<div class="table-responsive">\n										<table class="table  datanew">\n											<thead>\n												<tr>\n													<th>Product</th>\n													<th>SKU</th>\n													<th>Category</th>\n													<th>Qty</th>\n													<th></th>\n												</tr>\n											</thead>\n											<tbody>\n												<tr>\n													<td>\n														<div class="d-flex align-items-center">\n															<a href="javascript:void(0);" class="avatar avatar-md me-2">\n																<img src="assets/img/products/stock-img-02.png" alt="product">\n															</a>\n															<a href="javascript:void(0);">Nike Jordan</a>\n														</div>												\n													</td>\n													<td>PT002</td>\n													<td>Nike</td>\n													<td>\n														<div class="product-quantity border-0 bg-gray-transparent">\n															<app-common-counter [value]="2"></app-common-counter>\n														</div>\n													</td>\n													\n													<td>\n														<div class="edit-delete-action d-flex align-items-center">\n															<a class="p-2 border rounded d-flex align-items-center" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">\n																<i data-feather="trash-2" class="feather icon-trash-2"></i>\n															</a>\n														</div>\n														\n													</td>\n												</tr>\n											</tbody>\n										</table>\n									</div>\n								</div>\n							</div>\n							<div class="col-lg-12">\n								<div class="mb-3">\n									<label class="form-label">Store<span class="text-danger ms-1">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Electro Mart">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">Electro Mart</mat-option>\n											<mat-option value="1">Quantum Gadgets</mat-option>\n											<mat-option value="1">Prime Bazaar</mat-option>\n											<mat-option value="1">Gadget World</mat-option>\n									</mat-select>\n								</div>\n							</div>\n							<div class="col-lg-12">\n								<div class="mb-3">\n									<label class="form-label">Responsible Person<span class="text-danger ms-1">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Steven">\n										<mat-option value="1">James Kirwin</mat-option>\n											<mat-option value="1">Francis Chang</mat-option>\n											<mat-option value="1">Gary Hennessy</mat-option>\n											<mat-option value="1">Eleanor Panek</mat-option>\n									</mat-select>\n								</div>\n							</div>\n							<div class="col-lg-12">\n								<div class="mb-3 summer-description-box">\n									<label class="form-label">Notes<span class="text-danger ms-1">*</span></label>\n									<textarea class="form-control">The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. </textarea>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="modal-footer">\n						<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n						<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n					</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Adjustment -->\n\n		<!-- View Notes -->\n		<div class="modal fade" id="view-notes">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Notes</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<div class="modal-body">\n						<p>The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. Jordan also signed with Nike because he loved the way they wanted to market him with the banned colored shoes. Nike promised to cover the fine Jordan would receive from the NBA.</p>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /View Notes -->\n\n\n      <!-- Delete -->\n		<div class="modal fade modal-default" id="delete">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-body p-0">\n						<div class="success-wrap text-center">\n							<form>\n								<div class="icon-success bg-danger-transparent text-danger mb-2">\n									<i class="ti ti-trash"></i>\n								</div>\n								<h3 class="mb-2">Delete Stock</h3>\n								<p class="fs-16 mb-3">Are you sure you want to delete product from stock?</p>\n								<div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">\n									<button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>\n									<button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Delete -->\n\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockAdjustmentComponent, { className: "StockAdjustmentComponent", filePath: "src/app/features/pages/stock/stock-adjustment/stock-adjustment.component.ts", lineNumber: 30 });
})();
export {
  StockAdjustmentComponent
};
//# sourceMappingURL=chunk-FVWWFENN.js.map
