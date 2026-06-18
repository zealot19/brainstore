import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
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
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/financial-settings/bank-settings-list/bank-settings-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "setclose": a0 });
var _c2 = (a0, a1) => ({ "d-block": a0, "d-none": a1 });
function BankSettingsListComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("value", data_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.value, " ");
  }
}
function BankSettingsListComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("value", data_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.value, " ");
  }
}
function BankSettingsListComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275property("value", data_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3.value, " ");
  }
}
function BankSettingsListComponent_For_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 93);
    \u0275\u0275element(3, "input", 94)(4, "span", 47);
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 95)(18, "div", 96)(19, "a", 97);
    \u0275\u0275element(20, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 99);
    \u0275\u0275element(22, "i", 100);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", data_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r4.bank, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r4.branch, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.accountNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.ifsc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4.createdOn);
  }
}
var BankSettingsListComponent = class _BankSettingsListComponent {
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
        if (this.router.url == this.routes.bankSettingsList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBankSettingsList().subscribe((apiRes) => {
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Sort by Date" },
    { value: "Mathew" },
    { value: "John Smith" },
    { value: "Andrew" }
  ];
  selectedList3 = [
    { value: "Choose Bank" },
    { value: "HDFC" },
    { value: "Swiss Bank" },
    { value: "Canara Bank" }
  ];
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
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  static \u0275fac = function BankSettingsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankSettingsListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankSettingsListComponent, selectors: [["app-bank-settings-list"]], decls: 226, vars: 22, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header", "bank-settings", "justify-content-end"], [1, "btn-list", "me-2", "active", 3, "routerLink"], [1, "feather", "icon-list", "feather-user"], [1, "btn-grid", 3, "routerLink"], [1, "feather", "icon-grid", "feather-user"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-account", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-user", "info-img"], ["placeholder", "Choose Name", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-edit-2", "info-img"], ["placeholder", "Choose Bank", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table-responsive", 3, "matSortChange"], [1, "table", "datanew"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "bank"], ["mat-sort-header", "branch"], ["mat-sort-header", "accountNo"], ["mat-sort-header", "ifsc"], ["mat-sort-header", "createdOn"], ["id", "add-account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header", "custom-class-modal"], [1, "page-title"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-account", 1, "modal", "fade"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "text", "value", "HDFC", 1, "form-control"], ["type", "text", "value", "**** **** 1832", 1, "form-control"], ["type", "text", "value", "Mathew", 1, "form-control"], ["type", "text", "value", "Bringham", 1, "form-control"], ["type", "text", "value", "124547", 1, "form-control"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], [1, "checkboxs"], ["type", "checkbox"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-account", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"]], template: function BankSettingsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Bank Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275text(16, "Add New Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 0)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "a", 19);
      \u0275\u0275element(25, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 21)(27, "label")(28, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function BankSettingsListComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BankSettingsListComponent_Template_input_ngModelChange_28_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(29, "div", 23)(30, "div", 24)(31, "a", 25);
      \u0275\u0275listener("click", function BankSettingsListComponent_Template_a_click_31_listener() {
        return ctx.openFilter();
      });
      \u0275\u0275element(32, "i", 26);
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275element(34, "img", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 28);
      \u0275\u0275element(36, "i", 29);
      \u0275\u0275elementStart(37, "mat-select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function BankSettingsListComponent_Template_mat_select_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(38, BankSettingsListComponent_For_39_Template, 2, 2, "mat-option", 31, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 32)(41, "div", 33)(42, "div", 0)(43, "div", 34)(44, "div", 35);
      \u0275\u0275element(45, "i", 36);
      \u0275\u0275elementStart(46, "mat-select", 37);
      \u0275\u0275twoWayListener("ngModelChange", function BankSettingsListComponent_Template_mat_select_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(47, BankSettingsListComponent_For_48_Template, 2, 2, "mat-option", 31, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 34)(50, "div", 35);
      \u0275\u0275element(51, "i", 38);
      \u0275\u0275elementStart(52, "mat-select", 39);
      \u0275\u0275twoWayListener("ngModelChange", function BankSettingsListComponent_Template_mat_select_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(53, BankSettingsListComponent_For_54_Template, 2, 2, "mat-option", 31, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 40)(56, "div", 35)(57, "a", 41);
      \u0275\u0275element(58, "i", 20);
      \u0275\u0275text(59, " Search ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(60, "div", 42);
      \u0275\u0275listener("matSortChange", function BankSettingsListComponent_Template_div_matSortChange_60_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(61, "table", 43)(62, "thead")(63, "tr")(64, "th", 44)(65, "label", 45);
      \u0275\u0275listener("click", function BankSettingsListComponent_Template_label_click_65_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(66, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function BankSettingsListComponent_Template_input_ngModelChange_66_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "span", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "th", 48);
      \u0275\u0275text(69, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 49);
      \u0275\u0275text(71, "Bank");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 50);
      \u0275\u0275text(73, "Branch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 51);
      \u0275\u0275text(75, "Account No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 52);
      \u0275\u0275text(77, "IFSC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 53);
      \u0275\u0275text(79, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 44);
      \u0275\u0275text(81, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "tbody");
      \u0275\u0275repeaterCreate(83, BankSettingsListComponent_For_84_Template, 23, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(85, "app-custom-pagination");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(86, "div", 54)(87, "div", 55)(88, "div", 56)(89, "div", 57)(90, "div", 58)(91, "div", 59)(92, "div", 60)(93, "h4");
      \u0275\u0275text(94, "Add Bank Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 61);
      \u0275\u0275element(96, "input", 62)(97, "label", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "button", 64)(99, "span", 65);
      \u0275\u0275text(100, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 66)(102, "form")(103, "div", 0)(104, "div", 13)(105, "div", 67)(106, "label", 68);
      \u0275\u0275text(107, "Bank Name ");
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(110, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 13)(112, "div", 67)(113, "label", 68);
      \u0275\u0275text(114, "Account Number ");
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(117, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 13)(119, "div", 67)(120, "label", 68);
      \u0275\u0275text(121, "Account Name ");
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(124, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 13)(126, "div", 67)(127, "label", 68);
      \u0275\u0275text(128, "Branch ");
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(131, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 13)(133, "div", 67)(134, "label", 68);
      \u0275\u0275text(135, "IFSC ");
      \u0275\u0275elementStart(136, "span");
      \u0275\u0275text(137, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(138, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 13)(140, "div", 70)(141, "span", 71);
      \u0275\u0275text(142, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(143, "input", 72)(144, "label", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 13)(146, "div", 74)(147, "span", 71);
      \u0275\u0275text(148, "Make as default");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "input", 75)(150, "label", 76);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "div", 77)(152, "button", 78);
      \u0275\u0275text(153, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "button", 79);
      \u0275\u0275text(155, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(156, "div", 80)(157, "div", 55)(158, "div", 56)(159, "div", 57)(160, "div", 58)(161, "div", 81)(162, "div", 60)(163, "h4");
      \u0275\u0275text(164, "Edit Bank Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 61);
      \u0275\u0275element(166, "input", 82)(167, "label", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "button", 64)(169, "span", 65);
      \u0275\u0275text(170, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 66)(172, "form")(173, "div", 0)(174, "div", 13)(175, "div", 67)(176, "label", 68);
      \u0275\u0275text(177, "Bank Name ");
      \u0275\u0275elementStart(178, "span");
      \u0275\u0275text(179, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(180, "input", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "div", 13)(182, "div", 67)(183, "label", 68);
      \u0275\u0275text(184, "Account Number ");
      \u0275\u0275elementStart(185, "span");
      \u0275\u0275text(186, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(187, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div", 13)(189, "div", 67)(190, "label", 68);
      \u0275\u0275text(191, "Account Name ");
      \u0275\u0275elementStart(192, "span");
      \u0275\u0275text(193, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(194, "input", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div", 13)(196, "div", 67)(197, "label", 68);
      \u0275\u0275text(198, "Branch ");
      \u0275\u0275elementStart(199, "span");
      \u0275\u0275text(200, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(201, "input", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 13)(203, "div", 67)(204, "label", 68);
      \u0275\u0275text(205, "IFSC ");
      \u0275\u0275elementStart(206, "span");
      \u0275\u0275text(207, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(208, "input", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "div", 13)(210, "div", 70)(211, "span", 71);
      \u0275\u0275text(212, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(213, "input", 89)(214, "label", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "div", 13)(216, "div", 74)(217, "span", 71);
      \u0275\u0275text(218, "Make as default");
      \u0275\u0275elementEnd();
      \u0275\u0275element(219, "input", 91)(220, "label", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 77)(222, "button", 78);
      \u0275\u0275text(223, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "button", 79);
      \u0275\u0275text(225, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.bankSettingsList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.bankSettingsGrid);
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c1, ctx.filter === true));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c2, ctx.filter, !ctx.filter));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue2);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList2);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue3);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList3);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [SettingsSidebarComponent, CustomPaginationComponent, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankSettingsListComponent, [{
    type: Component,
    args: [{ selector: "app-bank-settings-list", imports: [SettingsSidebarComponent, CustomPaginationComponent, CommonModule, FormsModule, MatSortModule, MatSelectModule, RouterLink], template: `<div class="row">
    <div class="col-xl-12">
      <div class="settings-wrapper d-flex">
        <app-settings-sidebar></app-settings-sidebar>
        <div class="settings-page-wrap w-50">
          <div class="setting-title">
            <h4>Bank Account</h4>
          </div>
          <div class="page-header bank-settings justify-content-end">
            <a [routerLink] = "routes.bankSettingsList" class="btn-list me-2 active"><i
            class="feather icon-list feather-user"></i></a>
            <a [routerLink] = "routes.bankSettingsGrid" class="btn-grid"><i
            class="feather icon-grid feather-user"></i></a>
            <div class="page-btn">
              <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-account"><i
              class="ti ti-circle-plus me-2"></i>Add New Account</a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card table-list-card">
                <div class="card-body">
                  <div class="table-top">
                    <div class="search-set">
                      <div class="search-input">
                        <a href="javascript:void(0);" class="btn btn-searchset"><i
                        class="feather icon-search feather-search"></i></a>
                        <div class="dataTables_filter">
                          <label>
                            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"
                              (ngModelChange)="searchData(searchDataValue)" type="search"
                              class="form-control" placeholder="Search..." />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="search-path">
                        <div class="d-flex align-items-center">
                          <a class="btn btn-filter" id="filter_search" (click)="openFilter()" [ngClass]="{'setclose': filter === true}">
                            <i class="feather icon-filter filter-icon"></i>
                            <span><img src="assets/img/icons/closes.svg" alt="img"></span>
                          </a>
                        </div>
                      </div>
                      <div class="form-sort">
                        <i class="feather icon-sliders info-img"></i>
                        <mat-select [(ngModel)]="selectedValue1" [ngModelOptions]="{standalone: true}"
                          class="select space-select" placeholder="Sort by Date">
                          @for (data of selectedList1; track data) {
                            <mat-option [value]="data.value">
                              {{data.value}}
                            </mat-option>
                          }
                        </mat-select>
                      </div>
                    </div>
                    <!-- /Filter -->
                    <div class="card" id="filter_inputs" [ngClass]="{'d-block': filter, 'd-none': !filter}">
                      <div class="card-body pb-0">
                        <div class="row">
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="input-blocks">
                              <i class="feather icon-user info-img"></i>
                              <mat-select [(ngModel)]="selectedValue2"
                                [ngModelOptions]="{standalone: true}" class="space-select select"
                                placeholder="Choose Name">
                                @for (data of selectedList2; track data) {
                                  <mat-option
                                    [value]="data.value">
                                    {{data.value}}
                                  </mat-option>
                                }
                              </mat-select>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="input-blocks">
                              <i class="feather icon-edit-2 info-img"></i>
                              <mat-select [(ngModel)]="selectedValue3"
                                [ngModelOptions]="{standalone: true}" class="space-select select"
                                placeholder="Choose Bank">
                                @for (data of selectedList3; track data) {
                                  <mat-option
                                    [value]="data.value">
                                    {{data.value}}
                                  </mat-option>
                                }
                              </mat-select>
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6 col-12 ms-auto">
                            <div class="input-blocks">
                              <a class="btn btn-filters ms-auto"> <i
                              class="feather icon-search feather-search"></i> Search </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /Filter -->
                    <div class="table-responsive" (matSortChange)="sortData($event)" matSort
                      matSortActive="Sno" matSortDirection="asc" matSortDisableClear>
                      <table class="table  datanew">
                        <thead>
                          <tr>
                            <th class="no-sort">
                              <label class="checkboxs" (click)="selectAll(initChecked)">
                                <input type="checkbox"  [(ngModel)]="initChecked">
                                <span class="checkmarks"></span>
                              </label>
                            </th>
                            <th mat-sort-header="name">Name</th>
                            <th mat-sort-header="bank">Bank</th>
                            <th mat-sort-header="branch">Branch</th>
                            <th mat-sort-header="accountNo">Account No</th>
                            <th mat-sort-header="ifsc">IFSC</th>
                            <th mat-sort-header="createdOn">Created On</th>
                            <th class="no-sort">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          @for (data of tableData; track data) {
                            <tr>
                              <td>
                                <label class="checkboxs">
                                  <input type="checkbox">
                                  <span class="checkmarks"></span>
                                </label>
                              </td>
                              <td>
                                {{data.name}}
                              </td>
                              <td>
                                {{data.bank}}
                              </td>
                              <td>
                                {{data.branch}}
                              </td>
                              <td>{{data.accountNo}}</td>
                              <td>{{data.ifsc}}</td>
                              <td>{{data.createdOn}}</td>
                              <td class="action-table-data">
                                <div class="edit-delete-action">
                                  <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#edit-account">
                                    <i class="feather icon-edit feather-edit"></i>
                                  </a>
                                  <a class=" p-2" href="javascript:void(0);"
                                    >
                                    <i class="feather icon-trash-2 feather-trash-2"></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </div>
                    <app-custom-pagination></app-custom-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Add Bank Account -->
    <div class="modal fade" id="add-account">
      <div class="modal-dialog modal-dialog-centered custom-modal-two">
        <div class="modal-content">
          <div class="page-wrapper-new p-0">
            <div class="content">
              <div class="modal-header border-0 custom-modal-header custom-class-modal">
                <div class="page-title">
                  <h4>Add Bank Account</h4>
                </div>
                <div
                  class="status-toggle modal-status d-flex justify-content-between align-items-center ms-auto me-2">
                  <input type="checkbox" id="user1" class="check" checked>
                  <label for="user1" class="checktoggle"> </label>
                </div>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body custom-modal-body">
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Bank Name <span> *</span></label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Account Number <span> *</span></label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Account Name <span> *</span></label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Branch <span> *</span></label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">IFSC <span> *</span></label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div
                        class="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
                        <span class="status-label">Status</span>
                        <input type="checkbox" id="user2" class="check" checked="">
                        <label for="user2" class="checktoggle"></label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div
                        class="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span class="status-label">Make as default</span>
                        <input type="checkbox" id="user3" class="check" checked="">
                        <label for="user3" class="checktoggle"></label>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer-btn">
                    <button type="button" class="btn btn-cancel me-2"
                    data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Bank Account -->

    <!-- Edit Bank Account -->
    <div class="modal fade" id="edit-account">
      <div class="modal-dialog modal-dialog-centered custom-modal-two">
        <div class="modal-content">
          <div class="page-wrapper-new p-0">
            <div class="content">
              <div class="modal-header border-0 custom-modal-header">
                <div class="page-title">
                  <h4>Edit Bank Account</h4>
                </div>
                <div
                  class="status-toggle modal-status d-flex justify-content-between align-items-center ms-auto me-2">
                  <input type="checkbox" id="user4" class="check" checked>
                  <label for="user4" class="checktoggle"> </label>
                </div>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body custom-modal-body">
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Bank Name <span> *</span></label>
                        <input type="text" class="form-control" value="HDFC">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Account Number <span> *</span></label>
                        <input type="text" class="form-control" value="**** **** 1832">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Account Name <span> *</span></label>
                        <input type="text" class="form-control" value="Mathew">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Branch <span> *</span></label>
                        <input type="text" class="form-control" value="Bringham">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">IFSC <span> *</span></label>
                        <input type="text" class="form-control" value="124547">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div
                        class="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
                        <span class="status-label">Status</span>
                        <input type="checkbox" id="user5" class="check" checked="">
                        <label for="user5" class="checktoggle"></label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div
                        class="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span class="status-label">Make as default</span>
                        <input type="checkbox" id="user6" class="check" checked="">
                        <label for="user6" class="checktoggle"></label>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer-btn">
                    <button type="button" class="btn btn-cancel me-2"
                    data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-submit">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Edit Bank Account -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankSettingsListComponent, { className: "BankSettingsListComponent", filePath: "src/app/features/pages/settings/financial-settings/bank-settings-list/bank-settings-list.component.ts", lineNumber: 29 });
})();
export {
  BankSettingsListComponent
};
//# sourceMappingURL=chunk-N2RFV6MM.js.map
