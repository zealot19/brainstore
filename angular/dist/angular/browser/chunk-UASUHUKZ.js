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
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
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
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
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

// src/app/features/pages/finance/account-statement/account-statement.component.ts
var _c0 = () => ({ adaptivePosition: true });
function AccountStatementComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function AccountStatementComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function AccountStatementComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 43)(12, "span", 44);
    \u0275\u0275element(13, "i", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 43);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.transactionType === "Credit" ? " bg-success" : "bg-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.balance);
  }
}
var AccountStatementComponent = class _AccountStatementComponent {
  data;
  pagination;
  router;
  sidebar;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
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
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.accountStatement) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getAccountStatement().subscribe((apiRes) => {
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
  static \u0275fac = function AccountStatementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountStatementComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountStatementComponent, selectors: [["app-account-statement"]], decls: 77, vars: 7, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card"], [1, "card-body"], [1, "row", "align-items-end"], [1, "col-sm-3", "mt-3"], [1, "dropdown", "me-2"], [1, "form-label"], [1, "input-icon-start", "position-relative", "ngx-dates"], [1, "input-icon-left"], [1, "ti", "ti-calendar"], ["type", "text", "container", ".ngx-dates", "placeholder", "dd/mm/yyyy - dd/mm/yyyy", "bsDaterangepicker", "", 1, "form-control", "date-range", "bookingrange", 3, "ngModelChange", "ngModel", "bsConfig"], [1, "col-sm-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "btn-white", "justify-content-between", "btn-md", "w-100"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "btn", "btn-primary", "shadow-none"], [1, "card-header"], [1, "badge", "bg-soft-primary"], [1, "card-body", "p-0"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "expense"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], ["mat-sort-header", "describtion"], ["mat-sort-header", "amount"], ["mat-sort-header", "type"], ["mat-sort-header", "balance"], [1, "Expense-list-blk"], [1, "p-3"], [1, "d-inline-flex", "align-items-center", "p-1", "pe-2", "rounded-1", "text-white", "fs-10", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1", "fs-11"]], template: function AccountStatementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Account Statement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "View Your Statement");
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
      \u0275\u0275listener("click", function AccountStatementComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, AccountStatementComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, AccountStatementComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "label", 18);
      \u0275\u0275text(27, "Choose Your Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 19)(29, "span", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function AccountStatementComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.bsRangeValue, $event) || (ctx.bsRangeValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "label", 18);
      \u0275\u0275text(35, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 25);
      \u0275\u0275text(37, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Zephyr Indira");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Quillon Elysia");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 23)(46, "button", 28);
      \u0275\u0275text(47, "Submit");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 29)(50, "h4");
      \u0275\u0275text(51, "Statement of Account : ");
      \u0275\u0275elementStart(52, "span", 30);
      \u0275\u0275text(53, "HBSC - 3298784309485");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 31)(55, "div", 32)(56, "table", 33);
      \u0275\u0275listener("matSortChange", function AccountStatementComponent_Template_table_matSortChange_56_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(57, "thead", 34)(58, "tr")(59, "th", 35);
      \u0275\u0275text(60, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 36);
      \u0275\u0275text(62, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 37);
      \u0275\u0275text(64, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 38);
      \u0275\u0275text(66, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 39);
      \u0275\u0275text(68, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 40);
      \u0275\u0275text(70, "Transaction Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 41);
      \u0275\u0275text(72, "Balance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "tbody", 42);
      \u0275\u0275repeaterCreate(74, AccountStatementComponent_For_75_Template, 17, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(76, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.bsRangeValue);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(43);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, MatSelectModule, BsDatepickerModule, BsDaterangepickerDirective, BsDaterangepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountStatementComponent, [{
    type: Component,
    args: [{ selector: "app-account-statement", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule, BsDatepickerModule], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4 class="fw-bold">Account Statement</h4>
            <h6>View Your Statement</h6>
        </div>
    </div>
    <ul class="table-top-head">
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }
            @if (isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }</a>
          </li>
    </ul>
</div>
<div class="card">
  <div class="card-body">
    <div class="row align-items-end">
          <div class="col-sm-3 mt-3">
          <div class="dropdown me-2">
            <label class="form-label">Choose Your Date</label>				
            <div class="input-icon-start position-relative ngx-dates" >
              <span class="input-icon-left">
                  <i class="ti ti-calendar"></i>
              </span>
              <input type="text" class="form-control date-range bookingrange" container=".ngx-dates" placeholder="dd/mm/yyyy - dd/mm/yyyy" bsDaterangepicker [(ngModel)]="bsRangeValue"  [bsConfig]="{ adaptivePosition: true }">
          </div>  
          </div>
        </div>
        <div class="col-sm-3">
          <div class="dropdown">
            <label class="form-label">Store</label>
            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white justify-content-between btn-md w-100" data-bs-toggle="dropdown" aria-expanded="false">
              Select
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Zephyr Indira</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Quillon Elysia</a>
              </li>										
            </ul>
          </div>
        </div>
        <div class="col-sm-3">
          <button class="btn btn-primary shadow-none">Submit</button>
        </div>
      </div>
  </div>
</div>
<!-- /product list -->
<div class="card">
  <div class="card-header">
    <h4>Statement of Account : <span class="badge bg-soft-primary">HBSC - 3298784309485</span></h4>
  </div>
            <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"
                    matSortDirection="asc" matSortDisableClear>
                    <thead class="thead-light">
                      <tr>
                        <th mat-sort-header="expense">Reference Number</th>
                        <th mat-sort-header="product">Date</th>
                        <th mat-sort-header="category">Category</th>
                        <th mat-sort-header="describtion">Description</th>
                        <th mat-sort-header="amount">Amount</th>
                        <th mat-sort-header="type">Transaction Type</th>
                        <th mat-sort-header="balance">Balance</th>
                      </tr>
                    </thead>
                    <tbody class="Expense-list-blk">
                      @for (data of tableData; track data; let i = $index) {
                        <tr>
                            <td class="p-3">{{data.referenceNumber}}</td>
                            <td class="p-3">{{data.date}}</td>
                            <td class="p-3">{{data.category}}</td>
                            <td class="p-3">{{data.description}}</td>
                            <td class="p-3">{{data.amount}}</td>
                            <td class="p-3"><span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white fs-10" [ngClass]="data.transactionType==='Credit'?' bg-success':'bg-danger'"><i class="ti ti-point-filled me-1 fs-11"></i>{{data.transactionType}}</span></td>
                            <td class="p-3">{{data.balance}}</td>
                        </tr>  
                      }
            
            
                    </tbody>
                  </table>
            
                </div>
                <app-custom-pagination></app-custom-pagination>
              </div>
</div>
<!-- /product list -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountStatementComponent, { className: "AccountStatementComponent", filePath: "src/app/features/pages/finance/account-statement/account-statement.component.ts", lineNumber: 23 });
})();
export {
  AccountStatementComponent
};
//# sourceMappingURL=chunk-UASUHUKZ.js.map
