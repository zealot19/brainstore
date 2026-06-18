import {
  TagInputComponent,
  TagInputModule
} from "./chunk-BAUWSOIV.js";
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
  COMMA,
  ENTER
} from "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-NRBRKDTR.js";
import "./chunk-AIOFIKT2.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import "./chunk-5VOPFTBV.js";
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

// src/app/features/pages/inventory/varriant-attributes/varriant-attributes.component.ts
var _c0 = () => ({ standalone: true });
function VarriantAttributesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function VarriantAttributesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function VarriantAttributesComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 75)(3, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function VarriantAttributesComponent_For_65_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 34);
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
    \u0275\u0275elementStart(11, "td")(12, "span", 77);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 78)(15, "div", 79)(16, "a", 80);
    \u0275\u0275element(17, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 82);
    \u0275\u0275element(19, "i", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r2.variant, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.values);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.status);
  }
}
function VarriantAttributesComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 84);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var VarriantAttributesComponent = class _VarriantAttributesComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  tags = ["PointOfSale", "RetailTech", "POSIntegration"];
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
        if (this.router.url == this.routes.varriantAttributes) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getVarriantAttributes().subscribe((apiRes) => {
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
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  addOnBlur = true;
  separatorKeysCodes = [ENTER, COMMA];
  fruits = [{ name: "S" }, { name: "M" }, { name: "XL" }];
  add(event) {
    const value = (event.value || "").trim();
    if (value) {
      this.fruits.push({ name: value });
    }
    event.chipInput?.clear();
  }
  remove(fruit) {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  edit(fruit, event) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit);
      return;
    }
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
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
  static \u0275fac = function VarriantAttributesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VarriantAttributesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VarriantAttributesComponent, selectors: [["app-varriant-attributes"]], decls: 162, vars: 11, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], ["d", "", 1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "variant"], ["mat-sort-header", "values"], ["mat-sort-header", "createdOn"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-bodys"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [3, "placeholder"], [1, "tag-text", "mt-2", "d-flex"], [1, "mb-0", "mt-4"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], [1, "modal-body"], ["type", "text", "value", "Size", 1, "form-control"], [1, "mb-0", "mt-3"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", "table-badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function VarriantAttributesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Variant Attributes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your variant attributes");
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
      \u0275\u0275listener("click", function VarriantAttributesComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, VarriantAttributesComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, VarriantAttributesComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, " Add Variant");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function VarriantAttributesComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function VarriantAttributesComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275listener("matSortChange", function VarriantAttributesComponent_Template_table_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "thead")(49, "tr")(50, "th", 31)(51, "label", 32);
      \u0275\u0275listener("click", function VarriantAttributesComponent_Template_label_click_51_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(52, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function VarriantAttributesComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "th", 35);
      \u0275\u0275text(55, "Variant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 36);
      \u0275\u0275text(57, "Values");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 37);
      \u0275\u0275text(59, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 38);
      \u0275\u0275text(61, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "th", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "tbody");
      \u0275\u0275repeaterCreate(64, VarriantAttributesComponent_For_65_Template, 20, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(66, VarriantAttributesComponent_Conditional_66_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(67, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 39)(69, "div", 40)(70, "div", 41)(71, "div", 42)(72, "div", 43)(73, "div", 44)(74, "div", 2)(75, "h4");
      \u0275\u0275text(76, "Add Variant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "button", 45)(78, "span", 46);
      \u0275\u0275text(79, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 47)(81, "form")(82, "div", 48)(83, "label", 49);
      \u0275\u0275text(84, "Variant");
      \u0275\u0275elementStart(85, "span", 50);
      \u0275\u0275text(86, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(87, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 48)(89, "label", 49);
      \u0275\u0275text(90, "Values");
      \u0275\u0275elementStart(91, "span", 50);
      \u0275\u0275text(92, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(93, "tag-input", 52);
      \u0275\u0275elementStart(94, "span", 53);
      \u0275\u0275text(95, "Enter value separated by comma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 54)(97, "div", 55)(98, "span", 56);
      \u0275\u0275text(99, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "input", 57)(101, "label", 58);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 59)(103, "button", 60);
      \u0275\u0275text(104, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "button", 61);
      \u0275\u0275text(106, "Add Variant");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(107, "div", 62)(108, "div", 40)(109, "div", 41)(110, "div", 42)(111, "div", 43)(112, "div", 44)(113, "div", 2)(114, "h4");
      \u0275\u0275text(115, "Edit Variant ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 45)(117, "span", 46);
      \u0275\u0275text(118, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 63)(120, "form")(121, "div", 48)(122, "label", 49);
      \u0275\u0275text(123, "Variant");
      \u0275\u0275elementStart(124, "span", 50);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 48)(128, "label", 49);
      \u0275\u0275text(129, "Values");
      \u0275\u0275elementStart(130, "span", 50);
      \u0275\u0275text(131, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(132, "tag-input", 52);
      \u0275\u0275elementStart(133, "span", 53);
      \u0275\u0275text(134, "Enter value separated by comma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 65)(136, "div", 55)(137, "span", 56);
      \u0275\u0275text(138, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(139, "input", 66)(140, "label", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(141, "div", 59)(142, "button", 60);
      \u0275\u0275text(143, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "button", 61);
      \u0275\u0275text(145, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(146, "div", 68)(147, "div", 40)(148, "div", 41)(149, "div", 42)(150, "div", 69)(151, "span", 70);
      \u0275\u0275element(152, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "h4", 72);
      \u0275\u0275text(154, "Delete Variant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "p", 73);
      \u0275\u0275text(156, "Are you sure you want to delete variant?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 74)(158, "button", 60);
      \u0275\u0275text(159, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "button", 61);
      \u0275\u0275text(161, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 66 : -1);
      \u0275\u0275advance(27);
      \u0275\u0275property("placeholder", "Add new");
      \u0275\u0275advance(39);
      \u0275\u0275property("placeholder", "Add new");
    }
  }, dependencies: [TagInputModule, TagInputComponent, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VarriantAttributesComponent, [{
    type: Component,
    args: [{ selector: "app-varriant-attributes", standalone: true, imports: [TagInputModule, CustomPaginationComponent, FormsModule, MatSortModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Variant Attributes</h4>
      <h6>Manage your variant attributes</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img
      src="assets/img/icons/pdf.svg" alt="img"></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img
      src="assets/img/icons/excel.svg" alt="img"></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Print" matTooltipPosition="above"><i
      class="feather icon-printer feather-rotate-ccw"></i></a>
    </li>
    <li>
      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"
        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i
    class="ti ti-circle-plus me-2"></i> Add Variant</a>
  </div>
</div>
<!-- /product list -->
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div class="search-set">
      <div class="search-input">
        <a href="javascript:void(0);" class="btn btn-searchset"><i d class="feather icon-search feather-search"></i></a>
        <div class="dataTables_filter">
          <label>
            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
              type="search" class="form-control" placeholder="Search" />
            </label>
          </div>
        </div>
    </div>
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
			
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          Status
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table matSort (matSortChange)="sortData($event)" class="table  datanew">
        <thead>
          <tr>
            <th class="no-sort">
                <label class="checkboxs"  (click)="selectAll(initChecked)">
                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                  <span class="checkmarks"></span>
                </label>
              </th>
            <th mat-sort-header="variant">Variant</th>
            <th mat-sort-header="values">Values</th>
            <th mat-sort-header="createdOn">Created Date</th>
            <th mat-sort-header="status">Status</th>
            <th class="no-sort"></th>
          </tr>
        </thead>
        <tbody>
          @for (data of tableData; track data) {
            <tr>
              <td>
                  <label class="checkboxs">
                    <input type="checkbox" [(ngModel)]="data.isSelected">
                    <span class="checkmarks"></span>
                  </label>
                </td>
              <td>{{data.variant}} </td>
              <td>{{data.values}}</td>
              <td>{{data.createdOn}}</td>
              <td><span class="badge table-badge bg-success fw-medium fs-10">{{data.status}}</span></td>
              <td class="action-table-data">
                <div class="edit-delete-action">
                  <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-units">
                    <i class="feather icon-edit feather-edit"></i>
                  </a>
                  <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
                    <i class="feather icon-trash-2 feather-trash-2"></i>
                  </a>
                </div>
              </td>
            </tr>
          } @if (tableData.length === 0) {
                    <tr>
<td colspan="10" class="text-center"> No matching records found </td>
                    </tr>
                }
        </tbody>
      </table>
    </div>
    <app-custom-pagination></app-custom-pagination>
  </div>
</div>
<!-- /product list -->
		<!-- Add Unit -->
		<div class="modal fade" id="add-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Add Variant</h4>
								</div>
								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body custom-modal-bodys">
								<form >
									<div class="mb-3">
										<label class="form-label">Variant<span class="text-danger ms-1">*</span></label>
										<input type="text" class="form-control">
									</div>
									<div class="mb-3">
										<label class="form-label">Values<span class="text-danger ms-1">*</span></label>
                    <tag-input   [placeholder]="'Add new'"></tag-input>
										<span class="tag-text mt-2 d-flex">Enter value separated by comma</span>
									</div>
									<div class="mb-0 mt-4">
										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
											<span class="status-label">Status</span>
											<input type="checkbox" id="user2" class="check" checked="">
											<label for="user2" class="checktoggle"></label>
										</div>
									</div>
				
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Variant</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Unit -->

		<!-- Edit Unit -->
		<div class="modal fade" id="edit-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Edit Variant </h4>
								</div>
								<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form >
									<div class="mb-3">
										<label class="form-label">Variant<span class="text-danger ms-1">*</span></label>
										<input type="text" class="form-control" value="Size">
									</div>
									<div class="mb-3">
										<label class="form-label">Values<span class="text-danger ms-1">*</span></label>
                    <tag-input   [placeholder]="'Add new'"></tag-input>
										<span class="tag-text mt-2 d-flex">Enter value separated by comma</span>
									</div>
									<div class="mb-0 mt-3">
										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
											<span class="status-label">Status</span>
											<input type="checkbox" id="user3" class="check" checked="">
											<label for="user3" class="checktoggle"></label>
										</div>
									</div>
								
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Unit -->
		<!-- delete modal -->
		<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Variant</h4>
								<p class="mb-0 fs-16">Are you sure you want to delete variant?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VarriantAttributesComponent, { className: "VarriantAttributesComponent", filePath: "src/app/features/pages/inventory/varriant-attributes/varriant-attributes.component.ts", lineNumber: 25 });
})();
export {
  VarriantAttributesComponent
};
//# sourceMappingURL=chunk-GE25ZVHU.js.map
