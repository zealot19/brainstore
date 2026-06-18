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

// src/app/features/pages/reports/best-seller/best-seller.component.ts
function BestSellerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function BestSellerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function BestSellerComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 41)(4, "div", 42)(5, "a", 43);
    \u0275\u0275element(6, "img", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
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
    \u0275\u0275textInterpolate(data_r1.brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.soldQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.soldAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.instockQty);
  }
}
function BestSellerComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var BestSellerComponent = class _BestSellerComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  isSelected;
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
        if (this.router.url == this.routes.bestSeller) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSalesReport().subscribe((apiRes) => {
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
  static \u0275fac = function BestSellerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BestSellerComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BestSellerComponent, selectors: [["app-best-seller"]], decls: 97, vars: 5, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-4"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "SKU"], ["mat-sort-header", "productName"], ["mat-sort-header", "brand"], ["mat-sort-header", "category"], ["mat-sort-header", "soldQty"], ["mat-sort-header", "soldAmount"], ["mat-sort-header", "instockQty"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "me-2"], ["href", "javascript:void(0);"], ["alt", "product", 3, "src"], ["colspan", "12", 1, "text-center"]], template: function BestSellerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Bestseller Products Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "View Reports of Best Selling Products");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function BestSellerComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, BestSellerComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, BestSellerComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "form")(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "label", 15);
      \u0275\u0275text(24, "Choose Date\xA0");
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
      \u0275\u0275text(34, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-option", 18);
      \u0275\u0275text(36, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 18);
      \u0275\u0275text(38, "Prime Bazaar");
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
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-option", 18);
      \u0275\u0275text(53, "Red Premium Satchel");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 19)(55, "div", 16)(56, "button", 20);
      \u0275\u0275text(57, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(58, "div", 21)(59, "div", 22)(60, "div")(61, "h4");
      \u0275\u0275text(62, "Sales Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "ul", 3)(64, "li", 23)(65, "a", 24);
      \u0275\u0275element(66, "img", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li", 23)(68, "a", 26);
      \u0275\u0275element(69, "img", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "li")(71, "a", 28);
      \u0275\u0275element(72, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 30)(74, "div", 31)(75, "table", 32);
      \u0275\u0275listener("matSortChange", function BestSellerComponent_Template_table_matSortChange_75_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(76, "thead", 33)(77, "tr")(78, "th", 34);
      \u0275\u0275text(79, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 35);
      \u0275\u0275text(81, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 36);
      \u0275\u0275text(83, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 37);
      \u0275\u0275text(85, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 38);
      \u0275\u0275text(87, "Sold Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 39);
      \u0275\u0275text(89, "Sold Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 40);
      \u0275\u0275text(91, "Instock Qty");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "tbody");
      \u0275\u0275repeaterCreate(93, BestSellerComponent_For_94_Template, 19, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(95, BestSellerComponent_Conditional_95_Template, 3, 0, "tr");
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
  }, dependencies: [CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BestSellerComponent, [{
    type: Component,
    args: [{ selector: "app-best-seller", imports: [CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, FormsModule, MatSortModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n      <div class="page-title">\n        <h4>Bestseller Products Report</h4>\n        <h6>View Reports of Best Selling Products</h6>\n      </div>\n    </div>\n    <ul class="table-top-head">\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n        class="ti ti-refresh"></i></a>\n      </li>\n      <li>\n        <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n          matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class="card border-0">\n    <div class="card-body pb-1">\n      <form>\n        <div class="row align-items-end">\n          <div class="col-lg-10">\n            <div class="row">\n              <div class="col-md-4">\n                <div class="mb-3 custom-ngxdate">\n                  <label class="form-label">Choose Date\xA0</label>\n                  <app-date-range-picker/>\n                </div>\n              </div>\n              <div class="col-md-4">\n                <div class="mb-3">\n                  <label class="form-label">Store</label>\n                 <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Electro Mart</mat-option>\n                    <mat-option value="1">Quantum Gadgets</mat-option>\n                    <mat-option value="1">Prime Bazaar</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-4">\n                <div class="mb-3">\n                  <label class="form-label">Products</label>\n                 <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Lenovo IdeaPad 3</mat-option>\n                    <mat-option value="1">Nike Jordan</mat-option>\n                    <mat-option value="1">Amazon Echo Dot</mat-option>\n                    <mat-option value="1">Red Premium Satchel</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-lg-2">\n            <div class="mb-3">\n              <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!-- /product list -->\n  <div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div>\n        <h4>Sales Report</h4>\n      </div>\n      <ul class="table-top-head">\n        <li class="me-2">\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li class="me-2">\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class="card-body">\n      <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table  datanew">\n          <thead class="thead-light">\n            <tr>\n              <th mat-sort-header="SKU">SKU</th>\n              <th mat-sort-header="productName">Product Name</th>\n              <th mat-sort-header="brand">Brand</th>\n              <th mat-sort-header="category">Category</th>\n              <th mat-sort-header="soldQty">Sold Qty</th>\n              <th mat-sort-header="soldAmount">Sold Amount</th>\n              <th mat-sort-header="instockQty">Instock Qty</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data) {\n              <tr>\n                <td>{{data.SKU}}</td>\n                <td class="d-flex align-items-center">\n                  <div class="avatar avatar-sm me-2">\n                    <a href="javascript:void(0);">\n                      <img [src]="data.img" alt="product">\n                    </a>\n                  </div>\n                  <a href="javascript:void(0);">{{data.productName}}</a>\n                </td>\n                <td>{{data.brand}}</td>\n                <td>{{data.category}}</td>\n                <td>{{data.soldQty}}</td>\n                <td>{{data.soldAmount}}</td>\n                <td>{{data.instockQty}}</td>\n              </tr>\n            }@if(tableData.length === 0){\n              <tr>\n                  <td class="text-center" colspan="12">No Matching Data Found</td>\n              </tr>\n          }\n          </tbody>\n        </table>\n      </div>\n      <app-custom-pagination></app-custom-pagination>\n    </div>\n  </div>\n  <!-- /product list -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BestSellerComponent, { className: "BestSellerComponent", filePath: "src/app/features/pages/reports/best-seller/best-seller.component.ts", lineNumber: 26 });
})();
export {
  BestSellerComponent
};
//# sourceMappingURL=chunk-M2S7TUQ7.js.map
