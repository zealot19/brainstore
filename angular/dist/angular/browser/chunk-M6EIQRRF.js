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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/inventory-report/inventory-report.component.ts
function InventoryReportComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function InventoryReportComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function InventoryReportComponent_For_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 44)(5, "a", 45);
    \u0275\u0275element(6, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.SKU);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.instockQty);
  }
}
function InventoryReportComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var InventoryReportComponent = class _InventoryReportComponent {
  data;
  pagination;
  router;
  sidebar;
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
        if (this.router.url == this.routes.inventoryReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInventoryReport().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "25 9 23" },
    { value: "12 9 23" }
  ];
  selectedList2 = [
    { value: "Choose Product" },
    { value: "Bold V3.2" },
    { value: "Nike Jordan" }
  ];
  selectedList3 = [
    { value: "Choose Product" },
    { value: "Accessories" },
    { value: "Shoe" }
  ];
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
  static \u0275fac = function InventoryReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryReportComponent, selectors: [["app-inventory-report"]], decls: 114, vars: 8, consts: [[1, "mb-4"], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "sku"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], ["mat-sort-header", "unit"], ["mat-sort-header", "instock"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["alt", "product", 1, "img-fluid", 3, "src"], ["href", "javascript:void(0);", 1, "text-dark", "mb-0", "ms-2"], ["colspan", "12", 1, "text-center"]], template: function InventoryReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      \u0275\u0275text(4, "Inventory Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "a", 4);
      \u0275\u0275text(7, "Stock History");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "li", 2)(9, "a", 4);
      \u0275\u0275text(10, "Sold Stock");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div")(12, "div", 5)(13, "div", 6)(14, "div", 7)(15, "h4");
      \u0275\u0275text(16, "Inventory Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h6");
      \u0275\u0275text(18, "View Reports of Inventory");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "ul", 8)(20, "li")(21, "a", 9);
      \u0275\u0275element(22, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 11);
      \u0275\u0275listener("click", function InventoryReportComponent_Template_a_click_24_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(25, InventoryReportComponent_Conditional_25_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(26, InventoryReportComponent_Conditional_26_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 13)(28, "div", 14)(29, "form")(30, "div", 15)(31, "div", 16)(32, "div", 17)(33, "div", 18)(34, "div", 19)(35, "label", 20);
      \u0275\u0275text(36, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 18)(39, "div", 21)(40, "label", 20);
      \u0275\u0275text(41, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-select", 22)(43, "mat-option", 23);
      \u0275\u0275text(44, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-option", 23);
      \u0275\u0275text(46, "Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 23);
      \u0275\u0275text(48, "Accessories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-option", 23);
      \u0275\u0275text(50, "Shoe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 18)(52, "div", 21)(53, "label", 20);
      \u0275\u0275text(54, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-select", 22)(56, "mat-option", 23);
      \u0275\u0275text(57, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 23);
      \u0275\u0275text(59, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 23);
      \u0275\u0275text(61, "Beats Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 23);
      \u0275\u0275text(63, "Nike Jordan");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 18)(65, "div", 21)(66, "label", 20);
      \u0275\u0275text(67, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-select", 22)(69, "mat-option", 23);
      \u0275\u0275text(70, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 23);
      \u0275\u0275text(72, "PC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 23);
      \u0275\u0275text(74, "BX");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(75, "div", 24)(76, "div", 21)(77, "button", 25);
      \u0275\u0275text(78, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(79, "div", 26)(80, "div", 27)(81, "div")(82, "h4");
      \u0275\u0275text(83, "Customer Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "ul", 8)(85, "li", 28)(86, "a", 29);
      \u0275\u0275element(87, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "li", 28)(89, "a", 31);
      \u0275\u0275element(90, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "li")(92, "a", 33);
      \u0275\u0275element(93, "i", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 35)(95, "div", 36)(96, "table", 37);
      \u0275\u0275listener("matSortChange", function InventoryReportComponent_Template_table_matSortChange_96_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(97, "thead", 38)(98, "tr")(99, "th", 39);
      \u0275\u0275text(100, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 40);
      \u0275\u0275text(102, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 41);
      \u0275\u0275text(104, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 42);
      \u0275\u0275text(106, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 43);
      \u0275\u0275text(108, "Instock");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "tbody");
      \u0275\u0275repeaterCreate(110, InventoryReportComponent_For_111_Template, 15, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(112, InventoryReportComponent_Conditional_112_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(113, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.inventoryReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.stockHistory);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.soldStock);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 26 : -1);
      \u0275\u0275advance(84);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 112 : -1);
    }
  }, dependencies: [CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryReportComponent, [{
    type: Component,
    args: [{ selector: "app-inventory-report", imports: [CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, RouterLink, FormsModule, MatSortModule], template: '\n<div class="mb-4">\n  <ul class="nav nav-pills">\n    <li class="nav-item">\n      <a class="nav-link active" [routerLink]="routes.inventoryReport">Inventory Report</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" [routerLink]="routes.stockHistory">Stock History</a>\n    </li>\n    <li class="nav-item">\n      <a class="nav-link" [routerLink]="routes.soldStock">Sold Stock</a>\n    </li>\n  </ul>\n</div>\n\n<div>\n  <div class="page-header">\n    <div class="add-item d-flex">\n      <div class="page-title">\n        <h4>Inventory Report</h4>\n        <h6>View Reports of Inventory</h6>\n      </div>\n    </div>\n    <ul class="table-top-head">\n            <li>\n              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"\n                matTooltipPosition="above"><i class="ti ti-refresh"></i></a>\n              </li>\n              <li>\n                <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse"\n                  matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n                  <i class="ti ti-chevron-up"></i>\n                }\n                @if (isCollapsed) {\n                  <i class="ti ti-chevron-up"></i>\n                }</a>\n              </li>\n            </ul>\n          </div>\n          <div class="card border-0">\n            <div class="card-body pb-1">\n              <form>\n                <div class="row align-items-end">\n                  <div class="col-lg-10">\n                    <div class="row">\n                      <div class="col-md-3">\n                        <div class="mb-3 custom-ngxdate">\n                          <label class="form-label">Choose Date</label>\n                          <app-date-range-picker/>\n                        </div>\n                      </div>\n                      <div class="col-md-3">\n                        <div class="mb-3">\n                          <label class="form-label">Category</label>\n                         <mat-select class="custom-mat-select select" placeholder="All">\n                            <mat-option value="1">All</mat-option>\n                            <mat-option value="1">Computers</mat-option>\n                            <mat-option value="1">Accessories</mat-option>\n                            <mat-option value="1">Shoe</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                      <div class="col-md-3">\n                        <div class="mb-3">\n                          <label class="form-label">Products</label>\n                         <mat-select class="custom-mat-select select" placeholder="All">\n                            <mat-option value="1">All</mat-option>\n                            <mat-option value="1">Lenovo IdeaPad 3</mat-option>\n                            <mat-option value="1">Beats Pro</mat-option>\n                            <mat-option value="1">Nike Jordan</mat-option>															\n                          </mat-select>\n                        </div>\n                      </div>\n                      <div class="col-md-3">\n                        <div class="mb-3">\n                          <label class="form-label">Units</label>\n                         <mat-select class="custom-mat-select select" placeholder="All">\n                            <mat-option value="1">All</mat-option>\n                            <mat-option value="1">PC</mat-option>\n                            <mat-option value="1">BX</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="col-lg-2">\n                    <div class="mb-3">\n                      <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n  \n          <!-- /product list -->\n          <div class="card table-list-card">\n            <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n              <div>\n                <h4>Customer Report</h4>\n              </div>\n              <ul class="table-top-head">\n                <li class="me-2">\n                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n                </li>\n                <li class="me-2">\n                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n                </li>\n                <li>\n                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n                </li>\n              </ul>\n            </div>\n            <div class="card-body">\n                <div class="table-responsive">\n                  <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n                    matSortDirection="asc" matSortDisableClear>\n                    <thead class="thead-light">\n                      <tr>\n                        <th mat-sort-header="sku">SKU</th>\n                        <th mat-sort-header="product">Product Name</th>\n                        <th mat-sort-header="category">Category</th>\n                        <th mat-sort-header="unit">Unit</th>\n                        <th mat-sort-header="instock">Instock</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      @for (data of tableData; track data) {\n                        <tr>\n                          <td>{{data.SKU}}</td>\n                          <td >\n                            <div class="d-flex align-items-center">\n                              <a href="javascript:void(0);" class="avatar avatar-md">\n                                <img [src]="data.img" class="img-fluid" alt="product">\n                              </a>\n                              <a href="javascript:void(0);" class="text-dark mb-0 ms-2">{{data.productName}}</a>\n                            </div>\n                          </td>\n                          \n                          <td>{{data.category}}</td>\n                          <td>{{data.unit}}</td>\n                          <td>{{data.instockQty}}</td>\n                        </tr>\n                      }@if(tableData.length === 0){\n                        <tr>\n                            <td class="text-center" colspan="12">No Matching Data Found</td>\n                        </tr>\n                    }\n                    </tbody>\n                  </table>\n  \n                </div>\n                <app-custom-pagination></app-custom-pagination>\n              </div>\n            </div>\n            <!-- /product list -->\n</div>\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryReportComponent, { className: "InventoryReportComponent", filePath: "src/app/features/pages/reports/inventory-report/inventory-report.component.ts", lineNumber: 26 });
})();
export {
  InventoryReportComponent
};
//# sourceMappingURL=chunk-M6EIQRRF.js.map
