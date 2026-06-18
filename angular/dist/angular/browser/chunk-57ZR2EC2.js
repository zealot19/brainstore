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

// src/app/features/pages/pages/places/states/states.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ setclose: a0 });
var _c2 = (a0, a1) => ({ "d-block": a0, "d-none": a1 });
var _c3 = (a0, a1) => ({ "badge-linedanger": a0, "badge-linesuccess": a1 });
function StatesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function StatesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function StatesComponent_For_48_Template(rf, ctx) {
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
function StatesComponent_For_57_Template(rf, ctx) {
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
function StatesComponent_For_63_Template(rf, ctx) {
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
function StatesComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275property("value", data_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4.value, " ");
  }
}
function StatesComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 50);
    \u0275\u0275listener("click", function StatesComponent_For_93_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.selectAll(ctx_r5.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_For_93_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.initChecked, $event) || (ctx_r5.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 92);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 93)(13, "div", 94)(14, "a", 95);
    \u0275\u0275element(15, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 97);
    \u0275\u0275element(17, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 99);
    \u0275\u0275element(19, "i", 100);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r7.stateName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7.country);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c3, data_r7.status === "Inactive", data_r7.status === "Active"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r7.status);
  }
}
var StatesComponent = class _StatesComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  selectedValue3 = "";
  selectedValue2 = "";
  selectedValue4 = "";
  selectedValue1 = "";
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
        if (this.router.url == this.routes.states) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getState().subscribe((apiRes) => {
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
  selectedList4 = [
    { value: "Choose State" },
    { value: "Newyork" },
    { value: "Bangkok" }
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
  static \u0275fac = function StatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatesComponent, selectors: [["app-states"]], decls: 197, vars: 33, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-globe", "info-img"], ["placeholder", "Choose Country", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-map-pin", "info-img"], ["placeholder", "Choose State", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "state"], ["mat-sort-header", "country"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-6"], ["type", "text", 1, "form-control"], [1, "col-md-12"], [1, "edit-add", "card"], [1, "edit-add"], [3, "editor"], [3, "editor", "toolbar"], [1, "card-body-list"], ["id", "summernote"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "placeholder", "Beijing"], ["type", "text", "placeholder", "China"], ["id", "summernote5"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-eye", "action-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-trash-2", "feather-trash-2"]], template: function StatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "State List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your States");
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
      \u0275\u0275listener("click", function StatesComponent_Template_a_click_21_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(22, StatesComponent_Conditional_22_Template, 1, 0, "i", 13);
      \u0275\u0275conditionalCreate(23, StatesComponent_Conditional_23_Template, 1, 0, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 14)(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, "Add New State");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "a", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24)(36, "label")(37, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StatesComponent_Template_input_ngModelChange_37_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 26)(39, "div", 27)(40, "a", 28);
      \u0275\u0275listener("click", function StatesComponent_Template_a_click_40_listener() {
        return ctx.openFilter();
      });
      \u0275\u0275element(41, "i", 29);
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275element(43, "img", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 31);
      \u0275\u0275element(45, "i", 32);
      \u0275\u0275elementStart(46, "mat-select", 33);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_mat_select_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(47, StatesComponent_For_48_Template, 2, 2, "mat-option", 34, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 35)(50, "div", 36)(51, "div", 37)(52, "div", 38)(53, "div", 39);
      \u0275\u0275element(54, "i", 40);
      \u0275\u0275elementStart(55, "mat-select", 41);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_mat_select_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(56, StatesComponent_For_57_Template, 2, 2, "mat-option", 34, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 38)(59, "div", 39);
      \u0275\u0275element(60, "i", 42);
      \u0275\u0275elementStart(61, "mat-select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_mat_select_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(62, StatesComponent_For_63_Template, 2, 2, "mat-option", 34, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 38)(65, "div", 39);
      \u0275\u0275element(66, "i", 44);
      \u0275\u0275elementStart(67, "mat-select", 45);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_mat_select_ngModelChange_67_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(68, StatesComponent_For_69_Template, 2, 2, "mat-option", 34, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 38)(71, "div", 39)(72, "a", 46);
      \u0275\u0275element(73, "i", 23);
      \u0275\u0275text(74, " Search ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(75, "div", 47)(76, "table", 48);
      \u0275\u0275listener("matSortChange", function StatesComponent_Template_table_matSortChange_76_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(77, "thead")(78, "tr")(79, "th", 49)(80, "label", 50);
      \u0275\u0275listener("click", function StatesComponent_Template_label_click_80_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(81, "input", 51);
      \u0275\u0275twoWayListener("ngModelChange", function StatesComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "span", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "th", 53);
      \u0275\u0275text(84, "State Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 54);
      \u0275\u0275text(86, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 55);
      \u0275\u0275text(88, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 49);
      \u0275\u0275text(90, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "tbody");
      \u0275\u0275repeaterCreate(92, StatesComponent_For_93_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(94, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 56)(96, "div", 57)(97, "div", 58)(98, "div", 59)(99, "div", 60)(100, "div", 61)(101, "div", 2)(102, "h4");
      \u0275\u0275text(103, "Add State");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "button", 62)(105, "span", 63);
      \u0275\u0275text(106, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 64)(108, "form")(109, "div", 37)(110, "div", 65)(111, "div", 39)(112, "label");
      \u0275\u0275text(113, "State Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "input", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 65)(116, "div", 39)(117, "label");
      \u0275\u0275text(118, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(119, "input", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 37)(121, "div", 67)(122, "div", 68)(123, "div", 69)(124, "label");
      \u0275\u0275text(125, "Description ");
      \u0275\u0275elementStart(126, "ngx-editor", 70);
      \u0275\u0275element(127, "ngx-editor-menu", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 72)(129, "div", 73);
      \u0275\u0275text(130, "Type your message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "p");
      \u0275\u0275text(132, "Maximum 600 Characters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(133, "div", 74)(134, "button", 75);
      \u0275\u0275text(135, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 76);
      \u0275\u0275text(137, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(138, "div", 77)(139, "div", 57)(140, "div", 58)(141, "div", 59)(142, "div", 60)(143, "div", 61)(144, "div", 2)(145, "h4");
      \u0275\u0275text(146, "Edit State");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "button", 62)(148, "span", 63);
      \u0275\u0275text(149, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 64)(151, "form")(152, "div", 37)(153, "div", 65)(154, "div", 39)(155, "label");
      \u0275\u0275text(156, "State Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(157, "input", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 65)(159, "div", 39)(160, "label");
      \u0275\u0275text(161, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(162, "input", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 37)(164, "div", 67)(165, "div", 68)(166, "div", 69)(167, "label");
      \u0275\u0275text(168, "Description ");
      \u0275\u0275elementStart(169, "ngx-editor", 70);
      \u0275\u0275element(170, "ngx-editor-menu", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 72)(172, "div", 80);
      \u0275\u0275text(173, "Type your message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "p");
      \u0275\u0275text(175, "Maximum 600 Characters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(176, "div", 74)(177, "button", 75);
      \u0275\u0275text(178, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "button", 76);
      \u0275\u0275text(180, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(181, "div", 81)(182, "div", 82)(183, "div", 58)(184, "div", 59)(185, "div", 83)(186, "span", 84);
      \u0275\u0275element(187, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "h4", 86);
      \u0275\u0275text(189, "Delete States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "p", 87);
      \u0275\u0275text(191, "Are you sure you want to delete States?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 88)(193, "button", 89);
      \u0275\u0275text(194, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "button", 90);
      \u0275\u0275text(196, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c1, ctx.filter === true));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue3);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(26, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList3);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(27, _c2, ctx.filter, !ctx.filter));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue2);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList2);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue4);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(32, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList4);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(11);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatesComponent, [{
    type: Component,
    args: [{ selector: "app-states", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>State List</h4>
      <h6>Manage Your States</h6>
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
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i  class="ti ti-circle-plus me-2"></i>Add New State</a>
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
          <i  class="feather icon-sliders info-img"></i>

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
      <div class="card" id="filter_inputs" [ngClass]="{ 'd-block': filter, 'd-none': !filter }">
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
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="input-blocks">
                <i  class="feather icon-map-pin info-img"></i>

                <mat-select
                  [(ngModel)]="selectedValue4"
                  [ngModelOptions]="{ standalone: true }"
                  class="select space-select"
                  placeholder="Choose State"
                  >
                  @for (data of selectedList4; track data) {
                    <mat-option [value]="data.value">
                      {{ data.value }}
                    </mat-option>
                  }
                </mat-select>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
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
              <th mat-sort-header="state">State Name</th>
              <th mat-sort-header="country">Country</th>
              <th mat-sort-header="status">Status</th>
              <th class="no-sort">Action</th>
            </tr>
          </thead>
          <tbody>
            @for (data of tableData; track data; let i = $index) {
              <tr >
                <td>
                      <label class="checkboxs" (click)="selectAll(initChecked)">
                        <input type="checkbox"  [(ngModel)]="initChecked"/>
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                <td>{{data.stateName}}</td>
                <td>{{data.country}}</td>
                        <td><span [ngClass]="{
                            'badge-linedanger': data.status === 'Inactive',
                            'badge-linesuccess': data.status === 'Active',
                           
                          }" class="badge">{{data.status}}</span></td>
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
  <!-- Add State -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add State</h4>
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
                      <label>State Name</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Country</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>

                  <div class="row">
                    <!-- Editor -->
                    <div class="col-md-12">
                      <div class="edit-add card">
                        <div class="edit-add">
                          <label>Description
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
  <!-- /Add State -->

  <!-- Edit State -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered custom-modal-two">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit State</h4>
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
                      <label>State Name</label>
                      <input type="text" placeholder="Beijing">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Country</label>
                      <input type="text" placeholder="China">
                    </div>
                  </div>

                  <div class="row">
                    <!-- Editor -->
                    <div class="col-md-12">
                      <div class="edit-add card">
                        <div class="edit-add">
                          <label>Description
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
  <!-- /Edit State -->

      		<!-- delete modal -->
			<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete States</h4>
								<p class="mb-0 fs-16">Are you sure you want to delete States?</p>
								<div class="modal-footer-btn mt-3 d-flex justify-content-center">
									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
								</div>						
						</div>
					</div>
				</div>
			</div>
		</div>
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatesComponent, { className: "StatesComponent", filePath: "src/app/features/pages/pages/places/states/states.component.ts", lineNumber: 28 });
})();
export {
  StatesComponent
};
//# sourceMappingURL=chunk-57ZR2EC2.js.map
