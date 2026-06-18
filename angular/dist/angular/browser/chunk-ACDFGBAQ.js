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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/income-report/income-report.component.ts
function IncomeReportComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
}
function IncomeReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
}
function IncomeReportComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.store);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.notes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
  }
}
function IncomeReportComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var IncomeReportComponent = class _IncomeReportComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
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
        if (this.router.url == this.routes.incomeReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  getTableData(pageOption) {
    this.data.getIncomeReport().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "27 9 23" },
    { value: "10 9 23" }
  ];
  selectedList2 = [
    { value: "Choose Category" },
    { value: "Printing" },
    { value: "Travel" }
  ];
  selectedList3 = [
    { value: "Created by" },
    { value: "Susan Lopez" },
    { value: "Russell Belle" }
  ];
  selectedList4 = [
    { value: "Payment Method" },
    { value: "Paypal" },
    { value: "Stripe" }
  ];
  selectedList5 = [
    { value: "Choose Payment Status" },
    { value: "Paid" },
    { value: "Unpaid" },
    { value: "Overdue" }
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
  static \u0275fac = function IncomeReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomeReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomeReportComponent, selectors: [["app-income-report"]], decls: 94, vars: 5, consts: [[1, "page-header", "justify-content-between"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-4"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "reference"], ["mat-sort-header", "Date"], ["mat-sort-header", "store"], ["mat-sort-header", "category"], ["mat-sort-header", "notes"], ["mat-sort-header", "amount"], ["mat-sort-header", "payment"], ["href", "javascript:void(0);", 1, "text-orange"], ["colspan", "12", 1, "text-center"]], template: function IncomeReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Income Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h6");
      \u0275\u0275text(5, "Manage your Income");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ul", 2)(7, "li")(8, "a", 3);
      \u0275\u0275element(9, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 5);
      \u0275\u0275listener("click", function IncomeReportComponent_Template_a_click_11_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(12, IncomeReportComponent_Conditional_12_Template, 1, 0, "i", 6);
      \u0275\u0275conditionalCreate(13, IncomeReportComponent_Conditional_13_Template, 1, 0, "i", 6);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "form")(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "label", 14);
      \u0275\u0275text(23, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 12)(26, "div", 15)(27, "label", 14);
      \u0275\u0275text(28, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-select", 16)(30, "mat-option", 17);
      \u0275\u0275text(31, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-option", 17);
      \u0275\u0275text(33, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-option", 17);
      \u0275\u0275text(35, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-option", 17);
      \u0275\u0275text(37, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 12)(39, "div", 15)(40, "label", 14);
      \u0275\u0275text(41, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-select", 16)(43, "mat-option", 17);
      \u0275\u0275text(44, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-option", 17);
      \u0275\u0275text(46, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 17);
      \u0275\u0275text(48, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-option", 17);
      \u0275\u0275text(50, "Credit Card");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(51, "div", 18)(52, "div", 15)(53, "button", 19);
      \u0275\u0275text(54, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(55, "div", 20)(56, "div", 21)(57, "div")(58, "h4");
      \u0275\u0275text(59, "Income Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "ul", 2)(61, "li", 22)(62, "a", 23);
      \u0275\u0275element(63, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li", 22)(65, "a", 25);
      \u0275\u0275element(66, "img", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 27);
      \u0275\u0275element(69, "i", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 29)(71, "div", 30)(72, "table", 31);
      \u0275\u0275listener("matSortChange", function IncomeReportComponent_Template_table_matSortChange_72_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(73, "thead")(74, "tr")(75, "th", 32);
      \u0275\u0275text(76, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 33);
      \u0275\u0275text(78, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 34);
      \u0275\u0275text(80, "DStoreate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 35);
      \u0275\u0275text(82, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 36);
      \u0275\u0275text(84, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 37);
      \u0275\u0275text(86, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 38);
      \u0275\u0275text(88, "Payment Method");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "tbody");
      \u0275\u0275repeaterCreate(90, IncomeReportComponent_For_91_Template, 16, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(92, IncomeReportComponent_Conditional_92_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(93, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance(77);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 92 : -1);
    }
  }, dependencies: [CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomeReportComponent, [{
    type: Component,
    args: [{ selector: "app-income-report", imports: [CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, FormsModule, MatSortModule], template: '<div class="page-header justify-content-between">\n  <div class="page-title">\n    <h4>Income Report</h4>\n    <h6>Manage your Income</h6>\n  </div>\n  <ul class="table-top-head">\n\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above"><i  class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse" matTooltipPosition="above"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>\n<div class="card border-0">\n  <div class="card-body pb-1">\n    <form>\n      <div class="row align-items-end">\n        <div class="col-lg-10">\n          <div class="row">\n            <div class="col-md-4">\n              <div class="mb-3 custom-ngxdate">\n                <label class="form-label">Choose Date</label>\n                <app-date-range-picker/>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="mb-3">\n                <label class="form-label">Store</label>\n                <mat-select class="custom-mat-select select" placeholder="All">\n                  <mat-option value="1">All</mat-option>\n                  <mat-option value="1">Electro Mart</mat-option>\n                  <mat-option value="1">Quantum Gadgets</mat-option>\n                  <mat-option value="1">Prime Bazaar</mat-option>\n                </mat-select>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="mb-3">\n                <label class="form-label">Payment Method</label>\n                <mat-select class="custom-mat-select select" placeholder="All">\n                  <mat-option value="1">All</mat-option>\n                  <mat-option value="1">Paypal</mat-option>\n                  <mat-option value="1">Cash</mat-option>\n                  <mat-option value="1">Credit Card</mat-option>\n                </mat-select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="col-lg-2">\n          <div class="mb-3">\n            <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div>\n      <h4>Income Report</h4>\n    </div>\n    <ul class="table-top-head">\n      <li class="me-2">\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n      </li>\n      <li class="me-2">\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div class="card-body">\n      <div class="table-responsive">\n        <table class="table  datanew" (matSortChange)="sortData($event)"\n          matSort\n          matSortActive="Sno"\n          matSortDirection="asc"\n          matSortDisableClear>\n          <thead>\n            <tr>\n              <th mat-sort-header="reference">Reference</th>\n              <th mat-sort-header="Date">Date</th>\n              <th mat-sort-header="store">DStoreate</th>\n              <th mat-sort-header="category">Category</th>\n              <th mat-sort-header="notes">Notes</th>\n              <th mat-sort-header="amount">Amount</th>\n              <th mat-sort-header="payment">Payment Method</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data) {\n              <tr>\n                <td><a href="javascript:void(0);" class="text-orange">{{data.reference}}</a></td>\n                <td>{{data.date}}</td>\n                <td>{{data.store}}</td>\n                <td>{{data.category}}</td>\n                <td>{{data.notes}}</td>\n                <td>{{data.amount}}</td>\n                <td>{{data.paymentMethod}}</td>\n              </tr>\n            }@if(tableData.length === 0){\n              <tr>\n                  <td class="text-center" colspan="12">No Matching Data Found</td>\n              </tr>\n          }\n          </tbody>\n        </table>\n\n      </div>\n      <app-custom-pagination></app-custom-pagination>\n    </div>\n  </div>\n  <!-- /product list -->\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomeReportComponent, { className: "IncomeReportComponent", filePath: "src/app/features/pages/reports/income-report/income-report.component.ts", lineNumber: 26 });
})();
export {
  IncomeReportComponent
};
//# sourceMappingURL=chunk-ACDFGBAQ.js.map
