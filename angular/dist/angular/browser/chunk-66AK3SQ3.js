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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/stock/manage-stocks/manage-stocks.component.ts
var _c0 = () => ({ standalone: true });
function ManageStocksComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ManageStocksComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ManageStocksComponent_For_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 95)(3, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ManageStocksComponent_For_107_Template_input_ngModelChange_3_listener($event) {
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
    \u0275\u0275elementStart(9, "td")(10, "div", 72)(11, "a", 73);
    \u0275\u0275element(12, "img", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 75);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 72)(19, "a", 73);
    \u0275\u0275element(20, "img", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 75);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 98)(26, "div", 99)(27, "a", 100);
    \u0275\u0275element(28, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 102);
    \u0275\u0275element(30, "i", 103);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r2.warehouse, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.store, " ");
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
function ManageStocksComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 104);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var ManageStocksComponent = class _ManageStocksComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedWarehouse = "Choose Warehouse";
  cartValue = [2, 2];
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
  }
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
        if (this.router.url == this.routes.manageStocks) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getManageStocks().subscribe((apiRes) => {
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
  selectedList9 = [{ value: "Selosy" }, { value: "Logerro" }];
  selectedList10 = [{ value: "Steven" }, { value: "Gravely" }];
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
  static \u0275fac = function ManageStocksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageStocksComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageStocksComponent, selectors: [["app-manage-stocks"]], decls: 302, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "warehouse"], ["mat-sort-header", "shop"], ["mat-sort-header", "product"], ["mat-sort-header", "date"], ["mat-sort-header", "person"], ["mat-sort-header", "quantity"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "search-form", "mb-0"], [1, "position-relative"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], ["data-feather", "search", 1, "feather", "icon-search"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-units", 1, "modal", "fade"], ["placeholder", "Warehouse", 1, "custom-mat-select", "select"], ["placeholder", "Electro Mart", 1, "custom-mat-select", "select"], ["placeholder", "James Kirwin", 1, "custom-mat-select", "select"], [1, "search-form", "mb-3"], ["type", "text", "placeholder", "Select Product", "value", "Nike Jordan", 1, "form-control"], ["data-feather", "search", 1, "feather-search"], [1, "modal-body-table"], [1, "table", "datanew"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["href", "javascript:void(0);"], [1, "product-quantity", "bg-gray-transparent", "border-0"], [1, "quantity-btn"], ["data-feather", "minus-circle", 1, "feather-search"], ["type", "text", "value", "2", 1, "quntity-input", "bg-transparent"], ["data-feather", "plus-circle", 1, "plus-circle"], [1, "d-flex", "align-items-center", "justify-content-between", "edit-delete-action"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "border", "rounded", "p-2"], ["data-feather", "trash-2", 1, "feather-trash-2"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["alt", "product", 3, "src"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function ManageStocksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Manage Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your stock");
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
      \u0275\u0275listener("click", function ManageStocksComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, ManageStocksComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, ManageStocksComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Stock");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function ManageStocksComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ManageStocksComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275elementStart(51, "div", 24)(52, "a", 25);
      \u0275\u0275text(53, " Store ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 26)(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Electro Mart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Quantum Gadgets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Prime Bazaar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 27);
      \u0275\u0275text(66, "Gadget World");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 24)(68, "a", 25);
      \u0275\u0275text(69, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 26)(71, "li")(72, "a", 27);
      \u0275\u0275text(73, "Lenovo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 27);
      \u0275\u0275text(76, "Beats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 27);
      \u0275\u0275text(79, "Nike");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 27);
      \u0275\u0275text(82, "Apple");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(83, "div", 28)(84, "div", 29)(85, "table", 30);
      \u0275\u0275listener("matSortChange", function ManageStocksComponent_Template_table_matSortChange_85_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(86, "thead", 31)(87, "tr")(88, "th", 32)(89, "label", 33);
      \u0275\u0275listener("click", function ManageStocksComponent_Template_label_click_89_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(90, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function ManageStocksComponent_Template_input_ngModelChange_90_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "th", 36);
      \u0275\u0275text(93, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 37);
      \u0275\u0275text(95, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 38);
      \u0275\u0275text(97, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 39);
      \u0275\u0275text(99, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 40);
      \u0275\u0275text(101, "Person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 41);
      \u0275\u0275text(103, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "tbody");
      \u0275\u0275repeaterCreate(106, ManageStocksComponent_For_107_Template, 31, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(108, ManageStocksComponent_Conditional_108_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(109, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 42)(111, "div", 43)(112, "div", 44)(113, "div", 45)(114, "div", 2)(115, "h4");
      \u0275\u0275text(116, "Add Stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "button", 46)(118, "span", 47);
      \u0275\u0275text(119, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "form")(121, "div", 48)(122, "div", 49)(123, "div", 50)(124, "div", 51)(125, "label", 52);
      \u0275\u0275text(126, "Warehouse ");
      \u0275\u0275elementStart(127, "span", 53);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "mat-select", 54)(130, "mat-option", 55);
      \u0275\u0275text(131, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "mat-option", 55);
      \u0275\u0275text(133, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 55);
      \u0275\u0275text(135, "Quaint Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "mat-option", 55);
      \u0275\u0275text(137, "Traditional Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "div", 50)(139, "div", 51)(140, "label", 52);
      \u0275\u0275text(141, "Store ");
      \u0275\u0275elementStart(142, "span", 53);
      \u0275\u0275text(143, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "mat-select", 54)(145, "mat-option", 55);
      \u0275\u0275text(146, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "mat-option", 55);
      \u0275\u0275text(148, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "mat-option", 55);
      \u0275\u0275text(150, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "mat-option", 55);
      \u0275\u0275text(152, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(153, "div", 50)(154, "div", 51)(155, "label", 52);
      \u0275\u0275text(156, "Responsible Person ");
      \u0275\u0275elementStart(157, "span", 53);
      \u0275\u0275text(158, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "mat-select", 54)(160, "mat-option", 55);
      \u0275\u0275text(161, "James Kirwin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "mat-option", 55);
      \u0275\u0275text(163, "Francis Chang");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "mat-option", 55);
      \u0275\u0275text(165, "Antonio Engle");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 50)(167, "div", 56)(168, "label", 52);
      \u0275\u0275text(169, "Product ");
      \u0275\u0275elementStart(170, "span", 53);
      \u0275\u0275text(171, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 57);
      \u0275\u0275element(173, "input", 58)(174, "i", 59);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(175, "div", 60)(176, "button", 61);
      \u0275\u0275text(177, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "button", 62);
      \u0275\u0275text(179, "Add Stock");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(180, "div", 63)(181, "div", 43)(182, "div", 44)(183, "div", 45)(184, "div", 2)(185, "h4");
      \u0275\u0275text(186, "Edit Stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "button", 46)(188, "span", 47);
      \u0275\u0275text(189, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "form")(191, "div", 48)(192, "div", 49)(193, "div", 50)(194, "div", 51)(195, "label", 52);
      \u0275\u0275text(196, "Warehouse");
      \u0275\u0275elementStart(197, "span", 53);
      \u0275\u0275text(198, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "mat-select", 64)(200, "mat-option", 55);
      \u0275\u0275text(201, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "mat-option", 55);
      \u0275\u0275text(203, "Quaint Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "mat-option", 55);
      \u0275\u0275text(205, "Traditional Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(206, "div", 50)(207, "div", 51)(208, "label", 52);
      \u0275\u0275text(209, "Shop");
      \u0275\u0275elementStart(210, "span", 53);
      \u0275\u0275text(211, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "mat-select", 65)(213, "mat-option", 55);
      \u0275\u0275text(214, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "mat-option", 55);
      \u0275\u0275text(216, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "mat-option", 55);
      \u0275\u0275text(218, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(219, "div", 50)(220, "div", 51)(221, "label", 52);
      \u0275\u0275text(222, "Responsible Person");
      \u0275\u0275elementStart(223, "span", 53);
      \u0275\u0275text(224, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "mat-select", 66)(226, "mat-option", 55);
      \u0275\u0275text(227, "James Kirwin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "mat-option", 55);
      \u0275\u0275text(229, "Francis Chang");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "mat-option", 55);
      \u0275\u0275text(231, "Antonio Engle");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(232, "div", 50)(233, "div", 67)(234, "label", 52);
      \u0275\u0275text(235, "Product");
      \u0275\u0275elementStart(236, "span", 53);
      \u0275\u0275text(237, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div", 57);
      \u0275\u0275element(239, "input", 68)(240, "i", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "div", 50)(242, "div", 70)(243, "div", 29)(244, "table", 71)(245, "thead")(246, "tr")(247, "th");
      \u0275\u0275text(248, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "th");
      \u0275\u0275text(250, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "th");
      \u0275\u0275text(252, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "th");
      \u0275\u0275text(254, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(255, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "tbody")(257, "tr")(258, "td")(259, "div", 72)(260, "a", 73);
      \u0275\u0275element(261, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "a", 75);
      \u0275\u0275text(263, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(264, "td");
      \u0275\u0275text(265, "PT002");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "td");
      \u0275\u0275text(267, "Nike");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "td")(269, "div", 76)(270, "span", 77);
      \u0275\u0275element(271, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275element(272, "input", 79);
      \u0275\u0275elementStart(273, "span", 77);
      \u0275\u0275text(274, "+");
      \u0275\u0275element(275, "i", 80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(276, "td")(277, "div", 81)(278, "a", 82);
      \u0275\u0275element(279, "i", 83);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(280, "div", 60)(281, "button", 61);
      \u0275\u0275text(282, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "button", 62);
      \u0275\u0275text(284, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(285, "div", 84)(286, "div", 85)(287, "div", 44)(288, "div", 86)(289, "div", 87)(290, "form")(291, "div", 88);
      \u0275\u0275element(292, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "h3", 90);
      \u0275\u0275text(294, "Delete Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "p", 91);
      \u0275\u0275text(296, "Are you sure you want to delete product from stock?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "div", 92)(298, "button", 93);
      \u0275\u0275text(299, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "button", 94);
      \u0275\u0275text(301, "Yes, Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(57);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 108 : -1);
    }
  }, dependencies: [MatSortModule, MatSort, MatSortHeader, MatTableModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageStocksComponent, [{
    type: Component,
    args: [{ selector: "app-manage-stocks", standalone: true, imports: [MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Manage Stock</h4>\n      <h6>Manage your stock</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img\n      src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img\n      src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i\n    class="ti ti-circle-plus  me-2"></i>Add Stock</a>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search  feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n              type="search" class="form-control" placeholder="Search" />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Warehouse\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Lavish Warehouse</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Quaint Warehouse </a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Traditional Warehouse</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Cool Warehouse</a>\n          </li>\n        </ul>\n      </div>\n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Store\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Electro Mart</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Quantum Gadgets</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Prime Bazaar</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Gadget World</a>\n          </li>\n        </ul>\n      </div>\n    \n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Product\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple</a>\n          </li>\n        </ul>\n      </div>\n     \n    </div>\n  </div>\n  <div class="card-body">\n    <div class="table-responsive">\n      <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n        <thead class="thead-light">\n          <tr>\n            <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n            <th mat-sort-header="warehouse">Warehouse</th>\n            <th mat-sort-header="shop">Store</th>\n            <th mat-sort-header="product">Product Name</th>\n            <th mat-sort-header="date">Date</th>\n            <th mat-sort-header="person">Person</th>\n            <th mat-sort-header="quantity">Qty</th>\n            <th class="no-sort"></th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (data of tableData; track data) {\n            <tr>\n              <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n              <td>{{data.warehouse}} </td>\n              <td>{{data.store}} </td>\n              <td>\n                <div class="d-flex align-items-center">\n                  <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                    <img src="assets/img/products/{{data.img}}" alt="product">\n                  </a>\n                  <a href="javascript:void(0);">{{data.product}}</a>\n                </div>\n              </td>\n              <td>{{data.date}}</td>\n              <td>\n                <div class="d-flex align-items-center">\n                  <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                    <img src="assets/img/users/{{data.img2}}" alt="product">\n                  </a>\n                  <a href="javascript:void(0);">{{data.person}}</a>\n                </div>\n              </td>\n              <td>{{data.quantity}}</td>\n              <td class="action-table-data">\n                <div class="edit-delete-action">\n                  <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">\n                    <i class="feather icon-edit feather-edit"></i>\n                  </a>\n                  <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">\n                    <i class="feather icon-trash-2 feather-trash-2"></i>\n                  </a>\n                </div>\n              </td>\n            </tr>\n          } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n        </tbody>\n      </table>\n    </div>\n    <app-custom-pagination></app-custom-pagination>\n  </div>\n</div>\n<!-- /product list -->\n\n		<!-- Add Stock -->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog modal-dialog-centered stock-adjust-modal">\n				<div class="modal-content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Stock</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							\n								<form>\n									<div class="modal-body">\n									<div class="row">\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Warehouse <span class="text-danger ms-1">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Choose">\n													<mat-option value="1">Choose</mat-option>\n													<mat-option value="1">Warehouse</mat-option>\n													<mat-option value="1">Quaint Warehouse</mat-option>\n													<mat-option value="1">Traditional Warehouse</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Store <span class="text-danger ms-1">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Choose">\n													<mat-option value="1">Choose</mat-option>\n													<mat-option value="1">Electro Mart</mat-option>\n													<mat-option value="1">Quantum Gadgets</mat-option>\n											    <mat-option value="1">Prime Bazaar</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Responsible Person <span class="text-danger ms-1">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Choose">\n													<mat-option value="1">James Kirwin</mat-option>\n													<mat-option value="1">Francis Chang</mat-option>\n													<mat-option value="1">Antonio Engle</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="search-form mb-0">\n												<label class="form-label">Product <span class="text-danger ms-1">*</span></label>\n												<div class="position-relative">\n													<input type="text" class="form-control" placeholder="Search Product">\n													<i data-feather="search" class="feather icon-search"></i>\n												</div>\n											</div>\n										</div>\n									</div>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Stock</button>\n							</div>\n						</form>\n\n				</div>\n			</div>\n		</div>\n		<!-- /Add Stock -->\n\n		<!-- Edit Stock -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered stock-adjust-modal">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Stock</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Warehouse<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Warehouse">\n											<mat-option value="1">Warehouse</mat-option>\n											<mat-option value="1">Quaint Warehouse</mat-option>\n											<mat-option value="1">Traditional Warehouse</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Shop<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Electro Mart">\n											<mat-option value="1">Electro Mart</mat-option>\n											<mat-option value="1">Quantum Gadgets</mat-option>\n											<mat-option value="1">Prime Bazaar</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Responsible Person<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="James Kirwin">\n											<mat-option value="1">James Kirwin</mat-option>\n													<mat-option value="1">Francis Chang</mat-option>\n													<mat-option value="1">Antonio Engle</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="search-form mb-3">\n										<label class="form-label">Product<span class="text-danger ms-1">*</span></label>\n										<div class="position-relative">\n										<input type="text" class="form-control" placeholder="Select Product" value="Nike Jordan">\n										<i data-feather="search" class="feather-search"></i>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="modal-body-table">\n										<div class="table-responsive">\n											<table class="table  datanew">\n												<thead>\n													<tr>\n														<th>Product</th>\n														<th>SKU</th>\n														<th>Category</th>\n														<th>Qty</th>\n														<th class="no-sort"></th>\n													</tr>\n												</thead>\n												<tbody>\n													<tr>\n														<td>\n															<div class="d-flex align-items-center">\n																<a href="javascript:void(0);" class="avatar avatar-md me-2">\n																	<img src="assets/img/products/stock-img-02.png" alt="product">\n																</a>\n																<a href="javascript:void(0);">Nike Jordan</a>\n															</div>												\n														</td>\n														<td>PT002</td>\n														<td>Nike</td>\n														<td>\n															<div class="product-quantity bg-gray-transparent border-0">\n																<span class="quantity-btn"><i data-feather="minus-circle" class="feather-search"></i></span>\n																<input type="text" class="quntity-input bg-transparent" value="2">\n																<span class="quantity-btn">+<i data-feather="plus-circle" class="plus-circle"></i></span>\n															</div>\n														</td>\n														<td>\n															<div class="d-flex align-items-center justify-content-between edit-delete-action">\n																<a class="d-flex align-items-center border rounded p-2" href="javascript:void(0);">\n																	<i data-feather="trash-2" class="feather-trash-2"></i>\n																</a>\n															</div>\n															\n														</td>\n													</tr>\n												</tbody>\n											</table>\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Stock -->\n\n		<!-- Delete -->\n		<div class="modal fade modal-default" id="delete">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-body p-0">\n						<div class="success-wrap text-center">\n							<form>\n								<div class="icon-success bg-danger-transparent text-danger mb-2">\n									<i class="ti ti-trash"></i>\n								</div>\n								<h3 class="mb-2">Delete Stock</h3>\n								<p class="fs-16 mb-3">Are you sure you want to delete product from stock?</p>\n								<div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">\n									<button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>\n									<button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Delete -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageStocksComponent, { className: "ManageStocksComponent", filePath: "src/app/features/pages/stock/manage-stocks/manage-stocks.component.ts", lineNumber: 31 });
})();
export {
  ManageStocksComponent
};
//# sourceMappingURL=chunk-66AK3SQ3.js.map
