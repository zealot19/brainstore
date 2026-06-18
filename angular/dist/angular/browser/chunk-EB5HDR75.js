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
  CommonService,
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
  Renderer2,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/reports/expense-report/expense-report.component.ts
function ExpenseReportComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
}
function ExpenseReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
}
function ExpenseReportComponent_For_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 39);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.expenseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Pending" ? "badge-cyan" : "badge-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.status, " ");
  }
}
function ExpenseReportComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var ExpenseReportComponent = class _ExpenseReportComponent {
  data;
  pagination;
  router;
  sidebar;
  common;
  renderer;
  initChecked = false;
  routes = routes;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
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
  constructor(data, pagination, router, sidebar, common, renderer) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.common = common;
    this.renderer = renderer;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.expenseReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getexpenseReport().subscribe((apiRes) => {
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
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Category" },
    { value: "Computers" }
  ];
  selectedList3 = [
    { value: "Created by" },
    { value: "Complete" },
    { value: "Inprogress" }
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
  static \u0275fac = function ExpenseReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpenseReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseReportComponent, selectors: [["app-expense-report"]], decls: 103, vars: 5, consts: [[1, "page-header", "justify-content-between"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "name"], ["mat-sort-header", "expense"], ["mat-sort-header", "user"], ["mat-sort-header", "date"], ["mat-sort-header", "amountDue"], [1, "Expense-list"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], ["colspan", "12", 1, "text-center"]], template: function ExpenseReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Expenses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h6");
      \u0275\u0275text(5, "Manage your Expenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ul", 2)(7, "li")(8, "a", 3);
      \u0275\u0275element(9, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 5);
      \u0275\u0275listener("click", function ExpenseReportComponent_Template_a_click_11_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(12, ExpenseReportComponent_Conditional_12_Template, 1, 0, "i", 6);
      \u0275\u0275conditionalCreate(13, ExpenseReportComponent_Conditional_13_Template, 1, 0, "i", 6);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "form")(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "label", 14);
      \u0275\u0275text(23, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 12)(26, "div", 15)(27, "label", 14);
      \u0275\u0275text(28, "Expense Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-select", 16)(30, "mat-option", 17);
      \u0275\u0275text(31, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-option", 17);
      \u0275\u0275text(33, "Electricity Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-option", 17);
      \u0275\u0275text(35, "Stationery Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-option", 17);
      \u0275\u0275text(37, "AC Repair Service");
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
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 12)(52, "div", 15)(53, "label", 14);
      \u0275\u0275text(54, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-select", 16)(56, "mat-option", 17);
      \u0275\u0275text(57, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-option", 17);
      \u0275\u0275text(59, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 17);
      \u0275\u0275text(61, "Pending");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(62, "div", 18)(63, "div", 15)(64, "button", 19);
      \u0275\u0275text(65, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(66, "div", 20)(67, "div", 21)(68, "div")(69, "h4");
      \u0275\u0275text(70, "Expense Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "ul", 2)(72, "li", 22)(73, "a", 23);
      \u0275\u0275element(74, "img", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "li", 22)(76, "a", 25);
      \u0275\u0275element(77, "img", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "li")(79, "a", 27);
      \u0275\u0275element(80, "i", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "div", 29)(82, "div", 30)(83, "table", 31);
      \u0275\u0275listener("matSortChange", function ExpenseReportComponent_Template_table_matSortChange_83_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(84, "thead", 32)(85, "tr")(86, "th", 33);
      \u0275\u0275text(87, "Expense Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 34);
      \u0275\u0275text(89, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 35);
      \u0275\u0275text(91, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 36);
      \u0275\u0275text(93, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 37);
      \u0275\u0275text(95, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 37);
      \u0275\u0275text(97, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "tbody", 38);
      \u0275\u0275repeaterCreate(99, ExpenseReportComponent_For_100_Template, 14, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(101, ExpenseReportComponent_Conditional_101_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(102, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance(86);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 101 : -1);
    }
  }, dependencies: [CommonModule, NgClass, CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseReportComponent, [{
    type: Component,
    args: [{ selector: "app-expense-report", imports: [CommonModule, CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, FormsModule, MatSortModule], template: `<div class="page-header justify-content-between">
  <div class="page-title">
    <h4>Expenses</h4>
    <h6>Manage your Expenses</h6>
  </div>
  <ul class="table-top-head">
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Refresh"
        matTooltip="Refresh"
        matTooltipPosition="above"
        ><i class="ti ti-refresh"></i
      ></a>
    </li>
    <li>
      <a
        (click)="toggleCollapse()" [class.active]="isCollapsed"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Collapse"
        matTooltip="Collapse"
        matTooltipPosition="above"
        id="collapse-header"
      >
        @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
        } @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
        }</a
      >
    </li>
  </ul>
</div>
<div class="card border-0">
  <div class="card-body pb-1">
    <form>
      <div class="row align-items-end">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-md-3">
              <div class="mb-3 custom-ngxdate">
                <label class="form-label">Choose Date</label>
                <app-date-range-picker/>                
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label class="form-label">Expense Category</label>
                <mat-select class="custom-mat-select select" placeholder="All">
                  <mat-option value="1">All</mat-option>
                  <mat-option value="1">Electricity Payment</mat-option>
                  <mat-option value="1">Stationery Purchase</mat-option>
                  <mat-option value="1">AC Repair Service</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label class="form-label">Payment Method</label>
                <mat-select class="custom-mat-select select" placeholder="All">
                  <mat-option value="1">All</mat-option>
                  <mat-option value="1">Paypal</mat-option>
                  <mat-option value="1">Cash</mat-option>
                  <mat-option value="1">Credit Card</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label class="form-label">Status</label>
                <mat-select class="custom-mat-select select" placeholder="All">
                  <mat-option value="1">All</mat-option>
                  <mat-option value="1">Approved</mat-option>
                  <mat-option value="1">Pending</mat-option>
                </mat-select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="mb-3">
            <button class="btn btn-primary w-100" type="submit">Generate Report</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
<!-- /product list -->
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div>
      <h4>Expense Report</h4>
    </div>
    <ul class="table-top-head">
      <li class="me-2">
        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
      </li>
      <li class="me-2">
        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
      </li>
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table
        class="table datanew"
        (matSortChange)="sortData($event)"
        matSort
        matSortActive="Sno"
        matSortDirection="asc"
        matSortDisableClear
      >
        <thead class="thead-light">
          <tr>
            <th mat-sort-header="name">Expense Name</th>
            <th mat-sort-header="expense">Category</th>
            <th mat-sort-header="user">Description</th>
            <th mat-sort-header="date">Date</th>
            <th mat-sort-header="amountDue">Amount</th>
            <th mat-sort-header="amountDue">Status</th>
          </tr>
        </thead>
        <tbody class="Expense-list">
          @for (data of tableData; track data) {
            <tr>
              <td>{{data.expenseName}}</td>
              <td>{{data.category}}</td>
              <td>{{data.description}}</td>
              <td>{{data.date}}</td>
              <td>{{data.amount}}</td>
              <td>
                <span class="badge d-inline-flex align-items-center badge-xs" [ngClass]="data.status==='Pending'?'badge-cyan':'badge-success'">
                  {{data.status}}
                </span>
              </td>
            </tr>
          }@if(tableData.length === 0){
            <tr>
                <td class="text-center" colspan="12">No Matching Data Found</td>
            </tr>
        }
        </tbody>
      </table>
    </div>
    <app-custom-pagination></app-custom-pagination>
  </div>
</div>
<!-- /product list -->
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }, { type: CommonService }, { type: Renderer2 }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseReportComponent, { className: "ExpenseReportComponent", filePath: "src/app/features/pages/reports/expense-report/expense-report.component.ts", lineNumber: 25 });
})();
export {
  ExpenseReportComponent
};
//# sourceMappingURL=chunk-EB5HDR75.js.map
