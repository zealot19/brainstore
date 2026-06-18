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
  Router,
  RouterLink
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/inventory/product/product-list/product-list.component.ts
var _c0 = () => ({ standalone: true });
function ProductListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ProductListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ProductListComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 168)(3, "input", 272);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_For_99_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 273)(8, "div", 274)(9, "a", 275);
    \u0275\u0275element(10, "img", 276);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 63);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 277)(25, "a", 278);
    \u0275\u0275element(26, "img", 276);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 63);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "td", 165)(30, "div", 166)(31, "a", 279);
    \u0275\u0275element(32, "i", 280);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 281);
    \u0275\u0275element(34, "i", 282);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 283);
    \u0275\u0275element(36, "i", 173);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", data_r2.SKU, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r2.img1, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.product, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.qty);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", data_r2.img2, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdBy);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.productDetails);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.routes.editProduct);
  }
}
function ProductListComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 284);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var ProductListComponent = class _ProductListComponent {
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
  selectedValue14 = "";
  selectedValue15 = "";
  selectedValue16 = "";
  selectedValue17 = "";
  selectedValue18 = "";
  selectedValue19 = "";
  selectedValue20 = "";
  selectedValue21 = "";
  selectedValue22 = "";
  selectedValue23 = "";
  selectedValue24 = "";
  selectedValue25 = "";
  selectedValue26 = "";
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
        if (this.router.url == this.routes.productList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getProductList().subscribe((apiRes) => {
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
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 899, vars: 68, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "ti", "ti-circle-plus", "me-2"], [1, "page-btn", "import"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-notes", 1, "btn", "btn-secondary", "color"], [1, "feather", "icon-download", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "ti", "ti-search", "fs-14", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "thead-light"], ["matSort", "", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "SKU"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], ["mat-sort-header", "brand"], ["mat-sort-header", "price"], ["mat-sort-header", "unit"], ["mat-sort-header", "qty"], ["mat-sort-header", "createdBy"], ["tabindex", "-1", "id", "offcanvasRight-add", 1, "offcanvas", "offcanvas-end", "em-payrol-add"], [1, "offcanvas-body", "p-0"], [1, "page-wrapper-new"], [1, "content"], [1, "page-header", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-primary"], [1, "feather", "icon-arrow-left", "me-2"], [1, "card", "mb-0"], [1, "card-body", "add-product", "pb-0", "ps-0", "pe-0"], ["id", "accordionExample", 1, "accordion-card-one", "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button"], [1, "addproduct-icon"], [1, "feather", "icon-info", "add-info"], ["href", "javascript:void(0);"], [1, "feather", "icon-chevron-down", "chevron-down-add"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "row"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "mb-3", "add-product"], [1, "form-label"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], ["value", "Computers"], ["type", "text", 1, "form-control"], [1, "form-group", "add-product", "list"], ["type", "text", "placeholder", "Enter SKU", 1, "form-control", "list"], ["type", "submit", 1, "btn", "btn-primaryadd"], [1, "addservice-info"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-category"], [1, "ti", "ti-circle-plus", "plus-down-add"], [1, "add-product-new"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-brand"], ["value", "Nike"], ["value", "Bolt"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-unit"], ["value", "Kg"], ["value", "Pc"], [1, "col-lg-6", "col-sm-6", "col-12"], ["value", "Code34"], ["type", "text", "placeholder", "Please Enter Item Code", 1, "form-control", "list"], [1, "col-lg-12"], [1, "form-group", "summer-description-box", "transfer", "mb-3"], ["id", "summernote3"], ["id", "accordionExample2", 1, "accordion-card-one", "accordion"], ["id", "headingTwo", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button"], [1, "text-editor", "add-list"], [1, "addproduct-icon", "list", "icon"], [1, "feather", "icon-life-buoy", "add-info"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample2", 1, "accordion-collapse", "collapse", "show"], [1, "form-group", "add-products"], [1, "d-block"], [1, "single-pill-product"], ["id", "pills-tab1", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "custom_radio", "me-4", "mb-0", "active"], ["type", "radio", "name", "payment", 1, "form-control"], [1, "checkmark"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "custom_radio", "me-2", "mb-0"], ["type", "radio", "name", "sign", 1, "form-control"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "form-group", "add-product"], ["value", "Type"], ["type", "text", "placeholder", "Choose"], ["id", "accordionExample3", 1, "accordion-card-one", "accordion"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button"], [1, "addproduct-icon", "list"], [1, "feather", "icon-image", "add-info"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample3", 1, "accordion-collapse", "collapse", "show"], [1, "text-editor", "add-list", "add"], [1, "add-choosen"], [1, "input-blocks"], [1, "image-upload"], ["type", "file"], [1, "image-uploads"], [1, "phone-img"], ["src", "assets/img/products/phone-add-2.png", "alt", "image"], [1, "feather", "icon-x", "x-square-add", "remove-product"], ["src", "assets/img/products/phone-add-1.png", "alt", "image"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "row", "select-color-add"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", "id", "colorSelect", 1, "form-control", "variant-select", "select-option", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Color"], ["value", "red"], ["value", "black"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-filter"], [1, "feather", "feather-plus-circle"], ["id", "input-show", 1, "selected-hide-color"], [1, "row", "align-items-center"], [1, "col-sm-10"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "specialist", "value", "red, black", 1, "input-tags", "form-control"], [1, "col-sm-2"], [1, "form-group"], ["href", "javascript:void(0);", 1, "remove-color"], [1, "far", "fa-trash-alt"], ["id", "variant-table", 1, "modal-body-table", "variant-table"], [1, "table-responsive"], [1, "table"], [1, "add-product"], ["type", "text", "value", "color", 1, "form-control"], ["type", "text", "value", "red", 1, "form-control"], ["type", "text", "value", "1234", 1, "form-control"], [1, "product-quantity"], [1, "quantity-btn"], [1, "ti", "ti-circle-plus", "plus-circle"], ["type", "text", "value", "2", 1, "quntity-input"], [1, "feather", "icon-minus-circle", "feather-search"], ["type", "text", "value", "50000", 1, "form-control"], [1, "action-table-data"], [1, "edit-delete-action"], [1, "input-block", "add-lists"], [1, "checkboxs"], ["type", "checkbox", "checked", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "me-2", "p-2"], [1, "feather", "icon-plus", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["type", "text", "value", "black", 1, "form-control"], ["type", "text", "value", "2345", 1, "form-control"], ["type", "text", "value", "3", 1, "quntity-input"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], ["href", "javascript:void(0);", 1, "p-2"], ["id", "accordionExample4", 1, "accordion-card-one", "accordion"], ["id", "headingFour", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button"], [1, "feather", "icon-list", "add-info"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample4", 1, "accordion-collapse", "collapse", "show"], [1, "custom-filed"], ["type", "checkbox"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose Date", 1, "datetimepicker"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "Choose Date", 1, "datetimepicker"], [1, "btn-addproduct", "mb-4"], [1, "btn", "btn-cancel", 3, "routerLink"], ["href", "javascript:void(0);", 1, "btn", "btn-submit", "me-2"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-6"], [1, "nav", "user-menu"], [1, "nav-item", "nav-searchinputs"], [1, "top-nav-search"], [1, "dropdown"], ["id", "dropdownMenuClickable2", "data-bs-toggle", "dropdown", "data-bs-auto-close", "false", 1, "searchinputs", "list", "dropdown-toggle"], ["type", "text", "placeholder", "Search"], [1, "feather", "icon-search", "feather-16", "icon"], [1, "search-addon", "d-none"], [1, "feather", "icon-x-circle", "feather-14"], ["aria-labelledby", "dropdownMenuClickable", 1, "dropdown-menu", "search-dropdown", "idea"], [1, "search-info"], [1, "modal-footer-btn", "popup"], ["href", "javascript:void(0);", 1, "btn", "btn-cancel", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-submit"], ["id", "add-units-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "mb-3"], [1, "modal-footer-btn"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], [1, "btn", "btn-submit", 3, "routerLink"], ["id", "add-units-brand", 1, "modal", "fade"], ["id", "add-unit", 1, "modal", "fade"], ["id", "add-variation", 1, "modal", "fade"], [1, "modal-title-head", "people-cust-avatar"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "image-upload", "mb-0"], [1, "col-lg-6", "pe-0"], ["type", "text", "value", "455454478844", 1, "form-control", "list"], [1, "form-group", "image-upload-down"], [1, "image-upload", "download"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "add-choosen", "mb-3"], [1, "phone-img", "ms-0"], ["value", "Direct"], ["value", "Indirect"], ["value", "Income Tax"], ["value", "Service Tax"], [1, "col-lg-12", "pe-0"], ["value", "Percentage"], ["value", "Early Payment"], ["id", "view-notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "contents"], [1, "modal-header"], [1, "modal-body"], [1, "col-12"], [1, "ms-1", "text-danger"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-sm-6", "col-12"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "modal-footer-btn", "download-file"], ["href", "javascript:void(0)", 1, "btn", "btn-submit"], [1, "mb-3", "image-upload-down"], [1, "mb-3", "mb-3"], [1, "form-control"], [1, "mt-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "sorting_1"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm"], [1, "me-2", "edit-icon", "p-2", 3, "routerLink"], [1, "feather", "icon-eye", "feather-eye"], [1, "me-2", "p-2", 3, "routerLink"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["colspan", "10", 1, "text-center"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Product List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your products");
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
      \u0275\u0275listener("click", function ProductListComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, ProductListComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, ProductListComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add New Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15)(26, "a", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275text(28, "Import Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "a", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24)(36, "label")(37, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_37_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 26)(39, "div", 27)(40, "a", 28);
      \u0275\u0275text(41, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 29)(43, "li")(44, "a", 30);
      \u0275\u0275text(45, "Computers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 30);
      \u0275\u0275text(48, "Electronics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 30);
      \u0275\u0275text(51, "Shoe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 30);
      \u0275\u0275text(54, "Electronics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 27)(56, "a", 28);
      \u0275\u0275text(57, " Brand ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul", 29)(59, "li")(60, "a", 30);
      \u0275\u0275text(61, "Lenovo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 30);
      \u0275\u0275text(64, "Beats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 30);
      \u0275\u0275text(67, "Nike");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 30);
      \u0275\u0275text(70, "Apple");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(71, "div", 31)(72, "div", 32)(73, "table", 33)(74, "thead", 34)(75, "tr", 35);
      \u0275\u0275listener("matSortChange", function ProductListComponent_Template_tr_matSortChange_75_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(76, "th", 36)(77, "label", 37);
      \u0275\u0275listener("click", function ProductListComponent_Template_label_click_77_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(78, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_78_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "th", 40);
      \u0275\u0275text(81, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 41);
      \u0275\u0275text(83, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 42);
      \u0275\u0275text(85, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 43);
      \u0275\u0275text(87, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 44);
      \u0275\u0275text(89, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 45);
      \u0275\u0275text(91, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 46);
      \u0275\u0275text(93, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 47);
      \u0275\u0275text(95, "Created by");
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "th", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "tbody");
      \u0275\u0275repeaterCreate(98, ProductListComponent_For_99_Template, 37, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(100, ProductListComponent_Conditional_100_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(101, "app-custom-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 48)(103, "div", 49)(104, "div", 50)(105, "div", 51)(106, "div", 52)(107, "div", 2)(108, "h4");
      \u0275\u0275text(109, "Create New Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 12)(111, "a", 53);
      \u0275\u0275element(112, "i", 54);
      \u0275\u0275text(113, "Back to Product List");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "div", 55)(115, "div", 56)(116, "div", 57)(117, "div", 58)(118, "div", 59)(119, "div", 60)(120, "div", 61)(121, "h5");
      \u0275\u0275element(122, "i", 62);
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Product Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "a", 63);
      \u0275\u0275element(126, "i", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(127, "div", 65)(128, "div", 66)(129, "div", 67)(130, "div", 68)(131, "div", 69)(132, "label", 70);
      \u0275\u0275text(133, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_134_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275elementStart(135, "mat-option", 72);
      \u0275\u0275text(136, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "mat-option", 73);
      \u0275\u0275text(138, "Computers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(139, "div", 68)(140, "div", 69)(141, "label", 70);
      \u0275\u0275text(142, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_143_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
        return $event;
      });
      \u0275\u0275elementStart(144, "mat-option", 72);
      \u0275\u0275text(145, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "mat-option", 73);
      \u0275\u0275text(147, "Computers");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(148, "div", 67)(149, "div", 68)(150, "div", 69)(151, "label", 70);
      \u0275\u0275text(152, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(153, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 68)(155, "div", 69)(156, "label", 70);
      \u0275\u0275text(157, "Slug");
      \u0275\u0275elementEnd();
      \u0275\u0275element(158, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 68)(160, "div", 75)(161, "label");
      \u0275\u0275text(162, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275element(163, "input", 76);
      \u0275\u0275elementStart(164, "button", 77);
      \u0275\u0275text(165, " Generate Code ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 78)(167, "div", 67)(168, "div", 68)(169, "div", 69)(170, "div", 79)(171, "label", 70);
      \u0275\u0275text(172, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "a", 80);
      \u0275\u0275element(174, "i", 81);
      \u0275\u0275elementStart(175, "span");
      \u0275\u0275text(176, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_177_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
        return $event;
      });
      \u0275\u0275elementStart(178, "mat-option", 72);
      \u0275\u0275text(179, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "mat-option", 73);
      \u0275\u0275text(181, "Computers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(182, "div", 68)(183, "div", 69)(184, "label", 70);
      \u0275\u0275text(185, "Choose Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_186_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
        return $event;
      });
      \u0275\u0275elementStart(187, "mat-option", 72);
      \u0275\u0275text(188, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "mat-option", 73);
      \u0275\u0275text(190, "Computers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(191, "div", 68)(192, "div", 69)(193, "label", 70);
      \u0275\u0275text(194, "Sub Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_195_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
        return $event;
      });
      \u0275\u0275elementStart(196, "mat-option", 72);
      \u0275\u0275text(197, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "mat-option", 73);
      \u0275\u0275text(199, "Computers");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(200, "div", 82)(201, "div", 67)(202, "div", 68)(203, "div", 69)(204, "div", 79)(205, "label", 70);
      \u0275\u0275text(206, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "a", 83);
      \u0275\u0275element(208, "i", 81);
      \u0275\u0275elementStart(209, "span");
      \u0275\u0275text(210, "Add new");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_211_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
        return $event;
      });
      \u0275\u0275elementStart(212, "mat-option", 72);
      \u0275\u0275text(213, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "mat-option", 84);
      \u0275\u0275text(215, "Nike");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "mat-option", 85);
      \u0275\u0275text(217, "Bolt");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(218, "div", 68)(219, "div", 69)(220, "div", 79)(221, "label", 70);
      \u0275\u0275text(222, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "a", 86);
      \u0275\u0275element(224, "i", 81);
      \u0275\u0275elementStart(225, "span");
      \u0275\u0275text(226, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(227, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_227_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue13, $event) || (ctx.selectedValue13 = $event);
        return $event;
      });
      \u0275\u0275elementStart(228, "mat-option", 72);
      \u0275\u0275text(229, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "mat-option", 87);
      \u0275\u0275text(231, "Kg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "mat-option", 88);
      \u0275\u0275text(233, "Pc");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(234, "div", 68)(235, "div", 69)(236, "label", 70);
      \u0275\u0275text(237, "Selling Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_238_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue14, $event) || (ctx.selectedValue14 = $event);
        return $event;
      });
      \u0275\u0275elementStart(239, "mat-option", 72);
      \u0275\u0275text(240, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "mat-option", 73);
      \u0275\u0275text(242, "Computers");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(243, "div", 67)(244, "div", 89)(245, "div", 69)(246, "label", 70);
      \u0275\u0275text(247, "Barcode Symbology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_248_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue15, $event) || (ctx.selectedValue15 = $event);
        return $event;
      });
      \u0275\u0275elementStart(249, "mat-option", 72);
      \u0275\u0275text(250, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "mat-option", 90);
      \u0275\u0275text(252, "Code34");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(253, "div", 89)(254, "div", 75)(255, "label");
      \u0275\u0275text(256, "Item Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(257, "input", 91);
      \u0275\u0275elementStart(258, "button", 77);
      \u0275\u0275text(259, " Generate Code ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(260, "div", 67)(261, "div", 92)(262, "div", 93)(263, "label");
      \u0275\u0275text(264, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(265, "div", 94);
      \u0275\u0275elementStart(266, "p");
      \u0275\u0275text(267, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(268, "div", 95)(269, "div", 58)(270, "div", 96)(271, "div", 97)(272, "div", 98)(273, "div", 99)(274, "h5");
      \u0275\u0275element(275, "i", 100);
      \u0275\u0275elementStart(276, "span");
      \u0275\u0275text(277, "Pricing & Stocks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "a", 63);
      \u0275\u0275element(279, "i", 64);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(280, "div", 101)(281, "div", 66)(282, "div", 102)(283, "label", 103);
      \u0275\u0275text(284, "Product Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 104)(286, "ul", 105)(287, "li", 106)(288, "span", 107);
      \u0275\u0275element(289, "input", 108)(290, "span", 109);
      \u0275\u0275text(291, " Single Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "li", 106)(293, "span", 110);
      \u0275\u0275element(294, "input", 111)(295, "span", 109);
      \u0275\u0275text(296, " Variable Product");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(297, "div", 112)(298, "div", 113)(299, "div", 67)(300, "div", 68)(301, "div", 114)(302, "label");
      \u0275\u0275text(303, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(304, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 68)(306, "div", 114)(307, "label");
      \u0275\u0275text(308, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(309, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "div", 68)(311, "div", 114)(312, "label");
      \u0275\u0275text(313, "Tax Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_314_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue16, $event) || (ctx.selectedValue16 = $event);
        return $event;
      });
      \u0275\u0275elementStart(315, "mat-option", 72);
      \u0275\u0275text(316, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 115);
      \u0275\u0275text(318, "Type");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(319, "div", 67)(320, "div", 68)(321, "div", 114)(322, "label");
      \u0275\u0275text(323, "Discount Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_324_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue17, $event) || (ctx.selectedValue17 = $event);
        return $event;
      });
      \u0275\u0275elementStart(325, "mat-option", 72);
      \u0275\u0275text(326, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "mat-option", 115);
      \u0275\u0275text(328, "Type");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(329, "div", 68)(330, "div", 114)(331, "label");
      \u0275\u0275text(332, "Discount Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(333, "input", 116);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "div", 68)(335, "div", 114)(336, "label");
      \u0275\u0275text(337, "Quantity Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(338, "input", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(339, "div", 117)(340, "div", 58)(341, "div", 118)(342, "div", 119)(343, "div", 120)(344, "h5");
      \u0275\u0275element(345, "i", 121);
      \u0275\u0275elementStart(346, "span");
      \u0275\u0275text(347, "Images");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "a", 63);
      \u0275\u0275element(349, "i", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(350, "div", 122)(351, "div", 66)(352, "div", 123)(353, "div", 92)(354, "div", 124)(355, "div", 125)(356, "div", 126);
      \u0275\u0275element(357, "input", 127);
      \u0275\u0275elementStart(358, "div", 128);
      \u0275\u0275element(359, "i", 81);
      \u0275\u0275elementStart(360, "h4");
      \u0275\u0275text(361, "Add Images");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(362, "div", 129);
      \u0275\u0275element(363, "img", 130);
      \u0275\u0275elementStart(364, "a", 63);
      \u0275\u0275element(365, "i", 131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "div", 129);
      \u0275\u0275element(367, "img", 132);
      \u0275\u0275elementStart(368, "a", 63);
      \u0275\u0275element(369, "i", 131);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(370, "div", 133)(371, "div", 134)(372, "div", 89)(373, "div", 114)(374, "label");
      \u0275\u0275text(375, "Variant Attribute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "div", 67)(377, "div", 135)(378, "mat-select", 136);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_378_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue18, $event) || (ctx.selectedValue18 = $event);
        return $event;
      });
      \u0275\u0275elementStart(379, "mat-option", 72);
      \u0275\u0275text(380, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "mat-option", 137);
      \u0275\u0275text(382, "Color");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "mat-option", 138);
      \u0275\u0275text(384, "Red");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "mat-option", 139);
      \u0275\u0275text(386, "Black");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(387, "div", 140)(388, "div", 141)(389, "a", 142);
      \u0275\u0275element(390, "i", 143);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(391, "div", 144)(392, "div", 145)(393, "div", 146)(394, "div", 125);
      \u0275\u0275element(395, "input", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(396, "div", 148)(397, "div", 149)(398, "a", 150);
      \u0275\u0275element(399, "i", 151);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(400, "div", 152)(401, "div", 153)(402, "table", 154)(403, "thead")(404, "tr")(405, "th");
      \u0275\u0275text(406, "Variantion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "th");
      \u0275\u0275text(408, "Variant Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "th");
      \u0275\u0275text(410, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "th");
      \u0275\u0275text(412, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "th");
      \u0275\u0275text(414, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "th", 36);
      \u0275\u0275text(416, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(417, "tbody")(418, "tr")(419, "td")(420, "div", 155);
      \u0275\u0275element(421, "input", 156);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(422, "td")(423, "div", 155);
      \u0275\u0275element(424, "input", 157);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(425, "td")(426, "div", 155);
      \u0275\u0275element(427, "input", 158);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "td")(429, "div", 159)(430, "span", 160);
      \u0275\u0275text(431, "+");
      \u0275\u0275element(432, "i", 161);
      \u0275\u0275elementEnd();
      \u0275\u0275element(433, "input", 162);
      \u0275\u0275elementStart(434, "span", 160);
      \u0275\u0275element(435, "i", 163);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(436, "td")(437, "div", 155);
      \u0275\u0275element(438, "input", 164);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "td", 165)(440, "div", 166)(441, "div", 167)(442, "label", 168);
      \u0275\u0275element(443, "input", 169)(444, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "a", 170);
      \u0275\u0275element(446, "i", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "a", 172);
      \u0275\u0275element(448, "i", 173);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(449, "tr")(450, "td")(451, "div", 155);
      \u0275\u0275element(452, "input", 156);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(453, "td")(454, "div", 155);
      \u0275\u0275element(455, "input", 174);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(456, "td")(457, "div", 155);
      \u0275\u0275element(458, "input", 175);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(459, "td")(460, "div", 159)(461, "span", 160);
      \u0275\u0275text(462, "+");
      \u0275\u0275element(463, "i", 161);
      \u0275\u0275elementEnd();
      \u0275\u0275element(464, "input", 176);
      \u0275\u0275elementStart(465, "span", 160);
      \u0275\u0275element(466, "i", 163);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(467, "td")(468, "div", 155);
      \u0275\u0275element(469, "input", 164);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "td", 165)(471, "div", 166)(472, "div", 167)(473, "label", 168);
      \u0275\u0275element(474, "input", 169)(475, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(476, "a", 177);
      \u0275\u0275element(477, "i", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "a", 178);
      \u0275\u0275element(479, "i", 173);
      \u0275\u0275elementEnd()()()()()()()()()()()()()();
      \u0275\u0275elementStart(480, "div", 179)(481, "div", 58)(482, "div", 180)(483, "div", 181)(484, "div", 98)(485, "div", 120)(486, "h5");
      \u0275\u0275element(487, "i", 182);
      \u0275\u0275elementStart(488, "span");
      \u0275\u0275text(489, "Custom Fields");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "a", 63);
      \u0275\u0275element(491, "i", 64);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(492, "div", 183)(493, "div", 66)(494, "div", 123)(495, "div", 184)(496, "div", 167)(497, "label", 168);
      \u0275\u0275element(498, "input", 185)(499, "span", 39);
      \u0275\u0275text(500, "Warranties ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "label", 168);
      \u0275\u0275element(502, "input", 185)(503, "span", 39);
      \u0275\u0275text(504, "Manufacturer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "label", 168);
      \u0275\u0275element(506, "input", 185)(507, "span", 39);
      \u0275\u0275text(508, "Expiry ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(509, "div", 67)(510, "div", 68)(511, "div", 114)(512, "label");
      \u0275\u0275text(513, "Discount Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_514_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue19, $event) || (ctx.selectedValue19 = $event);
        return $event;
      });
      \u0275\u0275elementStart(515, "mat-option", 72);
      \u0275\u0275text(516, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "mat-option", 115);
      \u0275\u0275text(518, "Type");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(519, "div", 67)(520, "div", 68)(521, "div", 114)(522, "label");
      \u0275\u0275text(523, "Quantity Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(524, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(525, "div", 68)(526, "div", 125)(527, "label");
      \u0275\u0275text(528, "Manufactured Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "div", 186);
      \u0275\u0275element(530, "i", 187)(531, "input", 188);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(532, "div", 68)(533, "div", 125)(534, "label");
      \u0275\u0275text(535, "Expiry On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "div", 189);
      \u0275\u0275element(537, "i", 187)(538, "input", 190);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(539, "div", 191)(540, "a", 192);
      \u0275\u0275text(541, "Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "a", 193);
      \u0275\u0275text(543, "Save Product");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(544, "div", 194)(545, "div", 195)(546, "div", 196)(547, "div", 197)(548, "div", 51)(549, "div", 198)(550, "div", 2)(551, "h4");
      \u0275\u0275text(552, "Add Variation Attribute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "button", 199)(554, "span", 200);
      \u0275\u0275text(555, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(556, "div", 201)(557, "div", 67)(558, "div", 92)(559, "div", 125)(560, "label");
      \u0275\u0275text(561, "Attribute Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(562, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(563, "div", 92)(564, "div", 125)(565, "label");
      \u0275\u0275text(566, "Add Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(567, "input", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(568, "div", 67)(569, "div", 202)(570, "ul", 203)(571, "li", 204)(572, "div", 205)(573, "form", 206)(574, "div", 207);
      \u0275\u0275element(575, "input", 208)(576, "i", 209);
      \u0275\u0275elementStart(577, "div", 210)(578, "span");
      \u0275\u0275element(579, "i", 211);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(580, "div", 212)(581, "div", 213)(582, "p");
      \u0275\u0275text(583, "Black ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "p");
      \u0275\u0275text(585, "Red");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "p");
      \u0275\u0275text(587, "Green");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "p");
      \u0275\u0275text(589, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "p");
      \u0275\u0275text(591, "M");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(592, "div", 202)(593, "div", 214)(594, "a", 215);
      \u0275\u0275text(595, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "a", 216);
      \u0275\u0275text(597, "Create Adjustment");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(598, "div", 217)(599, "div", 218)(600, "div", 196)(601, "div", 197)(602, "div", 51)(603, "div", 198)(604, "div", 2)(605, "h4");
      \u0275\u0275text(606, "Add New Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(607, "button", 199)(608, "span", 200);
      \u0275\u0275text(609, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(610, "div", 201)(611, "div", 219)(612, "label", 70);
      \u0275\u0275text(613, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(614, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(615, "div", 220)(616, "a", 221);
      \u0275\u0275text(617, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "a", 222);
      \u0275\u0275text(619, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(620, "div", 223)(621, "div", 218)(622, "div", 196)(623, "div", 197)(624, "div", 51)(625, "div", 198)(626, "div", 2)(627, "h4");
      \u0275\u0275text(628, "Add New Brand");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(629, "button", 199)(630, "span", 200);
      \u0275\u0275text(631, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(632, "div", 201)(633, "div", 219)(634, "label", 70);
      \u0275\u0275text(635, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275element(636, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "div", 220)(638, "a", 221);
      \u0275\u0275text(639, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "a", 222);
      \u0275\u0275text(641, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(642, "div", 224)(643, "div", 218)(644, "div", 196)(645, "div", 197)(646, "div", 51)(647, "div", 198)(648, "div", 2)(649, "h4");
      \u0275\u0275text(650, "Add Unit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(651, "button", 199)(652, "span", 200);
      \u0275\u0275text(653, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(654, "div", 201)(655, "div", 219)(656, "label", 70);
      \u0275\u0275text(657, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275element(658, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(659, "div", 220)(660, "a", 221);
      \u0275\u0275text(661, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "a", 222);
      \u0275\u0275text(663, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(664, "div", 225)(665, "div", 218)(666, "div", 196)(667, "div", 197)(668, "div", 51)(669, "div", 198)(670, "div", 2)(671, "h4");
      \u0275\u0275text(672, "Add Variation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(673, "button", 199)(674, "span", 200);
      \u0275\u0275text(675, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(676, "div", 201)(677, "div", 226)(678, "h6");
      \u0275\u0275text(679, "Variant Thumbnail");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(680, "div", 227)(681, "div", 228)(682, "div", 229)(683, "span");
      \u0275\u0275element(684, "i", 81);
      \u0275\u0275text(685, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(686, "div", 219)(687, "div", 230);
      \u0275\u0275element(688, "input", 127);
      \u0275\u0275elementStart(689, "div", 128)(690, "h4");
      \u0275\u0275text(691, "Change Image");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(692, "div", 67)(693, "div", 231)(694, "div", 219)(695, "label", 70);
      \u0275\u0275text(696, "Barcode Symbology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(697, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_697_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue20, $event) || (ctx.selectedValue20 = $event);
        return $event;
      });
      \u0275\u0275elementStart(698, "mat-option", 72);
      \u0275\u0275text(699, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(700, "mat-option", 90);
      \u0275\u0275text(701, "Code34");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(702, "div", 231)(703, "div", 219)(704, "div", 75)(705, "label");
      \u0275\u0275text(706, "Item Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(707, "input", 232);
      \u0275\u0275elementStart(708, "button", 77);
      \u0275\u0275text(709, " Generate Code ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(710, "div", 92)(711, "div", 233)(712, "div", 234);
      \u0275\u0275element(713, "input", 127);
      \u0275\u0275elementStart(714, "div", 128);
      \u0275\u0275element(715, "img", 235);
      \u0275\u0275elementStart(716, "h4");
      \u0275\u0275text(717, "Drag and drop a ");
      \u0275\u0275elementStart(718, "span");
      \u0275\u0275text(719, "file to upload");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(720, "div", 66)(721, "div", 123)(722, "div", 92)(723, "div", 236)(724, "div", 237);
      \u0275\u0275element(725, "img", 130);
      \u0275\u0275elementStart(726, "a", 63);
      \u0275\u0275element(727, "i", 131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(728, "div", 129);
      \u0275\u0275element(729, "img", 132);
      \u0275\u0275elementStart(730, "a", 63);
      \u0275\u0275element(731, "i", 131);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(732, "div", 231)(733, "div", 219)(734, "label", 70);
      \u0275\u0275text(735, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(736, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "div", 231)(738, "div", 219)(739, "label", 70);
      \u0275\u0275text(740, "Quantity Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(741, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(742, "div", 231)(743, "div", 219)(744, "label", 70);
      \u0275\u0275text(745, "Tax Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(746, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_746_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue21, $event) || (ctx.selectedValue21 = $event);
        return $event;
      });
      \u0275\u0275elementStart(747, "mat-option", 72);
      \u0275\u0275text(748, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "mat-option", 238);
      \u0275\u0275text(750, "Direct");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(751, "mat-option", 239);
      \u0275\u0275text(752, "Indirect");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(753, "div", 231)(754, "div", 219)(755, "label", 70);
      \u0275\u0275text(756, "Tax ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(757, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_757_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue22, $event) || (ctx.selectedValue22 = $event);
        return $event;
      });
      \u0275\u0275elementStart(758, "mat-option", 72);
      \u0275\u0275text(759, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(760, "mat-option", 240);
      \u0275\u0275text(761, "Income Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(762, "mat-option", 241);
      \u0275\u0275text(763, "Service Tax");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(764, "div", 242)(765, "div", 219)(766, "label", 70);
      \u0275\u0275text(767, "Discount Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(768, "mat-select", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_768_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue23, $event) || (ctx.selectedValue23 = $event);
        return $event;
      });
      \u0275\u0275elementStart(769, "mat-option", 72);
      \u0275\u0275text(770, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "mat-option", 243);
      \u0275\u0275text(772, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(773, "mat-option", 244);
      \u0275\u0275text(774, "Early Payment");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(775, "div", 242)(776, "div")(777, "label", 70);
      \u0275\u0275text(778, "Discount Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(779, "input", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(780, "div", 220)(781, "a", 221);
      \u0275\u0275text(782, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "a", 222);
      \u0275\u0275text(784, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(785, "div", 245)(786, "div", 246)(787, "div", 196)(788, "div", 197)(789, "div", 247)(790, "div", 248)(791, "div", 2)(792, "h4");
      \u0275\u0275text(793, "Import Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(794, "button", 199)(795, "span", 200);
      \u0275\u0275text(796, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(797, "div", 249)(798, "form")(799, "div", 67)(800, "div", 250)(801, "div", 219)(802, "label");
      \u0275\u0275text(803, "Product");
      \u0275\u0275elementStart(804, "span", 251);
      \u0275\u0275text(805, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(806, "mat-select", 252)(807, "mat-option", 253);
      \u0275\u0275text(808, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "mat-option", 253);
      \u0275\u0275text(810, "Bold V3.2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(811, "mat-option", 253);
      \u0275\u0275text(812, "Nike Jordan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(813, "mat-option", 253);
      \u0275\u0275text(814, "Iphone 14 Pro");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(815, "div", 254)(816, "div", 219)(817, "label");
      \u0275\u0275text(818, "Category");
      \u0275\u0275elementStart(819, "span", 251);
      \u0275\u0275text(820, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(821, "mat-select", 252)(822, "mat-option", 253);
      \u0275\u0275text(823, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "mat-option", 253);
      \u0275\u0275text(825, "Laptop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(826, "mat-option", 253);
      \u0275\u0275text(827, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "mat-option", 253);
      \u0275\u0275text(829, "Shoe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(830, "div", 254)(831, "div", 219)(832, "label");
      \u0275\u0275text(833, "Sub Category");
      \u0275\u0275elementStart(834, "span", 251);
      \u0275\u0275text(835, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(836, "mat-select", 252)(837, "mat-option", 253);
      \u0275\u0275text(838, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(839, "mat-option", 253);
      \u0275\u0275text(840, "Lenovo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(841, "mat-option", 253);
      \u0275\u0275text(842, "Bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "mat-option", 253);
      \u0275\u0275text(844, "Nike");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(845, "div", 255)(846, "div", 67)(847, "div")(848, "div", 256)(849, "a", 257);
      \u0275\u0275text(850, "Download Sample File");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(851, "div", 92)(852, "div", 258)(853, "label", 70);
      \u0275\u0275text(854, "Upload CSV File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(855, "div", 234);
      \u0275\u0275element(856, "input", 127);
      \u0275\u0275elementStart(857, "div", 128);
      \u0275\u0275element(858, "img", 235);
      \u0275\u0275elementStart(859, "h4");
      \u0275\u0275text(860, "Drag and drop a ");
      \u0275\u0275elementStart(861, "span");
      \u0275\u0275text(862, "file to upload");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(863, "div", 255)(864, "div", 219)(865, "label", 70);
      \u0275\u0275text(866, "Created by");
      \u0275\u0275elementStart(867, "span", 251);
      \u0275\u0275text(868, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(869, "input", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(870, "div", 67)(871, "div", 92)(872, "div", 259)(873, "label", 70);
      \u0275\u0275text(874, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(875, "textarea", 260);
      \u0275\u0275elementStart(876, "p", 261);
      \u0275\u0275text(877, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(878, "div", 262)(879, "button", 263);
      \u0275\u0275text(880, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(881, "button", 264);
      \u0275\u0275text(882, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(883, "div", 265)(884, "div", 246)(885, "div", 196)(886, "div", 197)(887, "div", 266)(888, "span", 267);
      \u0275\u0275element(889, "i", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(890, "h4", 269);
      \u0275\u0275text(891, "Delete Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "p", 270);
      \u0275\u0275text(893, "Are you sure you want to delete product?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "div", 271)(895, "button", 263);
      \u0275\u0275text(896, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(897, "button", 264);
      \u0275\u0275text(898, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.addProduct);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(49, _c0))("ngModelOptions", \u0275\u0275pureFunction0(50, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 100 : -1);
      \u0275\u0275advance(34);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue7);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(51, _c0));
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue8);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(52, _c0));
      \u0275\u0275advance(34);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue9);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(53, _c0));
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue10);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(54, _c0));
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue11);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(55, _c0));
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue12);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(56, _c0));
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue13);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(57, _c0));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue14);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(58, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue15);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(59, _c0));
      \u0275\u0275advance(66);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue16);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(60, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue17);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(61, _c0));
      \u0275\u0275advance(54);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue18);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(62, _c0));
      \u0275\u0275advance(136);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue19);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(63, _c0));
      \u0275\u0275advance(26);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(78);
      \u0275\u0275property("routerLink", ctx.routes.units);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.units);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.units);
      \u0275\u0275advance(35);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue20);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(64, _c0));
      \u0275\u0275advance(49);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue21);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(65, _c0));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue22);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(66, _c0));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue23);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(67, _c0));
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.wareHouse);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ selector: "app-product-list", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule, RouterLink], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Product List</h4>\n      <h6>Manage your products</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a [routerLink] = "routes.addProduct" class="btn btn-primary"><i class="ti ti-circle-plus me-2"></i>Add New\n  Product</a>\n</div>\n<div class="page-btn import">\n  <a href="javascript:void(0);" class="btn btn-secondary color" data-bs-toggle="modal" data-bs-target="#view-notes"><i\n  class="feather icon-download me-2"></i>Import Product</a>\n</div>\n</div>\n\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div class="search-set">\n        <div class="search-input">\n          <a href="javascript:void(0);" class="btn btn-searchset"><i\n          class="ti ti-search fs-14 feather-search"></i></a>\n          <div class="dataTables_filter">\n            <label>\n              <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0" />\n              </label>\n            </div>\n          </div>\n      </div>\n      <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n        <div class="dropdown me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Category\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n            </li>\n          </ul>\n        </div>\n        <div class="dropdown me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Brand\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class="card-body">\n        <div class="custom-datatable-filter table-responsive">\n          <table class="table datatable">\n            <thead class="thead-light">\n              <tr matSort (matSortChange)="sortData($event)">\n                <th class="no-sort">\n                  <label class="checkboxs"  (click)="selectAll(initChecked)">\n                    <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                    <span class="checkmarks"></span>\n                  </label>\n                </th>\n                <th mat-sort-header="SKU">SKU</th>\n                <th mat-sort-header="product">Product</th>\n                <th mat-sort-header="category">Category</th>\n                <th mat-sort-header="brand">Brand</th>\n                <th mat-sort-header="price">Price</th>\n                <th mat-sort-header="unit">Unit</th>\n                <th mat-sort-header="qty">Qty</th>\n                <th mat-sort-header="createdBy">Created by</th>\n                <th class="no-sort"></th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (data of tableData; track data) {\n                <tr>\n                  <td>\n                    <label class="checkboxs">\n                      <input type="checkbox" [(ngModel)]="data.isSelected">\n                      <span class="checkmarks"></span>\n                    </label>\n                  </td>\n                  <td>{{data.SKU}} </td>\n                  <td class="sorting_1">\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img [src]="data.img1" alt="product">\n                      </a>\n                      <a href="javascript:void(0);">{{data.product}} </a>\n                    </div>\n                  </td>\n                  \n                  <td>{{data.category}}</td>\n                  <td>{{data.brand}}</td>\n                  <td>{{data.price}}</td>\n                  <td>{{data.unit}}</td>\n                  <td>{{data.qty}}</td>\n                  <td>\n                    <div class="userimgname">\n                      <a href="javascript:void(0);" class="avatar avatar-sm">\n                        <img [src]="data.img2" alt="product">\n                      </a>\n                      <a href="javascript:void(0);">{{data.createdBy}}</a>\n                    </div>\n                  </td>\n                  <td class="action-table-data">\n                    <div class="edit-delete-action">\n                      <a class="me-2 edit-icon  p-2" [routerLink] = "routes.productDetails">\n                        <i class="feather icon-eye feather-eye"></i>\n                      </a>\n                      <a class="me-2 p-2" [routerLink] = "routes.editProduct">\n                        <i class="feather icon-edit feather-edit"></i>\n                      </a>\n                      <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i class="feather icon-trash-2 feather-trash-2"></i>\n                      </a>\n                    </div>\n                  </td>\n                </tr>\n              }@if (tableData.length === 0) {\n                <tr>\n                  <td colspan="10" class="text-center"> No matching records found </td>\n                </tr>\n                }\n            </tbody>\n          </table>\n        </div>\n    </div>\n      <app-custom-pagination></app-custom-pagination>\n  </div>\n  <!-- /product list -->\n\n  <!-- Add Payroll -->\n  <div class="offcanvas offcanvas-end em-payrol-add" tabindex="-1" id="offcanvasRight-add">\n    <div class="offcanvas-body p-0">\n      <div class="page-wrapper-new">\n        <div class="content">\n          <div class="page-header justify-content-between">\n            <div class="page-title">\n              <h4>Create New Product</h4>\n            </div>\n            <div class="page-btn">\n              <a href="javascript:void(0);" class="btn btn-primary " data-bs-dismiss="offcanvas"><i\n              class="feather icon-arrow-left me-2"></i>Back to Product List</a>\n            </div>\n          </div>\n          <!-- /add -->\n          <div class="card mb-0">\n            <div class="card-body add-product pb-0 ps-0 pe-0">\n              <div class="accordion-card-one accordion" id="accordionExample">\n                <div class="accordion-item">\n                  <div class="accordion-header" id="headingOne">\n                    <div class="accordion-button" data-bs-toggle="collapse"\n                      data-bs-target="#collapseOne" aria-controls="collapseOne">\n                      <div class="addproduct-icon">\n                        <h5><i class="feather icon-info add-info"></i><span>Product\n                      Information</span></h5>\n                      <a href="javascript:void(0);"><i\n                      class="feather icon-chevron-down chevron-down-add"></i></a>\n                    </div>\n                  </div>\n                </div>\n                <div id="collapseOne" class="accordion-collapse collapse show"\n                  aria-labelledby="headingOne" data-bs-parent="#accordionExample">\n                  <div class="accordion-body">\n                    <div class="row">\n                      <div class="col-lg-4 col-sm-6 col-12">\n                        <div class="mb-3 add-product">\n                          <label class="form-label">Store</label>\n                          <mat-select [(ngModel)]="selectedValue7"\n                            [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                            placeholder="Choose">\n                            <mat-option value="Choose">Choose</mat-option>\n                            <mat-option value="Computers">Computers</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                      <div class="col-lg-4 col-sm-6 col-12">\n                        <div class="mb-3 add-product">\n                          <label class="form-label">Warehouse</label>\n                          <mat-select [(ngModel)]="selectedValue8"\n                            [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                            placeholder="Choose">\n                            <mat-option value="Choose">Choose</mat-option>\n                            <mat-option value="Computers">Computers</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="row">\n                      <div class="col-lg-4 col-sm-6 col-12">\n                        <div class="mb-3 add-product">\n                          <label class="form-label">Product Name</label>\n                          <input type="text" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-lg-4 col-sm-6 col-12">\n                        <div class="mb-3 add-product">\n                          <label class="form-label">Slug</label>\n                          <input type="text" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-lg-4 col-sm-6 col-12">\n                        <div class="form-group add-product list">\n                          <label>SKU</label>\n                          <input type="text" class="form-control list"\n                            placeholder="Enter SKU">\n                            <button type="submit" class="btn btn-primaryadd">\n                              Generate Code\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="addservice-info">\n                        <div class="row">\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="mb-3 add-product">\n                              <div class="add-newplus">\n                                <label class="form-label">Category</label>\n                                <a href="javascript:void(0);" data-bs-toggle="modal"\n                                  data-bs-target="#add-units-category"><i\n                                class="ti ti-circle-plus plus-down-add"></i><span>Add\n                              New</span></a>\n                            </div>\n                            <mat-select [(ngModel)]="selectedValue9"\n                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                              placeholder="Choose">\n                              <mat-option value="Choose">Choose</mat-option>\n                              <mat-option value="Computers">Computers</mat-option>\n                            </mat-select>\n                          </div>\n                        </div>\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n                            <label class="form-label">Choose Category</label>\n                            <mat-select [(ngModel)]="selectedValue10"\n                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                              placeholder="Choose">\n                              <mat-option value="Choose">Choose</mat-option>\n                              <mat-option value="Computers">Computers</mat-option>\n                            </mat-select>\n                          </div>\n                        </div>\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n                            <label class="form-label">Sub Category</label>\n                            <mat-select [(ngModel)]="selectedValue11"\n                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                              placeholder="Choose">\n                              <mat-option value="Choose">Choose</mat-option>\n                              <mat-option value="Computers">Computers</mat-option>\n                            </mat-select>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="add-product-new">\n                      <div class="row">\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n                            <div class="add-newplus">\n                              <label class="form-label">Brand</label>\n                              <a href="javascript:void(0);" data-bs-toggle="modal"\n                                data-bs-target="#add-units-brand"><i\n                              class="ti ti-circle-plus plus-down-add"></i><span>Add\n                            new</span></a>\n                          </div>\n                          <mat-select [(ngModel)]="selectedValue12"\n                            [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                            placeholder="Choose">\n                            <mat-option value="Choose">Choose</mat-option>\n                            <mat-option value="Nike">Nike</mat-option>\n                            <mat-option value="Bolt">Bolt</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                      <div class="col-lg-4 col-sm-6 col-12">\n                        <div class="mb-3 add-product">\n\n                          <div class="add-newplus">\n                            <label class="form-label">Unit</label>\n                            <a href="javascript:void(0);" data-bs-toggle="modal"\n                              data-bs-target="#add-unit"><i\n                            class="ti ti-circle-plus plus-down-add"></i><span>Add\n                          New</span></a>\n                        </div>\n                        <mat-select [(ngModel)]="selectedValue13"\n                          [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                          placeholder="Choose">\n                          <mat-option value="Choose">Choose</mat-option>\n                          <mat-option value="Kg">Kg</mat-option>\n                          <mat-option value="Pc">Pc</mat-option>\n                        </mat-select>\n                      </div>\n                    </div>\n                    <div class="col-lg-4 col-sm-6 col-12">\n                      <div class="mb-3 add-product">\n                        <label class="form-label">Selling Type</label>\n                        <mat-select [(ngModel)]="selectedValue14"\n                          [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                          placeholder="Choose">\n                          <mat-option value="Choose">Choose</mat-option>\n                          <mat-option value="Computers">Computers</mat-option>\n                        </mat-select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="row">\n                  <div class="col-lg-6 col-sm-6 col-12">\n                    <div class="mb-3 add-product">\n                      <label class="form-label">Barcode Symbology</label>\n                      <mat-select [(ngModel)]="selectedValue15"\n                        [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                        placeholder="Choose">\n                        <mat-option value="Choose">Choose</mat-option>\n                        <mat-option value="Code34">Code34</mat-option>\n                      </mat-select>\n                    </div>\n                  </div>\n                  <div class="col-lg-6 col-sm-6 col-12">\n                    <div class="form-group add-product list">\n                      <label>Item Code</label>\n                      <input type="text" class="form-control list"\n                        placeholder="Please Enter Item Code">\n                        <button type="submit" class="btn btn-primaryadd">\n                          Generate Code\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <!-- Editor -->\n                    <div class="col-lg-12">\n                      <div class="form-group summer-description-box transfer mb-3">\n                        <label>Description</label>\n                        <div id="summernote3">\n                        </div>\n                        <p>Maximum 60 Characters</p>\n                      </div>\n                    </div>\n                    <!-- /Editor -->\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="accordion-card-one accordion" id="accordionExample2">\n            <div class="accordion-item">\n              <div class="accordion-header" id="headingTwo">\n                <div class="accordion-button" data-bs-toggle="collapse"\n                  data-bs-target="#collapseTwo" aria-controls="collapseTwo">\n                  <div class="text-editor add-list">\n                    <div class="addproduct-icon list icon">\n                      <h5><i class="feather icon-life-buoy add-info"></i><span>Pricing &\n                    Stocks</span></h5>\n                    <a href="javascript:void(0);"><i\n                    class="feather icon-chevron-down chevron-down-add"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id="collapseTwo" class="accordion-collapse collapse show"\n              aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">\n              <div class="accordion-body">\n                <div class="form-group add-products">\n                  <label class="d-block">Product Type</label>\n                  <div class="single-pill-product">\n                    <ul class="nav nav-pills" id="pills-tab1" role="tablist">\n                      <li class="nav-item" role="presentation">\n                        <span class="custom_radio me-4 mb-0 active" id="pills-home-tab"\n                          data-bs-toggle="pill" data-bs-target="#pills-home"\n                          role="tab" aria-controls="pills-home" aria-selected="true">\n                          <input type="radio" class="form-control" name="payment">\n                          <span class="checkmark"></span> Single Product</span>\n                        </li>\n                        <li class="nav-item" role="presentation">\n                          <span class="custom_radio me-2 mb-0" id="pills-profile-tab"\n                            data-bs-toggle="pill" data-bs-target="#pills-profile"\n                            role="tab" aria-controls="pills-profile"\n                            aria-selected="false">\n                            <input type="radio" class="form-control" name="sign">\n                            <span class="checkmark"></span> Variable Product</span>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    <div class="tab-content" id="pills-tabContent">\n                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel"\n                        aria-labelledby="pills-home-tab">\n                        <div class="row">\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="form-group add-product">\n                              <label>Quantity</label>\n                              <input type="text" class="form-control">\n                            </div>\n                          </div>\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="form-group add-product">\n                              <label>Price</label>\n                              <input type="text" class="form-control">\n                            </div>\n                          </div>\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="form-group add-product">\n                              <label>Tax Type</label>\n                              <mat-select [(ngModel)]="selectedValue16"\n                                [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                placeholder="Choose">\n                                <mat-option value="Choose">Choose</mat-option>\n                                <mat-option value="Type">Type</mat-option>\n                              </mat-select>\n                            </div>\n                          </div>\n                        </div>\n                        <div class="row">\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="form-group add-product">\n                              <label>Discount Type</label>\n                              <mat-select [(ngModel)]="selectedValue17"\n                                [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                placeholder="Choose">\n                                <mat-option value="Choose">Choose</mat-option>\n                                <mat-option value="Type">Type</mat-option>\n                              </mat-select>\n                            </div>\n                          </div>\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="form-group add-product">\n                              <label>Discount Value</label>\n                              <input type="text" placeholder="Choose">\n                            </div>\n                          </div>\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="form-group add-product">\n                              <label>Quantity Alert</label>\n                              <input type="text" class="form-control">\n                            </div>\n                          </div>\n                        </div>\n                        <div class="accordion-card-one accordion" id="accordionExample3">\n                          <div class="accordion-item">\n                            <div class="accordion-header" id="headingThree">\n                              <div class="accordion-button" data-bs-toggle="collapse"\n                                data-bs-target="#collapseThree"\n                                aria-controls="collapseThree">\n                                <div class="addproduct-icon list">\n                                  <h5><i\n                                    class="feather icon-image add-info"></i><span>Images</span>\n                                  </h5>\n                                  <a href="javascript:void(0);"><i\n                                  class="feather icon-chevron-down chevron-down-add"></i></a>\n                                </div>\n                              </div>\n                            </div>\n                            <div id="collapseThree" class="accordion-collapse collapse show"\n                              aria-labelledby="headingThree"\n                              data-bs-parent="#accordionExample3">\n                              <div class="accordion-body">\n                                <div class="text-editor add-list add">\n                                  <div class="col-lg-12">\n                                    <div class="add-choosen">\n                                      <div class="input-blocks">\n                                        <div class="image-upload">\n                                          <input type="file">\n                                          <div class="image-uploads">\n                                            <i\n                                            class="ti ti-circle-plus plus-down-add"></i>\n                                            <h4>Add Images</h4>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class="phone-img">\n                                        <img src="assets/img/products/phone-add-2.png"\n                                          alt="image">\n                                          <a href="javascript:void(0);"><i\n                                          class="feather icon-x x-square-add remove-product"></i></a>\n                                        </div>\n\n                                        <div class="phone-img">\n                                          <img src="assets/img/products/phone-add-1.png"\n                                            alt="image">\n                                            <a href="javascript:void(0);"><i\n                                            class="feather icon-x x-square-add remove-product"></i></a>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class="tab-pane fade" id="pills-profile" role="tabpanel"\n                            aria-labelledby="pills-profile-tab">\n                            <div class="row select-color-add">\n                              <div class="col-lg-6 col-sm-6 col-12">\n                                <div class="form-group add-product">\n                                  <label>Variant Attribute</label>\n                                  <div class="row">\n                                    <div class="col-lg-10 col-sm-10 col-10">\n                                      <mat-select [(ngModel)]="selectedValue18"\n                                        [ngModelOptions]="{standalone: true}"\n                                        class="form-control variant-select select-option"\n                                        placeholder="Choose" id="colorSelect">\n                                        <mat-option value="Choose">Choose</mat-option>\n                                        <mat-option value="Color">Color</mat-option>\n                                        <mat-option value="red">Red</mat-option>\n                                        <mat-option value="black">Black</mat-option>\n                                      </mat-select>\n                                    </div>\n                                    <div class="col-lg-2 col-sm-2 col-2 ps-0">\n                                      <div class="add-icon tab">\n                                        <a class="btn btn-filter" data-bs-toggle="modal"\n                                          data-bs-target="#add-units"><i\n                                        class="feather feather-plus-circle"></i></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class="selected-hide-color" id="input-show">\n                                  <div class="row align-items-center">\n                                    <div class="col-sm-10">\n                                      <div class="input-blocks">\n                                        <input class="input-tags form-control"\n                                          id="inputBox" type="text"\n                                          data-role="tagsinput" name="specialist"\n                                          value="red, black">\n                                        </div>\n                                      </div>\n                                      <div class="col-sm-2">\n                                        <div class="form-group ">\n                                          <a href="javascript:void(0);"\n                                            class="remove-color" ><i\n                                          class="far fa-trash-alt"></i></a>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n                              <div class="modal-body-table variant-table" id="variant-table">\n                                <div class="table-responsive">\n                                  <table class="table">\n                                    <thead>\n                                      <tr>\n                                        <th>Variantion</th>\n                                        <th>Variant Value</th>\n                                        <th>SKU</th>\n                                        <th>Quantity</th>\n                                        <th>Price</th>\n                                        <th class="no-sort">Action</th>\n                                      </tr>\n                                    </thead>\n                                    <tbody>\n                                      <tr>\n                                        <td>\n                                          <div class="add-product">\n                                            <input type="text" class="form-control"\n                                              value="color">\n                                            </div>\n                                          </td>\n                                          <td>\n                                            <div class="add-product">\n                                              <input type="text" class="form-control"\n                                                value="red">\n                                              </div>\n                                            </td>\n                                            <td>\n                                              <div class="add-product">\n                                                <input type="text" class="form-control"\n                                                  value="1234">\n                                                </div>\n                                              </td>\n                                              <td>\n                                                <div class="product-quantity">\n                                                  <span class="quantity-btn">+<i\n                                                  class="ti ti-circle-plus plus-circle"></i></span>\n                                                  <input type="text" class="quntity-input"\n                                                    value="2">\n                                                    <span class="quantity-btn"><i\n                                                    class="feather icon-minus-circle feather-search"></i></span>\n                                                  </div>\n                                                </td>\n                                                <td>\n                                                  <div class="add-product">\n                                                    <input type="text" class="form-control"\n                                                      value="50000">\n                                                    </div>\n                                                  </td>\n                                                  <td class="action-table-data">\n                                                    <div class="edit-delete-action">\n                                                      <div class="input-block add-lists">\n                                                        <label class="checkboxs">\n                                                          <input type="checkbox" checked>\n                                                          <span class="checkmarks"></span>\n                                                        </label>\n                                                      </div>\n                                                      <a class="me-2 p-2"\n                                                        href="javascript:void(0);"\n                                                        data-bs-toggle="modal"\n                                                        data-bs-target="#add-variation">\n                                                        <i\n                                                        class="feather icon-plus feather-edit"></i>\n                                                      </a>\n                                                      <a class=" p-2"\n                                                        href="javascript:void(0);"\n                                                        data-bs-toggle="modal"\n                                                        data-bs-target="#add-variation">\n                                                        <i\n                                                        class="feather icon-trash-2 feather-trash-2"></i>\n                                                      </a>\n                                                    </div>\n\n                                                  </td>\n                                                </tr>\n                                                <tr>\n                                                  <td>\n                                                    <div class="add-product">\n                                                      <input type="text" class="form-control"\n                                                        value="color">\n                                                      </div>\n                                                    </td>\n                                                    <td>\n                                                      <div class="add-product">\n                                                        <input type="text" class="form-control"\n                                                          value="black">\n                                                        </div>\n                                                      </td>\n                                                      <td>\n                                                        <div class="add-product">\n                                                          <input type="text" class="form-control"\n                                                            value="2345">\n                                                          </div>\n                                                        </td>\n                                                        <td>\n                                                          <div class="product-quantity">\n                                                            <span class="quantity-btn">+<i\n                                                            class="ti ti-circle-plus plus-circle"></i></span>\n                                                            <input type="text" class="quntity-input"\n                                                              value="3">\n                                                              <span class="quantity-btn"><i\n                                                              class="feather icon-minus-circle feather-search"></i></span>\n                                                            </div>\n                                                          </td>\n                                                          <td>\n                                                            <div class="add-product">\n                                                              <input type="text" class="form-control"\n                                                                value="50000">\n                                                              </div>\n                                                            </td>\n                                                            <td class="action-table-data">\n                                                              <div class="edit-delete-action">\n                                                                <div class="input-block add-lists">\n                                                                  <label class="checkboxs">\n                                                                    <input type="checkbox" checked>\n                                                                    <span class="checkmarks"></span>\n                                                                  </label>\n                                                                </div>\n                                                                <a class="me-2 p-2" href="javascript:void(0);"\n                                                                  data-bs-toggle="modal"\n                                                                  data-bs-target="#edit-units">\n                                                                  <i\n                                                                  class="feather icon-plus feather-edit"></i>\n                                                                </a>\n                                                                <a class=" p-2"\n                                                                  href="javascript:void(0);">\n                                                                  <i\n                                                                  class="feather icon-trash-2 feather-trash-2"></i>\n                                                                </a>\n                                                              </div>\n\n                                                            </td>\n                                                          </tr>\n                                                        </tbody>\n                                                      </table>\n                                                    </div>\n                                                  </div>\n\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class="accordion-card-one accordion" id="accordionExample4">\n                                        <div class="accordion-item">\n                                          <div class="accordion-header" id="headingFour">\n                                            <div class="accordion-button" data-bs-toggle="collapse"\n                                              data-bs-target="#collapseFour" aria-controls="collapseFour">\n                                              <div class="text-editor add-list">\n                                                <div class="addproduct-icon list">\n                                                  <h5><i class="feather icon-list add-info"></i><span>Custom\n                                                Fields</span></h5>\n                                                <a href="javascript:void(0);"><i\n                                                class="feather icon-chevron-down chevron-down-add"></i></a>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div id="collapseFour" class="accordion-collapse collapse show"\n                                          aria-labelledby="headingFour" data-bs-parent="#accordionExample4">\n                                          <div class="accordion-body">\n                                            <div class="text-editor add-list add">\n                                              <div class="custom-filed">\n                                                <div class="input-block add-lists">\n                                                  <label class="checkboxs">\n                                                    <input type="checkbox">\n                                                    <span class="checkmarks"></span>Warranties\n                                                  </label>\n                                                  <label class="checkboxs">\n                                                    <input type="checkbox">\n                                                    <span class="checkmarks"></span>Manufacturer\n                                                  </label>\n                                                  <label class="checkboxs">\n                                                    <input type="checkbox">\n                                                    <span class="checkmarks"></span>Expiry\n                                                  </label>\n                                                </div>\n                                              </div>\n                                              <div class="row">\n                                                <div class="col-lg-4 col-sm-6 col-12">\n                                                  <div class="form-group add-product">\n                                                    <label>Discount Type</label>\n                                                    <mat-select [(ngModel)]="selectedValue19"\n                                                      [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                                      placeholder="Choose">\n                                                      <mat-option value="Choose">Choose</mat-option>\n                                                      <mat-option value="Type">Type</mat-option>\n                                                    </mat-select>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                              <div class="row">\n                                                <div class="col-lg-4 col-sm-6 col-12">\n                                                  <div class="form-group add-product">\n                                                    <label>Quantity Alert</label>\n                                                    <input type="text" class="form-control">\n                                                  </div>\n                                                </div>\n                                                <div class="col-lg-4 col-sm-6 col-12">\n                                                  <div class="input-blocks">\n                                                    <label>Manufactured Date</label>\n\n                                                    <div class="input-groupicon calender-input date-input1">\n                                                      <i class="feather icon-calendar info-img"></i>\n                                                      <input type="text" class="datetimepicker" bsDatepicker container=".date-input1"\n                                                        placeholder="Choose Date">\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                  <div class="col-lg-4 col-sm-6 col-12">\n                                                    <div class="input-blocks">\n                                                      <label>Expiry On</label>\n\n                                                      <div class="input-groupicon calender-input date-input2">\n                                                        <i class="feather icon-calendar info-img"></i>\n                                                        <input type="text" class="datetimepicker" bsDatepicker container=".date-input2"\n                                                          placeholder="Choose Date">\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class="btn-addproduct mb-4">\n                                          <a [routerLink]="routes.productList" class="btn btn-cancel">Reset</a>\n                                          <a href="javascript:void(0);" class="btn btn-submit me-2">Save Product</a>\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <!-- /add -->\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- /Add Payroll -->\n\n                            <!-- Add Adjustment -->\n                            <div class="modal fade" id="add-units">\n                              <div class="modal-dialog modal-dialog-centered stock-adjust-modal">\n                                <div class="modal-content">\n                                  <div class="page-wrapper-new p-0">\n                                    <div class="content">\n                                      <div class="modal-header border-0 custom-modal-header">\n                                        <div class="page-title">\n                                          <h4>Add Variation Attribute</h4>\n                                        </div>\n                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                          <span aria-hidden="true">&times;</span>\n                                        </button>\n                                      </div>\n                                      <div class="modal-body custom-modal-body">\n                                        <div class="row">\n                                          <div class="col-lg-12">\n                                            <div class="input-blocks">\n                                              <label>Attribute Name</label>\n                                              <input type="text" class="form-control">\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-12">\n                                            <div class="input-blocks">\n                                              <label>Add Value</label>\n                                              <input type="text" class="form-control">\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class="row">\n                                          <div class="col-lg-6">\n                                            <ul class="nav user-menu">\n                                              <li class="nav-item nav-searchinputs">\n                                                <div class="top-nav-search">\n                                                  <form  class="dropdown">\n                                                    <div class="searchinputs list dropdown-toggle"\n                                                      id="dropdownMenuClickable2" data-bs-toggle="dropdown"\n                                                      data-bs-auto-close="false">\n                                                      <input type="text" placeholder="Search">\n                                                      <i class="feather icon-search feather-16 icon"></i>\n                                                      <div class="search-addon d-none">\n                                                        <span><i class="feather icon-x-circle feather-14"></i></span>\n                                                      </div>\n                                                    </div>\n                                                    <div class="dropdown-menu search-dropdown idea"\n                                                      aria-labelledby="dropdownMenuClickable">\n                                                      <div class="search-info">\n                                                        <p>Black </p>\n                                                        <p>Red</p>\n                                                        <p>Green</p>\n                                                        <p>S</p>\n                                                        <p>M</p>\n                                                      </div>\n                                                    </div>\n                                                    <!-- <a class="btn"  id="searchdiv"><img src="assets/img/icons/search.svg" alt="img"></a> -->\n                                                  </form>\n                                                </div>\n                                              </li>\n                                            </ul>\n                                          </div>\n                                          <div class="col-lg-6">\n                                            <div class="modal-footer-btn popup">\n                                              <a href="javascript:void(0);" class="btn btn-cancel me-2">Cancel</a>\n                                              <a href="javascript:void(0);" class="btn btn-submit">Create Adjustment</a>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- /Add Adjustment -->\n\n                            <!-- Add Category -->\n                            <div class="modal fade" id="add-units-category">\n                              <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                <div class="modal-content">\n                                  <div class="page-wrapper-new p-0">\n                                    <div class="content">\n                                      <div class="modal-header border-0 custom-modal-header">\n                                        <div class="page-title">\n                                          <h4>Add New Category</h4>\n                                        </div>\n                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                          <span aria-hidden="true">&times;</span>\n                                        </button>\n                                      </div>\n                                      <div class="modal-body custom-modal-body">\n                                        <div class="mb-3">\n                                          <label class="form-label">Name</label>\n                                          <input type="text" class="form-control">\n                                        </div>\n                                        <div class="modal-footer-btn">\n                                          <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                          <a [routerLink] = "routes.units" class="btn btn-submit">Submit</a>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- /Add Category -->\n\n                            <!-- Add Brand -->\n                            <div class="modal fade" id="add-units-brand">\n                              <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                <div class="modal-content">\n                                  <div class="page-wrapper-new p-0">\n                                    <div class="content">\n                                      <div class="modal-header border-0 custom-modal-header">\n                                        <div class="page-title">\n                                          <h4>Add New Brand</h4>\n                                        </div>\n                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                          <span aria-hidden="true">&times;</span>\n                                        </button>\n                                      </div>\n                                      <div class="modal-body custom-modal-body">\n                                        <div class="mb-3">\n                                          <label class="form-label">Brand</label>\n                                          <input type="text" class="form-control">\n                                        </div>\n                                        <div class="modal-footer-btn">\n                                          <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                          <a [routerLink] = "routes.units" class="btn btn-submit">Submit</a>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- /Add Brand -->\n\n                            <!-- Add Unit -->\n                            <div class="modal fade" id="add-unit">\n                              <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                <div class="modal-content">\n                                  <div class="page-wrapper-new p-0">\n                                    <div class="content">\n                                      <div class="modal-header border-0 custom-modal-header">\n                                        <div class="page-title">\n                                          <h4>Add Unit</h4>\n                                        </div>\n                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                          <span aria-hidden="true">&times;</span>\n                                        </button>\n                                      </div>\n                                      <div class="modal-body custom-modal-body">\n                                        <div class="mb-3">\n                                          <label class="form-label">Unit</label>\n                                          <input type="text" class="form-control">\n                                        </div>\n                                        <div class="modal-footer-btn">\n                                          <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                          <a [routerLink] = "routes.units" class="btn btn-submit">Submit</a>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- /Add Unit -->\n\n                            <!-- Add Variatent -->\n                            <div class="modal fade" id="add-variation">\n                              <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                <div class="modal-content">\n                                  <div class="page-wrapper-new p-0">\n                                    <div class="content">\n                                      <div class="modal-header border-0 custom-modal-header">\n                                        <div class="page-title">\n                                          <h4>Add Variation</h4>\n                                        </div>\n                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                          <span aria-hidden="true">&times;</span>\n                                        </button>\n                                      </div>\n                                      <div class="modal-body custom-modal-body">\n                                        <div class="modal-title-head people-cust-avatar">\n                                          <h6>Variant Thumbnail</h6>\n                                        </div>\n                                        <div class="new-employee-field">\n                                          <div class="profile-pic-upload">\n                                            <div class="profile-pic">\n                                              <span><i class="ti ti-circle-plus plus-down-add"></i> Add Image</span>\n                                            </div>\n                                            <div class="mb-3">\n                                              <div class="image-upload mb-0">\n                                                <input type="file">\n                                                <div class="image-uploads">\n                                                  <h4>Change Image</h4>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class="row">\n                                          <div class="col-lg-6 pe-0">\n                                            <div class="mb-3">\n                                              <label class="form-label">Barcode Symbology</label>\n                                              <mat-select [(ngModel)]="selectedValue20" [ngModelOptions]="{standalone: true}"\n                                                class="select custom-mat-select" placeholder="Choose">\n                                                <mat-option value="Choose">Choose</mat-option>\n                                                <mat-option value="Code34">Code34</mat-option>\n                                              </mat-select>\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-6 pe-0">\n                                            <div class="mb-3">\n                                              <div class="form-group add-product list">\n                                                <label>Item Code</label>\n                                                <input type="text" class="form-control list" value="455454478844">\n                                                <button type="submit" class="btn btn-primaryadd">\n                                                  Generate Code\n                                                </button>\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-12">\n                                            <div class="form-group image-upload-down">\n                                              <div class="image-upload download">\n                                                <input type="file">\n                                                <div class="image-uploads">\n                                                  <img src="assets/img/download-img.png" alt="img">\n                                                  <h4>Drag and drop a <span>file to upload</span></h4>\n                                                </div>\n                                              </div>\n                                            </div>\n                                            <div class="accordion-body">\n                                              <div class="text-editor add-list add">\n                                                <div class="col-lg-12">\n                                                  <div class="add-choosen mb-3">\n                                                    <div class="phone-img ms-0">\n                                                      <img src="assets/img/products/phone-add-2.png" alt="image">\n                                                      <a href="javascript:void(0);"><i\n                                                      class="feather icon-x x-square-add remove-product"></i></a>\n                                                    </div>\n\n                                                    <div class="phone-img">\n                                                      <img src="assets/img/products/phone-add-1.png" alt="image">\n                                                      <a href="javascript:void(0);"><i\n                                                      class="feather icon-x x-square-add remove-product"></i></a>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-6 pe-0">\n                                            <div class="mb-3">\n                                              <label class="form-label">Quantity</label>\n                                              <input type="text" class="form-control">\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-6 pe-0">\n                                            <div class="mb-3">\n                                              <label class="form-label">Quantity Alert</label>\n                                              <input type="text" class="form-control">\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-6 pe-0">\n                                            <div class="mb-3">\n                                              <label class="form-label">Tax Type</label>\n                                              <mat-select [(ngModel)]="selectedValue21" [ngModelOptions]="{standalone: true}"\n                                                class="select custom-mat-select" placeholder="Choose">\n                                                <mat-option value="Choose">Choose</mat-option>\n                                                <mat-option value="Direct">Direct</mat-option>\n                                                <mat-option value="Indirect">Indirect</mat-option>\n                                              </mat-select>\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-6 pe-0">\n                                            <div class="mb-3">\n                                              <label class="form-label">Tax </label>\n                                              <mat-select [(ngModel)]="selectedValue22" [ngModelOptions]="{standalone: true}"\n                                                class="select custom-mat-select" placeholder="Choose">\n                                                <mat-option value="Choose">Choose</mat-option>\n                                                <mat-option value="Income Tax">Income Tax</mat-option>\n                                                <mat-option value="Service Tax">Service Tax</mat-option>\n                                              </mat-select>\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-12 pe-0">\n                                            <div class="mb-3">\n                                              <label class="form-label">Discount Type </label>\n                                              <mat-select [(ngModel)]="selectedValue23" [ngModelOptions]="{standalone: true}"\n                                                class="select custom-mat-select" placeholder="Choose">\n                                                <mat-option value="Choose">Choose</mat-option>\n                                                <mat-option value="Percentage">Percentage</mat-option>\n                                                <mat-option value="Early Payment">Early Payment</mat-option>\n                                              </mat-select>\n                                            </div>\n                                          </div>\n                                          <div class="col-lg-12 pe-0">\n                                            <div>\n                                              <label class="form-label">Discount Value</label>\n                                              <input type="text" class="form-control">\n                                            </div>\n                                          </div>\n                                        </div>\n\n\n                                        <div class="modal-footer-btn">\n                                          <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                          <a [routerLink] = "routes.wareHouse" class="btn btn-submit">Submit</a>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- /Add Variatent -->\n\n		<!-- Import Product -->\n		<div class="modal fade" id="view-notes">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="contents">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>Import Product</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n								\n									<div class="row">\n										<div class="col-12">\n											<div class="mb-3">\n												<label>Product<span class="ms-1 text-danger">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Choose">\n													<mat-option value="1">Choose</mat-option>\n													<mat-option value="1">Bold V3.2</mat-option>\n													<mat-option value="1">Nike Jordan</mat-option>\n													<mat-option value="1">Iphone 14 Pro</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-sm-6 col-12">\n											<div class="mb-3">\n												<label>Category<span class="ms-1 text-danger">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Choose">\n													<mat-option value="1">Choose</mat-option>\n													<mat-option value="1">Laptop</mat-option>\n													<mat-option value="1">Electronics</mat-option>\n													<mat-option value="1">Shoe</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-sm-6 col-12">\n											<div class="mb-3">\n												<label>Sub Category<span class="ms-1 text-danger">*</span></label>\n												<mat-select class="custom-mat-select select" placeholder="Choose">\n													<mat-option value="1">Choose</mat-option>\n													<mat-option value="1">Lenovo</mat-option>\n													<mat-option value="1">Bolt</mat-option>\n													<mat-option value="1">Nike</mat-option>\n												</mat-select>\n											</div>\n										</div>\n										<div class="col-lg-12 col-sm-6 col-12">\n											<div class="row">\n												<div>\n													<div class="modal-footer-btn download-file">\n														<a href="javascript:void(0)" class="btn btn-submit">Download Sample File</a>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3 image-upload-down">\n												<label class="form-label">Upload CSV File</label>\n												<div class="image-upload download">\n													<input type="file">\n													<div class="image-uploads">\n														<img src="assets/img/download-img.png" alt="img">\n														<h4>Drag and drop a <span>file to upload</span></h4>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-sm-6 col-12">\n											<div class="mb-3">\n												<label class="form-label">Created by<span class="ms-1 text-danger">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n									</div>\n									<div class="row">\n									<div class="col-lg-12">\n										<div class="mb-3 mb-3">\n											<label class="form-label">Description</label>\n											<textarea class="form-control"></textarea>\n											<p class="mt-1">Maximum 60 Characters</p>\n										</div>\n									</div>\n								</div>\n								</form>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Submit</button>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Import Product -->\n\n    		<!-- delete modal -->\n			<div class="modal fade" id="delete-modal">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content p-5 px-3 text-center">\n                  <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                  <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Product</h4>\n                  <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete product?</p>\n                  <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                    <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                  </div>						\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/features/pages/inventory/product/product-list/product-list.component.ts", lineNumber: 19 });
})();
export {
  ProductListComponent
};
//# sourceMappingURL=chunk-DHRH2EYN.js.map
