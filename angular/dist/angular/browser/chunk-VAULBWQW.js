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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/sales/quotation-list/quotation-list.component.ts
var _c0 = () => ({ standalone: true });
function QuotationListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function QuotationListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function QuotationListComponent_For_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 144)(3, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_For_119_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 146)(7, "a", 147);
    \u0275\u0275element(8, "img", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 77);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 149)(13, "a", 147);
    \u0275\u0275element(14, "img", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 77);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "span", 150);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 151)(24, "a", 152);
    \u0275\u0275element(25, "i", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 154);
    \u0275\u0275element(27, "i", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 156);
    \u0275\u0275element(29, "i", 157);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.productName);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.status === "Send" ? "badge-success" : data_r2.status === "Ordered" ? "badge-warning" : "badge-cyan");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.total);
  }
}
function QuotationListComponent_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 158);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var QuotationListComponent = class _QuotationListComponent {
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
        if (this.router.url == this.routes.quotationList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getQuotationList().subscribe((apiRes) => {
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
  ngOnInit() {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
    this.editor1.destroy();
  }
  static \u0275fac = function QuotationListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuotationListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuotationListComponent, selectors: [["app-quotation-list"]], decls: 566, vars: 33, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "productName"], ["mat-sort-header", "customerName"], ["mat-sort-header", "status"], ["mat-sort-header", "grandTotal"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "purchase", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "input-blocks", "add-product"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], ["value", "Benjamin"], ["value", "Nydia Fitzgerald"], [1, "col-lg-2", "col-sm-2", "col-2", "p-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add_customer", 1, "btn", "btn-filter"], ["src", "assets/img/icons/plus1.svg", "alt", "img"], [1, "input-blocks"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img", "mt-1"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose", 1, "datetimepicker", "form-control"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], [1, "input-groupicon", "select-code"], ["type", "text", "placeholder", "Please type product code and select", 1, "form-control", "p-2"], [1, "addonset"], ["src", "assets/img/icons/qrcode-scan.svg", "alt", "img"], [1, "modal-body-table"], [1, "table", "datanew"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["href", "javascript:void(0);"], [1, "product-quantity"], [1, "quantity-btn", 3, "click"], [1, "feather", "icon-minus-circle", "plus-circle"], ["type", "text", "value", "2", 1, "quntity-input", 3, "value"], [1, "ti", "ti-circle-plus", "feather-search"], ["src", "assets/img/products/stock-img-03.png", "alt", "product"], ["src", "assets/img/products/stock-img-05.png", "alt", "product"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "input-blocks", "mb-3"], ["type", "text", "value", "0", 1, "form-control", "p-2"], [1, "input-blocks", "summer-description-box"], [3, "editor"], [3, "editor", "toolbar"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-units", 1, "modal", "fade"], [1, "modal-dialog", "edit-sales-modal"], [1, "page-wrapper", "p-0", "m-0"], [1, "content", "p-0"], [1, "page-header", "p-4", "mb-0"], [1, "add-item", "new-sale-items", "d-flex"], [1, "card"], [1, "col-lg-4", "col-sm-6", "col-12"], ["value", "Thomas"], ["value", "Rose"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_customer", 1, "choose-add"], [1, "ti", "ti-circle-plus", "plus"], [1, "input-groupicon", "calender-input", "date-input2"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "19 jan 2023", 1, "datetimepicker", "form-control"], ["type", "text", "placeholder", "010203", 1, "form-control", "p-2"], [1, "col-lg-12", "col-sm-6", "col-12"], ["src", "assets/img/icons/scanners.svg", "alt", "img"], [1, "table-responsive", "no-pagination"], [1, "col-lg-6", "ms-auto"], [1, "total-order", "w-100", "max-widthauto", "m-auto", "mb-4"], [1, "col-lg-3", "col-sm-6", "col-12"], ["type", "text", "placeholder", "0", 1, "form-control", "p-2"], ["value", "Sent"], ["value", "Completed"], ["value", "Inprogress"], [1, "col-lg-12", "text-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "add-cancel", "me-3"], ["type", "submit", 1, "btn", "btn-submit", "add-sale"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["id", "add_customer", 1, "modal", "fade"], [1, "modal-header"], [1, "modal-body"], [1, "form-label"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "me-2"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], [1, "d-flex", "align-items-center"], [1, "badge", 3, "ngClass"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2", "p-2", "mb-0", "d-flex", "align-items-center", "border", "p-1", "rounded"], [1, "feather", "icon-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0", "d-flex", "align-items-center", "border", "p-1", "rounded"], [1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "me-2", "p-2", "mb-0", "d-flex", "align-items-center", "border", "p-1", "rounded"], [1, "feather", "icon-trash-2"], ["colspan", "10", 1, "text-center"]], template: function QuotationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Quotation List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Quotation");
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
      \u0275\u0275listener("click", function QuotationListComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, QuotationListComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, QuotationListComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Quotation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Beats Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 27);
      \u0275\u0275text(50, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 24)(52, "a", 25);
      \u0275\u0275text(53, " Customer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 26)(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Carl Evans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Minerva Rameriz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Robert Lamon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 27);
      \u0275\u0275text(66, "Patricia Lewis");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 24)(68, "a", 25);
      \u0275\u0275text(69, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 26)(71, "li")(72, "a", 27);
      \u0275\u0275text(73, "Sent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 27);
      \u0275\u0275text(76, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 27);
      \u0275\u0275text(79, "Ordered");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div", 28)(81, "a", 25);
      \u0275\u0275text(82, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "ul", 26)(84, "li")(85, "a", 27);
      \u0275\u0275text(86, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li")(88, "a", 27);
      \u0275\u0275text(89, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li")(91, "a", 27);
      \u0275\u0275text(92, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "a", 27);
      \u0275\u0275text(95, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "a", 27);
      \u0275\u0275text(98, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(99, "div", 29)(100, "div", 30)(101, "table", 31);
      \u0275\u0275listener("matSortChange", function QuotationListComponent_Template_table_matSortChange_101_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(102, "thead", 32)(103, "tr")(104, "th", 33)(105, "label", 34);
      \u0275\u0275listener("click", function QuotationListComponent_Template_label_click_105_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(106, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_106_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "th", 37);
      \u0275\u0275text(109, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 38);
      \u0275\u0275text(111, "Custmer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 39);
      \u0275\u0275text(113, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 40);
      \u0275\u0275text(115, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "tbody");
      \u0275\u0275repeaterCreate(118, QuotationListComponent_For_119_Template, 30, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(120, QuotationListComponent_Conditional_120_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(121, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 41)(123, "div", 42)(124, "div", 43)(125, "div", 44)(126, "div", 45)(127, "div", 46)(128, "div", 2)(129, "h4");
      \u0275\u0275text(130, "Add Quotation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "button", 47)(132, "span", 48);
      \u0275\u0275text(133, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "div", 49)(135, "form")(136, "div", 50)(137, "div", 51)(138, "div", 52)(139, "label");
      \u0275\u0275text(140, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 50)(142, "div", 53)(143, "mat-select", 54);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_143_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
        return $event;
      });
      \u0275\u0275elementStart(144, "mat-option", 55);
      \u0275\u0275text(145, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "mat-option", 56);
      \u0275\u0275text(147, "Benjamin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "mat-option", 57);
      \u0275\u0275text(149, "Nydia Fitzgerald");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 58)(151, "div", 59)(152, "a", 60);
      \u0275\u0275element(153, "img", 61);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(154, "div", 51)(155, "div", 62)(156, "label");
      \u0275\u0275text(157, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 63);
      \u0275\u0275element(159, "i", 64)(160, "input", 65);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "div", 51)(162, "div", 62)(163, "label");
      \u0275\u0275text(164, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(165, "input", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "div", 50)(167, "div", 67)(168, "div", 62)(169, "label");
      \u0275\u0275text(170, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "div", 68);
      \u0275\u0275element(172, "input", 69);
      \u0275\u0275elementStart(173, "div", 70);
      \u0275\u0275element(174, "img", 71);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(175, "div", 67)(176, "div", 72)(177, "div", 30)(178, "table", 73)(179, "thead")(180, "tr")(181, "th");
      \u0275\u0275text(182, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "th");
      \u0275\u0275text(184, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "th");
      \u0275\u0275text(186, "Purchase Price($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "th");
      \u0275\u0275text(188, "Discount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "th");
      \u0275\u0275text(190, "Tax(%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "th");
      \u0275\u0275text(192, "Tax Amount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "th");
      \u0275\u0275text(194, "Unit Cost($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "th");
      \u0275\u0275text(196, "Total Cost(%)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "tbody")(198, "tr")(199, "td")(200, "div", 74)(201, "a", 75);
      \u0275\u0275element(202, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "a", 77);
      \u0275\u0275text(204, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "td")(206, "div", 78)(207, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_207_listener() {
        return ctx.reducePos(1);
      });
      \u0275\u0275element(208, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(209, "input", 81);
      \u0275\u0275elementStart(210, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_210_listener() {
        return ctx.addPos(1);
      });
      \u0275\u0275element(211, "i", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(212, "td");
      \u0275\u0275text(213, "2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "td");
      \u0275\u0275text(215, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "td");
      \u0275\u0275text(217, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "td");
      \u0275\u0275text(219, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "td");
      \u0275\u0275text(221, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "td");
      \u0275\u0275text(223, "1500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "tr")(225, "td")(226, "div", 74)(227, "a", 75);
      \u0275\u0275element(228, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "a", 77);
      \u0275\u0275text(230, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "td")(232, "div", 78)(233, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_233_listener() {
        return ctx.reducePos(2);
      });
      \u0275\u0275element(234, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(235, "input", 81);
      \u0275\u0275elementStart(236, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_236_listener() {
        return ctx.addPos(2);
      });
      \u0275\u0275element(237, "i", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "td");
      \u0275\u0275text(239, "3000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "td");
      \u0275\u0275text(241, "400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "td");
      \u0275\u0275text(243, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "td");
      \u0275\u0275text(245, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "td");
      \u0275\u0275text(247, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "td");
      \u0275\u0275text(249, "1700");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "tr")(251, "td")(252, "div", 74)(253, "a", 75);
      \u0275\u0275element(254, "img", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "a", 77);
      \u0275\u0275text(256, "Lobar Handy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(257, "td")(258, "div", 78)(259, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_259_listener() {
        return ctx.reducePos(3);
      });
      \u0275\u0275element(260, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(261, "input", 81);
      \u0275\u0275elementStart(262, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_262_listener() {
        return ctx.addPos(3);
      });
      \u0275\u0275element(263, "i", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(264, "td");
      \u0275\u0275text(265, "2500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "td");
      \u0275\u0275text(267, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "td");
      \u0275\u0275text(269, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "td");
      \u0275\u0275text(271, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "td");
      \u0275\u0275text(273, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "td");
      \u0275\u0275text(275, "2000");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(276, "div", 50)(277, "div", 85)(278, "div", 86)(279, "label");
      \u0275\u0275text(280, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275element(281, "input", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "div", 85)(283, "div", 86)(284, "label");
      \u0275\u0275text(285, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(286, "input", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 85)(288, "div", 86)(289, "label");
      \u0275\u0275text(290, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275element(291, "input", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "div", 85)(293, "div", 86)(294, "label");
      \u0275\u0275text(295, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "mat-select", 54);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_296_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
        return $event;
      });
      \u0275\u0275elementStart(297, "mat-option", 55);
      \u0275\u0275text(298, "Choose");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(299, "div", 67)(300, "div", 88)(301, "label");
      \u0275\u0275text(302, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "ngx-editor", 89);
      \u0275\u0275element(304, "ngx-editor-menu", 90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(305, "div", 91)(306, "button", 92);
      \u0275\u0275text(307, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "button", 93);
      \u0275\u0275text(309, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(310, "div", 94)(311, "div", 95)(312, "div", 43)(313, "div", 96)(314, "div", 97)(315, "div", 98)(316, "div", 99)(317, "div", 2)(318, "h4");
      \u0275\u0275text(319, "Edit Quotation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "button", 47)(321, "span", 48);
      \u0275\u0275text(322, "\xD7");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(323, "div", 100)(324, "div", 29)(325, "form")(326, "div", 50)(327, "div", 101)(328, "div", 62)(329, "label");
      \u0275\u0275text(330, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "div", 50)(332, "div", 53)(333, "mat-select", 54);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_333_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275elementStart(334, "mat-option", 102);
      \u0275\u0275text(335, "Thomas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "mat-option", 103);
      \u0275\u0275text(337, "Rose");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(338, "div", 104)(339, "div", 105)(340, "a", 106);
      \u0275\u0275element(341, "i", 107);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(342, "div", 101)(343, "div", 62)(344, "label");
      \u0275\u0275text(345, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "div", 108);
      \u0275\u0275element(347, "i", 109)(348, "input", 110);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(349, "div", 101)(350, "div", 62)(351, "label");
      \u0275\u0275text(352, "Reference Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(353, "input", 111);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "div", 112)(355, "div", 62)(356, "label");
      \u0275\u0275text(357, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 68);
      \u0275\u0275element(359, "input", 69);
      \u0275\u0275elementStart(360, "div", 70);
      \u0275\u0275element(361, "img", 113);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(362, "div", 114)(363, "table", 73)(364, "thead")(365, "tr")(366, "th");
      \u0275\u0275text(367, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "th");
      \u0275\u0275text(369, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "th");
      \u0275\u0275text(371, "Purchase Price($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "th");
      \u0275\u0275text(373, "Discount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "th");
      \u0275\u0275text(375, "Tax(%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "th");
      \u0275\u0275text(377, "Tax Amount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "th");
      \u0275\u0275text(379, "Unit Cost($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "th");
      \u0275\u0275text(381, "Total Cost(%)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(382, "tbody")(383, "tr")(384, "td")(385, "div", 74)(386, "a", 75);
      \u0275\u0275element(387, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "a", 77);
      \u0275\u0275text(389, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(390, "td")(391, "div", 78)(392, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_392_listener() {
        return ctx.reducePos(4);
      });
      \u0275\u0275element(393, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(394, "input", 81);
      \u0275\u0275elementStart(395, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_395_listener() {
        return ctx.addPos(4);
      });
      \u0275\u0275element(396, "i", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(397, "td");
      \u0275\u0275text(398, "2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "td");
      \u0275\u0275text(400, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "td");
      \u0275\u0275text(402, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "td");
      \u0275\u0275text(404, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "td");
      \u0275\u0275text(406, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "td");
      \u0275\u0275text(408, "1500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(409, "tr")(410, "td")(411, "div", 74)(412, "a", 75);
      \u0275\u0275element(413, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "a", 77);
      \u0275\u0275text(415, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(416, "td")(417, "div", 78)(418, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_418_listener() {
        return ctx.reducePos(5);
      });
      \u0275\u0275element(419, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(420, "input", 81);
      \u0275\u0275elementStart(421, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_421_listener() {
        return ctx.addPos(5);
      });
      \u0275\u0275element(422, "i", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(423, "td");
      \u0275\u0275text(424, "3000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "td");
      \u0275\u0275text(426, "400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "td");
      \u0275\u0275text(428, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "td");
      \u0275\u0275text(430, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "td");
      \u0275\u0275text(432, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "td");
      \u0275\u0275text(434, "1700");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(435, "tr")(436, "td")(437, "div", 74)(438, "a", 75);
      \u0275\u0275element(439, "img", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "a", 77);
      \u0275\u0275text(441, "Lobar Handy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(442, "td")(443, "div", 78)(444, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_444_listener() {
        return ctx.reducePos(6);
      });
      \u0275\u0275element(445, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(446, "input", 81);
      \u0275\u0275elementStart(447, "span", 79);
      \u0275\u0275listener("click", function QuotationListComponent_Template_span_click_447_listener() {
        return ctx.addPos(6);
      });
      \u0275\u0275element(448, "i", 82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(449, "td");
      \u0275\u0275text(450, "2500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "td");
      \u0275\u0275text(452, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "td");
      \u0275\u0275text(454, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "td");
      \u0275\u0275text(456, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "td");
      \u0275\u0275text(458, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "td");
      \u0275\u0275text(460, "2000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(461, "div", 50)(462, "div", 115)(463, "div", 116)(464, "ul")(465, "li")(466, "h4");
      \u0275\u0275text(467, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "h5");
      \u0275\u0275text(469, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "li")(471, "h4");
      \u0275\u0275text(472, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "h5");
      \u0275\u0275text(474, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "li")(476, "h4");
      \u0275\u0275text(477, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "h5");
      \u0275\u0275text(479, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(480, "li")(481, "h4");
      \u0275\u0275text(482, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "h5");
      \u0275\u0275text(484, "$5200.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(485, "div", 50)(486, "div", 117)(487, "div", 86)(488, "label");
      \u0275\u0275text(489, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "div", 68);
      \u0275\u0275element(491, "input", 118);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(492, "div", 117)(493, "div", 86)(494, "label");
      \u0275\u0275text(495, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "div", 68);
      \u0275\u0275element(497, "input", 118);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(498, "div", 117)(499, "div", 86)(500, "label");
      \u0275\u0275text(501, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "div", 68);
      \u0275\u0275element(503, "input", 118);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(504, "div", 117)(505, "div", 86)(506, "label");
      \u0275\u0275text(507, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "mat-select", 54);
      \u0275\u0275twoWayListener("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_508_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
        return $event;
      });
      \u0275\u0275elementStart(509, "mat-option", 119);
      \u0275\u0275text(510, "Sent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "mat-option", 120);
      \u0275\u0275text(512, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "mat-option", 121);
      \u0275\u0275text(514, "Inprogress");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(515, "div", 67)(516, "div", 88)(517, "label");
      \u0275\u0275text(518, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "ngx-editor", 89);
      \u0275\u0275element(520, "ngx-editor-menu", 90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(521, "div", 122)(522, "button", 123);
      \u0275\u0275text(523, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "button", 124);
      \u0275\u0275text(525, "Submit");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(526, "div", 125)(527, "div", 126)(528, "div", 43)(529, "div", 127)(530, "div", 128)(531, "form")(532, "div", 129);
      \u0275\u0275element(533, "i", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "h3", 131);
      \u0275\u0275text(535, "Delete Quotation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "p", 132);
      \u0275\u0275text(537, "Are you sure you want to delete quotation?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "div", 133)(539, "button", 134);
      \u0275\u0275text(540, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "button", 135);
      \u0275\u0275text(542, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(543, "div", 136)(544, "div", 126)(545, "div", 43)(546, "div", 137)(547, "div", 2)(548, "h4");
      \u0275\u0275text(549, "Add Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(550, "button", 47)(551, "span", 48);
      \u0275\u0275text(552, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(553, "form")(554, "div", 138)(555, "div")(556, "label", 139);
      \u0275\u0275text(557, "Customer ");
      \u0275\u0275elementStart(558, "span", 140);
      \u0275\u0275text(559, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(560, "input", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "div", 141)(562, "button", 142);
      \u0275\u0275text(563, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "button", 143);
      \u0275\u0275text(565, "Add Customer");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(28, _c0));
      \u0275\u0275advance(73);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 120 : -1);
      \u0275\u0275advance(23);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue5);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(29, _c0));
      \u0275\u0275advance(66);
      \u0275\u0275property("value", ctx.cartValue[1]);
      \u0275\u0275advance(26);
      \u0275\u0275property("value", ctx.cartValue[2]);
      \u0275\u0275advance(26);
      \u0275\u0275property("value", ctx.cartValue[3]);
      \u0275\u0275advance(35);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue6);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c0));
      \u0275\u0275advance(7);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(29);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue7);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
      \u0275\u0275advance(61);
      \u0275\u0275property("value", ctx.cartValue[4]);
      \u0275\u0275advance(26);
      \u0275\u0275property("value", ctx.cartValue[5]);
      \u0275\u0275advance(26);
      \u0275\u0275property("value", ctx.cartValue[6]);
      \u0275\u0275advance(62);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue8);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(32, _c0));
      \u0275\u0275advance(11);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuotationListComponent, [{
    type: Component,
    args: [{ selector: "app-quotation-list", imports: [NgxEditorModule, MatSelectModule, CommonModule, FormsModule, CustomPaginationComponent, MatSortModule, BsDatepickerModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Quotation List</h4>
      <h6>Manage Your Quotation</h6>
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
    class="ti ti-circle-plus me-2"></i>Add Quotation</a>
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
            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)" type="search"
              class="form-control" placeholder="Search" />
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
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro</a>
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
          Customer
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Carl Evans</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Minerva Rameriz</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Robert Lamon</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Patricia Lewis</a>
          </li>
        </ul>
      </div>
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          Status
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Sent</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Ordered</a>
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
    <div class="table-responsive">
      <table matSort (matSortChange)="sortData($event)" class="table  datanew">
        <thead class="thead-light">
          <tr>
            <th class="no-sort">
                <label class="checkboxs"  (click)="selectAll(initChecked)">
                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                  <span class="checkmarks"></span>
                </label>
              </th>
            <th mat-sort-header="productName">Product Name</th>
            <th mat-sort-header="customerName">Custmer Name</th>
            <th mat-sort-header="status">Status</th>
            <th mat-sort-header="grandTotal">Total</th>
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
              <td>
                <div class="d-flex align-items-center me-2">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="assets/img/products/{{data.img2}}" alt="product">
                  </a>
                  <a href="javascript:void(0);">{{data.productName}}</a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="assets/img/users/{{data.img}}" alt="product">
                  </a>
                  <a href="javascript:void(0);">{{data.customer}}</a>
                </div>
              </td>
              <td><span class="badge" [ngClass]="data.status==='Send'?'badge-success':data.status==='Ordered'?'badge-warning':'badge-cyan'">{{data.status}}</span></td>
              <td>{{data.total}}</td>
              <td>
                <div class="edit-delete-action d-flex align-items-center">
                  <a class="me-2 p-2 mb-0 d-flex align-items-center border p-1 rounded" href="javascript:void(0);">
                    <i  class="feather icon-eye"></i>
                  </a>
                  <a class="me-2 p-2 mb-0 d-flex align-items-center border p-1 rounded" data-bs-toggle="modal" data-bs-target="#edit-units">
                    <i  class="feather icon-edit"></i>
                  </a>
                  <a class="me-2 p-2 mb-0 d-flex align-items-center border p-1 rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                    <i  class="feather icon-trash-2"></i>
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

<!--Add Quotation -->
<div class="modal fade" id="add-units">
  <div class="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Add Quotation</h4>
            </div>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body custom-modal-body">
            <form>
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="input-blocks add-product">
                    <label>Customer Name</label>
                    <div class="row">
                      <div class="col-lg-10 col-sm-10 col-10">
                        <mat-select [(ngModel)]="selectedValue5" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                          placeholder="Choose">
                          <mat-option value="Choose">Choose</mat-option>
                          <mat-option value="Benjamin">Benjamin</mat-option>
                          <mat-option value="Nydia Fitzgerald">Nydia Fitzgerald</mat-option>
                        </mat-select>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-2 p-0">
                        <div class="add-icon tab">
                          <a class="btn btn-filter" data-bs-toggle="modal" data-bs-target="#add_customer"><img
                            src="assets/img/icons/plus1.svg" alt="img">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="input-blocks">
                    <label>Date</label>

                    <div class="input-groupicon calender-input date-input1">
                      <i class="feather icon-calendar info-img mt-1"></i>
                      <input type="text" class="datetimepicker form-control" bsDatepicker  container=".date-input1" placeholder="Choose">
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="input-blocks">
                    <label>Reference Number</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="input-blocks">
                    <label>Product Name</label>
                    <div class="input-groupicon select-code">
                      <input type="text" class="form-control p-2" placeholder="Please type product code and select">
                      <div class="addonset">
                        <img src="assets/img/icons/qrcode-scan.svg" alt="img">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="modal-body-table">
                    <div class="table-responsive">
                      <table class="table  datanew">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Purchase Price($)</th>
                            <th>Discount($)</th>
                            <th>Tax(%)</th>
                            <th>Tax Amount($)</th>
                            <th>Unit Cost($)</th>
                            <th>Total Cost(%)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="productimgname">
                                <a href="javascript:void(0);" class="product-img stock-img">
                                  <img src="assets/img/products/stock-img-02.png" alt="product">
                                </a>
                                <a href="javascript:void(0);">Nike Jordan</a>
                              </div>
                            </td>
                            <td>
                              <div class="product-quantity">
                                <span class="quantity-btn" (click)="reducePos(1)"><i
                                class="feather icon-minus-circle plus-circle"></i></span>
                                <input type="text" class="quntity-input" value="2" [value]="cartValue[1]">
                                <span class="quantity-btn" (click)="addPos(1)"><i
                                class="ti ti-circle-plus feather-search"></i></span>
                              </div>
                            </td>
                            <td>2000</td>
                            <td>500</td>
                            <td>
                              0.00
                            </td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>1500</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="productimgname">
                                <a href="javascript:void(0);" class="product-img stock-img">
                                  <img src="assets/img/products/stock-img-03.png" alt="product">
                                </a>
                                <a href="javascript:void(0);">Apple Series 5 Watch</a>
                              </div>
                            </td>
                            <td>
                              <div class="product-quantity">
                                <span class="quantity-btn" (click)="reducePos(2)"><i
                                class="feather icon-minus-circle plus-circle"></i></span>
                                <input type="text" class="quntity-input" value="2" [value]="cartValue[2]">
                                <span class="quantity-btn" (click)="addPos(2)"><i
                                class="ti ti-circle-plus feather-search"></i></span>
                              </div>
                            </td>
                            <td>3000</td>
                            <td>400</td>
                            <td>
                              0.00
                            </td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>1700</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="productimgname">
                                <a href="javascript:void(0);" class="product-img stock-img">
                                  <img src="assets/img/products/stock-img-05.png" alt="product">
                                </a>
                                <a href="javascript:void(0);">Lobar Handy</a>
                              </div>
                            </td>
                            <td>
                              <div class="product-quantity">
                                <span class="quantity-btn" (click)="reducePos(3)"><i
                                class="feather icon-minus-circle plus-circle"></i></span>
                                <input type="text" class="quntity-input" value="2" [value]="cartValue[3]">
                                <span class="quantity-btn" (click)="addPos(3)"><i
                                class="ti ti-circle-plus feather-search"></i></span>
                              </div>
                            </td>
                            <td>2500</td>
                            <td>500</td>
                            <td>
                              0.00
                            </td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>2000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks mb-3">
                      <label>Order Tax</label>
                      <input type="text" class="form-control p-2" value="0">
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks mb-3">
                      <label>Discount</label>
                      <input type="text" class="form-control p-2" value="0">
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks mb-3">
                      <label>Shipping</label>
                      <input type="text" class="form-control p-2" value="0">
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="input-blocks mb-3">
                      <label>Status</label>
                      <mat-select [(ngModel)]="selectedValue6" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                        placeholder="Choose">
                        <mat-option value="Choose">Choose</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="input-blocks summer-description-box">
                  <label>Description</label>
                  <ngx-editor [editor]="editor">
                    <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                    </ngx-editor-menu>
                 </ngx-editor>
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
<!-- /Add Quotation -->

<!-- edit popup -->
<div class="modal fade" id="edit-units">
  <div class="modal-dialog edit-sales-modal">
    <div class="modal-content">
      <div class="page-wrapper p-0 m-0">
        <div class="content p-0">
          <div class="page-header p-4 mb-0">
            <div class="add-item new-sale-items d-flex">
              <div class="page-title">
                <h4>Edit Quotation</h4>
              </div>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Customer Name</label>
                      <div class="row">
                        <div class="col-lg-10 col-sm-10 col-10">
                          <mat-select [(ngModel)]="selectedValue7" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                            placeholder="Choose">
                            <mat-option value="Thomas">Thomas</mat-option>
                            <mat-option value="Rose">Rose</mat-option>
                          </mat-select>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-2 ps-0">
                          <div class="add-icon">
                            <a href="javascript:void(0);" class="choose-add" data-bs-toggle="modal" data-bs-target="#add_customer"><i class="ti ti-circle-plus plus"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Date</label>
                      <div class="input-groupicon calender-input date-input2">
                        <i class="feather icon-calendar info-img"></i>
                        <input type="text" class="datetimepicker form-control" bsDatepicker  container=".date-input2" placeholder="19 jan 2023">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Reference Number</label>
                      <input type="text" placeholder="010203" class="form-control p-2">
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Product Name</label>
                      <div class="input-groupicon select-code">
                        <input type="text" class="form-control p-2" placeholder="Please type product code and select">
                        <div class="addonset">
                          <img src="assets/img/icons/scanners.svg" alt="img">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive no-pagination">
                  <table class="table  datanew">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Purchase Price($)</th>
                        <th>Discount($)</th>
                        <th>Tax(%)</th>
                        <th>Tax Amount($)</th>
                        <th>Unit Cost($)</th>
                        <th>Total Cost(%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="productimgname">
                            <a href="javascript:void(0);" class="product-img stock-img">
                              <img src="assets/img/products/stock-img-02.png" alt="product">
                            </a>
                            <a href="javascript:void(0);">Nike Jordan</a>
                          </div>
                        </td>
                        <td>
                          <div class="product-quantity">
                            <span class="quantity-btn" (click)="reducePos(4)"><i
                            class="feather icon-minus-circle plus-circle"></i></span>
                            <input type="text" class="quntity-input" value="2" [value]="cartValue[4]">
                            <span class="quantity-btn" (click)="addPos(4)"><i
                            class="ti ti-circle-plus feather-search"></i></span>
                          </div>
                        </td>
                        <td>2000</td>
                        <td>500</td>
                        <td>
                          0.00
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>1500</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="productimgname">
                            <a href="javascript:void(0);" class="product-img stock-img">
                              <img src="assets/img/products/stock-img-03.png" alt="product">
                            </a>
                            <a href="javascript:void(0);">Apple Series 5 Watch</a>
                          </div>
                        </td>
                        <td>
                          <div class="product-quantity">
                            <span class="quantity-btn" (click)="reducePos(5)"><i
                            class="feather icon-minus-circle plus-circle"></i></span>
                            <input type="text" class="quntity-input" value="2" [value]="cartValue[5]">
                            <span class="quantity-btn" (click)="addPos(5)"><i
                            class="ti ti-circle-plus feather-search"></i></span>
                          </div>
                        </td>
                        <td>3000</td>
                        <td>400</td>
                        <td>
                          0.00
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>1700</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="productimgname">
                            <a href="javascript:void(0);" class="product-img stock-img">
                              <img src="assets/img/products/stock-img-05.png" alt="product">
                            </a>
                            <a href="javascript:void(0);">Lobar Handy</a>
                          </div>
                        </td>
                        <td>
                          <div class="product-quantity">
                            <span class="quantity-btn" (click)="reducePos(6)"><i
                            class="feather icon-minus-circle plus-circle"></i></span>
                            <input type="text" class="quntity-input" value="2" [value]="cartValue[6]">
                            <span class="quantity-btn" (click)="addPos(6)"><i
                            class="ti ti-circle-plus feather-search"></i></span>
                          </div>
                        </td>
                        <td>2500</td>
                        <td>500</td>
                        <td>
                          0.00
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>2000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="row">
                  <div class="col-lg-6 ms-auto">
                    <div class="total-order w-100 max-widthauto m-auto mb-4">
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
                        <li>
                          <h4>Grand Total</h4>
                          <h5>$5200.00</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks mb-3">
                      <label>Order Tax</label>
                      <div class="input-groupicon select-code">
                        <input type="text" class="form-control p-2" placeholder="0">
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks mb-3">
                      <label>Discount</label>
                      <div class="input-groupicon select-code">
                        <input type="text" class="form-control p-2" placeholder="0">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks mb-3">
                      <label>Shipping</label>
                      <div class="input-groupicon select-code">
                        <input type="text" class="form-control p-2" placeholder="0">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks mb-3">
                      <label>Status</label>
                      <mat-select [(ngModel)]="selectedValue8" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                        placeholder="Choose">
                        <mat-option value="Sent">Sent</mat-option>
                        <mat-option value="Completed">Completed</mat-option>
                        <mat-option value="Inprogress">Inprogress</mat-option>
                      </mat-select>
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
                  <div class="col-lg-12 text-end">
                    <button type="button" class="btn btn-cancel add-cancel me-3" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-submit add-sale">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /edit popup -->


		<!-- Delete -->
		<div class="modal fade modal-default" id="delete">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body p-0">
						<div class="success-wrap text-center">
							<form >
								<div class="icon-success bg-danger-transparent text-danger mb-2">
									<i class="ti ti-trash"></i>
								</div>
								<h3 class="mb-2">Delete Quotation</h3>
								<p class="fs-16 mb-3">Are you sure you want to delete quotation?</p>
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
		<!-- /Delete -->

    		<!-- Add Customer -->
		<div class="modal fade" id="add_customer">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Add Customer</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form>
						<div class="modal-body">
							<div>
								<label class="form-label">Customer <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>												
						</div>
						<div class="modal-footer">
							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
							<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Customer</button>
						</div>						
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Customer -->
` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuotationListComponent, { className: "QuotationListComponent", filePath: "src/app/features/pages/sales/quotation-list/quotation-list.component.ts", lineNumber: 27 });
})();
export {
  QuotationListComponent
};
//# sourceMappingURL=chunk-VAULBWQW.js.map
