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
  BsDatepickerModule
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  Router,
  RouterLink
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

// src/app/features/pages/application/ecommerce/orders/orders.component.ts
var _c0 = () => ({ standalone: true });
function OrdersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function OrdersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function OrdersComponent_For_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 32);
    \u0275\u0275listener("click", function OrdersComponent_For_139_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll(ctx_r1.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_For_139_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 87)(9, "span", 88)(10, "a", 89);
    \u0275\u0275element(11, "img", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 89);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 91);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 92)(24, "div", 93)(25, "a", 94);
    \u0275\u0275element(26, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 96);
    \u0275\u0275element(28, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 98);
    \u0275\u0275element(30, "i", 99);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.orderId);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r3.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.paymentType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.dateTime);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r3.status === "Complete" ? "badge-success" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.invoiceDetails);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.editProduct);
  }
}
function OrdersComponent_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 100);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var OrdersComponent = class _OrdersComponent {
  data;
  pagination;
  router;
  sidebar;
  routes = routes;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  initChecked = false;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue6 = "";
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
        if (this.router.url == this.routes.orders) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getOrders().subscribe((apiRes) => {
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
  filter = false;
  openFilter() {
    this.filter = !this.filter;
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
  static \u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], decls: 261, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "custom-datatable-filter", "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks", "ms-1"], ["mat-sort-header", "orderId"], [1, "ti", "ti-arrows-up-down", "fs-11", "fw-medium", "ms-1"], ["mat-sort-header", "name"], ["mat-sort-header", "paymentType"], ["mat-sort-header", "amount"], ["mat-sort-header", "dateTime"], ["mat-sort-header", "status"], ["id", "view-notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-top"], [1, "row"], [1, "col-12"], [1, "input-blocks"], [1, "ms-1", "text-danger"], [1, "select"], [1, "col-sm-6", "col-12"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "modal-footer-btn", "download-file"], ["href", "javascript:void(0)", 1, "btn", "btn-submit"], [1, "col-lg-12"], [1, "input-blocks", "image-upload-down"], [1, "image-upload", "download"], ["type", "file"], [1, "image-uploads"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-3", "input-blocks"], [1, "form-control"], [1, "mt-1"], [1, "modal-btns"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2", "p-2", "px-3"], ["type", "submit", 1, "btn", "btn-submit", "p-2", "px-3"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], [1, "userimgname"], [1, "avatar", "avatar-md", "me-2"], ["href", "javascript:void(0);"], ["alt", "product", 3, "src"], [1, "badges", "status-badge", "fs-10", "p-1", "px-2", "rounded-1", 3, "ngClass"], [1, "d-flex"], [1, "edit-delete-action", "d-flex", "align-items-center"], [1, "me-2", "edit-icon", "d-flex", "align-items-center", "border", "rounded", "p-2", 3, "routerLink"], ["data-feather", "eye", 1, "feather", "icon-eye"], [1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "routerLink"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Order List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your orders");
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
      \u0275\u0275listener("click", function OrdersComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, OrdersComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, OrdersComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "a", 17);
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19)(28, "label")(29, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_29_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "a", 23);
      \u0275\u0275text(33, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 24)(35, "li")(36, "a", 25);
      \u0275\u0275text(37, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 25);
      \u0275\u0275text(40, "Beats Pro ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 25);
      \u0275\u0275text(43, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 25);
      \u0275\u0275text(46, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 22)(48, "a", 23);
      \u0275\u0275text(49, " Created By ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul", 24)(51, "li")(52, "a", 25);
      \u0275\u0275text(53, "James Kirwin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 25);
      \u0275\u0275text(56, "Francis Chang");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 25);
      \u0275\u0275text(59, "Antonio Engle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 25);
      \u0275\u0275text(62, "Leo Kelly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 22)(64, "a", 23);
      \u0275\u0275text(65, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "ul", 24)(67, "li")(68, "a", 25);
      \u0275\u0275text(69, "Computers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "li")(71, "a", 25);
      \u0275\u0275text(72, "Electronics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 25);
      \u0275\u0275text(75, "Shoe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 25);
      \u0275\u0275text(78, "Electronics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 22)(80, "a", 23);
      \u0275\u0275text(81, " Brand ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "ul", 24)(83, "li")(84, "a", 25);
      \u0275\u0275text(85, "Lenovo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 25);
      \u0275\u0275text(88, "Beats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 25);
      \u0275\u0275text(91, "Nike");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a", 25);
      \u0275\u0275text(94, "Apple");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "div", 26)(96, "a", 23);
      \u0275\u0275text(97, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "ul", 24)(99, "li")(100, "a", 25);
      \u0275\u0275text(101, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "li")(103, "a", 25);
      \u0275\u0275text(104, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "li")(106, "a", 25);
      \u0275\u0275text(107, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "li")(109, "a", 25);
      \u0275\u0275text(110, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "a", 25);
      \u0275\u0275text(113, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(114, "div", 27)(115, "div", 28)(116, "table", 29);
      \u0275\u0275listener("matSortChange", function OrdersComponent_Template_table_matSortChange_116_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(117, "thead", 30)(118, "tr")(119, "th", 31)(120, "label", 32);
      \u0275\u0275listener("click", function OrdersComponent_Template_label_click_120_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(121, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_121_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "th", 35);
      \u0275\u0275text(124, "Order ID ");
      \u0275\u0275element(125, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th", 37);
      \u0275\u0275text(127, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th", 38);
      \u0275\u0275text(129, "Payment Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th", 39);
      \u0275\u0275text(131, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th", 40);
      \u0275\u0275text(133, "Date & Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "th", 41);
      \u0275\u0275text(135, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(136, "th", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "tbody");
      \u0275\u0275repeaterCreate(138, OrdersComponent_For_139_Template, 31, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(140, OrdersComponent_Conditional_140_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(141, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 42)(143, "div", 43)(144, "div", 44)(145, "div", 45)(146, "div", 46)(147, "div", 47)(148, "div", 2)(149, "h4");
      \u0275\u0275text(150, "Import Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "button", 48)(152, "span", 49);
      \u0275\u0275text(153, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "div", 50)(155, "form")(156, "div", 51)(157, "div", 52)(158, "div", 53)(159, "div", 54)(160, "label");
      \u0275\u0275text(161, "Product");
      \u0275\u0275elementStart(162, "span", 55);
      \u0275\u0275text(163, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "select", 56)(165, "option");
      \u0275\u0275text(166, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "option");
      \u0275\u0275text(168, "Bold V3.2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "option");
      \u0275\u0275text(170, "Nike Jordan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "option");
      \u0275\u0275text(172, "Iphone 14 Pro");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(173, "div", 57)(174, "div", 54)(175, "label");
      \u0275\u0275text(176, "Category");
      \u0275\u0275elementStart(177, "span", 55);
      \u0275\u0275text(178, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "select", 56)(180, "option");
      \u0275\u0275text(181, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "option");
      \u0275\u0275text(183, "Laptop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "option");
      \u0275\u0275text(185, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "option");
      \u0275\u0275text(187, "Shoe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(188, "div", 57)(189, "div", 54)(190, "label");
      \u0275\u0275text(191, "Sub Category");
      \u0275\u0275elementStart(192, "span", 55);
      \u0275\u0275text(193, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "select", 56)(195, "option");
      \u0275\u0275text(196, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "option");
      \u0275\u0275text(198, "Lenovo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "option");
      \u0275\u0275text(200, "Bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "option");
      \u0275\u0275text(202, "Nike");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(203, "div", 58)(204, "div", 52)(205, "div")(206, "div", 59)(207, "a", 60);
      \u0275\u0275text(208, "Download Sample File");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(209, "div", 61)(210, "div", 62)(211, "label");
      \u0275\u0275text(212, "	Upload CSV File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 63);
      \u0275\u0275element(214, "input", 64);
      \u0275\u0275elementStart(215, "div", 65);
      \u0275\u0275element(216, "img", 66);
      \u0275\u0275elementStart(217, "h4");
      \u0275\u0275text(218, "Drag and drop a ");
      \u0275\u0275elementStart(219, "span");
      \u0275\u0275text(220, "file to upload");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(221, "div", 58)(222, "div", 67)(223, "label", 68);
      \u0275\u0275text(224, "Created by");
      \u0275\u0275elementStart(225, "span", 55);
      \u0275\u0275text(226, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(227, "input", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(228, "div", 52)(229, "div", 61)(230, "div", 70)(231, "label", 68);
      \u0275\u0275text(232, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(233, "textarea", 71);
      \u0275\u0275elementStart(234, "p", 72);
      \u0275\u0275text(235, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(236, "div", 73)(237, "div", 52)(238, "div", 61)(239, "div", 74)(240, "button", 75);
      \u0275\u0275text(241, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "button", 76);
      \u0275\u0275text(243, "Submit");
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(244, "div", 77)(245, "div", 43)(246, "div", 44)(247, "div", 78)(248, "div", 79)(249, "form")(250, "div", 80);
      \u0275\u0275element(251, "i", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "h3", 82);
      \u0275\u0275text(253, "Delete Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "p", 83);
      \u0275\u0275text(255, "Are you sure you want to delete order from order list?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "div", 84)(257, "button", 85);
      \u0275\u0275text(258, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "button", 86);
      \u0275\u0275text(260, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
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
      \u0275\u0275advance(92);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 140 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, BsDatepickerModule, MatSelectModule, CustomPaginationComponent, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersComponent, [{
    type: Component,
    args: [{ selector: "app-orders", imports: [CommonModule, FormsModule, MatSortModule, BsDatepickerModule, MatSelectModule, CustomPaginationComponent, RouterLink], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4 class="fw-bold">Order List</h4>
            <h6>Manage your orders</h6>
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
                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"
                        (ngModelChange)="searchData(searchDataValue)" type="search" class="form-control"
                        placeholder="Search" />
                    </label>
                  </div>
                </div>
        </div>
        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Product
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple Series 5 Watch</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Created By
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">James Kirwin</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Francis Chang</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Antonio Engle</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Leo Kelly</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Category
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Brand
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple</a>
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
            <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"
                    matSortDirection="asc" matSortDisableClear>
                    <thead class="thead-light">
                    <tr>
                        <th class="no-sort">
                        <label class="checkboxs" (click)="selectAll(initChecked)">
                            <input type="checkbox" id="select-all" [(ngModel)]="initChecked">
                            <span class="checkmarks ms-1"></span>
                        </label>
                        </th>
                        <th mat-sort-header="orderId">Order ID <i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>
                        <th mat-sort-header="name">Customer</th>   
                        <th mat-sort-header="paymentType">Payment Type</th>
                        <th mat-sort-header="amount">Amount</th>
                        <th mat-sort-header="dateTime">Date & Time</th>
                        <th mat-sort-header="status">Status</th>
                        <th class="no-sort"></th>
                    </tr>
                </thead>
                <tbody>
                    @for (data of tableData; track data) {
                    <tr>
                        <td>
                            <label class="checkboxs" (click)="selectAll(initChecked)">
                                <input type="checkbox" id="select-all" [(ngModel)]="initChecked">
                                <span class="checkmarks ms-1"></span>
                            </label>
                        </td>
                        <td>{{data.orderId}}</td>
                        <td>
                            <div class="userimgname">
                                <span class="avatar avatar-md me-2">
                                    <a href="javascript:void(0);" >
                                        <img src="assets/img/users/{{data.avatar}}" alt="product">
                                    </a>
                                </span>
                                <a href="javascript:void(0);">{{data.name}}</a>
                            </div>
                        </td>
                        <td>{{data.paymentType}}</td>
                        <td>{{data.amount}}</td>
                        <td>{{data.dateTime}}</td>
                        <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1" [ngClass]="data.status==='Complete'?'badge-success':''">{{data.status}}</span></td>
                        <td class="d-flex">
                            <div class="edit-delete-action d-flex align-items-center">
                                <a class="me-2 edit-icon  d-flex align-items-center border rounded p-2" [routerLink]="routes.invoiceDetails">
                                    <i data-feather="eye" class="feather icon-eye"></i>
                                </a>
                                <a class="me-2 p-2 d-flex align-items-center border rounded" [routerLink]="routes.editProduct" >
                                    <i data-feather="edit" class="feather icon-edit"></i>
                                </a>
                                <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                    }@if(tableData.length === 0){
                        <tr>
                            <td class="text-center" colspan="12">No Matching Data Found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
        <app-custom-pagination></app-custom-pagination>
    </div>
</div>
<!-- /product list -->




		<!-- Import Product -->
		<div class="modal fade" id="view-notes">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Import Product</h4>
								</div>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="modal-top">
									<div class="row">
										<div class="col-12">
											<div class="input-blocks">
												<label>Product<span class="ms-1 text-danger">*</span></label>
												<select class="select">
													<option>Select</option>
													<option>Bold V3.2</option>
													<option>Nike Jordan</option>
													<option>Iphone 14 Pro</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6 col-12">
											<div class="input-blocks">
												<label>Category<span class="ms-1 text-danger">*</span></label>
												<select class="select">
													<option>Select</option>
													<option>Laptop</option>
													<option>Electronics</option>
													<option>Shoe</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6 col-12">
											<div class="input-blocks">
												<label>Sub Category<span class="ms-1 text-danger">*</span></label>
												<select class="select">
													<option>Select</option>
													<option>Lenovo</option>
													<option>Bolt</option>
													<option>Nike</option>
												</select>
											</div>
										</div>
										<div class="col-lg-12 col-sm-6 col-12">
											<div class="row">
												<div>
													<div class="modal-footer-btn download-file">
														<a href="javascript:void(0)" class="btn btn-submit">Download Sample File</a>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="input-blocks image-upload-down">
												<label>	Upload CSV File</label>
												<div class="image-upload download">
													<input type="file">
													<div class="image-uploads">
														<img src="assets/img/download-img.png" alt="img">
														<h4>Drag and drop a <span>file to upload</span></h4>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-12 col-sm-6 col-12">
											<div class="mb-3">
												<label class="form-label">Created by<span class="ms-1 text-danger">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
									</div>
									<div class="row">
									<div class="col-lg-12">
										<div class="mb-3 input-blocks">
											<label class="form-label">Description</label>
											<textarea class="form-control"></textarea>
											<p class="mt-1">Maximum 60 Characters</p>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-btns">
								<div class="row">
									<div class="col-lg-12">
										<div class="modal-footer-btn">
											<button type="button" class="btn btn-cancel me-2 p-2 px-3" data-bs-dismiss="modal">Cancel</button>
											<button type="submit" class="btn btn-submit p-2 px-3">Submit</button>
										</div>
									</div>
								</div>
							</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Import Product -->

		<!-- Delete -->
		<div class="modal fade modal-default" id="delete">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body p-0">
						<div class="success-wrap text-center">
							<form>
								<div class="icon-success bg-danger-transparent text-danger mb-2">
									<i class="ti ti-trash"></i>
								</div>
								<h3 class="mb-2">Delete Order</h3>
								<p class="fs-16 mb-3">Are you sure you want to delete order from order list?</p>
								<div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
									<button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>
									<button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Delete -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/features/pages/application/ecommerce/orders/orders.component.ts", lineNumber: 23 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-NHJFHJ3L.js.map
