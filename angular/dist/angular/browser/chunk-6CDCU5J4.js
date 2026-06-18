import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  MatTableDataSource,
  MatTableModule
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
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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

// src/app/features/pages/super-admin/domain/domain.component.ts
var _c0 = () => ({ standalone: true });
function DomainComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function DomainComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function DomainComponent_For_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 76)(3, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function DomainComponent_For_95_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 48)(7, "a", 78);
    \u0275\u0275element(8, "img", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 51)(10, "h6", 80)(11, "a", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 81);
    \u0275\u0275element(21, "i", 82);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "div", 83)(25, "a", 84);
    \u0275\u0275element(26, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 86);
    \u0275\u0275element(28, "i", 87);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/company/", data_r2 == null ? null : data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.CompanyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.AccountURL);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.Plan, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.DomainStatus === "Approved" ? "badge-soft-success" : data_r2.DomainStatus === "Rejected" ? "badge-soft-danger" : "badge-soft-skyblue text-gray-9");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.DomainStatus === "Approved" ? "ti-checks" : data_r2.DomainStatus === "Rejected" ? "ti-x" : "ti-clock");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r2.DomainStatus, " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-bs-target", "#" + (data_r2.DomainStatus === "Approved" ? "domain_approved" : data_r2.DomainStatus === "Rejected" ? "domain_rejected" : "domain_pending"));
  }
}
function DomainComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 88);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var DomainComponent = class _DomainComponent {
  data;
  router;
  pagination;
  sidebar;
  routes = routes;
  initChecked = false;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  // pagination variables
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  password = [false, false, false, false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(data, router, pagination, sidebar) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.sidebar = sidebar;
    this.data.getSubscription().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.superadminDomain) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSubscription().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  row = true;
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
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
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
  static \u0275fac = function DomainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainComponent, selectors: [["app-domain"]], decls: 306, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "domain_approved", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "d-flex", "align-items-center"], [1, "badge", "bg-outline-success", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], [1, "ti", "ti-point-filled"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close", "p-0"], [1, "ti", "ti-x"], [1, "modal-body", "pb-0"], [1, "row"], [1, "col-md-12"], [1, "mb-3"], [1, "p-3", "mb-3", "br-5", "bg-transparent-light"], [1, "d-flex", "align-items-center", "file-name-icon"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "border", "avatar-rounded"], ["src", "assets/img/company/company-01.svg", "alt", "img", 1, "img-fluid"], [1, "ms-2"], [1, "fw-medium", "fs-14"], ["href", "javascript:void(0);"], [1, "col-md-4"], [1, "fs-12"], [1, "fw-normal"], ["id", "domain_pending", 1, "modal", "fade"], [1, "badge", "bg-outline-skyblue", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], [1, "col-md-6"], [1, "col-md-6", "text-end"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], [1, "ti", "ti-check", "me-1"], [1, "badge", "badge-danger", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], [1, "ti", "ti-x", "me-1"], ["id", "domain_rejected", 1, "modal", "fade"], [1, "badge", "bg-outline-danger", "d-inline-flex", "align-items-center", "badge-xs", "ms-2"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center"], [1, "avatar", "avatar-xl", "bg-transparent-danger", "rounded-circle", "bg-danger-transparent", "text-danger", "mb-3"], [1, "ti", "ti-trash-x", "fs-36"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "border", "rounded-circle"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "fw-medium"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "me-1", 3, "ngClass"], [1, "action-icon", "d-inline-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "me-2"], [1, "ti", "ti-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], [1, "ti", "ti-trash"], ["colspan", "10", 1, "text-center"]], template: function DomainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your domain");
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
      \u0275\u0275listener("click", function DomainComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, DomainComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, DomainComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "label")(29, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function DomainComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DomainComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "a", 22);
      \u0275\u0275text(33, " Select Plan Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 23)(35, "li")(36, "a", 24);
      \u0275\u0275text(37, "Monthly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 24);
      \u0275\u0275text(40, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 21)(42, "a", 22);
      \u0275\u0275text(43, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "ul", 23)(45, "li")(46, "a", 24);
      \u0275\u0275text(47, "Approve");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 24);
      \u0275\u0275text(50, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 24);
      \u0275\u0275text(53, "Rejected");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 25)(55, "a", 22);
      \u0275\u0275text(56, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "ul", 23)(58, "li")(59, "a", 24);
      \u0275\u0275text(60, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 24);
      \u0275\u0275text(63, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 24);
      \u0275\u0275text(66, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 24);
      \u0275\u0275text(69, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "li")(71, "a", 24);
      \u0275\u0275text(72, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(73, "div", 26)(74, "div", 27)(75, "table", 28)(76, "thead", 29)(77, "tr")(78, "th", 30)(79, "label", 31);
      \u0275\u0275listener("click", function DomainComponent_Template_label_click_79_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(80, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function DomainComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th");
      \u0275\u0275text(85, "Domain URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th");
      \u0275\u0275text(87, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th");
      \u0275\u0275text(89, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th");
      \u0275\u0275text(91, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(92, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "tbody");
      \u0275\u0275repeaterCreate(94, DomainComponent_For_95_Template, 29, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(96, DomainComponent_Conditional_96_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(97, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 34)(99, "div", 35)(100, "div", 36)(101, "div", 37)(102, "h4", 38);
      \u0275\u0275text(103, " Domain Detail ");
      \u0275\u0275elementStart(104, "span", 39);
      \u0275\u0275element(105, "i", 40);
      \u0275\u0275text(106, "Approved ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "button", 41);
      \u0275\u0275element(108, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "form")(110, "div", 43)(111, "div", 44)(112, "div", 45)(113, "div", 46)(114, "div", 47)(115, "div", 44)(116, "div", 45)(117, "div", 48)(118, "a", 49);
      \u0275\u0275element(119, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 51)(121, "h6", 52)(122, "a", 53);
      \u0275\u0275text(123, "BrightWave Innovations");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(124, "div", 54)(125, "div", 46)(126, "span", 55);
      \u0275\u0275text(127, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "h6", 56);
      \u0275\u0275text(129, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 54)(131, "div", 46)(132, "span", 55);
      \u0275\u0275text(133, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "h6", 56);
      \u0275\u0275text(135, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 54)(137, "div", 46)(138, "span", 55);
      \u0275\u0275text(139, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "h6", 56);
      \u0275\u0275text(141, "bwi.example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 54)(143, "div", 46)(144, "span", 55);
      \u0275\u0275text(145, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "h6", 56);
      \u0275\u0275text(147, "200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 54)(149, "div", 46)(150, "span", 55);
      \u0275\u0275text(151, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "h6", 56);
      \u0275\u0275text(153, "12 Sep 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "div", 54)(155, "div", 46)(156, "span", 55);
      \u0275\u0275text(157, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "h6", 56);
      \u0275\u0275text(159, "11 Oct 2024");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(160, "div", 57)(161, "div", 35)(162, "div", 36)(163, "div", 37)(164, "h4", 38);
      \u0275\u0275text(165, " Domain Detail ");
      \u0275\u0275elementStart(166, "span", 58);
      \u0275\u0275element(167, "i", 40);
      \u0275\u0275text(168, "Pending ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "button", 41);
      \u0275\u0275element(170, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "form")(172, "div", 43)(173, "div", 44)(174, "div", 45)(175, "div", 46)(176, "div", 47)(177, "div", 44)(178, "div", 59)(179, "div", 48)(180, "a", 49);
      \u0275\u0275element(181, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 51)(183, "h6", 52)(184, "a", 53);
      \u0275\u0275text(185, "BrightWave Innovations");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(186, "div", 60)(187, "span", 61);
      \u0275\u0275element(188, "i", 62);
      \u0275\u0275text(189, "Approve ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "span", 63);
      \u0275\u0275element(191, "i", 64);
      \u0275\u0275text(192, "Reject ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(193, "div", 54)(194, "div", 46)(195, "span", 55);
      \u0275\u0275text(196, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "h6", 56);
      \u0275\u0275text(198, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(199, "div", 54)(200, "div", 46)(201, "span", 55);
      \u0275\u0275text(202, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "h6", 56);
      \u0275\u0275text(204, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "div", 54)(206, "div", 46)(207, "span", 55);
      \u0275\u0275text(208, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "h6", 56);
      \u0275\u0275text(210, "bwi.example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 54)(212, "div", 46)(213, "span", 55);
      \u0275\u0275text(214, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "h6", 56);
      \u0275\u0275text(216, "200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(217, "div", 54)(218, "div", 46)(219, "span", 55);
      \u0275\u0275text(220, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "h6", 56);
      \u0275\u0275text(222, "12 Sep 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(223, "div", 54)(224, "div", 46)(225, "span", 55);
      \u0275\u0275text(226, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "h6", 56);
      \u0275\u0275text(228, "11 Oct 2024");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(229, "div", 65)(230, "div", 35)(231, "div", 36)(232, "div", 37)(233, "h4", 38);
      \u0275\u0275text(234, "Domain Detail ");
      \u0275\u0275elementStart(235, "span", 66);
      \u0275\u0275element(236, "i", 40);
      \u0275\u0275text(237, "Rejected ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "button", 41);
      \u0275\u0275element(239, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "form")(241, "div", 43)(242, "div", 44)(243, "div", 45)(244, "div", 46)(245, "div", 47)(246, "div", 44)(247, "div", 45)(248, "div", 48)(249, "a", 49);
      \u0275\u0275element(250, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 51)(252, "h6", 52)(253, "a", 53);
      \u0275\u0275text(254, "BrightWave Innovations");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(255, "div", 54)(256, "div", 46)(257, "span", 55);
      \u0275\u0275text(258, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "h6", 56);
      \u0275\u0275text(260, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(261, "div", 54)(262, "div", 46)(263, "span", 55);
      \u0275\u0275text(264, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "h6", 56);
      \u0275\u0275text(266, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "div", 54)(268, "div", 46)(269, "span", 55);
      \u0275\u0275text(270, "Account URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "h6", 56);
      \u0275\u0275text(272, "bwi.example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(273, "div", 54)(274, "div", 46)(275, "span", 55);
      \u0275\u0275text(276, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "h6", 56);
      \u0275\u0275text(278, "200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(279, "div", 54)(280, "div", 46)(281, "span", 55);
      \u0275\u0275text(282, "Register Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "h6", 56);
      \u0275\u0275text(284, "12 Sep 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(285, "div", 54)(286, "div", 46)(287, "span", 55);
      \u0275\u0275text(288, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "h6", 56);
      \u0275\u0275text(290, "11 Oct 2024");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(291, "div", 67)(292, "div", 68)(293, "div", 36)(294, "div", 69)(295, "span", 70);
      \u0275\u0275element(296, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "h4", 72);
      \u0275\u0275text(298, "Confirm Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "p", 46);
      \u0275\u0275text(300, "You want to delete all the marked items, this cant be undone once you delete.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "div", 73)(302, "a", 74);
      \u0275\u0275text(303, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "a", 75);
      \u0275\u0275text(305, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(51);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 96 : -1);
    }
  }, dependencies: [CommonModule, NgClass, MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainComponent, [{
    type: Component,
    args: [{ selector: "app-domain", standalone: true, imports: [CommonModule, MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4>Domain</h4>
            <h6>Manage your domain</h6>
        </div>
    </div>
    <ul class="table-top-head">
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">
              <i class="ti ti-refresh"></i>
            </a>
          </li>
          <li>
            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">
               @if (!isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }
            @if (isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }</a>
          </li>
    </ul>
</div>

<!-- /product list -->
<div class="card table-list-card">
    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set">
            <div class="search-input">
                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
                <div class="dataTables_filter">
                  <label>
                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
                      type="search" class="form-control" placeholder="Search" />
                    </label>
                  </div>
                </div>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Select Plan Type
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Monthly</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Yearly</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Select Status
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Approve</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Rejected</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Sort By : Last 7 Days
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="custom-datatable-filter table-responsive">
            <table class="table datatable">
                <thead class="thead-light">
                    <tr>
                        <th class="no-sort">
                            <label class="checkboxs" (click)="selectAll(initChecked)">
                              <input type="checkbox" id="select-all" [(ngModel)]="initChecked">
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                        <th>Name</th>
                        <th>Domain URL</th>
                        <th>Plan</th>
                        <th>Created Date</th>
                        <th>Status</th>
                        <th></th>
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
                      <td>
                                              <div class="d-flex align-items-center file-name-icon">
                                                  <a href="javascript:void(0);" class="avatar avatar-md border rounded-circle">
                                                      <img src="assets/img/company/{{data?.Image}}" class="img-fluid" alt="img">
                                                  </a>
                                                  <div class="ms-2">
                                                      <h6 class="fw-medium"><a href="javascript:void(0);">{{data.CompanyName}}</a></h6>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>{{data.AccountURL}}</td>
                                          <td>
                                              {{data.Plan}}
                                          </td>
                                          <td>{{data.CreatedDate}}</td>
                                          <td>
                                              <span class="badge d-inline-flex align-items-center badge-xs" [ngClass]="data.DomainStatus === 'Approved'? 'badge-soft-success': data.DomainStatus === 'Rejected'? 'badge-soft-danger':('badge-soft-skyblue text-gray-9')">
                                                  <i class="ti me-1" [ngClass]="data.DomainStatus === 'Approved'? 'ti-checks': data.DomainStatus === 'Rejected'? 'ti-x':'ti-clock'"></i>{{data.DomainStatus}}
                                              </span>
                                          </td>
                                          <td>
                                            <div class="action-icon d-inline-flex align-items-center">
                                                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded me-2" data-bs-toggle="modal" [attr.data-bs-target]="'#' + (data.DomainStatus === 'Approved' ? 'domain_approved' : data.DomainStatus === 'Rejected' ? 'domain_rejected' : 'domain_pending')"><i class="ti ti-eye"></i></a>
                                                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                                            </div>
                                          </td>
                    </tr>
                    }
                    @if (tableData.length === 0) {
                    <tr>
                      <td colspan="10" class="text-center"> No matching records found </td>
                    </tr>
                    }
                  </tbody>
            </table>
        </div>
        <app-custom-pagination/>
    </div>
</div>
<!-- /product list -->



		<!-- Domain Details -->
		<div class="modal fade" id="domain_approved">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title d-flex align-items-center">
							Domain Detail
							<span class="badge bg-outline-success d-inline-flex align-items-center badge-xs ms-2">
								<i class="ti ti-point-filled"></i>Approved
							</span>
						</h4>
						<button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
							<i class="ti ti-x"></i>
						</button>
					</div>
					<form >
						<div class="modal-body pb-0">
							<div class="row">
								<div class="col-md-12">
									<div class="mb-3">
										<div class="p-3 mb-3 br-5 bg-transparent-light">
											<div class="row">
												<div class="col-md-12">
													<div class="d-flex align-items-center file-name-icon">
														<a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
															<img src="assets/img/company/company-01.svg" class="img-fluid" alt="img">
														</a>
														<div class="ms-2">
															<h6 class="fw-medium fs-14"><a href="javascript:void(0);">BrightWave Innovations</a></h6>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>	
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Plan Name</span>
										<h6 class="fw-normal">Advanced</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Plan Type</span>
										<h6 class="fw-normal">Monthly</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Account URL</span>
										<h6 class="fw-normal">bwi.example.com</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Price</span>
										<h6 class="fw-normal">200</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Register Date</span>
										<h6 class="fw-normal">12 Sep 2024</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Expiring On</span>
										<h6 class="fw-normal">11 Oct 2024</h6>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Domain Details -->
		 
		<!-- Domain Details -->
		<div class="modal fade" id="domain_pending">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title d-flex align-items-center">
							Domain Detail
							<span class="badge bg-outline-skyblue d-inline-flex align-items-center badge-xs ms-2">
								<i class="ti ti-point-filled"></i>Pending
							</span>
						</h4>
						<button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
							<i class="ti ti-x"></i>
						</button>
					</div>
					<form >
						<div class="modal-body pb-0">
							<div class="row">
								<div class="col-md-12">
									<div class="mb-3">
										<div class="p-3 mb-3 br-5 bg-transparent-light">
											<div class="row">
												<div class="col-md-6">
													<div class="d-flex align-items-center file-name-icon">
														<a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
															<img src="assets/img/company/company-01.svg" class="img-fluid" alt="img">
														</a>
														<div class="ms-2">
															<h6 class="fw-medium fs-14"><a href="javascript:void(0);">BrightWave Innovations</a></h6>															
														</div>
													</div>
												</div>
												<div class="col-md-6 text-end">
													<span class="badge badge-success d-inline-flex align-items-center badge-xs ms-2">
														<i class="ti ti-check me-1"></i>Approve
													</span>
													<span class="badge badge-danger d-inline-flex align-items-center badge-xs ms-2">
														<i class="ti ti-x me-1"></i>Reject
													</span>
												</div>
											</div>
										</div>
									</div>	
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Plan Name</span>
										<h6 class="fw-normal">Advanced</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Plan Type</span>
										<h6 class="fw-normal">Monthly</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Account URL</span>
										<h6 class="fw-normal">bwi.example.com</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Price</span>
										<h6 class="fw-normal">200</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Register Date</span>
										<h6 class="fw-normal">12 Sep 2024</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Expiring On</span>
										<h6 class="fw-normal">11 Oct 2024</h6>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Domain Details -->
		 
		<!-- Domain Details -->
		<div class="modal fade" id="domain_rejected">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title d-flex align-items-center">Domain Detail
							<span class="badge bg-outline-danger d-inline-flex align-items-center badge-xs ms-2">
							<i class="ti ti-point-filled"></i>Rejected
						</span></h4>
						<button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
							<i class="ti ti-x"></i>
						</button>
					</div>
					<form >
						<div class="modal-body pb-0">
							<div class="row">
								<div class="col-md-12">
									<div class="mb-3">
										<div class="p-3 mb-3 br-5 bg-transparent-light">
											<div class="row">
												<div class="col-md-12">
													<div class="d-flex align-items-center file-name-icon">
														<a href="javascript:void(0);" class="avatar avatar-md border avatar-rounded">
															<img src="assets/img/company/company-01.svg" class="img-fluid" alt="img">
														</a>
														<div class="ms-2">
															<h6 class="fw-medium fs-14"><a href="javascript:void(0);">BrightWave Innovations</a></h6>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>	
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Plan Name</span>
										<h6 class="fw-normal">Advanced</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Plan Type</span>
										<h6 class="fw-normal">Monthly</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Account URL</span>
										<h6 class="fw-normal">bwi.example.com</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Price</span>
										<h6 class="fw-normal">200</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Register Date</span>
										<h6 class="fw-normal">12 Sep 2024</h6>
									</div>
								</div>
								<div class="col-md-4">
									<div class="mb-3">
										<span class="fs-12">Expiring On</span>
										<h6 class="fw-normal">11 Oct 2024</h6>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Domain Details -->

		<!-- Delete Modal -->
		<div class="modal fade" id="delete_modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body text-center">
						<span class="avatar avatar-xl bg-transparent-danger rounded-circle bg-danger-transparent text-danger mb-3">
							<i class="ti ti-trash-x fs-36"></i>
						</span>
						<h4 class="mb-1">Confirm Delete</h4>
						<p class="mb-3">You want to delete all the marked items, this cant be undone once you delete.</p>
						<div class="d-flex justify-content-center">
							<a href="javascript:void(0);" class="btn btn-secondary me-3" data-bs-dismiss="modal">Cancel</a>
							<a href="javascript:void(0);" class="btn btn-primary">Yes, Delete</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Delete Modal -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainComponent, { className: "DomainComponent", filePath: "src/app/features/pages/super-admin/domain/domain.component.ts", lineNumber: 23 });
})();
export {
  DomainComponent
};
//# sourceMappingURL=chunk-6CDCU5J4.js.map
