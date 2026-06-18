import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
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
  BsDatepickerDirective,
  BsDatepickerInputDirective,
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

// src/app/features/pages/purchase/purchase-list/purchase-list.component.ts
var _c0 = () => ({ standalone: true });
function PurchaseListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PurchaseListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PurchaseListComponent_For_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 37)(3, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_For_127_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 154);
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
    \u0275\u0275elementStart(11, "td")(12, "span", 155);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 156);
    \u0275\u0275element(22, "i", 157);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 158)(25, "div", 159)(26, "a", 160);
    \u0275\u0275element(27, "i", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 162);
    \u0275\u0275element(29, "i", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 164);
    \u0275\u0275element(31, "i", 165);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.reference, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Pending" ? "badge-pending" : data_r2.status === "Ordered" ? "bg-warning" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.paid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.due);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.paymentStatus === "Paid" ? "bg-success-transparent" : data_r2.paymentStatus === "Unpaid" ? "bg-danger-transparent" : "bg-warning-transparent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.paymentStatus, " ");
  }
}
function PurchaseListComponent_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 166);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var PurchaseListComponent = class _PurchaseListComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedValue9 = "";
  selectedValue10 = "";
  selectedValue11 = "";
  selectedValue12 = "";
  selectedValue13 = "";
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
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
        if (this.router.url == this.routes.purchaseList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPurchaseList().subscribe((apiRes) => {
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
  ngOnInit() {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
    this.editor1.destroy();
  }
  cartValue = [2, 2, 2, 2, 2, 2, 2, 2];
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
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
  static \u0275fac = function PurchaseListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseListComponent, selectors: [["app-purchase-list"]], decls: 613, vars: 41, consts: [[1, "page-header", "transfer"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "d-flex", "purchase-pg-btn"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "page-btn", "import"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-notes", 1, "btn", "btn-secondary", "color"], [1, "feather", "icon-download", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive", "product-list"], ["matSort", "", 1, "table", "datanew", "list", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "click"], [1, "checkmarks", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "supplierName"], ["mat-sort-header", "reference"], ["mat-sort-header", "date"], ["mat-sort-header", "status"], ["mat-sort-header", "grandTotal"], ["mat-sort-header", "paid"], ["mat-sort-header", "due"], ["mat-sort-header", "createdBy"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "purchase", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "input-blocks", "add-product"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Select Customer", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Select Customer"], ["value", "Apex Computers"], ["value", "Dazzle Shoes"], ["value", "Best Accessories"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon", "tab"], ["href", "javascript:void(0);"], [1, "ti", "ti-circle-plus", "feather-plus-circles"], [1, "input-blocks"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img", "mt-1"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose", 1, "datetimepicker", "form-control"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], ["value", "Shoe"], ["value", "Mobile"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], ["type", "text", "placeholder", "Please type product code and select", 1, "form-control", "p-2"], [1, "modal-body-table"], [1, "table-responsive"], [1, "table"], [1, "text-end"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], [1, "product-quantity"], [1, "quantity-btn", 3, "click"], [1, "feather", "icon-minus-circle", "plus-circle"], ["type", "text", "value", "10", 1, "quntity-input", 3, "value"], [1, "ti", "ti-circle-plus", "feather-search"], [1, "delete-set"], ["src", "assets/img/icons/delete.svg", "alt", "svg"], ["type", "text", "value", "0", 1, "form-control", "p-2"], ["value", "Received"], ["value", "Pending"], [1, "input-blocks", "summer-description-box"], [3, "editor"], [3, "editor", "toolbar"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-units", 1, "modal", "fade"], [1, "col-lg-3", "col-sm-6", "col-12"], ["value", "Beats Headphones"], [1, "input-groupicon", "date-input2"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "placeholder", "19 Jan 2023", "bsDatepicker", "", "container", ".date-input2", 1, "datetimepicker", "form-control"], [1, "addonset"], ["src", "assets/img/icons/calendars.svg", "alt", "img"], ["value", "Nike Jordan"], ["type", "text", "value", "010203"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "input-groupicon"], ["type", "text", "placeholder", "Scan/Search Product by code and select"], ["src", "assets/img/icons/scanners.svg", "alt", "img"], [1, "col-lg-12", "float-md-right"], [1, "total-order"], [1, "total"], ["value", "Sent"], ["value", "Ordered"], ["id", "view-notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "col-lg-6", "col-sm-6", "col-12"], [1, "modal-footer-btn", "download-file"], ["href", "javascript:void(0)", 1, "btn", "btn-submit"], [1, "input-blocks", "image-upload-down"], [1, "image-upload", "download"], ["type", "file"], [1, "image-uploads"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "col-lg-4", "col-sm-6", "col-12"], ["type", "text", "value", "0"], [1, "input-blocks", "summer-description-box", "transfer"], ["id", "summernote3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "add_customer", 1, "modal", "fade"], [1, "modal-header"], [1, "modal-body"], [1, "form-label"], [1, "text-danger"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], [1, "badges", "status-badge", "fs-10", "p-1", "px-2", "rounded-1", 3, "ngClass"], [1, "p-1", "pe-2", "rounded-1", "fs-10", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1", "fs-11"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["colspan", "10", 1, "text-center"]], template: function PurchaseListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Purchase List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your purchases");
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
      \u0275\u0275listener("click", function PurchaseListComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, PurchaseListComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, PurchaseListComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "a", 14);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275text(25, "Add Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 16)(27, "a", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275text(29, "Import Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "a", 23);
      \u0275\u0275element(35, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 25)(37, "label")(38, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PurchaseListComponent_Template_input_ngModelChange_38_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "a", 29);
      \u0275\u0275text(42, " Supplier ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ul", 30)(44, "li")(45, "a", 31);
      \u0275\u0275text(46, "Electro Mart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 31);
      \u0275\u0275text(49, "Quantum Gadgets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 31);
      \u0275\u0275text(52, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 28)(54, "a", 29);
      \u0275\u0275text(55, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "ul", 30)(57, "li")(58, "a", 31);
      \u0275\u0275text(59, "Received");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 31);
      \u0275\u0275text(62, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 31);
      \u0275\u0275text(65, "Ordered");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 28)(67, "a", 29);
      \u0275\u0275text(68, " Payment Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "ul", 30)(70, "li")(71, "a", 31);
      \u0275\u0275text(72, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 31);
      \u0275\u0275text(75, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 31);
      \u0275\u0275text(78, "Overdue");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 32)(80, "a", 29);
      \u0275\u0275text(81, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "ul", 30)(83, "li")(84, "a", 31);
      \u0275\u0275text(85, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 31);
      \u0275\u0275text(88, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 31);
      \u0275\u0275text(91, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a", 31);
      \u0275\u0275text(94, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li")(96, "a", 31);
      \u0275\u0275text(97, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(98, "div", 33)(99, "div", 34)(100, "table", 35);
      \u0275\u0275listener("matSortChange", function PurchaseListComponent_Template_table_matSortChange_100_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(101, "thead")(102, "tr")(103, "th", 36)(104, "label", 37)(105, "input", 38);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_input_click_105_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 39);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_span_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "th", 40);
      \u0275\u0275text(108, "Supplier Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 41);
      \u0275\u0275text(110, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 42);
      \u0275\u0275text(112, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 43);
      \u0275\u0275text(114, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 44);
      \u0275\u0275text(116, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 45);
      \u0275\u0275text(118, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 46);
      \u0275\u0275text(120, "Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 47);
      \u0275\u0275text(122, "Created by");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 36);
      \u0275\u0275text(124, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "tbody");
      \u0275\u0275repeaterCreate(126, PurchaseListComponent_For_127_Template, 32, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(128, PurchaseListComponent_Conditional_128_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(129, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 48)(131, "div", 49)(132, "div", 50)(133, "div", 51)(134, "div", 52)(135, "div", 53)(136, "div", 2)(137, "h4");
      \u0275\u0275text(138, "Add Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "button", 54)(140, "span", 55);
      \u0275\u0275text(141, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 56)(143, "form")(144, "div", 57)(145, "div", 58)(146, "div", 59)(147, "label");
      \u0275\u0275text(148, "Supplier Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 57)(150, "div", 60)(151, "mat-select", 61);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_151_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
        return $event;
      });
      \u0275\u0275elementStart(152, "mat-option", 62);
      \u0275\u0275text(153, "Select Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "mat-option", 63);
      \u0275\u0275text(155, "Apex Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "mat-option", 64);
      \u0275\u0275text(157, "Dazzle Shoes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "mat-option", 65);
      \u0275\u0275text(159, "Best Accessories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "div", 66)(161, "div", 67)(162, "a", 68);
      \u0275\u0275element(163, "i", 69);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(164, "div", 58)(165, "div", 70)(166, "label");
      \u0275\u0275text(167, "Purchase Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div", 71);
      \u0275\u0275element(169, "i", 72)(170, "input", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 58)(172, "div", 70)(173, "label");
      \u0275\u0275text(174, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-select", 74);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_175_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275elementStart(176, "mat-option", 75);
      \u0275\u0275text(177, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 76);
      \u0275\u0275text(179, "Shoe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "mat-option", 77);
      \u0275\u0275text(181, "Mobile");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(182, "div", 58)(183, "div", 70)(184, "label");
      \u0275\u0275text(185, "Reference No");
      \u0275\u0275elementEnd();
      \u0275\u0275element(186, "input", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "div", 57)(188, "div", 79)(189, "div", 70)(190, "label");
      \u0275\u0275text(191, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(192, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 79)(194, "div", 81)(195, "div", 82)(196, "table", 83)(197, "thead")(198, "tr")(199, "th");
      \u0275\u0275text(200, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "th");
      \u0275\u0275text(202, "QTY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "th");
      \u0275\u0275text(204, "Purchase Price($) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "th");
      \u0275\u0275text(206, "Discount($) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "th");
      \u0275\u0275text(208, "Tax %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "th");
      \u0275\u0275text(210, "Tax Amount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "th", 84);
      \u0275\u0275text(212, "Unit Cost($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "th", 84);
      \u0275\u0275text(214, "Total Cost ($) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(215, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "tbody")(217, "tr")(218, "td")(219, "div", 85)(220, "a", 86);
      \u0275\u0275element(221, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "a", 68);
      \u0275\u0275text(223, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(224, "td")(225, "div", 88)(226, "span", 89);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_span_click_226_listener() {
        return ctx.reducePos(1);
      });
      \u0275\u0275element(227, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275element(228, "input", 91);
      \u0275\u0275elementStart(229, "span", 89);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_span_click_229_listener() {
        return ctx.addPos(1);
      });
      \u0275\u0275element(230, "i", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "td");
      \u0275\u0275text(232, "2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "td");
      \u0275\u0275text(234, "500.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "td");
      \u0275\u0275text(236, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "td");
      \u0275\u0275text(238, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "td");
      \u0275\u0275text(240, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "td");
      \u0275\u0275text(242, "1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "td")(244, "a", 93);
      \u0275\u0275element(245, "img", 94);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(246, "div", 57)(247, "div", 58)(248, "div", 70)(249, "label");
      \u0275\u0275text(250, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275element(251, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 58)(253, "div", 70)(254, "label");
      \u0275\u0275text(255, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(256, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(257, "div", 58)(258, "div", 70)(259, "label");
      \u0275\u0275text(260, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275element(261, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "div", 58)(263, "div", 70)(264, "label");
      \u0275\u0275text(265, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "mat-select", 74);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_266_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
        return $event;
      });
      \u0275\u0275elementStart(267, "mat-option", 75);
      \u0275\u0275text(268, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "mat-option", 96);
      \u0275\u0275text(270, "Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "mat-option", 97);
      \u0275\u0275text(272, "Pending");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(273, "div", 79)(274, "div", 98)(275, "label");
      \u0275\u0275text(276, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "ngx-editor", 99);
      \u0275\u0275element(278, "ngx-editor-menu", 100);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(279, "div", 79)(280, "div", 101)(281, "button", 102);
      \u0275\u0275text(282, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "button", 103);
      \u0275\u0275text(284, "Submit");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(285, "div", 104)(286, "div", 49)(287, "div", 50)(288, "div", 51)(289, "div", 52)(290, "div", 53)(291, "div", 2)(292, "h4");
      \u0275\u0275text(293, "Edit Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "button", 54)(295, "span", 55);
      \u0275\u0275text(296, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(297, "div", 56)(298, "form")(299, "div")(300, "div", 57)(301, "div", 105)(302, "div", 70)(303, "label");
      \u0275\u0275text(304, "Supplier Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "div", 57)(306, "div", 60)(307, "mat-select", 74);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_307_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
        return $event;
      });
      \u0275\u0275elementStart(308, "mat-option", 64);
      \u0275\u0275text(309, "Dazzle Shoes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-option", 63);
      \u0275\u0275text(311, "Apex Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "mat-option", 106);
      \u0275\u0275text(313, "Beats Headphones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(314, "div", 66)(315, "div", 67)(316, "a", 68);
      \u0275\u0275element(317, "i", 69);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(318, "div", 105)(319, "div", 70)(320, "label");
      \u0275\u0275text(321, "Purchase Date ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "div", 107);
      \u0275\u0275element(323, "i", 108)(324, "input", 109);
      \u0275\u0275elementStart(325, "div", 110);
      \u0275\u0275element(326, "img", 111);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(327, "div", 105)(328, "div", 70)(329, "label");
      \u0275\u0275text(330, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "mat-select", 74);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_331_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
        return $event;
      });
      \u0275\u0275elementStart(332, "mat-option", 112);
      \u0275\u0275text(333, "Nike Jordan");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(334, "div", 105)(335, "div", 70)(336, "label");
      \u0275\u0275text(337, "Reference No.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(338, "input", 113);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "div", 114)(340, "div", 70)(341, "label");
      \u0275\u0275text(342, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "div", 115);
      \u0275\u0275element(344, "input", 116);
      \u0275\u0275elementStart(345, "div", 110);
      \u0275\u0275element(346, "img", 117);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(347, "div", 57)(348, "div", 79)(349, "div", 81)(350, "div", 82)(351, "table", 83)(352, "thead")(353, "tr")(354, "th");
      \u0275\u0275text(355, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "th");
      \u0275\u0275text(357, "QTY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "th");
      \u0275\u0275text(359, "Purchase Price($) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "th");
      \u0275\u0275text(361, "Discount($) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "th");
      \u0275\u0275text(363, "Tax %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "th");
      \u0275\u0275text(365, "Tax Amount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "th", 84);
      \u0275\u0275text(367, "Unit Cost($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "th", 84);
      \u0275\u0275text(369, "Total Cost ($) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(370, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "tbody")(372, "tr")(373, "td")(374, "div", 85)(375, "a", 86);
      \u0275\u0275element(376, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "a", 68);
      \u0275\u0275text(378, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(379, "td")(380, "div", 88)(381, "span", 89);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_span_click_381_listener() {
        return ctx.reducePos(1);
      });
      \u0275\u0275element(382, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275element(383, "input", 91);
      \u0275\u0275elementStart(384, "span", 89);
      \u0275\u0275listener("click", function PurchaseListComponent_Template_span_click_384_listener() {
        return ctx.addPos(1);
      });
      \u0275\u0275element(385, "i", 92);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "td");
      \u0275\u0275text(387, "2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "td");
      \u0275\u0275text(389, "500.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "td");
      \u0275\u0275text(391, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "td");
      \u0275\u0275text(393, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "td");
      \u0275\u0275text(395, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "td");
      \u0275\u0275text(397, "1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "td")(399, "a", 93);
      \u0275\u0275element(400, "img", 94);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(401, "div", 57)(402, "div", 118)(403, "div", 119)(404, "ul")(405, "li")(406, "h4");
      \u0275\u0275text(407, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "h5");
      \u0275\u0275text(409, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "li")(411, "h4");
      \u0275\u0275text(412, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "h5");
      \u0275\u0275text(414, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(415, "li")(416, "h4");
      \u0275\u0275text(417, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "h5");
      \u0275\u0275text(419, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "li", 120)(421, "h4");
      \u0275\u0275text(422, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "h5");
      \u0275\u0275text(424, "$1500.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(425, "div", 57)(426, "div", 105)(427, "div", 70)(428, "label");
      \u0275\u0275text(429, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275element(430, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "div", 105)(432, "div", 70)(433, "label");
      \u0275\u0275text(434, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(435, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(436, "div", 105)(437, "div", 70)(438, "label");
      \u0275\u0275text(439, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275element(440, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "div", 105)(442, "div", 70)(443, "label");
      \u0275\u0275text(444, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "mat-select", 74);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_445_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
        return $event;
      });
      \u0275\u0275elementStart(446, "mat-option", 121);
      \u0275\u0275text(447, "Sent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "mat-option", 122);
      \u0275\u0275text(449, "Ordered");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(450, "div", 79)(451, "div", 98)(452, "label");
      \u0275\u0275text(453, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "ngx-editor", 99);
      \u0275\u0275element(455, "ngx-editor-menu", 100);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(456, "div", 79)(457, "div", 101)(458, "button", 102);
      \u0275\u0275text(459, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "button", 103);
      \u0275\u0275text(461, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(462, "div", 123)(463, "div", 124)(464, "div", 50)(465, "div", 51)(466, "div", 52)(467, "div", 53)(468, "div", 2)(469, "h4");
      \u0275\u0275text(470, "Import Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(471, "button", 54)(472, "span", 55);
      \u0275\u0275text(473, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(474, "div", 56)(475, "form")(476, "div", 57)(477, "div", 125)(478, "div", 70)(479, "label");
      \u0275\u0275text(480, "Supplier Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "div", 57)(482, "div", 60)(483, "mat-select", 74);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_483_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
        return $event;
      });
      \u0275\u0275elementStart(484, "mat-option", 75);
      \u0275\u0275text(485, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "mat-option", 63);
      \u0275\u0275text(487, "Apex Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "mat-option", 63);
      \u0275\u0275text(489, "Apex Computers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(490, "div", 66)(491, "div", 67)(492, "a", 68);
      \u0275\u0275element(493, "i", 69);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(494, "div", 125)(495, "div", 70)(496, "label");
      \u0275\u0275text(497, "Purchase Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "mat-select", 74);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseListComponent_Template_mat_select_ngModelChange_498_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue13, $event) || (ctx.selectedValue13 = $event);
        return $event;
      });
      \u0275\u0275elementStart(499, "mat-option", 75);
      \u0275\u0275text(500, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "mat-option", 96);
      \u0275\u0275text(502, "Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "mat-option", 122);
      \u0275\u0275text(504, "Ordered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "mat-option", 97);
      \u0275\u0275text(506, "Pending");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(507, "div", 114)(508, "div", 57)(509, "div")(510, "div", 126)(511, "a", 127);
      \u0275\u0275text(512, "Download Sample File");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(513, "div", 79)(514, "div", 128)(515, "label");
      \u0275\u0275text(516, " Upload CSV File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "div", 129);
      \u0275\u0275element(518, "input", 130);
      \u0275\u0275elementStart(519, "div", 131);
      \u0275\u0275element(520, "img", 132);
      \u0275\u0275elementStart(521, "h4");
      \u0275\u0275text(522, "Drag and drop a ");
      \u0275\u0275elementStart(523, "span");
      \u0275\u0275text(524, "file to upload");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(525, "div", 133)(526, "div", 70)(527, "label");
      \u0275\u0275text(528, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275element(529, "input", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(530, "div", 133)(531, "div", 70)(532, "label");
      \u0275\u0275text(533, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(534, "input", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(535, "div", 133)(536, "div", 70)(537, "label");
      \u0275\u0275text(538, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275element(539, "input", 134);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(540, "div", 135)(541, "label");
      \u0275\u0275text(542, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(543, "div", 136);
      \u0275\u0275elementStart(544, "p");
      \u0275\u0275text(545, "Maximum 60 Characters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(546, "div", 101)(547, "button", 102);
      \u0275\u0275text(548, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "button", 103);
      \u0275\u0275text(550, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(551, "div", 137)(552, "div", 124)(553, "div", 50)(554, "div", 51)(555, "div", 138)(556, "span", 139);
      \u0275\u0275element(557, "i", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "h4", 141);
      \u0275\u0275text(559, "Delete Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(560, "p", 142);
      \u0275\u0275text(561, "Are you sure you want to delete purchase?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "div", 143)(563, "button", 144);
      \u0275\u0275text(564, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "button", 145);
      \u0275\u0275text(566, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(567, "div", 146)(568, "div", 124)(569, "div", 50)(570, "div", 147)(571, "div", 2)(572, "h4");
      \u0275\u0275text(573, "Add Supplier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(574, "button", 54)(575, "span", 55);
      \u0275\u0275text(576, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(577, "form")(578, "div", 148)(579, "div")(580, "label", 149);
      \u0275\u0275text(581, "Supplier");
      \u0275\u0275elementStart(582, "span", 150);
      \u0275\u0275text(583, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(584, "input", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(585, "div", 151)(586, "button", 144);
      \u0275\u0275text(587, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "button", 152);
      \u0275\u0275text(589, "Add Supplier");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(590, "div", 146)(591, "div", 124)(592, "div", 50)(593, "div", 147)(594, "div", 2)(595, "h4");
      \u0275\u0275text(596, "Add Supplier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(597, "button", 54)(598, "span", 55);
      \u0275\u0275text(599, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(600, "form")(601, "div", 148)(602, "div")(603, "label", 149);
      \u0275\u0275text(604, "Supplier");
      \u0275\u0275elementStart(605, "span", 150);
      \u0275\u0275text(606, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(607, "input", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(608, "div", 151)(609, "button", 144);
      \u0275\u0275text(610, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "button", 152);
      \u0275\u0275text(612, "Add Supplier");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(32, _c0));
      \u0275\u0275advance(68);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 128 : -1);
      \u0275\u0275advance(23);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue6);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(33, _c0));
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue7);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(34, _c0));
      \u0275\u0275advance(53);
      \u0275\u0275property("value", ctx.cartValue[1]);
      \u0275\u0275advance(38);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue8);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(35, _c0));
      \u0275\u0275advance(11);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(29);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue9);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(36, _c0));
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue10);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(37, _c0));
      \u0275\u0275advance(52);
      \u0275\u0275property("value", ctx.cartValue[1]);
      \u0275\u0275advance(62);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue11);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c0));
      \u0275\u0275advance(9);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
      \u0275\u0275advance(28);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue12);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(39, _c0));
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue13);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(40, _c0));
    }
  }, dependencies: [CommonModule, NgClass, CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, NgxEditorModule, NgxEditorComponent, MenuComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseListComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-list", imports: [CommonModule, CustomPaginationComponent, MatSelectModule, FormsModule, MatSortModule, NgxEditorModule, BsDatepickerModule], template: `<div class="page-header transfer">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Purchase List</h4>
      <h6>Manage your purchases</h6>
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
      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i
      class="ti ti-refresh"></i></a>
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
  <div class="d-flex purchase-pg-btn">
    <div class="page-btn">
      <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i
      class="ti ti-circle-plus me-2"></i>Add Purchase</a>
    </div>
    <div class="page-btn import">
      <a href="javascript:void(0);" class="btn btn-secondary color" data-bs-toggle="modal" data-bs-target="#view-notes"><i
      class="feather icon-download me-2"></i>Import Purchase</a>
    </div>
  </div>

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
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
        Supplier
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Electro Mart</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Quantum Gadgets</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Prime Bazaar</a>
          </li>
        </ul>
      </div>				
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          Status
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Received</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Ordered</a>
          </li>
        </ul>
      </div>
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
        Payment Status
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Unpaid</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Overdue</a>
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
    <div class="table-responsive product-list">
      <table matSort (matSortChange)="sortData($event)" class="table  datanew list">
        <thead>
          <tr>
            <th class="no-sort">
              <label class="checkboxs">
                <input type="checkbox" id="select-all" (click)="selectAll(initChecked)">
                <span class="checkmarks" [(ngModel)]="initChecked" ></span>
              </label>
              </th>
            <th mat-sort-header="supplierName">Supplier Name</th>
            <th mat-sort-header="reference">Reference</th>
            <th mat-sort-header="date">Date</th>
            <th mat-sort-header="status">Status</th>
            <th mat-sort-header="grandTotal">Grand Total</th>
            <th mat-sort-header="paid">Paid</th>
            <th mat-sort-header="due">Due</th>
            <th mat-sort-header="createdBy">Created by</th>
            <th class="no-sort">Action</th>
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
              <td>{{data.supplierName}}</td>
              <td>{{data.reference}} </td>
              <td>{{data.date}}</td>
              <td><span class="badges status-badge fs-10 p-1 px-2 rounded-1" [ngClass]="data.status==='Pending'?'badge-pending':data.status==='Ordered'?'bg-warning':''">{{data.status}}</span></td>
              <td>{{data.total}}</td>
              <td>{{data.paid}}</td>
              <td>{{data.due}}</td>
              <td>
                <span class="p-1 pe-2 rounded-1   fs-10" [ngClass]="data.paymentStatus==='Paid'?'bg-success-transparent':data.paymentStatus==='Unpaid'?'bg-danger-transparent':'bg-warning-transparent'">
                  <i class="ti ti-point-filled me-1 fs-11"></i>{{data.paymentStatus}}
                </span>
              </td>
              <td class="action-table-data">
                <div class="edit-delete-action">
                  <a class="me-2 p-2" href="javascript:void(0);">
                    <i  class="feather icon-eye"></i>
                  </a>
                  <a class="me-2 p-2" data-bs-toggle="modal" data-bs-target="#edit-units">
                    <i class="feather icon-edit"></i>
                  </a>
                  <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
                    <i class="feather icon-trash-2"></i>
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
<!-- Add Purchase -->
<div class="modal fade" id="add-units">
  <div class="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Add Purchase</h4>
            </div>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body custom-modal-body">
            <form>
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="input-blocks add-product">
                    <label>Supplier Name</label>
                    <div class="row">
                      <div class="col-lg-10 col-sm-10 col-10">
                        <mat-select [(ngModel)]="selectedValue6"
                          [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                          placeholder="Select Customer">
                          <mat-option value="Select Customer">Select Customer</mat-option>
                          <mat-option value="Apex Computers">Apex Computers</mat-option>
                          <mat-option value="Dazzle Shoes">Dazzle Shoes</mat-option>
                          <mat-option value="Best Accessories">Best Accessories</mat-option>
                        </mat-select>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-2 ps-0">
                        <div class="add-icon tab">
                          <a href="javascript:void(0);"><i
                          class="ti ti-circle-plus feather-plus-circles"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="input-blocks">
                    <label>Purchase Date</label>

                    <div class="input-groupicon calender-input date-input1">
                      <i class="feather icon-calendar info-img mt-1"></i>
                      <input type="text" class="datetimepicker form-control" bsDatepicker container=".date-input1" placeholder="Choose">
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="input-blocks">
                    <label>Product Name</label>
                    <mat-select [(ngModel)]="selectedValue7" [ngModelOptions]="{standalone: true}"
                      class="select custom-mat-select" placeholder="Choose">
                      <mat-option value="Choose">Choose</mat-option>
                      <mat-option value="Shoe">Shoe</mat-option>
                      <mat-option value="Mobile">Mobile</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="input-blocks">
                    <label>Reference No</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="input-blocks">
                    <label>Product Name</label>
                    <input type="text" class="form-control p-2" placeholder="Please type product code and select">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="modal-body-table">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>QTY</th>
                            <th>Purchase Price($) </th>
                            <th>Discount($) </th>
                            <th>Tax %</th>
                            <th>Tax Amount($)</th>
                            <th class="text-end">Unit Cost($)</th>
                            <th class="text-end">Total Cost ($) </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="productimgname">
                                <a href="javascript:void(0);"
                                  class="product-img stock-img">
                                  <img src="assets/img/products/stock-img-02.png"
                                    alt="product">
                                  </a>
                                  <a href="javascript:void(0);">Nike Jordan</a>
                                </div>
                              </td>
                              <td>
                                <div class="product-quantity">
                                  <span class="quantity-btn" (click)="reducePos(1)"><i
                                  class="feather icon-minus-circle plus-circle"></i></span>
                                  <input type="text" class="quntity-input" value="10" [value]="cartValue[1]">
                                  <span class="quantity-btn" (click)="addPos(1)"><i
                                  class="ti ti-circle-plus feather-search"></i></span>
                                </div>
                              </td>
                              <td>2000</td>
                              <td>500.00</td>
                              <td>0.00</td>
                              <td>0.00</td>
                              <td>0.00</td>
                              <td>1500</td>
                              <td>
                                <a class="delete-set"><img
                                src="assets/img/icons/delete.svg" alt="svg"></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks">
                        <label>Order Tax</label>
                        <input type="text" class="form-control p-2" value="0">
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks">
                        <label>Discount</label>
                        <input type="text" class="form-control p-2" value="0">
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks">
                        <label>Shipping</label>
                        <input type="text" class="form-control p-2" value="0">
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks">
                        <label>Status</label>
                        <mat-select [(ngModel)]="selectedValue8"
                          [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                          placeholder="Choose">
                          <mat-option value="Choose">Choose</mat-option>
                          <mat-option value="Received">Received</mat-option>
                          <mat-option value="Pending">Pending</mat-option>
                        </mat-select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box">
                    <label>Notes</label>
                    <ngx-editor [editor]="editor">
                      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                      </ngx-editor-menu>
                   </ngx-editor>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="modal-footer-btn">
                    <button type="button" class="btn btn-cancel me-2"
                    data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Purchase -->

  <!-- Edit Purchase -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Purchase</h4>
              </div>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body">
              <form>
                <div>
                  <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Supplier Name</label>
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <mat-select [(ngModel)]="selectedValue9"
                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                              placeholder="Choose">
                              <mat-option value="Dazzle Shoes">Dazzle Shoes</mat-option>
                              <mat-option value="Apex Computers">Apex Computers</mat-option>
                              <mat-option value="Beats Headphones">Beats
                              Headphones</mat-option>
                            </mat-select>
                          </div>
                          <div class="col-lg-2 col-sm-2 col-2 ps-0">
                            <div class="add-icon tab">
                              <a href="javascript:void(0);"><i
                              class="ti ti-circle-plus feather-plus-circles"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Purchase Date </label>
                        <div class="input-groupicon date-input2">
                          <i class="feather icon-calendar info-img"></i>
                          <input type="text" placeholder="19 Jan 2023" class="datetimepicker form-control"
                            bsDatepicker container=".date-input2">
                            <div class="addonset">
                              <img src="assets/img/icons/calendars.svg" alt="img">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Product Name</label>
                          <mat-select [(ngModel)]="selectedValue10"
                            [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                            placeholder="Choose">
                            <mat-option value="Nike Jordan">Nike Jordan</mat-option>
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Reference No.</label>
                          <input type="text" value="010203">
                        </div>
                      </div>
                      <div class="col-lg-12 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Product</label>
                          <div class="input-groupicon">
                            <input type="text" placeholder="Scan/Search Product by code and select">
                            <div class="addonset">
                              <img src="assets/img/icons/scanners.svg" alt="img">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="modal-body-table">
                          <div class="table-responsive">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Product Name</th>
                                  <th>QTY</th>
                                  <th>Purchase Price($) </th>
                                  <th>Discount($) </th>
                                  <th>Tax %</th>
                                  <th>Tax Amount($)</th>
                                  <th class="text-end">Unit Cost($)</th>
                                  <th class="text-end">Total Cost ($) </th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="productimgname">
                                      <a href="javascript:void(0);"
                                        class="product-img stock-img">
                                        <img src="assets/img/products/stock-img-02.png"
                                          alt="product">
                                        </a>
                                        <a href="javascript:void(0);">Nike Jordan</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="product-quantity">
                                        <span class="quantity-btn" (click)="reducePos(1)"><i
                                        class="feather icon-minus-circle plus-circle"></i></span>
                                        <input type="text" class="quntity-input" value="10" [value]="cartValue[1]">
                                        <span class="quantity-btn" (click)="addPos(1)"><i
                                        class="ti ti-circle-plus feather-search"></i></span>
                                      </div>
                                    </td>
                                    <td>2000</td>
                                    <td>500.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>1500</td>
                                    <td>
                                      <a class="delete-set"><img
                                      src="assets/img/icons/delete.svg" alt="svg"></a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 float-md-right">
                          <div class="total-order">
                            <ul>
                              <li>
                                <h4>Order Tax</h4>
                                <h5>$ 0.00</h5>
                              </li>
                              <li>
                                <h4>Discount</h4>
                                <h5>$ 0.00</h5>
                              </li>
                              <li>
                                <h4>Shipping</h4>
                                <h5>$ 0.00</h5>
                              </li>
                              <li class="total">
                                <h4>Grand Total</h4>
                                <h5>$1500.00</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-3 col-sm-6 col-12">
                          <div class="input-blocks">
                            <label>Order Tax</label>
                            <input type="text" class="form-control p-2" value="0">
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12">
                          <div class="input-blocks">
                            <label>Discount</label>
                            <input type="text" class="form-control p-2" value="0">
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12">
                          <div class="input-blocks">
                            <label>Shipping</label>
                            <input type="text" class="form-control p-2" value="0">
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-12">
                          <div class="input-blocks">
                            <label>Status</label>
                            <mat-select [(ngModel)]="selectedValue11"
                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                              placeholder="Choose">
                              <mat-option value="Sent">Sent</mat-option>
                              <mat-option value="Ordered">Ordered</mat-option>
                            </mat-select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="input-blocks summer-description-box">
                        <label>Description</label>
                        <ngx-editor [editor]="editor1">
                          <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >
                          </ngx-editor-menu>
                       </ngx-editor>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="modal-footer-btn">
                        <button type="button" class="btn btn-cancel me-2"
                        data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-submit">Save Changes</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Edit Purchase -->

      <!-- Import Purchase -->
      <div class="modal fade" id="view-notes">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header border-0 custom-modal-header">
                  <div class="page-title">
                    <h4>Import Purchase</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body custom-modal-body">
                  <form>
                    <div class="row">
                      <div class="col-lg-6 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Supplier Name</label>
                          <div class="row">
                            <div class="col-lg-10 col-sm-10 col-10">
                              <mat-select [(ngModel)]="selectedValue12"
                                [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                                placeholder="Choose">
                                <mat-option value="Choose">Choose</mat-option>
                                <mat-option value="Apex Computers">Apex Computers</mat-option>
                                <mat-option value="Apex Computers">Apex Computers</mat-option>
                              </mat-select>
                            </div>
                            <div class="col-lg-2 col-sm-2 col-2 ps-0">
                              <div class="add-icon tab">
                                <a href="javascript:void(0);"><i
                                class="ti ti-circle-plus feather-plus-circles"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Purchase Status </label>
                          <mat-select [(ngModel)]="selectedValue13" [ngModelOptions]="{standalone: true}"
                            class="select custom-mat-select" placeholder="Choose">
                            <mat-option value="Choose">Choose</mat-option>
                            <mat-option value="Received">Received</mat-option>
                            <mat-option value="Ordered">Ordered</mat-option>
                            <mat-option value="Pending">Pending</mat-option>
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-12 col-sm-6 col-12">
                        <div class="row">
                          <div>
                            <!-- <div class="input-blocks download">
                            <a class="btn btn-submit">Download Sample File</a>
                          </div> -->
                          <div class="modal-footer-btn download-file">
                            <a href="javascript:void(0)" class="btn btn-submit">Download Sample
                            File</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-blocks image-upload-down">
                        <label> Upload CSV File</label>
                        <div class="image-upload download">
                          <input type="file">
                          <div class="image-uploads">
                            <img src="assets/img/download-img.png" alt="img">
                            <h4>Drag and drop a <span>file to upload</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Order Tax</label>
                        <input type="text" value="0">
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Discount</label>
                        <input type="text" value="0">
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="input-blocks">
                        <label>Shipping</label>
                        <input type="text" value="0">
                      </div>
                    </div>
                  </div>
                  <div class="input-blocks summer-description-box transfer">
                    <label>Description</label>
                    <div id="summernote3">
                    </div>
                    <p>Maximum 60 Characters</p>
                  </div>
                  <div class="modal-footer-btn">
                    <button type="button" class="btn btn-cancel me-2"
                    data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-submit">Submit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Import Purchase -->

     		<!-- delete modal -->
		 <div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Purchase</h4>
								<p class="mb-0 fs-16">Are you sure you want to delete purchase?</p>
								<div class="modal-footer-btn mt-3 d-flex justify-content-center">
									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
								</div>						
						</div>
					</div>
				</div>
			</div>
		</div>

    	<!-- Add Supplier -->
	<div class="modal fade" id="add_customer">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<div class="page-title">
						<h4>Add Supplier</h4>
					</div>
					<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form>
					<div class="modal-body">
						<div>
							<label class="form-label">Supplier<span class="text-danger">*</span></label>
							<input type="text" class="form-control">
						</div>												
					</div>
					<div class="modal-footer">
						<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
						<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Supplier</button>
					</div>						
				</form>
			</div>
		</div>
	</div>
	<!-- /Add Supplier -->

  	<!-- Add Supplier -->
	<div class="modal fade" id="add_customer">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<div class="page-title">
						<h4>Add Supplier</h4>
					</div>
					<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form>
					<div class="modal-body">
						<div>
							<label class="form-label">Supplier<span class="text-danger">*</span></label>
							<input type="text" class="form-control">
						</div>												
					</div>
					<div class="modal-footer">
						<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
						<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Supplier</button>
					</div>						
				</form>
			</div>
		</div>
	</div>
	<!-- /Add Supplier -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseListComponent, { className: "PurchaseListComponent", filePath: "src/app/features/pages/purchase/purchase-list/purchase-list.component.ts", lineNumber: 28 });
})();
export {
  PurchaseListComponent
};
//# sourceMappingURL=chunk-Y72GTRNF.js.map
