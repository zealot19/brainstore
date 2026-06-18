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

// src/app/features/pages/people/suppliers/suppliers.component.ts
var _c0 = () => ({ standalone: true });
function SuppliersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function SuppliersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function SuppliersComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 101)(3, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function SuppliersComponent_For_91_Template_input_ngModelChange_3_listener($event) {
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
    \u0275\u0275elementStart(7, "td")(8, "div", 103)(9, "a", 104);
    \u0275\u0275element(10, "img", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 106)(12, "p", 107)(13, "a", 108);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 109);
    \u0275\u0275element(23, "i", 110);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 111)(26, "div", 112)(27, "a", 113);
    \u0275\u0275element(28, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 115);
    \u0275\u0275element(30, "i", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 117);
    \u0275\u0275element(32, "i", 118);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.code);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/supplier/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.country, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
  }
}
function SuppliersComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 119);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var SuppliersComponent = class _SuppliersComponent {
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
        if (this.router.url == this.routes.suppliers) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSupplier().subscribe((apiRes) => {
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
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "25 9 23" },
    { value: "12 9 23" }
  ];
  selectedList2 = [
    { value: "Choose Supplier Name" },
    { value: "Dazzle Shoes" },
    { value: "A-Z Store" }
  ];
  selectedList3 = [
    { value: "Choose Country" },
    { value: "Mexico" },
    { value: "Italy" }
  ];
  selectedList4 = [
    { value: "Choose" },
    { value: "Varrel" }
  ];
  selectedList5 = [
    { value: "Choose" },
    { value: "Germany" },
    { value: "Mexico" }
  ];
  selectedList6 = [
    { value: "Varrel" }
  ];
  selectedList7 = [
    { value: "Germany" },
    { value: "France" },
    { value: "Mexico" }
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
  static \u0275fac = function SuppliersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuppliersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuppliersComponent, selectors: [["app-suppliers"]], decls: 335, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "code"], ["mat-sort-header", "suppliername"], ["mat-sort-header", "email"], ["mat-sort-header", "phone"], ["mat-sort-header", "country"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "mb-3"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mt-2"], [1, "row"], [1, "col-lg-6", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-lg-12", "mb-3"], ["type", "email", 1, "form-control"], ["type", "tel", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-12"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-supplier", 1, "modal", "fade"], [1, "profile-pic-upload", "image-field"], [1, "profile-pic", "p-2"], ["src", "assets/img/supplier/edit-supplier.jpg", "alt", "user", 1, "object-fit-cover", "h-100", "rounded-1"], ["type", "button", 1, "close", "rounded-1"], ["type", "text", "value", "Carl", 1, "form-control"], ["type", "text", "value", "Evans", 1, "form-control"], ["type", "email", "value", "carlevans@example.com", 1, "form-control"], ["type", "tel", "value", "+12163547758 ", 1, "form-control"], ["type", "text", "value", "87 Griffin Street", 1, "form-control"], ["placeholder", "USA", 1, "custom-mat-select", "select"], ["placeholder", "California", 1, "custom-mat-select", "select"], ["placeholder", "Los Angeles", 1, "custom-mat-select", "select"], ["type", "text", "value", "90001", 1, "form-control"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["alt", "img", 1, "img-fluid", "rounded-2", 3, "src"], [1, "ms-2"], [1, "text-gray-9", "mb-0"], ["href", "javascript:void(0);"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], ["data-feather", "eye", 1, "feather", "icon-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-supplier", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function SuppliersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Supplier List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Supplier");
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
      \u0275\u0275listener("click", function SuppliersComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, SuppliersComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, SuppliersComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Supplier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function SuppliersComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuppliersComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275listener("matSortChange", function SuppliersComponent_Template_table_matSortChange_69_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(70, "thead")(71, "tr")(72, "th", 32)(73, "label", 33);
      \u0275\u0275listener("click", function SuppliersComponent_Template_label_click_73_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(74, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function SuppliersComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "th", 36);
      \u0275\u0275text(77, "code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 37);
      \u0275\u0275text(79, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 38);
      \u0275\u0275text(81, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 39);
      \u0275\u0275text(83, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 40);
      \u0275\u0275text(85, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 41);
      \u0275\u0275text(87, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "tbody");
      \u0275\u0275repeaterCreate(90, SuppliersComponent_For_91_Template, 33, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(92, SuppliersComponent_Conditional_92_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(93, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 42)(95, "div", 43)(96, "div", 44)(97, "div", 45)(98, "div", 46)(99, "div", 47)(100, "div", 2)(101, "h4");
      \u0275\u0275text(102, "Add Supplier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "button", 48)(104, "span", 49);
      \u0275\u0275text(105, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 50)(107, "form")(108, "div", 51)(109, "div", 52)(110, "div", 53)(111, "span");
      \u0275\u0275element(112, "i", 54);
      \u0275\u0275text(113, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 55)(115, "div", 56);
      \u0275\u0275element(116, "input", 57);
      \u0275\u0275elementStart(117, "div", 58)(118, "h4");
      \u0275\u0275text(119, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "p", 59);
      \u0275\u0275text(121, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(122, "div", 60)(123, "div", 61)(124, "label", 62);
      \u0275\u0275text(125, "First Name");
      \u0275\u0275elementStart(126, "span", 63);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 61)(130, "label", 62);
      \u0275\u0275text(131, "Last Name");
      \u0275\u0275elementStart(132, "span", 63);
      \u0275\u0275text(133, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(134, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 65)(136, "label", 62);
      \u0275\u0275text(137, "Email");
      \u0275\u0275elementStart(138, "span", 63);
      \u0275\u0275text(139, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(140, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 65)(142, "label", 62);
      \u0275\u0275text(143, "Phone");
      \u0275\u0275elementStart(144, "span", 63);
      \u0275\u0275text(145, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(146, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 65)(148, "label", 62);
      \u0275\u0275text(149, "Address");
      \u0275\u0275elementStart(150, "span", 63);
      \u0275\u0275text(151, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(152, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 61)(154, "label", 62);
      \u0275\u0275text(155, "City");
      \u0275\u0275elementStart(156, "span", 63);
      \u0275\u0275text(157, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "mat-select", 68)(159, "mat-option", 69);
      \u0275\u0275text(160, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "mat-option", 69);
      \u0275\u0275text(162, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "mat-option", 69);
      \u0275\u0275text(164, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(165, "div", 61)(166, "label", 62);
      \u0275\u0275text(167, "State");
      \u0275\u0275elementStart(168, "span", 63);
      \u0275\u0275text(169, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "mat-select", 68)(171, "mat-option", 69);
      \u0275\u0275text(172, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-option", 69);
      \u0275\u0275text(174, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-option", 69);
      \u0275\u0275text(176, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 61)(178, "label", 62);
      \u0275\u0275text(179, "Country");
      \u0275\u0275elementStart(180, "span", 63);
      \u0275\u0275text(181, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "mat-select", 68)(183, "mat-option", 69);
      \u0275\u0275text(184, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "mat-option", 69);
      \u0275\u0275text(186, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "mat-option", 69);
      \u0275\u0275text(188, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "div", 61)(190, "label", 62);
      \u0275\u0275text(191, "Postal Code");
      \u0275\u0275elementStart(192, "span", 63);
      \u0275\u0275text(193, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(194, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 70)(196, "div", 71)(197, "span", 72);
      \u0275\u0275text(198, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(199, "input", 73)(200, "label", 74);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(201, "div", 75)(202, "button", 76);
      \u0275\u0275text(203, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "button", 77);
      \u0275\u0275text(205, "Add Supplier");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(206, "div", 78)(207, "div", 43)(208, "div", 44)(209, "div", 45)(210, "div", 46)(211, "div", 47)(212, "div", 2)(213, "h4");
      \u0275\u0275text(214, "Edit Supplier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "button", 48)(216, "span", 49);
      \u0275\u0275text(217, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(218, "div", 50)(219, "form")(220, "div", 51)(221, "div", 79)(222, "div", 80);
      \u0275\u0275element(223, "img", 81);
      \u0275\u0275elementStart(224, "button", 82)(225, "span", 49);
      \u0275\u0275text(226, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(227, "div", 55)(228, "div", 56);
      \u0275\u0275element(229, "input", 57);
      \u0275\u0275elementStart(230, "div", 58)(231, "h4");
      \u0275\u0275text(232, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(233, "p", 59);
      \u0275\u0275text(234, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(235, "div", 60)(236, "div", 61)(237, "label", 62);
      \u0275\u0275text(238, "First Name");
      \u0275\u0275elementStart(239, "span", 63);
      \u0275\u0275text(240, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(241, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "div", 61)(243, "label", 62);
      \u0275\u0275text(244, "Last Name");
      \u0275\u0275elementStart(245, "span", 63);
      \u0275\u0275text(246, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(247, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 65)(249, "label", 62);
      \u0275\u0275text(250, "Email");
      \u0275\u0275elementStart(251, "span", 63);
      \u0275\u0275text(252, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(253, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "div", 65)(255, "label", 62);
      \u0275\u0275text(256, "Phone");
      \u0275\u0275elementStart(257, "span", 63);
      \u0275\u0275text(258, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(259, "input", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "div", 65)(261, "label", 62);
      \u0275\u0275text(262, "Address");
      \u0275\u0275elementStart(263, "span", 63);
      \u0275\u0275text(264, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(265, "input", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div", 61)(267, "label", 62);
      \u0275\u0275text(268, "City");
      \u0275\u0275elementStart(269, "span", 63);
      \u0275\u0275text(270, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "mat-select", 88)(272, "mat-option", 69);
      \u0275\u0275text(273, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "mat-option", 69);
      \u0275\u0275text(275, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "mat-option", 69);
      \u0275\u0275text(277, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "div", 61)(279, "label", 62);
      \u0275\u0275text(280, "State");
      \u0275\u0275elementStart(281, "span", 63);
      \u0275\u0275text(282, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "mat-select", 89)(284, "mat-option", 69);
      \u0275\u0275text(285, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "mat-option", 69);
      \u0275\u0275text(287, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "mat-option", 69);
      \u0275\u0275text(289, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(290, "div", 61)(291, "label", 62);
      \u0275\u0275text(292, "Country");
      \u0275\u0275elementStart(293, "span", 63);
      \u0275\u0275text(294, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "mat-select", 90)(296, "mat-option", 69);
      \u0275\u0275text(297, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "mat-option", 69);
      \u0275\u0275text(299, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "mat-option", 69);
      \u0275\u0275text(301, "United State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(302, "div", 61)(303, "label", 62);
      \u0275\u0275text(304, "Postal Code");
      \u0275\u0275elementStart(305, "span", 63);
      \u0275\u0275text(306, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(307, "input", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "div", 70)(309, "div", 71)(310, "span", 72);
      \u0275\u0275text(311, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(312, "input", 92)(313, "label", 93);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(314, "div", 75)(315, "button", 76);
      \u0275\u0275text(316, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "button", 77);
      \u0275\u0275text(318, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(319, "div", 94)(320, "div", 43)(321, "div", 44)(322, "div", 45)(323, "div", 95)(324, "span", 96);
      \u0275\u0275element(325, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "h4", 98);
      \u0275\u0275text(327, "Delete Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "p", 99);
      \u0275\u0275text(329, "Are you sure you want to delete supplier?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "div", 100)(331, "button", 76);
      \u0275\u0275text(332, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "button", 77);
      \u0275\u0275text(334, "Yes Delete");
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
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 92 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuppliersComponent, [{
    type: Component,
    args: [{ selector: "app-suppliers", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSelectModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Supplier List</h4>\n      <h6>Manage Your Supplier</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf" matTooltip="Pdf"\n        matTooltipPosition="above"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel" matTooltip="Excel"\n          matTooltipPosition="above"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n          <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"\n              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>\n            </li>\n            <li>\n              <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse"\n                matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n                <i class="ti ti-chevron-up"></i>\n              }\n              @if (isCollapsed) {\n                <i class="ti ti-chevron-up"></i>\n              }</a>\n            </li>\n          </ul>\n          <div class="page-btn">\n            <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i  class="ti ti-circle-plus me-2"></i>Add Supplier</a>\n          </div>\n        </div>\n\n\n        <!-- /product list -->\n        <div class="card table-list-card">\n          <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n            <div class="search-set">\n              <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                      type="search" class="form-control" placeholder="Search" />\n                    </label>\n                  </div>\n                </div>\n            </div>\n            <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n              <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Select Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>\n                  </li>\n                </ul>\n              </div>\n              <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="card-body">\n\n              <div class="table-responsive">\n                <table class="table datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n                  matSortDirection="asc" matSortDisableClear>\n                  <thead>\n                    <tr>\n                     <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n              <th  mat-sort-header="code">code</th>\n                      <th  mat-sort-header="suppliername">Supplier</th>\n                      <th  mat-sort-header="email">email</th>\n                      <th  mat-sort-header="phone">Phone</th>\n                      <th  mat-sort-header="country">Country</th>\n                      <th  mat-sort-header="status">Status</th>\n                      <th class="no-sort"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    @for (data of tableData; track data) {\n                      <tr>\n                      <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n                <td>{{data.code}}</td>\n                <td>\n                  <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/supplier/{{data.img}}" class="img-fluid rounded-2" alt="img"></a>\n                    <div class="ms-2">\n                      <p class="text-gray-9 mb-0"><a href="javascript:void(0);">{{data.supplier}}</a></p>\n                    </div>\n                  </div>\n                </td>\n                <td>\n                  {{data.email}}					\n                </td>\n                <td>{{data.phone}}</td>\n                <td>\n                  {{data.country}}\n                </td>\n                <td>\n                  <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                    <i class="ti ti-point-filled me-1"></i>{{data.status}}\n                  </span>\n                </td>\n                <td class="action-table-data">\n                  <div class="edit-delete-action">\n                    <a class="me-2 p-2" href="javascript:void(0);">\n                      <i data-feather="eye" class="feather icon-eye"></i>\n                    </a>\n                    <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-supplier">\n                      <i data-feather="edit" class="feather icon-edit"></i>\n                    </a>\n                    <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                      <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                    </a>\n                  </div>\n                </td>\n                      </tr>\n                    }@if(tableData.length === 0){\n						<tr>\n							<td class="text-center" colspan="12">No Matching Data Found</td>\n						</tr>\n					}\n                  </tbody>\n                </table>\n\n              </div>\n              <app-custom-pagination></app-custom-pagination>\n            </div>\n          </div>\n          <!-- Add Supplier -->\n  		<!-- Add Customer -->\n      <div class="modal fade" id="add-units">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Add Supplier</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body">\n                  <form >\n                  <div class="new-employee-field">\n                      <div class="profile-pic-upload">\n                        <div class="profile-pic">\n                          <span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n                        </div>\n                        <div class="mb-3">\n                          <div class="image-upload mb-0">\n                            <input type="file">\n                            <div class="image-uploads">\n                              <h4>Upload Image</h4>\n                            </div>\n                          </div>\n                          <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="row">\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                        <input type="email" class="form-control"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                        <input type="tel" class="form-control"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Address<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">City<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                          <mat-option value="1">Select</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">State<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                          <mat-option value="1">Select</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                          <label class="form-label">Country<span class="text-danger ms-1">*</span></label>\n                          <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">United Kingdom</mat-option>\n                            <mat-option value="1">United State</mat-option>\n                          </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control"> \n                      </div>\n                      <div class="col-lg-12">\n                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n                          <span class="status-label">Status</span>\n                          <input type="checkbox" id="user1" class="check" checked="">\n                          <label for="user1" class="checktoggle">	</label>\n                        </div>\n                      </div>\n                                  \n                    </div>								\n                    \n                  \n                  </form>\n                </div>\n  \n                <div class="modal-footer">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Supplier</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Add Customer -->\n  \n          <!-- Edit Customer -->\n      <div class="modal fade" id="edit-supplier">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Edit Supplier</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body">\n                  <form >\n                  <div class="new-employee-field">\n                      <div class="profile-pic-upload image-field">\n                        <div class="profile-pic p-2">\n                          <img src="assets/img/supplier/edit-supplier.jpg" class="object-fit-cover h-100 rounded-1" alt="user">\n                          <button type="button" class="close rounded-1">\n                            <span aria-hidden="true">&times;</span>\n                          </button>\n                        </div>\n                        <div class="mb-3">\n                          <div class="image-upload mb-0">\n                            <input type="file">\n                            <div class="image-uploads">\n                              <h4>Change Image</h4>\n                            </div>\n                          </div>\n                          <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="row">\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="Carl"> \n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="Evans"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                        <input type="email" class="form-control" value="carlevans@example.com"> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                        <input type="tel" class="form-control" value="+12163547758 "> \n                      </div>\n                      <div class="col-lg-12 mb-3">\n                        <label class="form-label">Address<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="87 Griffin Street"> \n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">City<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="USA">\n                          <mat-option value="1">USA</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                        <label class="form-label">State<span class="text-danger ms-1">*</span></label>\n                        <mat-select class="custom-mat-select select" placeholder="California">\n                          <mat-option value="1">California</mat-option>\n                          <mat-option value="1">United Kingdom</mat-option>\n                          <mat-option value="1">United State</mat-option>\n                        </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">		\n                          <label class="form-label">Country<span class="text-danger ms-1">*</span></label>\n                          <mat-select class="custom-mat-select select" placeholder="Los Angeles">\n                            <mat-option value="1">Los Angeles</mat-option>\n                            <mat-option value="1">United Kingdom</mat-option>\n                            <mat-option value="1">United State</mat-option>\n                          </mat-select>											\n                      </div>\n                      <div class="col-lg-6 mb-3">\n                        <label class="form-label">Postal Code<span class="text-danger ms-1">*</span></label>\n                        <input type="text" class="form-control" value="90001"> \n                      </div>\n                      <div class="col-lg-12">\n                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n                          <span class="status-label">Status</span>\n                          <input type="checkbox" id="user2" class="check" checked="">\n                          <label for="user2" class="checktoggle">	</label>\n                        </div>\n                      </div>\n                                  \n                    </div>								\n                    \n                  \n                  </form>\n                </div>\n  \n                <div class="modal-footer">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Edit Customer -->\n  \n           <!-- delete modal -->\n           <div class="modal fade" id="delete-modal">\n            <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                <div class="page-wrapper-new p-0">\n                  <div class="content p-5 px-3 text-center">\n                      <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                      <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Supplier</h4>\n                      <p class="mb-0 fs-16">Are you sure you want to delete supplier?</p>\n                      <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                        <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                        <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                      </div>						\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuppliersComponent, { className: "SuppliersComponent", filePath: "src/app/features/pages/people/suppliers/suppliers.component.ts", lineNumber: 26 });
})();
export {
  SuppliersComponent
};
//# sourceMappingURL=chunk-H552WNCM.js.map
