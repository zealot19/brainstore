import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/app-settings/custom-fields/custom-fields.component.ts
var _c0 = () => ({ standalone: true });
function CustomFieldsComponent_For_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("value", data_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.value, " ");
  }
}
function CustomFieldsComponent_For_197_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("value", data_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.value, " ");
  }
}
function CustomFieldsComponent_For_244_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
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
function CustomFieldsComponent_For_267_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
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
var CustomFieldsComponent = class _CustomFieldsComponent {
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
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.customFields) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCustomfield().subscribe((apiRes) => {
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
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Module" },
    { value: "Expense" },
    { value: "Transaction" }
  ];
  selectedList3 = [
    { value: "Choose Fields" },
    { value: "Expense" },
    { value: "Transaction" }
  ];
  selectedList4 = [
    { value: "Choose Status" },
    { value: "Active" },
    { value: "Inactive" }
  ];
  selectedList5 = [
    { value: "Choose" },
    { value: "Expense" },
    { value: "Transaction" }
  ];
  selectedList6 = [
    { value: "Choose" },
    { value: "Text" },
    { value: "Textarea" }
  ];
  selectedList7 = [
    { value: "Expense" },
    { value: "Transaction" }
  ];
  selectedList8 = [
    { value: "Expense" },
    { value: "Transaction" }
  ];
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
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
  static \u0275fac = function CustomFieldsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomFieldsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomFieldsComponent, selectors: [["app-custom-fields"]], decls: 307, vars: 12, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-custom-field", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "table-responsive", "no-pagination"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all"], [1, "checkmarks"], ["type", "checkbox"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-custom-field", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["id", "add-custom-field", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "mb-3"], [1, "form-label"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["type", "text", 1, "form-control"], [1, "localization-select", "pos-payment-method", "mb-3", "d-flex", "align-items-center", "mb-0", "w-100"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox", "checked", ""], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-custom-field", 1, "modal", "fade"], ["placeholder", "Expense", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "value", "Name", 1, "form-control"], ["type", "text", "value", "None", 1, "form-control"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"]], template: function CustomFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Custom Fields");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "a", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14)(19, "label");
      \u0275\u0275element(20, "input", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 16)(22, "a", 17);
      \u0275\u0275element(23, "i", 18);
      \u0275\u0275text(24, "Add New Field");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 19)(26, "table", 20)(27, "thead", 21)(28, "tr")(29, "th", 22)(30, "label", 23);
      \u0275\u0275element(31, "input", 24)(32, "span", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Module");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Default Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42, "Required/Disable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "th", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "tbody")(47, "tr")(48, "td")(49, "label", 23);
      \u0275\u0275element(50, "input", 26)(51, "span", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "td")(53, "h6");
      \u0275\u0275text(54, "Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "td");
      \u0275\u0275text(56, " Weight ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "td");
      \u0275\u0275text(58, " Number ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "td");
      \u0275\u0275text(60, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "td");
      \u0275\u0275text(62, "Required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "td")(64, "span", 27);
      \u0275\u0275element(65, "i", 28);
      \u0275\u0275text(66, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "td", 29)(68, "div", 30)(69, "a", 31);
      \u0275\u0275element(70, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "a", 33);
      \u0275\u0275element(72, "i", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "tr")(74, "td")(75, "label", 23);
      \u0275\u0275element(76, "input", 26)(77, "span", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "td")(79, "h6");
      \u0275\u0275text(80, "Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "td");
      \u0275\u0275text(82, " Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "td");
      \u0275\u0275text(84, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "td");
      \u0275\u0275text(86, "Regular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "td");
      \u0275\u0275text(88, "Required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "td")(90, "span", 27);
      \u0275\u0275element(91, "i", 28);
      \u0275\u0275text(92, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "td", 29)(94, "div", 30)(95, "a", 31);
      \u0275\u0275element(96, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "a", 33);
      \u0275\u0275element(98, "i", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(99, "tr")(100, "td")(101, "label", 23);
      \u0275\u0275element(102, "input", 26)(103, "span", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "td")(105, "h6");
      \u0275\u0275text(106, "Supplier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "td");
      \u0275\u0275text(108, " Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "td");
      \u0275\u0275text(110, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "td");
      \u0275\u0275text(112, "Distributor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "td");
      \u0275\u0275text(114, "Required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "td")(116, "span", 27);
      \u0275\u0275element(117, "i", 28);
      \u0275\u0275text(118, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "td", 29)(120, "div", 30)(121, "a", 31);
      \u0275\u0275element(122, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "a", 33);
      \u0275\u0275element(124, "i", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "tr")(126, "td")(127, "label", 23);
      \u0275\u0275element(128, "input", 26)(129, "span", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "td")(131, "h6");
      \u0275\u0275text(132, "Biller");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "td");
      \u0275\u0275text(134, " Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "td");
      \u0275\u0275text(136, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "td");
      \u0275\u0275text(138, "Utility");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "td");
      \u0275\u0275text(140, "Required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "td")(142, "span", 27);
      \u0275\u0275element(143, "i", 28);
      \u0275\u0275text(144, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "td", 29)(146, "div", 30)(147, "a", 31);
      \u0275\u0275element(148, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "a", 33);
      \u0275\u0275element(150, "i", 34);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(151, "div", 35)(152, "div", 36)(153, "div", 37)(154, "div", 38)(155, "div", 39)(156, "div", 40)(157, "div", 41)(158, "h4");
      \u0275\u0275text(159, "Add New Custom Fields");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "button", 42)(161, "span", 43);
      \u0275\u0275text(162, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 44)(164, "form")(165, "div", 0)(166, "div", 6)(167, "div", 45)(168, "label", 46);
      \u0275\u0275text(169, "Custom Fields For ");
      \u0275\u0275elementStart(170, "span");
      \u0275\u0275text(171, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "mat-select", 47);
      \u0275\u0275twoWayListener("ngModelChange", function CustomFieldsComponent_Template_mat_select_ngModelChange_172_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(173, CustomFieldsComponent_For_174_Template, 2, 2, "mat-option", 48, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "div", 6)(176, "div", 45)(177, "label", 46);
      \u0275\u0275text(178, "Label ");
      \u0275\u0275elementStart(179, "span");
      \u0275\u0275text(180, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(181, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 6)(183, "div", 45)(184, "label", 46);
      \u0275\u0275text(185, "Default Value ");
      \u0275\u0275elementStart(186, "span");
      \u0275\u0275text(187, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(188, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 6)(190, "div", 45)(191, "label", 46);
      \u0275\u0275text(192, "Input Type ");
      \u0275\u0275elementStart(193, "span");
      \u0275\u0275text(194, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "mat-select", 47);
      \u0275\u0275twoWayListener("ngModelChange", function CustomFieldsComponent_Template_mat_select_ngModelChange_195_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(196, CustomFieldsComponent_For_197_Template, 2, 2, "mat-option", 48, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 6)(199, "div", 50)(200, "div", 51)(201, "label", 52);
      \u0275\u0275element(202, "input", 53)(203, "span", 25);
      \u0275\u0275text(204, "Required ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div", 51)(206, "label", 52);
      \u0275\u0275element(207, "input", 53)(208, "span", 25);
      \u0275\u0275text(209, "Disable ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(210, "div", 6)(211, "div", 54)(212, "span", 55);
      \u0275\u0275text(213, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "input", 56)(215, "label", 57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "div", 58)(217, "button", 59);
      \u0275\u0275text(218, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "button", 60);
      \u0275\u0275text(220, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(221, "div", 61)(222, "div", 36)(223, "div", 37)(224, "div", 38)(225, "div", 39)(226, "div", 40)(227, "div", 41)(228, "h4");
      \u0275\u0275text(229, "Add New Custom Fields");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "button", 42)(231, "span", 43);
      \u0275\u0275text(232, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(233, "div", 44)(234, "form")(235, "div", 0)(236, "div", 6)(237, "div", 45)(238, "label", 46);
      \u0275\u0275text(239, "Custom Fields For ");
      \u0275\u0275elementStart(240, "span");
      \u0275\u0275text(241, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "mat-select", 62);
      \u0275\u0275twoWayListener("ngModelChange", function CustomFieldsComponent_Template_mat_select_ngModelChange_242_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(243, CustomFieldsComponent_For_244_Template, 2, 2, "mat-option", 48, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "div", 6)(246, "div", 45)(247, "label", 46);
      \u0275\u0275text(248, "Label ");
      \u0275\u0275elementStart(249, "span");
      \u0275\u0275text(250, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(251, "input", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 6)(253, "div", 45)(254, "label", 46);
      \u0275\u0275text(255, "Default Value ");
      \u0275\u0275elementStart(256, "span");
      \u0275\u0275text(257, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(258, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 6)(260, "div", 45)(261, "label", 46);
      \u0275\u0275text(262, "Input Type ");
      \u0275\u0275elementStart(263, "span");
      \u0275\u0275text(264, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "mat-select", 62);
      \u0275\u0275twoWayListener("ngModelChange", function CustomFieldsComponent_Template_mat_select_ngModelChange_265_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(266, CustomFieldsComponent_For_267_Template, 2, 2, "mat-option", 48, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(268, "div", 6)(269, "div", 50)(270, "div", 51)(271, "label", 52);
      \u0275\u0275element(272, "input", 53)(273, "span", 25);
      \u0275\u0275text(274, "Required ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 51)(276, "label", 52);
      \u0275\u0275element(277, "input", 53)(278, "span", 25);
      \u0275\u0275text(279, "Disable ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(280, "div", 6)(281, "div", 54)(282, "span", 55);
      \u0275\u0275text(283, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(284, "input", 65)(285, "label", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(286, "div", 58)(287, "button", 59);
      \u0275\u0275text(288, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "button", 60);
      \u0275\u0275text(290, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(291, "div", 67)(292, "div", 68)(293, "div", 37)(294, "div", 38)(295, "div", 69)(296, "span", 70);
      \u0275\u0275element(297, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "h4", 72);
      \u0275\u0275text(299, "Delete Custom Field");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "p", 73);
      \u0275\u0275text(301, "Are you sure you want to delete custom field?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "div", 74)(303, "button", 75);
      \u0275\u0275text(304, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "button", 76);
      \u0275\u0275text(306, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(172);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue5);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue6);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(46);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue7);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList7);
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue8);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList8);
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomFieldsComponent, [{
    type: Component,
    args: [{ selector: "app-custom-fields", imports: [SettingsSidebarComponent, MatSelectModule, FormsModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0 w-50">\n        <div class="card-header">\n          <h4>Custom Fields</h4>\n        </div>\n        <div class="card-body pb-0">\n          <div class="row">\n            <div class="col-lg-12">\n              <div class="card table-list-card">\n                <div class="card-body">\n                  <div class="table-top">\n                    <div class="search-set">\n                      <div class="search-input">\n                        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                        <div class="dataTables_filter">\n                          <label>\n                            <input type="search" class="form-control" placeholder="Search" />\n                            </label>\n                          </div>\n                        </div>\n                    </div>\n                    <div class="page-btn">\n                      <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-custom-field"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add New Field</a>\n                    </div>\n                  </div> \n                  <div class="table-responsive no-pagination">\n                    <table class="table datatable">\n                      <thead class="thead-light">\n                        <tr>\n                          <th class="no-sort">\n                            <label class="checkboxs">\n                              <input type="checkbox" id="select-all">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </th>\n                          <th>Module</th>\n                          <th>Label</th>\n                          <th>Type</th>\n                          <th>Default Value</th>\n                          <th>Required/Disable</th>\n                          <th>Status</th>\n                          <th class="no-sort"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>\n                            <label class="checkboxs">\n                              <input type="checkbox">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                          <td>\n                            <h6>Product</h6>\n                          </td>\n                          <td>\n                            Weight\n                          </td>\n                          <td>\n                            Number						\n                          </td>\n                          <td>0</td>\n                          <td>Required</td>\n                          <td>\n                            <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                              <i class="ti ti-point-filled me-1"></i>Active\n                            </span>\n                          </td>\n                          <td class="action-table-data">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                            \n                          </td>\n                        </tr>	\n                        <tr>\n                          <td>\n                            <label class="checkboxs">\n                              <input type="checkbox">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                          <td>\n                            <h6>Customer</h6>\n                          </td>\n                          <td>\n                            Type\n                          </td>\n                          <td>\n                            Select						\n                          </td>\n                          <td>Regular</td>\n                          <td>Required</td>\n                          <td>\n                            <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                              <i class="ti ti-point-filled me-1"></i>Active\n                            </span>\n                          </td>\n                          <td class="action-table-data">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                          </td>\n                        </tr>																		\n                        <tr>\n                          <td>\n                            <label class="checkboxs">\n                              <input type="checkbox">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                          <td>\n                            <h6>Supplier</h6>\n                          </td>\n                          <td>\n                            Type\n                          </td>\n                          <td>\n                            Select						\n                          </td>\n                          <td>Distributor</td>\n                          <td>Required</td>\n                          <td>\n                            <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                              <i class="ti ti-point-filled me-1"></i>Active\n                            </span>\n                          </td>\n                          <td class="action-table-data">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                          </td>\n                        </tr>																		\n                        <tr>\n                          <td>\n                            <label class="checkboxs">\n                              <input type="checkbox">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                          <td>\n                            <h6>Biller</h6>\n                          </td>\n                          <td>\n                            Type\n                          </td>\n                          <td>\n                            Select						\n                          </td>\n                          <td>Utility</td>\n                          <td>Required</td>\n                          <td>\n                            <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                              <i class="ti ti-point-filled me-1"></i>Active\n                            </span>\n                          </td>\n                          <td class="action-table-data">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                          </td>\n                        </tr>																		\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Add Custom Field -->\n<div class="modal fade" id="add-custom-field">\n  <div class="modal-dialog modal-dialog-centered custom-modal-two">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header border-0 custom-modal-header">\n            <div class="page-title">\n              <h4>Add New Custom Fields</h4>\n            </div>\n            <button\n              type="button"\n              class="close"\n              data-bs-dismiss="modal"\n              aria-label="Close"\n            >\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <div class="modal-body custom-modal-body">\n            <form>\n              <div class="row">\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label"\n                      >Custom Fields For <span> *</span></label\n                    >\n\n                    <mat-select\n                      [(ngModel)]="selectedValue5"\n                      [ngModelOptions]="{ standalone: true }"\n                      class="select custom-mat-select"\n                      placeholder="Choose"\n                    >\n                      @for (data of selectedList1; track data) {\n                      <mat-option [value]="data.value">\n                        {{ data.value }}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label">Label <span> *</span></label>\n                    <input type="text" class="form-control" />\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label"\n                      >Default Value <span> *</span></label\n                    >\n                    <input type="text" class="form-control" />\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label">Input Type <span> *</span></label>\n\n                    <mat-select\n                      [(ngModel)]="selectedValue6"\n                      [ngModelOptions]="{ standalone: true }"\n                      class="select custom-mat-select"\n                      placeholder="Choose"\n                    >\n                      @for (data of selectedList1; track data) {\n                      <mat-option [value]="data.value">\n                        {{ data.value }}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div\n                    class="localization-select pos-payment-method mb-3 d-flex align-items-center mb-0 w-100"\n                  >\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox" checked />\n                        <span class="checkmarks"></span>Required\n                      </label>\n                    </div>\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox" checked />\n                        <span class="checkmarks"></span>Disable\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div\n                    class="status-toggle modal-status d-flex justify-content-between align-items-center"\n                  >\n                    <span class="status-label">Status</span>\n                    <input\n                      type="checkbox"\n                      id="user2"\n                      class="check"\n                      checked=""\n                    />\n                    <label for="user2" class="checktoggle"></label>\n                  </div>\n                </div>\n              </div>\n              <div class="modal-footer-btn">\n                <button\n                  type="button"\n                  class="btn btn-cancel me-2"\n                  data-bs-dismiss="modal"\n                >\n                  Cancel\n                </button>\n                <button type="submit" class="btn btn-submit">Submit</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Add Custom Field -->\n\n<!-- Edit Custom Field -->\n<div class="modal fade" id="edit-custom-field">\n  <div class="modal-dialog modal-dialog-centered custom-modal-two">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header border-0 custom-modal-header">\n            <div class="page-title">\n              <h4>Add New Custom Fields</h4>\n            </div>\n            <button\n              type="button"\n              class="close"\n              data-bs-dismiss="modal"\n              aria-label="Close"\n            >\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <div class="modal-body custom-modal-body">\n            <form>\n              <div class="row">\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label"\n                      >Custom Fields For <span> *</span></label\n                    >\n\n                    <mat-select\n                      [(ngModel)]="selectedValue7"\n                      [ngModelOptions]="{ standalone: true }"\n                      class="select custom-mat-select"\n                      placeholder="Expense"\n                    >\n                      @for (data of selectedList7; track data) {\n                      <mat-option [value]="data.value">\n                        {{ data.value }}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label">Label <span> *</span></label>\n                    <input type="text" class="form-control" value="Name" />\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label"\n                      >Default Value <span> *</span></label\n                    >\n                    <input type="text" class="form-control" value="None" />\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div class="mb-3">\n                    <label class="form-label">Input Type <span> *</span></label>\n\n                    <mat-select\n                      [(ngModel)]="selectedValue8"\n                      [ngModelOptions]="{ standalone: true }"\n                      class="select custom-mat-select"\n                      placeholder="Expense"\n                    >\n                      @for (data of selectedList8; track data) {\n                      <mat-option [value]="data.value">\n                        {{ data.value }}\n                      </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div\n                    class="localization-select pos-payment-method mb-3 d-flex align-items-center mb-0 w-100"\n                  >\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox" checked />\n                        <span class="checkmarks"></span>Required\n                      </label>\n                    </div>\n                    <div class="custom-control custom-checkbox">\n                      <label class="checkboxs mb-0 pb-0 line-height-1">\n                        <input type="checkbox" checked />\n                        <span class="checkmarks"></span>Disable\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-lg-12">\n                  <div\n                    class="status-toggle modal-status d-flex justify-content-between align-items-center"\n                  >\n                    <span class="status-label">Status</span>\n                    <input\n                      type="checkbox"\n                      id="user3"\n                      class="check"\n                      checked=""\n                    />\n                    <label for="user3" class="checktoggle"></label>\n                  </div>\n                </div>\n              </div>\n              <div class="modal-footer-btn">\n                <button\n                  type="button"\n                  class="btn btn-cancel me-2"\n                  data-bs-dismiss="modal"\n                >\n                  Cancel\n                </button>\n                <button type="submit" class="btn btn-submit">Submit</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Edit Custom Field -->\n\n\n		<!-- delete modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Custom Field</h4>\n							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete custom field?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /delete modal -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomFieldsComponent, { className: "CustomFieldsComponent", filePath: "src/app/features/pages/settings/app-settings/custom-fields/custom-fields.component.ts", lineNumber: 23 });
})();
export {
  CustomFieldsComponent
};
//# sourceMappingURL=chunk-GDEYFF75.js.map
