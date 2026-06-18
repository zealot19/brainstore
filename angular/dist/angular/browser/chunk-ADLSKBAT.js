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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/content-cms/blogs/categories/categories.component.ts
var _c0 = () => ({ standalone: true });
function CategoriesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CategoriesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function CategoriesComponent_For_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 70)(3, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function CategoriesComponent_For_72_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 73);
    \u0275\u0275element(11, "i", 74);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 75)(15, "a", 76);
    \u0275\u0275element(16, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 78);
    \u0275\u0275element(18, "i", 79);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.Category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.Status);
  }
}
function CategoriesComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var CategoriesComponent = class _CategoriesComponent {
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
  row = true;
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
        if (this.router.url == this.routes.categories) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBlogCategories().subscribe((apiRes) => {
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
  static \u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], decls: 151, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_blog-category", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "custom-datatable-filter", "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "add_blog-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close", "p-0"], [1, "ti", "ti-x"], [1, "modal-body", "pb-0"], [1, "row"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", "data-role", "tagsinput", "name", "Label", 1, "input-tags", "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "switch"], ["type", "checkbox", "checked", ""], [1, "slider", "round"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "border", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_blog-category", 1, "modal", "fade"], ["type", "text", "data-role", "tagsinput", "name", "Label", "value", "Innovations", 1, "input-tags", "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "text-dark"], [1, "badge", "badge-success"], [1, "ti", "ti-point-filled"], [1, "action-icon", "d-inline-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_blog-category", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "me-2"], [1, "ti", "ti-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], [1, "ti", "ti-trash"], ["colspan", "12", 1, "text-center"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Blogs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your blogs");
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
      \u0275\u0275listener("click", function CategoriesComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, CategoriesComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, CategoriesComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 27);
      \u0275\u0275text(50, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 27);
      \u0275\u0275text(53, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 28)(55, "div", 29)(56, "table", 30);
      \u0275\u0275listener("matSortChange", function CategoriesComponent_Template_table_matSortChange_56_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(57, "thead", 31)(58, "tr")(59, "th", 32)(60, "label", 33);
      \u0275\u0275listener("click", function CategoriesComponent_Template_label_click_60_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(61, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "th");
      \u0275\u0275text(64, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th");
      \u0275\u0275text(66, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th");
      \u0275\u0275text(68, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "tbody");
      \u0275\u0275repeaterCreate(71, CategoriesComponent_For_72_Template, 19, 4, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(73, CategoriesComponent_Conditional_73_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(74, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 36)(76, "div", 37)(77, "div", 38)(78, "div", 39)(79, "h4", 40);
      \u0275\u0275text(80, "Add Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 41);
      \u0275\u0275element(82, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "form")(84, "div", 43)(85, "div", 44)(86, "div", 45)(87, "div", 46)(88, "label", 47);
      \u0275\u0275text(89, "Category");
      \u0275\u0275elementStart(90, "span", 48);
      \u0275\u0275text(91, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(92, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 45)(94, "div", 50)(95, "label", 47);
      \u0275\u0275text(96, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "label", 51);
      \u0275\u0275element(98, "input", 52)(99, "span", 53);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(100, "div", 54)(101, "button", 55);
      \u0275\u0275text(102, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "button", 56);
      \u0275\u0275text(104, "Add Tag");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(105, "div", 57)(106, "div", 37)(107, "div", 38)(108, "div", 39)(109, "h4", 40);
      \u0275\u0275text(110, "Edit Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "button", 41);
      \u0275\u0275element(112, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "form")(114, "div", 43)(115, "div", 44)(116, "div", 45)(117, "div", 46)(118, "label", 47);
      \u0275\u0275text(119, "Category");
      \u0275\u0275elementStart(120, "span", 48);
      \u0275\u0275text(121, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(122, "input", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 45)(124, "div", 50)(125, "label", 47);
      \u0275\u0275text(126, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "label", 51);
      \u0275\u0275element(128, "input", 52)(129, "span", 53);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(130, "div", 54)(131, "button", 55);
      \u0275\u0275text(132, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "button", 56);
      \u0275\u0275text(134, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(135, "div", 59)(136, "div", 60)(137, "div", 38)(138, "div", 61)(139, "div", 62)(140, "span", 63);
      \u0275\u0275element(141, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "h4", 65);
      \u0275\u0275text(143, "Delete Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 66);
      \u0275\u0275text(145, "Are you sure you want to delete category?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 67)(147, "button", 68);
      \u0275\u0275text(148, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "button", 69);
      \u0275\u0275text(150, "Yes Delete");
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
      \u0275\u0275advance(28);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 73 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-categories", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Blogs</h4>\n            <h6>Manage your blogs</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_blog-category"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add Categories</a>\n    </div>\n</div>\n\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                      type="search" class="form-control" placeholder="Search" />\n                    </label>\n                  </div>\n                </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">\n        <div class="custom-datatable-filter table-responsive">\n            <table matSort (matSortChange)="sortData($event)" class="table datatable">\n                <thead class="thead-light">\n                    <tr>\n                        <th class="no-sort">\n                            <label class="checkboxs" (click)="selectAll(initChecked)">\n                              <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </th>\n                        <th>Category</th>\n                        <th>Created Date</th>\n                        <th>Status</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    @for (data of tableData; track data) {\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                              <input type="checkbox" [(ngModel)]="data.isSelected">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                        <td class="text-dark">{{data.Category}}</td>\n                        <td>{{data.CreatedDate}}</td>\n                      \n                        <td><span class="badge badge-success"><i class="ti ti-point-filled"></i>{{data.Status}}</span></td>\n                        <td>\n                            <div class="action-icon d-inline-flex">\n                            <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded me-2" data-bs-toggle="modal" data-bs-target="#edit_blog-category"><i class="ti ti-edit"></i></a>\n                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal" class="p-2 d-flex align-items-center border rounded"><i class="ti ti-trash"></i></a>\n                            </div>\n                        </td>\n                    </tr>\n                }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n                </tbody>\n            </table>\n        </div>\n        <app-custom-pagination/>\n    </div>\n</div>\n<!-- /product list -->\n\n\n			<!-- Add Tag -->\n			<div class="modal fade" id="add_blog-category">\n				<div class="modal-dialog modal-dialog-centered modal-md">\n					<div class="modal-content">\n						<div class="modal-header">\n							<h4 class="modal-title">Add Category</h4>\n							<button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">\n								<i class="ti ti-x"></i>\n							</button>\n						</div>\n						<form>\n							<div class="modal-body pb-0">\n								<div class="row">\n								\n									<div class="col-md-12">\n										<div class="mb-3">\n											<label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n											<input class="input-tags form-control" type="text" data-role="tagsinput"  name="Label">\n										</div>									\n									</div>\n									<div class="col-md-12">\n										<div class="d-flex align-items-center justify-content-between mb-3">\n											<label class="form-label">Status</label>\n											<label class="switch">\n												<input type="checkbox" checked>\n												<span class="slider round"></span>\n											</label>\n										</div>								\n									</div> \n								</div>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn btn-secondary border me-2" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Tag</button>\n							</div>\n						</form>\n					</div>\n				</div>\n			</div>\n			<!-- /Add Tag -->\n\n			<!-- Edit Tag -->\n			<div class="modal fade" id="edit_blog-category">\n				<div class="modal-dialog modal-dialog-centered modal-md">\n					<div class="modal-content">\n						<div class="modal-header">\n							<h4 class="modal-title">Edit Category</h4>\n							<button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">\n								<i class="ti ti-x"></i>\n							</button>\n						</div>\n						<form>\n							<div class="modal-body pb-0">\n								<div class="row">\n								\n									<div class="col-md-12">\n										<div class="mb-3">\n											<label class="form-label">Category<span class="text-danger ms-1">*</span></label>\n											<input class="input-tags form-control"  type="text" data-role="tagsinput"  name="Label" value="Innovations">\n										</div>									\n									</div>\n									<div class="col-md-12">\n										<div class="d-flex align-items-center justify-content-between mb-3">\n											<label class="form-label">Status</label>\n											<label class="switch">\n												<input type="checkbox" checked>\n												<span class="slider round"></span>\n											</label>\n										</div>							\n									</div> \n								</div>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn btn-secondary border me-2" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</form>\n					</div>\n				</div>\n			</div>\n			<!-- /Edit Tag -->\n\n            <!-- delete modal -->\n			<div class="modal fade" id="delete_modal">\n                <div class="modal-dialog modal-dialog-centered">\n                    <div class="modal-content">\n                        <div class="page-wrapper-new p-0">\n                            <div class="content p-5 px-3 text-center">\n                                    <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                                    <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Category</h4>\n                                    <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete category?</p>\n                                    <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                                        <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                                        <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                                    </div>						\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src/app/features/pages/content-cms/blogs/categories/categories.component.ts", lineNumber: 27 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-ADLSKBAT.js.map
