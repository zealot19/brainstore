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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/content-cms/pages/pages.component.ts
var _c0 = () => ({ standalone: true });
function PagesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function PagesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function PagesComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 74)(3, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function PagesComponent_For_87_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 76);
    \u0275\u0275element(14, "i", 77);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 78)(17, "div", 79)(18, "a", 80);
    \u0275\u0275element(19, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 82);
    \u0275\u0275element(21, "i", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.page);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.pageSlug, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.lastEdited, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
  }
}
function PagesComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 84);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var PagesComponent = class _PagesComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  isSelected;
  nodes;
  selectedNodes;
  routes = routes;
  row = true;
  // pagination variables
  tableData = [];
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
        if (this.router.url == this.routes.page) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPages().subscribe((apiRes) => {
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
  static \u0275fac = function PagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagesComponent, selectors: [["app-pages"]], decls: 200, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-testimonial", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-1"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body", "pb-0"], [1, "custom-datatable-filter", "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "add-testimonial", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "email", 1, "form-control"], ["rows", "4", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "users6", "checked", "", 1, "check"], ["for", "users6", 1, "checktoggle", "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-testimonial", 1, "modal", "fade"], ["type", "email", "value", "Products", 1, "form-control"], ["type", "email", "value", "products", 1, "form-control"], ["type", "checkbox", "id", "users7", "checked", "", 1, "check"], ["for", "users7", 1, "checktoggle", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "delete-modal", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-testimonial", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function PagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your pages");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li", 4)(9, "a", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li", 4)(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275listener("click", function PagesComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, PagesComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, PagesComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Page");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PagesComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PagesComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "a", 26);
      \u0275\u0275text(37, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 27)(39, "li")(40, "a", 28);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 28);
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 28);
      \u0275\u0275text(47, "New Joiners");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 29)(49, "a", 26);
      \u0275\u0275text(50, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 27)(52, "li")(53, "a", 28);
      \u0275\u0275text(54, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 28);
      \u0275\u0275text(57, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 28);
      \u0275\u0275text(60, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 28);
      \u0275\u0275text(63, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 28);
      \u0275\u0275text(66, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(67, "div", 30)(68, "div", 31)(69, "table", 32);
      \u0275\u0275listener("matSortChange", function PagesComponent_Template_table_matSortChange_69_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(70, "thead", 33)(71, "tr")(72, "th", 34)(73, "label", 35);
      \u0275\u0275listener("click", function PagesComponent_Template_label_click_73_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(74, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function PagesComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th");
      \u0275\u0275text(79, "Page Slug");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th");
      \u0275\u0275text(81, "Last Edited");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "tbody");
      \u0275\u0275repeaterCreate(86, PagesComponent_For_87_Template, 22, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(88, PagesComponent_Conditional_88_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(89, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 38)(91, "div", 39)(92, "div", 40)(93, "div", 41)(94, "div", 2)(95, "h4");
      \u0275\u0275text(96, "Add Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "button", 42)(98, "span", 43);
      \u0275\u0275text(99, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "form")(101, "div", 44)(102, "div", 45)(103, "div", 46)(104, "label", 47);
      \u0275\u0275text(105, "Title ");
      \u0275\u0275elementStart(106, "span", 48);
      \u0275\u0275text(107, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(108, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 46)(110, "label", 47);
      \u0275\u0275text(111, "Slug ");
      \u0275\u0275elementStart(112, "span", 48);
      \u0275\u0275text(113, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(114, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 46)(116, "label", 47);
      \u0275\u0275text(117, "Keywords ");
      \u0275\u0275elementStart(118, "span", 48);
      \u0275\u0275text(119, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(120, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 46)(122, "label", 47);
      \u0275\u0275text(123, "Description ");
      \u0275\u0275elementStart(124, "span", 48);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "textarea", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 51)(128, "span", 52);
      \u0275\u0275text(129, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(130, "input", 53)(131, "label", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 55)(133, "button", 56);
      \u0275\u0275text(134, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "button", 57);
      \u0275\u0275text(136, "Add Page");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(137, "div", 58)(138, "div", 39)(139, "div", 40)(140, "div", 41)(141, "div", 2)(142, "h4");
      \u0275\u0275text(143, "Edit Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "button", 42)(145, "span", 43);
      \u0275\u0275text(146, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "form")(148, "div", 44)(149, "div", 45)(150, "div", 46)(151, "label", 47);
      \u0275\u0275text(152, "Title ");
      \u0275\u0275elementStart(153, "span", 48);
      \u0275\u0275text(154, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(155, "input", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 46)(157, "label", 47);
      \u0275\u0275text(158, "Slug ");
      \u0275\u0275elementStart(159, "span", 48);
      \u0275\u0275text(160, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(161, "input", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 46)(163, "label", 47);
      \u0275\u0275text(164, "Keywords ");
      \u0275\u0275elementStart(165, "span", 48);
      \u0275\u0275text(166, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(167, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div", 46)(169, "label", 47);
      \u0275\u0275text(170, "Description ");
      \u0275\u0275elementStart(171, "span", 48);
      \u0275\u0275text(172, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(173, "textarea", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 51)(175, "span", 52);
      \u0275\u0275text(176, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "input", 61)(178, "label", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(179, "div", 55)(180, "button", 63);
      \u0275\u0275text(181, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "button", 64);
      \u0275\u0275text(183, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(184, "div", 65)(185, "div", 39)(186, "div", 40)(187, "div", 66)(188, "div", 67)(189, "span", 68);
      \u0275\u0275element(190, "i", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "h4", 70);
      \u0275\u0275text(192, "Delete Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "p", 71);
      \u0275\u0275text(194, "Are you sure you want to delete page?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 72)(196, "button", 56);
      \u0275\u0275text(197, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "button", 73);
      \u0275\u0275text(199, "Yes Delete");
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
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 88 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagesComponent, [{
    type: Component,
    args: [{ selector: "app-pages", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Pages</h4>\n            <h6>Manage your pages</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li class="me-2">\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li class="me-2">\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n            class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n              matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-testimonial"><i class="ti ti-circle-plus me-1"></i>Add Page</a>\n    </div>\n</div>\n<!-- product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                      type="search" class="form-control" placeholder="Search" />\n                    </label>\n                  </div>\n                </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Select Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>\n                    </li>\n                </ul>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body pb-0">\n        <div class="custom-datatable-filter table-responsive">\n            <table matSort (matSortChange)="sortData($event)" class="table datatable">\n                <thead class="thead-light">\n                    <tr>\n                        <th class="no-sort">\n                            <label class="checkboxs" (click)="selectAll(initChecked)">\n                              <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </th>\n                        <th>Page</th>\n                        <th>Page Slug</th>\n                        <th>Last Edited</th>\n                        <th>Status</th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    @for (data of tableData; track data) {\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                              <input type="checkbox" [(ngModel)]="data.isSelected">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                        <td>\n                            <h6>{{data.page}}</h6>\n                        </td>\n                        <td>\n                            {{data.pageSlug}}					\n                        </td>\n                        <td>\n                            {{data.lastEdited}}\n                        </td>\n                        <td>\n                            <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                                <i class="ti ti-point-filled me-1"></i>{{data.status}}\n                            </span>\n                        </td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-testimonial">\n                                    <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                   }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n                </tbody>\n            </table>\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n    </div>\n</div>\n<!-- /product list -->\n\n\n		<!-- Add Testimonial -->\n		<div class="modal fade" id="add-testimonial">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Page</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form >\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12 mb-3">\n									<label class="form-label">Title <span class="text-danger">*</span></label>\n									<input type="email" class="form-control"> \n								</div>\n								<div class="col-lg-12 mb-3">		\n									<label class="form-label">Slug <span class="text-danger">*</span></label>\n									<input type="email" class="form-control"> 										\n								</div>\n								<div class="col-lg-12 mb-3">		\n									<label class="form-label">Keywords <span class="text-danger">*</span></label>\n									<input type="email" class="form-control"> 										\n								</div>		\n								<div class="col-lg-12 mb-3">		\n									<label class="form-label">Description <span class="text-danger">*</span></label>\n									<textarea class="form-control" rows="4"></textarea>									\n								</div>	\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="users6" class="check" checked>\n									<label for="users6" class="checktoggle mb-0"></label>\n								</div>		\n							</div>	\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Page</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Testimonial -->\n		<!-- Edit Testimonial -->\n		<div class="modal fade" id="edit-testimonial">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Page</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form >\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12 mb-3">\n									<label class="form-label">Title <span class="text-danger">*</span></label>\n									<input type="email" class="form-control" value="Products"> \n								</div>\n								<div class="col-lg-12 mb-3">		\n									<label class="form-label">Slug <span class="text-danger">*</span></label>\n									<input type="email" class="form-control" value="products"> 										\n								</div>\n								<div class="col-lg-12 mb-3">		\n									<label class="form-label">Keywords <span class="text-danger">*</span></label>\n									<input type="email" class="form-control"> 										\n								</div>		\n								<div class="col-lg-12 mb-3">		\n									<label class="form-label">Description <span class="text-danger">*</span></label>\n									<textarea class="form-control" rows="4"></textarea>									\n								</div>	\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="users7" class="check" checked>\n									<label for="users7" class="checktoggle mb-0"></label>\n								</div>		\n							</div>	\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Testimonial -->\n\n		<!-- delete modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Page</h4>\n							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete page?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /delete modal -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagesComponent, { className: "PagesComponent", filePath: "src/app/features/pages/content-cms/pages/pages.component.ts", lineNumber: 26 });
})();
export {
  PagesComponent
};
//# sourceMappingURL=chunk-VXAQRESZ.js.map
