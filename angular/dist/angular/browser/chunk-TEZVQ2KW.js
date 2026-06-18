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
  ɵɵinterpolate1,
  ɵɵlistener,
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

// src/app/features/pages/reports/supplier-due-report/supplier-due-report.component.ts
function SupplierDueReportComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function SupplierDueReportComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function SupplierDueReportComponent_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 44)(8, "a", 45);
    \u0275\u0275element(9, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h6", 47)(11, "a", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 49);
    \u0275\u0275element(21, "i", 50);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/supplier/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.due);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Unpaid" ? " badge-danger" : data_r1.status === "Overdue" ? " badge-purple" : " badge-success");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r1.status, " ");
  }
}
function SupplierDueReportComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var SupplierDueReportComponent = class _SupplierDueReportComponent {
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
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.supplierDueReport) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSupplierDueReport().subscribe((apiRes) => {
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
  static \u0275fac = function SupplierDueReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierDueReportComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierDueReportComponent, selectors: [["app-supplier-due-report"]], decls: 119, vars: 7, consts: [[1, "mb-4"], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", "active", 3, "routerLink"], [1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card", "no-search"], [1, "card-body"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], ["colspan", "3", "rowspan", "1", 1, "bg-light", "fw-bold", "p-3", "fs-16"], ["rowspan", "1", "colspan", "1", 1, "bg-light", "fw-bold", "p-3", "fs-16"], ["colspan", "2", "rowspan", "1", 1, "bg-light", "fw-bold", "p-3", "fs-16"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "Img", 3, "src"], [1, "fw-medium"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], ["colspan", "12", 1, "text-center"]], template: function SupplierDueReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      \u0275\u0275text(4, "Supplier Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "a", 4);
      \u0275\u0275text(7, "Supplier Due");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div")(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h4");
      \u0275\u0275text(13, "Supplier Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h6");
      \u0275\u0275text(15, "View Reports of Supplier Due");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "ul", 8)(17, "li")(18, "a", 9);
      \u0275\u0275element(19, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 11);
      \u0275\u0275listener("click", function SupplierDueReportComponent_Template_a_click_21_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(22, SupplierDueReportComponent_Conditional_22_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(23, SupplierDueReportComponent_Conditional_23_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 14)(26, "form")(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "label", 20);
      \u0275\u0275text(33, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 18)(36, "div", 21)(37, "label", 20);
      \u0275\u0275text(38, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-select", 22)(40, "mat-option", 23);
      \u0275\u0275text(41, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-option", 23);
      \u0275\u0275text(43, "Apex Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-option", 23);
      \u0275\u0275text(45, "Beats Headphones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-option", 23);
      \u0275\u0275text(47, "Dazzle Shoes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 21)(50, "label", 20);
      \u0275\u0275text(51, "Payment Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-select", 22)(53, "mat-option", 23);
      \u0275\u0275text(54, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-option", 23);
      \u0275\u0275text(56, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-option", 23);
      \u0275\u0275text(58, "Unpaid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 23);
      \u0275\u0275text(60, "Overdue");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 18)(62, "div", 21)(63, "label", 20);
      \u0275\u0275text(64, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 25)(67, "div", 21)(68, "button", 26);
      \u0275\u0275text(69, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(70, "div", 27)(71, "div", 28)(72, "div", 29)(73, "div")(74, "h4");
      \u0275\u0275text(75, "Supplier Due Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "ul", 8)(77, "li", 30)(78, "a", 31);
      \u0275\u0275element(79, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li", 30)(81, "a", 33);
      \u0275\u0275element(82, "img", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 35);
      \u0275\u0275element(85, "i", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div", 37)(87, "table", 38);
      \u0275\u0275listener("matSortChange", function SupplierDueReportComponent_Template_table_matSortChange_87_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(88, "thead", 39)(89, "tr")(90, "th");
      \u0275\u0275text(91, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th");
      \u0275\u0275text(93, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th");
      \u0275\u0275text(95, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th");
      \u0275\u0275text(97, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th");
      \u0275\u0275text(99, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th");
      \u0275\u0275text(101, "Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th");
      \u0275\u0275text(103, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "tbody");
      \u0275\u0275repeaterCreate(105, SupplierDueReportComponent_For_106_Template, 23, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(107, SupplierDueReportComponent_Conditional_107_Template, 3, 0, "tr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "tfoot")(109, "tr")(110, "td", 40);
      \u0275\u0275text(111, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "td", 41);
      \u0275\u0275text(113, "33268");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "td", 41);
      \u0275\u0275text(115, "$33268.53");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "td", 42);
      \u0275\u0275text(117, "$0.0");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(118, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.supplierReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.supplierDueReport);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 23 : -1);
      \u0275\u0275advance(82);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 107 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, CustomPaginationComponent, MatSortModule, MatSort, RouterLink, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierDueReportComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-due-report", imports: [MatSelectModule, CommonModule, FormsModule, CustomPaginationComponent, MatSortModule, RouterLink, DateRangePickerComponent], template: `<div class="mb-4">
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link" [routerLink]="routes.supplierReport">Supplier Report</a>
        </li>
        <li class="nav-item">
              <a class="nav-link active" [routerLink]="routes.supplierDueReport">Supplier Due</a>
        </li>
    </ul>
</div>
<div>
    <div class="page-header">
        <div class="add-item d-flex">
            <div class="page-title">
                <h4>Supplier Due</h4>
                <h6>View Reports of Supplier Due</h6>
            </div>
        </div>
        <ul class="table-top-head">
            <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i
                class="ti ti-refresh"></i></a>
              </li>
              <li>
                <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"
                  matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {
                  <i class="ti ti-chevron-up"></i>
                }
                @if (isCollapsed) {
                  <i class="ti ti-chevron-up"></i>
                }</a>
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
                                    <label class="form-label">Supplier</label>
                                   <mat-select class="custom-mat-select select" placeholder="All">
                                        <mat-option value="1">All</mat-option>
                                        <mat-option value="1">Apex Computers</mat-option>
                                        <mat-option value="1">Beats Headphones</mat-option>
                                        <mat-option value="1">Dazzle Shoes</mat-option>
                                    </mat-select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label class="form-label">Payment Status</label>
                                   <mat-select class="custom-mat-select select" placeholder="All">
                                        <mat-option value="1">All</mat-option>
                                        <mat-option value="1">Paid</mat-option>
                                        <mat-option value="1">Unpaid</mat-option>
                                        <mat-option value="1">Overdue</mat-option>
                                    </mat-select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label class="form-label">Reference</label>
                                    <input type="text" class="form-control">
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
    <div class="card table-list-card no-search">
        <div class="card-body">
            <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div>
                    <h4>Supplier Due Report</h4>
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
            <div class="table-responsive">
                <table matSort (matSortChange)="sortData($event)" class="table datatable">
                    <thead class="thead-light">
                        <tr>
                            <th>Reference</th>
                            <th>ID</th>
                            <th>Supplier</th>
                            <th>Total Amount</th>
                            <th>Paid</th>
                            <th>Due</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (data of tableData; track data) {
                        <tr>
                            <td><a href="javascript:void(0);" class="text-primary">{{data.reference}}</a></td>
                            <td>{{data.id}}</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                        <img src="assets/img/supplier/{{data.img}}" alt="Img">
                                    </a>
                                    <h6 class="fw-medium"><a href="javascript:void(0);">{{data.supplier}}</a></h6>
                                </div>
                            </td>
                            <td>{{data.totalAmount}}</td>
                            <td>{{data.paid}}</td>
                            <td>{{data.due}}</td>
                            <td>
                                <span class="badge d-inline-flex align-items-center badge-xs" [ngClass]="data.status==='Unpaid'?' badge-danger':data.status==='Overdue'?' badge-purple':' badge-success'">
                                    <i class="ti ti-point-filled me-1"></i>{{data.status}}
                                </span>
                            </td>
                        </tr>
                    }@if(tableData.length === 0){
                        <tr>
                            <td class="text-center" colspan="12">No Matching Data Found</td>
                        </tr>
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="bg-light fw-bold p-3 fs-16" colspan="3" rowspan="1">Total</td>
                            <td class="bg-light fw-bold p-3 fs-16" rowspan="1" colspan="1">33268</td>
                            <td class="bg-light fw-bold p-3 fs-16" rowspan="1" colspan="1">$33268.53</td>
                            <td class="bg-light fw-bold p-3 fs-16" colspan="2" rowspan="1">$0.0</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <app-custom-pagination/>
        </div>
    </div>
    <!-- /product list -->
</div>` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierDueReportComponent, { className: "SupplierDueReportComponent", filePath: "src/app/features/pages/reports/supplier-due-report/supplier-due-report.component.ts", lineNumber: 22 });
})();
export {
  SupplierDueReportComponent
};
//# sourceMappingURL=chunk-TEZVQ2KW.js.map
