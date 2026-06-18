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
  NgModel
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/content-cms/blogs/blog-comments/blog-comments.component.ts
var _c0 = () => ({ standalone: true });
function BlogCommentsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function BlogCommentsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function BlogCommentsComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 42)(3, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function BlogCommentsComponent_For_67_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "i", 45)(11, "i", 45)(12, "i", 45)(13, "i", 45)(14, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "mat-select", 46)(21, "mat-option", 47);
    \u0275\u0275text(22, "Unpublish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 47);
    \u0275\u0275text(24, "Publish");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td")(26, "div", 48)(27, "a", 49);
    \u0275\u0275element(28, "i", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.comments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdDate);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(data_r2.blog);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.by);
  }
}
function BlogCommentsComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2, "No Matching Data Found");
    \u0275\u0275elementEnd()();
  }
}
var BlogCommentsComponent = class _BlogCommentsComponent {
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
  showFilter = false;
  row = true;
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
        if (this.router.url == this.routes.blogComments) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBlogComments().subscribe((apiRes) => {
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
  static \u0275fac = function BlogCommentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogCommentsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCommentsComponent, selectors: [["app-blog-comments"]], decls: 86, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "card-body"], [1, "table-responsive", "table-comments"], [1, "table", "datatable"], ["matSort", "", 1, "thead-light", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "text-gray-9"], [1, "ti", "ti-star-filled", "text-warning"], ["placeholder", "Unpublish", 1, "custom-mat-select", "select"], ["value", "1"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["colspan", "12", 1, "text-center"]], template: function BlogCommentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Blog Comments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your blog tags");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275listener("click", function BlogCommentsComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, BlogCommentsComponent_Conditional_13_Template, 1, 0, "i", 8);
      \u0275\u0275conditionalCreate(14, BlogCommentsComponent_Conditional_14_Template, 1, 0, "i", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "a", 13);
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15)(22, "label")(23, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function BlogCommentsComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BlogCommentsComponent_Template_input_ngModelChange_23_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "a", 19);
      \u0275\u0275text(27, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "ul", 20)(29, "li")(30, "a", 21);
      \u0275\u0275text(31, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 21);
      \u0275\u0275text(34, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "a", 21);
      \u0275\u0275text(37, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 21);
      \u0275\u0275text(40, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 21);
      \u0275\u0275text(43, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(44, "div", 22)(45, "div", 23)(46, "table", 24)(47, "thead", 25);
      \u0275\u0275listener("matSortChange", function BlogCommentsComponent_Template_thead_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "tr")(49, "th", 26)(50, "label", 27);
      \u0275\u0275listener("click", function BlogCommentsComponent_Template_label_click_50_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(51, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function BlogCommentsComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "span", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54, "Comments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th");
      \u0275\u0275text(58, "Ratings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th");
      \u0275\u0275text(60, "Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th");
      \u0275\u0275text(62, "By");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "th")(64, "th", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "tbody");
      \u0275\u0275repeaterCreate(66, BlogCommentsComponent_For_67_Template, 29, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(68, BlogCommentsComponent_Conditional_68_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(69, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 30)(71, "div", 31)(72, "div", 32)(73, "div", 33)(74, "div", 34)(75, "span", 35);
      \u0275\u0275element(76, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h4", 37);
      \u0275\u0275text(78, "Delete Comment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 38);
      \u0275\u0275text(80, "Are you sure you want to delete comment?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 39)(82, "button", 40);
      \u0275\u0275text(83, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 41);
      \u0275\u0275text(85, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(28);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 68 : -1);
    }
  }, dependencies: [NgxEditorModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogCommentsComponent, [{
    type: Component,
    args: [{ selector: "app-blog-comments", imports: [NgxEditorModule, CustomPaginationComponent, FormsModule, MatSortModule, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Blog Comments</h4>\n            <h6>Manage your blog tags</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>					\n</div>\n<!-- /product list -->\n<div class="card table-list-card">\n    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n        <div class="search-set">\n            \n<div class="search-input">\n    <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n    <div class="dataTables_filter">\n      <label>\n        <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n          type="search" class="form-control" placeholder="Search" />\n        </label>\n      </div>\n    </div>\n\n        </div>\n        <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    Sort By : Last 7 Days\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="card-body">	\n        <div class="table-responsive table-comments">\n            <table class="table datatable">\n                <thead matSort (matSortChange)="sortData($event)" class="thead-light">\n                    <tr>\n                        <th class="no-sort">\n                            <label class="checkboxs" (click)="selectAll(initChecked)">\n                              <input type="checkbox" id="select-all" [(ngModel)]="initChecked">\n                              <span class="checkmarks"></span>\n                            </label>\n                          </th>\n                        <th>Comments</th>\n                        <th>Created Date</th>\n                        <th>Ratings</th>\n                        <th>Blog</th>\n                        <th>By</th>\n                        <th></th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    @for (data of tableData; track data) {\n                    <tr>\n                        <td>\n                            <label class="checkboxs">\n                            <input type="checkbox" [(ngModel)]="data.isSelected">\n                            <span class="checkmarks"></span>\n                            </label>\n                        </td>	\n                        <td class="text-gray-9">{{data.comments}}</td>										\n                        <td>{{data.createdDate}}</td>\n                        <td>\n                            <i class="ti ti-star-filled text-warning"></i>\n                            <i class="ti ti-star-filled text-warning"></i>\n                            <i class="ti ti-star-filled text-warning"></i>\n                            <i class="ti ti-star-filled text-warning"></i>\n                            <i class="ti ti-star-filled text-warning"></i>\n                        </td>\n                        <td>{{data.blog}}</td>\n                        <td>{{data.by}}</td>\n                        <td>\n                            <mat-select class="custom-mat-select select" placeholder="Unpublish">\n                                <mat-option value="1">Unpublish</mat-option>\n                                <mat-option value="1">Publish</mat-option>\n                            </mat-select>\n                        </td>\n                        <td>\n                            <div class="edit-delete-action d-flex align-items-center">\n                                <a data-bs-toggle="modal" data-bs-target="#delete-modal" class=" p-2 d-flex align-items-center border rounded" href="javascript:void(0);">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                            \n                        </td>\n                    </tr>\n                }@if(tableData.length === 0){\n                  <tr>\n                      <td class="text-center" colspan="12">No Matching Data Found</td>\n                  </tr>\n              }\n                </tbody>\n            </table>\n        </div>\n        <app-custom-pagination/>\n    </div>\n</div>\n<!-- /product list -->\n\n		 		<!-- delete modal -->\n				 <div class="modal fade" id="delete-modal">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="page-wrapper-new p-0">\n								<div class="content p-5 px-3 text-center">\n										<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n										<h4 class="fs-20 fw-bold mb-2 mt-1">Delete Comment</h4>\n										<p class="mb-0 fs-16">Are you sure you want to delete comment?</p>\n										<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n											<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n											<button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n										</div>						\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCommentsComponent, { className: "BlogCommentsComponent", filePath: "src/app/features/pages/content-cms/blogs/blog-comments/blog-comments.component.ts", lineNumber: 26 });
})();
export {
  BlogCommentsComponent
};
//# sourceMappingURL=chunk-HTMLB34O.js.map
