import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
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
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
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
  Router,
  RouterLink
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/purchase-report/purchase-report.component.ts
function PurchaseReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function PurchaseReportComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function PurchaseReportComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 43)(10, "a", 44);
    \u0275\u0275element(11, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 46)(13, "p", 47)(14, "a");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.purchaseReport);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.sku, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.dueDate, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.purchaseReport);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.instockQty, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.purchaseQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.purchaseAmount, " ");
  }
}
function PurchaseReportComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var PurchaseReportComponent = class _PurchaseReportComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  selectedSortOption = "";
  selectedProduct = "";
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
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
        if (this.router.url == this.routes.purchaseReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPurchaseReport().subscribe((apiRes) => {
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
  static \u0275fac = function PurchaseReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseReportComponent, selectors: [["app-purchase-report"]], decls: 97, vars: 5, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-4"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "reference"], ["mat-sort-header", "sku"], ["mat-sort-header", "date"], ["mat-sort-header", "productName"], ["mat-sort-header", "category"], ["mat-sort-header", "instockQty"], ["mat-sort-header", "purchaseQty"], ["mat-sort-header", "purchaseAmount"], [3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", 3, "routerLink"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "text-dark", "mb-0"], ["colspan", "12", 1, "text-center"]], template: function PurchaseReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Purchase Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Purchase Report");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function PurchaseReportComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, PurchaseReportComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, PurchaseReportComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "form")(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "label", 15);
      \u0275\u0275text(24, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 13)(27, "div", 16)(28, "label", 15);
      \u0275\u0275text(29, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-select", 17)(31, "mat-option", 18);
      \u0275\u0275text(32, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-option", 18);
      \u0275\u0275text(34, "Freshmart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-option", 18);
      \u0275\u0275text(36, "Grocery Bevy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 18);
      \u0275\u0275text(38, "Grocery Apex");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 13)(40, "div", 16)(41, "label", 15);
      \u0275\u0275text(42, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-select", 17)(44, "mat-option", 18);
      \u0275\u0275text(45, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-option", 18);
      \u0275\u0275text(47, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "mat-option", 18);
      \u0275\u0275text(49, "Nike Jordan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-option", 18);
      \u0275\u0275text(51, "Amazon Echo Dot");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(52, "div", 19)(53, "div", 16)(54, "button", 20);
      \u0275\u0275text(55, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(56, "div", 21)(57, "div", 22)(58, "div")(59, "h4");
      \u0275\u0275text(60, "Customer Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "ul", 3)(62, "li", 23)(63, "a", 24);
      \u0275\u0275element(64, "img", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li", 23)(66, "a", 26);
      \u0275\u0275element(67, "img", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 28);
      \u0275\u0275element(70, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 30)(72, "div", 31)(73, "table", 32);
      \u0275\u0275listener("matSortChange", function PurchaseReportComponent_Template_table_matSortChange_73_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(74, "thead", 33)(75, "tr")(76, "th", 34);
      \u0275\u0275text(77, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 35);
      \u0275\u0275text(79, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 36);
      \u0275\u0275text(81, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 37);
      \u0275\u0275text(83, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 38);
      \u0275\u0275text(85, "Cateegory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 39);
      \u0275\u0275text(87, "Instock Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 40);
      \u0275\u0275text(89, "Purchase Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 41);
      \u0275\u0275text(91, "Purchase Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "tbody");
      \u0275\u0275repeaterCreate(93, PurchaseReportComponent_For_94_Template, 24, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(95, PurchaseReportComponent_Conditional_95_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(96, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(79);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 95 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseReportComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-report", imports: [MatSelectModule, FormsModule, CustomPaginationComponent, MatSortModule, RouterLink, DateRangePickerComponent], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Purchase Report</h4>\n      <h6>Manage your Purchase Report</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>\n<div class="card border-0">\n  <div class="card-body pb-1">\n    <form>\n      <div class="row align-items-end">\n        <div class="col-lg-10">\n          <div class="row">\n            <div class="col-md-4">\n              <div class="mb-3 custom-ngxdate">\n                <label class="form-label">Choose Date</label>\n               <app-date-range-picker/>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="mb-3">\n                <label class="form-label">Store</label>\n                <mat-select class="custom-mat-select select" placeholder="All">\n                  <mat-option value="1">All</mat-option>\n                  <mat-option value="1">Freshmart</mat-option>\n                  <mat-option value="1">Grocery Bevy</mat-option>\n                  <mat-option value="1">Grocery Apex</mat-option>\n                </mat-select>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="mb-3">\n                <label class="form-label">Products</label>\n                <mat-select class="custom-mat-select select" placeholder="All">\n                  <mat-option value="1">All</mat-option>\n                  <mat-option value="1">Lenovo IdeaPad 3</mat-option>\n                  <mat-option value="1">Nike Jordan</mat-option>\n                  <mat-option value="1">Amazon Echo Dot</mat-option>\n                </mat-select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="col-lg-2">\n          <div class="mb-3">\n            <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div>\n      <h4>Customer Report</h4>\n    </div>\n    <ul class="table-top-head">\n      <li class="me-2">\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n      </li>\n      <li class="me-2">\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div class="card-body">\n    <div class="table-responsive">\n      <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n        <thead class="thead-light">\n          <tr>\n            <th mat-sort-header="reference">Reference</th>\n            <th mat-sort-header="sku">SKU</th>\n            <th mat-sort-header="date">Due Date</th>\n            <th mat-sort-header="productName">Product Name</th>\n            <th mat-sort-header="category">Cateegory</th>\n            <th mat-sort-header="instockQty">Instock Qty</th>\n            <th mat-sort-header="purchaseQty">Purchase Qty</th>\n            <th mat-sort-header="purchaseAmount">Purchase Amount</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (data of tableData; track data) {\n            <tr>\n											\n              <td>\n                <a [routerLink]="routes.purchaseReport">{{data.reference}}</a>\n              </td>\n              <td>\n                {{data.sku}}\n              </td>\n              <td>\n               {{data.dueDate}}\n              </td>\n              <td>\n                <div class="d-flex align-items-center">\n                  <a [routerLink]="routes.purchaseReport" class="avatar avatar-md"><img src="assets/img/products/{{data.img}}" class="img-fluid" alt="img"></a>\n                  <div class="ms-2">\n                    <p class="text-dark mb-0"><a>{{data.productName}}</a></p>\n                  </div>\n                </div>\n              </td>\n              <td>\n                {{data.category}}\n              </td>\n              <td>\n                {{data.instockQty}}								\n              </td>\n              <td>{{data.purchaseQty}}</td>\n              <td>\n                {{data.purchaseAmount}}\n              </td>\n            </tr>\n          }@if(tableData.length === 0){\n            <tr>\n                <td class="text-center" colspan="12">No Matching Data Found</td>\n            </tr>\n        }\n        </tbody>\n      </table>\n    </div>\n    <app-custom-pagination></app-custom-pagination>\n  </div>\n</div>\n<!-- /product list -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseReportComponent, { className: "PurchaseReportComponent", filePath: "src/app/features/pages/reports/purchase-report/purchase-report.component.ts", lineNumber: 26 });
})();
export {
  PurchaseReportComponent
};
//# sourceMappingURL=chunk-3TGN5PY6.js.map
