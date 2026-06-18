import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule,
  Validators
} from "./chunk-GA64OA6O.js";
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
  FormControl,
  FormGroup,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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

// src/app/features/pages/pages/places/countries/countries.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ setclose: a0 });
var _c2 = (a0, a1) => ({ "d-block": a0, "d-none": a1 });
var _c3 = (a0, a1) => ({ "badge-linedanger": a0, "badge-linesuccess": a1 });
function CountriesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CountriesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CountriesComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("value", data_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.value, " ");
  }
}
function CountriesComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("value", data_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.value, " ");
  }
}
function CountriesComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275property("value", data_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3.value, " ");
  }
}
function CountriesComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 49);
    \u0275\u0275listener("click", function CountriesComponent_For_85_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.selectAll(ctx_r4.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_For_85_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.initChecked, $event) || (ctx_r4.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 91);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 92)(11, "div", 93)(12, "a", 94);
    \u0275\u0275element(13, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 96);
    \u0275\u0275element(15, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 98);
    \u0275\u0275element(17, "i", 99);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r6.countryName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c3, data_r6.status === "Inactive", data_r6.status === "Active"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r6.status);
  }
}
var CountriesComponent = class _CountriesComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  selectedValue3 = "";
  selectedValue1 = "";
  selectedValue2 = "";
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
        if (this.router.url == this.routes.countries) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCountry().subscribe((apiRes) => {
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
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList1 = [
    { value: "Choose Country" },
    { value: "Mexico" },
    { value: "Italy" }
  ];
  selectedList2 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  editor;
  toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  form = new FormGroup({
    editorContent: new FormControl("", Validators.required())
  });
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
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
  static \u0275fac = function CountriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountriesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountriesComponent, selectors: [["app-countries"]], decls: 189, vars: 30, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-globe", "info-img"], ["placeholder", "Choose Country", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-6", "col-sm-6", "col-12"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "country"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-6"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "col-md-12"], [1, "edit-add", "card"], [1, "edit-add"], [3, "editor"], [3, "editor", "toolbar"], [1, "card-body-list"], ["id", "summernote"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "placeholder", "China", 1, "form-control"], ["type", "text", "placeholder", "Beijing", 1, "form-control"], ["id", "summernote5"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-eye", "action-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-trash-2", "feather-trash-2"]], template: function CountriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Countries List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Countries");
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
      \u0275\u0275element(19, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 12);
      \u0275\u0275listener("click", function CountriesComponent_Template_a_click_21_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(22, CountriesComponent_Conditional_22_Template, 1, 0, "i", 13);
      \u0275\u0275conditionalCreate(23, CountriesComponent_Conditional_23_Template, 1, 0, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 14)(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, "Add New Country");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "a", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24)(36, "label")(37, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_37_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 26)(39, "div", 27)(40, "a", 28);
      \u0275\u0275listener("click", function CountriesComponent_Template_a_click_40_listener() {
        return ctx.openFilter();
      });
      \u0275\u0275element(41, "i", 29);
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275element(43, "img", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 31);
      \u0275\u0275element(45, "i", 32);
      \u0275\u0275elementStart(46, "mat-select", 33);
      \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_Template_mat_select_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(47, CountriesComponent_For_48_Template, 2, 2, "mat-option", 34, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 35)(50, "div", 36)(51, "div", 37)(52, "div", 38)(53, "div", 39);
      \u0275\u0275element(54, "i", 40);
      \u0275\u0275elementStart(55, "mat-select", 41);
      \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_Template_mat_select_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(56, CountriesComponent_For_57_Template, 2, 2, "mat-option", 34, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 38)(59, "div", 39);
      \u0275\u0275element(60, "i", 42);
      \u0275\u0275elementStart(61, "mat-select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_Template_mat_select_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(62, CountriesComponent_For_63_Template, 2, 2, "mat-option", 34, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 44)(65, "div", 39)(66, "a", 45);
      \u0275\u0275element(67, "i", 23);
      \u0275\u0275text(68, " Search ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(69, "div", 46)(70, "table", 47);
      \u0275\u0275listener("matSortChange", function CountriesComponent_Template_table_matSortChange_70_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(71, "thead")(72, "tr")(73, "th", 48)(74, "label", 49);
      \u0275\u0275listener("click", function CountriesComponent_Template_label_click_74_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(75, "input", 50);
      \u0275\u0275twoWayListener("ngModelChange", function CountriesComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "span", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "th", 52);
      \u0275\u0275text(78, "Country Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 53);
      \u0275\u0275text(80, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 48);
      \u0275\u0275text(82, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "tbody");
      \u0275\u0275repeaterCreate(84, CountriesComponent_For_85_Template, 18, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(86, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 54)(88, "div", 55)(89, "div", 56)(90, "div", 57)(91, "div", 58)(92, "div", 59)(93, "div", 2)(94, "h4");
      \u0275\u0275text(95, "Add Country");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "button", 60)(97, "span", 61);
      \u0275\u0275text(98, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 62)(100, "form")(101, "div", 37)(102, "div", 63)(103, "div", 39)(104, "label", 64);
      \u0275\u0275text(105, "Country Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 63)(108, "div", 39)(109, "label", 64);
      \u0275\u0275text(110, "Region");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 37)(113, "div", 66)(114, "div", 67)(115, "div", 68)(116, "label", 64);
      \u0275\u0275text(117, "Description ");
      \u0275\u0275elementStart(118, "ngx-editor", 69);
      \u0275\u0275element(119, "ngx-editor-menu", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "div", 71)(121, "div", 72);
      \u0275\u0275text(122, "Type your message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "p");
      \u0275\u0275text(124, "Maximum 600 Characters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(125, "div", 73)(126, "button", 74);
      \u0275\u0275text(127, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "button", 75);
      \u0275\u0275text(129, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(130, "div", 76)(131, "div", 55)(132, "div", 56)(133, "div", 57)(134, "div", 58)(135, "div", 59)(136, "div", 2)(137, "h4");
      \u0275\u0275text(138, "Edit Supplier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "button", 60)(140, "span", 61);
      \u0275\u0275text(141, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 62)(143, "form")(144, "div", 37)(145, "div", 63)(146, "div", 39)(147, "label", 64);
      \u0275\u0275text(148, "Country Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "input", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 63)(151, "div", 39)(152, "label", 64);
      \u0275\u0275text(153, "Region");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "input", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 37)(156, "div", 66)(157, "div", 67)(158, "div", 68)(159, "label", 64);
      \u0275\u0275text(160, "Description ");
      \u0275\u0275elementStart(161, "ngx-editor", 69);
      \u0275\u0275element(162, "ngx-editor-menu", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 71)(164, "div", 79);
      \u0275\u0275text(165, "Type your message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "p");
      \u0275\u0275text(167, "Maximum 600 Characters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(168, "div", 73)(169, "button", 74);
      \u0275\u0275text(170, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "button", 75);
      \u0275\u0275text(172, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(173, "div", 80)(174, "div", 81)(175, "div", 56)(176, "div", 57)(177, "div", 82)(178, "span", 83);
      \u0275\u0275element(179, "i", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "h4", 85);
      \u0275\u0275text(181, "Delete Countries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "p", 86);
      \u0275\u0275text(183, "Are you sure you want to delete countries?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 87)(185, "button", 88);
      \u0275\u0275text(186, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "button", 89);
      \u0275\u0275text(188, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 23 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c1, ctx.filter === true));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue3);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList3);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c2, ctx.filter, !ctx.filter));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(28, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue2);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(29, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList2);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(34);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(42);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, NgxEditorComponent, MenuComponent, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountriesComponent, [{
    type: Component,
    args: [{ selector: "app-countries", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Countries List</h4>
      <h6>Manage Your Countries</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Pdf"
        matTooltip="Pdf"
        matTooltipPosition="above"
        ><img src="assets/img/icons/pdf.svg" alt="img"
      /></a>
    </li>
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Excel"
        matTooltip="Excel"
        matTooltipPosition="above"
        ><img src="assets/img/icons/excel.svg" alt="img"
      /></a>
    </li>
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Print"
        matTooltip="Print"
        matTooltipPosition="above"
        ><i class="feather icon-printer feather-rotate-ccw"></i
      ></a>
    </li>
    <li>
      <a
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Refresh"
        matTooltip="Refresh"
        matTooltipPosition="above"
        ><i class="ti ti-refresh"></i
      ></a>
    </li>
    <li>
      <a
        (click)="toggleCollapse()" [class.active]="isCollapsed"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Collapse"
        matTooltip="Collapse"
        matTooltipPosition="above"
        id="collapse-header"
        > @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i  class="ti ti-circle-plus me-2"></i>Add New Country</a>
  </div>
</div>


<!-- /product list -->
<div class="card table-list-card">
  <div class="card-body">
    <div class="table-top">
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
                placeholder="Search..."
                />
              </label>
            </div>
          </div>
        </div>
        <div class="search-path">
          <div class="d-flex align-items-center">
            <a class="btn btn-filter" id="filter_search"
              (click)="openFilter()"
              [ngClass]="{ setclose: filter === true }">
              <i  class="feather icon-filter filter-icon"></i>
              <span><img src="assets/img/icons/closes.svg" alt="img"></span>
            </a>
          </div>
        </div>
        <div class="form-sort">
          <i class="feather icon-sliders info-img"></i>
          <mat-select
            [(ngModel)]="selectedValue3"
            [ngModelOptions]="{ standalone: true }"
            class="select space-select"
            placeholder="Sort by Date"
            >
            @for (data of selectedList3; track data) {
              <mat-option [value]="data.value">
                {{ data.value }}
              </mat-option>
            }
          </mat-select>
        </div>
      </div>
      <!-- /Filter -->
      <div class="card" id="filter_inputs"   [ngClass]="{ 'd-block': filter, 'd-none': !filter }">
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="input-blocks">
                <i  class="feather icon-globe info-img"></i>

                <mat-select
                  [(ngModel)]="selectedValue1"
                  [ngModelOptions]="{ standalone: true }"
                  class="select space-select"
                  placeholder="Choose Country"
                  >
                  @for (data of selectedList1; track data) {
                    <mat-option [value]="data.value">
                      {{ data.value }}
                    </mat-option>
                  }
                </mat-select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="input-blocks">
                <i  class="feather icon-stop-circle info-img"></i>

                <mat-select
                  [(ngModel)]="selectedValue2"
                  [ngModelOptions]="{ standalone: true }"
                  class="select space-select"
                  placeholder="Choose Status"
                  >
                  @for (data of selectedList2; track data) {
                    <mat-option [value]="data.value">
                      {{ data.value }}
                    </mat-option>
                  }
                </mat-select>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
              <div class="input-blocks">
                <a class="btn btn-filters ms-auto"> <i  class="feather icon-search feather-search"></i> Search </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Filter -->
      <div class="table-responsive">
        <table class="table datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"
          matSortDirection="asc" matSortDisableClear>
          <thead>
            <tr>
              <th class="no-sort">
               <label class="checkboxs" (click)="selectAll(initChecked)">
                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>
                      <span class="checkmarks"></span>
                    </label>
              </th>
              <th mat-sort-header="country">Country Name</th>
              <th mat-sort-header="status">Status</th>
              <th class="no-sort">Action</th>
            </tr>
          </thead>
          <tbody>
            @for (data of tableData; track data; let i = $index) {
              <tr>
                <td>
                      <label class="checkboxs" (click)="selectAll(initChecked)">
                        <input type="checkbox"  [(ngModel)]="initChecked"/>
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                <td>{{data.countryName}}</td>
                        <td><span  [ngClass]="{
                            'badge-linedanger': data.status === 'Inactive',
                            'badge-linesuccess': data.status === 'Active',
                           
                          }"  class="badge">{{data.status}}</span></td>
                <td class="action-table-data">
                  <div class="edit-delete-action">
                    <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                      <i  class="feather icon-eye action-eye"></i>
                    </a>
                    <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">
                      <i  class="feather icon-edit feather-edit"></i>
                    </a>
                    <a class="me-2  p-2 mb-0" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
                      <i  class="feather icon-trash-2 feather-trash-2"></i>
                    </a>
                  </div>
                </td>
              </tr>
            }

          </tbody>
        </table>

      </div>
      <app-custom-pagination></app-custom-pagination>
    </div>
  </div>
  <!-- /product list -->
  <!-- Add Supplier -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Country</h4>
              </div>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body">
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label class="form-label">Country Name</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label class="form-label">Region</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>

                  <div class="row">
                    <!-- Editor -->
                    <div class="col-md-12">
                      <div class="edit-add card">
                        <div class="edit-add">
                          <label class="form-label">Description
                            <ngx-editor [editor]="editor">
                              <ngx-editor-menu [editor]="editor" [toolbar]="toolbar">
                              </ngx-editor-menu>
                            </ngx-editor>
                          </label>
                        </div>
                        <div class="card-body-list">
                          <div id="summernote">Type your message</div>
                        </div>
                        <p>Maximum 600 Characters</p>
                      </div>
                    </div>
                    <!-- /Editor -->
                  </div>
                </div>

                <div class="modal-footer-btn">
                  <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Supplier -->

  <!-- Edit Supplier -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Supplier</h4>
              </div>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body">
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label class="form-label">Country Name</label>
                      <input type="text" class="form-control" placeholder="China">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label class="form-label">Region</label>
                      <input type="text" class="form-control" placeholder="Beijing">
                    </div>
                  </div>

                  <div class="row">
                    <!-- Editor -->
                    <div class="col-md-12">
                      <div class="edit-add card">
                        <div class="edit-add">
                          <label class="form-label">Description
                            <ngx-editor [editor]="editor">
                              <ngx-editor-menu [editor]="editor" [toolbar]="toolbar">
                              </ngx-editor-menu>
                            </ngx-editor>
                          </label>

                        </div>
                        <div class="card-body-list">
                          <div id="summernote5">Type your message</div>
                        </div>
                        <p>Maximum 600 Characters</p>
                      </div>
                    </div>
                    <!-- /Editor -->
                  </div>
                </div>

                <div class="modal-footer-btn">
                  <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    		<!-- delete modal -->
			<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Countries</h4>
								<p class="mb-0 fs-16">Are you sure you want to delete countries?</p>
								<div class="modal-footer-btn mt-3 d-flex justify-content-center">
									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
								</div>						
						</div>
					</div>
				</div>
			</div>
		</div>` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountriesComponent, { className: "CountriesComponent", filePath: "src/app/features/pages/pages/places/countries/countries.component.ts", lineNumber: 25 });
})();
export {
  CountriesComponent
};
//# sourceMappingURL=chunk-LJKRL2YQ.js.map
