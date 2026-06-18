import {
  intlTelInput_default
} from "./chunk-3ROKZQXR.js";
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

// src/app/features/pages/people/warehouse/warehouse.component.ts
var _c0 = () => ({ standalone: true });
function WarehouseComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function WarehouseComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function WarehouseComponent_For_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 94)(3, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseComponent_For_95_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 96)(9, "a", 97);
    \u0275\u0275element(10, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 99)(12, "p", 63)(13, "a", 100);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
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
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 101);
    \u0275\u0275element(27, "i", 102);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 103)(30, "div", 104)(31, "a", 105);
    \u0275\u0275element(32, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 107);
    \u0275\u0275element(34, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 109);
    \u0275\u0275element(36, "i", 110);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r2.warehouse, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/warehouse/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.contactPerson);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.phone, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.totalProducts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.stock, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
  }
}
function WarehouseComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var WarehouseComponent = class _WarehouseComponent {
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
        if (this.router.url == this.routes.wareHouse) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getWareHouse().subscribe((apiRes) => {
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
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedValue9 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Warehouse" },
    { value: "Legendary" },
    { value: "Determined" },
    { value: "Sincere" },
    { value: "Pretty" }
  ];
  selectedList3 = [
    { value: "Choose Person" },
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList4 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  selectedList5 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  selectedList6 = [
    { value: "Choose" },
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList7 = [
    { value: "Choose" },
    { value: "United Kingdom" },
    { value: "United State" }
  ];
  selectedList8 = [
    { value: "Choose" },
    { value: "Steven" },
    { value: "Gravely" }
  ];
  selectedList9 = [
    { value: "United Kingdom" },
    { value: "United State" }
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
  showBox = false;
  toggleBox() {
    this.showBox = !this.showBox;
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
  ngAfterViewInit() {
    const input = document.querySelector("#phone");
    const input2 = document.querySelector("#phone2");
    intlTelInput_default(input, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    intlTelInput_default(input2, {
      initialCountry: "us",
      preferredCountries: ["us", "gb", "in"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9+()-\s]/g, "");
    });
    input.addEventListener("input2", () => {
      input2.value = input2.value.replace(/[^0-9+()-\s]/g, "");
    });
  }
  static \u0275fac = function WarehouseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WarehouseComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarehouseComponent, selectors: [["app-warehouse"]], decls: 359, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-warehouse", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "warehouse"], ["mat-sort-header", "contact"], ["mat-sort-header", "phone"], ["mat-sort-header", "totalproduct"], ["mat-sort-header", "stock"], ["mat-sort-header", "qty"], ["mat-sort-header", "createdOn"], ["mat-sort-header", "status"], ["id", "add-warehouse", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "email", 1, "form-control"], [1, "col-lg-6"], [1, "col-lg-6", "col-sm-10", "col-10"], [1, "col-md-12"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "users5", "checked", "", 1, "check"], ["for", "users5", 1, "checktoggle", "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-warehouse", 1, "modal", "fade"], ["type", "text", "value", "Lavish Warehouse", 1, "form-control"], ["placeholder", "Steven", 1, "custom-mat-select", "select"], ["type", "email", "value", "electromart@example.com", 1, "form-control"], ["type", "text", "value", "+12498345785", 1, "form-control"], ["type", "text", "value", "+17538647943", 1, "form-control"], ["type", "text", "value", "46 Perry Street", 1, "form-control"], ["placeholder", "Varrel", 1, "custom-mat-select", "select"], ["placeholder", "Bavaria", 1, "custom-mat-select", "select"], ["placeholder", "Germany", 1, "custom-mat-select", "select"], ["type", "text", "value", "10176", 1, "form-control"], ["type", "checkbox", "id", "users6", "checked", "", 1, "check"], ["for", "users6", 1, "checktoggle", "mb-0"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-content", "p-5"], [1, "modal-body", "text-center", "p-0"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "d-flex", "justify-content-center", "mt-3"], ["data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["alt", "img", 1, "img-fluid", "rounded-2", 3, "src"], [1, "ms-2"], ["href", "javascript:void(0);", 1, "text-default"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "edit-icon", "p-2"], [1, "feather", "icon-eye", "feather-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-warehouse", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function WarehouseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your warehouse");
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
      \u0275\u0275listener("click", function WarehouseComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, WarehouseComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, WarehouseComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add Warehouse");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function WarehouseComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function WarehouseComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "New Joiners");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 28)(49, "a", 25);
      \u0275\u0275text(50, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 26)(52, "li")(53, "a", 27);
      \u0275\u0275text(54, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 27);
      \u0275\u0275text(66, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(67, "div", 29)(68, "div", 30)(69, "table", 31);
      \u0275\u0275listener("matSortChange", function WarehouseComponent_Template_table_matSortChange_69_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(70, "thead")(71, "tr")(72, "th", 32)(73, "label", 33);
      \u0275\u0275listener("click", function WarehouseComponent_Template_label_click_73_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(74, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function WarehouseComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "th", 36);
      \u0275\u0275text(77, "Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 37);
      \u0275\u0275text(79, "Contact Person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 38);
      \u0275\u0275text(81, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 39);
      \u0275\u0275text(83, "Total Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 40);
      \u0275\u0275text(85, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 41);
      \u0275\u0275text(87, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 42);
      \u0275\u0275text(89, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 43);
      \u0275\u0275text(91, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(92, "th", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "tbody");
      \u0275\u0275repeaterCreate(94, WarehouseComponent_For_95_Template, 37, 11, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(96, WarehouseComponent_Conditional_96_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(97, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 44)(99, "div", 45)(100, "div", 46)(101, "div", 47)(102, "div", 2)(103, "h4");
      \u0275\u0275text(104, "Add Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "button", 48)(106, "span", 49);
      \u0275\u0275text(107, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "form")(109, "div", 50)(110, "div", 51)(111, "div", 52)(112, "div", 53)(113, "label", 54);
      \u0275\u0275text(114, "Warehouse ");
      \u0275\u0275elementStart(115, "span", 55);
      \u0275\u0275text(116, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(117, "input", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 52)(119, "div", 53)(120, "label", 54);
      \u0275\u0275text(121, "Contact Person ");
      \u0275\u0275elementStart(122, "span", 55);
      \u0275\u0275text(123, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "mat-select", 57)(125, "mat-option", 58);
      \u0275\u0275text(126, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "mat-option", 58);
      \u0275\u0275text(128, "Steven");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-option", 58);
      \u0275\u0275text(130, "Gravely");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(131, "div", 52)(132, "div", 53)(133, "label", 54);
      \u0275\u0275text(134, "Email ");
      \u0275\u0275elementStart(135, "span", 55);
      \u0275\u0275text(136, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(137, "input", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 60)(139, "div", 53)(140, "label", 54);
      \u0275\u0275text(141, "Phone ");
      \u0275\u0275elementStart(142, "span", 55);
      \u0275\u0275text(143, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(144, "input", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 60)(146, "div", 53)(147, "label", 54);
      \u0275\u0275text(148, "Phone(Work)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "input", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 52)(151, "div", 53)(152, "label", 54);
      \u0275\u0275text(153, "Address ");
      \u0275\u0275elementStart(154, "span", 55);
      \u0275\u0275text(155, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(156, "input", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 61)(158, "div", 53)(159, "label", 54);
      \u0275\u0275text(160, "City ");
      \u0275\u0275elementStart(161, "span", 55);
      \u0275\u0275text(162, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "mat-select", 57)(164, "mat-option", 58);
      \u0275\u0275text(165, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "mat-option", 58);
      \u0275\u0275text(167, "Varrel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "mat-option", 58);
      \u0275\u0275text(169, "Los Angels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "mat-option", 58);
      \u0275\u0275text(171, "Munich");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 61)(173, "div", 53)(174, "label", 54);
      \u0275\u0275text(175, "State ");
      \u0275\u0275elementStart(176, "span", 55);
      \u0275\u0275text(177, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "mat-select", 57)(179, "mat-option", 58);
      \u0275\u0275text(180, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "mat-option", 58);
      \u0275\u0275text(182, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "mat-option", 58);
      \u0275\u0275text(184, "New York City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "mat-option", 58);
      \u0275\u0275text(186, "California");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(187, "div", 61)(188, "div", 53)(189, "label", 54);
      \u0275\u0275text(190, "Country ");
      \u0275\u0275elementStart(191, "span", 55);
      \u0275\u0275text(192, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "mat-select", 57)(194, "mat-option", 58);
      \u0275\u0275text(195, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "mat-option", 58);
      \u0275\u0275text(197, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "mat-option", 58);
      \u0275\u0275text(199, "Mexico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "mat-option", 58);
      \u0275\u0275text(201, "United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(202, "div", 60)(203, "div", 53)(204, "label", 54);
      \u0275\u0275text(205, "Postal Code ");
      \u0275\u0275elementStart(206, "span", 55);
      \u0275\u0275text(207, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(208, "input", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "div", 62)(210, "div", 63)(211, "div", 64)(212, "span", 65);
      \u0275\u0275text(213, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "input", 66)(215, "label", 67);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(216, "div", 68)(217, "button", 69);
      \u0275\u0275text(218, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "button", 70);
      \u0275\u0275text(220, "Add Warehouse");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(221, "div", 71)(222, "div", 45)(223, "div", 46)(224, "div", 47)(225, "div", 2)(226, "h4");
      \u0275\u0275text(227, "Edit Warehouse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "button", 48)(229, "span", 49);
      \u0275\u0275text(230, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "form")(232, "div", 50)(233, "div", 51)(234, "div", 52)(235, "div", 53)(236, "label", 54);
      \u0275\u0275text(237, "Warehouse ");
      \u0275\u0275elementStart(238, "span", 55);
      \u0275\u0275text(239, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(240, "input", 72);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "div", 52)(242, "div", 53)(243, "label", 54);
      \u0275\u0275text(244, "Contact Person ");
      \u0275\u0275elementStart(245, "span", 55);
      \u0275\u0275text(246, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "mat-select", 73)(248, "mat-option", 58);
      \u0275\u0275text(249, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "mat-option", 58);
      \u0275\u0275text(251, "Steven");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "mat-option", 58);
      \u0275\u0275text(253, "Gravely");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(254, "div", 52)(255, "div", 53)(256, "label", 54);
      \u0275\u0275text(257, "Email ");
      \u0275\u0275elementStart(258, "span", 55);
      \u0275\u0275text(259, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(260, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 60)(262, "div", 53)(263, "label", 54);
      \u0275\u0275text(264, "Phone ");
      \u0275\u0275elementStart(265, "span", 55);
      \u0275\u0275text(266, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(267, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "div", 60)(269, "div", 53)(270, "label", 54);
      \u0275\u0275text(271, "Phone(Work)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(272, "input", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "div", 52)(274, "div", 53)(275, "label", 54);
      \u0275\u0275text(276, "Address ");
      \u0275\u0275elementStart(277, "span", 55);
      \u0275\u0275text(278, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(279, "input", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 61)(281, "div", 53)(282, "label", 54);
      \u0275\u0275text(283, "City ");
      \u0275\u0275elementStart(284, "span", 55);
      \u0275\u0275text(285, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "mat-select", 78)(287, "mat-option", 58);
      \u0275\u0275text(288, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "mat-option", 58);
      \u0275\u0275text(290, "Varrel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "mat-option", 58);
      \u0275\u0275text(292, "Los Angels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "mat-option", 58);
      \u0275\u0275text(294, "Munich");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(295, "div", 61)(296, "div", 53)(297, "label", 54);
      \u0275\u0275text(298, "State ");
      \u0275\u0275elementStart(299, "span", 55);
      \u0275\u0275text(300, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "mat-select", 79)(302, "mat-option", 58);
      \u0275\u0275text(303, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "mat-option", 58);
      \u0275\u0275text(305, "Bavaria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "mat-option", 58);
      \u0275\u0275text(307, "New York City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "mat-option", 58);
      \u0275\u0275text(309, "California");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(310, "div", 61)(311, "div", 53)(312, "label", 54);
      \u0275\u0275text(313, "Country ");
      \u0275\u0275elementStart(314, "span", 55);
      \u0275\u0275text(315, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(316, "mat-select", 80)(317, "mat-option", 58);
      \u0275\u0275text(318, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "mat-option", 58);
      \u0275\u0275text(320, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "mat-option", 58);
      \u0275\u0275text(322, "Mexico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "mat-option", 58);
      \u0275\u0275text(324, "United States");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(325, "div", 60)(326, "div", 53)(327, "label", 54);
      \u0275\u0275text(328, "Postal Code ");
      \u0275\u0275elementStart(329, "span", 55);
      \u0275\u0275text(330, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(331, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 62)(333, "div", 63)(334, "div", 64)(335, "span", 65);
      \u0275\u0275text(336, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(337, "input", 82)(338, "label", 83);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(339, "div", 68)(340, "button", 69);
      \u0275\u0275text(341, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "button", 70);
      \u0275\u0275text(343, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(344, "div", 84)(345, "div", 45)(346, "div", 85)(347, "div", 86)(348, "span", 87);
      \u0275\u0275element(349, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "h4", 89);
      \u0275\u0275text(351, "Delete Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "p", 90);
      \u0275\u0275text(353, "Are you sure you want to delete warehouse?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "div", 91)(355, "a", 92);
      \u0275\u0275text(356, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "a", 93);
      \u0275\u0275text(358, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 96 : -1);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WarehouseComponent, [{
    type: Component,
    args: [{ selector: "app-warehouse", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSelectModule, MatSortModule], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Warehouse</h4>\n      <h6>Manage your warehouse</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf" matTooltip="Pdf"\n        matTooltipPosition="above"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n      </li>\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel" matTooltip="Excel"\n          matTooltipPosition="above"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n          <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"\n              matTooltipPosition="above"><i class="ti ti-refresh"></i></a>\n            </li>\n            <li>\n              <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse"\n                matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n                <i class="ti ti-chevron-up"></i>\n              }\n              @if (isCollapsed) {\n                <i class="ti ti-chevron-up"></i>\n              }</a>\n            </li>\n          </ul>\n          <div class="page-btn">\n            <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-warehouse"><i  class="ti ti-circle-plus me-2"></i>Add Warehouse</a>\n          </div>\n        </div>\n        <!-- /product list -->\n        <div class="card table-list-card">\n          <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n            <div class="search-set">\n              <div class="search-input">\n                <a href="javascript:void(0);" class="btn btn-searchset"><i  class="feather icon-search feather-search"></i></a>\n                <div class="dataTables_filter">\n                  <label>\n                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                      type="search" class="form-control" placeholder="Search..." />\n                    </label>\n                  </div>\n                </div>\n            </div>\n            <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n              <div class="dropdown me-2">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Select Status\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>\n                  </li>\n                </ul>\n              </div>\n              <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="card-body">\n              <div class="table-responsive">\n                <table class="table  datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n                  matSortDirection="asc" matSortDisableClear>\n                  <thead>\n                    <tr>\n                     <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n                      <th mat-sort-header="warehouse">Warehouse</th>\n                      <th mat-sort-header="contact">Contact Person</th>\n                      <th mat-sort-header="phone">Phone</th>\n                      <th mat-sort-header="totalproduct">Total Products</th>\n                      <th mat-sort-header="stock">Stock</th>\n                      <th mat-sort-header="qty">Qty</th>\n                      <th mat-sort-header="createdOn">Created On</th>\n                      <th mat-sort-header="status">Status</th>\n                      <th class="no-sort"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    @for (data of tableData; track data) {\n                      <tr>\n                      <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n                        <td>\n                          {{data.warehouse}}\n                        </td>\n                        <td>\n                          <div class="d-flex align-items-center">\n													<a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/warehouse/{{data.img}}" class="img-fluid rounded-2" alt="img"></a>\n													<div class="ms-2">\n														<p class="mb-0"><a href="javascript:void(0);" class="text-default">{{data.contactPerson}}</a></p>\n													</div>\n												</div>\n                        </td>\n                        <td>\n                          {{data.phone}}\n                        </td>\n                        <td>{{data.totalProducts}}</td>\n                        <td>\n                          {{data.stock}}\n                        </td>\n                        <td>{{data.qty}}</td>\n                        <td>{{data.createdOn}}</td>\n                        <td><span class="badge badge-success d-inline-flex align-items-center badge-xs">\n													<i class="ti ti-point-filled me-1"></i>{{data.status}}\n												</span></td>\n                        <td class="action-table-data">\n                          <div class="edit-delete-action">\n                            <a class="me-2 edit-icon p-2" href="javascript:void(0);" >\n                              <i  class="feather icon-eye feather-eye"></i>\n                            </a>\n                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-warehouse">\n                              <i  class="feather icon-edit feather-edit"></i>\n                            </a>\n                            <a class=" p-2" href="javascript:void(0);">\n                              <i  class="feather icon-trash-2 feather-trash-2"></i>\n                            </a>\n                          </div>\n                        </td>\n                      </tr>\n                    }@if(tableData.length === 0){\n						<tr>\n							<td class="text-center" colspan="12">No Matching Data Found</td>\n						</tr>\n					}\n                  </tbody>\n                </table>\n\n              </div>\n              <app-custom-pagination></app-custom-pagination>\n            </div>\n          </div>\n          <!-- /product list -->\n		<!-- Add Warehouse -->\n		<div class="modal fade" id="add-warehouse">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Warehouse</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Warehouse <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Contact Person <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Steven</mat-option>\n											<mat-option value="1">Gravely</mat-option>\n										</mat-select>\n									</div>\n								</div>	\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Email <span class="text-danger">*</span></label>\n										<input type="email" class="form-control">\n									</div>\n								</div>								\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Phone <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>	\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Phone(Work)</label>\n										<input type="text" class="form-control">\n									</div>\n								</div>								\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Address <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-6 col-sm-10 col-10">\n									<div class="mb-3">\n										<label class="form-label">City <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Varrel</mat-option>\n											<mat-option value="1">Los Angels</mat-option>\n											<mat-option value="1">Munich</mat-option>											\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6 col-sm-10 col-10">\n									<div class="mb-3">\n										<label class="form-label">State <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Bavaria</mat-option>\n											<mat-option value="1">New York City</mat-option>\n											<mat-option value="1">California</mat-option>											\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6 col-sm-10 col-10">\n									<div class="mb-3">\n										<label class="form-label">Country <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Select">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Germany</mat-option>\n											<mat-option value="1">Mexico</mat-option>\n											<mat-option value="1">United States</mat-option>											\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Postal Code <span class="text-danger">*</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-md-12">\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="users5" class="check" checked>\n											<label for="users5" class="checktoggle mb-0"></label>\n										</div>\n									</div>	\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Warehouse</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Warehouse -->\n\n		<!-- Edit Warehouse -->\n		<div class="modal fade" id="edit-warehouse">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Warehouse</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Warehouse <span class="text-danger">*</span></label>\n										<input type="text" class="form-control" value="Lavish Warehouse">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Contact Person <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Steven">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Steven</mat-option>\n											<mat-option value="1">Gravely</mat-option>\n										</mat-select>\n									</div>\n								</div>	\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Email <span class="text-danger">*</span></label>\n										<input type="email" class="form-control" value="electromart@example.com">\n									</div>\n								</div>								\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Phone <span class="text-danger">*</span></label>\n										<input type="text" class="form-control" value="+12498345785">\n									</div>\n								</div>	\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Phone(Work)</label>\n										<input type="text" class="form-control" value="+17538647943">\n									</div>\n								</div>								\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Address <span class="text-danger">*</span></label>\n										<input type="text" class="form-control" value="46 Perry Street">\n									</div>\n								</div>\n								<div class="col-lg-6 col-sm-10 col-10">\n									<div class="mb-3">\n										<label class="form-label">City <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Varrel">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Varrel</mat-option>\n											<mat-option value="1">Los Angels</mat-option>\n											<mat-option value="1">Munich</mat-option>											\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6 col-sm-10 col-10">\n									<div class="mb-3">\n										<label class="form-label">State <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Bavaria">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Bavaria</mat-option>\n											<mat-option value="1">New York City</mat-option>\n											<mat-option value="1">California</mat-option>											\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6 col-sm-10 col-10">\n									<div class="mb-3">\n										<label class="form-label">Country <span class="text-danger">*</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Germany">\n											<mat-option value="1">Select</mat-option>\n											<mat-option value="1">Germany</mat-option>\n											<mat-option value="1">Mexico</mat-option>\n											<mat-option value="1">United States</mat-option>											\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-6">\n									<div class="mb-3">\n										<label class="form-label">Postal Code <span class="text-danger">*</span></label>\n										<input type="text" class="form-control" value="10176">\n									</div>\n								</div>\n								<div class="col-md-12">\n									<div class="mb-0">\n										<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n											<span class="status-label">Status</span>\n											<input type="checkbox" id="users6" class="check" checked>\n											<label for="users6" class="checktoggle mb-0"></label>\n										</div>\n									</div>	\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Warehouse -->\n\n		<!-- Delete Modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content p-5">\n					<div class="modal-body text-center p-0">\n						<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n						<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Warehouse</h4>\n						<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete warehouse?</p>	\n						<div class="d-flex justify-content-center mt-3">\n							<a class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</a>\n							<a href="javascript:void(0);" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</a>\n						</div>											\n					</div>					\n				</div>\n			</div>\n		</div>\n		<!-- /Delete Modal -->\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarehouseComponent, { className: "WarehouseComponent", filePath: "src/app/features/pages/people/warehouse/warehouse.component.ts", lineNumber: 27 });
})();
export {
  WarehouseComponent
};
//# sourceMappingURL=chunk-7TOCUA2W.js.map
