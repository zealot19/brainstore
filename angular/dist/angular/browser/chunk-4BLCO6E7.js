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

// src/app/features/pages/stock/stock-transfer/stock-transfer.component.ts
var _c0 = () => ({ standalone: true });
function StockTransferComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function StockTransferComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function StockTransferComponent_For_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 124)(3, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function StockTransferComponent_For_115_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 39);
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
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 126)(18, "div", 127)(19, "a", 128);
    \u0275\u0275element(20, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 130);
    \u0275\u0275element(22, "i", 131);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.fromWarehouse);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.toWarehouse);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.noOfProducts, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.quantityTransferred, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.refNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
  }
}
function StockTransferComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 132);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
function StockTransferComponent_For_309_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275property("value", data_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3.value, " ");
  }
}
function StockTransferComponent_For_316_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275property("value", data_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4.value, " ");
  }
}
function StockTransferComponent_For_323_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275property("value", data_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r5.value, " ");
  }
}
var StockTransferComponent = class _StockTransferComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  cartValue = [4, 4];
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
  }
  editor;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  // pagination variables
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  skip = 0;
  limit = this.pageSize;
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
        if (this.router.url == this.routes.stockTransfer) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStocks().subscribe((apiRes) => {
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
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
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
    { value: "Warehouse From" },
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" },
    { value: "Traditional Warehouse" },
    { value: "Cool Warehouse" }
  ];
  selectedList3 = [
    { value: "Warehouse To" },
    { value: "Selosy" },
    { value: "Logerro" },
    { value: "Vesloo" },
    { value: "Crompy" }
  ];
  selectedList4 = [
    { value: "Choose" },
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList5 = [
    { value: "Choose" },
    { value: "Selosy" },
    { value: "Logerro" }
  ];
  selectedList6 = [
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList7 = [
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList8 = [
    { value: "Selosy" },
    { value: "Logerro" }
  ];
  selectedList9 = [
    { value: "Choose" },
    { value: "Lavish Warehouse" },
    { value: "Lobar Handy" },
    { value: "Quaint Warehouse" }
  ];
  selectedList11 = [
    { value: "Choose" },
    { value: "North Zone Warehouse" },
    { value: "Nova Storage Hub" },
    { value: "Cool Warehouse" }
  ];
  selectedList10 = [
    { value: "Choose" },
    { value: "Sent" },
    { value: "Pending" }
  ];
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
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static \u0275fac = function StockTransferComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockTransferComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockTransferComponent, selectors: [["app-stock-transfer"]], decls: 377, vars: 21, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "page-btn", "import"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-notes", 1, "btn", "btn-secondary", "color"], [1, "feather", "icon-download", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "ware"], ["mat-sort-header", "house"], ["mat-sort-header", "products"], ["mat-sort-header", "transfer"], ["mat-sort-header", "ref"], ["mat-sort-header", "date"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-12"], ["type", "text", 1, "form-control"], [1, "mb-3", "search-form", "mb-3"], ["type", "text", "placeholder", "Select Product", 1, "form-control"], ["data-feather", "search", 1, "feather-search"], [1, "search-form", "mb-0"], [1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit-units", 1, "modal", "fade"], ["placeholder", "Lobar Handy", 1, "custom-mat-select", "select"], ["placeholder", "Selosy", 1, "custom-mat-select", "select"], ["type", "text", "value", "32434545", 1, "form-control"], [1, "search-form", "mb-3"], [1, "position-relative"], ["type", "text", "placeholder", "Select Product", "value", "Nike Jordan", 1, "form-control"], [1, "modal-body-table"], [1, "table", "datanew"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["href", "javascript:void(0);"], [1, "product-quantity", "bg-gray-transparent", "border-0"], [1, "quantity-btn"], ["data-feather", "minus-circle", 1, "feather-search"], ["type", "text", "value", "2", 1, "quntity-input", "bg-transparent"], ["data-feather", "plus-circle", 1, "plus-circle"], [1, "edit-delete-action", "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "p-2", "d-flex", "align-items-center", "justify-content-center", "border", "rounded"], ["data-feather", "trash-2", 1, "feather-trash-2"], [1, "mb-3", "search-form", "mb-0"], ["id", "view-notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "input-blocks"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "modal-footer-btn", "download-file"], ["href", "javascript:void(0)", 1, "btn", "btn-submit"], [1, "input-blocks", "image-upload-down"], [1, "image-upload", "download"], ["type", "file"], [1, "image-uploads"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "mb-3", "summer-description-box", "transfer"], [3, "editor"], [3, "editor", "toolbar"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0); ", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function StockTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Stock Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your stock transfer");
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
      \u0275\u0275listener("click", function StockTransferComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, StockTransferComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, StockTransferComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add New");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15)(26, "a", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275text(28, "Import Transfer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "a", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24)(36, "label")(37, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function StockTransferComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StockTransferComponent_Template_input_ngModelChange_37_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 26)(39, "div", 27)(40, "a", 28);
      \u0275\u0275text(41, " From Warehouse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 29)(43, "li")(44, "a", 30);
      \u0275\u0275text(45, "Lavish Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 30);
      \u0275\u0275text(48, "Quaint Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 30);
      \u0275\u0275text(51, "Traditional Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 30);
      \u0275\u0275text(54, "Cool Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 27)(56, "a", 28);
      \u0275\u0275text(57, " To Warehouse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul", 29)(59, "li")(60, "a", 30);
      \u0275\u0275text(61, "North Zone Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 30);
      \u0275\u0275text(64, "Nova Storage Hub");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 30);
      \u0275\u0275text(67, "Cool Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 30);
      \u0275\u0275text(70, "Retail Supply Hub");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 31)(72, "a", 28);
      \u0275\u0275text(73, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "ul", 29)(75, "li")(76, "a", 30);
      \u0275\u0275text(77, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "li")(79, "a", 30);
      \u0275\u0275text(80, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "li")(82, "a", 30);
      \u0275\u0275text(83, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "li")(85, "a", 30);
      \u0275\u0275text(86, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li")(88, "a", 30);
      \u0275\u0275text(89, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(90, "div", 32)(91, "div", 33)(92, "table", 34);
      \u0275\u0275listener("matSortChange", function StockTransferComponent_Template_table_matSortChange_92_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(93, "thead", 35)(94, "tr")(95, "th", 36)(96, "label", 37);
      \u0275\u0275listener("click", function StockTransferComponent_Template_label_click_96_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(97, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function StockTransferComponent_Template_input_ngModelChange_97_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "th", 40);
      \u0275\u0275text(100, "From Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 41);
      \u0275\u0275text(102, "To Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 42);
      \u0275\u0275text(104, "No of Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 43);
      \u0275\u0275text(106, "Quantity transfered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 44);
      \u0275\u0275text(108, "Ref Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 45);
      \u0275\u0275text(110, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 36);
      \u0275\u0275text(112, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "tbody");
      \u0275\u0275repeaterCreate(114, StockTransferComponent_For_115_Template, 23, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(116, StockTransferComponent_Conditional_116_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(117, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 46)(119, "div", 47)(120, "div", 48)(121, "div", 49)(122, "div", 2)(123, "h4");
      \u0275\u0275text(124, "Add Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "button", 50)(126, "span", 51);
      \u0275\u0275text(127, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "form")(129, "div", 52)(130, "div", 53)(131, "div", 54)(132, "div", 55)(133, "label", 56);
      \u0275\u0275text(134, "Warehouse From ");
      \u0275\u0275elementStart(135, "span", 57);
      \u0275\u0275text(136, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "mat-select", 58)(138, "mat-option", 59);
      \u0275\u0275text(139, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 59);
      \u0275\u0275text(141, "Lobar Handy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "mat-option", 59);
      \u0275\u0275text(143, "Quaint Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(144, "div", 54)(145, "div", 55)(146, "label", 56);
      \u0275\u0275text(147, "Warehouse To ");
      \u0275\u0275elementStart(148, "span", 57);
      \u0275\u0275text(149, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "mat-select", 58)(151, "mat-option", 59);
      \u0275\u0275text(152, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "mat-option", 59);
      \u0275\u0275text(154, "Selosy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "mat-option", 59);
      \u0275\u0275text(156, "Logerro");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(157, "div", 60)(158, "div", 55)(159, "label", 56);
      \u0275\u0275text(160, "Reference Number ");
      \u0275\u0275elementStart(161, "span", 57);
      \u0275\u0275text(162, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(163, "input", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 60)(165, "div", 62)(166, "label", 56);
      \u0275\u0275text(167, "Product ");
      \u0275\u0275elementStart(168, "span", 57);
      \u0275\u0275text(169, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(170, "input", 63)(171, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 60)(173, "div", 65)(174, "label", 56);
      \u0275\u0275text(175, "Notes ");
      \u0275\u0275elementStart(176, "span", 57);
      \u0275\u0275text(177, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(178, "textarea", 66);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(179, "div", 67)(180, "button", 68);
      \u0275\u0275text(181, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "button", 69);
      \u0275\u0275text(183, "Create");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(184, "div", 70)(185, "div", 47)(186, "div", 48)(187, "div", 49)(188, "div", 2)(189, "h4");
      \u0275\u0275text(190, "Edit Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "button", 50)(192, "span", 51);
      \u0275\u0275text(193, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "form")(195, "div", 52)(196, "div", 53)(197, "div", 54)(198, "div", 55)(199, "label", 56);
      \u0275\u0275text(200, "Warehouse From");
      \u0275\u0275elementStart(201, "span", 57);
      \u0275\u0275text(202, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "mat-select", 71)(204, "mat-option", 59);
      \u0275\u0275text(205, "Lobar Handy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "mat-option", 59);
      \u0275\u0275text(207, "Quaint Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(208, "div", 54)(209, "div", 55)(210, "label", 56);
      \u0275\u0275text(211, "Warehouse To");
      \u0275\u0275elementStart(212, "span", 57);
      \u0275\u0275text(213, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "mat-select", 72)(215, "mat-option", 59);
      \u0275\u0275text(216, "Selosy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "mat-option", 59);
      \u0275\u0275text(218, "Logerro");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(219, "div", 60)(220, "div", 55)(221, "label", 56);
      \u0275\u0275text(222, "Reference No");
      \u0275\u0275elementStart(223, "span", 57);
      \u0275\u0275text(224, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(225, "input", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "div", 60)(227, "div", 74)(228, "label", 56);
      \u0275\u0275text(229, "Product");
      \u0275\u0275elementStart(230, "span", 57);
      \u0275\u0275text(231, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "div", 75);
      \u0275\u0275element(233, "input", 76)(234, "i", 64);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "div", 60)(236, "div", 77)(237, "div", 33)(238, "table", 78)(239, "thead")(240, "tr")(241, "th");
      \u0275\u0275text(242, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "th");
      \u0275\u0275text(244, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "th");
      \u0275\u0275text(246, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "th");
      \u0275\u0275text(248, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "th");
      \u0275\u0275text(250, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(251, "tbody")(252, "tr")(253, "td")(254, "div", 79)(255, "a", 80);
      \u0275\u0275element(256, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "a", 82);
      \u0275\u0275text(258, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(259, "td");
      \u0275\u0275text(260, "PT002");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "td");
      \u0275\u0275text(262, "Nike");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "td")(264, "div", 83)(265, "span", 84);
      \u0275\u0275element(266, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "input", 86);
      \u0275\u0275elementStart(268, "span", 84);
      \u0275\u0275text(269, "+");
      \u0275\u0275element(270, "i", 87);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "td")(272, "div", 88)(273, "a", 89);
      \u0275\u0275element(274, "i", 90);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(275, "div", 60)(276, "div", 91)(277, "label", 56);
      \u0275\u0275text(278, "Notes");
      \u0275\u0275elementStart(279, "span", 57);
      \u0275\u0275text(280, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "textarea", 66);
      \u0275\u0275text(282, "The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(283, "div", 67)(284, "button", 68);
      \u0275\u0275text(285, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "button", 69);
      \u0275\u0275text(287, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(288, "div", 92)(289, "div", 93)(290, "div", 48)(291, "div", 94)(292, "div", 95)(293, "div", 96)(294, "div", 2)(295, "h4");
      \u0275\u0275text(296, "Import Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "button", 50)(298, "span", 51);
      \u0275\u0275text(299, "\xD7");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(300, "form")(301, "div", 97)(302, "div", 53)(303, "div", 98)(304, "div", 99)(305, "label");
      \u0275\u0275text(306, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "mat-select", 100);
      \u0275\u0275twoWayListener("ngModelChange", function StockTransferComponent_Template_mat_select_ngModelChange_307_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(308, StockTransferComponent_For_309_Template, 2, 2, "mat-option", 101, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(310, "div", 98)(311, "div", 99)(312, "label");
      \u0275\u0275text(313, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "mat-select", 100);
      \u0275\u0275twoWayListener("ngModelChange", function StockTransferComponent_Template_mat_select_ngModelChange_314_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedList11, $event) || (ctx.selectedList11 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(315, StockTransferComponent_For_316_Template, 2, 2, "mat-option", 101, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "div", 98)(318, "div", 99)(319, "label");
      \u0275\u0275text(320, "Satus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "mat-select", 100);
      \u0275\u0275twoWayListener("ngModelChange", function StockTransferComponent_Template_mat_select_ngModelChange_321_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(322, StockTransferComponent_For_323_Template, 2, 2, "mat-option", 101, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(324, "div", 102)(325, "div", 53)(326, "div")(327, "div", 103)(328, "a", 104);
      \u0275\u0275text(329, "Download Sample File");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(330, "div", 60)(331, "div", 105)(332, "label");
      \u0275\u0275text(333, " Upload CSV File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div", 106);
      \u0275\u0275element(335, "input", 107);
      \u0275\u0275elementStart(336, "div", 108);
      \u0275\u0275element(337, "img", 109);
      \u0275\u0275elementStart(338, "h4");
      \u0275\u0275text(339, "Drag and drop a ");
      \u0275\u0275elementStart(340, "span");
      \u0275\u0275text(341, "file to upload");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(342, "div", 102)(343, "div", 55)(344, "label", 56);
      \u0275\u0275text(345, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275element(346, "input", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(347, "div", 60)(348, "div", 110)(349, "label", 56);
      \u0275\u0275text(350, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "ngx-editor", 111);
      \u0275\u0275element(352, "ngx-editor-menu", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "p");
      \u0275\u0275text(354, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(355, "div", 67)(356, "button", 68);
      \u0275\u0275text(357, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "button", 113);
      \u0275\u0275text(359, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(360, "div", 114)(361, "div", 93)(362, "div", 48)(363, "div", 115)(364, "div", 116)(365, "form")(366, "div", 117);
      \u0275\u0275element(367, "i", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "h3", 119);
      \u0275\u0275text(369, "Delete Stock Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "p", 120);
      \u0275\u0275text(371, "Are you sure you want to delete stock transfer?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "div", 121)(373, "button", 122);
      \u0275\u0275text(374, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "button", 123);
      \u0275\u0275text(376, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c0));
      \u0275\u0275advance(60);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 116 : -1);
      \u0275\u0275advance(191);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue9);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList9);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedList11);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList9);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue10);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList10);
      \u0275\u0275advance(29);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    }
  }, dependencies: [MatSortModule, MatSort, MatSortHeader, MatTableModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NgxEditorModule, NgxEditorComponent, MenuComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockTransferComponent, [{
    type: Component,
    args: [{ selector: "app-stock-transfer", standalone: true, imports: [MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule, NgxEditorModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Stock Transfer</h4>\n      <h6>Manage your stock transfer</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf" matTooltip="Pdf"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/pdf.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel" matTooltip="Excel"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/excel.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Refresh"\n        matTooltip="Refresh"\n        matTooltipPosition="above"\n        ><i class="ti ti-refresh"></i\n      ></a>\n    </li>\n    <li>\n      <a\n        (click)="toggleCollapse()" [class.active]="isCollapsed"\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Collapse"\n        matTooltip="Collapse"\n        matTooltipPosition="above"\n        id="collapse-header"\n        > @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a\n      href="javascript:void(0);"\n      class="btn btn-primary"\n      data-bs-toggle="modal"\n      data-bs-target="#add-units"\n      ><i class="ti ti-circle-plus me-2"></i>Add New</a\n      >\n    </div>\n    <div class="page-btn import">\n      <a\n        href="javascript:void(0);"\n        class="btn btn-secondary color"\n        data-bs-toggle="modal"\n        data-bs-target="#view-notes"\n        ><i class="feather icon-download me-2"></i>Import Transfer</a\n        >\n      </div>\n    </div>\n    <!-- /product list -->\n    <div class="card table-list-card">\n      <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n          <div class="search-input">\n            <a href="javascript:void(0);" class="btn btn-searchset"\n              ><i class="feather icon-search feather-search"></i\n            ></a>\n            <div class="dataTables_filter">\n              <label>\n                <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                  type="search" class="form-control" placeholder="Search..." />\n                </label>\n              </div>\n            </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n          <div class="dropdown me-2">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              From Warehouse\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Lavish Warehouse</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Quaint Warehouse</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Traditional Warehouse</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Cool Warehouse</a>\n              </li>\n            </ul>\n          </div>\n          <div class="dropdown me-2">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              To Warehouse\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">North Zone Warehouse</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Nova Storage Hub</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Cool Warehouse</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Retail Supply Hub</a>\n              </li>\n            </ul>\n          </div>\n          <div class="dropdown">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              Sort By : Last 7 Days\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="card-body">\n                            <div class="table-responsive">\n                              <table matSort (matSortChange)="sortData($event)" class="table datanew">\n                                <thead class="thead-light">\n                                  <tr>\n                                    <th class="no-sort">\n                                      <label class="checkboxs"   (click)="selectAll(initChecked)">\n                                        <input type="checkbox" id="select-all"   [(ngModel)]="initChecked" />\n                                        <span class="checkmarks"></span>\n                                      </label>\n                                    </th>\n                                    <th mat-sort-header="ware">From Warehouse</th>\n                                    <th mat-sort-header="house">To Warehouse</th>\n                                    <th mat-sort-header="products">No of Products</th>\n                                    <th mat-sort-header="transfer">Quantity transfered</th>\n                                    <th mat-sort-header="ref">Ref Number</th>\n                                    <th mat-sort-header="date">Date</th>\n                                    <th class="no-sort">Action</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  @for (data of tableData; track data) {\n                                    <tr>\n                                      <td>\n                                        <label class="checkboxs"  >\n                                          <input type="checkbox"  [(ngModel)]="data.isSelected"/>\n                                          <span class="checkmarks"></span>\n                                        </label>\n                                      </td>\n                                      <td>{{ data.fromWarehouse }}</td>\n                                      <td>{{ data.toWarehouse }}</td>\n                                      <td>\n                                        {{ data.noOfProducts }}\n                                      </td>\n                                      <td>\n                                        {{ data.quantityTransferred }}\n                                      </td>\n                                      <td>{{ data.refNumber }}</td>\n                                      <td>{{ data.date }}</td>\n                                      <td class="action-table-data">\n                                        <div class="edit-delete-action">\n                                          <a\n                                            class="me-2 p-2"\n                                            href="javascript:void(0);"\n                                            data-bs-toggle="modal"\n                                            data-bs-target="#edit-units"\n                                            >\n                                            <i class="feather icon-edit feather-edit"></i>\n                                          </a>\n                                          <a class=" p-2" href="javascript:void(0); " data-bs-toggle="modal" data-bs-target="#delete">\n                                            <i class="feather icon-trash-2 feather-trash-2"></i>\n                                          </a>\n                                        </div>\n                                      </td>\n                                    </tr>\n                                  } \n                                  @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n                                </tbody>\n                              </table>\n\n                            </div>\n                            <app-custom-pagination></app-custom-pagination>\n                          </div>\n                        </div>\n                        <!-- /product list -->\n		<!-- Add Stock -->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Transfer</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Warehouse From <span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Lobar Handy</mat-option>\n											<mat-option value="1">Quaint Warehouse</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Warehouse To <span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Selosy</mat-option>\n											<mat-option value="1">Logerro</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Reference Number <span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3 search-form mb-3">\n										<label class="form-label">Product <span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" placeholder="Select Product">\n										<i data-feather="search" class="feather-search"></i>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="search-form mb-0">\n										<label class="form-label">Notes <span class="text-danger ms-1">*</span></label>\n										<textarea class="form-control"></textarea>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Create</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Stock -->\n\n		<!-- Edit Stock -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Transfer</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Warehouse From<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Lobar Handy">\n											<mat-option value="1">Lobar Handy</mat-option>\n											<mat-option value="1">Quaint Warehouse</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Warehouse To<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Selosy">\n											<mat-option value="1">Selosy</mat-option>\n											<mat-option value="1">Logerro</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Reference No<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="32434545">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="search-form mb-3">\n										<label class="form-label">Product<span class="text-danger ms-1">*</span></label>\n                    <div class="position-relative">\n										<input type="text" class="form-control" placeholder="Select Product" value="Nike Jordan">\n										<i data-feather="search" class="feather-search"></i>\n                    </div>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="modal-body-table">\n										<div class="table-responsive">\n											<table class="table  datanew">\n												<thead>\n													<tr>\n														<th>Product</th>\n														<th>SKU</th>\n														<th>Category</th>\n														<th>Qty</th>\n														<th>Action</th>\n													</tr>\n												</thead>\n												<tbody>\n													<tr>\n														<td>\n															<div class="d-flex align-items-center">\n																<a href="javascript:void(0);" class="avatar avatar-md me-2">\n																	<img src="assets/img/products/stock-img-02.png" alt="product">\n																</a>\n																<a href="javascript:void(0);">Nike Jordan</a>\n															</div>												\n														</td>\n														<td>PT002</td>\n														<td>Nike</td>\n														<td>\n															<div class="product-quantity bg-gray-transparent border-0">\n																<span class="quantity-btn"><i data-feather="minus-circle" class="feather-search"></i></span>\n																<input type="text" class="quntity-input bg-transparent" value="2">\n																<span class="quantity-btn">+<i data-feather="plus-circle" class="plus-circle"></i></span>\n															</div>\n														</td>\n														<td>\n															<div class="edit-delete-action d-flex align-items-center justify-content-center">\n																<a class="p-2 d-flex align-items-center justify-content-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">\n																	<i data-feather="trash-2" class="feather-trash-2"></i>\n																</a>\n															</div>\n														</td>\n													</tr>\n												</tbody>\n											</table>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3 search-form mb-0">\n										<label class="form-label">Notes<span class="text-danger ms-1">*</span></label>\n										<textarea class="form-control">The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. </textarea>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Stock -->\n\n                                <!-- Import Transfer -->\n                                <div class="modal fade" id="view-notes">\n                                  <div class="modal-dialog modal-dialog-centered">\n                                    <div class="modal-content">\n                                      <div class="page-wrapper-new p-0">\n                                        <div class="content">\n                                          <div class="modal-header border-0 custom-modal-header">\n                                            <div class="page-title">\n                                              <h4>Import Transfer</h4>\n                                            </div>\n                                            <button\n                                              type="button"\n                                              class="close"\n                                              data-bs-dismiss="modal"\n                                              aria-label="Close"\n                                              >\n                                              <span aria-hidden="true">&times;</span>\n                                            </button>\n                                          </div>\n                                        </div>\n                                        <form>\n                                            <div class="modal-body custom-modal-body">\n                                            <div class="row">\n                                              <div class="col-lg-4 col-sm-6 col-12">\n                                                <div class="input-blocks">\n                                                  <label>From</label>\n\n                                                  <mat-select\n                                                    [(ngModel)]="selectedValue9"\n                                                    [ngModelOptions]="{ standalone: true }"\n                                                    class="select custom-mat-select"\n                                                    placeholder="Choose"\n                                                    >\n                                                    @for (data of selectedList9; track data) {\n                                                      <mat-option\n                                                        [value]="data.value"\n                                                        >\n                                                        {{ data.value }}\n                                                      </mat-option>\n                                                    }\n                                                  </mat-select>\n                                                </div>\n                                              </div>\n                                              <div class="col-lg-4 col-sm-6 col-12">\n                                                <div class="input-blocks">\n                                                  <label>To</label>\n\n                                                  <mat-select\n                                                    [(ngModel)]="selectedList11"\n                                                    [ngModelOptions]="{ standalone: true }"\n                                                    class="select custom-mat-select"\n                                                    placeholder="Choose"\n                                                    >\n                                                    @for (data of selectedList9; track data) {\n                                                      <mat-option\n                                                        [value]="data.value"\n                                                        >\n                                                        {{ data.value }}\n                                                      </mat-option>\n                                                    }\n                                                  </mat-select>\n                                                </div>\n                                              </div>\n                                              <div class="col-lg-4 col-sm-6 col-12">\n                                                <div class="input-blocks">\n                                                  <label>Satus</label>\n\n                                                  <mat-select\n                                                    [(ngModel)]="selectedValue10"\n                                                    [ngModelOptions]="{ standalone: true }"\n                                                    class="select custom-mat-select"\n                                                    placeholder="Choose"\n                                                    >\n                                                    @for (data of selectedList10; track data) {\n                                                      <mat-option\n                                                        [value]="data.value"\n                                                        >\n                                                        {{ data.value }}\n                                                      </mat-option>\n                                                    }\n                                                  </mat-select>\n                                                </div>\n                                              </div>\n                                              <div class="col-lg-12 col-sm-6 col-12">\n                                                <div class="row">\n                                                  <div>\n                                                    <div class="modal-footer-btn download-file">\n                                                      <a href="javascript:void(0)" class="btn btn-submit"\n                                                        >Download Sample File</a\n                                                        >\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                                <div class="col-lg-12">\n                                                  <div class="input-blocks image-upload-down">\n                                                    <label> Upload CSV File</label>\n                                                    <div class="image-upload download">\n                                                      <input type="file" />\n                                                      <div class="image-uploads">\n                                                        <img src="assets/img/download-img.png" alt="img" />\n                                                        <h4>Drag and drop a <span>file to upload</span></h4>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                                <div class="col-lg-12 col-sm-6 col-12">\n                                                  <div class="mb-3">\n                                                    <label class="form-label">Shipping</label>\n                                                    <input type="text" class="form-control" />\n                                                  </div>\n                                                </div>\n                                              </div>\n                                              <div class="col-lg-12">\n                                                <div class="mb-3 summer-description-box transfer">\n                                                  <label class="form-label">Description</label>\n                                                  <ngx-editor [editor]="editor">\n                                                    <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n                                                    </ngx-editor-menu>\n                                                    \n                                                  </ngx-editor>\n                                                  <p>Maximum 60 Characters</p>\n                                                </div>\n                                              </div>\n                                              \n                                            </div>\n                                            <div class="modal-footer">\n                                              <button\n                                                type="button"\n                                                class="btn btn-secondary me-2"\n                                                data-bs-dismiss="modal"\n                                                >\n                                                Cancel\n                                              </button>\n                                              <button type="submit" class="btn btn-submit"  data-bs-dismiss="modal">Submit</button>\n                                            </div>\n                                          </form>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <!-- /Import Transfer -->\n\n\n                                  		<!-- Delete -->\n		<div class="modal fade modal-default" id="delete">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-body p-0">\n						<div class="success-wrap text-center">\n							<form>\n								<div class="icon-success bg-danger-transparent text-danger mb-2">\n									<i class="ti ti-trash"></i>\n								</div>\n								<h3 class="mb-2">Delete Stock Transfer</h3>\n								<p class="fs-16 mb-3">Are you sure you want to delete stock transfer?</p>\n								<div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">\n									<button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>\n									<button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Delete -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockTransferComponent, { className: "StockTransferComponent", filePath: "src/app/features/pages/stock/stock-transfer/stock-transfer.component.ts", lineNumber: 30 });
})();
export {
  StockTransferComponent
};
//# sourceMappingURL=chunk-4BLCO6E7.js.map
