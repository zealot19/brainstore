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
import {
  CommonModule,
  NgStyle
} from "./chunk-D63C2A5J.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/website-settings/language-settings/language-settings.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => ({ "transform": "rotate(108deg)" });
var _c2 = () => ({ "transform": "rotate(178deg)" });
var _c3 = () => ({ "transform": "rotate(78deg)" });
var LanguageSettingsComponent = class _LanguageSettingsComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  selectedValue1 = "";
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
        if (this.router.url == this.routes.languageSettings) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getLanguageSetting().subscribe((apiRes) => {
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
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedList1 = [
    { value: "Select Language" },
    { value: "English" },
    { value: "Arabic" },
    { value: "Chinese" }
  ];
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
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
  static \u0275fac = function LanguageSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSettingsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSettingsComponent, selectors: [["app-language-settings"]], decls: 365, vars: 23, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "page-btn", "d-flex", "align-items-center", "ms-0"], [1, "select-language", "w-155"], ["placeholder", "Select Language", 1, "custom-mat-select", "select"], ["value", "1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-language", 1, "btn", "btn-primary", "ms-3"], [1, "card-body", "pb-0"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary"], ["data-feather", "filter", 1, "filter-icon"], [1, "table-responsive", "no-pagination"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all"], [1, "checkmarks"], ["type", "checkbox"], [1, "language-name", "d-flex", "align-items-center"], ["src", "assets/img/icons/flag-01.svg", "alt", "Img", 1, "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "checkbox", "id", "users1", "checked", "", 1, "check"], ["for", "users1", 1, "checktoggle"], ["data-value", "80", 1, "circle-progress"], [1, "progress-left"], [1, "progress-bar", "border-warning", 3, "ngStyle"], [1, "progress-right"], [1, "progress-value", "ms-2"], ["type", "checkbox", "id", "status1", "checked", "", 1, "check"], ["for", "status1", 1, "checktoggle"], [1, "action-table-data"], [1, "edit-delete-action"], [1, "btn", "border", "text-dark", "bg-white", "me-2", 3, "routerLink"], ["href", "javascript:void(0);", 1, "btn", "border", "text-dark", "bg-white", "me-2"], ["href", "javascript:void(0);", 1, "me-2", "language-import"], ["data-feather", "download", 1, "feather", "icon-download"], ["href", "javascript:void(0);"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["src", "assets/img/icons/flag-02.svg", "alt", "Img", 1, "me-2"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["type", "checkbox", "id", "users2", "checked", "", 1, "check"], ["for", "users2", 1, "checktoggle"], ["data-value", "70", 1, "circle-progress"], [1, "progress-bar", "border-cyan", 3, "ngStyle"], ["type", "checkbox", "id", "status2", "checked", "", 1, "check"], ["for", "status2", 1, "checktoggle"], ["src", "assets/img/icons/flag-03.svg", "alt", "Img", 1, "me-2"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["type", "checkbox", "id", "users3", "checked", "", 1, "check"], ["for", "users3", 1, "checktoggle"], ["data-value", "50", 1, "circle-progress"], [1, "progress-bar", "border-purple"], [1, "progress-bar", "border-purple", 3, "ngStyle"], ["type", "checkbox", "id", "status3", "checked", "", 1, "check"], ["for", "status3", 1, "checktoggle"], ["src", "assets/img/icons/flag-04.svg", "alt", "Img", 1, "me-2"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "checkbox", "id", "users4", "checked", "", 1, "check"], ["for", "users4", 1, "checktoggle"], ["data-value", "30", 1, "circle-progress"], [1, "progress-bar", "border-danger"], [1, "progress-bar", "border-danger", 3, "ngStyle"], ["type", "checkbox", "id", "status4", "checked", "", 1, "check"], ["for", "status4", 1, "checktoggle"], ["id", "add-language", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "back-btn"], [1, "btn", "btn-secondary", "me-3", 3, "routerLink"], ["data-feather", "arrow-left", 1, "filter-icon", "me-2"], [1, "page-btn", "me-2"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "selected-language"], [1, "d-block", "fs-10", "text-dark"], [1, "progress", "progress-xs", 2, "width", "90px"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-orange", "rounded", 2, "width", "80%"], [1, "d-inline-flex", "fs-12", "ms-2", "text-dark"], ["type", "text", "value", "\u0645\u0646\u062A\u062C\u0627\u062A", 1, "form-control"], ["type", "text", "value", "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0646\u062A\u0647\u064A\u0629 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629", 1, "form-control"], ["type", "text", "value", "\u0645\u062E\u0632\u0648\u0646\u0627\u062A \u0645\u0646\u062E\u0641\u0636\u0629", 1, "form-control"], ["type", "text", "value", "\u0641\u0626\u0629", 1, "form-control"], ["type", "text", "value", "\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0641\u0631\u0639\u064A\u0629", 1, "form-control"], ["type", "text", "value", "\u0645\u0627\u0631\u0643\u0629", 1, "form-control"], ["type", "text", "value", "\u0648\u062D\u062F\u0629", 1, "form-control"], ["type", "text", "value", "\u0627\u0644\u0636\u0645\u0627\u0646\u0627\u062A", 1, "form-control"], ["type", "text", "value", "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", 1, "form-control"], ["type", "text", "value", "\u0637\u0628\u0627\u0639\u0629 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629", 1, "form-control"]], template: function LanguageSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "mat-select", 7)(11, "mat-option", 8);
      \u0275\u0275text(12, "Select Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-option", 8);
      \u0275\u0275text(14, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-option", 8);
      \u0275\u0275text(16, "Arabic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-option", 8);
      \u0275\u0275text(18, "Chinese");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "a", 9);
      \u0275\u0275text(20, "Add Translation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 0)(23, "div", 11)(24, "div", 12)(25, "div", 13)(26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "a", 17);
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 19)(32, "label")(33, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function LanguageSettingsComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function LanguageSettingsComponent_Template_input_ngModelChange_33_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 21)(35, "div", 22)(36, "a", 23);
      \u0275\u0275element(37, "i", 24);
      \u0275\u0275text(38, " Import Sample ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 25)(40, "table", 26)(41, "thead", 27)(42, "tr")(43, "th", 28)(44, "label", 29);
      \u0275\u0275element(45, "input", 30)(46, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th");
      \u0275\u0275text(50, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th");
      \u0275\u0275text(52, "RTL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th");
      \u0275\u0275text(58, "Done");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th");
      \u0275\u0275text(60, "Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th");
      \u0275\u0275text(62, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "th", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "tbody")(65, "tr")(66, "td")(67, "label", 29);
      \u0275\u0275element(68, "input", 32)(69, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "td")(71, "div", 33);
      \u0275\u0275element(72, "img", 34);
      \u0275\u0275text(73, " English ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "td");
      \u0275\u0275text(75, " en ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "td")(77, "div", 35);
      \u0275\u0275element(78, "input", 36)(79, "label", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "td")(81, "div", 35);
      \u0275\u0275element(82, "input", 38)(83, "label", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "td");
      \u0275\u0275text(85, "2145");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "td");
      \u0275\u0275text(87, "1815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "td")(89, "div", 22)(90, "div", 40)(91, "span", 41);
      \u0275\u0275element(92, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 43);
      \u0275\u0275element(94, "span", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 44);
      \u0275\u0275text(96, "80%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "td")(98, "div", 35);
      \u0275\u0275element(99, "input", 45)(100, "label", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "td", 47)(102, "div", 48)(103, "a", 49);
      \u0275\u0275text(104, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "a", 50);
      \u0275\u0275text(106, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "a", 50);
      \u0275\u0275text(108, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "a", 51);
      \u0275\u0275element(110, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "a", 53);
      \u0275\u0275element(112, "i", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(113, "tr")(114, "td")(115, "label", 29);
      \u0275\u0275element(116, "input", 32)(117, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "td")(119, "div", 33);
      \u0275\u0275element(120, "img", 55);
      \u0275\u0275text(121, " German ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "td");
      \u0275\u0275text(123, " Ar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "td")(125, "div", 35);
      \u0275\u0275element(126, "input", 56)(127, "label", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "td")(129, "div", 35);
      \u0275\u0275element(130, "input", 58)(131, "label", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "td");
      \u0275\u0275text(133, "2045");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "td");
      \u0275\u0275text(135, "2045");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "td")(137, "div", 22)(138, "div", 60)(139, "span", 41);
      \u0275\u0275element(140, "span", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "span", 43);
      \u0275\u0275element(142, "span", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 44);
      \u0275\u0275text(144, "70%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "td")(146, "div", 35);
      \u0275\u0275element(147, "input", 62)(148, "label", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "td", 47)(150, "div", 48)(151, "a", 49);
      \u0275\u0275text(152, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "a", 50);
      \u0275\u0275text(154, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "a", 50);
      \u0275\u0275text(156, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "a", 51);
      \u0275\u0275element(158, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "a", 53);
      \u0275\u0275element(160, "i", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(161, "tr")(162, "td")(163, "label", 29);
      \u0275\u0275element(164, "input", 32)(165, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "td")(167, "div", 33);
      \u0275\u0275element(168, "img", 64);
      \u0275\u0275text(169, " Arabic ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "td");
      \u0275\u0275text(171, " zh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "td")(173, "div", 35);
      \u0275\u0275element(174, "input", 65)(175, "label", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "td")(177, "div", 35);
      \u0275\u0275element(178, "input", 67)(179, "label", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "td");
      \u0275\u0275text(181, "2245");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "td");
      \u0275\u0275text(183, "295");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "td")(185, "div", 22)(186, "div", 69)(187, "span", 41);
      \u0275\u0275element(188, "span", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "span", 43);
      \u0275\u0275element(190, "span", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 44);
      \u0275\u0275text(192, "50%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "td")(194, "div", 35);
      \u0275\u0275element(195, "input", 72)(196, "label", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "td", 47)(198, "div", 48)(199, "a", 49);
      \u0275\u0275text(200, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "a", 50);
      \u0275\u0275text(202, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "a", 50);
      \u0275\u0275text(204, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "a", 51);
      \u0275\u0275element(206, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "a", 53);
      \u0275\u0275element(208, "i", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(209, "tr")(210, "td")(211, "label", 29);
      \u0275\u0275element(212, "input", 32)(213, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "td")(215, "div", 33);
      \u0275\u0275element(216, "img", 74);
      \u0275\u0275text(217, " French ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "td");
      \u0275\u0275text(219, " hi ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "td")(221, "div", 35);
      \u0275\u0275element(222, "input", 75)(223, "label", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "td")(225, "div", 35);
      \u0275\u0275element(226, "input", 77)(227, "label", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "td");
      \u0275\u0275text(229, "2535");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "td");
      \u0275\u0275text(231, "1145");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "td")(233, "div", 22)(234, "div", 79)(235, "span", 41);
      \u0275\u0275element(236, "span", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "span", 43);
      \u0275\u0275element(238, "span", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "div", 44);
      \u0275\u0275text(240, "30%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "td")(242, "div", 35);
      \u0275\u0275element(243, "input", 82)(244, "label", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "td", 47)(246, "div", 48)(247, "a", 49);
      \u0275\u0275text(248, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "a", 50);
      \u0275\u0275text(250, "App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "a", 50);
      \u0275\u0275text(252, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "a", 51);
      \u0275\u0275element(254, "i", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "a", 53);
      \u0275\u0275element(256, "i", 54);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(257, "div", 84)(258, "div", 85)(259, "div", 86)(260, "div", 87)(261, "div", 88)(262, "h4");
      \u0275\u0275text(263, "Language Setup");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "button", 89)(265, "span", 90);
      \u0275\u0275text(266, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "form")(268, "div", 91)(269, "div", 12)(270, "div", 13)(271, "div", 14)(272, "div", 15)(273, "div", 16)(274, "a", 17);
      \u0275\u0275element(275, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "div", 19)(277, "label")(278, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function LanguageSettingsComponent_Template_input_ngModelChange_278_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function LanguageSettingsComponent_Template_input_ngModelChange_278_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(279, "div", 22)(280, "div", 92)(281, "a", 93);
      \u0275\u0275element(282, "i", 94);
      \u0275\u0275text(283, "Back to Translations ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "div", 95)(285, "a", 96);
      \u0275\u0275element(286, "img", 64);
      \u0275\u0275text(287, "Arabic");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div")(289, "span", 97);
      \u0275\u0275text(290, "Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 22)(292, "div", 98);
      \u0275\u0275element(293, "div", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "span", 100);
      \u0275\u0275text(295, "80%");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(296, "div", 25)(297, "table", 26)(298, "thead", 27)(299, "tr")(300, "th");
      \u0275\u0275text(301, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "th");
      \u0275\u0275text(303, "Arabic");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(304, "tbody")(305, "tr")(306, "td");
      \u0275\u0275text(307, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "td")(309, "div");
      \u0275\u0275element(310, "input", 101);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(311, "tr")(312, "td");
      \u0275\u0275text(313, "Expired Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "td")(315, "div");
      \u0275\u0275element(316, "input", 102);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "tr")(318, "td");
      \u0275\u0275text(319, "Low Stocks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "td")(321, "div");
      \u0275\u0275element(322, "input", 103);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(323, "tr")(324, "td");
      \u0275\u0275text(325, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "td")(327, "div");
      \u0275\u0275element(328, "input", 104);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(329, "tr")(330, "td");
      \u0275\u0275text(331, "Sub Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "td")(333, "div");
      \u0275\u0275element(334, "input", 105);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(335, "tr")(336, "td");
      \u0275\u0275text(337, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "td")(339, "div");
      \u0275\u0275element(340, "input", 106);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(341, "tr")(342, "td");
      \u0275\u0275text(343, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "td")(345, "div");
      \u0275\u0275element(346, "input", 107);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(347, "tr")(348, "td");
      \u0275\u0275text(349, "Warranties");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "td")(351, "div");
      \u0275\u0275element(352, "input", 108);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(353, "tr")(354, "td");
      \u0275\u0275text(355, "Print Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "td")(357, "div");
      \u0275\u0275element(358, "input", 109);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(359, "tr")(360, "td");
      \u0275\u0275text(361, "Print QR Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "td")(363, "div");
      \u0275\u0275element(364, "input", 110);
      \u0275\u0275elementEnd()()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(33);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance(59);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(16, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(17, _c2));
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.languageSettingsweb);
      \u0275\u0275advance(37);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(18, _c3));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(19, _c2));
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.languageSettingsweb);
      \u0275\u0275advance(39);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(20, _c2));
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.languageSettingsweb);
      \u0275\u0275advance(39);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.languageSettingsweb);
      \u0275\u0275advance(31);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(22, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings);
    }
  }, dependencies: [SettingsSidebarComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, CommonModule, NgStyle, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-language-settings", imports: [SettingsSidebarComponent, FormsModule, RouterLink, CommonModule, MatSelectModule], template: `<div class="row">
  <div class="col-xl-12">
    <div class="settings-wrapper d-flex">
      <app-settings-sidebar></app-settings-sidebar>
      <div class="card flex-fill mb-0 w-50">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h4>Language</h4>
          <div class="page-btn d-flex align-items-center ms-0">
            <div class="select-language w-155">
              <mat-select class="custom-mat-select select" placeholder="Select Language">
                <mat-option value="1">Select Language</mat-option>
                <mat-option value="1">English</mat-option>
                <mat-option value="1">Arabic</mat-option>
                <mat-option value="1">Chinese</mat-option>
              </mat-select>
            </div>
            <a href="javascript:void(0);" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#add-language">Add Translation</a>
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-lg-12">
              <div class="card table-list-card">
                <div class="card-body">
                  <div class="table-top">
                    <div class="search-set">
                      <div class="search-input">
                        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
                        <div class="dataTables_filter">
                          <label>
                            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
                              type="search" class="form-control" placeholder="Search" />
                            </label>
                          </div>
                        </div>
                    </div>
                    <div class="search-path">
                      <div class="d-flex align-items-center">
                        <a class="btn btn-secondary" href="javascript:void(0);">
                          <i data-feather="filter" class="filter-icon"></i>
                          Import Sample
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive no-pagination">
                    <table class="table datatable">
                      <thead class="thead-light">
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" id="select-all">
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                          <th>Language</th>
                          <th>Code</th>
                          <th>RTL</th>
                          <th>Default</th>
                          <th>Total</th>
                          <th>Done</th>
                          <th>Progress</th>
                          <th>Status</th>
                          <th class="no-sort"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="language-name d-flex align-items-center">
                              <img src="assets/img/icons/flag-01.svg" class="me-2" alt="Img">
                              English
                            </div>
                          </td>
                          <td>
                            en
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="user1" class="check" checked="">
                              <label for="user1" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="users1" class="check" checked="">
                              <label for="users1" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>2145</td>
                          <td>1815</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="circle-progress" data-value="80">
                                <span class="progress-left">
                                  <span class="progress-bar border-warning" [ngStyle]="{'transform':'rotate(108deg)'}"></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar border-warning" [ngStyle]="{'transform':'rotate(178deg)'}"></span>
                                </span>
                                
                              </div>
                              <div class="progress-value ms-2">80%</div>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="status1" class="check" checked="">
                              <label for="status1" class="checktoggle"></label>
                            </div>	
                          </td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a [routerLink]="routes.languageSettingsweb" class="btn border text-dark bg-white me-2">Web</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                              <a href="javascript:void(0);" class="me-2 language-import">
                                <i data-feather="download" class="feather icon-download"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i data-feather="trash-2" class="feather icon-trash-2"></i>
                              </a>
                            </div>
                          </td>
                        </tr>	
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="language-name d-flex align-items-center">
                              <img src="assets/img/icons/flag-02.svg" class="me-2" alt="Img">
                              German
                            </div>
                          </td>
                          <td>
                            Ar
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="user2" class="check" checked="">
                              <label for="user2" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="users2" class="check" checked="">
                              <label for="users2" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>2045</td>
                          <td>2045</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="circle-progress" data-value="70">
                                <span class="progress-left">
                                  <span class="progress-bar border-cyan" [ngStyle]="{'transform':'rotate(78deg)'}"></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar border-cyan" [ngStyle]="{'transform':'rotate(178deg)'}"></span>
                                </span>
                                
                              </div>
                              <div class="progress-value ms-2">70%</div>
                            </div>																
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="status2" class="check" checked="">
                              <label for="status2" class="checktoggle"></label>
                            </div>	
                          </td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a [routerLink]="routes.languageSettingsweb" class="btn border text-dark bg-white me-2">Web</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                              <a href="javascript:void(0);" class="me-2 language-import">
                                <i data-feather="download" class="feather icon-download"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i data-feather="trash-2" class="feather icon-trash-2"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="language-name d-flex align-items-center">
                              <img src="assets/img/icons/flag-03.svg" class="me-2" alt="Img">
                              Arabic
                            </div>
                          </td>
                          <td>
                            zh
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="user3" class="check" checked="">
                              <label for="user3" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="users3" class="check" checked="">
                              <label for="users3" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>2245</td>
                          <td>295</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="circle-progress" data-value="50">
                                <span class="progress-left">
                                  <span class="progress-bar border-purple" ></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar border-purple" [ngStyle]="{'transform':'rotate(178deg)'}"></span>
                                </span>
                                
                              </div>
                              <div class="progress-value ms-2">50%</div>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="status3" class="check" checked="">
                              <label for="status3" class="checktoggle"></label>
                            </div>	
                          </td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a [routerLink]="routes.languageSettingsweb" class="btn border text-dark bg-white me-2">Web</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                              <a href="javascript:void(0);" class="me-2 language-import">
                                <i data-feather="download" class="feather icon-download"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i data-feather="trash-2" class="feather icon-trash-2"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="language-name d-flex align-items-center">
                              <img src="assets/img/icons/flag-04.svg" class="me-2" alt="Img">
                              French
                            </div>
                          </td>
                          <td>
                            hi
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="user4" class="check" checked="">
                              <label for="user4" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="users4" class="check" checked="">
                              <label for="users4" class="checktoggle"></label>
                            </div>						
                          </td>
                          <td>2535</td>
                          <td>1145</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="circle-progress" data-value="30">
                                <span class="progress-left">
                                  <span class="progress-bar border-danger" ></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar border-danger" [ngStyle]="{'transform':'rotate(108deg)'}"></span>
                                </span>
                                
                              </div>
                              <div class="progress-value ms-2">30%</div>
                            </div>
                          </td>
                          <td>
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <input type="checkbox" id="status4" class="check" checked="">
                              <label for="status4" class="checktoggle"></label>
                            </div>	
                          </td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a [routerLink]="routes.languageSettingsweb" class="btn border text-dark bg-white me-2">Web</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">App</a>
                              <a href="javascript:void(0);" class="btn border text-dark bg-white me-2">Admin</a>
                              <a href="javascript:void(0);" class="me-2 language-import">
                                <i data-feather="download" class="feather icon-download"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i data-feather="trash-2" class="feather icon-trash-2"></i>
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


  		<!-- Language -->
      <div class="modal fade" id="add-language">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Language Setup</h4>
              </div>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div class="card table-list-card">
                  <div class="card-body">
                    <div class="table-top">
                      <div class="search-set">
                        <div class="search-input">
                          <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
                          <div class="dataTables_filter">
                            <label>
                              <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
                                type="search" class="form-control" placeholder="Search" />
                              </label>
                            </div>
                          </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="back-btn">
                          <a [routerLink]="routes.languageSettings" class="btn btn-secondary me-3"><i data-feather="arrow-left" class="filter-icon me-2"></i>Back to Translations </a>
                        </div>
                        <div class="page-btn me-2">
                          <a href="javascript:void(0);" class="d-flex align-items-center selected-language"><img src="assets/img/icons/flag-03.svg" class="me-2" alt="Img">Arabic</a>
                        </div>
                        <div>
                          <span class="d-block fs-10 text-dark">Progress</span>
                          <div class="d-flex align-items-center">
                            <div class="progress progress-xs" style="width: 90px;">
                              <div class="progress-bar bg-orange rounded" role="progressbar" style="width: 80%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="d-inline-flex fs-12 ms-2 text-dark">80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive no-pagination">
                      <table class="table datatable">
                        <thead class="thead-light">
                          <tr>
                            <th>English</th>
                            <th>Arabic</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Products</td>
                            <td><div><input type="text" class="form-control" value="\u0645\u0646\u062A\u062C\u0627\u062A"></div></td>
                          </tr>																		
                          <tr>
                            <td>Expired Products</td>
                            <td><div><input type="text" class="form-control" value="\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0646\u062A\u0647\u064A\u0629 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629"></div></td>
                          </tr>																		
                          <tr>
                            <td>Low Stocks</td>
                            <td><div><input type="text" class="form-control" value="\u0645\u062E\u0632\u0648\u0646\u0627\u062A \u0645\u0646\u062E\u0641\u0636\u0629"></div></td>
                          </tr>																		
                          <tr>
                            <td>Category</td>
                            <td><div><input type="text" class="form-control" value="\u0641\u0626\u0629"></div></td>
                          </tr>																		
                          <tr>
                            <td>Sub Category</td>
                            <td><div><input type="text" class="form-control" value="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0641\u0631\u0639\u064A\u0629"></div></td>
                          </tr>																		
                          <tr>
                            <td>Brand</td>
                            <td><div><input type="text" class="form-control" value="\u0645\u0627\u0631\u0643\u0629"></div></td>
                          </tr>																		
                          <tr>
                            <td>Unit</td>
                            <td><div><input type="text" class="form-control" value="\u0648\u062D\u062F\u0629"></div></td>
                          </tr>																		
                          <tr>
                            <td>Warranties</td>
                            <td><div><input type="text" class="form-control" value="\u0627\u0644\u0636\u0645\u0627\u0646\u0627\u062A"></div></td>
                          </tr>																		
                          <tr>
                            <td>Print Barcode</td>
                            <td><div><input type="text" class="form-control" value="\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F"></div></td>
                          </tr>																		
                          <tr>
                            <td>Print QR Code</td>
                            <td><div><input type="text" class="form-control" value="\u0637\u0628\u0627\u0639\u0629 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629"></div></td>
                          </tr>																		
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /Language -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSettingsComponent, { className: "LanguageSettingsComponent", filePath: "src/app/features/pages/settings/website-settings/language-settings/language-settings.component.ts", lineNumber: 31 });
})();
export {
  LanguageSettingsComponent
};
//# sourceMappingURL=chunk-5OQBD3UT.js.map
