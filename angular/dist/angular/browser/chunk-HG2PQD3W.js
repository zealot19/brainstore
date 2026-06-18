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

// src/app/features/pages/people/customers/customers.component.ts
var _c0 = () => ({ standalone: true });
function CustomersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CustomersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CustomersComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 33);
    \u0275\u0275listener("click", function CustomersComponent_For_69_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_For_69_Template_input_ngModelChange_3_listener($event) {
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
    \u0275\u0275elementStart(7, "td")(8, "div", 102)(9, "a", 103);
    \u0275\u0275element(10, "img", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 105);
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
    \u0275\u0275elementStart(19, "td")(20, "span", 106);
    \u0275\u0275element(21, "i", 107);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 108)(24, "div", 109)(25, "a", 110);
    \u0275\u0275element(26, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 112);
    \u0275\u0275element(28, "i", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 114);
    \u0275\u0275element(30, "i", 115);
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
    \u0275\u0275textInterpolate(data_r3.customer);
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
function CustomersComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 116);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var CustomersComponent = class _CustomersComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  //** / pagination variables
  routes = routes;
  selectedValue3 = "";
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
        if (this.router.url == this.routes.customers) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomer().subscribe((apiRes) => {
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
  selectedList3 = [
    { value: "Sort by Datee" },
    { value: "25 9 23" },
    { value: "12 9 23" }
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
  selectedList4 = [
    { value: "Choose Customer Name" },
    { value: "Benjamin" },
    { value: "Ellen" },
    { value: "Freda" },
    { value: "Kaitlin" }
  ];
  selectedList5 = [
    { value: "Choose Country" },
    { value: "India" },
    { value: "USA" }
  ];
  selectedList6 = [
    { value: "Choose" },
    { value: "United Kingdom" },
    { value: "United State" }
  ];
  selectedList7 = [
    { value: "Choose" },
    { value: "United Kingdom" },
    { value: "United State" }
  ];
  selectedList8 = [
    { value: "Varrel" },
    { value: "Varrel" }
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
  static \u0275fac = function CustomersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], decls: 313, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "code"], ["mat-sort-header", "customer"], ["mat-sort-header", "email"], ["mat-sort-header", "phone"], ["mat-sort-header", "country"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "mb-3"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mt-2"], [1, "row"], [1, "col-lg-6", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-lg-12", "mb-3"], ["type", "email", 1, "form-control"], ["type", "tel", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-12"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], [1, "profile-pic-upload", "image-field"], [1, "profile-pic", "p-2"], ["src", "./assets/img/users/user-41.jpg", "alt", "user", 1, "object-fit-cover", "h-100", "rounded-1"], ["type", "button", 1, "close", "rounded-1"], ["type", "text", "value", "Carl", 1, "form-control"], ["type", "text", "value", "Evans", 1, "form-control"], ["type", "email", "value", "carlevans@example.com", 1, "form-control"], ["type", "tel", "value", "+12163547758 ", 1, "form-control"], ["type", "text", "value", "87 Griffin Street", 1, "form-control"], ["placeholder", "USA", 1, "custom-mat-select", "select"], ["placeholder", "California", 1, "custom-mat-select", "select"], ["placeholder", "Los Angeles", 1, "custom-mat-select", "select"], ["type", "text", "value", "90001", 1, "form-control"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "d-inline-flex", "align-items-center", "p-1", "pe-2", "rounded-1", "text-white", "bg-success", "fs-10"], [1, "ti", "ti-point-filled", "me-1", "fs-11"], [1, "d-flex"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "eye", 1, "feather", "icon-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function CustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Customer List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your warehouse");
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
      \u0275\u0275listener("click", function CustomersComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, CustomersComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, CustomersComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CustomersComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(45, "div", 28)(46, "div", 29)(47, "table", 30);
      \u0275\u0275listener("matSortChange", function CustomersComponent_Template_table_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "thead", 31)(49, "tr")(50, "th", 32)(51, "label", 33);
      \u0275\u0275listener("click", function CustomersComponent_Template_label_click_51_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(52, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Template_input_ngModelChange_52_listener($event) {
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
      \u0275\u0275text(57, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 38);
      \u0275\u0275text(59, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 39);
      \u0275\u0275text(61, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 40);
      \u0275\u0275text(63, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 41);
      \u0275\u0275text(65, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "tbody");
      \u0275\u0275repeaterCreate(68, CustomersComponent_For_69_Template, 31, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(70, CustomersComponent_Conditional_70_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(71, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 42)(73, "div", 43)(74, "div", 44)(75, "div", 45)(76, "div", 46)(77, "div", 47)(78, "div", 2)(79, "h4");
      \u0275\u0275text(80, "Add Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "button", 48)(82, "span", 49);
      \u0275\u0275text(83, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 50)(85, "form")(86, "div", 51)(87, "div", 52)(88, "div", 53)(89, "span");
      \u0275\u0275element(90, "i", 54);
      \u0275\u0275text(91, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 55)(93, "div", 56);
      \u0275\u0275element(94, "input", 57);
      \u0275\u0275elementStart(95, "div", 58)(96, "h4");
      \u0275\u0275text(97, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "p", 59);
      \u0275\u0275text(99, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(100, "div", 60)(101, "div", 61)(102, "label", 62);
      \u0275\u0275text(103, "First Name");
      \u0275\u0275elementStart(104, "span", 63);
      \u0275\u0275text(105, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(106, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 61)(108, "label", 62);
      \u0275\u0275text(109, "Last Name");
      \u0275\u0275elementStart(110, "span", 63);
      \u0275\u0275text(111, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(112, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 65)(114, "label", 62);
      \u0275\u0275text(115, "Email");
      \u0275\u0275elementStart(116, "span", 63);
      \u0275\u0275text(117, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(118, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 65)(120, "label", 62);
      \u0275\u0275text(121, "Phone");
      \u0275\u0275elementStart(122, "span", 63);
      \u0275\u0275text(123, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(124, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 65)(126, "label", 62);
      \u0275\u0275text(127, "Address");
      \u0275\u0275elementStart(128, "span", 63);
      \u0275\u0275text(129, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(130, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div", 61)(132, "label", 62);
      \u0275\u0275text(133, "City");
      \u0275\u0275elementStart(134, "span", 63);
      \u0275\u0275text(135, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "mat-select", 68)(137, "mat-option", 69);
      \u0275\u0275text(138, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "mat-option", 69);
      \u0275\u0275text(140, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "mat-option", 69);
      \u0275\u0275text(142, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "div", 61)(144, "label", 62);
      \u0275\u0275text(145, "State");
      \u0275\u0275elementStart(146, "span", 63);
      \u0275\u0275text(147, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "mat-select", 68)(149, "mat-option", 69);
      \u0275\u0275text(150, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "mat-option", 69);
      \u0275\u0275text(152, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "mat-option", 69);
      \u0275\u0275text(154, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "div", 61)(156, "label", 62);
      \u0275\u0275text(157, "Country");
      \u0275\u0275elementStart(158, "span", 63);
      \u0275\u0275text(159, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "mat-select", 68)(161, "mat-option", 69);
      \u0275\u0275text(162, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "mat-option", 69);
      \u0275\u0275text(164, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "mat-option", 69);
      \u0275\u0275text(166, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 61)(168, "label", 62);
      \u0275\u0275text(169, "Postal Code");
      \u0275\u0275elementStart(170, "span", 63);
      \u0275\u0275text(171, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(172, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 70)(174, "div", 71)(175, "span", 72);
      \u0275\u0275text(176, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "input", 73)(178, "label", 74);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(179, "div", 75)(180, "button", 76);
      \u0275\u0275text(181, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "button", 77);
      \u0275\u0275text(183, "Add Customer");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(184, "div", 78)(185, "div", 43)(186, "div", 44)(187, "div", 45)(188, "div", 46)(189, "div", 47)(190, "div", 2)(191, "h4");
      \u0275\u0275text(192, "Edit Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "button", 48)(194, "span", 49);
      \u0275\u0275text(195, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(196, "div", 50)(197, "form")(198, "div", 51)(199, "div", 79)(200, "div", 80);
      \u0275\u0275element(201, "img", 81);
      \u0275\u0275elementStart(202, "button", 82)(203, "span", 49);
      \u0275\u0275text(204, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "div", 55)(206, "div", 56);
      \u0275\u0275element(207, "input", 57);
      \u0275\u0275elementStart(208, "div", 58)(209, "h4");
      \u0275\u0275text(210, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "p", 59);
      \u0275\u0275text(212, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(213, "div", 60)(214, "div", 61)(215, "label", 62);
      \u0275\u0275text(216, "First Name");
      \u0275\u0275elementStart(217, "span", 63);
      \u0275\u0275text(218, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(219, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 61)(221, "label", 62);
      \u0275\u0275text(222, "Last Name");
      \u0275\u0275elementStart(223, "span", 63);
      \u0275\u0275text(224, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(225, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 65)(227, "label", 62);
      \u0275\u0275text(228, "Email");
      \u0275\u0275elementStart(229, "span", 63);
      \u0275\u0275text(230, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(231, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 65)(233, "label", 62);
      \u0275\u0275text(234, "Phone");
      \u0275\u0275elementStart(235, "span", 63);
      \u0275\u0275text(236, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(237, "input", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 65)(239, "label", 62);
      \u0275\u0275text(240, "Address");
      \u0275\u0275elementStart(241, "span", 63);
      \u0275\u0275text(242, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(243, "input", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div", 61)(245, "label", 62);
      \u0275\u0275text(246, "City");
      \u0275\u0275elementStart(247, "span", 63);
      \u0275\u0275text(248, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "mat-select", 88)(250, "mat-option", 69);
      \u0275\u0275text(251, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "mat-option", 69);
      \u0275\u0275text(253, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "mat-option", 69);
      \u0275\u0275text(255, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(256, "div", 61)(257, "label", 62);
      \u0275\u0275text(258, "State");
      \u0275\u0275elementStart(259, "span", 63);
      \u0275\u0275text(260, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "mat-select", 89)(262, "mat-option", 69);
      \u0275\u0275text(263, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "mat-option", 69);
      \u0275\u0275text(265, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "mat-option", 69);
      \u0275\u0275text(267, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(268, "div", 61)(269, "label", 62);
      \u0275\u0275text(270, "Country");
      \u0275\u0275elementStart(271, "span", 63);
      \u0275\u0275text(272, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "mat-select", 90)(274, "mat-option", 69);
      \u0275\u0275text(275, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "mat-option", 69);
      \u0275\u0275text(277, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "mat-option", 69);
      \u0275\u0275text(279, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(280, "div", 61)(281, "label", 62);
      \u0275\u0275text(282, "Postal Code");
      \u0275\u0275elementStart(283, "span", 63);
      \u0275\u0275text(284, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(285, "input", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "div", 70)(287, "div", 71)(288, "span", 72);
      \u0275\u0275text(289, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(290, "input", 92)(291, "label", 93);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(292, "div", 75)(293, "button", 76);
      \u0275\u0275text(294, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "button", 77);
      \u0275\u0275text(296, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(297, "div", 94)(298, "div", 43)(299, "div", 44)(300, "div", 45)(301, "div", 95)(302, "span", 96);
      \u0275\u0275element(303, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "h4", 98);
      \u0275\u0275text(305, "Delete Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "p", 99);
      \u0275\u0275text(307, "Are you sure you want to delete customer?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "div", 100)(309, "button", 76);
      \u0275\u0275text(310, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "button", 77);
      \u0275\u0275text(312, "Yes Delete");
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
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 70 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomersComponent, [{
    type: Component,
    args: [{ selector: "app-customers", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSelectModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Customer List</h4>\n      <h6>Manage your warehouse</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed"  data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i  class="ti ti-circle-plus me-2"></i>Add Customer</a>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input\n              [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n              (ngModelChange)="searchData(searchDataValue)"\n              type="search"\n              class="form-control"\n              placeholder="Search"\n              />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n          \n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Status\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n          </li>\n    \n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="card-body">\n      <div class="table-responsive">\n        <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n          matSortDirection="asc" matSortDisableClear>\n          <thead class="thead-light">\n            <tr>\n              <th class="no-sort">\n               <label class="checkboxs" (click)="selectAll(initChecked)">\n                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>\n                      <span class="checkmarks"></span>\n                    </label>\n              </th>\n              <th mat-sort-header="code">Code</th>\n              <th  mat-sort-header="customer">Customer</th>\n              <th mat-sort-header="email">Email</th>\n              <th mat-sort-header="phone">Phone</th>\n              <th mat-sort-header="country">Country</th>\n              <th mat-sort-header="status">Status</th>\n              <th class="no-sort"></th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data; let i = $index) {\n              <tr>\n                <td>\n                      <label class="checkboxs" (click)="selectAll(initChecked)">\n                        <input type="checkbox"  [(ngModel)]="initChecked"/>\n                        <span class="checkmarks"></span>\n                      </label>\n                    </td>\n                    <td>{{data.code}}</td>										\n                    <td>\n                      <div class="d-flex align-items-center">\n                        <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                          <img src="assets/img/users/{{data.img}}" alt="product">\n                        </a>\n                        <a href="javascript:void(0);">{{data.customer}}</a>\n                      </div>\n                    </td>\n                    <td>{{data.email}}</td>\n                    <td>{{data.phone}}</td>\n                    <td>{{data.country}}</td>\n                    <td><span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10"><i class="ti ti-point-filled me-1 fs-11"></i>{{data.status}}</span></td>\n                    <td class="d-flex">\n                      <div class="edit-delete-action d-flex align-items-center">\n                        <a class="me-2 p-2 d-flex align-items-center border rounded" href="javascript:void(0);">\n                          <i data-feather="eye" class="feather icon-eye"></i>\n                        </a>\n                        <a class="me-2 p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">\n                          <i data-feather="edit" class="feather icon-edit"></i>\n                        </a>\n                        <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);">\n                          <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                        </a>\n                      </div>\n                      \n                    </td>\n              </tr>\n            }@if(tableData.length === 0){\n              <tr>\n                <td class="text-center" colspan="12">No Matching Data Found</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n\n      </div>\n      <app-custom-pagination></app-custom-pagination>\n    </div>\n  </div>\n  <!-- /product list -->\n  		<!-- Add Customer -->\n      <div class="modal fade" id="add-units">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Add Customer</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body">\n                  <form >\n                  <div class="new-employee-field">\n                      <div class="profile-pic-upload">\n                        <div class="profile-pic">\n                          <span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n                        </div>\n                        <div class="mb-3">\n                          <div class="image-upload mb-0">\n                            <input type="file">\n                            <div class="image-uploads">\n                              <h4>Upload Image</h4>\n                            </div>\n                          </div>\n                          <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="row">\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                        <input type="email" class="form-control"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                        <input type="tel" class="form-control"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Address<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">City<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                          <mat-option value="1">Select</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">State<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                          <mat-option value="1">Select</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                          <label class="form-label">Country<span class="text-danger ms-1">*</span></label>\n                          <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">United Kingdom</mat-option>\n                            <mat-option value="1">United State</mat-option>\n                          </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-12">\n                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n                          <span class="status-label">Status</span>\n                          <input type="checkbox" id="user1" class="check" checked="">\n                          <label for="user1" class="checktoggle">	</label>\n                        </div>\n                      </div>\n                                  \n                    </div>								\n                    \n                  \n                  </form>\n                </div>\n  \n                <div class="modal-footer">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Customer</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Add Customer -->\n  \n          <!-- Edit Customer -->\n      <div class="modal fade" id="edit-units">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Edit Customer</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body">\n                  <form >\n                  <div class="new-employee-field">\n                      <div class="profile-pic-upload image-field">\n                        <div class="profile-pic p-2">\n                          <img src="./assets/img/users/user-41.jpg" class="object-fit-cover h-100 rounded-1" alt="user">\n                          <button type="button" class="close rounded-1">\n                            <span aria-hidden="true">&times;</span>\n                          </button>\n                        </div>\n                        <div class="mb-3">\n                          <div class="image-upload mb-0">\n                            <input type="file">\n                            <div class="image-uploads">\n                              <h4>Change Image</h4>\n                            </div>\n                          </div>\n                          <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="row">\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="Carl"> \n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="Evans"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                        <input type="email" class="form-control" value="carlevans@example.com"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                        <input type="tel" class="form-control" value="+12163547758 "> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Address<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="87 Griffin Street"> \n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">City<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="USA">\n                          <mat-option value="1">USA</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">State<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="California">\n                          <mat-option value="1">California</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                          <label class="form-label">Country<span class="text-danger ms-1">*</span></label>\n                          <mat-select class="custom-mat-select select" placeholder="Los Angeles">\n                            <mat-option value="1">Los Angeles</mat-option>\n                            <mat-option value="1">United Kingdom</mat-option>\n                            <mat-option value="1">United State</mat-option>\n                          </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="90001"> \n                      </div>\n                      <div class="col-lg-12">\n                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n                          <span class="status-label">Status</span>\n                          <input type="checkbox" id="user2" class="check" checked="">\n                          <label for="user2" class="checktoggle">	</label>\n                        </div>\n                      </div>\n                                  \n                    </div>								\n                    \n                  \n                  </form>\n                </div>\n  \n                <div class="modal-footer">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Edit Customer -->\n  \n           <!-- delete modal -->\n           <div class="modal fade" id="delete-modal">\n            <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                <div class="page-wrapper-new p-0">\n                  <div class="content p-5 px-3 text-center">\n                      <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                      <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Customer</h4>\n                      <p class="mb-0 fs-16">Are you sure you want to delete customer?</p>\n                      <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                        <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                        <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                      </div>						\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src/app/features/pages/people/customers/customers.component.ts", lineNumber: 25 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=chunk-HG2PQD3W.js.map
