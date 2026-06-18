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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/user-management/roles-permissions/roles-permissions.component.ts
var _c0 = () => ({ standalone: true });
function RolesPermissionsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function RolesPermissionsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function RolesPermissionsComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 69)(3, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function RolesPermissionsComponent_For_66_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 71);
    \u0275\u0275element(11, "i", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 73)(15, "a", 74);
    \u0275\u0275element(16, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 76);
    \u0275\u0275element(18, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 78);
    \u0275\u0275element(20, "i", 63);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", data_r2.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r2.routes.permissions);
  }
}
function RolesPermissionsComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var RolesPermissionsComponent = class _RolesPermissionsComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedValue1 = "";
  selectedValue2 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose Role" },
    { value: "Admin" },
    { value: "Shop Owner" }
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
        if (this.router.url == this.routes.rolesPermission) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getRolesPermissions().subscribe((apiRes) => {
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
  static \u0275fac = function RolesPermissionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesPermissionsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesPermissionsComponent, selectors: [["app-roles-permissions"]], decls: 132, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "roleName"], ["mat-sort-header", "createdOn"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "mb-0"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "button", 1, "btn", "btn-submit"], ["id", "edit-units", 1, "modal", "fade"], ["type", "text", "value", "Store Keeper", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", 1, "btn", "btn-md", "btn-primary"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-icon", "d-inline-flex"], [1, "me-2", "d-flex", "align-items-center", "p-2", "border", "rounded", 3, "routerLink"], [1, "ti", "ti-shield"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "d-flex", "align-items-center", "p-2", "border", "rounded"], [1, "ti", "ti-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-flex", "align-items-center", "p-2", "border", "rounded"], ["colspan", "12", 1, "text-center"]], template: function RolesPermissionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Roles & Permission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your roles");
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
      \u0275\u0275element(19, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 12);
      \u0275\u0275listener("click", function RolesPermissionsComponent_Template_a_click_21_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(22, RolesPermissionsComponent_Conditional_22_Template, 1, 0, "i", 13);
      \u0275\u0275conditionalCreate(23, RolesPermissionsComponent_Conditional_23_Template, 1, 0, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 14)(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, " Add New Role");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "a", 21);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 23)(35, "label")(36, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function RolesPermissionsComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RolesPermissionsComponent_Template_input_ngModelChange_36_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 25)(38, "div", 26)(39, "a", 27);
      \u0275\u0275text(40, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "ul", 28)(42, "li")(43, "a", 29);
      \u0275\u0275text(44, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 29);
      \u0275\u0275text(47, "Inactive");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "div", 30)(49, "div", 31)(50, "table", 32);
      \u0275\u0275listener("matSortChange", function RolesPermissionsComponent_Template_table_matSortChange_50_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(51, "thead", 33)(52, "tr")(53, "th", 34)(54, "label", 35);
      \u0275\u0275listener("click", function RolesPermissionsComponent_Template_label_click_54_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(55, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function RolesPermissionsComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "th", 38);
      \u0275\u0275text(58, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 39);
      \u0275\u0275text(60, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 40);
      \u0275\u0275text(62, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "th", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275repeaterCreate(65, RolesPermissionsComponent_For_66_Template, 21, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(67, RolesPermissionsComponent_Conditional_67_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(68, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 41)(70, "div", 42)(71, "div", 43)(72, "div", 44)(73, "div", 45)(74, "div", 46)(75, "div", 2)(76, "h4");
      \u0275\u0275text(77, "Create Role");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "button", 47)(79, "span", 48);
      \u0275\u0275text(80, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 49)(82, "form")(83, "div", 50)(84, "label", 51);
      \u0275\u0275text(85, "Role Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 53)(88, "button", 54);
      \u0275\u0275text(89, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "button", 55);
      \u0275\u0275text(91, "Create Role");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(92, "div", 56)(93, "div", 42)(94, "div", 43)(95, "div", 44)(96, "div", 45)(97, "div", 46)(98, "div", 2)(99, "h4");
      \u0275\u0275text(100, "Edit Role");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "button", 47)(102, "span", 48);
      \u0275\u0275text(103, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 49)(105, "form")(106, "div", 50)(107, "label", 51);
      \u0275\u0275text(108, "Role Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "input", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 53)(111, "button", 54);
      \u0275\u0275text(112, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 55);
      \u0275\u0275text(114, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(115, "div", 58)(116, "div", 59)(117, "div", 43)(118, "div", 60)(119, "div", 61)(120, "form")(121, "div", 62);
      \u0275\u0275element(122, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "h3", 64);
      \u0275\u0275text(124, "Delete Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "p", 65);
      \u0275\u0275text(126, "Are you sure you want to delete role?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 66)(128, "button", 67);
      \u0275\u0275text(129, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "button", 68);
      \u0275\u0275text(131, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 23 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 67 : -1);
    }
  }, dependencies: [MatSelectModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesPermissionsComponent, [{
    type: Component,
    args: [{ selector: "app-roles-permissions", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule, RouterLink], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Roles & Permission</h4>\n      <h6>Manage your roles</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img\n      src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img\n      src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Print" matTooltipPosition="above"><i\n      class="feather icon-printer feather-rotate-ccw"></i></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n        matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i\n    class="ti ti-circle-plus me-2"></i> Add New Role</a>\n  </div>\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n    <div class="search-set">\n      <div class="search-input">\n        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n        <div class="dataTables_filter">\n          <label>\n            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n              type="search" class="form-control" placeholder="Search..." />\n            </label>\n          </div>\n        </div>\n    </div>\n    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n      <div class="dropdown me-2">\n        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n          Status\n        </a>\n        <ul class="dropdown-menu  dropdown-menu-end p-3">\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n          </li>\n          <li>\n            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="card-body">\n    <div class="table-responsive">\n      <table matSort (matSortChange)="sortData($event)"  class="table  datanew">\n        <thead class="thead-light">\n          <tr>\n            <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n            <th mat-sort-header="roleName">Role</th>\n            <th mat-sort-header="createdOn">Created Date</th>\n            <th mat-sort-header="status">Status</th>\n            <th class="no-sort"></th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (data of tableData; track data) {\n            <tr>\n              <td>\n                <label class="checkboxs">\n                  <input type="checkbox" [(ngModel)]="data.isSelected">\n                  <span class="checkmarks"></span>\n                </label>\n              </td>\n              <td>{{data.role}}</td>\n              <td>{{data.createdDate}}</td>\n              <td>\n                <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                  <i class="ti ti-point-filled me-1"></i>{{data.status}}\n                </span>\n              </td>\n              <td>\n                <div class="action-icon d-inline-flex">\n                  <a [routerLink]="routes.permissions" class="me-2 d-flex align-items-center p-2 border rounded"><i class="ti ti-shield"></i></a>\n                  <a href="javascript:void(0);" class="me-2 d-flex align-items-center p-2 border rounded" data-bs-toggle="modal" data-bs-target="#edit-units"><i class="ti ti-edit"></i></a>\n                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal" class=" d-flex align-items-center p-2 border rounded"><i class="ti ti-trash"></i></a>\n                </div>\n              </td>\n            </tr>\n          }@if(tableData.length === 0){\n              <tr>\n                  <td class="text-center" colspan="12">No Matching Data Found</td>\n              </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <app-custom-pagination></app-custom-pagination>\n  </div>\n</div>\n<!-- /product list -->\n\n<!-- Add Role -->\n<div class="modal fade" id="add-units">\n  <div class="modal-dialog modal-dialog-centered custom-modal-two">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header border-0 custom-modal-header">\n            <div class="page-title">\n              <h4>Create Role</h4>\n            </div>\n            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <div class="modal-body custom-modal-body">\n            <form>\n              <div class="mb-0">\n                <label class="form-label">Role Name</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="modal-footer-btn">\n                <button type="button" class="btn btn-cancel me-2"\n                data-bs-dismiss="modal">Cancel</button>\n                <button type="button" class="btn btn-submit">Create Role</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Add Role -->\n\n<!-- Edit Role -->\n<div class="modal fade" id="edit-units">\n  <div class="modal-dialog modal-dialog-centered custom-modal-two">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content">\n          <div class="modal-header border-0 custom-modal-header">\n            <div class="page-title">\n              <h4>Edit Role</h4>\n            </div>\n            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n          <div class="modal-body custom-modal-body">\n            <form>\n              <div class="mb-0">\n                <label class="form-label">Role Name</label>\n                <input type="text" class="form-control" value="Store Keeper">\n              </div>\n              <div class="modal-footer-btn">\n                <button type="button" class="btn btn-cancel me-2"\n                data-bs-dismiss="modal">Cancel</button>\n                <button type="button" class="btn btn-submit">Save Changes</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Edit Role -->\n\n		<!-- Delete Product -->\n		<div class="modal fade modal-default" id="delete_modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-body p-0">\n						<div class="success-wrap text-center">\n							<form>\n								<div class="icon-success bg-danger-transparent text-danger mb-2">\n									<i class="ti ti-trash"></i>\n								</div>\n								<h3 class="mb-2">Delete Role</h3>\n								<p class="fs-16 mb-3">Are you sure you want to delete role?</p>\n								<div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">\n									<button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>\n									<button type="submit" class="btn btn-md btn-primary">Yes, Delete</button>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Delete Product -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesPermissionsComponent, { className: "RolesPermissionsComponent", filePath: "src/app/features/pages/user-management/roles-permissions/roles-permissions.component.ts", lineNumber: 29 });
})();
export {
  RolesPermissionsComponent
};
//# sourceMappingURL=chunk-3T4CDWKI.js.map
