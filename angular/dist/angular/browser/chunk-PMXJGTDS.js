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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/inventory/barcode/barcode.component.ts
var _c0 = () => ({ standalone: true });
function BarcodeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function BarcodeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function BarcodeComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("value", data_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.value, " ");
  }
}
function BarcodeComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("value", data_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.value, " ");
  }
}
function BarcodeComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 81)(3, "a", 82);
    \u0275\u0275element(4, "img", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 85)(13, "span", 86);
    \u0275\u0275listener("click", function BarcodeComponent_For_66_Template_span_click_13_listener() {
      const \u0275$index_121_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.reducePos(\u0275$index_121_r4));
    });
    \u0275\u0275element(14, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function BarcodeComponent_For_66_Template_input_ngModelChange_15_listener($event) {
      const \u0275$index_121_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.cartValue[\u0275$index_121_r4], $event) || (ctx_r4.cartValue[\u0275$index_121_r4] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 86);
    \u0275\u0275listener("click", function BarcodeComponent_For_66_Template_span_click_16_listener() {
      const \u0275$index_121_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addPos(\u0275$index_121_r4));
    });
    \u0275\u0275element(17, "i", 89);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td", 90)(19, "div", 91)(20, "a", 92);
    \u0275\u0275element(21, "i", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const \u0275$index_121_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r6.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6.code);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.cartValue[\u0275$index_121_r4]);
  }
}
function BarcodeComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
function BarcodeComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    \u0275\u0275property("value", data_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r7.value, " ");
  }
}
var BarcodeComponent = class _BarcodeComponent {
  data;
  pagination;
  router;
  sidebar;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  routes = routes;
  selectedList1 = [
    { value: "Choose" },
    { value: "Manufacture" },
    { value: "Transport" },
    { value: "Customs" }
  ];
  selectedList2 = [
    { value: "Choose" },
    { value: "Online" },
    { value: "Offline" }
  ];
  selectedList3 = [
    { value: "Choose" },
    { value: "Recent1" },
    { value: "Recent2" }
  ];
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
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.barCode) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBarcode().subscribe((apiRes) => {
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
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function BarcodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarcodeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarcodeComponent, selectors: [["app-barcode"]], decls: 198, vars: 17, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "d-flex", "align-items-center"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top"], ["matTooltip", "Refresh", "matTooltipPosition", "above", 1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "matTooltip", "Collapse", "matTooltipPosition", "above", "data-bs-placement", "top", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "barcode-content-list"], [1, "row"], [1, "col-lg-6", "col-12"], [1, "row", "seacrh-barcode-item"], [1, "col-sm-6", "seacrh-barcode-item-one"], [1, "form-label"], [1, "text-danger"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "col-lg-6"], [1, "input-blocks", "search-form", "seacrh-barcode-item"], [1, "searchInput"], [1, "position-relative"], ["type", "text", "placeholder", "Search Product by Code", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "resultBox"], [1, "fas", "fa-search"], [1, "col-lg-12"], [1, "modal-body-table", "search-modal-header"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "product"], ["mat-sort-header", "sku"], ["mat-sort-header", "code"], ["mat-sort-header", "qty"], [1, "text-center", "no-sort"], [1, "paper-search-size"], [1, "row", "align-items-center"], [1, "mb-0"], [1, "col-lg-6", "pt-3"], [1, "col-sm-4"], [1, "search-toggle-list"], [1, "input-blocks", "m-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user7", "checked", "", 1, "check"], ["for", "user7", 1, "checktoggle", "mb-0"], ["type", "checkbox", "id", "user8", "checked", "", 1, "check"], ["for", "user8", 1, "checktoggle", "mb-0"], ["type", "checkbox", "id", "user9", "checked", "", 1, "check"], ["for", "user9", 1, "checktoggle", "mb-0"], [1, "search-barcode-button"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#prints-barcode", 1, "btn", "btn-submit", "me-2"], [1, "fas", "fa-eye", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "me-2"], [1, "fas", "fa-power-off", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-danger"], [1, "fas", "fa-print", "me-2"], ["id", "prints-barcode", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "d-flex", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "btn-cancel", "close-btn"], [1, "barcode-scan-header"], [1, "barcode-scanner-link", "text-center"], [1, "barscaner-img"], ["src", "./assets/img/barcode/barcode-01.png", "alt", "Barcode", 1, "img-fluid"], ["src", "./assets/img/barcode/barcode-02.png", "alt", "Barcode", 1, "img-fluid"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "product-quantity"], [1, "quantity-btn", 3, "click"], [1, "feather", "icon-minus-circle", "feather-search"], ["type", "text", "value", "4", 1, "quntity-input", 3, "ngModelChange", "ngModel"], [1, "ti", "ti-circle-plus", "plus-circle"], [1, "action-table-data", "justify-content-center"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "barcode-delete-icon"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function BarcodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Print Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your barcodes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 3)(8, "ul", 4)(9, "li")(10, "a", 5);
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 7);
      \u0275\u0275listener("click", function BarcodeComponent_Template_a_click_13_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(14, BarcodeComponent_Conditional_14_Template, 1, 0, "i", 8);
      \u0275\u0275conditionalCreate(15, BarcodeComponent_Conditional_15_Template, 1, 0, "i", 8);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(16, "div", 9)(17, "form")(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "label", 14);
      \u0275\u0275text(23, "Warehouse");
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "mat-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function BarcodeComponent_Template_mat_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(27, BarcodeComponent_For_28_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 13)(30, "label", 14);
      \u0275\u0275text(31, "Store");
      \u0275\u0275elementStart(32, "span", 15);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "mat-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function BarcodeComponent_Template_mat_select_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(35, BarcodeComponent_For_36_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 10)(38, "div", 18)(39, "div", 19)(40, "div", 20)(41, "label", 14);
      \u0275\u0275text(42, "Product");
      \u0275\u0275elementStart(43, "span", 15);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 21)(46, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function BarcodeComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BarcodeComponent_Template_input_ngModelChange_46_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "div", 23)(48, "i", 24);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(49, "div", 25)(50, "div", 26)(51, "div", 27)(52, "table", 28);
      \u0275\u0275listener("matSortChange", function BarcodeComponent_Template_table_matSortChange_52_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(53, "thead")(54, "tr")(55, "th", 29);
      \u0275\u0275text(56, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 30);
      \u0275\u0275text(58, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 31);
      \u0275\u0275text(60, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 32);
      \u0275\u0275text(62, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275repeaterCreate(65, BarcodeComponent_For_66_Template, 22, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(67, BarcodeComponent_Conditional_67_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(68, "div", 34)(69, "div", 35)(70, "div", 18)(71, "form", 36)(72, "label", 14);
      \u0275\u0275text(73, "Paper Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function BarcodeComponent_Template_mat_select_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(75, BarcodeComponent_For_76_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 37)(78, "div", 10)(79, "div", 38)(80, "div", 39)(81, "p");
      \u0275\u0275text(82, "Show Store Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 40)(84, "div", 41);
      \u0275\u0275element(85, "input", 42)(86, "label", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "div", 38)(88, "div", 39)(89, "p");
      \u0275\u0275text(90, "Show Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 40)(92, "div", 41);
      \u0275\u0275element(93, "input", 44)(94, "label", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "div", 38)(96, "div", 39)(97, "p");
      \u0275\u0275text(98, "Show Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 40)(100, "div", 41);
      \u0275\u0275element(101, "input", 46)(102, "label", 47);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(103, "div", 48)(104, "a", 49)(105, "span");
      \u0275\u0275element(106, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275text(107, " Generate Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "a", 51)(109, "span");
      \u0275\u0275element(110, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275text(111, " Reset Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "a", 53)(113, "span");
      \u0275\u0275element(114, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275text(115, " Print Barcode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 55)(117, "div", 56)(118, "div", 57)(119, "div", 58)(120, "div", 59)(121, "div", 60)(122, "div", 2)(123, "h4");
      \u0275\u0275text(124, "Barcode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "button", 61)(126, "span", 62);
      \u0275\u0275text(127, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 63)(129, "div", 64)(130, "a", 65)(131, "span");
      \u0275\u0275element(132, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " Print Barcode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 66)(135, "h5");
      \u0275\u0275text(136, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 10)(138, "div", 38)(139, "div", 67)(140, "h6");
      \u0275\u0275text(141, "Grocery Alpha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p");
      \u0275\u0275text(143, " Nike Jordan ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p");
      \u0275\u0275text(145, "Price: $400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 68);
      \u0275\u0275element(147, "img", 69);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(148, "div", 66)(149, "h5");
      \u0275\u0275text(150, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 10)(152, "div", 38)(153, "div", 67)(154, "h6");
      \u0275\u0275text(155, "Grocery Alpha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p");
      \u0275\u0275text(157, " Apple Series 5 Watch ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p");
      \u0275\u0275text(159, "Price: $300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 68);
      \u0275\u0275element(161, "img", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "div", 38)(163, "div", 67)(164, "h6");
      \u0275\u0275text(165, "Grocery Alpha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "p");
      \u0275\u0275text(167, " Apple Series 5 Watch ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "p");
      \u0275\u0275text(169, "Price: $300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 68);
      \u0275\u0275element(171, "img", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "div", 38)(173, "div", 67)(174, "h6");
      \u0275\u0275text(175, "Grocery Alpha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "p");
      \u0275\u0275text(177, " Apple Series 5 Watch ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p");
      \u0275\u0275text(179, "Price: $300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 68);
      \u0275\u0275element(181, "img", 70);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(182, "div", 71)(183, "div", 72)(184, "div", 57)(185, "div", 58)(186, "div", 73)(187, "span", 74);
      \u0275\u0275element(188, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "h4", 76);
      \u0275\u0275text(190, "Delete product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "p", 77);
      \u0275\u0275text(192, "Are you sure you want to delete product?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 78)(194, "button", 79);
      \u0275\u0275text(195, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "button", 80);
      \u0275\u0275text(197, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 15 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue2);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList2);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 67 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue3);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList3);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarcodeComponent, [{
    type: Component,
    args: [{ selector: "app-barcode", imports: [MatSelectModule, FormsModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Print Barcode</h4>\n      <h6>Manage your barcodes</h6>\n    </div>\n  </div>\n  <div class="d-flex align-items-center">\n    <ul class="table-top-head">\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top"><i class="ti ti-refresh"\n        matTooltip="Refresh" matTooltipPosition="above"></i></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" matTooltip="Collapse" matTooltipPosition="above" data-bs-placement="top" id="collapse-header" (click)="toggleCollapse()" [class.active]="isCollapsed"> @if (!isCollapsed) {\n          <i\n          class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class="barcode-content-list">\n  <form>\n    <div class="row">\n      <div class="col-lg-6 col-12">\n        <div class="row seacrh-barcode-item">\n          <div class="col-sm-6 seacrh-barcode-item-one">\n            <label class="form-label">Warehouse<span class="text-danger">*</span></label>\n            <mat-select [(ngModel)]="selectedValue1" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n              placeholder="Choose">\n              @for (data of selectedList1; track data) {\n                <mat-option [value]="data.value">\n                  {{data.value}}\n                </mat-option>\n              }\n            </mat-select>\n          </div>\n          <div class="col-sm-6 seacrh-barcode-item-one">\n            <label class="form-label">Store<span class="text-danger">*</span></label>\n            <mat-select [(ngModel)]="selectedValue2" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n              placeholder="Choose">\n              @for (data of selectedList2; track data) {\n                <mat-option [value]="data.value">\n                  {{data.value}}\n                </mat-option>\n              }\n            </mat-select>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-lg-6">\n\n        <div class="input-blocks search-form seacrh-barcode-item">\n          <div class="searchInput">\n            <label class="form-label">Product<span class="text-danger">*</span></label>\n            <div class="position-relative">\n              <input type="text" class="form-control" placeholder="Search Product by Code"\n              [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n              (ngModelChange)="searchData(searchDataValue)">\n              <div class="resultBox">\n              </div>\n              <i class="fas fa-search"></i>\n            </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </form>\n\n    <div class="col-lg-12">\n      <div class="modal-body-table search-modal-header">\n        <div class="table-responsive">\n          <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n            matSortDirection="asc" matSortDisableClear>\n            <thead>\n              <tr>\n                <th mat-sort-header="product">Product</th>\n                <th mat-sort-header="sku">SKU</th>\n                <th mat-sort-header="code">Code</th>\n                <th mat-sort-header="qty">Qty</th>\n                <th class="text-center no-sort"></th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (data of tableData; track data; let i = $index) {\n                <tr>\n                  <td>\n                    <div class="productimgname">\n                      <a href="javascript:void(0);" class="product-img stock-img">\n                        <img [src]="data.img" alt="product">\n                      </a>\n                      <a href="javascript:void(0);">{{data.product}}</a>\n                    </div>\n                  </td>\n                  <td>{{data.sku}}</td>\n                  <td>{{data.code}}</td>\n                  <td>\n                    <div class="product-quantity">\n                      <span class="quantity-btn" (click)="reducePos(i)"><i\n                      class="feather icon-minus-circle feather-search"></i></span>\n                      <input type="text" class="quntity-input" value="4" [(ngModel)]="cartValue[i]">\n                      <span class="quantity-btn" (click)="addPos(i)"><i\n                      class="ti ti-circle-plus plus-circle"></i></span>\n                    </div>\n                  </td>\n                  <td class="action-table-data justify-content-center">\n                    <div class="edit-delete-action">\n                      <a class=" barcode-delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i class="feather icon-trash-2 feather-trash-2"></i>\n                      </a>\n                    </div>\n                  </td>\n                </tr>\n              } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n\n    <div class="paper-search-size">\n      <div class="row align-items-center">\n        <div class="col-lg-6">\n          <form class="mb-0">\n            <label class="form-label">Paper Size</label>\n            <mat-select [(ngModel)]="selectedValue3" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n              placeholder="Choose">\n              @for (data of selectedList3; track data) {  \n                <mat-option [value]="data.value">\n                  {{data.value}}\n                </mat-option>\n              }\n            </mat-select>\n          </form>\n        </div>\n        <div class="col-lg-6 pt-3">\n          <div class="row">\n            <div class="col-sm-4">\n              <div class="search-toggle-list">\n                <p>Show Store Name</p>\n                <div class="input-blocks m-0">\n                  <div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n                    <input type="checkbox" id="user7" class="check" checked>\n                    <label for="user7" class="checktoggle mb-0"> </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class="col-sm-4">\n              <div class="search-toggle-list">\n                <p>Show Product Name</p>\n                <div class="input-blocks m-0">\n                  <div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n                    <input type="checkbox" id="user8" class="check" checked>\n                    <label for="user8" class="checktoggle mb-0"> </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n            <div class="col-sm-4">\n              <div class="search-toggle-list">\n                <p>Show Price</p>\n                <div class="input-blocks m-0">\n                  <div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n                    <input type="checkbox" id="user9" class="check" checked>\n                    <label for="user9" class="checktoggle mb-0"> </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="search-barcode-button">\n      <a href="javascript:void(0);" class="btn btn-submit me-2" data-bs-toggle="modal" data-bs-target="#prints-barcode">\n        <span><i class="fas fa-eye me-2"></i></span>\n      Generate Barcode</a>\n      <a href="javascript:void(0);" class="btn btn-secondary me-2">\n        <span><i class="fas fa-power-off me-2"></i></span>\n      Reset Barcode</a>\n      <a href="javascript:void(0);" class="btn btn-danger">\n        <span><i class="fas fa-print me-2"></i></span>\n      Print Barcode</a>\n    </div>\n  </div>\n\n  <!-- Print Barcode -->\n  <div class="modal fade" id="prints-barcode">\n    <div class="modal-dialog modal-dialog-centered stock-adjust-modal">\n      <div class="modal-content">\n        <div class="page-wrapper-new p-0">\n          <div class="content">\n            <div class="modal-header border-0 custom-modal-header">\n              <div class="page-title">\n                <h4>Barcode</h4>\n              </div>\n              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n              </button>\n            </div>\n            <div class="modal-body custom-modal-body">\n              <div class="d-flex justify-content-end">\n                <a href="javascript:void(0);" class="btn btn-cancel close-btn">\n                  <span><i class="fas fa-print me-2"></i></span>\n                Print Barcode</a>\n              </div>\n\n              <div class="barcode-scan-header">\n                <h5>Nike Jordan</h5>\n              </div>\n              <div class="row">\n                <div class="col-sm-4">\n                  <div class="barcode-scanner-link text-center">\n                    <h6>Grocery Alpha</h6>\n                    <p>\n                      Nike Jordan\n                    </p>\n                    <p>Price: $400</p>\n                    <div class="barscaner-img">\n                      <img src="./assets/img/barcode/barcode-01.png" alt="Barcode" class="img-fluid">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class="barcode-scan-header">\n                <h5>Apple Series 5 Watch</h5>\n              </div>\n              <div class="row">\n                <div class="col-sm-4">\n                  <div class="barcode-scanner-link text-center">\n                    <h6>Grocery Alpha</h6>\n                    <p>\n                      Apple Series 5 Watch\n                    </p>\n                    <p>Price: $300</p>\n                    <div class="barscaner-img">\n                      <img src="./assets/img/barcode/barcode-02.png" alt="Barcode" class="img-fluid">\n                    </div>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="barcode-scanner-link text-center">\n                    <h6>Grocery Alpha</h6>\n                    <p>\n                      Apple Series 5 Watch\n                    </p>\n                    <p>Price: $300</p>\n                    <div class="barscaner-img">\n                      <img src="./assets/img/barcode/barcode-02.png" alt="Barcode" class="img-fluid">\n                    </div>\n                  </div>\n                </div>\n                <div class="col-sm-4">\n                  <div class="barcode-scanner-link text-center">\n                    <h6>Grocery Alpha</h6>\n                    <p>\n                      Apple Series 5 Watch\n                    </p>\n                    <p>Price: $300</p>\n                    <div class="barscaner-img">\n                      <img src="./assets/img/barcode/barcode-02.png" alt="Barcode" class="img-fluid">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Print Barcode -->\n\n\n  				 		<!-- delete modal -->\n               <div class="modal fade" id="delete-modal">\n                <div class="modal-dialog modal-dialog-centered">\n                  <div class="modal-content">\n                    <div class="page-wrapper-new p-0">\n                      <div class="content p-5 px-3 text-center">\n                          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                          <h4 class="fs-20 fw-bold mb-2 mt-1">Delete product</h4>\n                          <p class="mb-0 fs-16">Are you sure you want to delete product?</p>\n                          <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                            <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                          </div>						\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n  ' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarcodeComponent, { className: "BarcodeComponent", filePath: "src/app/features/pages/inventory/barcode/barcode.component.ts", lineNumber: 20 });
})();
export {
  BarcodeComponent
};
//# sourceMappingURL=chunk-PMXJGTDS.js.map
