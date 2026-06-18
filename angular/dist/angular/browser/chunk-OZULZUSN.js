import {
  DragDropModule
} from "./chunk-CG4KJCH6.js";
import {
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
  FormsModule,
  NgControlStatusGroup,
  NgForm,
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
  ɵɵlistener,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/file/file-manager/file-manager.component.ts
function FileManagerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function FileManagerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
var FileManagerComponent = class _FileManagerComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
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
        if (this.router.url == this.routes.fileManager) {
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
  // customOptions: OwlOptions = {
  //   margin: 10,
  //   dots: false,
  //   nav: true,
  //   navText: [
  //     '<i class="fas fa-chevron-left"></i>',
  //     '<i class="fas fa-chevron-right"></i>',
  //   ],
  //   loop: false,
  //   touchDrag: false,
  //   mouseDrag: false,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     768: {
  //       items: 8,
  //     },
  //     1170: {
  //       items: 8,
  //     },
  //   },
  // };
  // customOptions1: OwlOptions = {
  //   margin: 10,
  //   dots: false,
  //   nav: true,
  //   navText: [
  //     '<i class="fas fa-chevron-left"></i>',
  //     '<i class="fas fa-chevron-right"></i>',
  //   ],
  //   loop: false,
  //   touchDrag: false,
  //   mouseDrag: false,
  //   responsive: {
  //     0: {
  //       items: 3,
  //     },
  //     768: {
  //       items: 8,
  //     },
  //     1170: {
  //       items: 8,
  //     },
  //   },
  // };
  // customOptions3: OwlOptions = {
  //   loop:true,
  //   margin:15,
  //   items:3,
  //   nav:true,
  //   dots: false,
  //   navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  //   responsive:{
  //     0: {
  //       items: 4
  //     },
  //     768: {
  //       items: 2
  //     },
  //     1200: {
  //       items: 3
  //     }
  //   }
  // };
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  // public player!: Plyr;        
  // ngOnInit() {
  //     this.player = new Plyr('#plyrID', { captions: { active: true } });
  // }
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
  static \u0275fac = function FileManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileManagerComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileManagerComponent, selectors: [["app-file-manager"]], decls: 1207, vars: 4, consts: [[1, "page-header", "page-add-notes", "border-0", "flex-sm-row", "flex-column"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "mb-0"], [1, "d-flex", "flex-sm-row", "flex-column", "align-items-sm-center", "align-items-start"], [1, "table-top-head", "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "search-set", "me-2"], [1, "search-input"], [1, "btn-searchset"], [1, "ti", "ti-search", "fs-14", "feather-search", "ps-2"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-sm", "py-0"], [1, "form-sort", "me-2"], ["placeholder", "All Files", 1, "custom-mat-select", "select"], ["value", "1"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_folder", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "row"], [1, "col-lg-3", "col-md-6", "d-flex"], [1, "card", "bg-lightdanger-gradient", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/dropbox.svg", "alt", "img"], [1, "ms-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-dots"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-folder-open", "me-2"], [1, "ti", "ti-trash", "me-1"], [1, "ti", "ti-status-change", "me-1"], [1, "progress", "progress-xs", "flex-grow-1", "mb-2"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-pink", "rounded", 2, "width", "20%"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-title", "mb-0"], [1, "card", "bg-lightpink-gradient", "flex-fill"], ["src", "assets/img/icons/drive.svg", "alt", "img"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-pink", "rounded", 2, "width", "80%"], [1, "card", "bg-lightsuccess-gradient", "flex-fill"], ["src", "assets/img/icons/cloud.svg", "alt", "img"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-purple", "rounded", 2, "width", "50%"], [1, "card", "bg-lightpurple-gradient", "flex-fill"], ["src", "assets/img/icons/storage.svg", "alt", "img"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-purple", "rounded", 2, "width", "20%"], [1, "col-xl-3"], [1, "theiaStickySidebar"], [1, "card"], [1, "card-body", "p-3"], [1, "shadow-xs", "p-2", "mb-3"], [1, "d-flex", "align-items-center", "overflow-hidden"], [1, "avatar", "avatar-md", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "rounded-circle"], [1, "overflow-hidden", "ms-2"], [1, "text-truncate"], [1, "fs-12", "text-truncate"], [1, "dropdown", "ms-2"], [1, "ti", "ti-edit", "me-1"], [1, "file-drop", "mb-3", "text-center"], [1, "avatar", "avatar-sm", "bg-primary", "text-white", "mb-2"], [1, "ti", "ti-upload", "fs-16"], [1, "mb-2"], [1, "fs-12", "mb-0"], ["type", "file"], [1, "files-list", "nav", "d-block"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "fw-medium", "p-2", "active"], [1, "ti", "ti-folder-up", "me-2"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "fw-medium", "p-2"], [1, "ti", "ti-star", "me-2"], [1, "ti", "ti-octahedron", "me-2"], [1, "ti", "ti-share-2", "me-2"], [1, "ti", "ti-file", "me-2"], [1, "ti", "ti-clock-hour-11", "me-2"], [1, "ti", "ti-music", "me-2"], [1, "badge", "badge-success", "mb-2"], ["id", "storage-chart"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "avatar", "avatar-md", "bg-info-transparent"], [1, "ti", "ti-music", "fs-20", "text-info"], [1, "text-title"], [1, "avatar", "avatar-md", "bg-warning-transparent"], [1, "fa-regular", "fa-file-audio", "fs-20", "text-warning"], [1, "avatar", "avatar-md", "bg-secondary-transparent"], [1, "ti", "ti-file-description", "fs-20", "text-secondary"], [1, "avatar", "avatar-md", "bg-purple-transparent"], [1, "ti", "ti-photo", "fs-20", "text-purple"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-0"], [1, "ti", "ti-file-type-doc", "fs-20", "text-pink"], [1, "card", "bg-black", "bg-01"], [1, "card-body", "text-center"], ["src", "assets/img/icons/upgrade.svg", "alt", "img", 1, "mb-3"], [1, "mb-3", "text-white"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "btn-sm"], [1, "ti", "ti-arrow-right", "ms-1"], [1, "col-xl-9"], [1, "border-bottom", "mb-4"], ["href", "javascript:void(0);", 1, "mb-2", "me-3", "fw-medium", "link-default"], ["href", "javascript:void(0);", 1, "mb-2", "fw-medium", "link-default"], [1, "row", "row-cols-xxl-5", "row-cols-xl-3", "row-cols-sm-3", "row-cols-1", "justify-content-center"], [1, "col", "d-flex"], [1, "card", "access-wrap", "flex-fill"], ["src", "assets/img/icons/file.svg", "alt", "img", 1, "mb-3"], [1, "mb-2", "fw-medium"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#preview"], [1, "badge", "badge-dark-transparent"], [1, "access-rate", "rating-select"], [1, "ti", "ti-star-filled", "filled"], ["src", "assets/img/icons/pdf-icon.svg", "alt", "img", 1, "mb-3"], [1, "ti", "ti-star"], ["src", "assets/img/icons/image.svg", "alt", "img", 1, "mb-3"], ["src", "assets/img/icons/xls-icon.svg", "alt", "img", 1, "mb-3"], ["src", "assets/img/icons/folder-icon.svg", "alt", "img", 1, "mb-3"], [1, "dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white"], [1, "col-lg-4"], [1, "video-wrap"], ["width", "100", "height", "100", "crossorigin", "", "playsinline", "", "poster", "assets/img/file-manager/video-01.jpg", 1, "js-player"], ["src", "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4", "type", "video/mp4"], [1, "d-flex", "align-items-center", "justify-content-between", "video-content"], [1, "fw-medium"], ["href", "javascript:void(0);", 1, "rating-select"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#preview", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-copy", "me-2"], [1, "ti", "ti-arrow-left-right", "me-2"], [1, "ti", "ti-user-plus", "me-2"], [1, "ti", "ti-share-3", "me-2"], [1, "dropdown-divider", "my-2"], [1, "ti", "ti-eye", "me-2"], [1, "ti", "ti-download", "me-2"], [1, "ti", "ti-trash-x", "me-2"], ["width", "100", "height", "100", "crossorigin", "", "playsinline", "", "poster", "assets/img/file-manager/video-02.jpg", 1, "js-player"], ["width", "100", "height", "100", "crossorigin", "", "playsinline", "", "poster", "assets/img/file-manager/video-03.jpg", 1, "js-player"], [1, "folder-wrap", "bg-white", "d-flex", "align-items-center", "justify-content-between"], [1, "text-warning", "fs-30"], [1, "ti", "ti-folder-filled"], [1, "mb-1"], [1, "fs-12", "mb-0", "me-2"], [1, "fs-12", "mb-0", "d-flex", "align-items-center"], [1, "ti", "ti-circle-filled", "fs-6", "me-2", "text-title"], [1, "avatar-list-stacked", "avatar-group-sm"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/profiles/avatar-19.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "img", 1, "border", "border-white"], [1, "files-wrap"], [1, "bg-transparent-dark", "p-5", "d-flex", "align-items-center", "justify-content-center", "files-icon"], [1, "ti", "ti-file-description", "fs-24", "text-title"], [1, "bg-white", "d-flex", "align-items-center", "justify-content-between", "p-3", "files-content"], [1, "ti", "ti-file-type-pdf", "fs-24", "text-title"], [1, "fw-medium", "text-truncate"], [1, "fa-regular", "fa-file-audio", "fs-24", "text-title"], [1, "dropdown", "mb-2", "me-2"], ["href", "javascript:void(0);", 1, "link-primary", "fw-medium", "mb-2"], [1, "custom-datatable-filter", "table-responsive", "mb-4"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md"], ["type", "checkbox", "id", "select-all", 1, "form-check-input"], ["type", "checkbox", 1, "form-check-input"], [1, "d-flex", "align-items-center", "file-name-icon"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#preview", 1, "avatar", "avatar-md", "bg-light"], ["src", "assets/img/icons/file-01.svg", "alt", "img", 1, "img-fluid"], [1, "text-title", "fw-medium", "mb-0"], ["src", "assets/img/profiles/avatar-27.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "border", "border-white"], [1, "rating-select", "me-2"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-dots", "fs-14"], [1, "dropdown-menu", "dropdown-menu-right", "p-3"], [1, "ti", "ti-trash", "me-2"], [1, "ti", "ti-edit-circle", "me-2"], ["src", "assets/img/icons/file-02.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/profiles/avatar-15.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/icons/file-03.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/profiles/avatar-03.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "border", "border-white"], ["href", "javascript:void(0);", 1, "avatar", "bg-primary", "avatar-rounded", "text-fixed-white"], ["src", "assets/img/icons/file-04.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/profiles/avatar-10.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/icons/file-05.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-14.jpg", "alt", "img", 1, "border", "border-white"], ["id", "add_folder", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "ti", "ti-x"], [1, "modal-body"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "add_member", 1, "modal", "fade"], [1, "position-relative", "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "form-check", "ps-0"], [1, "form-check-label", "member-check-list", "activate", "d-flex", "align-items-center", "justify-content-between", "p-2", "rounded", "mb-1"], [1, "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-md", "avatar-rounded"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "Img", 1, "me-2"], ["type", "checkbox", "checked", "", 1, "form-check-input"], [1, "form-check-label", "member-check-list", "d-flex", "align-items-center", "justify-content-between", "p-2", "rounded", "mb-1"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "Img", 1, "me-2"], ["src", "assets/img/profiles/avatar-03.jpg", "alt", "Img", 1, "me-2"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "Img", 1, "me-2"]], template: function FileManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "File Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6", 3);
      \u0275\u0275text(6, "Manage your files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "ul", 5)(9, "li")(10, "a", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 8);
      \u0275\u0275listener("click", function FileManagerComponent_Template_a_click_13_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(14, FileManagerComponent_Conditional_14_Template, 1, 0, "i", 9);
      \u0275\u0275conditionalCreate(15, FileManagerComponent_Conditional_15_Template, 1, 0, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "span", 12);
      \u0275\u0275element(19, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "label");
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 16)(24, "mat-select", 17)(25, "mat-option", 18);
      \u0275\u0275text(26, "All Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-option", 18);
      \u0275\u0275text(28, "Music ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-option", 18);
      \u0275\u0275text(30, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-option", 18);
      \u0275\u0275text(32, "Photos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 19)(34, "a", 20);
      \u0275\u0275element(35, "i", 21);
      \u0275\u0275text(36, "Create Folder");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 22)(38, "div", 23)(39, "div", 24)(40, "div", 25)(41, "div", 26)(42, "div", 27);
      \u0275\u0275element(43, "img", 28);
      \u0275\u0275elementStart(44, "h5", 29);
      \u0275\u0275text(45, "Dropbox");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 30)(47, "a", 31);
      \u0275\u0275element(48, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "ul", 33)(50, "li")(51, "a", 34);
      \u0275\u0275element(52, "i", 35);
      \u0275\u0275text(53, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 34);
      \u0275\u0275element(56, "i", 36);
      \u0275\u0275text(57, "Delete All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 34);
      \u0275\u0275element(60, "i", 37);
      \u0275\u0275text(61, "Reset");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(62, "div", 38);
      \u0275\u0275element(63, "div", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 40)(65, "p", 3);
      \u0275\u0275text(66, "200 Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 41);
      \u0275\u0275text(68, "28GB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(69, "div", 23)(70, "div", 42)(71, "div", 25)(72, "div", 26)(73, "div", 27);
      \u0275\u0275element(74, "img", 43);
      \u0275\u0275elementStart(75, "h5", 29);
      \u0275\u0275text(76, "Google Drive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 30)(78, "a", 31);
      \u0275\u0275element(79, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "ul", 33)(81, "li")(82, "a", 34);
      \u0275\u0275element(83, "i", 35);
      \u0275\u0275text(84, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "li")(86, "a", 34);
      \u0275\u0275element(87, "i", 36);
      \u0275\u0275text(88, "Delete All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 34);
      \u0275\u0275element(91, "i", 37);
      \u0275\u0275text(92, "Reset");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(93, "div", 38);
      \u0275\u0275element(94, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 40)(96, "p", 3);
      \u0275\u0275text(97, "144 Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p", 41);
      \u0275\u0275text(99, "54GB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(100, "div", 23)(101, "div", 45)(102, "div", 25)(103, "div", 26)(104, "div", 27);
      \u0275\u0275element(105, "img", 46);
      \u0275\u0275elementStart(106, "h5", 29);
      \u0275\u0275text(107, "Cloud Storage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 30)(109, "a", 31);
      \u0275\u0275element(110, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "ul", 33)(112, "li")(113, "a", 34);
      \u0275\u0275element(114, "i", 35);
      \u0275\u0275text(115, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "li")(117, "a", 34);
      \u0275\u0275element(118, "i", 36);
      \u0275\u0275text(119, "Delete All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "li")(121, "a", 34);
      \u0275\u0275element(122, "i", 37);
      \u0275\u0275text(123, "Reset");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(124, "div", 38);
      \u0275\u0275element(125, "div", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 40)(127, "p", 3);
      \u0275\u0275text(128, "144 Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p", 41);
      \u0275\u0275text(130, "54GB");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(131, "div", 23)(132, "div", 48)(133, "div", 25)(134, "div", 26)(135, "div", 27);
      \u0275\u0275element(136, "img", 49);
      \u0275\u0275elementStart(137, "h5", 29);
      \u0275\u0275text(138, "Internal Storage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 30)(140, "a", 31);
      \u0275\u0275element(141, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "ul", 33)(143, "li")(144, "a", 34);
      \u0275\u0275element(145, "i", 35);
      \u0275\u0275text(146, "Open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "li")(148, "a", 34);
      \u0275\u0275element(149, "i", 36);
      \u0275\u0275text(150, "Delete All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "li")(152, "a", 34);
      \u0275\u0275element(153, "i", 37);
      \u0275\u0275text(154, "Reset");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(155, "div", 38);
      \u0275\u0275element(156, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 40)(158, "p", 3);
      \u0275\u0275text(159, "144 Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p", 41);
      \u0275\u0275text(161, "54GB");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(162, "div", 22)(163, "div", 51)(164, "div", 52)(165, "div", 53)(166, "div", 54)(167, "div", 55)(168, "div", 40)(169, "div", 56)(170, "span", 57);
      \u0275\u0275element(171, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 59)(173, "h5", 60);
      \u0275\u0275text(174, "James Hong");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "p", 61);
      \u0275\u0275text(176, "Jnh343@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 62)(178, "a", 31);
      \u0275\u0275element(179, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "ul", 33)(181, "li")(182, "a", 34);
      \u0275\u0275element(183, "i", 63);
      \u0275\u0275text(184, "Edit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(185, "div", 64)(186, "span", 65);
      \u0275\u0275element(187, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "h6", 67);
      \u0275\u0275text(189, "Drop files here");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "p", 68);
      \u0275\u0275text(191, "Browse and chose the files you want to upload from your computer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(192, "input", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 70)(194, "a", 71);
      \u0275\u0275element(195, "i", 72);
      \u0275\u0275text(196, "All Folder / Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "a", 73);
      \u0275\u0275element(198, "i", 74);
      \u0275\u0275text(199, "Drive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "a", 73);
      \u0275\u0275element(201, "i", 75);
      \u0275\u0275text(202, "Dropbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "a", 73);
      \u0275\u0275element(204, "i", 76);
      \u0275\u0275text(205, "Shared with Me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "a", 73);
      \u0275\u0275element(207, "i", 77);
      \u0275\u0275text(208, "Document");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "a", 73);
      \u0275\u0275element(210, "i", 78);
      \u0275\u0275text(211, "Recent File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "a", 73);
      \u0275\u0275element(213, "i", 74);
      \u0275\u0275text(214, "Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "a", 73);
      \u0275\u0275element(216, "i", 79);
      \u0275\u0275text(217, "Media");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(218, "div", 53)(219, "div", 54)(220, "div", 26)(221, "h4", 67);
      \u0275\u0275text(222, "Storage Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "span", 80);
      \u0275\u0275text(224, "Used 77%");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(225, "div", 81);
      \u0275\u0275elementStart(226, "div", 82)(227, "div", 56)(228, "span", 83);
      \u0275\u0275element(229, "i", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "div", 59)(231, "h6", 60);
      \u0275\u0275text(232, "Music");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "p", 60);
      \u0275\u0275text(234, "35 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "p", 85);
      \u0275\u0275text(236, "8.5 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 82)(238, "div", 56)(239, "span", 86);
      \u0275\u0275element(240, "i", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 59)(242, "h6", 60);
      \u0275\u0275text(243, "Video");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "p", 60);
      \u0275\u0275text(245, "145 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(246, "p", 85);
      \u0275\u0275text(247, "2 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 82)(249, "div", 56)(250, "span", 88);
      \u0275\u0275element(251, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "div", 59)(253, "h6", 60);
      \u0275\u0275text(254, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "p", 60);
      \u0275\u0275text(256, "487 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(257, "p", 85);
      \u0275\u0275text(258, "24.5 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 82)(260, "div", 56)(261, "span", 90);
      \u0275\u0275element(262, "i", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "div", 59)(264, "h6", 60);
      \u0275\u0275text(265, "Photos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "p", 60);
      \u0275\u0275text(267, "35 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(268, "p", 85);
      \u0275\u0275text(269, "8.5 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 92)(271, "div", 56)(272, "span", 90);
      \u0275\u0275element(273, "i", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 59)(275, "h6", 60);
      \u0275\u0275text(276, "Other");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "p", 60);
      \u0275\u0275text(278, "487 Files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(279, "p", 85);
      \u0275\u0275text(280, "16.2 GB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(281, "div", 94)(282, "div", 95);
      \u0275\u0275element(283, "img", 96);
      \u0275\u0275elementStart(284, "h6", 97);
      \u0275\u0275text(285, "Upgrade to Pro for Unlimited Storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "a", 98);
      \u0275\u0275text(287, "Upgrade Now");
      \u0275\u0275element(288, "i", 99);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(289, "div", 100)(290, "div", 101)(291, "div", 26)(292, "h4", 67);
      \u0275\u0275text(293, "Quick Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div")(295, "a", 102);
      \u0275\u0275text(296, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "a", 103);
      \u0275\u0275text(298, "View All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(299, "div", 104)(300, "div", 105)(301, "div", 106)(302, "div", 95);
      \u0275\u0275element(303, "img", 107);
      \u0275\u0275elementStart(304, "h6", 108)(305, "a", 109);
      \u0275\u0275text(306, "Final.doc");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "span", 110);
      \u0275\u0275text(308, "2.4 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "span", 111);
      \u0275\u0275element(310, "i", 112);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(311, "div", 105)(312, "div", 106)(313, "div", 95);
      \u0275\u0275element(314, "img", 113);
      \u0275\u0275elementStart(315, "h6", 108)(316, "a", 109);
      \u0275\u0275text(317, "Marklist.pdf");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "span", 110);
      \u0275\u0275text(319, "2.4 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "span", 111);
      \u0275\u0275element(321, "i", 114);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "div", 105)(323, "div", 106)(324, "div", 95);
      \u0275\u0275element(325, "img", 115);
      \u0275\u0275elementStart(326, "h6", 108)(327, "a", 109);
      \u0275\u0275text(328, "Nature.png");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "span", 110);
      \u0275\u0275text(330, "2.4 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "span", 111);
      \u0275\u0275element(332, "i", 112);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(333, "div", 105)(334, "div", 106)(335, "div", 95);
      \u0275\u0275element(336, "img", 116);
      \u0275\u0275elementStart(337, "h6", 108)(338, "a", 109);
      \u0275\u0275text(339, "List.xlsx");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "span", 110);
      \u0275\u0275text(341, "2.4 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "span", 111);
      \u0275\u0275element(343, "i", 114);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(344, "div", 105)(345, "div", 106)(346, "div", 95);
      \u0275\u0275element(347, "img", 117);
      \u0275\u0275elementStart(348, "h6", 108)(349, "a", 109);
      \u0275\u0275text(350, "Group Photos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "span", 110);
      \u0275\u0275text(352, "2.4 GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "span", 111);
      \u0275\u0275element(354, "i", 114);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(355, "div", 101)(356, "div", 26)(357, "h4", 67);
      \u0275\u0275text(358, "Recent Videos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "div", 118)(360, "a", 119);
      \u0275\u0275text(361, " Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "ul", 33)(363, "li")(364, "a", 34);
      \u0275\u0275text(365, "Last 7 Days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "li")(367, "a", 34);
      \u0275\u0275text(368, "Last 1 month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(369, "li")(370, "a", 34);
      \u0275\u0275text(371, "Last 1 year");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(372, "div", 22)(373, "div", 120)(374, "div", 121)(375, "video", 122);
      \u0275\u0275element(376, "source", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div", 124)(378, "h6", 125)(379, "a", 109);
      \u0275\u0275text(380, "Inertia Movie");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(381, "div", 27)(382, "a", 126);
      \u0275\u0275element(383, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "div", 62)(385, "a", 31);
      \u0275\u0275element(386, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "ul", 33)(388, "li")(389, "a", 127);
      \u0275\u0275element(390, "i", 35);
      \u0275\u0275text(391, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "li")(393, "a", 34);
      \u0275\u0275element(394, "i", 128);
      \u0275\u0275text(395, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(396, "li")(397, "a", 34);
      \u0275\u0275element(398, "i", 129);
      \u0275\u0275text(399, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "li")(401, "a", 34);
      \u0275\u0275element(402, "i", 130);
      \u0275\u0275text(403, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "li")(405, "a", 34);
      \u0275\u0275element(406, "i", 131);
      \u0275\u0275text(407, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "li");
      \u0275\u0275element(409, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "li")(411, "a", 34);
      \u0275\u0275element(412, "i", 133);
      \u0275\u0275text(413, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "li")(415, "a", 34);
      \u0275\u0275element(416, "i", 134);
      \u0275\u0275text(417, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(418, "li")(419, "a", 34);
      \u0275\u0275element(420, "i", 135);
      \u0275\u0275text(421, "Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(422, "div", 120)(423, "div", 121)(424, "video", 136);
      \u0275\u0275element(425, "source", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "div", 124)(427, "h6", 125)(428, "a", 109);
      \u0275\u0275text(429, "2028 Nov 10.mp4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(430, "div", 27)(431, "a", 126);
      \u0275\u0275element(432, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "div", 62)(434, "a", 31);
      \u0275\u0275element(435, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "ul", 33)(437, "li")(438, "a", 127);
      \u0275\u0275element(439, "i", 35);
      \u0275\u0275text(440, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "li")(442, "a", 34);
      \u0275\u0275element(443, "i", 128);
      \u0275\u0275text(444, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "li")(446, "a", 34);
      \u0275\u0275element(447, "i", 129);
      \u0275\u0275text(448, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(449, "li")(450, "a", 34);
      \u0275\u0275element(451, "i", 130);
      \u0275\u0275text(452, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(453, "li")(454, "a", 34);
      \u0275\u0275element(455, "i", 131);
      \u0275\u0275text(456, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(457, "li");
      \u0275\u0275element(458, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "li")(460, "a", 34);
      \u0275\u0275element(461, "i", 133);
      \u0275\u0275text(462, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(463, "li")(464, "a", 34);
      \u0275\u0275element(465, "i", 134);
      \u0275\u0275text(466, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(467, "li")(468, "a", 34);
      \u0275\u0275element(469, "i", 135);
      \u0275\u0275text(470, "Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(471, "div", 120)(472, "div", 121)(473, "video", 137);
      \u0275\u0275element(474, "source", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "div", 124)(476, "h6", 125)(477, "a", 109);
      \u0275\u0275text(478, "AI Liquid Color");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(479, "div", 27)(480, "a", 126);
      \u0275\u0275element(481, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "div", 62)(483, "a", 31);
      \u0275\u0275element(484, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "ul", 33)(486, "li")(487, "a", 127);
      \u0275\u0275element(488, "i", 35);
      \u0275\u0275text(489, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "li")(491, "a", 34);
      \u0275\u0275element(492, "i", 128);
      \u0275\u0275text(493, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "li")(495, "a", 34);
      \u0275\u0275element(496, "i", 129);
      \u0275\u0275text(497, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "li")(499, "a", 34);
      \u0275\u0275element(500, "i", 130);
      \u0275\u0275text(501, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "li")(503, "a", 34);
      \u0275\u0275element(504, "i", 131);
      \u0275\u0275text(505, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(506, "li");
      \u0275\u0275element(507, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "li")(509, "a", 34);
      \u0275\u0275element(510, "i", 133);
      \u0275\u0275text(511, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(512, "li")(513, "a", 34);
      \u0275\u0275element(514, "i", 134);
      \u0275\u0275text(515, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(516, "li")(517, "a", 34);
      \u0275\u0275element(518, "i", 135);
      \u0275\u0275text(519, "Delete");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(520, "div", 101)(521, "div", 26)(522, "h4", 67);
      \u0275\u0275text(523, "Recent Folders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "div", 118)(525, "a", 119);
      \u0275\u0275text(526, " Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "ul", 33)(528, "li")(529, "a", 34);
      \u0275\u0275text(530, "Last 7 Days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "li")(532, "a", 34);
      \u0275\u0275text(533, "Last 1 month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "li")(535, "a", 34);
      \u0275\u0275text(536, "Last 1 year");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(537, "div", 22)(538, "div", 120)(539, "div", 138)(540, "div", 27)(541, "span", 139);
      \u0275\u0275element(542, "i", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "div", 29)(544, "h6", 141)(545, "a", 109);
      \u0275\u0275text(546, "Personal Assets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(547, "div", 27)(548, "p", 142);
      \u0275\u0275text(549, "2.4 GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "p", 143);
      \u0275\u0275element(551, "i", 144);
      \u0275\u0275text(552, "135\xA0files");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(553, "div", 27)(554, "div", 145)(555, "span", 146);
      \u0275\u0275element(556, "img", 147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "span", 146);
      \u0275\u0275element(558, "img", 148);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(559, "div", 62)(560, "a", 31);
      \u0275\u0275element(561, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "ul", 33)(563, "li")(564, "a", 127);
      \u0275\u0275element(565, "i", 35);
      \u0275\u0275text(566, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "li")(568, "a", 34);
      \u0275\u0275element(569, "i", 128);
      \u0275\u0275text(570, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(571, "li")(572, "a", 34);
      \u0275\u0275element(573, "i", 129);
      \u0275\u0275text(574, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(575, "li")(576, "a", 34);
      \u0275\u0275element(577, "i", 130);
      \u0275\u0275text(578, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "li")(580, "a", 34);
      \u0275\u0275element(581, "i", 131);
      \u0275\u0275text(582, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(583, "li");
      \u0275\u0275element(584, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "li")(586, "a", 34);
      \u0275\u0275element(587, "i", 133);
      \u0275\u0275text(588, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(589, "li")(590, "a", 34);
      \u0275\u0275element(591, "i", 134);
      \u0275\u0275text(592, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(593, "li")(594, "a", 34);
      \u0275\u0275element(595, "i", 135);
      \u0275\u0275text(596, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(597, "div", 120)(598, "div", 138)(599, "div", 27)(600, "span", 139);
      \u0275\u0275element(601, "i", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "div", 29)(603, "h6", 141)(604, "a", 109);
      \u0275\u0275text(605, "Document");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(606, "div", 27)(607, "p", 142);
      \u0275\u0275text(608, "4 GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "p", 143);
      \u0275\u0275element(610, "i", 144);
      \u0275\u0275text(611, "15\xA0files");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(612, "div", 27)(613, "div", 145)(614, "span", 146);
      \u0275\u0275element(615, "img", 149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "span", 146);
      \u0275\u0275element(617, "img", 150);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(618, "div", 62)(619, "a", 31);
      \u0275\u0275element(620, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(621, "ul", 33)(622, "li")(623, "a", 127);
      \u0275\u0275element(624, "i", 35);
      \u0275\u0275text(625, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(626, "li")(627, "a", 34);
      \u0275\u0275element(628, "i", 128);
      \u0275\u0275text(629, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(630, "li")(631, "a", 34);
      \u0275\u0275element(632, "i", 129);
      \u0275\u0275text(633, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(634, "li")(635, "a", 34);
      \u0275\u0275element(636, "i", 130);
      \u0275\u0275text(637, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(638, "li")(639, "a", 34);
      \u0275\u0275element(640, "i", 131);
      \u0275\u0275text(641, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(642, "li");
      \u0275\u0275element(643, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "li")(645, "a", 34);
      \u0275\u0275element(646, "i", 133);
      \u0275\u0275text(647, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(648, "li")(649, "a", 34);
      \u0275\u0275element(650, "i", 134);
      \u0275\u0275text(651, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(652, "li")(653, "a", 34);
      \u0275\u0275element(654, "i", 135);
      \u0275\u0275text(655, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(656, "div", 120)(657, "div", 138)(658, "div", 27)(659, "span", 139);
      \u0275\u0275element(660, "i", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(661, "div", 29)(662, "h6", 141)(663, "a", 109);
      \u0275\u0275text(664, "Handyimages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(665, "div", 27)(666, "p", 142);
      \u0275\u0275text(667, "1.4 GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "p", 143);
      \u0275\u0275element(669, "i", 144);
      \u0275\u0275text(670, "115\xA0files");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(671, "div", 27)(672, "div", 62)(673, "a", 31);
      \u0275\u0275element(674, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(675, "ul", 33)(676, "li")(677, "a", 127);
      \u0275\u0275element(678, "i", 35);
      \u0275\u0275text(679, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(680, "li")(681, "a", 34);
      \u0275\u0275element(682, "i", 128);
      \u0275\u0275text(683, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(684, "li")(685, "a", 34);
      \u0275\u0275element(686, "i", 129);
      \u0275\u0275text(687, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(688, "li")(689, "a", 34);
      \u0275\u0275element(690, "i", 130);
      \u0275\u0275text(691, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(692, "li")(693, "a", 34);
      \u0275\u0275element(694, "i", 131);
      \u0275\u0275text(695, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(696, "li");
      \u0275\u0275element(697, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "li")(699, "a", 34);
      \u0275\u0275element(700, "i", 133);
      \u0275\u0275text(701, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(702, "li")(703, "a", 34);
      \u0275\u0275element(704, "i", 134);
      \u0275\u0275text(705, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(706, "li")(707, "a", 34);
      \u0275\u0275element(708, "i", 135);
      \u0275\u0275text(709, "Delete");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(710, "div", 101)(711, "div", 26)(712, "h4", 67)(713, "a", 109);
      \u0275\u0275text(714, "Recent Files");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(715, "div", 118)(716, "a", 119);
      \u0275\u0275text(717, " Last Modified ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(718, "ul", 33)(719, "li")(720, "a", 34);
      \u0275\u0275text(721, "Newest to Oldest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(722, "li")(723, "a", 34);
      \u0275\u0275text(724, "Last Modified");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(725, "li")(726, "a", 34);
      \u0275\u0275text(727, "Oldest to Newest");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(728, "div", 22)(729, "div", 120)(730, "div", 151)(731, "div", 152);
      \u0275\u0275element(732, "i", 153);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "div", 154)(734, "h6", 125);
      \u0275\u0275text(735, "customer_data.txt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(736, "div", 62)(737, "a", 31);
      \u0275\u0275element(738, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "ul", 33)(740, "li")(741, "a", 127);
      \u0275\u0275element(742, "i", 35);
      \u0275\u0275text(743, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(744, "li")(745, "a", 34);
      \u0275\u0275element(746, "i", 128);
      \u0275\u0275text(747, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(748, "li")(749, "a", 34);
      \u0275\u0275element(750, "i", 129);
      \u0275\u0275text(751, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(752, "li")(753, "a", 34);
      \u0275\u0275element(754, "i", 130);
      \u0275\u0275text(755, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(756, "li")(757, "a", 34);
      \u0275\u0275element(758, "i", 131);
      \u0275\u0275text(759, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(760, "li");
      \u0275\u0275element(761, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(762, "li")(763, "a", 34);
      \u0275\u0275element(764, "i", 133);
      \u0275\u0275text(765, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(766, "li")(767, "a", 34);
      \u0275\u0275element(768, "i", 134);
      \u0275\u0275text(769, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(770, "li")(771, "a", 34);
      \u0275\u0275element(772, "i", 135);
      \u0275\u0275text(773, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(774, "div", 120)(775, "div", 151)(776, "div", 152);
      \u0275\u0275element(777, "i", 155);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(778, "div", 154)(779, "h6", 156)(780, "a", 109);
      \u0275\u0275text(781, "video_player_installer_setup.rar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(782, "div", 62)(783, "a", 31);
      \u0275\u0275element(784, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "ul", 33)(786, "li")(787, "a", 127);
      \u0275\u0275element(788, "i", 35);
      \u0275\u0275text(789, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(790, "li")(791, "a", 34);
      \u0275\u0275element(792, "i", 128);
      \u0275\u0275text(793, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(794, "li")(795, "a", 34);
      \u0275\u0275element(796, "i", 129);
      \u0275\u0275text(797, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(798, "li")(799, "a", 34);
      \u0275\u0275element(800, "i", 130);
      \u0275\u0275text(801, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(802, "li")(803, "a", 34);
      \u0275\u0275element(804, "i", 131);
      \u0275\u0275text(805, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(806, "li");
      \u0275\u0275element(807, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(808, "li")(809, "a", 34);
      \u0275\u0275element(810, "i", 133);
      \u0275\u0275text(811, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(812, "li")(813, "a", 34);
      \u0275\u0275element(814, "i", 134);
      \u0275\u0275text(815, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(816, "li")(817, "a", 34);
      \u0275\u0275element(818, "i", 135);
      \u0275\u0275text(819, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(820, "div", 120)(821, "div", 151)(822, "div", 152);
      \u0275\u0275element(823, "i", 157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "div", 154)(825, "h6", 156)(826, "a", 109);
      \u0275\u0275text(827, "recording.mp3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(828, "div", 62)(829, "a", 31);
      \u0275\u0275element(830, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(831, "ul", 33)(832, "li")(833, "a", 127);
      \u0275\u0275element(834, "i", 35);
      \u0275\u0275text(835, "Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(836, "li")(837, "a", 34);
      \u0275\u0275element(838, "i", 128);
      \u0275\u0275text(839, "Duplicate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "li")(841, "a", 34);
      \u0275\u0275element(842, "i", 129);
      \u0275\u0275text(843, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(844, "li")(845, "a", 34);
      \u0275\u0275element(846, "i", 130);
      \u0275\u0275text(847, "Invite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(848, "li")(849, "a", 34);
      \u0275\u0275element(850, "i", 131);
      \u0275\u0275text(851, "Share Link");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(852, "li");
      \u0275\u0275element(853, "hr", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(854, "li")(855, "a", 34);
      \u0275\u0275element(856, "i", 133);
      \u0275\u0275text(857, "View Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(858, "li")(859, "a", 34);
      \u0275\u0275element(860, "i", 134);
      \u0275\u0275text(861, "Download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(862, "li")(863, "a", 34);
      \u0275\u0275element(864, "i", 135);
      \u0275\u0275text(865, "Delete");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(866, "div", 26)(867, "h4", 67);
      \u0275\u0275text(868, "Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(869, "div", 27)(870, "div", 158)(871, "a", 119);
      \u0275\u0275text(872, " Sort By : Docs Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "ul", 33)(874, "li")(875, "a", 34);
      \u0275\u0275text(876, "Docs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(877, "li")(878, "a", 34);
      \u0275\u0275text(879, "Pdf");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(880, "li")(881, "a", 34);
      \u0275\u0275text(882, "Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(883, "li")(884, "a", 34);
      \u0275\u0275text(885, "Folder");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(886, "li")(887, "a", 34);
      \u0275\u0275text(888, "Xml");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(889, "a", 159);
      \u0275\u0275text(890, "View All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(891, "div", 160)(892, "table", 161)(893, "thead", 162)(894, "tr")(895, "th", 163)(896, "div", 164);
      \u0275\u0275element(897, "input", 165);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(898, "th");
      \u0275\u0275text(899, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(900, "th");
      \u0275\u0275text(901, "Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(902, "th");
      \u0275\u0275text(903, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(904, "th");
      \u0275\u0275text(905, "Modified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(906, "th");
      \u0275\u0275text(907, "Share");
      \u0275\u0275elementEnd();
      \u0275\u0275element(908, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(909, "tbody")(910, "tr")(911, "td")(912, "div", 164);
      \u0275\u0275element(913, "input", 166);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(914, "td")(915, "div", 167)(916, "a", 168);
      \u0275\u0275element(917, "img", 169);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(918, "div", 29)(919, "p", 170)(920, "a", 109);
      \u0275\u0275text(921, "Secret");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(922, "td");
      \u0275\u0275text(923, "7.6 MB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(924, "td");
      \u0275\u0275text(925, "Doc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(926, "td")(927, "p", 41);
      \u0275\u0275text(928, "Mar 15, 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(929, "span");
      \u0275\u0275text(930, "05:00:14 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(931, "td")(932, "div", 145)(933, "span", 146);
      \u0275\u0275element(934, "img", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(935, "span", 146);
      \u0275\u0275element(936, "img", 148);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(937, "span", 146);
      \u0275\u0275element(938, "img", 172);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(939, "td")(940, "div", 27)(941, "div", 173)(942, "a", 174);
      \u0275\u0275element(943, "i", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(944, "div", 30)(945, "a", 175);
      \u0275\u0275element(946, "i", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(947, "ul", 177)(948, "li")(949, "a", 34);
      \u0275\u0275element(950, "i", 178);
      \u0275\u0275text(951, "Permanent Delete ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(952, "li")(953, "a", 34);
      \u0275\u0275element(954, "i", 179);
      \u0275\u0275text(955, "Restore File ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(956, "tr")(957, "td")(958, "div", 164);
      \u0275\u0275element(959, "input", 166);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(960, "td")(961, "div", 167)(962, "a", 168);
      \u0275\u0275element(963, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(964, "div", 29)(965, "p", 170)(966, "a", 109);
      \u0275\u0275text(967, "Sophie Headrick");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(968, "td");
      \u0275\u0275text(969, "7.4 MB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(970, "td");
      \u0275\u0275text(971, "PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(972, "td")(973, "p", 41);
      \u0275\u0275text(974, "Jan 8, 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(975, "span");
      \u0275\u0275text(976, "08:20:13 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(977, "td")(978, "div", 145)(979, "span", 146);
      \u0275\u0275element(980, "img", 181);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(981, "span", 146);
      \u0275\u0275element(982, "img", 182);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(983, "td")(984, "div", 27)(985, "div", 173)(986, "a", 174);
      \u0275\u0275element(987, "i", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(988, "div", 30)(989, "a", 175);
      \u0275\u0275element(990, "i", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(991, "ul", 177)(992, "li")(993, "a", 34);
      \u0275\u0275element(994, "i", 178);
      \u0275\u0275text(995, "Permanent Delete ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(996, "li")(997, "a", 34);
      \u0275\u0275element(998, "i", 179);
      \u0275\u0275text(999, "Restore File ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1e3, "tr")(1001, "td")(1002, "div", 164);
      \u0275\u0275element(1003, "input", 166);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1004, "td")(1005, "div", 167)(1006, "a", 168);
      \u0275\u0275element(1007, "img", 183);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1008, "div", 29)(1009, "p", 170)(1010, "a", 109);
      \u0275\u0275text(1011, "Gallery");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1012, "td");
      \u0275\u0275text(1013, "6.1 MB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1014, "td");
      \u0275\u0275text(1015, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1016, "td")(1017, "p", 41);
      \u0275\u0275text(1018, "Aug 6, 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1019, "span");
      \u0275\u0275text(1020, "04:10:12 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1021, "td")(1022, "div", 145)(1023, "span", 146);
      \u0275\u0275element(1024, "img", 150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1025, "span", 146);
      \u0275\u0275element(1026, "img", 184);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1027, "span", 146);
      \u0275\u0275element(1028, "img", 149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1029, "span", 146);
      \u0275\u0275element(1030, "img", 185);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1031, "a", 186);
      \u0275\u0275text(1032, " +1 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1033, "td")(1034, "div", 27)(1035, "div", 173)(1036, "a", 174);
      \u0275\u0275element(1037, "i", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1038, "div", 30)(1039, "a", 175);
      \u0275\u0275element(1040, "i", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1041, "ul", 177)(1042, "li")(1043, "a", 34);
      \u0275\u0275element(1044, "i", 178);
      \u0275\u0275text(1045, "Permanent Delete ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1046, "li")(1047, "a", 34);
      \u0275\u0275element(1048, "i", 179);
      \u0275\u0275text(1049, "Restore File ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1050, "tr")(1051, "td")(1052, "div", 164);
      \u0275\u0275element(1053, "input", 166);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1054, "td")(1055, "div", 167)(1056, "a", 168);
      \u0275\u0275element(1057, "img", 187);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1058, "div", 29)(1059, "p", 170)(1060, "a", 109);
      \u0275\u0275text(1061, "Doris Crowley");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1062, "td");
      \u0275\u0275text(1063, "5.2 MB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1064, "td");
      \u0275\u0275text(1065, "Folder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1066, "td")(1067, "p", 41);
      \u0275\u0275text(1068, "Jan 6, 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1069, "span");
      \u0275\u0275text(1070, "03:40:14 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1071, "td")(1072, "div", 145)(1073, "span", 146);
      \u0275\u0275element(1074, "img", 185);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1075, "span", 146);
      \u0275\u0275element(1076, "img", 188);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1077, "span", 146);
      \u0275\u0275element(1078, "img", 181);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1079, "td")(1080, "div", 27)(1081, "div", 173)(1082, "a", 174);
      \u0275\u0275element(1083, "i", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1084, "div", 30)(1085, "a", 175);
      \u0275\u0275element(1086, "i", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1087, "ul", 177)(1088, "li")(1089, "a", 34);
      \u0275\u0275element(1090, "i", 178);
      \u0275\u0275text(1091, "Permanent Delete ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1092, "li")(1093, "a", 34);
      \u0275\u0275element(1094, "i", 179);
      \u0275\u0275text(1095, "Restore File ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1096, "tr")(1097, "td")(1098, "div", 164);
      \u0275\u0275element(1099, "input", 166);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1100, "td")(1101, "div", 167)(1102, "a", 168);
      \u0275\u0275element(1103, "img", 189);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1104, "div", 29)(1105, "p", 170)(1106, "a", 109);
      \u0275\u0275text(1107, "Cheat_codez");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1108, "td");
      \u0275\u0275text(1109, "8 MB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1110, "td");
      \u0275\u0275text(1111, "Xml");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1112, "td")(1113, "p", 41);
      \u0275\u0275text(1114, "Oct 12, 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1115, "span");
      \u0275\u0275text(1116, "05:00:14 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1117, "td")(1118, "div", 145)(1119, "span", 146);
      \u0275\u0275element(1120, "img", 190);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1121, "span", 146);
      \u0275\u0275element(1122, "img", 191);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1123, "span", 146);
      \u0275\u0275element(1124, "img", 192);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1125, "span", 146);
      \u0275\u0275element(1126, "img", 181);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1127, "td")(1128, "div", 27)(1129, "div", 173)(1130, "a", 174);
      \u0275\u0275element(1131, "i", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1132, "div", 30)(1133, "a", 175);
      \u0275\u0275element(1134, "i", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1135, "ul", 177)(1136, "li")(1137, "a", 34);
      \u0275\u0275element(1138, "i", 178);
      \u0275\u0275text(1139, "Permanent Delete ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1140, "li")(1141, "a", 34);
      \u0275\u0275element(1142, "i", 179);
      \u0275\u0275text(1143, "Restore File ");
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(1144, "div", 193)(1145, "div", 194)(1146, "div", 195)(1147, "div", 196)(1148, "h4", 197);
      \u0275\u0275text(1149, "Create Folder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1150, "button", 198);
      \u0275\u0275element(1151, "i", 199);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1152, "form")(1153, "div", 200)(1154, "div", 3)(1155, "label", 201);
      \u0275\u0275text(1156, "Folder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1157, "input", 202);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1158, "div", 203)(1159, "button", 204);
      \u0275\u0275text(1160, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1161, "button", 205);
      \u0275\u0275text(1162, "Add New Folder");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1163, "div", 206)(1164, "div", 194)(1165, "div", 195)(1166, "div", 196)(1167, "h4", 197);
      \u0275\u0275text(1168, "Add Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1169, "button", 198);
      \u0275\u0275element(1170, "i", 199);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1171, "div", 200)(1172, "div", 207)(1173, "span", 208);
      \u0275\u0275element(1174, "i", 209);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1175, "input", 210);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1176, "div", 211)(1177, "label", 212)(1178, "span", 213)(1179, "span", 214);
      \u0275\u0275element(1180, "img", 215);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1181, " Sophie ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1182, "input", 216);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1183, "label", 217)(1184, "span", 213)(1185, "span", 214);
      \u0275\u0275element(1186, "img", 218);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1187, " Cameron ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1188, "input", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1189, "label", 217)(1190, "span", 213)(1191, "span", 214);
      \u0275\u0275element(1192, "img", 219);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1193, " Doris ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1194, "input", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1195, "label", 217)(1196, "span", 213)(1197, "span", 214);
      \u0275\u0275element(1198, "img", 220);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1199, " Rufana ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1200, "input", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1201, "label", 217)(1202, "span", 213)(1203, "span", 214);
      \u0275\u0275element(1204, "img", 220);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1205, " Michael ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1206, "input", 166);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 15 : -1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, DragDropModule, MatSortModule, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileManagerComponent, [{
    type: Component,
    args: [{ selector: "app-file-manager", imports: [FormsModule, DragDropModule, MatSortModule, MatSelectModule], template: '<div class="page-header page-add-notes border-0 flex-sm-row flex-column">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>File Manager</h4>\n      <h6 class="mb-0">Manage your files</h6>\n    </div>\n  </div>\n  <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">\n    <ul class="table-top-head me-2">\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n          <i class="ti ti-refresh"></i>\n        </a>\n      </li>\n      <li>\n        <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n           @if (!isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n    <div class="search-set me-2">\n      <div class="search-input">\n        <span class="btn-searchset"><i class="ti ti-search fs-14 feather-search ps-2"></i></span>\n        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n          <label> <input type="search" class="form-control form-control-sm py-0" placeholder="Search"></label>\n        </div>\n      </div>\n    </div>\n    <div class="form-sort me-2">\n      <mat-select class="custom-mat-select select" placeholder="All Files">\n        <mat-option value="1">All Files</mat-option>\n        <mat-option value="1">Music </mat-option>\n        <mat-option value="1">Documents</mat-option>\n        <mat-option value="1">Photos</mat-option>\n      </mat-select>\n    </div>\n    <div class="page-btn">\n      <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_folder"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Create Folder</a>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n\n  <!-- Dropbox -->\n  <div class="col-lg-3 col-md-6 d-flex">\n    <div class="card bg-lightdanger-gradient flex-fill">\n      <div class="card-body">\n        <div class="d-flex align-items-center justify-content-between mb-2">\n          <div class="d-flex align-items-center">\n            <img src="assets/img/icons/dropbox.svg" alt="img">\n            <h5 class="ms-2">Dropbox</h5>\n          </div>\n          <div class="dropdown">\n            <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              <i class="ti ti-dots"></i>\n            </a>\n            <ul class="dropdown-menu dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Open</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash me-1"></i>Delete All</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-status-change me-1"></i>Reset</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class="progress progress-xs flex-grow-1 mb-2">\n          <div class="progress-bar bg-pink rounded" role="progressbar" style="width: 20%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>\n        </div>\n        <div class="d-flex align-items-center justify-content-between">\n          <p class="mb-0">200 Files</p>\n          <p class="text-title mb-0">28GB</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Dropbox -->\n\n  <!-- Google Drive -->\n  <div class="col-lg-3 col-md-6 d-flex">\n    <div class="card bg-lightpink-gradient flex-fill">\n      <div class="card-body">\n        <div class="d-flex align-items-center justify-content-between mb-2">\n          <div class="d-flex align-items-center">\n            <img src="assets/img/icons/drive.svg" alt="img">\n            <h5 class="ms-2">Google Drive</h5>\n          </div>\n          <div class="dropdown">\n            <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              <i class="ti ti-dots"></i>\n            </a>\n            <ul class="dropdown-menu dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Open</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash me-1"></i>Delete All</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-status-change me-1"></i>Reset</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class="progress progress-xs flex-grow-1 mb-2">\n          <div class="progress-bar bg-pink rounded" role="progressbar" style="width: 80%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>\n        </div>\n        <div class="d-flex align-items-center justify-content-between">\n          <p class="mb-0">144 Files</p>\n          <p class="text-title mb-0">54GB</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Google Drive -->\n\n  <!-- Cloud Storage -->\n  <div class="col-lg-3 col-md-6 d-flex">\n    <div class="card bg-lightsuccess-gradient flex-fill">\n      <div class="card-body">\n        <div class="d-flex align-items-center justify-content-between mb-2">\n          <div class="d-flex align-items-center">\n            <img src="assets/img/icons/cloud.svg" alt="img">\n            <h5 class="ms-2">Cloud Storage</h5>\n          </div>\n          <div class="dropdown">\n            <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              <i class="ti ti-dots"></i>\n            </a>\n            <ul class="dropdown-menu dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Open</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash me-1"></i>Delete All</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-status-change me-1"></i>Reset</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class="progress progress-xs flex-grow-1 mb-2">\n          <div class="progress-bar bg-purple rounded" role="progressbar" style="width: 50%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>\n        </div>\n        <div class="d-flex align-items-center justify-content-between">\n          <p class="mb-0">144 Files</p>\n          <p class="text-title mb-0">54GB</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Cloud Storage -->\n\n  <!-- Internal Storage -->\n  <div class="col-lg-3 col-md-6 d-flex">\n    <div class="card bg-lightpurple-gradient flex-fill">\n      <div class="card-body">\n        <div class="d-flex align-items-center justify-content-between mb-2">\n          <div class="d-flex align-items-center">\n            <img src="assets/img/icons/storage.svg" alt="img">\n            <h5 class="ms-2">Internal Storage</h5>\n          </div>\n          <div class="dropdown">\n            <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n              <i class="ti ti-dots"></i>\n            </a>\n            <ul class="dropdown-menu dropdown-menu-end p-3">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Open</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash me-1"></i>Delete All</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-status-change me-1"></i>Reset</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class="progress progress-xs flex-grow-1 mb-2">\n          <div class="progress-bar bg-purple rounded" role="progressbar" style="width: 20%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>\n        </div>\n        <div class="d-flex align-items-center justify-content-between">\n          <p class="mb-0">144 Files</p>\n          <p class="text-title mb-0">54GB</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Internal Storage -->\n\n</div>\n\n<div class="row">\n\n  <!-- Sidebar -->\n  <div class="col-xl-3  ">\n    <div class="theiaStickySidebar">\n      <div class="card ">\n        <div class="card-body p-3">\n          <div class="shadow-xs p-2 mb-3">\n            <div class="d-flex align-items-center justify-content-between">\n              <div class="d-flex align-items-center overflow-hidden">\n                <span class="avatar avatar-md rounded-circle">\n                  <img src="assets/img/profiles/avatar-29.jpg" alt="img" class="rounded-circle">\n                </span>\n                <div class="overflow-hidden ms-2">\n                  <h5 class="text-truncate">James Hong</h5>\n                  <p class="fs-12 text-truncate">Jnh343&#64;example.com</p>\n                </div>\n              </div>\n              <div class="dropdown ms-2">\n                <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  <i class="ti ti-dots"></i>\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-1"></i>Edit</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="file-drop mb-3 text-center">\n            <span class="avatar avatar-sm bg-primary text-white mb-2">\n              <i class="ti ti-upload fs-16"></i>\n            </span>\n            <h6 class="mb-2">Drop files here</h6>\n            <p class="fs-12 mb-0">Browse and chose the files you want to upload from your computer</p>\n            <input type="file">\n          </div>\n          <div class="files-list nav d-block">\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2 active"><i class="ti ti-folder-up me-2"></i>All Folder / Files</a>\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-star me-2"></i>Drive</a>\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-octahedron me-2"></i>Dropbox</a>\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-share-2 me-2"></i>Shared with Me</a>\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-file me-2"></i>Document</a>\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-clock-hour-11 me-2"></i>Recent File</a>\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-star me-2"></i>Important</a>\n            <a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-music me-2"></i>Media</a>\n          </div>\n        </div>\n      </div>\n  \n      <!-- Storage Details -->\n      <div class="card">\n        <div class="card-body p-3">\n          <div class="d-flex align-items-center justify-content-between mb-2">\n            <h4 class="mb-2">Storage Details</h4>\n            <span class="badge badge-success mb-2">Used 77%</span>\n          </div>\n          <div id="storage-chart"></div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center overflow-hidden">\n              <span class="avatar avatar-md bg-info-transparent">\n                <i class="ti ti-music fs-20 text-info"></i>\n              </span>\n              <div class="overflow-hidden ms-2">\n                <h6 class="text-truncate">Music</h6>\n                <p class="text-truncate">35 Files</p>\n              </div>\n            </div>\n            <p class="text-title">8.5 GB</p>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center overflow-hidden">\n              <span class="avatar avatar-md bg-warning-transparent">\n                <i class="fa-regular fa-file-audio fs-20 text-warning"></i>\n              </span>\n              <div class="overflow-hidden ms-2">\n                <h6 class="text-truncate">Video</h6>\n                <p class="text-truncate">145 Files</p>\n              </div>\n            </div>\n            <p class="text-title">2 GB</p>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center overflow-hidden">\n              <span class="avatar avatar-md bg-secondary-transparent">\n                <i class="ti ti-file-description fs-20 text-secondary"></i>\n              </span>\n              <div class="overflow-hidden ms-2">\n                <h6 class="text-truncate">Documents</h6>\n                <p class="text-truncate">487 Files</p>\n              </div>\n            </div>\n            <p class="text-title">24.5 GB</p>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center overflow-hidden">\n              <span class="avatar avatar-md bg-purple-transparent">\n                <i class="ti ti-photo fs-20 text-purple"></i>\n              </span>\n              <div class="overflow-hidden ms-2">\n                <h6 class="text-truncate">Photos</h6>\n                <p class="text-truncate">35 Files</p>\n              </div>\n            </div>\n            <p class="text-title">8.5 GB</p>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-0">\n            <div class="d-flex align-items-center overflow-hidden">\n              <span class="avatar avatar-md bg-purple-transparent">\n                <i class="ti ti-file-type-doc fs-20 text-pink"></i>\n              </span>\n              <div class="overflow-hidden ms-2">\n                <h6 class="text-truncate">Other</h6>\n                <p class="text-truncate">487 Files</p>\n              </div>\n            </div>\n            <p class="text-title">16.2 GB</p>\n          </div>\n        </div>\n      </div>\n      <!-- /Storage Details -->\n  \n      <!-- Upgrade Details -->\n      <div class="card bg-black bg-01">\n        <div class="card-body text-center">\n          <img src="assets/img/icons/upgrade.svg" alt="img" class="mb-3">\n          <h6 class="mb-3 text-white">Upgrade to Pro for Unlimited Storage</h6>\n          <a href="javascript:void(0);" class="btn btn-white btn-sm">Upgrade Now<i class="ti ti-arrow-right ms-1"></i></a>\n        </div>\n      </div>\n      <!-- /Upgrade Details -->\n    </div>\n\n  </div>\n  <!-- /Sidebar -->\n\n  <div class="col-xl-9">\n\n    <!-- Quick Access -->\n    <div class="border-bottom mb-4">\n      <div class="d-flex align-items-center justify-content-between mb-2">\n        <h4 class="mb-2">Quick Access</h4>\n        <div>\n          <a href="javascript:void(0);" class="mb-2 me-3 fw-medium link-default">Close</a>\n          <a href="javascript:void(0);" class="mb-2 fw-medium link-default">View All</a>\n        </div>\n      </div>\n      <div class="row row-cols-xxl-5 row-cols-xl-3 row-cols-sm-3 row-cols-1 justify-content-center">\n        <div class="col d-flex">\n          <div class="card access-wrap flex-fill">\n            <div class="card-body text-center">\n              <img src="assets/img/icons/file.svg" alt="img" class="mb-3">\n              <h6 class="mb-2 fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Final.doc</a></h6>\n              <span class="badge badge-dark-transparent">2.4 GB</span>\n            </div>\n            <span class="access-rate rating-select"><i class="ti ti-star-filled filled"></i></span>\n          </div>\n        </div>\n        <div class="col d-flex">\n          <div class="card access-wrap flex-fill">\n            <div class="card-body text-center">\n              <img src="assets/img/icons/pdf-icon.svg" alt="img" class="mb-3">\n              <h6 class="mb-2 fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Marklist.pdf</a></h6>\n              <span class="badge badge-dark-transparent">2.4 GB</span>\n            </div>\n            <span class="access-rate rating-select"><i class="ti ti-star"></i></span>\n          </div>\n        </div>\n        <div class="col d-flex">\n          <div class="card access-wrap flex-fill">\n            <div class="card-body text-center">\n              <img src="assets/img/icons/image.svg" alt="img" class="mb-3">\n              <h6 class="mb-2 fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Nature.png</a></h6>\n              <span class="badge badge-dark-transparent">2.4 GB</span>\n            </div>\n            <span class="access-rate rating-select"><i class="ti ti-star-filled filled"></i></span>\n          </div>\n        </div>\n        <div class="col d-flex">\n          <div class="card access-wrap flex-fill">\n            <div class="card-body text-center">\n              <img src="assets/img/icons/xls-icon.svg" alt="img" class="mb-3">\n              <h6 class="mb-2 fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">List.xlsx</a></h6>\n              <span class="badge badge-dark-transparent">2.4 GB</span>\n            </div>\n            <span class="access-rate rating-select"><i class="ti ti-star"></i></span>\n          </div>\n        </div>\n        <div class="col d-flex">\n          <div class="card access-wrap flex-fill">\n            <div class="card-body text-center">\n              <img src="assets/img/icons/folder-icon.svg" alt="img" class="mb-3">\n              <h6 class="mb-2 fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Group Photos</a></h6>\n              <span class="badge badge-dark-transparent">2.4 GB</span>\n            </div>\n            <span class="access-rate rating-select"><i class="ti ti-star"></i></span>\n          </div>\n        </div>							\n      </div>\n    </div>\n    <!-- /Quick Access -->\n\n    <!-- Recent Videos -->\n    <div class="border-bottom mb-4">\n      <div class="d-flex align-items-center justify-content-between mb-2">\n        <h4 class="mb-2">Recent Videos</h4>\n        <div class="dropdown mb-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white" data-bs-toggle="dropdown">\n            Last 7 Days\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 1 month</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 1 year</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-lg-4">\n          <div class="video-wrap">\n            <video width="100" height="100" class="js-player" crossorigin playsinline poster="assets/img/file-manager/video-01.jpg">\n              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4">\n            </video>\n            <div class="d-flex align-items-center justify-content-between video-content">\n              <h6 class="fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Inertia  Movie</a></h6>\n              <div class="d-flex align-items-center">\n                <a href="javascript:void(0);" class="rating-select">\n                  <i class="ti ti-star-filled filled"></i>\n                </a>\n                <div class="dropdown ms-2">\n                  <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-dots"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-end p-3">\n                    <li>\n                      <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                    </li>\n                    <li><hr class="dropdown-divider my-2"></li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="col-lg-4">\n          <div class="video-wrap">\n            <video width="100" height="100" class="js-player" crossorigin playsinline poster="assets/img/file-manager/video-02.jpg">\n              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4">\n            </video>\n            <div class="d-flex align-items-center justify-content-between video-content">\n              <h6 class="fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">2028 Nov 10.mp4</a></h6>\n              <div class="d-flex align-items-center">\n                <a href="javascript:void(0);" class="rating-select">\n                  <i class="ti ti-star-filled filled"></i>\n                </a>\n                <div class="dropdown ms-2">\n                  <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-dots"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-end p-3">\n                    <li>\n                      <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                    </li>\n                    <li><hr class="dropdown-divider my-2"></li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="col-lg-4">\n          <div class="video-wrap">\n            <video width="100" height="100" class="js-player" crossorigin playsinline poster="assets/img/file-manager/video-03.jpg">\n              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4">\n            </video>\n            <div class="d-flex align-items-center justify-content-between video-content">\n              <h6 class="fw-medium"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">AI Liquid Color</a></h6>\n              <div class="d-flex align-items-center">\n                <a href="javascript:void(0);" class="rating-select">\n                  <i class="ti ti-star-filled filled"></i>\n                </a>\n                <div class="dropdown ms-2">\n                  <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-dots"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-end p-3">\n                    <li>\n                      <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                    </li>\n                    <li><hr class="dropdown-divider my-2"></li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Recent Videos -->\n\n    <!-- Recent Folders -->\n    <div class="border-bottom mb-4">\n      <div class="d-flex align-items-center justify-content-between mb-2">\n        <h4 class="mb-2">Recent Folders</h4>\n        <div class="dropdown mb-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white" data-bs-toggle="dropdown">\n            Last 7 Days\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 1 month</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 1 year</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n          <div class="row">\n            <div class="col-lg-4">\n              <div class="folder-wrap bg-white d-flex align-items-center justify-content-between">\n                <div class="d-flex align-items-center">\n                <span class="text-warning fs-30">\n                  <i class="ti ti-folder-filled"></i>\n                </span>\n                <div class="ms-2">\n                  <h6 class="mb-1"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Personal Assets</a></h6>\n                  <div class="d-flex align-items-center">\n                  <p class="fs-12 mb-0 me-2">2.4 GB</p>\n                  <p class="fs-12 mb-0 d-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2 text-title"></i>135\xA0files</p>\n                  </div>\n                </div>\n                </div>\n                <div class="d-flex align-items-center">\n                <div class="avatar-list-stacked avatar-group-sm">\n                  <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-19.jpg" alt="img">\n                  </span>\n                  <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-29.jpg" alt="img">\n                  </span>\n                </div>\n                <div class="dropdown ms-2">\n                  <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  <i class="ti ti-dots"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                  </li>\n                  <li><hr class="dropdown-divider my-2"></li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                  </li>\n                  </ul>\n                </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-lg-4">\n              <div class="folder-wrap bg-white d-flex align-items-center justify-content-between">\n                <div class="d-flex align-items-center">\n                <span class="text-warning fs-30">\n                  <i class="ti ti-folder-filled"></i>\n                </span>\n                <div class="ms-2">\n                  <h6 class="mb-1"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Document</a></h6>\n                  <div class="d-flex align-items-center">\n                  <p class="fs-12 mb-0 me-2">4 GB</p>\n                  <p class="fs-12 mb-0 d-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2 text-title"></i>15\xA0files</p>\n                  </div>\n                </div>\n                </div>\n                <div class="d-flex align-items-center">\n                <div class="avatar-list-stacked avatar-group-sm">\n                  <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-05.jpg" alt="img">\n                  </span>\n                  <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">\n                  </span>\n                </div>\n                <div class="dropdown ms-2">\n                  <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  <i class="ti ti-dots"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                  </li>\n                  <li><hr class="dropdown-divider my-2"></li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                  </li>\n                  </ul>\n                </div>\n                </div>\n              </div>\n            </div>\n             <div class="col-lg-4">\n               <div class="folder-wrap bg-white d-flex align-items-center justify-content-between">\n                 <div class="d-flex align-items-center">\n                 <span class="text-warning fs-30">\n                   <i class="ti ti-folder-filled"></i>\n                 </span>\n                 <div class="ms-2">\n                   <h6 class="mb-1"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Handyimages</a></h6>\n                   <div class="d-flex align-items-center">\n                   <p class="fs-12 mb-0 me-2">1.4 GB</p>\n                   <p class="fs-12 mb-0 d-flex align-items-center"><i class="ti ti-circle-filled fs-6 me-2 text-title"></i>115\xA0files</p>\n                   </div>\n                 </div>\n                 </div>\n                 <div class="d-flex align-items-center">\n                 <div class="dropdown ms-2">\n                   <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                   <i class="ti ti-dots"></i>\n                   </a>\n                   <ul class="dropdown-menu dropdown-menu-end p-3">\n                   <li>\n                     <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                   </li>\n                   <li>\n                     <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                   </li>\n                   <li>\n                     <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                   </li>\n                   <li>\n                     <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                   </li>\n                   <li>\n                     <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                   </li>\n                   <li><hr class="dropdown-divider my-2"></li>\n                   <li>\n                     <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                   </li>\n                   <li>\n                     <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                   </li>\n                   <li>\n                     <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                   </li>\n                   </ul>\n                 </div>\n                 </div>\n               </div>\n             </div>\n          </div>\n    </div>\n    <!-- /Recent Folders -->\n\n    <!-- Recent Files -->\n    <div class="border-bottom mb-4">\n      <div class="d-flex align-items-center justify-content-between mb-2">\n        <h4 class="mb-2"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">Recent Files</a></h4>\n        <div class="dropdown mb-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white" data-bs-toggle="dropdown">\n            Last Modified\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Newest to Oldest</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Modified</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Oldest to Newest</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-lg-4">\n          <div class="files-wrap">\n            <div class="bg-transparent-dark p-5 d-flex align-items-center justify-content-center  files-icon">\n              <i class="ti ti-file-description fs-24 text-title"></i>\n            </div>\n            <div class="bg-white d-flex align-items-center justify-content-between p-3 files-content">\n              <h6 class="fw-medium">customer_data.txt</h6>\n              <div class="dropdown ms-2">\n                <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                  <i class="ti ti-dots"></i>\n                </a>\n                <ul class="dropdown-menu dropdown-menu-end p-3">\n                  <li>\n                    <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                  </li>\n                  <li><hr class="dropdown-divider my-2"></li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                  </li>\n                  <li>\n                    <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n          <div class="col-lg-4">\n            <div class="files-wrap">\n              <div class="bg-transparent-dark p-5 d-flex align-items-center justify-content-center files-icon">\n                <i class="ti ti-file-type-pdf fs-24 text-title"></i>\n              </div>\n              <div class="bg-white d-flex align-items-center justify-content-between p-3 files-content">\n                <h6 class="fw-medium text-truncate"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">video_player_installer_setup.rar</a></h6>\n                <div class="dropdown ms-2">\n                  <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-dots"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-end p-3">\n                    <li>\n                      <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                    </li>\n                    <li><hr class="dropdown-divider my-2"></li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n        </div>\n          <div class="col-lg-4">\n            <div class="files-wrap">\n              <div class="bg-transparent-dark p-5 d-flex align-items-center justify-content-center files-icon">\n                <i class="fa-regular fa-file-audio fs-24 text-title"></i>\n              </div>\n              <div class="bg-white d-flex align-items-center justify-content-between p-3 files-content">\n                <h6 class="fw-medium text-truncate"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview">recording.mp3</a></h6>\n                <div class="dropdown ms-2">\n                  <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-dots"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-end p-3">\n                    <li>\n                      <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" class="dropdown-item rounded-1"><i class="ti ti-folder-open me-2"></i>Preview</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-copy me-2"></i>Duplicate</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-arrow-left-right me-2"></i>Move</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-user-plus me-2"></i>Invite</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-share-3 me-2"></i>Share Link</a>\n                    </li>\n                    <li><hr class="dropdown-divider my-2"></li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>View Details</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-download me-2"></i>Download</a>\n                    </li>\n                    <li>\n                      <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n          \n\n    </div>\n    <!-- /Recent Files -->\n\n    <!-- Student List -->\n    <div class="d-flex align-items-center justify-content-between mb-2">\n      <h4 class="mb-2">Files</h4>\n      <div class="d-flex align-items-center">\n        <div class="dropdown mb-2 me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white" data-bs-toggle="dropdown">\n            Sort By : Docs Type\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Docs</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Pdf</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Image</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Folder</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Xml</a>\n            </li>\n          </ul>\n        </div>\n        <a href="javascript:void(0);" class="link-primary fw-medium mb-2">View All</a>\n      </div>\n    </div>\n    <div class="custom-datatable-filter table-responsive mb-4">\n      <table class="table datatable">\n        <thead class="thead-light">\n          <tr>\n            <th class="no-sort">\n              <div class="form-check form-check-md">\n                <input class="form-check-input" type="checkbox" id="select-all">\n              </div>\n            </th>\n            <th>Name</th>\n            <th>Size</th>\n            <th>Type</th>\n            <th>Modified</th>\n            <th>Share</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <div class="form-check form-check-md">\n                <input class="form-check-input" type="checkbox">\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center file-name-icon">\n                <a href="javascript:void(0);" class="avatar avatar-md bg-light"  data-bs-toggle="offcanvas" data-bs-target="#preview" >\n                  <img src="assets/img/icons/file-01.svg" class="img-fluid"\n                    alt="img"></a>\n                <div class="ms-2">\n                  <p class="text-title fw-medium  mb-0"><a href="javascript:void(0);"  data-bs-toggle="offcanvas" data-bs-target="#preview" >Secret</a></p>\n                </div>\n              </div>\n            </td>\n            <td>7.6 MB</td>\n            <td>Doc</td>\n            <td>\n              <p class="text-title mb-0">Mar 15, 2025</p>\n              <span>05:00:14 PM</span>\n            </td>\n            <td>\n              <div class="avatar-list-stacked avatar-group-sm">\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-27.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-29.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-12.jpg" alt="img">\n                </span>\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center">\n                <div class="rating-select me-2">\n                  <a href="javascript:void(0);"><i class="ti ti-star"></i></a>\n                </div>\n                <div class="dropdown">\n                  <a href="javascript:void(0);"\n                    class="d-flex align-items-center justify-content-center"\n                    data-bs-toggle="dropdown" aria-expanded="false">\n                    <i class="ti ti-dots fs-14"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-right p-3">\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-trash me-2"></i>Permanent Delete\n                      </a>\n                    </li>\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-edit-circle me-2"></i>Restore File\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class="form-check form-check-md">\n                <input class="form-check-input" type="checkbox">\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center file-name-icon">\n                <a href="javascript:void(0);" class="avatar avatar-md bg-light"  data-bs-toggle="offcanvas" data-bs-target="#preview" >\n                  <img src="assets/img/icons/file-02.svg" class="img-fluid"\n                    alt="img"></a>\n                <div class="ms-2">\n                  <p class="text-title fw-medium  mb-0"><a href="javascript:void(0);"  data-bs-toggle="offcanvas" data-bs-target="#preview" >Sophie Headrick</a></p>\n                </div>\n              </div>\n            </td>\n            <td>7.4 MB</td>\n            <td>PDF</td>\n            <td>\n              <p class="text-title mb-0">Jan 8, 2025</p>\n              <span>08:20:13 PM</span>\n            </td>\n            <td>\n              <div class="avatar-list-stacked avatar-group-sm">\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n                </span>\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center">\n                <div class="rating-select me-2">\n                  <a href="javascript:void(0);"><i class="ti ti-star"></i></a>\n                </div>\n                <div class="dropdown">\n                  <a href="javascript:void(0);"\n                    class="d-flex align-items-center justify-content-center"\n                    data-bs-toggle="dropdown" aria-expanded="false">\n                    <i class="ti ti-dots fs-14"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-right p-3">\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-trash me-2"></i>Permanent Delete\n                      </a>\n                    </li>\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-edit-circle me-2"></i>Restore File\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class="form-check form-check-md">\n                <input class="form-check-input" type="checkbox">\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center file-name-icon">\n                <a href="javascript:void(0);" class="avatar avatar-md bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview" >\n                  <img src="assets/img/icons/file-03.svg" class="img-fluid"\n                    alt="img"></a>\n                <div class="ms-2">\n                  <p class="text-title fw-medium  mb-0"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" >Gallery</a></p>\n                </div>\n              </div>\n            </td>\n            <td>6.1 MB</td>\n            <td>Image</td>\n            <td>\n              <p class="text-title mb-0">Aug 6, 2025</p>\n              <span>04:10:12 PM</span>\n            </td>\n            <td>\n              <div class="avatar-list-stacked avatar-group-sm">\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-03.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-05.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-06.jpg" alt="img">\n                </span>\n                <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">\n                  +1\n                </a>\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center">\n                <div class="rating-select me-2">\n                  <a href="javascript:void(0);"><i class="ti ti-star"></i></a>\n                </div>\n                <div class="dropdown">\n                  <a href="javascript:void(0);"\n                    class="d-flex align-items-center justify-content-center"\n                    data-bs-toggle="dropdown" aria-expanded="false">\n                    <i class="ti ti-dots fs-14"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-right p-3">\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-trash me-2"></i>Permanent Delete\n                      </a>\n                    </li>\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-edit-circle me-2"></i>Restore File\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class="form-check form-check-md">\n                <input class="form-check-input" type="checkbox">\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center file-name-icon">\n                <a href="javascript:void(0);" class="avatar avatar-md bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview" >\n                  <img src="assets/img/icons/file-04.svg" class="img-fluid"\n                    alt="img"></a>\n                <div class="ms-2">\n                  <p class="text-title fw-medium  mb-0"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" >Doris Crowley</a></p>\n                </div>\n              </div>\n            </td>\n            <td>5.2 MB</td>\n            <td>Folder</td>\n            <td>\n              <p class="text-title mb-0">Jan 6, 2025</p>\n              <span>03:40:14 PM</span>\n            </td>\n            <td>\n              <div class="avatar-list-stacked avatar-group-sm">\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-06.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-10.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n                </span>\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center">\n                <div class="rating-select me-2">\n                  <a href="javascript:void(0);"><i class="ti ti-star"></i></a>\n                </div>\n                <div class="dropdown">\n                  <a href="javascript:void(0);"\n                    class="d-flex align-items-center justify-content-center"\n                    data-bs-toggle="dropdown" aria-expanded="false">\n                    <i class="ti ti-dots fs-14"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-right p-3">\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-trash me-2"></i>Permanent Delete\n                      </a>\n                    </li>\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-edit-circle me-2"></i>Restore File\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class="form-check form-check-md">\n                <input class="form-check-input" type="checkbox">\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center file-name-icon">\n                <a href="javascript:void(0);" class="avatar avatar-md bg-light" data-bs-toggle="offcanvas" data-bs-target="#preview" >\n                  <img src="assets/img/icons/file-05.svg" class="img-fluid"\n                    alt="img"></a>\n                <div class="ms-2">\n                  <p class="text-title fw-medium  mb-0"><a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#preview" >Cheat_codez</a></p>\n                </div>\n              </div>\n            </td>\n            <td>8 MB</td>\n            <td>Xml</td>\n            <td>\n              <p class="text-title mb-0">Oct 12, 2025</p>\n              <span>05:00:14 PM</span>\n            </td>\n            <td>\n              <div class="avatar-list-stacked avatar-group-sm">\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-04.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-28.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-14.jpg" alt="img">\n                </span>\n                <span class="avatar avatar-rounded">\n                  <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n                </span>\n              </div>\n            </td>\n            <td>\n              <div class="d-flex align-items-center">\n                <div class="rating-select me-2">\n                  <a href="javascript:void(0);"><i class="ti ti-star"></i></a>\n                </div>\n                <div class="dropdown">\n                  <a href="javascript:void(0);"\n                    class="d-flex align-items-center justify-content-center"\n                    data-bs-toggle="dropdown" aria-expanded="false">\n                    <i class="ti ti-dots fs-14"></i>\n                  </a>\n                  <ul class="dropdown-menu dropdown-menu-right p-3">\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-trash me-2"></i>Permanent Delete\n                      </a>\n                    </li>\n                    <li>\n                      <a class="dropdown-item rounded-1" href="javascript:void(0);">\n                        <i class="ti ti-edit-circle me-2"></i>Restore File\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /Student List -->\n\n  </div>\n</div>\n\n\n				<!-- Create Folder -->\n				<div class="modal fade" id="add_folder">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="modal-header">\n								<h4 class="modal-title">Create Folder</h4>\n								<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n									<i class="ti ti-x"></i>\n								</button>\n							</div>\n							<form>\n								<div class="modal-body">\n									<div class="mb-0">\n										<label class="form-label">Folder Name</label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="modal-footer">\n									<button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>\n									<button type="submit" class="btn btn-primary">Add New Folder</button>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n				<!-- /Create Folder -->\n\n				<!-- Add Customer -->\n				<div class="modal fade" id="add_member">\n					<div class="modal-dialog modal-dialog-centered">\n						<div class="modal-content">\n							<div class="modal-header">\n								<h4 class="modal-title">Add Members</h4>\n								<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n									<i class="ti ti-x"></i>\n								</button>\n							</div>\n							<div class="modal-body">\n								<div class="position-relative input-icon mb-3">\n									<span class="input-icon-addon">\n										<i class="ti ti-search"></i>\n									</span>\n									<input type="text" class="form-control" placeholder="Search">\n								</div>\n								<div class="form-check ps-0">\n									<label class="form-check-label member-check-list activate d-flex align-items-center justify-content-between p-2 rounded mb-1">\n										<span class="d-flex align-items-center text-dark">\n											<span class="avatar avatar-md avatar-rounded">\n												<img src="assets/img/profiles/avatar-01.jpg" class="me-2" alt="Img">\n											</span>\n											Sophie\n										</span>\n										<input type="checkbox" class="form-check-input" checked>\n									</label>\n									<label class="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">\n										<span class="d-flex align-items-center text-dark">\n											<span class="avatar avatar-md avatar-rounded">\n												<img src="assets/img/profiles/avatar-02.jpg" class="me-2" alt="Img">\n											</span>\n											Cameron\n										</span>\n										<input type="checkbox" class="form-check-input">\n									</label>\n									<label class="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">\n										<span class="d-flex align-items-center text-dark">\n											<span class="avatar avatar-md avatar-rounded">\n												<img src="assets/img/profiles/avatar-03.jpg" class="me-2" alt="Img">\n											</span>\n											Doris\n										</span>\n										<input type="checkbox" class="form-check-input">\n									</label>\n									<label class="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">\n										<span class="d-flex align-items-center text-dark">\n											<span class="avatar avatar-md avatar-rounded">\n												<img src="assets/img/profiles/avatar-04.jpg" class="me-2" alt="Img">\n											</span>\n											Rufana\n										</span>\n										<input type="checkbox" class="form-check-input">\n									</label>\n									<label class="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">\n										<span class="d-flex align-items-center text-dark">\n											<span class="avatar avatar-md avatar-rounded">\n												<img src="assets/img/profiles/avatar-04.jpg" class="me-2" alt="Img">\n											</span>\n											Michael\n										</span>\n										<input type="checkbox" class="form-check-input">\n									</label>\n								</div>\n							</div>\n							\n						</div>\n					</div>\n				</div>\n				<!-- /Add Customer -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileManagerComponent, { className: "FileManagerComponent", filePath: "src/app/features/pages/application/file/file-manager/file-manager.component.ts", lineNumber: 26 });
})();
export {
  FileManagerComponent
};
//# sourceMappingURL=chunk-OZULZUSN.js.map
