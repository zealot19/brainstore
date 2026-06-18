import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
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
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
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
import "./chunk-6CWWNZ42.js";
import "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/notes/notes.component.ts
var _c0 = (a0) => ({ "budgeted-role-notes": a0 });
var _c1 = () => ({ standalone: true });
function NotesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function NotesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
var NotesComponent = class _NotesComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
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
  selectedValue9 = "";
  appSidebar = true;
  toggleChange() {
    this.appSidebar = !this.appSidebar;
  }
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  ngOnInit() {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
    this.editor1.destroy();
  }
  static \u0275fac = function NotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesComponent, selectors: [["app-notes"]], decls: 1072, vars: 31, consts: [[1, "page-header", "page-add-notes", "border-0", "flex-sm-row", "flex-column"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "mb-0"], [1, "d-flex", "flex-sm-row", "flex-column", "align-items-sm-center", "align-items-start"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "search-set"], [1, "search-input"], [1, "btn-searchset"], [1, "ti", "ti-search", "fs-14", "feather-search", "ps-2"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-sm", "py-0"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#note-units", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "col-xl-3", "col-md-12", "sidebars-right", "section-bulk-widget"], [1, "border", "rounded-3", "bg-white", "p-3", "theiaStickySidebar"], [1, "mb-3", "pb-3", "border-bottom"], [1, "d-flex", "align-items-center"], [1, "ti", "ti-file-text", "me-2"], [1, "border-bottom", "pb-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-profile", "type", "button", "role", "tab", "aria-controls", "v-pills-profile", "aria-selected", "true", 1, "d-flex", "text-start", "align-items-center", "fw-medium", "fs-15", "nav-link", "active", "mb-1"], [1, "ti", "ti-inbox", "me-2"], [1, "ms-2"], ["id", "v-pills-messages-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-messages", "type", "button", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", 1, "d-flex", "text-start", "align-items-center", "fw-medium", "fs-15", "nav-link", "mb-1"], [1, "ti", "ti-star", "me-2"], ["id", "v-pills-settings-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-settings", "type", "button", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "d-flex", "text-start", "align-items-center", "fw-medium", "fs-15", "nav-link", "mb-0"], [1, "ti", "ti-trash", "me-2"], [1, "mt-3"], [1, "border-bottom", "px-2", "pb-3", "mb-3"], [1, "mb-2"], [1, "d-flex", "flex-column", "mt-2"], ["href", "javascript:void(0);", 1, "text-info", "mb-2"], [1, "text-info", "me-2"], [1, "fas", "fa-square", "square-rotate", "fs-10"], ["href", "javascript:void(0);", 1, "text-danger", "mb-2"], [1, "text-danger", "me-2"], ["href", "javascript:void(0);", 1, "text-warning", "mb-2"], [1, "text-warning", "me-2"], ["href", "javascript:void(0);", 1, "text-success"], [1, "text-success", "me-2"], [1, "px-2"], ["href", "javascript:void(0);", 1, "text-success", "mb-2"], ["href", "javascript:void(0);", 1, "text-danger"], [1, "col-xl-9", "budget-role-notes", 3, "ngClass"], [1, "bg-white", "rounded-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "p-3", "pb-0"], [1, "form-sort", "me-2", "mb-3"], ["data-feather", "sliders", 1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by A-Z", 1, "custom-mat-select", "select"], ["value", "1"], [1, "search-set", "ms-3", "mb-3"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-sm"], ["id", "v-pills-tabContent", 1, "tab-content"], ["id", "v-pills-profile", "role", "tabpanel", "aria-labelledby", "v-pills-profile-tab", 1, "tab-pane", "fade", "active", "show"], [1, "border-bottom", "mb-4", "pb-4"], [1, "col-md-4", "d-flex"], [1, "card", "rounded-3", "mb-4", "flex-fill"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "badge", "bg-outline-success", "d-inline-flex", "align-items-center"], [1, "fas", "fa-circle", "fs-6", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu", "notes-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-note-units", 1, "dropdown-item"], ["data-feather", "edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item"], ["data-feather", "trash-2"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["data-feather", "star"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-note-units", 1, "dropdown-item"], ["data-feather", "eye"], [1, "my-3"], [1, "text-truncate", "mb-1"], ["href", "javascript:void(0);"], [1, "mb-3", "d-flex", "align-items-center", "text-dark"], [1, "ti", "ti-calendar", "me-1"], [1, "text-truncate", "line-clamb-2", "text-wrap"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "./assets/img/profiles/avatar-05.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "text-info", "d-flex", "align-items-center"], [1, "fas", "fa-square", "square-rotate", "fs-10", "me-1"], ["href", "javascript:void(0);", 1, "me-2"], [1, "fas", "fa-star", "text-warning"], [1, "ti", "ti-trash", "text-danger"], [1, "badge", "bg-outline-danger", "d-inline-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-06.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "text-success", "d-flex", "align-items-center"], [1, "badge", "bg-outline-warning", "d-inline-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-07.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "text-warning", "d-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-08.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], ["src", "./assets/img/profiles/avatar-09.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], [1, "badge", "bg-outline-info", "d-inline-flex", "align-items-center"], ["src", "./assets/img/profiles/avatar-10.jpg", "alt", "Profile", 1, "img-fluid", "rounded-circle"], ["id", "v-pills-messages", "role", "tabpanel", "aria-labelledby", "v-pills-messages-tab", 1, "tab-pane", "fade"], ["id", "v-pills-settings", "role", "tabpanel", "aria-labelledby", "v-pills-settings-tab", 1, "tab-pane", "fade"], [1, "col-12", "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "btn-danger", "mb-4"], [1, "ti", "ti-trash", "f-20", "me-2"], [1, "row", "custom-pagination"], [1, "col-md-12"], [1, "paginations", "d-flex", "justify-content-end"], [1, "fas", "fa-chevron-left"], [1, "d-flex", "align-items-center", "page-wrap"], ["href", "javascript:void(0);", 1, "active"], [1, "fas", "fa-chevron-right"], ["id", "note-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], ["value", "Recent1"], ["value", "Recent2"], [1, "col-6"], ["placeholder", "Select", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Select"], [1, "col-lg-12"], [1, "mb-3", "summer-description-box", "notes-summernote"], [3, "editor"], [3, "editor", "toolbar"], [1, "modal-footer-btn", "mt-0"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-note-units", 1, "modal", "fade"], [1, "edit-note-head", "d-flex", "align-items-center"], ["type", "text", "placeholder", "Meet Lisa to discuss project details", 1, "form-control"], ["placeholder", "Onhold", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Onhold"], ["placeholder", "High", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "High"], ["value", "Medium"], ["value", "Low"], ["id", "delete_modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "view-note-units", 1, "modal", "fade"], [1, "page-title", "edit-page-title"], [1, "edit-noted-head", "d-flex", "align-items-center"], [1, "edit-head-view"], [1, "badged", "low"], [1, "fas", "fa-circle"], [1, "modal-footer-btn", "edit-footer-menu", "mt-0"]], template: function NotesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6", 3);
      \u0275\u0275text(6, "Manage your notes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "ul", 5)(9, "li")(10, "a", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 8);
      \u0275\u0275listener("click", function NotesComponent_Template_a_click_13_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(14, NotesComponent_Conditional_14_Template, 1, 0, "i", 9);
      \u0275\u0275conditionalCreate(15, NotesComponent_Conditional_15_Template, 1, 0, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "div", 10)(18, "div", 11)(19, "span", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "label");
      \u0275\u0275element(23, "input", 15);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(24, "div", 16)(25, "a", 17);
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275text(27, " Add Note");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "div", 21)(31, "div", 22)(32, "h4", 23);
      \u0275\u0275element(33, "i", 24);
      \u0275\u0275text(34, "Notes List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 25)(36, "div", 26)(37, "button", 27);
      \u0275\u0275element(38, "i", 28);
      \u0275\u0275text(39, "All Notes");
      \u0275\u0275elementStart(40, "span", 29);
      \u0275\u0275text(41, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "button", 30);
      \u0275\u0275element(43, "i", 31);
      \u0275\u0275text(44, " Important ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 32);
      \u0275\u0275element(46, "i", 33);
      \u0275\u0275text(47, " Trash ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 34)(49, "div", 35)(50, "h5", 36);
      \u0275\u0275text(51, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 37)(53, "a", 38)(54, "span", 39);
      \u0275\u0275element(55, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " Pending ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "a", 41)(58, "span", 42);
      \u0275\u0275element(59, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, " Onhold ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "a", 43)(62, "span", 44);
      \u0275\u0275element(63, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " Inprogress ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "a", 45)(66, "span", 46);
      \u0275\u0275element(67, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " Done ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 47)(70, "h5", 36);
      \u0275\u0275text(71, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 37)(73, "a", 43)(74, "span", 44);
      \u0275\u0275element(75, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, " Medium ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 48)(78, "span", 46);
      \u0275\u0275element(79, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " High ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "a", 49)(82, "span", 42);
      \u0275\u0275element(83, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(84, " Low ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(85, "div", 50)(86, "div", 51)(87, "div", 52);
      \u0275\u0275element(88, "i", 53);
      \u0275\u0275elementStart(89, "mat-select", 54)(90, "mat-option", 55);
      \u0275\u0275text(91, "Sort by A-Z");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "mat-option", 55);
      \u0275\u0275text(93, "Ascending ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "mat-option", 55);
      \u0275\u0275text(95, "Descending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "mat-option", 55);
      \u0275\u0275text(97, "Recently Viewed ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-option", 55);
      \u0275\u0275text(99, "Recently Added");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 23);
      \u0275\u0275element(101, "app-date-range-picker");
      \u0275\u0275elementStart(102, "div", 56)(103, "div", 11)(104, "span", 12);
      \u0275\u0275element(105, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 14)(107, "label");
      \u0275\u0275element(108, "input", 57);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(109, "div", 58)(110, "div", 59);
      \u0275\u0275element(111, "div", 60);
      \u0275\u0275elementStart(112, "div", 19)(113, "div", 61)(114, "div", 62)(115, "div", 63)(116, "div", 64)(117, "span", 65);
      \u0275\u0275element(118, "i", 66);
      \u0275\u0275text(119, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div")(121, "a", 67);
      \u0275\u0275element(122, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 69)(124, "a", 70)(125, "span");
      \u0275\u0275element(126, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 72)(129, "span");
      \u0275\u0275element(130, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(131, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "a", 74)(133, "span");
      \u0275\u0275element(134, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(135, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "a", 76)(137, "span");
      \u0275\u0275element(138, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(140, "div", 78)(141, "h5", 79)(142, "a", 80);
      \u0275\u0275text(143, "Backup Files EOD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "p", 81);
      \u0275\u0275element(145, "i", 82);
      \u0275\u0275text(146, "20 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 83);
      \u0275\u0275text(148, "Project files should be took backup before end of the day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 84)(150, "div", 23)(151, "a", 85);
      \u0275\u0275element(152, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "span", 87);
      \u0275\u0275element(154, "i", 88);
      \u0275\u0275text(155, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 23)(157, "a", 89)(158, "span");
      \u0275\u0275element(159, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "a", 80)(161, "span");
      \u0275\u0275element(162, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(163, "div", 61)(164, "div", 62)(165, "div", 63)(166, "div", 64)(167, "span", 92);
      \u0275\u0275element(168, "i", 66);
      \u0275\u0275text(169, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div")(171, "a", 67);
      \u0275\u0275element(172, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 69)(174, "a", 70)(175, "span");
      \u0275\u0275element(176, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(177, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "a", 72)(179, "span");
      \u0275\u0275element(180, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(181, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "a", 74)(183, "span");
      \u0275\u0275element(184, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(185, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "a", 76)(187, "span");
      \u0275\u0275element(188, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(189, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "div", 78)(191, "h5", 79)(192, "a", 80);
      \u0275\u0275text(193, "Download Server Logs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "p", 81);
      \u0275\u0275element(195, "i", 82);
      \u0275\u0275text(196, "25 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p", 83);
      \u0275\u0275text(198, "Server log is a text document that contains a record of all activity.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "div", 84)(200, "div", 23)(201, "a", 85);
      \u0275\u0275element(202, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "span", 94);
      \u0275\u0275element(204, "i", 88);
      \u0275\u0275text(205, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 23)(207, "a", 89)(208, "span");
      \u0275\u0275element(209, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "a", 80)(211, "span");
      \u0275\u0275element(212, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(213, "div", 61)(214, "div", 62)(215, "div", 63)(216, "div", 64)(217, "span", 95);
      \u0275\u0275element(218, "i", 66);
      \u0275\u0275text(219, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div")(221, "a", 67);
      \u0275\u0275element(222, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 69)(224, "a", 70)(225, "span");
      \u0275\u0275element(226, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(227, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "a", 72)(229, "span");
      \u0275\u0275element(230, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(231, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "a", 74)(233, "span");
      \u0275\u0275element(234, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(235, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "a", 76)(237, "span");
      \u0275\u0275element(238, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(239, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(240, "div", 78)(241, "h5", 79)(242, "a", 80);
      \u0275\u0275text(243, "Team meet at Starbucks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "p", 81);
      \u0275\u0275element(245, "i", 82);
      \u0275\u0275text(246, "26 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "p", 83);
      \u0275\u0275text(248, "Meeting all teamets at Starbucks for identifying them all.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "div", 84)(250, "div", 23)(251, "a", 85);
      \u0275\u0275element(252, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "span", 97);
      \u0275\u0275element(254, "i", 88);
      \u0275\u0275text(255, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "div", 23)(257, "a", 89)(258, "span");
      \u0275\u0275element(259, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "a", 80)(261, "span");
      \u0275\u0275element(262, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(263, "div", 61)(264, "div", 62)(265, "div", 63)(266, "div", 64)(267, "span", 65);
      \u0275\u0275element(268, "i", 66);
      \u0275\u0275text(269, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div")(271, "a", 67);
      \u0275\u0275element(272, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 69)(274, "a", 70)(275, "span");
      \u0275\u0275element(276, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(277, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "a", 72)(279, "span");
      \u0275\u0275element(280, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(281, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "a", 74)(283, "span");
      \u0275\u0275element(284, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(285, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "a", 76)(287, "span");
      \u0275\u0275element(288, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(289, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(290, "div", 78)(291, "h5", 79)(292, "a", 80);
      \u0275\u0275text(293, "Create a compost pile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "p", 81);
      \u0275\u0275element(295, "i", 82);
      \u0275\u0275text(296, "27 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "p", 83);
      \u0275\u0275text(298, "Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc.. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 84)(300, "div", 23)(301, "a", 85);
      \u0275\u0275element(302, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "span", 97);
      \u0275\u0275element(304, "i", 88);
      \u0275\u0275text(305, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 23)(307, "a", 89)(308, "span");
      \u0275\u0275element(309, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "a", 80)(311, "span");
      \u0275\u0275element(312, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(313, "div", 61)(314, "div", 62)(315, "div", 63)(316, "div", 64)(317, "span", 92);
      \u0275\u0275element(318, "i", 66);
      \u0275\u0275text(319, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div")(321, "a", 67);
      \u0275\u0275element(322, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div", 69)(324, "a", 70)(325, "span");
      \u0275\u0275element(326, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(327, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "a", 72)(329, "span");
      \u0275\u0275element(330, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(331, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "a", 74)(333, "span");
      \u0275\u0275element(334, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(335, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "a", 76)(337, "span");
      \u0275\u0275element(338, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(339, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(340, "div", 78)(341, "h5", 79)(342, "a", 80);
      \u0275\u0275text(343, "Take a hike at a local park");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "p", 81);
      \u0275\u0275element(345, "i", 82);
      \u0275\u0275text(346, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "p", 83);
      \u0275\u0275text(348, "Hiking involves a long energetic walk in a natural environment.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "div", 84)(350, "div", 23)(351, "a", 85);
      \u0275\u0275element(352, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "span", 87);
      \u0275\u0275element(354, "i", 88);
      \u0275\u0275text(355, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(356, "div", 23)(357, "a", 89)(358, "span");
      \u0275\u0275element(359, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "a", 80)(361, "span");
      \u0275\u0275element(362, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(363, "div", 61)(364, "div", 62)(365, "div", 63)(366, "div", 64)(367, "span", 100);
      \u0275\u0275element(368, "i", 66);
      \u0275\u0275text(369, "medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "div")(371, "a", 67);
      \u0275\u0275element(372, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "div", 69)(374, "a", 70)(375, "span");
      \u0275\u0275element(376, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(377, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "a", 72)(379, "span");
      \u0275\u0275element(380, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(381, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "a", 74)(383, "span");
      \u0275\u0275element(384, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(385, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "a", 76)(387, "span");
      \u0275\u0275element(388, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(389, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(390, "div", 78)(391, "h5", 79)(392, "a", 80);
      \u0275\u0275text(393, "Research a topic interested");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "p", 81);
      \u0275\u0275element(395, "i", 82);
      \u0275\u0275text(396, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "p", 83);
      \u0275\u0275text(398, "Research a topic interested by listen actively and attentively.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(399, "div", 84)(400, "div", 23)(401, "a", 85);
      \u0275\u0275element(402, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "span", 94);
      \u0275\u0275element(404, "i", 88);
      \u0275\u0275text(405, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(406, "div", 23)(407, "a", 89)(408, "span");
      \u0275\u0275element(409, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "a", 80)(411, "span");
      \u0275\u0275element(412, "i", 91);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(413, "div", 102)(414, "div", 19)(415, "div", 61)(416, "div", 62)(417, "div", 63)(418, "div", 64)(419, "span", 65);
      \u0275\u0275element(420, "i", 66);
      \u0275\u0275text(421, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "div")(423, "a", 67);
      \u0275\u0275element(424, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "div", 69)(426, "a", 70)(427, "span");
      \u0275\u0275element(428, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(429, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "a", 72)(431, "span");
      \u0275\u0275element(432, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(433, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(434, "a", 74)(435, "span");
      \u0275\u0275element(436, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(437, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "a", 76)(439, "span");
      \u0275\u0275element(440, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(441, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(442, "div", 78)(443, "h5", 79)(444, "a", 80);
      \u0275\u0275text(445, "Backup Files EOD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(446, "p", 81);
      \u0275\u0275element(447, "i", 82);
      \u0275\u0275text(448, "20 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "p", 83);
      \u0275\u0275text(450, "Project files should be took backup before end of the day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "div", 84)(452, "div", 23)(453, "a", 85);
      \u0275\u0275element(454, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "span", 87);
      \u0275\u0275element(456, "i", 88);
      \u0275\u0275text(457, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(458, "div", 23)(459, "a", 89)(460, "span");
      \u0275\u0275element(461, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(462, "a", 80)(463, "span");
      \u0275\u0275element(464, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(465, "div", 61)(466, "div", 62)(467, "div", 63)(468, "div", 64)(469, "span", 92);
      \u0275\u0275element(470, "i", 66);
      \u0275\u0275text(471, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "div")(473, "a", 67);
      \u0275\u0275element(474, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "div", 69)(476, "a", 70)(477, "span");
      \u0275\u0275element(478, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(479, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "a", 72)(481, "span");
      \u0275\u0275element(482, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(483, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "a", 74)(485, "span");
      \u0275\u0275element(486, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(487, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "a", 76)(489, "span");
      \u0275\u0275element(490, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(491, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(492, "div", 78)(493, "h5", 79)(494, "a", 80);
      \u0275\u0275text(495, "Download Server Logs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(496, "p", 81);
      \u0275\u0275element(497, "i", 82);
      \u0275\u0275text(498, "25 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "p", 83);
      \u0275\u0275text(500, "Server log is a text document that contains a record of all activity.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "div", 84)(502, "div", 23)(503, "a", 85);
      \u0275\u0275element(504, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "span", 94);
      \u0275\u0275element(506, "i", 88);
      \u0275\u0275text(507, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(508, "div", 23)(509, "a", 89)(510, "span");
      \u0275\u0275element(511, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(512, "a", 80)(513, "span");
      \u0275\u0275element(514, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(515, "div", 61)(516, "div", 62)(517, "div", 63)(518, "div", 64)(519, "span", 95);
      \u0275\u0275element(520, "i", 66);
      \u0275\u0275text(521, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "div")(523, "a", 67);
      \u0275\u0275element(524, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "div", 69)(526, "a", 70)(527, "span");
      \u0275\u0275element(528, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(529, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(530, "a", 72)(531, "span");
      \u0275\u0275element(532, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(533, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "a", 74)(535, "span");
      \u0275\u0275element(536, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(537, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "a", 76)(539, "span");
      \u0275\u0275element(540, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(541, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(542, "div", 78)(543, "h5", 79)(544, "a", 80);
      \u0275\u0275text(545, "Team meet at Starbucks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(546, "p", 81);
      \u0275\u0275element(547, "i", 82);
      \u0275\u0275text(548, "26 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "p", 83);
      \u0275\u0275text(550, "Meeting all teamets at Starbucks for identifying them all.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(551, "div", 84)(552, "div", 23)(553, "a", 85);
      \u0275\u0275element(554, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "span", 97);
      \u0275\u0275element(556, "i", 88);
      \u0275\u0275text(557, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(558, "div", 23)(559, "a", 89)(560, "span");
      \u0275\u0275element(561, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(562, "a", 80)(563, "span");
      \u0275\u0275element(564, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(565, "div", 61)(566, "div", 62)(567, "div", 63)(568, "div", 64)(569, "span", 65);
      \u0275\u0275element(570, "i", 66);
      \u0275\u0275text(571, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(572, "div")(573, "a", 67);
      \u0275\u0275element(574, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "div", 69)(576, "a", 70)(577, "span");
      \u0275\u0275element(578, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(579, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "a", 72)(581, "span");
      \u0275\u0275element(582, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(583, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "a", 74)(585, "span");
      \u0275\u0275element(586, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(587, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "a", 76)(589, "span");
      \u0275\u0275element(590, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(591, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(592, "div", 78)(593, "h5", 79)(594, "a", 80);
      \u0275\u0275text(595, "Create a compost pile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(596, "p", 81);
      \u0275\u0275element(597, "i", 82);
      \u0275\u0275text(598, "27 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "p", 83);
      \u0275\u0275text(600, "Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc.. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(601, "div", 84)(602, "div", 23)(603, "a", 85);
      \u0275\u0275element(604, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "span", 97);
      \u0275\u0275element(606, "i", 88);
      \u0275\u0275text(607, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(608, "div", 23)(609, "a", 89)(610, "span");
      \u0275\u0275element(611, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "a", 80)(613, "span");
      \u0275\u0275element(614, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(615, "div", 61)(616, "div", 62)(617, "div", 63)(618, "div", 64)(619, "span", 92);
      \u0275\u0275element(620, "i", 66);
      \u0275\u0275text(621, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "div")(623, "a", 67);
      \u0275\u0275element(624, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "div", 69)(626, "a", 70)(627, "span");
      \u0275\u0275element(628, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(629, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(630, "a", 72)(631, "span");
      \u0275\u0275element(632, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(633, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(634, "a", 74)(635, "span");
      \u0275\u0275element(636, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(637, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "a", 76)(639, "span");
      \u0275\u0275element(640, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(641, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(642, "div", 78)(643, "h5", 79)(644, "a", 80);
      \u0275\u0275text(645, "Take a hike at a local park");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(646, "p", 81);
      \u0275\u0275element(647, "i", 82);
      \u0275\u0275text(648, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(649, "p", 83);
      \u0275\u0275text(650, "Hiking involves a long energetic walk in a natural environment.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(651, "div", 84)(652, "div", 23)(653, "a", 85);
      \u0275\u0275element(654, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(655, "span", 87);
      \u0275\u0275element(656, "i", 88);
      \u0275\u0275text(657, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(658, "div", 23)(659, "a", 89)(660, "span");
      \u0275\u0275element(661, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(662, "a", 80)(663, "span");
      \u0275\u0275element(664, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(665, "div", 61)(666, "div", 62)(667, "div", 63)(668, "div", 64)(669, "span", 100);
      \u0275\u0275element(670, "i", 66);
      \u0275\u0275text(671, "medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(672, "div")(673, "a", 67);
      \u0275\u0275element(674, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(675, "div", 69)(676, "a", 70)(677, "span");
      \u0275\u0275element(678, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(679, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(680, "a", 72)(681, "span");
      \u0275\u0275element(682, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(683, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(684, "a", 74)(685, "span");
      \u0275\u0275element(686, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(687, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "a", 76)(689, "span");
      \u0275\u0275element(690, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(691, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(692, "div", 78)(693, "h5", 79)(694, "a", 80);
      \u0275\u0275text(695, "Research a topic interested");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(696, "p", 81);
      \u0275\u0275element(697, "i", 82);
      \u0275\u0275text(698, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "p", 83);
      \u0275\u0275text(700, "Research a topic interested by listen actively and attentively.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(701, "div", 84)(702, "div", 23)(703, "a", 85);
      \u0275\u0275element(704, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(705, "span", 94);
      \u0275\u0275element(706, "i", 88);
      \u0275\u0275text(707, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(708, "div", 23)(709, "a", 89)(710, "span");
      \u0275\u0275element(711, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(712, "a", 80)(713, "span");
      \u0275\u0275element(714, "i", 91);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(715, "div", 103)(716, "div", 19)(717, "div", 104)(718, "a", 105)(719, "span");
      \u0275\u0275element(720, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275text(721, " Restore all ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(722, "div", 19)(723, "div", 61)(724, "div", 62)(725, "div", 63)(726, "div", 64)(727, "span", 65);
      \u0275\u0275element(728, "i", 66);
      \u0275\u0275text(729, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(730, "div")(731, "a", 67);
      \u0275\u0275element(732, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "div", 69)(734, "a", 70)(735, "span");
      \u0275\u0275element(736, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(737, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "a", 72)(739, "span");
      \u0275\u0275element(740, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(741, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "a", 74)(743, "span");
      \u0275\u0275element(744, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(745, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(746, "a", 76)(747, "span");
      \u0275\u0275element(748, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(749, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(750, "div", 78)(751, "h5", 79)(752, "a", 80);
      \u0275\u0275text(753, "Create a compost pile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(754, "p", 81);
      \u0275\u0275element(755, "i", 82);
      \u0275\u0275text(756, "27 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(757, "p", 83);
      \u0275\u0275text(758, "Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc.. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(759, "div", 84)(760, "div", 23)(761, "a", 85);
      \u0275\u0275element(762, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "span", 97);
      \u0275\u0275element(764, "i", 88);
      \u0275\u0275text(765, "Social");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(766, "div", 23)(767, "a", 89)(768, "span");
      \u0275\u0275element(769, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(770, "a", 80)(771, "span");
      \u0275\u0275element(772, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(773, "div", 61)(774, "div", 62)(775, "div", 63)(776, "div", 64)(777, "span", 92);
      \u0275\u0275element(778, "i", 66);
      \u0275\u0275text(779, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(780, "div")(781, "a", 67);
      \u0275\u0275element(782, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "div", 69)(784, "a", 70)(785, "span");
      \u0275\u0275element(786, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(787, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "a", 72)(789, "span");
      \u0275\u0275element(790, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(791, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(792, "a", 74)(793, "span");
      \u0275\u0275element(794, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(795, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(796, "a", 76)(797, "span");
      \u0275\u0275element(798, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(799, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(800, "div", 78)(801, "h5", 79)(802, "a", 80);
      \u0275\u0275text(803, "Take a hike at a local park");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(804, "p", 81);
      \u0275\u0275element(805, "i", 82);
      \u0275\u0275text(806, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "p", 83);
      \u0275\u0275text(808, "Hiking involves a long energetic walk in a natural environment.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(809, "div", 84)(810, "div", 23)(811, "a", 85);
      \u0275\u0275element(812, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(813, "span", 87);
      \u0275\u0275element(814, "i", 88);
      \u0275\u0275text(815, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(816, "div", 23)(817, "a", 89)(818, "span");
      \u0275\u0275element(819, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(820, "a", 80)(821, "span");
      \u0275\u0275element(822, "i", 91);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(823, "div", 61)(824, "div", 62)(825, "div", 63)(826, "div", 64)(827, "span", 100);
      \u0275\u0275element(828, "i", 66);
      \u0275\u0275text(829, "medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(830, "div")(831, "a", 67);
      \u0275\u0275element(832, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(833, "div", 69)(834, "a", 70)(835, "span");
      \u0275\u0275element(836, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(837, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "a", 72)(839, "span");
      \u0275\u0275element(840, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275text(841, "Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(842, "a", 74)(843, "span");
      \u0275\u0275element(844, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275text(845, "Not Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(846, "a", 76)(847, "span");
      \u0275\u0275element(848, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275text(849, "View");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(850, "div", 78)(851, "h5", 79)(852, "a", 80);
      \u0275\u0275text(853, "Research a topic interested");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(854, "p", 81);
      \u0275\u0275element(855, "i", 82);
      \u0275\u0275text(856, "28 Jan 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(857, "p", 83);
      \u0275\u0275text(858, "Research a topic interested by listen actively and attentively.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(859, "div", 84)(860, "div", 23)(861, "a", 85);
      \u0275\u0275element(862, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(863, "span", 94);
      \u0275\u0275element(864, "i", 88);
      \u0275\u0275text(865, "Work");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(866, "div", 23)(867, "a", 89)(868, "span");
      \u0275\u0275element(869, "i", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(870, "a", 80)(871, "span");
      \u0275\u0275element(872, "i", 91);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(873, "div", 107)(874, "div", 108)(875, "div", 109)(876, "span");
      \u0275\u0275element(877, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(878, "ul", 111)(879, "li")(880, "a", 112);
      \u0275\u0275text(881, " 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(882, "li")(883, "a", 80);
      \u0275\u0275text(884, " 2 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(885, "li")(886, "a", 80);
      \u0275\u0275text(887, " 3 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(888, "li")(889, "a", 80);
      \u0275\u0275text(890, " 4 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(891, "span");
      \u0275\u0275element(892, "i", 113);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(893, "div", 114)(894, "div", 115)(895, "div", 116)(896, "div", 117)(897, "div", 118)(898, "div", 119)(899, "div", 2)(900, "h4");
      \u0275\u0275text(901, "Add New Note");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(902, "button", 120)(903, "span", 121);
      \u0275\u0275text(904, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(905, "div", 122)(906, "form")(907, "div", 19)(908, "div", 123)(909, "div", 124)(910, "label", 125);
      \u0275\u0275text(911, "Note Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(912, "input", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(913, "div", 123)(914, "div", 124)(915, "label", 125);
      \u0275\u0275text(916, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(917, "mat-select", 127);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_mat_select_ngModelChange_917_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
        return $event;
      });
      \u0275\u0275elementStart(918, "mat-option", 128);
      \u0275\u0275text(919, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(920, "mat-option", 129);
      \u0275\u0275text(921, "Recent1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(922, "mat-option", 130);
      \u0275\u0275text(923, "Recent2");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(924, "div", 131)(925, "div", 124)(926, "label", 125);
      \u0275\u0275text(927, "Tag");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(928, "mat-select", 132);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_mat_select_ngModelChange_928_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
        return $event;
      });
      \u0275\u0275elementStart(929, "mat-option", 133);
      \u0275\u0275text(930, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(931, "mat-option", 129);
      \u0275\u0275text(932, "Recent1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(933, "mat-option", 130);
      \u0275\u0275text(934, "Recent2");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(935, "div", 131)(936, "div", 124)(937, "label", 125);
      \u0275\u0275text(938, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(939, "mat-select", 132);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_mat_select_ngModelChange_939_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275elementStart(940, "mat-option", 133);
      \u0275\u0275text(941, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(942, "mat-option", 129);
      \u0275\u0275text(943, "Recent1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(944, "mat-option", 130);
      \u0275\u0275text(945, "Recent2");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(946, "div", 134)(947, "div", 135)(948, "label", 125);
      \u0275\u0275text(949, "Descriptions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(950, "ngx-editor", 136);
      \u0275\u0275element(951, "ngx-editor-menu", 137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(952, "p");
      \u0275\u0275text(953, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(954, "div", 138)(955, "button", 139);
      \u0275\u0275text(956, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(957, "button", 140);
      \u0275\u0275text(958, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(959, "div", 141)(960, "div", 115)(961, "div", 116)(962, "div", 117)(963, "div", 118)(964, "div", 119)(965, "div", 2)(966, "h4");
      \u0275\u0275text(967, "Edit Note");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(968, "div", 142)(969, "button", 120)(970, "span", 121);
      \u0275\u0275text(971, "\xD7");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(972, "div", 122)(973, "form")(974, "div", 19)(975, "div", 123)(976, "div", 124)(977, "label");
      \u0275\u0275text(978, "Note Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(979, "input", 143);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(980, "div", 123)(981, "div", 124)(982, "label", 125);
      \u0275\u0275text(983, "Assignee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(984, "mat-select", 132);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_mat_select_ngModelChange_984_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
        return $event;
      });
      \u0275\u0275elementStart(985, "mat-option", 133);
      \u0275\u0275text(986, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(987, "mat-option", 129);
      \u0275\u0275text(988, "Recent1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(989, "mat-option", 130);
      \u0275\u0275text(990, "Recent2");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(991, "div", 131)(992, "div", 124)(993, "label", 125);
      \u0275\u0275text(994, "Tag");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(995, "mat-select", 144);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_mat_select_ngModelChange_995_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
        return $event;
      });
      \u0275\u0275elementStart(996, "mat-option", 145);
      \u0275\u0275text(997, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(998, "mat-option", 145);
      \u0275\u0275text(999, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1e3, "mat-option", 145);
      \u0275\u0275text(1001, "Onhold");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1002, "div", 131)(1003, "div", 124)(1004, "label", 125);
      \u0275\u0275text(1005, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1006, "mat-select", 146);
      \u0275\u0275twoWayListener("ngModelChange", function NotesComponent_Template_mat_select_ngModelChange_1006_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
        return $event;
      });
      \u0275\u0275elementStart(1007, "mat-option", 147);
      \u0275\u0275text(1008, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1009, "mat-option", 148);
      \u0275\u0275text(1010, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1011, "mat-option", 149);
      \u0275\u0275text(1012, "Low");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1013, "div", 134)(1014, "div", 135)(1015, "label", 125);
      \u0275\u0275text(1016, "Descriptions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1017, "ngx-editor", 136);
      \u0275\u0275element(1018, "ngx-editor-menu", 137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1019, "p");
      \u0275\u0275text(1020, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1021, "div", 138)(1022, "button", 139);
      \u0275\u0275text(1023, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1024, "button", 140);
      \u0275\u0275text(1025, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1026, "div", 150)(1027, "div", 115)(1028, "div", 116)(1029, "div", 117)(1030, "div", 151)(1031, "span", 152);
      \u0275\u0275element(1032, "i", 153);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1033, "h4", 154);
      \u0275\u0275text(1034, "Are You Sure?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1035, "p", 155);
      \u0275\u0275text(1036, "Do you really want to delete this item, This process cannot be undone.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1037, "div", 156)(1038, "button", 157);
      \u0275\u0275text(1039, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1040, "button", 158);
      \u0275\u0275text(1041, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1042, "div", 159)(1043, "div", 115)(1044, "div", 116)(1045, "div", 117)(1046, "div", 118)(1047, "div", 119)(1048, "div", 160)(1049, "h4");
      \u0275\u0275text(1050, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1051, "p");
      \u0275\u0275text(1052, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1053, "div", 161)(1054, "button", 120)(1055, "span", 121);
      \u0275\u0275text(1056, "\xD7");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1057, "div", 122)(1058, "form")(1059, "div", 19)(1060, "div", 123)(1061, "div", 162)(1062, "h6");
      \u0275\u0275text(1063, "Take a hike at a local park");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1064, "p");
      \u0275\u0275text(1065, "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century. Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religions and also we achieve inner peace while we hike at a local park.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1066, "p", 163);
      \u0275\u0275element(1067, "i", 164);
      \u0275\u0275text(1068, " Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1069, "div", 165)(1070, "button", 139);
      \u0275\u0275text(1071, "Close");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 15 : -1);
      \u0275\u0275advance(70);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx.appSidebar === false));
      \u0275\u0275advance(832);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue4);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(25, _c1));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue6);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(26, _c1));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue7);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(27, _c1));
      \u0275\u0275advance(11);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(33);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue7);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(28, _c1));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue8);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(29, _c1));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue9);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c1));
      \u0275\u0275advance(11);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, DateRangePickerComponent, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotesComponent, [{
    type: Component,
    args: [{ selector: "app-notes", imports: [NgxEditorModule, MatSelectModule, FormsModule, DateRangePickerComponent, CommonModule], template: `<div class="page-header page-add-notes border-0  flex-sm-row flex-column">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Notes</h4>
      <h6 class="mb-0">Manage your notes</h6>
    </div>
  </div>
  <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
    <ul class="table-top-head">
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
      <li>
        <div class="search-set">
          <div class="search-input">
            <span class="btn-searchset"><i class="ti ti-search fs-14 feather-search ps-2"></i></span>
          <div class="dataTables_filter">
            <label> <input type="search" class="form-control form-control-sm py-0" placeholder="Search"></label>
          </div></div>
        </div>
    </ul>
    <div class="page-btn">
      <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#note-units"><i
          class="ti ti-circle-plus me-2"></i> Add Note</a>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xl-3 col-md-12 sidebars-right  section-bulk-widget">
    <div class="border rounded-3 bg-white p-3 theiaStickySidebar">
      <div class="mb-3 pb-3 border-bottom">
        <h4 class="d-flex align-items-center"><i class="ti ti-file-text me-2"></i>Notes List</h4>
      </div>
      <div class="border-bottom pb-3 ">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
          aria-orientation="vertical">
          <button class="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">
            <i class="ti ti-inbox me-2"></i>All Notes<span class="ms-2">1</span>
          </button>
          <button class="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
            <i class="ti ti-star me-2"></i>
            Important
          </button>
          <button class="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
            <i class="ti ti-trash me-2"></i>
            Trash
          </button>
        </div>
      </div>
      <div class="mt-3">
        <div class="border-bottom px-2 pb-3 mb-3">
          <h5 class="mb-2">Tags</h5>
          <div class="d-flex flex-column mt-2">
            <a href="javascript:void(0);" class="text-info mb-2">
              <span class="text-info me-2">
                <i class="fas fa-square square-rotate fs-10"></i>
              </span>
              Pending
            </a>
            <a href="javascript:void(0);" class="text-danger mb-2">
              <span class="text-danger me-2">
                <i class="fas fa-square square-rotate fs-10"></i>
              </span>
              Onhold
            </a>
            <a href="javascript:void(0);" class="text-warning mb-2">
              <span class="text-warning me-2">
                <i class="fas fa-square square-rotate fs-10"></i>
              </span>
              Inprogress
            </a>
            <a href="javascript:void(0);" class="text-success">
              <span class="text-success me-2">
                <i class="fas fa-square square-rotate fs-10"></i>
              </span>
              Done
            </a>
          </div>
        </div>
        <div class="px-2">
          <h5 class="mb-2">Priority</h5>
          <div class="d-flex flex-column mt-2">
            <a href="javascript:void(0);" class="text-warning mb-2">
              <span class="text-warning me-2">
                <i class="fas fa-square square-rotate fs-10"></i>
              </span>
              Medium
            </a>
            <a href="javascript:void(0);" class="text-success mb-2">
              <span class="text-success me-2">
                <i class="fas fa-square square-rotate fs-10"></i>
              </span>
              High
            </a>
            <a href="javascript:void(0);" class="text-danger">
              <span class="text-danger me-2">
                <i class="fas fa-square square-rotate fs-10"></i>
              </span>
              Low
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-9 budget-role-notes" [ngClass]="{'budgeted-role-notes': appSidebar === false}">
    <div class="bg-white rounded-3 d-flex align-items-center justify-content-between flex-wrap mb-4 p-3 pb-0">
      <div class="form-sort me-2 mb-3">
        <i data-feather="sliders" class="feather icon-sliders info-img"></i>
        <mat-select class="custom-mat-select select" placeholder="Sort by A-Z">
          <mat-option value="1">Sort by A-Z</mat-option>
          <mat-option value="1">Ascending </mat-option>
          <mat-option value="1">Descending</mat-option>
          <mat-option value="1">Recently Viewed </mat-option>
          <mat-option value="1">Recently Added</mat-option>
        </mat-select>
      </div>
      <div class="d-flex align-items-center">
        <app-date-range-picker/>
        <div class="search-set ms-3 mb-3">
          <div class="search-input">
            <span class="btn-searchset"><i class="ti ti-search fs-14 feather-search ps-2"></i></span>
          <div class="dataTables_filter">
            <label> <input type="search" class="form-control form-control-sm" placeholder="Search"></label>
          </div></div>
        </div>
      </div>
    </div>

    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade active show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        <div class="border-bottom mb-4 pb-4">
 
        </div>
        <div class="row">
          <div class="col-md-4 d-flex">
            <div class="card rounded-3 mb-4 flex-fill">
              <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between">
                  <span
                    class="badge bg-outline-success d-inline-flex align-items-center"><i
                      class="fas fa-circle fs-6 me-1"></i>High</span>
                  <div>
                    <a href="javascript:void(0);" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu notes-menu dropdown-menu-end">
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#edit-note-units"><span><i
                            data-feather="edit"></i></span>Edit</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><span><i
                            data-feather="trash-2"></i></span>Delete</a>
                      <a href="javascript:void(0);" class="dropdown-item"><span><i
                            data-feather="star"></i></span>Not Important</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#view-note-units"><span><i
                            data-feather="eye"></i></span>View</a>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Backup
                      Files EOD</a></h5>
                  <p class="mb-3 d-flex align-items-center text-dark"><i
                      class="ti ti-calendar me-1"></i>20 Jan 2024</p>
                  <p class="text-truncate line-clamb-2 text-wrap">Project files should
                    be took backup before end of the day.</p>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img src="./assets/img/profiles/avatar-05.jpg" alt="Profile"
                        class="img-fluid rounded-circle">
                    </a>
                    <span class="text-info d-flex align-items-center"><i
                        class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="me-2">
                      <span><i class="fas fa-star text-warning"></i></span>
                    </a>
                    <a href="javascript:void(0);">
                      <span><i class="ti ti-trash text-danger"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="card rounded-3 mb-4 flex-fill">
              <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between">
                  <span
                    class="badge bg-outline-danger d-inline-flex align-items-center"><i
                      class="fas fa-circle fs-6 me-1"></i>Low</span>
                  <div>
                    <a href="javascript:void(0);" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu notes-menu dropdown-menu-end">
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#edit-note-units"><span><i
                            data-feather="edit"></i></span>Edit</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><span><i
                            data-feather="trash-2"></i></span>Delete</a>
                      <a href="javascript:void(0);" class="dropdown-item"><span><i
                            data-feather="star"></i></span>Not Important</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#view-note-units"><span><i
                            data-feather="eye"></i></span>View</a>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <h5 class="text-truncate mb-1"><a
                      href="javascript:void(0);">Download Server Logs</a></h5>
                  <p class="mb-3 d-flex align-items-center text-dark"><i
                      class="ti ti-calendar me-1"></i>25 Jan 2024</p>
                  <p class="text-truncate line-clamb-2 text-wrap">Server log is a text
                    document that contains a record of all activity.</p>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img src="./assets/img/profiles/avatar-06.jpg" alt="Profile"
                        class="img-fluid rounded-circle">
                    </a>
                    <span class="text-success d-flex align-items-center"><i
                        class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="me-2">
                      <span><i class="fas fa-star text-warning"></i></span>
                    </a>
                    <a href="javascript:void(0);">
                      <span><i class="ti ti-trash text-danger"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="card rounded-3 mb-4 flex-fill">
              <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between">
                  <span
                    class="badge bg-outline-warning d-inline-flex align-items-center"><i
                      class="fas fa-circle fs-6 me-1"></i>Medium</span>
                  <div>
                    <a href="javascript:void(0);" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu notes-menu dropdown-menu-end">
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#edit-note-units"><span><i
                            data-feather="edit"></i></span>Edit</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><span><i
                            data-feather="trash-2"></i></span>Delete</a>
                      <a href="javascript:void(0);" class="dropdown-item"><span><i
                            data-feather="star"></i></span>Not Important</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#view-note-units"><span><i
                            data-feather="eye"></i></span>View</a>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Team
                      meet at Starbucks</a></h5>
                  <p class="mb-3 d-flex align-items-center text-dark"><i
                      class="ti ti-calendar me-1"></i>26 Jan 2024</p>
                  <p class="text-truncate line-clamb-2 text-wrap">Meeting all teamets
                    at Starbucks for identifying them all.</p>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img src="./assets/img/profiles/avatar-07.jpg" alt="Profile"
                        class="img-fluid rounded-circle">
                    </a>
                    <span class="text-warning d-flex align-items-center"><i
                        class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="me-2">
                      <span><i class="fas fa-star text-warning"></i></span>
                    </a>
                    <a href="javascript:void(0);">
                      <span><i class="ti ti-trash text-danger"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="card rounded-3 mb-4 flex-fill">
              <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between">
                  <span
                    class="badge bg-outline-success d-inline-flex align-items-center"><i
                      class="fas fa-circle fs-6 me-1"></i>High</span>
                  <div>
                    <a href="javascript:void(0);" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu notes-menu dropdown-menu-end">
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#edit-note-units"><span><i
                            data-feather="edit"></i></span>Edit</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><span><i
                            data-feather="trash-2"></i></span>Delete</a>
                      <a href="javascript:void(0);" class="dropdown-item"><span><i
                            data-feather="star"></i></span>Not Important</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#view-note-units"><span><i
                            data-feather="eye"></i></span>View</a>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Create
                      a compost pile</a></h5>
                  <p class="mb-3 d-flex align-items-center text-dark"><i
                      class="ti ti-calendar me-1"></i>27 Jan 2024</p>
                  <p class="text-truncate line-clamb-2 text-wrap">Compost pile refers
                    to fruit and vegetable scraps, used tea, coffee grounds etc..
                  </p>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img src="./assets/img/profiles/avatar-08.jpg" alt="Profile"
                        class="img-fluid rounded-circle">
                    </a>
                    <span class="text-warning d-flex align-items-center"><i
                        class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="me-2">
                      <span><i class="fas fa-star text-warning"></i></span>
                    </a>
                    <a href="javascript:void(0);">
                      <span><i class="ti ti-trash text-danger"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="card rounded-3 mb-4 flex-fill">
              <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between">
                  <span
                    class="badge bg-outline-danger d-inline-flex align-items-center"><i
                      class="fas fa-circle fs-6 me-1"></i>Low</span>
                  <div>
                    <a href="javascript:void(0);" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu notes-menu dropdown-menu-end">
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#edit-note-units"><span><i
                            data-feather="edit"></i></span>Edit</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><span><i
                            data-feather="trash-2"></i></span>Delete</a>
                      <a href="javascript:void(0);" class="dropdown-item"><span><i
                            data-feather="star"></i></span>Not Important</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#view-note-units"><span><i
                            data-feather="eye"></i></span>View</a>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Take a
                      hike at a local park</a></h5>
                  <p class="mb-3 d-flex align-items-center text-dark"><i
                      class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                  <p class="text-truncate line-clamb-2 text-wrap">Hiking involves a
                    long energetic walk in a natural environment.</p>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img src="./assets/img/profiles/avatar-09.jpg" alt="Profile"
                        class="img-fluid rounded-circle">
                    </a>
                    <span class="text-info d-flex align-items-center"><i
                        class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="me-2">
                      <span><i class="fas fa-star text-warning"></i></span>
                    </a>
                    <a href="javascript:void(0);">
                      <span><i class="ti ti-trash text-danger"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="card rounded-3 mb-4 flex-fill">
              <div class="card-body p-4">
                <div class="d-flex align-items-center justify-content-between">
                  <span
                    class="badge bg-outline-info d-inline-flex align-items-center"><i
                      class="fas fa-circle fs-6 me-1"></i>medium</span>
                  <div>
                    <a href="javascript:void(0);" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <div class="dropdown-menu notes-menu dropdown-menu-end">
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#edit-note-units"><span><i
                            data-feather="edit"></i></span>Edit</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#delete_modal"><span><i
                            data-feather="trash-2"></i></span>Delete</a>
                      <a href="javascript:void(0);" class="dropdown-item"><span><i
                            data-feather="star"></i></span>Not Important</a>
                      <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                        data-bs-target="#view-note-units"><span><i
                            data-feather="eye"></i></span>View</a>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <h5 class="text-truncate mb-1"><a
                      href="javascript:void(0);">Research a topic interested</a>
                  </h5>
                  <p class="mb-3 d-flex align-items-center text-dark"><i
                      class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                  <p class="text-truncate line-clamb-2 text-wrap">Research a topic
                    interested by listen actively and attentively.</p>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between border-top pt-3">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                      <img src="./assets/img/profiles/avatar-10.jpg" alt="Profile"
                        class="img-fluid rounded-circle">
                    </a>
                    <span class="text-success d-flex align-items-center"><i
                        class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="me-2">
                      <span><i class="fas fa-star text-warning"></i></span>
                    </a>
                    <a href="javascript:void(0);">
                      <span><i class="ti ti-trash text-danger"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
      aria-labelledby="v-pills-messages-tab">
      <div class="row">
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-success d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>High</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Backup
                    Files EOD</a></h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>20 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Project files should
                  be took backup before end of the day.</p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-05.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-info d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-danger d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>Low</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a
                    href="javascript:void(0);">Download Server Logs</a></h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>25 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Server log is a text
                  document that contains a record of all activity.</p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-06.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-success d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-warning d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>Medium</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Team
                    meet at Starbucks</a></h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>26 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Meeting all teamets
                  at Starbucks for identifying them all.</p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-07.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-warning d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-success d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>High</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Create
                    a compost pile</a></h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>27 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Compost pile refers
                  to fruit and vegetable scraps, used tea, coffee grounds etc..
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-08.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-warning d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-danger d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>Low</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Take a
                    hike at a local park</a></h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Hiking involves a
                  long energetic walk in a natural environment.</p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-09.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-info d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-info d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>medium</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a
                    href="javascript:void(0);">Research a topic interested</a>
                </h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Research a topic
                  interested by listen actively and attentively.</p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-10.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-success d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
      aria-labelledby="v-pills-settings-tab">
      <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-end">
          <a href="javascript:void(0);" class="btn btn-danger mb-4">
            <span> <i class="ti ti-trash f-20 me-2"></i> </span>
            Restore all
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-success d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>High</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Create
                    a compost pile</a></h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>27 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Compost pile refers
                  to fruit and vegetable scraps, used tea, coffee grounds etc..
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-08.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-warning d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Social</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-danger d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>Low</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a href="javascript:void(0);">Take a
                    hike at a local park</a></h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Hiking involves a
                  long energetic walk in a natural environment.</p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-09.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-info d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Personal</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="card rounded-3 mb-4 flex-fill">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  class="badge bg-outline-info d-inline-flex align-items-center"><i
                    class="fas fa-circle fs-6 me-1"></i>medium</span>
                <div>
                  <a href="javascript:void(0);" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu notes-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#edit-note-units"><span><i
                          data-feather="edit"></i></span>Edit</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#delete_modal"><span><i
                          data-feather="trash-2"></i></span>Delete</a>
                    <a href="javascript:void(0);" class="dropdown-item"><span><i
                          data-feather="star"></i></span>Not Important</a>
                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal"
                      data-bs-target="#view-note-units"><span><i
                          data-feather="eye"></i></span>View</a>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-truncate mb-1"><a
                    href="javascript:void(0);">Research a topic interested</a>
                </h5>
                <p class="mb-3 d-flex align-items-center text-dark"><i
                    class="ti ti-calendar me-1"></i>28 Jan 2024</p>
                <p class="text-truncate line-clamb-2 text-wrap">Research a topic
                  interested by listen actively and attentively.</p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between border-top pt-3">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-md me-2">
                    <img src="./assets/img/profiles/avatar-10.jpg" alt="Profile"
                      class="img-fluid rounded-circle">
                  </a>
                  <span class="text-success d-flex align-items-center"><i
                      class="fas fa-square square-rotate fs-10 me-1"></i>Work</span>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="me-2">
                    <span><i class="fas fa-star text-warning"></i></span>
                  </a>
                  <a href="javascript:void(0);">
                    <span><i class="ti ti-trash text-danger"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="row custom-pagination">
      <div class="col-md-12">
        <div class="paginations d-flex justify-content-end">
          <span><i class="fas fa-chevron-left"></i></span>
          <ul class="d-flex align-items-center page-wrap">
            <li>
              <a href="javascript:void(0);" class="active">
                1
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                2
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                3
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                4
              </a>
            </li>
          </ul>
          <span><i class="fas fa-chevron-right"></i></span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Note Unit -->
<div class="modal fade" id="note-units">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 ">
            <div class="page-title">
              <h4>Add New Note</h4>
            </div>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body custom-modal-body">
            <form>
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Note Title</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">User</label>
                    <mat-select [(ngModel)]="selectedValue4" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="Choose">
                      <mat-option value="Choose">Choose</mat-option>
                      <mat-option value="Recent1">Recent1</mat-option>
                      <mat-option value="Recent2">Recent2</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label">Tag</label>
                    <mat-select [(ngModel)]="selectedValue6" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="Select">
                      <mat-option value="Select">Select</mat-option>
                      <mat-option value="Recent1">Recent1</mat-option>
                      <mat-option value="Recent2">Recent2</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label">Priority</label>
                    <mat-select [(ngModel)]="selectedValue7" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="Select">
                      <mat-option value="Select">Select</mat-option>
                      <mat-option value="Recent1">Recent1</mat-option>
                      <mat-option value="Recent2">Recent2</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3 summer-description-box notes-summernote">
                    <label class="form-label">Descriptions</label>
                    <ngx-editor [editor]="editor">
                      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                      </ngx-editor-menu>
                   </ngx-editor>
                    <p>Maximum 60 Characters</p>
                  </div>
                </div>

              </div>

              <div class="modal-footer-btn mt-0">
                <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Note Unit -->

<!-- Note Unit -->
<div class="modal fade" id="edit-note-units">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 ">
            <div class="page-title">
              <h4>Edit Note</h4>
            </div>
            <div class=" edit-note-head d-flex align-items-center">
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div class="modal-body custom-modal-body">
            <form>
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label>Note Title</label>
                    <input type="text" class="form-control" placeholder="Meet Lisa to discuss project details">
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Assignee</label>
                    <mat-select [(ngModel)]="selectedValue7" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="Select">
                      <mat-option value="Select">Choose</mat-option>
                      <mat-option value="Recent1">Recent1</mat-option>
                      <mat-option value="Recent2">Recent2</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label">Tag</label>
                    <mat-select [(ngModel)]="selectedValue8" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="Onhold">
                      <mat-option value="Onhold">Onhold</mat-option>
                      <mat-option value="Onhold">Onhold</mat-option>
                      <mat-option value="Onhold">Onhold</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label">Priority</label>
                    <mat-select [(ngModel)]="selectedValue9" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"
                      placeholder="High">
                      <mat-option value="High">High</mat-option>
                      <mat-option value="Medium">Medium</mat-option>
                      <mat-option value="Low">Low</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3 summer-description-box notes-summernote">
                    <label class="form-label">Descriptions</label>
                    <ngx-editor [editor]="editor1">
                      <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >
                      </ngx-editor-menu>
                   </ngx-editor>
                    <p>Maximum 60 Characters</p>
                  </div>
                </div>

              </div>


              <div class="modal-footer-btn mt-0">
                <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Note Unit -->

<!-- Delete Unit -->
<div class="modal fade" id="delete_modal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Are You Sure?</h4>
            <p class="text-gray-6 mb-0 fs-16">Do you really want to delete this item, This process cannot be undone.</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Yes Delete</button>
            </div>						
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Delete Unit -->

<!-- View Unit -->
<div class="modal fade" id="view-note-units">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 ">
            <div class="page-title edit-page-title">
              <h4>Notes</h4>
              <p>Personal</p>
            </div>
            <div class=" edit-noted-head d-flex align-items-center">
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div class="modal-body custom-modal-body">
            <form>
              <div class="row">
                <div class="col-12">
                  <div class="edit-head-view">
                    <h6>Take a hike at a local park</h6>
                    <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the
                      countryside.
                      Walking for pleasure developed in Europe during the eighteenth century.
                      Religious pilgrimages have existed much longer but they involve walking long
                      distances for a spiritual purpose associated with specific religions and
                      also
                      we achieve inner peace while we hike at a local park.</p>

                    <p class="badged low"><i class="fas fa-circle"></i> Low</p>
                  </div>
                  <div class="modal-footer-btn edit-footer-menu mt-0">
                    <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /View Unit -->` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesComponent, { className: "NotesComponent", filePath: "src/app/features/pages/application/notes/notes.component.ts", lineNumber: 15 });
})();
export {
  NotesComponent
};
//# sourceMappingURL=chunk-ANVLPZLY.js.map
