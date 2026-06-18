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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/people/store-list/store-list.component.ts
var _c0 = () => ({ standalone: true });
function StoreListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function StoreListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function StoreListComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 82)(3, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function StoreListComponent_For_89_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 35);
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
    \u0275\u0275elementStart(13, "td")(14, "span", 84);
    \u0275\u0275element(15, "i", 85);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 86)(18, "div", 87)(19, "a", 88);
    \u0275\u0275element(20, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 90);
    \u0275\u0275element(22, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 92);
    \u0275\u0275element(24, "i", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r2.storeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.userName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.phone, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.status);
  }
}
function StoreListComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var StoreListComponent = class _StoreListComponent {
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
        if (this.router.url == this.routes.storeList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStoreList().subscribe((apiRes) => {
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Stores" },
    { value: "Thomas" },
    { value: "Rasmussen" },
    { value: "Benjamin" }
  ];
  selectedList3 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  password = [false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
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
  static \u0275fac = function StoreListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreListComponent, selectors: [["app-store-list"]], decls: 217, vars: 14, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-store", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "store"], ["mat-sort-header", "user"], ["mat-sort-header", "phone"], ["mat-sort-header", "email"], ["mat-sort-header", "status"], ["id", "add-store", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "input-blocks", "mb-3"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], ["type", "email", 1, "form-control"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-store", 1, "modal", "fade"], ["type", "text", "value", "Electro Mart", 1, "form-control"], ["type", "text", "value", "johnsmith", 1, "form-control"], ["type", "email", "value", "electromart@example.com", 1, "form-control"], ["type", "text", "value", "+12498345785", 1, "form-control"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-content", "p-5"], [1, "modal-body", "text-center", "p-0"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "d-flex", "justify-content-center", "mt-3"], ["data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3", 3, "routerLink"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-eye", "feather-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-store", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edelete", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function StoreListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Store List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Store");
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
      \u0275\u0275listener("click", function StoreListComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, StoreListComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, StoreListComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, " Add Store");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function StoreListComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StoreListComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Select Status ");
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
      \u0275\u0275listener("matSortChange", function StoreListComponent_Template_table_matSortChange_69_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(70, "thead")(71, "tr")(72, "th", 32)(73, "label", 33);
      \u0275\u0275listener("click", function StoreListComponent_Template_label_click_73_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(74, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function StoreListComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "th", 36);
      \u0275\u0275text(77, "Store name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 37);
      \u0275\u0275text(79, "User name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 38);
      \u0275\u0275text(81, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 39);
      \u0275\u0275text(83, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 40);
      \u0275\u0275text(85, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "tbody");
      \u0275\u0275repeaterCreate(88, StoreListComponent_For_89_Template, 25, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(90, StoreListComponent_Conditional_90_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(91, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 41)(93, "div", 42)(94, "div", 43)(95, "div", 44)(96, "div", 2)(97, "h4");
      \u0275\u0275text(98, "Add Store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "button", 45)(100, "span", 46);
      \u0275\u0275text(101, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "form")(103, "div", 47)(104, "div", 48)(105, "label", 49);
      \u0275\u0275text(106, "Store Name ");
      \u0275\u0275elementStart(107, "span", 50);
      \u0275\u0275text(108, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(109, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 48)(111, "label", 49);
      \u0275\u0275text(112, "User Name ");
      \u0275\u0275elementStart(113, "span", 50);
      \u0275\u0275text(114, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(115, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 52)(117, "label", 49);
      \u0275\u0275text(118, "Password ");
      \u0275\u0275elementStart(119, "span", 50);
      \u0275\u0275text(120, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 53);
      \u0275\u0275element(122, "input", 54);
      \u0275\u0275elementStart(123, "span", 55);
      \u0275\u0275listener("click", function StoreListComponent_Template_span_click_123_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 48)(125, "label", 49);
      \u0275\u0275text(126, "Email ");
      \u0275\u0275elementStart(127, "span", 50);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(129, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 48)(131, "label", 49);
      \u0275\u0275text(132, "Phone ");
      \u0275\u0275elementStart(133, "span", 50);
      \u0275\u0275text(134, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(135, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 57)(137, "div", 58)(138, "span", 59);
      \u0275\u0275text(139, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "input", 60)(141, "label", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 62)(143, "button", 63);
      \u0275\u0275text(144, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "button", 64);
      \u0275\u0275text(146, "Add Store");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(147, "div", 65)(148, "div", 42)(149, "div", 43)(150, "div", 44)(151, "div", 2)(152, "h4");
      \u0275\u0275text(153, "Edit Store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "button", 45)(155, "span", 46);
      \u0275\u0275text(156, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "form")(158, "div", 47)(159, "div", 48)(160, "label", 49);
      \u0275\u0275text(161, "Store Name ");
      \u0275\u0275elementStart(162, "span", 50);
      \u0275\u0275text(163, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(164, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 48)(166, "label", 49);
      \u0275\u0275text(167, "User Name ");
      \u0275\u0275elementStart(168, "span", 50);
      \u0275\u0275text(169, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(170, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "div", 52)(172, "label", 49);
      \u0275\u0275text(173, "Password ");
      \u0275\u0275elementStart(174, "span", 50);
      \u0275\u0275text(175, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 53);
      \u0275\u0275element(177, "input", 54);
      \u0275\u0275elementStart(178, "span", 55);
      \u0275\u0275listener("click", function StoreListComponent_Template_span_click_178_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(179, "div", 48)(180, "label", 49);
      \u0275\u0275text(181, "Email ");
      \u0275\u0275elementStart(182, "span", 50);
      \u0275\u0275text(183, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(184, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 48)(186, "label", 49);
      \u0275\u0275text(187, "Phone ");
      \u0275\u0275elementStart(188, "span", 50);
      \u0275\u0275text(189, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(190, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 57)(192, "div", 58)(193, "span", 59);
      \u0275\u0275text(194, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(195, "input", 70)(196, "label", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 62)(198, "button", 63);
      \u0275\u0275text(199, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "button", 64);
      \u0275\u0275text(201, "save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(202, "div", 72)(203, "div", 42)(204, "div", 73)(205, "div", 74)(206, "span", 75);
      \u0275\u0275element(207, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "h4", 77);
      \u0275\u0275text(209, "Delete Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p", 78);
      \u0275\u0275text(211, "Are you sure you want to delete store?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 79)(213, "a", 80);
      \u0275\u0275text(214, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "a", 81);
      \u0275\u0275text(216, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 90 : -1);
      \u0275\u0275advance(32);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
      \u0275\u0275advance(54);
      \u0275\u0275property("type", ctx.password[0] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[0] ? "fa-eye" : "fa-eye-slash");
      \u0275\u0275advance(37);
      \u0275\u0275property("routerLink", ctx.routes.storeList);
    }
  }, dependencies: [MatSelectModule, CustomPaginationComponent, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreListComponent, [{
    type: Component,
    args: [{ selector: "app-store-list", imports: [MatSelectModule, CustomPaginationComponent, CommonModule, FormsModule, MatSelectModule, MatSortModule, RouterLink], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Store List</h4>
      <h6>Manage your Store</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf" matTooltip="Pdf"
        matTooltipPosition="above"><img src="assets/img/icons/pdf.svg" alt="img"></a>
      </li>
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel" matTooltip="Excel"
          matTooltipPosition="above"><img src="assets/img/icons/excel.svg" alt="img"></a>
        </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"
              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>
            </li>
            <li>
              <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse"
                matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {
                <i class="ti ti-chevron-up"></i>
              }
              @if (isCollapsed) {
                <i class="ti ti-chevron-up"></i>
              }</a>
            </li>
          </ul>
          <div class="page-btn">
            <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-store"><i  class="ti ti-circle-plus me-2"></i> Add Store</a>
          </div>
        </div>
        <!-- /product list -->
        <div class="card table-list-card">
          <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div class="search-set">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>
                <div class="dataTables_filter">
                  <label>
                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
                      type="search" class="form-control" placeholder="Search..." />
                    </label>
                  </div>
                </div>
            </div>
            <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Select Status
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Sort By : Last 7 Days
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"
                  matSortDirection="asc" matSortDisableClear>
                  <thead>
                    <tr>
                     <th class="no-sort">
                <label class="checkboxs"  (click)="selectAll(initChecked)">
                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                  <span class="checkmarks"></span>
                </label>
              </th>
                      <th mat-sort-header="store">Store name </th>
                      <th mat-sort-header="user">User name </th>
                      <th mat-sort-header="phone">Phone</th>
                      <th mat-sort-header="email">Email</th>
                      <th mat-sort-header="status">Status</th>
                      <th class="no-sort"></th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (data of tableData; track data) {
                      <tr>
                      <td>
                  <label class="checkboxs">
                    <input type="checkbox" [(ngModel)]="data.isSelected">
                    <span class="checkmarks"></span>
                  </label>
                </td>
                        <td>{{data.storeName}} </td>
                        <td>{{data.userName}} </td>
                        <td>{{data.phone}} </td>
                        <td>{{data.email}}</td>
                        <td><span class="badge badge-success d-inline-flex align-items-center badge-xs"><i class="ti ti-point-filled me-1"></i>{{data.status}}</span></td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <a class="me-2 p-2" href="javascript:void(0);">
                              <i  class="feather icon-eye feather-eye"></i>
                            </a>
                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-store">
                              <i  class="feather icon-edit feather-edit"></i>
                            </a>
                            <a class=" p-2" href="javascript:void(0);"  data-bs-toggle="modal" data-bs-target="#edelete">
                              <i  class="feather icon-trash-2 feather-trash-2"></i>
                            </a>
                          </div>
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
		<!-- Add Store -->
		<div class="modal fade" id="add-store">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Add Store</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Store Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">User Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="input-blocks mb-3">
								<label class="form-label">Password <span class="text-danger">*</span></label>
								<div class="pass-group">
                  <input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control">
                  <span class="fas toggle-password" [ngClass]=" password[1] ? 'fa-eye' : 'fa-eye-slash'"
                  (click)="togglePassword(1)"></span>
								</div>
							</div>
							<div class="mb-3">
								<label class="form-label">Email <span class="text-danger">*</span></label>
								<input type="email" class="form-control">
							</div>
							<div class="mb-3">
								<label class="form-label">Phone <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
							<div class="mb-0">
								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
									<span class="status-label ">Status</span>
									<input type="checkbox" id="user2" class="check" checked>
									<label for="user2" class="checktoggle"></label>
								</div>
							</div>							
						</div>
						<div class="modal-footer">
							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Store</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Store -->

		<!-- Edit Store -->
		<div class="modal fade" id="edit-store">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Edit Store</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label">Store Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control" value="Electro Mart">
							</div>
							<div class="mb-3">
								<label class="form-label">User Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control" value="johnsmith">
							</div>
							<div class="input-blocks mb-3">
								<label class="form-label">Password <span class="text-danger">*</span></label>
								<div class="pass-group">
                  <input [type]="password[0] ? 'text' : 'password' " class="pass-input form-control">
                  <span class="fas toggle-password" [ngClass]=" password[0] ? 'fa-eye' : 'fa-eye-slash'"
                  (click)="togglePassword(0)"></span>
								</div>
							</div>
							<div class="mb-3">
								<label class="form-label">Email <span class="text-danger">*</span></label>
								<input type="email" class="form-control" value="electromart@example.com">
							</div>
							<div class="mb-3">
								<label class="form-label">Phone <span class="text-danger">*</span></label>
								<input type="text" class="form-control" value="+12498345785">
							</div>
							<div class="mb-0">
								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
									<span class="status-label ">Status</span>
									<input type="checkbox" id="user1" class="check" checked>
									<label for="user1" class="checktoggle"></label>
								</div>
							</div>							
						</div>
						<div class="modal-footer">
							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">save Changes</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Edit Store -->

		<!-- Delete Modal -->
		<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content p-5">
					<div class="modal-body text-center p-0">
						<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
						<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Store</h4>
						<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete store?</p>	
						<div class="d-flex justify-content-center mt-3">
							<a class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</a>
							<a [routerLink]="routes.storeList" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</a>
						</div>											
					</div>					
				</div>
			</div>
		</div>
		<!-- /Delete Modal -->
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreListComponent, { className: "StoreListComponent", filePath: "src/app/features/pages/people/store-list/store-list.component.ts", lineNumber: 24 });
})();
export {
  StoreListComponent
};
//# sourceMappingURL=chunk-6R6W2NDT.js.map
