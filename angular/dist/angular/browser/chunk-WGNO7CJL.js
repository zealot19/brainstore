import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule,
  Validators
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/hrm/department/department-list/department-list.component.ts
var _c0 = () => ({ standalone: true });
function DepartmentListComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 36);
    \u0275\u0275element(3, "input", 89)(4, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 90)(9, "a", 91);
    \u0275\u0275element(10, "img", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "a", 93);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 94)(16, "div", 95)(17, "span", 96);
    \u0275\u0275element(18, "img", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 96);
    \u0275\u0275element(20, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 96);
    \u0275\u0275element(22, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 100);
    \u0275\u0275element(24, "img", 101);
    \u0275\u0275elementStart(25, "span", 102);
    \u0275\u0275text(26, "+2");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td")(32, "span", 103);
    \u0275\u0275element(33, "i", 104);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td", 105)(36, "div", 106)(37, "a", 107);
    \u0275\u0275element(38, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 109);
    \u0275\u0275element(40, "i", 110);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const departmentList_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(departmentList_r1.department);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", departmentList_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(departmentList_r1.hod);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(departmentList_r1.members);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", departmentList_r1.createdon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", departmentList_r1.status === "Active" ? "badge-success" : "bg-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", departmentList_r1.status, " ");
  }
}
function DepartmentListComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentListComponent_For_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 60);
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
function DepartmentListComponent_For_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 60);
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
var DepartmentListComponent = class _DepartmentListComponent {
  data;
  pagination;
  router;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Choose Type" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" }
  ];
  selectedList2 = [
    { value: "Sort by Datee" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  routes = routes;
  initChecked = false;
  tableData = [];
  // pagination variables
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  row = true;
  //** / pagination variables
  constructor(data, pagination, router) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.departmentList) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDepartment().subscribe((apiRes) => {
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
  selectedList3 = [
    { value: "Choose Department" },
    { value: "UI/UX" },
    { value: "HR" },
    { value: "Admin" },
    { value: "Engineering" }
  ];
  editor;
  toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  form = new FormGroup({
    editorContent: new FormControl("", Validators.required())
  });
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  static \u0275fac = function DepartmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentListComponent, selectors: [["app-department-list"]], decls: 202, vars: 17, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-department", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "card-body", "pb-0"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "department"], ["mat-sort-header", "hod"], ["mat-sort-header", "members"], ["mat-sort-header", "total members"], ["mat-sort-header", "createon"], ["mat-sort-header", "status"], ["id", "add-department", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["placeholder", "Choose Type", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "mb-3", "summer-description-box"], ["id", "summernote"], [3, "editor"], [3, "editor", "toolbar"], [1, "input-blocks", "m-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-department", 1, "modal", "fade"], ["type", "text", "value", "UI/UX", 1, "form-control"], ["id", "summernote2"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "modal-footer"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], ["type", "checkbox"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "product-img"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "avatar-list-stacked", "avatar-group-sm"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/profiles/avatar-15.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "border", "border-white"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "text-fixed-white", "fs-10", "fw-medium", "position-relative"], ["src", "assets/img/profiles/avatar-17.jpg", "alt", "img"], [1, "position-absolute", "top-50", "start-50", "translate-middle", "text-center"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-department", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["colspan", "12", 1, "text-center"]], template: function DepartmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your departments");
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
      \u0275\u0275element(22, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 14)(24, "a", 15);
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275text(26, "Add New Department");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "a", 21);
      \u0275\u0275element(32, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 23)(34, "label")(35, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DepartmentListComponent_Template_input_ngModelChange_35_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "div", 25)(37, "div", 26)(38, "a", 27);
      \u0275\u0275text(39, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "ul", 28)(41, "li")(42, "a", 29);
      \u0275\u0275text(43, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 29);
      \u0275\u0275text(46, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 29);
      \u0275\u0275text(49, "New Joiners");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 30)(51, "a", 27);
      \u0275\u0275text(52, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "ul", 28)(54, "li")(55, "a", 29);
      \u0275\u0275text(56, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 29);
      \u0275\u0275text(59, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 29);
      \u0275\u0275text(62, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 29);
      \u0275\u0275text(65, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 29);
      \u0275\u0275text(68, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(69, "div", 31)(70, "div", 32)(71, "table", 33)(72, "thead", 34)(73, "tr")(74, "th", 35)(75, "label", 36)(76, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "span", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "th", 39);
      \u0275\u0275text(79, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 40);
      \u0275\u0275text(81, "HOD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 41);
      \u0275\u0275text(83, "Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 42);
      \u0275\u0275text(85, "Total Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 43);
      \u0275\u0275text(87, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 44);
      \u0275\u0275text(89, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "th", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "tbody");
      \u0275\u0275repeaterCreate(92, DepartmentListComponent_For_93_Template, 41, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(94, DepartmentListComponent_Conditional_94_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(95, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 45)(97, "div", 46)(98, "div", 47)(99, "div", 48)(100, "div", 49)(101, "div", 50)(102, "div", 2)(103, "h4");
      \u0275\u0275text(104, "Add Department");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "button", 51)(106, "span", 52);
      \u0275\u0275text(107, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 53)(109, "form")(110, "div", 54)(111, "div", 55)(112, "div", 56)(113, "label", 57);
      \u0275\u0275text(114, "Department Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(115, "input", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 55)(117, "div", 56)(118, "label", 57);
      \u0275\u0275text(119, "HOD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "mat-select", 59);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_Template_mat_select_ngModelChange_120_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(121, DepartmentListComponent_For_122_Template, 2, 2, "mat-option", 60, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 55)(124, "div", 61)(125, "label", 57);
      \u0275\u0275text(126, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 62)(128, "ngx-editor", 63);
      \u0275\u0275element(129, "ngx-editor-menu", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "div", 65)(131, "div", 66)(132, "span", 67);
      \u0275\u0275text(133, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(134, "input", 68)(135, "label", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 70)(137, "button", 71);
      \u0275\u0275text(138, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 72);
      \u0275\u0275text(140, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(141, "div", 73)(142, "div", 46)(143, "div", 47)(144, "div", 48)(145, "div", 49)(146, "div", 50)(147, "div", 2)(148, "h4");
      \u0275\u0275text(149, "Edit Department");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "button", 51)(151, "span", 52);
      \u0275\u0275text(152, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "div", 53)(154, "form")(155, "div", 54)(156, "div", 55)(157, "div", 56)(158, "label", 57);
      \u0275\u0275text(159, "Department Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(160, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 55)(162, "div", 56)(163, "label", 57);
      \u0275\u0275text(164, "HOD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "mat-select", 59);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentListComponent_Template_mat_select_ngModelChange_165_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(166, DepartmentListComponent_For_167_Template, 2, 2, "mat-option", 60, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 55)(169, "div", 61)(170, "label", 57);
      \u0275\u0275text(171, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 75)(173, "ngx-editor", 63);
      \u0275\u0275element(174, "ngx-editor-menu", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(175, "div", 65)(176, "div", 66)(177, "span", 67);
      \u0275\u0275text(178, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(179, "input", 76)(180, "label", 77);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "div", 78)(182, "button", 71);
      \u0275\u0275text(183, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "button", 72);
      \u0275\u0275text(185, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(186, "div", 79)(187, "div", 80)(188, "div", 47)(189, "div", 48)(190, "div", 81)(191, "span", 82);
      \u0275\u0275element(192, "i", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "h4", 84);
      \u0275\u0275text(194, "Delete Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "p", 85);
      \u0275\u0275text(196, "Are you sure you want to delete department?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 86)(198, "button", 87);
      \u0275\u0275text(199, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "button", 88);
      \u0275\u0275text(201, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 94 : -1);
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(7);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(36);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(7);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
    }
  }, dependencies: [CommonModule, NgClass, NgxEditorModule, NgxEditorComponent, MenuComponent, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentListComponent, [{
    type: Component,
    args: [{ selector: "app-department-list", imports: [CommonModule, NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Department</h4>
      <h6>Manage your departments</h6>
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
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i  class="feather icon-printer feather-rotate-ccw"></i></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i  class="ti ti-chevron-up"></i></a>
    </li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-department"><i  class="ti ti-circle-plus me-2"></i>Add New Department</a>
  </div>
</div>
<!-- /product list -->
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div class="search-set">
      <div class="search-input">
        <a href="javascript:void(0);" class="btn btn-searchset"
          ><i class="feather icon-search feather-search"></i
        ></a>
        <div class="dataTables_filter">
          <label>
            <input
              [(ngModel)]="searchDataValue"
              [ngModelOptions]="{ standalone: true }"
              (ngModelChange)="searchData(searchDataValue)"
              type="search"
              class="form-control"
              placeholder="Search"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          Select Status
        </a>
        <ul class="dropdown-menu  dropdown-menu-end p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>
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
  <div class="card-body pb-0">
          <div class="table-responsive">
            <table matSort
              matSortActive="Sno"
              matSortDirection="asc"
              matSortDisableClear
              class="table  datanew">
              <thead class="thead-light">
                <tr>
                  <th class="no-sort">
                    <label class="checkboxs">
                       <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >
                      <span class="checkmarks"></span>
                    </label>
                  </th>
                  <th  mat-sort-header="department">Department</th>
                  <th  mat-sort-header="hod">HOD</th>
                  <th  mat-sort-header="members">Members</th>
                  <th  mat-sort-header="total members">Total Members</th>
                  <th  mat-sort-header="createon">Created On</th>
                  <th  mat-sort-header="status">Status</th>
                  <th class="no-sort"></th>
                </tr>
              </thead>
              <tbody>
                @for (departmentList of tableData; track departmentList; let i = $index) {
                  <tr>
                    <td>
                      <label class="checkboxs">
                        <input type="checkbox">
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                    <td>{{departmentList.department}}</td>
                    <td>
                      <div class="userimgname">
                        <a href="javascript:void(0);" class="product-img">
                          <img [src]="departmentList.img" alt="product">
                        </a>
                        <div>
                          <a href="javascript:void(0);">{{departmentList.hod}}</a>
                        </div>

                      </div>
                    </td>

                    <td>
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="avatar-list-stacked avatar-group-sm">
                          <span class="avatar avatar-rounded">
                            <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">
                          </span>
                          <span class="avatar avatar-rounded">
                            <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">
                          </span>
                          <span class="avatar avatar-rounded">
                            <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">
                          </span>
                          <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">
                            <img src="assets/img/profiles/avatar-17.jpg" alt="img">
                            <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>
                          </a>
                        </div>
                      </div>	
                    </td>
                    <td>{{departmentList.members}}</td>
                    <td>
                      {{departmentList.createdon}}
                    </td>
                    <td><span class="badge  d-inline-flex align-items-center badge-xs" [ngClass]="departmentList.status==='Active'?'badge-success':'bg-danger'">
                      <i class="ti ti-point-filled me-1"></i>{{departmentList.status}}
                    </span></td>
           
                    <td class="action-table-data">
                      <div class="edit-delete-action">
                        <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-department">
                          <i  class="feather icon-edit feather-edit"></i>
                        </a>
                        <a class=" p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
                          <i  class="feather icon-trash-2 feather-trash-2"></i>
                        </a>
                      </div>

                    </td>
                  </tr>
                }
                @if(tableData.length === 0){
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
      <!-- Add Department -->
      <div class="modal fade" id="add-department">
        <div class="modal-dialog modal-dialog-centered custom-modal-two">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header border-0 custom-modal-header">
                  <div class="page-title">
                    <h4>Add Department</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body custom-modal-body">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Department Name</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">HOD</label>
                          <mat-select [(ngModel)]="selectedValue1" [ngModelOptions]="{standalone: true}"
                            class="select custom-mat-select" placeholder="Choose Type">
                            @for (data of selectedList1; track data) {
                              <mat-option [value]="data.value">
                                {{data.value}}
                              </mat-option>
                            }
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb-3 summer-description-box">
                          <label class="form-label">Description</label>
                          <div id="summernote">
                            <ngx-editor [editor]="editor">
                              <ngx-editor-menu [editor]="editor" [toolbar]="toolbar">
                              </ngx-editor-menu>
                            </ngx-editor>
                          </div>
                        </div>
                      </div>
                      <div class="input-blocks m-0">
                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span class="status-label">Status</span>
                          <input type="checkbox" id="user5" class="check" checked>
                          <label for="user5" class="checktoggle">	</label>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer-btn">
                      <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                      <button type="submit" class="btn btn-submit">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Add Department -->

      <!-- Edit Department -->
      <div class="modal fade" id="edit-department">
        <div class="modal-dialog modal-dialog-centered custom-modal-two">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header border-0 custom-modal-header">
                  <div class="page-title">
                    <h4>Edit Department</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body custom-modal-body">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Department Name</label>
                          <input type="text" class="form-control" value="UI/UX">
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">HOD</label>
                          <mat-select
                            [(ngModel)]="selectedValue1"
                            [ngModelOptions]="{ standalone: true }"
                            class="select custom-mat-select"
                            placeholder="Choose Type"
                            >
                            @for (data of selectedList1; track data) {
                              <mat-option
                                [value]="data.value"
                                >
                                {{ data.value }}
                              </mat-option>
                            }
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb-3 summer-description-box">
                          <label class="form-label">Description</label>
                          <div id="summernote2">
                            <ngx-editor [editor]="editor">
                              <ngx-editor-menu [editor]="editor" [toolbar]="toolbar">
                              </ngx-editor-menu>
                            </ngx-editor>
                          </div>
                        </div>
                      </div>
                      <div class="input-blocks m-0">
                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span class="status-label">Status</span>
                          <input type="checkbox" id="user3" class="check" checked>
                          <label for="user3" class="checktoggle">	</label>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                      <button type="submit" class="btn btn-submit">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Edit Department -->


      		<!-- delete modal -->
		<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Department</h4>
							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete department?</p>
							<div class="modal-footer-btn mt-3 d-flex justify-content-center">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
							</div>						
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /delete modal -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentListComponent, { className: "DepartmentListComponent", filePath: "src/app/features/pages/hrm/department/department-list/department-list.component.ts", lineNumber: 28 });
})();
export {
  DepartmentListComponent
};
//# sourceMappingURL=chunk-WGNO7CJL.js.map
