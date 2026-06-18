import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  MatTableDataSource,
  MatTableModule
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/financial-settings/currency-settings/currency-settings.component.ts
var _c0 = () => ({ standalone: true });
var CurrencySettingsComponent = class _CurrencySettingsComponent {
  data;
  pagination;
  router;
  sidebar;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  initChecked = false;
  tableData = [];
  routes = routes;
  // pagination variables
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
        if (this.router.url == this.routes.currencySettings) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCurrencySettings().subscribe((apiRes) => {
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
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
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
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Name" },
    { value: "Euro" },
    { value: "England Pound" }
  ];
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  static \u0275fac = function CurrencySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencySettingsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencySettingsComponent, selectors: [["app-currency-settings"]], decls: 231, vars: 3, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-currency", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "table-responsive", "no-pagination"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort", "text-end"], [1, "action-table-data", "justify-content-end"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-currency", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["id", "add-currency", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-currency", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content"], ["type", "text", "value", "Euro", 1, "form-control"], ["type", "text", "value", "EUR", 1, "form-control"], ["type", "text", "value", "\u20AC", 1, "form-control"], ["type", "text", "value", "Default", 1, "form-control"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"]], template: function CurrencySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "a", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14)(19, "label")(20, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function CurrencySettingsComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CurrencySettingsComponent_Template_input_ngModelChange_20_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275text(23, "Add New Currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 18)(25, "table", 19)(26, "thead", 20)(27, "tr")(28, "th");
      \u0275\u0275text(29, "Currency Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Symbol");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Exchange Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 21);
      \u0275\u0275text(39, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody")(41, "tr")(42, "td");
      \u0275\u0275text(43, " Euro ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "td");
      \u0275\u0275text(45, " EUR ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "td");
      \u0275\u0275text(47, " \u20AC ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "td");
      \u0275\u0275text(49, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "td");
      \u0275\u0275text(51, "12 Jul 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "td", 22)(53, "div", 23)(54, "a", 24);
      \u0275\u0275element(55, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "a", 26);
      \u0275\u0275element(57, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "tr")(59, "td");
      \u0275\u0275text(60, " England Pound ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "td");
      \u0275\u0275text(62, " GBP ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "td");
      \u0275\u0275text(64, " \xA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "td");
      \u0275\u0275text(66, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "td");
      \u0275\u0275text(68, "14 Jul 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td", 22)(70, "div", 23)(71, "a", 24);
      \u0275\u0275element(72, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 26);
      \u0275\u0275element(74, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "tr")(76, "td");
      \u0275\u0275text(77, " India Rupee ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "td");
      \u0275\u0275text(79, " INR ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "td");
      \u0275\u0275text(81, " \u20B9 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "td");
      \u0275\u0275text(83, "76.154");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "td");
      \u0275\u0275text(85, "14 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "td", 22)(87, "div", 23)(88, "a", 24);
      \u0275\u0275element(89, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 26);
      \u0275\u0275element(91, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(92, "tr")(93, "td");
      \u0275\u0275text(94, " US Dollar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "td");
      \u0275\u0275text(96, " USD ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "td");
      \u0275\u0275text(98, " $ ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "td");
      \u0275\u0275text(100, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "td");
      \u0275\u0275text(102, "10 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "td", 22)(104, "div", 23)(105, "a", 24);
      \u0275\u0275element(106, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "a", 26);
      \u0275\u0275element(108, "i", 27);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(109, "div", 28)(110, "div", 29)(111, "div", 30)(112, "div", 31)(113, "div", 32)(114, "h4");
      \u0275\u0275text(115, "Add Currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 33)(117, "span", 34);
      \u0275\u0275text(118, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "form")(120, "div", 35)(121, "div", 0)(122, "div", 6)(123, "div", 36)(124, "label", 37);
      \u0275\u0275text(125, "Currency Name ");
      \u0275\u0275elementStart(126, "span");
      \u0275\u0275text(127, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 6)(130, "div", 36)(131, "label", 37);
      \u0275\u0275text(132, "Currency Symbol ");
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(135, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 6)(137, "div", 36)(138, "label", 37);
      \u0275\u0275text(139, "Currency Code ");
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(142, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 6)(144, "div", 36)(145, "label", 37);
      \u0275\u0275text(146, "Currency Rate ");
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275text(148, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(149, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 6)(151, "div", 39)(152, "span", 40);
      \u0275\u0275text(153, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "input", 41)(155, "label", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(156, "div", 43)(157, "button", 44);
      \u0275\u0275text(158, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "button", 45);
      \u0275\u0275text(160, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(161, "div", 46)(162, "div", 29)(163, "div", 30)(164, "div", 47)(165, "div", 48)(166, "div", 31)(167, "div", 32)(168, "h4");
      \u0275\u0275text(169, "Edit Currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "button", 33)(171, "span", 34);
      \u0275\u0275text(172, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "form")(174, "div", 35)(175, "div", 0)(176, "div", 6)(177, "div", 36)(178, "label", 37);
      \u0275\u0275text(179, "Currency Name ");
      \u0275\u0275elementStart(180, "span");
      \u0275\u0275text(181, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(182, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 6)(184, "div", 36)(185, "label", 37);
      \u0275\u0275text(186, "Currency Symbol ");
      \u0275\u0275elementStart(187, "span");
      \u0275\u0275text(188, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(189, "input", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "div", 6)(191, "div", 36)(192, "label", 37);
      \u0275\u0275text(193, "Currency Code ");
      \u0275\u0275elementStart(194, "span");
      \u0275\u0275text(195, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(196, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 6)(198, "div", 36)(199, "label", 37);
      \u0275\u0275text(200, "Currency Rate ");
      \u0275\u0275elementStart(201, "span");
      \u0275\u0275text(202, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(203, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 6)(205, "div", 39)(206, "span", 40);
      \u0275\u0275text(207, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(208, "input", 53)(209, "label", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(210, "div", 43)(211, "button", 44);
      \u0275\u0275text(212, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "button", 45);
      \u0275\u0275text(214, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(215, "div", 55)(216, "div", 29)(217, "div", 30)(218, "div", 47)(219, "div", 56)(220, "span", 57);
      \u0275\u0275element(221, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "h4", 59);
      \u0275\u0275text(223, "Delete Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "p", 60);
      \u0275\u0275text(225, "Are you sure you want to delete currency?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 61)(227, "button", 62);
      \u0275\u0275text(228, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "button", 63);
      \u0275\u0275text(230, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
    }
  }, dependencies: [MatSortModule, MatTableModule, MatSelectModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencySettingsComponent, [{
    type: Component,
    args: [{ selector: "app-currency-settings", standalone: true, imports: [MatSortModule, MatTableModule, MatSelectModule, FormsModule, SettingsSidebarComponent], template: '<div class="row">\n    <div class="col-xl-12">\n      <div class="settings-wrapper d-flex">\n        <app-settings-sidebar></app-settings-sidebar>\n        <div class="card flex-fill mb-0 w-50">\n          <div class="card-header">\n            <h4>Currency</h4>\n          </div>\n          <div class="card-body pb-0">\n            <div class="row">\n              <div class="col-lg-12">\n                <div class="card table-list-card">\n                  <div class="card-body">\n                    <div class="table-top">\n                      <div class="search-set">\n                        <div class="search-input">\n                          <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                          <div class="dataTables_filter">\n                            <label>\n                              <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                                type="search" class="form-control" placeholder="Search" />\n                              </label>\n                            </div>\n                          </div>\n          \n                      </div>\n                      <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-currency"><i data-feather="plus-circle" class=" ti ti-circle-plus me-1"></i>Add New Currency</a>\n                    </div>\n                    <div class="table-responsive no-pagination">\n                      <table class="table datatable">\n                        <thead class="thead-light">\n                          <tr>\n                            <th>Currency Name</th>\n                            <th>Code </th>\n                            <th>Symbol</th>\n                            <th>Exchange Rate</th>\n                            <th>Created On</th>\n                            <th class="no-sort text-end">Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td>\n                              Euro\n                            </td>\n                            <td>\n                              EUR\n                            </td>\n                            <td>\n                              \u20AC\n                            </td>\n                            <td>Default</td>\n                            <td>12 Jul 2025</td>\n                            <td class="action-table-data justify-content-end">\n                              <div class="edit-delete-action">\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-currency">\n                                  <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                  <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                              </div>\n                              \n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              England Pound\n                            </td>\n                            <td>\n                              GBP\n                            </td>\n                            <td>\n                              \xA3		\n                            </td>\n                            <td>Default</td>\n                            <td>14 Jul 2025</td>\n                            <td class="action-table-data justify-content-end">\n                              <div class="edit-delete-action">\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-currency">\n                                  <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                  <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                              </div>\n                              \n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              India Rupee\n                            </td>\n                            <td>\n                              INR\n                            </td>\n                            <td>\n                              \u20B9\n                            </td>\n                            <td>76.154</td>\n                            <td>14 Mar 2025</td>\n                            <td class="action-table-data justify-content-end">\n                              <div class="edit-delete-action">\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-currency">\n                                  <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                  <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                              </div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              US Dollar\n                            </td>\n                            <td>\n                              USD\n                            </td>\n                            <td>\n                              $\n                            </td>\n                            <td>Default</td>\n                            <td>10 Jan 2025</td>\n                            <td class="action-table-data justify-content-end">\n                              <div class="edit-delete-action">\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-currency">\n                                  <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                  <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                              </div>\n                            </td>\n                          </tr>																	\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n		<!-- Add Currency -->\n		<div class="modal fade" id="add-currency">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Currency</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Currency Name <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Currency Symbol <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Currency Code <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Currency Rate <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n										<span class="status-label">Status</span>\n										<input type="checkbox" id="user6" class="check" checked="">\n										<label for="user6" class="checktoggle"></label>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Currency -->\n\n		<!-- Edit Currency -->\n		<div class="modal fade" id="edit-currency">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Currency</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<form>\n								<div class="modal-body">\n									<div class="row">\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Currency Name <span> *</span></label>\n												<input type="text" class="form-control" value="Euro">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Currency Symbol <span> *</span></label>\n												<input type="text" class="form-control" value="EUR">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Currency Code <span> *</span></label>\n												<input type="text" class="form-control" value="\u20AC">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Currency Rate <span> *</span></label>\n												<input type="text" class="form-control" value="Default">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n												<span class="status-label">Status</span>\n												<input type="checkbox" id="user5" class="check" checked="">\n												<label for="user5" class="checktoggle"></label>\n											</div>\n										</div>\n									</div>\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Currency -->\n\n		<!-- delete modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Currency</h4>\n							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete currency?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /delete modal -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencySettingsComponent, { className: "CurrencySettingsComponent", filePath: "src/app/features/pages/settings/financial-settings/currency-settings/currency-settings.component.ts", lineNumber: 23 });
})();
export {
  CurrencySettingsComponent
};
//# sourceMappingURL=chunk-BL2TTGMF.js.map
