import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSort,
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/tax-report/tax-report.component.ts
function TaxReportComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function TaxReportComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function TaxReportComponent_For_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 38);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.store);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.discount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.taxAmount);
  }
}
function TaxReportComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var TaxReportComponent = class _TaxReportComponent {
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
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getTaxReport1().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.taxReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  getTableData(pageOption) {
    this.data.getTaxReport1().subscribe((apiRes) => {
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
  row = true;
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
  static \u0275fac = function TaxReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaxReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaxReportComponent, selectors: [["app-tax-report"]], decls: 118, vars: 7, consts: [[1, "mb-4"], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "page-header", "justify-content-between"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], ["href", "javascript:void(0);", 1, "text-orange"], ["colspan", "12", 1, "text-center"]], template: function TaxReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      \u0275\u0275text(4, "Purchase tax");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "a", 4);
      \u0275\u0275text(7, "Sales Tax");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div")(9, "div", 5)(10, "div", 6)(11, "h4");
      \u0275\u0275text(12, "Tax Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h6");
      \u0275\u0275text(14, "Manage your Tax Reports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "ul", 7)(16, "li")(17, "a", 8);
      \u0275\u0275element(18, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 10);
      \u0275\u0275listener("click", function TaxReportComponent_Template_a_click_20_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(21, TaxReportComponent_Conditional_21_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(22, TaxReportComponent_Conditional_22_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 12)(24, "div", 13)(25, "form")(26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "label", 19);
      \u0275\u0275text(32, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 17)(35, "div", 20)(36, "label", 19);
      \u0275\u0275text(37, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-select", 21)(39, "mat-option", 22);
      \u0275\u0275text(40, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-option", 22);
      \u0275\u0275text(42, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-option", 22);
      \u0275\u0275text(44, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-option", 22);
      \u0275\u0275text(46, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 17)(48, "div", 20)(49, "label", 19);
      \u0275\u0275text(50, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "mat-select", 21)(52, "mat-option", 22);
      \u0275\u0275text(53, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "mat-option", 22);
      \u0275\u0275text(55, "Apex Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-option", 22);
      \u0275\u0275text(57, "Beats Headphones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 22);
      \u0275\u0275text(59, "Dazzle Shoes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 17)(61, "div", 20)(62, "label", 19);
      \u0275\u0275text(63, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-select", 21)(65, "mat-option", 22);
      \u0275\u0275text(66, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "mat-option", 22);
      \u0275\u0275text(68, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 22);
      \u0275\u0275text(70, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 22);
      \u0275\u0275text(72, "Cash");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(73, "div", 23)(74, "div", 20)(75, "button", 24);
      \u0275\u0275text(76, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(77, "div", 25)(78, "div", 26)(79, "div")(80, "h4");
      \u0275\u0275text(81, "Purchase Tax Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "ul", 7)(83, "li", 27)(84, "a", 28);
      \u0275\u0275element(85, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li", 27)(87, "a", 30);
      \u0275\u0275element(88, "img", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 32);
      \u0275\u0275element(91, "i", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(92, "div", 34)(93, "div", 35)(94, "table", 36);
      \u0275\u0275listener("matSortChange", function TaxReportComponent_Template_table_matSortChange_94_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(95, "thead", 37)(96, "tr")(97, "th");
      \u0275\u0275text(98, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th");
      \u0275\u0275text(100, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th");
      \u0275\u0275text(102, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th");
      \u0275\u0275text(104, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th");
      \u0275\u0275text(106, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th");
      \u0275\u0275text(108, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th");
      \u0275\u0275text(110, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th");
      \u0275\u0275text(112, "Tax Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "tbody");
      \u0275\u0275repeaterCreate(114, TaxReportComponent_For_115_Template, 18, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(116, TaxReportComponent_Conditional_116_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(117, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.taxReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.salesTax);
      \u0275\u0275advance(14);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 22 : -1);
      \u0275\u0275advance(92);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 116 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, CustomPaginationComponent, MatSortModule, MatSort, RouterLink, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxReportComponent, [{
    type: Component,
    args: [{ selector: "app-tax-report", imports: [MatSelectModule, FormsModule, CustomPaginationComponent, MatSortModule, RouterLink, DateRangePickerComponent], template: '\n<div class="mb-4">\n  <ul class="nav nav-pills">\n    <li class="nav-item">\n      <a class="nav-link active" [routerLink]="routes.taxReport">Purchase tax</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" [routerLink]="routes.salesTax">Sales Tax</a>\n    </li>\n  </ul>\n</div>\n\n<div>\n  <div class="page-header justify-content-between">\n    <div class="page-title">\n      <h4>Tax Reports</h4>\n      <h6>Manage your Tax Reports</h6>\n    </div>\n    <ul class="table-top-head">\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n        class="ti ti-refresh"></i></a>\n      </li>\n      <li>\n        <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n          matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n  </div>\n  <div class="card border-0">\n    <div class="card-body pb-1">\n      <form>\n        <div class="row align-items-end">\n          <div class="col-lg-10">\n            <div class="row">\n              <div class="col-md-3">\n                <div class="mb-3 custom-ngxdate">\n                  <label class="form-label">Choose Date</label>\n                  <app-date-range-picker/>\n                </div>\n              </div>\n              <div class="col-md-3">\n                <div class="mb-3">\n                  <label class="form-label">Store</label>\n                  <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Electro Mart</mat-option>\n                    <mat-option value="1">Quantum Gadgets</mat-option>\n                    <mat-option value="1">Prime Bazaar</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-3">\n                <div class="mb-3">\n                  <label class="form-label">Supplier</label>\n                  <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Apex Computers</mat-option>\n                    <mat-option value="1">Beats Headphones</mat-option>\n                    <mat-option value="1">Dazzle Shoes</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n              <div class="col-md-3">\n                <div class="mb-3">\n                  <label class="form-label">Payment Method</label>\n                  <mat-select class="custom-mat-select select" placeholder="All">\n                    <mat-option value="1">All</mat-option>\n                    <mat-option value="1">Stripe</mat-option>\n                    <mat-option value="1">Paypal</mat-option>\n                    <mat-option value="1">Cash</mat-option>\n                  </mat-select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-lg-2">\n            <div class="mb-3">\n              <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!-- /product list -->\n  <div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div>\n        <h4>Purchase Tax Report</h4>\n      </div>\n      <ul class="table-top-head">\n        <li class="me-2">\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li class="me-2">\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class="card-body">\n      <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table datatable">\n          <thead class="thead-light">\n            <tr>\n              <th>Reference</th>\n              <th>Supplier</th>\n              <th>Date</th>\n              <th>Store</th>\n              <th>Amount</th>\n              <th>Payment Method</th>\n              <th>Discount</th>\n              <th>Tax Amount</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data) {\n            <tr>\n              <td><a href="javascript:void(0);" class="text-orange">{{data.reference}}</a></td>\n              <td>{{data.supplier}}</td>\n              <td>{{data.date}}</td>\n              <td>{{data.store}}</td>\n              <td>{{data.amount}}</td>\n              <td>{{data.paymentMethod}}</td>\n              <td>{{data.discount}}</td>\n              <td>{{data.taxAmount}}</td>\n            </tr>\n          }@if(tableData.length === 0){\n            <tr>\n                <td class="text-center" colspan="12">No Matching Data Found</td>\n            </tr>\n        }\n          </tbody>\n        </table>\n      </div>\n      <app-custom-pagination/>\n    </div>\n  </div>\n  <!-- /product list -->\n</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaxReportComponent, { className: "TaxReportComponent", filePath: "src/app/features/pages/reports/tax-report/tax-report.component.ts", lineNumber: 28 });
})();
export {
  TaxReportComponent
};
//# sourceMappingURL=chunk-KO4BAK3Q.js.map
