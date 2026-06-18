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
import "./chunk-FAMT7JRV.js";
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

// src/app/features/pages/application/file/file-manager-deleted/file-manager-deleted.component.ts
var _c0 = () => ({ standalone: true });
function FileManagerDeletedComponent_For_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
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
function FileManagerDeletedComponent_For_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
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
function FileManagerDeletedComponent_For_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 67);
    \u0275\u0275listener("click", function FileManagerDeletedComponent_For_158_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectAll(ctx_r3.initChecked));
    });
    \u0275\u0275elementStart(3, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function FileManagerDeletedComponent_For_158_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.initChecked, $event) || (ctx_r3.initChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 80)(6, "a", 81);
    \u0275\u0275element(7, "img", 82);
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
    \u0275\u0275elementStart(16, "td")(17, "a", 83);
    \u0275\u0275element(18, "img", 84);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "div", 7)(23, "a", 26);
    \u0275\u0275element(24, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 10)(26, "a", 86);
    \u0275\u0275element(27, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul", 14)(29, "li")(30, "a", 16);
    \u0275\u0275element(31, "i", 88);
    \u0275\u0275text(32, "Permanent Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 16);
    \u0275\u0275element(35, "i", 89);
    \u0275\u0275text(36, "Restore File");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.initChecked);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r3.routes.productList);
    \u0275\u0275advance();
    \u0275\u0275property("src", data_r5.folderimg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r5.lastModified, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.modified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.size);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", data_r5.memberimg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.ownedMember);
  }
}
var FileManagerDeletedComponent = class _FileManagerDeletedComponent {
  data;
  pagination;
  router;
  initChecked = false;
  routes = routes;
  selectedValue4 = "";
  selectedValue5 = "";
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
  constructor(data, pagination, router) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.fileManagerDeleted) {
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
  selectedList4 = [
    { value: "Last Modified" },
    { value: "Last Modified by Me" },
    { value: "Last Opened by Me" }
  ];
  selectedList5 = [
    { value: "All File types" },
    { value: "Folders" },
    { value: "PDF" },
    { value: "Images" },
    { value: "Videos" },
    { value: "Audios" },
    { value: "Excel" }
  ];
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
  static \u0275fac = function FileManagerDeletedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileManagerDeletedComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileManagerDeletedComponent, selectors: [["app-file-manager-deleted"]], decls: 167, vars: 14, consts: [[1, "page-header", "page-add-notes", "d-flex", "align-items-center", "justify-content-between"], [1, "add-item", "d-flex", "align-items-center"], [1, "page-title"], [1, "row"], [1, "col-lg-3", "col-md-12", "sidebars-right", "theiaStickySidebar", "section-bulk-widget"], [1, "stickybar"], [1, "card", "file-manager-sidebar", "mb-0"], [1, "d-flex", "align-items-center"], [1, "me-2", "d-flex", "align-items-center"], [1, "feather", "icon-folder", "feather-20"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropset", "btn", "btn-primary", "mb-3", "btn-icon"], [1, "me-1", "btn-icon"], [1, "ti", "ti-circle-plus", "feather-16"], [1, "dropdown-menu"], ["data-bs-toggle", "modal", "data-bs-target", "#upload-file"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "feather", "icon-upload-cloud", "feather-16", "me-2"], ["data-bs-toggle", "modal", "data-bs-target", "#upload-folder"], [1, "feather", "icon-folder", "feather-16", "me-2"], ["data-bs-toggle", "modal", "data-bs-target", "#create-folder"], [1, "feather", "icon-folder-minus", "feather-16", "me-2"], [1, "mb-5"], [3, "routerLink"], [1, "me-2", "btn-icon"], [1, "feather", "icon-file-text", "feather-16"], ["href", "javascript:void(0);"], [1, "feather", "icon-star", "feather-16"], [1, "feather", "icon-send", "feather-16"], [1, "active", 3, "routerLink"], [1, "feather", "icon-file", "feather-16"], [1, "feather", "icon-clock", "feather-16"], [1, "feather", "icon-target", "feather-16"], [1, "feather", "icon-trash-2", "feather-16"], [1, "feather", "icon-settings", "feather-16"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "feather", "icon-hard-drive", "feather-16"], [1, "progress", "my-2"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar", "bg-danger", 2, "width", "75%"], [1, "space-manager", "p-4"], ["src", "assets/img/icons/half-circle.svg", "alt", "Folder"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-primary"], [1, "ms-1", "btn-icon"], [1, "feather", "icon-reapeat", "feather-16"], [1, "col-lg-9", "budget-role-notes"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "justify-content-between", "delete-alert"], [1, "mb-0", "text-danger", "d-flex", "align-items-center"], [1, "feather", "icon-info", "feather-16", "me-2"], ["href", "javascript:void(0);", "id", "file-delete", 1, "btn", "btn-secondary"], [1, "feather", "icon-trash-2", "feather-16", "me-1"], [1, "card", "p-4", "bg-white", "all-files", "mb-0"], [1, "seprator-lg", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "btn-grp"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "me-2"], [1, "feather", "icon-list", "feather-20"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-secondary", "me-2"], [1, "feather", "icon-layout", "feather", "icon-layout", "feather-20"], [1, "feather", "icon-grid", "feather-20"], [1, "icon-select", "me-2"], [1, "icon"], [1, "feather", "icon-calendar", "feather-16"], ["placeholder", "Last Modified", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "icon-select"], ["placeholder", "All File types", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "lastmodified"], ["mat-sort-header", "size"], ["mat-sort-header", "owned"], ["mat-sort-header", "action"], [1, "deleted-info", "text-center", "p-4"], [1, "bin-bg", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/trash-bin.svg", "alt", "img", 1, "me-2"], [1, "mt-3"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "productimgname"], [1, "product-img", "d-flex", "align-items-center", 3, "routerLink"], ["alt", "Product", 1, "me-2", 3, "src"], ["href", "javascript:void(0);", 1, "product-img", "d-flex", "align-items-center"], ["alt", "Product", 1, "me-2", "rounded-circle", 3, "src"], [1, "feather", "icon-star", "feather-16", "me-2", "color-primary"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropset"], [1, "fa", "fa-ellipsis-v"], [1, "feather", "icon-trash-2", "feather-14", "me-2"], [1, "feather", "icon-edit", "feather-14", "me-2"]], template: function FileManagerDeletedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Deleted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your Deleted File");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "aside", 6)(11, "h5", 7)(12, "span", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, "Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "a", 11)(17, "span", 12);
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, "New ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ul", 14)(21, "li", 15)(22, "a", 16);
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275text(24, "Upload File");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li", 18)(26, "a", 16);
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275text(28, "Upload Folder");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li", 20)(30, "a", 16);
      \u0275\u0275element(31, "i", 21);
      \u0275\u0275text(32, "Create folder");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "ul", 22)(34, "li")(35, "a", 23)(36, "span", 24);
      \u0275\u0275element(37, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, "My Files");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 26)(41, "span", 24);
      \u0275\u0275element(42, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, "Google Drive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 26)(46, "span", 24);
      \u0275\u0275element(47, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, "Dropbox");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 29)(51, "span", 24);
      \u0275\u0275element(52, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, "Shared With Me");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 23)(56, "span", 24);
      \u0275\u0275element(57, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(58, "Document");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 23)(61, "span", 24);
      \u0275\u0275element(62, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, "Recent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 23)(66, "span", 24);
      \u0275\u0275element(67, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, "Favourites");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 23)(71, "span", 24);
      \u0275\u0275element(72, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(73, "Archived");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 23)(76, "span", 24);
      \u0275\u0275element(77, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(78, "Deleted");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "li")(80, "a", 26)(81, "span", 24);
      \u0275\u0275element(82, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, "Settings");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 35)(85, "div", 7)(86, "span", 24);
      \u0275\u0275element(87, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "h6");
      \u0275\u0275text(89, "Storage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "70%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 37);
      \u0275\u0275element(93, "div", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span");
      \u0275\u0275text(95, "78.5 GB of 1 TB Free Used");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 39);
      \u0275\u0275element(97, "img", 40);
      \u0275\u0275elementStart(98, "h6")(99, "a", 26);
      \u0275\u0275text(100, "Need More Space?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "p");
      \u0275\u0275text(102, "Upgrade storage for 2TB for $60 per month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "a", 41);
      \u0275\u0275text(104, "Upgrade");
      \u0275\u0275elementStart(105, "span", 42);
      \u0275\u0275element(106, "i", 43);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(107, "div", 44)(108, "div", 45)(109, "p", 46);
      \u0275\u0275element(110, "i", 47);
      \u0275\u0275text(111, "Items in trash will be deleted forever after 30 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "a", 48);
      \u0275\u0275element(113, "i", 49);
      \u0275\u0275text(114, "Empty Trash");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 50)(116, "div", 51)(117, "h4");
      \u0275\u0275text(118, "All Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 52)(120, "a", 53);
      \u0275\u0275element(121, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "a", 55);
      \u0275\u0275element(123, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "a", 55);
      \u0275\u0275element(125, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 58)(127, "span", 59);
      \u0275\u0275element(128, "i", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "mat-select", 61);
      \u0275\u0275twoWayListener("ngModelChange", function FileManagerDeletedComponent_Template_mat_select_ngModelChange_129_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(130, FileManagerDeletedComponent_For_131_Template, 2, 2, "mat-option", 62, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 63)(133, "span", 59);
      \u0275\u0275element(134, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "mat-select", 64);
      \u0275\u0275twoWayListener("ngModelChange", function FileManagerDeletedComponent_Template_mat_select_ngModelChange_135_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(136, FileManagerDeletedComponent_For_137_Template, 2, 2, "mat-option", 62, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "div", 65)(139, "table", 66);
      \u0275\u0275listener("matSortChange", function FileManagerDeletedComponent_Template_table_matSortChange_139_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(140, "thead")(141, "tr")(142, "th")(143, "label", 67);
      \u0275\u0275listener("click", function FileManagerDeletedComponent_Template_label_click_143_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(144, "input", 68);
      \u0275\u0275twoWayListener("ngModelChange", function FileManagerDeletedComponent_Template_input_ngModelChange_144_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(145, "span", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "th", 70);
      \u0275\u0275text(147, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "th", 71);
      \u0275\u0275text(149, "Last Modified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "th", 72);
      \u0275\u0275text(151, "Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th", 73);
      \u0275\u0275text(153, "Owned Memebr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "th", 74);
      \u0275\u0275text(155, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "tbody");
      \u0275\u0275repeaterCreate(157, FileManagerDeletedComponent_For_158_Template, 37, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(159, "app-custom-pagination");
      \u0275\u0275elementStart(160, "div", 75)(161, "div", 76);
      \u0275\u0275element(162, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "h6", 78);
      \u0275\u0275text(164, "Trash is Empty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "p");
      \u0275\u0275text(166, "Items moved to the trash will be deleted forever after 30 days");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
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
      \u0275\u0275advance(54);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue4);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList4);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue5);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList5);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CustomPaginationComponent, RouterLink, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, DragDropModule, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileManagerDeletedComponent, [{
    type: Component,
    args: [{ selector: "app-file-manager-deleted", imports: [CustomPaginationComponent, RouterLink, FormsModule, DragDropModule, MatSortModule, MatSelectModule], template: '<div class="page-header page-add-notes d-flex align-items-center justify-content-between">\n  <div class="add-item d-flex align-items-center">\n    <div class="page-title">\n      <h4>Deleted</h4>\n      <h6>Manage your Deleted File</h6>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-lg-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget">\n    <div class="stickybar">\n      <aside class="card file-manager-sidebar mb-0">\n        <h5 class="d-flex align-items-center"><span class="me-2 d-flex align-items-center"><i\n        class="feather icon-folder feather-20"></i></span>Files</h5>\n        <div class="dropdown">\n          <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"\n            class="dropset btn btn-primary mb-3 btn-icon">\n            <span class="me-1 btn-icon"><i class="ti ti-circle-plus feather-16"></i></span>New\n          </a>\n          <ul class="dropdown-menu">\n            <li data-bs-toggle="modal" data-bs-target="#upload-file"><a href="javascript:void(0);"\n              class="dropdown-item"><i class="feather icon-upload-cloud feather-16 me-2"></i>Upload\n            File</a></li>\n            <li data-bs-toggle="modal" data-bs-target="#upload-folder"><a href="javascript:void(0);"\n              class="dropdown-item"><i class="feather icon-folder feather-16 me-2"></i>Upload Folder</a>\n            </li>\n            <li data-bs-toggle="modal" data-bs-target="#create-folder"><a href="javascript:void(0);"\n              class="dropdown-item"><i class="feather icon-folder-minus feather-16 me-2"></i>Create\n            folder</a></li>\n          </ul>\n        </div>\n\n        <ul class="mb-5">\n          <li><a [routerLink] = "routes.fileManager"><span class="me-2 btn-icon"><i\n          class="feather icon-file-text feather-16"></i></span>My Files</a></li>\n          <li><a href="javascript:void(0);"><span class="me-2 btn-icon"><i\n          class="feather icon-star  feather-16"></i></span>Google Drive</a></li>\n          <li><a href="javascript:void(0);"><span class="me-2 btn-icon"><i\n          class="feather icon-send feather-16"></i></span>Dropbox</a></li>\n          <li><a [routerLink] = "routes.fileShared" class="active"><span class="me-2 btn-icon"><i\n          class="feather icon-file feather-16"></i></span>Shared With Me</a></li>\n          <li><a [routerLink] = "routes.fileDocument"><span class="me-2 btn-icon"><i\n          class="feather icon-file feather-16"></i></span>Document</a></li>\n          <li><a [routerLink] = "routes.fileRecent"><span class="me-2 btn-icon"><i\n          class="feather icon-clock feather-16"></i></span>Recent</a></li>\n          <li><a [routerLink] = "routes.fileFavorites"><span class="me-2 btn-icon"><i\n          class="feather icon-star feather-16"></i></span>Favourites</a></li>\n          <li><a [routerLink] = "routes.fileArchived"><span class="me-2 btn-icon"><i\n          class="feather icon-target feather-16"></i></span>Archived</a></li>\n          <li><a [routerLink] = "routes.fileManagerDeleted"><span class="me-2 btn-icon"><i\n          class="feather icon-trash-2 feather-16"></i></span>Deleted</a></li>\n          <li><a href="javascript:void(0);"><span class="me-2 btn-icon"><i\n          class="feather icon-settings feather-16"></i></span>Settings</a></li>\n        </ul>\n        <div class="d-flex align-items-center justify-content-between">\n          <div class="d-flex align-items-center">\n            <span class="me-2 btn-icon"><i class="feather icon-hard-drive  feather-16"></i></span>\n            <h6>Storage</h6>\n          </div>\n          <span>70%</span>\n        </div>\n        <div class="progress my-2">\n          <div class="progress-bar progress-bar bg-danger" role="progressbar" style="width: 75%"\n          aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>\n        </div>\n        <span>78.5 GB of 1 TB Free Used</span>\n        <div class="space-manager p-4">\n          <img src="assets/img/icons/half-circle.svg" alt="Folder">\n          <h6><a href="javascript:void(0);">Need More Space?</a></h6>\n          <p>Upgrade storage for 2TB for $60 per month</p>\n          <a href="javascript:void(0);" class="btn btn-outline-primary">Upgrade<span class="ms-1 btn-icon"><i\n          class="feather icon-reapeat feather-16"></i></span></a>\n        </div>\n      </aside>\n    </div>\n\n  </div>\n\n  <div class="col-lg-9 budget-role-notes">\n\n    <div class="alert alert-danger d-flex align-items-center justify-content-between delete-alert" role="alert">\n      <p class="mb-0 text-danger d-flex align-items-center"><i  class="feather icon-info feather-16 me-2"></i>Items in trash will be deleted forever after 30 days</p> <a  href="javascript:void(0);" class="btn btn-secondary" id="file-delete"><i  class="feather icon-trash-2 feather-16 me-1"></i>Empty Trash</a>\n    </div>\n    <div class="card p-4 bg-white all-files mb-0">\n      <div class="seprator-lg d-sm-flex align-items-center justify-content-between">\n        <h4>All Files</h4>\n        <div class="d-flex align-items-center btn-grp">\n          <a href="javascript:void(0);" class="btn btn-primary me-2"><i  class="feather icon-list feather-20"></i></a>\n          <a href="javascript:void(0);" class="btn btn-outline-secondary me-2"><i  class="feather icon-layout feather icon-layout feather-20"></i></a>\n          <a href="javascript:void(0);" class="btn btn-outline-secondary me-2"><i  class="feather icon-grid feather-20"></i></a>\n\n          <div class="icon-select me-2">\n            <span class="icon"><i  class="feather icon-calendar feather-16"></i></span>\n            <mat-select\n              [(ngModel)]="selectedValue4"\n              [ngModelOptions]="{ standalone: true }"\n              class="select space-select"\n              placeholder="Last Modified"\n              >\n              @for (data of selectedList4; track data) {\n                <mat-option\n                  [value]="data.value"\n                  >\n                  {{ data.value }}\n                </mat-option>\n              }\n            </mat-select>\n          </div>\n\n          <div class="icon-select">\n            <span class="icon"><i  class="feather icon-file-text feather-16"></i></span>\n           \n            <mat-select\n            [(ngModel)]="selectedValue5"\n            [ngModelOptions]="{ standalone: true }"\n            class="select space-select"\n            placeholder="All File types"\n            >\n            @for (data of selectedList5; track data) {\n              <mat-option\n                [value]="data.value"\n                >\n                {{ data.value }}\n              </mat-option>\n            }\n          </mat-select>\n          </div>\n        </div>\n      </div>\n\n      <div class="table-responsive">\n        <table class="table datanew" (matSortChange)="sortData($event)" matSort matSortActive="Sno"\n          matSortDirection="asc" matSortDisableClear>\n          <thead>\n            <tr>\n              <th>\n               <label class="checkboxs" (click)="selectAll(initChecked)">\n                      <input type="checkbox" id="select-all" [(ngModel)]="initChecked"/>\n                      <span class="checkmarks"></span>\n                    </label>\n              </th>\n              <th mat-sort-header="name">Name</th>\n              <th mat-sort-header="lastmodified">Last Modified</th>\n              <th mat-sort-header="size">Size</th>\n              <th mat-sort-header="owned">Owned Memebr</th>\n              <th mat-sort-header="action">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (data of tableData; track data; let i = $index) {\n              <tr>\n                <td>\n                      <label class="checkboxs" (click)="selectAll(initChecked)">\n                        <input type="checkbox"  [(ngModel)]="initChecked"/>\n                        <span class="checkmarks"></span>\n                      </label>\n                    </td>\n                <td class="productimgname">\n                  <a [routerLink]="routes.productList" class="product-img d-flex align-items-center">\n                    <img [src]="data.folderimg" alt="Product" class="me-2">\n                    <span>{{data.name}}</span>\n                  </a>\n                </td>\n                <td>{{data.lastModified}} <br>{{data.modified}}</td>\n                <td>{{data.size}}</td>\n                <td>\n                  <a href="javascript:void(0);" class="product-img d-flex align-items-center">\n                    <img [src]="data.memberimg" alt="Product" class="me-2 rounded-circle">\n                    <span>{{data.ownedMember}}</span>\n                  </a>\n                </td>\n                <td>\n                  <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" ><i  class="feather icon-star feather-16 me-2 color-primary"></i></a>\n                    <div class="dropdown">\n                      <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" class="dropset">\n                        <i class="fa fa-ellipsis-v"></i>\n                      </a>\n                      <ul class="dropdown-menu">\n                        <li><a href="javascript:void(0);" class="dropdown-item"><i  class="feather icon-trash-2 feather-14 me-2"></i>Permanent Delete</a></li>\n                        <li><a href="javascript:void(0);" class="dropdown-item"><i class="feather icon-edit feather-14 me-2"></i>Restore File</a></li>\n                      </ul>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n       \n      </div>\n      <app-custom-pagination></app-custom-pagination>\n      <div class="deleted-info text-center p-4">\n        <div class="bin-bg d-flex align-items-center justify-content-center">\n          <img src="assets/img/icons/trash-bin.svg" class="me-2" alt="img">\n        </div>\n        <h6 class="mt-3">Trash is Empty</h6>\n        <p>Items moved to the trash will be deleted forever after 30 days</p>\n      </div>\n\n    </div>\n\n  </div>\n</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileManagerDeletedComponent, { className: "FileManagerDeletedComponent", filePath: "src/app/features/pages/application/file/file-manager-deleted/file-manager-deleted.component.ts", lineNumber: 24 });
})();
export {
  FileManagerDeletedComponent
};
//# sourceMappingURL=chunk-2YWTFI6B.js.map
