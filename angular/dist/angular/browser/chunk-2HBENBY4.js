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
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
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
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/promo/gift-cards/gift-cards.component.ts
var _c0 = () => ({ standalone: true });
function GiftCardsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function GiftCardsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function GiftCardsComponent_For_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 118)(3, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function GiftCardsComponent_For_100_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 120);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 121)(9, "span", 98)(10, "a", 101);
    \u0275\u0275element(11, "img", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 101);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 123);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 124)(26, "div", 125)(27, "a", 126);
    \u0275\u0275element(28, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 128);
    \u0275\u0275element(30, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 130);
    \u0275\u0275element(32, "i", 131);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.giftCard);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.issuedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.balance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Active" ? "bg-success" : data_r2.status === "Redeemed" ? "bg-pink" : data_r2.status === "Expired" ? "bg-light" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.status);
  }
}
function GiftCardsComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 132);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var GiftCardsComponent = class _GiftCardsComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  tableData = [];
  // pagination variables
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  row = true;
  isCollapsed = false;
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.giftCards) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getGiftCard().subscribe((apiRes) => {
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
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function GiftCardsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GiftCardsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GiftCardsComponent, selectors: [["app-gift-cards"]], decls: 418, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "gift"], ["mat-sort-header", "customer"], ["mat-sort-header", "date"], [1, "ti", "ti-arrows-up-down", "fs-11", "fw-medium", "ms-1"], ["mat-sort-header", "edate"], ["mat-sort-header", "amount"], ["mat-sort-header", "balance"], ["mat-sort-header", "sts"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "mb-3", "add-product"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_customer", 1, "d-flex", "justify-content-center", "align-items-center"], ["data-feather", "plus-circle", 1, "feather", "icon-plus-circle", "plus-down-add"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "row"], [1, "col-md-6", "col-12", "mb-2"], [1, "input-groupicon", "calender-input", "ngxdate3"], ["data-feather", "calendar", 1, "info-img"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate3", "placeholder", "dd/mm/yyyy", 1, "datetimepicker", "form-control", "p-2"], [1, "input-groupicon", "calender-input", "ngxdate4"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate4", "placeholder", "dd/mm/yyyy", 1, "datetimepicker", "form-control", "p-2"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "value", "GFT1110", 1, "form-control"], ["placeholder", "Carl Evans", 1, "custom-mat-select", "select"], [1, "input-groupicon", "calender-input", "ngxdate5"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate5", "placeholder", "24 Dec 2024", 1, "datetimepicker", "form-control", "p-2"], [1, "input-groupicon", "calender-input", "ngxdate6"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate6", "placeholder", "24 Jan 2025", 1, "datetimepicker", "form-control", "p-2"], ["type", "text", "value", "$200", 1, "form-control"], ["type", "text", "value", "$100", 1, "form-control"], ["type", "checkbox", "id", "user3", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "gift-card-details", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "gift-card-details"], [1, "gift-card-header", "border", "p-3", "rounded-1", "bg-light"], [1, "row", "row-gap-3"], [1, "col-6", "col-sm-4", "col-md-3"], [1, "mb-0", "fw-medium", "text-gray-9"], [1, "userimgname", "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "me-2"], ["href", "javascript:void(0);", 1, "product-img", "w-75"], ["src", "assets/img/users/user-33.png", "alt", "user"], ["href", "javascript:void(0);"], [1, "p-1", "pe-2", "rounded-1", "text-white", "bg-success", "fs-10"], [1, "ti", "ti-point-filled", "me-1", "fs-11"], [1, "gift-card-body", "mt-3"], [1, "table-responsive", "no-pagination", "mt-2"], [1, "table", "datatable", "border"], [1, "p-3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["id", "add_customer", 1, "modal", "fade"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "text-danger"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "text-gray-9"], [1, "userimgname"], ["alt", "user", 3, "src"], [1, "badge", "table-badge", "fw-medium", "fs-10", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["data-bs-toggle", "modal", "data-bs-target", "#gift-card-details", "href", "javascript:void(0);", 1, "me-2", "edit-icon", "p-2"], [1, "feather", "icon-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["colspan", "10", 1, "text-center"]], template: function GiftCardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Gift Cards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your gift cards");
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
      \u0275\u0275listener("click", function GiftCardsComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, GiftCardsComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, GiftCardsComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Gift Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function GiftCardsComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function GiftCardsComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "a", 26);
      \u0275\u0275text(37, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 27)(39, "li")(40, "a", 28);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 28);
      \u0275\u0275text(44, "Redeemed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 28);
      \u0275\u0275text(47, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 28);
      \u0275\u0275text(50, "Expired");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 29)(52, "a", 26);
      \u0275\u0275text(53, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 27)(55, "li")(56, "a", 28);
      \u0275\u0275text(57, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 28);
      \u0275\u0275text(60, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 28);
      \u0275\u0275text(63, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 28);
      \u0275\u0275text(66, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 28);
      \u0275\u0275text(69, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(70, "div", 30)(71, "div", 31)(72, "table", 32);
      \u0275\u0275listener("matSortChange", function GiftCardsComponent_Template_table_matSortChange_72_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(73, "thead", 33)(74, "tr")(75, "th", 34)(76, "label", 35);
      \u0275\u0275listener("click", function GiftCardsComponent_Template_label_click_76_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(77, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function GiftCardsComponent_Template_input_ngModelChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "th", 38);
      \u0275\u0275text(80, "Gift Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 39);
      \u0275\u0275text(82, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 40);
      \u0275\u0275text(84, "Issued Date");
      \u0275\u0275element(85, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 42);
      \u0275\u0275text(87, "Expiry Date");
      \u0275\u0275element(88, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 43);
      \u0275\u0275text(90, "Amount");
      \u0275\u0275element(91, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 44);
      \u0275\u0275text(93, "Balance");
      \u0275\u0275element(94, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 45);
      \u0275\u0275text(96, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "tbody");
      \u0275\u0275repeaterCreate(99, GiftCardsComponent_For_100_Template, 33, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(101, GiftCardsComponent_Conditional_101_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(102, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 46)(104, "div", 47)(105, "div", 48)(106, "div", 49)(107, "div", 50)(108, "div", 51)(109, "div", 2)(110, "h4");
      \u0275\u0275text(111, "Add Gift Card");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "button", 52)(113, "span", 53);
      \u0275\u0275text(114, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 54)(116, "form")(117, "div", 55)(118, "label", 56);
      \u0275\u0275text(119, "Gift Card");
      \u0275\u0275elementStart(120, "span", 57);
      \u0275\u0275text(121, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(122, "input", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 59)(124, "div", 60)(125, "label", 56);
      \u0275\u0275text(126, "Customer");
      \u0275\u0275elementStart(127, "span", 57);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "a", 61);
      \u0275\u0275element(130, "i", 62);
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "mat-select", 63)(134, "mat-option", 64);
      \u0275\u0275text(135, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "mat-option", 64);
      \u0275\u0275text(137, "Lenovo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "mat-option", 64);
      \u0275\u0275text(139, "Electronics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 65)(141, "div", 66)(142, "div", 55)(143, "label", 56);
      \u0275\u0275text(144, "Issued Date");
      \u0275\u0275elementStart(145, "span", 57);
      \u0275\u0275text(146, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 67);
      \u0275\u0275element(148, "i", 68)(149, "input", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 66)(151, "div", 55)(152, "label", 56);
      \u0275\u0275text(153, "Expiry Date");
      \u0275\u0275elementStart(154, "span", 57);
      \u0275\u0275text(155, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 70);
      \u0275\u0275element(157, "i", 68)(158, "input", 71);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(159, "div", 65)(160, "div", 66)(161, "div", 55)(162, "label", 56);
      \u0275\u0275text(163, "Amount");
      \u0275\u0275elementStart(164, "span", 57);
      \u0275\u0275text(165, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(166, "input", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 66)(168, "div", 55)(169, "label", 56);
      \u0275\u0275text(170, "Balance");
      \u0275\u0275elementStart(171, "span", 57);
      \u0275\u0275text(172, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(173, "input", 58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(174, "div", 72)(175, "div", 73)(176, "span", 74);
      \u0275\u0275text(177, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(178, "input", 75)(179, "label", 76);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(180, "div", 77)(181, "button", 78);
      \u0275\u0275text(182, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "button", 79);
      \u0275\u0275text(184, "Add Gift Card");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(185, "div", 80)(186, "div", 47)(187, "div", 48)(188, "div", 49)(189, "div", 50)(190, "div", 51)(191, "div", 2)(192, "h4");
      \u0275\u0275text(193, "Edit Gift Card ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "button", 52)(195, "span", 53);
      \u0275\u0275text(196, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 54)(198, "form")(199, "div", 55)(200, "label", 56);
      \u0275\u0275text(201, "Gift Card");
      \u0275\u0275elementStart(202, "span", 57);
      \u0275\u0275text(203, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(204, "input", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 59)(206, "div", 60)(207, "label", 56);
      \u0275\u0275text(208, "Customer");
      \u0275\u0275elementStart(209, "span", 57);
      \u0275\u0275text(210, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "a", 61);
      \u0275\u0275element(212, "i", 62);
      \u0275\u0275elementStart(213, "span");
      \u0275\u0275text(214, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(215, "mat-select", 82)(216, "mat-option", 64);
      \u0275\u0275text(217, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "mat-option", 64);
      \u0275\u0275text(219, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(220, "div", 65)(221, "div", 66)(222, "div", 55)(223, "label", 56);
      \u0275\u0275text(224, "Issued Date");
      \u0275\u0275elementStart(225, "span", 57);
      \u0275\u0275text(226, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 83);
      \u0275\u0275element(228, "i", 68)(229, "input", 84);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(230, "div", 66)(231, "div", 55)(232, "label", 56);
      \u0275\u0275text(233, "Expiry Date");
      \u0275\u0275elementStart(234, "span", 57);
      \u0275\u0275text(235, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "div", 85);
      \u0275\u0275element(237, "i", 68)(238, "input", 86);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(239, "div", 65)(240, "div", 66)(241, "div", 55)(242, "label", 56);
      \u0275\u0275text(243, "Amount");
      \u0275\u0275elementStart(244, "span", 57);
      \u0275\u0275text(245, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(246, "input", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "div", 66)(248, "div", 55)(249, "label", 56);
      \u0275\u0275text(250, "Balance");
      \u0275\u0275elementStart(251, "span", 57);
      \u0275\u0275text(252, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(253, "input", 88);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "div", 72)(255, "div", 73)(256, "span", 74);
      \u0275\u0275text(257, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(258, "input", 89)(259, "label", 90);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(260, "div", 77)(261, "button", 78);
      \u0275\u0275text(262, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "button", 79);
      \u0275\u0275text(264, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(265, "div", 91)(266, "div", 92)(267, "div", 48)(268, "div", 49)(269, "div", 50)(270, "div", 51)(271, "div", 2)(272, "h4");
      \u0275\u0275text(273, "Gift Card Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "button", 52)(275, "span", 53);
      \u0275\u0275text(276, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(277, "div", 54)(278, "div", 93)(279, "div", 94)(280, "div", 95)(281, "p", 96);
      \u0275\u0275text(282, "Gift Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "p");
      \u0275\u0275text(284, "GFT1110");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 95)(286, "p", 96);
      \u0275\u0275text(287, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "p");
      \u0275\u0275text(289, "$200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "div", 95)(291, "p", 96);
      \u0275\u0275text(292, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "p");
      \u0275\u0275text(294, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "div", 95)(296, "p", 96);
      \u0275\u0275text(297, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 97)(299, "span", 98)(300, "a", 99);
      \u0275\u0275element(301, "img", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "a", 101);
      \u0275\u0275text(303, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(304, "div", 95)(305, "p", 96);
      \u0275\u0275text(306, "Issued Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "p");
      \u0275\u0275text(308, "24 Dec 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "div", 95)(310, "p", 96);
      \u0275\u0275text(311, "Expiry Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "p");
      \u0275\u0275text(313, "24 Jan 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 95)(315, "p", 96);
      \u0275\u0275text(316, "Issued By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p");
      \u0275\u0275text(318, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "div", 95)(320, "p", 96);
      \u0275\u0275text(321, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "span", 102);
      \u0275\u0275element(323, "i", 103);
      \u0275\u0275text(324, "Active");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(325, "div", 104)(326, "h4");
      \u0275\u0275text(327, "Transaction Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "div", 105)(329, "table", 106)(330, "thead", 33)(331, "tr")(332, "th");
      \u0275\u0275text(333, "Date");
      \u0275\u0275element(334, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "th");
      \u0275\u0275text(336, "Transaction Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "th");
      \u0275\u0275text(338, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "th");
      \u0275\u0275text(340, "Amount");
      \u0275\u0275element(341, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "th");
      \u0275\u0275text(343, "Balance");
      \u0275\u0275element(344, "i", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(345, "tbody")(346, "tr")(347, "td", 107);
      \u0275\u0275text(348, "16 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "td", 107);
      \u0275\u0275text(350, "Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "td", 107);
      \u0275\u0275text(352, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "td", 107);
      \u0275\u0275text(354, "$75");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "td", 107);
      \u0275\u0275text(356, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "tr")(358, "td", 107);
      \u0275\u0275text(359, "04 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "td", 107);
      \u0275\u0275text(361, "Refund");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "td", 107);
      \u0275\u0275text(363, "Online");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "td", 107);
      \u0275\u0275text(365, "$25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "td", 107);
      \u0275\u0275text(367, "$175");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(368, "tr")(369, "td", 107);
      \u0275\u0275text(370, "26 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "td", 107);
      \u0275\u0275text(372, "Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "td", 107);
      \u0275\u0275text(374, "Gadget World");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "td", 107);
      \u0275\u0275text(376, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "td", 107);
      \u0275\u0275text(378, "$150");
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(379, "div", 108)(380, "div", 47)(381, "div", 48)(382, "div", 49)(383, "div", 109)(384, "span", 110);
      \u0275\u0275element(385, "i", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "h4", 112);
      \u0275\u0275text(387, "Delete Gift Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "p", 113);
      \u0275\u0275text(389, "Are you sure you want to delete gift card?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "div", 114)(391, "button", 78);
      \u0275\u0275text(392, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "button", 79);
      \u0275\u0275text(394, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(395, "div", 115)(396, "div", 47)(397, "div", 48)(398, "div", 51)(399, "div", 2)(400, "h4");
      \u0275\u0275text(401, "Add Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(402, "button", 116)(403, "span", 53);
      \u0275\u0275text(404, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(405, "form")(406, "div", 54)(407, "div")(408, "label", 56);
      \u0275\u0275text(409, "Customer ");
      \u0275\u0275elementStart(410, "span", 117);
      \u0275\u0275text(411, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(412, "input", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "div", 77)(414, "button", 78);
      \u0275\u0275text(415, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "button", 79);
      \u0275\u0275text(417, "Add Customer");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(44);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 101 : -1);
    }
  }, dependencies: [CommonModule, NgClass, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GiftCardsComponent, [{
    type: Component,
    args: [{ selector: "app-gift-cards", imports: [CommonModule, MatSelectModule, CustomPaginationComponent, MatSortModule, FormsModule, BsDatepickerModule], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4 class="fw-bold">Gift Cards</h4>
            <h6>Manage your gift cards</h6>
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
    <div class="page-btn">
        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i data-feather="plus-circle" class="feather icon-plus-circle me-2"></i>Add Gift Card</a>
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
                  <input
                    [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"
                    (ngModelChange)="searchData(searchDataValue)"
                    type="search"
                    class="form-control"
                    placeholder="Search"
                    />
                  </label>
                </div>
              </div>
          </div>
        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                    
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Status
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Redeemed</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Expired</a>
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
            <table (matSortChange)="sortData($event)"   matSort
            matSortActive="Sno"
            matSortDirection="asc"
            matSortDisableClear class="table datatable">
                <thead class="thead-light">
                    <tr>
                        <th class="no-sort">
                            <label class="checkboxs" (click)="selectAll(initChecked)">
                                   <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>
                                   <span class="checkmarks"></span>
                                 </label>
                           </th>
                        <th mat-sort-header="gift">Gift Card</th>
                        <th mat-sort-header="customer">Customer</th>
                        <th mat-sort-header="date">Issued Date<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
                        <th mat-sort-header="edate">Expiry Date<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
                        <th mat-sort-header="amount">Amount<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
                        <th mat-sort-header="balance">Balance<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
                        <th mat-sort-header="sts">Status</th>
                        <th class="no-sort"></th>
                    </tr>
                </thead>
                <tbody>
                    @for (data of tableData; track data; let i = $index) {
                    <tr>
                        <td>
                            <label class="checkboxs">
                              <input type="checkbox" [(ngModel)]="data.isSelected">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                        <td class="text-gray-9">{{data.giftCard}}</td>
                        <td>
                            <div class="userimgname">
                                <span class="avatar avatar-sm me-2">
                                <a href="javascript:void(0);">
                                    <img src="assets/img/users/{{data.img}}" alt="user">
                                </a>
                            </span>
                                <a href="javascript:void(0);">{{data.customer}}</a>
                            </div>
                        </td>											
                        <td>{{data.issuedDate}}</td>
                        <td>{{data.expiryDate}}</td>
                        <td>{{data.amount}}</td>
                        <td>{{data.balance}}</td>
                        <td><span class="badge table-badge fw-medium fs-10" [ngClass]="data.status === 'Active' ? 'bg-success' :data.status === 'Redeemed' ?'bg-pink':data.status === 'Expired' ?'bg-light':'bg-danger'">{{data.status}}</span></td>
                        <td class="action-table-data">
                            <div class="edit-delete-action">
                                <a data-bs-toggle="modal" data-bs-target="#gift-card-details" class="me-2 edit-icon  p-2" href="javascript:void(0);">
                                    <i class="feather icon-eye"></i>
                                </a>
                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">
                                    <i class="feather icon-edit"></i>
                                </a>
                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
                                    <i class="feather icon-trash-2"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                }   @if (tableData.length === 0) {
                    <tr>
<td colspan="10" class="text-center"> No matching records found </td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
        <app-custom-pagination/>
    </div>
</div>
<!-- /product list -->


		<!-- Add gift -->
		<div class="modal fade" id="add-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Add Gift Card</h4>
								</div>
								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form >
									<div class="mb-3">
										<label class="form-label">Gift Card<span class="text-danger ms-1">*</span></label>
										<input type="text" class="form-control">
									</div>
						            
									
										<div class="mb-3 add-product">
											<div class="add-newplus">
												<label class="form-label">Customer<span class="text-danger ms-1">*</span></label>
												<a href="javascript:void(0);" class="d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_customer"><i data-feather="plus-circle" class="feather icon-plus-circle plus-down-add"></i><span>Add
														New</span></a>
											</div>
											<mat-select class="custom-mat-select select" placeholder="Choose">
												<mat-option value="1">Choose</mat-option>
												<mat-option value="1">Lenovo</mat-option>
												<mat-option value="1">Electronics</mat-option>
											</mat-select>
										</div>
								

									<div class="row">
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Issued Date<span class="text-danger ms-1">*</span></label>
		
												<div class="input-groupicon calender-input ngxdate3">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate3" placeholder="dd/mm/yyyy">
												</div>
											</div>
										</div>
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Expiry Date<span class="text-danger ms-1">*</span></label>
		
												<div class="input-groupicon calender-input ngxdate4">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate4" placeholder="dd/mm/yyyy">
												</div>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Amount<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Balance<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
									</div>

									<div class="mb-0">
										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
											<span class="status-label">Status</span>
											<input type="checkbox" id="user2" class="check">
											<label for="user2" class="checktoggle"></label>
										</div>
									</div>
			
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Gift Card</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add gift -->

		<!-- Edit gift -->
		<div class="modal fade" id="edit-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Edit Gift Card </h4>
								</div>
								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								
								<form >
									<div class="mb-3">
										<label class="form-label">Gift Card<span class="text-danger ms-1">*</span></label>
										<input type="text" class="form-control" value="GFT1110">
									</div>
						            
									
										<div class="mb-3 add-product">
											<div class="add-newplus">
												<label class="form-label">Customer<span class="text-danger ms-1">*</span></label>
												<a href="javascript:void(0);" class="d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_customer"><i data-feather="plus-circle" class="feather icon-plus-circle plus-down-add"></i><span>Add
														New</span></a>
											</div>
											<mat-select class="custom-mat-select select" placeholder="Carl Evans">
												<mat-option value="1">Carl Evans</mat-option>
												<mat-option value="1">Minerva Rameriz</mat-option>
											</mat-select>
										</div>
								

									<div class="row">
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Issued Date<span class="text-danger ms-1">*</span></label>
		
												<div class="input-groupicon calender-input ngxdate5">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate5" placeholder="24 Dec 2024">
												</div>
											</div>
										</div>
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Expiry Date<span class="text-danger ms-1">*</span></label>
		
												<div class="input-groupicon calender-input ngxdate6">
													<i data-feather="calendar" class="info-img"></i>
													<input type="text" class="datetimepicker form-control p-2" bsDatepicker container=".ngxdate6" placeholder="24 Jan 2025">
												</div>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Amount<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control" value="$200">
											</div>
										</div>
										<div class="col-md-6 col-12 mb-2">
											<div class="mb-3">
												<label class="form-label">Balance<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control" value="$100">
											</div>
										</div>
									</div>

									<div class="mb-0">
										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
											<span class="status-label">Status</span>
											<input type="checkbox" id="user3" class="check">
											<label for="user3" class="checktoggle"></label>
										</div>
									</div>
								
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Save Changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit gift -->

		<!-- gift card details -->
		<div class="modal fade" id="gift-card-details">
			<div class="modal-dialog modal-dialog-centered gift-card-details">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Gift Card Details</h4>
								</div>
								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<div class="gift-card-header border p-3 rounded-1 bg-light">
										<div class="row row-gap-3">
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Gift Card</p>
											<p>GFT1110</p>
										</div>
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Amount</p>
											<p>$200</p>
										</div>
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Balance</p>
											<p>$100</p>
										</div>
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Customer</p>
											<div class="userimgname d-flex align-items-center">
												<span class="avatar avatar-sm me-2">
												<a href="javascript:void(0);" class="product-img w-75">
													<img src="assets/img/users/user-33.png" alt="user">
												</a>
											</span>
												<a href="javascript:void(0);">Carl Evans</a>
											</div>
										</div>
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Issued Date</p>
											<p>24 Dec 2024</p>
										</div>
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Expiry Date</p>
											<p>24 Jan 2025</p>
										</div>
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Issued By</p>
											<p>Admin</p>
										</div>
										<div class="col-6 col-sm-4 col-md-3">
											<p class="mb-0 fw-medium text-gray-9">Status</p>
											<span class="p-1 pe-2 rounded-1 text-white bg-success fs-10"><i class="ti ti-point-filled me-1 fs-11"></i>Active</span>
										</div>
										</div>
								</div>
								<div class="gift-card-body mt-3">
									<h4>Transaction Details</h4>
									<div class="table-responsive no-pagination mt-2">
										<table class="table datatable border">
											<thead class="thead-light">
												<tr>													
													<th>Date<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
													<th>Transaction Type</th>
													<th>Store</th>
													<th>Amount<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
													<th>Balance<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="p-3">16 Jan 2025</td>										
													<td class="p-3">Purchase</td>
													<td class="p-3">Electro Mart</td>
													<td class="p-3">$75</td>
													<td class="p-3">$100</td>
												</tr>						
												<tr>
													<td class="p-3">04 Jan 2025</td>										
													<td class="p-3">Refund</td>
													<td class="p-3">Online</td>
													<td class="p-3">$25</td>
													<td class="p-3">$175</td>
												</tr>
												<tr>
													<td class="p-3">26 Dec 2024</td>										
													<td class="p-3">Purchase</td>
													<td class="p-3">Gadget World</td>
													<td class="p-3">$50</td>
													<td class="p-3">$150</td>
												</tr>	
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- gift card details -->

		<!-- delete modal -->
			<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Gift Card</h4>
								<p class="mb-0 fs-16">Are you sure you want to delete gift card?</p>
								<div class="modal-footer-btn mt-3 d-flex justify-content-center">
									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
								</div>						
						</div>
					</div>
				</div>
			</div>
		</div>

        		<!-- Add Customer -->
		<div class="modal fade" id="add_customer">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Add Customer</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form>
						<div class="modal-body">
							<div>
								<label class="form-label">Customer <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>												
						</div>
						<div class="modal-footer">
							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
							<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Customer</button>
						</div>						
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Customer -->
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GiftCardsComponent, { className: "GiftCardsComponent", filePath: "src/app/features/pages/promo/gift-cards/gift-cards.component.ts", lineNumber: 20 });
})();
export {
  GiftCardsComponent
};
//# sourceMappingURL=chunk-2HBENBY4.js.map
