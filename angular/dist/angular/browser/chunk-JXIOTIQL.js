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
  CheckboxControlValueAccessor,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/user-management/delete-account/delete-account.component.ts
var _c0 = () => ({ standalone: true });
function DeleteAccountComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function DeleteAccountComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function DeleteAccountComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 24);
    \u0275\u0275listener("click", function DeleteAccountComponent_For_47_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function DeleteAccountComponent_For_47_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 43)(7, "a", 44);
    \u0275\u0275element(8, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "a", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 47)(17, "div", 48)(18, "a", 49);
    \u0275\u0275element(19, "i", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const users_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", users_r3.userImg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(users_r3.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(users_r3.requisition);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", users_r3.delete, " ");
  }
}
function DeleteAccountComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var DeleteAccountComponent = class _DeleteAccountComponent {
  data;
  pagination;
  router;
  sidebar;
  routes = routes;
  selectedValue1 = "";
  initChecked = false;
  tableData = [];
  // pagination variables
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
        if (this.router.url == this.routes.deleteAccount) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDeleteAccount().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function DeleteAccountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeleteAccountComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteAccountComponent, selectors: [["app-delete-account"]], decls: 66, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-body", "pb-0"], [1, "table-top", "table-top-two"], [1, "input-blocks", "search-set", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "username"], ["mat-sort-header", "requistion"], ["mat-sort-header", "delete"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "product-img"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function DeleteAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Delete Account Request");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "ul", 3)(6, "li")(7, "a", 4);
      \u0275\u0275element(8, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 6);
      \u0275\u0275element(11, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 8);
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 10);
      \u0275\u0275listener("click", function DeleteAccountComponent_Template_a_click_16_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(17, DeleteAccountComponent_Conditional_17_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(18, DeleteAccountComponent_Conditional_18_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "a", 17);
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19)(27, "label")(28, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function DeleteAccountComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DeleteAccountComponent_Template_input_ngModelChange_28_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(29, "div", 21)(30, "table", 22);
      \u0275\u0275listener("matSortChange", function DeleteAccountComponent_Template_table_matSortChange_30_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(31, "thead")(32, "tr")(33, "th", 23)(34, "label", 24);
      \u0275\u0275listener("click", function DeleteAccountComponent_Template_label_click_34_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(35, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function DeleteAccountComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "span", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "th", 27);
      \u0275\u0275text(38, "User Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 28);
      \u0275\u0275text(40, "Requisition Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 29);
      \u0275\u0275text(42, "Delete Request Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 23);
      \u0275\u0275text(44, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "tbody");
      \u0275\u0275repeaterCreate(46, DeleteAccountComponent_For_47_Template, 20, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(48, DeleteAccountComponent_Conditional_48_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(49, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 30)(51, "div", 31)(52, "div", 32)(53, "div", 33)(54, "div", 34)(55, "span", 35);
      \u0275\u0275element(56, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h4", 37);
      \u0275\u0275text(58, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 38);
      \u0275\u0275text(60, "Are you sure you want to delete this account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 39)(62, "button", 40);
      \u0275\u0275text(63, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 41);
      \u0275\u0275text(65, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 18 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 48 : -1);
    }
  }, dependencies: [MatSelectModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteAccountComponent, [{
    type: Component,
    args: [{ selector: "app-delete-account", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '\n<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Delete Account Request</h4>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Pdf"\n        matTooltip="Pdf"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/pdf.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Excel"\n        matTooltip="Excel"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/excel.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Refresh"\n        matTooltip="Refresh"\n        matTooltipPosition="above"\n        ><i class="ti ti-refresh"></i\n      ></a>\n    </li>\n    <li>\n      <a\n        (click)="toggleCollapse()" [class.active]="isCollapsed"\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Collapse"\n        matTooltip="Collapse"\n        matTooltipPosition="above"\n        id="collapse-header"\n        > @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-body pb-0">\n    <div class="table-top table-top-two">\n      <div class="input-blocks search-set mb-0">\n        <div class="search-input">\n          <a href="javascript:void(0);" class="btn btn-searchset"\n            ><i class="feather icon-search feather-search"></i\n          ></a>\n          <div class="dataTables_filter">\n            <label>\n              <input\n                [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="searchData(searchDataValue)"\n                type="search"\n                class="form-control"\n                placeholder="Search"\n                />\n              </label>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <div class="table-responsive">\n        <table\n          (matSortChange)="sortData($event)"\n          matSort\n          matSortActive="Sno"\n          matSortDirection="asc"\n          matSortDisableClear\n          class="table  datanew">\n          <thead>\n            <tr>\n              <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n              <th mat-sort-header="username">User Name</th>\n              <th mat-sort-header="requistion">Requisition Date</th>\n              <th mat-sort-header="delete">Delete Request Date</th>\n              <th class="no-sort">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (users of tableData; track users; let i = $index) {\n              <tr>\n                <td>\n                      <label class="checkboxs" (click)="selectAll(initChecked)">\n                        <input type="checkbox"  [(ngModel)]="initChecked"/>\n                        <span class="checkmarks"></span>\n                      </label>\n                    </td>\n                <td>\n                  <div class="userimgname">\n                    <a href="javascript:void(0);" class="product-img">\n                      <img [src]="users.userImg" alt="product">\n                    </a>\n                    <div>\n                      <a href="javascript:void(0);">{{users.userName}}</a>\n                    </div>\n\n                  </div>\n                </td>\n                <td>{{users.requisition}}</td>\n                <td>\n                  {{users.delete}}\n                </td>\n                <td class="action-table-data">\n                  <div class="edit-delete-action">\n                    <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                      <i  class="feather icon-trash-2 feather-trash-2" ></i>\n                    </a>\n                  </div>\n\n                </td>\n              </tr>\n              }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n          </tbody>\n        </table>\n\n      </div>\n      <app-custom-pagination></app-custom-pagination>\n    </div>\n  </div>\n  <!-- /product list -->\n\n  		<!-- delete modal -->\n			<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Account</h4>\n								<p class="mb-0 fs-16">Are you sure you want to delete this account?</p>\n								<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n								</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAccountComponent, { className: "DeleteAccountComponent", filePath: "src/app/features/pages/user-management/delete-account/delete-account.component.ts", lineNumber: 25 });
})();
export {
  DeleteAccountComponent
};
//# sourceMappingURL=chunk-JXIOTIQL.js.map
