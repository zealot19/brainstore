import {
  CommonCounterComponent
} from "./chunk-LG6DY5RG.js";
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
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

// src/app/features/pages/sales/pos-order/pos-order.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1) => ({ "badge-success": a0, "badge-cyan": a1 });
var _c2 = (a0, a1, a2) => ({ "badge-soft-success": a0, "badge-soft-danger": a1, "badge-soft-warning": a2 });
function PosOrderComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PosOrderComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function PosOrderComponent_For_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 189)(3, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_For_124_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 191);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 112)(7, "a", 113);
    \u0275\u0275element(8, "img", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 115);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 193);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 194);
    \u0275\u0275element(26, "i", 195);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 46)(31, "a", 196);
    \u0275\u0275element(32, "i", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ul", 198)(34, "li")(35, "a", 199);
    \u0275\u0275element(36, "i", 200);
    \u0275\u0275text(37, "Sale Detail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "li")(39, "a", 201);
    \u0275\u0275element(40, "i", 202);
    \u0275\u0275text(41, "Edit Sale");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "li")(43, "a", 203);
    \u0275\u0275element(44, "i", 163);
    \u0275\u0275text(45, "Show Payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "li")(47, "a", 204);
    \u0275\u0275element(48, "i", 205);
    \u0275\u0275text(49, "Create Payment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "li")(51, "a", 206);
    \u0275\u0275element(52, "i", 207);
    \u0275\u0275text(53, "Download pdf");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "li")(55, "a", 208);
    \u0275\u0275element(56, "i", 209);
    \u0275\u0275text(57, "Delete Sale");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CustomerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c1, data_r2.Status === "Completed", data_r2.Status === "Pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.Status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.GrandTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Paid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Due);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c2, data_r2.PaymentStatus === "Paid", data_r2.PaymentStatus === "Unpaid", data_r2.PaymentStatus === "Overdue"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.PaymentStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Biller);
  }
}
function PosOrderComponent_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 210);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
function PosOrderComponent_For_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
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
function PosOrderComponent_For_205_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
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
function PosOrderComponent_For_273_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    \u0275\u0275property("value", data_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r5.value, " ");
  }
}
function PosOrderComponent_For_577_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    \u0275\u0275property("value", data_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r6.value, " ");
  }
}
function PosOrderComponent_For_599_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    \u0275\u0275property("value", data_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r7.value, " ");
  }
}
function PosOrderComponent_For_667_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    \u0275\u0275property("value", data_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r8.value, " ");
  }
}
function PosOrderComponent_For_784_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    \u0275\u0275property("value", data_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r9.value, " ");
  }
}
function PosOrderComponent_For_847_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    \u0275\u0275property("value", data_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r10.value, " ");
  }
}
var PosOrderComponent = class _PosOrderComponent {
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
  routes = routes;
  editor;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "07 09 23" },
    { value: "21 09 23" }
  ];
  selectedList2 = [
    { value: "Choose Customer Name" },
    { value: "Macbook pro" },
    { value: "Orange" }
  ];
  selectedList3 = [
    { value: "Choose Status" },
    { value: "Computers" },
    { value: "Fruits" }
  ];
  selectedList4 = [
    { value: "Choose Payment Status" },
    { value: "Computers" },
    { value: "Fruits" }
  ];
  selectedList5 = [{ value: "Choose" }, { value: "Customer Name" }];
  selectedList6 = [{ value: "Choose" }, { value: "Supplier Name" }];
  selectedList7 = [
    { value: "Choose" },
    { value: "Completed" },
    { value: "Inprogress" }
  ];
  selectedList8 = [{ value: "Thomas" }, { value: "Name" }];
  selectedList9 = [
    { value: "Dazzle Shoes" },
    { value: "Supplier Name" }
  ];
  selectedList10 = [
    { value: "Choose" },
    { value: "Completed" },
    { value: "Inprogress" }
  ];
  selectedList11 = [
    { value: "Choose" },
    { value: "Online" },
    { value: "Cash" }
  ];
  selectedList12 = [
    { value: "Cash" },
    { value: "Online" },
    { value: "Inprogress" }
  ];
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
        if (this.router.url == this.routes.posOrder) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSalesList().subscribe((apiRes) => {
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
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static \u0275fac = function PosOrderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PosOrderComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosOrderComponent, selectors: [["app-pos-order"]], decls: 878, vars: 39, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-sales-new", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "custom-datatable-filter", "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "customerName"], ["mat-sort-header", "reference"], ["mat-sort-header", "date"], ["mat-sort-header", "status"], ["mat-sort-header", "grandTotal"], ["mat-sort-header", "paid"], ["mat-sort-header", "due"], ["mat-sort-header", "paymentStatus"], ["mat-sort-header", "biller"], [1, "text-center"], [1, "sales-list"], ["id", "add-sales-new", 1, "modal", "fade"], [1, "modal-dialog", "add-centered"], [1, "modal-content"], [1, "page-wrapper", "p-0", "m-0"], [1, "content", "p-0"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card"], [1, "table-responsive", "no-pagination", "mb-3"], [1, "table", "datanew"], [1, "row"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "text-danger", "ms-1"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon"], ["href", "javascript:void(0);", 1, "choose-add"], [1, "ti", "ti-circle-plus", "plus"], [1, "input-groupicon", "calender-input"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose", 1, "datetimepicker", "form-control"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "input-groupicon", "select-code"], ["type", "text", "placeholder", "Please type product code and select", 1, "form-control"], [1, "addonset"], ["src", "assets/img/icons/qrcode-scan.svg", "alt", "img"], [1, "col-lg-6", "ms-auto"], [1, "total-order", "w-100", "max-widthauto", "m-auto", "mb-4"], [1, "border-1", "rounded-2"], [1, "border-bottom"], [1, "border-end"], [1, "col-lg-3", "col-sm-6", "col-12"], ["type", "text", "value", "0", 1, "p-2", "form-control"], [1, "input-blocks", "mb-5"], [1, "col-lg-12", "text-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "add-cancel", "me-3"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "add-sale"], ["id", "sales-details-new", 1, "modal", "fade"], [1, "modal-dialog", "sales-details-modal"], [1, "page-header", "p-4", "border-bottom", "mb-0"], [1, "add-item", "d-flex", "align-items-center"], [1, "page-title", "modal-datail"], [1, "mb-0", "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/printer.svg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "feather", "icon-arrow-left", "me-2"], [1, "card", "border-0"], [1, "card-body", "pb-0"], [1, "invoice-box", "table-height", 2, "max-width", "1600px", "width", "100%", "padding", "0", "font-size", "14px", "line-height", "24px", "color", "#555"], [1, "row", "sales-details-items", "d-flex"], [1, "col-md-4", "details-item"], [1, "mb-1"], [1, "mb-0"], [1, "fs-16", "text-primary", "ms-2"], [1, "ms-2", "text-gray-9"], [1, "badge", "badge-success", "ms-2"], [1, "badge", "badge-soft-success", "shadow-none", "badge-xs", "d-inline-flex", "align-items-center", "ms-2"], [1, "ti", "ti-point-filled"], [1, "order-text"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["href", "javascript:void(0);"], ["src", "assets/img/products/stock-img-03.png", "alt", "product"], ["src", "assets/img/products/stock-img-05.png", "alt", "product"], [1, "border-1", "rounded-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-sales-new", 1, "modal", "fade"], [1, "modal-dialog", "edit-sales-modal"], [1, "page-header", "p-4", "mb-0"], [1, "add-item", "new-sale-items", "d-flex"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], [1, "text-danger"], ["placeholder", "Thomas", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "19 jan 2023", 1, "datetimepicker", "form-control"], ["placeholder", "Dazzle Shoes", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Please type product code and select", 1, "form-control", "p-2"], ["src", "assets/img/icons/scanners.svg", "alt", "img"], ["type", "text", "placeholder", "0", 1, "form-control", "p-2"], [1, "col-lg-12"], [1, "form-control"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "add-cancel", "me-3"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "add-sale"], ["id", "showpayment", "tabindex", "-1", "aria-labelledby", "showpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "page-wrapper-new", "p-0"], [1, "modal-body", "custom-modal-body"], [1, "modal-body-table", "total-orders", "p-0"], [1, "table-responsive", "rounded"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-3", "p-2"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#editpayment", 1, "me-3", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["id", "createpayment", "tabindex", "-1", "aria-labelledby", "createpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "col-lg-6"], [1, "input-groupicon", "calender-input", "date-input3"], ["type", "text", "bsDatepicker", "", "container", ".date-input3", "placeholder", "Choose Date", 1, "datetimepicker", "form-control"], [1, "col-lg-6", "col-sm-12", "col-12"], ["type", "text", 1, "form-control"], [1, "col-lg-4", "col-sm-12", "col-12"], [1, "input-groupicon", "doller-input"], [1, "feather", "icon-dollar-sign", "info-img"], ["type", "text", 1, "form-control", "ps-4"], [3, "editor"], [3, "editor", "toolbar"], [1, "modal-footer-btn"], ["id", "editpayment", "tabindex", "-1", "aria-labelledby", "editpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "input-groupicon", "calender-input", "date-input4"], ["type", "text", "bsDatepicker", "", "container", ".date-input4", "placeholder", "Select Date", 1, "datetimepicker", "form-control"], ["type", "text", "value", "INV/SL0101", 1, "form-control"], ["type", "text", "value", "1500", 1, "form-control"], ["placeholder", "Cash", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-blocks", "summer-description-box", "transfer"], [1, "modal-footer-btn", "mb-3", "me-3"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "delete", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks", "ms-1"], ["alt", "product", 3, "src"], [1, "badge", "shadow-none", 3, "ngClass"], [1, "badge", "shadow-none", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "true", 1, "action-set"], ["aria-hidden", "true", 1, "fa", "fa-ellipsis-v"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#sales-details-new", 1, "dropdown-item"], [1, "feather", "icon-eye", "info-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-sales-new", 1, "dropdown-item"], [1, "feather", "icon-edit", "info-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#showpayment", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#createpayment", 1, "dropdown-item"], [1, "ti", "ti-circle-plus", "info-img"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "feather", "icon-download", "info-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "dropdown-item", "mb-0"], [1, "feather", "icon-trash-2", "info-img"], ["colspan", "10", 1, "text-center"]], template: function PosOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "POS Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your pos orders");
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
      \u0275\u0275listener("click", function PosOrderComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, PosOrderComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, PosOrderComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, " Add Sales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PosOrderComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Customer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Carl Evans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Minerva Rameriz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 27);
      \u0275\u0275text(47, "Robert Lamon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 27);
      \u0275\u0275text(50, "Patricia Lewis");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 24)(52, "a", 25);
      \u0275\u0275text(53, " Staus ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 26)(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Pending");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 24)(62, "a", 25);
      \u0275\u0275text(63, " Payment Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "ul", 26)(65, "li")(66, "a", 27);
      \u0275\u0275text(67, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 27);
      \u0275\u0275text(70, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 27);
      \u0275\u0275text(73, "Overdue");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "div", 28)(75, "a", 25);
      \u0275\u0275text(76, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "ul", 26)(78, "li")(79, "a", 27);
      \u0275\u0275text(80, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "li")(82, "a", 27);
      \u0275\u0275text(83, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "li")(85, "a", 27);
      \u0275\u0275text(86, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li")(88, "a", 27);
      \u0275\u0275text(89, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li")(91, "a", 27);
      \u0275\u0275text(92, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(93, "div", 29)(94, "div", 30)(95, "table", 31);
      \u0275\u0275listener("matSortChange", function PosOrderComponent_Template_table_matSortChange_95_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(96, "thead", 32)(97, "tr")(98, "th", 33)(99, "label", 34);
      \u0275\u0275listener("click", function PosOrderComponent_Template_label_click_99_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(100, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_input_ngModelChange_100_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(101, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "th", 37);
      \u0275\u0275text(103, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 38);
      \u0275\u0275text(105, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 39);
      \u0275\u0275text(107, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 40);
      \u0275\u0275text(109, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 41);
      \u0275\u0275text(111, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 42);
      \u0275\u0275text(113, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 43);
      \u0275\u0275text(115, "Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 44);
      \u0275\u0275text(117, "Payment Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 45);
      \u0275\u0275text(119, "Biller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 46);
      \u0275\u0275text(121, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "tbody", 47);
      \u0275\u0275repeaterCreate(123, PosOrderComponent_For_124_Template, 58, 21, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(125, PosOrderComponent_Conditional_125_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(126, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 48)(128, "div", 49)(129, "div", 50)(130, "div", 51)(131, "div", 52)(132, "div", 53)(133, "div", 2)(134, "h4");
      \u0275\u0275text(135, " Add Sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "button", 54)(137, "span", 55);
      \u0275\u0275text(138, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 56)(140, "div", 29)(141, "form")(142, "div", 57)(143, "table", 58)(144, "thead")(145, "tr")(146, "th");
      \u0275\u0275text(147, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "th");
      \u0275\u0275text(149, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "th");
      \u0275\u0275text(151, "Purchase Price($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th");
      \u0275\u0275text(153, "Discount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "th");
      \u0275\u0275text(155, "Tax(%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "th");
      \u0275\u0275text(157, "Tax Amount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "th");
      \u0275\u0275text(159, "Unit Cost($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "th");
      \u0275\u0275text(161, "Total Cost(%)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "tbody")(163, "tr");
      \u0275\u0275element(164, "td")(165, "td")(166, "td")(167, "td")(168, "td")(169, "td")(170, "td")(171, "td");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 59)(173, "div", 60)(174, "div", 61)(175, "label");
      \u0275\u0275text(176, "Customer Name");
      \u0275\u0275elementStart(177, "span", 62);
      \u0275\u0275text(178, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 59)(180, "div", 63)(181, "mat-select", 64);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_181_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(182, PosOrderComponent_For_183_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 66)(185, "div", 67)(186, "a", 68);
      \u0275\u0275element(187, "i", 69);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(188, "div", 60)(189, "div", 61)(190, "label");
      \u0275\u0275text(191, "Date");
      \u0275\u0275elementStart(192, "span", 62);
      \u0275\u0275text(193, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "div", 70);
      \u0275\u0275element(195, "i", 71)(196, "input", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 60)(198, "div", 61)(199, "label");
      \u0275\u0275text(200, "Supplier");
      \u0275\u0275elementStart(201, "span", 62);
      \u0275\u0275text(202, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "mat-select", 64);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_203_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(204, PosOrderComponent_For_205_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(206, "div", 73)(207, "div", 61)(208, "label");
      \u0275\u0275text(209, "Product Name");
      \u0275\u0275elementStart(210, "span", 62);
      \u0275\u0275text(211, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 74);
      \u0275\u0275element(213, "input", 75);
      \u0275\u0275elementStart(214, "div", 76);
      \u0275\u0275element(215, "img", 77);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(216, "div", 59)(217, "div", 78)(218, "div", 79)(219, "ul", 80)(220, "li", 81)(221, "h4", 82);
      \u0275\u0275text(222, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "h5");
      \u0275\u0275text(224, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "li", 81)(226, "h4", 82);
      \u0275\u0275text(227, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "h5");
      \u0275\u0275text(229, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "li", 81)(231, "h4", 82);
      \u0275\u0275text(232, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "h5");
      \u0275\u0275text(234, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "li", 81)(236, "h4", 82);
      \u0275\u0275text(237, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "h5");
      \u0275\u0275text(239, "$ 0.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(240, "div", 59)(241, "div", 83)(242, "div", 61)(243, "label");
      \u0275\u0275text(244, "Order Tax");
      \u0275\u0275elementStart(245, "span", 62);
      \u0275\u0275text(246, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "div", 74);
      \u0275\u0275element(248, "input", 84);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(249, "div", 83)(250, "div", 61)(251, "label");
      \u0275\u0275text(252, "Discount");
      \u0275\u0275elementStart(253, "span", 62);
      \u0275\u0275text(254, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 74);
      \u0275\u0275element(256, "input", 84);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(257, "div", 83)(258, "div", 61)(259, "label");
      \u0275\u0275text(260, "Shipping");
      \u0275\u0275elementStart(261, "span", 62);
      \u0275\u0275text(262, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "div", 74);
      \u0275\u0275element(264, "input", 84);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(265, "div", 83)(266, "div", 85)(267, "label");
      \u0275\u0275text(268, "Status");
      \u0275\u0275elementStart(269, "span", 62);
      \u0275\u0275text(270, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "mat-select", 64);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_271_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(272, PosOrderComponent_For_273_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(274, "div", 86)(275, "button", 87);
      \u0275\u0275text(276, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "button", 88);
      \u0275\u0275text(278, "Submit");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(279, "div", 89)(280, "div", 90)(281, "div", 50)(282, "div", 91)(283, "div", 92)(284, "div", 93)(285, "h4", 94);
      \u0275\u0275text(286, "Sales Detail");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(287, "ul", 3)(288, "li")(289, "a", 95);
      \u0275\u0275element(290, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "li")(292, "a", 95);
      \u0275\u0275element(293, "img", 96);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(294, "div", 12)(295, "a", 97);
      \u0275\u0275element(296, "i", 98);
      \u0275\u0275text(297, " Back to Sales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(298, "form")(299, "div", 99)(300, "div", 100)(301, "div", 101)(302, "div", 102)(303, "div", 103)(304, "h6");
      \u0275\u0275text(305, "Customer Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "h4", 104);
      \u0275\u0275text(307, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "p", 105);
      \u0275\u0275text(309, "3103 Trainer Avenue Peoria, IL 61602");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "p", 105);
      \u0275\u0275text(311, "Email");
      \u0275\u0275elementStart(312, "span");
      \u0275\u0275text(313, "carlevans241@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "p", 105);
      \u0275\u0275text(315, "Phone");
      \u0275\u0275elementStart(316, "span");
      \u0275\u0275text(317, "+1 987 471 6589");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(318, "div", 103)(319, "h6");
      \u0275\u0275text(320, "Company Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "h4", 104);
      \u0275\u0275text(322, "DGT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "p", 105);
      \u0275\u0275text(324, "2077 Chicago Avenue Orosi, CA 93647");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "p", 105);
      \u0275\u0275text(326, "Email");
      \u0275\u0275elementStart(327, "span");
      \u0275\u0275text(328, "admin@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "p", 105);
      \u0275\u0275text(330, "Phone");
      \u0275\u0275elementStart(331, "span");
      \u0275\u0275text(332, "+1 893 174 0385");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(333, "div", 103)(334, "h6");
      \u0275\u0275text(335, "Invoice Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "p", 105);
      \u0275\u0275text(337, "Reference: ");
      \u0275\u0275elementStart(338, "span", 106);
      \u0275\u0275text(339, "#SL0101");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "p", 105);
      \u0275\u0275text(341, "Reference: ");
      \u0275\u0275elementStart(342, "span", 107);
      \u0275\u0275text(343, "Dec 24, 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "p", 105);
      \u0275\u0275text(345, "Status: ");
      \u0275\u0275elementStart(346, "span", 108);
      \u0275\u0275text(347, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "p", 105);
      \u0275\u0275text(349, "Payment Status: ");
      \u0275\u0275elementStart(350, "span", 109);
      \u0275\u0275element(351, "i", 110);
      \u0275\u0275text(352, "Paid");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(353, "h5", 111);
      \u0275\u0275text(354, "Order Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "div", 57)(356, "table", 58)(357, "thead")(358, "tr")(359, "th");
      \u0275\u0275text(360, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "th");
      \u0275\u0275text(362, "Purchase Price($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "th");
      \u0275\u0275text(364, "Discount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "th");
      \u0275\u0275text(366, "Tax(%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "th");
      \u0275\u0275text(368, "Tax Amount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "th");
      \u0275\u0275text(370, "Unit Cost($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "th");
      \u0275\u0275text(372, "Total Cost(%)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(373, "tbody")(374, "tr")(375, "td")(376, "div", 112)(377, "a", 113);
      \u0275\u0275element(378, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "a", 115);
      \u0275\u0275text(380, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(381, "td");
      \u0275\u0275text(382, "2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "td");
      \u0275\u0275text(384, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "td");
      \u0275\u0275text(386, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "td");
      \u0275\u0275text(388, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "td");
      \u0275\u0275text(390, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "td");
      \u0275\u0275text(392, "1500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "tr")(394, "td")(395, "div", 112)(396, "a", 113);
      \u0275\u0275element(397, "img", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "a", 115);
      \u0275\u0275text(399, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(400, "td");
      \u0275\u0275text(401, "3000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "td");
      \u0275\u0275text(403, "400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "td");
      \u0275\u0275text(405, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "td");
      \u0275\u0275text(407, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "td");
      \u0275\u0275text(409, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "td");
      \u0275\u0275text(411, "1700");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(412, "tr")(413, "td")(414, "div", 112)(415, "a", 113);
      \u0275\u0275element(416, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "a", 115);
      \u0275\u0275text(418, "Lobar Handy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(419, "td");
      \u0275\u0275text(420, "2500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "td");
      \u0275\u0275text(422, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "td");
      \u0275\u0275text(424, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "td");
      \u0275\u0275text(426, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "td");
      \u0275\u0275text(428, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "td");
      \u0275\u0275text(430, "2000");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(431, "div", 59)(432, "div", 59)(433, "div", 78)(434, "div", 79)(435, "ul", 118)(436, "li", 81)(437, "h4", 82);
      \u0275\u0275text(438, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "h5");
      \u0275\u0275text(440, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "li", 81)(442, "h4", 82);
      \u0275\u0275text(443, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "h5");
      \u0275\u0275text(445, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(446, "li", 81)(447, "h4", 82);
      \u0275\u0275text(448, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "h5");
      \u0275\u0275text(450, "$ 5200.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "li", 81)(452, "h4", 82);
      \u0275\u0275text(453, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "h5");
      \u0275\u0275text(455, "$ 5200.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(456, "li", 81)(457, "h4", 82);
      \u0275\u0275text(458, "Due");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "h5");
      \u0275\u0275text(460, "$ 0.00");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(461, "div", 119)(462, "button", 120);
      \u0275\u0275text(463, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "button", 121);
      \u0275\u0275text(465, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(466, "div", 122)(467, "div", 123)(468, "div", 50)(469, "div", 51)(470, "div", 52)(471, "div", 124)(472, "div", 125)(473, "div", 2)(474, "h4");
      \u0275\u0275text(475, "Edit Sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(476, "button", 54)(477, "span", 55);
      \u0275\u0275text(478, "\xD7");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(479, "div", 56)(480, "div", 29)(481, "form")(482, "div", 57)(483, "table", 58)(484, "thead")(485, "tr")(486, "th");
      \u0275\u0275text(487, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "th");
      \u0275\u0275text(489, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "th");
      \u0275\u0275text(491, "Purchase Price($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "th");
      \u0275\u0275text(493, "Discount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "th");
      \u0275\u0275text(495, "Tax(%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "th");
      \u0275\u0275text(497, "Tax Amount($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "th");
      \u0275\u0275text(499, "Unit Cost($)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "th");
      \u0275\u0275text(501, "Total Cost(%)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(502, "tbody")(503, "tr")(504, "td")(505, "div", 126)(506, "a", 127);
      \u0275\u0275element(507, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "a", 115);
      \u0275\u0275text(509, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(510, "td");
      \u0275\u0275element(511, "app-common-counter", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "td");
      \u0275\u0275text(513, "2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "td");
      \u0275\u0275text(515, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "td");
      \u0275\u0275text(517, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "td");
      \u0275\u0275text(519, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "td");
      \u0275\u0275text(521, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "td");
      \u0275\u0275text(523, "1500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(524, "tr")(525, "td")(526, "div", 126)(527, "a", 127);
      \u0275\u0275element(528, "img", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "a", 115);
      \u0275\u0275text(530, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(531, "td");
      \u0275\u0275element(532, "app-common-counter", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "td");
      \u0275\u0275text(534, "3000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "td");
      \u0275\u0275text(536, "400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "td");
      \u0275\u0275text(538, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "td");
      \u0275\u0275text(540, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "td");
      \u0275\u0275text(542, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "td");
      \u0275\u0275text(544, "1700");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(545, "tr")(546, "td")(547, "div", 126)(548, "a", 127);
      \u0275\u0275element(549, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "a", 115);
      \u0275\u0275text(551, "Lobar Handy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(552, "td");
      \u0275\u0275element(553, "app-common-counter", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "td");
      \u0275\u0275text(555, "2500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "td");
      \u0275\u0275text(557, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "td");
      \u0275\u0275text(559, " 0.00 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(560, "td");
      \u0275\u0275text(561, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "td");
      \u0275\u0275text(563, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "td");
      \u0275\u0275text(565, "2000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(566, "div", 59)(567, "div", 60)(568, "div", 61)(569, "label");
      \u0275\u0275text(570, "Customer");
      \u0275\u0275elementStart(571, "span", 128);
      \u0275\u0275text(572, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "div", 59)(574, "div", 63)(575, "mat-select", 129);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_575_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(576, PosOrderComponent_For_577_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(578, "div", 66)(579, "div", 67)(580, "a", 68);
      \u0275\u0275element(581, "i", 69);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(582, "div", 60)(583, "div", 61)(584, "label");
      \u0275\u0275text(585, "Purchase Date");
      \u0275\u0275elementStart(586, "span", 128);
      \u0275\u0275text(587, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(588, "div", 130);
      \u0275\u0275element(589, "i", 71)(590, "input", 131);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(591, "div", 60)(592, "div", 61)(593, "label");
      \u0275\u0275text(594, "Supplier");
      \u0275\u0275elementStart(595, "span", 128);
      \u0275\u0275text(596, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(597, "mat-select", 132);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_597_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(598, PosOrderComponent_For_599_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(600, "div", 73)(601, "div", 61)(602, "label");
      \u0275\u0275text(603, "Product Name");
      \u0275\u0275elementStart(604, "span", 128);
      \u0275\u0275text(605, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(606, "div", 74);
      \u0275\u0275element(607, "input", 133);
      \u0275\u0275elementStart(608, "div", 76);
      \u0275\u0275element(609, "img", 134);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(610, "div", 59)(611, "div", 78)(612, "div", 79)(613, "ul", 118)(614, "li", 81)(615, "h4", 82);
      \u0275\u0275text(616, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "h5");
      \u0275\u0275text(618, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(619, "li", 81)(620, "h4", 82);
      \u0275\u0275text(621, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "h5");
      \u0275\u0275text(623, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(624, "li", 81)(625, "h4", 82);
      \u0275\u0275text(626, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "h5");
      \u0275\u0275text(628, "$ 0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(629, "li", 81)(630, "h4", 82);
      \u0275\u0275text(631, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(632, "h5");
      \u0275\u0275text(633, "$5200.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(634, "div", 59)(635, "div", 83)(636, "div", 61)(637, "label");
      \u0275\u0275text(638, "Order Tax");
      \u0275\u0275elementStart(639, "span", 128);
      \u0275\u0275text(640, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(641, "div", 74);
      \u0275\u0275element(642, "input", 135);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(643, "div", 83)(644, "div", 61)(645, "label");
      \u0275\u0275text(646, "Discount");
      \u0275\u0275elementStart(647, "span", 128);
      \u0275\u0275text(648, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(649, "div", 74);
      \u0275\u0275element(650, "input", 135);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(651, "div", 83)(652, "div", 61)(653, "label");
      \u0275\u0275text(654, "Shipping");
      \u0275\u0275elementStart(655, "span", 128);
      \u0275\u0275text(656, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(657, "div", 74);
      \u0275\u0275element(658, "input", 135);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(659, "div", 83)(660, "div", 85)(661, "label");
      \u0275\u0275text(662, "Status");
      \u0275\u0275elementStart(663, "span", 128);
      \u0275\u0275text(664, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(665, "mat-select", 64);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_665_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(666, PosOrderComponent_For_667_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(668, "div", 136)(669, "div", 61)(670, "label");
      \u0275\u0275text(671, "Notes");
      \u0275\u0275elementStart(672, "span", 128);
      \u0275\u0275text(673, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(674, "textarea", 137);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(675, "div", 86)(676, "button", 138);
      \u0275\u0275text(677, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(678, "button", 139);
      \u0275\u0275text(679, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(680, "div", 140)(681, "div", 141)(682, "div", 50)(683, "div", 142)(684, "div", 52)(685, "div", 53)(686, "div", 2)(687, "h4");
      \u0275\u0275text(688, "Show Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(689, "button", 54)(690, "span", 55);
      \u0275\u0275text(691, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(692, "div", 143)(693, "div", 59)(694, "div", 136)(695, "div", 144)(696, "div", 145)(697, "table", 58)(698, "thead", 32)(699, "tr")(700, "th");
      \u0275\u0275text(701, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(702, "th");
      \u0275\u0275text(703, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "th");
      \u0275\u0275text(705, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(706, "th");
      \u0275\u0275text(707, "Paid By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(708, "th", 33);
      \u0275\u0275text(709, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(710, "tbody")(711, "tr")(712, "td");
      \u0275\u0275text(713, "19 Jan 2023");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(714, "td");
      \u0275\u0275text(715, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "td");
      \u0275\u0275text(717, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(718, "td");
      \u0275\u0275text(719, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(720, "td", 146)(721, "div", 147)(722, "a", 148);
      \u0275\u0275element(723, "i", 149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(724, "a", 150);
      \u0275\u0275element(725, "i", 151);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "a", 152);
      \u0275\u0275element(727, "i", 153);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(728, "div", 154)(729, "div", 155)(730, "div", 50)(731, "div", 53)(732, "div", 2)(733, "h4");
      \u0275\u0275text(734, "Create Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(735, "button", 54)(736, "span", 55);
      \u0275\u0275text(737, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(738, "div", 143)(739, "form")(740, "div", 59)(741, "div", 156)(742, "div", 61)(743, "label");
      \u0275\u0275text(744, " Date");
      \u0275\u0275elementStart(745, "span", 128);
      \u0275\u0275text(746, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(747, "div", 157);
      \u0275\u0275element(748, "i", 71)(749, "input", 158);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(750, "div", 159)(751, "div", 61)(752, "label");
      \u0275\u0275text(753, "Reference");
      \u0275\u0275elementStart(754, "span", 128);
      \u0275\u0275text(755, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(756, "input", 160);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(757, "div", 59)(758, "div", 161)(759, "div", 61)(760, "label");
      \u0275\u0275text(761, "Received Amount");
      \u0275\u0275elementStart(762, "span", 128);
      \u0275\u0275text(763, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(764, "div", 162);
      \u0275\u0275element(765, "i", 163)(766, "input", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(767, "div", 161)(768, "div", 61)(769, "label");
      \u0275\u0275text(770, "Paying Amount");
      \u0275\u0275elementStart(771, "span", 128);
      \u0275\u0275text(772, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(773, "div", 162);
      \u0275\u0275element(774, "i", 163)(775, "input", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(776, "div", 161)(777, "div", 61)(778, "label");
      \u0275\u0275text(779, "Payment type");
      \u0275\u0275elementStart(780, "span", 128);
      \u0275\u0275text(781, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(782, "mat-select", 64);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_782_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(783, PosOrderComponent_For_784_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(785, "div", 136)(786, "div", 61)(787, "label");
      \u0275\u0275text(788, "Description");
      \u0275\u0275elementStart(789, "span", 128);
      \u0275\u0275text(790, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(791, "ngx-editor", 165);
      \u0275\u0275element(792, "ngx-editor-menu", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(793, "p");
      \u0275\u0275text(794, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(795, "div", 136)(796, "div", 167)(797, "button", 120);
      \u0275\u0275text(798, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(799, "button", 121);
      \u0275\u0275text(800, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(801, "div", 168)(802, "div", 155)(803, "div", 50)(804, "div", 53)(805, "div", 2)(806, "h4");
      \u0275\u0275text(807, "Edit Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(808, "button", 54)(809, "span", 55);
      \u0275\u0275text(810, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(811, "div", 143)(812, "form")(813, "div", 59)(814, "div", 156)(815, "div", 61)(816, "label");
      \u0275\u0275text(817, "19 Jan 2023");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(818, "div", 169);
      \u0275\u0275element(819, "i", 71)(820, "input", 170);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(821, "div", 159)(822, "div", 61)(823, "label");
      \u0275\u0275text(824, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275element(825, "input", 171);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(826, "div", 59)(827, "div", 161)(828, "div", 61)(829, "label");
      \u0275\u0275text(830, "Received Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(831, "div", 70);
      \u0275\u0275element(832, "i", 163)(833, "input", 172);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(834, "div", 161)(835, "div", 61)(836, "label");
      \u0275\u0275text(837, "Paying Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "div", 70);
      \u0275\u0275element(839, "i", 163)(840, "input", 172);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(841, "div", 161)(842, "div", 61)(843, "label");
      \u0275\u0275text(844, "Payment type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(845, "mat-select", 173);
      \u0275\u0275twoWayListener("ngModelChange", function PosOrderComponent_Template_mat_select_ngModelChange_845_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(846, PosOrderComponent_For_847_Template, 2, 2, "mat-option", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(848, "div", 136)(849, "div", 174)(850, "label");
      \u0275\u0275text(851, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(852, "textarea", 137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(853, "p");
      \u0275\u0275text(854, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(855, "div", 136)(856, "div", 175)(857, "button", 176);
      \u0275\u0275text(858, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(859, "button", 177);
      \u0275\u0275text(860, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(861, "div", 178)(862, "div", 179)(863, "div", 50)(864, "div", 180)(865, "div", 181)(866, "form")(867, "div", 182);
      \u0275\u0275element(868, "i", 183);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(869, "h3", 184);
      \u0275\u0275text(870, "Delete Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(871, "p", 185);
      \u0275\u0275text(872, "Are you sure you want to delete sale?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "div", 186)(874, "button", 187);
      \u0275\u0275text(875, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "button", 188);
      \u0275\u0275text(877, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c0));
      \u0275\u0275advance(67);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 125 : -1);
      \u0275\u0275advance(56);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue5);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList5);
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue6);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(32, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList6);
      \u0275\u0275advance(67);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue7);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(33, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList7);
      \u0275\u0275advance(239);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(21);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(21);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue8);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(34, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList8);
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue9);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(35, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList9);
      \u0275\u0275advance(67);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue10);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(36, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList10);
      \u0275\u0275advance(116);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue11);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(37, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList11);
      \u0275\u0275advance(8);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(53);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue12);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList12);
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonCounterComponent, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PosOrderComponent, [{
    type: Component,
    args: [{ selector: "app-pos-order", imports: [NgxEditorModule, MatSelectModule, CommonModule, FormsModule, CommonCounterComponent, CustomPaginationComponent, MatSortModule, BsDatepickerModule], template: `<div class="page-header">
    <div class="add-item d-flex">
      <div class="page-title">
        <h4>POS Orders</h4>
        <h6>Manage Your pos orders</h6>
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
    <div class="page-btn">
      <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-sales-new"><i
      class="ti ti-circle-plus me-2"></i> Add Sales</a>
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
            Staus
          </a>
          <ul class="dropdown-menu  dropdown-menu-end p-3">
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Completed</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
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
      <div class="custom-datatable-filter table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table datatable">
          <thead class="thead-light">
            <tr>
              <th class="no-sort">
                  <label class="checkboxs"  (click)="selectAll(initChecked)">
                    <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                    <span class="checkmarks"></span>
                  </label>
                </th>
              <th mat-sort-header="customerName">Customer Name</th>
              <th mat-sort-header="reference">Reference</th>
              <th mat-sort-header="date">Date</th>
              <th mat-sort-header="status">Status</th>
              <th mat-sort-header="grandTotal">Grand Total</th>
              <th mat-sort-header="paid">Paid</th>
              <th mat-sort-header="due">Due</th>
              <th mat-sort-header="paymentStatus">Payment Status</th>
              <th mat-sort-header="biller">Biller</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody class="sales-list">
            @for (data of tableData; track data) {
              <tr>
                <td>
                    <label class="checkboxs">
                      <input type="checkbox" [(ngModel)]="data.isSelected">
                      <span class="checkmarks ms-1"></span>
                    </label>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a href="javascript:void(0);" class="avatar avatar-md me-2">
                        <img src="assets/img/users/{{data.img}}" alt="product">
                      </a>
                      <a href="javascript:void(0);">{{data.CustomerName}}</a>
                    </div>
                  </td>
                  <td>{{data.Reference}}</td>
                <td>{{data.Date}}</td>
                <td><span class="badge shadow-none "
                [ngClass]="{'badge-success': data.Status === 'Completed', 'badge-cyan': data.Status === 'Pending'}">{{data.Status}}</span>
              </td>
              <td>{{data.GrandTotal}}</td>
              <td>{{data.Paid}}</td>
              <td>{{data.Due}}</td>
              <td><span class="badge shadow-none badge-xs"
              [ngClass]="{'badge-soft-success': data.PaymentStatus === 'Paid', 'badge-soft-danger': data.PaymentStatus === 'Unpaid','badge-soft-warning':data.PaymentStatus === 'Overdue'}"><i class="ti ti-point-filled me-1"></i>{{data.PaymentStatus}}</span>
            </td>
            <td>{{data.Biller}}</td>
            <td class="text-center">
              <a class="action-set" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                    data-bs-target="#sales-details-new"><i class="feather icon-eye info-img"></i>Sale Detail</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-sales-new"><i class="feather icon-edit info-img"></i>Edit
                    Sale</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#showpayment"><i class="feather icon-dollar-sign info-img"></i>Show Payments</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#createpayment"><i class="ti ti-circle-plus info-img"></i>Create Payment</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><i
                        class="feather icon-download info-img"></i>Download pdf</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item  mb-0" data-bs-toggle="modal" data-bs-target="#delete"><i
                        class="feather icon-trash-2 info-img"></i>Delete Sale</a>
                      </li>
                    </ul>
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
  
    <!--add popup -->
    <div class="modal fade" id="add-sales-new">
      <div class="modal-dialog add-centered">
        <div class="modal-content">
          <div class="page-wrapper p-0 m-0">
            <div class="content p-0">
              <div class="modal-header border-0 custom-modal-header">
                <div class="page-title">
                  <h4> Add Sales</h4>
                </div>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="card">
                <div class="card-body">
                  <form>
                    <div class="table-responsive no-pagination mb-3">
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="row">
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Customer Name<span class="text-danger ms-1">*</span></label>
                          <div class="row">
                            <div class="col-lg-10 col-sm-10 col-10">
                              <mat-select [(ngModel)]="selectedValue5" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                                placeholder="Choose">
                                @for (data of selectedList5; track data) {
                                  <mat-option [value]="data.value">
                                    {{data.value}}
                                  </mat-option>
                                }
                              </mat-select>
                            </div>
                            <div class="col-lg-2 col-sm-2 col-2 ps-0">
                              <div class="add-icon">
                                <a href="javascript:void(0);" class="choose-add"><i
                                class="ti ti-circle-plus plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Date<span class="text-danger ms-1">*</span></label>
                          <div class="input-groupicon calender-input">
                            <i class="feather icon-calendar info-img"></i>
                            <input type="text" class="datetimepicker form-control" bsDatepicker container=".date-input1" placeholder="Choose">
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Supplier<span class="text-danger ms-1">*</span></label>
                          <mat-select [(ngModel)]="selectedValue6" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                            placeholder="Choose">
                            @for (data of selectedList6; track data) {
                              <mat-option [value]="data.value">
                                {{data.value}}
                              </mat-option>
                            }
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-12 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Product Name<span class="text-danger ms-1">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" placeholder="Please type product code and select" class="form-control">
                            <div class="addonset">
                              <img src="assets/img/icons/qrcode-scan.svg" alt="img">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
  
                    <div class="row">
                      <div class="col-lg-6 ms-auto">
                        <div class="total-order w-100 max-widthauto m-auto mb-4">
                          <ul class="border-1 rounded-2">
                            <li class="border-bottom">
                              <h4 class="border-end">Order Tax</h4>
                              <h5>$ 0.00</h5>
                            </li>
                           <li class="border-bottom">
                              <h4 class="border-end">Discount</h4>
                              <h5>$ 0.00</h5>
                            </li>
                           <li class="border-bottom">
                              <h4 class="border-end">Shipping</h4>
                              <h5>$ 0.00</h5>
                            </li>
                           <li class="border-bottom">
                              <h4 class="border-end">Grand Total</h4>
                              <h5>$ 0.00</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Order Tax<span class="text-danger ms-1">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" value="0" class="p-2 form-control">
                          </div>
  
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Discount<span class="text-danger ms-1">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" value="0" class="p-2 form-control">
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Shipping<span class="text-danger ms-1">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" value="0" class="p-2 form-control">
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks mb-5">
                          <label>Status<span class="text-danger ms-1">*</span></label>
                          <mat-select [(ngModel)]="selectedValue7" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                            placeholder="Choose">
                            @for (data of selectedList7; track data) {
                              <mat-option [value]="data.value">
                                {{data.value}}
                              </mat-option>
                            }
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-12 text-end">
                        <button type="button" class="btn btn-cancel add-cancel me-3" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-submit add-sale" data-bs-dismiss="modal">Submit</button>
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
    <!-- /add popup -->
  
          <!-- details popup -->
          <div class="modal fade" id="sales-details-new">
              <div class="modal-dialog sales-details-modal">
                  <div class="modal-content">
                      <div class="page-header p-4 border-bottom mb-0">
                          <div class="add-item d-flex align-items-center">
                              <div class="page-title modal-datail">
                                  <h4 class="mb-0 me-2">Sales Detail</h4>
                              </div>
                          </div>
                          <ul class="table-top-head">
                              <li>
                                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
                              </li>
                              <li>
                                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/printer.svg" alt="img"></a>
                              </li>
                          </ul>
                          <div class="page-btn">
                              <a href="javascript:void(0);" class="btn btn-secondary" data-bs-dismiss="modal"><i class="feather icon-arrow-left me-2"></i> Back to Sales</a>
                          </div>
                      </div>
                              
                      <form>
                          <div class="card border-0">
                              <div class="card-body pb-0">
                                  <div class="invoice-box table-height" style="max-width: 1600px;width:100%;padding: 0;font-size: 14px;line-height: 24px;color: #555;">
                                      <div class="row sales-details-items d-flex">
                                          <div class="col-md-4 details-item">
                                              <h6>Customer Info</h6>
                                              <h4 class="mb-1">Carl Evans</h4>
                                              <p class="mb-0">3103 Trainer Avenue Peoria, IL 61602</p>
                                              <p class="mb-0">Email<span>carlevans241&#64;example.com</span></p>
                                              <p class="mb-0">Phone<span>+1 987 471 6589</span></p>
                                          </div>
                                          <div class="col-md-4 details-item">
                                              <h6>Company Info</h6>
                                              <h4 class="mb-1">DGT</h4>
                                              <p class="mb-0">2077 Chicago Avenue Orosi, CA 93647</p>
                                              <p class="mb-0">Email<span>admin&#64;example.com</span></p>
                                              <p class="mb-0">Phone<span>+1 893 174 0385</span></p>
                                          </div>
                                          <div class="col-md-4 details-item">
                                              <h6>Invoice Info</h6>
                                              <p class="mb-0">Reference: <span class="fs-16 text-primary ms-2">#SL0101</span></p>
                                              <p class="mb-0">Reference: <span class="ms-2 text-gray-9">Dec 24, 2024</span></p>
                                              <p class="mb-0">Status: <span class="badge badge-success ms-2">Completed</span></p>
                                              <p class="mb-0">Payment Status: <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center ms-2"> <i class="ti ti-point-filled"></i>Paid</span></p>
                                          </div>
                                      </div>
                                      <h5 class="order-text">Order Summary</h5>
                                      <div class="table-responsive no-pagination mb-3">
                                          <table class="table  datanew">
                                              <thead>
                                                  <tr>
                                                      <th>Product</th>
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
                                                          <div class="d-flex align-items-center">
                                                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                  <img src="assets/img/products/stock-img-02.png" alt="product">
                                                              </a>
                                                              <a href="javascript:void(0);">Nike Jordan</a>
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
                                                          <div class="d-flex align-items-center">
                                                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                  <img src="assets/img/products/stock-img-03.png" alt="product">
                                                              </a>
                                                              <a href="javascript:void(0);">Apple Series 5 Watch</a>
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
                                                          <div class="d-flex align-items-center">
                                                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                                                  <img src="assets/img/products/stock-img-05.png" alt="product">
                                                              </a>
                                                              <a href="javascript:void(0);">Lobar Handy</a>
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
                                      
                                  <div class="row">
                                      
                                      <div class="row">
                                          <div class="col-lg-6 ms-auto">
                                              <div class="total-order w-100 max-widthauto m-auto mb-4">
                                                  <ul  class="border-1 rounded-1">
                                                      <li class="border-bottom">
                                                          <h4 class="border-end">Order Tax</h4>
                                                          <h5>$ 0.00</h5>
                                                      </li>
                                                      <li class="border-bottom">
                                                          <h4 class="border-end">Discount</h4>
                                                          <h5>$ 0.00</h5>
                                                      </li>
                                                      <li class="border-bottom">
                                                          <h4 class="border-end">Grand Total</h4>
                                                          <h5>$ 5200.00</h5>
                                                      </li>
                                                      <li class="border-bottom">
                                                          <h4 class="border-end">Paid</h4>
                                                          <h5>$ 5200.00</h5>
                                                      </li>
                                                      <li class="border-bottom">
                                                          <h4 class="border-end">Due</h4>
                                                          <h5>$ 0.00</h5>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <!-- /details popup -->
    <!-- edit popup -->
    <div class="modal fade" id="edit-sales-new">
      <div class="modal-dialog edit-sales-modal">
        <div class="modal-content">
          <div class="page-wrapper p-0 m-0">
            <div class="content p-0">
              <div class="page-header p-4 mb-0">
                <div class="add-item new-sale-items d-flex">
                  <div class="page-title">
                    <h4>Edit Sales</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <form>
                    <div class="table-responsive no-pagination mb-3">
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
                              <app-common-counter [value]="2"></app-common-counter>
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
                              <app-common-counter [value]="2"></app-common-counter>
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
                              <app-common-counter [value]="2"></app-common-counter>
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
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Customer<span class="text-danger">*</span></label>
                          <div class="row">
                            <div class="col-lg-10 col-sm-10 col-10">
                              <mat-select [(ngModel)]="selectedValue8" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                                placeholder="Thomas">
                                @for (data of selectedList8; track data) {
                                  <mat-option [value]="data.value">
                                    {{data.value}}
                                  </mat-option>
                                }
                              </mat-select>
                            </div>
                            <div class="col-lg-2 col-sm-2 col-2 ps-0">
                              <div class="add-icon">
                                <a href="javascript:void(0);" class="choose-add"><i
                                class="ti ti-circle-plus plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Purchase Date<span class="text-danger">*</span></label>
                          <div class="input-groupicon calender-input date-input2">
                            <i class="feather icon-calendar info-img"></i>
                            <input type="text" class="datetimepicker form-control" bsDatepicker container=".date-input2" placeholder="19 jan 2023">
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Supplier<span class="text-danger">*</span></label>
                          <mat-select [(ngModel)]="selectedValue9" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                            placeholder="Dazzle Shoes">
                            @for (data of selectedList9; track data) {
                              <mat-option [value]="data.value">
                                {{data.value}}
                              </mat-option>
                            }
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-12 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Product Name<span class="text-danger">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" placeholder="Please type product code and select" class="form-control p-2">
                            <div class="addonset">
                              <img src="assets/img/icons/scanners.svg" alt="img">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
  
                    <div class="row">
                      <div class="col-lg-6 ms-auto">
                        <div class="total-order w-100 max-widthauto m-auto mb-4">
                          <ul class="border-1 rounded-1">
                            <li class="border-bottom">
                              <h4 class="border-end">Order Tax</h4>
                              <h5>$ 0.00</h5>
                            </li>
                            <li class="border-bottom">
                               <h4 class="border-end">Discount</h4>
                              <h5>$ 0.00</h5>
                            </li>
                            <li class="border-bottom">
                               <h4 class="border-end">Shipping</h4>
                              <h5>$ 0.00</h5>
                            </li>
                            <li class="border-bottom">
                               <h4 class="border-end">Grand Total</h4>
                              <h5>$5200.00</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Order Tax<span class="text-danger">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" placeholder="0" class="form-control p-2">
                          </div>
  
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Discount<span class="text-danger">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" placeholder="0" class="form-control p-2">
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks">
                          <label>Shipping<span class="text-danger">*</span></label>
                          <div class="input-groupicon select-code">
                            <input type="text" placeholder="0" class="form-control p-2">
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                        <div class="input-blocks mb-5">
                          <label>Status<span class="text-danger">*</span></label>
                          <mat-select [(ngModel)]="selectedValue10" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                            placeholder="Choose">
                            @for (data of selectedList10; track data) {
                              <mat-option [value]="data.value">
                                {{data.value}}
                              </mat-option>
                            }
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="input-blocks">
                          <label>Notes<span class="text-danger">*</span></label>
                          <textarea class="form-control"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 text-end">
                        <button type="button" class="btn btn-secondary add-cancel me-3" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary add-sale" data-bs-dismiss="modal">Save Changes</button>
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
  
    <!-- show payment Modal -->
    <div class="modal fade" id="showpayment" tabindex="-1" aria-labelledby="showpayment" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered stock-adjust-modal">
        <div class="modal-content">
          <div class="page-wrapper-new p-0">
            <div class="content p-0">
              <div class="modal-header border-0 custom-modal-header">
                <div class="page-title">
                  <h4>Show Payments</h4>
                </div>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body custom-modal-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="modal-body-table total-orders p-0">
                      <div class="table-responsive rounded">
                        <table class="table  datanew">
                          <thead class="thead-light">
                            <tr>
                              <th>Date</th>
                              <th>Reference</th>
                              <th>Amount</th>
                              <th>Paid By</th>
                              <th class="no-sort">Action</th>
  
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>19 Jan 2023</td>
                              <td>INV/SL0101</td>
                              <td>$1500</td>
                              <td>Cash</td>
                              <td class="action-table-data">
                                <div class="edit-delete-action">
                                  <a class="me-3 p-2" href="javascript:void(0);">
                                    <i class="feather icon-printer feather-rotate-ccw"></i>
                                  </a>
                                  <a class="me-3 p-2" href="javascript:void(0);" data-bs-toggle="modal"
                                    data-bs-target="#editpayment">
                                    <i class="feather icon-edit feather-edit"></i>
                                  </a>
                                  <a class=" p-2" href="javascript:void(0);">
                                    <i class="feather icon-trash-2 feather-trash-2"></i>
                                  </a>
                                </div>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- show payment Modal -->
  
    <!-- Create payment Modal -->
    <div class="modal fade" id="createpayment" tabindex="-1" aria-labelledby="createpayment" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Create Payments</h4>
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
                    <label> Date<span class="text-danger">*</span></label>
                    <div class="input-groupicon calender-input date-input3">
                      <i class="feather icon-calendar info-img"></i>
                      <input type="text" class="datetimepicker form-control" bsDatepicker container=".date-input3" placeholder="Choose Date">
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Reference<span class="text-danger">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Received Amount<span class="text-danger">*</span></label>
                    <div class="input-groupicon doller-input">
                      <i class="feather icon-dollar-sign info-img"></i>
                      <input type="text" class="form-control ps-4">
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Paying Amount<span class="text-danger">*</span></label>
                    <div class="input-groupicon doller-input">
                      <i class="feather icon-dollar-sign info-img"></i>
                      <input type="text" class="form-control ps-4">
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Payment type<span class="text-danger">*</span></label>
                    <mat-select [(ngModel)]="selectedValue11" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="Choose">
                      @for (data of selectedList11; track data) {
                        <mat-option [value]="data.value">
                          {{data.value}}
                        </mat-option>
                      }
                    </mat-select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-blocks">
                    <label>Description<span class="text-danger">*</span></label>
                    <ngx-editor [editor]="editor">
                      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                      </ngx-editor-menu>
                    </ngx-editor>
                    <p>Maximum 60 Characters</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="modal-footer-btn">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Create payment Modal -->
  
    <!-- edit payment Modal -->
    <div class="modal fade" id="editpayment" tabindex="-1" aria-labelledby="editpayment" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Edit Payments</h4>
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
                    <label>19 Jan 2023</label>
                    <div class="input-groupicon calender-input date-input4">
                      <i class="feather icon-calendar info-img"></i>
                      <input type="text" class="datetimepicker form-control" bsDatepicker container=".date-input4" placeholder="Select Date">
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Reference</label>
                    <input type="text" value="INV/SL0101" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Received Amount</label>
                    <div class="input-groupicon calender-input">
                      <i class="feather icon-dollar-sign info-img"></i>
                      <input type="text" value="1500" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Paying Amount</label>
                    <div class="input-groupicon calender-input">
                      <i class="feather icon-dollar-sign info-img"></i>
                      <input type="text" value="1500" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-12">
                  <div class="input-blocks">
                    <label>Payment type</label>
                    <mat-select [(ngModel)]="selectedValue12" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="Cash">
                      @for (data of selectedList12; track data) {
                        <mat-option [value]="data.value">
                          {{data.value}}
                        </mat-option>
                      }
                    </mat-select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box transfer">
                    <label>Description</label>
                    <textarea class="form-control"></textarea>
                  </div>
                  <p>Maximum 60 Characters</p>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="modal-footer-btn mb-3 me-3">
                  <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-submit">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- edit payment Modal -->
  
  
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
                    <h3 class="mb-2">Delete Sale</h3>
                    <p class="fs-16 mb-3">Are you sure you want to delete sale?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosOrderComponent, { className: "PosOrderComponent", filePath: "src/app/features/pages/sales/pos-order/pos-order.component.ts", lineNumber: 24 });
})();
export {
  PosOrderComponent
};
//# sourceMappingURL=chunk-D7QTHOGE.js.map
