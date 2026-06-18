import {
  DragDropModule
} from "./chunk-CG4KJCH6.js";
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
  Router,
  RouterLink
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/features/pages/application/file/file-favourites/file-favourites.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ "section-notes-dashboard": a0 });
var _c2 = (a0) => ({ "budgeted-role-notes": a0 });
function FileFavouritesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 4);
  }
}
function FileFavouritesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
  }
}
function FileFavouritesComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
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
function FileFavouritesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function FileFavouritesComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function FileFavouritesComponent_For_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
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
function FileFavouritesComponent_For_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
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
function FileFavouritesComponent_For_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
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
function FileFavouritesComponent_For_728_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
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
function FileFavouritesComponent_For_749_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 140);
    \u0275\u0275listener("click", function FileFavouritesComponent_For_749_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.selectAll(ctx_r6.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 148);
    \u0275\u0275twoWayListener("ngModelChange", function FileFavouritesComponent_For_749_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.initChecked, $event) || (ctx_r6.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 149)(6, "a", 150);
    \u0275\u0275element(7, "img", 151);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275element(12, "br");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "a", 152);
    \u0275\u0275element(18, "img", 153);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "div", 24)(23, "a", 43);
    \u0275\u0275element(24, "i", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27)(26, "a", 97);
    \u0275\u0275element(27, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul", 31)(29, "li")(30, "a", 33);
    \u0275\u0275element(31, "i", 155);
    \u0275\u0275text(32, "Permanent Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 33);
    \u0275\u0275element(35, "i", 156);
    \u0275\u0275text(36, "Restore File");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r6.routes.productList);
    \u0275\u0275advance();
    \u0275\u0275property("src", data_r8.folderimg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r8.lastModified, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r8.modified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r8.size);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", data_r8.memberimg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r8.ownedMember);
  }
}
var FileFavouritesComponent = class _FileFavouritesComponent {
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
  selectedList1 = [
    { value: "Owned By Me" },
    { value: "Owned by Anyone" },
    { value: "Not Owned by Me" }
  ];
  selectedList2 = [
    { value: "Recent" },
    { value: "Last Week" },
    { value: "Last Month" }
  ];
  selectedList3 = [
    { value: "All File types" },
    { value: "Folders" },
    { value: "PDF" },
    { value: "Images" },
    { value: "Videos" },
    { value: "Audios" },
    { value: "Excel" }
  ];
  selectedList4 = [
    { value: "Last Modified" },
    { value: "Last Modified by Me" },
    { value: "Last Opened by Me" }
  ];
  selectedList5 = [
    { value: "Sort by Date" },
    { value: "Sort By Relevance" },
    { value: "Sort By Size" },
    { value: "Order Ascending" },
    { value: "Order Descending" },
    { value: "Upload Time" }
  ];
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
        if (this.router.url == this.routes.fileFavorites) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getFile().subscribe((apiRes) => {
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
  appSidebar = true;
  toggleChange() {
    this.appSidebar = !this.appSidebar;
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
  static \u0275fac = function FileFavouritesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileFavouritesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileFavouritesComponent, selectors: [["app-file-favourites"]], decls: 751, vars: 35, consts: [[1, "page-header", "page-add-notes", "d-flex", "align-items-center", "justify-content-between"], [1, "add-item", "d-flex", "align-items-center"], [1, "page-title"], ["id", "toggle_btn2", "href", "javascript:void(0);", 1, "notes-tog", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "fas", "fa-chevron-left"], [1, "d-sm-flex", "align-items-center"], [1, "form-sort", "owned-by", "w-auto"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Owned By Me", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "rotate", "matTooltip", "rotate", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], [1, "full-height"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "ti", "ti-chevron-up"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#upload-file", 1, "btn", "btn-primary", "btn-added"], [1, "me-1", "d-flex", "align-items-center"], [1, "feather", "icon-upload", "feather-16"], [1, "row"], [1, "col-lg-3", "col-md-12", "sidebars-right", "theiaStickySidebar", "section-bulk-widget", 3, "ngClass"], [1, "stickybar"], [1, "card", "file-manager-sidebar", "mb-0"], [1, "d-flex", "align-items-center"], [1, "me-2", "d-flex", "align-items-center"], [1, "feather", "icon-folder", "feather-20"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropset", "btn", "btn-primary", "mb-3", "btn-icon"], [1, "me-1", "btn-icon"], [1, "ti", "ti-circle-plus", "feather-16"], [1, "dropdown-menu"], ["data-bs-toggle", "modal", "data-bs-target", "#upload-file"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "feather", "icon-upload-cloud", "feather-16", "me-2"], ["data-bs-toggle", "modal", "data-bs-target", "#upload-folder"], [1, "feather", "icon-folder", "feather-16", "me-2"], ["data-bs-toggle", "modal", "data-bs-target", "#create-folder"], [1, "feather", "icon-folder-minus", "feather-16", "me-2"], [1, "mb-5"], [3, "routerLink"], [1, "me-2", "btn-icon"], [1, "feather", "icon-file-text", "feather-16"], ["href", "javascript:void(0);"], [1, "feather", "icon-star", "feather-16"], [1, "feather", "icon-send", "feather-16"], [1, "feather", "icon-file", "feather-16"], [1, "feather", "icon-clock", "feather-16"], [1, "active", 3, "routerLink"], [1, "feather", "icon-target", "feather-16"], [1, "feather", "icon-trash-2", "feather-16"], [1, "feather", "icon-settings", "feather-16"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "feather", "icon-hard-drive", "feather-16"], [1, "progress", "my-2"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar", "bg-danger", 2, "width", "75%"], [1, "space-manager", "p-4"], ["src", "assets/img/icons/half-circle.svg", "alt", "Folder"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-primary"], [1, "ms-1", "btn-icon"], [1, "feather", "icon-reapeat", "feather-16"], [1, "col-lg-9", "budget-role-notes", 3, "ngClass"], [1, "col-12"], [1, "section-bulk-wrap"], [1, "bulk-action-type", "col-lg-6", "col-md-6"], [1, "form-sort", "select-bluk"], ["placeholder", "Sort by Date", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["id", "dropdownSort", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "search-set", "me-2"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-sm", "width-auto"], ["aria-labelledby", "dropdownMenuClickable", 1, "dropdown-menu", "search-dropdown"], [1, "search-info"], [1, "feather", "icon-search", "feather-16"], [1, "search-tags"], [1, "feather", "icon-chevron-right", "feather-16"], [1, "d-sm-flex", "align-items-center", "col-lg-6", "col-md-6", "justify-content-end"], [1, "form-sort", "me-3"], [1, "feather", "icon-filter", "fa-filter"], ["placeholder", "Recent", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "form-sort"], [1, "feather", "icon-file-text", "fa-filter"], ["placeholder", "All File types", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["id", "accordionPanelsStayOpenExample", 1, "accordion"], [1, "accordion-item", "seprator-lg"], ["id", "panelsStayOpen-headingOne", 1, "accordion-header", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseOne", "aria-expanded", "true", "aria-controls", "panelsStayOpen-collapseOne", 1, "accordion-button", "a-auto"], ["id", "panelsStayOpen-collapseOne", "aria-labelledby", "panelsStayOpen-headingOne", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "row", "mt-3"], [1, "col-sm-12", "col-md-6", "col-lg-6"], [1, "folders", "p-3", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "head"], ["src", "assets/img/icons/folder.svg", "alt", "Folder", 1, "me-2"], [1, "popup-toggle"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropset"], [1, "fa", "fa-ellipsis-v"], [1, "d-flex", "align-items-center", "justify-content-start", "project-plan", "my-3"], [1, "d-flex"], [1, "d-flex", "align-items-center", "justify-content-between", "avatar-wrap"], [1, "group-avatar"], [1, "avatar"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "aria-label", "Member 1", "data-bs-original-title", "Member 1"], ["src", "assets/img/avatar/avatar-2.jpg", "alt", "Avatar"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "aria-label", "Member 2", "data-bs-original-title", "Member 2"], ["src", "assets/img/avatar/avatar-1.jpg", "alt", "Avatar"], [1, "count"], [1, "fa", "fa-star", "me-2"], ["src", "assets/img/avatar/avatar-6.jpg", "alt", "Avatar"], ["src", "assets/img/avatar/avatar-14.jpg", "alt", "Avatar"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "aria-label", "Member 3", "data-bs-original-title", "Member 3"], ["src", "assets/img/avatar/avatar-15.jpg", "alt", "Avatar"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "aria-label", "Member 4", "data-bs-original-title", "Member 4"], ["src", "assets/img/avatar/avatar-16.jpg", "alt", "Avatar"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "aria-label", "Member 5", "data-bs-original-title", "Member 5"], ["src", "assets/img/avatar/avatar-17.jpg", "alt", "Avatar"], ["src", "assets/img/avatar/avatar-18.jpg", "alt", "Avatar"], ["src", "assets/img/avatar/avatar-5.jpg", "alt", "Avatar"], ["id", "panelsStayOpen-headingTwo", 1, "accordion-header", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#panelsStayOpen-collapseTwo", "aria-expanded", "false", "aria-controls", "panelsStayOpen-collapseTwo", 1, "accordion-button", "w-auto"], ["id", "panelsStayOpen-collapseTwo", "aria-labelledby", "panelsStayOpen-headingTwo", 1, "accordion-collapse", "collapse", "show"], ["src", "assets/img/icons/pdf-02.svg", "alt", "File", 1, "me-2"], [1, "d-flex", "align-items-center", "justify-content-start", "project-plan", "mt-3"], ["src", "assets/img/icons/xls.svg", "alt", "File", 1, "me-2"], [1, "card", "p-4", "bg-white", "all-files", "mb-0"], [1, "seprator-lg", "d-lg-flex", "align-items-center", "justify-content-between"], [1, "d-sm-flex", "align-items-center", "btn-grp"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "me-2"], [1, "feather", "icon-list", "feather-20"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-secondary", "me-2"], [1, "feather", "icon-layout", "feather-20"], [1, "feather", "icon-grid", "feather-20"], [1, "icon-select"], [1, "icon"], [1, "feather", "icon-calendar", "feather-16"], ["placeholder", "Last Modified", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "lastmodified"], ["mat-sort-header", "size"], ["mat-sort-header", "owned"], ["mat-sort-header", "action"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "productimgname"], [1, "product-img", "d-flex", "align-items-center", 3, "routerLink"], ["alt", "Product", 1, "me-2", 3, "src"], ["href", "javascript:void(0);", 1, "product-img", "d-flex", "align-items-center"], ["alt", "Product", 1, "me-2", "rounded-circle", 3, "src"], [1, "feather", "icon-star", "feather-16", "me-2", "color-primary"], [1, "feather", "icon-trash-2", "feather-14", "me-2"], [1, "feather", "icon-edit", "feather-14", "me-2"]], template: function FileFavouritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "File Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Manage your files");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275listener("click", function FileFavouritesComponent_Template_a_click_7_listener() {
        return ctx.toggleChange();
      });
      \u0275\u0275conditionalCreate(8, FileFavouritesComponent_Conditional_8_Template, 1, 0, "i", 4);
      \u0275\u0275conditionalCreate(9, FileFavouritesComponent_Conditional_9_Template, 1, 0, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "span");
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function FileFavouritesComponent_Template_mat_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(15, FileFavouritesComponent_For_16_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "ul", 11)(18, "li")(19, "a", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li", 14)(22, "a", 15);
      \u0275\u0275listener("click", function FileFavouritesComponent_Template_a_click_22_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(23, FileFavouritesComponent_Conditional_23_Template, 1, 0, "i", 16);
      \u0275\u0275conditionalCreate(24, FileFavouritesComponent_Conditional_24_Template, 1, 0, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "a", 17)(26, "span", 18);
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, "Upload Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 20)(30, "div", 21)(31, "div", 22)(32, "aside", 23)(33, "h5", 24)(34, "span", 25);
      \u0275\u0275element(35, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, "Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 27)(38, "a", 28)(39, "span", 29);
      \u0275\u0275element(40, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, "New ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 31)(43, "li", 32)(44, "a", 33);
      \u0275\u0275element(45, "i", 34);
      \u0275\u0275text(46, "Upload File");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li", 35)(48, "a", 33);
      \u0275\u0275element(49, "i", 36);
      \u0275\u0275text(50, "Upload Folder");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li", 37)(52, "a", 33);
      \u0275\u0275element(53, "i", 38);
      \u0275\u0275text(54, "Create folder");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "ul", 39)(56, "li")(57, "a", 40)(58, "span", 41);
      \u0275\u0275element(59, "i", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, "My Files");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 43)(63, "span", 41);
      \u0275\u0275element(64, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(65, "Google Drive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 43)(68, "span", 41);
      \u0275\u0275element(69, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, "Dropbox");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 40)(73, "span", 41);
      \u0275\u0275element(74, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, "Shared With Me");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 40)(78, "span", 41);
      \u0275\u0275element(79, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, "Document");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "li")(82, "a", 40)(83, "span", 41);
      \u0275\u0275element(84, "i", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275text(85, "Recent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 48)(88, "span", 41);
      \u0275\u0275element(89, "i", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(90, "Favourites");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "li")(92, "a", 40)(93, "span", 41);
      \u0275\u0275element(94, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, "Archived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "a", 40)(98, "span", 41);
      \u0275\u0275element(99, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, "Deleted");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "li")(102, "a", 43)(103, "span", 41);
      \u0275\u0275element(104, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275text(105, "Settings");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 52)(107, "div", 24)(108, "span", 41);
      \u0275\u0275element(109, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "h6");
      \u0275\u0275text(111, "Storage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, "70%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 54);
      \u0275\u0275element(115, "div", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "span");
      \u0275\u0275text(117, "78.5 GB of 1 TB Free Used");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 56);
      \u0275\u0275element(119, "img", 57);
      \u0275\u0275elementStart(120, "h6")(121, "a", 43);
      \u0275\u0275text(122, "Need More Space?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "p");
      \u0275\u0275text(124, "Upgrade storage for 2TB for $60 per month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "a", 58);
      \u0275\u0275text(126, "Upgrade");
      \u0275\u0275elementStart(127, "span", 59);
      \u0275\u0275element(128, "i", 60);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(129, "div", 61)(130, "div", 20)(131, "div", 62)(132, "div", 63)(133, "div", 64)(134, "div", 65)(135, "mat-select", 66);
      \u0275\u0275twoWayListener("ngModelChange", function FileFavouritesComponent_Template_mat_select_ngModelChange_135_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(136, FileFavouritesComponent_For_137_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 67)(139, "div", 68)(140, "a", 69);
      \u0275\u0275element(141, "i", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 71)(143, "label");
      \u0275\u0275element(144, "input", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(145, "div", 73)(146, "div", 74)(147, "h6")(148, "span");
      \u0275\u0275element(149, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(150, "Recent Searches ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "ul", 76)(152, "li")(153, "a", 43);
      \u0275\u0275text(154, "Filename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "li")(156, "a", 43);
      \u0275\u0275text(157, "Excel Files");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(158, "div", 74)(159, "h6");
      \u0275\u0275text(160, "Search Results");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "p", 52);
      \u0275\u0275text(162, " Sportsmodel.pdf ");
      \u0275\u0275element(163, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p", 52);
      \u0275\u0275text(165, " Projectdetails.xls");
      \u0275\u0275element(166, "i", 77);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "div", 78)(168, "div", 79);
      \u0275\u0275element(169, "i", 80);
      \u0275\u0275elementStart(170, "mat-select", 81);
      \u0275\u0275twoWayListener("ngModelChange", function FileFavouritesComponent_Template_mat_select_ngModelChange_170_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(171, FileFavouritesComponent_For_172_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 82);
      \u0275\u0275element(174, "i", 83);
      \u0275\u0275elementStart(175, "mat-select", 84);
      \u0275\u0275twoWayListener("ngModelChange", function FileFavouritesComponent_Template_mat_select_ngModelChange_175_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(176, FileFavouritesComponent_For_177_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(178, "div", 85)(179, "div", 86)(180, "h4", 87);
      \u0275\u0275text(181, "Folders ");
      \u0275\u0275element(182, "a", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "div", 89)(184, "div", 90)(185, "div", 91)(186, "div", 92)(187, "div", 93)(188, "div", 94)(189, "div", 24);
      \u0275\u0275element(190, "img", 95);
      \u0275\u0275elementStart(191, "h6", 96)(192, "a", 43);
      \u0275\u0275text(193, "Project Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "div", 27)(195, "a", 97);
      \u0275\u0275element(196, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "ul", 31)(198, "li")(199, "a", 33);
      \u0275\u0275text(200, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "li")(202, "a", 33);
      \u0275\u0275text(203, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "a", 33);
      \u0275\u0275text(206, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "li")(208, "a", 33);
      \u0275\u0275text(209, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "li")(211, "a", 33);
      \u0275\u0275text(212, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "li")(214, "a", 33);
      \u0275\u0275text(215, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "li")(217, "a", 33);
      \u0275\u0275text(218, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "li")(220, "a", 33);
      \u0275\u0275text(221, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(222, "div", 99)(223, "label");
      \u0275\u0275text(224, "Project plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "ul", 100)(226, "li", 24);
      \u0275\u0275text(227, "154 KB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "li", 24);
      \u0275\u0275text(229, "8 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(230, "div", 101)(231, "div", 102)(232, "span", 103)(233, "a", 104);
      \u0275\u0275element(234, "img", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "span", 103)(236, "a", 106);
      \u0275\u0275element(237, "img", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "span", 108)(239, "a", 43);
      \u0275\u0275text(240, "1 Members");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "a", 43);
      \u0275\u0275element(242, "i", 109);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(243, "div", 92)(244, "div", 93)(245, "div", 94)(246, "div", 24);
      \u0275\u0275element(247, "img", 95);
      \u0275\u0275elementStart(248, "h6", 96)(249, "a", 43);
      \u0275\u0275text(250, "Project Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(251, "div", 27)(252, "a", 97);
      \u0275\u0275element(253, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "ul", 31)(255, "li")(256, "a", 33);
      \u0275\u0275text(257, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "li")(259, "a", 33);
      \u0275\u0275text(260, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "li")(262, "a", 33);
      \u0275\u0275text(263, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "li")(265, "a", 33);
      \u0275\u0275text(266, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "li")(268, "a", 33);
      \u0275\u0275text(269, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "li")(271, "a", 33);
      \u0275\u0275text(272, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "li")(274, "a", 33);
      \u0275\u0275text(275, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "a", 33);
      \u0275\u0275text(278, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(279, "div", 99)(280, "label");
      \u0275\u0275text(281, "Project plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "ul", 100)(283, "li", 24);
      \u0275\u0275text(284, "154 KB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "li", 24);
      \u0275\u0275text(286, "8 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(287, "div", 101)(288, "div", 102)(289, "span", 103)(290, "a", 104);
      \u0275\u0275element(291, "img", 110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "span", 103)(293, "a", 106);
      \u0275\u0275element(294, "img", 111);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "span", 103)(296, "a", 112);
      \u0275\u0275element(297, "img", 113);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "span", 103)(299, "a", 114);
      \u0275\u0275element(300, "img", 115);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "span", 103)(302, "a", 116);
      \u0275\u0275element(303, "img", 117);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "span", 108)(305, "a", 43);
      \u0275\u0275text(306, "+9 Members");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(307, "a", 43);
      \u0275\u0275element(308, "i", 109);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(309, "div", 92)(310, "div", 93)(311, "div", 94)(312, "div", 24);
      \u0275\u0275element(313, "img", 95);
      \u0275\u0275elementStart(314, "h6", 96)(315, "a", 43);
      \u0275\u0275text(316, "Project Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "div", 27)(318, "a", 97);
      \u0275\u0275element(319, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "ul", 31)(321, "li")(322, "a", 33);
      \u0275\u0275text(323, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "li")(325, "a", 33);
      \u0275\u0275text(326, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "li")(328, "a", 33);
      \u0275\u0275text(329, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "li")(331, "a", 33);
      \u0275\u0275text(332, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "li")(334, "a", 33);
      \u0275\u0275text(335, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(336, "li")(337, "a", 33);
      \u0275\u0275text(338, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "li")(340, "a", 33);
      \u0275\u0275text(341, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "li")(343, "a", 33);
      \u0275\u0275text(344, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(345, "div", 99)(346, "label");
      \u0275\u0275text(347, "Project plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "ul", 100)(349, "li", 24);
      \u0275\u0275text(350, "154 KB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "li", 24);
      \u0275\u0275text(352, "8 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(353, "div", 101)(354, "div", 102)(355, "span", 103)(356, "a", 104);
      \u0275\u0275element(357, "img", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "span", 103)(359, "a", 106);
      \u0275\u0275element(360, "img", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "span", 108)(362, "a", 43);
      \u0275\u0275text(363, " +2 Members");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(364, "a", 43);
      \u0275\u0275element(365, "i", 109);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(366, "div", 92)(367, "div", 93)(368, "div", 94)(369, "div", 24);
      \u0275\u0275element(370, "img", 95);
      \u0275\u0275elementStart(371, "h6", 96)(372, "a", 43);
      \u0275\u0275text(373, "Project Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(374, "div", 27)(375, "a", 97);
      \u0275\u0275element(376, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "ul", 31)(378, "li")(379, "a", 33);
      \u0275\u0275text(380, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(381, "li")(382, "a", 33);
      \u0275\u0275text(383, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "li")(385, "a", 33);
      \u0275\u0275text(386, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(387, "li")(388, "a", 33);
      \u0275\u0275text(389, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "li")(391, "a", 33);
      \u0275\u0275text(392, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "li")(394, "a", 33);
      \u0275\u0275text(395, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(396, "li")(397, "a", 33);
      \u0275\u0275text(398, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(399, "li")(400, "a", 33);
      \u0275\u0275text(401, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(402, "div", 99)(403, "label");
      \u0275\u0275text(404, "Project plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "ul", 100)(406, "li", 24);
      \u0275\u0275text(407, "154 KB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "li", 24);
      \u0275\u0275text(409, "8 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(410, "div", 101)(411, "div", 102)(412, "span", 103)(413, "a", 104);
      \u0275\u0275element(414, "img", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(415, "span", 103)(416, "a", 106);
      \u0275\u0275element(417, "img", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(418, "span", 108)(419, "a", 43);
      \u0275\u0275text(420, "1 Members");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(421, "a", 43);
      \u0275\u0275element(422, "i", 109);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(423, "div", 86)(424, "h4", 120);
      \u0275\u0275text(425, "Files ");
      \u0275\u0275element(426, "a", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "div", 122)(428, "div", 90)(429, "div", 91)(430, "div", 92)(431, "div", 93)(432, "div", 94)(433, "div", 24);
      \u0275\u0275element(434, "img", 123);
      \u0275\u0275elementStart(435, "h6", 96)(436, "a", 43);
      \u0275\u0275text(437, "hsa.pdf");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(438, "div", 24)(439, "a", 43);
      \u0275\u0275element(440, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "div", 27)(442, "a", 97);
      \u0275\u0275element(443, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "ul", 31)(445, "li")(446, "a", 33);
      \u0275\u0275text(447, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "li")(449, "a", 33);
      \u0275\u0275text(450, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "li")(452, "a", 33);
      \u0275\u0275text(453, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(454, "li")(455, "a", 33);
      \u0275\u0275text(456, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(457, "li")(458, "a", 33);
      \u0275\u0275text(459, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(460, "li")(461, "a", 33);
      \u0275\u0275text(462, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(463, "li")(464, "a", 33);
      \u0275\u0275text(465, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "li")(467, "a", 33);
      \u0275\u0275text(468, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(469, "div", 124)(470, "label");
      \u0275\u0275text(471, "Last edited 12 Jul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "ul", 100)(473, "li", 24);
      \u0275\u0275text(474, "15 Memebers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "li", 24);
      \u0275\u0275text(476, "8 5 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(477, "div", 92)(478, "div", 93)(479, "div", 94)(480, "div", 24);
      \u0275\u0275element(481, "img", 123);
      \u0275\u0275elementStart(482, "h6", 96)(483, "a", 43);
      \u0275\u0275text(484, "Haird.pdf");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(485, "div", 24)(486, "a", 43);
      \u0275\u0275element(487, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "div", 27)(489, "a", 97);
      \u0275\u0275element(490, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "ul", 31)(492, "li")(493, "a", 33);
      \u0275\u0275text(494, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(495, "li")(496, "a", 33);
      \u0275\u0275text(497, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "li")(499, "a", 33);
      \u0275\u0275text(500, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "li")(502, "a", 33);
      \u0275\u0275text(503, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "li")(505, "a", 33);
      \u0275\u0275text(506, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "li")(508, "a", 33);
      \u0275\u0275text(509, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "li")(511, "a", 33);
      \u0275\u0275text(512, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(513, "li")(514, "a", 33);
      \u0275\u0275text(515, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(516, "div", 124)(517, "label");
      \u0275\u0275text(518, "Last edited 14 Jul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "ul", 100)(520, "li", 24);
      \u0275\u0275text(521, "09 Memebers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "li", 24);
      \u0275\u0275text(523, "4 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(524, "div", 92)(525, "div", 93)(526, "div", 94)(527, "div", 24);
      \u0275\u0275element(528, "img", 125);
      \u0275\u0275elementStart(529, "h6", 96)(530, "a", 43);
      \u0275\u0275text(531, "Estimation.xls");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(532, "div", 24)(533, "a", 43);
      \u0275\u0275element(534, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "div", 27)(536, "a", 97);
      \u0275\u0275element(537, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "ul", 31)(539, "li")(540, "a", 33);
      \u0275\u0275text(541, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(542, "li")(543, "a", 33);
      \u0275\u0275text(544, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(545, "li")(546, "a", 33);
      \u0275\u0275text(547, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "li")(549, "a", 33);
      \u0275\u0275text(550, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(551, "li")(552, "a", 33);
      \u0275\u0275text(553, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(554, "li")(555, "a", 33);
      \u0275\u0275text(556, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(557, "li")(558, "a", 33);
      \u0275\u0275text(559, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(560, "li")(561, "a", 33);
      \u0275\u0275text(562, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(563, "div", 124)(564, "label");
      \u0275\u0275text(565, "Last edited 14 Jul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "ul", 100)(567, "li", 24);
      \u0275\u0275text(568, "05 Memebers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "li", 24);
      \u0275\u0275text(570, "500 KB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(571, "div", 92)(572, "div", 93)(573, "div", 94)(574, "div", 24);
      \u0275\u0275element(575, "img", 123);
      \u0275\u0275elementStart(576, "h6", 96)(577, "a", 43);
      \u0275\u0275text(578, "hsa.pdf");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(579, "div", 24)(580, "a", 43);
      \u0275\u0275element(581, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "div", 27)(583, "a", 97);
      \u0275\u0275element(584, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "ul", 31)(586, "li")(587, "a", 33);
      \u0275\u0275text(588, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(589, "li")(590, "a", 33);
      \u0275\u0275text(591, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(592, "li")(593, "a", 33);
      \u0275\u0275text(594, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(595, "li")(596, "a", 33);
      \u0275\u0275text(597, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(598, "li")(599, "a", 33);
      \u0275\u0275text(600, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(601, "li")(602, "a", 33);
      \u0275\u0275text(603, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(604, "li")(605, "a", 33);
      \u0275\u0275text(606, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(607, "li")(608, "a", 33);
      \u0275\u0275text(609, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(610, "div", 124)(611, "label");
      \u0275\u0275text(612, "Last edited 12 Jul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(613, "ul", 100)(614, "li", 24);
      \u0275\u0275text(615, "15 Memebers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "li", 24);
      \u0275\u0275text(617, "8 5 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(618, "div", 92)(619, "div", 93)(620, "div", 94)(621, "div", 24);
      \u0275\u0275element(622, "img", 123);
      \u0275\u0275elementStart(623, "h6", 96)(624, "a", 43);
      \u0275\u0275text(625, "Haird.pdf");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(626, "div", 24)(627, "a", 43);
      \u0275\u0275element(628, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "div", 27)(630, "a", 97);
      \u0275\u0275element(631, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(632, "ul", 31)(633, "li")(634, "a", 33);
      \u0275\u0275text(635, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(636, "li")(637, "a", 33);
      \u0275\u0275text(638, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(639, "li")(640, "a", 33);
      \u0275\u0275text(641, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(642, "li")(643, "a", 33);
      \u0275\u0275text(644, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(645, "li")(646, "a", 33);
      \u0275\u0275text(647, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(648, "li")(649, "a", 33);
      \u0275\u0275text(650, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(651, "li")(652, "a", 33);
      \u0275\u0275text(653, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(654, "li")(655, "a", 33);
      \u0275\u0275text(656, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(657, "div", 124)(658, "label");
      \u0275\u0275text(659, "Last edited 14 Jul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(660, "ul", 100)(661, "li", 24);
      \u0275\u0275text(662, "09 Memebers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(663, "li", 24);
      \u0275\u0275text(664, "4 MB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(665, "div", 92)(666, "div", 93)(667, "div", 94)(668, "div", 24);
      \u0275\u0275element(669, "img", 125);
      \u0275\u0275elementStart(670, "h6", 96)(671, "a", 43);
      \u0275\u0275text(672, "Estimation.xls");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(673, "div", 24)(674, "a", 43);
      \u0275\u0275element(675, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "div", 27)(677, "a", 97);
      \u0275\u0275element(678, "i", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "ul", 31)(680, "li")(681, "a", 33);
      \u0275\u0275text(682, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(683, "li")(684, "a", 33);
      \u0275\u0275text(685, "Share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(686, "li")(687, "a", 33);
      \u0275\u0275text(688, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(689, "li")(690, "a", 33);
      \u0275\u0275text(691, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(692, "li")(693, "a", 33);
      \u0275\u0275text(694, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "li")(696, "a", 33);
      \u0275\u0275text(697, "Rename");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(698, "li")(699, "a", 33);
      \u0275\u0275text(700, "Archeived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(701, "li")(702, "a", 33);
      \u0275\u0275text(703, "Delete");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(704, "div", 124)(705, "label");
      \u0275\u0275text(706, "Last edited 14 Jul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(707, "ul", 100)(708, "li", 24);
      \u0275\u0275text(709, "05 Memebers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(710, "li", 24);
      \u0275\u0275text(711, "500 KB");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(712, "div", 126)(713, "div", 127)(714, "h4");
      \u0275\u0275text(715, "All Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "div", 128)(717, "a", 129);
      \u0275\u0275element(718, "i", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(719, "a", 131);
      \u0275\u0275element(720, "i", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "a", 131);
      \u0275\u0275element(722, "i", 133);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "div", 134)(724, "span", 135);
      \u0275\u0275element(725, "i", 136);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "mat-select", 137);
      \u0275\u0275twoWayListener("ngModelChange", function FileFavouritesComponent_Template_mat_select_ngModelChange_726_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(727, FileFavouritesComponent_For_728_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(729, "div", 138)(730, "table", 139);
      \u0275\u0275listener("matSortChange", function FileFavouritesComponent_Template_table_matSortChange_730_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(731, "thead")(732, "tr")(733, "th")(734, "label", 140);
      \u0275\u0275listener("click", function FileFavouritesComponent_Template_label_click_734_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(735, "input", 141);
      \u0275\u0275twoWayListener("ngModelChange", function FileFavouritesComponent_Template_input_ngModelChange_735_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(736, "span", 142);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "th", 143);
      \u0275\u0275text(738, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "th", 144);
      \u0275\u0275text(740, "Last Modified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(741, "th", 145);
      \u0275\u0275text(742, "Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(743, "th", 146);
      \u0275\u0275text(744, "Owned Memebr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(745, "th", 147);
      \u0275\u0275text(746, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(747, "tbody");
      \u0275\u0275repeaterCreate(748, FileFavouritesComponent_For_749_Template, 37, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(750, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.appSidebar ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.appSidebar ? 9 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(26, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 24 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c1, ctx.appSidebar === false));
      \u0275\u0275advance(27);
      \u0275\u0275property("routerLink", ctx.routes.fileManager);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.fileShared);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.fileDocument);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.fileRecent);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.fileFavorites);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.fileArchived);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.fileManagerDeleted);
      \u0275\u0275advance(32);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c2, ctx.appSidebar === false));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue5);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList5);
      \u0275\u0275advance(34);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue2);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(32, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList2);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue3);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(33, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList3);
      \u0275\u0275advance(550);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue4);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(34, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList4);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CustomPaginationComponent, RouterLink, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, DragDropModule, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileFavouritesComponent, [{
    type: Component,
    args: [{ selector: "app-file-favourites", imports: [CustomPaginationComponent, RouterLink, FormsModule, DragDropModule, MatSortModule, MatSelectModule, CommonModule], template: `
<div class="page-header page-add-notes d-flex align-items-center justify-content-between">
  <div class="add-item d-flex align-items-center">
    <div class="page-title">
      <h4>File Manager</h4>
      <p>Manage your files</p>
    </div>
    <a id="toggle_btn2" class="notes-tog" href="javascript:void(0);" (click)="toggleChange()">
      @if (!appSidebar) {
        <i class="fas fa-chevron-right"></i>
      }
      @if (appSidebar) {
        <i class="fas fa-chevron-left"></i>
      }
    </a>
  </div>
  <div class="d-sm-flex align-items-center">
    <div class="form-sort owned-by w-auto">
      <span><i  class="feather icon-sliders info-img"></i></span>
      <mat-select
        [(ngModel)]="selectedValue1"
        [ngModelOptions]="{ standalone: true }"
        class="select space-select"
        placeholder="Owned By Me"
        >
        @for (data of selectedList1; track data) {
          <mat-option [value]="data.value">
            {{ data.value }}
          </mat-option>
        }
      </mat-select>
    </div>
    <ul class="table-top-head">
      <li>
        <a
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="rotate"
          matTooltip="rotate"
          matTooltipPosition="above"
          ><i class="ti ti-refresh"></i
        ></a>
      </li>
      <li class="full-height">
        <a
          (click)="toggleCollapse()" [class.active]="isCollapsed"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Collapse"
          id="collapse-header"
          matTooltip="Collapse"
          matTooltipPosition="above"
          > @if (!isCollapsed) {
          <i class="ti ti-chevron-up"></i>
        }
        @if (isCollapsed) {
          <i class="ti ti-chevron-up"></i>
        }</a>
      </li>
    </ul>
    <a href="javascript:void(0);" class="btn btn-primary btn-added" data-bs-toggle="modal" data-bs-target="#upload-file"><span class="me-1 d-flex align-items-center"><i  class="feather icon-upload  feather-16"></i></span>Upload Files</a>
  </div>
</div>

<div class="row">
  <div class="col-lg-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget" [ngClass]="{'section-notes-dashboard': appSidebar === false}">
    <div class="stickybar">
      <aside class="card file-manager-sidebar mb-0">
        <h5 class="d-flex align-items-center"><span class="me-2 d-flex align-items-center"><i
        class="feather icon-folder feather-20"></i></span>Files</h5>
        <div class="dropdown">
          <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
            class="dropset btn btn-primary mb-3 btn-icon">
            <span class="me-1 btn-icon"><i class="ti ti-circle-plus feather-16"></i></span>New
          </a>
          <ul class="dropdown-menu">
            <li data-bs-toggle="modal" data-bs-target="#upload-file"><a href="javascript:void(0);"
              class="dropdown-item"><i class="feather icon-upload-cloud feather-16 me-2"></i>Upload
            File</a></li>
            <li data-bs-toggle="modal" data-bs-target="#upload-folder"><a href="javascript:void(0);"
              class="dropdown-item"><i class="feather icon-folder feather-16 me-2"></i>Upload Folder</a>
            </li>
            <li data-bs-toggle="modal" data-bs-target="#create-folder"><a href="javascript:void(0);"
              class="dropdown-item"><i class="feather icon-folder-minus feather-16 me-2"></i>Create
            folder</a></li>
          </ul>
        </div>

        <ul class="mb-5">
          <li><a [routerLink] = "routes.fileManager"><span class="me-2 btn-icon"><i
          class="feather icon-file-text feather-16"></i></span>My Files</a></li>
          <li><a href="javascript:void(0);"><span class="me-2 btn-icon"><i
          class="feather icon-star  feather-16"></i></span>Google Drive</a></li>
          <li><a href="javascript:void(0);"><span class="me-2 btn-icon"><i
          class="feather icon-send feather-16"></i></span>Dropbox</a></li>
          <li><a [routerLink] = "routes.fileShared" ><span class="me-2 btn-icon"><i
          class="feather icon-file feather-16"></i></span>Shared With Me</a></li>
          <li><a [routerLink] = "routes.fileDocument"><span class="me-2 btn-icon"><i
          class="feather icon-file feather-16"></i></span>Document</a></li>
          <li><a [routerLink] = "routes.fileRecent"><span class="me-2 btn-icon"><i
          class="feather icon-clock feather-16"></i></span>Recent</a></li>
          <li><a [routerLink] = "routes.fileFavorites" class="active"><span class="me-2 btn-icon"><i
          class="feather icon-star feather-16"></i></span>Favourites</a></li>
          <li><a [routerLink] = "routes.fileArchived"><span class="me-2 btn-icon"><i
          class="feather icon-target feather-16"></i></span>Archived</a></li>
          <li><a [routerLink] = "routes.fileManagerDeleted"><span class="me-2 btn-icon"><i
          class="feather icon-trash-2 feather-16"></i></span>Deleted</a></li>
          <li><a href="javascript:void(0);"><span class="me-2 btn-icon"><i
          class="feather icon-settings feather-16"></i></span>Settings</a></li>
        </ul>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <span class="me-2 btn-icon"><i class="feather icon-hard-drive  feather-16"></i></span>
            <h6>Storage</h6>
          </div>
          <span>70%</span>
        </div>
        <div class="progress my-2">
          <div class="progress-bar progress-bar bg-danger" role="progressbar" style="width: 75%"
          aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>78.5 GB of 1 TB Free Used</span>
        <div class="space-manager p-4">
          <img src="assets/img/icons/half-circle.svg" alt="Folder">
          <h6><a href="javascript:void(0);">Need More Space?</a></h6>
          <p>Upgrade storage for 2TB for $60 per month</p>
          <a href="javascript:void(0);" class="btn btn-outline-primary">Upgrade<span class="ms-1 btn-icon"><i
          class="feather icon-reapeat feather-16"></i></span></a>
        </div>
      </aside>
    </div>

  </div>

  <div class="col-lg-9 budget-role-notes" [ngClass]="{'budgeted-role-notes': appSidebar === false}">
    <div class="row">
      <div class="col-12">
        <div class="section-bulk-wrap">
          <div class="bulk-action-type col-lg-6 col-md-6">
            <div class="form-sort select-bluk">

              <mat-select [(ngModel)]="selectedValue5" [ngModelOptions]="{standalone: true}"
                class="select custom-mat-select" placeholder="Sort by Date">
                @for (data of selectedList5; track data) {
                  <mat-option [value]="data.value">
                    {{data.value}}
                  </mat-option>
                }
              </mat-select>
            </div>
            <div
              class="search-set me-2"
              id="dropdownSort"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              >
              <div class="search-input">
                <a href="javascript:void(0);" class="btn btn-searchset"
                  ><i  class="feather icon-search feather-search"></i
                ></a>
                <div class="dataTables_filter">
                  <label>
                    <input
                      type="search"
                      class="form-control form-control-sm width-auto"
                      placeholder="Search"
                    /></label>
                  </div>
                </div>
              </div>

              <div
                class="dropdown-menu search-dropdown"
                aria-labelledby="dropdownMenuClickable"
                >
                <div class="search-info">
                  <h6>
                    <span><i  class="feather icon-search feather-16"></i></span
                    >Recent Searches
                  </h6>
                  <ul class="search-tags">
                    <li><a href="javascript:void(0);">Filename</a></li>
                    <li><a href="javascript:void(0);">Excel Files</a></li>
                  </ul>
                </div>
                <div class="search-info">
                  <h6>Search Results</h6>
                  <p class="d-flex align-items-center justify-content-between">
                    Sportsmodel.pdf
                    <i  class="feather icon-chevron-right feather-16"></i>
                  </p>
                  <p class="d-flex align-items-center justify-content-between">
                    Projectdetails.xls<i

                    class="feather icon-chevron-right feather-16"
                  ></i>
                </p>
              </div>
            </div>
          </div>
          <div
            class="d-sm-flex align-items-center col-lg-6 col-md-6 justify-content-end"
            >
            <div class="form-sort me-3">
              <i class="feather icon-filter fa-filter"></i>

              <mat-select
                [(ngModel)]="selectedValue2"
                [ngModelOptions]="{ standalone: true }"
                class="select space-select"
                placeholder="Recent"
                >
                @for (data of selectedList2; track data) {
                  <mat-option
                    [value]="data.value"
                    >
                    {{ data.value }}
                  </mat-option>
                }
              </mat-select>
            </div>
            <div class="form-sort">
              <i class="feather icon-file-text fa-filter"></i>

              <mat-select
                [(ngModel)]="selectedValue3"
                [ngModelOptions]="{ standalone: true }"
                class="select space-select"
                placeholder="All File types"
                >
                @for (data of selectedList3; track data) {
                  <mat-option
                    [value]="data.value"
                    >
                    {{ data.value }}
                  </mat-option>
                }
              </mat-select>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Accordian -->
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item seprator-lg">
        <h4 class="accordion-header d-flex align-items-center justify-content-between" id="panelsStayOpen-headingOne">Folders
          <a href="javascript:void(0);" class="accordion-button a-auto" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"></a>
        </h4>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <div class="row mt-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/folder.svg" alt="Folder" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                    </div>
                    <div class="dropdown">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                        class="dropset">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan my-3">
                    <label>Project plan</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">154 KB</li>
                      <li class="d-flex align-items-center">8 Files</li>
                    </ul>
                  </div>
                  <div class="d-flex align-items-center justify-content-between avatar-wrap">
                    <div class="group-avatar">
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="assets/img/avatar/avatar-2.jpg" alt="Avatar"></a>
                      </span>
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="assets/img/avatar/avatar-1.jpg" alt="Avatar"></a>
                      </span>
                      <span class="count">
                        <a href="javascript:void(0);">1 Members</a>
                      </span>
                    </div>
                    <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/folder.svg" alt="Folder" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                    </div>
                    <div class="dropdown">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                        class="dropset">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan my-3">
                    <label>Project plan</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">154 KB</li>
                      <li class="d-flex align-items-center">8 Files</li>
                    </ul>
                  </div>
                  <div class="d-flex align-items-center justify-content-between avatar-wrap">
                    <div class="group-avatar">
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="assets/img/avatar/avatar-6.jpg" alt="Avatar"></a>
                      </span>
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="assets/img/avatar/avatar-14.jpg" alt="Avatar"></a>
                      </span>
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 3" data-bs-original-title="Member 3"><img src="assets/img/avatar/avatar-15.jpg" alt="Avatar"></a>
                      </span>
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 4" data-bs-original-title="Member 4"><img src="assets/img/avatar/avatar-16.jpg" alt="Avatar"></a>
                      </span>
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 5" data-bs-original-title="Member 5"><img src="assets/img/avatar/avatar-17.jpg" alt="Avatar"></a>
                      </span>
                      <span class="count">
                        <a href="javascript:void(0);">+9 Members</a>
                      </span>
                    </div>
                    <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/folder.svg" alt="Folder" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                    </div>
                    <div class="dropdown">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                        class="dropset">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan my-3">
                    <label>Project plan</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">154 KB</li>
                      <li class="d-flex align-items-center">8 Files</li>
                    </ul>
                  </div>
                  <div class="d-flex align-items-center justify-content-between avatar-wrap">
                    <div class="group-avatar">
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="assets/img/avatar/avatar-18.jpg" alt="Avatar"></a>
                      </span>
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="assets/img/avatar/avatar-5.jpg" alt="Avatar"></a>
                      </span>
                      <span class="count">
                        <a href="javascript:void(0);">
                        +2 Members</a>
                      </span>
                    </div>
                    <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/folder.svg" alt="Folder" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                    </div>
                    <div class="dropdown">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                        class="dropset">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan my-3">
                    <label>Project plan</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">154 KB</li>
                      <li class="d-flex align-items-center">8 Files</li>
                    </ul>
                  </div>
                  <div class="d-flex align-items-center justify-content-between avatar-wrap">
                    <div class="group-avatar">
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="assets/img/avatar/avatar-2.jpg" alt="Avatar"></a>
                      </span>
                      <span class="avatar">
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="assets/img/avatar/avatar-1.jpg" alt="Avatar"></a>
                      </span>
                      <span class="count">
                        <a href="javascript:void(0);">1 Members</a>
                      </span>
                    </div>
                    <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item seprator-lg">
        <h4 class="accordion-header d-flex align-items-center justify-content-between" id="panelsStayOpen-headingTwo">Files
          <a href="javascript:void(0);" class="accordion-button w-auto" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          </a>
        </h4>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            <div class="row mt-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/pdf-02.svg" alt="File" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">hsa.pdf</a></h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                      <div class="dropdown">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                          class="dropset">
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan mt-3">
                    <label>Last edited  12 Jul</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">15 Memebers</li>
                      <li class="d-flex align-items-center">8 5 MB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/pdf-02.svg" alt="File" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Haird.pdf</a></h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                      <div class="dropdown">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                          class="dropset">
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan mt-3">
                    <label>Last edited  14 Jul</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">09 Memebers</li>
                      <li class="d-flex align-items-center">4 MB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/xls.svg" alt="File" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Estimation.xls</a></h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                      <div class="dropdown">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                          class="dropset">
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan mt-3">
                    <label>Last edited  14 Jul</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">05 Memebers</li>
                      <li class="d-flex align-items-center">500 KB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/pdf-02.svg" alt="File" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">hsa.pdf</a></h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                      <div class="dropdown">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                          class="dropset">
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan mt-3">
                    <label>Last edited  12 Jul</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">15 Memebers</li>
                      <li class="d-flex align-items-center">8 5 MB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/pdf-02.svg" alt="File" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Haird.pdf</a></h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                      <div class="dropdown">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                          class="dropset">
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan mt-3">
                    <label>Last edited  14 Jul</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">09 Memebers</li>
                      <li class="d-flex align-items-center">4 MB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="folders p-3 mb-3">
                  <div class="d-flex align-items-center justify-content-between head">
                    <div class="d-flex align-items-center">
                      <img src="assets/img/icons/xls.svg" alt="File" class="me-2">
                      <h6 class="popup-toggle"><a href="javascript:void(0);">Estimation.xls</a></h6>
                    </div>
                    <div class="d-flex align-items-center">
                      <a  href="javascript:void(0);" ><i class="fa fa-star me-2"></i></a>
                      <div class="dropdown">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                          class="dropset">
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li><a href="javascript:void(0);" class="dropdown-item">Details</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Share</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Copy</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Move</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Download</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Rename</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Archeived</a></li>
                          <li><a href="javascript:void(0);" class="dropdown-item">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start project-plan mt-3">
                    <label>Last edited  14 Jul</label>
                    <ul class="d-flex">
                      <li class="d-flex align-items-center">05 Memebers</li>
                      <li class="d-flex align-items-center">500 KB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Accordian -->

    <div class="card p-4 bg-white all-files mb-0">
      <div class="seprator-lg d-lg-flex align-items-center justify-content-between">
        <h4>All Files</h4>
        <div class="d-sm-flex align-items-center btn-grp">
          <a href="javascript:void(0);" class="btn btn-primary me-2"><i  class="feather icon-list feather-20"></i></a>
          <a href="javascript:void(0);" class="btn btn-outline-secondary me-2"><i  class="feather icon-layout feather-20"></i></a>
          <a href="javascript:void(0);" class="btn btn-outline-secondary me-2"><i  class="feather icon-grid feather-20"></i></a>

          <div class="icon-select">
            <span class="icon"><i  class="feather icon-calendar feather-16"></i></span>
            <mat-select
              [(ngModel)]="selectedValue4"
              [ngModelOptions]="{ standalone: true }"
              class="select space-select"
              placeholder="Last Modified"
              >
              @for (data of selectedList4; track data) {
                <mat-option
                  [value]="data.value"
                  >
                  {{ data.value }}
                </mat-option>
              }
            </mat-select>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"
          matSortDirection="asc" matSortDisableClear>
          <thead>
            <tr>
              <th>
               <label class="checkboxs" (click)="selectAll(initChecked)">
                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>
                      <span class="checkmarks"></span>
                    </label>
              </th>
              <th mat-sort-header="name">Name</th>
              <th mat-sort-header="lastmodified">Last Modified</th>
              <th mat-sort-header="size">Size</th>
              <th mat-sort-header="owned">Owned Memebr</th>
              <th mat-sort-header="action">Action</th>
            </tr>
          </thead>
          <tbody>
            @for (data of tableData; track data; let i = $index) {
              <tr>
                <td>
                      <label class="checkboxs" (click)="selectAll(initChecked)">
                        <input type="checkbox"  [(ngModel)]="initChecked"/>
                        <span class="checkmarks"></span>
                      </label>
                    </td>
                <td class="productimgname">
                  <a [routerLink]="routes.productList" class="product-img d-flex align-items-center">
                    <img [src]="data.folderimg" alt="Product" class="me-2">
                    <span>{{data.name}}</span>
                  </a>
                </td>
                <td>{{data.lastModified}} <br>{{data.modified}}</td>
                <td>{{data.size}}</td>
                <td>
                  <a href="javascript:void(0);" class="product-img d-flex align-items-center">
                    <img [src]="data.memberimg" alt="Product" class="me-2 rounded-circle">
                    <span>{{data.ownedMember}}</span>
                  </a>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" ><i  class="feather icon-star feather-16 me-2 color-primary"></i></a>
                    <div class="dropdown">
                      <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" class="dropset">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="javascript:void(0);" class="dropdown-item"><i  class="feather icon-trash-2 feather-14 me-2"></i>Permanent Delete</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item"><i  class="feather icon-edit feather-14 me-2"></i>Restore File</a></li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            }


          </tbody>
        </table>

      </div>
      <app-custom-pagination></app-custom-pagination>

    </div>

  </div>
</div>` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileFavouritesComponent, { className: "FileFavouritesComponent", filePath: "src/app/features/pages/application/file/file-favourites/file-favourites.component.ts", lineNumber: 25 });
})();
export {
  FileFavouritesComponent
};
//# sourceMappingURL=chunk-QV3T4JXD.js.map
