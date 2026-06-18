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

// src/app/features/pages/user-management/users/users.component.ts
var _c0 = () => ({ standalone: true });
function UsersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function UsersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function UsersComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 99)(3, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_For_86_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 101)(7, "a", 102);
    \u0275\u0275element(8, "img", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "a", 104);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 105);
    \u0275\u0275element(20, "i", 106);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 107)(23, "div", 108)(24, "a", 109);
    \u0275\u0275element(25, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 111);
    \u0275\u0275element(27, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 113);
    \u0275\u0275element(29, "i", 114);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.role);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.status);
  }
}
function UsersComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var UsersComponent = class _UsersComponent {
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
        if (this.router.url == this.routes.users) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getUsers().subscribe((apiRes) => {
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
  password = [false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
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
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 292, vars: 17, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "userName"], ["mat-sort-header", "phone"], ["mat-sort-header", "email"], ["mat-sort-header", "role"], ["mat-sort-header", "status"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "p-3"], [1, "row"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "fs-13", "mt-2"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "email", 1, "form-control"], ["type", "tel", 1, "form-control"], [1, "col-lg-6"], [1, "pass-group"], ["placeholder", "Enter your password", 1, "pass-input", "form-control", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-units", 1, "modal", "fade"], [1, "profile-pic-upload", "image-field"], [1, "profile-pic", "p-2"], ["src", "./assets/img/users/user-49.png", "alt", "user", 1, "object-fit-cover", "h-100", "rounded-1"], ["type", "button", 1, "close", "rounded-1"], [1, "mt-2"], ["type", "text", "value", "Henry Bryant", 1, "form-control"], ["type", "email", "value", "henry@example.com", 1, "form-control"], ["type", "tel", "value", "+12498345785", 1, "form-control"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "d-inline-flex", "align-items-center", "p-1", "pe-2", "rounded-1", "text-white", "bg-success", "fs-10"], [1, "ti", "ti-point-filled", "me-1", "fs-11"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2", "mb-0"], ["data-feather", "eye", 1, "action", "feather", "icon-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2", "mb-0"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "User List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Users");
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
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, UsersComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, UsersComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Add User");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "label")(33, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function UsersComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275text(37, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 26)(39, "li")(40, "a", 27);
      \u0275\u0275text(41, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 27);
      \u0275\u0275text(44, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 28)(46, "a", 25);
      \u0275\u0275text(47, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 26)(49, "li")(50, "a", 27);
      \u0275\u0275text(51, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 27);
      \u0275\u0275text(54, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 27);
      \u0275\u0275text(57, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 27);
      \u0275\u0275text(60, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 27);
      \u0275\u0275text(63, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(64, "div", 29)(65, "div", 30)(66, "table", 31);
      \u0275\u0275listener("matSortChange", function UsersComponent_Template_table_matSortChange_66_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(67, "thead", 32)(68, "tr")(69, "th", 33)(70, "label", 34);
      \u0275\u0275listener("click", function UsersComponent_Template_label_click_70_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(71, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "th", 37);
      \u0275\u0275text(74, "User Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 38);
      \u0275\u0275text(76, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 39);
      \u0275\u0275text(78, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 40);
      \u0275\u0275text(80, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 41);
      \u0275\u0275text(82, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "tbody");
      \u0275\u0275repeaterCreate(85, UsersComponent_For_86_Template, 30, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(87, UsersComponent_Conditional_87_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(88, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 42)(90, "div", 43)(91, "div", 44)(92, "div", 45)(93, "div", 46)(94, "div", 47)(95, "div", 2)(96, "h4");
      \u0275\u0275text(97, "Add User");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "button", 48)(99, "span", 49);
      \u0275\u0275text(100, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 50)(102, "form")(103, "div", 51)(104, "div", 52)(105, "div", 53)(106, "div", 54)(107, "div", 55)(108, "span");
      \u0275\u0275element(109, "i", 56);
      \u0275\u0275text(110, "Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 57)(112, "div", 58);
      \u0275\u0275element(113, "input", 59);
      \u0275\u0275elementStart(114, "div", 60)(115, "h4");
      \u0275\u0275text(116, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "p", 61);
      \u0275\u0275text(118, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(119, "div", 52)(120, "div", 62)(121, "label", 63);
      \u0275\u0275text(122, "User");
      \u0275\u0275elementStart(123, "span", 64);
      \u0275\u0275text(124, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(125, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 52)(127, "div", 62)(128, "label", 63);
      \u0275\u0275text(129, "Role");
      \u0275\u0275elementStart(130, "span", 64);
      \u0275\u0275text(131, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "mat-select", 66)(133, "mat-option", 67);
      \u0275\u0275text(134, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "mat-option", 67);
      \u0275\u0275text(136, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "mat-option", 67);
      \u0275\u0275text(138, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(139, "div", 52)(140, "div", 62)(141, "label", 63);
      \u0275\u0275text(142, "Email");
      \u0275\u0275elementStart(143, "span", 64);
      \u0275\u0275text(144, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(145, "input", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 52)(147, "div", 62)(148, "label", 63);
      \u0275\u0275text(149, "Phone");
      \u0275\u0275elementStart(150, "span", 64);
      \u0275\u0275text(151, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(152, "input", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 70)(154, "div", 62)(155, "label", 63);
      \u0275\u0275text(156, "Password");
      \u0275\u0275elementStart(157, "span", 64);
      \u0275\u0275text(158, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 71);
      \u0275\u0275element(160, "input", 72);
      \u0275\u0275elementStart(161, "span", 73);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_161_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(162, "div", 70)(163, "div", 62)(164, "label", 63);
      \u0275\u0275text(165, "Confirm Password");
      \u0275\u0275elementStart(166, "span", 64);
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 71);
      \u0275\u0275element(169, "input", 72);
      \u0275\u0275elementStart(170, "span", 73);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_170_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "div", 52)(172, "div", 74)(173, "span", 75);
      \u0275\u0275text(174, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(175, "input", 76)(176, "label", 77);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(177, "div", 78)(178, "button", 79);
      \u0275\u0275text(179, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "button", 80);
      \u0275\u0275text(181, "Add User");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(182, "div", 81)(183, "div", 43)(184, "div", 44)(185, "div", 45)(186, "div", 46)(187, "div", 47)(188, "div", 2)(189, "h4");
      \u0275\u0275text(190, "Edit User");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "button", 48)(192, "span", 49);
      \u0275\u0275text(193, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "div", 50)(195, "form")(196, "div", 51)(197, "div", 52)(198, "div", 53)(199, "div", 82)(200, "div", 83);
      \u0275\u0275element(201, "img", 84);
      \u0275\u0275elementStart(202, "button", 85)(203, "span", 49);
      \u0275\u0275text(204, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "div", 62)(206, "div", 58);
      \u0275\u0275element(207, "input", 59);
      \u0275\u0275elementStart(208, "div", 60)(209, "h4");
      \u0275\u0275text(210, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "p", 86);
      \u0275\u0275text(212, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(213, "div", 52)(214, "div", 62)(215, "label", 63);
      \u0275\u0275text(216, "User");
      \u0275\u0275elementStart(217, "span", 64);
      \u0275\u0275text(218, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(219, "input", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 52)(221, "div", 62)(222, "label", 63);
      \u0275\u0275text(223, "Role");
      \u0275\u0275elementStart(224, "span", 64);
      \u0275\u0275text(225, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "mat-select", 66)(227, "mat-option", 67);
      \u0275\u0275text(228, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "mat-option", 67);
      \u0275\u0275text(230, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "mat-option", 67);
      \u0275\u0275text(232, "Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(233, "div", 52)(234, "div", 62)(235, "label", 63);
      \u0275\u0275text(236, "Email");
      \u0275\u0275elementStart(237, "span", 64);
      \u0275\u0275text(238, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(239, "input", 88);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "div", 52)(241, "div", 62)(242, "label", 63);
      \u0275\u0275text(243, "Phone");
      \u0275\u0275elementStart(244, "span", 64);
      \u0275\u0275text(245, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(246, "input", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "div", 70)(248, "div", 62)(249, "label", 63);
      \u0275\u0275text(250, "Password");
      \u0275\u0275elementStart(251, "span", 64);
      \u0275\u0275text(252, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 71);
      \u0275\u0275element(254, "input", 72);
      \u0275\u0275elementStart(255, "span", 73);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_255_listener() {
        return ctx.togglePassword(3);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(256, "div", 70)(257, "div", 62)(258, "label", 63);
      \u0275\u0275text(259, "Confirm Password");
      \u0275\u0275elementStart(260, "span", 64);
      \u0275\u0275text(261, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "div", 71);
      \u0275\u0275element(263, "input", 72);
      \u0275\u0275elementStart(264, "span", 73);
      \u0275\u0275listener("click", function UsersComponent_Template_span_click_264_listener() {
        return ctx.togglePassword(4);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(265, "div", 52)(266, "div", 74)(267, "span", 75);
      \u0275\u0275text(268, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(269, "input", 90)(270, "label", 91);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(271, "div", 78)(272, "button", 79);
      \u0275\u0275text(273, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "button", 80);
      \u0275\u0275text(275, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(276, "div", 92)(277, "div", 43)(278, "div", 44)(279, "div", 45)(280, "div", 93)(281, "span", 94);
      \u0275\u0275element(282, "i", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "h4", 96);
      \u0275\u0275text(284, "Delete User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "p", 97);
      \u0275\u0275text(286, "Are you sure you want to delete user?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "div", 98)(288, "button", 79);
      \u0275\u0275text(289, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "button", 80);
      \u0275\u0275text(291, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(38);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 87 : -1);
      \u0275\u0275advance(73);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "fa-eye" : "fa-eye-slash");
      \u0275\u0275advance(84);
      \u0275\u0275property("type", ctx.password[3] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[3] ? "fa-eye" : "fa-eye-slash");
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.password[4] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[4] ? "fa-eye" : "fa-eye-slash");
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", imports: [MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule, CommonModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>User List</h4>
      <h6>Manage Your Users</h6>
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
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-units"><i
    class="ti ti-circle-plus me-2"></i>Add User</a>
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
          Status
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
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
      <table matSort (matSortChange)="sortData($event)" class="table datanew">
        <thead class="thead-light">
          <tr>
            <th class="no-sort">
                <label class="checkboxs"  (click)="selectAll(initChecked)">
                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                  <span class="checkmarks"></span>
                </label>
              </th>
            <th mat-sort-header="userName">User Name</th>
            <th mat-sort-header="phone">Phone</th>
            <th mat-sort-header="email">email</th>
            <th mat-sort-header="role">Role</th>
            <th mat-sort-header="status">Status</th>
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
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="assets/img/users/{{data.img}}" alt="product">
                  </a>
                  <div>
                    <a href="javascript:void(0);">{{data.userName}}</a>
                  </div>
                  
                </div>
              </td>
              <td>{{data.phone}}</td>
              <td>{{data.email}}</td>
              <td>{{data.role}}</td>
              <td><span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10"><i class="ti ti-point-filled me-1 fs-11"></i>{{data.status}}</span></td>
              <td class="action-table-data">
                <div class="edit-delete-action">
                  <a class="me-2 p-2 mb-0" href="javascript:void(0);">
                    <i data-feather="eye" class="action feather icon-eye"></i>
                  </a>
                  <a class="me-2 p-2 mb-0" data-bs-toggle="modal" data-bs-target="#edit-units">
                    <i data-feather="edit" class="feather icon-edit"></i>
                  </a>
                  <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2 mb-0" href="javascript:void(0);">
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

		<!-- Add User -->
		<div class="modal fade" id="add-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Add User</h4>
								</div>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body p-3">
								<form>
									<div class="row">
										<div class="col-lg-12">
											<div class="new-employee-field">
												
												<div class="profile-pic-upload mb-2">
													<div class="profile-pic">
														<span><i data-feather="plus-circle" class="plus-down-add"></i>Add Image</span>
													</div>
													<div class="mb-0">
														<div class="image-upload mb-0">
															<input type="file">
															<div class="image-uploads">
																<h4>Upload Image</h4>
															</div>
														</div>
														<p class="fs-13 mt-2">JPEG, PNG up to 2 MB</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">User<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Role<span class="text-danger ms-1">*</span></label>
												<mat-select class="custom-mat-select select" placeholder="Select">
													<mat-option value="1">Select</mat-option>
													<mat-option value="1">Admin</mat-option>
													<mat-option value="1">Manager</mat-option>
												</mat-select>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Email<span class="text-danger ms-1">*</span></label>
												<input type="email" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Phone<span class="text-danger ms-1">*</span></label>
												<input type="tel" class="form-control">
											</div>
										</div>
									
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Password<span class="text-danger ms-1">*</span></label>
												<div class="pass-group">
													<input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control"
														placeholder="Enter your password">
														<span class="fas toggle-password" [ngClass]=" password[1] ? 'fa-eye' : 'fa-eye-slash'"
														(click)="togglePassword(1)"></span>
													</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
												<div class="pass-group">
                          <input [type]="password[2] ? 'text' : 'password' " class="pass-input form-control"
                            placeholder="Enter your password">
                            <span class="fas toggle-password" [ngClass]=" password[2] ? 'fa-eye' : 'fa-eye-slash'"
                            (click)="togglePassword(2)"></span>
                          </div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
												<span class="status-label">Status</span>
												<input type="checkbox" id="user1" class="check" checked="">
												<label for="user1" class="checktoggle">	</label>
											</div>
										</div>
							
									</div>
							
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add User</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add User -->

		<!-- Edit User -->
		<div class="modal fade" id="edit-units">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Edit User</h4>
								</div>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body p-3">
								<form>
									<div class="row">
										<div class="col-lg-12">
											<div class="new-employee-field">
												<div class="profile-pic-upload image-field">
													<div class="profile-pic p-2">
														<img src="./assets/img/users/user-49.png" class="object-fit-cover h-100 rounded-1" alt="user">
														<button type="button" class="close rounded-1">
															<span aria-hidden="true">&times;</span>
														</button>
													</div>
													<div class="mb-3">
														<div class="image-upload mb-0">
															<input type="file">
															<div class="image-uploads">
																<h4>Change Image</h4>
															</div>
														</div>
														<p class="mt-2">JPEG, PNG up to 2 MB</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">User<span class="text-danger ms-1">*</span></label>
												<input type="text" class="form-control" value="Henry Bryant">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Role<span class="text-danger ms-1">*</span></label>
												<mat-select class="custom-mat-select select" placeholder="Select">
													<mat-option value="1">Select</mat-option>
													<mat-option value="1">Admin</mat-option>
													<mat-option value="1">Manager</mat-option>
												</mat-select>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Email<span class="text-danger ms-1">*</span></label>
												<input type="email" class="form-control" value="henry@example.com">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Phone<span class="text-danger ms-1">*</span></label>
												<input type="tel" class="form-control" value="+12498345785">
											</div>
										</div>
									
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Password<span class="text-danger ms-1">*</span></label>
												<div class="pass-group">
                          <input [type]="password[3] ? 'text' : 'password' " class="pass-input form-control"
                            placeholder="Enter your password">
                            <span class="fas toggle-password" [ngClass]=" password[3] ? 'fa-eye' : 'fa-eye-slash'"
                            (click)="togglePassword(3)"></span>
                          </div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
												<div class="pass-group">
                          <input [type]="password[4] ? 'text' : 'password' " class="pass-input form-control"
                            placeholder="Enter your password">
                            <span class="fas toggle-password" [ngClass]=" password[4] ? 'fa-eye' : 'fa-eye-slash'"
                            (click)="togglePassword(4)"></span>
                          </div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
												<span class="status-label">Status</span>
												<input type="checkbox" id="user2" class="check" checked="">
												<label for="user2" class="checktoggle">	</label>
											</div>
										</div>
							
									</div>
							
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit User -->

		<!-- delete modal -->
			<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
								<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
								<h4 class="fs-20 fw-bold mb-2 mt-1">Delete User</h4>
								<p class="mb-0 fs-16">Are you sure you want to delete user?</p>
								<div class="modal-footer-btn mt-3 d-flex justify-content-center">
									<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
								</div>						
						</div>
					</div>
				</div>
			</div>
		</div>` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/features/pages/user-management/users/users.component.ts", lineNumber: 25 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-YQMFY4J7.js.map
