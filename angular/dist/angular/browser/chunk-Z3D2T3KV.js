import {
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
  MatTableDataSource
} from "./chunk-VP4CMUYD.js";
import {
  PaginationService
} from "./chunk-24R3OVTU.js";
import "./chunk-6VIR33HH.js";
import {
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
  NgModel
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/finance/cash-flow/cash-flow.component.ts
var _c0 = () => ({ standalone: true });
function CashFlowComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function CashFlowComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function CashFlowComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.bankAccount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.credit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.debit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.accountBalance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalBalance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
  }
}
function CashFlowComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var CashFlowComponent = class _CashFlowComponent {
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
        if (this.router.url == this.routes.cashFlow) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCashFlow().subscribe((apiRes) => {
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
  static \u0275fac = function CashFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CashFlowComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CashFlowComponent, selectors: [["app-cash-flow"]], decls: 70, vars: 8, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "product"], ["mat-sort-header", "expense"], ["mat-sort-header", "category"], ["mat-sort-header", "describtion"], ["mat-sort-header", "date"], ["mat-sort-header", "acc"], ["mat-sort-header", "total"], ["mat-sort-header", "amount"], [1, "Expense-list-blk"], [1, "p-3"], ["colspan", "12", 1, "text-center"]], template: function CashFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Cash Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "View Your Cashflows ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275listener("click", function CashFlowComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, CashFlowComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, CashFlowComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "a", 17);
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19)(28, "label")(29, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function CashFlowComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CashFlowComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "a", 23);
      \u0275\u0275text(33, " Payment Method ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 24)(35, "li")(36, "a", 25);
      \u0275\u0275text(37, "Stripe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 25);
      \u0275\u0275text(40, "Cash");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 25);
      \u0275\u0275text(43, "Paypal");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(44, "div", 26)(45, "div", 27)(46, "table", 28);
      \u0275\u0275listener("matSortChange", function CashFlowComponent_Template_table_matSortChange_46_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(47, "thead", 29)(48, "tr")(49, "th", 30);
      \u0275\u0275text(50, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 31);
      \u0275\u0275text(52, "Bank & Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 32);
      \u0275\u0275text(54, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 33);
      \u0275\u0275text(56, "Credit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 34);
      \u0275\u0275text(58, "Debit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 35);
      \u0275\u0275text(60, "Account balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 36);
      \u0275\u0275text(62, "Total Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 37);
      \u0275\u0275text(64, "Payment Method");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "tbody", 38);
      \u0275\u0275repeaterCreate(66, CashFlowComponent_For_67_Template, 17, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(68, CashFlowComponent_Conditional_68_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(69, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(37);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 68 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CashFlowComponent, [{
    type: Component,
    args: [{ selector: "app-cash-flow", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Cash Flow</h4>\n            <h6>View Your Cashflows </h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n</div>\n\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n				<a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n				<div class="dataTables_filter">\n				  <label>\n					<input\n					  [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n					  (ngModelChange)="searchData(searchDataValue)"\n					  type="search"\n					  class="form-control"\n					  placeholder="Search"\n					  />\n					</label>\n				  </div>\n				</div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n        \n            \n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                Payment Method\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Stripe</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Cash</a>\n                    </li>	\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Paypal</a>\n                    </li>									\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">\n        <div class="table-responsive">\n          <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n            matSortDirection="asc" matSortDisableClear>\n            <thead class="thead-light">\n              <tr>\n                <th mat-sort-header="product">Date</th>\n                <th mat-sort-header="expense">Bank & Account Number</th>\n                <th mat-sort-header="category">Description</th>\n                <th mat-sort-header="describtion">Credit</th>\n                <th mat-sort-header="date">Debit</th>\n                <th mat-sort-header="acc">Account balance</th>\n                <th mat-sort-header="total">Total Balance</th>\n                <th mat-sort-header="amount">Payment Method</th>\n              </tr>\n            </thead>\n            <tbody class="Expense-list-blk">\n              @for (data of tableData; track data; let i = $index) {\n                <tr>\n                    <td class="p-3">{{data.date}}</td>\n                    <td class="p-3">{{data.bankAccount}}</td>\n                    <td class="p-3">{{data.description}}</td>\n                    <td class="p-3">{{data.credit}}</td>\n                    <td class="p-3">{{data.debit}}</td>\n                    <td class="p-3">{{data.accountBalance}}</td>\n                    <td class="p-3">{{data.totalBalance}}</td>\n                    <td class="p-3">{{data.paymentMethod}}</td>\n                  </tr>\n                }@if(tableData.length === 0){\n                  <tr>\n                    <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n                }\n            </tbody>\n          </table>\n    \n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n</div>\n<!-- /product list -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CashFlowComponent, { className: "CashFlowComponent", filePath: "src/app/features/pages/finance/cash-flow/cash-flow.component.ts", lineNumber: 20 });
})();
export {
  CashFlowComponent
};
//# sourceMappingURL=chunk-Z3D2T3KV.js.map
