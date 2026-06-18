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
import "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
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
import "./chunk-FAMT7JRV.js";
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

// src/app/features/pages/ui-interface/table/data-tables/data-tables.component.ts
var _c0 = () => ({ standalone: true });
function DataTablesComponent_For_45_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.office);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r1.salary);
  }
}
function DataTablesComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25)(2, "h5", 26);
    \u0275\u0275text(3, "No matching records found");
    \u0275\u0275elementEnd()()();
  }
}
var DataTablesComponent = class _DataTablesComponent {
  data;
  router;
  pagination;
  initChecked = false;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  routes = routes;
  // pagination variables
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  row = true;
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getDataTable().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.dataTable) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDataTable().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    });
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
  static \u0275fac = function DataTablesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataTablesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataTablesComponent, selectors: [["app-data-tables"]], decls: 48, vars: 5, consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-text"], [1, "card-body"], [1, "table-top"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "Name"], ["mat-sort-header", "Position"], ["mat-sort-header", "Office"], ["mat-sort-header", "Age"], ["mat-sort-header", "Startdate"], ["mat-sort-header", "Salary"], ["colspan", "12"], [1, "no-record"]], template: function DataTablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Data Tables");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "Data Tables");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h4", 11);
      \u0275\u0275text(16, "Default Datatable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 12);
      \u0275\u0275text(18, " This is the most basic example of the datatables with zero configuration. Use the ");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, ".datatable");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " class to initialize datatables. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "label")(26, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function DataTablesComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DataTablesComponent_Template_input_ngModelChange_26_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "table", 18);
      \u0275\u0275listener("matSortChange", function DataTablesComponent_Template_table_matSortChange_28_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(29, "thead")(30, "tr")(31, "th", 19);
      \u0275\u0275text(32, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 20);
      \u0275\u0275text(34, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 21);
      \u0275\u0275text(36, "Office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 22);
      \u0275\u0275text(38, "Age");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 23);
      \u0275\u0275text(40, "Start date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 24);
      \u0275\u0275text(42, "Salary");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "tbody");
      \u0275\u0275repeaterCreate(44, DataTablesComponent_For_45_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(46, DataTablesComponent_Conditional_46_Template, 4, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(47, "app-custom-pagination");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 46 : -1);
    }
  }, dependencies: [CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTablesComponent, [{
    type: Component,
    args: [{ selector: "app-data-tables", imports: [CustomPaginationComponent, MatSortModule, FormsModule, MatSortModule, RouterLink], template: '<!-- Page Header -->\n<div class="page-header">\n  <div class="row">\n    <div class="col">\n      <h3 class="page-title">Data Tables</h3>\n      <ul class="breadcrumb">\n        <li class="breadcrumb-item"><a [routerLink]="routes.index">Dashboard</a></li>\n        <li class="breadcrumb-item active">Data Tables</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  <div class="col-sm-12">\n    <div class="card">\n      <div class="card-header">\n        <h4 class="card-title">Default Datatable</h4>\n        <p class="card-text">\n          This is the most basic example of the datatables with zero configuration. Use the\n          <code>.datatable</code> class to initialize datatables.\n        </p>\n      </div>\n      <div class="card-body">\n        <div class="table-top">\n          <div class="dataTables_filter">\n            <label>\n              <input\n                [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="searchData(searchDataValue)"\n                type="search"\n                class="form-control"\n                placeholder="Search..."\n                />\n              </label>\n            </div>\n          </div>\n          <div class="table-responsive">\n            <table (matSortChange)="sortData($event)" matSort matSortActive="Sno" matSortDirection="asc"\n              matSortDisableClear class="table datanew">\n              <thead>\n                <tr>\n                  <th mat-sort-header="Name">Name</th>\n                  <th mat-sort-header="Position">Position</th>\n                  <th mat-sort-header="Office">Office</th>\n                  <th mat-sort-header="Age">Age</th>\n                  <th mat-sort-header="Startdate">Start date</th>\n                  <th mat-sort-header="Salary">Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (table of tableData; track table) {\n                  <tr>\n                    <td>{{table.name}}</td>\n                    <td>{{table.position}}</td>\n                    <td>{{table.office}}</td>\n                    <td>{{table.age}}</td>\n                    <td>{{table.startDate}}</td>\n                    <td>{{table.salary}}</td>\n                  </tr>\n                }\n                @if (tableData.length === 0) {\n                  <tr>\n                    <td colspan="12">\n                      <h5 class="no-record">No matching records found</h5>\n                    </td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n            \n          </div>\n          <app-custom-pagination></app-custom-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n\n ' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataTablesComponent, { className: "DataTablesComponent", filePath: "src/app/features/pages/ui-interface/table/data-tables/data-tables.component.ts", lineNumber: 22 });
})();
export {
  DataTablesComponent
};
//# sourceMappingURL=chunk-C233MU2C.js.map
