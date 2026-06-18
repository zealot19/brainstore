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

// src/app/features/pages/inventory/brand-list/brand-list.component.ts
var _c0 = () => ({ standalone: true });
function BrandListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function BrandListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function BrandListComponent_For_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 34);
    \u0275\u0275listener("click", function BrandListComponent_For_82_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function BrandListComponent_For_82_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 89)(7, "a", 90);
    \u0275\u0275element(8, "img", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 92);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 93);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 94)(17, "div", 95)(18, "a", 96);
    \u0275\u0275element(19, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 98);
    \u0275\u0275element(21, "i", 99);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("./assets/img/brand/", data_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.createdOn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.status);
  }
}
function BrandListComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 100);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var BrandListComponent = class _BrandListComponent {
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
        if (this.router.url == this.routes.brandList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBrandList().subscribe((apiRes) => {
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
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Brand" },
    { value: "Lenevo" },
    { value: "Boat" },
    { value: "Nike" }
  ];
  selectedList3 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
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
  static \u0275fac = function BrandListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandListComponent, selectors: [["app-brand-list"]], decls: 190, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-brand", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive", "brand-table"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "brand"], ["mat-sort-header", "createdOn"], ["mat-sort-header", "status"], ["id", "add-brand", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body", "new-employee-field"], [1, "profile-pic-upload", "mb-3"], [1, "profile-pic", "brand-pic"], [1, "ti", "ti-circle-plus", "plus-down-add"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mt-2"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-brand", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "bg-danger", "text-white", "fs-16"], ["src", "assets/img/brand/brand-icon-02.png", "alt", "Img"], ["href", "javascript:void(0);", 1, "remove-photo"], [1, "feather", "icon-x", "x-square-add", "text-white"], [1, "text-danger", "ms-1"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "bg-light-900", "p-1", "me-2"], ["alt", "img", 1, "object-fit-contain", 3, "src"], ["href", "javascript:void(0);"], [1, "badge", "table-badge", "bg-success", "fw-medium", "fs-10"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-brand", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "10", 1, "text-center"]], template: function BrandListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your brands");
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
      \u0275\u0275listener("click", function BrandListComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, BrandListComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, BrandListComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Brand");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function BrandListComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BrandListComponent_Template_input_ngModelChange_33_listener() {
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
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 28)(46, "a", 25);
      \u0275\u0275text(47, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 26)(49, "li")(50, "a", 27);
      \u0275\u0275text(51, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 27);
      \u0275\u0275text(54, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(64, "div", 29)(65, "div", 30)(66, "table", 31);
      \u0275\u0275listener("matSortChange", function BrandListComponent_Template_table_matSortChange_66_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(67, "thead", 32)(68, "tr")(69, "th", 33)(70, "label", 34);
      \u0275\u0275listener("click", function BrandListComponent_Template_label_click_70_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(71, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function BrandListComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "th", 37);
      \u0275\u0275text(74, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 38);
      \u0275\u0275text(76, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 39);
      \u0275\u0275text(78, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "tbody");
      \u0275\u0275repeaterCreate(81, BrandListComponent_For_82_Template, 22, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(83, BrandListComponent_Conditional_83_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(84, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 40)(86, "div", 41)(87, "div", 42)(88, "div", 43)(89, "div", 44)(90, "div", 45)(91, "div", 2)(92, "h4");
      \u0275\u0275text(93, "Add Brand");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "button", 46)(95, "span", 47);
      \u0275\u0275text(96, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 48)(98, "form")(99, "div", 49)(100, "div", 50)(101, "span");
      \u0275\u0275element(102, "i", 51);
      \u0275\u0275text(103, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div")(105, "div", 52);
      \u0275\u0275element(106, "input", 53);
      \u0275\u0275elementStart(107, "div", 54)(108, "h4");
      \u0275\u0275text(109, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "p", 55);
      \u0275\u0275text(111, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 56)(113, "label", 57);
      \u0275\u0275text(114, "Brand");
      \u0275\u0275elementStart(115, "span", 58);
      \u0275\u0275text(116, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(117, "input", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 60)(119, "div", 61)(120, "span", 62);
      \u0275\u0275text(121, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "input", 63)(123, "label", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 65)(125, "button", 66);
      \u0275\u0275text(126, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "button", 67);
      \u0275\u0275text(128, " Add Brand ");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(129, "div", 68)(130, "div", 69)(131, "div", 42)(132, "div", 43)(133, "div", 44)(134, "div", 70)(135, "div", 2)(136, "h4");
      \u0275\u0275text(137, "Edit Brand");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "button", 71)(139, "span", 47);
      \u0275\u0275text(140, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "div", 48)(142, "form")(143, "div", 49)(144, "div", 50)(145, "span");
      \u0275\u0275element(146, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "a", 73);
      \u0275\u0275element(148, "i", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div")(150, "div", 52);
      \u0275\u0275element(151, "input", 53);
      \u0275\u0275elementStart(152, "div", 54)(153, "h4");
      \u0275\u0275text(154, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "p", 55);
      \u0275\u0275text(156, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "div", 56)(158, "label", 57);
      \u0275\u0275text(159, "Brand");
      \u0275\u0275elementStart(160, "span", 75);
      \u0275\u0275text(161, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(162, "input", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 60)(164, "div", 61)(165, "span", 62);
      \u0275\u0275text(166, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(167, "input", 76)(168, "label", 77);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(169, "div", 78)(170, "button", 79);
      \u0275\u0275text(171, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "button", 80);
      \u0275\u0275text(173, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(174, "div", 81)(175, "div", 69)(176, "div", 42)(177, "div", 43)(178, "div", 82)(179, "span", 83);
      \u0275\u0275element(180, "i", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "h4", 85);
      \u0275\u0275text(182, "Delete Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "p", 86);
      \u0275\u0275text(184, "Are you sure you want to delete brand?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 87)(186, "button", 79);
      \u0275\u0275text(187, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "button", 80);
      \u0275\u0275text(189, "Yes Delete");
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
      \u0275\u0275advance(38);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 83 : -1);
    }
  }, dependencies: [MatSelectModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandListComponent, [{
    type: Component,
    args: [{ selector: "app-brand-list", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Brand</h4>\n      <h6>Manage your brands</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Pdf"\n        matTooltip="Pdf"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/pdf.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Excel"\n        matTooltip="Excel"\n        matTooltipPosition="above"\n        ><img src="assets/img/icons/excel.svg" alt="img"\n      /></a>\n    </li>\n    <li>\n      <a\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Refresh"\n        matTooltip="Refresh"\n        matTooltipPosition="above"\n        ><i class="ti ti-refresh"></i\n      ></a>\n    </li>\n    <li>\n      <a\n        (click)="toggleCollapse()" [class.active]="isCollapsed"\n        data-bs-toggle="tooltip"\n        data-bs-placement="top"\n        title="Collapse"\n        matTooltip="Collapse"\n        matTooltipPosition="above"\n        id="collapse-header"\n        > @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a\n      href="javascript:void(0);"\n      class="btn btn-primary"\n      data-bs-toggle="modal"\n      data-bs-target="#add-brand"\n      ><i class="ti ti-circle-plus me-2"></i>Add Brand</a\n      >\n    </div>\n  </div>\n  <!-- /product list -->\n  <div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div class="search-set">\n        <div class="search-input">\n          <a href="javascript:void(0);" class="btn btn-searchset"\n            ><i class="feather icon-search feather-search"></i\n          ></a>\n          <div class="dataTables_filter">\n            <label>\n              <input\n                [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="searchData(searchDataValue)"\n                type="search"\n                class="form-control"\n                placeholder="Search"\n                />\n              </label>\n            </div>\n          </div>\n      </div>\n      <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n			\n  \n        <div class="dropdown me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Status\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n            </li>\n          </ul>\n        </div>\n        <div class="dropdown">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Sort By : Last 7 Days\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>	\n    <div class="card-body">\n          <div class="table-responsive brand-table">\n            <table\n              class="table datatable "\n              (matSortChange)="sortData($event)"\n              matSort\n              matSortActive="Sno"\n              matSortDirection="asc"\n              matSortDisableClear\n              >\n              <thead class="thead-light">\n                <tr>\n                  <th class="no-sort">\n                    <label class="checkboxs" (click)="selectAll(initChecked)">\n                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>\n                      <span class="checkmarks"></span>\n                    </label>\n                  </th>\n                  <th mat-sort-header="brand">Brand</th>\n                  <th mat-sort-header="createdOn">Created On</th>\n                  <th mat-sort-header="status">Status</th>\n                  <th class="no-sort">\n\n\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (data of tableData; track data) {\n                  <tr>\n                    <td>\n                      <label class="checkboxs" (click)="selectAll(initChecked)">\n                        <input type="checkbox"  [(ngModel)]="initChecked"/>\n                        <span class="checkmarks"></span>\n                      </label>\n                    </td>\n                    <td>\n                      <div class="d-flex align-items-center">\n                        <a href="javascript:void(0);" class="avatar avatar-md bg-light-900 p-1 me-2">\n                          <img class="object-fit-contain" src="./assets/img/brand/{{data.img}}" alt="img">\n                        </a>\n                        <a href="javascript:void(0);">{{ data.brand }}</a>\n                      </div>\n                    </td>\n                    <td>{{ data.createdOn }}</td>\n                    <td>\n                      <span class="badge table-badge bg-success fw-medium fs-10">{{data.status}}</span>\n                    </td>\n                    <td class="action-table-data">\n                      <div class="edit-delete-action">\n                        <a\n                          class="me-2 p-2"\n                          href="javascript:void(0);"\n                          data-bs-toggle="modal"\n                          data-bs-target="#edit-brand"\n                          >\n                          <i class="feather icon-edit feather-edit"></i>\n                        </a>\n                        <a\n                          class=" p-2"\n                          href="javascript:void(0);"\n                          data-bs-toggle="modal" data-bs-target="#delete-modal"\n                          >\n                          <i class="feather icon-trash-2 feather-trash-2"></i>\n                        </a>\n                      </div>\n                    </td>\n                  </tr>\n                } \n                @if (tableData.length === 0) {\n                    <tr>\n<td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n          <app-custom-pagination></app-custom-pagination>\n        </div>\n      </div>\n      <!-- /product list -->\n\n      <!-- Add Brand -->\n      <div class="modal fade" id="add-brand">\n        <div class="modal-dialog modal-dialog-centered custom-modal-two">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header border-0 custom-modal-header">\n                  <div class="page-title">\n                    <h4>Add Brand</h4>\n                  </div>\n                  <button\n                    type="button"\n                    class="close"\n                    data-bs-dismiss="modal"\n                    aria-label="Close"\n                    >\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body custom-modal-body new-employee-field">\n                  <form>\n                    \n                    <div class="profile-pic-upload mb-3">\n                      <div class="profile-pic brand-pic">\n                        <span\n                          ><i class="ti ti-circle-plus plus-down-add"></i> Add\n                          Image</span\n                          >\n                        </div>\n                        <div>\n                          <div class="image-upload mb-0">\n                            <input type="file" />\n                            <div class="image-uploads">\n                              <h4>Upload Image</h4>\n                            </div>\n                          </div>\n                          <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                        </div>\n                        </div>\n                      <div class="mb-3">\n                        <label class="form-label">Brand<span class="text-danger">*</span></label>\n                        <input type="text" class="form-control" />\n                      </div>\n                      <div class="mb-0">\n                        <div\n                          class="status-toggle modal-status d-flex justify-content-between align-items-center"\n                          >\n                          <span class="status-label">Status</span>\n                          <input type="checkbox" id="user2" class="check" checked="" />\n                          <label for="user2" class="checktoggle"></label>\n                        </div>\n                      </div>\n                      <div class="modal-footer-btn">\n                        <button\n                          type="button"\n                          class="btn btn-secondary me-2"\n                          data-bs-dismiss="modal"\n                          >\n                          Cancel\n                        </button>\n                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">\n                          Add Brand\n                        </button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /Add Brand -->\n\n			<!-- Edit Brand -->\n			<div class="modal fade" id="edit-brand">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="page-wrapper-new p-0">\n							<div class="content">\n								<div class="modal-header">\n									<div class="page-title">\n										<h4>Edit Brand</h4>\n									</div>\n									<button type="button" class="close bg-danger text-white fs-16" data-bs-dismiss="modal" aria-label="Close">\n										<span aria-hidden="true">&times;</span>\n									</button>\n								</div>\n								<div class="modal-body custom-modal-body new-employee-field">\n									<form>\n										<div class="profile-pic-upload mb-3">\n											<div class="profile-pic brand-pic">\n												<span><img src="assets/img/brand/brand-icon-02.png" alt="Img"></span>\n												<a href="javascript:void(0);" class="remove-photo"><i class="feather icon-x x-square-add text-white"></i></a>\n											</div>\n											<div>\n											<div class="image-upload mb-0">\n												<input type="file">\n												<div class="image-uploads">\n													<h4>Change Image</h4>\n												</div>\n											</div>\n											<p class="mt-2">JPEG, PNG up to 2 MB</p>\n										</div>\n										</div>\n										<div class="mb-3">\n											<label class="form-label">Brand<span class="text-danger ms-1">*</span></label>\n											<input type="text" class="form-control">\n										</div>\n										<div class="mb-0">\n											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n												<span class="status-label">Status</span>\n												<input type="checkbox" id="user4" class="check" checked="">\n												<label for="user4" class="checktoggle"></label>\n											</div>\n										</div>\n							\n									</form>\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- Edit Brand -->\n\n				<!-- delete modal -->\n				<div class="modal fade" id="delete-modal">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="page-wrapper-new p-0">\n								<div class="content p-5 px-3 text-center">\n										<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n										<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Brand</h4>\n										<p class="mb-0 fs-16">Are you sure you want to delete brand?</p>\n										<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n											<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n											<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n										</div>						\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandListComponent, { className: "BrandListComponent", filePath: "src/app/features/pages/inventory/brand-list/brand-list.component.ts", lineNumber: 26 });
})();
export {
  BrandListComponent
};
//# sourceMappingURL=chunk-RN42QVYF.js.map
