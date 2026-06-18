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

// src/app/features/pages/content-cms/faq/faq.component.ts
var _c0 = () => ({ standalone: true });
function FaqComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function FaqComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function FaqComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 73)(3, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_For_85_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 37);
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
    \u0275\u0275elementStart(11, "td", 75)(12, "div", 76)(13, "a", 77);
    \u0275\u0275element(14, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 79);
    \u0275\u0275element(16, "i", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.answer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.category);
  }
}
function FaqComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 81);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var FaqComponent = class _FaqComponent {
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
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.faq) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getFaq().subscribe((apiRes) => {
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
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 186, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-faq", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body", "pb-0"], [1, "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "add-faq", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["rows", "3", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "users6", "checked", "", 1, "check"], ["for", "users6", 1, "checktoggle", "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-faq", 1, "modal", "fade"], ["type", "text", "value", "General", 1, "form-control"], ["type", "text", "value", "What is a POS platform?", 1, "form-control"], ["type", "checkbox", "id", "users7", "checked", "", 1, "check"], ["for", "users7", 1, "checktoggle", "mb-0"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-content", "p-5"], [1, "modal-body", "text-center", "p-0"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "d-flex", "justify-content-center", "mt-3"], ["data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-faq", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your FAQ");
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
      \u0275\u0275listener("click", function FaqComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, FaqComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, FaqComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add FAQ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function FaqComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "a", 26);
      \u0275\u0275text(37, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 27)(39, "li")(40, "a", 28);
      \u0275\u0275text(41, "General");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 28);
      \u0275\u0275text(44, "Features");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 28);
      \u0275\u0275text(47, "Hardware");
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
      \u0275\u0275listener("matSortChange", function FaqComponent_Template_table_matSortChange_69_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(70, "thead", 33)(71, "tr")(72, "th", 34)(73, "label", 35);
      \u0275\u0275listener("click", function FaqComponent_Template_label_click_73_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(74, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th");
      \u0275\u0275text(79, "Answers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th");
      \u0275\u0275text(81, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "tbody");
      \u0275\u0275repeaterCreate(84, FaqComponent_For_85_Template, 17, 4, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(86, FaqComponent_Conditional_86_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(87, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 38)(89, "div", 39)(90, "div", 40)(91, "div", 41)(92, "div", 2)(93, "h4");
      \u0275\u0275text(94, "Add Faq");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "button", 42)(96, "span", 43);
      \u0275\u0275text(97, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "form")(99, "div", 44)(100, "div", 45)(101, "div", 46)(102, "label", 47);
      \u0275\u0275text(103, "Category ");
      \u0275\u0275elementStart(104, "span", 48);
      \u0275\u0275text(105, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(106, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 46)(108, "label", 47);
      \u0275\u0275text(109, "Question ");
      \u0275\u0275elementStart(110, "span", 48);
      \u0275\u0275text(111, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(112, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 46)(114, "label", 47);
      \u0275\u0275text(115, "Answer ");
      \u0275\u0275elementStart(116, "span", 48);
      \u0275\u0275text(117, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(118, "textarea", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 51)(120, "span", 52);
      \u0275\u0275text(121, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "input", 53)(123, "label", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 55)(125, "button", 56);
      \u0275\u0275text(126, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "button", 57);
      \u0275\u0275text(128, "Add Faq");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(129, "div", 58)(130, "div", 39)(131, "div", 40)(132, "div", 41)(133, "div", 2)(134, "h4");
      \u0275\u0275text(135, "Edit Faq");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "button", 42)(137, "span", 43);
      \u0275\u0275text(138, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "form")(140, "div", 44)(141, "div", 45)(142, "div", 46)(143, "label", 47);
      \u0275\u0275text(144, "Category ");
      \u0275\u0275elementStart(145, "span", 48);
      \u0275\u0275text(146, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(147, "input", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 46)(149, "label", 47);
      \u0275\u0275text(150, "Question ");
      \u0275\u0275elementStart(151, "span", 48);
      \u0275\u0275text(152, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(153, "input", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 46)(155, "label", 47);
      \u0275\u0275text(156, "Answer ");
      \u0275\u0275elementStart(157, "span", 48);
      \u0275\u0275text(158, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "textarea", 50);
      \u0275\u0275text(160, "A software system that processes sales, manages inventory, and handles transactions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 51)(162, "span", 52);
      \u0275\u0275text(163, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(164, "input", 61)(165, "label", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "div", 55)(167, "button", 56);
      \u0275\u0275text(168, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "button", 57);
      \u0275\u0275text(170, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(171, "div", 63)(172, "div", 39)(173, "div", 64)(174, "div", 65)(175, "span", 66);
      \u0275\u0275element(176, "i", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "h4", 68);
      \u0275\u0275text(178, "Delete Faq");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p", 69);
      \u0275\u0275text(180, "Are you sure you want to delete faq?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div", 70)(182, "a", 71);
      \u0275\u0275text(183, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "a", 72);
      \u0275\u0275text(185, "Yes Delete");
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
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 86 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqComponent, [{
    type: Component,
    args: [{ selector: "app-faq", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>FAQ</h4>\n            <h6>Manage your FAQ</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li class="me-2">\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li class="me-2">\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    \n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-faq"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add FAQ</a>\n    </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                      type="search" class="form-control" placeholder="Search" />\n                    </label>\n                  </div>\n                </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Category\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">General</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Features</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Hardware</a>\n                    </li>\n                </ul>\n            </div>\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body pb-0">\n        <div class="table-responsive">\n            <table matSort (matSortChange)="sortData($event)" class="table datatable">\n                <thead class="thead-light">\n                    <tr>\n                        <th class="no-sort">\n                            <label class="checkboxs" (click)="selectAll(initChecked)">\n                              <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </th>\n                        <th>Questions</th>\n                        <th>Answers</th>\n                        <th>Category</th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    @for(data of tableData; track data){\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                              <input type="checkbox" [(ngModel)]="data.isSelected">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                        <td>{{data.question}}</td>\n                        <td>{{data.answer}}</td>\n                        <td>{{data.category}}</td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-faq">\n                                    <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>	\n                    }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n                </tbody>\n            </table>\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n    </div>\n</div>\n<!-- /product list -->\n\n\n\n		<!-- Add FAQ -->\n		<div class="modal fade" id="add-faq">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Faq</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">										\n								<div class="mb-3">\n									<label class="form-label">Category <span class="text-danger">*</span></label>\n									<input type="text" class="form-control">\n								</div>																			\n								<div class="mb-3">\n									<label class="form-label">Question <span class="text-danger">*</span></label>\n									<input type="text" class="form-control">\n								</div>	\n								<div class="mb-3">\n									<label class="form-label">Answer <span class="text-danger">*</span></label>\n									<textarea class="form-control" rows="3"></textarea>\n								</div>	\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="users6" class="check" checked>\n									<label for="users6" class="checktoggle mb-0"></label>\n								</div>																		\n							</div>														\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Faq</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add FAQ -->\n\n		<!-- Edit FAQ -->\n		<div class="modal fade" id="edit-faq">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Faq</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">										\n								<div class="mb-3">\n									<label class="form-label">Category <span class="text-danger">*</span></label>\n									<input type="text" class="form-control" value="General">\n								</div>																			\n								<div class="mb-3">\n									<label class="form-label">Question <span class="text-danger">*</span></label>\n									<input type="text" class="form-control" value="What is a POS platform?">\n								</div>	\n								<div class="mb-3">\n									<label class="form-label">Answer <span class="text-danger">*</span></label>\n									<textarea class="form-control" rows="3">A software system that processes sales, manages inventory, and handles transactions.</textarea>\n								</div>	\n								<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n									<span class="status-label">Status</span>\n									<input type="checkbox" id="users7" class="check" checked>\n									<label for="users7" class="checktoggle mb-0"></label>\n								</div>																		\n							</div>														\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit FAQ -->\n		  \n		<!-- Delete Modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content p-5">\n					<div class="modal-body text-center p-0">\n						<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n						<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Faq</h4>\n						<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete faq?</p>	\n						<div class="d-flex justify-content-center mt-3">\n							<a class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</a>\n						</div>											\n					</div>					\n				</div>\n			</div>\n		</div>\n		<!-- /Delete Modal -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src/app/features/pages/content-cms/faq/faq.component.ts", lineNumber: 26 });
})();
export {
  FaqComponent
};
//# sourceMappingURL=chunk-H3NWDKCU.js.map
