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

// src/app/features/pages/inventory/category/sub-categories/sub-categories.component.ts
var _c0 = () => ({ standalone: true });
function SubCategoriesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function SubCategoriesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function SubCategoriesComponent_For_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 34);
    \u0275\u0275listener("click", function SubCategoriesComponent_For_110_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function SubCategoriesComponent_For_110_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "a", 94);
    \u0275\u0275element(7, "img", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 96);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 97)(20, "div", 98)(21, "a", 99);
    \u0275\u0275element(22, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 101);
    \u0275\u0275element(24, "i", 102);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r3.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.subCategory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.categoryCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function SubCategoriesComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var SubCategoriesComponent = class _SubCategoriesComponent {
  data;
  pagination;
  router;
  sidebar;
  routes = routes;
  initChecked = false;
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
        if (this.router.url == this.routes.subCategories) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSubCategories().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Category" },
    { value: "Laptop" },
    { value: "Electronics" },
    { value: "Shoe" }
  ];
  selectedList3 = [
    { value: "Choose SubCategory" },
    { value: "Fruits" }
  ];
  selectedList4 = [
    { value: "Category Code" },
    { value: "CT001" },
    { value: "CT002" }
  ];
  selectedList5 = [
    { value: "Choose Category" },
    { value: "Category" }
  ];
  selectedList6 = [
    { value: "Computers" },
    { value: "Fruits" }
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
  static \u0275fac = function SubCategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubCategoriesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubCategoriesComponent, selectors: [["app-sub-categories"]], decls: 266, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-category", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive", "sub-category-table"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "image"], ["mat-sort-header", "category"], ["mat-sort-header", "parentCategory"], ["mat-sort-header", "categoryCode"], ["mat-sort-header", "description"], ["mat-sort-header", "createdBy"], ["id", "add-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "add-image-upload"], [1, "add-image"], [1, "fw-normal"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "new-employee-field"], [1, "mb-0"], [1, "image-upload", "mb-2"], ["type", "file"], [1, "image-uploads"], [1, "fs-13", "fw-medium"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], [1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-category", 1, "modal", "fade"], [1, "add-image", "p-1", "border-solid"], ["src", "assets/img/products/laptop.png", "alt", "image"], ["href", "javascript:void(0);"], [1, "feather", "icon-x", "x-square-add", "image-close", "remove-product", "fs-15", "text-white", "bg-danger", "rounded-1"], ["placeholder", "computers", 1, "custom-mat-select", "select"], ["type", "text", "value", "Laptop", 1, "form-control"], ["type", "text", "value", "CT001", 1, "form-control"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], [1, "badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-category", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function SubCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Sub Category list");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your sub categories");
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
      \u0275\u0275listener("click", function SubCategoriesComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, SubCategoriesComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, SubCategoriesComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, " Add Sub Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function SubCategoriesComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SubCategoriesComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Computers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Electronics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "Shoe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 27);
      \u0275\u0275text(50, "Electronics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 24)(52, "a", 25);
      \u0275\u0275text(53, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 26)(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Shoe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 27);
      \u0275\u0275text(66, "Electronics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 28)(68, "a", 25);
      \u0275\u0275text(69, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 26)(71, "li")(72, "a", 27);
      \u0275\u0275text(73, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 27);
      \u0275\u0275text(76, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 27);
      \u0275\u0275text(79, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 27);
      \u0275\u0275text(82, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 27);
      \u0275\u0275text(85, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(86, "div", 29)(87, "div", 30)(88, "table", 31);
      \u0275\u0275listener("matSortChange", function SubCategoriesComponent_Template_table_matSortChange_88_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(89, "thead", 32)(90, "tr")(91, "th", 33)(92, "label", 34);
      \u0275\u0275listener("click", function SubCategoriesComponent_Template_label_click_92_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(93, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function SubCategoriesComponent_Template_input_ngModelChange_93_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "th", 37);
      \u0275\u0275text(96, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 38);
      \u0275\u0275text(98, "Sub Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 39);
      \u0275\u0275text(100, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 40);
      \u0275\u0275text(102, "Category Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 41);
      \u0275\u0275text(104, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 42);
      \u0275\u0275text(106, "Created By");
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "tbody");
      \u0275\u0275repeaterCreate(109, SubCategoriesComponent_For_110_Template, 25, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(111, SubCategoriesComponent_Conditional_111_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(112, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 43)(114, "div", 44)(115, "div", 45)(116, "div", 46)(117, "div", 47)(118, "div", 48)(119, "div", 2)(120, "h4");
      \u0275\u0275text(121, "Add Sub Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "button", 49)(123, "span", 50);
      \u0275\u0275text(124, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "div", 51)(126, "form")(127, "div", 52)(128, "div", 53)(129, "div", 54)(130, "span", 55);
      \u0275\u0275element(131, "i", 56);
      \u0275\u0275text(132, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 57)(134, "div", 58)(135, "div", 59);
      \u0275\u0275element(136, "input", 60);
      \u0275\u0275elementStart(137, "div", 61)(138, "h4", 62);
      \u0275\u0275text(139, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(142, "div", 52)(143, "label", 63);
      \u0275\u0275text(144, "Category");
      \u0275\u0275elementStart(145, "span", 64);
      \u0275\u0275text(146, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "mat-select", 65)(148, "mat-option", 66);
      \u0275\u0275text(149, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "mat-option", 66);
      \u0275\u0275text(151, "Category");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "div", 52)(153, "label", 63);
      \u0275\u0275text(154, "Sub Category");
      \u0275\u0275elementStart(155, "span", 64);
      \u0275\u0275text(156, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(157, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 52)(159, "label", 63);
      \u0275\u0275text(160, "Category Code");
      \u0275\u0275elementStart(161, "span", 64);
      \u0275\u0275text(162, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(163, "input", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 52)(165, "label", 63);
      \u0275\u0275text(166, "Description");
      \u0275\u0275elementStart(167, "span", 64);
      \u0275\u0275text(168, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(169, "textarea", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 58)(171, "div", 69)(172, "span", 70);
      \u0275\u0275text(173, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(174, "input", 71)(175, "label", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(176, "div", 73)(177, "button", 74);
      \u0275\u0275text(178, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "button", 75);
      \u0275\u0275text(180, "Create Subcategory");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(181, "div", 76)(182, "div", 44)(183, "div", 45)(184, "div", 46)(185, "div", 47)(186, "div", 48)(187, "div", 2)(188, "h4");
      \u0275\u0275text(189, "Edit Sub Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "button", 49)(191, "span", 50);
      \u0275\u0275text(192, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "div", 51)(194, "form")(195, "div", 52)(196, "div", 53)(197, "div", 77);
      \u0275\u0275element(198, "img", 78);
      \u0275\u0275elementStart(199, "a", 79);
      \u0275\u0275element(200, "i", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 57)(202, "div", 58)(203, "div", 59);
      \u0275\u0275element(204, "input", 60);
      \u0275\u0275elementStart(205, "div", 61)(206, "h4", 62);
      \u0275\u0275text(207, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(208, "span");
      \u0275\u0275text(209, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(210, "div", 52)(211, "label", 63);
      \u0275\u0275text(212, "Category");
      \u0275\u0275elementStart(213, "span", 64);
      \u0275\u0275text(214, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "mat-select", 81)(216, "mat-option", 66);
      \u0275\u0275text(217, "computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "mat-option", 66);
      \u0275\u0275text(219, "Fruits");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(220, "div", 52)(221, "label", 63);
      \u0275\u0275text(222, "Sub Category");
      \u0275\u0275elementStart(223, "span", 64);
      \u0275\u0275text(224, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(225, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 52)(227, "label", 63);
      \u0275\u0275text(228, "Category Code");
      \u0275\u0275elementStart(229, "span", 64);
      \u0275\u0275text(230, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(231, "input", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 52)(233, "label", 63);
      \u0275\u0275text(234, "Description");
      \u0275\u0275elementStart(235, "span", 64);
      \u0275\u0275text(236, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "textarea", 68);
      \u0275\u0275text(238, "Efficient Productivity");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "div", 58)(240, "div", 69)(241, "span", 70);
      \u0275\u0275text(242, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(243, "input", 84)(244, "label", 85);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(245, "div", 73)(246, "button", 74);
      \u0275\u0275text(247, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "button", 75);
      \u0275\u0275text(249, "Add Sub Category");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(250, "div", 86)(251, "div", 44)(252, "div", 45)(253, "div", 46)(254, "div", 87)(255, "span", 88);
      \u0275\u0275element(256, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "h4", 90);
      \u0275\u0275text(258, "Delete Sub Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "p", 91);
      \u0275\u0275text(260, "Are you sure you want to delete sub category?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 92)(262, "button", 74);
      \u0275\u0275text(263, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "button", 75);
      \u0275\u0275text(265, "Yes Delete");
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
      \u0275\u0275advance(60);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 111 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubCategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-sub-categories", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Sub Category list</h4>\n      <h6>Manage your sub categories</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Pdf"\n        matTooltip="Pdf"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/pdf.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Excel"\n        matTooltip="Excel"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/excel.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Refresh"\n        matTooltip="Refresh"\n        matTooltipPosition="above"\n        ><i class="ti ti-refresh"></i\n      ></a>\n    </li>\n    <li>\n      <a\n        (click)="toggleCollapse()" [class.active]="isCollapsed"\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Collapse"\n        matTooltip="Collapse"\n        matTooltipPosition="above"\n        id="collapse-header"\n        > @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a\n      href="javascript:void(0);"\n      class="btn btn-primary"\n      data-bs-toggle="modal"\n      data-bs-target="#add-category"\n      ><i class="ti ti-circle-plus me-2"></i> Add Sub Category</a\n      >\n    </div>\n  </div>\n\n  <!-- /product list -->\n  <div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div class="search-set">\n        <div class="search-input">\n          <a href="javascript:void(0);" class="btn btn-searchset"\n            ><i class="feather icon-search feather-search"></i\n          ></a>\n          <div class="dataTables_filter">\n            <label>\n              <input\n                [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="searchData(searchDataValue)"\n                type="search"\n                class="form-control"\n                placeholder="Search"\n                />\n              </label>\n            </div>\n          </div>\n      </div>\n      <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n        <div class="dropdown me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Category\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n            </li>\n          </ul>\n        </div>\n        <div class="dropdown me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Status\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n            </li>\n          </ul>\n        </div>\n        <div class="dropdown">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Sort By : Last 7 Days\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class="card-body">\n        <div class="table-responsive sub-category-table">\n          <table\n            class="table datatable"\n            (matSortChange)="sortData($event)"\n            matSort\n            matSortActive="Sno"\n            matSortDirection="asc"\n            matSortDisableClear\n            >\n            <thead class="thead-light">\n              <tr>\n                <th class="no-sort">\n                  <label class="checkboxs" (click)="selectAll(initChecked)">\n                    <input type="checkbox" id="select-all" [(ngModel)]="initChecked"  />\n                    <span class="checkmarks"></span>  \n                  </label>\n                </th>\n                <th mat-sort-header="image">Image</th>\n                <th mat-sort-header="category">Sub Category</th>\n                <th mat-sort-header="parentCategory">Category</th>\n                <th mat-sort-header="categoryCode">Category Code</th>\n                <th mat-sort-header="description">Description</th>\n                <th mat-sort-header="createdBy">Created By</th>\n                <th class="no-sort"></th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (data of tableData; track data) {\n                <tr>\n                  <td>\n                    <label class="checkboxs" (click)="selectAll(initChecked)">\n                      <input type="checkbox" [(ngModel)]="initChecked"/>\n                      <span class="checkmarks"></span>\n                    </label>\n                  </td>\n                  <td>\n                    <a class="avatar avatar-md me-2">\n                      <img src="assets/img/products/{{data.image}}" alt="product" />\n                    </a>\n                  </td>\n                  <td>{{ data.subCategory }}</td>\n                  <td>{{ data.category }}</td>\n                  <td>{{ data.categoryCode }}</td>\n                  <td>{{ data.description }}</td>\n                  <td><span class="badge bg-success fw-medium fs-10">{{data.status}}</span></td>\n                  <td class="action-table-data">\n                    <div class="edit-delete-action">\n                      <a\n                        class="me-2 p-2"\n                        href="javascript:void(0);"\n                        data-bs-toggle="modal"\n                        data-bs-target="#edit-category"\n                        >\n                        <i class="feather icon-edit feather-edit"></i>\n                      </a>\n                      <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i class="feather icon-trash-2 feather-trash-2"></i>\n                      </a>\n                    </div>\n                  </td>\n                </tr>\n              } @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n            </tbody>\n          </table>\n\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n    </div>\n    <!-- /product list -->\n    \n		<!-- Add Category -->\n		<div class="modal fade" id="add-category">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Add Sub Category</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n										<div class="mb-3">\n											<div class="add-image-upload">\n												<div class="add-image">\n													<span class="fw-normal"><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n												</div>\n												<div class="new-employee-field">\n													<div class="mb-0">\n														<div class="image-upload mb-2">\n															<input type="file">\n															<div class="image-uploads">\n																<h4 class="fs-13 fw-medium">Upload Image</h4>\n															</div>\n														</div>\n														<span>JPEG, PNG up to 2 MB</span>\n													</div>\n												</div>\n											</div>\n										</div>\n									<div class="mb-3">\n										<label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Category</mat-option>\n										</mat-select>\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Sub Category<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Category Code<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Description<span class="text-danger ms-1">*</span></label>\n										<textarea class="form-control"></textarea>\n									</div>\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user2" class="check" checked="">\n											<label for="user2" class="checktoggle"></label>\n										</div>\n									</div>\n							\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Create Subcategory</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Category -->\n\n		<!-- Edit Category -->\n		<div class="modal fade" id="edit-category">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Sub Category</h4>\n								</div>\n								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n										<div class="mb-3">\n											<div class="add-image-upload">\n												<div class="add-image p-1 border-solid">\n												\n														<img src="assets/img/products/laptop.png" alt="image">\n														<a href="javascript:void(0);"><i  class="feather icon-x x-square-add image-close remove-product fs-15 text-white bg-danger rounded-1"></i></a>\n										\n												</div>\n												<div class="new-employee-field">\n													<div class="mb-0">\n														<div class="image-upload mb-2">\n															<input type="file">\n															<div class="image-uploads">\n																<h4 class="fs-13 fw-medium">Change Image</h4>\n															</div>\n														</div>\n														<span>JPEG, PNG up to 2 MB</span>\n													</div>\n												</div>\n											</div>\n										</div>\n									<div class="mb-3">\n										<label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="computers">\n											<mat-option value="1">computers</mat-option>\n											<mat-option value="1">Fruits</mat-option>\n										</mat-select>\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Sub Category<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="Laptop">\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Category Code<span class="text-danger ms-1">*</span></label>\n										<input type="text" class="form-control" value="CT001">\n									</div>\n									<div class="mb-3">\n										<label class="form-label">Description<span class="text-danger ms-1">*</span></label>\n										<textarea class="form-control">Efficient Productivity</textarea>\n									</div>\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="user3" class="check" checked="">\n											<label for="user3" class="checktoggle"></label>\n										</div>\n									</div>\n						\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Sub Category</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Category -->\n		 		<!-- delete modal -->\n				 <div class="modal fade" id="delete-modal">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="page-wrapper-new p-0">\n								<div class="content p-5 px-3 text-center">\n										<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n										<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Sub Category</h4>\n										<p class="mb-0 fs-16">Are you sure you want to delete sub category?</p>\n										<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n											<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n											<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n										</div>						\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubCategoriesComponent, { className: "SubCategoriesComponent", filePath: "src/app/features/pages/inventory/category/sub-categories/sub-categories.component.ts", lineNumber: 23 });
})();
export {
  SubCategoriesComponent
};
//# sourceMappingURL=chunk-ETBFUCAB.js.map
