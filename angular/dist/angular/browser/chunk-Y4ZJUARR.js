import {
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/finance/income-category/income-category.component.ts
var _c0 = () => ({ standalone: true });
function IncomeCategoryComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function IncomeCategoryComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
var IncomeCategoryComponent = class _IncomeCategoryComponent {
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
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.income) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getIncome().subscribe((apiRes) => {
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
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
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
  static \u0275fac = function IncomeCategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncomeCategoryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomeCategoryComponent, selectors: [["app-income-category"]], decls: 349, vars: 7, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-income-category", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all"], [1, "checkmarks"], [1, "ti", "ti-arrows-up-down", "fs-11", "fw-medium", "ms-1"], ["type", "checkbox"], [1, "action-table-data"], [1, "edit-delete-action"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "me-0", "p-2", "mb-0"], [1, "feather", "icon-trash-2"], ["id", "add-income-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control", "list"], ["type", "submit", 1, "btn", "btn-primaryadd", "btn-generate"], ["type", "text", "value", "Investment", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-income-category", 1, "modal", "fade"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"]], template: function IncomeCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Income Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your income category");
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
      \u0275\u0275listener("click", function IncomeCategoryComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, IncomeCategoryComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, IncomeCategoryComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, " Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function IncomeCategoryComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function IncomeCategoryComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "a", 26);
      \u0275\u0275text(37, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 27)(39, "li")(40, "a", 28);
      \u0275\u0275text(41, "Foreign investment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 28);
      \u0275\u0275text(44, "Product Export");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 25)(46, "a", 26);
      \u0275\u0275text(47, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 27)(49, "li")(50, "a", 28);
      \u0275\u0275text(51, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 28);
      \u0275\u0275text(54, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 29)(56, "a", 26);
      \u0275\u0275text(57, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul", 27)(59, "li")(60, "a", 28);
      \u0275\u0275text(61, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 28);
      \u0275\u0275text(64, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 28);
      \u0275\u0275text(67, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 28);
      \u0275\u0275text(70, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 28);
      \u0275\u0275text(73, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(74, "div", 30)(75, "div", 31)(76, "table", 32)(77, "thead", 33)(78, "tr")(79, "th", 34)(80, "label", 35);
      \u0275\u0275element(81, "input", 36)(82, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "th");
      \u0275\u0275text(84, "Code");
      \u0275\u0275element(85, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th");
      \u0275\u0275text(87, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th");
      \u0275\u0275text(89, "Added Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "tbody")(92, "tr")(93, "td")(94, "label", 35);
      \u0275\u0275element(95, "input", 39)(96, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "td");
      \u0275\u0275text(98, "INCA849");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "td");
      \u0275\u0275text(100, "Foreign investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "td");
      \u0275\u0275text(102, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "td", 40)(104, "div", 41)(105, "a", 42);
      \u0275\u0275element(106, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "a", 44);
      \u0275\u0275element(108, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(109, "tr")(110, "td")(111, "label", 35);
      \u0275\u0275element(112, "input", 39)(113, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "td");
      \u0275\u0275text(115, "INCA48");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "td");
      \u0275\u0275text(117, "Product Export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "td");
      \u0275\u0275text(119, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "td", 40)(121, "div", 41)(122, "a", 42);
      \u0275\u0275element(123, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "a", 44);
      \u0275\u0275element(125, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(126, "tr")(127, "td")(128, "label", 35);
      \u0275\u0275element(129, "input", 39)(130, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "td");
      \u0275\u0275text(132, "INCA47");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "td");
      \u0275\u0275text(134, "Installation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "td");
      \u0275\u0275text(136, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "td", 40)(138, "div", 41)(139, "a", 42);
      \u0275\u0275element(140, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "a", 44);
      \u0275\u0275element(142, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(143, "tr")(144, "td")(145, "label", 35);
      \u0275\u0275element(146, "input", 39)(147, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "td");
      \u0275\u0275text(149, "INCA46");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "td");
      \u0275\u0275text(151, "Product Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "td");
      \u0275\u0275text(153, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "td", 40)(155, "div", 41)(156, "a", 42);
      \u0275\u0275element(157, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "a", 44);
      \u0275\u0275element(159, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(160, "tr")(161, "td")(162, "label", 35);
      \u0275\u0275element(163, "input", 39)(164, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "td");
      \u0275\u0275text(166, "INCA845");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "td");
      \u0275\u0275text(168, "Local Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "td");
      \u0275\u0275text(170, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "td", 40)(172, "div", 41)(173, "a", 42);
      \u0275\u0275element(174, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "a", 44);
      \u0275\u0275element(176, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(177, "tr")(178, "td")(179, "label", 35);
      \u0275\u0275element(180, "input", 39)(181, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "td");
      \u0275\u0275text(183, "INCA44");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "td");
      \u0275\u0275text(185, "Service Fees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "td");
      \u0275\u0275text(187, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "td", 40)(189, "div", 41)(190, "a", 42);
      \u0275\u0275element(191, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "a", 44);
      \u0275\u0275element(193, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(194, "tr")(195, "td")(196, "label", 35);
      \u0275\u0275element(197, "input", 39)(198, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "td");
      \u0275\u0275text(200, "INCA843");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "td");
      \u0275\u0275text(202, "Return/Refund Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "td");
      \u0275\u0275text(204, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "td", 40)(206, "div", 41)(207, "a", 42);
      \u0275\u0275element(208, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "a", 44);
      \u0275\u0275element(210, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(211, "tr")(212, "td")(213, "label", 35);
      \u0275\u0275element(214, "input", 39)(215, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "td");
      \u0275\u0275text(217, "INCA842");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "td");
      \u0275\u0275text(219, "Foreign investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "td");
      \u0275\u0275text(221, "03 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "td", 40)(223, "div", 41)(224, "a", 42);
      \u0275\u0275element(225, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "a", 44);
      \u0275\u0275element(227, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(228, "tr")(229, "td")(230, "label", 35);
      \u0275\u0275element(231, "input", 39)(232, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "td");
      \u0275\u0275text(234, "INCA841");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "td");
      \u0275\u0275text(236, "Product Export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "td");
      \u0275\u0275text(238, "20 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "td", 40)(240, "div", 41)(241, "a", 42);
      \u0275\u0275element(242, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "a", 44);
      \u0275\u0275element(244, "i", 45);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(245, "tr")(246, "td")(247, "label", 35);
      \u0275\u0275element(248, "input", 39)(249, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "td");
      \u0275\u0275text(251, "INCA840");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "td");
      \u0275\u0275text(253, "Return/Refund Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "td");
      \u0275\u0275text(255, "10 Sep 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "td", 40)(257, "div", 41)(258, "a", 42);
      \u0275\u0275element(259, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "a", 44);
      \u0275\u0275element(261, "i", 45);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(262, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "div", 46)(264, "div", 47)(265, "div", 48)(266, "div", 49)(267, "div", 50)(268, "div", 51)(269, "div", 2)(270, "h4");
      \u0275\u0275text(271, "Add Income Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "button", 52)(273, "span", 53);
      \u0275\u0275text(274, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "form")(276, "div", 54)(277, "div", 55)(278, "div", 56)(279, "div", 57)(280, "label", 58);
      \u0275\u0275text(281, "Code");
      \u0275\u0275elementStart(282, "span", 59);
      \u0275\u0275text(283, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(284, "input", 60);
      \u0275\u0275elementStart(285, "button", 61);
      \u0275\u0275text(286, " Generate ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(287, "div", 56)(288, "label", 58);
      \u0275\u0275text(289, "Enter Name");
      \u0275\u0275elementStart(290, "span", 59);
      \u0275\u0275text(291, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(292, "input", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(293, "div", 63)(294, "button", 64);
      \u0275\u0275text(295, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "button", 65);
      \u0275\u0275text(297, "Add Category");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(298, "div", 66)(299, "div", 47)(300, "div", 48)(301, "div", 49)(302, "div", 50)(303, "div", 51)(304, "div", 2)(305, "h4");
      \u0275\u0275text(306, "Edit Income Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "button", 52)(308, "span", 53);
      \u0275\u0275text(309, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(310, "form")(311, "div", 54)(312, "div", 55)(313, "div", 56)(314, "div", 57)(315, "label", 58);
      \u0275\u0275text(316, "Code");
      \u0275\u0275elementStart(317, "span", 59);
      \u0275\u0275text(318, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(319, "input", 60);
      \u0275\u0275elementStart(320, "button", 61);
      \u0275\u0275text(321, " Generate ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "div", 56)(323, "label", 58);
      \u0275\u0275text(324, "Enter Name");
      \u0275\u0275elementStart(325, "span", 59);
      \u0275\u0275text(326, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(327, "input", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(328, "div", 63)(329, "button", 64);
      \u0275\u0275text(330, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "button", 65);
      \u0275\u0275text(332, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(333, "div", 67)(334, "div", 47)(335, "div", 48)(336, "div", 49)(337, "div", 68)(338, "span", 69);
      \u0275\u0275element(339, "i", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "h4", 71);
      \u0275\u0275text(341, "Delete Income Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "p", 72);
      \u0275\u0275text(343, "Are you sure you want to delete income category?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "div", 73)(345, "button", 74);
      \u0275\u0275text(346, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "button", 75);
      \u0275\u0275text(348, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncomeCategoryComponent, [{
    type: Component,
    args: [{ selector: "app-income-category", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Income Category</h4>\n            <h6>Manage your income category</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"\n              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse"\n              id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n              }\n              @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n              }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-income-category"><i class="ti ti-circle-plus"></i> Add New</a>\n    </div>\n</div>\n\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n				<a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n				<div class="dataTables_filter">\n				  <label>\n					<input\n					  [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n					  (ngModelChange)="searchData(searchDataValue)"\n					  type="search"\n					  class="form-control"\n					  placeholder="Search"\n					  />\n					</label>\n				  </div>\n				</div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                Category\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Foreign investment</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Product Export</a>\n                    </li>\n                </ul>\n            </div>				\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                    </li>\n        \n                </ul>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">\n        <div class="table-responsive">\n            <table class="table datatable">\n                <thead class="thead-light">\n                    <tr>\n                        <th class="no-sort">\n                            <label class="checkboxs">\n                                <input type="checkbox" id="select-all">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </th>\n                        <th>Code<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>\n                        <th>Category</th>\n                        <th>Added Date</th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA849</td>\n                        <td>Foreign investment</td>\n                        <td>24 Dec 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>				\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA48</td>\n                        <td>Product Export</td>\n                        <td>10 Dec 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>	\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA47</td>\n                        <td>Installation</td>\n                        <td>27 Nov 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA46</td>\n                        <td>Product Sales</td>\n                        <td>18 Nov 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA845</td>\n                        <td>Local Sale</td>\n                        <td>06 Nov 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA44</td>\n                        <td>Service Fees</td>\n                        <td>25 Oct 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA843</td>\n                        <td>Return/Refund Income</td>\n                        <td>14 Oct 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA842</td>\n                        <td>Foreign investment</td>\n                        <td>03 Oct 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA841</td>\n                        <td>Product Export</td>\n                        <td>20 Sep 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                                <input type="checkbox">\n                                <span class="checkmarks"></span>\n                            </label>\n                        </td>\n                        <td>INCA840</td>\n                        <td>Return/Refund Income</td>\n                        <td>10 Sep 2024</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">\n                                    <i  class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="me-0 p-2 mb-0" href="javascript:void(0);">\n                                    <i  class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n    </div>\n</div>\n<!-- /product list -->\n\n\n			<!-- Add income-->\n			<div class="modal fade" id="add-income-category">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="page-wrapper-new p-0">\n							<div class="content">\n								<div class="modal-header">\n									<div class="page-title">\n										<h4>Add Income Category</h4>\n									</div>\n									<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n										<span aria-hidden="true">&times;</span>\n									</button>\n								</div>\n								<form>\n									<div class="modal-body">\n										<div class="row">\n											<div class="col-lg-12">\n												<div class="mb-3 position-relative">\n													<label class="form-label">Code<span class="text-danger ms-1">*</span></label>\n													<input type="text" class="form-control list">\n													<button type="submit" class="btn btn-primaryadd btn-generate">\n														Generate\n													</button>\n												</div>\n											</div>\n                                        <div class="col-lg-12">                                      \n											<label class="form-label">Enter Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control" value="Investment">                                     \n                                        </div>					\n										</div>						\n									</div>\n									<div class="modal-footer">\n										<button type="button" class="btn me-2 btn-secondary" data-bs-dismiss="modal">Cancel</button>\n										<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Category</button>\n									</div>\n								</form>\n								\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Add income-->\n\n\n            		<!-- Edit income-->\n		<div class="modal fade" id="edit-income-category">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Edit Income Category</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<form>\n								<div class="modal-body">\n									<div class="row">\n										<div class="col-lg-12">\n											<div class="mb-3 position-relative">\n												<label class="form-label">Code<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control list">\n												<button type="submit" class="btn btn-primaryadd btn-generate">\n													Generate\n												</button>\n											</div>\n										</div>\n										<div class="col-lg-12">                                      \n											<label class="form-label">Enter Name<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control" value="Investment">                                     \n										</div>					\n									</div>\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn me-2 btn-secondary" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n								</div>\n							</form>\n							\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit income -->\n\n			 		<!-- delete modal -->\n					 <div class="modal fade" id="delete-modal">\n						<div class="modal-dialog modal-dialog-centered">\n							<div class="modal-content">\n								<div class="page-wrapper-new p-0">\n									<div class="content p-5 px-3 text-center">\n											<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n											<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Income Category</h4>\n											<p class="mb-0 fs-16">Are you sure you want to delete income category?</p>\n											<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n												<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n												<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n											</div>						\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomeCategoryComponent, { className: "IncomeCategoryComponent", filePath: "src/app/features/pages/finance/income-category/income-category.component.ts", lineNumber: 23 });
})();
export {
  IncomeCategoryComponent
};
//# sourceMappingURL=chunk-Y4ZJUARR.js.map
