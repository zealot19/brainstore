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

// src/app/features/pages/application/ecommerce/products/products.component.ts
var _c0 = () => ({ standalone: true });
function ProductsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ProductsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ProductsComponent_For_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 169)(3, "input", 272);
    \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_For_150_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 273)(8, "div", 274)(9, "a", 275);
    \u0275\u0275element(10, "img", 276);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 64);
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
    \u0275\u0275elementStart(27, "a", 64);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "td", 166)(30, "div", 167)(31, "a", 279);
    \u0275\u0275element(32, "i", 280);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 281);
    \u0275\u0275element(34, "i", 282);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 283);
    \u0275\u0275element(36, "i", 174);
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
function ProductsComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 284);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var ProductsComponent = class _ProductsComponent {
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
        if (this.router.url == this.routes.products) {
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
  static \u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], decls: 950, vars: 68, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "ti", "ti-circle-plus", "me-2"], [1, "page-btn", "import"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-notes", 1, "btn", "btn-secondary", "color"], [1, "feather", "icon-download", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "ti", "ti-search", "fs-14", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "thead-light"], ["matSort", "", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "SKU"], ["mat-sort-header", "product"], ["mat-sort-header", "category"], ["mat-sort-header", "brand"], ["mat-sort-header", "price"], ["mat-sort-header", "unit"], ["mat-sort-header", "qty"], ["mat-sort-header", "createdBy"], ["tabindex", "-1", "id", "offcanvasRight-add", 1, "offcanvas", "offcanvas-end", "em-payrol-add"], [1, "offcanvas-body", "p-0"], [1, "page-wrapper-new"], [1, "content"], [1, "page-header", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-primary"], [1, "feather", "icon-arrow-left", "me-2"], [1, "card", "mb-0"], [1, "card-body", "add-product", "pb-0", "ps-0", "pe-0"], ["id", "accordionExample", 1, "accordion-card-one", "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button"], [1, "addproduct-icon"], [1, "feather", "icon-info", "add-info"], ["href", "javascript:void(0);"], [1, "feather", "icon-chevron-down", "chevron-down-add"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "row"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "mb-3", "add-product"], [1, "form-label"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], ["value", "Computers"], ["type", "text", 1, "form-control"], [1, "form-group", "add-product", "list"], ["type", "text", "placeholder", "Enter SKU", 1, "form-control", "list"], ["type", "submit", 1, "btn", "btn-primaryadd"], [1, "addservice-info"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-category"], [1, "ti", "ti-circle-plus", "plus-down-add"], [1, "add-product-new"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-brand"], ["value", "Nike"], ["value", "Bolt"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-unit"], ["value", "Kg"], ["value", "Pc"], [1, "col-lg-6", "col-sm-6", "col-12"], ["value", "Code34"], ["type", "text", "placeholder", "Please Enter Item Code", 1, "form-control", "list"], [1, "col-lg-12"], [1, "form-group", "summer-description-box", "transfer", "mb-3"], ["id", "summernote3"], ["id", "accordionExample2", 1, "accordion-card-one", "accordion"], ["id", "headingTwo", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button"], [1, "text-editor", "add-list"], [1, "addproduct-icon", "list", "icon"], [1, "feather", "icon-life-buoy", "add-info"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample2", 1, "accordion-collapse", "collapse", "show"], [1, "form-group", "add-products"], [1, "d-block"], [1, "single-pill-product"], ["id", "pills-tab1", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "custom_radio", "me-4", "mb-0", "active"], ["type", "radio", "name", "payment", 1, "form-control"], [1, "checkmark"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "custom_radio", "me-2", "mb-0"], ["type", "radio", "name", "sign", 1, "form-control"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "form-group", "add-product"], ["value", "Type"], ["type", "text", "placeholder", "Choose"], ["id", "accordionExample3", 1, "accordion-card-one", "accordion"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button"], [1, "addproduct-icon", "list"], [1, "feather", "icon-image", "add-info"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample3", 1, "accordion-collapse", "collapse", "show"], [1, "text-editor", "add-list", "add"], [1, "add-choosen"], [1, "input-blocks"], [1, "image-upload"], ["type", "file"], [1, "image-uploads"], [1, "phone-img"], ["src", "assets/img/products/phone-add-2.png", "alt", "image"], [1, "feather", "icon-x", "x-square-add", "remove-product"], ["src", "assets/img/products/phone-add-1.png", "alt", "image"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "row", "select-color-add"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", "id", "colorSelect", 1, "form-control", "variant-select", "select-option", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Color"], ["value", "red"], ["value", "black"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-filter"], [1, "feather", "feather-plus-circle"], ["id", "input-show", 1, "selected-hide-color"], [1, "row", "align-items-center"], [1, "col-sm-10"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "specialist", "value", "red, black", 1, "input-tags", "form-control"], [1, "col-sm-2"], [1, "form-group"], ["href", "javascript:void(0);", 1, "remove-color"], [1, "far", "fa-trash-alt"], ["id", "variant-table", 1, "modal-body-table", "variant-table"], [1, "table-responsive"], [1, "table"], [1, "add-product"], ["type", "text", "value", "color", 1, "form-control"], ["type", "text", "value", "red", 1, "form-control"], ["type", "text", "value", "1234", 1, "form-control"], [1, "product-quantity"], [1, "quantity-btn"], [1, "ti", "ti-circle-plus", "plus-circle"], ["type", "text", "value", "2", 1, "quntity-input"], [1, "feather", "icon-minus-circle", "feather-search"], ["type", "text", "value", "50000", 1, "form-control"], [1, "action-table-data"], [1, "edit-delete-action"], [1, "input-block", "add-lists"], [1, "checkboxs"], ["type", "checkbox", "checked", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "me-2", "p-2"], [1, "feather", "icon-plus", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["type", "text", "value", "black", 1, "form-control"], ["type", "text", "value", "2345", 1, "form-control"], ["type", "text", "value", "3", 1, "quntity-input"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], ["href", "javascript:void(0);", 1, "p-2"], ["id", "accordionExample4", 1, "accordion-card-one", "accordion"], ["id", "headingFour", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button"], [1, "feather", "icon-list", "add-info"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample4", 1, "accordion-collapse", "collapse", "show"], [1, "custom-filed"], ["type", "checkbox"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose Date", 1, "datetimepicker"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "Choose Date", 1, "datetimepicker"], [1, "btn-addproduct", "mb-4"], [1, "btn", "btn-cancel", 3, "routerLink"], ["href", "javascript:void(0);", 1, "btn", "btn-submit", "me-2"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-6"], [1, "nav", "user-menu"], [1, "nav-item", "nav-searchinputs"], [1, "top-nav-search"], ["id", "dropdownMenuClickable2", "data-bs-toggle", "dropdown", "data-bs-auto-close", "false", 1, "searchinputs", "list", "dropdown-toggle"], ["type", "text", "placeholder", "Search"], [1, "feather", "icon-search", "feather-16", "icon"], [1, "search-addon", "d-none"], [1, "feather", "icon-x-circle", "feather-14"], ["aria-labelledby", "dropdownMenuClickable", 1, "dropdown-menu", "search-dropdown", "idea"], [1, "search-info"], [1, "modal-footer-btn", "popup"], ["href", "javascript:void(0);", 1, "btn", "btn-cancel", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-submit"], ["id", "add-units-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "mb-3"], [1, "modal-footer-btn"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], [1, "btn", "btn-submit", 3, "routerLink"], ["id", "add-units-brand", 1, "modal", "fade"], ["id", "add-unit", 1, "modal", "fade"], ["id", "add-variation", 1, "modal", "fade"], [1, "modal-title-head", "people-cust-avatar"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "image-upload", "mb-0"], [1, "col-lg-6", "pe-0"], ["type", "text", "value", "455454478844", 1, "form-control", "list"], [1, "form-group", "image-upload-down"], [1, "image-upload", "download"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "add-choosen", "mb-3"], [1, "phone-img", "ms-0"], ["value", "Direct"], ["value", "Indirect"], ["value", "Income Tax"], ["value", "Service Tax"], [1, "col-lg-12", "pe-0"], ["value", "Percentage"], ["value", "Early Payment"], ["id", "view-notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "contents"], [1, "modal-header"], [1, "modal-body"], [1, "col-12"], [1, "ms-1", "text-danger"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-sm-6", "col-12"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "modal-footer-btn", "download-file"], ["href", "javascript:void(0)", 1, "btn", "btn-submit"], [1, "mb-3", "image-upload-down"], [1, "mb-3", "mb-3"], [1, "form-control"], [1, "mt-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "sorting_1"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm"], [1, "me-2", "edit-icon", "p-2", 3, "routerLink"], [1, "feather", "icon-eye", "feather-eye"], [1, "me-2", "p-2", 3, "routerLink"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["colspan", "10", 1, "text-center"]], template: function ProductsComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("click", function ProductsComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, ProductsComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, ProductsComponent_Conditional_20_Template, 1, 0, "i", 11);
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
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_37_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 26)(39, "div", 27)(40, "a", 28);
      \u0275\u0275text(41, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 29)(43, "li")(44, "a", 30);
      \u0275\u0275text(45, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 30);
      \u0275\u0275text(48, "Beats Pro ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 30);
      \u0275\u0275text(51, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 30);
      \u0275\u0275text(54, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 27)(56, "a", 28);
      \u0275\u0275text(57, " Created By ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul", 29)(59, "li")(60, "a", 30);
      \u0275\u0275text(61, "James Kirwin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 30);
      \u0275\u0275text(64, "Francis Chang");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 30);
      \u0275\u0275text(67, "Antonio Engle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 30);
      \u0275\u0275text(70, "Leo Kelly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 27)(72, "a", 28);
      \u0275\u0275text(73, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "ul", 29)(75, "li")(76, "a", 30);
      \u0275\u0275text(77, "Computers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "li")(79, "a", 30);
      \u0275\u0275text(80, "Electronics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "li")(82, "a", 30);
      \u0275\u0275text(83, "Shoe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "li")(85, "a", 30);
      \u0275\u0275text(86, "Electronics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "div", 27)(88, "a", 28);
      \u0275\u0275text(89, " Brand ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "ul", 29)(91, "li")(92, "a", 30);
      \u0275\u0275text(93, "Lenovo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "li")(95, "a", 30);
      \u0275\u0275text(96, "Beats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "li")(98, "a", 30);
      \u0275\u0275text(99, "Nike");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "li")(101, "a", 30);
      \u0275\u0275text(102, "Apple");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 31)(104, "a", 28);
      \u0275\u0275text(105, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "ul", 29)(107, "li")(108, "a", 30);
      \u0275\u0275text(109, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "li")(111, "a", 30);
      \u0275\u0275text(112, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "li")(114, "a", 30);
      \u0275\u0275text(115, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "li")(117, "a", 30);
      \u0275\u0275text(118, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "li")(120, "a", 30);
      \u0275\u0275text(121, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(122, "div", 32)(123, "div", 33)(124, "table", 34)(125, "thead", 35)(126, "tr", 36);
      \u0275\u0275listener("matSortChange", function ProductsComponent_Template_tr_matSortChange_126_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(127, "th", 37)(128, "label", 38);
      \u0275\u0275listener("click", function ProductsComponent_Template_label_click_128_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(129, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_129_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(130, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "th", 41);
      \u0275\u0275text(132, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 42);
      \u0275\u0275text(134, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 43);
      \u0275\u0275text(136, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th", 44);
      \u0275\u0275text(138, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th", 45);
      \u0275\u0275text(140, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "th", 46);
      \u0275\u0275text(142, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "th", 47);
      \u0275\u0275text(144, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "th", 48);
      \u0275\u0275text(146, "Created by");
      \u0275\u0275elementEnd();
      \u0275\u0275element(147, "th", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "tbody");
      \u0275\u0275repeaterCreate(149, ProductsComponent_For_150_Template, 37, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(151, ProductsComponent_Conditional_151_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(152, "app-custom-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 49)(154, "div", 50)(155, "div", 51)(156, "div", 52)(157, "div", 53)(158, "div", 2)(159, "h4");
      \u0275\u0275text(160, "Create New Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 12)(162, "a", 54);
      \u0275\u0275element(163, "i", 55);
      \u0275\u0275text(164, "Back to Product List");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(165, "div", 56)(166, "div", 57)(167, "div", 58)(168, "div", 59)(169, "div", 60)(170, "div", 61)(171, "div", 62)(172, "h5");
      \u0275\u0275element(173, "i", 63);
      \u0275\u0275elementStart(174, "span");
      \u0275\u0275text(175, "Product Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "a", 64);
      \u0275\u0275element(177, "i", 65);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(178, "div", 66)(179, "div", 67)(180, "div", 68)(181, "div", 69)(182, "div", 70)(183, "label", 71);
      \u0275\u0275text(184, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_185_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275elementStart(186, "mat-option", 73);
      \u0275\u0275text(187, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "mat-option", 74);
      \u0275\u0275text(189, "Computers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "div", 69)(191, "div", 70)(192, "label", 71);
      \u0275\u0275text(193, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_194_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
        return $event;
      });
      \u0275\u0275elementStart(195, "mat-option", 73);
      \u0275\u0275text(196, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "mat-option", 74);
      \u0275\u0275text(198, "Computers");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(199, "div", 68)(200, "div", 69)(201, "div", 70)(202, "label", 71);
      \u0275\u0275text(203, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(204, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div", 69)(206, "div", 70)(207, "label", 71);
      \u0275\u0275text(208, "Slug");
      \u0275\u0275elementEnd();
      \u0275\u0275element(209, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "div", 69)(211, "div", 76)(212, "label");
      \u0275\u0275text(213, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "input", 77);
      \u0275\u0275elementStart(215, "button", 78);
      \u0275\u0275text(216, " Generate Code ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(217, "div", 79)(218, "div", 68)(219, "div", 69)(220, "div", 70)(221, "div", 80)(222, "label", 71);
      \u0275\u0275text(223, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "a", 81);
      \u0275\u0275element(225, "i", 82);
      \u0275\u0275elementStart(226, "span");
      \u0275\u0275text(227, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(228, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_228_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
        return $event;
      });
      \u0275\u0275elementStart(229, "mat-option", 73);
      \u0275\u0275text(230, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "mat-option", 74);
      \u0275\u0275text(232, "Computers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(233, "div", 69)(234, "div", 70)(235, "label", 71);
      \u0275\u0275text(236, "Choose Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_237_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
        return $event;
      });
      \u0275\u0275elementStart(238, "mat-option", 73);
      \u0275\u0275text(239, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "mat-option", 74);
      \u0275\u0275text(241, "Computers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(242, "div", 69)(243, "div", 70)(244, "label", 71);
      \u0275\u0275text(245, "Sub Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_246_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
        return $event;
      });
      \u0275\u0275elementStart(247, "mat-option", 73);
      \u0275\u0275text(248, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "mat-option", 74);
      \u0275\u0275text(250, "Computers");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(251, "div", 83)(252, "div", 68)(253, "div", 69)(254, "div", 70)(255, "div", 80)(256, "label", 71);
      \u0275\u0275text(257, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "a", 84);
      \u0275\u0275element(259, "i", 82);
      \u0275\u0275elementStart(260, "span");
      \u0275\u0275text(261, "Add new");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(262, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_262_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
        return $event;
      });
      \u0275\u0275elementStart(263, "mat-option", 73);
      \u0275\u0275text(264, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "mat-option", 85);
      \u0275\u0275text(266, "Nike");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "mat-option", 86);
      \u0275\u0275text(268, "Bolt");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(269, "div", 69)(270, "div", 70)(271, "div", 80)(272, "label", 71);
      \u0275\u0275text(273, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "a", 87);
      \u0275\u0275element(275, "i", 82);
      \u0275\u0275elementStart(276, "span");
      \u0275\u0275text(277, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_278_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue13, $event) || (ctx.selectedValue13 = $event);
        return $event;
      });
      \u0275\u0275elementStart(279, "mat-option", 73);
      \u0275\u0275text(280, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "mat-option", 88);
      \u0275\u0275text(282, "Kg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "mat-option", 89);
      \u0275\u0275text(284, "Pc");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(285, "div", 69)(286, "div", 70)(287, "label", 71);
      \u0275\u0275text(288, "Selling Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_289_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue14, $event) || (ctx.selectedValue14 = $event);
        return $event;
      });
      \u0275\u0275elementStart(290, "mat-option", 73);
      \u0275\u0275text(291, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "mat-option", 74);
      \u0275\u0275text(293, "Computers");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(294, "div", 68)(295, "div", 90)(296, "div", 70)(297, "label", 71);
      \u0275\u0275text(298, "Barcode Symbology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_299_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue15, $event) || (ctx.selectedValue15 = $event);
        return $event;
      });
      \u0275\u0275elementStart(300, "mat-option", 73);
      \u0275\u0275text(301, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "mat-option", 91);
      \u0275\u0275text(303, "Code34");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(304, "div", 90)(305, "div", 76)(306, "label");
      \u0275\u0275text(307, "Item Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(308, "input", 92);
      \u0275\u0275elementStart(309, "button", 78);
      \u0275\u0275text(310, " Generate Code ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(311, "div", 68)(312, "div", 93)(313, "div", 94)(314, "label");
      \u0275\u0275text(315, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(316, "div", 95);
      \u0275\u0275elementStart(317, "p");
      \u0275\u0275text(318, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(319, "div", 96)(320, "div", 59)(321, "div", 97)(322, "div", 98)(323, "div", 99)(324, "div", 100)(325, "h5");
      \u0275\u0275element(326, "i", 101);
      \u0275\u0275elementStart(327, "span");
      \u0275\u0275text(328, "Pricing & Stocks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "a", 64);
      \u0275\u0275element(330, "i", 65);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(331, "div", 102)(332, "div", 67)(333, "div", 103)(334, "label", 104);
      \u0275\u0275text(335, "Product Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "div", 105)(337, "ul", 106)(338, "li", 107)(339, "span", 108);
      \u0275\u0275element(340, "input", 109)(341, "span", 110);
      \u0275\u0275text(342, " Single Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "li", 107)(344, "span", 111);
      \u0275\u0275element(345, "input", 112)(346, "span", 110);
      \u0275\u0275text(347, " Variable Product");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(348, "div", 113)(349, "div", 114)(350, "div", 68)(351, "div", 69)(352, "div", 115)(353, "label");
      \u0275\u0275text(354, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(355, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(356, "div", 69)(357, "div", 115)(358, "label");
      \u0275\u0275text(359, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(360, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 69)(362, "div", 115)(363, "label");
      \u0275\u0275text(364, "Tax Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_365_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue16, $event) || (ctx.selectedValue16 = $event);
        return $event;
      });
      \u0275\u0275elementStart(366, "mat-option", 73);
      \u0275\u0275text(367, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "mat-option", 116);
      \u0275\u0275text(369, "Type");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(370, "div", 68)(371, "div", 69)(372, "div", 115)(373, "label");
      \u0275\u0275text(374, "Discount Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_375_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue17, $event) || (ctx.selectedValue17 = $event);
        return $event;
      });
      \u0275\u0275elementStart(376, "mat-option", 73);
      \u0275\u0275text(377, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "mat-option", 116);
      \u0275\u0275text(379, "Type");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(380, "div", 69)(381, "div", 115)(382, "label");
      \u0275\u0275text(383, "Discount Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(384, "input", 117);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(385, "div", 69)(386, "div", 115)(387, "label");
      \u0275\u0275text(388, "Quantity Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(389, "input", 75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(390, "div", 118)(391, "div", 59)(392, "div", 119)(393, "div", 120)(394, "div", 121)(395, "h5");
      \u0275\u0275element(396, "i", 122);
      \u0275\u0275elementStart(397, "span");
      \u0275\u0275text(398, "Images");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(399, "a", 64);
      \u0275\u0275element(400, "i", 65);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(401, "div", 123)(402, "div", 67)(403, "div", 124)(404, "div", 93)(405, "div", 125)(406, "div", 126)(407, "div", 127);
      \u0275\u0275element(408, "input", 128);
      \u0275\u0275elementStart(409, "div", 129);
      \u0275\u0275element(410, "i", 82);
      \u0275\u0275elementStart(411, "h4");
      \u0275\u0275text(412, "Add Images");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(413, "div", 130);
      \u0275\u0275element(414, "img", 131);
      \u0275\u0275elementStart(415, "a", 64);
      \u0275\u0275element(416, "i", 132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(417, "div", 130);
      \u0275\u0275element(418, "img", 133);
      \u0275\u0275elementStart(419, "a", 64);
      \u0275\u0275element(420, "i", 132);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(421, "div", 134)(422, "div", 135)(423, "div", 90)(424, "div", 115)(425, "label");
      \u0275\u0275text(426, "Variant Attribute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "div", 68)(428, "div", 136)(429, "mat-select", 137);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_429_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue18, $event) || (ctx.selectedValue18 = $event);
        return $event;
      });
      \u0275\u0275elementStart(430, "mat-option", 73);
      \u0275\u0275text(431, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "mat-option", 138);
      \u0275\u0275text(433, "Color");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "mat-option", 139);
      \u0275\u0275text(435, "Red");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "mat-option", 140);
      \u0275\u0275text(437, "Black");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(438, "div", 141)(439, "div", 142)(440, "a", 143);
      \u0275\u0275element(441, "i", 144);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(442, "div", 145)(443, "div", 146)(444, "div", 147)(445, "div", 126);
      \u0275\u0275element(446, "input", 148);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "div", 149)(448, "div", 150)(449, "a", 151);
      \u0275\u0275element(450, "i", 152);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(451, "div", 153)(452, "div", 154)(453, "table", 155)(454, "thead")(455, "tr")(456, "th");
      \u0275\u0275text(457, "Variantion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(458, "th");
      \u0275\u0275text(459, "Variant Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "th");
      \u0275\u0275text(461, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "th");
      \u0275\u0275text(463, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "th");
      \u0275\u0275text(465, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "th", 37);
      \u0275\u0275text(467, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(468, "tbody")(469, "tr")(470, "td")(471, "div", 156);
      \u0275\u0275element(472, "input", 157);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(473, "td")(474, "div", 156);
      \u0275\u0275element(475, "input", 158);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(476, "td")(477, "div", 156);
      \u0275\u0275element(478, "input", 159);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(479, "td")(480, "div", 160)(481, "span", 161);
      \u0275\u0275text(482, "+");
      \u0275\u0275element(483, "i", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275element(484, "input", 163);
      \u0275\u0275elementStart(485, "span", 161);
      \u0275\u0275element(486, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(487, "td")(488, "div", 156);
      \u0275\u0275element(489, "input", 165);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "td", 166)(491, "div", 167)(492, "div", 168)(493, "label", 169);
      \u0275\u0275element(494, "input", 170)(495, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(496, "a", 171);
      \u0275\u0275element(497, "i", 172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "a", 173);
      \u0275\u0275element(499, "i", 174);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(500, "tr")(501, "td")(502, "div", 156);
      \u0275\u0275element(503, "input", 157);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "td")(505, "div", 156);
      \u0275\u0275element(506, "input", 175);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "td")(508, "div", 156);
      \u0275\u0275element(509, "input", 176);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "td")(511, "div", 160)(512, "span", 161);
      \u0275\u0275text(513, "+");
      \u0275\u0275element(514, "i", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275element(515, "input", 177);
      \u0275\u0275elementStart(516, "span", 161);
      \u0275\u0275element(517, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(518, "td")(519, "div", 156);
      \u0275\u0275element(520, "input", 165);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "td", 166)(522, "div", 167)(523, "div", 168)(524, "label", 169);
      \u0275\u0275element(525, "input", 170)(526, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(527, "a", 178);
      \u0275\u0275element(528, "i", 172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "a", 179);
      \u0275\u0275element(530, "i", 174);
      \u0275\u0275elementEnd()()()()()()()()()()()()()();
      \u0275\u0275elementStart(531, "div", 180)(532, "div", 59)(533, "div", 181)(534, "div", 182)(535, "div", 99)(536, "div", 121)(537, "h5");
      \u0275\u0275element(538, "i", 183);
      \u0275\u0275elementStart(539, "span");
      \u0275\u0275text(540, "Custom Fields");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(541, "a", 64);
      \u0275\u0275element(542, "i", 65);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(543, "div", 184)(544, "div", 67)(545, "div", 124)(546, "div", 185)(547, "div", 168)(548, "label", 169);
      \u0275\u0275element(549, "input", 186)(550, "span", 40);
      \u0275\u0275text(551, "Warranties ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "label", 169);
      \u0275\u0275element(553, "input", 186)(554, "span", 40);
      \u0275\u0275text(555, "Manufacturer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "label", 169);
      \u0275\u0275element(557, "input", 186)(558, "span", 40);
      \u0275\u0275text(559, "Expiry ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(560, "div", 68)(561, "div", 69)(562, "div", 115)(563, "label");
      \u0275\u0275text(564, "Discount Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_565_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue19, $event) || (ctx.selectedValue19 = $event);
        return $event;
      });
      \u0275\u0275elementStart(566, "mat-option", 73);
      \u0275\u0275text(567, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "mat-option", 116);
      \u0275\u0275text(569, "Type");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(570, "div", 68)(571, "div", 69)(572, "div", 115)(573, "label");
      \u0275\u0275text(574, "Quantity Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(575, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "div", 69)(577, "div", 126)(578, "label");
      \u0275\u0275text(579, "Manufactured Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "div", 187);
      \u0275\u0275element(581, "i", 188)(582, "input", 189);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(583, "div", 69)(584, "div", 126)(585, "label");
      \u0275\u0275text(586, "Expiry On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "div", 190);
      \u0275\u0275element(588, "i", 188)(589, "input", 191);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(590, "div", 192)(591, "a", 193);
      \u0275\u0275text(592, "Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "a", 194);
      \u0275\u0275text(594, "Save Product");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(595, "div", 195)(596, "div", 196)(597, "div", 197)(598, "div", 198)(599, "div", 52)(600, "div", 199)(601, "div", 2)(602, "h4");
      \u0275\u0275text(603, "Add Variation Attribute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(604, "button", 200)(605, "span", 201);
      \u0275\u0275text(606, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(607, "div", 202)(608, "div", 68)(609, "div", 93)(610, "div", 126)(611, "label");
      \u0275\u0275text(612, "Attribute Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(613, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "div", 93)(615, "div", 126)(616, "label");
      \u0275\u0275text(617, "Add Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(618, "input", 75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(619, "div", 68)(620, "div", 203)(621, "ul", 204)(622, "li", 205)(623, "div", 206)(624, "form", 31)(625, "div", 207);
      \u0275\u0275element(626, "input", 208)(627, "i", 209);
      \u0275\u0275elementStart(628, "div", 210)(629, "span");
      \u0275\u0275element(630, "i", 211);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(631, "div", 212)(632, "div", 213)(633, "p");
      \u0275\u0275text(634, "Black ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "p");
      \u0275\u0275text(636, "Red");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "p");
      \u0275\u0275text(638, "Green");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "p");
      \u0275\u0275text(640, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(641, "p");
      \u0275\u0275text(642, "M");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(643, "div", 203)(644, "div", 214)(645, "a", 215);
      \u0275\u0275text(646, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(647, "a", 216);
      \u0275\u0275text(648, "Create Adjustment");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(649, "div", 217)(650, "div", 218)(651, "div", 197)(652, "div", 198)(653, "div", 52)(654, "div", 199)(655, "div", 2)(656, "h4");
      \u0275\u0275text(657, "Add New Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(658, "button", 200)(659, "span", 201);
      \u0275\u0275text(660, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(661, "div", 202)(662, "div", 219)(663, "label", 71);
      \u0275\u0275text(664, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(665, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(666, "div", 220)(667, "a", 221);
      \u0275\u0275text(668, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(669, "a", 222);
      \u0275\u0275text(670, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(671, "div", 223)(672, "div", 218)(673, "div", 197)(674, "div", 198)(675, "div", 52)(676, "div", 199)(677, "div", 2)(678, "h4");
      \u0275\u0275text(679, "Add New Brand");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(680, "button", 200)(681, "span", 201);
      \u0275\u0275text(682, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(683, "div", 202)(684, "div", 219)(685, "label", 71);
      \u0275\u0275text(686, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275element(687, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "div", 220)(689, "a", 221);
      \u0275\u0275text(690, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(691, "a", 222);
      \u0275\u0275text(692, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(693, "div", 224)(694, "div", 218)(695, "div", 197)(696, "div", 198)(697, "div", 52)(698, "div", 199)(699, "div", 2)(700, "h4");
      \u0275\u0275text(701, "Add Unit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(702, "button", 200)(703, "span", 201);
      \u0275\u0275text(704, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(705, "div", 202)(706, "div", 219)(707, "label", 71);
      \u0275\u0275text(708, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275element(709, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(710, "div", 220)(711, "a", 221);
      \u0275\u0275text(712, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(713, "a", 222);
      \u0275\u0275text(714, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(715, "div", 225)(716, "div", 218)(717, "div", 197)(718, "div", 198)(719, "div", 52)(720, "div", 199)(721, "div", 2)(722, "h4");
      \u0275\u0275text(723, "Add Variation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(724, "button", 200)(725, "span", 201);
      \u0275\u0275text(726, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(727, "div", 202)(728, "div", 226)(729, "h6");
      \u0275\u0275text(730, "Variant Thumbnail");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(731, "div", 227)(732, "div", 228)(733, "div", 229)(734, "span");
      \u0275\u0275element(735, "i", 82);
      \u0275\u0275text(736, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "div", 219)(738, "div", 230);
      \u0275\u0275element(739, "input", 128);
      \u0275\u0275elementStart(740, "div", 129)(741, "h4");
      \u0275\u0275text(742, "Change Image");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(743, "div", 68)(744, "div", 231)(745, "div", 219)(746, "label", 71);
      \u0275\u0275text(747, "Barcode Symbology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(748, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_748_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue20, $event) || (ctx.selectedValue20 = $event);
        return $event;
      });
      \u0275\u0275elementStart(749, "mat-option", 73);
      \u0275\u0275text(750, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(751, "mat-option", 91);
      \u0275\u0275text(752, "Code34");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(753, "div", 231)(754, "div", 219)(755, "div", 76)(756, "label");
      \u0275\u0275text(757, "Item Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(758, "input", 232);
      \u0275\u0275elementStart(759, "button", 78);
      \u0275\u0275text(760, " Generate Code ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(761, "div", 93)(762, "div", 233)(763, "div", 234);
      \u0275\u0275element(764, "input", 128);
      \u0275\u0275elementStart(765, "div", 129);
      \u0275\u0275element(766, "img", 235);
      \u0275\u0275elementStart(767, "h4");
      \u0275\u0275text(768, "Drag and drop a ");
      \u0275\u0275elementStart(769, "span");
      \u0275\u0275text(770, "file to upload");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(771, "div", 67)(772, "div", 124)(773, "div", 93)(774, "div", 236)(775, "div", 237);
      \u0275\u0275element(776, "img", 131);
      \u0275\u0275elementStart(777, "a", 64);
      \u0275\u0275element(778, "i", 132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(779, "div", 130);
      \u0275\u0275element(780, "img", 133);
      \u0275\u0275elementStart(781, "a", 64);
      \u0275\u0275element(782, "i", 132);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(783, "div", 231)(784, "div", 219)(785, "label", 71);
      \u0275\u0275text(786, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(787, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(788, "div", 231)(789, "div", 219)(790, "label", 71);
      \u0275\u0275text(791, "Quantity Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(792, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(793, "div", 231)(794, "div", 219)(795, "label", 71);
      \u0275\u0275text(796, "Tax Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(797, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_797_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue21, $event) || (ctx.selectedValue21 = $event);
        return $event;
      });
      \u0275\u0275elementStart(798, "mat-option", 73);
      \u0275\u0275text(799, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "mat-option", 238);
      \u0275\u0275text(801, "Direct");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(802, "mat-option", 239);
      \u0275\u0275text(803, "Indirect");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(804, "div", 231)(805, "div", 219)(806, "label", 71);
      \u0275\u0275text(807, "Tax ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(808, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_808_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue22, $event) || (ctx.selectedValue22 = $event);
        return $event;
      });
      \u0275\u0275elementStart(809, "mat-option", 73);
      \u0275\u0275text(810, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(811, "mat-option", 240);
      \u0275\u0275text(812, "Income Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(813, "mat-option", 241);
      \u0275\u0275text(814, "Service Tax");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(815, "div", 242)(816, "div", 219)(817, "label", 71);
      \u0275\u0275text(818, "Discount Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(819, "mat-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_mat_select_ngModelChange_819_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue23, $event) || (ctx.selectedValue23 = $event);
        return $event;
      });
      \u0275\u0275elementStart(820, "mat-option", 73);
      \u0275\u0275text(821, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(822, "mat-option", 243);
      \u0275\u0275text(823, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "mat-option", 244);
      \u0275\u0275text(825, "Early Payment");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(826, "div", 242)(827, "div")(828, "label", 71);
      \u0275\u0275text(829, "Discount Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(830, "input", 75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(831, "div", 220)(832, "a", 221);
      \u0275\u0275text(833, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(834, "a", 222);
      \u0275\u0275text(835, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(836, "div", 245)(837, "div", 246)(838, "div", 197)(839, "div", 198)(840, "div", 247)(841, "div", 248)(842, "div", 2)(843, "h4");
      \u0275\u0275text(844, "Import Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(845, "button", 200)(846, "span", 201);
      \u0275\u0275text(847, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(848, "div", 249)(849, "form")(850, "div", 68)(851, "div", 250)(852, "div", 219)(853, "label");
      \u0275\u0275text(854, "Product");
      \u0275\u0275elementStart(855, "span", 251);
      \u0275\u0275text(856, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(857, "mat-select", 252)(858, "mat-option", 253);
      \u0275\u0275text(859, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(860, "mat-option", 253);
      \u0275\u0275text(861, "Bold V3.2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(862, "mat-option", 253);
      \u0275\u0275text(863, "Nike Jordan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(864, "mat-option", 253);
      \u0275\u0275text(865, "Iphone 14 Pro");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(866, "div", 254)(867, "div", 219)(868, "label");
      \u0275\u0275text(869, "Category");
      \u0275\u0275elementStart(870, "span", 251);
      \u0275\u0275text(871, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(872, "mat-select", 252)(873, "mat-option", 253);
      \u0275\u0275text(874, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(875, "mat-option", 253);
      \u0275\u0275text(876, "Laptop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(877, "mat-option", 253);
      \u0275\u0275text(878, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(879, "mat-option", 253);
      \u0275\u0275text(880, "Shoe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(881, "div", 254)(882, "div", 219)(883, "label");
      \u0275\u0275text(884, "Sub Category");
      \u0275\u0275elementStart(885, "span", 251);
      \u0275\u0275text(886, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(887, "mat-select", 252)(888, "mat-option", 253);
      \u0275\u0275text(889, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(890, "mat-option", 253);
      \u0275\u0275text(891, "Lenovo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "mat-option", 253);
      \u0275\u0275text(893, "Bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "mat-option", 253);
      \u0275\u0275text(895, "Nike");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(896, "div", 255)(897, "div", 68)(898, "div")(899, "div", 256)(900, "a", 257);
      \u0275\u0275text(901, "Download Sample File");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(902, "div", 93)(903, "div", 258)(904, "label", 71);
      \u0275\u0275text(905, "Upload CSV File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(906, "div", 234);
      \u0275\u0275element(907, "input", 128);
      \u0275\u0275elementStart(908, "div", 129);
      \u0275\u0275element(909, "img", 235);
      \u0275\u0275elementStart(910, "h4");
      \u0275\u0275text(911, "Drag and drop a ");
      \u0275\u0275elementStart(912, "span");
      \u0275\u0275text(913, "file to upload");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(914, "div", 255)(915, "div", 219)(916, "label", 71);
      \u0275\u0275text(917, "Created by");
      \u0275\u0275elementStart(918, "span", 251);
      \u0275\u0275text(919, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(920, "input", 75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(921, "div", 68)(922, "div", 93)(923, "div", 259)(924, "label", 71);
      \u0275\u0275text(925, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(926, "textarea", 260);
      \u0275\u0275elementStart(927, "p", 261);
      \u0275\u0275text(928, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(929, "div", 262)(930, "button", 263);
      \u0275\u0275text(931, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(932, "button", 264);
      \u0275\u0275text(933, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(934, "div", 265)(935, "div", 246)(936, "div", 197)(937, "div", 198)(938, "div", 266)(939, "span", 267);
      \u0275\u0275element(940, "i", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(941, "h4", 269);
      \u0275\u0275text(942, "Delete Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(943, "p", 270);
      \u0275\u0275text(944, "Are you sure you want to delete product?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(945, "div", 271)(946, "button", 263);
      \u0275\u0275text(947, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(948, "button", 264);
      \u0275\u0275text(949, "Yes Delete");
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
      \u0275\u0275advance(92);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 151 : -1);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsComponent, [{
    type: Component,
    args: [{ selector: "app-products", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule, RouterLink], template: '<div class="page-header">\n    <div class="add-item d-flex">\n      <div class="page-title">\n        <h4>Product List</h4>\n        <h6>Manage your products</h6>\n      </div>\n    </div>\n    <ul class="table-top-head">\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n        class="ti ti-refresh"></i></a>\n      </li>\n      <li>\n        <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n          matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n    <div class="page-btn">\n      <a [routerLink] = "routes.addProduct" class="btn btn-primary"><i class="ti ti-circle-plus me-2"></i>Add New\n    Product</a>\n  </div>\n  <div class="page-btn import">\n    <a href="javascript:void(0);" class="btn btn-secondary color" data-bs-toggle="modal" data-bs-target="#view-notes"><i\n    class="feather icon-download me-2"></i>Import Product</a>\n  </div>\n  </div>\n  \n  <!-- /product list -->\n  <div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n          <div class="search-input">\n            <a href="javascript:void(0);" class="btn btn-searchset"><i\n            class="ti ti-search fs-14 feather-search"></i></a>\n            <div class="dataTables_filter">\n              <label>\n                <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                  type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0" />\n                </label>\n              </div>\n            </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n          <div class="dropdown me-2">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              Product\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo IdeaPad 3</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats Pro </a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike Jordan</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple Series 5 Watch</a>\n              </li>\n            </ul>\n          </div>\n          <div class="dropdown me-2">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              Created By\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">James Kirwin</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Francis Chang</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Antonio Engle</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Leo Kelly</a>\n              </li>\n            </ul>\n          </div>\n          <div class="dropdown me-2">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              Category\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>\n              </li>\n            </ul>\n          </div>\n          <div class="dropdown me-2">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              Brand\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Nike</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Apple</a>\n              </li>\n            </ul>\n          </div>\n          <div class="dropdown">\n            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              Sort By : Last 7 Days\n            </a>\n            <ul class="dropdown-menu  dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="card-body">\n          <div class="custom-datatable-filter table-responsive">\n            <table class="table datatable">\n              <thead class="thead-light">\n                <tr matSort (matSortChange)="sortData($event)">\n                  <th class="no-sort">\n                    <label class="checkboxs"  (click)="selectAll(initChecked)">\n                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                      <span class="checkmarks"></span>\n                    </label>\n                  </th>\n                  <th mat-sort-header="SKU">SKU</th>\n                  <th mat-sort-header="product">Product</th>\n                  <th mat-sort-header="category">Category</th>\n                  <th mat-sort-header="brand">Brand</th>\n                  <th mat-sort-header="price">Price</th>\n                  <th mat-sort-header="unit">Unit</th>\n                  <th mat-sort-header="qty">Qty</th>\n                  <th mat-sort-header="createdBy">Created by</th>\n                  <th class="no-sort"></th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (data of tableData; track data) {\n                  <tr>\n                    <td>\n                      <label class="checkboxs">\n                        <input type="checkbox" [(ngModel)]="data.isSelected">\n                        <span class="checkmarks"></span>\n                      </label>\n                    </td>\n                    <td>{{data.SKU}} </td>\n                    <td class="sorting_1">\n                      <div class="d-flex align-items-center">\n                        <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                          <img [src]="data.img1" alt="product">\n                        </a>\n                        <a href="javascript:void(0);">{{data.product}} </a>\n                      </div>\n                    </td>\n                    \n                    <td>{{data.category}}</td>\n                    <td>{{data.brand}}</td>\n                    <td>{{data.price}}</td>\n                    <td>{{data.unit}}</td>\n                    <td>{{data.qty}}</td>\n                    <td>\n                      <div class="userimgname">\n                        <a href="javascript:void(0);" class="avatar avatar-sm">\n                          <img [src]="data.img2" alt="product">\n                        </a>\n                        <a href="javascript:void(0);">{{data.createdBy}}</a>\n                      </div>\n                    </td>\n                    <td class="action-table-data">\n                      <div class="edit-delete-action">\n                        <a class="me-2 edit-icon  p-2" [routerLink] = "routes.productDetails">\n                          <i class="feather icon-eye feather-eye"></i>\n                        </a>\n                        <a class="me-2 p-2" [routerLink] = "routes.editProduct">\n                          <i class="feather icon-edit feather-edit"></i>\n                        </a>\n                        <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                          <i class="feather icon-trash-2 feather-trash-2"></i>\n                        </a>\n                      </div>\n                    </td>\n                  </tr>\n                } \n                @if (tableData.length === 0) {\n                    <tr>\n                      <td colspan="10" class="text-center"> No matching records found </td>\n                    </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n      </div>\n        <app-custom-pagination></app-custom-pagination>\n    </div>\n    <!-- /product list -->\n  \n    <!-- Add Payroll -->\n    <div class="offcanvas offcanvas-end em-payrol-add" tabindex="-1" id="offcanvasRight-add">\n      <div class="offcanvas-body p-0">\n        <div class="page-wrapper-new">\n          <div class="content">\n            <div class="page-header justify-content-between">\n              <div class="page-title">\n                <h4>Create New Product</h4>\n              </div>\n              <div class="page-btn">\n                <a href="javascript:void(0);" class="btn btn-primary " data-bs-dismiss="offcanvas"><i\n                class="feather icon-arrow-left me-2"></i>Back to Product List</a>\n              </div>\n            </div>\n            <!-- /add -->\n            <div class="card mb-0">\n              <div class="card-body add-product pb-0 ps-0 pe-0">\n                <div class="accordion-card-one accordion" id="accordionExample">\n                  <div class="accordion-item">\n                    <div class="accordion-header" id="headingOne">\n                      <div class="accordion-button" data-bs-toggle="collapse"\n                        data-bs-target="#collapseOne" aria-controls="collapseOne">\n                        <div class="addproduct-icon">\n                          <h5><i class="feather icon-info add-info"></i><span>Product\n                        Information</span></h5>\n                        <a href="javascript:void(0);"><i\n                        class="feather icon-chevron-down chevron-down-add"></i></a>\n                      </div>\n                    </div>\n                  </div>\n                  <div id="collapseOne" class="accordion-collapse collapse show"\n                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">\n                    <div class="accordion-body">\n                      <div class="row">\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n                            <label class="form-label">Store</label>\n                            <mat-select [(ngModel)]="selectedValue7"\n                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                              placeholder="Choose">\n                              <mat-option value="Choose">Choose</mat-option>\n                              <mat-option value="Computers">Computers</mat-option>\n                            </mat-select>\n                          </div>\n                        </div>\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n                            <label class="form-label">Warehouse</label>\n                            <mat-select [(ngModel)]="selectedValue8"\n                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                              placeholder="Choose">\n                              <mat-option value="Choose">Choose</mat-option>\n                              <mat-option value="Computers">Computers</mat-option>\n                            </mat-select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="row">\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n                            <label class="form-label">Product Name</label>\n                            <input type="text" class="form-control">\n                          </div>\n                        </div>\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n                            <label class="form-label">Slug</label>\n                            <input type="text" class="form-control">\n                          </div>\n                        </div>\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="form-group add-product list">\n                            <label>SKU</label>\n                            <input type="text" class="form-control list"\n                              placeholder="Enter SKU">\n                              <button type="submit" class="btn btn-primaryadd">\n                                Generate Code\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                        <div class="addservice-info">\n                          <div class="row">\n                            <div class="col-lg-4 col-sm-6 col-12">\n                              <div class="mb-3 add-product">\n                                <div class="add-newplus">\n                                  <label class="form-label">Category</label>\n                                  <a href="javascript:void(0);" data-bs-toggle="modal"\n                                    data-bs-target="#add-units-category"><i\n                                  class="ti ti-circle-plus plus-down-add"></i><span>Add\n                                New</span></a>\n                              </div>\n                              <mat-select [(ngModel)]="selectedValue9"\n                                [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                placeholder="Choose">\n                                <mat-option value="Choose">Choose</mat-option>\n                                <mat-option value="Computers">Computers</mat-option>\n                              </mat-select>\n                            </div>\n                          </div>\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="mb-3 add-product">\n                              <label class="form-label">Choose Category</label>\n                              <mat-select [(ngModel)]="selectedValue10"\n                                [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                placeholder="Choose">\n                                <mat-option value="Choose">Choose</mat-option>\n                                <mat-option value="Computers">Computers</mat-option>\n                              </mat-select>\n                            </div>\n                          </div>\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="mb-3 add-product">\n                              <label class="form-label">Sub Category</label>\n                              <mat-select [(ngModel)]="selectedValue11"\n                                [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                placeholder="Choose">\n                                <mat-option value="Choose">Choose</mat-option>\n                                <mat-option value="Computers">Computers</mat-option>\n                              </mat-select>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="add-product-new">\n                        <div class="row">\n                          <div class="col-lg-4 col-sm-6 col-12">\n                            <div class="mb-3 add-product">\n                              <div class="add-newplus">\n                                <label class="form-label">Brand</label>\n                                <a href="javascript:void(0);" data-bs-toggle="modal"\n                                  data-bs-target="#add-units-brand"><i\n                                class="ti ti-circle-plus plus-down-add"></i><span>Add\n                              new</span></a>\n                            </div>\n                            <mat-select [(ngModel)]="selectedValue12"\n                              [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                              placeholder="Choose">\n                              <mat-option value="Choose">Choose</mat-option>\n                              <mat-option value="Nike">Nike</mat-option>\n                              <mat-option value="Bolt">Bolt</mat-option>\n                            </mat-select>\n                          </div>\n                        </div>\n                        <div class="col-lg-4 col-sm-6 col-12">\n                          <div class="mb-3 add-product">\n  \n                            <div class="add-newplus">\n                              <label class="form-label">Unit</label>\n                              <a href="javascript:void(0);" data-bs-toggle="modal"\n                                data-bs-target="#add-unit"><i\n                              class="ti ti-circle-plus plus-down-add"></i><span>Add\n                            New</span></a>\n                          </div>\n                          <mat-select [(ngModel)]="selectedValue13"\n                            [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                            placeholder="Choose">\n                            <mat-option value="Choose">Choose</mat-option>\n                            <mat-option value="Kg">Kg</mat-option>\n                            <mat-option value="Pc">Pc</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                      <div class="col-lg-4 col-sm-6 col-12">\n                        <div class="mb-3 add-product">\n                          <label class="form-label">Selling Type</label>\n                          <mat-select [(ngModel)]="selectedValue14"\n                            [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                            placeholder="Choose">\n                            <mat-option value="Choose">Choose</mat-option>\n                            <mat-option value="Computers">Computers</mat-option>\n                          </mat-select>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="col-lg-6 col-sm-6 col-12">\n                      <div class="mb-3 add-product">\n                        <label class="form-label">Barcode Symbology</label>\n                        <mat-select [(ngModel)]="selectedValue15"\n                          [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                          placeholder="Choose">\n                          <mat-option value="Choose">Choose</mat-option>\n                          <mat-option value="Code34">Code34</mat-option>\n                        </mat-select>\n                      </div>\n                    </div>\n                    <div class="col-lg-6 col-sm-6 col-12">\n                      <div class="form-group add-product list">\n                        <label>Item Code</label>\n                        <input type="text" class="form-control list"\n                          placeholder="Please Enter Item Code">\n                          <button type="submit" class="btn btn-primaryadd">\n                            Generate Code\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="row">\n                      <!-- Editor -->\n                      <div class="col-lg-12">\n                        <div class="form-group summer-description-box transfer mb-3">\n                          <label>Description</label>\n                          <div id="summernote3">\n                          </div>\n                          <p>Maximum 60 Characters</p>\n                        </div>\n                      </div>\n                      <!-- /Editor -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="accordion-card-one accordion" id="accordionExample2">\n              <div class="accordion-item">\n                <div class="accordion-header" id="headingTwo">\n                  <div class="accordion-button" data-bs-toggle="collapse"\n                    data-bs-target="#collapseTwo" aria-controls="collapseTwo">\n                    <div class="text-editor add-list">\n                      <div class="addproduct-icon list icon">\n                        <h5><i class="feather icon-life-buoy add-info"></i><span>Pricing &\n                      Stocks</span></h5>\n                      <a href="javascript:void(0);"><i\n                      class="feather icon-chevron-down chevron-down-add"></i></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div id="collapseTwo" class="accordion-collapse collapse show"\n                aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">\n                <div class="accordion-body">\n                  <div class="form-group add-products">\n                    <label class="d-block">Product Type</label>\n                    <div class="single-pill-product">\n                      <ul class="nav nav-pills" id="pills-tab1" role="tablist">\n                        <li class="nav-item" role="presentation">\n                          <span class="custom_radio me-4 mb-0 active" id="pills-home-tab"\n                            data-bs-toggle="pill" data-bs-target="#pills-home"\n                            role="tab" aria-controls="pills-home" aria-selected="true">\n                            <input type="radio" class="form-control" name="payment">\n                            <span class="checkmark"></span> Single Product</span>\n                          </li>\n                          <li class="nav-item" role="presentation">\n                            <span class="custom_radio me-2 mb-0" id="pills-profile-tab"\n                              data-bs-toggle="pill" data-bs-target="#pills-profile"\n                              role="tab" aria-controls="pills-profile"\n                              aria-selected="false">\n                              <input type="radio" class="form-control" name="sign">\n                              <span class="checkmark"></span> Variable Product</span>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div class="tab-content" id="pills-tabContent">\n                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"\n                          aria-labelledby="pills-home-tab">\n                          <div class="row">\n                            <div class="col-lg-4 col-sm-6 col-12">\n                              <div class="form-group add-product">\n                                <label>Quantity</label>\n                                <input type="text" class="form-control">\n                              </div>\n                            </div>\n                            <div class="col-lg-4 col-sm-6 col-12">\n                              <div class="form-group add-product">\n                                <label>Price</label>\n                                <input type="text" class="form-control">\n                              </div>\n                            </div>\n                            <div class="col-lg-4 col-sm-6 col-12">\n                              <div class="form-group add-product">\n                                <label>Tax Type</label>\n                                <mat-select [(ngModel)]="selectedValue16"\n                                  [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                  placeholder="Choose">\n                                  <mat-option value="Choose">Choose</mat-option>\n                                  <mat-option value="Type">Type</mat-option>\n                                </mat-select>\n                              </div>\n                            </div>\n                          </div>\n                          <div class="row">\n                            <div class="col-lg-4 col-sm-6 col-12">\n                              <div class="form-group add-product">\n                                <label>Discount Type</label>\n                                <mat-select [(ngModel)]="selectedValue17"\n                                  [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                  placeholder="Choose">\n                                  <mat-option value="Choose">Choose</mat-option>\n                                  <mat-option value="Type">Type</mat-option>\n                                </mat-select>\n                              </div>\n                            </div>\n                            <div class="col-lg-4 col-sm-6 col-12">\n                              <div class="form-group add-product">\n                                <label>Discount Value</label>\n                                <input type="text" placeholder="Choose">\n                              </div>\n                            </div>\n                            <div class="col-lg-4 col-sm-6 col-12">\n                              <div class="form-group add-product">\n                                <label>Quantity Alert</label>\n                                <input type="text" class="form-control">\n                              </div>\n                            </div>\n                          </div>\n                          <div class="accordion-card-one accordion" id="accordionExample3">\n                            <div class="accordion-item">\n                              <div class="accordion-header" id="headingThree">\n                                <div class="accordion-button" data-bs-toggle="collapse"\n                                  data-bs-target="#collapseThree"\n                                  aria-controls="collapseThree">\n                                  <div class="addproduct-icon list">\n                                    <h5><i\n                                      class="feather icon-image add-info"></i><span>Images</span>\n                                    </h5>\n                                    <a href="javascript:void(0);"><i\n                                    class="feather icon-chevron-down chevron-down-add"></i></a>\n                                  </div>\n                                </div>\n                              </div>\n                              <div id="collapseThree" class="accordion-collapse collapse show"\n                                aria-labelledby="headingThree"\n                                data-bs-parent="#accordionExample3">\n                                <div class="accordion-body">\n                                  <div class="text-editor add-list add">\n                                    <div class="col-lg-12">\n                                      <div class="add-choosen">\n                                        <div class="input-blocks">\n                                          <div class="image-upload">\n                                            <input type="file">\n                                            <div class="image-uploads">\n                                              <i\n                                              class="ti ti-circle-plus plus-down-add"></i>\n                                              <h4>Add Images</h4>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class="phone-img">\n                                          <img src="assets/img/products/phone-add-2.png"\n                                            alt="image">\n                                            <a href="javascript:void(0);"><i\n                                            class="feather icon-x x-square-add remove-product"></i></a>\n                                          </div>\n  \n                                          <div class="phone-img">\n                                            <img src="assets/img/products/phone-add-1.png"\n                                              alt="image">\n                                              <a href="javascript:void(0);"><i\n                                              class="feather icon-x x-square-add remove-product"></i></a>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class="tab-pane fade" id="pills-profile" role="tabpanel"\n                              aria-labelledby="pills-profile-tab">\n                              <div class="row select-color-add">\n                                <div class="col-lg-6 col-sm-6 col-12">\n                                  <div class="form-group add-product">\n                                    <label>Variant Attribute</label>\n                                    <div class="row">\n                                      <div class="col-lg-10 col-sm-10 col-10">\n                                        <mat-select [(ngModel)]="selectedValue18"\n                                          [ngModelOptions]="{standalone: true}"\n                                          class="form-control variant-select select-option"\n                                          placeholder="Choose" id="colorSelect">\n                                          <mat-option value="Choose">Choose</mat-option>\n                                          <mat-option value="Color">Color</mat-option>\n                                          <mat-option value="red">Red</mat-option>\n                                          <mat-option value="black">Black</mat-option>\n                                        </mat-select>\n                                      </div>\n                                      <div class="col-lg-2 col-sm-2 col-2 ps-0">\n                                        <div class="add-icon tab">\n                                          <a class="btn btn-filter" data-bs-toggle="modal"\n                                            data-bs-target="#add-units"><i\n                                          class="feather feather-plus-circle"></i></a>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class="selected-hide-color" id="input-show">\n                                    <div class="row align-items-center">\n                                      <div class="col-sm-10">\n                                        <div class="input-blocks">\n                                          <input class="input-tags form-control"\n                                            id="inputBox" type="text"\n                                            data-role="tagsinput" name="specialist"\n                                            value="red, black">\n                                          </div>\n                                        </div>\n                                        <div class="col-sm-2">\n                                          <div class="form-group ">\n                                            <a href="javascript:void(0);"\n                                              class="remove-color" ><i\n                                            class="far fa-trash-alt"></i></a>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n  \n                                <div class="modal-body-table variant-table" id="variant-table">\n                                  <div class="table-responsive">\n                                    <table class="table">\n                                      <thead>\n                                        <tr>\n                                          <th>Variantion</th>\n                                          <th>Variant Value</th>\n                                          <th>SKU</th>\n                                          <th>Quantity</th>\n                                          <th>Price</th>\n                                          <th class="no-sort">Action</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <td>\n                                            <div class="add-product">\n                                              <input type="text" class="form-control"\n                                                value="color">\n                                              </div>\n                                            </td>\n                                            <td>\n                                              <div class="add-product">\n                                                <input type="text" class="form-control"\n                                                  value="red">\n                                                </div>\n                                              </td>\n                                              <td>\n                                                <div class="add-product">\n                                                  <input type="text" class="form-control"\n                                                    value="1234">\n                                                  </div>\n                                                </td>\n                                                <td>\n                                                  <div class="product-quantity">\n                                                    <span class="quantity-btn">+<i\n                                                    class="ti ti-circle-plus plus-circle"></i></span>\n                                                    <input type="text" class="quntity-input"\n                                                      value="2">\n                                                      <span class="quantity-btn"><i\n                                                      class="feather icon-minus-circle feather-search"></i></span>\n                                                    </div>\n                                                  </td>\n                                                  <td>\n                                                    <div class="add-product">\n                                                      <input type="text" class="form-control"\n                                                        value="50000">\n                                                      </div>\n                                                    </td>\n                                                    <td class="action-table-data">\n                                                      <div class="edit-delete-action">\n                                                        <div class="input-block add-lists">\n                                                          <label class="checkboxs">\n                                                            <input type="checkbox" checked>\n                                                            <span class="checkmarks"></span>\n                                                          </label>\n                                                        </div>\n                                                        <a class="me-2 p-2"\n                                                          href="javascript:void(0);"\n                                                          data-bs-toggle="modal"\n                                                          data-bs-target="#add-variation">\n                                                          <i\n                                                          class="feather icon-plus feather-edit"></i>\n                                                        </a>\n                                                        <a class=" p-2"\n                                                          href="javascript:void(0);"\n                                                          data-bs-toggle="modal"\n                                                          data-bs-target="#add-variation">\n                                                          <i\n                                                          class="feather icon-trash-2 feather-trash-2"></i>\n                                                        </a>\n                                                      </div>\n  \n                                                    </td>\n                                                  </tr>\n                                                  <tr>\n                                                    <td>\n                                                      <div class="add-product">\n                                                        <input type="text" class="form-control"\n                                                          value="color">\n                                                        </div>\n                                                      </td>\n                                                      <td>\n                                                        <div class="add-product">\n                                                          <input type="text" class="form-control"\n                                                            value="black">\n                                                          </div>\n                                                        </td>\n                                                        <td>\n                                                          <div class="add-product">\n                                                            <input type="text" class="form-control"\n                                                              value="2345">\n                                                            </div>\n                                                          </td>\n                                                          <td>\n                                                            <div class="product-quantity">\n                                                              <span class="quantity-btn">+<i\n                                                              class="ti ti-circle-plus plus-circle"></i></span>\n                                                              <input type="text" class="quntity-input"\n                                                                value="3">\n                                                                <span class="quantity-btn"><i\n                                                                class="feather icon-minus-circle feather-search"></i></span>\n                                                              </div>\n                                                            </td>\n                                                            <td>\n                                                              <div class="add-product">\n                                                                <input type="text" class="form-control"\n                                                                  value="50000">\n                                                                </div>\n                                                              </td>\n                                                              <td class="action-table-data">\n                                                                <div class="edit-delete-action">\n                                                                  <div class="input-block add-lists">\n                                                                    <label class="checkboxs">\n                                                                      <input type="checkbox" checked>\n                                                                      <span class="checkmarks"></span>\n                                                                    </label>\n                                                                  </div>\n                                                                  <a class="me-2 p-2" href="javascript:void(0);"\n                                                                    data-bs-toggle="modal"\n                                                                    data-bs-target="#edit-units">\n                                                                    <i\n                                                                    class="feather icon-plus feather-edit"></i>\n                                                                  </a>\n                                                                  <a class=" p-2"\n                                                                    href="javascript:void(0);">\n                                                                    <i\n                                                                    class="feather icon-trash-2 feather-trash-2"></i>\n                                                                  </a>\n                                                                </div>\n  \n                                                              </td>\n                                                            </tr>\n                                                          </tbody>\n                                                        </table>\n                                                      </div>\n                                                    </div>\n  \n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class="accordion-card-one accordion" id="accordionExample4">\n                                          <div class="accordion-item">\n                                            <div class="accordion-header" id="headingFour">\n                                              <div class="accordion-button" data-bs-toggle="collapse"\n                                                data-bs-target="#collapseFour" aria-controls="collapseFour">\n                                                <div class="text-editor add-list">\n                                                  <div class="addproduct-icon list">\n                                                    <h5><i class="feather icon-list add-info"></i><span>Custom\n                                                  Fields</span></h5>\n                                                  <a href="javascript:void(0);"><i\n                                                  class="feather icon-chevron-down chevron-down-add"></i></a>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div id="collapseFour" class="accordion-collapse collapse show"\n                                            aria-labelledby="headingFour" data-bs-parent="#accordionExample4">\n                                            <div class="accordion-body">\n                                              <div class="text-editor add-list add">\n                                                <div class="custom-filed">\n                                                  <div class="input-block add-lists">\n                                                    <label class="checkboxs">\n                                                      <input type="checkbox">\n                                                      <span class="checkmarks"></span>Warranties\n                                                    </label>\n                                                    <label class="checkboxs">\n                                                      <input type="checkbox">\n                                                      <span class="checkmarks"></span>Manufacturer\n                                                    </label>\n                                                    <label class="checkboxs">\n                                                      <input type="checkbox">\n                                                      <span class="checkmarks"></span>Expiry\n                                                    </label>\n                                                  </div>\n                                                </div>\n                                                <div class="row">\n                                                  <div class="col-lg-4 col-sm-6 col-12">\n                                                    <div class="form-group add-product">\n                                                      <label>Discount Type</label>\n                                                      <mat-select [(ngModel)]="selectedValue19"\n                                                        [ngModelOptions]="{standalone: true}" class="select custom-mat-select"\n                                                        placeholder="Choose">\n                                                        <mat-option value="Choose">Choose</mat-option>\n                                                        <mat-option value="Type">Type</mat-option>\n                                                      </mat-select>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                                <div class="row">\n                                                  <div class="col-lg-4 col-sm-6 col-12">\n                                                    <div class="form-group add-product">\n                                                      <label>Quantity Alert</label>\n                                                      <input type="text" class="form-control">\n                                                    </div>\n                                                  </div>\n                                                  <div class="col-lg-4 col-sm-6 col-12">\n                                                    <div class="input-blocks">\n                                                      <label>Manufactured Date</label>\n  \n                                                      <div class="input-groupicon calender-input date-input1">\n                                                        <i class="feather icon-calendar info-img"></i>\n                                                        <input type="text" class="datetimepicker" bsDatepicker container=".date-input1"\n                                                          placeholder="Choose Date">\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                    <div class="col-lg-4 col-sm-6 col-12">\n                                                      <div class="input-blocks">\n                                                        <label>Expiry On</label>\n  \n                                                        <div class="input-groupicon calender-input date-input2">\n                                                          <i class="feather icon-calendar info-img"></i>\n                                                          <input type="text" class="datetimepicker" bsDatepicker container=".date-input2"\n                                                            placeholder="Choose Date">\n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class="btn-addproduct mb-4">\n                                            <a [routerLink]="routes.productList" class="btn btn-cancel">Reset</a>\n                                            <a href="javascript:void(0);" class="btn btn-submit me-2">Save Product</a>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <!-- /add -->\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <!-- /Add Payroll -->\n  \n                              <!-- Add Adjustment -->\n                              <div class="modal fade" id="add-units">\n                                <div class="modal-dialog modal-dialog-centered stock-adjust-modal">\n                                  <div class="modal-content">\n                                    <div class="page-wrapper-new p-0">\n                                      <div class="content">\n                                        <div class="modal-header border-0 custom-modal-header">\n                                          <div class="page-title">\n                                            <h4>Add Variation Attribute</h4>\n                                          </div>\n                                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                            <span aria-hidden="true">&times;</span>\n                                          </button>\n                                        </div>\n                                        <div class="modal-body custom-modal-body">\n                                          <div class="row">\n                                            <div class="col-lg-12">\n                                              <div class="input-blocks">\n                                                <label>Attribute Name</label>\n                                                <input type="text" class="form-control">\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-12">\n                                              <div class="input-blocks">\n                                                <label>Add Value</label>\n                                                <input type="text" class="form-control">\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class="row">\n                                            <div class="col-lg-6">\n                                              <ul class="nav user-menu">\n                                                <li class="nav-item nav-searchinputs">\n                                                  <div class="top-nav-search">\n                                                    <form  class="dropdown">\n                                                      <div class="searchinputs list dropdown-toggle"\n                                                        id="dropdownMenuClickable2" data-bs-toggle="dropdown"\n                                                        data-bs-auto-close="false">\n                                                        <input type="text" placeholder="Search">\n                                                        <i class="feather icon-search feather-16 icon"></i>\n                                                        <div class="search-addon d-none">\n                                                          <span><i class="feather icon-x-circle feather-14"></i></span>\n                                                        </div>\n                                                      </div>\n                                                      <div class="dropdown-menu search-dropdown idea"\n                                                        aria-labelledby="dropdownMenuClickable">\n                                                        <div class="search-info">\n                                                          <p>Black </p>\n                                                          <p>Red</p>\n                                                          <p>Green</p>\n                                                          <p>S</p>\n                                                          <p>M</p>\n                                                        </div>\n                                                      </div>\n                                                      <!-- <a class="btn"  id="searchdiv"><img src="assets/img/icons/search.svg" alt="img"></a> -->\n                                                    </form>\n                                                  </div>\n                                                </li>\n                                              </ul>\n                                            </div>\n                                            <div class="col-lg-6">\n                                              <div class="modal-footer-btn popup">\n                                                <a href="javascript:void(0);" class="btn btn-cancel me-2">Cancel</a>\n                                                <a href="javascript:void(0);" class="btn btn-submit">Create Adjustment</a>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <!-- /Add Adjustment -->\n  \n                              <!-- Add Category -->\n                              <div class="modal fade" id="add-units-category">\n                                <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                  <div class="modal-content">\n                                    <div class="page-wrapper-new p-0">\n                                      <div class="content">\n                                        <div class="modal-header border-0 custom-modal-header">\n                                          <div class="page-title">\n                                            <h4>Add New Category</h4>\n                                          </div>\n                                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                            <span aria-hidden="true">&times;</span>\n                                          </button>\n                                        </div>\n                                        <div class="modal-body custom-modal-body">\n                                          <div class="mb-3">\n                                            <label class="form-label">Name</label>\n                                            <input type="text" class="form-control">\n                                          </div>\n                                          <div class="modal-footer-btn">\n                                            <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                            <a [routerLink] = "routes.units" class="btn btn-submit">Submit</a>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <!-- /Add Category -->\n  \n                              <!-- Add Brand -->\n                              <div class="modal fade" id="add-units-brand">\n                                <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                  <div class="modal-content">\n                                    <div class="page-wrapper-new p-0">\n                                      <div class="content">\n                                        <div class="modal-header border-0 custom-modal-header">\n                                          <div class="page-title">\n                                            <h4>Add New Brand</h4>\n                                          </div>\n                                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                            <span aria-hidden="true">&times;</span>\n                                          </button>\n                                        </div>\n                                        <div class="modal-body custom-modal-body">\n                                          <div class="mb-3">\n                                            <label class="form-label">Brand</label>\n                                            <input type="text" class="form-control">\n                                          </div>\n                                          <div class="modal-footer-btn">\n                                            <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                            <a [routerLink] = "routes.units" class="btn btn-submit">Submit</a>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <!-- /Add Brand -->\n  \n                              <!-- Add Unit -->\n                              <div class="modal fade" id="add-unit">\n                                <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                  <div class="modal-content">\n                                    <div class="page-wrapper-new p-0">\n                                      <div class="content">\n                                        <div class="modal-header border-0 custom-modal-header">\n                                          <div class="page-title">\n                                            <h4>Add Unit</h4>\n                                          </div>\n                                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                            <span aria-hidden="true">&times;</span>\n                                          </button>\n                                        </div>\n                                        <div class="modal-body custom-modal-body">\n                                          <div class="mb-3">\n                                            <label class="form-label">Unit</label>\n                                            <input type="text" class="form-control">\n                                          </div>\n                                          <div class="modal-footer-btn">\n                                            <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                            <a [routerLink] = "routes.units" class="btn btn-submit">Submit</a>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <!-- /Add Unit -->\n  \n                              <!-- Add Variatent -->\n                              <div class="modal fade" id="add-variation">\n                                <div class="modal-dialog modal-dialog-centered custom-modal-two">\n                                  <div class="modal-content">\n                                    <div class="page-wrapper-new p-0">\n                                      <div class="content">\n                                        <div class="modal-header border-0 custom-modal-header">\n                                          <div class="page-title">\n                                            <h4>Add Variation</h4>\n                                          </div>\n                                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                            <span aria-hidden="true">&times;</span>\n                                          </button>\n                                        </div>\n                                        <div class="modal-body custom-modal-body">\n                                          <div class="modal-title-head people-cust-avatar">\n                                            <h6>Variant Thumbnail</h6>\n                                          </div>\n                                          <div class="new-employee-field">\n                                            <div class="profile-pic-upload">\n                                              <div class="profile-pic">\n                                                <span><i class="ti ti-circle-plus plus-down-add"></i> Add Image</span>\n                                              </div>\n                                              <div class="mb-3">\n                                                <div class="image-upload mb-0">\n                                                  <input type="file">\n                                                  <div class="image-uploads">\n                                                    <h4>Change Image</h4>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class="row">\n                                            <div class="col-lg-6 pe-0">\n                                              <div class="mb-3">\n                                                <label class="form-label">Barcode Symbology</label>\n                                                <mat-select [(ngModel)]="selectedValue20" [ngModelOptions]="{standalone: true}"\n                                                  class="select custom-mat-select" placeholder="Choose">\n                                                  <mat-option value="Choose">Choose</mat-option>\n                                                  <mat-option value="Code34">Code34</mat-option>\n                                                </mat-select>\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-6 pe-0">\n                                              <div class="mb-3">\n                                                <div class="form-group add-product list">\n                                                  <label>Item Code</label>\n                                                  <input type="text" class="form-control list" value="455454478844">\n                                                  <button type="submit" class="btn btn-primaryadd">\n                                                    Generate Code\n                                                  </button>\n                                                </div>\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-12">\n                                              <div class="form-group image-upload-down">\n                                                <div class="image-upload download">\n                                                  <input type="file">\n                                                  <div class="image-uploads">\n                                                    <img src="assets/img/download-img.png" alt="img">\n                                                    <h4>Drag and drop a <span>file to upload</span></h4>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                              <div class="accordion-body">\n                                                <div class="text-editor add-list add">\n                                                  <div class="col-lg-12">\n                                                    <div class="add-choosen mb-3">\n                                                      <div class="phone-img ms-0">\n                                                        <img src="assets/img/products/phone-add-2.png" alt="image">\n                                                        <a href="javascript:void(0);"><i\n                                                        class="feather icon-x x-square-add remove-product"></i></a>\n                                                      </div>\n  \n                                                      <div class="phone-img">\n                                                        <img src="assets/img/products/phone-add-1.png" alt="image">\n                                                        <a href="javascript:void(0);"><i\n                                                        class="feather icon-x x-square-add remove-product"></i></a>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-6 pe-0">\n                                              <div class="mb-3">\n                                                <label class="form-label">Quantity</label>\n                                                <input type="text" class="form-control">\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-6 pe-0">\n                                              <div class="mb-3">\n                                                <label class="form-label">Quantity Alert</label>\n                                                <input type="text" class="form-control">\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-6 pe-0">\n                                              <div class="mb-3">\n                                                <label class="form-label">Tax Type</label>\n                                                <mat-select [(ngModel)]="selectedValue21" [ngModelOptions]="{standalone: true}"\n                                                  class="select custom-mat-select" placeholder="Choose">\n                                                  <mat-option value="Choose">Choose</mat-option>\n                                                  <mat-option value="Direct">Direct</mat-option>\n                                                  <mat-option value="Indirect">Indirect</mat-option>\n                                                </mat-select>\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-6 pe-0">\n                                              <div class="mb-3">\n                                                <label class="form-label">Tax </label>\n                                                <mat-select [(ngModel)]="selectedValue22" [ngModelOptions]="{standalone: true}"\n                                                  class="select custom-mat-select" placeholder="Choose">\n                                                  <mat-option value="Choose">Choose</mat-option>\n                                                  <mat-option value="Income Tax">Income Tax</mat-option>\n                                                  <mat-option value="Service Tax">Service Tax</mat-option>\n                                                </mat-select>\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-12 pe-0">\n                                              <div class="mb-3">\n                                                <label class="form-label">Discount Type </label>\n                                                <mat-select [(ngModel)]="selectedValue23" [ngModelOptions]="{standalone: true}"\n                                                  class="select custom-mat-select" placeholder="Choose">\n                                                  <mat-option value="Choose">Choose</mat-option>\n                                                  <mat-option value="Percentage">Percentage</mat-option>\n                                                  <mat-option value="Early Payment">Early Payment</mat-option>\n                                                </mat-select>\n                                              </div>\n                                            </div>\n                                            <div class="col-lg-12 pe-0">\n                                              <div>\n                                                <label class="form-label">Discount Value</label>\n                                                <input type="text" class="form-control">\n                                              </div>\n                                            </div>\n                                          </div>\n  \n  \n                                          <div class="modal-footer-btn">\n                                            <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>\n                                            <a [routerLink] = "routes.wareHouse" class="btn btn-submit">Submit</a>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <!-- /Add Variatent -->\n  \n          <!-- Import Product -->\n          <div class="modal fade" id="view-notes">\n              <div class="modal-dialog modal-dialog-centered">\n                  <div class="modal-content">\n                      <div class="page-wrapper-new p-0">\n                          <div class="contents">\n                              <div class="modal-header">\n                                  <div class="page-title">\n                                      <h4>Import Product</h4>\n                                  </div>\n                                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                                      <span aria-hidden="true">&times;</span>\n                                  </button>\n                              </div>\n                              <div class="modal-body">\n                                  <form>\n                                  \n                                      <div class="row">\n                                          <div class="col-12">\n                                              <div class="mb-3">\n                                                  <label>Product<span class="ms-1 text-danger">*</span></label>\n                                                  <mat-select class="custom-mat-select select" placeholder="Choose">\n                                                      <mat-option value="1">Choose</mat-option>\n                                                      <mat-option value="1">Bold V3.2</mat-option>\n                                                      <mat-option value="1">Nike Jordan</mat-option>\n                                                      <mat-option value="1">Iphone 14 Pro</mat-option>\n                                                  </mat-select>\n                                              </div>\n                                          </div>\n                                          <div class="col-sm-6 col-12">\n                                              <div class="mb-3">\n                                                  <label>Category<span class="ms-1 text-danger">*</span></label>\n                                                  <mat-select class="custom-mat-select select" placeholder="Choose">\n                                                      <mat-option value="1">Choose</mat-option>\n                                                      <mat-option value="1">Laptop</mat-option>\n                                                      <mat-option value="1">Electronics</mat-option>\n                                                      <mat-option value="1">Shoe</mat-option>\n                                                  </mat-select>\n                                              </div>\n                                          </div>\n                                          <div class="col-sm-6 col-12">\n                                              <div class="mb-3">\n                                                  <label>Sub Category<span class="ms-1 text-danger">*</span></label>\n                                                  <mat-select class="custom-mat-select select" placeholder="Choose">\n                                                      <mat-option value="1">Choose</mat-option>\n                                                      <mat-option value="1">Lenovo</mat-option>\n                                                      <mat-option value="1">Bolt</mat-option>\n                                                      <mat-option value="1">Nike</mat-option>\n                                                  </mat-select>\n                                              </div>\n                                          </div>\n                                          <div class="col-lg-12 col-sm-6 col-12">\n                                              <div class="row">\n                                                  <div>\n                                                      <div class="modal-footer-btn download-file">\n                                                          <a href="javascript:void(0)" class="btn btn-submit">Download Sample File</a>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class="col-lg-12">\n                                              <div class="mb-3 image-upload-down">\n                                                  <label class="form-label">Upload CSV File</label>\n                                                  <div class="image-upload download">\n                                                      <input type="file">\n                                                      <div class="image-uploads">\n                                                          <img src="assets/img/download-img.png" alt="img">\n                                                          <h4>Drag and drop a <span>file to upload</span></h4>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class="col-lg-12 col-sm-6 col-12">\n                                              <div class="mb-3">\n                                                  <label class="form-label">Created by<span class="ms-1 text-danger">*</span></label>\n                                                  <input type="text" class="form-control">\n                                              </div>\n                                          </div>\n                                      </div>\n                                      <div class="row">\n                                      <div class="col-lg-12">\n                                          <div class="mb-3 mb-3">\n                                              <label class="form-label">Description</label>\n                                              <textarea class="form-control"></textarea>\n                                              <p class="mt-1">Maximum 60 Characters</p>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  </form>\n                              </div>\n                              <div class="modal-footer">\n                                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Submit</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- /Import Product -->\n\n\n          		<!-- delete modal -->\n			<div class="modal fade" id="delete-modal">\n                <div class="modal-dialog modal-dialog-centered">\n                    <div class="modal-content">\n                        <div class="page-wrapper-new p-0">\n                            <div class="content p-5 px-3 text-center">\n                                    <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                                    <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Product</h4>\n                                    <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete product?</p>\n                                    <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                                        <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                                        <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                                    </div>						\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src/app/features/pages/application/ecommerce/products/products.component.ts", lineNumber: 20 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=chunk-4Y4JBP2J.js.map
