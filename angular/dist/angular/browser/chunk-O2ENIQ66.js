import {
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSort,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/content-cms/location/cities/cities.component.ts
var _c0 = () => ({ standalone: true });
function CitiesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CitiesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CitiesComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 74)(3, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function CitiesComponent_For_87_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 77);
    \u0275\u0275element(13, "i", 78);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 79)(16, "div", 80)(17, "a", 81);
    \u0275\u0275element(18, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 83);
    \u0275\u0275element(20, "i", 84);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r2.CityName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.StateName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.CountryName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", data_r2.Status, " ");
  }
}
function CitiesComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 85);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var CitiesComponent = class _CitiesComponent {
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
  row = true;
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
        if (this.router.url == this.routes.cities) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCities().subscribe((apiRes) => {
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
  static \u0275fac = function CitiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CitiesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CitiesComponent, selectors: [["app-cities"]], decls: 219, vars: 10, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-city", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body", "pb-0"], [1, "custom-datatable-filter", "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "add-city", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "users5", "checked", "", 1, "check"], ["for", "users5", 1, "checktoggle", "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-city", 1, "modal", "fade"], ["type", "text", "value", "Los Angels", 1, "form-control"], ["placeholder", "California", 1, "custom-mat-select", "select"], ["placeholder", "United States", 1, "custom-mat-select", "select"], ["type", "checkbox", "id", "users6", "checked", "", 1, "check"], ["for", "users6", 1, "checktoggle", "mb-0"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-content", "p-5"], [1, "modal-body", "text-center", "p-0"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "d-flex", "justify-content-center", "mt-3"], ["data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3", 3, "routerLink"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "text-gray-9"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-city", "href", "javascript:void(0);", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function CitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Cities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Cities");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275element(13, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 10);
      \u0275\u0275listener("click", function CitiesComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, CitiesComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, CitiesComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add City");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function CitiesComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CitiesComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "New Joiners");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 28)(49, "a", 25);
      \u0275\u0275text(50, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 26)(52, "li")(53, "a", 27);
      \u0275\u0275text(54, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 27);
      \u0275\u0275text(66, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(67, "div", 29)(68, "div", 30)(69, "table", 31);
      \u0275\u0275listener("matSortChange", function CitiesComponent_Template_table_matSortChange_69_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(70, "thead", 32)(71, "tr")(72, "th", 33)(73, "label", 34);
      \u0275\u0275listener("click", function CitiesComponent_Template_label_click_73_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(74, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function CitiesComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "City Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th");
      \u0275\u0275text(79, "State Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th");
      \u0275\u0275text(81, "Country Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "tbody");
      \u0275\u0275repeaterCreate(86, CitiesComponent_For_87_Template, 21, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(88, CitiesComponent_Conditional_88_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(89, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 37)(91, "div", 38)(92, "div", 39)(93, "div", 40)(94, "div", 2)(95, "h4");
      \u0275\u0275text(96, "Add City");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "button", 41)(98, "span", 42);
      \u0275\u0275text(99, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "form")(101, "div", 43)(102, "div", 44)(103, "div", 45)(104, "label", 46);
      \u0275\u0275text(105, "City Name ");
      \u0275\u0275elementStart(106, "span", 47);
      \u0275\u0275text(107, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(108, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 45)(110, "label", 46);
      \u0275\u0275text(111, "State Name ");
      \u0275\u0275elementStart(112, "span", 47);
      \u0275\u0275text(113, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "mat-select", 49)(115, "mat-option", 50);
      \u0275\u0275text(116, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "mat-option", 50);
      \u0275\u0275text(118, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "mat-option", 50);
      \u0275\u0275text(120, "New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "mat-option", 50);
      \u0275\u0275text(122, "Texas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 45)(124, "label", 46);
      \u0275\u0275text(125, "Country Name ");
      \u0275\u0275elementStart(126, "span", 47);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "mat-select", 49)(129, "mat-option", 50);
      \u0275\u0275text(130, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "mat-option", 50);
      \u0275\u0275text(132, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "mat-option", 50);
      \u0275\u0275text(134, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "mat-option", 50);
      \u0275\u0275text(136, "United Kingdom");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 51)(138, "span", 52);
      \u0275\u0275text(139, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "input", 53)(141, "label", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 55)(143, "button", 56);
      \u0275\u0275text(144, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "button", 57);
      \u0275\u0275text(146, "Add City");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(147, "div", 58)(148, "div", 38)(149, "div", 39)(150, "div", 40)(151, "div", 2)(152, "h4");
      \u0275\u0275text(153, "Edit City");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "button", 41)(155, "span", 42);
      \u0275\u0275text(156, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "form")(158, "div", 43)(159, "div", 44)(160, "div", 45)(161, "label", 46);
      \u0275\u0275text(162, "City Name ");
      \u0275\u0275elementStart(163, "span", 47);
      \u0275\u0275text(164, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(165, "input", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 45)(167, "label", 46);
      \u0275\u0275text(168, "State Name ");
      \u0275\u0275elementStart(169, "span", 47);
      \u0275\u0275text(170, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "mat-select", 60)(172, "mat-option", 50);
      \u0275\u0275text(173, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "mat-option", 50);
      \u0275\u0275text(175, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "mat-option", 50);
      \u0275\u0275text(177, "New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 50);
      \u0275\u0275text(179, "Texas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 45)(181, "label", 46);
      \u0275\u0275text(182, "Country Name ");
      \u0275\u0275elementStart(183, "span", 47);
      \u0275\u0275text(184, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "mat-select", 61)(186, "mat-option", 50);
      \u0275\u0275text(187, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "mat-option", 50);
      \u0275\u0275text(189, "United States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "mat-option", 50);
      \u0275\u0275text(191, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "mat-option", 50);
      \u0275\u0275text(193, "United Kingdom");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "div", 51)(195, "span", 52);
      \u0275\u0275text(196, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(197, "input", 62)(198, "label", 63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(199, "div", 55)(200, "button", 56);
      \u0275\u0275text(201, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "button", 57);
      \u0275\u0275text(203, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(204, "div", 64)(205, "div", 38)(206, "div", 65)(207, "div", 66)(208, "span", 67);
      \u0275\u0275element(209, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "h4", 69);
      \u0275\u0275text(211, "Delete City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "p", 70);
      \u0275\u0275text(213, "Are you sure you want to delete city?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "div", 71)(215, "a", 72);
      \u0275\u0275text(216, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "a", 73);
      \u0275\u0275text(218, "Yes Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 88 : -1);
      \u0275\u0275advance(129);
      \u0275\u0275property("routerLink", ctx.routes.cities);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSelectModule, MatSelect, MatOption, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CitiesComponent, [{
    type: Component,
    args: [{ selector: "app-cities", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule, RouterLink], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Cities</h4>\n            <h6>Manage Your Cities</h6>\n        </div>							\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>							\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-city"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add City</a>\n    </div>\n</div>\n\n\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                      type="search" class="form-control" placeholder="Search" />\n                    </label>\n                  </div>\n                </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">																\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>\n                    </li>\n                </ul>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body pb-0">\n        <div class="custom-datatable-filter table-responsive">\n            <table matSort (matSortChange)="sortData($event)" class="table datatable ">\n                <thead class="thead-light">\n                    <tr>\n                        <th class="no-sort">\n                            <label class="checkboxs" (click)="selectAll(initChecked)">\n                            <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                            <span class="checkmarks"></span>\n                            </label>\n                        </th>\n                        <th>City Name</th>													\n                        <th>State Name</th>													\n                        <th>Country Name</th>\n                        <th>Status</th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    \n@for (data of tableData; track data) {\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                              <input type="checkbox" [(ngModel)]="data.isSelected">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                        <td class="text-gray-9">\n                            {{data.CityName}}\n                        </td>\n                        <td>\n                            {{data.StateName}}\n                        </td>\n                        <td >\n                            {{data.CountryName}}\n                        </td>\n                        <td>\n                            <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                                <i class="ti ti-point-filled me-1"></i>{{data.Status}}\n                            </span>\n                        </td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2" data-bs-toggle="modal" data-bs-target="#edit-city" href="javascript:void(0);">\n                                    <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n               }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n                </tbody>\n            </table>\n        </div>\n        <app-custom-pagination/>\n    </div>\n</div>\n<!-- /product list -->\n\n\n		<!-- Add cities -->\n		<div class="modal fade" id="add-city">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add City</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form >\n						<div class="modal-body">\n							<div class="row">	\n								<div class="mb-3">\n									<label class="form-label">City Name <span class="text-danger">*</span></label>\n									<input type="text" class="form-control">\n								</div>										\n								<div class="mb-3">\n									<label class="form-label">State Name <span class="text-danger">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Select">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">California</mat-option>\n										<mat-option value="1">New York</mat-option>\n										<mat-option value="1">Texas</mat-option>						\n									</mat-select>\n								</div>																				\n								<div class="mb-3">\n									<label class="form-label">Country Name <span class="text-danger">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Select">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">United States</mat-option>\n										<mat-option value="1">Canada</mat-option>\n										<mat-option value="1">United Kingdom</mat-option>										\n									</mat-select>\n								</div>	\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="users5" class="check" checked>\n									<label for="users5" class="checktoggle mb-0"></label>\n								</div>																		\n							</div>														\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add City</button>\n						</div>						\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add cities -->\n\n		<!-- Edit cities -->\n		<div class="modal fade" id="edit-city">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit City</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form >\n						<div class="modal-body">\n							<div class="row">	\n								<div class="mb-3">\n									<label class="form-label">City Name <span class="text-danger">*</span></label>\n									<input type="text" class="form-control" value="Los Angels">\n								</div>									\n								<div class="mb-3">\n									<label class="form-label">State Name <span class="text-danger">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="California">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">California</mat-option>\n										<mat-option value="1">New York</mat-option>\n										<mat-option value="1">Texas</mat-option>										\n									</mat-select>\n								</div>																				\n								<div class="mb-3">\n									<label class="form-label">Country Name <span class="text-danger">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="United States">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">United States</mat-option>\n										<mat-option value="1">Canada</mat-option>\n										<mat-option value="1">United Kingdom</mat-option>										\n									</mat-select>\n								</div>		\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="users6" class="check" checked>\n									<label for="users6" class="checktoggle mb-0"></label>\n								</div>																		\n							</div>														\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit cities -->\n		  \n		<!-- Delete Modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content p-5">\n					<div class="modal-body text-center p-0">\n						<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n						<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete City</h4>\n						<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete city?</p>	\n						<div class="d-flex justify-content-center mt-3">\n							<a class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</a>\n							<a [routerLink]="routes.cities" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</a>\n						</div>											\n					</div>					\n				</div>\n			</div>\n		</div>\n		<!-- /Delete Modal -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CitiesComponent, { className: "CitiesComponent", filePath: "src/app/features/pages/content-cms/location/cities/cities.component.ts", lineNumber: 25 });
})();
export {
  CitiesComponent
};
//# sourceMappingURL=chunk-O2ENIQ66.js.map
