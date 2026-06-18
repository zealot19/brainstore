import {
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSort,
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

// src/app/features/pages/content-cms/testimonial/testimonial.component.ts
var _c0 = () => ({ standalone: true });
function TestimonialComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function TestimonialComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function TestimonialComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 78)(3, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function TestimonialComponent_For_76_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 80)(7, "a", 81);
    \u0275\u0275element(8, "img", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 83)(10, "p", 84)(11, "a", 85);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div")(19, "span");
    \u0275\u0275element(20, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275element(22, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275element(24, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275element(26, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275element(28, "i", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 87)(32, "div", 88)(33, "a", 89);
    \u0275\u0275element(34, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 91);
    \u0275\u0275element(36, "i", 92);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.role, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r2.content, " ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", data_r2.createdDate, " ");
  }
}
function TestimonialComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 93);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var TestimonialComponent = class _TestimonialComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  isSelected;
  routes = routes;
  // pagination variables
  tableData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  row = true;
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
        if (this.router.url == this.routes.testimonial) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTestimonial().subscribe((apiRes) => {
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
  static \u0275fac = function TestimonialComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialComponent, selectors: [["app-testimonial"]], decls: 231, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-testimonial", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body", "pb-0"], [1, "custom-datatable-filter", "table-responsive"], ["matSort", "", 1, "table", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "add-testimonial", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "mb-3"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mt-2"], [1, "row"], [1, "col-lg-12", "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "email", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-testimonial", 1, "modal", "fade"], ["type", "email", "value", "Carl Evans", 1, "form-control"], ["placeholder", "Manager", 1, "custom-mat-select", "select"], ["placeholder", "5 Star", 1, "custom-mat-select", "select"], ["id", "delete-modal", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "text-dark", "mb-0"], ["href", "javascript:void(0);"], [1, "ti", "ti-star-filled", "text-warning"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-testimonial", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function TestimonialComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your testimonials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li", 4)(9, "a", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li", 4)(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275listener("click", function TestimonialComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, TestimonialComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, TestimonialComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Testimonial");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "label")(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function TestimonialComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TestimonialComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "a", 26);
      \u0275\u0275text(37, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 27)(39, "li")(40, "a", 28);
      \u0275\u0275text(41, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 28);
      \u0275\u0275text(44, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 28);
      \u0275\u0275text(47, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 28);
      \u0275\u0275text(50, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 28);
      \u0275\u0275text(53, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 29)(55, "div", 30)(56, "table", 31);
      \u0275\u0275listener("matSortChange", function TestimonialComponent_Template_table_matSortChange_56_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(57, "thead", 32)(58, "tr")(59, "th", 33)(60, "label", 34);
      \u0275\u0275listener("click", function TestimonialComponent_Template_label_click_60_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(61, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function TestimonialComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "th");
      \u0275\u0275text(64, "Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th");
      \u0275\u0275text(66, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th");
      \u0275\u0275text(68, "Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th");
      \u0275\u0275text(70, "Ratings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th");
      \u0275\u0275text(72, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "tbody");
      \u0275\u0275repeaterCreate(75, TestimonialComponent_For_76_Template, 37, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(77, TestimonialComponent_Conditional_77_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(78, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 37)(80, "div", 38)(81, "div", 39)(82, "div", 40)(83, "div", 2)(84, "h4");
      \u0275\u0275text(85, "Add Testimonial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "button", 41)(87, "span", 42);
      \u0275\u0275text(88, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "form")(90, "div", 43)(91, "div", 44)(92, "div", 45)(93, "div", 46)(94, "span");
      \u0275\u0275element(95, "i", 47);
      \u0275\u0275text(96, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 48)(98, "div", 49);
      \u0275\u0275element(99, "input", 50);
      \u0275\u0275elementStart(100, "div", 51)(101, "h4");
      \u0275\u0275text(102, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "p", 52);
      \u0275\u0275text(104, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "div", 53)(106, "div", 54)(107, "label", 55);
      \u0275\u0275text(108, "Author ");
      \u0275\u0275elementStart(109, "span", 56);
      \u0275\u0275text(110, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(111, "input", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 54)(113, "label", 55);
      \u0275\u0275text(114, "Role ");
      \u0275\u0275elementStart(115, "span", 56);
      \u0275\u0275text(116, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "mat-select", 58)(118, "mat-option", 59);
      \u0275\u0275text(119, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "mat-option", 59);
      \u0275\u0275text(121, "Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "mat-option", 59);
      \u0275\u0275text(123, "Supervisor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 54)(125, "label", 55);
      \u0275\u0275text(126, "Content ");
      \u0275\u0275elementStart(127, "span", 56);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(129, "textarea", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 61)(131, "label", 55);
      \u0275\u0275text(132, "Ratings ");
      \u0275\u0275elementStart(133, "span", 56);
      \u0275\u0275text(134, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "mat-select", 58)(136, "mat-option", 59);
      \u0275\u0275text(137, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "mat-option", 59);
      \u0275\u0275text(139, "5 Star");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 59);
      \u0275\u0275text(141, "4 Star");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(142, "div", 62)(143, "button", 63);
      \u0275\u0275text(144, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "button", 64);
      \u0275\u0275text(146, "Add Testimonial");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(147, "div", 65)(148, "div", 38)(149, "div", 39)(150, "div", 40)(151, "div", 2)(152, "h4");
      \u0275\u0275text(153, "Edit Testimonial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "button", 41)(155, "span", 42);
      \u0275\u0275text(156, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "form")(158, "div", 43)(159, "div", 44)(160, "div", 45)(161, "div", 46)(162, "span");
      \u0275\u0275element(163, "i", 47);
      \u0275\u0275text(164, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 48)(166, "div", 49);
      \u0275\u0275element(167, "input", 50);
      \u0275\u0275elementStart(168, "div", 51)(169, "h4");
      \u0275\u0275text(170, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "p", 52);
      \u0275\u0275text(172, "JPEG, PNG up to 2 MB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(173, "div", 53)(174, "div", 54)(175, "label", 55);
      \u0275\u0275text(176, "Author ");
      \u0275\u0275elementStart(177, "span", 56);
      \u0275\u0275text(178, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(179, "input", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 54)(181, "label", 55);
      \u0275\u0275text(182, "Role ");
      \u0275\u0275elementStart(183, "span", 56);
      \u0275\u0275text(184, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "mat-select", 67)(186, "mat-option", 59);
      \u0275\u0275text(187, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "mat-option", 59);
      \u0275\u0275text(189, "Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "mat-option", 59);
      \u0275\u0275text(191, "Supervisor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(192, "div", 54)(193, "label", 55);
      \u0275\u0275text(194, "Content ");
      \u0275\u0275elementStart(195, "span", 56);
      \u0275\u0275text(196, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(197, "textarea", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 61)(199, "label", 55);
      \u0275\u0275text(200, "Ratings ");
      \u0275\u0275elementStart(201, "span", 56);
      \u0275\u0275text(202, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "mat-select", 68)(204, "mat-option", 59);
      \u0275\u0275text(205, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "mat-option", 59);
      \u0275\u0275text(207, "5 Star");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "mat-option", 59);
      \u0275\u0275text(209, "4 Star");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(210, "div", 62)(211, "button", 63);
      \u0275\u0275text(212, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "button", 64);
      \u0275\u0275text(214, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(215, "div", 69)(216, "div", 38)(217, "div", 39)(218, "div", 70)(219, "div", 71)(220, "span", 72);
      \u0275\u0275element(221, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "h4", 74);
      \u0275\u0275text(223, "Delete Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "p", 75);
      \u0275\u0275text(225, "Are you sure you want to delete employee?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 76)(227, "button", 63);
      \u0275\u0275text(228, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "button", 77);
      \u0275\u0275text(230, "Yes Delete");
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
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(28);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 77 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSortModule, MatSort, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialComponent, [{
    type: Component,
    args: [{ selector: "app-testimonial", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Testimonials</h4>\n            <h6>Manage your testimonials</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li class="me-2">\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li class="me-2">\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-testimonial"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add Testimonial</a>\n    </div>\n</div>\n<!-- product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            \n<div class="search-input">\n    <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n    <div class="dataTables_filter">\n      <label>\n        <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n          type="search" class="form-control" placeholder="Search" />\n        </label>\n      </div>\n    </div>\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body pb-0">\n        <div class="custom-datatable-filter table-responsive">\n            <table matSort (matSortChange)="sortData($event)" class="table datatable">\n                <thead class="thead-light">\n                    <tr>\n                        <th class="no-sort">\n                            <label class="checkboxs" (click)="selectAll(initChecked)">\n                              <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </th>\n                        <th>Author</th>\n                        <th>Role</th>\n                        <th>Content</th>\n                        <th>Ratings</th>\n                        <th>Created Date</th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    @for(data of tableData;track data){\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                              <input type="checkbox" [(ngModel)]="data.isSelected">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </td>\n                        <td>\n                            <div class="d-flex align-items-center">\n                                <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/users/{{data.img}}" class="img-fluid" alt="img"></a>\n                                <div class="ms-2">\n                                    <p class="text-dark mb-0"><a href="javascript:void(0);">{{data.author}}</a></p>\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            {{data.role}}\n                        </td>\n                        <td>\n                            {{data.content}}							\n                        </td>\n                        <td>\n                            <div>\n                                <span><i class="ti ti-star-filled text-warning"></i></span>\n                                <span><i class="ti ti-star-filled text-warning"></i></span>\n                                <span><i class="ti ti-star-filled text-warning"></i></span>\n                                <span><i class="ti ti-star-filled text-warning"></i></span>\n                                <span><i class="ti ti-star-filled text-warning"></i></span>\n                            </div>\n                        </td>\n                        <td>\n                           {{data.createdDate}}\n                        </td>\n                        <td class="action-table-data">\n                            <div class="edit-delete-action">\n                                <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-testimonial">\n                                    <i data-feather="edit" class="feather icon-edit"></i>\n                                </a>\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n                </tbody>\n            </table>\n        </div>\n		<app-custom-pagination></app-custom-pagination>\n    </div>\n</div>\n<!-- /product list -->\n\n		<!-- Add Testimonial -->\n		<div class="modal fade" id="add-testimonial">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Testimonial</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n					<div class="modal-body">\n						<div class="new-employee-field">\n								<div class="profile-pic-upload">\n									<div class="profile-pic">\n										<span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n									</div>\n									<div class="mb-3">\n										<div class="image-upload mb-0">\n											<input type="file">\n											<div class="image-uploads">\n												<h4>Upload Image</h4>\n											</div>\n										</div>\n										<p class="mt-2">JPEG, PNG up to 2 MB</p>\n									</div>\n								</div>\n							</div>\n							<div class="row">\n								<div class="col-lg-12 mb-3">\n									<label class="form-label">Author <span class="text-danger ms-1">*</span></label>\n									<input type="email" class="form-control"> \n								</div>\n								<div class="col-lg-12 mb-3">		\n									<label class="form-label">Role <span class="text-danger ms-1">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Select">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">Manager</mat-option>\n										<mat-option value="1">Supervisor</mat-option>\n									</mat-select>											\n								</div>\n								<div class="col-lg-12 mb-3">\n									<label class="form-label">Content <span class="text-danger ms-1">*</span></label>\n									<textarea type="text" class="form-control"></textarea>\n								</div>\n								<div class="col-lg-12">		\n									<label class="form-label">Ratings <span class="text-danger ms-1">*</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Select">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">5 Star</mat-option>\n										<mat-option value="1">4 Star</mat-option>\n									</mat-select>											\n								</div>		\n							</div>	\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Testimonial</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Testimonial -->\n		<!-- Edit Testimonial -->\n		<div class="modal fade" id="edit-testimonial">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Testimonial</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n					<div class="modal-body">\n						<div class="new-employee-field">\n							<div class="profile-pic-upload">\n								<div class="profile-pic">\n									<span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n								</div>\n								<div class="mb-3">\n									<div class="image-upload mb-0">\n										<input type="file">\n										<div class="image-uploads">\n											<h4>Upload Image</h4>\n										</div>\n									</div>\n									<p class="mt-2">JPEG, PNG up to 2 MB</p>\n								</div>\n							</div>\n						</div>\n						<div class="row">\n							<div class="col-lg-12 mb-3">\n								<label class="form-label">Author <span class="text-danger ms-1">*</span></label>\n								<input type="email" class="form-control" value="Carl Evans"> \n							</div>\n							<div class="col-lg-12 mb-3">		\n								<label class="form-label">Role <span class="text-danger ms-1">*</span></label>\n								<mat-select class="custom-mat-select select" placeholder="Manager">\n									<mat-option value="1">Select</mat-option>\n									<mat-option value="1">Manager</mat-option>\n									<mat-option value="1">Supervisor</mat-option>\n								</mat-select>											\n							</div>\n							<div class="col-lg-12 mb-3">\n								<label class="form-label">Content <span class="text-danger ms-1">*</span></label>\n								<textarea type="text" class="form-control"></textarea>\n							</div>\n							<div class="col-lg-12">		\n								<label class="form-label">Ratings <span class="text-danger ms-1">*</span></label>\n								<mat-select class="custom-mat-select select" placeholder="5 Star">\n									<mat-option value="1">Select</mat-option>\n									<mat-option value="1">5 Star</mat-option>\n									<mat-option value="1">4 Star</mat-option>\n								</mat-select>											\n							</div>		\n						</div>	\n					</div>\n					<div class="modal-footer">\n						<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n						<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Save Changes</button>\n					</div>\n				</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Testimonial -->\n\n		<!-- delete modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Employee</h4>\n							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete employee?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /delete modal -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialComponent, { className: "TestimonialComponent", filePath: "src/app/features/pages/content-cms/testimonial/testimonial.component.ts", lineNumber: 27 });
})();
export {
  TestimonialComponent
};
//# sourceMappingURL=chunk-Y2PD7V53.js.map
