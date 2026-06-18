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
  ɵɵinterpolate1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/people/billers/billers.component.ts
var _c0 = () => ({ standalone: true });
function BillersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function BillersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function BillersComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 33);
    \u0275\u0275listener("click", function BillersComponent_For_71_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function BillersComponent_For_71_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 101)(9, "a", 102);
    \u0275\u0275element(10, "img", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 104);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 105);
    \u0275\u0275element(23, "i", 106);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 107)(26, "div", 108)(27, "a", 109);
    \u0275\u0275element(28, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 111);
    \u0275\u0275element(30, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 113);
    \u0275\u0275element(32, "i", 114);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.code);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.biller);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.country);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function BillersComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var BillersComponent = class _BillersComponent {
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
        if (this.router.url == this.routes.billers) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBillers().subscribe((apiRes) => {
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
  static \u0275fac = function BillersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillersComponent, selectors: [["app-billers"]], decls: 327, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary", "text-white"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "code"], ["mat-sort-header", "customer"], ["mat-sort-header", "compa"], ["mat-sort-header", "email"], ["mat-sort-header", "phone"], ["mat-sort-header", "country"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "mb-3"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mt-2"], [1, "row"], [1, "col-lg-6", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-lg-12", "mb-3"], ["type", "email", 1, "form-control"], ["type", "tel", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-12"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], [1, "profile-pic-upload", "image-field"], [1, "profile-pic", "p-2"], ["src", "./assets/img/users/user-46.png", "alt", "user", 1, "object-fit-cover", "h-100", "rounded-1"], ["type", "button", 1, "close", "rounded-1"], ["type", "text", "value", "Shaun", 1, "form-control"], ["type", "text", "value", "Farley", 1, "form-control"], ["type", "text", "value", "GreenTech Industries", 1, "form-control"], ["type", "email", "value", "shaun@example.com", 1, "form-control"], ["type", "tel", "value", "+18647961254", 1, "form-control"], ["type", "text", "value", "87 Griffin Street", 1, "form-control"], ["type", "text", "value", "90001", 1, "form-control"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "d-inline-flex", "align-items-center", "p-1", "pe-2", "rounded-1", "text-white", "bg-success", "fs-10"], [1, "ti", "ti-point-filled", "me-1", "fs-11"], [1, "d-flex"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "eye", 1, "feather", "icon-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function BillersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Billers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your billers");
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
      \u0275\u0275listener("click", function BillersComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, BillersComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, BillersComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Biller");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function BillersComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BillersComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(45, "div", 29)(46, "div", 30)(47, "table", 31);
      \u0275\u0275listener("matSortChange", function BillersComponent_Template_table_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "thead")(49, "tr")(50, "th", 32)(51, "label", 33);
      \u0275\u0275listener("click", function BillersComponent_Template_label_click_51_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(52, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function BillersComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "th", 36);
      \u0275\u0275text(55, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 37);
      \u0275\u0275text(57, "Biller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 38);
      \u0275\u0275text(59, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 39);
      \u0275\u0275text(61, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 40);
      \u0275\u0275text(63, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 41);
      \u0275\u0275text(65, "country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 42);
      \u0275\u0275text(67, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "tbody");
      \u0275\u0275repeaterCreate(70, BillersComponent_For_71_Template, 33, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(72, BillersComponent_Conditional_72_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(73, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 43)(75, "div", 44)(76, "div", 45)(77, "div", 46)(78, "div", 47)(79, "div", 48)(80, "div", 2)(81, "h4");
      \u0275\u0275text(82, "Add Biller");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "button", 49)(84, "span", 50);
      \u0275\u0275text(85, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 51)(87, "form")(88, "div", 52)(89, "div", 53)(90, "div", 54)(91, "span");
      \u0275\u0275element(92, "i", 55);
      \u0275\u0275text(93, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 56)(95, "div", 57);
      \u0275\u0275element(96, "input", 58);
      \u0275\u0275elementStart(97, "div", 59)(98, "h4");
      \u0275\u0275text(99, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "p", 60);
      \u0275\u0275text(101, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 61)(103, "div", 62)(104, "label", 63);
      \u0275\u0275text(105, "First Name");
      \u0275\u0275elementStart(106, "span", 64);
      \u0275\u0275text(107, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(108, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 62)(110, "label", 63);
      \u0275\u0275text(111, "Last Name");
      \u0275\u0275elementStart(112, "span", 64);
      \u0275\u0275text(113, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(114, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 66)(116, "label", 63);
      \u0275\u0275text(117, "Company Name");
      \u0275\u0275elementStart(118, "span", 64);
      \u0275\u0275text(119, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(120, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 66)(122, "label", 63);
      \u0275\u0275text(123, "Email");
      \u0275\u0275elementStart(124, "span", 64);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 66)(128, "label", 63);
      \u0275\u0275text(129, "Phone");
      \u0275\u0275elementStart(130, "span", 64);
      \u0275\u0275text(131, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(132, "input", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 66)(134, "label", 63);
      \u0275\u0275text(135, "Address");
      \u0275\u0275elementStart(136, "span", 64);
      \u0275\u0275text(137, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(138, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 62)(140, "label", 63);
      \u0275\u0275text(141, "City");
      \u0275\u0275elementStart(142, "span", 64);
      \u0275\u0275text(143, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "mat-select", 69)(145, "mat-option", 70);
      \u0275\u0275text(146, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "mat-option", 70);
      \u0275\u0275text(148, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "mat-option", 70);
      \u0275\u0275text(150, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "div", 62)(152, "label", 63);
      \u0275\u0275text(153, "State");
      \u0275\u0275elementStart(154, "span", 64);
      \u0275\u0275text(155, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "mat-select", 69)(157, "mat-option", 70);
      \u0275\u0275text(158, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "mat-option", 70);
      \u0275\u0275text(160, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "mat-option", 70);
      \u0275\u0275text(162, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 62)(164, "label", 63);
      \u0275\u0275text(165, "Country");
      \u0275\u0275elementStart(166, "span", 64);
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "mat-select", 69)(169, "mat-option", 70);
      \u0275\u0275text(170, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "mat-option", 70);
      \u0275\u0275text(172, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-option", 70);
      \u0275\u0275text(174, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "div", 62)(176, "label", 63);
      \u0275\u0275text(177, "Postal Code");
      \u0275\u0275elementStart(178, "span", 64);
      \u0275\u0275text(179, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(180, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div", 71)(182, "div", 72)(183, "span", 73);
      \u0275\u0275text(184, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(185, "input", 74)(186, "label", 75);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(187, "div", 76)(188, "button", 77);
      \u0275\u0275text(189, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "button", 78);
      \u0275\u0275text(191, "Add Biller");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(192, "div", 79)(193, "div", 44)(194, "div", 45)(195, "div", 46)(196, "div", 47)(197, "div", 48)(198, "div", 2)(199, "h4");
      \u0275\u0275text(200, "Edit Biller");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "button", 49)(202, "span", 50);
      \u0275\u0275text(203, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "div", 51)(205, "form")(206, "div", 52)(207, "div", 80)(208, "div", 81);
      \u0275\u0275element(209, "img", 82);
      \u0275\u0275elementStart(210, "button", 83)(211, "span", 50);
      \u0275\u0275text(212, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(213, "div", 56)(214, "div", 57);
      \u0275\u0275element(215, "input", 58);
      \u0275\u0275elementStart(216, "div", 59)(217, "h4");
      \u0275\u0275text(218, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(219, "p", 60);
      \u0275\u0275text(220, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(221, "div", 61)(222, "div", 62)(223, "label", 63);
      \u0275\u0275text(224, "First Name");
      \u0275\u0275elementStart(225, "span", 64);
      \u0275\u0275text(226, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(227, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 62)(229, "label", 63);
      \u0275\u0275text(230, "Last Name");
      \u0275\u0275elementStart(231, "span", 64);
      \u0275\u0275text(232, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(233, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "div", 66)(235, "label", 63);
      \u0275\u0275text(236, "Company Name");
      \u0275\u0275elementStart(237, "span", 64);
      \u0275\u0275text(238, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(239, "input", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "div", 66)(241, "label", 63);
      \u0275\u0275text(242, "Email");
      \u0275\u0275elementStart(243, "span", 64);
      \u0275\u0275text(244, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(245, "input", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div", 66)(247, "label", 63);
      \u0275\u0275text(248, "Phone");
      \u0275\u0275elementStart(249, "span", 64);
      \u0275\u0275text(250, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(251, "input", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "div", 66)(253, "label", 63);
      \u0275\u0275text(254, "Address");
      \u0275\u0275elementStart(255, "span", 64);
      \u0275\u0275text(256, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(257, "input", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div", 62)(259, "label", 63);
      \u0275\u0275text(260, "City");
      \u0275\u0275elementStart(261, "span", 64);
      \u0275\u0275text(262, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "mat-select", 69)(264, "mat-option", 70);
      \u0275\u0275text(265, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "mat-option", 70);
      \u0275\u0275text(267, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "mat-option", 70);
      \u0275\u0275text(269, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(270, "div", 62)(271, "label", 63);
      \u0275\u0275text(272, "State");
      \u0275\u0275elementStart(273, "span", 64);
      \u0275\u0275text(274, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "mat-select", 69)(276, "mat-option", 70);
      \u0275\u0275text(277, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "mat-option", 70);
      \u0275\u0275text(279, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "mat-option", 70);
      \u0275\u0275text(281, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(282, "div", 62)(283, "label", 63);
      \u0275\u0275text(284, "Country");
      \u0275\u0275elementStart(285, "span", 64);
      \u0275\u0275text(286, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "mat-select", 69)(288, "mat-option", 70);
      \u0275\u0275text(289, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "mat-option", 70);
      \u0275\u0275text(291, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "mat-option", 70);
      \u0275\u0275text(293, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(294, "div", 62)(295, "label", 63);
      \u0275\u0275text(296, "Postal Code");
      \u0275\u0275elementStart(297, "span", 64);
      \u0275\u0275text(298, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(299, "input", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "div", 71)(301, "div", 72)(302, "span", 73);
      \u0275\u0275text(303, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(304, "input", 91)(305, "label", 92);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(306, "div", 76)(307, "button", 77);
      \u0275\u0275text(308, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "button", 78);
      \u0275\u0275text(310, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(311, "div", 93)(312, "div", 44)(313, "div", 45)(314, "div", 46)(315, "div", 94)(316, "span", 95);
      \u0275\u0275element(317, "i", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "h4", 97);
      \u0275\u0275text(319, "Delete Biller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "p", 98);
      \u0275\u0275text(321, "Are you sure you want to delete biller?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "div", 99)(323, "button", 77);
      \u0275\u0275text(324, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "button", 78);
      \u0275\u0275text(326, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
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
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 72 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillersComponent, [{
    type: Component,
    args: [{ selector: "app-billers", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSelectModule, MatSortModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Billers</h4>\n            <h6>Manage your billers</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed"  data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#add-units"><i class="ti ti-circle-plus me-2"></i>Add Biller</a>\n    </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n				<a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n				<div class="dataTables_filter">\n				  <label>\n					<input\n					  [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n					  (ngModelChange)="searchData(searchDataValue)"\n					  type="search"\n					  class="form-control"\n					  placeholder="Search"\n					  />\n					</label>\n				  </div>\n				</div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n                    \n            <div class="dropdown ">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                    </li>\n        \n                </ul>\n            </div>\n           \n        </div>\n    </div>\n    <div class="card-body">\n        <div class="table-responsive">\n          <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n            matSortDirection="asc" matSortDisableClear>\n            <thead>\n              <tr>\n                <th class="no-sort">\n                 <label class="checkboxs" (click)="selectAll(initChecked)">\n                        <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>\n                        <span class="checkmarks"></span>\n                      </label>\n                </th>\n                <th mat-sort-header="code">Code</th>\n                <th  mat-sort-header="customer">Biller</th>\n                <th mat-sort-header="compa">Company Name</th>\n                <th mat-sort-header="email">Email</th>\n                <th mat-sort-header="phone">Phone</th>\n                <th mat-sort-header="country">country</th>\n                <th mat-sort-header="status">Status</th>\n                <th class="no-sort"></th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (data of tableData; track data; let i = $index) {\n                <tr>\n                  <td>\n                        <label class="checkboxs" (click)="selectAll(initChecked)">\n                          <input type="checkbox"  [(ngModel)]="initChecked"/>\n                          <span class="checkmarks"></span>\n                        </label>\n                      </td>\n                      <td>{{data.code}}</td>										\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                                <img src="assets/img/users/{{data.img}}" alt="product">\n                            </a>\n                            <a href="javascript:void(0);">{{data.biller}}</a>\n                        </div>\n                    </td>\n                    <td>{{data.companyName}}</td>\n                    <td>{{data.email}}</td>\n                    <td>{{data.phone}}</td>\n                    <td>{{data.country}}</td>\n                      <td><span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10"><i class="ti ti-point-filled me-1 fs-11"></i>{{data.status}}</span></td>\n                      <td class="d-flex">\n                        <div class="edit-delete-action d-flex align-items-center">\n                          <a class="me-2 p-2 d-flex align-items-center border rounded" href="javascript:void(0);">\n                            <i data-feather="eye" class="feather icon-eye"></i>\n                          </a>\n                          <a class="me-2 p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">\n                            <i data-feather="edit" class="feather icon-edit"></i>\n                          </a>\n                          <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);">\n                            <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                          </a>\n                        </div>\n                        \n                      </td>\n                </tr>\n			}@if(tableData.length === 0){\n				<tr>\n					<td class="text-center" colspan="12">No Matching Data Found</td>\n				</tr>\n			}\n            </tbody>\n          </table>\n  \n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n</div>\n<!-- /product list -->\n\n\n		<!-- Add biller -->\n		<div class="modal fade" id="add-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Biller</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form >\n								<div class="new-employee-field">\n										<div class="profile-pic-upload">\n											<div class="profile-pic">\n												<span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n											</div>\n											<div class="mb-3">\n												<div class="image-upload mb-0">\n													<input type="file">\n													<div class="image-uploads">\n														<h4>Upload Image</h4>\n													</div>\n												</div>\n												<p class="mt-2">JPEG, PNG up to 2 MB</p>\n											</div>\n										</div>\n									</div>\n									<div class="row">\n										<div class="col-lg-6 mb-3">\n											<label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control"> \n										</div>\n										<div class="col-lg-6 mb-3">\n											<label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Company Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n											<input type="email" class="form-control"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n											<input type="tel" class="form-control"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Address<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control"> \n										</div>\n										<div class="col-lg-6 mb-3">		\n											<label class="form-label">City<span class="text-danger ms-1">*</span></label>\n											<mat-select class="custom-mat-select select" placeholder="Select">\n												<mat-option value="1">Select</mat-option>\n												<mat-option value="1">United Kingdom</mat-option>\n												<mat-option value="1">United State</mat-option>\n											</mat-select>											\n										</div>\n										<div class="col-lg-6 mb-3">		\n											<label class="form-label">State<span class="text-danger ms-1">*</span></label>\n											<mat-select class="custom-mat-select select" placeholder="Select">\n												<mat-option value="1">Select</mat-option>\n												<mat-option value="1">United Kingdom</mat-option>\n												<mat-option value="1">United State</mat-option>\n											</mat-select>											\n										</div>\n										<div class="col-lg-6 mb-3">		\n												<label class="form-label">Country<span class="text-danger ms-1">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Select">\n													<mat-option value="1">Select</mat-option>\n													<mat-option value="1">United Kingdom</mat-option>\n													<mat-option value="1">United State</mat-option>\n												</mat-select>											\n										</div>\n										<div class="col-lg-6 mb-3">\n											<label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control"> \n										</div>\n										<div class="col-lg-12">\n											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n												<span class="status-label">Status</span>\n												<input type="checkbox" id="user1" class="check" checked="">\n												<label for="user1" class="checktoggle">	</label>\n											</div>\n										</div>\n																\n									</div>								\n									\n								\n								</form>\n							</div>\n\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Biller</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Add biller -->\n\n        <!-- Edit biller -->\n		<div class="modal fade" id="edit-units">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Biller</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form >\n								<div class="new-employee-field">\n										<div class="profile-pic-upload image-field">\n											<div class="profile-pic p-2">\n												<img src="./assets/img/users/user-46.png" class="object-fit-cover h-100 rounded-1" alt="user">\n												<button type="button" class="close rounded-1">\n													<span aria-hidden="true">&times;</span>\n												</button>\n											</div>\n											<div class="mb-3">\n												<div class="image-upload mb-0">\n													<input type="file">\n													<div class="image-uploads">\n														<h4>Change Image</h4>\n													</div>\n												</div>\n												<p class="mt-2">JPEG, PNG up to 2 MB</p>\n											</div>\n										</div>\n									</div>\n									<div class="row">\n										<div class="col-lg-6 mb-3">\n											<label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control" value="Shaun"> \n										</div>\n										<div class="col-lg-6 mb-3">\n											<label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control" value="Farley"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Company Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control" value="GreenTech Industries"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n											<input type="email" class="form-control" value="shaun@example.com"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n											<input type="tel" class="form-control" value="+18647961254"> \n										</div>\n										<div class="col-lg-12 mb-3">\n											<label class="form-label">Address<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control" value="87 Griffin Street"> \n										</div>\n										<div class="col-lg-6 mb-3">		\n											<label class="form-label">City<span class="text-danger ms-1">*</span></label>\n											<mat-select class="custom-mat-select select" placeholder="Select">\n												<mat-option value="1">USA</mat-option>\n												<mat-option value="1">United Kingdom</mat-option>\n												<mat-option value="1">United State</mat-option>\n											</mat-select>											\n										</div>\n										<div class="col-lg-6 mb-3">		\n											<label class="form-label">State<span class="text-danger ms-1">*</span></label>\n											<mat-select class="custom-mat-select select" placeholder="Select">\n												<mat-option value="1">California</mat-option>\n												<mat-option value="1">United Kingdom</mat-option>\n												<mat-option value="1">United State</mat-option>\n											</mat-select>											\n										</div>\n										<div class="col-lg-6 mb-3">		\n												<label class="form-label">Country<span class="text-danger ms-1">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Select">\n													<mat-option value="1">Los Angeles</mat-option>\n													<mat-option value="1">United Kingdom</mat-option>\n													<mat-option value="1">United State</mat-option>\n												</mat-select>											\n										</div>\n										<div class="col-lg-6 mb-3">\n											<label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control" value="90001"> \n										</div>\n										<div class="col-lg-12">\n											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n												<span class="status-label">Status</span>\n												<input type="checkbox" id="user2" class="check" checked="">\n												<label for="user2" class="checktoggle">	</label>\n											</div>\n										</div>\n																\n									</div>								\n									\n								\n								</form>\n							</div>\n\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit biller -->\n\n		 		<!-- delete modal -->\n				 <div class="modal fade" id="delete-modal">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="page-wrapper-new p-0">\n								<div class="content p-5 px-3 text-center">\n										<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n										<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Biller</h4>\n										<p class="mb-0 fs-16">Are you sure you want to delete biller?</p>\n										<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n											<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n											<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n										</div>						\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillersComponent, { className: "BillersComponent", filePath: "src/app/features/pages/people/billers/billers.component.ts", lineNumber: 21 });
})();
export {
  BillersComponent
};
//# sourceMappingURL=chunk-OJKRUBLC.js.map
